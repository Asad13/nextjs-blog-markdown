---
title: 'CSS Animations'
date: '2022-09-28'
src: '/images/blog/japan.jpg'
alt: 'CSS Animations'
top: false
recent: false
category: 'frontend'
---
CSS Animations is a module of CSS that lets you
<!-- end -->
CSS Animations is a module of CSS that lets you animate the values of CSS properties over time, using keyframes. The behavior of these keyframe animations can be controlled by specifying their timing function, duration, their number of repetitions, and other attributes.

## Using CSS animations

CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints.

There are three key advantages to CSS animations over traditional script-driven animation techniques:

* They're easy to use for simple animations; you can create them without even having to know JavaScript.
* The animations run well, even under moderate system load. Simple animations can often perform poorly in JavaScript. The rendering engine can use frame-skipping and other techniques to keep the performance as smooth as possible.
* Letting the browser control the animation sequence lets the browser optimize performance and efficiency by, for example, reducing the update frequency of animations running in tabs that aren't currently visible.

## Configuring an animation

To create a CSS animation sequence, you style the element you want to animate with the animation property or its sub-properties. This lets you configure the timing, duration, and other details of how the animation sequence should progress. This does not configure the actual appearance of the animation, which is done using the @keyframes at-rule as described in the Defining the animation sequence using keyframes section below.

The sub-properties of the animation property are:

### animation-delay
Specifies the delay between an element loading and the start of an animation sequence and whether the animation should start immediately from its beginning or partway through the animation.

### animation-direction
Specifies whether an animation's first iteration should be forward or backward and whether subsequent iterations should alternate direction on each run through the sequence or reset to the start point and repeat.

### animation-duration
Specifies the length of time in which an animation completes one cycle.

### animation-fill-mode
Specifies how an animation applies styles to its target before and after it runs.

### animation-iteration-count
Specifies the number of times an animation should repeat.

### animation-name
Specifies the name of the @keyframes at-rule describing an animation's keyframes.

### animation-play-state
Specifies whether to pause or play an animation sequence.

### animation-timing-function
Specifies how an animation transitions through keyframes by establishing acceleration curves.

## Defining animation sequence using keyframes

After you've configured the animation's timing, you need to define the appearance of the animation. This is done by establishing one or more keyframes using the @keyframes at-rule. Each keyframe describes how the animated element should render at a given time during the animation sequence.

Since the timing of the animation is defined in the CSS style that configures the animation, keyframes use a <percentage> to indicate the time during the animation sequence at which they take place. 0% indicates the first moment of the animation sequence, while 100% indicates the final state of the animation. Because these two times are so important, they have special aliases: from and to. Both are optional. If from/0% or to/100% is not specified, the browser starts or finishes the animation using the computed values of all attributes.

You can optionally include additional keyframes that describe intermediate steps between the start and end of the animation.