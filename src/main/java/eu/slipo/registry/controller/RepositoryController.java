package eu.slipo.registry.controller;



import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.opengis.referencing.FactoryException;
import org.opengis.referencing.NoSuchAuthorityCodeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vividsolutions.jts.geom.Geometry;

import eu.slipo.registry.POIEntity;
import eu.slipo.registry.SameAsEntity;
import eu.slipo.registry.model.BoxRequest;
import eu.slipo.registry.model.Error;
import eu.slipo.registry.model.GenericErrorCode;
import eu.slipo.registry.model.NewPoisRequest;
import eu.slipo.registry.model.NewPoisResponse;
import eu.slipo.registry.model.RadiusRequest;
import eu.slipo.registry.model.RestResponse;
import eu.slipo.registry.repository.JpaPOIRepository;
import eu.slipo.registry.repository.JpaSameAsRepository;
import eu.slipo.registry.repository.POIRepository;



@RestController
@RequestMapping(produces = "application/json")
public class RepositoryController extends BaseController
{

	@Autowired
	JpaPOIRepository poiRepo;
	
	@Autowired
	POIRepository poiRepo2;
	
	@Autowired
	JpaSameAsRepository sameRepo;
	
  
	 /**
     * Register new POIs
     *
     * @return URIs
	 * @throws FactoryException 
	 * @throws NoSuchAuthorityCodeException 
     */
	@RequestMapping(method= RequestMethod.POST, value="/register", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<NewPoisResponse>> addNewPOIs(@RequestBody @Valid ArrayList<NewPoisRequest> bodies, BindingResult results) {
		System.out.println(results);
		if (results.hasErrors()) {
			return RestResponse.error((Error) results);
		}
		List<NewPoisResponse> responce = new ArrayList<NewPoisResponse>();
		for (NewPoisRequest body:bodies) {
		System.out.println(body);
		POIEntity poi= new POIEntity();
		poi.setId(UUID.randomUUID());
		poi.setTempId(body.getTmpId());
		poi.setSource(body.getSource());
		poi.setSourceId(body.getSourceId());
		poi.setCategories(body.getCategory().toString());
		
		
		Geometry location = (Geometry) body.getGeometry().clone();
		if (body.getGeometry().getSRID()==0) { // set default SRID if not any
		location.setSRID(4326);}
		System.out.println(location.getSRID());
		System.out.println(body.getGeometry().getSRID() );

		poi.setGeo(location);
		poi.setNames(body.getNames().toString());
		
		this.poiRepo.save(poi);
		responce.add(new NewPoisResponse(body.getTmpId(),1,poi.getId().toString()));

		}
		
		return RestResponse.result(responce);

	}
	
	@RequestMapping(method= RequestMethod.POST, value="/registerBach", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<List<NewPoisResponse>> addNewBachPOIs(@RequestBody @Valid ArrayList<NewPoisRequest> bodys, BindingResult results) {
		System.out.println(results);
		String prefix = "http://slipo.eu/id/poi/";
		if (results.hasErrors()) {
			return RestResponse.error((Error) results);
		}
		List<NewPoisResponse> responce = new ArrayList<NewPoisResponse>();
		for (NewPoisRequest body:bodys) {
		System.out.println(body);
		POIEntity poi= new POIEntity();
		String ids = body.getTmpId();
		UUID new_id = UUID.fromString(ids.substring(prefix.length()));
		poi.setId(new_id);
		poi.setTempId(body.getTmpId());
		poi.setSource(body.getSource());
		poi.setSourceId(body.getSourceId());
		poi.setCategories(body.getCategory().toString());
		
		
		Geometry location = (Geometry) body.getGeometry().clone();
		if (body.getGeometry().getSRID()==0) { // set default SRID if not any
		location.setSRID(4326);}
		System.out.println(location.getSRID());
		System.out.println(body.getGeometry().getSRID() );

		poi.setGeo(location);
		poi.setNames(body.getNames().toString());
		
		this.poiRepo.save(poi);
		responce.add(new NewPoisResponse(body.getTmpId(),1,poi.getId().toString()));

		}
		
		return RestResponse.result(responce);

		
	}
	
	 
	
	/**
     * Delete a POI by providing a URI
     *
     * @return Error message if it fails
     */
	@RequestMapping(method= RequestMethod.GET, value="/delete/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Void> deletePOI(@PathVariable UUID id){
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
	RestResponse<POIEntity> getPOIByURI(@PathVariable UUID id){
		POIEntity poi=this.poiRepo.findOne(id);
		if (poi != null) {
			return RestResponse.result(poi);
		}else {
			GenericErrorCode ec= new GenericErrorCode("404");
			return RestResponse.error(ec, "Poi with uid "+ id + " not found.");
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
	@RequestMapping(method= RequestMethod.POST, value="/update/{id}", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Void> updatePOIs(@PathVariable UUID id,@RequestBody NewPoisRequest body){
		POIEntity poi=this.poiRepo.findOne(id);
		if (poi == null) {
			return RestResponse.error(new GenericErrorCode(HttpStatus.NOT_FOUND.toString()),"Unable to upate. User with id " + id + " not found.");
		}
		System.out.println(poi);
		poi.setTempId(body.getTmpId());
		poi.setSource(body.getSource());
		poi.setSourceId(body.getSourceId());
		poi.setCategories(body.getCategory().toString());
		
		
		Geometry location = (Geometry) body.getGeometry().clone();
		if (body.getGeometry().getSRID()==0) { // set default SRID if not any
		location.setSRID(4326);}
		System.out.println(location.getSRID());
		System.out.println(body.getGeometry().getSRID() );

		poi.setGeo(location);
		poi.setNames(body.getNames().toString());
		
		this.poiRepo.save(poi);

		return RestResponse.result(null);
	}
	

	/**
    * Set Same as relationship for 2 pois
    *
    */
	@RequestMapping(method= RequestMethod.PUT, value="/setSame/{id1}/{id2}", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<SameAsEntity> setSameAs(@PathVariable UUID id1,@PathVariable UUID id2){
		POIEntity poi1=this.poiRepo.findOne(id1);
		POIEntity poi2=this.poiRepo.findOne(id2);

		if (poi1 == null) {
			return RestResponse.error(new GenericErrorCode(HttpStatus.NOT_FOUND.toString()),"Unable to upate. POI with id " + id1 + " not found.");
		}

		if (poi2 == null) {
			return RestResponse.error(new GenericErrorCode(HttpStatus.NOT_FOUND.toString()),"Unable to upate. POI with id " + id2 + " not found.");
		}
		
		if (id1 == id2) {
			return RestResponse.error(new GenericErrorCode(HttpStatus.BAD_REQUEST.toString()),"Unable to upate.POIs cant have the same id.");
		}
		SameAsEntity sas= new SameAsEntity();
		sas.setId1(id1);
		sas.setId2(id2);
		
		this.sameRepo.save(sas);

		return RestResponse.result(sas);
	}
	
	
	

	
}
