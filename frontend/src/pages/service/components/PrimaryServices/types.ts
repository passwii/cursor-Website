export interface ServiceDetail {
  title: string;
  items: string[];
}

export interface PrimaryService {
  id: string;
  title: string;
  subtitles: string;
  moreText?: string;
  image: string;
  details: ServiceDetail[];
}

export interface PrimaryServicesProps {
  services: PrimaryService[];
} 