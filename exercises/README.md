<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/14/2020, 9:58:38 AM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.03 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arr, ...restParam) ⇒ <code>Array.&lt;Object&gt;</code>
Implement a function that takes an array and some other arguments then removes the other arguments from that array


**Returns**: <code>Array.&lt;Object&gt;</code> - Return values should be array without second parameter values  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | parameter is array |
| ...restParam | <code>Array.&lt;Object&gt;</code> | is removes from first parameter |

**Example**  
```js
const remove = 3;
removeFromArray([1, 2, 3, 4], remove); // [1, 2, 4]
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.012 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(string, number) ⇒ <code>string</code>
Write a function that simply repeats the string a given number of times:


**Returns**: <code>string</code> - 'error message, empty string or concatenate the repeated string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | will be repeat |
| number | <code>number</code> | shows how many times first parameter will be repeated |

**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.02 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(string) ⇒ <code>string</code>
Pretty simple, write a function called reverseString that returns its input, reversed!


**Returns**: <code>string</code> - reversed  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | will reverse |

**Example**  
```js
reverseString('hello there') // returns 'ereht olleh'
```
**Test Report**
```
Started
............


4 specs, 0 failures
Finished in 0.013 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(start, end) ⇒ <code>number</code>
Implement a function that takes 2 integers and returns the sum of every number between(and including) them:


**Returns**: <code>number</code> - sum of the all integers  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | is a integer number |
| end | <code>number</code> | is a integer number |

**Example**  
```js
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.019 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(param)
Create a function that returns a specific member of the fibonacci sequence:



| Param | Type | Description |
| --- | --- | --- |
| param | <code>number</code> \| <code>string</code> | cast it then should be number |

**Example**  
```js
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3) fibonacci(6) // returns 8
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.019 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(object)
You are given an array of objects that represent books with an author and a title that looks like this:



| Param | Type | Description |
| --- | --- | --- |
| object | <code>Array.&lt;object&gt;</code> | is an array include object |

**Example**  
```javascript
  const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
] 
 ```

```javascript
getTheTitles(books) // ['Book','Book2']
```
**Test Report**
```
Started
...


1 spec, 0 failures
Finished in 0.003 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(years) ⇒ <code>boolean</code>
Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:


**Returns**: <code>boolean</code> - true or false  

| Param | Type | Description |
| --- | --- | --- |
| years | <code>number</code> | should be integer number |

**Example**  
```js
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(string) ⇒ <code>boolean</code>
Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:


**Returns**: <code>boolean</code> - true or false  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | is to check for palindrome |

**Example**  
```js
palindromes('racecar') // true
palindromes('tacos') // false 
```
**Test Report**
```
Started
...............


5 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar(string, number) ⇒ <code>string</code>
Implement the legendary caesar cipher:
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.


**Returns**: <code>string</code> - the legendary caesar cipher  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | will change each  character another character |
| number | <code>number</code> | increase letter |

**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.023 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest(array) ⇒ <code>string</code>
given an array of objects representing people with a birth and death year, return the oldest person.


**Returns**: <code>string</code> - the oldest person  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;Object&gt;</code> | is an array includes some property to check their old |

**Example**  
```js
const people = [
      {
        name: 'Carly',
        yearOfBirth: 2018,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]  // Ray
```
**Test Report**
```
Started
.........


3 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Test Report**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
.    Expected undefined to equal 'appleay'..

2) #translate translates a word beginning with a consonant
.    Expected undefined to equal 'ananabay'..

3) #translate translates a word beginning with two consonants
.    Expected undefined to equal 'errychay'..

4) #translate translates two words
.    Expected undefined to equal 'eatay iepay'..

5) #translate translates a word beginning with three consonants
.    Expected undefined to equal 'eethray'..

6) #translate counts "sch" as a single phoneme
.    Expected undefined to equal 'oolschay'..

7) #translate counts "qu" as a single phoneme
.    Expected undefined to equal 'ietquay'..

8) #translate counts "qu" as a consonant even when its preceded by a consonant
.    Expected undefined to equal 'aresquay'..

9) #translate translates many words
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

9 specs, 9 failures
Finished in 0.02 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected undefined to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected undefined to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected undefined to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected undefined to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected undefined to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.032 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
