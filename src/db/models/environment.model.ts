import mongoose, { HydratedDocument, Model, Schema, Types } from "mongoose";
import { FactorDocumentType } from "./factor.model";

export interface IImplementedFactor {
	factor: FactorDocumentType;
	value: number;
}

export interface IEnvironment {
	name: string;
	implementedFactors: Array<IImplementedFactor>;
}

export type EnvironmentDocumentType = HydratedDocument<
	IEnvironment,
	{
		implementedFactors: Types.DocumentArray<IImplementedFactor>;
	}
>;

export type EnvironmentModelType = Model<
	IEnvironment,
	{},
	{},
	{},
	EnvironmentDocumentType
>;

const ImplementedFactorSchema = new Schema<IImplementedFactor>({
	factor: { type: Schema.Types.ObjectId, ref: "Factor" },
	value: { type: Number, required: true },
});

const EnvironmentSchema = new Schema<IEnvironment, EnvironmentModelType>({
	name: { type: String, require: true },
	implementedFactors: [ImplementedFactorSchema],
});

export const EnvironmentModel = mongoose.model<
	IEnvironment,
	EnvironmentModelType
>("Environment", EnvironmentSchema);
