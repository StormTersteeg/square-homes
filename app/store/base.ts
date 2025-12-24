export default abstract class BaseStore<Type> {
  abstract get(id: string): Type | undefined;
  abstract getAll(): Type[];
}
