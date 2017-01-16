var gulp = require('gulp'),
	assert = require('assert'),
	s = require('string'),
	expect = require('chai').expect,
	fs = require('fs');

process.env.NODE_ENV = 'test';
 
describe('Homepage', function () {

	it('should load the page properly', function(done) {

		var body = fs.readFileSync("tests/fixtures/home.html", "utf8");
		assert( s(body).contains("<h1>Hello world</h1>") );

		done();
		
	});
});
