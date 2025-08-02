'use client';

import Link from "next/link";
import Image from "next/image";
import {redirect, useRouter} from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import {authClient} from "@/lib/auth-client";

// TODO: Replace with actual user session data
const user = {};

// MAIN NAVIGATION: Provides app branding, theme toggle, and user actions
export const Navbar = () => {
    const router = useRouter();

    return (
        <header className='navbar'>
            <nav className="flex items-center justify-between">
                {/* BRAND LOGO: App identity with logo and name */}
                <Link href='/' className="flex items-center gap-2">
                    <Image src="/assets/icons/logo.svg" alt='logo'
                           width={32} height={32}
                    />
                    <h1>SnapCast</h1>
                </Link>

                <div className="flex items-center gap-4">
                    {/* THEME TOGGLE: Light/dark mode switcher with transition effect */}
                    <ModeToggle />

                    {/* USER ACTIONS: Profile access and sign-out functionality */}
                    {user && (
                        <figure className="flex items-center gap-2">
                            {/* PROFILE BUTTON: Navigate to user profile page */}
                            <button onClick={() => router.push('/profile/123')}>
                                <Image src="/assets/images/dummy.jpg" alt="User"
                                       width={36} height={36} className="rounded-full aspect-square"
                                />
                            </button>

                            {/* SIGN-OUT BUTTON: Handles user logout with redirect */}
                            <button onClick={async () => {
                                return await authClient.signOut({
                                    fetchOptions: {
                                        onSuccess: () => {
                                            redirect("/sign-in");
                                        },
                                    },
                                });
                            }} className='cursor-pointer'>
                                <Image src="/assets/icons/logout.svg" alt="logout"
                                       width={24} height={24} className="rotate-180"
                                />
                            </button>
                        </figure>
                    )}
                </div>
            </nav>
        </header>
    );
};