"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="mbl-menu">
            <Image src="/hamburger.svg" width={26.925} height={18.939} onClick={toggleMenu} />
            {isMenuOpen && (
                <div className="menu_on_click">
                    <div className="mbl-nav-header">
                        <Image src="/DesignTicks_Logo.svg" width={225} height={58.373} className="DesignTicks_Logo" />
                        <button className="cut-button" onClick={closeMenu}>
                            &times;
                        </button>
                    </div>
                    <div className="our-menu-links flex items-start flex-col gap-10">
                        <Link href="/" className='nav-menu-list'>Home</Link>
                        <Link href="/" className='nav-menu-list'>About Us</Link>
                        <Link href="/" className='nav-menu-list'>Services</Link>
                        <Link href="/" className='nav-menu-list'>Case Studies</Link>
                        <Link href="/contact" className='nav-menu-list'>Contact Us</Link>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Hamburger;
