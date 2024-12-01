import mongoose, { Schema } from "mongoose";

const SpeciesSchema = new Schema({
	name: { type: String, require: true },
	attributes: [{ type: Schema.Types.ObjectId, ref: "Attribute" }],
});

export const SpeciesModel = mongoose.model("Species", SpeciesSchema);
