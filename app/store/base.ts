export default abstract class BaseStore<Type> {
  abstract get(id: string): Type;
  abstract getAll(): Type[];
}
