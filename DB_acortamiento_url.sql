--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-06 01:07:34

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "DB_acortamiento_url";
--
-- TOC entry 4902 (class 1262 OID 24629)
-- Name: DB_acortamiento_url; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "DB_acortamiento_url" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-ES';


ALTER DATABASE "DB_acortamiento_url" OWNER TO postgres;

\connect "DB_acortamiento_url"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4896 (class 0 OID 24631)
-- Dependencies: 218
-- Data for Name: link; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.link (id, url, "shortedCode", "accessCount", "createdAt", "updatedAt") VALUES (1, 'https://www.example.com/some/long/url', 'tbaVGd', 0, '2025-05-05 22:55:25.855-03', '2025-05-05 22:55:25.855-03');
INSERT INTO public.link (id, url, "shortedCode", "accessCount", "createdAt", "updatedAt") VALUES (4, 'https://www.google.com/', 'c5aej3', 5, '2025-05-06 00:39:11.297-03', '2025-05-06 01:02:45.757-03');
INSERT INTO public.link (id, url, "shortedCode", "accessCount", "createdAt", "updatedAt") VALUES (3, 'https://mi-dominio-express.com', 'IPlzFt', 1, '2025-05-05 23:46:31.634-03', '2025-05-06 01:03:31.73-03');


--
-- TOC entry 4904 (class 0 OID 0)
-- Dependencies: 217
-- Name: link_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.link_id_seq', 4, true);


-- Completed on 2025-05-06 01:07:35

--
-- PostgreSQL database dump complete
--

