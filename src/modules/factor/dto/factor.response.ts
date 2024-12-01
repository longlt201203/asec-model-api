import { FactorDocumentType } from "@db/models";
import { ApiProperty } from "@nestjs/swagger";

export class FactorResponse {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	static fromDocument(d: FactorDocumentType): FactorResponse {
		return {
			id: d._id.toString(),
			name: d.name,
		};
	}

	static fromDocuments(d: FactorDocumentType[]) {
		return d.map(this.fromDocument);
	}
}
