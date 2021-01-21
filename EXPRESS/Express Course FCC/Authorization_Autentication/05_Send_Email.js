--------NODEMAILER----
	1. Instalamos el package:
		npm i nodemailer
En la carpeta utils:
	2. Creamos el archivo email.js
	3. const nodemailer = require('nodemailer');

Options: pasamos todo lo que se necesita para armar el email, como el la direccion de email, el tema, el contenido, etc

	4. Crear un transporter: Es el servicio que va a mandar el email, ej gmail. ***En el Gmail debemos configurar la opcion less secure app option***
	5. Definir el email options
	6. Enviar el email con nodemailer


const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1. Crear un transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME, //la sacamos de config.env
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //2. Definir opciones para el email
  const mailOptions = {
    from: 'Testeando Juan Manuel <hola@hola.com>',
    to: options.email, //la direccion de quien recibe
    subject: options.subject, //el tema
    text: options.message, //el mensage
    // html: podemos especificar el html property, seria convertir el mensaje a html
  };
  //3. Enviar el email
  await transporter.sendMail(mailOptions); //devuelve una promesa
};

module.exports = sendEmail;

*****************************************
SERVICIOS PARA ENVIAR EMAIL:
	- SENDGRID
	- MAILGUN
*****************************************

https://mailtrap.io/ PODEMOS ENVIAR MAILS FAKE PARA PROBAR LA APLICACION


