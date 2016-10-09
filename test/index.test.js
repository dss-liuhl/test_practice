//* �� n === 0 ʱ������ 0��n === 1ʱ������ 1;
//* n > 1 ʱ������ `fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)`���� `fibonacci(10) === 55`;
//* n ���ɴ���10�������״���Ϊ Node.js �ļ�������û��ôǿ��
//* n Ҳ����С�� 0�������״���Ϊû���塣
//* n ��Ϊ����ʱ���״�

//should ģ�飬�Ǹ����Կ⡣
//��� ruby ��ͬѧӦ��֪�� rspec��rspec ���Ѳ��Կ�ܺͶ��Կ������һ�����ˣ�
//���� Node.js �У����������������÷ֱ��� mocha �� should ��Э����ɡ�

//should �� js �� Object �����ࡱ��ע����һ�� #should ���ԣ�
//��������У�����������������Կ��Ա����ʡ�

//�������һ�����ǲ��Ǵ���3������ (5).should.above(3)��
//����һ���ַ����Ƿ������ض�ǰ׺��'foobar'.should.startWith('foo');��
//should.js API �ڣ�https://github.com/tj/should.js

var index=require('../index');
var should=require('should');

describe('test/index.test.js',function(){ //������
		it('should equal 55 when n===10',function(){ //��������
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