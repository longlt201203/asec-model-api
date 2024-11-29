import { Module } from "@nestjs/common";
import { FactorService } from "./factor.service";
import { FactorController } from "./factor.controller";

@Module({
	providers: [FactorService],
	controllers: [FactorController],
})
export class FactorModule {}
