import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import AppLayout from "../components/app-layout";
import Footer from '../components/footer';
import Header from "../components/header";

export default function Services() {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                services {
                    name
                    description
                }
              }
            }
          }
        `);
    
    const { services } = site.siteMetadata;

    return (
        <AppLayout title="Services">
            <div className="relative pt-6 pb-24">
                <Header />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 lg:pb-36 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Learn more about our services</h2>
                    <p className="mt-4 text-lg text-gray-500">We've grown to adapt to the needs of our customers and are pleased to currently offer the services listed here.</p>
                </div>

                <div className="relative mt-12 lg:mt-32 space-y-12">
                    {services.map(service => (
                        <div key={service.name}>
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                { service.name }
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                { service.description }
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </AppLayout>
    );
}
