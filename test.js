import test from 'ava';
import fn from './';

test('abc', t => {
	t.is(fn('abc'), 3);
});

test('牛丼', t => {
	t.is(fn('牛丼'), 4);
});

test('abc牛丼', t => {
	t.is(fn('abc牛丼'), 7);
});
