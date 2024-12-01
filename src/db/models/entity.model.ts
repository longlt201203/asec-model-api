import mongoose, { Schema } from "mongoose";

const ImplementedAttributeSchema = new Schema({
	attribute: { type: Schema.Types.ObjectId, ref: "Attribute" },
	weight: { type: Number },
});

const EntitySchema = new Schema({
	name: { type: String, require: true },
	species: { type: Schema.Types.ObjectId, ref: "Species" },
	implementedAttributes: [ImplementedAttributeSchema],
});

export const EntityModel = mongoose.model("Entity", EntitySchema);
