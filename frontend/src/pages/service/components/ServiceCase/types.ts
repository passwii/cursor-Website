export interface ServiceCaseItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ServiceCaseProps {
  className?: string;
} 