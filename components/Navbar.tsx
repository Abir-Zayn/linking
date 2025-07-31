'use client';

import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const user = {};

export const Navbar = () => {
    const router = useRouter();

    return (
        <header className='navbar'>
            <nav className="flex items-center justify-between">
                <Link href='/' className="flex items-center gap-2">
                    <Image src="/assets/icons/logo.svg" alt='logo'
                           width={32} height={32}
                    />
                    <h1>SnapCast</h1>
                </Link>

                <div className="flex items-center gap-4">
                    <ModeToggle />

                    {user && (
                        <figure className="flex items-center gap-2">
                            <button onClick={() => router.push('/profile/123')}>
                                <Image src="/assets/images/dummy.jpg" alt="User"
                                       width={36} height={36} className="rounded-full aspect-square"
                                />
                            </button>

                            <button className='cursor-pointer'>
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