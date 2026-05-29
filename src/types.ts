export interface AuditMetrics {
  brandIdentity: number; // 1-10
  techArchitecture: number; // 1-10
  digitalPresence: number; // 1-10
  pricingConfidence: number; // 1-10
}

export interface BookingDetails {
  ceoName: string;
  companyName: string;
  website: string;
  contactEmail: string;
  bottleneck: string;
  date: string;
  timeSlot: string;
  authorityScore: number;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string;
  image: string; // Warm low-key image
}
