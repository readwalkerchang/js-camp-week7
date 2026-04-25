const dayjs = require('dayjs');

const DateCalculator = {
  calDateDiff(startDate, pastDate) {
    return startDate.diff(pastDate, 'day');
  },
  getDayDiffFromNow(timestamp) {
    const today = dayjs();
    const purchaseDate = dayjs.unix(timestamp);
    return this.calDateDiff(today, purchaseDate);
  }
};

module.exports = DateCalculator;
