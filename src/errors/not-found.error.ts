import { CustomError } from "./custom.error";

export class NotFoundError extends CustomError {
    statusCode: number = 404;

    constructor(public message = "not found") {
        super();

        // only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined }[] {
        return [{ message: this.message }];
    }
}
