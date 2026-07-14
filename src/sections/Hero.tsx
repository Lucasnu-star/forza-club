import styles from './Hero.module.css';
import DangerTape from '../components/DangerTape';
import { getWhatsappUrl } from '../config';

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.bgImage}>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Entrenamiento en ForzaClub"
        />
      </div>
      <div className={styles.overlay} />
      <DangerTape height={16} animated className={styles.topTape} />
      <div className={styles.cornerTape} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Gym · Mar del Plata</span>
        </div>
        <h1 className={styles.title}>
          FORZA<span style={{ color: 'var(--color-gold)' }}>CLUB</span>
        </h1>
        <p className={styles.tagline}>
          Los límites están <span style={{ color: 'var(--color-gold)' }}>solo en la cabeza</span>
        </p>
        <p className={styles.subcopy}>
          Una cuestión de actitud. Entrená fuerte, entrená en serio. Te esperamos en Av. Thomas
          Edison 1978.
        </p>
        <div className={styles.ctas}>
          <a href={getWhatsappUrl()} target="_blank" rel="noopener" className="btn btn-gold">
            Consultá tu membresía →
          </a>
          <a href="#planes" className="btn btn-outline">
            Ver planes
          </a>
        </div>
      </div>
    </header>
  );
}
