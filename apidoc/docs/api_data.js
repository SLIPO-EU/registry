define({ "api": [
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
            "description": "<p>​   ​ ​          The​ ​ (default)​ ​ geometry​ ​ of​ ​ the​ ​ POI in WKT format</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "same",
            "description": "<p>​              A ​ ​ list​ ​ of​ ​ URIs​ ​ of​ ​ POIs​ ​ to​ ​ which​ ​ this​ ​ POI​ ​ has​ ​ a ​ ​ 'sameAs'​ ​ relationship</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST https://registry.dev.slipo.eu/register {}",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"errors\": [],\n  \"success\": true,\n  \"result\": [{\n    \"source_id\": \"123123115\",\n    \"status\": \"1\",\n    \"uri\": \"ASDFASDA\"},\n     {\n    \"source_id\": \"34523452\",\n    \"status\": \"2\",\n    \"uri\": null }\n               \n   ]\n}",
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
