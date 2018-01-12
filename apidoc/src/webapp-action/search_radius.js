/**
 * @api {post} poi/radius/ Get a POI by Point and Radius
 * @apiVersion 1.0.0
 * @apiName getPOIbyRadius
 * @apiGroup POI Search
 * @apiPermission anyone?
 *
 * @apiDescription Retrive a POI by its source and sourceId
 *
 * @apiParam (Parameters)           {Object}   coordinates   ​ ​    The​ ​ (default)​ ​POINT geometry​ ​ of​ ​ the​ ​the center of the circle in GeoJSON format
 * @apiParam (Parameters)           {Float}    radius             The radius in meters
 * @apiParam (Parameters)           {String}   category           (Optional) A Category
 *
 * @apiParamExample {json} Request Example
 * POST https://registry.dev.slipo.eu/poi/radius/ {
  "coordinates": [
    -0.128059387207031,
    51.5070596785178
  ],
  "type": "Point",
  "radius":4
	
}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 * @apiSuccess                            {Object}    result            An instance of <code>POI</code>. If value of
 * <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 */
function browse() { return; }
