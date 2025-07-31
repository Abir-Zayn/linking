import {createAuthClient} from "better-auth/react";

// This file is used to create the auth client for the application
// It uses the base URL from the environment variables
// and exports the auth client for use in the application
export const authClient =  createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL!,

})