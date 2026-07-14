interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 34, height = 40 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      width={width}
      height={height}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <polygon
        points="8,0 96,0 96,26 40,26 40,48 86,48 86,72 40,72 40,120 8,120"
        fill="var(--color-gold)"
      />
    </svg>
  );
}
