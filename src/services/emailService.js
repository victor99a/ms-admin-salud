const emailjs = require('@emailjs/nodejs');
require('dotenv').config();

const sendResetEmail = async (toEmail, name) => {
  if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PRIVATE_KEY) {
    throw new Error("Faltan credenciales de EmailJS");
  }

  const resetLink = `${process.env.FRONTEND_URL}/reset-password?email=${toEmail}`;
  
  const templateParams = {
    to_email: toEmail,
    to_name: name,
    reset_link: resetLink
  };

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return { success: true, status: response.status };
  } catch (error) {
    throw new Error(`Fallo al enviar email: ${error.text || error.message}`);
  }
};

module.exports = { sendResetEmail };