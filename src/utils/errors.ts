export class PHValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PHValidationError';
  }
}
