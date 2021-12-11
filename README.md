# wad-hw4
Fourth homework of the Web Application Development course
___

Postgres table
```sql
CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "authorPhoto" character varying COLLATE pg_catalog."default",
    date character varying COLLATE pg_catalog."default",
    image character varying COLLATE pg_catalog."default",
    text character varying COLLATE pg_catalog."default",
    likes integer,
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)
```
