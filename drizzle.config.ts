import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load environment variables from .env.local
config({ path: ".env.local" });

export default defineConfig({
    // Corrected path to the schema file
    schema: "./src/lib/db/schema.ts",
    // Directory for generated migrations
    out: "./supabase/migrations",
    dialect: "postgresql",
    dbCredentials: {
        // Use environment variable for database URL
        url: process.env.DATABASE_URL!,
    },
});
