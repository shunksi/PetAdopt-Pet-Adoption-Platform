-- Run this once in your Supabase project's SQL editor:
-- Dashboard -> SQL Editor -> New query -> paste this -> Run.

-- 1. The table that stores each pet.
create table if not exists pets (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  age int not null,
  species text,
  breed text,
  image_path text,            -- path inside the storage bucket, not a full URL
  short_bio text,
  where_from text,
  care_instructions text,     -- one instruction per line, split in the app
  personality_traits text,
  fun_fact text,
  created_at timestamptz not null default now()
);

-- 2. Turn on Row Level Security. Until policies are added below,
--    this locks the table completely - nobody can read or write.
alter table pets enable row level security;

-- 3. Anyone (including signed-out visitors) can read pets.
--    This is what lets your public pages list pets without logging in.
create policy "Public can view pets"
  on pets for select
  to public
  using (true);

-- 4. Only a signed-in user (you, via /admin) can insert, update, or delete.
create policy "Authenticated users can insert pets"
  on pets for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update pets"
  on pets for update
  to authenticated
  using (true);

create policy "Authenticated users can delete pets"
  on pets for delete
  to authenticated
  using (true);

-- 5. Storage bucket for pet photos.
--    "public" here means files can be read via a public URL (no login needed
--    to VIEW a photo) - writes are still locked down by the policies below.
insert into storage.buckets (id, name, public)
values ('pet-photos', 'pet-photos', true)
on conflict (id) do nothing;

create policy "Public can view pet photos"
  on storage.objects for select
  to public
  using (bucket_id = 'pet-photos');

create policy "Authenticated users can upload pet photos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'pet-photos');

create policy "Authenticated users can update pet photos"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'pet-photos');

create policy "Authenticated users can delete pet photos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'pet-photos');
