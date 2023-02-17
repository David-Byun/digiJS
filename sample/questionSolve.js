// 1번
console.log('----------------------');
console.log('1번');

var w = 15;
if (10 < w < 20) {
  console.log(w);
}

// 2번
console.log('----------------------');
console.log('2번');

for (var r = 0; r < 10; r++) {
  if (r % 2 == 0) {
    console.log(r);
  }
}

// 3번
console.log('----------------------');
console.log('3번');

let large = '';
for (let o = 0; o < 10; o++) {
  if (o % 2 == 0) {
    large += o;
  }
}
console.log(large);

// 4번
console.log('----------------------');
console.log('4번');

for (let u = 10; u > 0; u--) {
  if (u % 2 != 0) {
    console.log(u);
  }
}

// 5번

console.log('----------------------');
console.log('5번');

let c = 0;
while (c < 11) {
  if (c == 0) {
    console.log(c);
  }
  c++;
  if (c % 2 == 0) {
    console.log(c);
  }
}

// 6번

console.log('----------------------');
console.log('6번');

var odd = 10;
while (odd > 0) {
  if (odd % 2) console.log(odd);
  odd--;
}

// 7번
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log('----------------------');
console.log('7번' + sum);

// 8번
var totalSum = 0;
for (var i = 0; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    continue;
  } else {
    totalSum += i;
  }
}
console.log('----------------------');
console.log('8번' + totalSum);

// 9번
var multiSum = 0;
for (var i = 0; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    multiSum += i;
  } else {
    continue;
  }
}
console.log('----------------------');
console.log('9번' + multiSum);
