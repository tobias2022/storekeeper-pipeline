export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export interface Pagination {
  limit: number;
  offset: number;
  total: number;
}

export interface GenericResponse {
  data?: any;
  pagination?: Pagination;
  error?: string;
}
