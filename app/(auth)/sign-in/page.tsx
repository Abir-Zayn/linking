'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {authClient} from "@/lib/auth-client";


const Page = () => {

    const handleSignIn = async () => {
        // Handle Google Sign-In logic here
        return await authClient.signIn.social({
            provider: 'google'
        })
        // Better-Auth will redirect to Google, then to /api/auth/callback/google,
        // then create or update the DB rows automatically.
    };

    return (
        <main className='sign-in'>

            {/* Left side -Holds Information regarding the product. */}
            <aside className='testimonial'>
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="logo"
                           width={32} height={32} />
                <h1>SnapCast</h1>
            </Link>

                <div className='description'>
                    {/* 5-star review */}
                    <section>
                        <figure>
                            {
                                Array.from ({length:5}).map((_,idx) => (
                                    <Image
                                        src ="/assets/icons/star.svg"
                                        alt = "star"
                                        width={16}
                                        height={16}
                                        key={idx}
                                    />
                                ))
                            }
                        </figure>
                        <p>
                            SnapCast makes screen recording easy, From quick walkthrough to full presentation,
                            its fast, smooth and shareable in seconds.
                        </p>

                        <article>
                            <Image src="/assets/images/jason.png"
                                   alt="jason"
                                   width={64}
                                   height={64}
                                   className="rounded-full"
                            />

                            <div>
                            <h2>
                                Jason Rivera
                            </h2>
                        <p> Product Designer, NovaByte</p>
                            </div>
                        </article>
                    </section>
                </div>
                <p> Snapcast {(new Date()).getFullYear()}</p>

            </aside>

            {/* Right side - Holds Authentication */}
            <aside className="google-sign-in">
                    <section>
                        <Link href="/">
                            <Image src="/assets/icons/logo.svg"
                                   alt="logo"
                                   width={40} height={40}
                            />
                            <h1>SnapCast</h1>
                        </Link>
                            <p className='text-2xl'>Create and Share your Very first
                                <span> SnapCast video </span> in no time!
                            </p>

                            <button onClick={handleSignIn}>
                                <Image src="/assets/icons/google.svg"
                                    alt ="google" width ={22} height={22}
                                />
                                <span>Sign in with Google</span>
                            </button>

                    </section>
            </aside>
        </main>
    );
};

export default Page;