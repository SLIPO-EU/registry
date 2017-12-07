/**
 * @api {post} register Register new POIs
 * @apiVersion 1.0.0
 * @apiName addPOIs
 * @apiGroup Registration
 * @apiPermission anyone?
 *
 * @apiDescription The Registry stores information for each POI
 *
 * @apiParam (Parameter)            {String}    source            An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI
 * @apiParam (Parameter)            {String}    source_id         The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source
 * @apiParam (Parameter)            {String[]}  names             A list​ ​ containing​ ​ the​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI
 * @apiParam (Parameter)            {String[]}  categories        ​A list​ ​ of​ ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to
 * @apiParam (Parameter)            {Object}    geom​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in WKT format
 * @apiParam (Parameter)            {String[]}  same​              A ​ ​ list​ ​ of​ ​ URIs​ ​ of​ ​ POIs​ ​ to​ ​ which​ ​ this​ ​ POI​ ​ has​ ​ a ​ ​ 'sameAs'​ ​ relationship
 *
 * @apiParamExample {json} Request Example
 * POST https://registry.dev.slipo.eu/register {}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code> objects
 * @apiSuccess                            {Object[]}    result            An Array with instances of <code>Response</code> for each POI that was received.
 * If the value of property <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 *
 * @apiSuccess (Response)            {String}    source_id         The <code>source_id</code> that was recived.
 * @apiSuccess (Response)            {String}    status            Response code for each POI (1: Success, 2: Error).
 * @apiSuccess (Response)            {String}    uri               Unique uri.
 *
 *
 * @apiSuccessExample {json} Response Example
 * HTTP/1.1 200 OK
 * {
 *   "errors": [],
 *   "success": true,
 *   "result": [{
 *     "source_id": "123123115",
 *     "status": "1",
 *     "uri": "ASDFASDA"},
 *      {
 *     "source_id": "34523452",
 *     "status": "2",
 *     "uri": null }
 *                
 *    ]
 * }
 *
 * @apiError                              {Boolean}   success           Always <code>false</code>.
 * @apiError                              {Object[]}  errors            Array of <code>Error</code> objects.
 *
 * @apiError (Error)                      {String} code                 Unique error code.
 * @apiError (Error)                      {String} description          Error message
 *
 * @apiErrorExample Error Response Example
 * HTTP/1.1 200 OK
 * {
 *   errors: [{
 *     code: "BasicErrorCode.NOT_IMPLEMENTED",
 *     description: "Not implemented"
 *   }],
 *   success: false
 * }
 *
 */
function browse() { return; }
