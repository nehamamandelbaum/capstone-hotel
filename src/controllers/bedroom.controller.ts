import { Request, Response } from "express";
import createBedroomService from "../services/bedroom/createBedroom.service";
import disableBedroomService from "../services/bedroom/disableBedroom.service";
import listBedroomsService from "../services/bedroom/listBedrooms.service";
import showBedroomService from "../services/bedroom/showBedroom.service";
import updateBedroomService from "../services/bedroom/updateBedroom.service";

class BedroomsController {
  static async create(req: Request, res: Response) {
    const { number, floor, capacity, availability } = req.body;

    const bedroom = await createBedroomService({
      number,
      floor,
      capacity,
      availability,
    });

    return res.status(201).json(bedroom);
  }

  static async index(req: Request, res: Response) {
    const bedrooms = await listBedroomsService();

    return res.json(bedrooms);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const bedroom = await showBedroomService(id);

    return res.json(bedroom);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { capacity, availability } = req.body;

    const updateBedroom = await updateBedroomService({
      id,
      capacity,
      availability,
    });

    return res.json(updateBedroom);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    const bedroomDisabled = await disableBedroomService(id);

    return res.json({
      message: "Bedroom disabled",
      bedroom: {
        number: bedroomDisabled.number,
        status: bedroomDisabled.status,
      },
    });
  }
}

export default BedroomsController;