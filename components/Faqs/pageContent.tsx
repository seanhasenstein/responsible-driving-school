import classNames from 'classnames';

import { formattedPhone } from '@/constants';

import styles from './Faqs.module.css';

export const questionsAndAnswers = [
  {
    id: 1,
    question: 'What is the driver education process?',
    answer: (
      <>
        <ol className={styles.orderedList}>
          <li className={styles.listItem}>Payment of driving school fees</li>
          <li className={styles.listItem}>
            Complete online driver education instruction (To start, must be at least{' '}
            <b className={styles.bold}>14 and a half</b>)
          </li>
          <li className={styles.listItem}>Receive signed MV3001 form from instructor</li>
          <li className={styles.listItem}>Pass knowledge and sign test at DMV</li>
          <li className={styles.listItem}>
            Obtain instruction permit (temps) from DMV (Must be at least 15)
          </li>
          <li className={styles.listItem}>Complete required behind-the-wheel instruction</li>
          <li className={styles.listItem}>
            Take road test at DMV or sign waiver if available (Must be at least 16)
          </li>
        </ol>
      </>
    )
  },
  {
    id: 2,
    question: "When can I take driver's education?",
    answer: (
      <>
        <p className={styles.paragraph}>
          Begin the online instruction when you are 14 and a half. When the online instruction is
          complete, you must obtain a valid instruction permit from the DMV{' '}
          <b className={styles.bold}>within 13 months</b>. Once you have enrolled and started online
          instruction, you may start BTW training concurrently.
        </p>
      </>
    )
  },
  {
    id: 3,
    question:
      'What documents do I need in order to get my instruction permit (temps) from the DMV?',
    answer: (
      <>
        <p className={styles.paragraph}>
          You must provide the WI DMV with proof of your legal name and date of birth. You can
          provide that proof by:
        </p>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>Certified copy of your U.S. Birth Certificate</li>
          <li className={styles.listItem}>Valid U.S. Passport or Passport Card</li>
        </ul>
        <p className={styles.paragraph}>
          You also must provide the WI DMV with proof of your identity, such as:
        </p>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>Social security card with your signature</li>
          <li className={styles.listItem}>Valid WI or out-of-state ID card with your photograph</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    question: 'How do I get my MV3001 form?',
    answer: (
      <>
        <p className={styles.paragraph}>
          When you are 15 <b className={styles.bold}>AND</b> have started or completed the 30 hour
          online instruction, contact by calling RDS to receive your MV3001 application form.
        </p>
      </>
    )
  },
  {
    id: 5,
    question:
      'What do I do once I have completed the 30 hour online instruction and have my instruction permit?',
    answer: (
      <>
        <p className={styles.paragraph}>
          You are now ready for behind-the-wheel which you can first schedule by{' '}
          <b className={styles.bold}>calling</b> RDS at {formattedPhone}. Your first drive must be
          scheduled within 60 days of obtaining your instruction permit. You may schedule your next
          drive during your first BTW.
        </p>
        <p className={classNames(styles.paragraph, styles.note)}>
          <span>*</span>
          <span>Best time to schedule driving appointments is after 8:00pm.</span>
        </p>
      </>
    )
  },
  {
    id: 6,
    question: 'Can I take more than one BTW per day?',
    answer: (
      <>
        <p className={styles.paragraph}>
          No. The state of Wisconsin allows a maximum of one driving hour per day.
        </p>
      </>
    )
  },
  {
    id: 7,
    question: 'What is the BTW schedule availability?',
    answer: (
      <>
        <p className={styles.paragraph}>
          Drive times will be available after school, Saturdays, and non-school days. Please contact
          RDS via phone call to schedule your first BTW.
        </p>
      </>
    )
  },
  {
    id: 8,
    question: 'What do I do if I need to cancel my drive?',
    answer: (
      <>
        <p className={styles.paragraph}>
          If you are unable to drive, please contact RDS at least 24 hours prior to your scheduled
          drive time. If you are sick, please cancel and do not drive. Contact RDS as soon as
          possible.
        </p>
      </>
    )
  },
  {
    id: 9,
    question: 'Am I able to do my BTW if I do not have my instruction permit (temps) with me?',
    answer: (
      <>
        <p className={styles.paragraph}>
          No, it is against the law for any person to drive a vehicle without their instruction
          permit in their possession.
        </p>
      </>
    )
  },
  {
    id: 10,
    question: 'Should I be driving with my parents?',
    answer: (
      <>
        <p className={styles.paragraph}>
          Yes, it is required by the state of Wisconsin to have at least 50 hours of driving
          experience, including 10 hours at night, prior to taking the road test at the DMV or
          signing the waiver if available.
        </p>
      </>
    )
  },
  {
    id: 11,
    question: 'When should I schedule my final drive time?',
    answer: (
      <>
        <p className={styles.paragraph}>
          You should schedule your final BTW at least 2 weeks prior to your scheduled road test.
        </p>
      </>
    )
  },
  {
    id: 12,
    question: 'When can I take the road test at the DMV?',
    answer: (
      <>
        <p className={styles.paragraph}>
          You may take the road test after you have completed the following:
        </p>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>30 hour online driver education instruction</li>
          <li className={styles.listItem}>6 hours BTW instruction</li>
          <li className={styles.listItem}>6 hours BTW observation instruction</li>
        </ul>
        <p className={styles.paragraph}>
          You also must be 16 and have had your instruction permit (temps) for a minimum of 6
          months.
        </p>
      </>
    )
  },
  {
    id: 13,
    question: 'How do I schedule my road test?',
    answer: (
      <>
        <p className={styles.paragraph}>
          You must schedule your road test online through the Wisconsin DMV. The website is{' '}
          <a href="https://wisconsindot.gov/Pages/home.aspx" target="_blank">
            wisconsindot.gov
          </a>{' '}
          and you can schedule it by searching{' '}
          <i>
            <u>"schedule a road test appointment"</u>
          </i>
          .
        </p>
        <p className={classNames(styles.paragraph, styles.note)}>
          <span>*</span>
          <span>
            You <b className={styles.bold}>cannot</b> schedule your road test by doing to the DMV
            office.
          </span>
        </p>
      </>
    )
  }
];
