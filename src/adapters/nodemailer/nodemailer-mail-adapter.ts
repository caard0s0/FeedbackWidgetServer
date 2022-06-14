import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8278cf51190b38",
      pass: "2880faea7785b8"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
            from: 'Feedget team <oi@feedget.com>',
            to: 'Vinicius Cardoso <vinicardoso216@gmail.com>',
            subject,
            html: body,
        });
    };
}