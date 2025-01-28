'use client';

import React from 'react';
import classNames from 'classnames';
import { PlusIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { questionsAndAnswers } from './pageContent';

import styles from './Faqs.module.css';

type Props = {
  handleContactUsClick: () => void;
};

export default function Faqs({ handleContactUsClick }: Props) {
  const [openedIndex, setOpenedIndex] = React.useState(-1);

  const handleClick = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(index);
    }
  };

  return (
    <div className={styles.faqs} id="faqs">
      <QuestionMarkCircleIcon className={styles.questionIcon} />
      <h3 className={styles.title}>Frequently asked questions</h3>
      <div className={styles.description}>
        Here are some questions that we get asked often. If you don't see what you're looking for,
        please don't hesitate to{' '}
        <button type="button" onClick={handleContactUsClick} className={styles.contactBtn}>
          contact us
        </button>
        .
      </div>
      <dl className={styles.questionsAndAnswers}>
        {questionsAndAnswers.map(item => (
          <div
            key={item.id}
            className={classNames(styles.faqItem, { [styles.opened]: openedIndex === item.id })}
          >
            <dt className={styles.question}>
              <button
                type="button"
                aria-expanded={openedIndex === item.id}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-panel-${item.id}`}
                className={styles.questionButton}
                onClick={() => handleClick(item.id)}
              >
                <span className={styles.content}>{item.question}</span>
                <span className={styles.iconWrapper}>
                  {openedIndex === item.id ? (
                    <XMarkIcon className={styles.xIcon} />
                  ) : (
                    <PlusIcon className={styles.plusIcon} />
                  )}
                </span>
              </button>
            </dt>
            <dd
              className={classNames(styles.answerWrapper, {
                [styles.opened]: openedIndex === item.id
              })}
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-item-${item.id}`}
              hidden={openedIndex !== item.id}
            >
              <div className={styles.content}>{item.answer}</div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
