# 🧵 Threads

Sample threads.

## 🧩 Guide

> Create a new project and database in Supabase,  
> then run the following SQL to create the tables:

```sql
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  full_name character varying NOT NULL,
  email character varying NOT NULL UNIQUE,
  password character varying NOT NULL,
  joined_at timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE public.posts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  content text NOT NULL,
  author uuid NOT NULL,
  created_at timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
  CONSTRAINT posts_pkey PRIMARY KEY (id),
  CONSTRAINT posts_author_fkey FOREIGN KEY (author)
    REFERENCES public.users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE public.reports (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  message text NOT NULL,
  CONSTRAINT reports_pkey PRIMARY KEY (id)
);
```
