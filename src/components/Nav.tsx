import Logo from './Logo';
import styles from './Nav.module.css';
import { getWhatsappUrl } from '../config';

const NAV_LINKS = [
  { href: '#club', label: 'El club' },
  { href: '#clases', label: 'Clases' },
  { href: '#entrenadores', label: 'Equipo' },
  { href: '#planes', label: 'Planes' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        <Logo />
        <span className={styles.wordmark}>
          FORZA<span style={{ color: 'var(--color-gold)' }}>CLUB</span>
        </span>
      </a>
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener"
          className={`btn btn-gold ${styles.cta}`}
        >
          Consultá tu membresía
        </a>
      </div>
    </nav>
  );
}
