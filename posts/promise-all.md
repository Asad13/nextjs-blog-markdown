---
title: 'Javascript Promise.all()'
date: '2022-09-30'
src: '/images/blog/japan.jpg'
alt: 'Javascript Promise.all()'
top: true
recent: false
category: 'frontend'
---
The Promise.all() method takes an iterable
<!-- end -->
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

## Parameters

An iterable object such as an Array.

## Return value

- An already fulfilled Promise if the iterable passed is empty.
- An asynchronously fulfilled Promise if the iterable passed contains no promises. Note, Google Chrome 58 returns an already fulfilled promise in this case.
- A pending Promise in all other cases. This returned promise is then fulfilled/rejected asynchronously (as soon as the queue is empty) when all the promises in the given iterable have fulfilled, or if any of the promises reject. See the example about "Asynchronicity or synchronicity of Promise.all" below. Returned values will be in order of the Promises passed, regardless of completion order.

## Description

This method can be useful for aggregating the results of multiple promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. Consequently, it will always return the final result of every promise and function from the input iterable.

## Fulfillment

The returned promise is fulfilled with an array containing all the fulfilled values (including non-promise values) in the iterable passed as the argument.

- If an empty iterable is passed, then the promise returned by this method is fulfilled synchronously. The fulfilled value is an empty array.
- If a nonempty iterable is passed, and all of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.

## Rejection

If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have settled.