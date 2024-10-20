import { Request, Response } from 'express';
import { collections } from "../src/database";
import Cats from '../src/models/cats'
import { ObjectId} from 'mongodb';

export const getCats = async (req: Request, res: Response) => {
    try {
        const cats = (await collections.cats?.find({}).toArray()) as Cats[];
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).send("oppss");
    }
};

export const getCatById = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    try {
        const query = { _id: new ObjectId(id) };
        const cat = (await collections.cats?.findOne(query)) as Cats;

        if (cat) {
            res.status(200).send(cat);
        } else {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
};

export const createCat = async (req: Request, res: Response) => {
    // create a new cat in the database
    try {
        const newCat = req.body as Cats;

        const result = await collections.cats?.insertOne(newCat);

        if (result) {
            res.status(201).location(`${result.insertedId}`).json({
                message: `Created a new cat with id ${result.insertedId}`,
                cat: newCat
            });
        } else {
            res.status(500).send("Failed to create a new cat.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(`Unable to create new cat`);
    }
};

export const updateCat = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    const newData = req.body; 

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cats?.updateOne(query, { $set: newData });

        if (result && result.matchedCount > 0) {
            res.status(200).json({ message: `Successfully updated cat with id ${id}` });
        } else if (result && result.matchedCount === 0) {
            res.status(404).json({ message: `No cat found with id ${id}` });
        } else {
            res.status(400).json({ message: `Failed to update cat with id ${id}` });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

export const deleteCat = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cats?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).json({ message: `Successfully removed cat with id ${id}` });
        } else if (!result) {
            res.status(400).json({ message: `Failed to remove cat with id ${id}` });
        } else if (!result.deletedCount) {
            res.status(404).json({ message: `No cat found with id ${id}` });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};
