import { ApiProperty } from "@nestjs/swagger";
import { UpdateEnvironmentImplementedFactorRequestOperationEnum } from "../environment.enums";
import { ImplementedFactorRequest } from "./implemented-factor.request";
import { IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class UpdateEnvironmentImplementedFactorsRequest {
	@ApiProperty({
		type: Number,
		enum: UpdateEnvironmentImplementedFactorRequestOperationEnum,
	})
	@IsEnum(UpdateEnvironmentImplementedFactorRequestOperationEnum)
	operation: UpdateEnvironmentImplementedFactorRequestOperationEnum;

	@ApiProperty({ type: ImplementedFactorRequest })
	@ValidateNested()
	@Type(() => ImplementedFactorRequest)
	implementedFactor: ImplementedFactorRequest;
}
