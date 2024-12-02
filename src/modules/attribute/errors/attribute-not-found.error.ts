import { ApiError } from "@errors";

export class AttributeNotFoundError extends ApiError {
	constructor() {
		super({
			code: "attribute_not_found_err",
			message: "Attribute not found",
			detail: null,
			status: 404,
		});
	}
}
