define({ "api": [
  {
    "type": "get",
    "url": "delete/",
    "title": "Remove a POI by UUID",
    "version": "1.0.0",
    "name": "deletePOIbyUUID",
    "group": "POI_Delete",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Remove a POI by its UUID</p>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A <code>UUId</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET https://registry.dev.slipo.eu/delete/{Id}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          }
        ]
      }
    },
    "filename": "src/webapp-action/delete.js",
    "groupTitle": "POI_Delete"
  },
  {
    "type": "post",
    "url": "poi/location",
    "title": "Get a POI by BBox",
    "version": "1.0.0",
    "name": "getPOIbyBBox",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by using a bounding box.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "Float",
            "optional": false,
            "field": "top",
            "description": "<p>The the maximum x-coordinate</p>"
          },
          {
            "group": "Parameters",
            "type": "Float",
            "optional": false,
            "field": "left",
            "description": "<p>The the maximum y-coordinate</p>"
          },
          {
            "group": "Parameters",
            "type": "Float",
            "optional": false,
            "field": "bottom",
            "description": "<p>The the minimum x-coordinate</p>"
          },
          {
            "group": "Parameters",
            "type": "Float",
            "optional": false,
            "field": "right",
            "description": "<p>The the minimum y-coordinate</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "categories",
            "description": "<p>(Optional) A Category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST https://registry.dev.slipo.eu/poi/location {\n  \"top\": 37.98736907688228,\n  \"left\": 23.68377685546875,\n  \"bottom\": 37.93797003852636,\n  \"right\": 23.743343353271484,\n  \"categories\": [\"Φαρμακεία Αττικής\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ]
      }
    },
    "filename": "src/webapp-action/search_bbox.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "post",
    "url": "poi/",
    "title": "Get a POI by Name",
    "version": "1.0.0",
    "name": "getPOIbyName",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by its source and sourceId</p>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the POI</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>(Optional) A list of categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST https://registry.dev.slipo.eu/poi/ {\n\"name\": \"Athena\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ]
      }
    },
    "filename": "src/webapp-action/search3.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "post",
    "url": "poi/radius/",
    "title": "Get a POI by Point and Radius",
    "version": "1.0.0",
    "name": "getPOIbyRadius",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by its source and sourceId</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "Object",
            "optional": false,
            "field": "coordinates",
            "description": "<p>​ ​    The​ ​ (default)​ ​POINT geometry​ ​ of​ ​ the​ ​the center of the circle in GeoJSON format</p>"
          },
          {
            "group": "Parameters",
            "type": "Float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius in meters</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>(Optional) A Category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST https://registry.dev.slipo.eu/poi/radius/ {\n  \"coordinates\": [\n    -0.128059387207031,\n    51.5070596785178\n  ],\n  \"type\": \"Point\",\n  \"radius\":4\n\t\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ]
      }
    },
    "filename": "src/webapp-action/search_radius.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "get",
    "url": "poi/",
    "title": "Get a POI by source and sourceId",
    "version": "1.0.0",
    "name": "getPOIbySource",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by its source and sourceId</p>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI</p>"
          },
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "sourceId",
            "description": "<p>The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET https://registry.dev.slipo.eu/poi/{source}/{sourceId}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ]
      }
    },
    "filename": "src/webapp-action/search2.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "get",
    "url": "poi/",
    "title": "Get a POI by URI",
    "version": "1.0.0",
    "name": "getPOIbyURI",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by its URI</p>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>A <code>URI</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET https://registry.dev.slipo.eu/poi/{poi_uri}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ],
        "POI": [
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI</p>"
          },
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "source_id",
            "description": "<p>The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source</p>"
          },
          {
            "group": "POI",
            "type": "String[]",
            "optional": false,
            "field": "names",
            "description": "<p>A list​ ​ containing​ ​ the​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI</p>"
          },
          {
            "group": "POI",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>​A list​ ​ of​ ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to</p>"
          },
          {
            "group": "POI",
            "type": "Object",
            "optional": false,
            "field": "geom",
            "description": "<p>​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in WKT format</p>"
          },
          {
            "group": "POI",
            "type": "String[]",
            "optional": false,
            "field": "same",
            "description": "<p>​              A ​ ​ list​ ​ of​ ​ URIs​ ​ of​ ​ POIs​ ​ to​ ​ which​ ​ this​ ​ POI​ ​ has​ ​ a ​ ​'sameAs'​ ​ relationship</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"errors\": [],\n  \"success\": true,\n  \"result\": {\n    \"URI\": \"asdfasdf\",\n    \"names\": \"\",\n    \"source\": \"\",\n    \"source_id\": \"\",\n    \"categories\": [],\n    \"geom\": {},\n    \"same\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Always <code>false</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code> objects.</p>"
          }
        ],
        "Error": [
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique error code.</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Error message. Application should not present error messages to the users. Instead the error <code>code</code> must be used for deciding the client message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  errors: [{\n    code: \"FileSystemErrorCode.PATH_NOT_FOUND\",\n    description: \"POI was not found.\"\n  }],\n  success: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/webapp-action/Maintainance.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "get",
    "url": "poi/",
    "title": "Get a POI by URI",
    "version": "1.0.0",
    "name": "getPOIbyURI",
    "group": "POI_Search",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>Retrive a POI by its URI</p>",
    "parameter": {
      "fields": {
        "Query String Parameters": [
          {
            "group": "Query String Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A <code>UUId</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET https://registry.dev.slipo.eu/poi/{ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>An instance of <code>POI</code>. If value of <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ],
        "POI": [
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI</p>"
          },
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "sourceId",
            "description": "<p>The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source</p>"
          },
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "names",
            "description": "<p>A String containing​ ​ the​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI</p>"
          },
          {
            "group": "POI",
            "type": "String",
            "optional": false,
            "field": "categories",
            "description": "<p>​A String ​ of​ ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to</p>"
          },
          {
            "group": "POI",
            "type": "Object",
            "optional": false,
            "field": "geo",
            "description": "<p>​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in GeoJSON format</p>"
          },
          {
            "group": "POI",
            "type": "String[]",
            "optional": false,
            "field": "same",
            "description": "<p>​              A ​ ​ list​ ​ of​ ​ URIs​ ​ of​ ​ POIs​ ​ to​ ​ which​ ​ this​ ​ POI​ ​ has​ ​ a ​ ​'sameAs'​ ​ relationship</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"errors\": [],\n  \"success\": true,\n     \"result\": {\n        \"categories\": \"[Research Center]\",\n        \"geo\": {\n            \"coordinates\": [\n                23.80241096019745,\n                38.036686288593074\n            ],\n            \"type\": \"Point\"\n        },\n        \"id\": \"32e833a9-f1fd-4cb5-8f11-e8d307b81503\",\n        \"names\": \"[Athena Research Center, Athena RC]\",\n        \"source\": \"AthenaRC\",\n        \"sourceId\": \"IMSI\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Always <code>false</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code> objects.</p>"
          }
        ],
        "Error": [
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique error code.</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Error message. Application should not present error messages to the users. Instead the error <code>code</code> must be used for deciding the client message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"errors\": [\n        {\n            \"code\": {},\n            \"description\": \"Poi with uid 32e833a9-f1fd-4cb5-8f11-e8d307b81504 not found.\"\n        }\n    ],\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/webapp-action/search.js",
    "groupTitle": "POI_Search"
  },
  {
    "type": "post",
    "url": "register",
    "title": "Register new POIs",
    "version": "1.0.0",
    "name": "addPOIs",
    "group": "Registration",
    "permission": [
      {
        "name": "anyone?"
      }
    ],
    "description": "<p>The Registry stores information for each POI</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>An​ ​ identifier​ ​ specifying​ ​ the​ ​ source​ ​ of​ ​ this​ ​ POI</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_id",
            "description": "<p>The​ ​ identifier​ ​ of​ ​ the​ ​ POI​ ​ in​ ​ its​ ​ source</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "names",
            "description": "<p>A list​ ​ containing​ ​ the​ ​ known​ ​ names​ ​ of​ ​ the​ ​ POI</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>​A list​ ​ of​ ​ categories​ ​ this​ ​ POI​ ​ belongs​ ​ to</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "geom",
            "description": "<p>​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in GeoJSON format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST https://registry.dev.slipo.eu/register {\n  \"tmpId\": \"imis\",\n  \"source\": \"AthenaRC\",\n  \"sourceId\": \"IMSI\",\n  \"names\": [\"Athena Research Center\", \"Athena RC\"],\n  \"category\": [\"Research Center\"],\n  \"geometry\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          23.80241096019745,\n          38.036686288593074\n        ]\n      }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns <code>true</code> or <code>false</code> indicating success of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code> objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>An Array with instances of <code>Response</code> for each POI that was received. If the value of property <code>success</code> is <code>false</code>, <code>result</code> is <code>undefined</code></p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "source_id",
            "description": "<p>The <code>source_id</code> that was recived.</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response code for each POI (1: Success, 2: Error).</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Unique uri.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"errors\": [],\n    \"result\": {\n        \"status\": 1,\n        \"tempId\": \"IMSI\",\n        \"uri\": \"337b2899-5ad7-4144-85d1-30d6e3daf94f\"\n    },\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Always <code>false</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of <code>Error</code> objects.</p>"
          }
        ],
        "Error": [
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique error code.</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  errors: [{\n    code: \"BasicErrorCode.NOT_IMPLEMENTED\",\n    description: \"Not implemented\"\n  }],\n  success: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/webapp-action/Registration.js",
    "groupTitle": "Registration"
  }
] });
