var dateDiffInDays = function (date1, date2) {
  const onday = 24 * 60 * 60 * 1000;
	const firstDay = new Date(date1);
	const secondDay = new Date(date2);

	const DifferenceBtw = (secondDay.getTime() - firstDay.getTime());

	const accurateDiff = Math.round(DifferenceBtw/onday);
	return accurateDiff;
};

// Do not change the code bel
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
