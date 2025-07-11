'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';

const Faqs = dynamic(() => import('@/components/Faqs'));
const Instructors = dynamic(() => import('@/components/Instructors'));
const Footer = dynamic(() => import('@/components/Footer'));
const ContactUsModal = dynamic(() => import('@/components/Modals/ContactUsModal'));
// const GrantProgramModal = dynamic(() => import('@/components/Modals/GrantProgramModal'));

import styles from './page.module.css';

export default function Home() {
  const [isContactModalVisible, setIsContactModalVisible] = React.useState(false);
  // const [isGrantModalVisible, setIsGrantModalVisible] = React.useState(false);

  const handleContactUsClick = () => {
    setIsContactModalVisible(true);
  };

  // const handleGrantProgramClick = () => {
  //   setIsGrantModalVisible(true);
  // };

  const handleIsContactModalVisible = (isVisible: boolean) => {
    setIsContactModalVisible(isVisible);
  };

  return (
    <div>
      <div className={styles.background}>
        <Header />
        <Hero {...{ handleContactUsClick }} />
      </div>
      <Programs />
      <Faqs {...{ handleContactUsClick }} />
      <Instructors />
      <Footer {...{ handleContactUsClick }} />
      <ContactUsModal
        {...{ isVisible: isContactModalVisible, setIsVisible: handleIsContactModalVisible }}
      />
      {/* <GrantProgramModal
        {...{ isVisible: isGrantModalVisible, setIsVisible: setIsGrantModalVisible }}
      /> */}
    </div>
  );
}
