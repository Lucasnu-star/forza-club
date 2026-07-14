import styles from './Plans.module.css';
import { getWhatsappUrl, planFeatures } from '../config';

export default function Plans() {
  return (
    <section id="planes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="eyebrow">Membresías</span>
          <h2 className={styles.heading}>
            Elegí tu <span style={{ color: 'var(--color-gold)' }}>plan</span>
          </h2>
          <p className={styles.subcopy}>Sin pago online — consultá el valor por WhatsApp y arrancá hoy.</p>
        </div>
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardTape} />
            <div className={styles.cardBody}>
              <span className={styles.badge}>Más elegido</span>
              <h3 className={styles.planName}>Mensual</h3>
              <p className={styles.price}>Precio a consultar</p>
              <p className={styles.period}>Por mes · sin permanencia</p>
              <ul className={styles.features}>
                {planFeatures.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureBullet}>▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsappUrl()} target="_blank" rel="noopener" className="btn btn-gold">
                Consultar por WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
