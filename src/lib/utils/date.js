/**
 * @param {number} start 
 * @param {number} end
 * @returns {string}
 */
export function getYearFromRange(start, end) {
  const sDate = new Date(start * 1000);
  const eDate = new Date(end * 1000);
  return Math.floor((eDate.getFullYear() + sDate.getFullYear()) / 2);
}

/**
 * Format into `<start month> <start year> - <end month> <end year>`
 * @param {number} start 
 * @param {number} end
 * @returns {string}
 */
export function formatDateRange(start, end) {
  const sDate = new Date(start * 1000);
  const eDate = new Date(end * 1000);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul", 
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[sDate.getMonth()]} ${sDate.getFullYear()} - ${monthNames[eDate.getMonth()]} ${eDate.getFullYear()}`;
}
