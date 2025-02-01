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

                    <div className="row">
                        <div className="col-1-of-4">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Heading 1</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p>

                            </div>
                        </div>
                        <div className="col-1-of-4">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-accelerator"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Heading 2</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p>

                            </div>
                        </div>
                        <div className="col-1-of-4">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Heading 3</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p>

                            </div>
                        </div>
                        <div className="col-1-of-4">

                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-rss"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Heading 4</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                    voluptates, ducimus cumque aspernatur accusantium sed sit eius molestiae, aut architecto
                                    corrupti veritatis suscipit ipsum alias.
                                </p>

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
            </main >
        </div >
    )
}

export default TestPage