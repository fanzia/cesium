define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-d1adddcb","./Transforms-512eb9c4","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-36d5fdb7","./GeometryAttributes-4fcfcf40","./AttributeCompression-4a67d8a6","./GeometryPipeline-ac12b536","./EncodedCartesian3-c2974565","./IndexDatatype-53503fee","./IntersectionTests-ffe136bf","./Plane-63c82d96","./PrimitivePipeline-4b00d6e4","./WebMercatorProjection-6cf85d4b","./createTaskProcessorWorker"],function(f,e,r,t,n,o,i,a,c,s,d,u,b,m,p,l,y,P,k){"use strict";var C={};return k(function(e,r){for(var t=e.subTasks,n=t.length,o=new Array(n),i=0;i<n;i++){var a=t[i],c=a.geometry,s=a.moduleName;f.defined(s)?(s=function(e){var r=C[e];return f.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(s),o[i]=s(c,a.offset)):o[i]=c}return f.when.all(o,function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,r)})})});