import styles from './Club.module.css';

const STATS = [
  { num: '100%', label: 'Actitud' },
  { num: '7—22', label: 'Lun a Vie' },
  { num: 'MDQ', label: 'Mar del Plata' },
];

export default function Club() {
  return (
    <section id="club" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className="eyebrow">El club</span>
          <h2 className={styles.heading}>
            Vení a cuidar
            <br />
            tu <span style={{ color: 'var(--color-gold)' }}>salud</span>
          </h2>
          <p className={styles.body}>
            Somos un Gym Physical Fitness Center pensado para que entrenes en serio. Ambiente
            real, mood industrial, equipamiento completo y gente que le mete todos los días. Acá
            no hay excusas: hay actitud.
          </p>
          <div className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <p className={styles.statNum}>{stat.num}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.photoWrap}>
          <div className={styles.cornerTapeH} />
          <div className={styles.cornerTapeV} />
          <div className={styles.photoFrame}>
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80"
              alt="Interior de ForzaClub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
