export interface CommissionType {
  id: number;
  name: string;
  description: string;
  thumbnail_image: string;
  gallery_images: string[];
  pricing_examples: {
    image: string;
    description: string;
  }[];
}
