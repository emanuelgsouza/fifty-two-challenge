const factoryItem = (week, value) => ({
  week,
  value
})

const generate = (array = [], value = 2, times = 1, initial = 53) => {
  if (times === initial) {
    return array
  }

  array.push(factoryItem(times, value * times))

  times += 1

  return generate(array, value, times)
}

module.exports = {
  generate
}