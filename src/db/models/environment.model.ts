import mongoose, { Schema } from "mongoose";

const EnvironmentSchema = new Schema({
	name: { type: String, require: true },
	factors: [{ type: Schema.Types.ObjectId, ref: "Factor" }],
});

export const EnvironmentModel = mongoose.model(
	"Environment",
	EnvironmentSchema,
);
