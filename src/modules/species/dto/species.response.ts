import { SpeciesDocumentType } from "@db/models";
import { AttributeResponse } from "@modules/attribute/dto";

export class SpeciesResponse {
	id: string;
	name: string;
	attributes: AttributeResponse[];

	static fromDocument(d: SpeciesDocumentType): SpeciesResponse {
		return {
			id: d._id.toString(),
			name: d.name,
			attributes: d.attributes && AttributeResponse.fromDocuments(d.attributes),
		};
	}

	static fromDocuments(d: SpeciesDocumentType[]) {
		return d.map(this.fromDocument);
	}
}
