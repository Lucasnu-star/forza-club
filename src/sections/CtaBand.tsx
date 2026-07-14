import styles from './CtaBand.module.css';
import DangerTape from '../components/DangerTape';
import { getWhatsappUrl } from '../config';

export default function CtaBand() {
  return (
    <section className={styles.section}>
      <DangerTape height={14} inverted animated speed={2.2} className={styles.tapeTop} />
      <DangerTape height={14} inverted animated reverse speed={2.2} className={styles.tapeBottom} />
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Una cuestión
          <br />
          de actitud
        </h2>
        <p className={styles.subcopy}>Escribinos y empezá a entrenar esta semana</p>
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener"
          className={`btn ${styles.ctaBtn}`}
        >
          Consultá tu membresía →
        </a>
      </div>
    </section>
  );
}
