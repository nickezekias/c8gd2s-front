export default class Logger {
  public static log(args: Iterable<unknown>): void {
    if (
      process.env.NODE_ENV == "dev" ||
      process.env.NODE_ENV == "development" ||
      process.env.NODE_ENV == "staging"
    ) {
      console.log(...args);
    }
  }
}
