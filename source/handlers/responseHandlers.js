import Auth from "../security/auth";


export const loginResponseHandler = (response, handler) => {
  Auth.logIn(response);

  if (handler) {
    handler.call();
  }
};
