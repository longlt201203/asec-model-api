import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { EnvironmentService } from "./environment.service";
import { ApiResponseDto, ObjectIdParam } from "@utils";
import { CreateEnvironmentRequest, EnvironmentResponse } from "./dto";

@Controller("environment")
export class EnvironmentController {
	constructor(private readonly environmentService: EnvironmentService) {}

	@Get()
	async list() {
		const data = await this.environmentService.list();
		return new ApiResponseDto(EnvironmentResponse.fromDocuments(data));
	}

	@Get(":id")
	async getOne(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
	) {
		const data = await this.environmentService.getOne(id);
		return new ApiResponseDto(EnvironmentResponse.fromDocument(data));
	}

	@Post()
	async create(@Body() dto: CreateEnvironmentRequest) {
		const data = await this.environmentService.create(dto);
		return new ApiResponseDto(EnvironmentResponse.fromDocument(data));
	}
}
