amis.require.resourceMap({
  "res": {
    "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/object-assign/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react/cjs/react.production.min": {
      "type": "js",
      "deps": [
        "node_modules/object-assign/index"
      ],
      "pkg": "p0"
    },
    "node_modules/prop-types/lib/ReactPropTypesSecret": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/prop-types/lib/has": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/prop-types/checkPropTypes": {
      "type": "js",
      "deps": [
        "node_modules/prop-types/lib/ReactPropTypesSecret",
        "node_modules/prop-types/lib/has"
      ],
      "pkg": "p0"
    },
    "node_modules/react/cjs/react.development": {
      "type": "js",
      "deps": [
        "node_modules/object-assign/index",
        "node_modules/prop-types/checkPropTypes"
      ],
      "pkg": "p0"
    },
    "node_modules/react/index": {
      "type": "js",
      "deps": [
        "node_modules/react/cjs/react.production.min",
        "node_modules/react/cjs/react.development"
      ],
      "pkg": "p0"
    },
    "node_modules/scheduler/cjs/scheduler.production.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/scheduler/cjs/scheduler.development": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/scheduler/index": {
      "type": "js",
      "deps": [
        "node_modules/scheduler/cjs/scheduler.production.min",
        "node_modules/scheduler/cjs/scheduler.development"
      ],
      "pkg": "p0"
    },
    "node_modules/react-dom/cjs/react-dom.production.min": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/object-assign/index",
        "node_modules/scheduler/index"
      ],
      "pkg": "p0"
    },
    "node_modules/scheduler/cjs/scheduler-tracing.production.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/scheduler/cjs/scheduler-tracing.development": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/scheduler/tracing": {
      "type": "js",
      "deps": [
        "node_modules/scheduler/cjs/scheduler-tracing.production.min",
        "node_modules/scheduler/cjs/scheduler-tracing.development"
      ],
      "pkg": "p0"
    },
    "node_modules/react-dom/cjs/react-dom.development": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/object-assign/index",
        "node_modules/scheduler/index",
        "node_modules/prop-types/checkPropTypes",
        "node_modules/scheduler/tracing"
      ],
      "pkg": "p0"
    },
    "node_modules/react-dom/index": {
      "type": "js",
      "deps": [
        "node_modules/react-dom/cjs/react-dom.production.min",
        "node_modules/react-dom/cjs/react-dom.development"
      ],
      "pkg": "p0"
    },
    "node_modules/tslib/tslib": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mobx/lib/mobx.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mobx/lib/mobx": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mobx/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/mobx.min",
        "node_modules/mobx/lib/mobx"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-state-tree/dist/mobx-state-tree": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_freeGlobal": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_root": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_freeGlobal"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Symbol": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getRawTag": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_objectToString": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseGetTag": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol",
        "node_modules/lodash/_getRawTag",
        "node_modules/lodash/_objectToString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_overArg": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getPrototype": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_overArg"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isObjectLike": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isPlainObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/_getPrototype",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_listCacheClear": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/eq": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_assocIndexOf": {
      "type": "js",
      "deps": [
        "node_modules/lodash/eq"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_listCacheDelete": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assocIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_listCacheGet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assocIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_listCacheHas": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assocIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_listCacheSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assocIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_ListCache": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_listCacheClear",
        "node_modules/lodash/_listCacheDelete",
        "node_modules/lodash/_listCacheGet",
        "node_modules/lodash/_listCacheHas",
        "node_modules/lodash/_listCacheSet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_stackClear": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_ListCache"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_stackDelete": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_stackGet": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_stackHas": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isObject": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isFunction": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_coreJsData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isMasked": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_coreJsData"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_toSource": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsNative": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isFunction",
        "node_modules/lodash/_isMasked",
        "node_modules/lodash/isObject",
        "node_modules/lodash/_toSource"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getValue": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getNative": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsNative",
        "node_modules/lodash/_getValue"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Map": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_nativeCreate": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_hashClear": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_nativeCreate"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_hashDelete": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_hashGet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_nativeCreate"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_hashHas": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_nativeCreate"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_hashSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_nativeCreate"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Hash": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_hashClear",
        "node_modules/lodash/_hashDelete",
        "node_modules/lodash/_hashGet",
        "node_modules/lodash/_hashHas",
        "node_modules/lodash/_hashSet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapCacheClear": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Hash",
        "node_modules/lodash/_ListCache",
        "node_modules/lodash/_Map"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isKeyable": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getMapData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_isKeyable"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapCacheDelete": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getMapData"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapCacheGet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getMapData"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapCacheHas": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getMapData"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapCacheSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getMapData"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_MapCache": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_mapCacheClear",
        "node_modules/lodash/_mapCacheDelete",
        "node_modules/lodash/_mapCacheGet",
        "node_modules/lodash/_mapCacheHas",
        "node_modules/lodash/_mapCacheSet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_stackSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_ListCache",
        "node_modules/lodash/_Map",
        "node_modules/lodash/_MapCache"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Stack": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_ListCache",
        "node_modules/lodash/_stackClear",
        "node_modules/lodash/_stackDelete",
        "node_modules/lodash/_stackGet",
        "node_modules/lodash/_stackHas",
        "node_modules/lodash/_stackSet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_setCacheAdd": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_setCacheHas": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_SetCache": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_MapCache",
        "node_modules/lodash/_setCacheAdd",
        "node_modules/lodash/_setCacheHas"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arraySome": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_cacheHas": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_equalArrays": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_SetCache",
        "node_modules/lodash/_arraySome",
        "node_modules/lodash/_cacheHas"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Uint8Array": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mapToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_setToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_equalByTag": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol",
        "node_modules/lodash/_Uint8Array",
        "node_modules/lodash/eq",
        "node_modules/lodash/_equalArrays",
        "node_modules/lodash/_mapToArray",
        "node_modules/lodash/_setToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayPush": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseGetAllKeys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayPush",
        "node_modules/lodash/isArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayFilter": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/stubArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getSymbols": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayFilter",
        "node_modules/lodash/stubArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseTimes": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsArguments": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isArguments": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsArguments",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/stubFalse": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isBuffer": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root",
        "node_modules/lodash/stubFalse"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isIndex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/isLength": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsTypedArray": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isLength",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseUnary": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_apply": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/identity": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_overRest": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/constant": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_defineProperty": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseSetToString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/constant",
        "node_modules/lodash/_defineProperty",
        "node_modules/lodash/identity"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_shortOut": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_setToString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseSetToString",
        "node_modules/lodash/_shortOut"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseRest": {
      "type": "js",
      "deps": [
        "node_modules/lodash/identity",
        "node_modules/lodash/_overRest",
        "node_modules/lodash/_setToString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isError": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObjectLike",
        "node_modules/lodash/isPlainObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/attempt": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/isError"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayEach": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseAssignValue": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_defineProperty"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_WeakMap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_metaMap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_WeakMap"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseSetData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/identity",
        "node_modules/lodash/_metaMap"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseCreate": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createCtor": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseCreate",
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createBind": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createCtor",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_composeArgs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_composeArgsRight": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_countHolders": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseLodash": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_LazyWrapper": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseCreate",
        "node_modules/lodash/_baseLodash"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/noop": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_metaMap",
        "node_modules/lodash/noop"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_realNames": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_getFuncName": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_realNames"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_LodashWrapper": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseCreate",
        "node_modules/lodash/_baseLodash"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_copyArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_wrapperClone": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_LazyWrapper",
        "node_modules/lodash/_LodashWrapper",
        "node_modules/lodash/_copyArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/wrapperLodash": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_LazyWrapper",
        "node_modules/lodash/_LodashWrapper",
        "node_modules/lodash/_baseLodash",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isObjectLike",
        "node_modules/lodash/_wrapperClone"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isLaziable": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_LazyWrapper",
        "node_modules/lodash/_getData",
        "node_modules/lodash/_getFuncName",
        "node_modules/lodash/wrapperLodash"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_setData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseSetData",
        "node_modules/lodash/_shortOut"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getWrapDetails": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_insertWrapDetails": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseFindIndex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsNaN": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_strictIndexOf": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIndexOf": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseFindIndex",
        "node_modules/lodash/_baseIsNaN",
        "node_modules/lodash/_strictIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayIncludes": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIndexOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_updateWrapDetails": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_arrayIncludes"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_setWrapToString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getWrapDetails",
        "node_modules/lodash/_insertWrapDetails",
        "node_modules/lodash/_setToString",
        "node_modules/lodash/_updateWrapDetails"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createRecurry": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_isLaziable",
        "node_modules/lodash/_setData",
        "node_modules/lodash/_setWrapToString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getHolder": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_reorder": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyArray",
        "node_modules/lodash/_isIndex"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_replaceHolders": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_createHybrid": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_composeArgs",
        "node_modules/lodash/_composeArgsRight",
        "node_modules/lodash/_countHolders",
        "node_modules/lodash/_createCtor",
        "node_modules/lodash/_createRecurry",
        "node_modules/lodash/_getHolder",
        "node_modules/lodash/_reorder",
        "node_modules/lodash/_replaceHolders",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createCurry": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_createCtor",
        "node_modules/lodash/_createHybrid",
        "node_modules/lodash/_createRecurry",
        "node_modules/lodash/_getHolder",
        "node_modules/lodash/_replaceHolders",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createPartial": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_createCtor",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_mergeData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_composeArgs",
        "node_modules/lodash/_composeArgsRight",
        "node_modules/lodash/_replaceHolders"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_trimmedEndIndex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseTrim": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_trimmedEndIndex"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isSymbol": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/toNumber": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseTrim",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isSymbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/toFinite": {
      "type": "js",
      "deps": [
        "node_modules/lodash/toNumber"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/toInteger": {
      "type": "js",
      "deps": [
        "node_modules/lodash/toFinite"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createWrap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseSetData",
        "node_modules/lodash/_createBind",
        "node_modules/lodash/_createCurry",
        "node_modules/lodash/_createHybrid",
        "node_modules/lodash/_createPartial",
        "node_modules/lodash/_getData",
        "node_modules/lodash/_mergeData",
        "node_modules/lodash/_setData",
        "node_modules/lodash/_setWrapToString",
        "node_modules/lodash/toInteger"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/bind": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_createWrap",
        "node_modules/lodash/_getHolder",
        "node_modules/lodash/_replaceHolders"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isFlattenable": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol",
        "node_modules/lodash/isArguments",
        "node_modules/lodash/isArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseFlatten": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayPush",
        "node_modules/lodash/_isFlattenable"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/flatten": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseFlatten"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_flatRest": {
      "type": "js",
      "deps": [
        "node_modules/lodash/flatten",
        "node_modules/lodash/_overRest",
        "node_modules/lodash/_setToString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_toKey": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isSymbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/bindAll": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_baseAssignValue",
        "node_modules/lodash/bind",
        "node_modules/lodash/_flatRest",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayMap": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsMatch": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Stack",
        "node_modules/lodash/_baseIsEqual"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isStrictComparable": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getMatchData": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_isStrictComparable",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_matchesStrictComparable": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseMatches": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsMatch",
        "node_modules/lodash/_getMatchData",
        "node_modules/lodash/_matchesStrictComparable"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isKey": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArray",
        "node_modules/lodash/isSymbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/memoize": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_MapCache"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_memoizeCapped": {
      "type": "js",
      "deps": [
        "node_modules/lodash/memoize"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_stringToPath": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_memoizeCapped"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseToString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol",
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isSymbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/toString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseToString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_castPath": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArray",
        "node_modules/lodash/_isKey",
        "node_modules/lodash/_stringToPath",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseGet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_castPath",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/get": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseHasIn": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_hasPath": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_castPath",
        "node_modules/lodash/isArguments",
        "node_modules/lodash/isArray",
        "node_modules/lodash/_isIndex",
        "node_modules/lodash/isLength",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/hasIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseHasIn",
        "node_modules/lodash/_hasPath"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseMatchesProperty": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsEqual",
        "node_modules/lodash/get",
        "node_modules/lodash/hasIn",
        "node_modules/lodash/_isKey",
        "node_modules/lodash/_isStrictComparable",
        "node_modules/lodash/_matchesStrictComparable",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseProperty": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_basePropertyDeep": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/property": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseProperty",
        "node_modules/lodash/_basePropertyDeep",
        "node_modules/lodash/_isKey",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIteratee": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseMatches",
        "node_modules/lodash/_baseMatchesProperty",
        "node_modules/lodash/identity",
        "node_modules/lodash/isArray",
        "node_modules/lodash/property"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/cond": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_baseRest"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_assignValue": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseAssignValue",
        "node_modules/lodash/eq"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_copyObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assignValue",
        "node_modules/lodash/_baseAssignValue"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseAssign": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_isPrototype": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_nativeKeysIn": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseKeysIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isObject",
        "node_modules/lodash/_isPrototype",
        "node_modules/lodash/_nativeKeysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isArrayLike": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isFunction",
        "node_modules/lodash/isLength"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/keysIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayLikeKeys",
        "node_modules/lodash/_baseKeysIn",
        "node_modules/lodash/isArrayLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseAssignIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/keysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneBuffer": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_copySymbols": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/_getSymbols"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getSymbolsIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayPush",
        "node_modules/lodash/_getPrototype",
        "node_modules/lodash/_getSymbols",
        "node_modules/lodash/stubArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_copySymbolsIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/_getSymbolsIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getAllKeysIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetAllKeys",
        "node_modules/lodash/_getSymbolsIn",
        "node_modules/lodash/keysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_DataView": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Promise": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_Set": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getNative",
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getTag": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_DataView",
        "node_modules/lodash/_Map",
        "node_modules/lodash/_Promise",
        "node_modules/lodash/_Set",
        "node_modules/lodash/_WeakMap",
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/_toSource"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_initCloneArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneArrayBuffer": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Uint8Array"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneDataView": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_cloneArrayBuffer"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneRegExp": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneSymbol": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Symbol"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_cloneTypedArray": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_cloneArrayBuffer"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_initCloneByTag": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_cloneArrayBuffer",
        "node_modules/lodash/_cloneDataView",
        "node_modules/lodash/_cloneRegExp",
        "node_modules/lodash/_cloneSymbol",
        "node_modules/lodash/_cloneTypedArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_initCloneObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseCreate",
        "node_modules/lodash/_getPrototype",
        "node_modules/lodash/_isPrototype"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsMap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isMap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsMap",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_nodeUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsSet",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_nodeUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseClone": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Stack",
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_assignValue",
        "node_modules/lodash/_baseAssign",
        "node_modules/lodash/_baseAssignIn",
        "node_modules/lodash/_cloneBuffer",
        "node_modules/lodash/_copyArray",
        "node_modules/lodash/_copySymbols",
        "node_modules/lodash/_copySymbolsIn",
        "node_modules/lodash/_getAllKeys",
        "node_modules/lodash/_getAllKeysIn",
        "node_modules/lodash/_getTag",
        "node_modules/lodash/_initCloneArray",
        "node_modules/lodash/_initCloneByTag",
        "node_modules/lodash/_initCloneObject",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isBuffer",
        "node_modules/lodash/isMap",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isSet",
        "node_modules/lodash/keys",
        "node_modules/lodash/keysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseConformsTo": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseConforms": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseConformsTo",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/conforms": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseClone",
        "node_modules/lodash/_baseConforms"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/defaultTo": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_createFlow": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_LodashWrapper",
        "node_modules/lodash/_flatRest",
        "node_modules/lodash/_getData",
        "node_modules/lodash/_getFuncName",
        "node_modules/lodash/isArray",
        "node_modules/lodash/_isLaziable"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/flow": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createFlow"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/flowRight": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createFlow"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/iteratee": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseClone",
        "node_modules/lodash/_baseIteratee"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/matches": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseClone",
        "node_modules/lodash/_baseMatches"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/matchesProperty": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseClone",
        "node_modules/lodash/_baseMatchesProperty"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/last": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseSlice": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_parent": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGet",
        "node_modules/lodash/_baseSlice"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseInvoke": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_castPath",
        "node_modules/lodash/last",
        "node_modules/lodash/_parent",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/method": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseInvoke",
        "node_modules/lodash/_baseRest"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/methodOf": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseInvoke",
        "node_modules/lodash/_baseRest"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseFunctions": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayFilter",
        "node_modules/lodash/isFunction"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/mixin": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_arrayPush",
        "node_modules/lodash/_baseFunctions",
        "node_modules/lodash/_copyArray",
        "node_modules/lodash/isFunction",
        "node_modules/lodash/isObject",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseNth": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_isIndex"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/nthArg": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseNth",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/toInteger"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createOver": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_apply",
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_flatRest"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/over": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_createOver"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayEvery": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/overEvery": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEvery",
        "node_modules/lodash/_createOver"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/overSome": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arraySome",
        "node_modules/lodash/_createOver"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/propertyOf": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseRange": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_isIterateeCall": {
      "type": "js",
      "deps": [
        "node_modules/lodash/eq",
        "node_modules/lodash/isArrayLike",
        "node_modules/lodash/_isIndex",
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createRange": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseRange",
        "node_modules/lodash/_isIterateeCall",
        "node_modules/lodash/toFinite"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/range": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createRange"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/rangeRight": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createRange"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/stubObject": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/stubString": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/stubTrue": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_castFunction": {
      "type": "js",
      "deps": [
        "node_modules/lodash/identity"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/times": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseTimes",
        "node_modules/lodash/_castFunction",
        "node_modules/lodash/toInteger"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/toPath": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_copyArray",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isSymbol",
        "node_modules/lodash/_stringToPath",
        "node_modules/lodash/_toKey",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/uniqueId": {
      "type": "js",
      "deps": [
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/util": {
      "type": "js",
      "deps": [
        "node_modules/lodash/attempt",
        "node_modules/lodash/bindAll",
        "node_modules/lodash/cond",
        "node_modules/lodash/conforms",
        "node_modules/lodash/constant",
        "node_modules/lodash/defaultTo",
        "node_modules/lodash/flow",
        "node_modules/lodash/flowRight",
        "node_modules/lodash/identity",
        "node_modules/lodash/iteratee",
        "node_modules/lodash/matches",
        "node_modules/lodash/matchesProperty",
        "node_modules/lodash/method",
        "node_modules/lodash/methodOf",
        "node_modules/lodash/mixin",
        "node_modules/lodash/noop",
        "node_modules/lodash/nthArg",
        "node_modules/lodash/over",
        "node_modules/lodash/overEvery",
        "node_modules/lodash/overSome",
        "node_modules/lodash/property",
        "node_modules/lodash/propertyOf",
        "node_modules/lodash/range",
        "node_modules/lodash/rangeRight",
        "node_modules/lodash/stubArray",
        "node_modules/lodash/stubFalse",
        "node_modules/lodash/stubObject",
        "node_modules/lodash/stubString",
        "node_modules/lodash/stubTrue",
        "node_modules/lodash/times",
        "node_modules/lodash/toPath",
        "node_modules/lodash/uniqueId"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_nodeUtil": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_freeGlobal",
        "node_modules/lodash/util"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isTypedArray": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsTypedArray",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_nodeUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayLikeKeys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseTimes",
        "node_modules/lodash/isArguments",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isBuffer",
        "node_modules/lodash/_isIndex",
        "node_modules/lodash/isTypedArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_nativeKeys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_overArg"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseKeys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_isPrototype",
        "node_modules/lodash/_nativeKeys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/keys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayLikeKeys",
        "node_modules/lodash/_baseKeys",
        "node_modules/lodash/isArrayLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_getAllKeys": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetAllKeys",
        "node_modules/lodash/_getSymbols",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_equalObjects": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_getAllKeys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsEqualDeep": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Stack",
        "node_modules/lodash/_equalArrays",
        "node_modules/lodash/_equalByTag",
        "node_modules/lodash/_equalObjects",
        "node_modules/lodash/_getTag",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isBuffer",
        "node_modules/lodash/isTypedArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsEqual": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsEqualDeep",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isEqual": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsEqual"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isNumber": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isNaN": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isNumber"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayIncludesWith": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_createSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Set",
        "node_modules/lodash/noop",
        "node_modules/lodash/_setToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseUniq": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_SetCache",
        "node_modules/lodash/_arrayIncludes",
        "node_modules/lodash/_arrayIncludesWith",
        "node_modules/lodash/_cacheHas",
        "node_modules/lodash/_createSet",
        "node_modules/lodash/_setToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/uniq": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseUniq"
      ],
      "pkg": "p0"
    },
    "node_modules/moment/moment": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_castSlice": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseSlice"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_hasUnicode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_asciiToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_unicodeToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_stringToArray": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_asciiToArray",
        "node_modules/lodash/_hasUnicode",
        "node_modules/lodash/_unicodeToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createCaseFirst": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_castSlice",
        "node_modules/lodash/_hasUnicode",
        "node_modules/lodash/_stringToArray",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/upperFirst": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createCaseFirst"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseRepeat": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_asciiSize": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseProperty"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_unicodeSize": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_stringSize": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_asciiSize",
        "node_modules/lodash/_hasUnicode",
        "node_modules/lodash/_unicodeSize"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createPadding": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseRepeat",
        "node_modules/lodash/_baseToString",
        "node_modules/lodash/_castSlice",
        "node_modules/lodash/_hasUnicode",
        "node_modules/lodash/_stringSize",
        "node_modules/lodash/_stringToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/padStart": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createPadding",
        "node_modules/lodash/_stringSize",
        "node_modules/lodash/toInteger",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/capitalize": {
      "type": "js",
      "deps": [
        "node_modules/lodash/toString",
        "node_modules/lodash/upperFirst"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_basePropertyOf": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_escapeHtmlChar": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_basePropertyOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/escape": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_escapeHtmlChar",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIsRegExp": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isRegExp": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIsRegExp",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_nodeUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/truncate": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseToString",
        "node_modules/lodash/_castSlice",
        "node_modules/lodash/_hasUnicode",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isRegExp",
        "node_modules/lodash/_stringSize",
        "node_modules/lodash/_stringToArray",
        "node_modules/lodash/toInteger",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createBaseFor": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseFor": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createBaseFor"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseForOwn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseFor",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/transform": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_baseCreate",
        "node_modules/lodash/_baseForOwn",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_getPrototype",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isBuffer",
        "node_modules/lodash/isFunction",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isTypedArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayAggregator": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_createBaseEach": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArrayLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseEach": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseForOwn",
        "node_modules/lodash/_createBaseEach"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseAggregator": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseEach"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createAggregator": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayAggregator",
        "node_modules/lodash/_baseAggregator",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/isArray"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/groupBy": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseAssignValue",
        "node_modules/lodash/_createAggregator"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/uniqBy": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_baseUniq"
      ],
      "pkg": "p0"
    },
    "node_modules/amis-formula/dist/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/moment/moment",
        "node_modules/lodash/upperFirst",
        "node_modules/lodash/padStart",
        "node_modules/lodash/capitalize",
        "node_modules/lodash/escape",
        "node_modules/lodash/truncate",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/transform",
        "node_modules/lodash/groupBy",
        "node_modules/lodash/uniqBy",
        "node_modules/lodash/uniq"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/tpl-builtin": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/isPlainObject",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis-formula/dist/index"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createAssigner": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_isIterateeCall"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/assignInWith": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/_createAssigner",
        "node_modules/lodash/keysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseValues": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_customDefaultsAssignIn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/eq"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_escapeStringChar": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_reInterpolate": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_reEscape": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_reEvaluate": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/templateSettings": {
      "type": "js",
      "deps": [
        "node_modules/lodash/escape",
        "node_modules/lodash/_reEscape",
        "node_modules/lodash/_reEvaluate",
        "node_modules/lodash/_reInterpolate"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/template": {
      "type": "js",
      "deps": [
        "node_modules/lodash/assignInWith",
        "node_modules/lodash/attempt",
        "node_modules/lodash/_baseValues",
        "node_modules/lodash/_customDefaultsAssignIn",
        "node_modules/lodash/_escapeStringChar",
        "node_modules/lodash/isError",
        "node_modules/lodash/_isIterateeCall",
        "node_modules/lodash/keys",
        "node_modules/lodash/_reInterpolate",
        "node_modules/lodash/templateSettings",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/tpl-lodash": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/template",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/moment/moment"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/tpl": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/tpl-lodash",
        "node_modules/amis-formula/dist/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/qs/lib/formats": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/qs/lib/utils": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/qs/lib/formats"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/qs/lib/stringify": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/qs/lib/utils",
        "node_modules/amis/node_modules/qs/lib/formats"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/qs/lib/parse": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/qs/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/qs/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/qs/lib/stringify",
        "node_modules/amis/node_modules/qs/lib/parse",
        "node_modules/amis/node_modules/qs/lib/formats"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/autobind": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/helper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/isNaN",
        "node_modules/lodash/uniq",
        "node_modules/lodash/last",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/node_modules/qs/lib/index",
        "node_modules/amis/lib/utils/autobind",
        "node_modules/amis-formula/dist/index",
        "node_modules/mobx/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createFind": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/isArrayLike",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/findIndex": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseFindIndex",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/toInteger"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/find": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_createFind",
        "node_modules/lodash/findIndex"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/SimpleMap": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/find",
        "node_modules/lodash/findIndex"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/manager": {
      "type": "js",
      "deps": [
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/node": {
      "type": "js",
      "deps": [
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/manager"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/iRenderer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/SimpleMap",
        "node_modules/amis/lib/store/node"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/errors": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseUnset": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_castPath",
        "node_modules/lodash/last",
        "node_modules/lodash/_parent",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_customOmitClone": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isPlainObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/omit": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseClone",
        "node_modules/lodash/_baseUnset",
        "node_modules/lodash/_castPath",
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/_customOmitClone",
        "node_modules/lodash/_flatRest",
        "node_modules/lodash/_getAllKeysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/classnames/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-json-view/dist/main": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/assertEnvironment": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/utils/reactBatchedUpdates": {
      "type": "js",
      "deps": [
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/utils": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/observerBatching": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/mobx-react-lite/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/staticRendering": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/printDebugValue": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/reactionCleanupTracking": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/useQueuedForceUpdate": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/useObserver": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/printDebugValue",
        "node_modules/mobx-react-lite/lib/reactionCleanupTracking",
        "node_modules/mobx-react-lite/lib/staticRendering",
        "node_modules/mobx-react-lite/lib/utils",
        "node_modules/mobx-react-lite/lib/useQueuedForceUpdate"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/observer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/staticRendering",
        "node_modules/mobx-react-lite/lib/useObserver"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/ObserverComponent": {
      "type": "js",
      "deps": [
        "node_modules/mobx-react-lite/lib/useObserver"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/useAsObservableSource": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/useLocalStore": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/useAsObservableSource",
        "node_modules/mobx-react-lite/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react-lite/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/mobx-react-lite/lib/assertEnvironment",
        "node_modules/mobx-react-lite/lib/utils/reactBatchedUpdates",
        "node_modules/mobx-react-lite/lib/observerBatching",
        "node_modules/mobx-react-lite/lib/staticRendering",
        "node_modules/mobx-react-lite/lib/observer",
        "node_modules/mobx-react-lite/lib/useObserver",
        "node_modules/mobx-react-lite/lib/ObserverComponent",
        "node_modules/mobx-react-lite/lib/utils",
        "node_modules/mobx-react-lite/lib/useAsObservableSource",
        "node_modules/mobx-react-lite/lib/useLocalStore",
        "node_modules/mobx-react-lite/lib/useQueuedForceUpdate"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react/dist/mobxreact.cjs.production.min": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react/dist/mobxreact.cjs.development": {
      "type": "js",
      "deps": [
        "node_modules/mobx/lib/index",
        "node_modules/react/index",
        "node_modules/mobx-react-lite/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/mobx-react/dist/index": {
      "type": "js",
      "deps": [
        "node_modules/mobx-react/dist/mobxreact.cjs.production.min",
        "node_modules/mobx-react/dist/mobxreact.cjs.development"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/offset": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/offsetParent": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/position": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/offset",
        "node_modules/amis/lib/utils/offsetParent"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/debug": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/react-dom/index",
        "node_modules/react-json-view/dist/main",
        "node_modules/mobx/lib/index",
        "node_modules/mobx-react/dist/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/position"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/api": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/isPlainObject",
        "node_modules/amis/lib/utils/debug",
        "node_modules/amis-formula/dist/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/service": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/iRenderer",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/errors",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/now": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_root"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/debounce": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isObject",
        "node_modules/lodash/now",
        "node_modules/lodash/toNumber"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/validations": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/memoize",
        "node_modules/lodash/isPlainObject"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/interopRequireDefault": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/typeof": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/interopRequireWildcard": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/typeof"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/extends": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/invariant/browser": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uncontrollable/lib/cjs/utils": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/invariant/browser"
      ],
      "pkg": "p0"
    },
    "node_modules/uncontrollable/lib/cjs/hook": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/setPrototypeOf": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/inheritsLoose": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/setPrototypeOf"
      ],
      "pkg": "p0"
    },
    "node_modules/react-lifecycles-compat/react-lifecycles-compat.cjs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uncontrollable/lib/cjs/uncontrollable": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/inheritsLoose",
        "node_modules/react/index",
        "node_modules/react-lifecycles-compat/react-lifecycles-compat.cjs",
        "node_modules/invariant/browser",
        "node_modules/uncontrollable/lib/cjs/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/uncontrollable/lib/cjs/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/uncontrollable/lib/cjs/hook",
        "node_modules/uncontrollable/lib/cjs/uncontrollable"
      ],
      "pkg": "p0"
    },
    "node_modules/react-is/cjs/react-is.production.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-is/cjs/react-is.development": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-is/index": {
      "type": "js",
      "deps": [
        "node_modules/react-is/cjs/react-is.production.min",
        "node_modules/react-is/cjs/react-is.development"
      ],
      "pkg": "p0"
    },
    "node_modules/prop-types/factoryWithTypeCheckers": {
      "type": "js",
      "deps": [
        "node_modules/react-is/index",
        "node_modules/object-assign/index",
        "node_modules/prop-types/lib/ReactPropTypesSecret",
        "node_modules/prop-types/lib/has",
        "node_modules/prop-types/checkPropTypes"
      ],
      "pkg": "p0"
    },
    "node_modules/prop-types/factoryWithThrowingShims": {
      "type": "js",
      "deps": [
        "node_modules/prop-types/lib/ReactPropTypesSecret"
      ],
      "pkg": "p0"
    },
    "node_modules/prop-types/index": {
      "type": "js",
      "deps": [
        "node_modules/react-is/index",
        "node_modules/prop-types/factoryWithTypeCheckers",
        "node_modules/prop-types/factoryWithThrowingShims"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/virtual-list/constants": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/virtual-list/SizeAndPositionManager": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/components/virtual-list/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/virtual-list/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/amis/lib/components/virtual-list/SizeAndPositionManager",
        "node_modules/amis/lib/components/virtual-list/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/ownerDocument": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-overlays/cjs/useWaitForDOMRef": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/dom-helpers/cjs/ownerDocument",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-overlays/cjs/Portal": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react-dom/index",
        "node_modules/react/index",
        "node_modules/react-overlays/cjs/useWaitForDOMRef"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/dom": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/offset",
        "node_modules/amis/lib/utils/position"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/resize-sensor": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/contains": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/canUseDOM": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/addEventListener": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/dom-helpers/cjs/canUseDOM"
      ],
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/removeEventListener": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/dom-helpers/cjs/listen": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/dom-helpers/cjs/addEventListener",
        "node_modules/dom-helpers/cjs/removeEventListener"
      ],
      "pkg": "p0"
    },
    "node_modules/@restart/hooks/cjs/useCommittedRef": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/@restart/hooks/cjs/useEventCallback": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/@restart/hooks/cjs/useCommittedRef"
      ],
      "pkg": "p0"
    },
    "node_modules/warning/warning": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-overlays/cjs/safeFindDOMNode": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-overlays/cjs/ownerDocument": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/dom-helpers/cjs/ownerDocument",
        "node_modules/react-overlays/cjs/safeFindDOMNode"
      ],
      "pkg": "p0"
    },
    "node_modules/react-overlays/cjs/useRootClose": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/dom-helpers/cjs/contains",
        "node_modules/dom-helpers/cjs/listen",
        "node_modules/react/index",
        "node_modules/@restart/hooks/cjs/useEventCallback",
        "node_modules/warning/warning",
        "node_modules/react-overlays/cjs/ownerDocument"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/RootClose": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-overlays/cjs/useRootClose",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Overlay": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react-overlays/cjs/Portal",
        "node_modules/classnames/index",
        "node_modules/react-dom/index",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/dom",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/amis/lib/utils/RootClose"
      ],
      "pkg": "p0"
    },
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs": {
      "type": "js",
      "deps": [
        "node_modules/react-is/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/theme": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/classnames/index",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PopOver": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Html": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Tooltip": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TooltipWrapper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Html",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/Tooltip",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/assertThisInitialized": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/downshift/node_modules/react-is/cjs/react-is.production.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/downshift/node_modules/react-is/cjs/react-is.development": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/downshift/node_modules/react-is/index": {
      "type": "js",
      "deps": [
        "node_modules/downshift/node_modules/react-is/cjs/react-is.production.min",
        "node_modules/downshift/node_modules/react-is/cjs/react-is.development"
      ],
      "pkg": "p0"
    },
    "node_modules/compute-scroll-into-view/dist/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/downshift/dist/downshift.cjs": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inheritsLoose",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/downshift/node_modules/react-is/index",
        "node_modules/compute-scroll-into-view/dist/index",
        "node_modules/tslib/tslib"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/close": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/close-small": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/status-close": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/undo": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/redo": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/enter": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/volume": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/mute": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/play": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/pause": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/left-arrow": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/right-arrow": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/check": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/plus": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/minus": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/pencil": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/view": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/remove": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/retry": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/upload": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/download": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/file": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/status-success": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/status-fail": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/status-info": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/status-warning": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/success": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/fail": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/search": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/back": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/move": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/info": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/location": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/drag-bar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/reload": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/exchange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/columns": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/calendar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/clock": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/tree-down": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/cloud-upload": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/image": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/refresh": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/copy": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/filter": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/caret": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/right-arrow-bold": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/column-filter": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/zoom-in": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/zoom-out": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/question": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/question-mark": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/window-restore": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/info-circle": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/warning": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/warning-mark": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/schedule": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/home": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/folder": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/sort-default": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/sort-asc": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/sort-desc": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/setting": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/plus-cicle": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/ellipsis-v": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/expand-alt": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/compress-alt": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/transparent": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/loading-outline": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/star": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/alert-success": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/alert-info": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/alert-warning": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/alert-danger": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/function": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/input-clear": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/slider-handle-icon": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/icons/trash": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/icons": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/icons/close",
        "node_modules/amis/lib/icons/close-small",
        "node_modules/amis/lib/icons/status-close",
        "node_modules/amis/lib/icons/undo",
        "node_modules/amis/lib/icons/redo",
        "node_modules/amis/lib/icons/enter",
        "node_modules/amis/lib/icons/volume",
        "node_modules/amis/lib/icons/mute",
        "node_modules/amis/lib/icons/play",
        "node_modules/amis/lib/icons/pause",
        "node_modules/amis/lib/icons/left-arrow",
        "node_modules/amis/lib/icons/right-arrow",
        "node_modules/amis/lib/icons/check",
        "node_modules/amis/lib/icons/plus",
        "node_modules/amis/lib/icons/minus",
        "node_modules/amis/lib/icons/pencil",
        "node_modules/amis/lib/icons/view",
        "node_modules/amis/lib/icons/remove",
        "node_modules/amis/lib/icons/retry",
        "node_modules/amis/lib/icons/upload",
        "node_modules/amis/lib/icons/download",
        "node_modules/amis/lib/icons/file",
        "node_modules/amis/lib/icons/status-success",
        "node_modules/amis/lib/icons/status-fail",
        "node_modules/amis/lib/icons/status-info",
        "node_modules/amis/lib/icons/status-warning",
        "node_modules/amis/lib/icons/success",
        "node_modules/amis/lib/icons/fail",
        "node_modules/amis/lib/icons/search",
        "node_modules/amis/lib/icons/back",
        "node_modules/amis/lib/icons/move",
        "node_modules/amis/lib/icons/info",
        "node_modules/amis/lib/icons/location",
        "node_modules/amis/lib/icons/drag-bar",
        "node_modules/amis/lib/icons/reload",
        "node_modules/amis/lib/icons/exchange",
        "node_modules/amis/lib/icons/columns",
        "node_modules/amis/lib/icons/calendar",
        "node_modules/amis/lib/icons/clock",
        "node_modules/amis/lib/icons/tree-down",
        "node_modules/amis/lib/icons/cloud-upload",
        "node_modules/amis/lib/icons/image",
        "node_modules/amis/lib/icons/refresh",
        "node_modules/amis/lib/icons/copy",
        "node_modules/amis/lib/icons/filter",
        "node_modules/amis/lib/icons/caret",
        "node_modules/amis/lib/icons/right-arrow-bold",
        "node_modules/amis/lib/icons/column-filter",
        "node_modules/amis/lib/icons/zoom-in",
        "node_modules/amis/lib/icons/zoom-out",
        "node_modules/amis/lib/icons/question",
        "node_modules/amis/lib/icons/question-mark",
        "node_modules/amis/lib/icons/window-restore",
        "node_modules/amis/lib/icons/info-circle",
        "node_modules/amis/lib/icons/warning",
        "node_modules/amis/lib/icons/warning-mark",
        "node_modules/amis/lib/icons/schedule",
        "node_modules/amis/lib/icons/home",
        "node_modules/amis/lib/icons/folder",
        "node_modules/amis/lib/icons/sort-default",
        "node_modules/amis/lib/icons/sort-asc",
        "node_modules/amis/lib/icons/sort-desc",
        "node_modules/amis/lib/icons/setting",
        "node_modules/amis/lib/icons/plus-cicle",
        "node_modules/amis/lib/icons/ellipsis-v",
        "node_modules/amis/lib/icons/expand-alt",
        "node_modules/amis/lib/icons/compress-alt",
        "node_modules/amis/lib/icons/transparent",
        "node_modules/amis/lib/icons/loading-outline",
        "node_modules/amis/lib/icons/star",
        "node_modules/amis/lib/icons/alert-success",
        "node_modules/amis/lib/icons/alert-info",
        "node_modules/amis/lib/icons/alert-warning",
        "node_modules/amis/lib/icons/alert-danger",
        "node_modules/amis/lib/icons/function",
        "node_modules/amis/lib/icons/input-clear",
        "node_modules/amis/lib/icons/slider-handle-icon",
        "node_modules/amis/lib/icons/trash"
      ],
      "pkg": "p0"
    },
    "node_modules/remove-accents/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/match-sorter/dist/match-sorter.cjs": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/remove-accents/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/types": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/filter-schema": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/isPlainObject",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/WithRootStore": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/WithStore": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/mobx-react/dist/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/WithRootStore"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/Scoped": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/find",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/table": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/iRenderer",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/store/manager"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/wrapControl": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/store/combo",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/store/formItem",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/mobx-react/dist/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/WithRootStore",
        "node_modules/amis/lib/store/table"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Item": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/mobx/lib/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx-react/dist/index",
        "node_modules/amis/lib/types",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/WithStore",
        "node_modules/amis/lib/renderers/Form/wrapControl"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_assignMergeValue": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseAssignValue",
        "node_modules/lodash/eq"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isArrayLikeObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArrayLike",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_safeGet": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/toPlainObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_copyObject",
        "node_modules/lodash/keysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseMergeDeep": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assignMergeValue",
        "node_modules/lodash/_cloneBuffer",
        "node_modules/lodash/_cloneTypedArray",
        "node_modules/lodash/_copyArray",
        "node_modules/lodash/_initCloneObject",
        "node_modules/lodash/isArguments",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isArrayLikeObject",
        "node_modules/lodash/isBuffer",
        "node_modules/lodash/isFunction",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/isTypedArray",
        "node_modules/lodash/_safeGet",
        "node_modules/lodash/toPlainObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseMerge": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_Stack",
        "node_modules/lodash/_assignMergeValue",
        "node_modules/lodash/_baseFor",
        "node_modules/lodash/_baseMergeDeep",
        "node_modules/lodash/isObject",
        "node_modules/lodash/keysIn",
        "node_modules/lodash/_safeGet"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/merge": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseMerge",
        "node_modules/lodash/_createAssigner"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Options": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/api",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx/lib/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/findIndex",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/merge"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Checkbox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Input": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/locale": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/react-transition-group/cjs/config": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-transition-group/cjs/utils/PropTypes": {
      "type": "js",
      "deps": [
        "node_modules/prop-types/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-transition-group/cjs/TransitionGroupContext": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-transition-group/cjs/Transition": {
      "type": "js",
      "deps": [
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/react-transition-group/cjs/config",
        "node_modules/react-transition-group/cjs/utils/PropTypes",
        "node_modules/react-transition-group/cjs/TransitionGroupContext"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/icon": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Spinner": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/Schema": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/WithStore": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/mobx-react/dist/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/env": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/WithRemoteConfig": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/components/WithStore",
        "node_modules/amis/lib/env",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/mobx/lib/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Button": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PopUp": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/react-overlays/cjs/Portal",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Button"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Select": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/virtual-list/index",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/downshift/dist/downshift.cjs",
        "node_modules/amis/lib/components/icons",
        "node_modules/match-sorter/dist/match-sorter.cjs",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/isPlainObject",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/Input",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/Schema",
        "node_modules/amis/lib/components/WithRemoteConfig",
        "node_modules/amis/lib/components/PopUp"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/formItem": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/form",
        "node_modules/amis/lib/utils/validations",
        "node_modules/amis/lib/store/combo",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/api",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Select",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/SimpleMap",
        "node_modules/amis/lib/store/node",
        "node_modules/amis/lib/store/manager"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/form": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/store/formItem",
        "node_modules/amis/lib/utils/errors",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/flatten",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/combo": {
      "type": "js",
      "deps": [
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/iRenderer",
        "node_modules/amis/lib/store/form",
        "node_modules/amis/lib/store/manager"
      ],
      "pkg": "p0"
    },
    "node_modules/file-saver/dist/FileSaver.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseSet": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_assignValue",
        "node_modules/lodash/_castPath",
        "node_modules/lodash/_isIndex",
        "node_modules/lodash/isObject",
        "node_modules/lodash/_toKey"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_basePickBy": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGet",
        "node_modules/lodash/_baseSet",
        "node_modules/lodash/_castPath"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_basePick": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_basePickBy",
        "node_modules/lodash/hasIn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/pick": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_basePick",
        "node_modules/lodash/_flatRest"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/crud": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/file-saver/dist/FileSaver.min",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/pick",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/match-sorter/dist/match-sorter.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/list": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/iRenderer",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/modal": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/store/service",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/pagination": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/store/iRenderer"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/app": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/store/service"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/root": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/store/service"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/store/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/store/iRenderer",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/store/combo",
        "node_modules/amis/lib/store/form",
        "node_modules/amis/lib/store/crud",
        "node_modules/amis/lib/store/table",
        "node_modules/amis/lib/store/list",
        "node_modules/amis/lib/store/modal",
        "node_modules/lodash/find",
        "node_modules/amis/lib/store/formItem",
        "node_modules/amis/lib/store/manager",
        "node_modules/amis/lib/store/pagination",
        "node_modules/amis/lib/store/app",
        "node_modules/amis/lib/store/root"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/normalizeLink": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Alert2": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Toast": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Html",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale",
        "node_modules/lodash/groupBy"
      ],
      "pkg": "p0"
    },
    "node_modules/keycode/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ModalManager": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/keycode/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Modal": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/react-overlays/cjs/Portal",
        "node_modules/amis/lib/components/ModalManager",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Alert": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Html"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ImageGallery": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/mapValues": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseAssignValue",
        "node_modules/lodash/_baseForOwn",
        "node_modules/lodash/_baseIteratee"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/RootRenderer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-react/dist/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/Root",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/store/root",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/node_modules/qs/lib/index",
        "node_modules/lodash/pick",
        "node_modules/lodash/mapValues"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseDifference": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_SetCache",
        "node_modules/lodash/_arrayIncludes",
        "node_modules/lodash/_arrayIncludesWith",
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_cacheHas"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/difference": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseDifference",
        "node_modules/lodash/_baseFlatten",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/isArrayLikeObject"
      ],
      "pkg": "p0"
    },
    "node_modules/react-visibility-sensor/dist/visibility-sensor": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/LazyComponent": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-visibility-sensor/dist/visibility-sensor",
        "node_modules/amis/lib/components/Spinner"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/SchemaRenderer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/difference",
        "node_modules/lodash/omit",
        "node_modules/react/index",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/Root",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/utils/debug",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/SimpleMap",
        "node_modules/mobx-react/dist/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/Root": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/isPlainObject",
        "node_modules/react/index",
        "node_modules/amis/lib/components/ImageGallery",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/RootRenderer",
        "node_modules/amis/lib/SchemaRenderer",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/WithRootStore"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/envOverwrite": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/renderer-event": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/Action": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/factory": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/store/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/normalizeLink",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx-react/dist/index",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/theme",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/components/Toast",
        "node_modules/amis/lib/components/Alert",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/Root",
        "node_modules/amis/lib/WithStore",
        "node_modules/amis/lib/env",
        "node_modules/amis/lib/envOverwrite",
        "node_modules/amis/lib/utils/renderer-event",
        "node_modules/amis/lib/actions/Action",
        "node_modules/amis/lib/utils/debug"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/IconPickerIcons": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/locale/zh-CN": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/Animation": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib"
      ],
      "pkg": "p0"
    },
    "node_modules/hotkeys-js/dist/hotkeys.common.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/hotkeys-js/dist/hotkeys.common": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/hotkeys-js/index": {
      "type": "js",
      "deps": [
        "node_modules/hotkeys-js/dist/hotkeys.common.min",
        "node_modules/hotkeys-js/dist/hotkeys.common"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Remark": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_arrayReduce": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_deburrLetter": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_basePropertyOf"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/deburr": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_deburrLetter",
        "node_modules/lodash/toString"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_asciiWords": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_hasUnicodeWord": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_unicodeWords": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/words": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_asciiWords",
        "node_modules/lodash/_hasUnicodeWord",
        "node_modules/lodash/toString",
        "node_modules/lodash/_unicodeWords"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_createCompounder": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayReduce",
        "node_modules/lodash/deburr",
        "node_modules/lodash/words"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/camelCase": {
      "type": "js",
      "deps": [
        "node_modules/lodash/capitalize",
        "node_modules/lodash/_createCompounder"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/style": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/mapValues",
        "node_modules/lodash/camelCase"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Badge": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Action": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hotkeys-js/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Button",
        "node_modules/lodash/pick",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/renderers/Remark",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/TooltipWrapper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Alert": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/404": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ContextMenu": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/amis/lib/utils/dom"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/AsideNav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Avatar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Breadcrumb": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/RootClose",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Selection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/isEqual",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Collapse": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/CollapseGroup": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/moment/locale/zh-cn": {
      "type": "js",
      "deps": [
        "node_modules/moment/moment"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/cloneDeep": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseClone"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/hooks/use-set-state": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/isFunction"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/hooks/use-update-effect": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/hooks/index": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/hooks/use-set-state",
        "node_modules/amis/lib/hooks/use-update-effect"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/hooks/use-touch": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PickerColumn": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/isObject",
        "node_modules/lodash/cloneDeep",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/hooks/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/hooks/use-touch"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Picker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/PickerColumn"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/DaysView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/moment/moment",
        "node_modules/react/index",
        "node_modules/downshift/dist/downshift.cjs",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Picker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/YearsView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/moment/moment",
        "node_modules/react/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Picker",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/MonthsView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/moment/moment",
        "node_modules/react/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Picker",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/TimeView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/merge",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Picker",
        "node_modules/amis/lib/utils/helper",
        "node_modules/downshift/dist/downshift.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/QuartersView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/moment/moment",
        "node_modules/react/index",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/CalendarContainer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/calendar/DaysView",
        "node_modules/amis/lib/components/calendar/YearsView",
        "node_modules/amis/lib/components/calendar/MonthsView",
        "node_modules/amis/lib/components/calendar/TimeView",
        "node_modules/amis/lib/components/calendar/QuartersView"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/calendar/Calendar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/calendar/CalendarContainer",
        "node_modules/classnames/index",
        "node_modules/moment/moment",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/CalendarMobile": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/moment/moment",
        "node_modules/amis/lib/components/calendar/Calendar",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/DatePicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/moment/moment",
        "node_modules/moment/locale/zh-cn",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/calendar/Calendar",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/CalendarMobile",
        "node_modules/amis/lib/components/Input"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/DateRangePicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/moment/moment",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/calendar/Calendar",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/CalendarMobile",
        "node_modules/amis/lib/components/Input"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Drawer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/react-overlays/cjs/Portal",
        "node_modules/amis/lib/components/icons",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/ModalManager",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/sortablejs/Sortable.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Tabs": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/amis/lib/theme",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/lodash/debounce",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/sortablejs/Sortable.min"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Editor": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Layout": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/chunk": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseSlice",
        "node_modules/lodash/_isIterateeCall",
        "node_modules/lodash/toInteger"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/columnsSplit": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/chunk"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Radios": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/columnsSplit"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isString": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseGetTag",
        "node_modules/lodash/isArray",
        "node_modules/lodash/isObjectLike"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Range": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/range",
        "node_modules/lodash/keys",
        "node_modules/lodash/isString",
        "node_modules/lodash/difference",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Rating": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/SparkLine": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Switch": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.cjs": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/use-latest/dist/use-latest.cjs.prod": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/use-latest/dist/use-latest.cjs.dev": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/use-latest/dist/use-latest.cjs": {
      "type": "js",
      "deps": [
        "node_modules/use-latest/dist/use-latest.cjs.prod",
        "node_modules/use-latest/dist/use-latest.cjs.dev"
      ],
      "pkg": "p0"
    },
    "node_modules/use-composed-ref/dist/use-composed-ref.cjs": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.cjs": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose",
        "node_modules/react/index",
        "node_modules/use-latest/dist/use-latest.cjs",
        "node_modules/use-composed-ref/dist/use-composed-ref.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Textarea": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TitleBar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Tree": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Spinner"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ResultList": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TableSelection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TreeSelection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/InputBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Input",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/GroupedSelection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ChainedSelection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/times",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/AssociatedSelection": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/TableSelection",
        "node_modules/amis/lib/components/TreeSelection",
        "node_modules/amis/lib/components/ChainedSelection",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Transfer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Selection",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/ResultList",
        "node_modules/amis/lib/components/TableSelection",
        "node_modules/amis/lib/components/TreeSelection",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/components/AssociatedSelection",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/ChainedSelection"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TabsTransfer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/TableSelection",
        "node_modules/amis/lib/components/TreeSelection",
        "node_modules/amis/lib/components/ChainedSelection",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/Transfer",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/AssociatedSelection",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/icons",
        "node_modules/lodash/debounce"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ResultBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Input",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale",
        "node_modules/lodash/isPlainObject"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ListGroup": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/theme",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/defineProperty": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/arrayWithHoles": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/arrayLikeToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/arrayLikeToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/nonIterableRest": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/slicedToArray": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/arrayWithHoles",
        "node_modules/@babel/runtime/helpers/iterableToArrayLimit",
        "node_modules/@babel/runtime/helpers/unsupportedIterableToArray",
        "node_modules/@babel/runtime/helpers/nonIterableRest"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/objectWithoutProperties": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/KeyCode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/hooks/useMemo": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/ref": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/typeof",
        "node_modules/react-is/index",
        "node_modules/rc-util/lib/hooks/useMemo"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/classCallCheck": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/createClass": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/utils/supportUtil": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/utils/numberUtil": {
      "type": "js",
      "deps": [
        "node_modules/rc-input-number/lib/utils/supportUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/utils/MiniDecimal": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/rc-input-number/lib/utils/numberUtil",
        "node_modules/rc-input-number/lib/utils/supportUtil"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/isMobile": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/StepHandler": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/defineProperty",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-util/lib/isMobile"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/warning": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/hooks/useCursor": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/react/index",
        "node_modules/rc-util/lib/warning"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/Dom/canUseDom": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/hooks/useLayoutEffect": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/react/index",
        "node_modules/rc-util/lib/Dom/canUseDom"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/hooks/useUpdateEffect": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/react/index",
        "node_modules/rc-input-number/lib/hooks/useLayoutEffect"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/raf": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/hooks/useFrame": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/react/index",
        "node_modules/rc-util/lib/raf"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/InputNumber": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/defineProperty",
        "node_modules/@babel/runtime/helpers/typeof",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-util/lib/KeyCode",
        "node_modules/rc-util/lib/ref",
        "node_modules/rc-input-number/lib/utils/MiniDecimal",
        "node_modules/rc-input-number/lib/StepHandler",
        "node_modules/rc-input-number/lib/utils/numberUtil",
        "node_modules/rc-input-number/lib/hooks/useCursor",
        "node_modules/rc-input-number/lib/hooks/useUpdateEffect",
        "node_modules/rc-input-number/lib/hooks/useFrame"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-input-number/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/rc-input-number/lib/InputNumber"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/NumberInput": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/rc-input-number/lib/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ArrayInput": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/utils/helper",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/SearchBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale",
        "node_modules/lodash/debounce"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/AnchorNav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/lodash/find"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PullRefresh": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/hooks/index",
        "node_modules/amis/lib/hooks/use-touch",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/404",
        "node_modules/amis/lib/components/Alert",
        "node_modules/amis/lib/components/ContextMenu",
        "node_modules/amis/lib/components/AsideNav",
        "node_modules/amis/lib/components/Avatar",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/Breadcrumb",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/components/Collapse",
        "node_modules/amis/lib/components/CollapseGroup",
        "node_modules/amis/lib/components/DatePicker",
        "node_modules/amis/lib/components/DateRangePicker",
        "node_modules/amis/lib/components/Drawer",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/components/Editor",
        "node_modules/amis/lib/components/Html",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Layout",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/Radios",
        "node_modules/amis/lib/components/Range",
        "node_modules/amis/lib/components/Rating",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/SparkLine",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/Switch",
        "node_modules/amis/lib/components/Textarea",
        "node_modules/amis/lib/components/TitleBar",
        "node_modules/amis/lib/components/Toast",
        "node_modules/amis/lib/components/Tooltip",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/components/Tree",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/components/Transfer",
        "node_modules/amis/lib/components/TabsTransfer",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/ListGroup",
        "node_modules/amis/lib/components/NumberInput",
        "node_modules/amis/lib/components/ArrayInput",
        "node_modules/amis/lib/components/SearchBox",
        "node_modules/amis/lib/components/AnchorNav",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/ChainedSelection",
        "node_modules/amis/lib/components/TableSelection",
        "node_modules/amis/lib/components/TreeSelection",
        "node_modules/amis/lib/components/AssociatedSelection",
        "node_modules/amis/lib/components/PullRefresh"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/App": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/components/Layout",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/store/app",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Avatar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Avatar",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ButtonGroupSelect": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/ButtonGroup": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/renderers/Form/ButtonGroupSelect",
        "node_modules/amis/lib/factory"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ButtonToolbar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Breadcrumb": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/Breadcrumb"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/DropDownButton": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/RootClose",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputDate": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/moment/moment",
        "node_modules/moment/locale/zh-cn",
        "node_modules/amis/lib/components/DatePicker",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Calendar": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/Form/InputDate"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Collapse": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Collapse"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/CollapseGroup": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/CollapseGroup"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Color": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/CRUD": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/crud",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/lodash/pick",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/api",
        "node_modules/lodash/omit",
        "node_modules/lodash/find",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/components/Html",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Pagination": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Cards": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/store/list",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/QuickEdit": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/keycode/index",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/PopOver": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/RootClose"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/forEach": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayEach",
        "node_modules/lodash/_baseEach",
        "node_modules/lodash/_castFunction",
        "node_modules/lodash/isArray"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/ColumnToggler": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/lodash/cloneDeep",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/utils/RootClose"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Copyable": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/ColorScale": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/TableCell": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/QuickEdit",
        "node_modules/amis/lib/renderers/Copyable",
        "node_modules/amis/lib/renderers/PopOver",
        "node_modules/mobx-react/dist/index",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/utils/ColorScale",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseXor": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseDifference",
        "node_modules/lodash/_baseFlatten",
        "node_modules/lodash/_baseUniq"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/xor": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayFilter",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_baseXor",
        "node_modules/lodash/isArrayLikeObject"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/HeadCellFilterDropdown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/lodash/xor",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/HeadCellSearchDropdown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/TableRow": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-react/dist/index",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/TableBody": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Table/TableRow",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/mobx-react/dist/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/ItemActionsWrapper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/mobx-react/dist/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/TableContent": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Table/TableBody",
        "node_modules/mobx-react/dist/index",
        "node_modules/amis/lib/renderers/Table/ItemActionsWrapper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/image": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/lodash/memoize"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/exportExcel": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/renderers/Table/ColumnToggler",
        "node_modules/amis/lib/store/table",
        "node_modules/file-saver/dist/FileSaver.min",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/image",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/moment/moment"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Table/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/factory",
        "node_modules/lodash/forEach",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/renderers/Table/ColumnToggler",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/store/table",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/debounce",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/renderers/Table/TableCell",
        "node_modules/amis/lib/renderers/Table/HeadCellFilterDropdown",
        "node_modules/amis/lib/renderers/Table/HeadCellSearchDropdown",
        "node_modules/amis/lib/renderers/Table/TableContent",
        "node_modules/amis/lib/renderers/Table/TableBody",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/offset",
        "node_modules/amis/lib/utils/dom",
        "node_modules/amis/lib/renderers/Table/exportExcel"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Card": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Card": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/QuickEdit",
        "node_modules/amis/lib/renderers/PopOver",
        "node_modules/amis/lib/renderers/Table/index",
        "node_modules/amis/lib/renderers/Copyable",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/components/Card",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Card2": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Custom": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/memoize",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Date": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/moment/moment",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Dialog": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx/lib/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/store/modal",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Divider": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Each": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Flex": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/form",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/debounce",
        "node_modules/lodash/flatten",
        "node_modules/lodash/find",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Control": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Hidden": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/Decorators": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputText": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/downshift/dist/downshift.cjs",
        "node_modules/match-sorter/dist/match-sorter.cjs",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Input",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/actions/Decorators"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ListMenu": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputTag": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/downshift/dist/downshift.cjs",
        "node_modules/lodash/find",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/ListMenu"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputNumber": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/NumberInput",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Select"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Textarea": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/Textarea",
        "node_modules/amis/lib/components/icons",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/actions/Decorators"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Checkboxes": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/columnsSplit"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Checkbox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/CityArea": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Picker",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/hooks/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/PopUp"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputCity": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/CityArea",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/types",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ChartRadios": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputRating": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Rating"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Switch": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/Switch",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Radios": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/Radios",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ListSelect": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/BaiduMapPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/LocationPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/components/BaiduMapPicker",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/LocationPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/LocationPicker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Transfer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Transfer",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/Selection",
        "node_modules/amis/lib/components/ResultList"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PopOverContainer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TransferDropDown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Transfer",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Select": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/Select",
        "node_modules/lodash/find",
        "node_modules/lodash/debounce",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/renderers/Form/Transfer",
        "node_modules/amis/lib/components/TransferDropDown"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Static": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/renderers/Table/index",
        "node_modules/amis/lib/renderers/PopOver",
        "node_modules/amis/lib/renderers/QuickEdit",
        "node_modules/amis/lib/renderers/Copyable",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/omit"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputDateRange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/moment/locale/zh-cn",
        "node_modules/amis/lib/components/DateRangePicker",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis-formula/dist/doc": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/formula/plugin": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/formula/FuncList": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Collapse",
        "node_modules/amis/lib/components/CollapseGroup",
        "node_modules/amis/lib/components/SearchBox",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/formula/VariableList": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/components/TreeSelection",
        "node_modules/amis/lib/components/SearchBox",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/CodeMirror": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/resize-sensor"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/formula/Editor": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis-formula/dist/index",
        "node_modules/amis-formula/dist/doc",
        "node_modules/amis/lib/components/formula/plugin",
        "node_modules/amis/lib/components/formula/FuncList",
        "node_modules/amis/lib/components/formula/VariableList",
        "node_modules/amis/lib/components/CodeMirror",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/PickerContainer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Modal",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/Button"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/formula/Picker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/formula/Editor",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/components/PickerContainer",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputFormula": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/formula/Picker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputRepeat": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/Range"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputTree": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/Tree",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/TreeSelect": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/Tree",
        "node_modules/match-sorter/dist/match-sorter.cjs",
        "node_modules/lodash/debounce",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/utils/helper",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/Select"
      ],
      "pkg": "p0"
    },
    "node_modules/react-dropzone/dist/index": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index"
      ],
      "pkg": "p0"
    },
    "node_modules/blueimp-canvastoblob/js/canvas-to-blob": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/attr-accept/dist/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/once": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/getIterator": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/iterator": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArrayLike",
        "node_modules/amis/node_modules/async/internal/getIterator",
        "node_modules/lodash/keys"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/onlyOnce": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/breakLoop": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/eachOfLimit": {
      "type": "js",
      "deps": [
        "node_modules/lodash/noop",
        "node_modules/amis/node_modules/async/internal/once",
        "node_modules/amis/node_modules/async/internal/iterator",
        "node_modules/amis/node_modules/async/internal/onlyOnce",
        "node_modules/amis/node_modules/async/internal/breakLoop"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/slice": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/initialParams": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/async/internal/slice"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/setImmediate": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/async/internal/slice"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/asyncify": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isObject",
        "node_modules/amis/node_modules/async/internal/initialParams",
        "node_modules/amis/node_modules/async/internal/setImmediate"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/wrapAsync": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/async/asyncify"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/doParallelLimit": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/async/internal/eachOfLimit",
        "node_modules/amis/node_modules/async/internal/wrapAsync"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/internal/map": {
      "type": "js",
      "deps": [
        "node_modules/lodash/noop",
        "node_modules/amis/node_modules/async/internal/wrapAsync"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/node_modules/async/mapLimit": {
      "type": "js",
      "deps": [
        "node_modules/amis/node_modules/async/internal/doParallelLimit",
        "node_modules/amis/node_modules/async/internal/map"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputFile": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/lodash/find",
        "node_modules/lodash/isPlainObject",
        "node_modules/amis/node_modules/async/mapLimit",
        "node_modules/amis/lib/renderers/Form/InputImage",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/TooltipWrapper",
        "node_modules/react-dropzone/dist/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/merge",
        "node_modules/lodash/omit"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/handleAction": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Image": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/utils/handleAction"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputImage": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/react-dropzone/dist/index",
        "node_modules/blueimp-canvastoblob/js/canvas-to-blob",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Button",
        "node_modules/attr-accept/dist/index",
        "node_modules/amis/lib/renderers/Form/InputFile",
        "node_modules/amis/lib/renderers/Image",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/merge",
        "node_modules/lodash/omit"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/UUID": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/MatrixCheckboxes": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/MonthRangePicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/moment/moment",
        "node_modules/react-dom/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/calendar/Calendar",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/DateRangePicker",
        "node_modules/lodash/capitalize",
        "node_modules/amis/lib/components/CalendarMobile"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputMonthRange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/moment/locale/zh-cn",
        "node_modules/amis/lib/components/DateRangePicker",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/MonthRangePicker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputQuarterRange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/Form/InputDateRange",
        "node_modules/amis/lib/components/DateRangePicker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputYearRange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/Form/InputDateRange",
        "node_modules/amis/lib/components/DateRangePicker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputRange": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/isNumber",
        "node_modules/lodash/isObject",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/forEach",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/Range",
        "node_modules/amis/lib/components/NumberInput",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Combo": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/lodash/cloneDeep",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/store/combo",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/utils/helper",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/index",
        "node_modules/lodash/memoize",
        "node_modules/amis/lib/components/icons",
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputArray": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/store/combo",
        "node_modules/amis/lib/renderers/Form/Combo"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/types": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Field": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/SearchBox"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Value": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/InputBox",
        "node_modules/amis/lib/components/NumberInput",
        "node_modules/amis/lib/components/DatePicker",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/Switch",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/components/formula/Picker"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/InputSwitch": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Func": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/condition-builder/Expression"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Formula": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/InputBox"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Expression": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/condition-builder/Field",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/condition-builder/Value",
        "node_modules/amis/lib/components/condition-builder/InputSwitch",
        "node_modules/amis/lib/components/condition-builder/Func",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/condition-builder/Formula"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/config": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Item": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/condition-builder/types",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/condition-builder/Expression",
        "node_modules/amis/lib/components/condition-builder/config",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/components/GroupedSelection",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/GroupOrItem": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/theme",
        "node_modules/react/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/condition-builder/Group",
        "node_modules/amis/lib/components/condition-builder/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/Group": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/condition-builder/GroupOrItem",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/condition-builder/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/locale",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/condition-builder/Group",
        "node_modules/amis/lib/components/condition-builder/config",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/Animation"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ConditionBuilder": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/condition-builder/index",
        "node_modules/amis/lib/components/WithRemoteConfig"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputSubForm": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/lodash/omit",
        "node_modules/lodash/pick",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputExcel": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dropzone/dist/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputRichText": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Editor": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/components/Editor",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/actions/Decorators"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/DiffEditor": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/actions/Decorators"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputColor": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/ChainedSelect": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/union": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseFlatten",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_baseUniq",
        "node_modules/lodash/isArrayLikeObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/compact": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/lodash/_baseIntersection": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_SetCache",
        "node_modules/lodash/_arrayIncludes",
        "node_modules/lodash/_arrayIncludesWith",
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseUnary",
        "node_modules/lodash/_cacheHas"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_castArrayLikeObject": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isArrayLikeObject"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/intersectionBy": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseIntersection",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_baseRest",
        "node_modules/lodash/_castArrayLikeObject",
        "node_modules/lodash/last"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Cascader": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Select",
        "node_modules/lodash/intersectionBy",
        "node_modules/lodash/compact",
        "node_modules/lodash/find",
        "node_modules/lodash/uniqBy",
        "node_modules/amis/lib/components/Button"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/NestedSelect": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/components/Select",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/components/index",
        "node_modules/lodash/xor",
        "node_modules/lodash/union",
        "node_modules/lodash/compact",
        "node_modules/amis/lib/utils/RootClose",
        "node_modules/amis/lib/components/Cascader"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TransferPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/Transfer",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/PickerContainer",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/TransferPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/renderers/Form/Transfer",
        "node_modules/amis/lib/components/TransferPicker",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputTable": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/utils/SimpleMap",
        "node_modules/amis/lib/components/icons",
        "node_modules/lodash/find"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Picker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/classnames/index",
        "node_modules/amis/lib/types",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/components/Html",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/IconPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/match-sorter/dist/match-sorter.cjs",
        "node_modules/keycode/index",
        "node_modules/downshift/dist/downshift.cjs",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/IconPickerIcons",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Formula": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/FieldSet": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/Collapse"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/TabsTransfer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/react/index",
        "node_modules/lodash/find",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/renderers/Form/Transfer",
        "node_modules/amis/lib/components/TabsTransfer",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Selection"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TabsTransferPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/react/index",
        "node_modules/amis/lib/components/ResultBox",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/PickerContainer",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/TabsTransfer"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/TabsTransferPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/renderers/Form/TabsTransfer",
        "node_modules/amis/lib/components/TabsTransferPicker",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Selection"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/Group": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/InputGroup": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/amis/lib/renderers/Form/Item"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Grid": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/lodash/pick",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Grid2D": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/HBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/VBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Images": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/Image",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/List": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Button",
        "node_modules/amis/lib/components/Checkbox",
        "node_modules/amis/lib/store/list",
        "node_modules/lodash/omit",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/renderers/QuickEdit",
        "node_modules/amis/lib/renderers/PopOver",
        "node_modules/sortablejs/Sortable.min",
        "node_modules/amis/lib/renderers/Table/index",
        "node_modules/amis/lib/renderers/Copyable",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/anser/lib/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/escape-carriage/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/ansi-to-react/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/anser/lib/index",
        "node_modules/escape-carriage/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Log": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/ansi-to-react/lib/index",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Operation": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/scrollPosition": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/position"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Page": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/components/Alert2",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/utils/style",
        "node_modules/amis/lib/components/PullRefresh",
        "node_modules/amis/lib/utils/scrollPosition"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/PaginationWrapper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/pagination"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Panel": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/resize-sensor"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Plain": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Property": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Portlet": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/mapValues",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Spinner": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/factory",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Tabs": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/lodash/find",
        "node_modules/amis/lib/utils/helper",
        "node_modules/lodash/findIndex",
        "node_modules/amis/lib/components/Tabs",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/Scoped"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Tpl": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Mapping": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/WithStore",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/store/node",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-progress/lib/common": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-progress/lib/Line": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-progress/lib/common"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-progress/lib/hooks/useId": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/react/index",
        "node_modules/rc-util/lib/Dom/canUseDom"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-progress/lib/Circle": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/@babel/runtime/helpers/typeof",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-progress/lib/common",
        "node_modules/rc-progress/lib/hooks/useId"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-progress/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/rc-progress/lib/Line",
        "node_modules/rc-progress/lib/Circle"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Progress": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/rc-progress/lib/index",
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Progress": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/Progress"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Status": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Json": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/react-json-view/dist/main",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Link": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Link": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/components/Link"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Wizard": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/types",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Chart": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/classnames/index",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Container": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/SearchBox": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/react/index",
        "node_modules/amis/lib/components/SearchBox",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Service": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/store/service",
        "node_modules/amis/lib/types",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/components/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/SparkLine": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/components/SparkLine",
        "node_modules/amis/lib/factory",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/objectSpread": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/defineProperty"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/possibleConstructorReturn": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/typeof",
        "node_modules/@babel/runtime/helpers/assertThisInitialized"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/getPrototypeOf": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/inherits": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/setPrototypeOf"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/objectSpread2": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/defineProperty"
      ],
      "pkg": "p0"
    },
    "node_modules/redux/lib/redux": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/objectSpread2"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/actions/video": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/video-react/lib/utils/fullscreen": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/actions/player": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/video-react/lib/utils/fullscreen"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/reducers/player": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/video-react/lib/actions/video",
        "node_modules/video-react/lib/actions/player"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/reducers/operation": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/video-react/lib/actions/player"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/reducers/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/video-react/lib/reducers/player",
        "node_modules/video-react/lib/reducers/operation"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/Manager": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/redux/lib/redux",
        "node_modules/video-react/lib/reducers/index",
        "node_modules/video-react/lib/actions/player",
        "node_modules/video-react/lib/actions/video"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/BigPlayButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/LoadingSpinner": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/PosterImage": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/arrayWithoutHoles": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/arrayLikeToArray"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/iterableToArray": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/nonIterableSpread": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/toConsumableArray": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/arrayWithoutHoles",
        "node_modules/@babel/runtime/helpers/iterableToArray",
        "node_modules/@babel/runtime/helpers/unsupportedIterableToArray",
        "node_modules/@babel/runtime/helpers/nonIterableSpread"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/utils/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/toConsumableArray",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/Video": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/Bezel": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/utils/dom": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/Shortcut": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/defineProperty",
        "node_modules/@babel/runtime/helpers/toConsumableArray",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/video-react/lib/utils/dom"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/Slider": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/dom"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/PlayProgressBar": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/LoadProgressBar": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/MouseTimeDisplay": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/SeekBar": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/Slider",
        "node_modules/video-react/lib/components/control-bar/PlayProgressBar",
        "node_modules/video-react/lib/components/control-bar/LoadProgressBar",
        "node_modules/video-react/lib/components/control-bar/MouseTimeDisplay",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ProgressControl": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/dom",
        "node_modules/video-react/lib/components/control-bar/SeekBar"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/PlayToggle": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ForwardReplayControl": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ForwardControl": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/video-react/lib/components/control-bar/ForwardReplayControl"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ReplayControl": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/video-react/lib/components/control-bar/ForwardReplayControl"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/FullscreenToggle": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/time-controls/DurationDisplay": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/time-controls/TimeDivider": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/ClickableComponent": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/popup/Popup": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/popup/PopupButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/ClickableComponent",
        "node_modules/video-react/lib/components/popup/Popup"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/volume-control/VolumeLevel": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/volume-control/VolumeBar": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/Slider",
        "node_modules/video-react/lib/components/volume-control/VolumeLevel"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/VolumeMenuButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/popup/PopupButton",
        "node_modules/video-react/lib/components/volume-control/VolumeBar"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/menu/Menu": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/menu/MenuItem": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/menu/MenuButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/menu/Menu",
        "node_modules/video-react/lib/components/menu/MenuItem",
        "node_modules/video-react/lib/components/ClickableComponent"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/menu/MenuButton"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ControlBar": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/control-bar/ProgressControl",
        "node_modules/video-react/lib/components/control-bar/PlayToggle",
        "node_modules/video-react/lib/components/control-bar/ForwardControl",
        "node_modules/video-react/lib/components/control-bar/ReplayControl",
        "node_modules/video-react/lib/components/control-bar/FullscreenToggle",
        "node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay",
        "node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay",
        "node_modules/video-react/lib/components/time-controls/DurationDisplay",
        "node_modules/video-react/lib/components/time-controls/TimeDivider",
        "node_modules/video-react/lib/components/control-bar/VolumeMenuButton",
        "node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/utils/browser": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/Player": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread",
        "node_modules/@babel/runtime/helpers/defineProperty",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/Manager",
        "node_modules/video-react/lib/components/BigPlayButton",
        "node_modules/video-react/lib/components/LoadingSpinner",
        "node_modules/video-react/lib/components/PosterImage",
        "node_modules/video-react/lib/components/Video",
        "node_modules/video-react/lib/components/Bezel",
        "node_modules/video-react/lib/components/Shortcut",
        "node_modules/video-react/lib/components/control-bar/ControlBar",
        "node_modules/video-react/lib/utils/browser",
        "node_modules/video-react/lib/utils/dom",
        "node_modules/video-react/lib/utils/index",
        "node_modules/video-react/lib/utils/fullscreen"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/PlaybackRate": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/react/index",
        "node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton",
        "node_modules/video-react/lib/utils/index"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/components/control-bar/ClosedCaptionButton": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn",
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/assertThisInitialized",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/prop-types/index",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/video-react/lib/components/menu/MenuButton"
      ],
      "pkg": "p0"
    },
    "node_modules/video-react/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/video-react/lib/components/Player",
        "node_modules/video-react/lib/components/Video",
        "node_modules/video-react/lib/components/BigPlayButton",
        "node_modules/video-react/lib/components/LoadingSpinner",
        "node_modules/video-react/lib/components/PosterImage",
        "node_modules/video-react/lib/components/Slider",
        "node_modules/video-react/lib/components/Bezel",
        "node_modules/video-react/lib/components/Shortcut",
        "node_modules/video-react/lib/components/control-bar/ControlBar",
        "node_modules/video-react/lib/components/control-bar/PlayToggle",
        "node_modules/video-react/lib/components/control-bar/ForwardControl",
        "node_modules/video-react/lib/components/control-bar/ReplayControl",
        "node_modules/video-react/lib/components/control-bar/FullscreenToggle",
        "node_modules/video-react/lib/components/control-bar/ProgressControl",
        "node_modules/video-react/lib/components/control-bar/SeekBar",
        "node_modules/video-react/lib/components/control-bar/PlayProgressBar",
        "node_modules/video-react/lib/components/control-bar/LoadProgressBar",
        "node_modules/video-react/lib/components/control-bar/MouseTimeDisplay",
        "node_modules/video-react/lib/components/control-bar/VolumeMenuButton",
        "node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton",
        "node_modules/video-react/lib/components/control-bar/PlaybackRate",
        "node_modules/video-react/lib/components/control-bar/ClosedCaptionButton",
        "node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay",
        "node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay",
        "node_modules/video-react/lib/components/time-controls/DurationDisplay",
        "node_modules/video-react/lib/components/time-controls/TimeDivider",
        "node_modules/video-react/lib/components/menu/MenuButton",
        "node_modules/video-react/lib/actions/player",
        "node_modules/video-react/lib/actions/video",
        "node_modules/video-react/lib/reducers/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Video": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/video-react/lib/index",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/tpl"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Audio": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/upperFirst",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/tpl"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/Children/toArray": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/react/index",
        "node_modules/react-is/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/Dom/findDOMNode": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/react-dom/index"
      ],
      "pkg": "p0"
    },
    "node_modules/resize-observer-polyfill/dist/ResizeObserver": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/rc-resize-observer/lib/utils/observerUtil": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/resize-observer-polyfill/dist/ResizeObserver"
      ],
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/isNativeReflectConstruct": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@babel/runtime/helpers/createSuper": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/getPrototypeOf",
        "node_modules/@babel/runtime/helpers/isNativeReflectConstruct",
        "node_modules/@babel/runtime/helpers/possibleConstructorReturn"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/classCallCheck",
        "node_modules/@babel/runtime/helpers/createClass",
        "node_modules/@babel/runtime/helpers/inherits",
        "node_modules/@babel/runtime/helpers/createSuper",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-resize-observer/lib/Collection": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-resize-observer/lib/SingleObserver/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/objectSpread2",
        "node_modules/rc-util/lib/ref",
        "node_modules/react/index",
        "node_modules/rc-util/lib/Dom/findDOMNode",
        "node_modules/rc-resize-observer/lib/utils/observerUtil",
        "node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper",
        "node_modules/rc-resize-observer/lib/Collection"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-resize-observer/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/react/index",
        "node_modules/rc-util/lib/Children/toArray",
        "node_modules/rc-util/lib/warning",
        "node_modules/rc-resize-observer/lib/SingleObserver/index",
        "node_modules/rc-resize-observer/lib/Collection"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/hooks/useLayoutEffect": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/react/index",
        "node_modules/rc-util/lib/Dom/canUseDom"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-overflow/lib/Item": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectSpread2",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-resize-observer/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-util/lib/hooks/useState": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-overflow/lib/hooks/useBatchFrameState": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/react/index",
        "node_modules/rc-util/lib/raf",
        "node_modules/rc-util/lib/hooks/useState"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-overflow/lib/RawItem": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-overflow/lib/Item",
        "node_modules/rc-overflow/lib/Overflow"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-overflow/lib/Overflow": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/@babel/runtime/helpers/interopRequireWildcard",
        "node_modules/@babel/runtime/helpers/extends",
        "node_modules/@babel/runtime/helpers/objectSpread2",
        "node_modules/@babel/runtime/helpers/slicedToArray",
        "node_modules/@babel/runtime/helpers/objectWithoutProperties",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/rc-resize-observer/lib/index",
        "node_modules/rc-util/lib/hooks/useLayoutEffect",
        "node_modules/rc-overflow/lib/Item",
        "node_modules/rc-overflow/lib/hooks/useBatchFrameState",
        "node_modules/rc-overflow/lib/RawItem"
      ],
      "pkg": "p0"
    },
    "node_modules/rc-overflow/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/@babel/runtime/helpers/interopRequireDefault",
        "node_modules/rc-overflow/lib/Overflow"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Nav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/rc-overflow/lib/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/filter-schema",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/icon",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Badge",
        "node_modules/amis/lib/components/WithRemoteConfig",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/components/PopOverContainer",
        "node_modules/amis/lib/Scoped"
      ],
      "pkg": "p0"
    },
    "node_modules/immutability-helper/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Tasks": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/immutability-helper/index",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/components/Spinner",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Drawer": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Drawer",
        "node_modules/amis/lib/utils/helper",
        "node_modules/mobx/lib/index",
        "node_modules/react-dom/index",
        "node_modules/amis/lib/store/modal",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Wrapper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/style"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/IFrame": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/BarCode": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/qrcode.react/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/QRCode": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/classnames/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/qrcode.react/lib/index",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Icon": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Badge"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Carousel": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-transition-group/cjs/Transition",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Html",
        "node_modules/amis/lib/renderers/Image"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/AnchorNav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/AnchorNav",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/find"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Steps": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Steps": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Steps",
        "node_modules/amis/lib/components/WithRemoteConfig",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/TimelineItem": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Timeline": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/components/TimelineItem"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Timeline": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/components/Timeline",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/components/WithRemoteConfig"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Markdown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/LazyComponent",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/api"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/TableView": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Code": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/lodash/isEqual",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/WebComponent": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/lodash/mapValues"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/GridNav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/components/Badge"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/GridNav": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/components/GridNav",
        "node_modules/amis/lib/utils/handleAction",
        "node_modules/amis/lib/utils/validations"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/TooltipWrapper": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/style",
        "node_modules/amis/lib/components/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/compat": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/Form/Checkbox",
        "node_modules/amis/lib/renderers/Form/index",
        "node_modules/amis/lib/renderers/Form/FieldSet",
        "node_modules/amis/lib/renderers/Card",
        "node_modules/amis/lib/renderers/List",
        "node_modules/amis/lib/renderers/Form/ButtonGroupSelect",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/renderers/Form/InputFile",
        "node_modules/amis/lib/renderers/Form/InputImage",
        "node_modules/amis/lib/renderers/Form/InputRichText",
        "node_modules/amis/lib/renderers/Grid",
        "node_modules/amis/lib/renderers/HBox"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/schemaExtend": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/helper"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/themes/ang": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/themes/cxd": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/themes/dark": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/themes/antd": {
      "type": "js",
      "deps": [
        "node_modules/amis/lib/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/LoopAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/actions/Action",
        "node_modules/amis/lib/utils/tpl-builtin"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/BreakAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/ContinueAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/SwitchAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/ParallelAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/CustomAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/BroadcastAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/CmptAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/AjaxAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/errors",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/CopyAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/DialogAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/DrawerAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/EmailAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/lodash/pick",
        "node_modules/lodash/mapValues",
        "node_modules/amis/node_modules/qs/lib/index",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/LinkAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/ToastAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/PageAction": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/actions/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/actions/LoopAction",
        "node_modules/amis/lib/actions/BreakAction",
        "node_modules/amis/lib/actions/ContinueAction",
        "node_modules/amis/lib/actions/SwitchAction",
        "node_modules/amis/lib/actions/ParallelAction",
        "node_modules/amis/lib/actions/CustomAction",
        "node_modules/amis/lib/actions/BroadcastAction",
        "node_modules/amis/lib/actions/CmptAction",
        "node_modules/amis/lib/actions/AjaxAction",
        "node_modules/amis/lib/actions/CopyAction",
        "node_modules/amis/lib/actions/DialogAction",
        "node_modules/amis/lib/actions/DrawerAction",
        "node_modules/amis/lib/actions/EmailAction",
        "node_modules/amis/lib/actions/LinkAction",
        "node_modules/amis/lib/actions/ToastAction",
        "node_modules/amis/lib/actions/PageAction",
        "node_modules/amis/lib/actions/Decorators",
        "node_modules/amis/lib/actions/Action"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/tpl",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/utils/resize-sensor",
        "node_modules/amis/lib/renderers/Form/IconPickerIcons",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/store/index",
        "node_modules/amis/lib/locale",
        "node_modules/amis/lib/locale/zh-CN",
        "node_modules/amis/lib/utils/debug",
        "node_modules/amis/lib/utils/Animation",
        "node_modules/amis/lib/Schema",
        "node_modules/amis/lib/renderers/Action",
        "node_modules/amis/lib/renderers/Alert",
        "node_modules/amis/lib/renderers/App",
        "node_modules/amis/lib/renderers/Avatar",
        "node_modules/amis/lib/renderers/Remark",
        "node_modules/amis/lib/renderers/ButtonGroup",
        "node_modules/amis/lib/renderers/Form/ButtonToolbar",
        "node_modules/amis/lib/renderers/Breadcrumb",
        "node_modules/amis/lib/renderers/DropDownButton",
        "node_modules/amis/lib/renderers/Calendar",
        "node_modules/amis/lib/renderers/Collapse",
        "node_modules/amis/lib/renderers/CollapseGroup",
        "node_modules/amis/lib/renderers/Color",
        "node_modules/amis/lib/renderers/CRUD",
        "node_modules/amis/lib/renderers/Pagination",
        "node_modules/amis/lib/renderers/Cards",
        "node_modules/amis/lib/renderers/Card",
        "node_modules/amis/lib/renderers/Card2",
        "node_modules/amis/lib/renderers/Custom",
        "node_modules/amis/lib/renderers/Date",
        "node_modules/amis/lib/renderers/Dialog",
        "node_modules/amis/lib/renderers/Divider",
        "node_modules/amis/lib/renderers/Each",
        "node_modules/amis/lib/renderers/Flex",
        "node_modules/amis/lib/renderers/Form/index",
        "node_modules/amis/lib/renderers/Form/wrapControl",
        "node_modules/amis/lib/renderers/Form/Control",
        "node_modules/amis/lib/renderers/Form/Hidden",
        "node_modules/amis/lib/renderers/Form/InputText",
        "node_modules/amis/lib/renderers/Form/InputTag",
        "node_modules/amis/lib/renderers/Form/InputNumber",
        "node_modules/amis/lib/renderers/Form/Textarea",
        "node_modules/amis/lib/renderers/Form/Checkboxes",
        "node_modules/amis/lib/renderers/Form/Checkbox",
        "node_modules/amis/lib/renderers/Form/InputCity",
        "node_modules/amis/lib/renderers/Form/ChartRadios",
        "node_modules/amis/lib/renderers/Form/InputRating",
        "node_modules/amis/lib/renderers/Form/Switch",
        "node_modules/amis/lib/renderers/Form/Radios",
        "node_modules/amis/lib/renderers/Form/ListSelect",
        "node_modules/amis/lib/renderers/Form/LocationPicker",
        "node_modules/amis/lib/renderers/Form/Select",
        "node_modules/amis/lib/renderers/Form/Static",
        "node_modules/amis/lib/renderers/Form/InputDate",
        "node_modules/amis/lib/renderers/Form/InputDateRange",
        "node_modules/amis/lib/renderers/Form/InputFormula",
        "node_modules/amis/lib/renderers/Form/InputRepeat",
        "node_modules/amis/lib/renderers/Form/InputTree",
        "node_modules/amis/lib/renderers/Form/TreeSelect",
        "node_modules/amis/lib/renderers/Form/InputImage",
        "node_modules/amis/lib/renderers/Form/InputFile",
        "node_modules/amis/lib/renderers/Form/UUID",
        "node_modules/amis/lib/renderers/Form/MatrixCheckboxes",
        "node_modules/amis/lib/renderers/Form/InputMonthRange",
        "node_modules/amis/lib/renderers/Form/InputQuarterRange",
        "node_modules/amis/lib/renderers/Form/InputYearRange",
        "node_modules/amis/lib/renderers/Form/InputRange",
        "node_modules/amis/lib/renderers/Form/InputArray",
        "node_modules/amis/lib/renderers/Form/Combo",
        "node_modules/amis/lib/renderers/Form/ConditionBuilder",
        "node_modules/amis/lib/renderers/Form/InputSubForm",
        "node_modules/amis/lib/renderers/Form/InputExcel",
        "node_modules/amis/lib/renderers/Form/InputRichText",
        "node_modules/amis/lib/renderers/Form/Editor",
        "node_modules/amis/lib/renderers/Form/DiffEditor",
        "node_modules/amis/lib/renderers/Form/InputColor",
        "node_modules/amis/lib/renderers/Form/ChainedSelect",
        "node_modules/amis/lib/renderers/Form/NestedSelect",
        "node_modules/amis/lib/renderers/Form/Transfer",
        "node_modules/amis/lib/renderers/Form/TransferPicker",
        "node_modules/amis/lib/renderers/Form/InputTable",
        "node_modules/amis/lib/renderers/Form/Picker",
        "node_modules/amis/lib/renderers/Form/IconPicker",
        "node_modules/amis/lib/renderers/Form/Formula",
        "node_modules/amis/lib/renderers/Form/FieldSet",
        "node_modules/amis/lib/renderers/Form/TabsTransfer",
        "node_modules/amis/lib/renderers/Form/TabsTransferPicker",
        "node_modules/amis/lib/renderers/Form/Group",
        "node_modules/amis/lib/renderers/Form/InputGroup",
        "node_modules/amis/lib/renderers/Grid",
        "node_modules/amis/lib/renderers/Grid2D",
        "node_modules/amis/lib/renderers/HBox",
        "node_modules/amis/lib/renderers/VBox",
        "node_modules/amis/lib/renderers/Image",
        "node_modules/amis/lib/renderers/Images",
        "node_modules/amis/lib/renderers/List",
        "node_modules/amis/lib/renderers/Log",
        "node_modules/amis/lib/renderers/Operation",
        "node_modules/amis/lib/renderers/Page",
        "node_modules/amis/lib/renderers/PaginationWrapper",
        "node_modules/amis/lib/renderers/Panel",
        "node_modules/amis/lib/renderers/Plain",
        "node_modules/amis/lib/renderers/Property",
        "node_modules/amis/lib/renderers/Portlet",
        "node_modules/amis/lib/renderers/Spinner",
        "node_modules/amis/lib/renderers/Table/index",
        "node_modules/amis/lib/renderers/Tabs",
        "node_modules/amis/lib/renderers/Tpl",
        "node_modules/amis/lib/renderers/Mapping",
        "node_modules/amis/lib/renderers/Progress",
        "node_modules/amis/lib/renderers/Status",
        "node_modules/amis/lib/renderers/Json",
        "node_modules/amis/lib/renderers/Link",
        "node_modules/amis/lib/renderers/Wizard",
        "node_modules/amis/lib/renderers/Chart",
        "node_modules/amis/lib/renderers/Container",
        "node_modules/amis/lib/renderers/SearchBox",
        "node_modules/amis/lib/renderers/Service",
        "node_modules/amis/lib/renderers/SparkLine",
        "node_modules/amis/lib/renderers/Video",
        "node_modules/amis/lib/renderers/Audio",
        "node_modules/amis/lib/renderers/Nav",
        "node_modules/amis/lib/renderers/Tasks",
        "node_modules/amis/lib/renderers/Drawer",
        "node_modules/amis/lib/renderers/Wrapper",
        "node_modules/amis/lib/renderers/IFrame",
        "node_modules/amis/lib/renderers/BarCode",
        "node_modules/amis/lib/renderers/QRCode",
        "node_modules/amis/lib/renderers/Icon",
        "node_modules/amis/lib/renderers/Carousel",
        "node_modules/amis/lib/renderers/AnchorNav",
        "node_modules/amis/lib/renderers/Steps",
        "node_modules/amis/lib/renderers/Timeline",
        "node_modules/amis/lib/renderers/Markdown",
        "node_modules/amis/lib/renderers/TableView",
        "node_modules/amis/lib/renderers/Code",
        "node_modules/amis/lib/renderers/WebComponent",
        "node_modules/amis/lib/renderers/GridNav",
        "node_modules/amis/lib/renderers/TooltipWrapper",
        "node_modules/amis/lib/Scoped",
        "node_modules/amis/lib/renderers/Form/Item",
        "node_modules/amis/lib/compat",
        "node_modules/amis/lib/envOverwrite",
        "node_modules/amis/lib/schemaExtend",
        "node_modules/amis/lib/themes/ang",
        "node_modules/amis/lib/themes/cxd",
        "node_modules/amis/lib/themes/dark",
        "node_modules/amis/lib/themes/antd",
        "node_modules/amis/lib/utils/tpl-builtin",
        "node_modules/amis/lib/utils/validations",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/renderers/Form/Options",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/actions/index",
        "node_modules/amis/lib/components/index"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/bind": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/utils": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/helpers/bind"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/buildURL": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/InterceptorManager": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/transformData": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/cancel/isCancel": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/normalizeHeaderName": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/enhanceError": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/createError": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/core/enhanceError"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/settle": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/core/createError"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/cookies": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/isAbsoluteURL": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/combineURLs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/buildFullPath": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/helpers/isAbsoluteURL",
        "node_modules/axios/lib/helpers/combineURLs"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/parseHeaders": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/isURLSameOrigin": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/adapters/xhr": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils",
        "node_modules/axios/lib/core/settle",
        "node_modules/axios/lib/helpers/cookies",
        "node_modules/axios/lib/helpers/buildURL",
        "node_modules/axios/lib/core/buildFullPath",
        "node_modules/axios/lib/helpers/parseHeaders",
        "node_modules/axios/lib/helpers/isURLSameOrigin",
        "node_modules/axios/lib/core/createError"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/defaults": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils",
        "node_modules/axios/lib/helpers/normalizeHeaderName",
        "node_modules/axios/lib/adapters/xhr"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/dispatchRequest": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils",
        "node_modules/axios/lib/core/transformData",
        "node_modules/axios/lib/cancel/isCancel",
        "node_modules/axios/lib/defaults"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/mergeConfig": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/core/Axios": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils",
        "node_modules/axios/lib/helpers/buildURL",
        "node_modules/axios/lib/core/InterceptorManager",
        "node_modules/axios/lib/core/dispatchRequest",
        "node_modules/axios/lib/core/mergeConfig"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/cancel/Cancel": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/cancel/CancelToken": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/cancel/Cancel"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/spread": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/helpers/isAxiosError": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/axios/lib/axios": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/utils",
        "node_modules/axios/lib/helpers/bind",
        "node_modules/axios/lib/core/Axios",
        "node_modules/axios/lib/core/mergeConfig",
        "node_modules/axios/lib/defaults",
        "node_modules/axios/lib/cancel/Cancel",
        "node_modules/axios/lib/cancel/CancelToken",
        "node_modules/axios/lib/cancel/isCancel",
        "node_modules/axios/lib/helpers/spread",
        "node_modules/axios/lib/helpers/isAxiosError"
      ],
      "pkg": "p0"
    },
    "node_modules/axios/index": {
      "type": "js",
      "deps": [
        "node_modules/axios/lib/axios"
      ],
      "pkg": "p0"
    },
    "node_modules/deep-diff/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/json-ast-comments/lib/json": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/json-ast-comments/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/json-ast-comments/lib/json"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/each": {
      "type": "js",
      "deps": [
        "node_modules/lodash/forEach"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/pickBy": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_basePickBy",
        "node_modules/lodash/_getAllKeysIn"
      ],
      "pkg": "p0"
    },
    "node_modules/toggle-selection/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/copy-to-clipboard/index": {
      "type": "js",
      "deps": [
        "node_modules/toggle-selection/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/renderers/Form/CityDB": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/cropperjs/dist/cropper": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-cropper/dist/react-cropper.umd": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/cropperjs/dist/cropper"
      ],
      "pkg": "p0"
    },
    "node_modules/exceljs/dist/exceljs.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/tinymce": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/icons/default/icons": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/icons/default/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/icons/default/icons"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/themes/silver/theme": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/themes/silver/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/themes/silver/theme"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/advlist/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/advlist/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/advlist/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/autolink/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/autolink/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/autolink/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/lists/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/lists/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/lists/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/link/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/link/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/link/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/image/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/image/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/image/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/charmap/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/charmap/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/charmap/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/print/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/print/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/print/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/preview/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/preview/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/preview/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/anchor/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/anchor/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/anchor/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/searchreplace/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/searchreplace/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/searchreplace/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/visualblocks/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/visualblocks/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/visualblocks/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/code/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/code/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/code/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/fullscreen/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/fullscreen/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/fullscreen/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/insertdatetime/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/insertdatetime/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/insertdatetime/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/media/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/media/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/media/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/table/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/table/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/table/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/paste/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/paste/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/paste/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/help/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/help/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/help/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/wordcount/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/wordcount/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/wordcount/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/hr/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/hr/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/hr/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/pagebreak/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/pagebreak/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/pagebreak/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/visualchars/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/visualchars/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/visualchars/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/template/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/template/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/template/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/nonbreaking/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/nonbreaking/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/nonbreaking/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/emoticons/plugin": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/emoticons/index": {
      "type": "js",
      "deps": [
        "node_modules/tinymce/plugins/emoticons/plugin"
      ],
      "pkg": "p0"
    },
    "node_modules/tinymce/plugins/emoticons/js/emojis": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Tinymce": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/tinymce/tinymce",
        "node_modules/tinymce/icons/default/index",
        "node_modules/tinymce/themes/silver/index",
        "node_modules/tinymce/plugins/advlist/index",
        "node_modules/tinymce/plugins/autolink/index",
        "node_modules/tinymce/plugins/lists/index",
        "node_modules/tinymce/plugins/link/index",
        "node_modules/tinymce/plugins/image/index",
        "node_modules/tinymce/plugins/charmap/index",
        "node_modules/tinymce/plugins/print/index",
        "node_modules/tinymce/plugins/preview/index",
        "node_modules/tinymce/plugins/anchor/index",
        "node_modules/tinymce/plugins/searchreplace/index",
        "node_modules/tinymce/plugins/visualblocks/index",
        "node_modules/tinymce/plugins/code/index",
        "node_modules/tinymce/plugins/fullscreen/index",
        "node_modules/tinymce/plugins/insertdatetime/index",
        "node_modules/tinymce/plugins/media/index",
        "node_modules/tinymce/plugins/table/index",
        "node_modules/tinymce/plugins/paste/index",
        "node_modules/tinymce/plugins/help/index",
        "node_modules/tinymce/plugins/wordcount/index",
        "node_modules/tinymce/plugins/hr/index",
        "node_modules/tinymce/plugins/pagebreak/index",
        "node_modules/tinymce/plugins/visualchars/index",
        "node_modules/tinymce/plugins/template/index",
        "node_modules/tinymce/plugins/nonbreaking/index",
        "node_modules/tinymce/plugins/emoticons/index",
        "node_modules/tinymce/plugins/emoticons/js/emojis"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/froala_editor.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/align.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/colors.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/char_counter.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/code_view.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/draggable.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/entities.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/font_family.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/font_size.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/forms.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/fullscreen.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/help.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/image.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/inline_class.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/inline_style.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/line_breaker.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/line_height.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/link.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/lists.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/paragraph_format.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/paragraph_style.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/print.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/quick_insert.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/quote.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/save.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/special_characters.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/table.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/url.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/video.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/plugins/word_paste.min": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/froala-editor/js/languages/zh_cn": {
      "type": "js",
      "deps": [
        "node_modules/froala-editor/js/froala_editor.min"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/RichText": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/froala-editor/js/froala_editor.min",
        "node_modules/froala-editor/js/plugins/align.min",
        "node_modules/froala-editor/js/plugins/colors.min",
        "node_modules/froala-editor/js/plugins/char_counter.min",
        "node_modules/froala-editor/js/plugins/code_view.min",
        "node_modules/froala-editor/js/plugins/draggable.min",
        "node_modules/froala-editor/js/plugins/entities.min",
        "node_modules/froala-editor/js/plugins/font_family.min",
        "node_modules/froala-editor/js/plugins/font_size.min",
        "node_modules/froala-editor/js/plugins/forms.min",
        "node_modules/froala-editor/js/plugins/fullscreen.min",
        "node_modules/froala-editor/js/plugins/help.min",
        "node_modules/froala-editor/js/plugins/image.min",
        "node_modules/froala-editor/js/plugins/inline_class.min",
        "node_modules/froala-editor/js/plugins/inline_style.min",
        "node_modules/froala-editor/js/plugins/line_breaker.min",
        "node_modules/froala-editor/js/plugins/line_height.min",
        "node_modules/froala-editor/js/plugins/link.min",
        "node_modules/froala-editor/js/plugins/lists.min",
        "node_modules/froala-editor/js/plugins/paragraph_format.min",
        "node_modules/froala-editor/js/plugins/paragraph_style.min",
        "node_modules/froala-editor/js/plugins/print.min",
        "node_modules/froala-editor/js/plugins/quick_insert.min",
        "node_modules/froala-editor/js/plugins/quote.min",
        "node_modules/froala-editor/js/plugins/save.min",
        "node_modules/froala-editor/js/plugins/special_characters.min",
        "node_modules/froala-editor/js/plugins/table.min",
        "node_modules/froala-editor/js/plugins/url.min",
        "node_modules/froala-editor/js/plugins/video.min",
        "node_modules/froala-editor/js/plugins/word_paste.min",
        "node_modules/froala-editor/js/languages/zh_cn"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/forOwn": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseForOwn",
        "node_modules/lodash/_castFunction"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/_baseMap": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_baseEach",
        "node_modules/lodash/isArrayLike"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/map": {
      "type": "js",
      "deps": [
        "node_modules/lodash/_arrayMap",
        "node_modules/lodash/_baseIteratee",
        "node_modules/lodash/_baseMap",
        "node_modules/lodash/isArray"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/flattenNames": {
      "type": "js",
      "deps": [
        "node_modules/lodash/isString",
        "node_modules/lodash/forOwn",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/map"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/mergeClasses": {
      "type": "js",
      "deps": [
        "node_modules/lodash/forOwn",
        "node_modules/lodash/cloneDeep"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/autoprefix": {
      "type": "js",
      "deps": [
        "node_modules/lodash/forOwn"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/components/hover": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/components/active": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/loop": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/reactcss/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/reactcss/lib/flattenNames",
        "node_modules/reactcss/lib/mergeClasses",
        "node_modules/reactcss/lib/autoprefix",
        "node_modules/reactcss/lib/components/hover",
        "node_modules/reactcss/lib/components/active",
        "node_modules/reactcss/lib/loop"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/alpha": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/checkboard": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Checkboard": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/checkboard"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Alpha": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/alpha",
        "node_modules/react-color/lib/components/common/Checkboard"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/EditableInput": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/hue": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Hue": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/hue"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Raised": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/throttle": {
      "type": "js",
      "deps": [
        "node_modules/lodash/debounce",
        "node_modules/lodash/isObject"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/saturation": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Saturation": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/throttle",
        "node_modules/react-color/lib/helpers/saturation"
      ],
      "pkg": "p0"
    },
    "node_modules/tinycolor2/tinycolor": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/color": {
      "type": "js",
      "deps": [
        "node_modules/lodash/each",
        "node_modules/tinycolor2/tinycolor"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/ColorWrap": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/lodash/debounce",
        "node_modules/react-color/lib/helpers/color"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/helpers/interaction": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/Swatch": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/interaction",
        "node_modules/react-color/lib/components/common/Checkboard"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/common/index": {
      "type": "js",
      "deps": [
        "node_modules/react-color/lib/components/common/Alpha",
        "node_modules/react-color/lib/components/common/Checkboard",
        "node_modules/react-color/lib/components/common/EditableInput",
        "node_modules/react-color/lib/components/common/Hue",
        "node_modules/react-color/lib/components/common/Raised",
        "node_modules/react-color/lib/components/common/Saturation",
        "node_modules/react-color/lib/components/common/ColorWrap",
        "node_modules/react-color/lib/components/common/Swatch"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/alpha/AlphaPointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/alpha/Alpha": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/alpha/AlphaPointer"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/block/BlockSwatches": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/block/Block": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/block/BlockSwatches"
      ],
      "pkg": "p0"
    },
    "node_modules/material-colors/dist/colors": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/circle/CircleSwatch": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/circle/Circle": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/lodash/merge",
        "node_modules/material-colors/dist/colors",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/circle/CircleSwatch"
      ],
      "pkg": "p0"
    },
    "node_modules/lodash/isUndefined": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/@icons/material/UnfoldMoreHorizontalIcon": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/chrome/ChromeFields": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/lodash/isUndefined",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/@icons/material/UnfoldMoreHorizontalIcon"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/chrome/ChromePointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/chrome/ChromePointerCircle": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/chrome/Chrome": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/chrome/ChromeFields",
        "node_modules/react-color/lib/components/chrome/ChromePointer",
        "node_modules/react-color/lib/components/chrome/ChromePointerCircle"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/compact/CompactColor": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/compact/CompactFields": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/compact/Compact": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/compact/CompactColor",
        "node_modules/react-color/lib/components/compact/CompactFields"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/github/GithubSwatch": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/github/Github": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/github/GithubSwatch"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/hue/HuePointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/hue/Hue": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/hue/HuePointer"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/material/Material": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/PhotoshopFields": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/PhotoshopPointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/PhotoshopButton": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/PhotoshopPreviews": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/photoshop/Photoshop": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/photoshop/PhotoshopFields",
        "node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle",
        "node_modules/react-color/lib/components/photoshop/PhotoshopPointer",
        "node_modules/react-color/lib/components/photoshop/PhotoshopButton",
        "node_modules/react-color/lib/components/photoshop/PhotoshopPreviews"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/sketch/SketchFields": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/sketch/SketchPresetColors": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/sketch/Sketch": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/sketch/SketchFields",
        "node_modules/react-color/lib/components/sketch/SketchPresetColors"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/slider/SliderSwatch": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/slider/SliderSwatches": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/components/slider/SliderSwatch"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/slider/SliderPointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/slider/Slider": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/slider/SliderSwatches",
        "node_modules/react-color/lib/components/slider/SliderPointer"
      ],
      "pkg": "p0"
    },
    "node_modules/@icons/material/CheckIcon": {
      "type": "js",
      "deps": [
        "node_modules/react/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/swatches/SwatchesColor": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/@icons/material/CheckIcon"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/swatches/SwatchesGroup": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/react-color/lib/components/swatches/SwatchesColor"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/swatches/Swatches": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/lodash/merge",
        "node_modules/material-colors/dist/colors",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/swatches/SwatchesGroup"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/twitter/Twitter": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/map",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/google/GooglePointerCircle": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/prop-types/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/google/GooglePointer": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/prop-types/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/google/GoogleFields": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/reactcss/lib/index",
        "node_modules/react-color/lib/helpers/color",
        "node_modules/react-color/lib/components/common/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/components/google/Google": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/reactcss/lib/index",
        "node_modules/lodash/merge",
        "node_modules/react-color/lib/components/common/index",
        "node_modules/react-color/lib/components/google/GooglePointerCircle",
        "node_modules/react-color/lib/components/google/GooglePointer",
        "node_modules/react-color/lib/components/google/GoogleFields"
      ],
      "pkg": "p0"
    },
    "node_modules/react-color/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/react-color/lib/components/alpha/Alpha",
        "node_modules/react-color/lib/components/block/Block",
        "node_modules/react-color/lib/components/circle/Circle",
        "node_modules/react-color/lib/components/chrome/Chrome",
        "node_modules/react-color/lib/components/compact/Compact",
        "node_modules/react-color/lib/components/github/Github",
        "node_modules/react-color/lib/components/hue/Hue",
        "node_modules/react-color/lib/components/material/Material",
        "node_modules/react-color/lib/components/photoshop/Photoshop",
        "node_modules/react-color/lib/components/sketch/Sketch",
        "node_modules/react-color/lib/components/slider/Slider",
        "node_modules/react-color/lib/components/swatches/Swatches",
        "node_modules/react-color/lib/components/twitter/Twitter",
        "node_modules/react-color/lib/components/google/Google",
        "node_modules/react-color/lib/components/common/ColorWrap"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/ColorPicker": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/react-color/lib/index",
        "node_modules/amis/lib/components/icons",
        "node_modules/amis/lib/components/Overlay",
        "node_modules/uncontrollable/lib/cjs/index",
        "node_modules/amis/lib/components/PopOver",
        "node_modules/amis/lib/components/PopUp",
        "node_modules/amis/lib/theme",
        "node_modules/amis/lib/utils/helper",
        "node_modules/amis/lib/locale"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/dist/echarts": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/echarts-stat/dist/ecStat": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/echarts-stat/index": {
      "type": "js",
      "deps": [
        "node_modules/echarts-stat/dist/ecStat"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/node_modules/tslib/tslib": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/zrender/lib/core/platform": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/zrender/lib/core/util": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/platform"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/dataTool/gexf": {
      "type": "js",
      "deps": [
        "node_modules/echarts/node_modules/tslib/tslib",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/dataTool/prepareBoxplotData": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/echarts/extension/dataTool/index": {
      "type": "js",
      "deps": [
        "node_modules/echarts/node_modules/tslib/tslib",
        "node_modules/echarts/dist/echarts",
        "node_modules/echarts/extension/dataTool/gexf",
        "node_modules/echarts/extension/dataTool/prepareBoxplotData"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/bmap/BMapCoordSys": {
      "type": "js",
      "deps": [
        "node_modules/echarts/dist/echarts"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/bmap/BMapModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/node_modules/tslib/tslib",
        "node_modules/echarts/dist/echarts"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/bmap/BMapView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/node_modules/tslib/tslib",
        "node_modules/echarts/dist/echarts"
      ],
      "pkg": "p0"
    },
    "node_modules/echarts/extension/bmap/bmap": {
      "type": "js",
      "deps": [
        "node_modules/echarts/node_modules/tslib/tslib",
        "node_modules/echarts/dist/echarts",
        "node_modules/echarts/extension/bmap/BMapCoordSys",
        "node_modules/echarts/extension/bmap/BMapModel",
        "node_modules/echarts/extension/bmap/BMapView"
      ],
      "pkg": "p0"
    },
    "node_modules/mpegts.js/dist/mpegts": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/hls.js/dist/hls": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/Barcode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE39/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/constants": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode",
        "node_modules/jsbarcode/bin/barcodes/CODE128/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/auto": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128",
        "node_modules/jsbarcode/bin/barcodes/CODE128/auto"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128",
        "node_modules/jsbarcode/bin/barcodes/CODE128/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128",
        "node_modules/jsbarcode/bin/barcodes/CODE128/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128",
        "node_modules/jsbarcode/bin/barcodes/CODE128/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/CODE128/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO",
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A",
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B",
        "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder",
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder",
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder",
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder",
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder",
        "node_modules/jsbarcode/bin/barcodes/Barcode",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/EAN_UPC/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/ITF/constants": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/ITF/ITF": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/ITF/constants",
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/ITF/ITF14": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/ITF/ITF"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/ITF/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/ITF/ITF",
        "node_modules/jsbarcode/bin/barcodes/ITF/ITF14"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/MSI": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/checksums": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/MSI10": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI",
        "node_modules/jsbarcode/bin/barcodes/MSI/checksums"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/MSI11": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI",
        "node_modules/jsbarcode/bin/barcodes/MSI/checksums"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/MSI1010": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI",
        "node_modules/jsbarcode/bin/barcodes/MSI/checksums"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/MSI1110": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI",
        "node_modules/jsbarcode/bin/barcodes/MSI/checksums"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/MSI/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI",
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI10",
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI11",
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI1010",
        "node_modules/jsbarcode/bin/barcodes/MSI/MSI1110"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/pharmacode/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/codabar/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/GenericBarcode/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/Barcode"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/barcodes/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/CODE39/index",
        "node_modules/jsbarcode/bin/barcodes/CODE128/index",
        "node_modules/jsbarcode/bin/barcodes/EAN_UPC/index",
        "node_modules/jsbarcode/bin/barcodes/ITF/index",
        "node_modules/jsbarcode/bin/barcodes/MSI/index",
        "node_modules/jsbarcode/bin/barcodes/pharmacode/index",
        "node_modules/jsbarcode/bin/barcodes/codabar/index",
        "node_modules/jsbarcode/bin/barcodes/GenericBarcode/index"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/merge": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/linearizeEncodings": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/fixOptions": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/optionsFromStrings": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/options/defaults": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/getOptionsFromElement": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/help/optionsFromStrings",
        "node_modules/jsbarcode/bin/options/defaults"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/renderers/shared": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/help/merge"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/renderers/canvas": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/help/merge",
        "node_modules/jsbarcode/bin/renderers/shared"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/renderers/svg": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/help/merge",
        "node_modules/jsbarcode/bin/renderers/shared"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/renderers/object": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/renderers/index": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/renderers/canvas",
        "node_modules/jsbarcode/bin/renderers/svg",
        "node_modules/jsbarcode/bin/renderers/object"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/exceptions/exceptions": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/help/getRenderProperties": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/help/getOptionsFromElement",
        "node_modules/jsbarcode/bin/renderers/index",
        "node_modules/jsbarcode/bin/exceptions/exceptions"
      ],
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/exceptions/ErrorHandler": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/jsbarcode/bin/JsBarcode": {
      "type": "js",
      "deps": [
        "node_modules/jsbarcode/bin/barcodes/index",
        "node_modules/jsbarcode/bin/help/merge",
        "node_modules/jsbarcode/bin/help/linearizeEncodings",
        "node_modules/jsbarcode/bin/help/fixOptions",
        "node_modules/jsbarcode/bin/help/getRenderProperties",
        "node_modules/jsbarcode/bin/help/optionsFromStrings",
        "node_modules/jsbarcode/bin/exceptions/ErrorHandler",
        "node_modules/jsbarcode/bin/exceptions/exceptions",
        "node_modules/jsbarcode/bin/options/defaults"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/BarCode": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/theme",
        "node_modules/jsbarcode/bin/JsBarcode"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/common/entities": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uc.micro/categories/P/regex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mdurl/encode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mdurl/decode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mdurl/format": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mdurl/parse": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mdurl/index": {
      "type": "js",
      "deps": [
        "node_modules/mdurl/encode",
        "node_modules/mdurl/decode",
        "node_modules/mdurl/format",
        "node_modules/mdurl/parse"
      ],
      "pkg": "p0"
    },
    "node_modules/uc.micro/properties/Any/regex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uc.micro/categories/Cc/regex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uc.micro/categories/Cf/regex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uc.micro/categories/Z/regex": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/uc.micro/index": {
      "type": "js",
      "deps": [
        "node_modules/uc.micro/properties/Any/regex",
        "node_modules/uc.micro/categories/Cc/regex",
        "node_modules/uc.micro/categories/Cf/regex",
        "node_modules/uc.micro/categories/P/regex",
        "node_modules/uc.micro/categories/Z/regex"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/common/utils": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/entities",
        "node_modules/uc.micro/categories/P/regex",
        "node_modules/mdurl/index",
        "node_modules/uc.micro/index"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/helpers/parse_link_label": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/helpers/parse_link_destination": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/helpers/parse_link_title": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/helpers/index": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/helpers/parse_link_label",
        "node_modules/markdown-it/lib/helpers/parse_link_destination",
        "node_modules/markdown-it/lib/helpers/parse_link_title"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/renderer": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/ruler": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/normalize": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/block": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/inline": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/linkify": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/replacements": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/smartquotes": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/token": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_core/state_core": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/token"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/parser_core": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/ruler",
        "node_modules/markdown-it/lib/rules_core/normalize",
        "node_modules/markdown-it/lib/rules_core/block",
        "node_modules/markdown-it/lib/rules_core/inline",
        "node_modules/markdown-it/lib/rules_core/linkify",
        "node_modules/markdown-it/lib/rules_core/replacements",
        "node_modules/markdown-it/lib/rules_core/smartquotes",
        "node_modules/markdown-it/lib/rules_core/state_core"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/table": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/code": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/fence": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/blockquote": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/hr": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/list": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/reference": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/common/html_blocks": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/common/html_re": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/html_block": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/html_blocks",
        "node_modules/markdown-it/lib/common/html_re"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/heading": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/lheading": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/paragraph": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_block/state_block": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/token",
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/parser_block": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/ruler",
        "node_modules/markdown-it/lib/rules_block/table",
        "node_modules/markdown-it/lib/rules_block/code",
        "node_modules/markdown-it/lib/rules_block/fence",
        "node_modules/markdown-it/lib/rules_block/blockquote",
        "node_modules/markdown-it/lib/rules_block/hr",
        "node_modules/markdown-it/lib/rules_block/list",
        "node_modules/markdown-it/lib/rules_block/reference",
        "node_modules/markdown-it/lib/rules_block/html_block",
        "node_modules/markdown-it/lib/rules_block/heading",
        "node_modules/markdown-it/lib/rules_block/lheading",
        "node_modules/markdown-it/lib/rules_block/paragraph",
        "node_modules/markdown-it/lib/rules_block/state_block"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/text": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/newline": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/escape": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/backticks": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/strikethrough": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/emphasis": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/link": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/image": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/autolink": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/html_inline": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/html_re"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/entity": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/entities",
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/balance_pairs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/text_collapse": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/rules_inline/state_inline": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/token",
        "node_modules/markdown-it/lib/common/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/parser_inline": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/ruler",
        "node_modules/markdown-it/lib/rules_inline/text",
        "node_modules/markdown-it/lib/rules_inline/newline",
        "node_modules/markdown-it/lib/rules_inline/escape",
        "node_modules/markdown-it/lib/rules_inline/backticks",
        "node_modules/markdown-it/lib/rules_inline/strikethrough",
        "node_modules/markdown-it/lib/rules_inline/emphasis",
        "node_modules/markdown-it/lib/rules_inline/link",
        "node_modules/markdown-it/lib/rules_inline/image",
        "node_modules/markdown-it/lib/rules_inline/autolink",
        "node_modules/markdown-it/lib/rules_inline/html_inline",
        "node_modules/markdown-it/lib/rules_inline/entity",
        "node_modules/markdown-it/lib/rules_inline/balance_pairs",
        "node_modules/markdown-it/lib/rules_inline/text_collapse",
        "node_modules/markdown-it/lib/rules_inline/state_inline"
      ],
      "pkg": "p0"
    },
    "node_modules/linkify-it/lib/re": {
      "type": "js",
      "deps": [
        "node_modules/uc.micro/properties/Any/regex",
        "node_modules/uc.micro/categories/Cc/regex",
        "node_modules/uc.micro/categories/Z/regex",
        "node_modules/uc.micro/categories/P/regex"
      ],
      "pkg": "p0"
    },
    "node_modules/linkify-it/index": {
      "type": "js",
      "deps": [
        "node_modules/linkify-it/lib/re"
      ],
      "pkg": "p0"
    },
    "node_modules/punycode/punycode": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/presets/default": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/presets/zero": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/presets/commonmark": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/markdown-it/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/common/utils",
        "node_modules/markdown-it/lib/helpers/index",
        "node_modules/markdown-it/lib/renderer",
        "node_modules/markdown-it/lib/parser_core",
        "node_modules/markdown-it/lib/parser_block",
        "node_modules/markdown-it/lib/parser_inline",
        "node_modules/linkify-it/index",
        "node_modules/mdurl/index",
        "node_modules/punycode/punycode",
        "node_modules/markdown-it/lib/presets/default",
        "node_modules/markdown-it/lib/presets/zero",
        "node_modules/markdown-it/lib/presets/commonmark"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it/index": {
      "type": "js",
      "deps": [
        "node_modules/markdown-it/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/markdown-it-html5-media/lib/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/amis/lib/utils/markdown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/markdown-it/index",
        "node_modules/markdown-it-html5-media/lib/index"
      ],
      "pkg": "p0"
    },
    "node_modules/amis/lib/components/Markdown": {
      "type": "js",
      "deps": [
        "node_modules/tslib/tslib",
        "node_modules/react/index",
        "node_modules/amis/lib/utils/markdown"
      ],
      "pkg": "p0"
    },
    "node_modules/tiny-warning/dist/tiny-warning.cjs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/mini-create-react-context/dist/cjs/index": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/@babel/runtime/helpers/inheritsLoose",
        "node_modules/prop-types/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/resolve-pathname/cjs/resolve-pathname.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/resolve-pathname/cjs/resolve-pathname": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/resolve-pathname/index": {
      "type": "js",
      "deps": [
        "node_modules/resolve-pathname/cjs/resolve-pathname.min",
        "node_modules/resolve-pathname/cjs/resolve-pathname"
      ],
      "pkg": "p0"
    },
    "node_modules/value-equal/cjs/value-equal.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/value-equal/cjs/value-equal": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/value-equal/index": {
      "type": "js",
      "deps": [
        "node_modules/value-equal/cjs/value-equal.min",
        "node_modules/value-equal/cjs/value-equal"
      ],
      "pkg": "p0"
    },
    "node_modules/tiny-invariant/dist/tiny-invariant.cjs": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/history/cjs/history.min": {
      "type": "js",
      "deps": [
        "node_modules/resolve-pathname/index",
        "node_modules/value-equal/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/history/cjs/history": {
      "type": "js",
      "deps": [
        "node_modules/resolve-pathname/index",
        "node_modules/value-equal/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/history/index": {
      "type": "js",
      "deps": [
        "node_modules/history/cjs/history.min",
        "node_modules/history/cjs/history"
      ],
      "pkg": "p0"
    },
    "node_modules/isarray/index": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/path-to-regexp/index": {
      "type": "js",
      "deps": [
        "node_modules/isarray/index"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router/cjs/react-router.min": {
      "type": "js",
      "deps": [
        "node_modules/mini-create-react-context/dist/cjs/index",
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/history/index",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs",
        "node_modules/path-to-regexp/index",
        "node_modules/react-is/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router/cjs/react-router": {
      "type": "js",
      "deps": [
        "node_modules/mini-create-react-context/dist/cjs/index",
        "node_modules/react/index",
        "node_modules/prop-types/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/history/index",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs",
        "node_modules/path-to-regexp/index",
        "node_modules/react-is/index",
        "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router/index": {
      "type": "js",
      "deps": [
        "node_modules/react-router/cjs/react-router.min",
        "node_modules/react-router/cjs/react-router"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router-dom/cjs/react-router-dom.min": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/react-router/index",
        "node_modules/history/index",
        "node_modules/prop-types/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router-dom/cjs/react-router-dom": {
      "type": "js",
      "deps": [
        "node_modules/react/index",
        "node_modules/react-router/index",
        "node_modules/history/index",
        "node_modules/prop-types/index",
        "node_modules/tiny-warning/dist/tiny-warning.cjs",
        "node_modules/tiny-invariant/dist/tiny-invariant.cjs"
      ],
      "pkg": "p0"
    },
    "node_modules/react-router-dom/index": {
      "type": "js",
      "deps": [
        "node_modules/react-router-dom/cjs/react-router-dom.min",
        "node_modules/react-router-dom/cjs/react-router-dom"
      ],
      "pkg": "p0"
    },
    "node_modules/papaparse/papaparse.min": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/qs/lib/utils": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/qs/lib/formats": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/qs/lib/stringify": {
      "type": "js",
      "deps": [
        "node_modules/qs/lib/utils",
        "node_modules/qs/lib/formats"
      ],
      "pkg": "p0"
    },
    "node_modules/qs/lib/parse": {
      "type": "js",
      "deps": [
        "node_modules/qs/lib/utils"
      ],
      "pkg": "p0"
    },
    "node_modules/qs/lib/index": {
      "type": "js",
      "deps": [
        "node_modules/qs/lib/stringify",
        "node_modules/qs/lib/parse",
        "node_modules/qs/lib/formats"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/lib/codemirror": {
      "type": "js",
      "pkg": "p0"
    },
    "node_modules/codemirror/mode/javascript/javascript": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/mode/xml/xml": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/mode/css/css": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/mode/htmlmixed/htmlmixed": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror",
        "node_modules/codemirror/mode/xml/xml",
        "node_modules/codemirror/mode/javascript/javascript",
        "node_modules/codemirror/mode/css/css"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/addon/mode/simple": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror"
      ],
      "pkg": "p0"
    },
    "node_modules/codemirror/addon/mode/multiplex": {
      "type": "js",
      "deps": [
        "node_modules/codemirror/lib/codemirror"
      ],
      "pkg": "p0"
    },
    "loadMonacoEditor.ts": {
      "url": "/loadMonacoEditor.js",
      "type": "js"
    },
    "node_modules/amis-editor/node_modules/sortablejs/Sortable.min": {
      "url": "/node_modules/amis-editor/node_modules/sortablejs/Sortable.min.js",
      "type": "js"
    },
    "node_modules/amis-editor/dist/index.min": {
      "url": "/node_modules/amis-editor/dist/index.min.js",
      "type": "js",
      "deps": [
        "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter",
        "node_modules/amis/lib/index",
        "node_modules/amis/lib/components/AnchorNav",
        "node_modules/amis/lib/components/Editor",
        "node_modules/amis/lib/components/Select",
        "node_modules/amis/lib/components/condition-builder/config",
        "node_modules/amis/lib/factory",
        "node_modules/amis/lib/renderers/Form/Editor",
        "node_modules/amis/lib/utils/api",
        "node_modules/amis/lib/utils/helper",
        "node_modules/axios/index",
        "node_modules/classnames/index",
        "node_modules/deep-diff/index",
        "node_modules/json-ast-comments/lib/index",
        "node_modules/lodash/cloneDeep",
        "node_modules/lodash/debounce",
        "node_modules/lodash/each",
        "node_modules/lodash/find",
        "node_modules/lodash/findIndex",
        "node_modules/lodash/flatten",
        "node_modules/lodash/get",
        "node_modules/lodash/groupBy",
        "node_modules/lodash/isEqual",
        "node_modules/lodash/isPlainObject",
        "node_modules/lodash/merge",
        "node_modules/lodash/omit",
        "node_modules/lodash/pickBy",
        "node_modules/lodash/uniqBy",
        "node_modules/mobx/lib/index",
        "node_modules/mobx-react/dist/index",
        "node_modules/mobx-state-tree/dist/mobx-state-tree",
        "node_modules/moment/moment",
        "node_modules/react/index",
        "node_modules/react-dom/index",
        "node_modules/react-json-view/dist/main",
        "node_modules/amis-editor/node_modules/sortablejs/Sortable.min",
        "node_modules/tslib/tslib"
      ]
    }
  },
  "pkg": {
    "p0": {
      "url": "/pkg/npm.js",
      "type": "js"
    }
  }
});