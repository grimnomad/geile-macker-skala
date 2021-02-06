interface ValidationErrorResponse {
  /** HTTP status code */
  statusCode: 400;
  /** Description */
  message: string;
  /** List of validation errors */
  errors: ErrorItem[];
}

interface ErrorItem {
  /** Property name */
  property: string;
  /** Validation error reason */
  message: string;
}

export type { ErrorItem, ValidationErrorResponse };
