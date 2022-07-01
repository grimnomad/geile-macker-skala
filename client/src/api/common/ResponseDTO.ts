interface ResponseDTO<T> {
  /** HTTP status code */
  status_code: number;
  /** Description */
  message: string;
  /** Timestamp */
  send_at: string;
  /** Actual data */
  data: T;
}

export type { ResponseDTO };
