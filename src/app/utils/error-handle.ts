import { HttpErrorResponse } from '@angular/common/http';

export const extractErrorMessagesFromErrorResponse = (
  errorResponse: HttpErrorResponse
) => {
  const errors = [];
  if (errorResponse.error) {
    errors.push(errorResponse.error.message);

    if (errorResponse.error.errors) {
      for (const property in errorResponse.error.errors) {
        if (errorResponse.error.errors.hasOwnProperty(property)) {
          const propertyErrors: Array<string> =
            errorResponse.error.errors[property];

          propertyErrors.forEach((error) => errors.push(error));
        }
      }
    }
  }

  return errors;
};
