/**
 * @api {post} register Register POIs with given UUID
 * @apiVersion 1.0.0
 * @apiName addPOIsbatch
 * @apiGroup Registration
 * @apiPermission anyone
 *
 * @apiDescription The Registry stores information for each POI and saves the UUID its given in tempid to each POI.
 *
 * @apiParam (Parameters[])            {String}    source            An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI
 * @apiParam (Parameters[])            {String}    source_id         The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source
 * @apiParam (Parameters[])            {String}    names             The​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI
 * @apiParam (Parameters[])            {String}    category        The ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to
 * @apiParam (Parameters[])            {Object}    geom​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in GeoJSON format
 *
 * @apiParamExample {json} Request Example
 * POST https://registry.dev.slipo.eu/registerBatch [
{
  "tmpId": "94c15086-5b8b-4a72-b02f-2fb7595c6bd0",
  "source": "AthenaRC",
  "sourceId": "IMSI",
  "names": "Athena Research Center",
  "category": "Research Center",
  "geometry": {
        "type": "Point",
        "coordinates": [
          23.80241096019745,
          38.036686288593074
        ]
      }
}
]
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
    "errors": [],
    "result": [
        {
            "status": 1,
            "tempId": "94c15086-5b8b-4a72-b02f-2fb7595c6bd0",
            "uri": "94c15086-5b8b-4a72-b02f-2fb7595c6bd0"
        }
    ],
    "success": true
}
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
