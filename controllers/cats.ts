import { Request, Response } from 'express';

export const getCats = (req: Request, res: Response) => {
    // to do: get all cats from the database
    res.json({ "message": "getCats received" });
};

export const getCatById = (req: Request, res: Response) => {
    // get a single cat by ID from the database
    let id: string = req.params.id;
    res.json({ "message": `get a cat with ID ${id} received` });
};

export const createCat = (req: Request, res: Response) => {
    // create a new cat in the database
    console.log(req.body); // for now, just log the data

    res.json({ "message": `create a new cat with data from the post message` });
};

export const updateCat = (req: Request, res: Response) => {
    // update a cat by IDZ
    console.log(req.body); // for now, just log the data

    res.json({ "message": `update cat ${req.params.id} with data from the post message` });
};

export const deleteCat = (req: Request, res: Response) => {
    // logic to delete a cat by ID from the database
    res.json({ "message": `delete cat ${req.params.id} from the database` });
};
