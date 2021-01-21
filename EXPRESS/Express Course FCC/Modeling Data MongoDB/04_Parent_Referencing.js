-------PARENT REFERENCING-------

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'El review no puede estar vacio'], //EL PASAMOS EL ERRO STRING
      maxlength: [150, 'No puede exceder los 150 o mas caracteres'],
    },
    rating: {
      type: Number,
      default: 1,
      min: [1, 'Rating deebe ser mas de 1.0'],
      max: [5, 'Rating debe ser 5 o menos'],
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    users: [
      {
        type: mongoose.Schema.ObjectId, //El typo es un objeto Schema de moongoose por id
        ref: 'User', //La referencia es user,
        required: [true, 'El review debe pertener a un usuario'],
      },
    ],
    tours: [
      {
        type: mongoose.Schema.ObjectId, //El typo es un objeto Schema de moongoose por id
        ref: 'Tour', //La referencia es tour,
        required: [true, 'Review debe pertenecer a un tour'],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


//MIDDLEWARE
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'tours',
    select: 'name', //Exceptuamos estos campos de que aparezcan al hacer la query
  }).populate({
    path: 'users',
    select: 'name photo',
  });
  next();
});

HACEMOS UN DOBLE POPULATE PARA TRAER  EL NOMBRE DEL TOUR COMO EL USUARIO QUE HICE EL REVIEW

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;