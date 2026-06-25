import { Pet } from "@/types/pet";

interface PetFormProps {
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: Pet;
  submitLabel: string;
}

export default function PetForm({ action, defaultValues, submitLabel }: PetFormProps) {
  return (
    <form
      action={action}
      className="space-y-5 rounded-lg border border-black/10 bg-white p-6"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-foreground/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={defaultValues?.name}
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-xs font-medium text-foreground/70">
            Age (years)
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min={0}
            step={1}
            required
            defaultValue={defaultValues?.age}
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="photo" className="block text-xs font-medium text-foreground/70">
          Photo{defaultValues ? " (leave blank to keep the current photo)" : ""}
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="mt-1 w-full text-sm"
        />
      </div>

      <details className="rounded-md border border-black/10 p-3">
        <summary className="cursor-pointer text-xs font-medium text-foreground/70">
          More details (optional)
        </summary>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="species" className="block text-xs font-medium text-foreground/70">
                Species
              </label>
              <input
                id="species"
                name="species"
                type="text"
                defaultValue={defaultValues?.species ?? ""}
                className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="breed" className="block text-xs font-medium text-foreground/70">
                Breed
              </label>
              <input
                id="breed"
                name="breed"
                type="text"
                defaultValue={defaultValues?.breed ?? ""}
                className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="shortBio" className="block text-xs font-medium text-foreground/70">
              Short bio
            </label>
            <textarea
              id="shortBio"
              name="shortBio"
              rows={2}
              defaultValue={defaultValues?.shortBio ?? ""}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="whereFrom" className="block text-xs font-medium text-foreground/70">
              Where they&apos;re from
            </label>
            <textarea
              id="whereFrom"
              name="whereFrom"
              rows={2}
              defaultValue={defaultValues?.whereFrom ?? ""}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="careInstructions"
              className="block text-xs font-medium text-foreground/70"
            >
              Care instructions (one per line)
            </label>
            <textarea
              id="careInstructions"
              name="careInstructions"
              rows={3}
              defaultValue={defaultValues?.careInstructions.join("\n") ?? ""}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="personalityTraits"
              className="block text-xs font-medium text-foreground/70"
            >
              Personality traits
            </label>
            <textarea
              id="personalityTraits"
              name="personalityTraits"
              rows={2}
              defaultValue={defaultValues?.personalityTraits ?? ""}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="funFact" className="block text-xs font-medium text-foreground/70">
              Fun fact
            </label>
            <textarea
              id="funFact"
              name="funFact"
              rows={2}
              defaultValue={defaultValues?.funFact ?? ""}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </details>

      <button
        type="submit"
        className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        {submitLabel}
      </button>
    </form>
  );
}
