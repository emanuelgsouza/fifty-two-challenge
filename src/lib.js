/**
 * @method factoryItem
 * @param  {String} week
 * @param  {Number} value
 * @return {Object}       { week, value }
 */
const factoryItem = (week, value) => ({
  week,
  value
})

/**
 * @method execute
 * @param  {Array} array
 * @param  {Number} value
 * @param  {Number} times
 * @param  {Number} initial
 * @return {Array}
 */
const generate = (array = [], value = 2, times = 1, initial = 53) => {
  if (times === initial) {
    return array
  }

  array.push(factoryItem(times, value * times))

  times += 1

  return generate(array, value, times)
}

module.exports = {
  generate,
  factoryItem
}