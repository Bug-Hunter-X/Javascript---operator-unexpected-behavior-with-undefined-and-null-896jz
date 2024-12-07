function foo(a, b) {
  a = Number(a) || 0; // Convert a to a number, or 0 if it's not a number
  b = Number(b) || 0; // Convert b to a number, or 0 if it's not a number
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(0, 1)); // 1