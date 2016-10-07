//* 当 n === 0 时，返回 0；n === 1时，返回 1;
//* n > 1 时，返回 `fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)`，如 `fibonacci(10) === 55`;
//* n 不可大于10，否则抛错，因为 Node.js 的计算性能没那么强。
//* n 也不可小于 0，否则抛错，因为没意义。
//* n 不为数字时，抛错。

var index=require('../index');
var should=require('should');

describe('test/index.test.js',function(){ //主体
		it('should equal 55 when n===10',function(){ //case
			index.fibonacci(10).should.equal(55);
		});
		it('should equal 0 when n===0',function(){
			index.fibonacci(0).should.equal(0);
		});
		it('should equal 1 when n===1',function(){
			index.fibonacci(1).should.equal(1);
		});
		it('should throw when n > 10',function(){
			(function(){
				index.fibonacci(11);
			}).should.throw('n should <= 10');
		});
		it('should throw when n < 0',function(){
			(function(){
				index.fibonacci(-1);
			}).should.throw('n should >= 0');
		});
		it('should throw when n isnt Number',function(){
			(function(){
				index.fibonacci('?');
			}).should.throw('n should is a number');
		});
	});