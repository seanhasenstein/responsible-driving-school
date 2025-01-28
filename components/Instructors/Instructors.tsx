import styles from './Instructors.module.css';

const instructors = [
  {
    name: 'Al Holzheimer',
    title: 'Owner and Certified Driving Instructor',
    bio: 'Al, owner of RDS, is a certified driver education instructor for the state of Wisconsin with over 25+ years of experience. His patient teaching approach and deep understanding of traffic safety has helped thousands of students become responsible drivers.'
  },
  {
    name: 'Julie Jurss',
    title: 'Certified Driving Instructor',
    bio: "Julie, is also a certified driver education instructor in the state of Wisconsin. She brings a 30+ year career in the educational field. With her experience she tailors instruction to each student's learning style to help build confidence and skill behind-the-wheel."
  }
];

export default function Instructors() {
  return (
    <div className={styles.instructors}>
      <h3 className={styles.title}>Meet our instructors</h3>
      <div className={styles.grid}>
        {instructors.map(instructor => (
          <div key={instructor.name} className={styles.instructor}>
            <p className={styles.bio}>{instructor.bio}</p>
            <div className={styles.details}>
              <span className={styles.image} />
              <div>
                <p className={styles.name}>{instructor.name}</p>
                <p className={styles.title}>{instructor.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
