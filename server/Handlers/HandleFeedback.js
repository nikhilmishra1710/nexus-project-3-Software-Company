const nodemailer = require("nodemailer");
const Feedback = require("../models/Feedback");

const emailTemplate = (name, email, message) => {
    return `
    <h1>New Feedback Received</h1>
    <h2>Sender: ${name}</h2>
    <h2>Email: ${email}</h2>
    <span>
    Message:
    <p>${message}</p>
    </span>
    `;
};

const emailTemplateUser = (name) => {
    return `
    Thank you, ${name}
    We have recieved your feedback. We will contact you soon!
    Till then surf the website for more information.
    `;
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const handleFeedback = async (req, res) => {
    try {
        const feedback = req.body;
        console.log(feedback);
        const newFeedback = new Feedback(feedback);
        await newFeedback.save();
        const mailOptions = await transporter.sendMail({
            from: process.env.EMAIL,
            to: feedback.email,
            subject: "Your Feedback has been Received",
            html: emailTemplateUser(feedback.name, feedback.email, feedback.message),
        });

        console.log("Email sent: ", mailOptions.messageId);

        const mailAdmin = await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.ADMINMAIL,
            subject: "New feedback has been Received",
            html: emailTemplate(feedback.name, feedback.email, feedback.message),
        });
        console.log("Email sent: ", mailAdmin.messageId);
        res.send("Feedback received");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = handleFeedback;
