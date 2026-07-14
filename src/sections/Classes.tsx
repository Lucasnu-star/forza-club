import styles from './Classes.module.css';
import DangerTape from '../components/DangerTape';
import { disciplines, getWhatsappUrl } from '../config';

export default function Classes() {
  return (
    <section id="clases" className={styles.section}>
      <DangerTape height={16} animated speed={2.6} className={styles.topTape} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="eyebrow">Disciplinas</span>
          <h2 className={styles.heading}>
            Lo que <span style={{ color: 'var(--color-gold)' }}>te movés</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {disciplines.map((d) => (
            <article key={d.name} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={d.img} alt={d.name} />
                <div className={styles.cardTape} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{d.name}</h3>
                <p className={styles.cardDesc}>{d.desc}</p>
                <a href={getWhatsappUrl()} target="_blank" rel="noopener" className={styles.cardLink}>
                  Consultar →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
