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

const ValidationHelper = {
  buildValidationResult(error){
    if (error.length === 0) {
      return { isValid: true, errors: error };
    } else {
      return { isValid: false, errors: error };
    }
  }
}

module.exports = {
  DateCalculator,
  ValidationHelper
};
