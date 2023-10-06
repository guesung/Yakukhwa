export class DateController {
  static formatDate = (date: Date) => {
    return `${date.getMonth() + 1}.${date.getDate() - 1} ${date.getDay()}`;
  };
  static getDateList = (date: Date) => {
    const dateList = [];
    for (let i = 0; i < 16; i++) {
      dateList.push(
        DateController.formatDate(new Date(date.setDate(date.getDate() + 1)))
      );
    }
    return dateList;
  };
}
