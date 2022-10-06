---
title: 'Create a REST API with Node.js, Express, MongoDB and Typescript'
date: '2022-10-01'
src: '/images/blog/japan.jpg'
alt: 'Create a REST API with Node.js, Express, MongoDB and Typescript'
top: false
recent: false
category: 'backend'
---
REST is the acronym for REpresentational State
<!-- end -->
REST is the acronym for REpresentational State Transfer. It is an architectural style that defines a set of rules to create Web Services. It was presented for the first time by Roy Fielding in 2000 in his dissertation.

A REST API is an Application Programming Interface that follows the REST architecture constraints.

There are 6 principles to follow to build a REST API:
-Client-Server
-Stateless
-Cacheable
-Uniform Interface
-Layered System
-Code on Demand
-To learn more about REST and its principles, check out this link.

## Prerequisites

To follow this tutorial, you need to have these tools installed on your computer:
-Node.js 12+
-NPM or Yarn (I will use Yarn)
-MongoDB installed; Download the version for your operating system.
-A GUI REST client; I will use Postman

## Setup the project

To start, we will use a boilerplate for the Node.js project we built on this tutorial. The main branch contains a simple Node.js application.

The branch express-mongo contains a project with the Framework express and the connection to a Mongo database already configured.

Check this tutorial to see how to connect Node.js with MongoDB.

Now we have a working project, we will continue by creating the Mongo schema representing the data structure we want to store in the database.

## What we will build

What we will create is a classic users management app where we can create roles, create users with a role and also change the role of the user. A user can have a role and only one at a time.

## Create the schema

We are going to create two schemas, respectively, for role and user. Inside the folder src, create a folder named models then create a file role.model.ts and finally.

## Create a resource for Role entity

Following the REST specification, we will have these routes:
-Create an roles: [POST] /roles
-Get all roles: [GET] /roles
-Get one user: [GET] /roles/:id
-Update a role: [PUT] /roles/:id
-Delete a role: [DELETE] /roles/:id

Inside the folder src, create a folder named routes then create a file role.route.ts. This file will contain the route configuration listed above.