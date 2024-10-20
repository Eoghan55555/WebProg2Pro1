import { MongoClient, Db, Collection}  from "mongodb";
import dotenv from "dotenv";
import Cats from './models/cats'


  dotenv.config();
  const connectionString : string  = process.env.DB_CONN_STRING || "";
  const dbName : string = process.env.DB_NAME || "CatDB";
  const client = new MongoClient(connectionString);

let db : Db 
  export let catsCollection : Collection<Cats>

  export const collections: { cats?: Collection<Cats> } = {};

client.connect().then
(()=>
  {
  db = client.db(dbName);
  catsCollection  = db.collection('cats');
  collections.cats = catsCollection;
  console.log('Connected to database');
}
)
.catch ((error) => 
{
    if (error instanceof Error)
    {
     console.log(`issue with db connection ${error.message}`);
    }
    else{
      console.log(`error with ${error}`)
    }
  });
