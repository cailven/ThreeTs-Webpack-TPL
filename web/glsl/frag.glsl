 uniform vec2 iResolution;
 uniform float iTime;


 #pragma glslify: snoise = require('glsl-noise/simplex/2d');

  void main() {

    vec2 st = gl_FragCoord.xy/iResolution.xy;
   gl_FragColor=vec4(st.x,st.y,0.0,1.0);

//    gl_FragColor = vec4(noise(st*25.0),1);

//    gl_FragColor = vec4(snoise(vec2(st.x,st.y),0.0, 1.0));
   }