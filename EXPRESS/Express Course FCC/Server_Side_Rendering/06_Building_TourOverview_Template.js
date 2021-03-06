Building Tour Template

en viewsController:
	const Tour = require('../models/tourModel');
	const catchAsync = require('../utils/catchAsync');

	exports.getOverview = catchAsync(async (req, res, next) => {
	  //1. Get tour data from collection
	  const tours = await Tour.find();
	  //2. Render template usando tour data de 1.
	  res.status(200).render('overview', {
	    title: 'Todos los Tours',
	    tours, //es el equivalente a decir tours: tours
	  });
	});


en overview.pug:
extends base

block content
extends base

block content
  main.main
    .card-container

      each tour in tours
        .card
          .card__header
            .card__picture
              .card__picture-overlay &nbsp;
              img.card__picture-img(src=`img/tours/${tour.imageCover}`, alt=`${tour.imageCover}`)
            h3.heading-tertirary
              span= tour.name

          .card__details
            h4.card__sub-heading= `${tour.difficulty} ${tour.duration}-dias tour`
            p.card__text= tour.summary
            .card__data
              svg.card__icon
                use(xlink:href='img/icons.svg#icon-map-pin')
              span=tour.startLocation.description
            .card__data
              svg.card__icon
                use(xlink:href='img/icons.svg#icon-calendar')
              span= tour.startDates[0].toLocaleString('en-us', {month: 'long', year: 'numeric'})
            .card__data
              svg.card__icon
                use(xlink:href='img/icons.svg#icon-flag')
              span= `${tour.locations.length} Paradas`
            .card__data
              svg.card__icon
                use(xlink:href='img/icons.svg#icon-user')
              span= `${tour.maxGroupSize} Personas`

          .card__footer
            p
              span.card__footer-value= `$${tour.price}`
              | 
              span.card__footer-text per person
            p.card__ratings
              span.card__footer-value= tour.ratingsAverage.toFixed(1)
              | 
              span.card__footer-text= `rating ${tour.ratingsQuantity}`
            a.btn.btn--green.btn--small(href=`/tours/${tour.slug}`) Details
            //- Empezar la ruta con / en /tours/${tour.slug}` se llama relative URL. Agregara esa URL a la URL luego del hostname