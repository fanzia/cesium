define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-d1adddcb","./Transforms-512eb9c4","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-36d5fdb7","./GeometryAttributes-4fcfcf40","./AttributeCompression-4a67d8a6","./GeometryPipeline-ac12b536","./EncodedCartesian3-c2974565","./IndexDatatype-53503fee","./IntersectionTests-ffe136bf","./Plane-63c82d96","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-a441f64d","./GeometryInstance-2d2aaa34","./EllipseGeometry-f1b5574e"],function(r,e,t,o,i,a,n,s,l,d,m,c,u,p,y,_,h,G,x,f,g){"use strict";function E(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new g.EllipseGeometry(e),this._workerName="createCircleGeometry"}E.packedLength=g.EllipseGeometry.packedLength,E.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var v=new g.EllipseGeometry({center:new o.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new o.Cartesian3,radius:void 0,ellipsoid:o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(e,t,i){t=g.EllipseGeometry.unpack(e,t,v);return w.center=o.Cartesian3.clone(t._center,w.center),w.ellipsoid=o.Ellipsoid.clone(t._ellipsoid,w.ellipsoid),w.height=t._height,w.extrudedHeight=t._extrudedHeight,w.granularity=t._granularity,w.vertexFormat=G.VertexFormat.clone(t._vertexFormat,w.vertexFormat),w.stRotation=t._stRotation,w.shadowVolume=t._shadowVolume,r.defined(i)?(w.semiMajorAxis=t._semiMajorAxis,w.semiMinorAxis=t._semiMinorAxis,i._ellipseGeometry=new g.EllipseGeometry(w),i):(w.radius=t._semiMajorAxis,new E(w))},E.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,t=t(r,o),i=i(r,o);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:t,height:i,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return r.defined(t)&&(e=E.unpack(e,t)),e._ellipseGeometry._center=o.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=o.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),E.createGeometry(e)}});
