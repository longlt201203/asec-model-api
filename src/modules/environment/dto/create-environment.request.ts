import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEnvironmentRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;
}
