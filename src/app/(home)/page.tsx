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
                <h3 className="heading-tertiary u-margin-bottom-small"> Rayan Hasan - Managing director, Head of Data Analytics, Research & Insights, Finsbury Global</h3>
                <p>
                  “We’ve been working with the Uktob team for around 2 years for our social media monitoring. Their ability to track and analyze content in
                  multiple languages has given us invaluable insights into our audiences preferences and behavior. The team is efficient, responsive, and understands
                  our needs. Uktob has become an essential partner in our digital strategy, and we couldnt be happier with their service!
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
                <h3 className="heading-tertiary u-margin-bottom-small">Natacha Karkour - Senior Social Media Manager, Netizency</h3>
                <p>
                  The team at Uktob is incredibly fast, thoughtful, and proactive. Their speed and attention to detail are unmatched, which is very appreciated in the
                  fast-paced world of social media. They don’t just translate; they offer valuable insights and suggestions, especially when it comes to tricky cultural
                  nuances like Saudi-specific phrasing. Plus, the founder is an absolute gem to work with—kind, reliable, and always ready to help!

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
                <h3 className="heading-tertiary u-margin-bottom-small">Ghadah, Arabic Copywriter</h3>
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
                <h3 className="heading-tertiary u-margin-bottom-small">Elizabeth, English Copywriter and Editor</h3>
                <p>
                  I have worked for Uktob in a freelance capacity for around a decade, and cannot praise it highly enough. They are consummate professionals who are incredibly
                  committed to their work, and demand the highest standards from both the organization and those who work with it. I have always found the Uktob team’s passion,
                  strong work ethic and dedication inspiring, and I feel honored to work with them as often as I do.
                </p>
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
                  Send Us A Message
                </h2>

                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
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

export default HomePage