import { CustomError } from "./custom.error";

export class InternalServerError extends CustomError {
    statusCode = 500;

    constructor(public message = "internal server error") {
        super();
        // only because we are extending a built in class
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }

    serializeErrors(): {
        message: string;
        field?: string | undefined;
    }[] {
        return [
            {
                message: this.message,
            },
        ];
    }
}
