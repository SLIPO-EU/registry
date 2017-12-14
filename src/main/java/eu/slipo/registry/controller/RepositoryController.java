package eu.slipo.registry.controller;



import java.util.List;

import org.opengis.referencing.FactoryException;
import org.opengis.referencing.NoSuchAuthorityCodeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.util.SerializationUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vividsolutions.jts.geom.Geometry;

import eu.slipo.registry.POIEntity;
import eu.slipo.registry.model.ErrorCode;
import eu.slipo.registry.model.GenericErrorCode;
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
		location.setSRID(4326);
		System.out.println(location.getSRID());
		System.out.println(body.getGeometry().getSRID() );

		/*try {
			if (body.getGeometry().getSRID() != location.getSRID()) 
			{
				System.out.println(location.getSRID());
				CoordinateReferenceSystem sourceCRS = CRS.decode(body.getGeometry().toString());
				CoordinateReferenceSystem targetCRS = CRS.decode(location.toString());
	
				MathTransform transform = CRS.findMathTransform(sourceCRS, targetCRS, false);
				location = (Geometry) JTS.transform(location, transform);
				poi.setGeo(location);
			}
		} catch (MismatchedDimensionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TransformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchAuthorityCodeException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FactoryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
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
	RestResponse<Void> getPOIsByName(@RequestBody String body){
		//TODO 
		return RestResponse.result(null);
	}
	
	/* --------------------------------------------- Update methods ---------------------------------*/
	
	
	@RequestMapping(method= RequestMethod.POST, value="/update/", consumes= MediaType.APPLICATION_JSON_VALUE)
	RestResponse<Void> updatePOIs(@RequestBody String body){
		//TODO 
		return RestResponse.result(null);
	}
	
	
	
	
	

	
}
