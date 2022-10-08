---
title: 'A Comprehensive Look at React Hooks'
date: '2022-10-08'
src: '/images/blog/japan.jpg'
alt: 'A Comprehensive Look at React Hooks'
top: true
recent: true
category: 'frontend'
---
Hooks are a new functionality that was introduced
<!-- end -->
Hooks are a new functionality that was introduced in React 16.8 version. This tutorial on React Hooks helps you understand Hooks and how they function.

## What Are React Hooks?

Hooks are a new functionality that was introduced in React 16.8. You can use state, and other React capabilities without writing a class. Hooks are React state and lifecycle features from function components that "hook into" hooks. They are also backward-compatible. 

If you create a functional component and later wish to add any state to it, you must first convert it to a class. However, you can now incorporate a Hook into an existing function component.

## When to Use Hooks?

If you are working on a web development project using React JS, and after coding a component function, you want to add some states. In such a scenario, you can use Hooks.

To add those states, earlier you would have to convert it to a class, and then you could perform a particular function, but now, by using Hooks, you can hook it to the existing function component.

## Rules of Hooks

The functionalities and features of Hooks are similar to Javascript functions. However, before using them, you need to keep specific rules in mind, as these rules ensure that all the stateful logic in a functional component is visible in its source code. 

**Rule 1: Only Call Hooks at the Top Level**
Hooks aren't supposed to be called from loops, conditions, or nested functions. At all times, hooks should be utilized at the top level of React methods. This rule ensures that Hooks are called in the same order each time a component renders.

**Rule 2: Only Call Hooks from React Functions**
Hooks can't be called from JavaScript functions. Hooks can be called from React function components instead. Custom Hooks can also be used to call Hooks.

## Prerequisites for Using React Hooks

1. You must have a Node version of 6 or above.
2. You must have an NPM version of 5.2 and above.
3. You must Create-react-app tool for running the React web applications.