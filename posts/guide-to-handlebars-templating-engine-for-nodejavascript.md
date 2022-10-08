---
title: 'Guide to Handlebars: Templating Engine for Node/JavaScript'
date: '2022-10-03'
src: '/images/blog/japan.jpg'
alt: 'Guide to Handlebars: Templating Engine for Node/JavaScript'
top: false
recent: false
category: 'backend'
---
In this article, we are going to take a look at
<!-- end -->
## Introduction

In this article, we are going to take a look at how to use the Handlebars template engine with Node.js and Express. We'll cover what template engines are and how Handlebars can be used to create Server Side Rendered (SSR) web applications.

We will also discuss how to configure Handlebars with the Express.js framework and how to use built-in helpers to create dynamic pages. Finally, we will be taking a look at how to develop a custom helper when needed.

## What is a Template Engine?

Back in the '90s when the internet was introduced to the world, it was mostly used for scientific purposes such as publishing research papers and as a communication channel between universities and scientists. Most of the webpages back then were static. A static web page is the same for every user and does not change on a per user basis. If anything is to be changed on a page, it would have been done manually.

In the modern world, things are much more interactive and tailored to each user. Today, almost everyone has access to the internet. Most of the web apps today are dynamic. For example, on Facebook you and I will see a very different news feeds when logged in. For each person, the page will follow the same template (i.e. sequential posts with usernames above them), but the content will be different.

This is the work of a template engine - the template for the news feed is defined and then, based on the current user and the query to the database, the template is populated with received content.

We can use template engines in both the backend and front-end. If we use a template engine in the backend to generate the HTML, we call that Server-Side Rendering (SSR).

Handlebars
Handlebars is popular for both back-end and front-end templating. For example, the popular front-end framework Ember uses Handlebars as the templating engine.

Handlebars is an extension of the Mustache template language, which is mostly focused on simplicity and minimal templating.

Using Handlebars with Node.js
To get started, create an empty folder, open the command prompt inside that folder, and then run npm init -y to create an empty Node.js project with default settings.

Before starting, we need to install the required Node.js libraries. You can install the express and express-handlebars modules.

Note: When using Handlebars server-side, you'll likely use a helper module like express-handlebars that integrates Handlebars with your web framework. In this article we'll be focusing mostly on the templating syntax, which is why we're using express-handlebars, but in case you're handling the template compilation and rendering yourself, you'll want to check out the compilation API reference as well.

Then, let's recreate the default Handlebars directory structure.

The layouts folder inside the views folder will contain the layouts or the template wrappers. Those layouts will contain the HTML structure, style sheets, and scripts that are shared between templates.

The main.hbs file is the main layout. The home.hbs file is an example Handlebars template that we are going to build upon.

We will add more templates and folders as we continue.

In our example we'll be using one script to keep this simple.

## Handlebars Language Features
In order to showcase some of the Handlebars features, we'll be building a social media feed. The feed will pull data from a simple array, simulating a database.

The feed will contain posts with images and comments. If there are no comments on an image - a "Be the first to comment on this post" message will appear.

## Passing Parameters to Templates

Now, let's remove these hardcoded values from the page itself and pass them from the script to the page.

## Using Conditions

Since we have conditional logic, i.e. show the comments if they're present and a message if they're not.

## Using Loops

Since a post can contain multiple comments, we'll need a loop to get through them all and render them.

## Using Partial

Pretty much all web pages contain different sections. On a basic level, these are the Header, Body, and Footer sections. Since the Header and Footer are typically shared between many pages, having this in all web pages will soon become extremely annoying and simply redundant.

Thankfully, we can use Handlebars to divide these sections in templates and simply include these templates as "partials" in pages themselves.

## Conclusion

In this article, we covered the basics of Handlebars - a templating engine for Node.js and front-end JavaScript. Using Handlebars, we can create dynamic webpages that render on the server side or client side. Using Handlebars' conditionals, loops, partials, and custom helper functions, our web pages become more than just static HTML.