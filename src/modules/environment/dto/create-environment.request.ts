import { ApiProperty } from "@nestjs/swagger";
import { IsObjectId } from "@utils";
import { Type } from "class-transformer";
import {
	IsNotEmpty,
	IsNumber,
	IsString,
	Validate,
	ValidateNested,
} from "class-validator";

class ImplementedFactorRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@IsObjectId()
	factor: string;

	@ApiProperty()
	@IsNumber()
	value: number;
}

export class CreateEnvironmentRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty({ type: ImplementedFactorRequest, isArray: true })
	@ValidateNested({ each: true })
	@Type(() => ImplementedFactorRequest)
	implementedFactors: ImplementedFactorRequest[];
}
