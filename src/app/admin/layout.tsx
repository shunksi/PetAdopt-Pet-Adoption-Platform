import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-surface-soft">
      <header className="border-b border-black/10 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/admin" className="text-sm font-semibold text-brand-900">
            Pet admin
          </Link>
          {user && (
            <form action={signOut} className="flex items-center gap-3">
              <span className="text-xs text-foreground/50">{user.email}</span>
              <button
                type="submit"
                className="text-xs font-medium text-brand-600 hover:underline"
              >
                Sign out
              </button>
            </form>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
