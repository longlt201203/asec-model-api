import { Env } from "@utils";
import mongoose from "mongoose";

export async function initDbConnection() {
	const url = `mongodb://${Env.DB_USER}:${Env.DB_PASS}@${Env.DB_HOST}:${Env.DB_PORT}`;
	await mongoose.connect(url, {
		dbName: Env.DB_NAME,
	});
}
