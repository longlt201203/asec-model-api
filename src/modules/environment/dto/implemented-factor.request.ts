import { ApiProperty } from "@nestjs/swagger";
import { IsObjectId } from "@utils";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ImplementedFactorRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@IsObjectId()
	factor: string;

	@ApiProperty({ required: false })
	@IsNumber()
	@IsOptional()
	value?: number;
}
