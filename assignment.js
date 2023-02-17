//2번
console.log('=================================');
console.log('2번');
console.log('=================================');
let name = '김';
console.log('hi' + name);
function ignore() {
  return true;
}
ignore();

//3번
console.log('=================================');
console.log('3번');
console.log('=================================');
function variables() {
  const myAge = 21;
  const yourAge = 29;
  return myAge + yourAge;
}
console.log(variables());

//4번
console.log('=================================');
console.log('4번');
console.log('=================================');

function checkYear() {
  const toDay = new Date().getFullYear();
  return toDay;
}
console.log(checkYear());

//5번
console.log('=================================');
console.log('5번');
console.log('=================================');

function addTen(num) {
  return num + 10;
}
console.log(addTen(10));

//6번
console.log('=================================');
console.log('6번');
console.log('=================================');

function mathExpression() {
  let result = ((5 + 6) * 10) / 2 / 5;
  return result;
}
console.log(mathExpression());

//7번
console.log('=================================');
console.log('7번');
console.log('=================================');

function textConcatenation() {
  let sum = 2 + 2;
  let text = `2 더하기 2는 ${sum}`;
  return text;
}
console.log(textConcatenation());

//7번
console.log('=================================');
console.log('7번');
console.log('=================================');

function myFavoriteColor(color) {
  if (color === 'navy') {
    return 'Good!';
  } else if (color === 'yellow') {
    return 'Bad!';
  } else {
    return 'Whatever!';
  }
}
console.log(myFavoriteColor('navy'));
console.log(myFavoriteColor('yellow'));
console.log(myFavoriteColor('red'));

//8번
console.log('=================================');
console.log('8번');
console.log('=================================');

function canIDrinkSoju(age) {
  if (age < 20) {
    return '애야 가서 공부나 해라!';
  } else if (age >= 50) {
    return '건강을 위해서 술은 적당히 마시세요!';
  } else {
    return '소주에는 곱창 어떠신가요?';
  }
}
console.log(canIDrinkSoju(19));
console.log(canIDrinkSoju(51));
console.log(canIDrinkSoju(30));

//9번
console.log('=================================');
console.log('9번');
console.log('=================================');

function rockPaperScissors(player2, player1) {
  if (player2 === '가위' && player1 === '보') {
    return (result = 'player2');
  } else if (player2 === '바위' && player1 === '가위') {
    return (result = 'player2');
  } else if (player2 === '보' && player1 === '바위') {
    return (result = 'player2');
  } else {
    return (result = 'player1');
  }
}
console.log(rockPaperScissors('가위', '가위'));
console.log(rockPaperScissors('바위', '보'));
console.log(rockPaperScissors('보', '바위'));

//10번
console.log('=================================');
console.log('10번');
console.log('=================================');

function isbiggerThanHundred(num) {
  let myNumber = num;
  if (myNumber > 100) {
    return '크다';
  } else {
    return '작다';
  }
}

//11번
console.log('=================================');
console.log('11번');
console.log('=================================');

function halfNum(value) {
  return value / 2;
}

function halfAddNum(value) {
  let num = halfNum(value);
  return num + 1;
}

console.log(halfAddNum(2));

//12번
console.log('=================================');
console.log('12번');
console.log('=================================');

function meetAt(year, month, date) {
  if (year) {
    return `${year}년`;
  } else if ((year, month)) {
    return `${year}년 ${month}월`;
  } else if ((year, month, date)) {
    return `${year}/${month}/${date}`;
  }
}

console.log(2022);
console.log(2022, 2);
console.log(2022, 2, 3);

//13번
console.log('=================================');
console.log('13번');
console.log('=================================');

function getTax(price) {
  return price * 0.1;
}

function calculateTotal(price) {
  return price + getTax(price);
}

function getTotal(price1, price2) {
  return calculateTotal(price1) + calculateTotal(price2);
}

console.log(getTotal(1000, 2000));

//14번
console.log('=================================');
console.log('14번');
console.log('=================================');

// Assignment1 - 다음 함수 안에 코드를 구현하세요
function getElement() {
  let arr = [3, [4, ['array', 9], 2 + 3], [0]];
  return arr[1][1][0];
}
getElement();

// Assignment2 - 다음 함수 안에 코드를 구현하세요
function addFirstToLast(myArray) {
  if (myArray.length == 0) {
    return 0;
  } else if (myArray.length == 1) {
    return myArray[0];
  } else {
    return myArray[0] + myArray[myArray.length - 1];
  }
}
console.log(addFirstToLast([3, 1, 2, 3]));

//16번
console.log('=================================');
console.log('16번');
console.log('=================================');

function findSmallest(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < result) {
        result = arr[i];
      }
    }
    return result;
  }
}
let baa = [1, 2, 3];
console.log(findSmallest(baa));

//17번
console.log('=================================');
console.log('17번');
console.log('=================================');

function divideInHalf(array) {
  let result = [];
  for (let x = array.length - 1; x >= 0; x--) {
    if (array[x] <= 10) {
      result.unshift(array[x]);
    } else {
      result.push(array[x]);
    }
  }
  return result;
}

console.log(divideInHalf([1, 20, 10, 5, 100]));

//18번
console.log('=================================');
console.log('18번');
console.log('=================================');

function divideInHalf(array) {
  let result = [];
  for (let x = array.length - 1; x >= 0; x--) {
    if (array[x] <= 10) {
      result.unshift(array[x]);
    } else {
      result.push(array[x]);
    }
  }
  return result;
}

console.log(divideInHalf([1, 20, 10, 5, 100]));

//18번
console.log('=================================');
console.log('18번');
console.log('=================================');

function sliceCity(address) {
  let firstChar = address.indexOf('시');
  if (firstChar !== -1) {
    address =
      address.slice(0, firstChar - 3) +
      address.slice(firstChar + 1, address.length);
  } else {
    return '아무것도 없음';
  }
  return address;
}

console.log(sliceCity('경기도 성남시 분당구 집으로 5353'));

//19번
console.log('=================================');
console.log('19번');
console.log('=================================');

let pensionYear = 65;
function pensionRemain(age_string) {
  age_string = Number(age_string);
  let canGetPension = pensionYear - age_string;
  return `앞으로 ${canGetPension}년 남으셨습니다`;
}

console.log(pensionRemain('35'));

//20번
console.log('=================================');
console.log('20번');
console.log('=================================');

function changeAge(birthday) {
  let now = new Date();
  let nowYear = now.getFullYear;
  return nowYear - birthday.getFullYear;
}

//21번
console.log('=================================');
console.log('21번');
console.log('=================================');

function getRandomNum(min, max) {
  let count = 0;
  while (true) {
    let value = Number(window.prompt('행운의 번호를 고르세요.'));
    if (value > max || value < min) {
      alert(`${min}~${max}범위까지 입력해주세요`);
    } else if (value <= max && value >= min) {
      let number = Math.floor(Math.random() * (max + 1));
      if (value !== number) {
        count++;
        alert(`${count} 번째 시도 실패`);
      } else if (value === number) {
        alert('정답입니다!');
        break;
      }
    }
  }
}

//22번
console.log('=================================');
console.log('22번');
console.log('=================================');

// index.js
function getData(salesArr, reviewArr, likeArr) {}
