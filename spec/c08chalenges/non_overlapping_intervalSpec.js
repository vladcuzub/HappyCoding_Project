const insertInterval = require('../../src/c08challenges/non_overlapping_interval')

describe('No overlapping intervals', function () {
    it('Should insert the interval in the correct position', function () {

        let intervals = [[1, 3], [6, 9]]
        let newInterval = [2, 5]

        let result = insertInterval(intervals, newInterval)

        expect(result).toEqual([[1, 5], [6, 9]])
    })
    it('Should insert the interval in the correct position', function () {

        let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
        let newInterval = [4, 9]

        let result = insertInterval(intervals, newInterval)

        expect(result).toEqual([[1, 2], [3, 10], [12, 16]])
    })

})