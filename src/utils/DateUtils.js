function formatDate(timestamp) {
    const date = new Date(timestamp);
  
    // Extracting individual components
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getFullYear();
  
    // Padding with leading zeros if needed
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
  
    // Creating the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  
    return formattedDate;
}

module.exports = {formatDate};