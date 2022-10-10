---
title: 'How to Build Cloud Based Applications'
date: '2022-10-08'
src: '/images/blog/japan.jpg'
alt: 'How to Build Cloud Based Applications'
top: false
recent: false
category: 'cloud'
---
There’s no denying that cloud computing has reached
<!-- end -->
There’s no denying that cloud computing has reached a tipping point.  In the future, new applications will target cloud environments as the favored deployment option.

That raises some issues:
- Are your applications well-suited for the cloud?
- Will they offer high availability?
- Do they respond well to erratic workloads and user populations?

All of these questions get at the underlying issue of whether or not traditional application architectures operate effectively in the cloud and do they need to be modified in light of how cloud environments operate?

The simple answer is no, traditional application architectures don’t operate effectively in the cloud, and yes, they need to be modified.

Why is this, and what should you do to build cloud applications the right way?

## Four Recommendations to Build Cloud Applications the Right Way

1. Understand the Infrastructure

The first and most important thing to understand about cloud applications is the nature of the cloud infrastructure.

AWS famously proclaims “everything fails all the time.” What this means is that, unlike traditional infrastructure, which is assumed to be robust and failure-proof (even though it actually frequently fails), when using cloud infrastructure, application developers should assume resources may fail.

The reasons for the failure may vary—from network switches going down, servers crashing, or even AWS services becoming unavailable.

The point is that when planning a cloud application, one should expect that some application resources will fail unexpectedly. Consequently, it’s critical to insulate the application from underlying failure. How do you do that?

2. Design for Failure

Clearly, the right way to approach this issue of an infrastructure failure is to recognize it will happen. Rather than treat failure as a surprise and then get mad because the application residing on it also fails—the pattern with traditional infrastructure—one should design applications so that they are resilient in the face of failure.

What does that mean?

The best way to deal with unreliable infrastructure is to design with redundancy. Make sure that every operational part of the application runs in at least a paired topology: Two web servers; two application logic layers; mirrored database servers.

And then disperse the redundant pieces of the application. Place them in different data centers. Or even in different regions. Place them such that even a significant outage will not take the entire application down.

There’s no question that this makes application design more complex and development and operations more work, but it protects the application against infrastructure failure. And in today’s world, where applications are often the primary interface for customers, application uptime isn’t a nicety, it’s a requirement.

1. Expect Load Variance

Now that applications are the primary customer interface, gone are the days of predictable user populations associated with employee-focused applications. One should expect erratic loads, both because customer counts inevitably grow (one hopes), but also because customer use can vary according to the whim of the hour.

Some celebrity mentioned to her 3 million followers on Twitter that she just remortgaged her house? If you’re a financial institution you can expect a huge influx of traffic as people think they should consider refinancing.

You get the drift. Cloud workloads are highly erratic and your application should be ready to handle them.

You’ve already got the redundancy in place, right? The next step is to design your application so additional application resources can join and drop off the executing resource pool.

So you should be able to add three (or 30) web servers to the redundant pair you’ve got running to address that celebrity-driven traffic.

2. Leverage Cloud Services

One huge mistake IT organizations make is thinking of cloud computing as pure computing infrastructure. You’ll often see IT groups talking about adopting IaaS to relieve internal data center pressure, or using cloud virtual machines to operate applications.

This assumes that, for all the software that runs in the application, the IT organization will install, configure, and manage it. Need a database? Well, the DBA will install MySQL, configure it, connect it to the storage, and then an operations group will take responsibility to keep the MySQL system up and running.

This approach completely ignores the reality that all of the AAG cloud providers have built out rich services on top of their IaaS offerings.

They all offer managed database services. In fact, AWS just enriched their key/value DynamoDB service (a managed service) by placing caching in front of it (another managed service) to improve performance. Microsoft just launched CosmoDB, an extremely innovative combined key/value and document database service. And, of course, Google has rolled out Spanner, a global highly-consistent, highly-performant SQL database.

Kind of puts your MySQL installation to shame, eh? (Don’t worry, they all offer a managed MySQL service if that’s your fancy). And this is just one category. They have managed IoT systems, data warehouses, machine learning.

It’s critical to extend your thinking beyond “cloud as infrastructure” to recognize it’s really “cloud as computing capability” delivered in a number of different forms.