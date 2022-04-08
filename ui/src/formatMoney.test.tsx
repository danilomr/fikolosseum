import 'should';
import { formatMoney } from '@fnox/fabstracta-platform';

describe('formatMoney', () => {
	it('should handle 0', () => {
		formatMoney(0).should.equal('0,00');
	});

	it('should handle undefined', () => {
		formatMoney(undefined).should.equal('0,00');
	});

	it('should handle null', () => {
		formatMoney(null).should.equal('0,00');
	});

	it('should handle "0"', () => {
		formatMoney('0').should.equal('0,00');
	});

	it('should round decimal string', () => {
		formatMoney('0.9999').should.equal('1,00');
	});

	it('should round number', () => {
		formatMoney(0.9999).should.equal('1,00');
	});
});
