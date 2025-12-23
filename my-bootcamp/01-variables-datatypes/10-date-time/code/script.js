/*
Date and Time 
- JavaScript Date objects represent a single moment in time in a platform-independent format. 
- Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


References: 
- https://javascript.info/date
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

*/ 
////////////////////////////////////////////////////////////////

let d;

// Get today's date and time
d = new Date();

console.log( d );
// Set to a string
d = d.toString();

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

/* 
- Date.now(): Get current timestamp
- 'Date.now()' is semantically equivalent to 'new Date().getTime()', but it doesn’t create an intermediate Date object. 
- So it’s faster and doesn’t put pressure on garbage collection.
*/
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);

////////////////////////////////////////////////////////////////
// Date Diff: Measuring time intervals
let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
//The important side effect of using timestamps: dates can be subtracted, the result is their difference in ms.
console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates

////////////////////////////////////////////////////////////////
// Date methods
d = new Date(); // Current date and time
let x;

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate(); // Day of the month

x = d.getDay(); // Day of the week (0 - Sunday, 6 - Saturday)

x = d.getHours(); // Hours (0-23)

x = d.getMinutes(); // Minutes (0-59)

x = d.getSeconds(); // Seconds (0-59)

x = d.getMilliseconds(); // Milliseconds (0-999)

x = d.getTime(); // Timestamp (milliseconds since Jan 1, 1970)

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);