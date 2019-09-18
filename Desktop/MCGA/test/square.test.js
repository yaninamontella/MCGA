const assert = require('assert')
const Square = require('../square')

describe('Square', () => {

    describe('constructor', () => {
  
      it('Should return 0 when created without parameters', () => {
        const data = new Square()
        const result = data.side
        const expected = 0
        assert.deepEqual(result, expected)
      })

      it('Should return 0 when created with undefined parameters', () => {
        const data = new Square(undefined)
        const result = data.side
        const expected = 0
        assert.deepEqual(result, expected)
      })
  
      it('Should return 5 when created with side =5', () => {
        const data = new Square(5)
        const result = data.side
        const expected = 5
        assert.deepEqual(result, expected)
      })
  
      it('Should return a when created with string a', () => {
        const data = new Square('a')
        const result = data.side
        const expected = 'a'
        assert.deepEqual(result, expected)
      })

    }) 


    describe('set height', () => {

        it('Should return float when side is float', () => {
            const data = new Square(10.5)
          const result = data._height
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._height
          const expected = 999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('get height', () => {
    
        it('Should return float when side is float', () => {
          const data = new Square(10.5)
          const result = data._height
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._height
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('set width', () => {
    
        it('Should return float when side is float', () => {
          const data = new Square(10.5)
          const result = data._width
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._width
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('get width', () => {
    
        it('Should return float when side is float', () => {
          const data = new Square(10.5)
          const result = data._width
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._width
          const expected =999
          assert.deepEqual(result, expected)
        })
      })

      describe('set side', () => {
    
        it('Should return float when side is float', () => {
          const data = new Square(10.5)
          const result = data._side
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._side
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('get side', () => {
    
        it('Should return float when side is float', () => {
          const data = new Square(10.5)
          const result = data._side
          const expected =10.5
          assert.deepEqual(result, expected)
        })
    
        it('Should return int when side is int', () => {
          const data = new Square(999)
          const result = data._side
          const expected =999
          assert.deepEqual(result, expected)
        })
      })
    
      describe('Area', () => {
    
        it('Should return 0 when is created with side =0 ', () => {
          const data = new Square(0)
          const result = data.area
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return 16 when is created with side = 4 ', () => {
          const data = new Square(4)
          const result = data.area
          const expected = 16
          assert.equal(result, expected)
        })
    
        it('Should return 1 when is created with side = -1', () => {
          const data = new Square(-1)
          const result = data.area
          const expected = 1
          assert.equal(result, expected)
        })
    
      describe('calculatePerimeter()', () => {
    
        it('Should return 12 when is created with side = 3', () => {
          const data = new Square(3)
          const result = data.calculatePerimeter()
          const expected = 12
          assert.equal(result, expected)
        })
    
        it('Should return 0 when is created with side = 0', () => {
          const data = new Square(0)
          const result = data.calculatePerimeter()
          const expected = 0
          assert.equal(result, expected)
        })
    
        it('Should return -4 when is created with side =-1', () => {
          const data = new Square(-1)
          const result = data.calculatePerimeter()
          const expected = -4
          assert.equal(result, expected)
        })
      }) 
    }) 
}) 