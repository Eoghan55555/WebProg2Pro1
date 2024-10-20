import { ObjectId } from "mongodb";

export default interface Cats {
    name: string;
    breed: string;
    age: number;
    id?: ObjectId;
}
