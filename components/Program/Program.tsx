import { useEffect, useState } from 'react';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import classNames from 'classnames';

import { createIdNumber } from '@/utils';

import styles from './Program.module.css';

type Program = {
  type: 'onlineInstruction' | 'behindTheWheel' | 'both';
  title: string;
  price: number;
  details?: string[];
  requirements?: string[];
  standardProgramUrl?: string;
  grantProgramUrl?: string;
  getStartedUrl?: boolean;
};

interface Props extends Program {
  allPrograms: Program[];
  handleGrantProgramClick: () => void;
}

export default function Program(props: Props) {
  const {
    type,
    title,
    price,
    details,
    requirements,
    standardProgramUrl,
    grantProgramUrl,
    getStartedUrl,
    allPrograms
  } = props;

  const [messageId, setMessageId] = useState('');

  const isOnlineInstructionOnly = type === 'onlineInstruction';
  const isBehindTheWheelOnly = type === 'behindTheWheel';
  const isSingleProgram = isOnlineInstructionOnly || isBehindTheWheelOnly;

  const onlineInstruction = allPrograms.find(program => program.type === 'onlineInstruction');
  const behindTheWheel = allPrograms.find(program => program.type === 'behindTheWheel');

  const onlineInstructionDetails = onlineInstruction?.details;
  const onlineInstructionRequirements = onlineInstruction?.requirements;
  const behindTheWheelDetails = behindTheWheel?.details;
  const behindTheWheelRequirements = behindTheWheel?.requirements;

  useEffect(() => {
    setMessageId(createIdNumber());
  }, []);

  return (
    <div className={classNames(styles.program, styles[type])}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.details}>
        {isSingleProgram ? (
          <ul className={styles.list}>
            {details?.map(detail => (
              <li key={detail} className={styles.item}>
                <CheckCircleIcon className={styles.icon} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className={styles.detailTitle}>Online instruction includes:</p>
            <ul className={styles.list}>
              {onlineInstructionDetails?.map(detail => (
                <li key={detail} className={styles.item}>
                  <CheckCircleIcon className={styles.icon} />
                  {detail}
                </li>
              ))}
            </ul>
            <p className={styles.detailTitle}>Behind-the-wheel includes:</p>
            <ul className={styles.list}>
              {behindTheWheelDetails?.map(detail => (
                <li key={detail} className={styles.item}>
                  <CheckCircleIcon className={styles.icon} />
                  {detail}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className={styles.ctas}>
          {standardProgramUrl && (
            <a
              href={standardProgramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Standard program
              <ArrowTopRightOnSquareIcon className={styles.icon} />
            </a>
          )}
          {grantProgramUrl && (
            <a
              href={grantProgramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              Grant program
              <ArrowTopRightOnSquareIcon className={styles.icon} />
            </a>
          )}
          {getStartedUrl && (
            <a
              href={`mailto:seanhasenstein@gmail.com?subject=Behind-the-Wheel%20Inquery%20%5B${messageId}%5D`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Get started
            </a>
          )}
        </div>
        {grantProgramUrl ? (
          <button
            type="button"
            onClick={props.handleGrantProgramClick}
            className={styles.grantProgramToggleBtn}
          >
            Learn about the grant program
            <ArrowRightIcon className={styles.icon} />
          </button>
        ) : null}
      </div>
      <div className={styles.requirements}>
        <p className={styles.title}>
          <span className={styles.textWrapper}>Requirements</span>
        </p>
        {isSingleProgram ? (
          <ul className={styles.requirementsList}>
            {requirements?.map(requirement => (
              <li key={requirement} className={styles.requirement}>
                *<span>{requirement}</span>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className={styles.sectionTitle}>Online instruction:</p>
            <ul className={styles.requirementsList}>
              {onlineInstructionRequirements?.map(requirement => (
                <li key={requirement} className={styles.requirement}>
                  *<span>{requirement}</span>
                </li>
              ))}
            </ul>
            <p className={styles.sectionTitle}>Behind-the-wheel:</p>
            <ul className={styles.requirementsList}>
              {behindTheWheelRequirements?.map(requirement => (
                <li key={requirement} className={styles.requirement}>
                  *<span>{requirement}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
