/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Logout user on api 401 (Authorization error) or 419 (CSRF Token error) Errors

import type { AxiosError } from "axios";

const getApiErrors = (error: AxiosError, title = "") => {
  const errorMessage = "backend.errors.apiErrorMessage";

  if ("Fetch User" === error.name) {
    return errorMessage;
  }
  if (!error.response) {
    if (error && error.config)
      console.error(title, `API ${error.config.url} not found`);
    else console.error(title, `API ${error} not found`);
    return errorMessage;
  }
  if (process.env.NODE_ENV === "development") {
    console.error(title, error.response.data);
    console.error(title, error.response.status);
    console.error(title, error.response.headers);
  }
  // @ts-expect-error nested laravel resource data errors
  if (error.response.data && error.response.data.errors) {
    // @ts-expect-error nested laravel resource data errors
    return error.response.data.errors;
  }

  return errorMessage;
};

export { getApiErrors };
