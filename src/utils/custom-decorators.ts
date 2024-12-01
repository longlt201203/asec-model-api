import { ApiValidationError } from "@errors";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ValidationError } from "class-validator";
import { Request } from "express";
import { Types } from "mongoose";

export const ObjectIdParam = createParamDecorator(
	(name: string, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<Request>();
		const value = request.params[name];
		if (
			!(value && typeof value === "string" && Types.ObjectId.isValid(value))
		) {
			const err = new ValidationError();
			err.property = name;
			err.constraints = { isObjectId: "Invalid ObjectId" };
			throw new ApiValidationError([err]);
		}
		return value;
	},
);
