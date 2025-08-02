import arcjet, {
    detectBot,
    fixedWindow,
    shield,
    request,
    validateEmail,
    slidingWindow,
    ArcjetDecision,
    createMiddleware,
} from "@arcjet/next";
import { getEnv } from "./utils";


const aj = arcjet({
    key: getEnv('ARCJET_KEY'),
    rules: [],
})

export default aj;
