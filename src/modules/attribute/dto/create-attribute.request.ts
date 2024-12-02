import { ApiProperty } from "@nestjs/swagger";
import { IsObjectId } from "@utils";
import { Type } from "class-transformer";
import {
	IsNotEmpty,
	IsNumber,
	IsString,
	ValidateNested,
} from "class-validator";

class AffectionRequest {
	@ApiProperty()
	@IsObjectId()
	factor: string;

	@ApiProperty()
	@IsNumber()
	strength: number;
}

export class CreateAttributeRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty({ type: AffectionRequest, isArray: true })
	@ValidateNested({ each: true })
	@Type(() => AffectionRequest)
	affections: AffectionRequest[];
}
