/**
 * @method factoryWeek
 * @param  {Number} week
 * @param  {Number} value
 * @return {Object}       { week: Number, value: Number }
 */
const factoryWeek = (week, value) => {
  return {
    week,
    value
  }
}

/**
 * @method generate
 * @param  {Object} options { initialValue: String, weeks: Number }
 * @return {Array<Week>}    [ { week: Number, value: Number } ]
 */
const generate = (options = {}) => {
  const { initialValue = 2, weeks = 52 } = options

  return Array.from({ length: weeks }, (_, week) => {
    const weekNumber = week + 1
    return factoryWeek(weekNumber, initialValue * weekNumber)
  })
}

module.exports = {
  generate
}
