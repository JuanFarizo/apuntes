--Building Tour Page--

En viewRoutes.js:

	router.get('/tour/:slug', viewsController.getTour);


En viewsController.js:

	exports.getTour = catchAsync(async (req, res) => {
	  const tour = await (await Tour.findOne({ slug: req.params.slug })).populate({
	    path: 'reviews',
	    fields: 'review rating user',
	  });
	  res.status(200).render('tour', {
	    title: tour.name,
	    tour,
	  });
	});


Aplicamos mixin, le pasamos como argumento (como si fuera una funcion)
En tour.pug:
