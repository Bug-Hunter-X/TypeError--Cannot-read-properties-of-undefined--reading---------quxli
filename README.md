# React Native: Handling TypeError: Cannot read properties of undefined (reading '...')

This repository demonstrates a common error in React Native applications and how to effectively handle it. The error, `TypeError: Cannot read properties of undefined (reading '...')`, arises when you attempt to access a property of an object that's currently undefined or null.  This often happens when dealing with asynchronous operations or data fetching.

## Problem

The `bug.js` file showcases a scenario where accessing a property of an object before verifying its existence leads to this error.

## Solution

The `bugSolution.js` file provides solutions to prevent this error:  using optional chaining (?.) and nullish coalescing (??).  These operators provide concise and safe ways to handle potentially null or undefined values.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install necessary dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to start the app.