import styles from './Footer.module.css';
import Logo from '../components/Logo';
import { InstagramIcon } from '../components/icons';
import { getDirectionsUrl, getInstagramUrl, siteConfig } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            <Logo width={32} height={38} />
            <span className={styles.wordmark}>
              FORZA<span style={{ color: 'var(--color-gold)' }}>CLUB</span>
            </span>
          </div>
          <p className={styles.tagline}>Gym Physical Fitness Center. Vení a cuidar tu salud.</p>
        </div>
        <div>
          <h4 className={styles.colTitle}>Ubicación</h4>
          <p className={styles.colText}>
            {siteConfig.address}
            <br />
            {siteConfig.city}
          </p>
          <a href={getDirectionsUrl()} target="_blank" rel="noopener" className={styles.directionsLink}>
            Cómo llegar →
          </a>
        </div>
        <div>
          <h4 className={styles.colTitle}>Horarios</h4>
          <p className={styles.colText}>
            Lun a Vie · 07 a 22 hs
            <br />
            Sábados · 08 a 12 hs
          </p>
        </div>
        <div>
          <h4 className={styles.colTitle}>Seguinos</h4>
          <a href={getInstagramUrl()} target="_blank" rel="noopener" className={styles.igLink}>
            <InstagramIcon />
            {siteConfig.instagramHandle}
          </a>
        </div>
      </div>
      <div className={styles.divider} />
      <p className={styles.copyright}>
        © {year} ForzaClub · Mar del Plata · Los límites están solo en la cabeza
      </p>
    </footer>
  );
}
