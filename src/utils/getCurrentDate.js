export function showCurrentDateAndMonth() {
    const currentDate = new Date();
  
    // Options for formatting the date
    const options = {
      weekday: 'long', // displays the full name of the day
      month: 'long',   // displays the full name of the month
      day: 'numeric',  // displays the day of the month
      year: 'numeric'  // displays the year
    };
  
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
   return `${formattedDate}`;
  }
  
  // Call the function to display the current date and month
  showCurrentDateAndMonth();
  
  