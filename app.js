// File system module to read and manipulate files such as .txt
const fs = require("fs");
// Rates object exported
const rates = require("./rates");

fs.readFile("employee_shifts.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    calculatePayment(data)
  }
});

// @desc Function to parse the input string and calculate the total payment
// @args input | string
// @returns N/A
function calculatePayment(input) {
  // Separate into array the employees
  const employeeData = input.split('/');
  for (const employee of employeeData) {
    // Destructure and split name and schedule by =
    const [name, schedule] = employee.split('=');
    // Work hours split
    const workHours = schedule.split(',');
    let totalPayment = 0;
    for (const workHour of workHours) {
      // For each work hour we get the day, start and end
      const day = workHour.substring(0, 2);
      const start = workHour.substring(2, 7);
      const end = workHour.substring(8);
      // For each day we get it's corresponding dayRates
      const dayRates = rates[day];
      for (const dayRate of dayRates) {
        // We check if the start and end work hours are in between on the rates that we have by day
        if (isBetween(start, dayRate.start, dayRate.end) && isBetween(end, dayRate.start, dayRate.end)) {
          // If it is, we send the start and end to calculate the work minutes
          const workMinutes = getWorkMinutes(start, end);
          // We add to its current value while transforming the minutes to hours
          totalPayment += workMinutes * dayRate.rate / 60;
          break;
        }
      }
    }
    console.log(`The amount to pay ${name} is: ${totalPayment.toFixed(2)} USD`);
  }
}

// @desc Function to check if a time is in between two other times
// @args time | string
// @args start | string
// @args end | string
// @returns false or true
function isBetween(time, start, end) {
  if (start <= end) {
    return time >= start && time <= end;
  } else {
    return time >= start || time <= end;
  }
}

// @desc Function to calculate the number of minutes worked between two times
// @args start | string
// @args end | string
// @returns number of minutes worked
function getWorkMinutes(start, end) {
  const startHour = parseInt(start.split(':')[0]);
  const endHour = parseInt(end.split(':')[0]);
  const totalStartMinutes = startHour * 60;
  const totalEndMinutes = endHour * 60;
  return totalEndMinutes - totalStartMinutes;
}
