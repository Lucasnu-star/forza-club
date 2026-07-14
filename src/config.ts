export const siteConfig = {
  whatsappNumber: '+54 9 223 000 0000', // placeholder — reemplazar por el número real
  instagramHandle: '@forzaclubmdq',
  showFloatingCta: true,
  address: 'Av. Thomas Edison 1978',
  city: 'Mar del Plata, Buenos Aires',
  coords: { lat: -38.0523769, lng: -57.5610235 },
};

const waMessage = '¡Hola ForzaClub! Quiero consultar mi membresía 💪';

export function getWhatsappUrl(): string {
  const digits = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}`;
}

export function getInstagramUrl(): string {
  return `https://instagram.com/${siteConfig.instagramHandle.replace(/^@/, '')}`;
}

export function getDirectionsUrl(): string {
  const { lat, lng } = siteConfig.coords;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function getMapEmbedUrl(): string {
  const { lat, lng } = siteConfig.coords;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
}

export interface Discipline {
  name: string;
  desc: string;
  img: string;
}

export const disciplines: Discipline[] = [
  {
    name: 'Musculación',
    desc: 'Sala completa de fuerza y máquinas. Pesos libres, mancuernas y barras para armar tu rutina sin esperar.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
  },
  {
    name: 'Entrenamiento personalizado',
    desc: 'Un profe te arma el plan y te sigue de cerca. Objetivos claros, técnica cuidada y progreso real.',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80',
  },
];

export interface Trainer {
  name: string;
  role: string;
  img: string;
}

export const trainers: Trainer[] = [
  {
    name: 'Nombre del profe',
    role: 'Musculación & fuerza',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900&q=80',
  },
  {
    name: 'Nombre del profe',
    role: 'Entrenamiento personalizado',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80',
  },
  {
    name: 'Nombre del profe',
    role: 'Acondicionamiento físico',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80',
  },
];

export const planFeatures: string[] = [
  'Acceso completo a musculación',
  'Horario libre dentro del gym',
  'Sin contrato de permanencia',
];
