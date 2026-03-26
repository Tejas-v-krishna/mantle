"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Variants } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
    text: string;
    href: string;
}

interface DropdownColumn {
    heading: string;
    links: NavLink[];
}

type DropdownData = DropdownColumn[];

interface MenuItem {
    label: string;
    href: string;
    dropdownData?: DropdownData;
    image?: string;
    description: string;
}

type AnimationDirection = 'right-to-left' | 'left-to-right';

const menuItems: MenuItem[] = [
    {
        label: 'Services',
        href: '/services-overview',
        dropdownData: [
            {
                heading: 'AI & Automation',
                links: [
                    { text: 'AI Analytics Dashboard', href: '/services/ai-analytics' },
                    { text: 'Customer Support Automation', href: '/services/customer-support' },
                    { text: 'HR Process Optimization', href: '/services/hr-optimization' }
                ]
            },
            {
                heading: 'Tools & Planning',
                links: [
                    { text: 'Financial Planning Tools', href: '/services/financial-planning' },
                    { text: 'Marketing Campaign Manager', href: '/services/marketing-campaign' }
                ]
            },
            {
                heading: 'Management & Security',
                links: [
                    { text: 'Inventory Management System', href: '/services/inventory-management' },
                    { text: 'Project Collaboration Suite', href: '/services/project-collaboration' },
                    { text: 'Data Security Solutions', href: '/services/data-security' }
                ]
            }
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
        description: 'Scale your business with our cutting-edge AI and automation solutions.'
    },
    {
        label: 'Solutions',
        href: '/mantle/getting-started',
        dropdownData: [
            {
                heading: 'Support',
                links: [
                    { text: 'Getting Started Guide', href: '/mantle/getting-started' },
                    { text: 'Troubleshooting & FAQ', href: '/mantle/troubleshooting' },
                    { text: 'Contact Support', href: '/mantle/contact-support' }
                ]
            },
            {
                heading: 'Developers',
                links: [
                    { text: 'Full API Documentation', href: '/mantle/documentation' }
                ]
            }
        ],
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=500',
        description: 'Everything you need to get the most out of our corporate operating system.'
    },
    {
        label: 'Resources',
        href: '/resources/blog',
        dropdownData: [
            {
                heading: 'Learning',
                links: [
                    { text: 'Articles', href: '/resources/articles' },
                    { text: 'Tutorials', href: '/resources/tutorials' },
                    { text: 'Case Studies', href: '/resources/case-studies' }
                ]
            },
            {
                heading: 'Insights',
                links: [
                    { text: 'Webinars', href: '/resources/webinars' },
                    { text: 'Whitepapers', href: '/resources/whitepapers' },
                    { text: 'Blog', href: '/resources/blog' }
                ]
            }
        ],
        image: 'https://images.unsplash.com/photo-1454165833767-027ffeb99011?auto=format&fit=crop&q=80&w=500',
        description: 'Insights, guides, and tutorials to stay ahead of the curve.'
    },
    {
        label: 'Company',
        href: '/company/about',
        dropdownData: [
            {
                heading: 'About Us',
                links: [
                    { text: 'Our Story', href: '/company/about' },
                    { text: 'Our Team', href: '/company/team' }
                ]
            },
            {
                heading: 'Careers',
                links: [
                    { text: 'Open Roles', href: '/company/careers' },
                    { text: 'Life at Mantle', href: '/company/press' }
                ]
            }
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500',
        description: 'Our mission is to help people achieve their best work.'
    },
];

export const Navbar: React.FC = () => {
    const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [animationDirection, setAnimationDirection] = useState<AnimationDirection>('right-to-left');
    const [scrolled, setScrolled] = useState(false);
    const closeTimeoutRef = useRef<number | null>(null);
    const prevActiveMenuItemIndex = useRef<number | null>(null);
    const { pathname } = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [mobileActiveDropdownIndex, setMobileActiveDropdownIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (activeMenuItemIndex !== null && prevActiveMenuItemIndex.current !== null) {
            setAnimationDirection(activeMenuItemIndex > prevActiveMenuItemIndex.current ? 'right-to-left' : 'left-to-right');
        } else {
            setAnimationDirection('right-to-left');
        }
        prevActiveMenuItemIndex.current = activeMenuItemIndex;
    }, [activeMenuItemIndex]);

    const openDropdown = (index: number) => {
        if (closeTimeoutRef.current !== null) clearTimeout(closeTimeoutRef.current);
        setActiveMenuItemIndex(index);
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        closeTimeoutRef.current = window.setTimeout(() => setIsDropdownOpen(false), 150);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) setMobileActiveDropdownIndex(null);
    };

    const toggleMobileDropdown = (index: number) => {
        setMobileActiveDropdownIndex(mobileActiveDropdownIndex === index ? null : index);
    };

    const contentVariants: { [key in AnimationDirection]: Variants } = {
        'right-to-left': {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0, transition: { opacity: { duration: 0.2 }, x: { duration: 0.4, ease: [0.19, 1, 0.22, 1] } } },
            exit: { opacity: 0, x: -20, transition: { opacity: { duration: 0.15 }, x: { duration: 0.3, ease: 'easeIn' } } },
        },
        'left-to-right': {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0, transition: { opacity: { duration: 0.2 }, x: { duration: 0.4, ease: [0.19, 1, 0.22, 1] } } },
            exit: { opacity: 0, x: 20, transition: { opacity: { duration: 0.15 }, x: { duration: 0.3, ease: 'easeIn' } } },
        }
    };

    const containerVariants: Variants = {
        closed: { opacity: 0, pointerEvents: 'none', y: -10, transition: { duration: 0.2 } },
        open: { opacity: 1, pointerEvents: 'auto', y: 0, transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] } },
    };

    const mobileMenuVariants: Variants = {
        closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
        open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
    };

    const mobileDropdownVariants: Variants = {
        closed: { height: 0, opacity: 0, overflow: 'hidden' },
        open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'circOut' } },
    };


    return (
        <motion.nav
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out-expo h-[68px] flex items-center max-w-7xl w-[calc(100%-48px)] border border-white/10 rounded-[1rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${scrolled
                ? 'top-4 bg-obsidian-900/98 backdrop-blur-2xl'
                : 'top-6 bg-obsidian-900/92 backdrop-blur-xl'
                }`}
        >
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-8">
                <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
                    <img src="/Group 1.svg" alt="Mantle Logo" className="h-[18px] w-auto" />
                </Link>

                <ul className="hidden lg:flex gap-10 list-none p-0 m-0 h-full" onMouseLeave={closeDropdown}>
                    {menuItems.map((item, index) => (
                        <li
                            key={`desktop-menu-${index}`}
                            className="flex items-center h-full relative cursor-pointer"
                            onMouseEnter={() => openDropdown(index)}
                        >
                            <span className={`text-[14px] font-navbar font-medium tracking-[-0.05em] transition-colors flex items-center gap-1.5 ${activeMenuItemIndex === index && isDropdownOpen
                                ? 'text-ember-400'
                                : 'text-white/60 hover:text-white'
                                }`}>
                                {item.label}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenuItemIndex === index && isDropdownOpen ? 'rotate-180' : ''}`} />
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-6">
                        <button className="text-[14px] text-white/50 hover:text-white font-navbar font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-ember-500 after:transition-all hover:after:w-full">
                            Log in
                        </button>
                    </div>
                    <Link
                        to="/book-demo/select-services"
                        className="btn btn-primary btn-sm px-6 text-[14px] font-navbar"
                    >
                        Book a Demo →
                    </Link>
                </div>

                <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isDropdownOpen && activeMenuItemIndex !== null && (
                    <motion.div
                        className="hidden lg:block absolute top-[68px] left-0 right-0 bg-obsidian-900/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={containerVariants}
                        onMouseEnter={() => { if (closeTimeoutRef.current !== null) clearTimeout(closeTimeoutRef.current); }}
                        onMouseLeave={closeDropdown}
                    >
                        <AnimatePresence mode="wait">
                            {menuItems[activeMenuItemIndex]?.dropdownData && (
                                <motion.div
                                    key={`desktop-dropdown-${activeMenuItemIndex}`}
                                    variants={contentVariants[animationDirection]}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-12 gap-12"
                                >
                                    <div className="col-span-8 grid grid-cols-3 gap-12">
                                        {menuItems[activeMenuItemIndex]?.dropdownData?.map((column, colIndex) => (
                                            <div key={`col-${colIndex}`}>
                                                <h3 className="mb-6 text-[10px] font-navbar font-bold text-white/30 uppercase tracking-[0.2em]">
                                                    {column.heading}
                                                </h3>
                                                <ul className="list-none p-0 m-0 space-y-3.5">
                                                    {column.links.map((link, linkIndex) => (
                                                        <li key={`link-${linkIndex}`}>
                                                            <Link
                                                                to={link.href}
                                                                className="block text-[14px] font-navbar text-white/60 hover:text-ember-400 transition-all hover:translate-x-1"
                                                            >
                                                                {link.text}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-span-4 pl-12 border-l border-white/5 flex flex-col justify-center">
                                        <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/5 mb-6">
                                            <img src={menuItems[activeMenuItemIndex].image} alt="" className="w-full h-full object-cover opacity-60" />
                                        </div>
                                        <p className="text-white/40 text-xs font-navbar leading-relaxed mb-4">
                                            {menuItems[activeMenuItemIndex].description}
                                        </p>
                                        <Link to={menuItems[activeMenuItemIndex].href} className="text-[13px] font-navbar font-bold text-white hover:text-ember-400 flex items-center gap-2 group">
                                            Everything in {menuItems[activeMenuItemIndex].label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu-overlay"
                        className="fixed inset-0 bg-obsidian-900 z-40 lg:hidden overflow-hidden pt-[68px]"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="h-full overflow-y-auto p-8 flex flex-col">
                            <ul className="list-none p-0 m-0 space-y-4">
                                {menuItems.map((item, index) => (
                                    <li key={`mobile-menu-${index}`} className="border-b border-white/5 last:border-0">
                                        <button
                                            className={`flex justify-between items-center w-full text-left py-6 font-navbar font-bold text-xl tracking-[-0.05em] transition-colors ${mobileActiveDropdownIndex === index ? 'text-ember-400' : 'text-white'}`}
                                            onClick={() => toggleMobileDropdown(index)}
                                        >
                                            {item.label}
                                            <ChevronDown size={24} className={`transform transition-transform duration-300 ${mobileActiveDropdownIndex === index ? 'rotate-180 text-ember-400' : 'text-white/40'}`} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileActiveDropdownIndex === index && item.dropdownData && (
                                                <motion.div
                                                    key={`mobile-dropdown-content-${index}`}
                                                    initial="closed"
                                                    animate="open"
                                                    exit="closed"
                                                    variants={mobileDropdownVariants}
                                                    className="pb-6 pl-4 space-y-8"
                                                >
                                                    {item.dropdownData.map((column, colIndex) => (
                                                        <div key={`mobile-col-${colIndex}`}>
                                                            <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{column.heading}</h4>
                                                            <ul className="list-none p-0 m-0 space-y-4">
                                                                {column.links.map((link, linkIndex) => (
                                                                    <li key={`mobile-link-${colIndex}-${linkIndex}`}>
                                                                        <Link
                                                                            to={link.href}
                                                                            className="text-white/60 active:text-ember-400 block transition-colors text-lg"
                                                                            onClick={() => { setIsMobileMenuOpen(false); setMobileActiveDropdownIndex(null); }}
                                                                        >
                                                                            {link.text}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-12 flex flex-col gap-4">
                                <button className="w-full border border-white/10 text-white px-6 py-4 rounded-2xl font-navbar font-bold hover:bg-white/5 transition-colors text-lg">
                                    Log in
                                </button>
                                <Link
                                    to="/book-demo/select-services"
                                    className="w-full bg-ember-500 text-white px-6 py-5 rounded-2xl font-navbar font-bold hover:bg-ember-600 transition-colors text-center shadow-xl shadow-ember-500/20 text-lg"
                                    onClick={() => { setIsMobileMenuOpen(false); setMobileActiveDropdownIndex(null); }}
                                >
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
};
