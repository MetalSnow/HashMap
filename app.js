import HashMap from './hashMap.js';
import HashSet from './HashSet.js';

// HashMap TEST

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('elephant', 'cyan'); // overwrites elephant

test.set('moon', 'silver'); // reached the load factor, double the size of buckets

test.set('moon', 'diamond'); // overwrites moon

console.log(test.buckets);

console.log(test.get('lion')); // golden
console.log(test.has('hat')); // true
console.log(test.remove('carrot')); // true
console.log(test.length()); // 12
console.log(test.keys()); // ['moon','frog','banana','grape','ice cream','jacket','kite','elephant','apple','hat','dog','lion',]
console.log(test.values()); // ['diamond','green','yellow','purple','white','blue','pink','cyan','red','black','brown','golden',]
console.log(test.entries()); // [[ 'moon', 'diamond' ],[ 'frog', 'green' ],[ 'banana', 'yellow' ],[ 'grape', 'purple' ],[ 'ice cream', 'white' ],[ 'jacket', 'blue' ],[ 'kite', 'pink' ],[ 'elephant', 'cyan' ],[ 'apple', 'red' ],[ 'hat', 'black' ],[ 'dog', 'brown' ],[ 'lion', 'golden' ]]
console.log(test.clear()); // Cleared
console.log(test.buckets); // [ <16 empty items> ]

// HashSet TEST

const testSec = new HashSet();

testSec.set('apple');
testSec.set('banana');
testSec.set('carrot');
testSec.set('dog');
testSec.set('elephant');
testSec.set('frog');
testSec.set('grape');
testSec.set('hat');
testSec.set('ice cream');
testSec.set('jacket');
testSec.set('kite');
testSec.set('lion');

testSec.set('moon'); // reached the load factor, double the size of buckets

console.log(testSec.buckets);

console.log(testSec.get('lion')); // golden
console.log(testSec.has('hat')); // true
console.log(testSec.remove('carrot')); // true
console.log(testSec.length()); // 12
console.log(testSec.keys()); // ['moon','frog','banana','grape','ice cream','jacket','kite','elephant','apple','hat','dog','lion',]
console.log(testSec.clear()); // Cleared
console.log(testSec.buckets); // [ <16 empty items> ]
