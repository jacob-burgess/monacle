import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Initialize the connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the database instance
export const db = drizzle(pool, { schema });

// Export the schema
export * from "./schema";