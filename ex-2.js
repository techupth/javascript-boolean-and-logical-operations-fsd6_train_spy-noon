// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "Friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = (lastMonthPaidMoreThan4000 >= 4000) && ((isWeekday == "Monday")||(isWeekday == "Tuesday")||(isWeekday == "Wednesday")||(isWeekday == "Thursday")||(isWeekday == "Friday")) && hasBoughtProductFromITCategory && hasAttendedDiscountEvent || (isPlatinum) ;


console.log(lastMonthPaidMoreThan4000);
console.log(isWeekday);
console.log(hasBoughtProductFromITCategory);
console.log(hasAttendedDiscountEvent);
console.log(isPlatinum);
console.log(hasPromotion);

