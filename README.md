# Homework 2

## Design Decisions

- When a user presses a function key after two digits and a function key have already been entered (6, +, and 5 have been pressed already and the user presses -) it will be assumed that the user would like to use the combination of the previous values as the first term in this new function (first term will be become 11). While this does not follow PEMDAS convention, it seems to be consistent with other 4 function calculators as an effort to shrink memory complexity but only ever having to store two digits and a function. In addition, the pressing of a function key that results in the combonation of two terms will show the result of that combonation. (6, +, and 5 are stored, - is pressed, 11 will be displayed).
