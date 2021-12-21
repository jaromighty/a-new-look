import React from "react";
import { Link } from "gatsby";
import AppLayout from "../components/app-layout";
import Header from "../components/header";
import { CheckIcon, CreditCardIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";

const services = [
    {
        name: "Carpet, furniture, tile, and floor cleaning",
        description: "Integer porttitor pellentesque nisi quis posuere. Praesent sit amet quam eu dolor rhoncus varius vitae id velit.",
    },
    {
        name: "24-hour emergency water damage restoration",
        description: "Integer porttitor pellentesque nisi quis posuere. Praesent sit amet quam eu dolor rhoncus varius vitae id velit.",
    },
    {
        name: "Complete home and office remodeling",
        description: "Integer porttitor pellentesque nisi quis posuere. Praesent sit amet quam eu dolor rhoncus varius vitae id velit.",
    },
    {
        name: "Complete floor installation",
        description: "Integer porttitor pellentesque nisi quis posuere. Praesent sit amet quam eu dolor rhoncus varius vitae id velit.",
    },
];

export default function Home() {
    return (
        <AppLayout title="Home">
            <div className="relative pt-6 pb-16 sm:pb-56">
                <Header />
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-56">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Cleaning and restoration services for your</span>{' '}
                            <span className="block text-green-600 xl:inline">home or business</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div className="relative bg-green-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="/erik-mclean-RfkaDKptt-A-unsplash.jpg"
                        alt="person using caulk near a window"
                    />
                    <div className="absolute inset-0 bg-green-800 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-36 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold tracking-tight text-green-200 sm:text-5xl lg:text-6xl">Welcome</h2>
                    <p className="mt-6 text-xl text-green-100 max-w-3xl">
                        Hello, I'm Ron Manning, owner-operator of ANL restorations and janitorial services. Twenty years ago, we started as a company offering carpet, furniture, and tile floor cleaning. Since then, we have added commercial business cleaning, as well as 24-hour emergency water restoration services with all the drying equipment to get your home or business back together. As the years went by, we evolved to complete restoration which includes remolding, painting, installing flood bathroom fixtures, and small plumbing. Our company is small and family-oriented. We are here to provide you with proficient quality service to help you more fully enjoy your home or office.
                    </p>
                </div>
            </div>

            <div className="bg-green-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pt-36 lg:pb-16 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Services to meet your needs</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                        </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        {services.map((service) => (
                            <div key={service.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{service.description}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="mt-14 inline-flex flex-col sm:flex-row items-center text-gray-600">
                            <CreditCardIcon className="h-8 w-8 text-green-600" />
                            <span className="mt-2 sm:ml-3 sm:mt-0">We accept accept most debit or credit cards</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative bg-green-50 overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
                    <svg
                        className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
                        width={640}
                        height={784}
                        fill="none"
                        viewBox="0 0 640 784"
                    >
                        <defs>
                            <pattern
                                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                                x={118}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-green-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                        <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                    </svg>
                </div>

                <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-48">
                    <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <h1 className="mt-1 text-green-600 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                    We are trusted by our clients
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    We deliver quality results to each of our satisfied customers. The trust of our customers is important to us. To see more customer reviews,
                                    checkout our company page on Facebook.
                                </p>
                                <a href="#" target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    Visit our Facebook page
                                    <ExternalLinkIcon className="ml-3 -mr-1 h-5 w-5" />
                                </a>
                            </div>
                            <div className="mt-12 relative sm:max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex">
                                <svg
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                                    width={640}
                                    height={784}
                                    fill="none"
                                    viewBox="0 0 640 784"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                                            x={118}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-green-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                                    <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                                </svg>
                                <div className="relative w-full lg:ml-8">
                                    <div className="w-64 rounded-lg shadow-lg lg:max-w-md mx-auto">
                                        <button
                                            type="button"
                                            className="relative block w-full bg-white rounded-lg overflow-hidden z-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            <span className="sr-only">Watch our video to learn more</span>
                                            <img
                                                className="w-full"
                                                src="/testimonial-thumbnail-1.png"
                                                alt=""
                                            />
                                            <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                                                <svg className="h-20 w-20 text-green-500" fill="currentColor" viewBox="0 0 84 84">
                                                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                                                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </AppLayout>
    )
}
