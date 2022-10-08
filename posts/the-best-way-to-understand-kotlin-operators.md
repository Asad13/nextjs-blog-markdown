---
title: 'The Best Way to Understand Kotlin Operators'
date: '2022-09-29'
src: '/images/blog/japan.jpg'
alt: 'The Best Way to Understand Kotlin Operators'
top: false
recent: false
category: 'mobile'
---
Kotlin contains several built-in operators, which are
<!-- end -->
Kotlin contains several built-in operators, which are functions that employ symbolic name representation. They are used to perform operations on operands.

## What Are Kotlin Operators?

An operator is a unique symbol that is used to perform a specific operation on its operand. An operator is a symbol that instructs the compiler or interpreter to perform a specified mathematical, relational, or logical operation and returns the result.

In Kotlin, we have many built-in operators for performing various operations. Although Kotlin operators can operate with a wide range of variables and constants, some of them are limited to working with specific data types.

Now let us understand the Types of operators in Kotlin.

## Types of Operators in Kotlin

There are various types of operators in Kotlin.

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Unary Operators
- Bitwise Operators
- Now let's learn about these operators in detail.

## Arithmetic Operators

Arithmetic Operators are used to perform arithmetic or mathematical operations like addition, subtraction, multiplication, division, modulus, etc.

The Best Way to Understand Kotlin Operators
By Ravikiran A S
Last updated on Oct 4, 2022
The Best Way to Understand Kotlin Operators
Table of Contents
What Are Kotlin Operators?Types of Operators in KotlinArithmetic OperatorsAssignment OperatorsComparison OperatorsView More
Kotlin contains several built-in operators, which are functions that employ symbolic name representation. They are used to perform operations on operands. In this article on Kotlin operators, we will be learning all about Kotlin operators in detail, with the help of examples.

Post Graduate Program: Full Stack Web Development
in Collaboration with Caltech CTMEENROLL NOWPost Graduate Program: Full Stack Web Development
What Are Kotlin Operators?
An operator is a unique symbol that is used to perform a specific operation on its operand. An operator is a symbol that instructs the compiler or interpreter to perform a specified mathematical, relational, or logical operation and returns the result.

In Kotlin, we have many built-in operators for performing various operations. Although Kotlin operators can operate with a wide range of variables and constants, some of them are limited to working with specific data types.

Now let us understand the Types of operators in Kotlin.

Types of Operators in Kotlin
There are various types of operators in Kotlin.

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Unary Operators
Bitwise Operators
Now let's learn about these operators in detail.

Arithmetic Operators
Arithmetic Operators are used to perform arithmetic or mathematical operations like addition, subtraction, multiplication, division, modulus, etc.

**`+`**  To add two values, use the addition operator.

**`-`**   Subtraction operator is used to subtract one value from another.

**`* `**  Two values, a and b, are multiplied using the multiplication operator.

**`/`**   To divide one value by another, the division operator is used.

**`%`**  The remainder of the division is returned by the modulus operator.

## Assignment Operators

We can use assignment operators to assign a variable value or the result of an arithmetical expression to a variable.

**`+=`**  Add a to b and assign to a

**`-=`**   Subtract b from a and assign to a

**`*=`**   Multiply a and b and assign to a

**`/=`**   Divide a by b and assign to a

**`%=`** Divide a by b and assign the remainder to a.

## Comparison Operators

A comparison between two operands is evaluated using comparison operators. A Boolean value, which can only be true or false, is the outcome of a comparison process. Comparison operators are also known as relational operators.

**`a>b`**   Checks whether a is greater than b.

**`a<b`**   Checks whether a is smaller than b or not.

**`a>=b`** Checks whether a is greater than or equal to b or not.

**`a<=b`** Checks whether a is smaller than or equal to b or not.

**`a==b`** Checks whether a is equal to b or not.

**`a!=b`**  Checks whether a is not equal to b or not

## Logical Operators

The logical (AND, OR, NOT) operators are used to combine expressions with conditional statements, yielding true or false results.

**`&&`** (AND) If every expression is true, it returns true.

**`||`** (OR)      It returns true if any expressions are true.

**`!`** (NOT)     It returns the negation of the expression.

## Unary Operators

Unary operators are those operators that work with only one operand.

In Kotlin, there are 5 types of unary operators.

- Unary Plus Operator (+)
- Unary Minus Operator (-)
- Increment Operator (++)
- Decrement Operator (--)

Unary Plus Operator(+): A number without a sign is a positive number, the unary plus operator returns the positive value.

Unary Minus Operator(-): This operator returns the negative value.

Increment Operator(++): Using this operator, the value is raised by 1; this increment operator can be pre-increment or post-increment.

Decrement Operator(--): This operator decreases the value by 1; this operator can also be pre-decrement or post-decrement.

## Bitwise Operators

Kotlin doesn't really have a bitwise operator, but kotlin has some functions that help in performing those tasks.

- shl - Signed shift left: The bits are shifted to the left, the far left bit is discarded, and the rightmost bit is set to 0.
- shr - Signed shift right: Comparing pairs of bits, the bitwise (inclusive) OR operator returns 1 if either or both of the bits are 1, else 0.
- ushr - Unsigned shift right operator shifts zero into the leftmost position.
- and - Bitwise and: The bitwise AND operator compares pairs of bits and returns 1 if both are 1, otherwise 0.
- or - Bitwise or: Comparing pairs of bits, the bitwise (inclusive) OR operator returns 1 if either or both of the bits are 1, else 0.
- xor - Bitwise xor: The bitwise exclusive OR (XOR) function compares pairs of bits and returns 1 if the bits are complementary, 0 otherwise.
- inv - Bitwise inversion: The bitwise inv() function inverts the bit pattern and makes every 0 to 1, and every 1 to 0.