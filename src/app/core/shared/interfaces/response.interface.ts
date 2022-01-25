export interface ApiResponse<T> {
  Data: T;
  Message: string;
  Success: boolean;
}
