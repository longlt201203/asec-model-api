import { Injectable } from "@nestjs/common";
import {
	CreateEnvironmentRequest,
	UpdateEnvironmentImplementedFactorsRequest,
	UpdateEnvironmentRequest,
} from "./dto";
import { EnvironmentDocumentType, EnvironmentModel } from "@db/models";
import { EnvironmentNotFoundError } from "./errors";
import { UpdateQuery } from "mongoose";
import { UpdateEnvironmentImplementedFactorRequestOperationEnum } from "./environment.enums";

@Injectable()
export class EnvironmentService {
	async create(dto: CreateEnvironmentRequest) {
		return await EnvironmentModel.create({
			name: dto.name,
			implementedFactors: [],
		});
	}

	async list() {
		return await EnvironmentModel.find();
	}

	async getOneOrFail(id: string) {
		const d = await this.getOne(id);
		if (!d) throw new EnvironmentNotFoundError();
		return d;
	}

	async getOne(id: string) {
		return await EnvironmentModel.findById(id).populate(
			"implementedFactors.factor",
		);
	}

	async update(id: string, dto: UpdateEnvironmentRequest) {
		await this.getOneOrFail(id);
		return await EnvironmentModel.updateOne(
			{
				_id: id,
			},
			{
				$set: {
					name: dto.name,
				},
			},
		);
	}

	async updateImplementedFactors(
		id: string,
		dto: UpdateEnvironmentImplementedFactorsRequest,
	) {
		await this.getOneOrFail(id);
		let updateData: UpdateQuery<EnvironmentDocumentType> = {};
		let arrayFilters: any[] = [];
		switch (dto.operation) {
			case UpdateEnvironmentImplementedFactorRequestOperationEnum.ADD:
				updateData = {
					$push: {
						implementedFactors: {
							factor: dto.implementedFactor.factor,
							value: dto.implementedFactor.value || 0,
						},
					},
				};
				break;
			case UpdateEnvironmentImplementedFactorRequestOperationEnum.REMOVE:
				updateData = {
					$pull: {
						implementedFactors: {
							factor: dto.implementedFactor.factor,
						},
					},
				};
				break;
			case UpdateEnvironmentImplementedFactorRequestOperationEnum.UPDATE:
				updateData = {
					$set: {
						"implementedFactors.$[element].value": dto.implementedFactor.value,
					},
				};
				arrayFilters = [
					{
						"element.factor": dto.implementedFactor.factor,
					},
				];
				break;
		}
		return await EnvironmentModel.updateOne({ _id: id }, updateData, {
			arrayFilters,
		});
	}

	async delete(id: string) {
		await this.getOneOrFail(id);
		return EnvironmentModel.deleteOne({
			_id: id,
		});
	}
}
