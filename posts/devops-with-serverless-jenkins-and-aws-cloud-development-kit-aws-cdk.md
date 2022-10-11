---
title: 'DevOps with serverless Jenkins and AWS Cloud Development Kit'
date: '2022-09-21'
src: '/images/blog/japan.jpg'
alt: 'Japan'
top: false
recent: false
category: 'devops'
---
The objective of this post is to walk you through how
<!-- end -->
The objective of this post is to walk you through how to set up a completely serverless Jenkins environment on AWS Fargate using AWS Cloud Development Kit (AWS CDK).

Jenkins is a popular open-source automation server that provides hundreds of plugins to support building, testing, deploying, and automation. Jenkins uses a controller-agent architecture in which the controller is responsible for serving the web UI, stores the configurations and related data on disk, and delegates the jobs to the worker agents that run these jobs as their primary responsibility.

Amazon Elastic Container Service (Amazon ECS)  using Fargate is a fully-managed container orchestration service that helps you easily deploy, manage, and scale containerized applications. It deeply integrates with the rest of the AWS platform to provide a secure and easy-to-use solution for running container workloads in the cloud and now on your infrastructure. Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. Fargate is compatible with both Amazon ECS and Amazon Elastic Kubernetes Service (Amazon EKS).