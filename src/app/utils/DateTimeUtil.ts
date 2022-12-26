export default class DateTimeUtil {
  static extractDateFromString(str: string | null): Date | null {
    if (str && str != "") {
      return new Date(str);
    } else {
      return null;
    }
  }

  static convertToIsoString(date: Date | null): string | null {
    if (date) {
      return date.toISOString();
    } else {
      return null;
    }
  }

  static isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  static isSameYearToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear();
  }

  static format(
    date: Date,
    options: Intl.DateTimeFormatOptions,
    locale = "default"
  ): string {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
}
