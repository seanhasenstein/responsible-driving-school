import Program from '../Program/Program';

import { programs } from '../Program/pageContent';

import styles from './Programs.module.css';

type Props = {
  handleGrantProgramClick: () => void;
};

export default function Programs(props: Props) {
  return (
    <div className={styles.programs} id="getStarted">
      <div className={styles.grid}>
        {programs.map(program => (
          <Program key={program.type} {...{ allPrograms: programs, ...program, ...props }} />
        ))}
      </div>
    </div>
  );
}
