//1. Vsya-Clerk *** (3 hours with hint) 6level
````
https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

```
function tickets(peopleInLine){
// portfolio[25 $, 50$]
    let arr = [0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        arr[0]++;
        break;
      case 50:
        [arr[0]--, arr[1]++]
        break;
        //case 100:
      default:
        (arr[1]) ? arr[1]-- : arr[0] -= 2;
        arr[0]--;
        break;
    }
    if (arr[0] < 0) { return 'NO'; }
  }
  return 'YES';
}
```
//2. Valid Parentheses 5 level
````
https://www.codewars.com/kata/52774a314c2333f0a7000688

```
function validParentheses(parens){
   let arr = [];
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === ")") {
      if(arr.length <= 0) {
        return false;
      } else {
        arr.shift();
      }
    }
    if(parens[i] === "(") {
      arr.push(")")
    }
  }

  return arr.length ? false : true;
}

```
//3. Sum Strings as Numbers 4 level
````
https://www.codewars.com/kata/5324945e2ece5e1f32000370
```
function sumStrings(a, b) {
    var arrA = a.split("").reverse().map( a => parseInt(a)), arrB = b.split("").reverse().map( b => parseInt(b));
    var maxLength = Math.max(a.length, b.length), carry = 0, num = "";

    for(var i = 0; i < maxLength; i++) {
        if(isNaN(arrA[i])) { arrA.push(0);}
        if(isNaN(arrB[i])) { arrB.push(0);}

        if(arrA[i] + arrB[i] + carry > 9) {
            num += ((arrA[i] + arrB[i] + carry) % 10).toString();
            carry = 1;
            if (i === maxLength - 1 && carry === 1)
                num += "1";
        }  else {
            num += ((arrA[i] + arrB[i] + carry) % 10).toString();
            carry = 0;
        }
    }
    return num.split("").reverse().join("").replace(/\b0+/g, '');
}
```
//4. Simple Fun #352: Reagent Formula 8 level
````
https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/javascript
````
function isValid(formula){
  const firstRule = !(formula.includes(1) && formula.includes(2));
  const secondRule = !(formula.includes(3) && formula.includes(4));
  const thirdRule = formula.includes(5) === formula.includes(6);
  const fourthRule = formula.includes(7) || formula.includes(8);

  return firstRule && secondRule && thirdRule && fourthRule;

}
````
//5. Bingo Card 6 level
````
https://www.codewars.com/kata/bingo-card/javascript
```
function genRange(array, letter, start, end, count) {
  let arr = [];
  for(let i = 0; i < count; ) {
    r = Math.floor(Math.random() * (end - start) + start);
    if(arr.indexOf(r) == -1) {
      arr.push(r);
      array.push(letter + r);
      i++;
    }
  }
}
function getCard()
{
  let arr = [];
  genRange(arr, "B", 1, 15, 5);
  genRange(arr, "I", 16, 30, 5);
  genRange(arr, "N", 31, 45, 4);
  genRange(arr, "G", 46, 60, 5);
  genRange(arr, "O", 61, 75, 5);
  return arr;
}

````
//6. Integer to English

//7.Check three and two
````
https://www.codewars.com/kata/check-three-and-two/javascript
````
function checkThreeAndTwo(array) {
  let a = array.filter(x =>x === 'a').length;
  let b = array.filter(x =>x === 'b').length;
  let c = array.filter(x =>x === 'c').length;
  return (a === 3 || b === 3 || c=== 3)
          && (a === 2 || b === 2 || c === 2);
}

```````