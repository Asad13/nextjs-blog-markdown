---
title: 'Upload files to the Node.js server with Express and Multer'
date: '2022-10-02'
src: '/images/blog/japan.jpg'
alt: 'Upload files to the Node.js server with Express and Multer'
top: false
recent: false
category: 'backend'
---
We can store data inside various cloud storage
<!-- end -->
We can store data inside various cloud storage sources like S3, Google Drive, Dropbox, or simply on the same server where our back-end is hosted. In this tutorial, we will see how to do it for the latter as the storage target.

## The use case

We have a web application where an user can register by filling his full name and a picture of him. When the user submit the data, our back-end should store the picture inside a directory on the server then save user in the database. The back-end should allow us to view or download the picture of an user through his id.

## Setup the project

To start, we will use a boilerplate for the Node.js project I built throughout this tutorial. The main branch contains a simple Node.js app. The branch express contains a project with the Framework express and the node package dotenv for managing environment variables.

## Modeling user schema

We will use MongoDB to store user data. We have already seen how to use it with Node.js in this tutorial.

## Configure Mongoose

Replace the database variable with the value that matches your local environment. I show you how to secure your Mongo database with a username and a password in this post.

## Create the schema

Create a folder model then create a file user.model.ts with the following code.

## Upload file to the server

Most back-end servers handle requests with the body containing JSON string. Express parse this body and return the object so that we can use it as we want.

When a file is sent, the content type is set to multipart/form-data. Express doesn't handle this, so we need an external library to handle that for us. The package Multer is the tool for the situation 😎.

## Create a function to handle upload

Now create a file named uploadSingle.ts inside utils folder and add the code below.

## Create a route to handle upload

Our file upload handler is ready so let’s create a route to send the file and the logic for that route. Create a folder routes then add file a file appRoute.ts with the following content.

We use Express Router to define a route /register/user called with HTTP method POST. We start by handling files uploaded by calling our function handleSingleUploadFile wrap inside try { } catch {} to catch validation errors like Invalid file type, file size bigger than 5MB, or storage folder that doesn't have write permission, etc.

If one of these errors occurs, we return a 422 HTTP status code with the error message thrown.

When the file is uploaded successfully, we retrieve the user’s name inside the request’s body and the name of the uploaded file inside the storage directory, then create a user in the database and return the result to the user. Own endpoint is ready to receive data.

Open src/index.ts and add the line below before the call of app.listen() to register the route we created with Express routing.

Run the app and open your favorite REST client and test the endpoint. I use Postman to test my REST API.

## Access uploaded files

Now we store files on the server as we want. Make sure the file is present inside the folder public/uploads. We need to access the picture through the browser. We will see two ways to achieve that, and you feel free to choose what is suitable for you.

## The simple way

It is possible to view the picture on the browser by pointing to the location of the file on the server by formatting the URL like this:
-The host + port: http://localhost:4500
-The folder where pictures are stored starts at the public folder: uploads
-The file’s name: 1614124882278-picture.jpg (from my screenshot above).

This results to: http://localhost:4500/uploads/1614124882278-picture.jpg. Let's open the browser and see what happens.

We are unable to view the file because Express can’t resolve the route. The thing is, we don’t want Express to treat everything located inside public the folder as an application's route.

To prevent that, we need to mark the public directory static So Express will load the file (usually called "asset") correctly.

Open the file src/index.ts and add the code below before app.listen()

app.use(express.static(path.join(__dirname, '../public')));
Restart the app and browse the URL again.

We can view the file now but, there is an issue we need to know about. We are exposing a folder of our application through the Internet. Of course, the directory is not accessible, but just one mistake can lead to a breach of data stored on the server. Also, an attacker can run a script that generates a random picture file’s name and then browse this URL. We need a better way to protect this.

## The secure way

Since the picture is stored in the database as a part of user information, it means with the user’s id, we can find the picture file’s name.

We will create two routes /user/:id/generate-link and /view-file.

We will use the first route to generate a link to view the file. This link will contain a token that holds enough information to guess which file to browse.

We will need a package to generate the token so let’s install it:

The first route takes a user’s id as a route parameter, a query parameter named action indicating whether we want to view or download the file.

We continue by creating a token with a lifetime of 30 minutes which means after 30 minutes from the generation time, it will be impossible to view the file with this token. It will be required to generate a new one. Finally, we create the URL and return it.

The second route receives two query parameters named token and action then decode the token to get the user's id. Then find the user associated with this id, get the picture file's name, and resolve the server's path.

Finally, if the value of the query parameter action is equal view, Express renders the picture in the browser res.sendFile() otherwise Express download the file res.download().

Run the app and open this link http://localhost:4500/user/<userId>/generate-link?action=view. Replace <userId> by a valid id in your users collections.

This request will respond with an URL, copy it, open another browser tab, paste it and see the result 😎.