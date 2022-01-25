
export interface WebSocketResponse<T = any> {
  event: any;
  message: string[];
  date: number;
  data: T;
}
