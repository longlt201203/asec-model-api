import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { SpeciesService } from "./species.service";
import { ApiResponseDto, ObjectIdParam } from "@utils";
import {
	CreateSpeciesRequest,
	SpeciesResponse,
	UpdateSpeciesRequest,
} from "./dto";

@Controller("species")
export class SpeciesController {
	constructor(private readonly speciesService: SpeciesService) {}

	@Get()
	async list() {
		const data = await this.speciesService.list();
		return new ApiResponseDto(SpeciesResponse.fromDocuments(data));
	}

	@Get(":id")
	async getOne(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
	) {
		const data = await this.speciesService.getOneOrFail(id);
		return new ApiResponseDto(SpeciesResponse.fromDocument(data));
	}

	@Post()
	async create(@Body() dto: CreateSpeciesRequest) {
		await this.speciesService.create(dto);
		return new ApiResponseDto(null, null, "Success!");
	}

	@Put(":id")
	async update(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
		@Body() dto: UpdateSpeciesRequest,
	) {
		await this.speciesService.update(id, dto);
		return new ApiResponseDto(null, null, "Success!");
	}

	@Delete(":id")
	async delete(
		@ObjectIdParam("id")
		@Param("id")
		id: string,
	) {
		await this.speciesService.delete(id);
		return new ApiResponseDto(null, null, "Success!");
	}
}
