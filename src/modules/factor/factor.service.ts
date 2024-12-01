import { FactorModel } from "@db/models";
import { Injectable } from "@nestjs/common";
import { CreateFactorRequest, UpdateFactorRequest } from "./dto";

@Injectable()
export class FactorService {
	async create(dto: CreateFactorRequest) {
		return await FactorModel.create({
			name: dto.name,
		});
	}

	async list() {
		return await FactorModel.find();
	}

	async update(id: string, dto: UpdateFactorRequest) {
		return await FactorModel.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					name: dto.name,
				},
			},
		);
	}

	async delete(id: string) {
		return await FactorModel.deleteOne({ _id: id });
	}
}
