---
title: 'Javascript Async Function'
date: '2022-09-30'
src: '/images/blog/japan.jpg'
alt: 'Javascript Async Function'
top: false
recent: false
category: 'frontend'
---
An async function is a function declared with
<!-- end -->
An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Async functions may also be defined as expressions.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously.

Code after each await expression can be thought of as existing in a .then callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.

In the following example, we successively await two promises. Progress moves through function foo in three stages.

1. The first line of the body of function foo is executed synchronously, with the await expression configured with the pending promise. Progress through foo is then suspended and control is yielded back to the function that called foo.
2. Some time later, when the first promise has either been fulfilled or rejected, control moves back into foo. The result of the first promise fulfillment (if it was not rejected) is returned from the await expression. Here 1 is assigned to result1. Progress continues, and the second await expression is evaluated. Again, progress through foo is suspended and control is yielded.
3. Some time later, when the second promise has either been fulfilled or rejected, control re-enters foo. The result of the second promise resolution is returned from the second await expression. Here 2 is assigned to result2. Control moves to the return expression (if any). The default return value of undefined is returned as the resolution value of the current promise.

Note how the promise chain is not built-up in one go. Instead, the promise chain is constructed in stages as control is successively yielded from and returned to the async function. As a result, we must be mindful of error handling behavior when dealing with concurrent asynchronous operations.