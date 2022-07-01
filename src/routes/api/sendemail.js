import sgMail from "@sendgrid/mail";
sgMail.setApiKey("TO DO KEY")

export async function post(body) {
    console.log("BACK-sendEmail")
    const msg = {
      to: body.Receiver,
      from: body.Sender,
      subject: body.Object,
      text: body.Text,
      html: body.Html,
    };
    console.log("Email submitted");
    const output = await sgMail.send(msg);
return {
    return {
        status: 200,
        body: {
            message:"OK"
        }
    
    },
};
}