import { Pet } from "@/types/pet";

export const pets: Pet[] = [
  {
    slug: "bella",
    name: "Bella",
    age: 3,
    species: "Dog",
    breed: "Golden Retriever",
    shortBio:
      "Bella is a playful golden retriever who loves to fetch and go on long walks. She enjoys being around people and is great with kids.",
    whereFrom:
      "Bella was rescued from a local shelter and has been a part of our family ever since.",
    careInstructions: [
      "Feed twice a day with high-quality dog food.",
      "Take for walks at least once a day.",
      "Regular grooming to keep her coat healthy.",
    ],
    personalityTraits:
      "Bella is friendly, energetic, and loves to cuddle. She is very sociable and enjoys meeting new friends.",
    funFact: "Bella can catch a frisbee in mid-air and loves to show off her skills!",
  },
  {
    slug: "milo",
    name: "Milo",
    age: 2,
    species: "Cat",
    breed: "Tabby",
    shortBio:
      "Milo is a curious tabby cat who spends his days perched on windowsills and chasing sunbeams across the living room.",
    whereFrom:
      "Milo was found as a stray kitten and was nursed back to health by our team before joining the family.",
    careInstructions: [
      "Feed twice a day with grain-free wet food.",
      "Keep the litter box clean and accessible.",
      "Provide scratching posts to protect the furniture.",
    ],
    personalityTraits:
      "Milo is independent but affectionate on his own terms. He loves a good nap in a sunny spot.",
    funFact: "Milo has a habit of \"talking\" back whenever you speak to him.",
  },
  {
    slug: "pepper",
    name: "Pepper",
    age: 5,
    species: "Dog",
    breed: "Border Collie",
    shortBio:
      "Pepper is a sharp, high-energy border collie who thrives on puzzles, agility courses, and learning new tricks.",
    whereFrom:
      "Pepper came to us from a working farm where she outgrew her herding duties and needed a new adventure.",
    careInstructions: [
      "Needs at least an hour of vigorous exercise daily.",
      "Mental stimulation through puzzle toys is a must.",
      "Brush weekly to manage her double coat.",
    ],
    personalityTraits:
      "Pepper is intelligent, loyal, and always ready to work. She bonds closely with her people.",
    funFact: "Pepper knows over twenty different commands, including \"clean up your toys.\"",
  },
];

export function getPetBySlug(slug: string): Pet | undefined {
  return pets.find((pet) => pet.slug === slug);
}
