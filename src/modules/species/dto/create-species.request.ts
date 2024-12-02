import { ApiProperty } from "@nestjs/swagger";
import { IsObjectId } from "@utils";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSpeciesRequest {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty()
	@IsObjectId({ each: true })
	attributes: string[];
}
