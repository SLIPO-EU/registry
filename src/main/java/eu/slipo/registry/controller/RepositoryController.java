package eu.slipo.registry.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import eu.slipo.registry.POIEntity;
import eu.slipo.registry.model.NewPoisRequest;
import eu.slipo.registry.model.RestResponse;
import eu.slipo.registry.repository.JpaPOIRepository;



@RestController
@RequestMapping(produces = "application/json")
public class RepositoryController
{

	@Autowired
	JpaPOIRepository poiRepo;
	
	
	 /**
     * Register new POIs
     *
     * @return URIs
     */
	@RequestMapping(method= RequestMethod.POST, value="/register", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Long> addNewPOIs(@RequestBody NewPoisRequest body){
		System.out.println(body);
		POIEntity pOIEntity= new POIEntity();
		pOIEntity.setTempId(body.getTmpId());
		pOIEntity.setSource(body.getSource());
		pOIEntity.setSourceId(body.getSourceId());
		pOIEntity.setCategories(body.getCategory());
		pOIEntity.setGeo(null);
		pOIEntity.setNames(body.getNames());
		
		this.poiRepo.save(pOIEntity);
		return RestResponse.result(pOIEntity.getId());
	}
	
	 /**
     * Find a POI by providing a URI
     *
     * @return Probably the POI
     */
	@RequestMapping(method= RequestMethod.GET, value="/poi/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<POIEntity> getPOIByURI(@PathVariable Long id){
		POIEntity poi=this.poiRepo.findOne(id);
		
		return RestResponse.result(poi);
	}
	
	
}
