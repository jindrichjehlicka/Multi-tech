const nodemailer = require('nodemailer');

module.exports = {
    post(req, res) {
        const output = `
       <h4>Contact details</h4>
    <ul>
       <li>Name: ${req.body.name}</li>
       <li>Company: ${req.body.company}</li>
       <li>Email: ${req.body.email}</li>
       <li>Phone: ${req.body.phone}</li>
    </ul>

    <h3>
    Message:
    </h3>    
    <p>${req.body.message}</p>
    `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'testing.jayjay@gmail.com', // generated ethereal user
                pass: 'Testing1234' // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Multi-tech support " <jindra.jehlicka@gmail.com>', // sender address
            to: 'jindrichjehlicka@gmail.com', // list of receivers
            subject: req.body.subject, // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.status(200).send('OK')
            res.status(500).send('error')
        });
    }
}