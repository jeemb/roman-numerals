# Roman Numerals

#### Web page converting Arabic to Roman numerals for Epicodus, 01.19.2017

#### By Patrick McGreevy & Jennifer Beem

## Description

This webpage takes integer input and produces an equivalent representation with Roman numerals.

## Setup

Open `index.html` in web browser.

## Technologies Used

HTML

CSS

JavaScript

jQuery

## Specs

* This implementation is limited to representing integers less than or equal to 3,999.
  * **Example Input**: 4000
  * **Example Output**: "" (empty string)
* Lower order-of-magnitude symbols following higher order-of-magnitude ones represents an additive effect in value.
Interpreting Roman numerals requires adding the value of symbols that follow sequential orders of magnitude.
  * **Example Input**: 66
  * **Example Output**: "LXVI"
* The limit of the additive property is 3 successive identical characters. Subtraction represented by a (sequence of) lower-magnitude symbol(s) preceding (a) higher-magnitude one(s) is used to conform to this rule.
  * **Example Input**: 4
  * **Example Output**: "IV"
* An instance of subtraction must only utilize symbol types of adjacent orders of magnitude.
  * **Example Input**: 99
  * **Example Output**: "XCIX" ("IC" is NOT valid)

### License

Copyright (c) 2017 Patrick McGreevy & Jennifer Beem

This software is licensed under the MIT license.
