---
title: 'Sending Emails with Nodemailer Explained'
date: '2022-10-04'
src: '/images/blog/japan.jpg'
alt: 'Sending Emails with Nodemailer Explained'
top: true
recent: false
category: 'backend'
---
The idea of this article is to explain how to use
<!-- end -->
The idea of this article is to explain how to use the Node.js module Nodemaile, the next in our series of  “how to send emails with different frameworks and technologies” posts. You may also want to check our article with more options for sending emails with Node.js.

We will focus mainly on SMTP and HTML to help you prepare and test email messages to send out with your Node.js backend using Nodemailer and we’ll also review its capabilities.

Nodemailer’s creators say that it makes sending an email a piece of cake. Let’s see if they are talking about cooking or eating 🙂  

What is Nodemailer 
Nodemailer is a single module with zero dependencies for Node.js, designed for sending emails.

Its main features include (but are not limited to):
- Platform-independence
- Security, in particular, email delivery with TLS/STARTTLS and DKIM email authentication
- Unicode support
- HTML content and embedded image attachments
- Different transport methods besides SMTP support. 

Nodemailer’s package.json file, other main .js files, folders and code can be found on their Github page.

## How to use Nodemailer: From Installation

The only thing required to start using Nodemailer module is the server-side tool Node.js version 6.0 or above. You should also install Nodemailer itself but it’s really easy with the npm  or Yarn package manager.

Execute the following command in the Node.js command prompt:

**`npm install nodemailer --save`**

or

**`yarn add nodemailer`**

Once completed, include it into your web application with the following code:

**`var nodemailer = require('nodemailer');`**

or this if you are using ES modules:

**`import nodemailer from ‘nodemailer’;`**

## How to send emails with Nodemailer?

For your app to send transactional and other types of emails with Nodemailer, there are three main steps. 

Create Nodemailer transporter 
SMTP (Simple Mail Transfer Protocol) is the most common transporter, and below we will describe it in more detail, as well as demonstrate some examples. 

But there is a list of other available options:
- Built-in transports
- sendmail, a regular sendmail command for simple messages. It’s similar to the mail() function in PHP
SES , to handle large traffic of emails by sending them using Amazon SES 
- stream, a buffer for testing purposes, to return messages.
- External transport. To put it simply, you can create your own transportation method.
- For more details, refer to the Nodemailer documentation.

With SMTP, everything is pretty straightforward. Set host, port, authentication details and method, and that’s it.

It’s also useful to verify that SMTP connection is correct at this stage: add verify(callback) call to test connection and authentication.

```
transporter.verify(function(error, success) {
  if (error) {
        console.log(error);
  } else {
        console.log('Server is ready to take our messages');
  }
});
```

For further testing instructions review the below “How to test emails with Mailtrap Email Sandbox?” section.

## Set Nodemailer message options
At this point, we should specify the email sender, receiver, and the content of the message. Remember, Unicode is supported, so you can include emojis, even in the subject line! 

To send a text formatted as HTML, no extra attributes are required, just put your HTML body into the message with an html attribute. For advanced templates, you can add attachments and embed images.

Let’s take a look at this example of simple message options first:

**`var mailOptions = {`**
    **`from: '"Example Team" <from@example.com>',`**
    **`to: 'user1@example.com, user2@example.com',`**
    **`subject: 'Nice Nodemailer test',`**
    **`text: 'Hey there, it’s our first message sent with Nodemailer ;) ',`**
    **`html: 'Hey there! This is our first message sent with Nodemailer'`**
**`};`**

## Deliver a message with sendMail()
Once we created a transporter and configured a message, we can send it using the sendMail() method:

**`transport.sendMail(mailOptions, (error, info) => {`**
        **`if (error) {`**
            **`return console.log(error);`**
        **`}`**
        **`console.log('Message sent: %s', info.messageId);`**
**`});`**