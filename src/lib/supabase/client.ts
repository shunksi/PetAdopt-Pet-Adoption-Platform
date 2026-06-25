import { createBrowserClient } from "@supabase/ssr";

/**
 * Use this inside Client Components ("use client").
 * It reads the public URL + anon key, which are safe to ship to the browser.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
