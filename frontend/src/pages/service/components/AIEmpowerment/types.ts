export interface AICapability {
  title: string;
  id: string;
  imageUrl: string;
  description?: string;
}

export interface AIStat {
  value: number;
  suffix?: string;
  label: string;
  labelCn: string;
  delay?: number;
} 