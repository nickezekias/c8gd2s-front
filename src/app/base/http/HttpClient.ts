/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default abstract class HttpClient<O> {
  abstract get(url: string, config?: any): Promise<O>;
  abstract post(url: string, data: any, config?: any): Promise<O>;
  abstract put(url: string, data: any, config?: any): Promise<O>;
  abstract delete(url: string, config?: any): Promise<O>;
}
