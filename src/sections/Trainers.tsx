import styles from './Trainers.module.css';
import { trainers } from '../config';

export default function Trainers() {
  return (
    <section id="entrenadores" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="eyebrow">El equipo</span>
          <h2 className={styles.heading}>
            Nuestros <span style={{ color: 'var(--color-gold)' }}>entrenadores</span>
          </h2>
          <p className={styles.subcopy}>Profes que te acompañan de verdad. Técnica, plan y actitud.</p>
        </div>
        <div className={styles.grid}>
          {trainers.map((t, i) => (
            <article key={`${t.name}-${i}`} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={t.img} alt={t.name} />
                <div className={styles.cardTape} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{t.name}</h3>
                <p className={styles.cardRole}>{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
