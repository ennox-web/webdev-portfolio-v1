import client from "../lib/mongodb";
interface Movie {
    _id: string;
    title: string;
    metacritic: number;
    plot: string;
  }
  
  interface MovieProps {
    movies: Movie[];
  }
  
  interface DatabaseName {
    name: string;
  }

export async function fetchDBList(): Promise<{ props: { movies: Movie[], databases: DatabaseName[] }}> {
    try {
        await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
        const db = client.db("sample_mflix");
        const movies = await db.collection("movies").find({}).limit(1).toArray();
        const dbList = (await client.db("admin").admin().listDatabases({ nameOnly: true })).databases;

        return {
            props: {
                movies: JSON.parse(JSON.stringify(movies)),
                databases: JSON.parse(JSON.stringify(dbList)),
            },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { movies: [], databases: [] },
        };
    }
}