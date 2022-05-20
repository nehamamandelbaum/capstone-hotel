"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const HiredServices_1 = __importDefault(require("../../models/HiredServices"));
const formatHiredServiceData_1 = __importDefault(require("../../utils/formatHiredServiceData"));
const getOneHiredService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const hiredServiceRepository = data_source_1.AppDataSource.getRepository(HiredServices_1.default);
    const hiredService = yield hiredServiceRepository
        .createQueryBuilder("hired_service")
        .innerJoinAndSelect("hired_service.service", "services")
        .innerJoinAndSelect("hired_service.client", "clients")
        .where(`hired_service.id = ${id}`)
        .getOne();
    if (!hiredService) {
        throw new AppError_1.default("Hired Service not found", 404);
    }
    const hiredServiceFormated = (0, formatHiredServiceData_1.default)({ hiredService });
    return hiredServiceFormated;
});
exports.default = getOneHiredService;
