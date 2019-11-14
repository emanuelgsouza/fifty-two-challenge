const { generate } = require('../src/lib')

describe('testing generate() function', () => {
  it('generate() without any parameter should generate data with predefined values', () => {
    const data = generate()
    const firstWeek = data[0] || {}
    const lastWeek = data[51] || {}

    expect(data.length).toBe(52)

    expect(firstWeek.week).toBe(1)
    expect(firstWeek.value).toBe(2)

    expect(lastWeek.week).toBe(52)
    expect(lastWeek.value).toBe(104)
  })

  it('generate({ weeks: 4 }) should generate data with 4 weeks', () => {
    const data = generate({ weeks: 4 })

    expect(data.length).toBe(4)
  })

  it('generate({ weeks: 5, initialValue: 5 }) should generate data with 5 weeks and values multiples of 5', () => {
    const data = generate({ weeks: 5, initialValue: 5 })
    const firstWeek = data[0] || {}
    const lastWeek = data[4] || {}

    expect(data.length).toBe(5)

    expect(firstWeek.week).toBe(1)
    expect(firstWeek.value).toBe(5)

    expect(lastWeek.week).toBe(5)
    expect(lastWeek.value).toBe(25)
  })
})
