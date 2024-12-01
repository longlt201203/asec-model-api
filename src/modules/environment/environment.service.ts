import { Injectable } from "@nestjs/common";
import { CreateEnvironmentRequest } from "./dto";
import { EnvironmentModel } from "@db/models";

@Injectable()
export class EnvironmentService {
	async create(dto: CreateEnvironmentRequest) {
		const d = await EnvironmentModel.create({
			name: dto.name,
			implementedFactors: dto.implementedFactors.map((item) => ({
				factor: item.factor,
				value: item.value,
			})),
		});
		return await d.populate("implementedFactors.factor");
	}

	async list() {
		return await EnvironmentModel.find();
	}

	async getOne(id: string) {
		const d = await EnvironmentModel.findById(id);
		console.log(d);
		return d;
	}
}
