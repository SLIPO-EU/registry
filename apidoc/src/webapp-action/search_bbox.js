/**
 * @api {post} poi/location Get a POI by BBox
 * @apiVersion 1.0.0
 * @apiName getPOIbyBBox
 * @apiGroup POI Search
 * @apiPermission anyone?
 *
 * @apiDescription Retrive a POI by using a bounding box.
 *
 * @apiParam (Parameters)           {Float}    top                  The the maximum x-coordinate
 * @apiParam (Parameters)           {Float}    left                 The the maximum y-coordinate
 * @apiParam (Parameters)           {Float}    bottom               The the minimum x-coordinate
 * @apiParam (Parameters)           {Float}    right                The the minimum y-coordinate
 * @apiParam (Parameters)           {String}   categories           (Optional) A Category
 *
 * @apiParamExample {json} Request Example
 * POST https://registry.dev.slipo.eu/poi/location {
  "top": 37.98736907688228,
  "left": 23.68377685546875,
  "bottom": 37.93797003852636,
  "right": 23.743343353271484,
  "categories": ["Φαρμακεία Αττικής"]
}
 *
 * @apiSuccess                            {Boolean}   success           Returns <code>true</code> or <code>false</code>
 * indicating success of the operation.
 * @apiSuccess                            {Object[]}  errors            Array of <code>Error</code>
 * @apiSuccess                            {Object}    result            An instance of <code>POI</code>. If value of
 * <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code>
 */
function browse() { return; }
