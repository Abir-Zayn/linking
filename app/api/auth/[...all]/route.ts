import aj, {
} from "@/lib/arcjet";
import ip from "@arcjet/ip";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";
import {ArcjetDecision, slidingWindow, validateEmail} from "@arcjet/next";
import {shield} from "arcjet";


// This single file exposes all Better-Auth routes
// GET & POST are forwarded to the auth handler

// Authentication API handler with security layers
// (email validation, rate limiting, and shield protection) using Arcjet and Better-Auth.


// EMAIL Validation:
const emailValidation = aj.withRule(
    validateEmail({
        mode: "LIVE",
        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    })
);
/// RATE LIMITING: Prevents spam by limiting requests to 2 per 2-minute window per user
const rateLimit = aj.withRule(
    slidingWindow({
        mode: "LIVE",
        interval: "2m",
        max: 2,
        characteristics: ["fingerprint"],
    })
);
// SHIELD PROTECTION: General security layer against malicious requests
const shieldValidation = aj.withRule(
    shield({
        mode: "LIVE",
    })
);

// MAIN SECURITY HANDLER: Applies appropriate protection based on request type and user session
const protectedAuth = async (req: NextRequest): Promise<ArcjetDecision> => {


    /// Get current user session or fallback to IP address for identification
    const session = await auth.api.getSession({
        headers: req.headers,
    });
    let userId: string;
    if (session?.user.id) {
        userId = session.user.id;
    } else {
        userId = ip(req) || "127.0.0.1";
    }
    // Apply email validation specifically for sign-in requests
    if (req.nextUrl.pathname.startsWith("/api/auth/sign-in")) {
        const body = await req.clone().json();
        if (typeof body.email === "string") {
            return emailValidation.protect(req, {
                email: body.email,
            });
        }
    }

    // Apply rate limiting for all requests except sign-out
    if (!req.nextUrl.pathname.startsWith("/api/auth/sign-out")) {
        return rateLimit.protect(req, {
            fingerprint: userId,
        });
    }

    // Default to shield protection for other requests
    return shieldValidation.protect(req);
};

// Create Better-Auth handlers for Next.js
const authHandlers = toNextJsHandler(auth.handler);

// GET requests pass through without additional protection
export const { GET } = authHandlers;

/// POST HANDLER: Applies security checks before processing authentication requests
export const POST = async (req: NextRequest) => {

    /// Run security validation first
    const decision = await protectedAuth(req);
    if (decision.isDenied()) {
        if (decision.reason.isEmail()) {
            throw new Error("Email validation failed");
        }
        if (decision.reason.isRateLimit()) {
            throw new Error("Rate limit exceeded");
        }
        if (decision.reason.isShield()) {
            throw new Error("Shield validation failed");
        }
    }
    /// Proceed with normal authentication handling
    return authHandlers.POST(req);
};