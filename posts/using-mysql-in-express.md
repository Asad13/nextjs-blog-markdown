---
title: 'Using MySQL In Express'
date: '2022-10-01'
src: '/images/blog/japan.jpg'
alt: 'Using MySQL In Express'
top: false
recent: false
category: 'backend'
---
An important aspect of creating web applications is
<!-- end -->
## Introduction

An important aspect of creating web applications is learning how to manage data. In a previous article I showed how user submitted data can be stored in memory using the Express framework. This of course is not best practice due to all information being lost whenever the server goes down. Two popular options for storing data in web applications are SQL which stores information in tables that relate to each other, and NoSQL which stores data in key values that stand on their own. In this blog post I will be covering how to create a simple Express application that utilizes SQL to store data. We will be using a relational database management system called MySQL to do so.

## Creating Our Database

Because the mascot of MySQL is a dolphin I thought our application might be a form users use to create dolphins. Once this form is completed the created dolphins are displayed on an index page. If you are a Linux user and are new to MySQL feel free to read my article on setting up MySQL in Ubuntu. The first step after we have MySQL successfully installed is creating our database that our app will interact with. To do this we will use the MySQL command line client.

Once this is done you should see a confirmation that the selected database has changed. Now it’s time to create the table that will store information regarding the dolphins you create. We will call this table ‘dolphins’. Our dolphins are going to be pretty basic and only have a name, an age, and a mood.

You should see another confirmation message. You can now exit the MySQL command line client by entering exit. Now that we have our database up and running lets start creating our application that will interact with it!

## Setting Up MySQL In Express

The first step in this process is to create a new project folder, navigate into it, and open your text editor. Once you have your terminal open within this root directory you are of course going to want to initialize node by entering npm init.

In order for our application to interact with our database we are going to want to supply our MySQL password within the connection configuration. Because of this it is important to create a .gitignore file and within it specify both our node_modules folder that was created when we installed our packages, and a .env file you will use to store your password in a global constant. It is best practice to do this in order to prevent your password from being pushed to whatever repo you’re using. Once these two files are configured our first step will be to setup our MySQL connection. Within util/database.js we are going to import our dotenv package to gain access to our .env file along with our mysql2 middleware that will interact with our database. We will then use mysql.createPool in order to configure our connection.

Now that we have our database connection configured lets start working on the M in MVC which is our Model. Within models/dolphin.js lets define what attributes a dolphin within our application will have. We are also going to have several methods that interact with the database in regard to reading and writing data.

Once this is complete we are going to need some controller actions that will handle the logic regarding dolphins. Within controllers/dolphin.js we will import our new Dolphin class and begin constructing some middleware functions that deal with this logic. If you are curious about the views that these functions render please feel free to checkout the github repository for this demo app.