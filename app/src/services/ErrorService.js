class ErrorService {
  static fetchError = (error) => {
    return error.message.split(':')[1];
  };
}

export default ErrorService;
