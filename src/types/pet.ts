export interface Pet {
  /** URL-safe identifier used for the /pets/[slug] route */
  slug: string;
  name: string;
  age: number;
  species: string;
  breed: string;
  imageUrl?: string;
  shortBio: string;
  whereFrom: string;
  careInstructions: string[];
  personalityTraits: string;
  funFact: string;
}
