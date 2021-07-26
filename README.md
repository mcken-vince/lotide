# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Vincent McKen as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mcken-vince/lotide`

**Require it:**

`const _ = require('@mcken-vince/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Counts how many times each character occurs in a given string. Takes a string as an argument, returns an object {uniqueCharacter: characterCount}
* `countOnly([array1], [array2])`: Takes two arrays as arguments, returns an object, counting how many times the items in arr2 occur in arr1 {uniqueStringOrCharacter: characterCount} 
* `findKey(object, callbackFunction)`: Takes an object and a function as arguments, returns first key where callbackFunction returns true/truthy.
* `findKeyByValue(object, value)`: Takes an object and a value as arguments, returns first key whose value matches given value.
* `flatten([array])`: Takes an array as an argument, iterates through array, pulls single layer of sub-arrays out into main array '[[1], [2], [3]]' => '[1, 2, 3]', returns an array.
* `head([array])`: Returns first item of a given array.
* `letterPositions(string)`: Takes a string argument, returns an object with a key for each unique character, each assigned an array value containing the index numbers of each occurrence of that character.
* `map([array], callbackFunction)`: Works like the default method .map(). Iterates through the array, applying the callbackFunction to the array. Returns a new array populated with the return value of the callbackFunction for each item of the array given as arguments.
* `middle([array])`: Returns the middle element in a given array. If array has two middle elements, it will return both. Returns an array with one or two elements.
* `tail([array])`: Takes an array as an argument, returns a new array without the first element of the given array. If array has fewer than two elements, it will return an empty array.
* `takeUntil([array], callbackFunction)`: Takes an array and a function as arguments. Iterates through given array, pushing elements into a new array, will stop when the callbackFunction(element) returns true on an element of the array. If the function criteria is never met, it will return a duplicate of the original array.
* `without([array1], [array2])`: Takes two arrays as arguments. Returns an array containing only elements from array1 that do not exist in array2.