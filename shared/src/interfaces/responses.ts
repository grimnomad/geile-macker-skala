interface CommonResponseDTO {
  /** HTTP status code */
  status_code: number;
  /** Description */
  message: string;
}

interface ErrorItem {
  /** Property name */
  property: string;
  /** Validation error reason */
  message: string;
}

interface ValidationErrorResponse extends CommonResponseDTO {
  /** List of validation errors */
  errors: ErrorItem[];
}

interface SignInResponse extends CommonResponseDTO {
  token: string;
}

export type {
  CommonResponseDTO,
  ErrorItem,
  SignInResponse,
  ValidationErrorResponse
};
