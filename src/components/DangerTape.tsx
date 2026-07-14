import type { CSSProperties } from 'react';
import styles from './DangerTape.module.css';

interface DangerTapeProps {
  height?: number;
  animated?: boolean;
  inverted?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default function DangerTape({
  height = 16,
  animated = false,
  inverted = false,
  style,
  className,
}: DangerTapeProps) {
  return (
    <div
      className={[styles.tape, animated ? styles.animated : '', className].filter(Boolean).join(' ')}
      style={{
        height,
        width: '100%',
        background: `var(${inverted ? '--tape-inverted' : '--tape-lg'})`,
        ...style,
      }}
    />
  );
}
