import { Router } from "express";
import ClientsController from "../controllers/clients.controllers";
import { expressYupMiddleware } from "express-yup-middleware";
import createClientSchema from "../validations/clients/createClient.validation";
import updateClientSchema from "../validations/clients/updateClient.validation";

const clientRouter = Router();

clientRouter.post("/", expressYupMiddleware({ schemaValidator: createClientSchema, }), ClientsController.store);
clientRouter.get("/", ClientsController.show);
clientRouter.get("/:id", ClientsController.index);
clientRouter.patch("/:id", expressYupMiddleware({ schemaValidator: updateClientSchema }), ClientsController.update);
clientRouter.patch("/joinbedroom/:id", ClientsController.joinBedroom);
clientRouter.delete("/:id", ClientsController.delete);

export default clientRouter;
