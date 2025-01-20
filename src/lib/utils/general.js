export function cssStringify(obj) {
  return Object.keys(obj).map(k => `${k}: ${obj[k]}`).join(';');
}

export function formatIndex(index) {
  return (
    index > 8
      ? index + 1
      : "0" + (index + 1)
  );
}

export function timestampToMonthYear(timestamp) {
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
  // multiply by 1000 to convert seconds to miliseconds
  const d = new Date(timestamp * 1000);
  return monthNames[d.getMonth()] + " " + d.getFullYear();
}
