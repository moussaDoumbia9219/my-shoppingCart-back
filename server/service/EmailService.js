class EmailService {
  sendEmail = (user, token) => {;
    console.log(`[Email Service.sendEmail] to login as ${user.email} go to http://localhost:3000/auth/${token}`);
    return token;
  }
}

const EmailServiceSingleton = new EmailService();

export default EmailServiceSingleton;