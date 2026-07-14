import styles from './Location.module.css';
import DangerTape from '../components/DangerTape';
import { getDirectionsUrl, getMapEmbedUrl, siteConfig } from '../config';

export default function Location() {
  return (
    <section id="ubicacion" className={styles.section}>
      <DangerTape height={16} className={styles.topTape} />
      <div className={styles.grid}>
        <div>
          <span className="eyebrow">Horarios</span>
          <h2 className={styles.heading}>
            Cuándo <span style={{ color: 'var(--color-gold)' }}>entrenar</span>
          </h2>
          <div className={styles.schedule}>
            <div className={styles.scheduleRow}>
              <span className={styles.scheduleDay}>Lunes a Viernes</span>
              <span className={styles.scheduleHours}>07:00 — 22:00</span>
            </div>
            <div className={styles.scheduleRow}>
              <span className={styles.scheduleDay}>Sábados</span>
              <span className={styles.scheduleHours}>08:00 — 12:00</span>
            </div>
            <div className={styles.scheduleRow}>
              <span className={`${styles.scheduleDay} ${styles.closed}`}>Domingos</span>
              <span className={styles.closedHours}>Cerrado</span>
            </div>
          </div>
          <div className={styles.address}>
            <p className={styles.addressLine}>{siteConfig.address}</p>
            <p className={styles.addressCity}>{siteConfig.city}</p>
          </div>
        </div>
        <div className={styles.mapCol}>
          <div className={styles.mapFrame}>
            <div className={styles.mapTape} />
            <iframe
              src={getMapEmbedUrl()}
              loading="lazy"
              title="Mapa ForzaClub"
            />
          </div>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener"
            className={`btn btn-gold ${styles.directionsBtn}`}
          >
            📍 Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
