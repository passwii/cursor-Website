export interface ServiceDetail {
  title: string;
  items: string[];
}

export interface PrimaryService {
  title: string;
  subtitles: string;
  details: ServiceDetail[];
}

export interface PrimaryServicesProps {
  services: PrimaryService[];
} 