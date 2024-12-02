import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AttributeService } from "./attribute.service";
import { ApiResponseDto, ObjectIdParam } from "@utils";
import {
	AttributeResponse,
	CreateAttributeRequest,
	UpdateAttributeRequest,
} from "./dto";

@Controller("attribute")
export class AttributeController {
	constructor(private readonly attributeService: AttributeService) {}

	@Get()
	async list() {
		const data = await this.attributeService.list();
		return new ApiResponseDto(AttributeResponse.fromDocuments(data));
	}

	@Get(":id")
	async getOne(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
	) {
		const data = await this.attributeService.getOneOrFail(id);
		return new ApiResponseDto(AttributeResponse.fromDocument(data));
	}

	@Post()
	async create(@Body() dto: CreateAttributeRequest) {
		await this.attributeService.create(dto);
		return new ApiResponseDto(null, null, "Success!");
	}

	@Put(":id")
	async update(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
		@Body() dto: UpdateAttributeRequest,
	) {
		await this.attributeService.update(id, dto);
		return new ApiResponseDto(null, null, "Success!");
	}

	@Delete(":id")
	async delete(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
	) {
		await this.attributeService.delete(id);
		return new ApiResponseDto(null, null, "Success!");
	}
}
