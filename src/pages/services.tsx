'use client';

import CTASection from '@sections/CTA/CTA.section';
import ImageTextFullSection from '@sections/ImageTextFull/ImageTextFull.section';
import StageSection from '@sections/Stage/Stage.section';

export default function ServicesPage() {
  return (
    <main className={'page'}>
      <StageSection
        title={'Services'}
        image={{
          url: '/images/hazel-z-1.jpg',
          width: 700,
          height: 700,
        }}
        text={`We take care of everything, from design to deployment and ongoing maintenance, so you can focus on growing your business. 
          Whether you need a website or a mobile app, our hands-on approach guarantees fast, efficient, and reliable results.`}
      >
        <>
          At <span>Code Breeze</span>, we specialize in delivering comprehensive digital solutions, from web development to mobile apps. Our team of experts ensures every
          project is tailored to meet your business needs, providing a seamless and scalable experience.
        </>
      </StageSection>
      {/* Web Development Service */}
      <ImageTextFullSection
        image={{
          url: '/images/growtika-website.jpg',
          width: 1500,
          height: 800,
        }}
      >
        <>
          <h1>Web Development</h1>
          <p>
            We offer complete web development services to give your business a fully functional website. From design to hosting, we handle all the technical details, so
            you can focus on running your business. Whether you prefer a custom design or a template, we deliver a seamless experience.
          </p>
          <h3>What&apos;s Included</h3>
          <p>Our services cover everything needed to get your website online, with ongoing support to keep it running smoothly.</p>
          <ul>
            <li>
              <strong>Custom or Template Design: </strong> Choose between a unique design or a quick, high-quality template.
            </li>
            <li>
              <strong>Responsive Development: </strong>Ensuring your website works well on all devices.
            </li>

            <li>
              <strong>Domain and Hosting Setup: </strong>We handle domain registration and secure hosting for you.
            </li>
            <li>
              <strong>Integration of Features:</strong>From e-commerce to booking systems, we integrate what your business needs.
            </li>
            <li>
              <strong>SEO Optimization: </strong>Built-in SEO to improve your website’s visibility in search engines.
            </li>
          </ul>
          <h3>Ongoing Support as a Service</h3>
          <p>
            Unlike typical one-off website projects, our service goes beyond just development. We continue to manage and maintain your website, ensuring it stays updated
            and functional over time.
          </p>
          <ul>
            <li>We perform updates, backups, and security checks to keep your site running smoothly.</li>
            <li>We monitor and manage your hosting for consistent performance.</li>
            <li>We&apos;re here to assist with any technical issues you may encounter.</li>
            <li>As your needs grow, we can integrate new features and services.</li>
          </ul>
          <h3>Why Choose Us</h3>

          <p>
            We understand that building a website is just the beginning. Our service model ensures that you have a reliable partner for the long term. We don&apos;t just
            build websites; we provide a complete web solution that scales with your business.
          </p>
          <li>
            <strong>Complete Solution: </strong> We take care of design, hosting, and ongoing maintenance.
          </li>
          <li>
            <strong>Scalability: </strong> As your business grows, we&apos;ll ensure your website scales with it.
          </li>
          <li>
            <strong>Client-Focused: </strong> We tailor our services to meet your business goals.
          </li>
        </>
      </ImageTextFullSection>
      {/* Mobile Service */}
      <ImageTextFullSection
        imageToRight
        image={{
          url: '/images/jakub-zerdzicki-mobile.jpg',
          width: 1500,
          height: 1500,
        }}
      >
        <>
          <h1>Mobile App</h1>
          <p>
            We develop mobile apps that are scalable, efficient, and tailored to meet your unique business needs. Our team handles everything, from design to deployment,
            ensuring your app runs smoothly across all devices and platforms.
          </p>
          <h3>What's Included</h3>
          <p>Our mobile app service provides all the essentials for building and maintaining a high-performance app.</p>
          <ul>
            <li>
              <strong>Custom or Template Design: </strong> Choose between a tailored design or a fast, template-based approach.
            </li>
            <li>
              <strong>Cross-Platform Compatibility: </strong>Ensuring your app works on iOS and Android seamlessly.
            </li>

            <li>
              <strong>App Deployment: </strong>We manage app store submissions and updates.
            </li>
            <li>
              <strong>Feature Integration:</strong>Add key functionalities, such as notifications, payments, and more.
            </li>
          </ul>
          <h3>Ongoing Support as a Service</h3>
          <p>We don’t just launch your app—we maintain it, ensuring updates and new features are added as your business grows.</p>
          <ul>
            <li>Regular updates and bug fixes to keep your app running efficiently.</li>
            <li>We’re available for troubleshooting and updates.</li>
            <li>As your needs evolve, we’ll help add new features or integrations.</li>
          </ul>
          <h3>Why Choose Us</h3>
          <p>We offer a comprehensive mobile app solution that goes beyond development, ensuring your app continues to perform as your business grows.</p>
          <li>
            <strong>All-in-One Service: </strong> From design to deployment, we handle it all.
          </li>
          <li>
            <strong>Scalability: </strong> Your app will evolve as your business grows.
          </li>
          <li>
            <strong>Client-Focused: </strong> We work closely with you to meet your specific needs.
          </li>
        </>
      </ImageTextFullSection>
      {/* Cloud Solutions */}
      <ImageTextFullSection
        image={{
          url: '/images/growtika-cloud-dev.jpg',
          width: 1500,
          height: 1500,
        }}
      >
        <>
          <h1>Cloud Solutions</h1>
          <p>
            Our cloud solutions provide scalable, secure, and efficient infrastructure tailored to your business needs. We design and implement cloud systems that grow
            with your company, ensuring smooth operations and flexibility for future expansion.
          </p>
          <h3>What's Included</h3>
          <p>Our cloud services cover everything from setup to continuous management, giving you a robust platform without the complexity.</p>
          <ul>
            <li>
              <strong>Custom Architecture: </strong>We design cloud infrastructures that align with your specific business goals.
            </li>
            <li>
              <strong>Seamless Integration: </strong>We integrate cloud services with your existing systems for a smooth transition.
            </li>

            <li>
              <strong>Data Security: </strong>Implementing best practices to ensure your data is safe and fully compliant.
            </li>
            <li>
              <strong>Automated Scalability: </strong>Dynamic scaling of resources based on your business demand.
            </li>
          </ul>
          <h3>Ongoing Support as a Service</h3>
          <p>We don’t just set up your cloud infrastructure; we offer continuous support and optimization to ensure it runs efficiently over time.</p>
          <ul>
            <li>We keep an eye on your systems to ensure optimal performance.</li>
            <li>Constant updates and improvements to keep your infrastructure up to date.</li>
            <li>Immediate response and resolution for any technical issues that arise.</li>
          </ul>
          <h3>Why Choose Us</h3>
          <p>Our cloud solutions offer a full-service approach, from setup to ongoing support, so your business can operate smoothly and grow efficiently.</p>
          <li>
            <strong>Tailored Solutions: </strong> We build cloud systems specifically for your business goals.
          </li>
          <li>
            <strong>Future-Proof: </strong> Our infrastructure scales with your growth
          </li>
          <li>
            <strong>Client-First Approach: </strong> We work closely with you to ensure our solutions align with your business needs.
          </li>
        </>
      </ImageTextFullSection>
      <CTASection />
    </main>
  );
}
