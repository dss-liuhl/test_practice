//* 当 n === 0 时，返回 0；n === 1时，返回 1;
//* n > 1 时，返回 `fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)`，如 `fibonacci(10) === 55`;
//* n 不可大于10，否则抛错，因为 Node.js 的计算性能没那么强。
//* n 也不可小于 0，否则抛错，因为没意义。
//* n 不为数字时，抛错。

//should 模块，是个断言库。
//玩过 ruby 的同学应该知道 rspec，rspec 它把测试框架和断言库的事情一起做了，
//而在 Node.js 中，这两样东西的作用分别是 mocha 和 should 在协作完成。

//should 在 js 的 Object “基类”上注入了一个 #should 属性，
//这个属性中，又有着许许多多的属性可以被访问。

//比如测试一个数是不是大于3，则是 (5).should.above(3)；
//测试一个字符串是否有着特定前缀：'foobar'.should.startWith('foo');。
//should.js API 在：https://github.com/tj/should.js

var index=require('../index');
var should=require('should');

describe('test/index.test.js',function(){ //测试套
		it('should equal 55 when n===10',function(){ //测试用例
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