export interface IUseCase<S, T> {
  execute(params: S): Promise<T>;
}
