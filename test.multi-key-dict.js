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
		should.exist(dict.items.a.b.c.d);
	});

	it('should add value using array type keys', function() {
		var dict = new Dict();
		dict.add(['a', 'b', 'c', 'd'], 1);
		should.exist(dict.items.a.b.c.d);
	});
});


describe('get method', function() {
	it('should get 1 for a,b,c,d keys', function() {
		var dict = new Dict();
		dict.add('a', 'b', 'c', 'd', 1);
		(dict.get('a', 'b', 'c', 'd')).should.equal(1);
	});
});

describe('remove method', function() {
	it('should get empty for a, b, c, d', function() {
		var dict = new Dict();
		dict.add('a', 'b', 'c', 'd', 1);
		dict.add(['a', 'b', 'cc', 'd'], 1);
		dict.remove('a', 'b', 'c', 'd');

		should.not.exist(dict.items.a.b.c.d);
		should.exist(dict.items.a.b.c);
		should.exist(dict.items.a.b.cc);
	});
});