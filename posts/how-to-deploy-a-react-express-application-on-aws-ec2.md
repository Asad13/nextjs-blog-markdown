---
title: 'How to Deploy a React / Express Application on AWS EC2'
date: '2022-10-01'
src: '/images/blog/japan.jpg'
alt: 'How to Deploy a React / Express Application on AWS EC2'
top: false
recent: false
category: 'devops'
---
Don’t actually do this for your applications. It’s
<!-- end -->
Don’t actually do this for your applications. It’s great to understand how to deploy your apps on EC2 but there are much easier ways to do this. Try ECS, Elastic Beanstalk, Amplify, and also think about serverless. But if you want to go for a quick adventure to learn about manually deploying your full stack apps, and really learn whats happening behind the scenes, then this is the place you want to be.

We will be working with this app. It has a react frontend, an express / node.js backend, with a single RESTful api call to test that the communication works. We will be serving the react app statically on the express server using the react build feature.

This is purely about deploying an app, I wont be setting up a CI/CD process with GitHub, it is something you will want to learn to do, I will bring it up when I post about Elastic Beanstalk and Amplify in the future.

We have a server.js file that is just a normal express server. There is a single api call with the route, /test. As well as a few lines of code (23–27) that allows the react app to be run statically through the server by leveraging the build feature that react supplies. Lastly, our server is running on port 5000. Nothing fancy here.

We also have a client folder that houses the React app. If you look at /client/src/App.js you will see a simple component saying ‘Hi’ and eventually displaying whatever data comes from the /test api call. One thing to note here is that when performing the /test call, we are not coding in localhost or any url. This is because we have set up a proxy in our package.json file that automatically puts a url before the /test. In the package.json file in the client folder you will see a proxy key with a value of http://localhost:5000. This works in development, and we will update the proxy value when deploying the app on an EC2 instance.

We have to update the proxy value because the EC2 instance is not your localhost. It has its own public and private ip addresses and the proxy needs to be updated accordingly for our app to be able to serve its functionality.

Next we’re gonna set up or EC2 instance.

I’ll wait for you to get logged in or sign up…

First we have to create a security group for our EC2 instance. By default, all ports are blocked from going into the server, so we have to specify which ports we want to allow to have access to our instance. To do this go to the EC2 service page and select security groups on the left column bar. Go ahead and select create new security group and give it a name and description. Next we are gonna add some inbound rules.

We will have an SSH inbound rule to let us have direct access to the server. A HTTP inbound rule to allow HTTP communication. And we have a custom port of 5000 as our server will be running on that port.

Go ahead and create the security group and click to the instances page. What we are going to do next is create a EC2 instance that will be hosting our application.

Click on Launch Instances, give your server a name and select an Ubuntu AMI and a t2.micro instance type (I recommend selecting the free tier eligible volume for testing purposes). Next select or create a key pair, if creating a new one make sure to know which directory you are saving it to. Lastly, head to Network Settings and select the security group that we created. Click on Launch Instance.

After a couple of minutes, your instances page should look like this.

We now have our EC2 instance that is going to host our app, we now have to connect to it using SSH. To do so, click the checkbox for your EC2 instance and then select connect in the top right. Select the SSH Client tab and follow the directions.

In short:
-Type chmod 400 <yourkeyname>.pem in a terminal in the directory where you saved your key
-Then the ssh — i example listed at the bottom of the instructions
-Type yes after some text appears in your terminal

Now we are connected, good stuff.

We are getting pretty close, now we have to update the packages in our instance to make sure everything is up to date, install and configure NGINX (which I will go over if you have never heard of it), install node.js (hopefully you know what this is is, basically runs JS code on the server side), and finally clone our repo. Let’s Do It!!