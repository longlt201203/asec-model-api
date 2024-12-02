import { Injectable } from "@nestjs/common";
import { CreateSpeciesRequest, UpdateSpeciesRequest } from "./dto";
import { SpeciesModel } from "@db/models";
import { SpeciesNotFoundError } from "./errors";

@Injectable()
export class SpeciesService {
	async list() {
		return await SpeciesModel.find();
	}

	async getOne(id: string) {
		return await SpeciesModel.findById(id).populate("attributes");
	}

	async getOneOrFail(id: string) {
		const species = await this.getOne(id);
		if (!species) throw new SpeciesNotFoundError();
		return species;
	}

	async create(dto: CreateSpeciesRequest) {
		return await SpeciesModel.create({
			name: dto.name,
			attributes: dto.attributes,
		});
	}

	async update(id: string, dto: UpdateSpeciesRequest) {
		await this.getOneOrFail(id);
		return await SpeciesModel.updateOne(
			{
				_id: id,
			},
			{
				$set: {
					name: dto.name,
					attributes: dto.attributes,
				},
			},
		);
	}

	async delete(id: string) {
		await this.getOneOrFail(id);
		return await SpeciesModel.deleteOne({ _id: id });
	}
}
