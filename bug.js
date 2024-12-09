function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Usual addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10

//The bug is that the function handles only the case where either 'a' or 'b' is null and not the case where both 'a' and 'b' are null