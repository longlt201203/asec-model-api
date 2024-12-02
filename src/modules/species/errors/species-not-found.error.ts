import { ApiError } from "@errors";

export class SpeciesNotFoundError extends ApiError {
	constructor() {
		super({
			code: "species_not_found_err",
			message: "Species not found",
			detail: null,
			status: 404,
		});
	}
}
