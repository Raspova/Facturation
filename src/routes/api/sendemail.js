//const nodemailer = require('nodemailer')

export async function post({request}) {
    console.log("BACK-sendEmail")
    const msg = {
        to: request.body.Receiver,
        from: request.body.Sender,
        subject: request.body.Object,
        text: request.body.Text,
        html: request.body.Html,
    };
    console.log("Email submitted");
    //const output = await sgMail.send(msg);
    return {
        status: 200,
        body: {
            message:"OK"
        }
    }
}