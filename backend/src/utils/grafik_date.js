export const grafikDate = (dateStr = null) => {
  const selectedDate = dateStr ? new Date(dateStr) : new Date();

  const todayStart = new Date(selectedDate);
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date(selectedDate);
  todayEnd.setHours(23, 59, 59, 999);

  const sevenDaysAgo = new Date(todayStart);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  return { todayStart, todayEnd, sevenDaysAgo };
};
