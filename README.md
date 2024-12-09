# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript bug related to null value handling in an addition function.

## Description

The `foo` function is designed to add two numbers. However, it incorrectly handles cases where one or both of the input parameters are null.  The current implementation only checks for individual null values and doesn't account for the scenario where both parameters are null. This leads to unexpected behavior and potential errors.

## Bug

The `bug.js` file contains the erroneous code.  The function only explicitly checks if either 'a' or 'b' are null, ignoring the case where both are null simultaneously. 

## Solution

The `bugSolution.js` file provides a corrected version of the function that accurately handles null values for both parameters, returning 0 when both are null or performing the addition if both are not null. 