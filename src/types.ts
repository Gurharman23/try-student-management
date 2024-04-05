export type Id = string | number;
export interface Student {
  id: Id;
  name: string;
  alias: string;
}
export interface UpdateStudent {
  id: Id;
  name?: string;
  alias?: string;
}
