function* range(start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}
console.log(Array.from(range(2, 14, 2)))
