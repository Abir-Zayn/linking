import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {ICONS} from "@/constants";
import DropDownList from "@/components/DropdownList";

export const Header =
    ({subHeader, title, userImg}: SharedHeaderProps) => {
    return (
       <header className="header">
            <section className="header-container">
                <div className="details">

                    { userImg &&
                        (
                            <Image src={
                                userImg
                            } alt={
                                "User Avatar"
                            } width={66} height={66} className="rounded-full"
                            />
                        )

                    }

                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>


                <aside>
                    <Link href="/upload">
                       <Image src="/assets/icons/upload.svg"
                              alt="upload"
                              width={16} height={16}
                       />
                        <span>Upload a Video</span>
                    </Link>

                    <div className="record">
                        <button className="primary-btn">
                                <Image src ={ICONS.record} alt ="record"
                                width={16} height={16}
                                />
                                <span>Record</span>
                            </button>
                        </div>
                    </aside>
            </section>

           {/* Section For Filtering */}
           <section className='search-filter'>
               <div className="search">
                   <input
                    type ="text"
                    placeholder="Search for Videos, tags, folders ..."
                   />
                   <Image src="/assets/icons/search.svg"
                          alt="search" width={16} height={16}
                   />
               </div>

             <DropDownList/>

           </section>
       </header>
    );
};
