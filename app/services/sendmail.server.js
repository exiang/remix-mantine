import { envVal } from 'env-bool';
import {convert as convertHtml2Text} from 'html-to-text';
import mailer from "~/utils/nodemailer.server";
import mailgun from "~/utils/mailgun.server";

// sendMail will auto read `SENDMAIL_METHOD` to decide to send thru mailgun api or smtp
export default async function sendMail({from, to, subject, htmlBody, textBody}){
    //console.log('sendMail called.', ' from:', from, ' to:', to, ' subject:', subject, ' htmlBody:', htmlBody);

    if(textBody === undefined)
    {
      textBody = convertHtml2Text(htmlBody, {wordwrap: 200});
    }

    let result;
    let returnData;
    //console.log('method:', process.env.SENDMAIL_METHOD);
    if(process.env.SENDMAIL_METHOD === 'mailgunApi')
    {
      const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});
      try{
          result = await mg.messages.create('mailgun.emanyan.com', {
              from: from,
              to: to,
              subject: subject,
              text: textBody,
              html: htmlBody
          })
          //console.log('mailgunApi', result);
          returnData = {status: (result?.status===200?'success':'fail'), messageId: result?.id, msg:result?.message, result:result};
          //console.log(returnData);
          return returnData;
      }
      catch(err)
      {
          returnData = {status: 'fail', msg: err, result:result};
          return returnData;
      }
    }
    else
    {
      const transporter = mailer.createTransport({
          port: process.env.SMTP_PORT,
          host: process.env.SMTP_HOST,
          auth: {
              user: process.env.SMTP_USERNAME,
              pass: process.env.SMTP_PASSWORD,
          },
          secure: envVal(process.env.SMTP_SECURE),
          //requireTLS: true
      });

      result = await transporter.sendMail({
          from: from,
          to: to,
          subject: subject,
          text: textBody,
          html: htmlBody
      });
      //console.log('smtp', result);
      returnData = {status: 'success', messageId: result?.messageId, result:result};
      return returnData;
    }
    
    
}

export function verifySmtpServer()
{
  transporter.verify(function (error, success) {
    if (error) {
      //console.log('error', error);
      return false;
    } else {
      //console.log("Server is ready to take our messages");
      return true;
    }
  });
}