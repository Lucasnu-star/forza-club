import styles from './CtaBand.module.css';
import { getWhatsappUrl } from '../config';

export default function CtaBand() {
  return (
    <section className={styles.section}>
      <div
        className={styles.tapeTop}
        style={{ background: 'var(--tape-inverted)' }}
      />
      <div
        className={styles.tapeBottom}
        style={{ background: 'var(--tape-inverted)' }}
      />
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
