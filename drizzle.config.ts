import {config} from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: './.env' });

// drizzle.config.ts
// This file is used to configure Drizzle ORM for migrations and schema generation
// It uses the dotenv package to load environment variables from a .env file
export default defineConfig({
    schema :'./drizzle/schema.ts',
    out: './drizzle/migrations',
    dialect: 'postgresql',
    dbCredentials : {
        url: process.env.DATABASE_URL!
    }
})