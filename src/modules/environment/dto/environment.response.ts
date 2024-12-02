import { EnvironmentDocumentType } from "@db/models";
import { FactorResponse } from "@modules/factor/dto";
import { ApiProperty } from "@nestjs/swagger";

class ImplementedFactorResponse {
	@ApiProperty()
	id: string;

	@ApiProperty()
	factor: FactorResponse;

	@ApiProperty()
	value: number;
}

export class EnvironmentResponse {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	@ApiProperty({ type: ImplementedFactorResponse, isArray: true })
	implementedFactors: ImplementedFactorResponse[];

	static fromDocument(d: EnvironmentDocumentType): EnvironmentResponse {
		return {
			id: d._id.toString(),
			name: d.name,
			implementedFactors:
				d.implementedFactors &&
				d.implementedFactors.map((item) => ({
					id: item.id,
					factor: item.factor && FactorResponse.fromDocument(item.factor),
					value: item.value,
				})),
		};
	}

	static fromDocuments(d: EnvironmentDocumentType[]) {
		return d.map(this.fromDocument);
	}
}
