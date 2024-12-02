import { AttributeModule } from "@modules/attribute";
import { EnvironmentModule } from "@modules/environment";
import { FactorModule } from "@modules/factor";
import { SpeciesModule } from "@modules/species";
import { Module } from "@nestjs/common";
import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import { MyExceptionFilter, ValidationPipe } from "@utils";

@Module({
	imports: [FactorModule, EnvironmentModule, AttributeModule, SpeciesModule],
	controllers: [],
	providers: [
		{
			provide: APP_FILTER,
			useClass: MyExceptionFilter,
		},
		{
			provide: APP_PIPE,
			useClass: ValidationPipe,
		},
	],
})
export class AppModule {}
