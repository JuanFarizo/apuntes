----USER MODEL----

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El usuario debe tener un nombre'],

    trim: true,
    maxlength: [40, 'No puede exceder los 40 o mas caracteres'],
    minlength: [4, 'Puede tener 4 o más caracteres'],
  },
  email: {
    type: String,
    required: [true, 'El usuario debe tener un mail'],
    unique: [true, 'Ya existe un usuario con ese mail'],
    lowercase: true,
    validate: [validator.isEmail, 'Ingrese un email valido'], //Usamos el package validator
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Ingrese un password'],
    minlength: [8, 'Puede tener 8 o más caracteres'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'confirme su password'],
    validate: {
      //Solo funciona on CREATE and SAVE!!! No funcionaria con findOneAndUpdate
      validator: function (el) {
        return el === this.password; //Siempre debe retornar true o false
      }, //Es un callaback que sera llamada cuando el nuevo documento es creado
      message: 'Los passwords no son iguales',
    },
  },
  passwordChangedAt: Date //Se utiliza para ver cuando cambia el password el usuario
});
//Encriptamos entre el momento en que reciimos la data y lo que seria antes de guardarla
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); //Si password no fue modificado se sigue al proximo middleware

  this.password = await bcrypt.hash(this.password, 12); //el int que pasamos es la intensidad de uso del CPU
  //Devuelve una promesa por lo que debemos usar el await
  this.passwordConfirm = undefined; //Asi no queda persistente en la DB solo lo usamos para verificar
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassowrd
) {
  return await bcrypt.compare(candidatePassword, userPassowrd); //bcrypt tiene un metodo llamado compare para comparar el password plano con el hasheado
  //this Apunta al documento actual pero al estar el select:false en password no tenemos acceso
};

userSchema.methods.changePasswordAfter = function (JWTtimestamp) {
  if (this)
  return false;
}

const User = mongoose.model('User', userSchema);

module.exports = User;



-------------------------------
MANAGING PASSWORDS
-------------------------------
1. Validando si confirmpassword es igual a password, en userModel:

	passwordConfirm: {
    type: String,
    required: [true, 'confirme su password'],
    validate: {
      //Solo funciona on CREATE and SAVE!!! No funcionaria con findOneAndUpdate
      validator: function (el) {
        return el === this.password; //Siempre debe retornar true o false
      }, //Es un callaback que sera llamada cuando el nuevo documento es creado
      message: 'Los passwords no son iguales',
    },
  },

  2. Encriptando el password. Se hace en el userModel:
Para lo cual vamos a usar mongooseMiddleware en este caso un pre.save().

Usamos para hashing bcrypt
	npm i bcryptjs

const bcrypt = require('bcryptjs');



//Encriptamos entre el momento en que reciimos la data y lo que seria antes de guardarla
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next(); //Si password no fue modificado se sigue al proximo middleware

    this.password = await bcrypt.hash(this.password, 12) //el int que pasamos es la intensidad de uso del CPU
    //Devuelve una promesa por lo que debemos usar el await
    this.passwordConfirm = undefined; //Asi no queda persistente en la DB solo lo usamos para verificar
    next();
})
