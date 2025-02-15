'use client'
import Image from 'next/image'
import React from 'react'
import image1 from '../../assets/images/royalty-free/1.jpeg'
import image2 from '../../assets/images/royalty-free/2.jpeg'
import image3 from '../../assets/images/royalty-free/3.jpeg'
import image4 from '../../assets/images/backgrounds/office.png'
import BookIcon from '../../assets/images/backgrounds/book_icon.png'
import Logo from '@/components/common/Logo'
import { useTranslation } from 'react-i18next'
import CustomH2 from '@/components/ui/CustomH2'
import CustomFeatureBox from '@/components/common/CustomFeatureBox'
import CustomFeatureContainer from '@/components/common/CustomFeatureBox/CustomFeatureContainer'
import AnimatedTitle from '@/components/ui/AnimatedTitle'
import CustomSection from '@/components/common/CustomSection'

const HomePage = () => {

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
          <h1 className="heading-primary flex flex-col gap-4">
            <span className="heading-primary--main rtl:font-gulzar rtl:text-[9.375rem]">{t("uktob")}</span>
            <span className="heading-primary--sub text-custom-45 rtl:font-gulzar tracking-widest rtl:tracking-normal rtl:text-custom-90">{t("welcome_title")}</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">{t('discover')}</a>
        </div>
      </header>

      <main>
        <div className="my-10">
          <AnimatedTitle sectionOne={t('Your go-to partner')} image={BookIcon} sectionTwo={t('for authentic, localized content and global media monitoring')} />
        </div>

        <section className="flex flex-col bg-[#e9ecef] pt-[15rem] pb-[25rem] px-44  h-fit mb-0">
          <div className="u-center-text  u-margin-bottom-big">
            <h2 className="heading-secondary rtl:tracking-normal"> {t('what_we_do')} </h2>
          </div>
          <div className="flex laptopS:flex-row flex-col ">
            <div className="flex flex-col laptopS:mx-44 b-[35rem] laptopS:mb-0">
              <h3 className="heading-tertiary u-margin-bottom-small">
                {t('Copywriting & Translation')}
              </h3>
              <p className="paragraph">
                {t('copyright_translation_description')}
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                {t('Lightning-Fast Delivery')}
              </h3>
              <p className="paragraph">
                {t('lightning_fast_delivery_description')}

              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                {t("Global Media Monitoring")}
              </h3>
              <p className="paragraph">
                {t('global_media_monitoring_description')}
              </p>
            </div>

            <div className="w-full relative ">
              <div className="w-[35rem] h-[35rem] absolute laptopS:-top-28 top-0  composition__photo z-50">
                <Image width={400} height={400} src={image1} alt="image1"
                  className="object-cover w-full h-full object-center" />
              </div>
              <div className="w-[35rem] h-[35rem] absolute laptopS:-bottom-28 laptopS:-left-24 composition__photo">
                <Image width={400} height={400} src={image2} alt="image2"
                  className="object-cover w-full h-full object-center " />
              </div>
              <div className="w-[35rem] h-[35rem] absolute laptopS:top-0 laptopS:-right-24 composition__photo">
                <Image width={400} height={400} src={image3} alt="image3"
                  className="object-cover w-full h-full object-center " />
              </div>
            </div>
          </div>

        </section >
        <section className="w-full h-[70rem] bg-gradient-image-four bg-cover flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center gap-8">
            <CustomH2 className=' text-white '>{t("why_choose_uktob")}</CustomH2>

            <CustomFeatureContainer>

              <CustomFeatureBox>
                <span className=''>{t("choice_1")}</span>
              </CustomFeatureBox>


              <CustomFeatureBox>
                <span className=''>{t("choice_2")}</span>
              </CustomFeatureBox>

              <CustomFeatureBox>
                <span className=''>{t("choice_3")}</span>
              </CustomFeatureBox>
            </CustomFeatureContainer>
          </div>

        </section>


        <section className="section-testomonials mt-[0rem]">
          <div className="u-center-text  u-margin-bottom-big">
            <h2 className="heading-secondary">
              Testomonials
            </h2>
          </div>

          <div className="row">
            <div className="story">
              {/* <figure className="story__shape relative">
                                <Image src={Placeholder} alt="founder" width={600} height={400} className="story__img transition-transform duration-300 hover:scale-105" />
                                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
                                <figcaption className="story__caption relative z-10">

                                </figcaption>
                            </figure> */}


              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">{t("testimonial-1")}</h3>
                <p>{t("testimonial-1-sub")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              {/* <figure className="story__shape">
                                <Image width={0} height={0} src={Placeholder} className="story__img"
                                    alt="founder" />
                                <figcaption className="story__caption">
                                </figcaption>
                            </figure> */}
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">{t("testimonial-2")}</h3>
                <p>{t("testimonial-2-sub")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              {/* <figure className="story__shape">
                                <Image width={0} height={0} src={Placeholder} className="story__img"
                                    alt="founder" />
                                <figcaption className="story__caption">
                                </figcaption>
                            </figure> */}
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">{t("testimonial-3")}</h3>
                <p>
                  على مدار تسع سنوات من العمل مع اكتب كمترجمة وكاتبة محتوى ومدققة
                  لغوية، كانت كل لحظة مليئة بالإبداع والإنجاز. في هذه البيئة الملهمة والداعمة، تحوّلت أفكاري إلى نجاحات ملموسة، ومسيرتي في اكتب إلى قصة فخر واعتزاز.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              {/* <figure className="story__shape">
                                <Image width={0} height={0} src={Placeholder} className="story__img"
                                    alt="founder" />
                                <figcaption className="story__caption">
                                </figcaption>
                            </figure> */}
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">{t("testimonial-4")}</h3>
                <p>{t("testimonial-4-sub")}</p>
              </div>
            </div>
          </div>
          {/* <div className="row u-center-text ">
                        <a href="" className="btn-text">View all managers &rarr;</a>
                    </div> */}

        </section>
        <section className="py-5">
          <div className="u-center-text  u-margin-bottom-big flex flex-col">
            <h2 className="heading-fourthary capitalize"> {t("contact_us_title")} </h2>
            <h2 className="heading-fourthary capitalize"> {t("we’d love to help")} </h2>

          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <Image
                      width={0}
                      height={0}
                      src={image4}
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                    />
                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                      {t("contactus-header-1")}
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
                              strokeWidth="2"
                            />
                            <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#04B3F1" strokeWidth="2" />
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
                  {t("contactus-header-2")}
                </h2>

                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder={t("contactus-name")} />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder={t("contactus-email")}/>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder={t("contactus-message")} />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">{t("contactus-method")}</h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> {t("contactus-phone-item")}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> {t("contactus-email-item")}
                      </label>
                    </div>
                  </div>
                </div>
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#039FD8] bg-[#04B3F1] shadow-sm">
                  {t("contactus-send")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-about")}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-blog")}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-team")}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-pricing")}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-contact")}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          {t("footer-terms")}
                        </a>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Dribbble</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                  {t("footer-copyright")}
                </p>
            </div>
        </section>
      </main >
    </div >
  )
}

export default HomePage