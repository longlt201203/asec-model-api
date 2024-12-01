import mongoose, { Schema } from "mongoose";

const AffectionSchema = new Schema({
	factor: { type: Schema.Types.ObjectId, ref: "Factor" },
	strength: { type: Number, require: true },
});

const AttributeSchema = new Schema({
	name: { type: String, require: true },
	affections: [AffectionSchema],
});

export const AttributeModel = mongoose.model("Attribute", AttributeSchema);
