CREATE SCHEMA IF NOT EXISTS "repository"; 

--
-- Create "public".* objects
--
CREATE SEQUENCE public.pois_id_seq INCREMENT 1 MINVALUE 1 START 1 CACHE 1;

-- Enable PostGIS (includes raster) 
CREATE EXTENSION IF NOT EXISTS postgis;
 -- Enable Topology 
CREATE EXTENSION IF NOT EXISTS postgis_topology;

CREATE TABLE pois
(
  id bigint NOT NULL,
  "source" character varying(32),
  "source_id" character varying(64),
  "names" character varying(64) NOT NULL,
  geo geometry NULL,
  CONSTRAINT enforce_dims_bbox CHECK (st_ndims(geo) = 2),
  CONSTRAINT enforce_srid_bbox CHECK (st_srid(geo) = 4326),
  CONSTRAINT account_pkey PRIMARY KEY (id)
);

