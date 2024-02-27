import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import { activationTemplate } from "./emailTemplates/activation";
import { forgotPasswordTemplate } from "./emailTemplates/forgotPassword";


/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                                SEND EMAIL TO USER                                                |
 * --------------------------------------------------------------------------------------------------------------------
 * Function to send an email to the user, with a subject and a HTML body. 
 *
 * @return  
 */
export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  // Extract the senders email & passcode
  const { SMPT_EMAIL, SMPT_EMAIL_CODE } = process.env;
  // const { SMPT_USER, SMPT_USER_CODE } = process.env;

  // Create the transport to send the email
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMPT_EMAIL,
        pass: SMPT_EMAIL_CODE,
      },
    });

// For testing purpose, use the below for testing email sending functions. 
  // var transport = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: SMPT_USER,
  //     pass: SMPT_USER_CODE,
  //   },
  // });

  // Send the email to user using transport from nodemailer
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

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                       COMPILE ACTIVATION EMAIL TO USER                                           |
 * --------------------------------------------------------------------------------------------------------------------
 * Simple function to compiling the template using handleBar, passing the name of user and link for 
 * activating or resetting password. 
 *
 * @param {string} name  
 * @param {string} url  
 * @return  
 */
export function compileActivationTemplate(name: string, url: string) {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });

  return htmlBody;
}


/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                     COMPILE FORGOT PASSWORD EMAIL TO USER                                        |
 * --------------------------------------------------------------------------------------------------------------------
 * Simple function to compiling the template using handleBar, passing the name of user and link for 
 * activating or resetting password. 
 * 
 * @param {string} name  
 * @param {string} url  
 * @return  
 */
export function compileForgotPasswordTemplate(name: string, url: string) {
  const template = Handlebars.compile(forgotPasswordTemplate);
  const htmlBody = template({
    name,
    url,
  });

  return htmlBody;
}