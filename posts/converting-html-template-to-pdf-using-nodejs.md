---
title: 'Converting HTML template to PDF using NodeJs'
date: '2022-10-01'
src: '/images/blog/japan.jpg'
alt: 'Converting HTML template to PDF using NodeJs'
top: false
recent: false
category: 'backend'
---
Its has always been a challenge for many developers
<!-- end -->
Its has always been a challenge for many developers to generate PDF from html on server side.

There are scenarios like where we need to generate a PDF invoice for a customer, save it on server as well as email them the PDF.

## How is this possible?
It was a pickle for me till I came to know about puppeteer.

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the Dev Tools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

Well, to be true puppeteer is way worth more than just creating PDF. Its for you to explore, for this tutorial we are going to use it just to create a PDF of an HTML template invoice.

### For ease of beginners I am using a simple invoice html template I found on GitHub.
We’ll be using some Node packages like handlebars and puppeteer obviously.

I am using v12.13.0 of NodeJs. You can use 10+ version for ease of development.

I am assuming readers have basic knowledge of NodeJs to setup a basic project using npm init if not be a good student and google it.

Now its time to install dependencies we need. Install both handlebars and puppeteer in your node project using the command below.