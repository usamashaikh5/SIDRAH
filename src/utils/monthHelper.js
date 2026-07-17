/**
 * Returns a rolling list of exactly 5 active departure batch months.
 * - Starting point is September 2026.
 * - If the current date is before September 2026, it shows September to January.
 * - Once September 2026 starts, it dynamically rolls forward to always show the current month and the next 4 months.
 * - Years are hidden from the visual names, but the list updates dynamically in the background.
 */
export function getActiveMonths() {
  const currentDate = new Date();
  
  // absolute start: September 2026
  const startYear = 2026;
  const startMonthIndex = 8; // September is 8 (0-indexed: Jan=0, Dec=11)
  
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth(); // 0-11
  
  // Determine start month index and year for the 5-month rolling window
  let activeYear = currentYear;
  let activeMonthIndex = currentMonthIndex;
  
  // If the current date is prior to September 2026, lock the starting month to September 2026.
  if (currentYear < startYear || (currentYear === startYear && currentMonthIndex < startMonthIndex)) {
    activeYear = startYear;
    activeMonthIndex = startMonthIndex;
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const result = [];
  
  for (let i = 0; i < 5; i++) {
    const targetMonthIndex = (activeMonthIndex + i) % 12;
    result.push(monthNames[targetMonthIndex]);
  }
  
  return result;
}
