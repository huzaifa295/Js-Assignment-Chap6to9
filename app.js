// J.S Assignment 6 to 9 Chapter

// Question # 1

var a=10
console.log("The value of a is ",a)

var valuea=++a
console.log("The value of ++a is: ", valuea)
console.log("Now the value of a is: ", a)

var valuea=a++
console.log("The value of a++ is: ", valuea)
console.log("Now the value of a is: ", a)

var valuea=--a
console.log("The value of --a is: ", valuea)
console.log("Now the value of a is: ", a)

var valuea=a--
console.log("The value of a-- is: ", valuea)
console.log("Now the value of a is: ", a)

// Question # 2

var a = 2, b = 1;

var valuea=--a
console.log(valuea)

var a = 2, b = 1;
var valueab=--a - --b;
console.log(valueab)

var a = 2, b = 1;
var valueab=--a - --b + ++b;
console.log(valueab)

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result)

// Question # 3

var user_name=prompt("Enter your name")
console.log(user_name)
alert("Assalam O Alaikum !")

// Question # 5

var num=+prompt("Enter your Numer",5)
console.log(num)

// Question # 6

var user_subject1 = prompt("Enter your subject");
console.log("User subject is:", user_subject1);

var total_marks1 = 100;
console.log("Total marks is: ", total_marks1);

var user_marks1 = +prompt("Enter your marks");
console.log("User marks is: ", user_marks1);

var user_subject2 = prompt("Enter your subject");
console.log("User subject is:", user_subject2);

var total_marks2 = 100;
console.log("Total marks is: ", total_marks2);

var user_marks2 = +prompt("Enter your marks");
console.log("User marks is: ", user_marks2);

var user_subject3 = prompt("Enter your subject");
console.log("User subject is:", user_subject3);

var total_marks3 = 100;
console.log("Total marks is: ", total_marks3);

var user_marks3 = +prompt("Enter your marks");
console.log("User marks is: ", user_marks3);

var total_marks=total_marks1+total_marks2+total_marks3

var user_total_marks = user_marks1 + user_marks2 + user_marks3;
console.log("User total obtained marks is: ", user_total_marks);

var user_percentage=user_total_marks/total_marks*100
console.log("User Percentage is: ", user_percentage,"%")