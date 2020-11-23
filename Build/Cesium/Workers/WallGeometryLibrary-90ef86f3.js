define(["exports","./when-54c2dc71","./Math-fc8cecf5","./Cartesian2-d1adddcb","./EllipsoidTangentPlane-b47f975e","./PolygonPipeline-6e06ba60","./PolylinePipeline-da3cd3d5"],function(e,m,C,A,w,b,E){"use strict";var i={};var O=new A.Cartographic,M=new A.Cartographic;function L(e,i,t,n){var r=i.length;if(!(r<2)){var o=m.defined(n),a=m.defined(t),l=!0,h=new Array(r),s=new Array(r),g=new Array(r),d=i[0];h[0]=d;var p=e.cartesianToCartographic(d,O);a&&(p.height=t[0]),l=l&&p.height<=0,s[0]=p.height,g[0]=o?n[0]:0;for(var c,P,u=1,v=1;v<r;++v){var y=i[v],f=e.cartesianToCartographic(y,M);a&&(f.height=t[v]),l=l&&f.height<=0,c=p,P=f,C.CesiumMath.equalsEpsilon(c.latitude,P.latitude,C.CesiumMath.EPSILON14)&&C.CesiumMath.equalsEpsilon(c.longitude,P.longitude,C.CesiumMath.EPSILON14)?p.height<f.height&&(s[u-1]=f.height):(h[u]=y,s[u]=f.height,g[u]=o?n[v]:0,A.Cartographic.clone(f,p),++u)}if(!(l||u<2))return h.length=u,s.length=u,g.length=u,{positions:h,topHeights:s,bottomHeights:g}}}var F=new Array(2),H=new Array(2),T={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};i.computePositions=function(e,i,t,n,r,o){var a=L(e,i,t,n);if(m.defined(a)){i=a.positions,t=a.topHeights,n=a.bottomHeights,3<=i.length&&(g=w.EllipsoidTangentPlane.fromPoints(i,e).projectPointsOntoPlane(i),b.PolygonPipeline.computeWindingOrder2D(g)===b.WindingOrder.CLOCKWISE&&(i.reverse(),t.reverse(),n.reverse()));var l,h,s=i.length,g=s-2,d=C.CesiumMath.chordLength(r,e.maximumRadius),p=T;if(p.minDistance=d,p.ellipsoid=e,o){for(var c=0,P=0;P<s-1;P++)c+=E.PolylinePipeline.numberOfPoints(i[P],i[P+1],d)+1;l=new Float64Array(3*c),h=new Float64Array(3*c);var u=F,v=H;p.positions=u,p.height=v;var y=0;for(P=0;P<s-1;P++){u[0]=i[P],u[1]=i[P+1],v[0]=t[P],v[1]=t[P+1];var f=E.PolylinePipeline.generateArc(p);l.set(f,y),v[0]=n[P],v[1]=n[P+1],h.set(E.PolylinePipeline.generateArc(p),y),y+=f.length}}else p.positions=i,p.height=t,l=new Float64Array(E.PolylinePipeline.generateArc(p)),p.height=n,h=new Float64Array(E.PolylinePipeline.generateArc(p));return{bottomPositions:h,topPositions:l,numCorners:g}}},e.WallGeometryLibrary=i});