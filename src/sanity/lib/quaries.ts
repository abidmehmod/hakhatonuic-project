import { groq } from "next-sanity"


// Define a TypeScript interface for chef data
interface Chef {
    _id: string;
    name: string;
    position: string;
    specialty: string;
    description: string;
    experience: number;
    available: boolean;
    imageUrl: string;
  }

export const allProduct = groq`*[_typeof == chefs]`;
export const four = groq`*[_typeof == chefs][0..3]`