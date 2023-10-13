export class DateController {
  static formatDay = (day: number) => {
    switch (day) {
      case 0:
        return "SUN";
      case 1:
        return "MON";
      case 2:
        return "TUE";
      case 3:
        return "WED";
      case 4:
        return "THU";
      case 5:
        return "FRI";
      case 6:
        return "SAT";
    }
  };
  static formatDate = (date: Date) => {
    return {
      date: `${date.getMonth() + 1}.${date.getDate()}`,
      day: DateController.formatDay(date.getDay())
    }
  };

  static getDateList = (date: Date, page: number) => {
    const dateList = [];
    date.setDate(date.getDate() + 16 * (page - 1));
    for (let i = 0; i < 16; i++) {
      dateList.push(DateController.formatDate(new Date(date)));
      date.setDate(date.getDate() + 1);
    }
    return dateList;
  };
}
