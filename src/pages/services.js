import React from 'react';
import AppLayout from "../components/app-layout";
import Footer from '../components/footer';
import Header from "../components/header";

const services = [
    { name: "Carpet, furniture, tile, and floor cleaning", description: "Integer sagittis, ante eget blandit tincidunt, magna dui tincidunt nisl, sed imperdiet mi purus sed est. Maecenas diam tortor, consequat a rhoncus vitae, finibus nec orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas neque ac convallis posuere. Quisque eu condimentum augue, eget fermentum ante. Vestibulum pellentesque dui vel felis tempus, vel tempor leo dictum. Nam in nisi mauris. Ut justo mi, dignissim non nunc ac, faucibus rhoncus metus. Proin sollicitudin tortor et consequat molestie. Curabitur sagittis eleifend iaculis." },
    { name: "24-hour emergency water damage restoration", description: "Integer sagittis, ante eget blandit tincidunt, magna dui tincidunt nisl, sed imperdiet mi purus sed est. Maecenas diam tortor, consequat a rhoncus vitae, finibus nec orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas neque ac convallis posuere. Quisque eu condimentum augue, eget fermentum ante. Vestibulum pellentesque dui vel felis tempus, vel tempor leo dictum. Nam in nisi mauris. Ut justo mi, dignissim non nunc ac, faucibus rhoncus metus. Proin sollicitudin tortor et consequat molestie. Curabitur sagittis eleifend iaculis." },
    { name: "Complete home and office remodeling", description: "Integer sagittis, ante eget blandit tincidunt, magna dui tincidunt nisl, sed imperdiet mi purus sed est. Maecenas diam tortor, consequat a rhoncus vitae, finibus nec orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas neque ac convallis posuere. Quisque eu condimentum augue, eget fermentum ante. Vestibulum pellentesque dui vel felis tempus, vel tempor leo dictum. Nam in nisi mauris. Ut justo mi, dignissim non nunc ac, faucibus rhoncus metus. Proin sollicitudin tortor et consequat molestie. Curabitur sagittis eleifend iaculis." },
    { name: "Complete floor installation", description: "Integer sagittis, ante eget blandit tincidunt, magna dui tincidunt nisl, sed imperdiet mi purus sed est. Maecenas diam tortor, consequat a rhoncus vitae, finibus nec orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas neque ac convallis posuere. Quisque eu condimentum augue, eget fermentum ante. Vestibulum pellentesque dui vel felis tempus, vel tempor leo dictum. Nam in nisi mauris. Ut justo mi, dignissim non nunc ac, faucibus rhoncus metus. Proin sollicitudin tortor et consequat molestie. Curabitur sagittis eleifend iaculis." },
];

export default function Services() {
    return (
        <AppLayout title="Services">
            <div className="relative pt-6 pb-24">
                <Header />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-36 lg:px-8">
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