import React from 'react'
import Head from 'next/head';
import Header from '@/components/ui/Header';
import logo from '../../assets/images/Uktob-Logo.jpg';
import Image from 'next/image';
import CustomH1 from '@/components/ui/CustomH1';
import Link from 'next/link';

export const metadata = {
  title: "Uktob",
  description: "",
};

const HomePage = () => {
  return (
    <div className=''>
      <CustomH1 className='hover:underline'><Link href="/test-page">Click Here Tamer</Link></CustomH1>
      <Head>
        <title>Uktob - Localized Content & Media Monitoring</title>

      </Head>
      <Header />
      <main className="container">
        <section>

          <h1>Welcome to Uktob!</h1>
          <p>
            Your go-to partner for authentic, localized content and global media
            monitoring.
          </p>
        </section>
        <section>
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Copywriting & Translation:</strong> Whether you need
              classical written Arabic, localized spoken dialects, or seamless
              English content, we craft words that resonate.
            </li>
            <li>
              <strong>Lightning-Fast Delivery:</strong> Need something under 500
              words? Quick next-day delivery is just a request away.
            </li>
            <li>
              <strong>Global Media Monitoring:</strong> Skilled monitors across
              countries help you stay on top of trends in English, Spanish,
              French, Arabic, Mandarin, and more.
            </li>
          </ul>
        </section>
        <section>
          <h2>Why Choose Uktob?</h2>
          <ul>
            <li>We speak your language (literally and culturally).</li>
            <li>
              Personalized service ensures your content feels tailored, not
              templated.
            </li>
            <li>
              We deliver on time, every time, because your deadlines matter.
            </li>
          </ul>
        </section>
        <section aria-label="Call to Action">
          <h2>Let’s Talk!</h2>
          <p>
            Got a project? Need a quick turnaround? Drop us a message—we’d love
            to help.
          </p>
          <p>
            📧 Email us at: <a href="mailto:info@uktob.com">info@uktob.com</a>
          </p>
        </section>
        <section aria-label="Quote Form">
          <h2>Get a Quote Today!</h2>
          <form className="grid">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              aria-label="Name"
              required
            />
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Brief Description"
              aria-label="Brief Description"
              required
            />
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              placeholder="Delivery Date"
              aria-label="Delivery Date"
              required
            />
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Website"
              aria-label="Website"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email"
              required
            />
            <button type="submit">Get Quote</button>
          </form>
        </section>
        <section>
          <h2>Our Clients</h2>
          <div className="grid">
            <figure>
              <Image
                src={logo}
                width={400}
                height={100}
                alt="Client Logo"
              />
              <figcaption>Client 1</figcaption>
            </figure>
          </div>
        </section>
        <section aria-label="Testimonials">
          <h2>See What Clients Are Saying About Uktob</h2>
          <blockquote>
            <p>
              على مدار تسع سنوات من العمل مع اكتب كمترجمة وكاتبة محتوى ومدققة لغوية،
              كانت كل لحظة مليئة بالإبداع والإنجاز.
            </p>
            <footer>
              — <strong>Ghadah, Arabic Copywriter</strong>
            </footer>
          </blockquote>
        </section>
      </main>
      <footer className="container">
        <small>
          <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </small>
      </footer>
    </div>

  )
}

export default HomePage