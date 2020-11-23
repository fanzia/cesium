//This file is automatically rebuilt by the Cesium build process.
export default "#extension GL_EXT_frag_depth : enable\n\
uniform sampler2D u_pointCloud_colorGBuffer;\n\
uniform sampler2D u_pointCloud_depthGBuffer;\n\
uniform vec2 u_distanceAndEdlStrength;\n\
varying vec2 v_textureCoordinates;\n\
vec2 neighborContribution(float log2Depth, vec2 offset)\n\
{\n\
float dist = u_distanceAndEdlStrength.x;\n\
vec2 texCoordOrig = v_textureCoordinates + offset * dist;\n\
vec2 texCoord0 = v_textureCoordinates + offset * floor(dist);\n\
vec2 texCoord1 = v_textureCoordinates + offset * ceil(dist);\n\
float depthOrLogDepth0 = czm_unpackDepth(texture2D(u_pointCloud_depthGBuffer, texCoord0));\n\
float depthOrLogDepth1 = czm_unpackDepth(texture2D(u_pointCloud_depthGBuffer, texCoord1));\n\
if (depthOrLogDepth0 == 0.0 || depthOrLogDepth1 == 0.0) {\n\
return vec2(0.0);\n\
}\n\
float depthMix = mix(depthOrLogDepth0, depthOrLogDepth1, fract(dist));\n\
vec4 eyeCoordinate = czm_windowToEyeCoordinates(texCoordOrig, depthMix);\n\
return vec2(max(0.0, log2Depth - log2(-eyeCoordinate.z / eyeCoordinate.w)), 1.0);\n\
}\n\
void main()\n\
{\n\
float depthOrLogDepth = czm_unpackDepth(texture2D(u_pointCloud_depthGBuffer, v_textureCoordinates));\n\
vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depthOrLogDepth);\n\
eyeCoordinate /= eyeCoordinate.w;\n\
float log2Depth = log2(-eyeCoordinate.z);\n\
if (depthOrLogDepth == 0.0)\n\
{\n\
discard;\n\
}\n\
vec4 color = texture2D(u_pointCloud_colorGBuffer, v_textureCoordinates);\n\
vec2 texelSize = 1.0 / czm_viewport.zw;\n\
vec2 responseAndCount = vec2(0.0);\n\
responseAndCount += neighborContribution(log2Depth, vec2(-texelSize.x, 0.0));\n\
responseAndCount += neighborContribution(log2Depth, vec2(+texelSize.x, 0.0));\n\
responseAndCount += neighborContribution(log2Depth, vec2(0.0, -texelSize.y));\n\
responseAndCount += neighborContribution(log2Depth, vec2(0.0, +texelSize.y));\n\
float response = responseAndCount.x / responseAndCount.y;\n\
float strength = u_distanceAndEdlStrength.y;\n\
float shade = exp(-response * 300.0 * strength);\n\
color.rgb *= shade;\n\
gl_FragColor = vec4(color);\n\
#ifdef LOG_DEPTH\n\
czm_writeLogDepth(1.0 + (czm_projection * vec4(eyeCoordinate.xyz, 1.0)).w);\n\
#else\n\
gl_FragDepthEXT = czm_eyeToWindowCoordinates(vec4(eyeCoordinate.xyz, 1.0)).z;\n\
#endif\n\
}\n\
";