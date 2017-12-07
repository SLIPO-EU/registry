package eu.slipo.registry.repository;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import eu.slipo.registry.POIEntity;
import eu.slipo.registry.model.NewPoisRequest;


@Repository
@Transactional()
public class POIRepository {

	@Autowired
	JpaPOIRepository repository;
	
	public POIEntity findOne(Long id)
	{
		return repository.findOne(id);
	}

	public POIEntity save(POIEntity point)
	{
		return repository.save(point);
	}
	
	
	
}
