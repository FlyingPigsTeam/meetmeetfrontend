import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">

                {/* @@include("partials/body.html")
            <!-- Loader Start -->
            <!-- <div id="preloader">
                <div id="status">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div> -->
            <!-- Loader End --> */}

                {/* <!-- Start Navbar --> */}
                <nav id="topnav" class="defaultscroll is-sticky">
                    <div class="container">
                        {/* <!-- Logo container--> */}
                        <a class="logo pl-0" href="index.html">
                            <img src="assets/images/logo-dark.png" class="inline-block dark:hidden" alt="" />
                            <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt="" />
                        </a>

                        {/* <!-- End Logo container--> */}
                        <div class="menu-extras">
                            <div class="menu-item">
                                {/* <!-- Mobile menu toggle--> */}
                                <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                                    <div class="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                {/* <!-- End mobile menu toggle--> */}
                            </div>
                        </div>

                        {/* <!--Login button Start--> */}
                        <ul class="buy-button list-none mb-0">
                            <li class="inline mb-0">
                                <a href="" class="btn btn-icon rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i data-feather="settings" class="h-4 w-4"></i></a>
                            </li>

                            <li class="inline pl-1 mb-0">
                                <a href="https://1.envato.market/techwind" target="_blank" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i data-feather="shopping-cart" class="h-4 w-4"></i></a>
                            </li>
                        </ul>
                        {/* <!--Login button End--> */}

                        <div id="navigation">
                            {/* <!-- Navigation Menu--> */}
                            <ul class="navigation-menu">
                                <li><a href="index.html" class="sub-menu-item">Home</a></li>

                                <li class="has-submenu parent-parent-menu-item">
                                    <a href="javascript:void(0)">Landing</a><span class="menu-arrow"></span>

                                    <ul class="submenu megamenu">
                                        <li>
                                            <ul>
                                                <li><a href="index-saas.html" class="sub-menu-item">Saas <span class="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">Animation</span></a></li>
                                                <li><a href="index-classic-saas.html" class="sub-menu-item">Classic Saas </a></li>
                                                <li><a href="index-modern-saas.html" class="sub-menu-item">Modern Saas </a></li>
                                                <li><a href="index-apps.html" class="sub-menu-item">Application</a></li>
                                                <li><a href="index-classic-app.html" class="sub-menu-item">Classic App <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a></li>
                                                <li><a href="index-smartwatch.html" class="sub-menu-item">Smartwatch</a></li>
                                                <li><a href="index-marketing.html" class="sub-menu-item">Marketing</a></li>
                                                <li><a href="index-seo.html" class="sub-menu-item">SEO Agency </a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li><a href="index-it-solution.html" class="sub-menu-item">IT Solution</a></li>
                                                <li><a href="index-it-solution-two.html" class="sub-menu-item">It Solution Two <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a></li>
                                                <li><a href="index-digital-agency.html" class="sub-menu-item">Digital Agency</a></li>
                                                <li><a href="index-job.html" class="sub-menu-item">Job</a></li>
                                                <li><a href="index-restaurent.html" class="sub-menu-item">Restaurent</a></li>
                                                <li><a href="index-hosting.html" class="sub-menu-item">Hosting</a></li>
                                                <li><a href="index-gym.html" class="sub-menu-item">Gym <span class="bg-black dark:bg-slate-50 text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">Dark</span></a></li>
                                                <li><a href="index-nft.html" class="sub-menu-item">NFT Marketplace </a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li><a href="index-startup.html" class="sub-menu-item">Startup</a></li>
                                                <li><a href="index-business.html" class="sub-menu-item">Business</a></li>
                                                <li><a href="index-corporate.html" class="sub-menu-item">Corporate</a></li>
                                                <li><a href="index-corporate-two.html" class="sub-menu-item">Corporate Two </a></li>
                                                <li><a href="index-real-estate.html" class="sub-menu-item">Real Estate</a></li>
                                                <li><a href="index-consulting.html" class="sub-menu-item">Consulting </a></li>
                                                <li><a href="index-insurance.html" class="sub-menu-item">Insurance <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a></li>
                                                <li><a href="index-construction.html" class="sub-menu-item">Construction <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li><a href="index-personal.html" class="sub-menu-item">Personal</a></li>
                                                <li><a href="index-portfolio.html" class="sub-menu-item">Portfolio</a></li>
                                                <li><a href="index-photography.html" class="sub-menu-item">Photography <span class="bg-black dark:bg-slate-50 text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">Dark</span></a></li>
                                                <li><a href="index-studio.html" class="sub-menu-item">Studio</a></li>
                                                <li><a href="index-coworking.html" class="sub-menu-item">Co-Woriking</a></li>
                                                <li><a href="index-course.html" class="sub-menu-item">Online Courses </a></li>
                                                <li><a href="index-hospital.html" class="sub-menu-item">Hospital</a></li>
                                                <li><a href="index-event.html" class="sub-menu-item">Event/Conference </a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li><a href="index-crypto.html" class="sub-menu-item">Cryptocurrency <span class="bg-black dark:bg-slate-50 text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">Dark</span></a></li>
                                                <li><a href="index-landing-one.html" class="sub-menu-item">Landing One</a></li>
                                                <li><a href="index-landing-two.html" class="sub-menu-item">Landing Two</a></li>
                                                <li><a href="index-landing-three.html" class="sub-menu-item">Landing Three</a></li>
                                                <li><a href="index-landing-four.html" class="sub-menu-item">Landing Four</a></li>
                                                <li><a href="index-service.html" class="sub-menu-item">Service Provider</a></li>
                                                <li><a href="index-food-blog.html" class="sub-menu-item">Food Blog </a></li>
                                                <li><a href="index-blog.html" class="sub-menu-item">Blog </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="has-submenu parent-parent-menu-item">
                                    <a href="javascript:void(0)">Pages</a><span class="menu-arrow"></span>
                                    <ul class="submenu">
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Company </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="page-aboutus.html" class="sub-menu-item"> About Us</a></li>
                                                <li><a href="page-services.html" class="sub-menu-item">Services</a></li>
                                                <li><a href="page-team.html" class="sub-menu-item"> Team</a></li>
                                                <li><a href="page-pricing.html" class="sub-menu-item">Pricing</a></li>
                                                <li><a href="page-testimonial.html" class="sub-menu-item">Testimonial <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Accounts</a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="user-profile.html" class="sub-menu-item">User Profile</a></li>
                                                <li><a href="user-billing.html" class="sub-menu-item">Billing</a></li>
                                                <li><a href="user-payment.html" class="sub-menu-item">Payment</a></li>
                                                <li><a href="user-invoice.html" class="sub-menu-item">Invoice</a></li>
                                                <li><a href="user-social.html" class="sub-menu-item">Social</a></li>
                                                <li><a href="user-notification.html" class="sub-menu-item">Notification</a></li>
                                                <li><a href="user-setting.html" class="sub-menu-item">Setting</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Real Estate</a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="property-listing.html" class="sub-menu-item">Listing</a></li>
                                                <li><a href="property-detail.html" class="sub-menu-item">Property Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Courses </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="course-listing.html" class="sub-menu-item">Course Listing</a></li>
                                                <li><a href="course-detail.html" class="sub-menu-item">Course Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> NFT Market </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="nft-explore.html" class="sub-menu-item">Explore</a></li>
                                                <li><a href="nft-auction.html" class="sub-menu-item">Auction</a></li>
                                                <li><a href="nft-collection.html" class="sub-menu-item">Collections</a></li>
                                                <li><a href="nft-creators.html" class="sub-menu-item">Creators</a></li>
                                                <li><a href="nft-wallet.html" class="sub-menu-item">Wallet</a></li>
                                                <li><a href="nft-create-item.html" class="sub-menu-item">Create NFT</a></li>
                                                <li><a href="nft-detail.html" class="sub-menu-item">Single NFT</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="food-recipe.html" class="sub-menu-item">Food Recipe </a></li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Photography </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="photography-about.html" class="sub-menu-item">About Us</a></li>
                                                <li><a href="photography-portfolio.html" class="sub-menu-item">Portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Job / Careers </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="page-job-grid.html" class="sub-menu-item">All Jobs</a></li>
                                                <li><a href="page-job-detail.html" class="sub-menu-item">Job Detail</a></li>
                                                <li><a href="page-job-apply.html" class="sub-menu-item">Job Apply</a></li>
                                                <li><a href="page-job-candidates.html" class="sub-menu-item">Job Candidates</a></li>
                                                <li><a href="page-job-candidate-detail.html" class="sub-menu-item">Candidate Detail</a></li>
                                                <li><a href="page-job-companies.html" class="sub-menu-item">All Companies</a></li>
                                                <li><a href="page-job-company-detail.html" class="sub-menu-item">Company Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Helpcenter </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="helpcenter.html" class="sub-menu-item">Overview</a></li>
                                                <li><a href="helpcenter-faqs.html" class="sub-menu-item">FAQs</a></li>
                                                <li><a href="helpcenter-guides.html" class="sub-menu-item">Guides</a></li>
                                                <li><a href="helpcenter-support.html" class="sub-menu-item">Support</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Blog <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="blog.html" class="sub-menu-item">Blogs</a></li>
                                                <li><a href="blog-sidebar.html" class="sub-menu-item">Blogs & Sidebar</a></li>
                                                <li><a href="blog-detail.html" class="sub-menu-item">Blog Detail</a></li>
                                                <li class="has-submenu child-menu-item"><a href="javascript:void(0)"> Blog Posts <span class="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a><span class="submenu-arrow"></span>
                                                    <ul class="submenu">
                                                        <li><a href="blog-standard-post.html" class="sub-menu-item">Standard Post</a></li>
                                                        <li><a href="blog-slider-post.html" class="sub-menu-item">Slider Post</a></li>
                                                        <li><a href="blog-gallery-post.html" class="sub-menu-item">Gallery Post</a></li>
                                                        <li><a href="blog-youtube-post.html" class="sub-menu-item">Youtube Post</a></li>
                                                        <li><a href="blog-vimeo-post.html" class="sub-menu-item">Vimeo Post</a></li>
                                                        <li><a href="blog-audio-post.html" class="sub-menu-item">Audio Post</a></li>
                                                        <li><a href="blog-blockquote-post.html" class="sub-menu-item">Blockquote</a></li>
                                                        <li><a href="blog-left-sidebar-post.html" class="sub-menu-item">Left Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Email Template</a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="email-confirmation.html" class="sub-menu-item">Confirmation</a></li>
                                                <li><a href="email-password-reset.html" class="sub-menu-item">Reset Password</a></li>
                                                <li><a href="email-alert.html" class="sub-menu-item">Alert</a></li>
                                                <li><a href="email-invoice.html" class="sub-menu-item">Invoice</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Auth Pages </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="auth-login.html" class="sub-menu-item">Login</a></li>
                                                <li><a href="auth-signup.html" class="sub-menu-item">Signup</a></li>
                                                <li><a href="auth-re-password.html" class="sub-menu-item">Reset Password</a></li>
                                                <li><a href="auth-lock-screen.html" class="sub-menu-item">Lock Screen</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Utility </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="page-terms.html" class="sub-menu-item">Terms of Services</a></li>
                                                <li><a href="page-privacy.html" class="sub-menu-item">Privacy Policy</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Special</a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="page-comingsoon.html" class="sub-menu-item">Coming Soon</a></li>
                                                <li><a href="page-maintenance.html" class="sub-menu-item">Maintenance</a></li>
                                                <li><a href="page-error.html" class="sub-menu-item">Error</a></li>
                                                <li><a href="page-thankyou.html" class="sub-menu-item">Thank you</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Contact </a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="contact-detail.html" class="sub-menu-item">Contact Detail</a></li>
                                                <li><a href="contact-one.html" class="sub-menu-item">Contact One</a></li>
                                                <li><a href="contact-two.html" class="sub-menu-item">Contact Two</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu parent-menu-item"><a href="javascript:void(0)"> Multi Level Menu</a><span class="submenu-arrow"></span>
                                            <ul class="submenu">
                                                <li><a href="javascript:void(0)" class="sub-menu-item">Level 1.0</a></li>
                                                <li class="has-submenu child-menu-item"><a href="javascript:void(0)"> Level 2.0 </a><span class="submenu-arrow"></span>
                                                    <ul class="submenu">
                                                        <li><a href="javascript:void(0)" class="sub-menu-item">Level 2.1</a></li>
                                                        <li><a href="javascript:void(0)" class="sub-menu-item">Level 2.2</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="has-submenu parent-parent-menu-item">
                                    <a href="javascript:void(0)">Portfolio</a><span class="menu-arrow"></span>
                                    <ul class="submenu megamenu">
                                        <li>
                                            <ul>
                                                <li class="megamenu-head">Modern Portfolio</li>
                                                <li><a href="portfolio-modern-two.html" class="sub-menu-item">Two Column</a></li>
                                                <li><a href="portfolio-modern-three.html" class="sub-menu-item">Three Column</a></li>
                                                <li><a href="portfolio-modern-four.html" class="sub-menu-item">Four Column</a></li>
                                                <li><a href="portfolio-modern-five.html" class="sub-menu-item">Five Column</a></li>
                                                <li><a href="portfolio-modern-six.html" class="sub-menu-item">Six Column</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li class="megamenu-head">Classic Portfolio</li>
                                                <li><a href="portfolio-classic-two.html" class="sub-menu-item">Two Column</a></li>
                                                <li><a href="portfolio-classic-three.html" class="sub-menu-item">Three Column</a></li>
                                                <li><a href="portfolio-classic-four.html" class="sub-menu-item">Four Column</a></li>
                                                <li><a href="portfolio-classic-five.html" class="sub-menu-item">Five Column</a></li>
                                                <li><a href="portfolio-classic-six.html" class="sub-menu-item">Six Column</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li class="megamenu-head">Creative Portfolio</li>
                                                <li><a href="portfolio-creative-two.html" class="sub-menu-item">Two Column</a></li>
                                                <li><a href="portfolio-creative-three.html" class="sub-menu-item">Three Column</a></li>
                                                <li><a href="portfolio-creative-four.html" class="sub-menu-item">Four Column</a></li>
                                                <li><a href="portfolio-creative-five.html" class="sub-menu-item">Five Column</a></li>
                                                <li><a href="portfolio-creative-six.html" class="sub-menu-item">Six Column</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li class="megamenu-head">Masonry Portfolio</li>
                                                <li><a href="portfolio-masonry-two.html" class="sub-menu-item">Two Column</a></li>
                                                <li><a href="portfolio-masonry-three.html" class="sub-menu-item">Three Column</a></li>
                                                <li><a href="portfolio-masonry-four.html" class="sub-menu-item">Four Column</a></li>
                                                <li><a href="portfolio-masonry-five.html" class="sub-menu-item">Five Column</a></li>
                                                <li><a href="portfolio-masonry-six.html" class="sub-menu-item">Six Column</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul>
                                                <li class="megamenu-head">Portfolio Detail</li>
                                                <li><a href="portfolio-detail-one.html" class="sub-menu-item">Portfolio One</a></li>
                                                <li><a href="portfolio-detail-two.html" class="sub-menu-item">Portfolio Two</a></li>
                                                <li><a href="portfolio-detail-three.html" class="sub-menu-item">Portfolio Three</a></li>
                                                <li><a href="portfolio-detail-four.html" class="sub-menu-item">Portfolio Four</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)">Docs</a><span class="menu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="documentation.html" class="sub-menu-item">Documentation</a></li>
                                        <li><a href="changelog.html" class="sub-menu-item">Changelog</a></li>
                                        <li><a href="widget.html" class="sub-menu-item">Widget</a></li>
                                    </ul>
                                </li>

                                <li><a href="contact-one.html" class="sub-menu-item">Contact</a></li>
                            </ul>
                            {/* <!--end navigation menu--> */}
                        </div>
                        {/* <!--end navigation--> */}
                    </div>
                    {/* <!--end container--> */}
                </nav>
                {/* <!--end header--> */}
                {/* <!-- End Navbar --> */}
                {/* <!-- Start Hero --> */}
                <section class="relative home-wrapper items-center overflow-hidden">
                    <div class="container z-2">
                        <div class="grid grid-cols-1 md:mt-44 mt-32 text-center">
                            <div class="wow animate__animated animate__fadeIn">
                                <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Build fast, Released quickly.</h4>
                                <p class="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise
                                    on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div class="mt-6">
                                    <a href="" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Try For Free</a>

                                    <p class="text-slate-400 text-sm mt-3">No credit card required. Free 14-days trial</p>
                                </div>
                            </div>
                            <div class="home-dashboard mt-8 z-3 wow animate__animated animate__fadeIn">
                                <img src="assets/images/saas/classic01.png" alt="" class="mover" />
                            </div>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="bg-indigo-600 w-8 h-16 z-2 absolute left-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
                        <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute left-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>

                        <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute right-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
                        <div class="bg-indigo-600 w-8 h-16 z-2 absolute right-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end section--> */}
                {/* <!-- End Hero --> */}

                {/* <!-- Business Partner --> */}
                <section class="py-6">
                    <div class="container">
                        <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <img src="assets/images/client/amazon.svg" class="h-6" alt="" />
                            </div>

                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <img src="assets/images/client/google.svg" class="h-6" alt="" />
                            </div>

                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <img src="assets/images/client/lenovo.svg" class="h-6" alt="" />
                            </div>

                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <img src="assets/images/client/paypal.svg" class="h-6" alt="" />
                            </div>

                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                                <img src="assets/images/client/shopify.svg" class="h-6" alt="" />
                            </div>

                            <div class="mx-auto py-4 wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">
                                <img src="assets/images/client/spotify.svg" class="h-6" alt="" />
                            </div>
                        </div>
                        {/* <!--end grid--> */}
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end section--> */}
                {/* <!-- Business Partner --> */}

                {/* <!-- Start Section--> */}
                <section class="relative md:py-24 py-16 overflow-hidden">
                    <div class="container">
                        <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="monitor" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Fully Responsive</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="heart" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="eye" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Retina Ready</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="layout" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Based On Tailwindcss 3</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="feather" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Feather Icons</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="code" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Built With SASS</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay="1.3s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="user-check" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="globe" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Browsers Compatible</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6 wow animate__animated animate__fadeInUp" data-wow-delay="1.7s">
                                <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                        <i data-feather="settings" class="h-5 w-5 rotate-45"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="mb-0 text-lg font-medium">Easy to customize</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="grid grid-cols-1 justify-center">
                            <div class="mt-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <a href="page-services.html" class="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!--end contanier--> */}

                    <div class="container md:mt-24 mt-16">
                        <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Everyone Loves Techwind</h3>

                            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                            <div class="relative wow animate__animated animate__fadeInLeft" data-wow-delay=".3s">
                                <img src="assets/images/saas/classic02.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                                <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 left-0 rotate-45 -z-1 rounded-3xl"></div>
                            </div>

                            <div class="lg:ml-8 wow animate__animated animate__fadeInRight" data-wow-delay=".3s">
                                <h4 class="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                                <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <ul class="list-none text-slate-400 mt-4">
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Our Talented & Experienced Marketing Agency</li>
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Create your own skin to match your brand</li>
                                </ul>

                                <div class="mt-4">
                                    <a href="page-aboutus.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end container--> */}

                    <div class="container md:mt-24 mt-16">
                        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div class="relative order-1 md:order-2 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                                <img src="assets/images/saas/classic03.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                                <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 right-0 rotate-45 -z-1 rounded-3xl"></div>
                            </div>

                            <div class="lg:mr-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                                <h4 class="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                                <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <ul class="list-none text-slate-400 mt-4">
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Our Talented & Experienced Marketing Agency</li>
                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Create your own skin to match your brand</li>
                                </ul>

                                <div class="mt-4">
                                    <a href="page-aboutus.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end container--> */}

                    <div class="container md:mt-24 mt-16">
                        <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="grid grid-cols-1 mt-8">
                            <div class="tiny-three-item wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/01.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Calvin Carlo</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/02.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Christa Smith</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/03.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Jemina CLone</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/04.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Smith Vodka</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/05.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide text-center">
                                    <div class="customer-testi">
                                        <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                            <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                            <p class="text-slate-400">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div class="text-center mt-5">
                                            <img src="assets/images/client/06.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                            <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
                                            <span class="text-slate-400 text-sm">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end grid--> */}
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end section--> */}
                {/* <!-- End Section--> */}

                {/* <!-- Start --> */}
                <section class="relative md:py-24 py-16 md:pt-0 pt-0">
                    <div class="container">
                        <div class="grid grid-cols-1 justify-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div class="relative z-1">
                                <div class="grid grid-cols-1 md:text-left text-center justify-center">
                                    <div class="relative">
                                        <img src="assets/images/saas/home.png" alt="" />
                                        <div class="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                            <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                                class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="content md:mt-8">
                                    <div class="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
                                        <div class="lg:col-start-2 lg:col-span-10">
                                            <div class="grid md:grid-cols-2 grid-cols-1 items-center">
                                                <div class="mt-8">
                                                    <div class="section-title text-md-start">
                                                        <h6 class="text-white/50 text-lg font-semibold">Get Free Trial</h6>
                                                        <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Get An Easy Start <br /> With Techwind Now</h3>
                                                    </div>
                                                </div>

                                                <div class="mt-8">
                                                    <div class="section-title text-md-start">
                                                        <p class="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                        <a href="" class="text-white">Read More <i class="uil uil-angle-right-b align-middle"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end row --> */}
                    </div>
                    {/* <!--end container--> */}

                    <div class="absolute bottom-0 left-0 right-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
                </section>
                {/* <!--end section--> */}
                {/* <!-- End --> */}

                {/* <!-- Start --> */}
                <section class="relative md:py-24 py-16">
                    <div class="container">
                        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px] wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div class="lg:col-span-5">
                                <div class="lg:text-left text-center">
                                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Comfortable Rates</h3>

                                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div class="mt-6">
                                        <a href="page-pricing.html" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i class="uil uil-master-card"></i> Subscribe Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="lg:col-span-7 mt-8 lg:mt-0">
                                <div class="lg:ml-8">
                                    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                                        <div class="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                            <div class="p-6 py-8">
                                                <h6 class="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                                <div class="flex mb-5">
                                                    <span class="text-xl font-semibold">$</span>
                                                    <span class="price text-4xl font-semibold mb-0">39</span>
                                                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                                                </div>

                                                <ul class="list-none text-slate-400">
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Full Access</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Source Files</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Free Appointments</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Enhanced Security</li>
                                                </ul>
                                                <a href="" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</a>
                                            </div>
                                        </div>

                                        <div class="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                            <div class="p-6 py-8 md:pl-10">
                                                <h6 class="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                                <div class="flex mb-5">
                                                    <span class="text-xl font-semibold">$</span>
                                                    <span class="price text-4xl font-semibold mb-0">59</span>
                                                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                                                </div>

                                                <ul class="list-none text-slate-400">
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Full Access</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Source Files</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Free Appointments</li>
                                                    <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Enhanced Security</li>
                                                </ul>
                                                <a href="" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end grid--> */}
                    </div>
                    {/* <!--end container--> */}

                    <div class="container md:mt-24 mt-16">
                        <div class="grid md:grid-cols-12 grid-cols-1 items-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div class="md:col-span-6">
                                <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Blogs</h6>
                                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Reads Our Latest <br /> News & Blog</h3>
                            </div>

                            <div class="md:col-span-6">
                                <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>
                        {/* <!--end grid--> */}

                        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                            <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <img src="assets/images/blog/01.jpg" alt="" />

                                <div class="content p-6">
                                    <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Design your apps in your own way</a>
                                    <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div class="mt-4">
                                        <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <img src="assets/images/blog/02.jpg" alt="" />

                                <div class="content p-6">
                                    <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">How apps is changing the IT world</a>
                                    <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div class="mt-4">
                                        <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <img src="assets/images/blog/03.jpg" alt="" />

                                <div class="content p-6">
                                    <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Smartest Applications for Business</a>
                                    <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div class="mt-4">
                                        <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end grid--> */}
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end section--> */}
                {/* <!-- End --> */}

                {/* @@include("partials/footer/footer.html") */}

                {/* @@include("partials/cookies.html") */}

                {/* <!-- Back to top --> */}
                <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"><i class="uil uil-arrow-up"></i></a>
                {/* <!-- Back to top --> */}

                {/* @@include("partials/switcher.html") */}
                <footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
                    <div class="container">
                        <div class="grid grid-cols-12">
                            <div class="col-span-12">
                                <div class="py-[60px] px-0">
                                    <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                        <div class="lg:col-span-4 md:col-span-12">
                                            <a href="#" class="text-[22px] focus:outline-none">
                                                <img src="assets/images/logo-light.png" alt=""/>
                                            </a>
                                            <p class="mt-6 text-gray-300">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                            <ul class="list-none mt-6">
                                                <li class="inline"><a href="https://1.envato.market/techwind" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                                                <li class="inline"><a href="https://dribbble.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                                                <li class="inline"><a href="https://www.behance.net/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-behance" title="Behance"></i></a></li>
                                                <li class="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-linkedin" title="Linkedin"></i></a></li>
                                                <li class="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                                <li class="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                                <li class="inline"><a href="https://twitter.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                                <li class="inline"><a href="mailto:support@shreethemes.in" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-envelope align-middle" title="email"></i></a></li>
                                                <li class="inline"><a href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i class="uil uil-file align-middle" title="customization"></i></a></li>
                                            </ul>
                                            {/* <!--end icon--> */}
                                        </div>
                                        {/* <!--end col--> */}

                                        <div class="lg:col-span-2 md:col-span-4">
                                            <h5 class="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                            <ul class="list-none footer-list mt-6">
                                                <li><a href="page-aboutus.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> About us</a></li>
                                                <li class="mt-[10px]"><a href="page-services.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Services</a></li>
                                                <li class="mt-[10px]"><a href="page-team.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Team</a></li>
                                                <li class="mt-[10px]"><a href="page-pricing.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Pricing</a></li>
                                                <li class="mt-[10px]"><a href="portfolio-creative-four.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Project</a></li>
                                                <li class="mt-[10px]"><a href="blog.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Blog</a></li>
                                                <li class="mt-[10px]"><a href="auth-login.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Login</a></li>
                                            </ul>
                                        </div>
                                        {/* <!--end col--> */}

                                        <div class="lg:col-span-3 md:col-span-4">
                                            <h5 class="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                            <ul class="list-none footer-list mt-6">
                                                <li><a href="page-terms.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Terms of Services</a></li>
                                                <li class="mt-[10px]"><a href="page-privacy.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Privacy Policy</a></li>
                                                <li class="mt-[10px]"><a href="documentation.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Documentation</a></li>
                                                <li class="mt-[10px]"><a href="changelog.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Changelog</a></li>
                                                <li class="mt-[10px]"><a href="widget.html" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b me-1"></i> Widget</a></li>
                                            </ul>
                                        </div>
                                        {/* <!--end col--> */}

                                        <div class="lg:col-span-3 md:col-span-4">
                                            <h5 class="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                            <p class="mt-6">Sign up and receive the latest tips via email.</p>
                                            <form>
                                                <div class="grid grid-cols-1">
                                                    <div class="foot-subscribe my-3">
                                                        <label class="form-label">Write your email <span class="text-red-600">*</span></label>
                                                        <div class="form-icon relative mt-2">
                                                            <i data-feather="mail" class="w-4 h-4 absolute top-3 left-4"></i>
                                                            <input type="email" class="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none" placeholder="Email" name="email" required=""/>
                                                        </div>
                                                    </div>

                                                    <button type="submit" id="submitsubscribe" name="send" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                            {/* !--end col--> */}
                                    </div>
                                    {/* <!--end grid--> */}
                                </div>
                                {/* <!--end col--> */}
                            </div>
                        </div>
                        {/* <!--end grid--> */}
                    </div>
                    {/* <!--end container--> */}

                    <div class="py-[30px] px-0 border-t border-slate-800">
                        <div class="container text-center">
                            <div class="grid md:grid-cols-2 items-center">
                                <div class="md:text-left text-center">
                                    <p class="mb-0">© <script>document.write(new Date().getFullYear())</script> Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                                </div>

                                <ul class="list-none md:text-right text-center mt-6 md:mt-0">
                                    <li class="inline"><a href=""><img src="assets/images/payments/american-ex.png" class="max-h-6 inline" title="American Express" alt=""/></a></li>
                                    <li class="inline"><a href=""><img src="assets/images/payments/discover.png" class="max-h-6 inline" title="Discover" alt=""/></a></li>
                                    <li class="inline"><a href=""><img src="assets/images/payments/master-card.png" class="max-h-6 inline" title="Master Card" alt=""/></a></li>
                                    <li class="inline"><a href=""><img src="assets/images/payments/paypal.png" class="max-h-6 inline" title="Paypal" alt=""/></a></li>
                                    <li class="inline"><a href=""><img src="assets/images/payments/visa.png" class="max-h-6 inline" title="Visa" alt=""/></a></li>
                                </ul>
                            </div>
                            {/* <!--end grid--> */}
                        </div>
                        {/* <!--end container--> */}
                    </div>
                </footer>
                {/* <!--end footer--> */}
                {/* <!-- Footer End --> */}
            </div>

        </>
    )
}

export default LandingPage;