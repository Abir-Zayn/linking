import {toNextJsHandler} from "better-auth/next-js";
import {auth} from "@/lib/auth";

// This single file exposes all Better-Auth routes
// GET & POST are forwarded to the auth handler

export const {GET, POST} = toNextJsHandler(
    auth.handler
)