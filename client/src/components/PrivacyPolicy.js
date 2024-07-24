import React from 'react'
import { Helmet } from 'react-helmet'
// import '../../src/all.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Juris Spectra</title>
        <meta name="description" content="Read the privacy policy of Juris Spectra to understand how we collect, use, and protect your personal information. We are committed to ensuring your privacy and safeguarding your data." />
        <meta name="keywords" content="Juris Spectra, privacy policy, data protection, personal information, user privacy, data security" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>
      <div className="outer">

        <h1 className='pric'>Privacy Policy</h1>
        <div className="content">
          <div className="heading flex"> 1. Introduction</div>
          <p className='box'>Welcome to Juris Spectra ("we," "our," "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you visit our website,<span className='blue'> https://www.jurisspectra.com/</span> (the "Site").</p>
        </div>

        <div className="content">
          <div className="heading flex"> 2. Information We Collect</div>
          <p className='box'>Personal Information: We may collect personal information such as your name, email address, and any other information you provide when you contact us, subscribe to our newsletter, or fill out forms on our Site. Usage Data: We automatically collect information about your interaction with our Site, including IP addresses, browser types, referring/exit pages, and other usage details.</p>
        </div>


        <div className="content">
          <div className="heading flex"> 3. Use of Information</div>
          <p className='box'>We use the collected information to:</p>
          <p className="box">Provide, operate, and maintain our Site</p>
          <p className="box">Improve, personalize, and expand our Site</p>
          <p className="box">Communicate with you, including responding to your inquiries</p>
          <p className="box">Send you newsletters, marketing or promotional materials, and other information</p>
          <p className="box">Monitor and analyze usage and trends to improve your experience</p>
        </div>

        <div className="content">
          <div className="heading flex"> 4. Sharing of Information</div>
          <p className='box'>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below.</p>
          <p className="box">Service Providers: We may share your information with third-party service providers who assist us in operating our Site, conducting our business, or serving our users.</p>
          <p className="box">Legal Requirements: We may disclose your information when required by law or to protect our rights, privacy, safety, or property.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 5. Cookies and Tracking Technologies</div>
          <p className='box'>We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device. You can manage your cookie preferences through your browser settings.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 6. Third-Party Links</div>
          <p className='box'>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites. We encourage you to review the privacy policies of these sites before providing any personal information.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 7. Security</div>
          <p className='box'>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 8. Children's Privacy</div>
          <p className='box'>Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 9. Changes to This Privacy Policy</div>
          <p className='box'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
        </div>

        <div className="content">
          <div className="heading flex"> 10. Contact Us</div>
          <p className='box'>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="box">Email: juicyspectra@gmail.com</p>
        </div>
      </div>

    </>
  )
}

export default PrivacyPolicy
