import React from 'react';
import AppLayout from '../components/app-layout';
import Header from '../components/header';
import { ExternalLinkIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Contact() {
    return (
        <AppLayout title="Contact">
            <div className="relative pt-6 pb-24">
                <Header />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-36 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-gray-500">We're best reached by phone or through our Facebook page.</p>
                    <div className="mt-8 space-y-8 md:space-y-0 md:flex md:justify-around">
                        <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <span className="md:hidden">Call us</span>
                            <span className="hidden md:inline">(386) 235-7270</span>
                            <PhoneIcon className="ml-3 -mr-1 h-5 w-5" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Visit our Facebook page
                            <ExternalLinkIcon className="ml-3 -mr-1 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}