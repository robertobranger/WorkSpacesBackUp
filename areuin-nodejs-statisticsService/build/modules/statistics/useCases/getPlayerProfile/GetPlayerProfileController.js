"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerProfileController = void 0;
const Controller_1 = require("../../../../base/infra/Controller");
class GetPlayerProfileController extends Controller_1.Controller {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl(req, res) {
        const getPlayerProfileResponseDTO = await this.useCase.execute();
        const dto = getPlayerProfileResponseDTO.getValue();
        console.log(req);
        return this.ok(res, dto);
    }
}
exports.GetPlayerProfileController = GetPlayerProfileController;
