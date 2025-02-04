'use client'
import Image from 'next/image'
import React from 'react'
import Placeholder from '../../assets/images/Uktob-Logo.jpg'
import Logo from '@/components/common/Logo'
import { useTranslation } from 'react-i18next'

const TestPage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <header className="header">
                <Logo />
                {/* <div className="header__menu-box">
                    <a href="" className="btn-menu">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" height="5rem" width="5rem"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                                fill="currentColor"></path>
                            <path
                                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                                fill="currentColor"></path>
                            <path
                                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                </div> */}
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main ">{t("uktob")}</span>
                        <span className="heading-primary--sub ">{t('sub_heading')}</span>
                    </h1>
                    <a href="#" className="btn btn--white btn--animated">{t('discover')}</a>
                </div>
            </header>

            <main>
                <section className="section-about">
                    <div className="u-center-text  u-margin-bottom-big">
                        <h2 className="heading-secondary"> What We Do </h2>
                    </div>

                    <div className="row ">
                        <div className="col-1-of-2 ">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Copywriting & Translation
                            </h3>
                            <p className="paragraph">
                                Whether you need classical written Arabic, localized spoken dialects, or seamless English content, we craft words that resonate
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Lightning-Fast Delivery
                            </h3>
                            <p className="paragraph">
                                Need something under 500 words? We’ve got you covered. Quick next-day delivery is just a request away.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Global Media Monitoring
                            </h3>
                            <p className="paragraph">
                                With a team of skilled monitors across various countries, we help you stay on top of social trends and media insights in English, Spanish, French, Arabic, Mandarin, and more
                            </p>
                            {/* <a href="#" className="btn-text">Learn more &rarr;</a> */}
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <Image width={0} height={0} src={Placeholder} alt="image1"
                                    className="composition__photo composition__photo--p1" />
                                <Image width={0} height={0} src={Placeholder} alt="image2"
                                    className="composition__photo composition__photo--p2" />
                                <Image width={0} height={0} src={Placeholder} alt="image3"
                                    className="composition__photo composition__photo--p3" />
                            </div>
                        </div>
                    </div>
                </section >

                <section className="section-features">
                    <div className="u-center-text  u-margin-bottom-big">
                        <h2 className="heading-thirdary"> Why Choose Uktob? </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">We speak your language (literally and culturally).</h3>
                                {/* <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p> */}

                            </div>
                        </div>
                        <div className="col-1-of-3">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Our personalized service ensures your content feels tailored, not templated.</h3>
                                {/* <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p> */}
                            </div>
                        </div>
                        <div className="col-1-of-3">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-rss"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">We deliver on time, every time, because your deadlines matter.</h3>
                                {/* <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-managers">
                    <div className="u-center-text  u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Our Managers and founders
                        </h2>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape relative">
                                <Image src={Placeholder} alt="founder" width={600} height={400} className="story__img transition-transform duration-300 hover:scale-105" />
                                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
                                <figcaption className="story__caption relative z-10">
                                    Mohammad Yousri Fannoun
                                </figcaption>
                            </figure>


                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small"> Founder of the company</h3>
                                <p>
                                    Muhammad Yousri Fannoun moved to Jordan in 1967 and followed his father's footsteps by
                                    purchasing his own trucks. By 1975 he had a number of trucks with which he established a
                                    private transport company named Fannoun and Taslaq co.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <Image width={0} height={0} src={Placeholder} className="story__img"
                                    alt="founder" />
                                <figcaption className="story__caption">
                                    Mohammad Yousri Fannoun
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small"> Fannoun Tires Manager</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed dolorum architecto
                                    quisquam praesentium ea mollitia ipsa repellendus vero, facere incidunt, nihil corrupti
                                    reprehenderit totam consequatur iusto, ipsam commodi placeat!

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row u-center-text ">
                        <a href="" className="btn-text">View all managers &rarr;</a>
                    </div>

                </section>
                <section className="py-5">
                    <div className="u-center-text  u-margin-bottom-big">
                        <h2 className="heading-fourthary"> Got a project? Need a quick turnaround? Drop us a message. We’d love to help. </h2>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <div className="lg:mb-0 mb-10">
                                <div className="group w-full h-full">
                                    <div className="relative h-full">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1696488602.png"
                                            alt="ContactUs tailwind section"
                                            className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                                        />
                                        <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                            Contact us
                                        </h1>
                                        <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                            <div className="bg-white rounded-lg p-6 block">
                                                <a href="javascript:;" className="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                                                            stroke="#04B3F1"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                        000-000-0000
                                                    </h5>
                                                </a>
                                                <a href="javascript:;" className="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                                            stroke="#04B3F1"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                        info@uktob.com
                                                    </h5>
                                                </a>
                                                <a href="javascript:;" className="flex items-center">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path 
                                                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" 
                                                            stroke="#04B3F1" 
                                                            stroke-width="2"  
                                                        />
                                                        <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#04B3F1" stroke-width="2"/>
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">Dubai, UAE</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                                <h2 className="text-[#000000] font-manrope text-4xl font-semibold leading-10 mb-11">
                                    Send Us A Message
                                </h2>

                                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" />
                                <div className="mb-10">
                                    <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                                    <div className="flex">
                                        <div className="flex items-center mr-11">
                                            <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"/>
                                            <label for="radio-group-1" class="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                                                <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email 
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                                            <label for="radio-group-2" class="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                                                <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> Phone 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message"></input>
                                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#039FD8] bg-[#04B3F1] shadow-sm">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </div >
    )
}

export default TestPage