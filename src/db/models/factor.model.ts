import mongoose, { Model, Schema, HydratedDocument } from "mongoose";

export interface IFactor {
	name: string;
}

export type FactorDocumentType = HydratedDocument<IFactor>;

export type FactorModelType = Model<IFactor, {}, {}, {}, FactorDocumentType>;

export const FactorSchema = new Schema<IFactor, FactorModelType>({
	name: { type: String, required: true },
});

export const FactorModel = mongoose.model<IFactor, FactorModelType>(
	"Factor",
	FactorSchema,
);
