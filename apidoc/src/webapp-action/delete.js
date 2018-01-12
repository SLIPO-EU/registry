/**
 * @api {get} delete/ Remove a POI by UUID
 * @apiVersion 1.0.0
 * @apiName deletePOIbyUUID
 * @apiGroup POI Delete
 * @apiPermission anyone?
 *
 * @apiDescription Remove a POI by its UUID
 * @apiParam (Query String Parameters)           {String}     id              A <code>UUId</code> 
 *
 * @apiParamExample {json} Request Example
 * GET https://registry.dev.slipo.eu/delete/{Id}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 */
function browse() { return; }
