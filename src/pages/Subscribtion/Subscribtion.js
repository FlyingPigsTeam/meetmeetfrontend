import React, { useState, useEffect, useContext } from "react";
// import { Route, Link, Routes } from "react-router-dom";

import "../../index.css";
// import AuthContext from "../../context/AuthContext";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import PageWrapper from "../../components/PageWrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { CheckIcon } from '@heroicons/react/24/outline';

const pricing = {
    tiers: [
        {
            title: 'Freelancer',
            price: 24,
            frequency: '/month',
            description: 'The essentials to provide your best work for clients.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            cta: 'Monthly billing',
            mostPopular: false,
        },
        {
            title: 'Startup',
            price: 32,
            frequency: '/month',
            description: 'A plan that scales with your rapidly growing business.',
            features: [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations',
            ],
            cta: 'Monthly billing',
            mostPopular: true,
        },
        {
            title: 'Enterprise',
            price: 48,
            frequency: '/month',
            description: 'Dedicated support and infrastructure for your company.',
            features: [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom integrations',
            ],
            cta: 'Monthly billing',
            mostPopular: false,
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Subscribtion = () => {
    return (
        <>
        <PageWrapper>
        <Header>
          <Header.Items>
            {/* <Header.SidebarToggle /> */}
            <Header.Right>
                <Header.Right.DarkModeToggle />
                <Header.Right.Notification/>
            </Header.Right>
          </Header.Items>
        </Header>
        <Sidebar>
          <Sidebar.Primary>
            <Sidebar.Primary.Logo />
            <Sidebar.Primary.Middle>
              <Sidebar.Primary.Middle.Home />
              {/* <Sidebar.Primary.Middle.LaterThings/> */}
              <Sidebar.Secondary.Expanded.Body.Middle.Divider />
              <Sidebar.Primary.Middle.Rooms>
                {/* <Sidebar.Primary.Middle.Rooms.Item /> */}
                <Sidebar.Primary.Middle.Rooms.LoadItems />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              {/* <Sidebar.Primary.Bottom.LogOut /> */}
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
        </Sidebar>
        <MainSection>
        <div className="mx-auto max-w-7xl  py-24 px-4 sm:px-6 lg:px-8 card dark:bg-navy-800">
                        <h2 className="text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none lg:text-6xl">
                            Pricing plans for teams of all sizes
                        </h2>
                        <p className="mt-6 max-w-2xl text-xl text-gray-500">
                            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
                            loyalty, and driving sales.
                        </p>

                        {/* Tiers */}
                        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                            {pricing.tiers.map((tier) => (
                                <div
                                    key={tier.title}
                                    className="relative flex flex-col rounded-2xl border border-gray-200  p-8 shadow-sm"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold ">{tier.title}</h3>
                                        {tier.mostPopular ? (
                                            <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-primary py-1.5 px-4 text-sm font-semibold text-white">
                                                Most popular
                                            </p>
                                        ) : null}
                                        <p className="mt-4 flex items-baseline ">
                                            <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                                            <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                                        </p>
                                        <p className="mt-6 ">{tier.description}</p>

                                        {/* Feature list */}
                                        <ul role="list" className="mt-6 space-y-6">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex">
                                                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                                                    <span className="ml-3 ">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="#"
                                        className={classNames(
                                            tier.mostPopular
                                                ? 'bg-primary text-white hover:bg-secondary'
                                                : 'bg-primary text-white hover:bg-secondary',
                                            'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                        )}
                                    >
                                        {tier.cta}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    </MainSection>
                    </PageWrapper>
        </>
    )
}

export default Subscribtion;