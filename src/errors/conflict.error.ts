import { CustomError } from "./custom.error";

export class ConflictError extends CustomError {
    statusCode = 409;

    constructor(public message = "conflicts error") {
        super();
        // only because we are extending a built in class
        Object.setPrototypeOf(this, ConflictError.prototype);
    }

    serializeErrors(): { message: string, field?: string | undefined }[] {
        return [
            {
                message: this.message,
            },
        ];
    }
}
