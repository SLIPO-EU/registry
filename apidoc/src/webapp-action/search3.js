/**
 * @api {post} poi/ Get a POI by Name
 * @apiVersion 1.0.0
 * @apiName getPOIbyName
 * @apiGroup POI Search
 * @apiPermission anyone?
 *
 * @apiDescription Retrive a POI by its source and sourceId
 *
 * @apiParam (Query String Parameters)           {String}    name                 The name of the POI
 * @apiParam (Query String Parameters)           {String[]}    categories         (Optional) A list of categories.
 *
 * @apiParamExample {json} Request Example
 * POST https://registry.dev.slipo.eu/poi/ {
"name": "Athena" }
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 * @apiSuccess                            {Object}    result            An instance of <code>POI</code>. If value of
 * <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 */
function browse() { return; }
