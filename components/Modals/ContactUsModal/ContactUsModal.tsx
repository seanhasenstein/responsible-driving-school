'use client';

import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import Modal from '../Modal';
import ContactUsSuccess from '@/components/ContactUsSuccess';
import ContactUsError from '@/components/ContactUsError';
import LoadingSpinner from '@/components/UI/LoadingSpinner';

import { email, formattedPhone, rawPhone } from '@/constants';
import { formatPhoneNumberOnChange, removeNonDigits } from '@/utils';

import { ContactMessage } from '@/types';

import styles from './ContactUsModal.module.css';

type Props = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function ContactUsModal({ isVisible, setIsVisible }: Props) {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const phoneRef = React.useRef<HTMLInputElement>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .transform(v => removeNonDigits(v))
      .matches(new RegExp(/^\d{10}$/), {
        excludeEmptyString: true,
        message: 'Invalid phone number'
      })
      .required('Phone is required'),
    message: Yup.string().required('Message is required'),
    website: Yup.string()
  });

  const handleSubmit = (values: ContactMessage) => {
    setStatus('loading');

    if (values.website) {
      setStatus('success');
      return;
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (!response.ok) {
          setStatus('error');
          throw new Error('Failed to send message');
        } else {
          setStatus('success');
        }
      })
      .catch(error => {
        console.log(error);
        setStatus('error');
      });
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleFaqClick = () => {
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      closeModal();
      faqsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const disableOutsideClick = status === 'success' || status === 'error';

  React.useEffect(() => {
    if (!isVisible) {
      setStatus('idle');
    }
  }, [isVisible]);

  return (
    <Modal {...{ isVisible, customModalClassName: styles.modal, closeModal, disableOutsideClick }}>
      {status === 'success' ? <ContactUsSuccess {...{ closeModal }} /> : null}
      {status === 'error' ? <ContactUsError {...{ closeModal }} /> : null}
      {status !== 'success' && status !== 'error' ? (
        <div className={styles.contactUsModal}>
          <div className={styles.header}>
            <h3 className={styles.title}>Contact Us</h3>
            <button type="button" className={styles.closeButton} onClick={closeModal}>
              <XMarkIcon className={styles.xIcon} />
            </button>
          </div>
          <div className={styles.description}>
            You might find what you're looking for in our{' '}
            <button type="button" onClick={handleFaqClick} className={styles.faqButton}>
              frequently asked questions
            </button>
            . Otherwise, you can contact us by using the contact form or information below.
          </div>
          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.span}>Contact us directly</span>
            </h3>
            <p className={styles.name}>Al Holzheimer</p>
            <div className={styles.row}>
              <div>
                <p className={styles.phone}>
                  <a href={`tel:${rawPhone}`} className={styles.link}>
                    {formattedPhone}
                  </a>
                </p>
                <p className={styles.email}>
                  <a href={email} className={styles.link}>
                    {email}
                  </a>
                </p>
              </div>
              <div>
                <p className={styles.address}>
                  525 N 6th Street
                  <br />
                  Oostburg, WI 53070
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.span}>Contact form</span>
            </h3>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
                website: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className={styles.formItem}>
                    <label htmlFor="name" className={styles.label}>
                      Name
                    </label>
                    <Field id="name" name="name" type="text" className={styles.textInput} />
                    <ErrorMessage name="name" component="div" className={styles.validationError} />
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <Field id="email" name="email" type="text" className={styles.textInput} />
                    <ErrorMessage name="email" component="div" className={styles.validationError} />
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      ref={phoneRef}
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (phoneRef.current) {
                          phoneRef.current.value = formatPhoneNumberOnChange(e.target.value);
                        }
                      }}
                      className={styles.textInput}
                    />
                    <ErrorMessage name="phone" component="div" className={styles.validationError} />
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <Field id="message" name="message" as="textarea" className={styles.textArea} />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className={styles.validationError}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className={classNames(styles.formItem, styles.websiteField)}
                  >
                    <label htmlFor="website" className={styles.label}>
                      Website
                    </label>
                    <Field
                      id="website"
                      name="website"
                      type="text"
                      tabIndex="-1"
                      autoComplete="off"
                      className={styles.textInput}
                    />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className={styles.validationError}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={styles.submitButton}
                  >
                    {status === 'loading' ? <LoadingSpinner /> : 'Send your message'}
                  </button>
                  <div className={styles.disclaimers}>
                    <p className={styles.p}>
                      For urgent matters regarding scheduled behind-the-wheels, please call us
                      directly at {formattedPhone}. Otherwise, we will respond to your message as
                      soon as we can.
                    </p>
                    <p className={styles.p}>
                      We respect your privacy and data. The information you provide is used solely
                      to respond to your message. By clicking “Send your message” you provide
                      authorization to Responsible Driving LLC to contact you at the email or phone
                      number you provide.
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
