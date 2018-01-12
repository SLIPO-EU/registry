/**
 * @api {get} poi/ Get a POI by URI
 * @apiVersion 1.0.0
 * @apiName getPOIbyURI
 * @apiGroup POI Search
 * @apiPermission anyone?
 *
 * @apiDescription Retrive a POI by its URI
 *
 * @apiParam (Query String Parameters)    {String}    id              A <code>UUId</code> 
 *
 * @apiParamExample {json} Request Example
 * GET https://registry.dev.slipo.eu/poi/{ID}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 * @apiSuccess                            {Object}    result            An instance of <code>POI</code>. If value of
 * <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 *
 * @apiSuccess (POI)            {String}    source            An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI
 * @apiSuccess (POI)            {String}    sourceId         The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source
 * @apiSuccess (POI)            {String}    names             A String containing​ ​ the​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI
 * @apiSuccess (POI)            {String}    categories        ​A String ​ of​ ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to
 * @apiSuccess (POI)            {Object}    geo ​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in GeoJSON format
 * @apiSuccess (POI)            {String[]}  same​              A ​ ​ list​ ​ of​ ​ URIs​ ​ of​ ​ POIs​ ​ to​ ​ which​ ​ this​ ​ POI​ ​ has​ ​ 
 * a ​ ​'sameAs'​ ​ relationship
 *
 * @apiSuccessExample {json} Response Example
 * HTTP/1.1 200 OK
 * {
 *   "errors": [],
 *   "success": true,
     "result": {
        "categories": "[Research Center]",
        "geo": {
            "coordinates": [
                23.80241096019745,
                38.036686288593074
            ],
            "type": "Point"
        },
        "id": "32e833a9-f1fd-4cb5-8f11-e8d307b81503",
        "names": "[Athena Research Center, Athena RC]",
        "source": "AthenaRC",
        "sourceId": "IMSI"
    }
 * }
 *
 * @apiError                              {Boolean}   success           Always <code>false</code>.
 * @apiError                              {Object[]}  errors            Array of <code>Error</code> objects.
 *
 * @apiError (Error)                      {String} code                 Unique error code.
 * @apiError (Error)                      {String} description          Error message. Application should not present
 * error messages to the users. Instead the error <code>code</code> must be used for deciding the client message.
 *
 * @apiErrorExample Error Response Example
 * HTTP/1.1 200 OK
 * {
    "errors": [
        {
            "code": {},
            "description": "Poi with uid 32e833a9-f1fd-4cb5-8f11-e8d307b81504 not found."
        }
    ],
    "success": false

 * }
 *
 * 
 */
function browse() { return; }
