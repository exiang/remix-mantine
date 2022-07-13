const formData = require('form-data');
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
export default mailgun;