package eu.slipo.registry.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import eu.slipo.registry.POIEntity;

public interface JpaPOIRepository extends JpaRepository<POIEntity, UUID> {

}
