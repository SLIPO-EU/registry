CREATE SCHEMA IF NOT EXISTS "repository"; 

--
-- Create "public".* objects
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE SEQUENCE public.pois_id_seq INCREMENT 1 MINVALUE 1 START 1 CACHE 1;

-- Enable PostGIS (includes raster) 
CREATE EXTENSION IF NOT EXISTS postgis;
 -- Enable Topology 
CREATE EXTENSION IF NOT EXISTS postgis_topology;

CREATE TABLE pois
(
  id UUID NOT NULL,
  "source" character varying(100),
  "source_id" character varying(100),
  "names" character varying(255) NOT NULL,
  "categories" character varying(100) NULL,
  geo geometry NOT NULL,
  CONSTRAINT enforce_dims_bbox CHECK (st_ndims(geo) = 2),
  --CONSTRAINT enforce_srid_bbox CHECK (st_srid(geo) = 4326),
  CONSTRAINT account_pkey PRIMARY KEY (id)
);


CREATE TABLE sameas
(
  id integer PRIMARY KEY,
  id1 UUID NOT NULL,
  id2 UUID NOT NULL,
  FOREIGN KEY (id1) REFERENCES pois (id),
  FOREIGN KEY (id2) REFERENCES pois (id)
);

