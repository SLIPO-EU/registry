package eu.slipo.registry.controller;



import java.util.List;

import org.opengis.referencing.FactoryException;
import org.opengis.referencing.NoSuchAuthorityCodeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vividsolutions.jts.geom.Geometry;

import eu.slipo.registry.POIEntity;
import eu.slipo.registry.model.BoxRequest;
import eu.slipo.registry.model.ErrorCode;
import eu.slipo.registry.model.GenericErrorCode;
import eu.slipo.registry.model.NewPoisRequest;
import eu.slipo.registry.model.RadiusRequest;
import eu.slipo.registry.model.RestResponse;
import eu.slipo.registry.repository.JpaPOIRepository;
import eu.slipo.registry.repository.POIRepository;



@RestController
@RequestMapping(produces = "application/json")
public class RepositoryController
{

	@Autowired
	JpaPOIRepository poiRepo;
	
	@Autowired
	POIRepository poiRepo2;
	 /**
     * Register new POIs
     *
     * @return URIs
	 * @throws FactoryException 
	 * @throws NoSuchAuthorityCodeException 
     */
	@RequestMapping(method= RequestMethod.POST, value="/register", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Long> addNewPOIs(@RequestBody NewPoisRequest body) {
		System.out.println(body);
		POIEntity poi= new POIEntity();
		poi.setTempId(body.getTmpId());
		poi.setSource(body.getSource());
		poi.setSourceId(body.getSourceId());
		poi.setCategories(body.getCategory());
		
		
		Geometry location = (Geometry) body.getGeometry().clone();
		if (body.getGeometry().getSRID()==0) { // set default SRID if not any
		location.setSRID(4326);}
		System.out.println(location.getSRID());
		System.out.println(body.getGeometry().getSRID() );

		poi.setGeo(location);
		poi.setNames(body.getNames().toString());
		
		this.poiRepo.save(poi);
		return RestResponse.result(poi.getId());

		
	}
	
	 
	
	/**
     * Delete a POI by providing a URI
     *
     * @return Error message if it fails
     */
	@RequestMapping(method= RequestMethod.GET, value="/delete/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Void> deletePOI(@PathVariable Long id){
		try {
		this.poiRepo.delete(id);
		}catch (Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");

			return RestResponse.error(ec,e.getMessage());
		}
		return RestResponse.result(null);
	}
	/* --------------------------------------------- Search methods ---------------------------------*/
	
	/**
     * Find a POI by providing a URI
     *
     * @return Probably the POI
     */
	@RequestMapping(method= RequestMethod.GET, value="/poi/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<POIEntity> getPOIByURI(@PathVariable Long id){
		POIEntity poi=this.poiRepo.findOne(id);
		if (poi != null) {
			return RestResponse.result(poi);
		}else {
			GenericErrorCode ec= new GenericErrorCode("404");
			return RestResponse.error(ec, "Poi not found");
		}
	}
	
	/**
     * Find a POI by providing a source and sourceID
     *
     * @return Probably the POI
     */
	@RequestMapping(method= RequestMethod.GET, value="/poi/{source}/{sourceId}", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<POIEntity>> getPOIBySourceID(@PathVariable String source, @PathVariable String sourceId ){
		List<POIEntity> pois;
		try {
			POIEntity poi= new POIEntity();
			poi.setSource(source);
			poi.setSourceId(sourceId);
			Example<POIEntity> example = Example.of(poi);
			pois =this.poiRepo.findAll(example);
		}catch (Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");

			return RestResponse.error(ec,e.getMessage());
		}
		return RestResponse.result(pois);
	}
	
	
	
	@RequestMapping(method= RequestMethod.POST, value="/poi/", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<POIEntity>> getPOIsByName(@RequestBody String name, @RequestBody(required=false) List<String> categories){
		List<POIEntity> pois;
		try {
			POIEntity poi= new POIEntity();
			System.out.println(name);

			poi.setNames(name);
			if  (categories != null && !categories.isEmpty()) { 
				poi.setCategories(categories.toString());
				}
			ExampleMatcher matcher = ExampleMatcher.matching()
					.withStringMatcher(StringMatcher.CONTAINING)
					.withIgnoreCase();
			Example<POIEntity> example = Example.of(poi, matcher);
			
			pois =this.poiRepo.findAll(example);
		}catch (Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");

			return RestResponse.error(ec,e.getMessage());
		}
		System.out.println(pois);
		return RestResponse.result(pois);
	}
	
	@RequestMapping(method= RequestMethod.POST, value="/location/", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<POIEntity>> getPOIsByLocation(@RequestBody BoxRequest bbr,  BindingResult results){
		List<POIEntity> pois;
		System.out.println(results);
		System.out.println(bbr);

		try {
			pois =this.poiRepo2.getPOIsByBBox(bbr.toBoxString(), bbr.getCategoriesString());
		}catch (Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");

			return RestResponse.error(ec,e.getMessage());
		}
		System.out.println(pois);
		return RestResponse.result(pois);
	}
	
	@RequestMapping(method= RequestMethod.POST, value="/radius/", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<POIEntity>> getPOIsByLocation(@RequestBody RadiusRequest rr,  BindingResult results){
		List<POIEntity> pois;
		System.out.println(results);
		System.out.println(rr);

		try {
			pois =this.poiRepo2.getPOIsByRadius(rr.getPoint(),rr.getRadius(), rr.getCategories() );
		}catch (Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");

			return RestResponse.error(ec,e.getMessage());
		}
		System.out.println(pois);
		return RestResponse.result(pois);
	}
	
	/* --------------------------------------------- Update methods ---------------------------------*/
	
	/**
    * Override a POI
    *
    */
	@RequestMapping(method= RequestMethod.POST, value="/update/", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Void> updatePOIs(@RequestBody POIEntity body){
		try {
		this.poiRepo.save(body);
		}catch(Exception e) {
			GenericErrorCode ec= new GenericErrorCode("404");
			return RestResponse.error(ec,e.getMessage());
		}
		return RestResponse.result(null);
	}
	
	
	
	
	

	
}
