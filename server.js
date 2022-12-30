const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")

dotenv.config();
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

const port = process.env.PORT

app.listen(port, () => console.log(`Server Running on port ${port}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD
  },
});

router.post("/contact", (req, res) => {
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email;
  const message = req.body.message;

  /* first name and email are required for the form to submit successfully
  if there's no message, form submission will not be successful as well */

  if(!first_name && !email) return res.json({code: 401, message: "First name and Email address is required"})
  if(!message) return res.json({code: 401, message: "Message cannot be empty"})

  const mailOptions = {
    from: `${first_name} ${last_name}`,
    to: process.env.USER_EMAIL, 
    subject: `Contact Form Submission from ${first_name}`,
    html: `<p>Name: ${first_name} ${last_name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
   contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent Successfully" });
    }
  });
});