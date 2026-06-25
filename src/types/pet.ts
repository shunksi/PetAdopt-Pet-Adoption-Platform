export interface Pet {
  id: string;
  /** URL-safe identifier used for the /pets/[slug] route */
  slug: string;
  name: string;
  age: number;
  species: string | null;
  breed: string | null;
  imageUrl: string | null;
  /** Storage path, e.g. "abc123-bella.jpg" - used internally for edit/delete */
  imagePath: string | null;
  shortBio: string | null;
  whereFrom: string | null;
  careInstructions: string[];
  personalityTraits: string | null;
  funFact: string | null;
}


/** Shape of a row exactly as it comes back from the `pets` table. */
export interface PetRow {
  id: string;
  slug: string;
  name: string;
  age: number;
  species: string | null;
  breed: string | null;
  image_path: string | null;
  short_bio: string | null;
  where_from: string | null;
  care_instructions: string | null;
  personality_traits: string | null;
  fun_fact: string | null;
  created_at: string;
}




