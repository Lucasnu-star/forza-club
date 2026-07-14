import styles from './FloatingWhatsApp.module.css';
import { WhatsAppIcon } from './icons';
import { getWhatsappUrl, siteConfig } from '../config';

export default function FloatingWhatsApp() {
  if (!siteConfig.showFloatingCta) return null;

  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp ForzaClub"
      className={styles.float}
    >
      <WhatsAppIcon />
      WhatsApp
    </a>
  );
}
