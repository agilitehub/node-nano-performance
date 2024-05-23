import { expect } from 'chai'
import { timeStart, timeEnd } from '../index.js'

describe('nano-performance', function () {
  it('should correctly measure execution time', function (done) {
    this.timeout(3000) // increase timeout for this test

    const key = 'test'
    timeStart(key)

    setTimeout(() => {
      timeEnd(key, 'ms')

      // We can't assert the exact time because it depends on the system,
      // but we can check if it's approximately correct.
      expect(timing[key]).to.be.closeTo(2000, 100)

      done()
    }, 2000)
  })
})
