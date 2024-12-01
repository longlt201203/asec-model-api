import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFactorRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;
}
