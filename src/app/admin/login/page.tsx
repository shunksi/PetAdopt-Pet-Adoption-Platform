import { signIn } from "../actions";

interface LoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <form
        action={signIn}
        className="w-full max-w-sm space-y-4 rounded-lg border border-black/10 bg-white p-8"
      >
        <h1 className="text-xl font-bold text-brand-900">Admin sign in</h1>

        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-foreground/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-medium text-foreground/70"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
