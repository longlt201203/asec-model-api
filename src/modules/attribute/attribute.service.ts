import { Injectable } from "@nestjs/common";
import { CreateAttributeRequest, UpdateAttributeRequest } from "./dto";
import { AttributeModel } from "@db/models";
import { AttributeNotFoundError } from "./errors";

@Injectable()
export class AttributeService {
	async list() {
		return await AttributeModel.find();
	}

	async getOne(id: string) {
		return await AttributeModel.findById(id).populate("affections.factor");
	}

	async getOneOrFail(id: string) {
		const attribute = await this.getOne(id);
		if (!attribute) throw new AttributeNotFoundError();
		return attribute;
	}

	async create(dto: CreateAttributeRequest) {
		return await AttributeModel.create({
			name: dto.name,
			affections: dto.affections.map((item) => ({
				factor: item.factor,
				strength: item.strength,
			})),
		});
	}

	async update(id: string, dto: UpdateAttributeRequest) {
		await this.getOneOrFail(id);
		return await AttributeModel.updateOne(
			{
				_id: id,
			},
			{
				$set: {
					name: dto.name,
					affections: dto.affections.map((item) => ({
						factor: item.factor,
						strength: item.strength,
					})),
				},
			},
		);
	}

	async delete(id: string) {
		await this.getOneOrFail(id);
		return await AttributeModel.deleteOne({ _id: id });
	}
}
