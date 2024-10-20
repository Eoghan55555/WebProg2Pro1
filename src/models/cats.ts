import { ObjectId } from "mongodb";

export default interface Cats {
    name: string;
    breed: string;
    age: number;
    _id?: ObjectId;
}
