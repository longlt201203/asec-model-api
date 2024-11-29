import mongoose, { Schema } from "mongoose";

const FactorSchema = new Schema({
	name: { type: String, require: true },
});

export const FactorModel = mongoose.model("Factor", FactorSchema);
