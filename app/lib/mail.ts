import nodemailer from "nodemailer";

// Function to trigger the email notification to user
export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  // Extract the senders email & pass
  const { SMPT_EMAIL, SMPT_EMAIL_CODE } = process.env;
  const { SMPT_USER, SMPT_USER_CODE } = process.env;

  // create transport
  //   const transport = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: SMPT_EMAIL,
  //       pass: SMPT_EMAIL_CODE,
  //     },
  //   });
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: SMPT_USER,
      pass: SMPT_USER_CODE,
    },
  });

  // Send the email
  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (e) {
    console.log(e);
  }
}
