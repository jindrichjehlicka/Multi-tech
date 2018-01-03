const nodemailer = require('nodemailer');

module.exports = {
    post(req, res) {
        const output = `
        <h3>New user just registered!</h3>
       <h4>User details</h4>
       <ul>      
       <li><b>Email:</b> ${req.body.email}</li>
       <li><b>Mine name:</b> ${req.body.mine}</li>      
        </ul>
        <h4>Please add this user's purchased products to his account!</h4>
        <br><br><br><br>
        
        `;

    
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
            from: '"Multi-tech registration " <jindra.jehlicka@gmail.com>', // sender address
            to: 'jindrichjehlicka@gmail.com', // list of receivers
            subject: 'New user just registered', // Subject line
            text: 'Hello world', // plain text body
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