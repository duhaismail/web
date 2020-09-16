
//=============================================================================
/*                              Q1                                           */
//=============================================================================


function wordLength(str) {
  // TODO: your code here
  var newStr = str.split(" ");
  var newArr = [];
  for (var i = 0; i < newStr.length; i++) {
    newArr[i] = newStr[i].length;
  }
  return newArr;
}

//=============================================================================
/*                                  Q2                                    */
//=============================================================================


function countOccurrences(string, character) {
  // TODO: your code here
  str = string.split("");
  return reduce(
    str,
    function (count, char) {
      if (char === character) {
        count += 1;
      }
      return count;
    },
    0
  );
}

//=============================================================================
/*                                  Q3                                    */
//=============================================================================


function wordsLongerThanThree(str) {
  // TODO: your code here
  var newArr = str.split(" ");
  return filter(newArr, function (word, i) {
    return word.length > 3;
  });
}

//=============================================================================
/*                                  Q4                                        */
//=============================================================================


function repeatString(str, count) {
  // TODO: your code here
  if (count < 0) return "";
  if (count === 1) return str;
  else return str + repeatString(str, count - 1);
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================


function favoriteFood(name, favoriteFood) {
  // TODO: your code here
  return {
    name: name,
    favoriteFood: favoriteFood,
  };
}

function sayFavoriteFood(object) {
  // TODO: your code here
  return object.name + "'s favorite food is " + object.favoriteFood;
}

//=============================================================================
/*                                  Q6                                      */
//=============================================================================

function Circle(radius) {
  var circle = {};
  circle.radius = radius;
  circle.increaseRadius = increaseRadius;
  circle.circleArea = circleArea;
  circle.circlePerimeter = circlePerimeter;

  return circle;
}
function increaseRadius(n) {
  this.radius = this.radius + n;
}
function circleArea() {
  return this.radius * this.radius * 3.14;
}
function circlePerimeter() {
  return 2 * 3.14 * this.radius;
}
var circle1 = Circle(20);
var circle2 = Circle(10);
var circles = [circle1, circle2];
function displayCircles(circles) {
  // console.log(circules[0]);
  for (var i = 0; i < circles.length; i++) {
    console.log(
      "Radius is " +
        circles[i].radius +
        "\nArea : " +
        circles[i].circlePerimeter() +
        "\nPerimeter : " +
        circles[i].circlePerimeter()
    );
  }
}
//=============================================================================
/*                                  Q7                                       */
//=============================================================================


function multiplier(x, y) {
  // TODO: your code here
  var x = x;
  function multiply(n) {

    return x * n;
  }
  return multiply;
}

//=============================================================================
/*                                  Q8                                       */
//=============================================================================


function indexesOnly(array) {
  // TODO: your code here
  for (var i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array;

}
//=============================================================================
/*                                  Q9                                       */
//=============================================================================

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45],
};

//Your function should output a string with the times the user is interested in.

//Calling your function should result in something like:
displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."

//Of course, depending on the input value, it should output correct values..
displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."

function displayBusTimes(busScheduleObj, busLine) {
  // TODO: your code here
  return (
    "The bus will arrive in the next [" + busScheduleObj[busLine] + "] minutes."
  );
}

//=============================================================================
/*                                  Q10                                      */
//=============================================================================
//Short Answer Questions
//In your own words, no more than 3 sentences, answer the following:

//Q1:When accessing object properties, what is the difference between dot
// notation and bracket notation?
//in dot notation can be changed but in bracket it can read only
//Q2 :What does the typeof operator do?
//It's type is : 

//Q3 :How do we add a property to an object?
//by but objectName.theProperty
//or another method : objectName["property"];