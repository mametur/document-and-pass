<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/11/2020, 5:08:59 PM

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
Finished in 0.019 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.029 seconds

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
Finished in 0.017 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString()

**Test Report**
```
Started
.F..F..F..F.

Failures:
1) reverseString reverses single word
.    Expected undefined to equal 'olleh'..

2) reverseString reverses multiple words
.    Expected undefined to equal 'ereht olleh'..

3) reverseString works with numbers and punctuation
.    Expected undefined to equal '!cba !321'..

4) reverseString works with blank strings
.    Expected undefined to equal ''..

4 specs, 4 failures
Finished in 0.015 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) sumAll sums numbers within the range
.    Expected undefined to equal 10..

2) sumAll works with large numbers
.    Expected undefined to equal 8002000..

3) sumAll works with larger number first
.    Expected undefined to equal 7626..

4) sumAll returns ERROR with negative numbers
.    Expected undefined to equal 'ERROR'..

5) sumAll returns ERROR with non-number parameters
.    Expected undefined to equal 'ERROR'..

6) sumAll returns ERROR with non-number parameters
.    Expected undefined to equal 'ERROR'..

6 specs, 6 failures
Finished in 0.016 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci()

**Test Report**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) fibonacci works
.    Expected undefined to equal 3..

2) fibonacci works
.    Expected undefined to equal 8..

3) fibonacci works
.    Expected undefined to equal 55..

4) fibonacci works
.    Expected undefined to equal 610..

5) fibonacci works
.    Expected undefined to equal 75025..

6) fibonacci doesn't accept negatives
.    Expected undefined to equal 'OOPS'..

7) fibonacci DOES accept strings
.    Expected undefined to equal 1..

8) fibonacci DOES accept strings
.    Expected undefined to equal 1..

9) fibonacci DOES accept strings
.    Expected undefined to equal 21..

9 specs, 9 failures
Finished in 0.037 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles()

**Test Report**
```
Started
.F.

Failures:
1) getTheTitles gets titles
.    Expected undefined to equal [ 'Book', 'Book2' ]..

1 spec, 1 failure
Finished in 0.002 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) leapYears works with non century years
.    Expected undefined to equal true..

2) leapYears works with non century years
.    Expected undefined to equal false..

3) leapYears works with ridiculously futuristic non century years
.    Expected undefined to equal true..

4) leapYears works with century years
.    Expected undefined to equal false..

5) leapYears works with century years
.    Expected undefined to equal true..

6) leapYears works with century years
.    Expected undefined to equal false..

6 specs, 6 failures
Finished in 0.023 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes()

**Test Report**
```
Started
.F..F..F..F..F.

Failures:
1) palindromes works with single words
.    Expected undefined to equal true..

2) palindromes works with punctuation
.    Expected undefined to equal true..

3) palindromes works with multiple words
.    Expected undefined to equal true..

4) palindromes works with multiple words
.    Expected undefined to equal true..

5) palindromes doesn't just always return true
.    Expected undefined to equal false..

5 specs, 5 failures
Finished in 0.017 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar()

**Test Report**
```
Started
.F..F..F..F..F..F..F.

Failures:
1) caesar works with single letters
.    Expected undefined to equal 'B'..

2) caesar works with words
.    Expected undefined to equal 'Bbb'..

3) caesar works with phrases
.    Expected undefined to equal 'Mjqqt, Btwqi!'..

4) caesar works with negative shift
.    Expected undefined to equal 'Hello, World!'..

5) caesar wraps
.    Expected undefined to equal 'A'..

6) caesar works with large shift factors
.    Expected undefined to equal 'Ebiil, Tloia!'..

7) caesar works with large negative shift factors
.    Expected undefined to equal 'Ebiil, Tloia!'..

7 specs, 7 failures
Finished in 0.03 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Test Report**
```
Started
.F..F..F.

Failures:
1) findTheOldest finds the oldest person!
.    TypeError: Cannot read property 'name' of undefined.

2) findTheOldest finds the oldest person if someone is still living
.    TypeError: Cannot read property 'name' of undefined.

3) findTheOldest finds the oldest person if the OLDEST is still living
.    TypeError: Cannot read property 'name' of undefined.

3 specs, 3 failures
Finished in 0.007 seconds

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
Finished in 0.024 seconds

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
Finished in 0.015 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
