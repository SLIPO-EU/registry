package eu.slipo.registry.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import eu.slipo.registry.SameAsEntity;

public interface JpaSameAsRepository extends JpaRepository<SameAsEntity, Long> {

}
