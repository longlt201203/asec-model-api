import mongoose, { HydratedDocument, Schema } from "mongoose";
import { AttributeDocumentType } from "./attribute.model";

export interface ISpecies {
	name: string;
	attributes: AttributeDocumentType[];
}

export type SpeciesDocumentType = HydratedDocument<ISpecies>;

export type SpeciesModelType = mongoose.Model<
	ISpecies,
	{},
	{},
	{},
	SpeciesDocumentType
>;

const SpeciesSchema = new Schema<ISpecies, SpeciesModelType>({
	name: { type: String, required: true },
	attributes: [{ type: Schema.Types.ObjectId, ref: "Attribute" }],
});

export const SpeciesModel = mongoose.model<ISpecies, SpeciesModelType>(
	"Species",
	SpeciesSchema,
);
