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

interface ErrorItem {
  /** Property name */
  property: string;
  /** Validation error reason */
  message: string;
}

type ValidationErrorResponse = ResponseDTO<ErrorItem[]>;

type SignInResponse = ResponseDTO<string>;

export type { ErrorItem, ResponseDTO, SignInResponse, ValidationErrorResponse };
