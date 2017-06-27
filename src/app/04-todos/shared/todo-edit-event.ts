import { Todo } from "./todo";

export enum TodoEditStatus {UPDATE, CANCEL, CREATE_NEW}

export interface TodoEditEvent {
  todo: Todo;
  title?: string;
  description?: string;
  status: TodoEditStatus;
}
