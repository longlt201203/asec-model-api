import { Controller, Get } from "@nestjs/common";
import { FactorService } from "./factor.service";

@Controller("factor")
export class FactorController {
	constructor(private readonly factorService: FactorService) {}

	@Get("test")
	async test() {
		await this.factorService.test();
		return "OK";
	}
}
