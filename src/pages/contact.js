import React from 'react';
import AppLayout from '../components/app-layout';
import Header from '../components/header';

export default function Contact() {
    return (
        <AppLayout title="Contact">
            <div className="relative pt-6 pb-16 sm:pb-56">
                <Header />
            </div>
        </AppLayout>
    );
}