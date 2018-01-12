package eu.slipo.registry.repository;


import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.vividsolutions.jts.geom.Point;

import eu.slipo.registry.POIEntity;


@Repository
@Transactional()
public class POIRepository {

	@Autowired
	JpaPOIRepository repository;
	
    @PersistenceContext
    EntityManager entityManager;
    
    
	public POIEntity findOne(UUID id)
	{
		return repository.findOne(id);
	}

	public POIEntity save(POIEntity point)
	{
		return repository.save(point);
	}
	
	public List<POIEntity> getPOIsByBBox(String boxString, String categories)
	{
		String queryString = "SELECT e FROM POIEntity e WHERE ST_Within(e.geo, ST_MakeEnvelope("+ boxString +"))=TRUE";
		if (categories!= null  && !categories.trim().isEmpty()){
			queryString=queryString+" AND e.categories LIKE \'%" + categories +"%\'";
		}
		TypedQuery<POIEntity> entities = entityManager.createQuery(queryString, POIEntity.class);	
	    
		List<POIEntity> r = null;
        try {
            r = entities.getResultList();
        } catch (NoResultException x) {
            r = null;
        }
        return r;

	}
	
	
	public List<POIEntity> getPOIsByRadius(Point  point, Float radius, String categories)
	{
		String queryString = "FROM POIEntity e WHERE (ST_Distance_Sphere(e.geo, :point) <= :radius)";
		if (categories!= null  && !categories.trim().isEmpty()){
			queryString=queryString+" AND e.categories LIKE \'%" + categories +"%\'";
		}
		System.out.println(categories);
		TypedQuery<POIEntity> entities = entityManager.createQuery(queryString, POIEntity.class)
	                                                   .setParameter("point", point)
	                                                   .setParameter("radius", radius);
	
	    return entities.getResultList();

	}
}
