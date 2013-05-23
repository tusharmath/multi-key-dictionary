var Dict = require('./multi-key-dict');
var should = require('should');

describe('Check of properties', function() {
	it('should have items property', function() {
		var dict = new Dict();
		dict.should.have.property('items');
	});
});


describe('Check of methods', function() {

	var methods = ['add', 'get', 'remove'];
	it('should have val add methods - ' + methods.join(', '), function() {
		var dict = new Dict();
		methods.forEach(function(m) {
			dict.should.have.property(m);
			dict[m].should.be.a('function');
		});
	});

});

describe('add method', function() {
	it('should add keys to items property', function() {
		var dict = new Dict();
		dict.add('a', 'b', 'c', 'd', 1);
		dict.items.should.eql({
			a: {
				b: {
					c: {
						d: 1
					}
				}
			}

		});

	});
});

describe('get method', function() {
	it('should get 1 for a,b,c,d keys', function() {
		var dict = new Dict();
		dict.add('a', 'b', 'c', 'd', 1);
		(dict.get('a', 'b', 'c', 'd')).should.equal(1);
	});
});