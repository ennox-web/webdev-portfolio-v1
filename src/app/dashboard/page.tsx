import { ListDatabasesResult } from "mongodb";
import { fetchDBList } from "../lib/data";


export default async function Dashboard() {
  const databases = await fetchDBList();

  console.log(databases.props.databases)
  return (
    <div>
      <h1>Test</h1>
      <ul>
        {
          databases.props.databases.map((db) => (
            <li key={db.name}>
              <h2>{db.name}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

// { movies, databases }: { movies: Movie[], databases: DatabaseName[] }