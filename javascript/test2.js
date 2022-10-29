// leap year.
//  2020 2000 1700 2022
// leap year :
// in between century : it should be divisible by 4
// century : it should be divisible by 400

var year = 2100;

// apply checklist of leap year on the provided year.
// decision on year : whether it is a leap year.
if(year%4 == 0 && year%100 != 0  ||  year%400 == 0) {
    console.log("year is a leap year");
} else {
    console.log("year is not a leap year");
}

// %4 : it will give you remainder: in between the century
// %400 : to century only
