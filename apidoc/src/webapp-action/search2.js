/**
 * @api {get} poi/ Get a POI by source and sourceId
 * @apiVersion 1.0.0
 * @apiName getPOIbySource
 * @apiGroup POI Search
 * @apiPermission anyone?
 *
 * @apiDescription Retrive a POI by its source and sourceId
 *
 * @apiParam (Query String Parameters)           {String}    source            An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI
 * @apiParam (Query String Parameters)           {String}    sourceId         The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source
 *
 * @apiParamExample {json} Request Example
 * GET https://registry.dev.slipo.eu/poi/{source}/{sourceId}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 * @apiSuccess                            {Object}    result            An instance of <code>POI</code>. If value of
 * <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 */
function browse() { return; }
