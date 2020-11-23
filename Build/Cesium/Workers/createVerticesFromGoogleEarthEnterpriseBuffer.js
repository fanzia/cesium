define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-d1adddcb","./Transforms-512eb9c4","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./AttributeCompression-4a67d8a6","./IntersectionTests-ffe136bf","./Plane-63c82d96","./WebMercatorProjection-6cf85d4b","./createTaskProcessorWorker","./EllipsoidTangentPlane-b47f975e","./OrientedBoundingBox-8931a190","./TerrainEncoding-6c62975d"],function(Tt,t,ft,Ct,vt,Mt,e,i,n,r,a,Nt,o,xt,bt,St){"use strict";var wt=Uint16Array.BYTES_PER_ELEMENT,Pt=Int32Array.BYTES_PER_ELEMENT,Bt=Uint32Array.BYTES_PER_ELEMENT,yt=Float32Array.BYTES_PER_ELEMENT,At=Float64Array.BYTES_PER_ELEMENT;function Rt(t,e,i){i=Tt.defaultValue(i,ft.CesiumMath);for(var n=t.length,r=0;r<n;++r)if(i.equalsEpsilon(t[r],e,ft.CesiumMath.EPSILON12))return r;return-1}var _t=new Ct.Cartographic,Wt=new Ct.Cartesian3,Ft=new Ct.Cartesian3,Ot=new Ct.Cartesian3,Yt=new vt.Matrix4;function kt(t,e,i,n,r,a,o,s,u,h){for(var c=o.length,d=0;d<c;++d){var g=o[d],l=g.cartographic,m=g.index,p=t.length,I=l.longitude,E=l.latitude,E=ft.CesiumMath.clamp(E,-ft.CesiumMath.PI_OVER_TWO,ft.CesiumMath.PI_OVER_TWO),l=l.height-a.skirtHeight;a.hMin=Math.min(a.hMin,l),Ct.Cartographic.fromRadians(I,E,l,_t),u&&(_t.longitude+=s),u?d===c-1?_t.latitude+=h:0===d&&(_t.latitude-=h):_t.latitude+=s;E=a.ellipsoid.cartographicToCartesian(_t);t.push(E),e.push(l),i.push(Ct.Cartesian2.clone(i[m])),0<n.length&&n.push(n[m]),vt.Matrix4.multiplyByPoint(a.toENU,E,Wt);l=a.minimum,E=a.maximum;Ct.Cartesian3.minimumByComponent(Wt,l,l),Ct.Cartesian3.maximumByComponent(Wt,E,E);E=a.lastBorderPoint;Tt.defined(E)&&(E=E.index,r.push(E,p-1,p,p,m,E)),a.lastBorderPoint=g}}return o(function(t,e){t.ellipsoid=Ct.Ellipsoid.clone(t.ellipsoid),t.rectangle=Ct.Rectangle.clone(t.rectangle);var i=function(t,e,i,n,r,a,o,s,u,h){var c,d,g,l,m;ct=Tt.defined(n)?(c=n.west,d=n.south,g=n.east,l=n.north,m=n.width,n.height):(c=ft.CesiumMath.toRadians(r.west),d=ft.CesiumMath.toRadians(r.south),g=ft.CesiumMath.toRadians(r.east),l=ft.CesiumMath.toRadians(r.north),m=ft.CesiumMath.toRadians(n.width),ft.CesiumMath.toRadians(n.height));var p,I,E=[d,l],T=[c,g],f=vt.Transforms.eastNorthUpToFixedFrame(e,i),C=vt.Matrix4.inverseTransformation(f,Yt);s&&(p=Nt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),I=1/(Nt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l)-p));var v=new DataView(t),M=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,x=Ft;x.x=Number.POSITIVE_INFINITY,x.y=Number.POSITIVE_INFINITY,x.z=Number.POSITIVE_INFINITY;var b=Ot;b.x=Number.NEGATIVE_INFINITY,b.y=Number.NEGATIVE_INFINITY,b.z=Number.NEGATIVE_INFINITY;var S,w,P=0,B=0,y=0;for(w=0;w<4;++w){var A=P;S=v.getUint32(A,!0),A+=Bt;var R=ft.CesiumMath.toRadians(180*v.getFloat64(A,!0));A+=At,-1===Rt(T,R)&&T.push(R);R=ft.CesiumMath.toRadians(180*v.getFloat64(A,!0));A+=At,-1===Rt(E,R)&&E.push(R),A+=2*At;R=v.getInt32(A,!0);A+=Pt,B+=R,R=v.getInt32(A,!0),y+=3*R,P+=S+Bt}var _=[],W=[],F=new Array(B),O=new Array(B),Y=new Array(B),k=s?new Array(B):[],U=new Array(y),V=[],H=[],L=[],D=[],G=0,j=0;for(w=P=0;w<4;++w){S=v.getUint32(P,!0);var z=P+=Bt,q=ft.CesiumMath.toRadians(180*v.getFloat64(P,!0));P+=At;var J=ft.CesiumMath.toRadians(180*v.getFloat64(P,!0));P+=At;var K=ft.CesiumMath.toRadians(180*v.getFloat64(P,!0)),Q=.5*K;P+=At;var X=ft.CesiumMath.toRadians(180*v.getFloat64(P,!0)),Z=.5*X;P+=At;var $=v.getInt32(P,!0);P+=Pt;var tt=v.getInt32(P,!0);P+=Pt,P+=Pt;for(var et=new Array($),it=0;it<$;++it){var nt=q+v.getUint8(P++)*K;_t.longitude=nt;var rt=J+v.getUint8(P++)*X;_t.latitude=rt;var at=v.getFloat32(P,!0);if(P+=yt,0!==at&&at<h&&(at*=-Math.pow(2,u)),at*=6371010*a,_t.height=at,-1!==Rt(T,nt)||-1!==Rt(E,rt)){var ot=Rt(_,_t,Ct.Cartographic);if(-1!==ot){et[it]=W[ot];continue}_.push(Ct.Cartographic.clone(_t)),W.push(G)}et[it]=G,Math.abs(nt-c)<Q?V.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(nt-g)<Q?L.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(rt-d)<Z?H.push({index:G,cartographic:Ct.Cartographic.clone(_t)}):Math.abs(rt-l)<Z&&D.push({index:G,cartographic:Ct.Cartographic.clone(_t)}),M=Math.min(at,M),N=Math.max(at,N),Y[G]=at;at=i.cartographicToCartesian(_t);F[G]=at,s&&(k[G]=(Nt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(rt)-p)*I),vt.Matrix4.multiplyByPoint(C,at,Wt),Ct.Cartesian3.minimumByComponent(Wt,x,x),Ct.Cartesian3.maximumByComponent(Wt,b,b);nt=(nt-c)/(g-c);nt=ft.CesiumMath.clamp(nt,0,1);rt=(rt-d)/(l-d);rt=ft.CesiumMath.clamp(rt,0,1),O[G]=new Ct.Cartesian2(nt,rt),++G}for(var st=3*tt,ut=0;ut<st;++ut,++j)U[j]=et[v.getUint16(P,!0)],P+=wt;if(S!==P-z)throw new Mt.RuntimeError("Invalid terrain tile.")}F.length=G,O.length=G,Y.length=G,s&&(k.length=G);var ht=G,r=j,t={hMin:M,lastBorderPoint:void 0,skirtHeight:o,toENU:C,ellipsoid:i,minimum:x,maximum:b};V.sort(function(t,e){return e.cartographic.latitude-t.cartographic.latitude}),H.sort(function(t,e){return t.cartographic.longitude-e.cartographic.longitude}),L.sort(function(t,e){return t.cartographic.latitude-e.cartographic.latitude}),D.sort(function(t,e){return e.cartographic.longitude-t.cartographic.longitude});o=1e-5;{var ct;kt(F,Y,O,k,U,t,V,-o*m,!0,-o*ct),kt(F,Y,O,k,U,t,H,-o*ct,!1),kt(F,Y,O,k,U,t,L,o*m,!0,o*ct),kt(F,Y,O,k,U,t,D,o*ct,!1),0<V.length&&0<D.length&&(gt=V[0].index,lt=D[D.length-1].index,ct=F.length-1,U.push(lt,ct,ht,ht,gt,lt))}B=F.length;var dt,gt=vt.BoundingSphere.fromPoints(F);Tt.defined(n)&&(dt=bt.OrientedBoundingBox.fromRectangle(n,M,N,i));for(var lt=new St.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(e,F,M),n=new xt.AxisAlignedBoundingBox(x,b,e),mt=new St.TerrainEncoding(n,t.hMin,N,f,!1,s),pt=new Float32Array(B*mt.getStride()),It=0,Et=0;Et<B;++Et)It=mt.encode(pt,It,F[Et],O[Et],Y[Et],void 0,k[Et]);e=V.map(function(t){return t.index}).reverse(),n=H.map(function(t){return t.index}).reverse(),t=L.map(function(t){return t.index}).reverse(),f=D.map(function(t){return t.index}).reverse();return n.unshift(t[t.length-1]),n.push(e[0]),f.unshift(e[e.length-1]),f.push(t[0]),{vertices:pt,indices:new Uint16Array(U),maximumHeight:N,minimumHeight:M,encoding:mt,boundingSphere3D:gt,orientedBoundingBox:dt,occludeePointInScaledSpace:lt,vertexCountWithoutSkirts:ht,indexCountWithoutSkirts:r,westIndicesSouthToNorth:e,southIndicesEastToWest:n,eastIndicesNorthToSouth:t,northIndicesWestToEast:f}}(t.buffer,t.relativeToCenter,t.ellipsoid,t.rectangle,t.nativeRectangle,t.exaggeration,t.skirtHeight,t.includeWebMercatorT,t.negativeAltitudeExponentBias,t.negativeElevationThreshold),n=i.vertices;return e.push(n.buffer),t=i.indices,e.push(t.buffer),{vertices:n.buffer,indices:t.buffer,numberOfAttributes:i.encoding.getStride(),minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});
