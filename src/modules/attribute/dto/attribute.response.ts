import { AttributeDocumentType } from "@db/models";
import { FactorResponse } from "@modules/factor/dto";
import { ApiProperty } from "@nestjs/swagger";

class AffectionResponse {
	@ApiProperty()
	id: string;

	@ApiProperty({ type: FactorResponse })
	factor: FactorResponse;

	@ApiProperty()
	strength: number;
}

export class AttributeResponse {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	@ApiProperty({ type: AffectionResponse, isArray: true })
	affections: AffectionResponse[];

	static fromDocument(d: AttributeDocumentType): AttributeResponse {
		return {
			id: d._id.toString(),
			name: d.name,
			affections:
				d.affections &&
				d.affections.map((item) => ({
					id: item.id,
					factor: item.factor && FactorResponse.fromDocument(item.factor),
					strength: item.strength,
				})),
		};
	}

	static fromDocuments(d: AttributeDocumentType[]) {
		return d.map(this.fromDocument);
	}
}
