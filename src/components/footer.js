import React from 'react';
import { Link } from "gatsby";
import { HeartIcon } from '@heroicons/react/solid';

export default function Footer() {
    return (
        <>
            <div className="relative bg-emerald-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to see us at your door?</h2>
                    <p className="mt-4 text-lg leading-6 text-emerald-200">
                        We're excited to provide our quality service for your home or office!
                    </p>
                    <Link to="/contact" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 sm:w-auto">Contact us today</Link>
                </div>
            </div>
            <footer className="relative">
                <div className="py-12 px-4 border-t border-gray-200 lg:flex lg:items-center lg:justify-between md:px-24 lg:px-40">
                    <div className="text-center">
                        <p className="text-gray-500">Proudly serving Daytona Beach and surrounding areas</p>
                    </div>
                    <div className="mt-12 flex justify-center md:mt-6 lg:justify-start lg:mt-0 md:order-2">
                        <p className="inline-flex text-center text-base leading-6 text-gray-400">
                            Made with
                            <HeartIcon className="h-6 w-6 mx-1" />
                            by
                            <a className="pl-1 underline md:no-underline md:hover:underline" href="https://jarom.dev/?ref=anewlook" target="_blank" rel="noopener noreferrer">Jarom Rial</a>
                        </p>
                    </div>
                    <p className="mt-8 text-base text-center lg:text-left leading-6 text-gray-400 md:mt-6 lg:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} A New Look Restorations and Janitorial Service
                    </p>
                </div>
            </footer>
        </>
    );
}