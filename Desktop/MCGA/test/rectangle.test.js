const assert = require('assert')
const Rectangle = require('../rectangle')

describe('Rectangle', () => {

    describe('constructor', () => {
  
      it('Should return [0,0] when created without parameters', () => {
        const data = new Rectangle()
        const result = [data._height, data._width]
        const expected = [0, 0]
        assert.deepEqual(result, expected)
      })

      it('Should return [0,0] when created with undefined parameters', () => {
        const data = new Rectangle(undefined, undefined)
        const result = [data._height, data._width]
        const expected = [0, 0]
        assert.deepEqual(result, expected)
      })
  
      it('Should return [0,0] when created with numbers', () => {
        const data = new Rectangle(5, 10)
        const result = [data._height, data._width]
        const expected = [5, 10]
        assert.deepEqual(result, expected)
      })
  
      it('Should return [0,0] when created with strings', () => {
        const data = new Rectangle('a', 'b')
        const result = [data._height, data._width]
        const expected = ['a', 'b']
        assert.deepEqual(result, expected)
      })

    }) 


    describe('set height', () => {

        it('Should return float when height is float', () => {
          const data = new Rectangle(10.5, 0)
          const result = data._height
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when height is int', () => {
          const data = new Rectangle(999, 0)
          const result = data._height
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('get height', () => {
    
        it('Should return float when height is float', () => {
          const data = new Rectangle(10.5, 0)
          const result = data._height
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when height is int', () => {
          const data = new Rectangle(999, 0)
          const result = data._height
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('set width', () => {
    
        it('Should return float when width is float', () => {
          const data = new Rectangle(0, 10.5)
          const result = data._width
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when width is int', () => {
          const data = new Rectangle(0, 999)
          const result = data._width
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('get width', () => {
    
        it('Should return float when width is float', () => {
          const data = new Rectangle(0, 10.5)
          const result = data._width
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when width is int', () => {
          const data = new Rectangle(0, 999)
          const result = data._width
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('Area', () => {
    
        it('Should return 0 when height = 0 ', () => {
          const data = new Rectangle(0, 5)
          const result = data.area
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return 0 when width = 0 ', () => {
          const data = new Rectangle(5, 0)
          const result = data.area
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return 0 when width and height are 0 ', () => {
          const data = new Rectangle(0, 0)
          const result = data.area
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return -1 when  width =-1 and height=1 ', () => {
          const data = new Rectangle(-1, 1)
          const result = data.area
          const expected = -1
          assert.equal(result, expected)
        })
    
        it('Should return -1 when  width =1 and height=-1 ', () => {
          const data = new Rectangle(1,-1)
          const result = data.area
          const expected = -1
          assert.equal(result, expected)
        })
    
        it('Should return 1 when  width =-1 and height=-1 ', () => {
          const data = new Rectangle(-1,-1)
          const result = data.area
          const expected = 1
          assert.equal(result, expected)
        })
      })
    
      describe('calculatePerimeter()', () => {
    
        it('Should return 10 when height = 0 and height=5', () => {
          const data = new Rectangle(0, 5)
          const result = data.calculatePerimeter()
          const expected = 10
          assert.equal(result, expected)
        })
    
        it('Should return 10 when height = 5 and height=0', () => {
          const data = new Rectangle(5, 0)
          const result = data.calculatePerimeter()
          const expected = 10
          assert.equal(result, expected)
        })
    
        it('Should return 0 when height = 0 and height=0', () => {
          const data = new Rectangle(0, 0)
          const result = data.calculatePerimeter()
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return 0 when height = -1 and height=1', () => {
          const data = new Rectangle(-1, 1)
          const result = data.calculatePerimeter()
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return 0 when height = 1 and height=-1', () => {
          const data = new Rectangle(1,-1)
          const result = data.calculatePerimeter()
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return -8 when height = -2 and height=-2', () => {
          const data = new Rectangle(-2,-2)
          const result = data.calculatePerimeter()
          const expected = -8
          assert.equal(result, expected)
        })
    
        it('Should return 10 when height = 2 and height=3', () => {
          const data = new Rectangle(2,3)
          const result = data.calculatePerimeter()
          const expected = 10
          assert.equal(result, expected)
        })
      }) 
}) 