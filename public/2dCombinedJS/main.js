import * as q from "https://cdn.jsdelivr.net/npm/mathjs@13/+esm";
function J(n) {
  return "count" in n && typeof n.count == "number" && !("struct" in n);
}
function Z(n) {
  return "struct" in n && typeof n.struct == "object" && "count" in n;
}
function X(n) {
  return J(n) || Z(n);
}
function Ie(n) {
  return !X(n) && !n.hidden;
}
function Li(n) {
  return "views" in n && Array.isArray(n.views);
}
function Sn(n) {
  return "views" in n && Array.isArray(n.views);
}
function Vt(n, e, t) {
  const i = n.createShader(e);
  if (!i)
    throw new Error("Failed to create shader object");
  if (n.shaderSource(i, t), n.compileShader(i), !n.getShaderParameter(i, n.COMPILE_STATUS)) {
    const r = n.getShaderInfoLog(i);
    throw n.deleteShader(i), new Error(`Shader compilation failed:
${r}`);
  }
  return i;
}
function zt(n, e, t) {
  const i = Vt(n, n.VERTEX_SHADER, e), s = Vt(n, n.FRAGMENT_SHADER, t), r = n.createProgram();
  if (!r)
    throw new Error("Failed to create program object");
  if (n.attachShader(r, i), n.attachShader(r, s), n.linkProgram(r), !n.getProgramParameter(r, n.LINK_STATUS)) {
    const a = n.getProgramInfoLog(r);
    throw n.deleteProgram(r), n.deleteShader(i), n.deleteShader(s), new Error(`Program linking failed:
${a}`);
  }
  return n.detachShader(r, i), n.detachShader(r, s), n.deleteShader(i), n.deleteShader(s), r;
}
function Ii(n) {
  const e = n.createVertexArray();
  if (!e)
    throw new Error("Failed to create VAO");
  n.bindVertexArray(e);
  const t = new Float32Array([
    -1,
    -1,
    // Bottom-left
    3,
    -1,
    // Bottom-right (extends beyond viewport)
    -1,
    3
    // Top-left (extends beyond viewport)
  ]), i = n.createBuffer();
  if (!i)
    throw new Error("Failed to create VBO");
  return n.bindBuffer(n.ARRAY_BUFFER, i), n.bufferData(n.ARRAY_BUFFER, t, n.STATIC_DRAW), n.enableVertexAttribArray(0), n.vertexAttribPointer(
    0,
    // attribute location
    2,
    // size (vec2)
    n.FLOAT,
    // type
    !1,
    // normalized
    0,
    // stride
    0
    // offset
  ), n.bindVertexArray(null), n.bindBuffer(n.ARRAY_BUFFER, null), e;
}
function ze(n, e, t) {
  const i = n.createTexture();
  if (!i)
    throw new Error("Failed to create texture");
  return n.bindTexture(n.TEXTURE_2D, i), n.texImage2D(
    n.TEXTURE_2D,
    0,
    // mip level
    n.RGBA32F,
    // internal format (32-bit float per channel)
    e,
    t,
    0,
    // border (must be 0)
    n.RGBA,
    // format
    n.FLOAT,
    // type
    null
    // no data (allocate only)
  ), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), i;
}
function jt(n, e) {
  const t = n.createFramebuffer();
  if (!t)
    throw new Error("Failed to create framebuffer");
  n.bindFramebuffer(n.FRAMEBUFFER, t), n.framebufferTexture2D(
    n.FRAMEBUFFER,
    n.COLOR_ATTACHMENT0,
    n.TEXTURE_2D,
    e,
    0
    // mip level
  );
  const i = n.checkFramebufferStatus(n.FRAMEBUFFER);
  if (i !== n.FRAMEBUFFER_COMPLETE)
    throw n.deleteFramebuffer(t), new Error(`Framebuffer incomplete: ${ji(n, i)}`);
  return n.bindFramebuffer(n.FRAMEBUFFER, null), t;
}
function Ui(n) {
  const e = n.createTexture();
  if (!e)
    throw new Error("Failed to create black texture");
  n.bindTexture(n.TEXTURE_2D, e);
  const t = new Float32Array([0, 0, 0, 1]);
  return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA32F, 1, 1, 0, n.RGBA, n.FLOAT, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), e;
}
function Oi(n) {
  const e = n.createTexture();
  if (!e)
    throw new Error("Failed to create keyboard texture");
  n.bindTexture(n.TEXTURE_2D, e);
  const t = 256, i = 3, s = new Float32Array(t * i * 4);
  return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA32F, t, i, 0, n.RGBA, n.FLOAT, s), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), e;
}
function Ni(n, e, t, i) {
  const o = new Float32Array(3072);
  for (let a = 0; a < 256; a++) {
    const c = t.get(a) || !1, u = i.get(a) || 0, l = (0 * 256 + a) * 4;
    o[l + 0] = c ? 1 : 0, o[l + 1] = c ? 1 : 0, o[l + 2] = c ? 1 : 0, o[l + 3] = 1;
    const d = (2 * 256 + a) * 4;
    o[d + 0] = u, o[d + 1] = u, o[d + 2] = u, o[d + 3] = 1;
  }
  n.bindTexture(n.TEXTURE_2D, e), n.texSubImage2D(
    n.TEXTURE_2D,
    0,
    0,
    0,
    // x, y offset
    256,
    3,
    n.RGBA,
    n.FLOAT,
    o
  ), n.bindTexture(n.TEXTURE_2D, null);
}
function $i(n) {
  const e = n.createTexture();
  if (!e)
    throw new Error("Failed to create audio texture");
  n.bindTexture(n.TEXTURE_2D, e);
  const t = 512, i = 2, s = new Uint8Array(t * i);
  return n.texImage2D(n.TEXTURE_2D, 0, n.R8, t, i, 0, n.RED, n.UNSIGNED_BYTE, s), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), e;
}
function Di(n, e, t, i) {
  n.bindTexture(n.TEXTURE_2D, e), n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, 512, 1, n.RED, n.UNSIGNED_BYTE, t), n.texSubImage2D(n.TEXTURE_2D, 0, 0, 1, 512, 1, n.RED, n.UNSIGNED_BYTE, i), n.bindTexture(n.TEXTURE_2D, null);
}
function Ht(n) {
  const e = n.createTexture();
  if (!e)
    throw new Error("Failed to create video texture");
  return n.bindTexture(n.TEXTURE_2D, e), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), e;
}
function Vi(n, e, t) {
  n.bindTexture(n.TEXTURE_2D, e), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, t), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1), n.bindTexture(n.TEXTURE_2D, null);
}
function zi(n, e, t, i, s) {
  const r = e ?? n.createTexture();
  if (!r)
    throw new Error("Failed to create script texture");
  return n.bindTexture(n.TEXTURE_2D, r), s instanceof Float32Array ? n.texImage2D(n.TEXTURE_2D, 0, n.RGBA32F, t, i, 0, n.RGBA, n.FLOAT, s) : n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, t, i, 0, n.RGBA, n.UNSIGNED_BYTE, s), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.bindTexture(n.TEXTURE_2D, null), r;
}
function ji(n, e) {
  switch (e) {
    case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case n.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    case n.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:
      return "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
    default:
      return `Unknown status: ${e}`;
  }
}
const Ct = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  mat3: 9,
  mat4: 16
}, St = {
  float: 4,
  // 1 float + 3 padding
  vec2: 4,
  // 2 floats + 2 padding
  vec3: 4,
  // 3 floats + 1 padding
  vec4: 4,
  // 4 floats, naturally aligned
  mat3: 12,
  // 3 columns × 4 floats (vec3 padded to vec4)
  mat4: 16
  // 4 columns × 4 floats, no padding
};
function me(n, e) {
  return Ct[n] * e;
}
function Hi(n, e) {
  return St[n] * e * 4;
}
function Wt(n, e) {
  return St[n] * e;
}
function Xt(n, e, t, i) {
  const s = Ct[n], r = St[n];
  if (s === r)
    return t;
  const o = r * e, a = i && i.length >= o ? i : new Float32Array(o);
  if (n === "mat3")
    for (let c = 0; c < e; c++) {
      const u = c * 9, l = c * 12;
      a[l + 0] = t[u + 0], a[l + 1] = t[u + 1], a[l + 2] = t[u + 2], a[l + 3] = 0, a[l + 4] = t[u + 3], a[l + 5] = t[u + 4], a[l + 6] = t[u + 5], a[l + 7] = 0, a[l + 8] = t[u + 6], a[l + 9] = t[u + 7], a[l + 10] = t[u + 8], a[l + 11] = 0;
    }
  else
    for (let c = 0; c < e; c++) {
      const u = c * s, l = c * 4;
      for (let d = 0; d < s; d++)
        a[l + d] = t[u + d];
      for (let d = s; d < 4; d++)
        a[l + d] = 0;
    }
  return a;
}
const Wi = {
  float: 4,
  vec2: 8,
  vec3: 16,
  vec4: 16,
  mat3: 16,
  mat4: 16
}, Xi = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  mat3: 48,
  mat4: 64
};
function dt(n, e) {
  return Math.ceil(n / e) * e;
}
function qe(n) {
  const e = [];
  let t = 0, i = 0, s = 0;
  for (const [a, c] of Object.entries(n)) {
    const u = Wi[c], l = Xi[c], d = Ct[c];
    t = dt(t, u), e.push({ name: a, type: c, offsetBytes: t, sizeBytes: l, tightFloats: d }), t += l, i = Math.max(i, u), s += d;
  }
  const r = dt(Math.max(i, 16), 16), o = dt(t, r);
  return {
    fields: e,
    strideBytes: o,
    strideFloats: o / 4,
    tightFloatsPerElement: s
  };
}
function Gi(n, e) {
  return n.strideBytes * e;
}
function Ki(n, e, t, i) {
  const s = n.strideFloats * e, r = i && i.length >= s ? i : new Float32Array(s);
  for (let o = 0; o < e; o++) {
    const a = o * n.strideFloats;
    for (const c of n.fields) {
      const u = a + c.offsetBytes / 4, l = o * c.tightFloats, d = t[c.name];
      if (d)
        if (c.type === "mat3")
          for (let h = 0; h < 3; h++)
            r[u + h * 4 + 0] = d[l + h * 3 + 0] ?? 0, r[u + h * 4 + 1] = d[l + h * 3 + 1] ?? 0, r[u + h * 4 + 2] = d[l + h * 3 + 2] ?? 0, r[u + h * 4 + 3] = 0;
        else
          for (let h = 0; h < c.tightFloats; h++)
            r[u + h] = d[l + h] ?? 0;
    }
  }
  return r;
}
function Yi(n, e, t, i) {
  const s = e * n.strideFloats;
  for (const r of n.fields) {
    const o = t[r.name];
    if (!o)
      continue;
    const a = s + r.offsetBytes / 4;
    if (r.type === "mat3")
      for (let c = 0; c < 3; c++)
        i[a + c * 4 + 0] = o[c * 3 + 0] ?? 0, i[a + c * 4 + 1] = o[c * 3 + 1] ?? 0, i[a + c * 4 + 2] = o[c * 3 + 2] ?? 0, i[a + c * 4 + 3] = 0;
    else
      for (let c = 0; c < r.tightFloats; c++)
        i[a + c] = o[c] ?? 0;
  }
}
const Gt = `#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`, qi = `#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`, Qi = `// --- Keyboard helpers (auto-injected) ---
// Letter keys
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;

// Digit keys
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;

// Arrow keys
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;

// Special keys
const int KEY_SPACE = 32;
const int KEY_ENTER = 13;
const int KEY_TAB = 9;
const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8;
const int KEY_DELETE = 46;
const int KEY_SHIFT = 16;
const int KEY_CTRL = 17;
const int KEY_ALT = 18;

// Function keys
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;

// Returns 1.0 if key is held down, 0.0 otherwise
float keyDown(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x;
}

// Returns 1.0/0.0, toggling each time the key is pressed
float keyToggle(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x;
}

// Boolean convenience helpers
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`;
function Ji(n, e, t) {
  const i = [qi];
  if (t.commonSource && (i.push("// Common code"), i.push(t.commonSource), i.push("")), t.namedSamplers && t.namedSamplers.size > 0) {
    if (i.push(`// Core uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;

// Shader Sandbox touch extensions
uniform int   iTouchCount;
uniform vec4  iTouch0;
uniform vec4  iTouch1;
uniform vec4  iTouch2;
uniform float iPinch;
uniform float iPinchDelta;
uniform vec2  iPinchCenter;
`), t.viewNames && t.viewNames.length > 1) {
      i.push("// Cross-view uniforms (multi-view project)");
      for (const d of t.viewNames)
        i.push(`uniform vec4  iMouse_${d};`), i.push(`uniform vec3  iResolution_${d};`), i.push(`uniform bool  iMousePressed_${d};`);
      i.push("");
    }
    i.push("// Named samplers");
    for (const [d] of t.namedSamplers)
      i.push(`uniform sampler2D ${d};`), i.push(`uniform vec3 ${d}_resolution;`);
    i.push(""), t.namedSamplers.has("keyboard") && (i.push(Qi), i.push(""));
  } else if (i.push(`// Shadertoy built-in uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

// Shader Sandbox touch extensions (not in Shadertoy)
uniform int   iTouchCount;          // Number of active touches (0-10)
uniform vec4  iTouch0;              // Primary touch: (x, y, startX, startY)
uniform vec4  iTouch1;              // Second touch
uniform vec4  iTouch2;              // Third touch
uniform float iPinch;               // Pinch scale factor (1.0 = no pinch)
uniform float iPinchDelta;          // Pinch change since last frame
uniform vec2  iPinchCenter;         // Center point of pinch gesture
`), t.viewNames && t.viewNames.length > 1) {
    i.push("// Cross-view uniforms (multi-view project)");
    for (const d of t.viewNames)
      i.push(`uniform vec4  iMouse_${d};`), i.push(`uniform vec3  iResolution_${d};`), i.push(`uniform bool  iMousePressed_${d};`);
    i.push("");
  }
  for (const d of t.ubos) {
    if (d.structLayout) {
      i.push(`// Struct array uniform: ${d.name} (max ${d.count})`), i.push(`struct _st_${d.name} {`);
      for (const h of d.structLayout.fields)
        i.push(`  ${h.type} ${h.name};`);
      i.push("};"), i.push(`layout(std140) uniform _ub_${d.name} {`), i.push(`  _st_${d.name} ${d.name}[${d.count}];`), i.push("};");
    } else
      i.push(`// Array uniform: ${d.name} (max ${d.count})`), i.push(`layout(std140) uniform _ub_${d.name} {`), i.push(`  ${d.def.type} ${d.name}[${d.count}];`), i.push("};");
    i.push(`uniform int ${d.name}_count;`), i.push("");
  }
  const s = Object.entries(t.uniforms).filter(([, d]) => !X(d));
  if (s.length > 0) {
    i.push("// Custom uniforms");
    for (const [d, h] of s) {
      const f = h.type === "bool" ? "bool" : h.type;
      i.push(`uniform ${f} ${d};`);
    }
    i.push("");
  }
  const r = Zi(n, e);
  i.push("// User shader code"), i.push(r), i.push(""), i.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`);
  const o = i.join(`
`), a = o.split(`
`);
  let c = 0, u = 0, l = 0;
  for (let d = 0; d < a.length; d++)
    a[d] === "// Common code" && (c = d + 2, u = t.commonSource ? t.commonSource.split(`
`).length : 0), a[d] === "// User shader code" && (l = d + 2);
  return {
    source: o,
    lineMapping: { commonStartLine: c, commonLines: u, userCodeStartLine: l }
  };
}
function Zi(n, e) {
  const t = /* @__PURE__ */ new Set();
  if (e.forEach((s, r) => {
    s.kind === "texture" && s.cubemap && t.add(`iChannel${r}`);
  }), t.size === 0)
    return n;
  const i = /texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;
  return n.replace(i, (s, r, o) => t.has(r) ? `texture(${r}, _st_dirToEquirect(${o}))` : s);
}
class es {
  constructor(e, t) {
    this._audioTexture = null, this._needsAudio = !1, this._videoTextures = [];
    const i = this.getAllChannelSources(t);
    i.some((s) => s.kind === "audio") && (this._needsAudio = !0, this._audioTexture = {
      texture: $i(e),
      audioContext: null,
      analyser: null,
      stream: null,
      frequencyData: new Uint8Array(512),
      waveformData: new Uint8Array(512),
      width: 512,
      height: 2,
      initialized: !1
    });
    for (const s of i)
      s.kind === "webcam" ? this._videoTextures.find((o) => o.kind === "webcam") || this._videoTextures.push({
        texture: Ht(e),
        video: null,
        stream: null,
        width: 1,
        height: 1,
        ready: !1,
        kind: "webcam"
      }) : s.kind === "video" && (this._videoTextures.find((o) => o.kind === "video" && o.src === s.src) || this._videoTextures.push({
        texture: Ht(e),
        video: null,
        stream: null,
        width: 1,
        height: 1,
        ready: !1,
        kind: "video",
        src: s.src
      }));
  }
  // ===========================================================================
  // Accessors
  // ===========================================================================
  get needsAudio() {
    return this._needsAudio;
  }
  get needsWebcam() {
    return this._videoTextures.some((e) => e.kind === "webcam");
  }
  get videoSources() {
    return this._videoTextures.filter((e) => e.kind === "video" && !e.ready && e.src).map((e) => e.src);
  }
  get audioTexture() {
    return this._audioTexture;
  }
  get videoTextures() {
    return this._videoTextures;
  }
  // ===========================================================================
  // Initialization (require user gesture for audio/webcam)
  // ===========================================================================
  async initAudio() {
    if (!(!this._audioTexture || this._audioTexture.initialized))
      try {
        const e = await navigator.mediaDevices.getUserMedia({ audio: !0 }), t = new AudioContext(), i = t.createMediaStreamSource(e), s = t.createAnalyser();
        s.fftSize = 1024, s.smoothingTimeConstant = 0.8, i.connect(s), this._audioTexture.audioContext = t, this._audioTexture.analyser = s, this._audioTexture.stream = e, this._audioTexture.initialized = !0;
      } catch (e) {
        console.warn("Failed to initialize audio input:", e);
      }
  }
  async initWebcam() {
    const e = this._videoTextures.find((t) => t.kind === "webcam" && !t.ready);
    if (e)
      try {
        const t = await navigator.mediaDevices.getUserMedia({ video: !0 }), i = document.createElement("video");
        i.srcObject = t, i.muted = !0, i.playsInline = !0, await i.play(), e.video = i, e.stream = t, e.width = i.videoWidth, e.height = i.videoHeight, i.addEventListener("loadedmetadata", () => {
          e.width = i.videoWidth, e.height = i.videoHeight;
        }), e.ready = !0;
      } catch (t) {
        console.warn("Failed to initialize webcam:", t);
      }
  }
  async initVideo(e) {
    const t = this._videoTextures.find((s) => s.kind === "video" && s.src === e && !s.ready);
    if (!t)
      return;
    const i = document.createElement("video");
    i.src = e, i.muted = !0, i.loop = !0, i.playsInline = !0, i.crossOrigin = "anonymous", i.addEventListener("loadedmetadata", () => {
      t.width = i.videoWidth, t.height = i.videoHeight;
    });
    try {
      await i.play(), t.video = i, t.ready = !0;
    } catch (s) {
      console.warn(`Failed to play video '${e}':`, s);
    }
  }
  // ===========================================================================
  // Per-frame updates
  // ===========================================================================
  updateAudioTexture(e) {
    var t;
    (t = this._audioTexture) != null && t.analyser && (this._audioTexture.analyser.getByteFrequencyData(this._audioTexture.frequencyData), this._audioTexture.analyser.getByteTimeDomainData(this._audioTexture.waveformData), Di(e, this._audioTexture.texture, this._audioTexture.frequencyData, this._audioTexture.waveformData));
  }
  updateVideoTextures(e) {
    for (const t of this._videoTextures)
      !t.ready || !t.video || t.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || (Vi(e, t.texture, t.video), t.video.videoWidth > 0 && (t.width = t.video.videoWidth, t.height = t.video.videoHeight));
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(e) {
    var t, i, s, r;
    this._audioTexture && ((t = this._audioTexture.stream) == null || t.getTracks().forEach((o) => o.stop()), (i = this._audioTexture.audioContext) == null || i.close(), e.deleteTexture(this._audioTexture.texture));
    for (const o of this._videoTextures)
      (s = o.stream) == null || s.getTracks().forEach((a) => a.stop()), (r = o.video) == null || r.pause(), e.deleteTexture(o.texture);
    this._audioTexture = null, this._videoTextures = [];
  }
  // ===========================================================================
  // Helpers
  // ===========================================================================
  getAllChannelSources(e) {
    const t = [], i = e.passes;
    for (const s of [i.Image, i.BufferA, i.BufferB, i.BufferC, i.BufferD])
      s && (t.push(...s.channels), s.namedSamplers && t.push(...s.namedSamplers.values()));
    return t;
  }
}
class ts {
  constructor(e) {
    this.values = {}, this.definitions = e, this.initializeDefaults();
  }
  /**
   * Initialize all values to their definition defaults.
   */
  initializeDefaults() {
    for (const [e, t] of Object.entries(this.definitions))
      if (Z(t)) {
        const i = qe(t.struct);
        this.values[e] = new Float32Array(i.tightFloatsPerElement * t.count);
      } else J(t) ? this.values[e] = new Float32Array(me(t.type, t.count)) : this.values[e] = this.cloneValue(t.value);
  }
  /**
   * Clone a value to avoid mutation of arrays.
   */
  cloneValue(e) {
    return e instanceof Float32Array ? e.slice() : Array.isArray(e) ? [...e] : e;
  }
  /**
   * Get the definition for a uniform.
   */
  getDefinition(e) {
    return this.definitions[e];
  }
  /**
   * Get all definitions.
   */
  getDefinitions() {
    return this.definitions;
  }
  /**
   * Check if a uniform exists.
   */
  has(e) {
    return e in this.definitions;
  }
  /**
   * Get the current value of a uniform.
   */
  get(e) {
    const t = this.values[e];
    return t !== void 0 ? this.cloneValue(t) : void 0;
  }
  /**
   * Get all current values (returns a shallow copy).
   */
  getAll() {
    const e = {};
    for (const [t, i] of Object.entries(this.values))
      e[t] = this.cloneValue(i);
    return e;
  }
  /**
   * Set the value of a uniform.
   * Returns true if the value was set, false if the uniform doesn't exist.
   */
  set(e, t) {
    return this.has(e) ? (this.values[e] = this.cloneValue(t), !0) : !1;
  }
  /**
   * Set without cloning — caller is responsible for not mutating the value afterward.
   * For engine-internal use (e.g., array uniforms where data is immediately packed into UBO).
   */
  setRaw(e, t) {
    return this.has(e) ? (this.values[e] = t, !0) : !1;
  }
  /**
   * Get the internal reference without cloning. For engine-internal use only.
   */
  getRaw(e) {
    return this.values[e];
  }
  /**
   * Set multiple values at once.
   */
  setAll(e) {
    for (const [t, i] of Object.entries(e))
      i !== void 0 && this.set(t, i);
  }
  /**
   * Reset a single uniform to its default value.
   */
  reset(e) {
    const t = this.definitions[e];
    if (!t)
      return !1;
    if (Z(t)) {
      const i = qe(t.struct);
      this.values[e] = new Float32Array(i.tightFloatsPerElement * t.count);
    } else J(t) ? this.values[e] = new Float32Array(me(t.type, t.count)) : this.values[e] = this.cloneValue(t.value);
    return !0;
  }
  /**
   * Reset all uniforms to their default values.
   */
  resetAll() {
    this.initializeDefaults();
  }
  /**
   * Get the default value for a uniform.
   */
  getDefault(e) {
    const t = this.definitions[e];
    if (t) {
      if (Z(t)) {
        const i = qe(t.struct);
        return new Float32Array(i.tightFloatsPerElement * t.count);
      }
      return J(t) ? new Float32Array(me(t.type, t.count)) : this.cloneValue(t.value);
    }
  }
  /**
   * Iterate over all uniforms (name, definition, current value).
   */
  *entries() {
    for (const [e, t] of Object.entries(this.definitions))
      yield [e, t, this.values[e]];
  }
  /**
   * Get the number of uniforms.
   */
  get size() {
    return Object.keys(this.definitions).length;
  }
  /**
   * Check if there are any uniforms.
   */
  get isEmpty() {
    return this.size === 0;
  }
}
class ns {
  constructor(e, t, i) {
    this._ubos = [], this._uboMap = /* @__PURE__ */ new Map(), this._dirtyScalars = /* @__PURE__ */ new Set(), this._uniforms = t, this._store = new ts(t), this.initUBOs(e), i && this.applyInitialData(i);
    for (const [s, r] of Object.entries(t))
      X(r) || this._dirtyScalars.add(s);
  }
  // ===========================================================================
  // Accessors
  // ===========================================================================
  get ubos() {
    return this._ubos;
  }
  get store() {
    return this._store;
  }
  // ===========================================================================
  // Get / Set
  // ===========================================================================
  get(e) {
    return this._store.get(e);
  }
  getAll() {
    return this._store.getAll();
  }
  /**
   * Set the value of a custom uniform.
   * Dispatches to the appropriate handler based on uniform type.
   */
  set(e, t) {
    const i = this._uniforms[e];
    if (!i) {
      console.warn(`setUniformValue('${e}'): uniform not defined in config`);
      return;
    }
    J(i) ? this.setPlainArrayRaw(e, i, t) : Z(i) ? this.setStructArrayRaw(e, i, t) : this.setScalar(e, i, t);
  }
  setScalar(e, t, i) {
    const s = t.type;
    if ((s === "float" || s === "int") && typeof i != "number") {
      console.warn(`setUniformValue('${e}'): expected number for ${s}, got ${typeof i}`);
      return;
    }
    if (s === "bool" && typeof i != "boolean") {
      console.warn(`setUniformValue('${e}'): expected boolean, got ${typeof i}`);
      return;
    }
    if (s === "vec2" || s === "vec3" || s === "vec4") {
      if (!Array.isArray(i)) {
        console.warn(`setUniformValue('${e}'): expected array for ${s}, got ${typeof i}`);
        return;
      }
      const r = s === "vec2" ? 2 : s === "vec3" ? 3 : 4;
      if (i.length !== r) {
        console.warn(`setUniformValue('${e}'): expected array of length ${r} for ${s}, got ${i.length}`);
        return;
      }
    }
    this._store.set(e, i), this._dirtyScalars.add(e);
  }
  setPlainArrayRaw(e, t, i) {
    this._store.setRaw(e, i);
    const s = this._uboMap.get(e);
    if (!s)
      return;
    const r = me(t.type, t.count), o = me(t.type, 1);
    if (i.length > r) {
      console.warn(`setUniformValue('${e}'): data length ${i.length} exceeds max ${r}`);
      return;
    }
    if (i.length % o !== 0) {
      console.warn(`setUniformValue('${e}'): data length ${i.length} is not a multiple of ${o}`);
      return;
    }
    const a = i.length / o, c = Xt(t.type, a, i, s.paddedData);
    c !== s.paddedData && s.paddedData.set(c);
    const u = Wt(t.type, a);
    u < s.paddedData.length && s.paddedData.fill(0, u), s.activeCount = a, s.dirty = !0;
  }
  setStructArrayRaw(e, t, i) {
    this._store.setRaw(e, i);
    const s = this._uboMap.get(e);
    if (!s)
      return;
    const r = s.layout.strideFloats * t.count;
    if (i.length > r) {
      console.warn(`setUniformValue('${e}'): data length ${i.length} exceeds max ${r}`);
      return;
    }
    s.paddedData.set(i), i.length < s.paddedData.length && s.paddedData.fill(0, i.length), s.activeCount = Math.ceil(i.length / s.layout.strideFloats), s.dirty = !0;
  }
  setMultiple(e) {
    for (const [t, i] of Object.entries(e))
      i !== void 0 && this.set(t, i);
  }
  // ===========================================================================
  // Plain Array Helpers
  // ===========================================================================
  /**
   * Set an array uniform from structured JS arrays.
   * Flattens and packs automatically based on the uniform's declared type.
   */
  setArrayUniform(e, t) {
    const i = this._uniforms[e];
    if (!i || !J(i)) {
      console.warn(`setArrayUniform('${e}'): not an array uniform`);
      return;
    }
    const s = me(i.type, 1);
    if (t.length === 0) {
      this.set(e, new Float32Array(0));
      return;
    }
    const r = this._uboMap.get(e), o = r == null ? void 0 : r.scratch;
    if (typeof t[0] == "number") {
      const l = t;
      if (o) {
        for (let d = 0; d < l.length && d < o.length; d++)
          o[d] = l[d];
        this.set(e, o.subarray(0, l.length));
      } else
        this.set(e, new Float32Array(l));
      return;
    }
    const a = t;
    if (a.length > i.count) {
      console.warn(`setArrayUniform('${e}'): ${a.length} elements exceeds max ${i.count}`);
      return;
    }
    const c = a.length * s, u = o ?? new Float32Array(c);
    for (let l = 0; l < a.length; l++) {
      const d = a[l], h = l * s;
      for (let f = 0; f < s; f++)
        u[h + f] = d[f] ?? 0;
    }
    this.set(e, u.subarray(0, c));
  }
  /**
   * Set a single element of an array uniform by index.
   * Only repacks that element's std140 slot.
   */
  setArrayElement(e, t, i) {
    const s = this._uniforms[e];
    if (!s || !J(s)) {
      console.warn(`setArrayElement('${e}'): not an array uniform`);
      return;
    }
    const r = this._uboMap.get(e);
    if (!r)
      return;
    if (t < 0 || t >= s.count) {
      console.warn(`setArrayElement('${e}'): index ${t} out of range [0, ${s.count})`);
      return;
    }
    const o = me(s.type, 1), a = typeof i == "number" ? [i] : i, c = this._store.getRaw(e), u = t * o;
    for (let f = 0; f < o; f++)
      c[u + f] = a[f] ?? 0;
    const l = Wt(s.type, 1), d = t * l, h = new Float32Array(o);
    for (let f = 0; f < o; f++)
      h[f] = a[f] ?? 0;
    Xt(s.type, 1, h, r.paddedData.subarray(d, d + l)), t >= r.activeCount && (r.activeCount = t + 1), r.dirty = !0;
  }
  // ===========================================================================
  // Struct Array Helpers
  // ===========================================================================
  /**
   * Set a struct array uniform from per-field data.
   * Omitted fields preserve their existing values in the buffer.
   */
  setStructArrayUniform(e, t) {
    const i = this._uniforms[e];
    if (!i || !Z(i)) {
      console.warn(`setStructArrayUniform('${e}'): not a struct array uniform`);
      return;
    }
    const s = this._uboMap.get(e);
    if (!s)
      return;
    let r = 0;
    const o = {};
    for (const c of s.layout.fields) {
      const u = t[c.name];
      if (!u || u.length === 0)
        continue;
      const l = s.fieldScratch[c.name];
      if (typeof u[0] == "number") {
        const d = u;
        for (let h = 0; h < d.length && h < l.length; h++)
          l[h] = d[h];
        o[c.name] = l.subarray(0, d.length), r = Math.max(r, Math.floor(d.length / c.tightFloats));
      } else {
        const d = u;
        r = Math.max(r, d.length);
        const h = d.length * c.tightFloats;
        for (let f = 0; f < d.length; f++) {
          const y = d[f], w = f * c.tightFloats;
          for (let E = 0; E < c.tightFloats; E++)
            l[w + E] = y[E] ?? 0;
        }
        o[c.name] = l.subarray(0, h);
      }
    }
    if (r > i.count) {
      console.warn(`setStructArrayUniform('${e}'): ${r} elements exceeds max ${i.count}`);
      return;
    }
    Ki(s.layout, r, o, s.paddedData);
    const a = s.layout.strideFloats * r;
    a < s.paddedData.length && s.paddedData.fill(0, a), s.activeCount = r, s.dirty = !0;
  }
  /**
   * Set a single element of a struct array uniform by index.
   * Omitted fields preserve their existing values.
   */
  setStructArrayElement(e, t, i) {
    const s = this._uniforms[e];
    if (!s || !Z(s)) {
      console.warn(`setStructArrayElement('${e}'): not a struct array uniform`);
      return;
    }
    const r = this._uboMap.get(e);
    if (!r)
      return;
    if (t < 0 || t >= s.count) {
      console.warn(`setStructArrayElement('${e}'): index ${t} out of range [0, ${s.count})`);
      return;
    }
    const o = {};
    for (const a of r.layout.fields) {
      const c = i[a.name];
      c !== void 0 && (o[a.name] = typeof c == "number" ? [c] : c);
    }
    Yi(r.layout, t, o, r.paddedData), t >= r.activeCount && (r.activeCount = t + 1), r.dirty = !0;
  }
  // ===========================================================================
  // Shared Helpers
  // ===========================================================================
  /**
   * Set how many elements of a UBO uniform the shader should use.
   * Works for both plain array and struct array uniforms.
   */
  setActiveCount(e, t) {
    const i = this._uboMap.get(e);
    if (!i) {
      console.warn(`setActiveCount('${e}'): not a UBO uniform`);
      return;
    }
    if (t < 0 || t > i.def.count) {
      console.warn(`setActiveCount('${e}'): count ${t} out of range [0, ${i.def.count}]`);
      return;
    }
    i.activeCount = t;
  }
  // ===========================================================================
  // GL Binding
  // ===========================================================================
  /**
   * Bind custom uniform values to the current program.
   * Uploads dirty UBOs and re-binds changed scalar uniforms.
   */
  bindToProgram(e, t) {
    for (const i of this._ubos) {
      i.dirty && (e.bindBuffer(e.UNIFORM_BUFFER, i.buffer), e.bufferSubData(e.UNIFORM_BUFFER, 0, i.paddedData), i.dirty = !1);
      const s = t.custom.get(`${i.name}_count`);
      s && e.uniform1i(s, i.activeCount);
    }
    for (const i of this._dirtyScalars) {
      const s = this._uniforms[i];
      if (!s || X(s))
        continue;
      const r = this._store.get(i);
      if (r === void 0)
        continue;
      const o = t.custom.get(i);
      if (o)
        switch (s.type) {
          case "float":
            e.uniform1f(o, r);
            break;
          case "int":
            e.uniform1i(o, r);
            break;
          case "bool":
            e.uniform1i(o, r ? 1 : 0);
            break;
          case "vec2": {
            const a = r;
            e.uniform2f(o, a[0], a[1]);
            break;
          }
          case "vec3": {
            const a = r;
            e.uniform3f(o, a[0], a[1], a[2]);
            break;
          }
          case "vec4": {
            const a = r;
            e.uniform4f(o, a[0], a[1], a[2], a[3]);
            break;
          }
        }
    }
  }
  clearDirty() {
    this._dirtyScalars.clear();
  }
  markAllScalarsDirty() {
    for (const [e, t] of Object.entries(this._uniforms))
      X(t) || this._dirtyScalars.add(e);
  }
  bindUBOsToProgram(e, t, i) {
    for (const s of this._ubos) {
      const r = e.getUniformBlockIndex(t, `_ub_${s.name}`);
      r !== e.INVALID_INDEX && e.uniformBlockBinding(t, r, s.bindingPoint), i.set(`${s.name}_count`, e.getUniformLocation(t, `${s.name}_count`));
    }
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(e) {
    for (const t of this._ubos)
      e.deleteBuffer(t.buffer);
    this._ubos = [], this._uboMap.clear();
  }
  // ===========================================================================
  // Initial Data
  // ===========================================================================
  applyInitialData(e) {
    for (const [t, i] of Object.entries(e)) {
      const s = this._uniforms[t];
      s && (J(s) ? this.setArrayUniform(t, i) : Z(s) && this.setStructArrayUniform(t, i));
    }
  }
  // ===========================================================================
  // Initialization
  // ===========================================================================
  initUBOs(e) {
    const t = e.getParameter(e.MAX_UNIFORM_BLOCK_SIZE), i = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
    let s = 0;
    for (const [r, o] of Object.entries(this._uniforms))
      if (J(o)) {
        const a = this.createPlainArrayUBO(e, r, o, s, t, i);
        this._ubos.push(a), this._uboMap.set(r, a), s++;
      } else if (Z(o)) {
        const a = this.createStructArrayUBO(e, r, o, s, t, i);
        this._ubos.push(a), this._uboMap.set(r, a), s++;
      }
  }
  createPlainArrayUBO(e, t, i, s, r, o) {
    const a = Hi(i.type, i.count);
    this.validateUBOSize(t, a, s, r, o);
    const c = this.allocateBuffer(e, t, a, s);
    return {
      kind: "array",
      name: t,
      def: i,
      buffer: c,
      bindingPoint: s,
      byteSize: a,
      dirty: !1,
      paddedData: new Float32Array(a / 4),
      activeCount: 0,
      scratch: new Float32Array(me(i.type, i.count))
    };
  }
  createStructArrayUBO(e, t, i, s, r, o) {
    const a = qe(i.struct), c = Gi(a, i.count);
    this.validateUBOSize(t, c, s, r, o);
    const u = this.allocateBuffer(e, t, c, s), l = {};
    for (const d of a.fields)
      l[d.name] = new Float32Array(d.tightFloats * i.count);
    return {
      kind: "struct",
      name: t,
      def: i,
      buffer: u,
      bindingPoint: s,
      byteSize: c,
      dirty: !1,
      paddedData: new Float32Array(c / 4),
      activeCount: 0,
      layout: a,
      fieldScratch: l
    };
  }
  validateUBOSize(e, t, i, s, r) {
    if (t > s)
      throw new Error(`UBO '${e}' requires ${t} bytes but GL MAX_UNIFORM_BLOCK_SIZE is ${s}`);
    if (i >= r)
      throw new Error(`Too many UBO uniforms: binding point ${i} exceeds GL MAX_UNIFORM_BUFFER_BINDINGS (${r})`);
  }
  allocateBuffer(e, t, i, s) {
    const r = e.createBuffer();
    if (!r)
      throw new Error(`Failed to create UBO buffer for '${t}'`);
    return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, e.DYNAMIC_DRAW), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, s, r), r;
  }
}
class Kt {
  constructor(e) {
    this._frame = 0, this._time = 0, this._lastStepTime = null, this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null, this._keyStates = /* @__PURE__ */ new Map(), this._toggleStates = /* @__PURE__ */ new Map(), this._compilationErrors = [], this._scriptTextures = /* @__PURE__ */ new Map(), this._sharedVAO = null, this._disposed = !1, this._viewNames = [], this.gl = e.gl, this.project = e.project, this._onAssetError = e.onAssetError, this._width = this.gl.drawingBufferWidth, this._height = this.gl.drawingBufferHeight, this.initExtensions(), this._blackTexture = Ui(this.gl);
    const t = Oi(this.gl);
    this._keyboardTexture = {
      texture: t,
      width: 256,
      height: 3
    }, this.initProjectTextures(), this._media = new es(this.gl, e.project), this._uniformMgr = new ns(this.gl, e.project.uniforms, e.project.uniformData), e.viewNames && e.viewNames.length > 1 && (this._viewNames = e.viewNames), this.initRuntimePasses();
  }
  // ===========================================================================
  // Media Delegates (forwarded to MediaManager)
  // ===========================================================================
  async initAudio() {
    return this._media.initAudio();
  }
  updateAudioTexture() {
    this._media.updateAudioTexture(this.gl);
  }
  async initWebcam() {
    return this._media.initWebcam();
  }
  async initVideo(e) {
    return this._media.initVideo(e);
  }
  updateVideoTextures() {
    this._media.updateVideoTextures(this.gl);
  }
  /** Whether this project uses audio channels. */
  get needsAudio() {
    return this._media.needsAudio;
  }
  /** Whether this project uses webcam channels. */
  get needsWebcam() {
    return this._media.needsWebcam;
  }
  /** Get video sources that need initialization. */
  get videoSources() {
    return this._media.videoSources;
  }
  /**
   * Upload or update a named texture from JavaScript (for script channel).
   */
  updateTexture(e, t, i, s) {
    const r = this._scriptTextures.get(e), o = s instanceof Float32Array;
    if (r && r.width === t && r.height === i && r.isFloat === o) {
      const a = this.gl;
      a.bindTexture(a.TEXTURE_2D, r.texture), o ? a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, t, i, a.RGBA, a.FLOAT, s) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, t, i, a.RGBA, a.UNSIGNED_BYTE, s), a.bindTexture(a.TEXTURE_2D, null);
    } else {
      const a = zi(this.gl, (r == null ? void 0 : r.texture) ?? null, t, i, s);
      this._scriptTextures.set(e, { texture: a, width: t, height: i, isFloat: o });
    }
  }
  /**
   * Read pixels from a buffer pass (reads previous frame's data).
   */
  readPixels(e, t, i, s, r) {
    const o = this._passes.find((u) => u.name === e);
    if (!o)
      return console.warn(`readPixels: pass '${e}' not found`), new Uint8Array(s * r * 4);
    const a = this.gl;
    a.bindFramebuffer(a.FRAMEBUFFER, o.framebuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, o.previousTexture, 0);
    const c = new Uint8Array(s * r * 4);
    return a.readPixels(t, i, s, r, a.RGBA, a.UNSIGNED_BYTE, c), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, o.currentTexture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null), c;
  }
  // ===========================================================================
  // Public API
  // ===========================================================================
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get stats() {
    const e = this._lastStepTime === null ? 0 : this._time - this._lastStepTime;
    return {
      frame: this._frame,
      time: this._time,
      deltaTime: e,
      width: this._width,
      height: this._height
    };
  }
  /**
   * Get shader compilation errors (if any occurred during initialization).
   * Returns empty array if all shaders compiled successfully.
   */
  getCompilationErrors() {
    return this._compilationErrors;
  }
  /**
   * Check if there were any compilation errors.
   */
  hasErrors() {
    return this._compilationErrors.length > 0;
  }
  getUniformStore() {
    return this._uniformMgr.store;
  }
  getUniformValue(e) {
    return this._uniformMgr.get(e);
  }
  getUniformValues() {
    return this._uniformMgr.getAll();
  }
  setUniformValue(e, t) {
    this._uniformMgr.set(e, t);
  }
  setUniformValues(e) {
    this._uniformMgr.setMultiple(e);
  }
  setArrayUniform(e, t) {
    this._uniformMgr.setArrayUniform(e, t);
  }
  setArrayElement(e, t, i) {
    this._uniformMgr.setArrayElement(e, t, i);
  }
  setActiveCount(e, t) {
    this._uniformMgr.setActiveCount(e, t);
  }
  setStructArrayUniform(e, t) {
    this._uniformMgr.setStructArrayUniform(e, t);
  }
  setStructArrayElement(e, t, i) {
    this._uniformMgr.setStructArrayElement(e, t, i);
  }
  /** Export UBO data for HTML export (copies current padded data). */
  getUBOExportData() {
    return this._uniformMgr.ubos.map((e) => ({
      name: e.name,
      type: e.kind === "struct" ? "struct" : e.def.type,
      count: e.def.count,
      bindingPoint: e.bindingPoint,
      paddedData: new Float32Array(e.paddedData),
      struct: e.kind === "struct" ? e.def.struct : void 0
    }));
  }
  /**
   * Get the framebuffer for the Image pass (for presenting to screen).
   */
  getImageFramebuffer() {
    const e = this._passes.find((t) => t.name === "Image");
    return (e == null ? void 0 : e.framebuffer) ?? null;
  }
  /**
   * Bind the Image pass output as the READ_FRAMEBUFFER for blitting to screen.
   *
   * After the ping-pong swap, the rendered output is in previousTexture,
   * but the framebuffer is attached to currentTexture. This method temporarily
   * attaches previousTexture so blitFramebuffer reads the correct data.
   */
  bindImageForRead() {
    const e = this.gl, t = this._passes.find((i) => i.name === "Image");
    return t ? (e.bindFramebuffer(e.READ_FRAMEBUFFER, t.framebuffer), e.framebufferTexture2D(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.previousTexture, 0), !0) : !1;
  }
  /**
   * Restore the Image pass framebuffer to its normal state (attached to currentTexture).
   * Call after blitting to screen.
   */
  unbindImageForRead() {
    const e = this.gl, t = this._passes.find((i) => i.name === "Image");
    t && (e.framebufferTexture2D(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.currentTexture, 0), e.bindFramebuffer(e.READ_FRAMEBUFFER, null));
  }
  /**
   * Run one full frame of all passes.
   *
   * @param timeSeconds - global time in seconds (monotone, from App)
   * @param mouse - iMouse as [x, y, clickX, clickY]
   * @param touch - optional touch state for touch uniforms
   */
  step(e, t, i, s, r) {
    const o = this.gl, a = this._lastStepTime === null ? 0 : e - this._lastStepTime;
    this._lastStepTime = e, this._time = e;
    const c = /* @__PURE__ */ new Date(), u = s ?? {
      count: 0,
      touches: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      pinch: 1,
      pinchDelta: 0,
      pinchCenter: [0, 0]
    }, l = {
      iResolution: [this._width, this._height, 1],
      iTime: this._time,
      iTimeDelta: a,
      iFrame: this._frame,
      iMouse: t,
      iMousePressed: i,
      iDate: [
        c.getFullYear(),
        c.getMonth(),
        // 0-11 (matches Shadertoy)
        c.getDate(),
        // 1-31
        c.getHours() * 3600 + c.getMinutes() * 60 + c.getSeconds() + c.getMilliseconds() / 1e3
      ],
      iFrameRate: a > 0 ? 1 / a : 60,
      iTouchCount: u.count,
      iTouch: u.touches,
      iPinch: u.pinch,
      iPinchDelta: u.pinchDelta,
      iPinchCenter: u.pinchCenter,
      crossViewStates: r
    };
    o.viewport(0, 0, this._width, this._height);
    const d = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const h of d) {
      const f = this._passes.find((y) => y.name === h);
      f && (this.executePass(f, l), this.swapPassTextures(f));
    }
    this._uniformMgr.clearDirty(), this._frame += 1;
  }
  /**
   * Resize all internal render targets to new width/height.
   * Does not reset time or frame count.
   */
  resize(e, t) {
    this._width = e, this._height = t;
    const i = this.gl;
    for (const s of this._passes)
      i.deleteTexture(s.currentTexture), i.deleteTexture(s.previousTexture), i.deleteFramebuffer(s.framebuffer), s.currentTexture = ze(i, e, t), s.previousTexture = ze(i, e, t), s.framebuffer = jt(i, s.currentTexture);
  }
  /**
   * Reset frame counter and clear all render targets.
   * Used for playback controls to restart shader from frame 0.
   */
  reset() {
    this._frame = 0;
    const e = this.gl;
    for (const t of this._passes)
      e.bindFramebuffer(e.FRAMEBUFFER, t.framebuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.previousTexture, 0), e.clear(e.COLOR_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.currentTexture, 0);
    e.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  /**
   * Update keyboard key state (called from App on keydown/keyup events).
   *
   * @param keycode ASCII keycode (e.g., 65 for 'A')
   * @param isDown true if key pressed, false if released
   */
  updateKeyState(e, t) {
    const i = this._keyStates.get(e) || !1;
    if (this._keyStates.set(e, t), t && !i) {
      const s = this._toggleStates.get(e) || 0;
      this._toggleStates.set(e, s === 0 ? 1 : 0);
    }
  }
  /**
   * Update keyboard texture with current key states.
   * Should be called once per frame before rendering.
   */
  updateKeyboardTexture() {
    this._keyboardTexture && Ni(this.gl, this._keyboardTexture.texture, this._keyStates, this._toggleStates);
  }
  /**
   * Recompile a single pass with new GLSL source code.
   * Used for live editing - keeps the old shader running if compilation fails.
   *
   * @param passName - Name of the pass to recompile ('Image', 'BufferA', etc.)
   * @param newSource - New GLSL source code for the pass
   * @returns Object with success status and error message if failed
   */
  recompilePass(e, t) {
    const i = this.gl, s = this._passes.find((a) => a.name === e);
    if (!s)
      return { success: !1, error: `Pass '${e}' not found` };
    const r = this.project.passes[e];
    if (!r)
      return { success: !1, error: `Project pass '${e}' not found` };
    const { source: o } = this.buildFragmentShader(t, r.channels, r.namedSamplers);
    try {
      const a = zt(i, Gt, o);
      return i.deleteProgram(s.uniforms.program), s.uniforms = this.cacheUniformLocations(a, r.namedSamplers), r.glslSource = t, this._compilationErrors = this._compilationErrors.filter((c) => c.passName !== e), this._uniformMgr.markAllScalarsDirty(), { success: !0 };
    } catch (a) {
      return { success: !1, error: a instanceof Error ? a.message : String(a) };
    }
  }
  /**
   * Recompile common.glsl and all passes that use it.
   * Used for live editing of common code.
   *
   * @param newCommonSource - New GLSL source code for common.glsl
   * @returns Object with success status and errors for each failed pass
   */
  recompileCommon(e) {
    const t = this.project.commonSource;
    this.project.commonSource = e;
    const i = [], s = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const r of s) {
      const o = this.project.passes[r];
      if (!o)
        continue;
      const a = this.recompilePass(r, o.glslSource);
      a.success || i.push({ passName: r, error: a.error || "Unknown error" });
    }
    if (i.length > 0) {
      this.project.commonSource = t;
      for (const r of s) {
        const o = this.project.passes[r];
        if (!o || i.some((c) => c.passName === r))
          continue;
        const a = this.recompilePass(r, o.glslSource);
        a.success || (console.error(`Failed to revert ${r} to old common source:`, a.error), i.push({ passName: r, error: `Revert failed: ${a.error}` }));
      }
      return { success: !1, errors: i };
    }
    return { success: !0, errors: [] };
  }
  /**
   * Delete all GL resources.
   */
  dispose() {
    this._disposed = !0;
    const e = this.gl;
    for (const t of this._passes)
      e.deleteProgram(t.uniforms.program), e.deleteFramebuffer(t.framebuffer), e.deleteTexture(t.currentTexture), e.deleteTexture(t.previousTexture);
    this._sharedVAO && (e.deleteVertexArray(this._sharedVAO), this._sharedVAO = null);
    for (const t of this._textures)
      e.deleteTexture(t.texture);
    this._keyboardTexture && e.deleteTexture(this._keyboardTexture.texture), this._blackTexture && e.deleteTexture(this._blackTexture);
    for (const [, t] of this._scriptTextures)
      e.deleteTexture(t.texture);
    this._scriptTextures.clear(), this._uniformMgr.dispose(e), this._media.dispose(e), this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null;
  }
  // ===========================================================================
  // Initialization Helpers
  // ===========================================================================
  initExtensions() {
    const e = this.gl;
    if (!e.getExtension("EXT_color_buffer_float"))
      throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");
    e.getExtension("OES_texture_float_linear");
  }
  /**
   * Cache uniform locations for a compiled program.
   * Returns a PassUniformLocations object with all standard and custom uniform locations.
   */
  cacheUniformLocations(e, t) {
    const i = this.gl, s = /* @__PURE__ */ new Map();
    for (const [r, o] of Object.entries(this.project.uniforms))
      X(o) || s.set(r, i.getUniformLocation(e, r));
    return this._uniformMgr.bindUBOsToProgram(i, e, s), {
      program: e,
      iResolution: i.getUniformLocation(e, "iResolution"),
      iTime: i.getUniformLocation(e, "iTime"),
      iTimeDelta: i.getUniformLocation(e, "iTimeDelta"),
      iFrame: i.getUniformLocation(e, "iFrame"),
      iMouse: i.getUniformLocation(e, "iMouse"),
      iMousePressed: i.getUniformLocation(e, "iMousePressed"),
      iDate: i.getUniformLocation(e, "iDate"),
      iFrameRate: i.getUniformLocation(e, "iFrameRate"),
      iChannel: [
        i.getUniformLocation(e, "iChannel0"),
        i.getUniformLocation(e, "iChannel1"),
        i.getUniformLocation(e, "iChannel2"),
        i.getUniformLocation(e, "iChannel3")
      ],
      iChannelResolution: [
        i.getUniformLocation(e, "iChannelResolution[0]"),
        i.getUniformLocation(e, "iChannelResolution[1]"),
        i.getUniformLocation(e, "iChannelResolution[2]"),
        i.getUniformLocation(e, "iChannelResolution[3]")
      ],
      // Touch uniforms
      iTouchCount: i.getUniformLocation(e, "iTouchCount"),
      iTouch: [
        i.getUniformLocation(e, "iTouch0"),
        i.getUniformLocation(e, "iTouch1"),
        i.getUniformLocation(e, "iTouch2")
      ],
      iPinch: i.getUniformLocation(e, "iPinch"),
      iPinchDelta: i.getUniformLocation(e, "iPinchDelta"),
      iPinchCenter: i.getUniformLocation(e, "iPinchCenter"),
      custom: s,
      namedSamplers: (() => {
        const r = /* @__PURE__ */ new Map();
        if (t)
          for (const [o] of t)
            r.set(o, i.getUniformLocation(e, o));
        return r;
      })(),
      namedSamplerResolutions: (() => {
        const r = /* @__PURE__ */ new Map();
        if (t)
          for (const [o] of t)
            r.set(o, i.getUniformLocation(e, `${o}_resolution`));
        return r;
      })(),
      // Cross-view uniforms for multi-view projects
      crossViewMouse: (() => {
        const r = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            r.set(o, i.getUniformLocation(e, `iMouse_${o}`));
        return r;
      })(),
      crossViewResolution: (() => {
        const r = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            r.set(o, i.getUniformLocation(e, `iResolution_${o}`));
        return r;
      })(),
      crossViewMousePressed: (() => {
        const r = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            r.set(o, i.getUniformLocation(e, `iMousePressed_${o}`));
        return r;
      })()
    };
  }
  /**
   * Initialize external textures based on project.textures.
   *
   * NOTE: This function as written assumes that actual image loading
   * is handled elsewhere. For now we just construct an empty array.
   * In a real implementation, you would load images here.
   */
  initProjectTextures() {
    const e = this.gl;
    this._textures = [];
    for (const t of this.project.textures) {
      const i = e.createTexture();
      if (!i)
        throw new Error("Failed to create texture");
      e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      const s = {
        name: t.name,
        texture: i,
        width: 1,
        height: 1
      };
      this._textures.push(s);
      const r = new Image();
      r.crossOrigin = "anonymous", r.onload = () => {
        if (this._disposed || e.isContextLost())
          return;
        e.bindTexture(e.TEXTURE_2D, i), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1);
        const o = t.filter !== "nearest";
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, o ? e.LINEAR : e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, o ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST);
        const a = t.wrap === "clamp" ? e.CLAMP_TO_EDGE : e.REPEAT;
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, a), o && e.generateMipmap(e.TEXTURE_2D), s.width = r.width, s.height = r.height, console.log(`Loaded texture '${t.name}': ${r.width}x${r.height}`);
      }, r.onerror = () => {
        var o;
        console.error(`Failed to load texture '${t.name}' from ${t.source}`), (o = this._onAssetError) == null || o.call(this, { type: "texture", name: t.name, detail: t.source });
      }, r.src = t.source;
    }
  }
  /**
   * Compile shaders, create VAOs/FBOs/textures, and build RuntimePass array.
   */
  initRuntimePasses() {
    const e = this.gl, t = this.project, i = Ii(e);
    this._sharedVAO = i;
    const s = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const r of s) {
      const o = t.passes[r];
      if (!o)
        continue;
      const { source: a, lineMapping: c } = this.buildFragmentShader(o.glslSource, o.channels, o.namedSamplers);
      try {
        const u = zt(e, Gt, a), l = this.cacheUniformLocations(u, o.namedSamplers), d = ze(e, this._width, this._height), h = ze(e, this._width, this._height), f = jt(e, d), y = {
          name: r,
          projectChannels: o.channels,
          vao: i,
          uniforms: l,
          framebuffer: f,
          currentTexture: d,
          previousTexture: h,
          namedSamplers: o.namedSamplers
        };
        this._passes.push(y);
      } catch (u) {
        const l = u instanceof Error ? u.message : String(u), d = l.match(/ERROR:\s*\d+:(\d+):/);
        let h = !1, f = null;
        if (d) {
          const y = parseInt(d[1], 10);
          if (c.commonStartLine > 0 && c.commonLines > 0) {
            const w = c.commonStartLine + c.commonLines - 1;
            y >= c.commonStartLine && y <= w && (h = !0, f = y - c.commonStartLine + 1);
          }
          !h && c.userCodeStartLine > 0 && y >= c.userCodeStartLine && (f = y - c.userCodeStartLine + 1);
        }
        this._compilationErrors.push({
          passName: r,
          error: l,
          source: a,
          isFromCommon: h,
          originalLine: f,
          lineMapping: c
        }), console.error(`Failed to compile ${r}:`, l);
      }
    }
  }
  /**
   * Build complete fragment shader source with Shadertoy boilerplate.
   */
  buildFragmentShader(e, t, i) {
    return Ji(e, t, {
      commonSource: this.project.commonSource ?? "",
      ubos: this._uniformMgr.ubos.map((s) => ({
        name: s.name,
        def: s.def,
        count: s.def.count,
        structLayout: s.kind === "struct" ? s.layout : void 0
      })),
      uniforms: this.project.uniforms,
      namedSamplers: i,
      viewNames: this._viewNames.length > 1 ? this._viewNames : void 0
    });
  }
  /**
   * Set view names for multi-view projects.
   * This enables cross-view uniforms (iMouse_viewName, iResolution_viewName, etc.)
   * Must be called before shader compilation.
   */
  setViewNames(e) {
    this._viewNames = e;
  }
  // ===========================================================================
  // Pass Execution
  // ===========================================================================
  executePass(e, t) {
    const i = this.gl;
    i.bindFramebuffer(i.FRAMEBUFFER, e.framebuffer), i.useProgram(e.uniforms.program), i.bindVertexArray(e.vao), this.bindBuiltinUniforms(e.uniforms, t), this._uniformMgr.bindToProgram(i, e.uniforms), e.namedSamplers && e.namedSamplers.size > 0 ? this.bindNamedSamplers(e) : this.bindChannelTextures(e), i.drawArrays(i.TRIANGLES, 0, 3), i.bindVertexArray(null), i.useProgram(null), i.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  bindBuiltinUniforms(e, t) {
    const i = this.gl;
    e.iResolution && i.uniform3f(e.iResolution, t.iResolution[0], t.iResolution[1], t.iResolution[2]), e.iTime && i.uniform1f(e.iTime, t.iTime), e.iTimeDelta && i.uniform1f(e.iTimeDelta, t.iTimeDelta), e.iFrame && i.uniform1i(e.iFrame, t.iFrame), e.iMouse && i.uniform4f(e.iMouse, t.iMouse[0], t.iMouse[1], t.iMouse[2], t.iMouse[3]), e.iMousePressed && i.uniform1i(e.iMousePressed, t.iMousePressed ? 1 : 0), e.iDate && i.uniform4f(e.iDate, t.iDate[0], t.iDate[1], t.iDate[2], t.iDate[3]), e.iFrameRate && i.uniform1f(e.iFrameRate, t.iFrameRate), e.iTouchCount && i.uniform1i(e.iTouchCount, t.iTouchCount);
    for (let s = 0; s < 3; s++) {
      const r = e.iTouch[s];
      if (r) {
        const o = t.iTouch[s];
        i.uniform4f(r, o[0], o[1], o[2], o[3]);
      }
    }
    if (e.iPinch && i.uniform1f(e.iPinch, t.iPinch), e.iPinchDelta && i.uniform1f(e.iPinchDelta, t.iPinchDelta), e.iPinchCenter && i.uniform2f(e.iPinchCenter, t.iPinchCenter[0], t.iPinchCenter[1]), t.crossViewStates)
      for (const [s, r] of t.crossViewStates) {
        const o = e.crossViewMouse.get(s);
        o && i.uniform4f(o, r.mouse[0], r.mouse[1], r.mouse[2], r.mouse[3]);
        const a = e.crossViewResolution.get(s);
        a && i.uniform3f(a, r.resolution[0], r.resolution[1], r.resolution[2]);
        const c = e.crossViewMousePressed.get(s);
        c && i.uniform1i(c, r.mousePressed ? 1 : 0);
      }
  }
  bindChannelTextures(e) {
    const t = this.gl;
    for (let i = 0; i < 4; i++) {
      const s = e.projectChannels[i], r = this.resolveChannelTexture(s), o = this.resolveChannelResolution(s);
      t.activeTexture(t.TEXTURE0 + i), t.bindTexture(t.TEXTURE_2D, r);
      const a = e.uniforms.iChannel[i];
      a && t.uniform1i(a, i);
      const c = e.uniforms.iChannelResolution[i];
      c && t.uniform3f(c, o[0], o[1], 1);
    }
  }
  /**
   * Bind named samplers (standard mode).
   * Each named sampler gets its own texture unit.
   */
  bindNamedSamplers(e) {
    const t = this.gl;
    let i = 0;
    for (const [s, r] of e.namedSamplers) {
      const o = this.resolveChannelTexture(r), a = this.resolveChannelResolution(r);
      t.activeTexture(t.TEXTURE0 + i), t.bindTexture(t.TEXTURE_2D, o);
      const c = e.uniforms.namedSamplers.get(s);
      c && t.uniform1i(c, i);
      const u = e.uniforms.namedSamplerResolutions.get(s);
      u && t.uniform3f(u, a[0], a[1], 1), i++;
    }
  }
  /**
   * Resolve a ChannelSource to an actual WebGLTexture to bind.
   */
  resolveChannelTexture(e) {
    switch (e.kind) {
      case "none":
        if (!this._blackTexture)
          throw new Error("Black texture not initialized");
        return this._blackTexture;
      case "buffer": {
        const t = this._passes.find((i) => i.name === e.buffer);
        return t ? e.current ? t.currentTexture : t.previousTexture : (console.warn(`resolveChannelTexture: buffer '${e.buffer}' not found, using black`), this._blackTexture);
      }
      case "texture": {
        const t = this._textures.find((i) => i.name === e.name);
        return t ? t.texture : (console.warn(`resolveChannelTexture: texture '${e.name}' not found, using black`), this._blackTexture);
      }
      case "keyboard":
        if (!this._keyboardTexture)
          throw new Error("Internal error: keyboard texture not initialized");
        return this._keyboardTexture.texture;
      case "audio":
        return this._media.audioTexture ? this._media.audioTexture.texture : this._blackTexture;
      case "webcam": {
        const t = this._media.videoTextures.find((i) => i.kind === "webcam");
        return (t == null ? void 0 : t.texture) ?? this._blackTexture;
      }
      case "video": {
        const t = this._media.videoTextures.find((i) => i.kind === "video" && i.src === e.src);
        return (t == null ? void 0 : t.texture) ?? this._blackTexture;
      }
      case "script": {
        const t = this._scriptTextures.get(e.name);
        return (t == null ? void 0 : t.texture) ?? this._blackTexture;
      }
    }
  }
  /**
   * Resolve a ChannelSource to its resolution [width, height].
   * Returns [0, 0] for unused channels.
   */
  resolveChannelResolution(e) {
    switch (e.kind) {
      case "none":
        return [0, 0];
      case "buffer":
        return [this._width, this._height];
      case "texture": {
        const t = this._textures.find((i) => i.name === e.name);
        return t ? [t.width, t.height] : [0, 0];
      }
      case "keyboard":
        return [256, 3];
      case "audio":
        return this._media.audioTexture ? [this._media.audioTexture.width, this._media.audioTexture.height] : [0, 0];
      case "webcam": {
        const t = this._media.videoTextures.find((i) => i.kind === "webcam");
        return t ? [t.width, t.height] : [0, 0];
      }
      case "video": {
        const t = this._media.videoTextures.find((i) => i.kind === "video" && i.src === e.src);
        return t ? [t.width, t.height] : [0, 0];
      }
      case "script": {
        const t = this._scriptTextures.get(e.name);
        return t ? [t.width, t.height] : [0, 0];
      }
    }
  }
  /**
   * Swap current and previous textures for a pass (ping-pong).
   * Also reattach framebuffer to new current texture.
   */
  swapPassTextures(e) {
    const t = this.gl, i = e.currentTexture;
    e.currentTexture = e.previousTexture, e.previousTexture = i, t.bindFramebuffer(t.FRAMEBUFFER, e.framebuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e.currentTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null);
  }
}
class is {
  constructor(e) {
    this.overlay = null, this.container = e;
  }
  /**
   * Display shader compilation errors in an overlay.
   */
  show(e, t) {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "shader-error-overlay", this.container.appendChild(this.overlay));
    const i = e.filter((l) => l.isFromCommon), s = e.filter((l) => !l.isFromCommon), c = [...i.length > 0 ? [i[0]] : [], ...s].map(({ passName: l, error: d, isFromCommon: h, originalLine: f, lineMapping: y }) => {
      const w = d.replace(`Shader compilation failed:
`, ""), E = f;
      let R = w;
      E !== null && (R = w.replace(/ERROR:\s*\d+:(\d+):/g, `ERROR: 0:${E}:`));
      let m = null;
      if (h)
        m = t.commonSource;
      else {
        const p = t.passes[l];
        m = (p == null ? void 0 : p.glslSource) ?? null;
      }
      return {
        passName: h ? "common.glsl" : l,
        error: ss(R, y, h),
        codeContext: E !== null && m ? os(m, E) : null
      };
    }).map(({ passName: l, error: d, codeContext: h }) => `
      <div class="error-section">
        <div class="error-pass-name">${l}</div>
        <pre class="error-content">${Rn(d)}</pre>
        ${h ? `<pre class="error-code-context">${h}</pre>` : ""}
      </div>
    `).join("");
    this.overlay.innerHTML = `
      <div class="error-overlay-content">
        <div class="error-header">
          <span class="error-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM3.5 7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9z"/>
            </svg>
            Shader Compilation Failed
          </span>
          <button class="error-close" title="Dismiss">×</button>
        </div>
        <div class="error-body">
          ${c}
        </div>
      </div>
    `;
    const u = this.overlay.querySelector(".error-close");
    u && u.addEventListener("click", () => this.hide());
  }
  /**
   * Hide the error overlay.
   */
  hide() {
    this.overlay && (this.overlay.remove(), this.overlay = null);
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.hide();
  }
}
function ss(n, e, t) {
  return n.split(`
`).map((i) => {
    const s = i.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);
    if (s) {
      const [, , r, o] = s, a = parseInt(r, 10);
      let c = a;
      return t && e.commonStartLine > 0 ? c = a - e.commonStartLine + 1 : e.userCodeStartLine > 0 && a >= e.userCodeStartLine && (c = a - e.userCodeStartLine + 1), `Line ${c}: ${rs(o)}`;
    }
    return i;
  }).join(`
`);
}
function rs(n) {
  return n.includes("no matching overloaded function found") ? n + " (check function name spelling and argument types)" : n.includes("undeclared identifier") ? n + " (variable not declared — check spelling)" : n.includes("syntax error") ? n + " (check for missing semicolons, brackets, or commas)" : n.includes("is not a function") ? n + " (identifier exists but is not callable)" : n.includes("wrong operand types") ? n + " (type mismatch — check vec/float/int types)" : n;
}
function os(n, e) {
  const t = n.split(`
`);
  if (e < 1 || e > t.length)
    return null;
  const i = 3, s = Math.max(0, e - i - 1), r = Math.min(t.length, e + i);
  return t.slice(s, r).map((a, c) => {
    const u = s + c + 1, l = u === e, d = String(u).padStart(4, " "), h = Rn(a);
    return l ? `<span class="error-line-highlight">${d} │ ${h}</span>` : `<span class="context-line">${d} │ ${h}</span>`;
  }).join("");
}
function Rn(n) {
  const e = document.createElement("div");
  return e.textContent = n, e.innerHTML;
}
class Pe {
  constructor(e) {
    this.overlay = null, this.autoHideTimer = null, this.container = e;
  }
  /**
   * Show an error from setup() or onFrame().
   */
  showError(e, t) {
    this.clearAutoHide(), this.ensureOverlay();
    const i = t instanceof Error ? t.message : String(t), s = t instanceof Error && t.stack ? t.stack.split(`
`).slice(1, 4).join(`
`) : "";
    this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js ${e}() error
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${je(i)}</pre>
        ${s ? `<pre class="script-error-stack">${je(s)}</pre>` : ""}
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), Pe.AUTO_HIDE_MS);
  }
  /**
   * Show a persistent warning when onFrame() has been disabled.
   */
  showDisabled() {
    this.clearAutoHide(), this.ensureOverlay(), this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header disabled">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js onFrame() disabled
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">Too many consecutive errors. Reload to retry.</pre>
      </div>
    `, this.wireClose();
  }
  /**
   * Show a warning banner for asset load errors (textures, framebuffers).
   */
  showWarning(e, t) {
    this.clearAutoHide(), this.ensureOverlay(), this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header warning">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            ${je(e)}
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${je(t)}</pre>
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), Pe.AUTO_HIDE_MS);
  }
  /**
   * Hide the overlay.
   */
  hide() {
    this.clearAutoHide(), this.overlay && (this.overlay.remove(), this.overlay = null);
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.hide();
  }
  ensureOverlay() {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "script-error-overlay", this.container.appendChild(this.overlay));
  }
  wireClose() {
    var t;
    const e = (t = this.overlay) == null ? void 0 : t.querySelector(".script-error-close");
    e && e.addEventListener("click", () => this.hide());
  }
  clearAutoHide() {
    this.autoHideTimer !== null && (clearTimeout(this.autoHideTimer), this.autoHideTimer = null);
  }
}
Pe.AUTO_HIDE_MS = 5e3;
function je(n) {
  const e = document.createElement("div");
  return e.textContent = n, e.innerHTML;
}
const Ue = {};
for (let n = 0; n < 26; n++)
  Ue[`Key${String.fromCharCode(65 + n)}`] = 65 + n;
for (let n = 0; n < 10; n++)
  Ue[`Digit${n}`] = 48 + n;
for (let n = 1; n <= 12; n++)
  Ue[`F${n}`] = 111 + n;
Object.assign(Ue, {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  ShiftLeft: 16,
  ShiftRight: 16,
  ControlLeft: 17,
  ControlRight: 17,
  AltLeft: 18,
  AltRight: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Insert: 45,
  Delete: 46,
  NumLock: 144,
  ScrollLock: 145,
  Semicolon: 186,
  Equal: 187,
  Comma: 188,
  Minus: 189,
  Period: 190,
  Slash: 191,
  Backquote: 192,
  BracketLeft: 219,
  Backslash: 220,
  BracketRight: 221,
  Quote: 222
});
function Yt(n) {
  const e = Ue[n.code];
  return e !== void 0 && e >= 0 && e < 256 ? e : null;
}
class as {
  constructor(e, t, i) {
    this.mouse = [0, 0, 0, 0], this.isMouseDown = !1, this.stickyMouse = !1, this.touchState = {
      count: 0,
      touches: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      pinch: 1,
      pinchDelta: 0,
      pinchCenter: [0, 0]
    }, this.onFirstGesture = null, this.activePointers = /* @__PURE__ */ new Map(), this.gestureTriggered = !1, this.keyEvents = [], this.canvasListeners = [], this.canvas = e, this.pixelRatio = t, this.keyboardTarget = i ?? document, this.setupMouseTracking(), this.setupTouchTracking(), this.keydownHandler = (s) => {
      const r = Yt(s);
      r !== null && this.keyEvents.push({ keycode: r, down: !0 });
    }, this.keyupHandler = (s) => {
      const r = Yt(s);
      r !== null && this.keyEvents.push({ keycode: r, down: !1 });
    }, this.keyboardTarget.addEventListener("keydown", this.keydownHandler), this.keyboardTarget.addEventListener("keyup", this.keyupHandler);
  }
  /**
   * Drain and return accumulated key events since last call.
   */
  getAndClearKeyEvents() {
    const e = this.keyEvents;
    return this.keyEvents = [], e;
  }
  /**
   * Clean up all event listeners.
   */
  dispose() {
    this.keyboardTarget.removeEventListener("keydown", this.keydownHandler), this.keyboardTarget.removeEventListener("keyup", this.keyupHandler);
    for (const { event: e, handler: t } of this.canvasListeners)
      this.canvas.removeEventListener(e, t);
    this.canvasListeners = [];
  }
  triggerGesture() {
    var e;
    this.gestureTriggered || (this.gestureTriggered = !0, (e = this.onFirstGesture) == null || e.call(this));
  }
  setupMouseTracking() {
    const e = (r) => {
      const o = this.canvas.getBoundingClientRect(), a = (r.clientX - o.left) * this.pixelRatio, c = (o.height - (r.clientY - o.top)) * this.pixelRatio;
      return [a, c];
    }, t = (r) => {
      const [o, a] = e(r);
      this.isMouseDown = !0, this.mouse[0] = o, this.mouse[1] = a, this.mouse[2] = o, this.mouse[3] = a, this.triggerGesture();
    }, i = (r) => {
      if (!this.isMouseDown)
        return;
      const [o, a] = e(r);
      this.mouse[0] = o, this.mouse[1] = a;
    }, s = () => {
      this.isMouseDown = !1, this.stickyMouse || (this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3]));
    };
    this.canvas.addEventListener("mousedown", t), this.canvas.addEventListener("mousemove", i), this.canvas.addEventListener("mouseup", s), this.canvasListeners.push({ event: "mousedown", handler: t }, { event: "mousemove", handler: i }, { event: "mouseup", handler: s });
  }
  setupTouchTracking() {
    this.canvas.style.touchAction = "pan-y";
    const e = (o, a) => {
      const c = this.canvas.getBoundingClientRect(), u = (o - c.left) * this.pixelRatio, l = (c.height - (a - c.top)) * this.pixelRatio;
      return [u, l];
    }, t = (o) => {
      if (o.pointerType === "mouse")
        return;
      const [a, c] = e(o.clientX, o.clientY);
      this.activePointers.set(o.pointerId, {
        id: o.pointerId,
        x: a,
        y: c,
        startX: a,
        startY: c
      }), this.canvas.setPointerCapture(o.pointerId), this.updateTouchState(), this.activePointers.size === 1 && (this.isMouseDown = !0, this.mouse[0] = a, this.mouse[1] = c, this.mouse[2] = a, this.mouse[3] = c);
    }, i = (o) => {
      if (o.pointerType === "mouse")
        return;
      const a = this.activePointers.get(o.pointerId);
      if (!a)
        return;
      const [c, u] = e(o.clientX, o.clientY);
      a.x = c, a.y = u, this.updateTouchState(), this.activePointers.size === 1 && (this.mouse[0] = c, this.mouse[1] = u), o.preventDefault();
    }, s = (o) => {
      o.pointerType !== "mouse" && (this.activePointers.delete(o.pointerId), this.canvas.releasePointerCapture(o.pointerId), this.activePointers.size === 0 && (this.isMouseDown = !1, this.stickyMouse || (this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3]))), this.updateTouchState());
    }, r = (o) => {
      s(o);
    };
    this.canvas.addEventListener("pointerdown", t), this.canvas.addEventListener("pointermove", i), this.canvas.addEventListener("pointerup", s), this.canvas.addEventListener("pointercancel", r), this.canvasListeners.push({ event: "pointerdown", handler: t }, { event: "pointermove", handler: i }, { event: "pointerup", handler: s }, { event: "pointercancel", handler: r });
  }
  updateTouchState() {
    const e = Array.from(this.activePointers.values()), t = e.length;
    this.touchState.count = t;
    for (let i = 0; i < 3; i++)
      if (i < e.length) {
        const s = e[i];
        this.touchState.touches[i] = [s.x, s.y, s.startX, s.startY];
      } else
        this.touchState.touches[i] = [0, 0, 0, 0];
    if (t >= 2) {
      const i = e[0], s = e[1], r = s.x - i.x, o = s.y - i.y, a = Math.sqrt(r * r + o * o), c = s.startX - i.startX, u = s.startY - i.startY, l = Math.sqrt(c * c + u * u);
      if (l > 0) {
        const d = a / l;
        this.touchState.pinchDelta = d - this.touchState.pinch, this.touchState.pinch = d;
      }
      this.touchState.pinchCenter = [
        (i.x + s.x) / 2,
        (i.y + s.y) / 2
      ];
    } else
      this.touchState.pinchDelta = 0, t === 0 && (this.touchState.pinch = 1, this.touchState.pinchCenter = [0, 0]);
  }
}
class qt {
  get engine() {
    return this._engine;
  }
  get isContextLost() {
    return this._isContextLost;
  }
  constructor(e) {
    this._resizeDebounceTimer = null, this._contextLostOverlay = null, this._isContextLost = !1, this._mediaBanner = null, this._mediaInitialized = !1, this._overlays = /* @__PURE__ */ new Map(), this.onResize = null, this.onContextRestored = null, this.container = e.container, this._project = e.project, this._pixelRatio = e.pixelRatio, this._viewNames = e.viewNames, this.canvas = document.createElement("canvas"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.display = "block", this.container.appendChild(this.canvas), this.errorOverlay = new is(this.container), this.runtimeErrorOverlay = new Pe(this.container);
    const t = this.canvas.getContext("webgl2", {
      alpha: !1,
      antialias: !1,
      depth: !1,
      stencil: !1,
      preserveDrawingBuffer: !0,
      powerPreference: "high-performance"
    });
    if (!t)
      throw new Error("WebGL2 not supported");
    this.gl = t, this.setupContextLossHandling(), this.updateCanvasSize(), this._engine = new Kt({
      gl: this.gl,
      project: e.project,
      viewNames: e.viewNames,
      onAssetError: (i) => {
        const s = i.type === "texture" ? `Texture '${i.name}' failed to load` : `Framebuffer '${i.name}' error`;
        this.runtimeErrorOverlay.showWarning(s, i.detail);
      }
    }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), (this._engine.needsAudio || this._engine.needsWebcam) && this.showMediaBanner(), this._resizeObserver = new ResizeObserver(() => {
      this.updateCanvasSize(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._resizeDebounceTimer = setTimeout(() => {
        var i;
        this._resizeDebounceTimer = null, this._engine.resize(this.canvas.width, this.canvas.height), this._engine.reset(), (i = this.onResize) == null || i.call(this, this.canvas.width, this.canvas.height);
      }, 150);
    }), this._resizeObserver.observe(this.container), this.input = new as(this.canvas, this._pixelRatio, e.keyboardTarget), this.input.stickyMouse = this._project.stickyMouse, this.input.onFirstGesture = () => this.initMediaOnGesture(), this.initVideoFiles();
  }
  // ===========================================================================
  // Per-Frame Rendering
  // ===========================================================================
  /**
   * Step this view for one frame: forward input, run engine, blit to screen.
   */
  step(e, t) {
    if (!this._isContextLost) {
      for (const i of this.input.getAndClearKeyEvents())
        this._engine.updateKeyState(i.keycode, i.down);
      this._engine.updateKeyboardTexture(), this._engine.updateAudioTexture(), this._engine.updateVideoTextures(), this._engine.step(e, this.input.mouse, this.input.isMouseDown, {
        count: this.input.touchState.count,
        touches: this.input.touchState.touches,
        pinch: this.input.touchState.pinch,
        pinchDelta: this.input.touchState.pinchDelta,
        pinchCenter: this.input.touchState.pinchCenter
      }, t), this.input.touchState.pinchDelta = 0, this.presentToScreen();
    }
  }
  /**
   * Blit engine Image pass output to the canvas.
   */
  presentToScreen() {
    const e = this.gl;
    this._engine.bindImageForRead() && (e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.blitFramebuffer(0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height, e.COLOR_BUFFER_BIT, e.NEAREST), this._engine.unbindImageForRead());
  }
  // ===========================================================================
  // Cross-View State Getters
  // ===========================================================================
  getMouseState() {
    return [...this.input.mouse];
  }
  getResolution() {
    return [this.canvas.width, this.canvas.height, 1];
  }
  getMousePressed() {
    return this.input.isMouseDown;
  }
  hasErrors() {
    return this._engine.hasErrors();
  }
  // ===========================================================================
  // Script Info Overlays
  // ===========================================================================
  setOverlay(e, t) {
    let i = this._overlays.get(e);
    if (t === null) {
      i && i.classList.add("hidden");
      return;
    }
    i || (i = document.createElement("div"), i.className = `script-overlay ${e}`, this.container.appendChild(i), this._overlays.set(e, i)), i.textContent = t, i.classList.remove("hidden");
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    this.input.dispose(), this._resizeObserver.disconnect(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._engine.dispose(), this.errorOverlay.hide(), this.runtimeErrorOverlay.dispose(), this.hideMediaBanner(), this.hideContextLostOverlay();
    for (const t of this._overlays.values())
      t.remove();
    this._overlays.clear();
    const e = this.gl.getExtension("WEBGL_lose_context");
    e && e.loseContext(), this.container.removeChild(this.canvas);
  }
  // ===========================================================================
  // Canvas Sizing
  // ===========================================================================
  updateCanvasSize() {
    const e = this.container.getBoundingClientRect(), t = Math.floor(e.width * this._pixelRatio), i = Math.floor(e.height * this._pixelRatio);
    (this.canvas.width !== t || this.canvas.height !== i) && (this.canvas.width = t, this.canvas.height = i);
  }
  // ===========================================================================
  // Context Loss Handling
  // ===========================================================================
  setupContextLossHandling() {
    this.canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault(), this.handleContextLost();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      this.handleContextRestored();
    });
  }
  handleContextLost() {
    this._isContextLost = !0, this.showContextLostOverlay(), console.warn("WebGL context lost. Waiting for restoration...");
  }
  handleContextRestored() {
    var e;
    console.log("WebGL context restored. Reinitializing...");
    try {
      this._engine.dispose(), this._engine = new Kt({
        gl: this.gl,
        project: this._project,
        viewNames: this._viewNames,
        onAssetError: (t) => {
          const i = t.type === "texture" ? `Texture '${t.name}' failed to load` : `Framebuffer '${t.name}' error`;
          this.runtimeErrorOverlay.showWarning(i, t.detail);
        }
      }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), this._engine.resize(this.canvas.width, this.canvas.height), this.hideContextLostOverlay(), this._isContextLost = !1, (e = this.onContextRestored) == null || e.call(this), console.log("WebGL context successfully restored");
    } catch (t) {
      console.error("Failed to restore WebGL context:", t), this.showContextLostOverlay(!0);
    }
  }
  showContextLostOverlay(e = !1) {
    this._contextLostOverlay || (this._contextLostOverlay = document.createElement("div"), this._contextLostOverlay.className = "context-lost-overlay", this.container.appendChild(this._contextLostOverlay)), e ? this._contextLostOverlay.innerHTML = `
        <div class="context-lost-content">
          <div class="context-lost-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Unable to restore automatically.</div>
          <button class="context-lost-reload" onclick="location.reload()">Reload Page</button>
        </div>
      ` : this._contextLostOverlay.innerHTML = `
        <div class="context-lost-content">
          <div class="context-lost-spinner"></div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Attempting to restore...</div>
        </div>
      `;
  }
  hideContextLostOverlay() {
    this._contextLostOverlay && (this._contextLostOverlay.remove(), this._contextLostOverlay = null);
  }
  // ===========================================================================
  // Media Initialization
  // ===========================================================================
  initMediaOnGesture() {
    this._mediaInitialized || (this._mediaInitialized = !0, this.hideMediaBanner(), this._engine.needsAudio && this._engine.initAudio(), this._engine.needsWebcam && this._engine.initWebcam());
  }
  initVideoFiles() {
    for (const e of this._engine.videoSources)
      this._engine.initVideo(e);
  }
  showMediaBanner() {
    this._mediaBanner = document.createElement("div"), this._mediaBanner.className = "media-permission-banner";
    const e = [];
    this._engine.needsAudio && e.push("microphone"), this._engine.needsWebcam && e.push("webcam"), this._mediaBanner.innerHTML = `
      <span class="media-banner-text">This shader uses ${e.join(" and ")}</span>
      <button class="media-banner-button">Click to enable</button>
    `, this._mediaBanner.querySelector(".media-banner-button").addEventListener("click", () => {
      this.initMediaOnGesture();
    }), this.container.appendChild(this._mediaBanner);
  }
  hideMediaBanner() {
    this._mediaBanner && (this._mediaBanner.remove(), this._mediaBanner = null);
  }
}
class nt {
  constructor(e) {
    var t;
    this.values = {}, this.updaters = /* @__PURE__ */ new Map(), this.documentListeners = [], this.container = e.container, this.uniforms = e.uniforms, this.onChange = e.onChange;
    for (const [i, s] of Object.entries(this.uniforms))
      X(s) || s.hidden || (this.values[i] = ((t = e.initialValues) == null ? void 0 : t[i]) ?? s.value);
    this.render();
  }
  /**
   * Render all uniform controls.
   */
  render() {
    this.container.innerHTML = "", this.container.className = "uniform-controls";
    const e = Object.entries(this.uniforms);
    if (e.length === 0) {
      const r = document.createElement("div");
      r.className = "uniform-controls-empty", r.textContent = "No uniforms defined", this.container.appendChild(r);
      return;
    }
    const t = document.createElement("div");
    t.className = "uniform-controls-header";
    const i = document.createElement("button");
    i.className = "uniform-controls-reset", i.textContent = "Reset", i.title = "Reset all uniforms to defaults", i.addEventListener("click", () => this.resetToDefaults()), t.appendChild(i), this.container.appendChild(t);
    const s = document.createElement("div");
    s.className = "uniform-controls-list";
    for (const [r, o] of e) {
      if (X(o) || o.hidden)
        continue;
      const a = this.createControl(r, o);
      a && (this.updaters.set(r, a.update), s.appendChild(a.element));
    }
    this.container.appendChild(s);
  }
  /**
   * Create a control element for a uniform.
   */
  createControl(e, t) {
    if (X(t) || t.hidden)
      return null;
    switch (t.type) {
      case "float":
        return this.createFloatSlider(e, t);
      case "int":
        return this.createIntSlider(e, t);
      case "bool":
        return this.createBoolToggle(e, t);
      case "vec2":
        return this.createVec2Pad(e, t);
      case "vec3":
        return t.color ? this.createColorPicker(e, t) : this.createVecSliders(e, t, 3);
      case "vec4":
        return t.color ? this.createColorPicker4(e, t) : this.createVecSliders(e, t, 4);
      default:
        return console.warn(`Uniform '${e}': unknown type '${t.type}'`), null;
    }
  }
  // ===========================================================================
  // Shared Slider Row Helper
  // ===========================================================================
  createSliderRow(e) {
    const t = document.createElement("div");
    t.className = "uniform-control-label-row";
    const i = document.createElement("label");
    i.className = "uniform-control-label", i.textContent = e.label;
    const s = document.createElement("span");
    s.className = "uniform-control-value", s.textContent = e.format(e.value), t.appendChild(i), t.appendChild(s);
    const r = document.createElement("input");
    return r.type = "range", r.className = "uniform-control-slider", r.min = String(e.min), r.max = String(e.max), r.step = String(e.step), r.value = String(e.value), r.addEventListener("input", () => {
      const a = parseFloat(r.value);
      e.onInput(a), s.textContent = e.format(a);
    }), { elements: [t, r], update: (a) => {
      r.value = String(a), s.textContent = e.format(a);
    } };
  }
  // ===========================================================================
  // Float Slider
  // ===========================================================================
  createFloatSlider(e, t) {
    const i = t.step ?? 0.01, { elements: s, update: r } = this.createSliderRow({
      label: t.label ?? e,
      min: t.min ?? 0,
      max: t.max ?? 1,
      step: i,
      value: this.values[e],
      format: (a) => this.formatNumber(a, i),
      onInput: (a) => {
        this.values[e] = a, this.onChange(e, a);
      }
    }), o = document.createElement("div");
    o.className = "uniform-control uniform-control-float";
    for (const a of s)
      o.appendChild(a);
    return {
      element: o,
      update: (a) => r(a)
    };
  }
  // ===========================================================================
  // Int Slider
  // ===========================================================================
  createIntSlider(e, t) {
    const { elements: i, update: s } = this.createSliderRow({
      label: t.label ?? e,
      min: t.min ?? 0,
      max: t.max ?? 10,
      step: t.step ?? 1,
      value: this.values[e],
      format: (o) => String(Math.round(o)),
      onInput: (o) => {
        const a = Math.round(o);
        this.values[e] = a, this.onChange(e, a);
      }
    }), r = document.createElement("div");
    r.className = "uniform-control uniform-control-int";
    for (const o of i)
      r.appendChild(o);
    return {
      element: r,
      update: (o) => s(o)
    };
  }
  // ===========================================================================
  // Bool Toggle
  // ===========================================================================
  createBoolToggle(e, t) {
    const i = this.values[e], s = t.label ?? e, r = document.createElement("div");
    r.className = "uniform-control uniform-control-bool";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = s;
    const c = document.createElement("label");
    c.className = "uniform-control-toggle";
    const u = document.createElement("input");
    u.type = "checkbox", u.checked = i;
    const l = document.createElement("span");
    return l.className = "uniform-control-toggle-slider", u.addEventListener("change", () => {
      const d = u.checked;
      this.values[e] = d, this.onChange(e, d);
    }), c.appendChild(u), c.appendChild(l), o.appendChild(a), o.appendChild(c), r.appendChild(o), {
      element: r,
      update: (d) => {
        u.checked = d;
      }
    };
  }
  // ===========================================================================
  // Vec2 XY Pad
  // ===========================================================================
  createVec2Pad(e, t) {
    const i = this.values[e], s = t.min ?? [0, 0], r = t.max ?? [1, 1], o = t.label ?? e, a = document.createElement("div");
    a.className = "uniform-control uniform-control-vec2";
    const c = document.createElement("div");
    c.className = "uniform-control-label-row";
    const u = document.createElement("label");
    u.className = "uniform-control-label", u.textContent = o;
    const l = document.createElement("span");
    l.className = "uniform-control-value", l.textContent = this.formatVec2(i), c.appendChild(u), c.appendChild(l);
    const d = document.createElement("div");
    d.className = "uniform-control-xy-pad";
    const h = document.createElement("div");
    h.className = "uniform-control-xy-handle", d.appendChild(h);
    const f = (b) => {
      const T = (b[0] - s[0]) / (r[0] - s[0]) * 100, _ = (1 - (b[1] - s[1]) / (r[1] - s[1])) * 100;
      h.style.left = `${T}%`, h.style.top = `${_}%`;
    };
    f(i);
    let y = !1;
    const w = (b) => {
      const T = d.getBoundingClientRect(), _ = "touches" in b ? b.touches[0].clientX : b.clientX, A = "touches" in b ? b.touches[0].clientY : b.clientY;
      let v = Math.max(0, Math.min(1, (_ - T.left) / T.width)), P = Math.max(0, Math.min(1, (A - T.top) / T.height));
      const M = s[0] + v * (r[0] - s[0]), k = s[1] + (1 - P) * (r[1] - s[1]), z = [M, k];
      this.values[e] = z, h.style.left = `${v * 100}%`, h.style.top = `${P * 100}%`, l.textContent = this.formatVec2(z), this.onChange(e, z);
    }, E = (b) => {
      y = !0, w(b), b.preventDefault();
    }, R = (b) => {
      y && w(b);
    }, m = () => {
      y = !1;
    };
    d.addEventListener("mousedown", E), document.addEventListener("mousemove", R), document.addEventListener("mouseup", m), this.documentListeners.push({ type: "mousemove", handler: R }), this.documentListeners.push({ type: "mouseup", handler: m });
    const p = (b) => {
      y = !0, w(b), b.preventDefault();
    }, g = (b) => {
      y && w(b);
    };
    return d.addEventListener("touchstart", p), document.addEventListener("touchmove", g), document.addEventListener("touchend", m), this.documentListeners.push({ type: "touchmove", handler: g }), this.documentListeners.push({ type: "touchend", handler: m }), a.appendChild(c), a.appendChild(d), {
      element: a,
      update: (b) => {
        const T = b;
        f(T), l.textContent = this.formatVec2(T);
      }
    };
  }
  // ===========================================================================
  // Vec3 Color Picker
  // ===========================================================================
  createColorPicker(e, t) {
    const i = this.values[e], s = t.label ?? e, r = document.createElement("div");
    r.className = "uniform-control uniform-control-color";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = s;
    const c = document.createElement("span");
    c.className = "uniform-control-value", c.textContent = this.rgbToHex(i), o.appendChild(a), o.appendChild(c);
    const u = document.createElement("div");
    u.className = "uniform-control-color-wrapper";
    const l = document.createElement("input");
    l.type = "color", l.className = "uniform-control-color-input", l.value = this.rgbToHex(i);
    const d = document.createElement("div");
    return d.className = "uniform-control-color-swatch", d.style.backgroundColor = this.rgbToHex(i), l.addEventListener("input", () => {
      const h = this.hexToRgb(l.value);
      this.values[e] = h, c.textContent = l.value, d.style.backgroundColor = l.value, this.onChange(e, h);
    }), d.addEventListener("click", () => l.click()), u.appendChild(d), u.appendChild(l), r.appendChild(o), r.appendChild(u), {
      element: r,
      update: (h) => {
        const f = this.rgbToHex(h);
        l.value = f, d.style.backgroundColor = f, c.textContent = f;
      }
    };
  }
  // ===========================================================================
  // Vec4 Color Picker (with alpha)
  // ===========================================================================
  createColorPicker4(e, t) {
    var w, E, R;
    const i = this.values[e], s = t.label ?? e, r = document.createElement("div");
    r.className = "uniform-control uniform-control-color";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = s;
    const c = document.createElement("span");
    c.className = "uniform-control-value", c.textContent = this.rgbToHex(i), o.appendChild(a), o.appendChild(c);
    const u = document.createElement("div");
    u.className = "uniform-control-color-wrapper";
    const l = document.createElement("input");
    l.type = "color", l.className = "uniform-control-color-input", l.value = this.rgbToHex(i);
    const d = document.createElement("div");
    d.className = "uniform-control-color-swatch", d.style.backgroundColor = this.rgbToHex(i), l.addEventListener("input", () => {
      const m = this.hexToRgb(l.value), p = this.values[e];
      p[0] = m[0], p[1] = m[1], p[2] = m[2], c.textContent = l.value, d.style.backgroundColor = l.value, this.onChange(e, [...p]);
    }), d.addEventListener("click", () => l.click()), u.appendChild(d), u.appendChild(l);
    const h = ((w = t.step) == null ? void 0 : w[3]) ?? 0.01, { elements: f, update: y } = this.createSliderRow({
      label: "Alpha",
      min: ((E = t.min) == null ? void 0 : E[3]) ?? 0,
      max: ((R = t.max) == null ? void 0 : R[3]) ?? 1,
      step: h,
      value: i[3],
      format: (m) => this.formatNumber(m, h),
      onInput: (m) => {
        const p = this.values[e];
        p[3] = m, this.onChange(e, [...p]);
      }
    });
    r.appendChild(o), r.appendChild(u);
    for (const m of f)
      r.appendChild(m);
    return {
      element: r,
      update: (m) => {
        const p = m, g = this.rgbToHex(p);
        l.value = g, d.style.backgroundColor = g, c.textContent = g, y(p[3]);
      }
    };
  }
  // ===========================================================================
  // Vec3/Vec4 Component Sliders
  // ===========================================================================
  createVecSliders(e, t, i) {
    const s = this.values[e], r = t.label ?? e, o = i === 3 ? ["X", "Y", "Z"] : ["X", "Y", "Z", "W"], a = document.createElement("div");
    a.className = `uniform-control uniform-control-vec${i}`;
    const c = document.createElement("div");
    c.className = "uniform-control-label", c.textContent = r, a.appendChild(c);
    const u = [];
    return o.forEach((l, d) => {
      var m, p, g, b, T;
      const h = ((m = t.step) == null ? void 0 : m[d]) ?? 0.01, { elements: f, update: y } = this.createSliderRow({
        label: l,
        min: ((p = t.min) == null ? void 0 : p[d]) ?? 0,
        max: ((g = t.max) == null ? void 0 : g[d]) ?? 1,
        step: h,
        value: s[d],
        format: (_) => this.formatNumber(_, h),
        onInput: (_) => {
          const A = this.values[e];
          A[d] = _, this.onChange(e, [...A]);
        }
      }), [w, E] = f;
      w.classList.add("uniform-control-vec-slider-row"), (b = w.querySelector(".uniform-control-label")) == null || b.classList.add("uniform-control-vec-component"), (T = w.querySelector(".uniform-control-value")) == null || T.classList.add("uniform-control-vec-value"), E.classList.add("uniform-control-vec-slider");
      const R = document.createElement("div");
      R.className = "uniform-control-vec-component-group", R.appendChild(w), R.appendChild(E), u.push(y), a.appendChild(R);
    }), {
      element: a,
      update: (l) => {
        const d = l;
        u.forEach((h, f) => h(d[f]));
      }
    };
  }
  // ===========================================================================
  // Utility Methods
  // ===========================================================================
  formatNumber(e, t) {
    const i = String(t), s = i.indexOf("."), r = s === -1 ? 0 : i.length - s - 1;
    return e.toFixed(r);
  }
  formatVec2(e) {
    return `(${e[0].toFixed(2)}, ${e[1].toFixed(2)})`;
  }
  rgbToHex(e) {
    const t = Math.round(e[0] * 255), i = Math.round(e[1] * 255), s = Math.round(e[2] * 255);
    return `#${t.toString(16).padStart(2, "0")}${i.toString(16).padStart(2, "0")}${s.toString(16).padStart(2, "0")}`;
  }
  hexToRgb(e) {
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? [
      parseInt(t[1], 16) / 255,
      parseInt(t[2], 16) / 255,
      parseInt(t[3], 16) / 255
    ] : [0, 0, 0];
  }
  // ===========================================================================
  // Public Methods
  // ===========================================================================
  /**
   * Update a uniform value externally (e.g., from reset).
   */
  setValue(e, t) {
    var i;
    e in this.uniforms && (this.values[e] = t, (i = this.updaters.get(e)) == null || i(t));
  }
  /**
   * Reset all uniforms to their default values.
   */
  resetToDefaults() {
    for (const [e, t] of Object.entries(this.uniforms))
      X(t) || t.hidden || (this.setValue(e, t.value), this.onChange(e, t.value));
  }
  /**
   * Destroy the controls and clean up.
   */
  destroy() {
    for (const { type: e, handler: t } of this.documentListeners)
      document.removeEventListener(e, t);
    this.documentListeners = [], this.container.innerHTML = "", this.updaters.clear();
  }
}
class cs {
  constructor(e) {
    if (this.toggleButton = null, this.controls = null, this.collapsible = e.collapsible ?? !0, this.isOpen = this.collapsible ? e.startOpen ?? !1 : !0, this.wrapper = document.createElement("div"), this.wrapper.className = "uniforms-panel-wrapper", this.collapsible || this.wrapper.classList.add("inline"), this.collapsible && (this.toggleButton = document.createElement("button"), this.toggleButton.className = "uniforms-toggle-button", this.toggleButton.title = "Toggle Uniforms Panel", this.toggleButton.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      `, this.toggleButton.addEventListener("click", () => this.toggle()), this.wrapper.appendChild(this.toggleButton)), this.panel = document.createElement("div"), this.panel.className = "uniforms-panel", !Object.values(e.uniforms).some((s) => Ie(s))) {
      this.wrapper.style.display = "none", e.container.appendChild(this.wrapper);
      return;
    }
    if (this.collapsible) {
      const s = document.createElement("div");
      s.className = "uniforms-panel-header";
      const r = document.createElement("span");
      r.textContent = "Uniforms", s.appendChild(r);
      const o = document.createElement("button");
      o.className = "uniforms-panel-close", o.innerHTML = "&times;", o.title = "Close", o.addEventListener("click", () => this.hide()), s.appendChild(o), this.panel.appendChild(s);
    }
    const i = document.createElement("div");
    if (i.className = "uniforms-panel-content", this.panel.appendChild(i), this.controls = new nt({
      container: i,
      uniforms: e.uniforms,
      initialValues: e.initialValues,
      onChange: e.onChange
    }), !this.collapsible) {
      const s = i.querySelectorAll(".uniform-control-float > .uniform-control-label-row, .uniform-control-int > .uniform-control-label-row");
      for (const r of s) {
        const o = r.parentElement;
        for (; r.firstChild; )
          o.insertBefore(r.firstChild, r);
        r.remove();
      }
    }
    this.wrapper.appendChild(this.panel), this.collapsible && !this.isOpen && this.panel.classList.add("closed"), e.container.appendChild(this.wrapper);
  }
  /**
   * Update a uniform value from external source.
   */
  setValue(e, t) {
    var i;
    (i = this.controls) == null || i.setValue(e, t);
  }
  /**
   * Show the panel.
   */
  show() {
    var e;
    this.collapsible && (this.isOpen = !0, (e = this.toggleButton) == null || e.classList.add("hidden"), this.panel.classList.remove("closed"));
  }
  /**
   * Hide the panel.
   */
  hide() {
    var e;
    this.collapsible && (this.isOpen = !1, this.panel.classList.add("closed"), (e = this.toggleButton) == null || e.classList.remove("hidden"));
  }
  /**
   * Toggle panel visibility.
   */
  toggle() {
    this.collapsible && (this.isOpen ? this.hide() : this.show());
  }
  /**
   * Check if panel is visible.
   */
  isVisible() {
    return this.isOpen;
  }
  /**
   * Destroy the panel.
   */
  destroy() {
    var e;
    (e = this.controls) == null || e.destroy(), this.wrapper.remove();
  }
}
const ht = (n) => n.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
function ls(n, e) {
  const t = us(n, e), i = new Blob([t], { type: "text/html" }), r = `${n.root.split("/").pop() || "shader"}.html`, o = URL.createObjectURL(i), a = document.createElement("a");
  a.href = o, a.download = r, a.click(), URL.revokeObjectURL(o), console.log(`Exported: ${r}`);
}
function us(n, e) {
  var b, T, _, A;
  const t = n.meta.title, i = n.commonSource ?? "", s = e.getUniformValues(), r = e.getUBOExportData(), o = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"], a = [];
  let c = !1, u = !1;
  for (const v of o) {
    const P = n.passes[v];
    if (!P)
      continue;
    const M = P.channels.map((k) => k.kind === "buffer" ? `buffer:${k.buffer}` : k.kind === "texture" ? "procedural" : k.kind === "keyboard" ? (c = !0, "keyboard") : k.kind === "script" ? (u = !0, `script:${k.name}`) : k.kind === "audio" || k.kind === "webcam" || k.kind === "video" ? "black" : "none");
    a.push({
      name: v,
      source: P.glslSource,
      channels: P.channels,
      channelTypes: M
    });
  }
  const l = !!((b = n.script) != null && b.setup || (T = n.script) != null && T.onFrame), d = Object.entries(n.uniforms).filter(([, v]) => !X(v)), h = [];
  for (const [v, P] of d) {
    if (X(P))
      continue;
    const M = s[v] ?? P.value;
    if (P.type === "float" || P.type === "int")
      h.push(`  '${v}': ${M}`);
    else if (P.type === "bool")
      h.push(`  '${v}': ${M ? 1 : 0}`);
    else if (P.type === "vec2") {
      const k = M;
      h.push(`  '${v}': [${k[0]}, ${k[1]}]`);
    } else if (P.type === "vec3") {
      const k = M;
      h.push(`  '${v}': [${k[0]}, ${k[1]}, ${k[2]}]`);
    } else if (P.type === "vec4") {
      const k = M;
      h.push(`  '${v}': [${k[0]}, ${k[1]}, ${k[2]}, ${k[3]}]`);
    }
  }
  const f = d.map(([v, P]) => `uniform ${P.type === "bool" ? "bool" : P.type} ${v};`).join(`
`), y = r.map((v) => {
    if (v.struct) {
      const P = Object.entries(v.struct).map(([M, k]) => `  ${k} ${M};`).join(`
`);
      return `// Struct array uniform: ${v.name} (max ${v.count})
struct _st_${v.name} {
${P}
};
layout(std140) uniform _ub_${v.name} {
  _st_${v.name} ${v.name}[${v.count}];
};
uniform int ${v.name}_count;`;
    }
    return `// Array uniform: ${v.name} (max ${v.count})
layout(std140) uniform _ub_${v.name} {
  ${v.type} ${v.name}[${v.count}];
};
uniform int ${v.name}_count;`;
  }).join(`

`), w = r.map((v) => {
    const P = Array.from(v.paddedData).map((M) => M.toFixed(6)).join(", ");
    return `  { name: '${v.name}', type: '${v.type}', count: ${v.count}, binding: ${v.bindingPoint}, data: new Float32Array([${P}]) }`;
  }).join(`,
`);
  let E = "", R = "";
  l && ((_ = n.script) != null && _.setup && (E = n.script.setup.toString()), (A = n.script) != null && A.onFrame && (R = n.script.onFrame.toString()));
  const m = c ? `
// --- Keyboard helpers ---
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;
const int KEY_SPACE = 32; const int KEY_ENTER = 13; const int KEY_TAB = 9; const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8; const int KEY_DELETE = 46; const int KEY_SHIFT = 16;
const int KEY_CTRL = 17; const int KEY_ALT = 18;
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;
float keyDown(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x; }
float keyToggle(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x; }
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
` : "", p = a.map((v) => `  { name: '${v.name}', source: \`${ht(v.source)}\`, channels: ${JSON.stringify(v.channelTypes)} }`).join(`,
`), g = `#version 300 es
precision highp float;

const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}

uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

${y}
${f}
${m}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #fff; }
    body { display: flex; align-items: center; justify-content: center; }
    .container {
      width: 90vw;
      max-width: 1200px;
      aspect-ratio: 16 / 9;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
    }
    canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div class="container">
    <canvas id="canvas"></canvas>
  </div>
  <script>
// Shader Sandbox Export - ${t}
// Generated ${(/* @__PURE__ */ new Date()).toISOString()}

// ── Constants ──

const VERTEX_SHADER = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
\`;

const FRAGMENT_PREAMBLE = \`${ht(g)}\`;

const FRAGMENT_SUFFIX = \`
out vec4 fragColor;
void main() { mainImage(fragColor, gl_FragCoord.xy); }
\`;

const COMMON_SOURCE = \`${ht(i)}\`;

const PASSES = [
${p}
];

const UNIFORM_VALUES = {
${h.join(`,
`)}
};

const UBO_DATA = [
${w}
];

// ── WebGL Setup ──

const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true });
if (!gl) { alert('WebGL2 not supported'); throw new Error('WebGL2 not supported'); }

const floatExt = gl.getExtension('EXT_color_buffer_float');
if (!floatExt) console.warn('EXT_color_buffer_float not supported');

// Fullscreen triangle
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(0);
gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

// ── Helper Textures ──

function createProceduralTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  const data = new Uint8Array(8 * 8 * 4);
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = (y * 8 + x) * 4;
      const c = (x + y) % 2;
      data[i] = c ? 204 : 51; data[i+1] = c ? 26 : 51;
      data[i+2] = c ? 204 : 51; data[i+3] = 255;
    }
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 8, 8, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return tex;
}

function createBlackTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  return tex;
}

const proceduralTex = createProceduralTexture();
const blackTex = createBlackTexture();
${c ? `
// ── Keyboard Texture (256x3) ──
// Row 0: current key state, Row 1: key down events, Row 2: toggle state
const keyboardTex = gl.createTexture();
const keyboardData = new Uint8Array(256 * 3);
gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 256, 3, 0, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const keyStates = new Uint8Array(256);     // row 0: held
const keyDown_ev = new Uint8Array(256);    // row 1: down this frame
const keyToggle_st = new Uint8Array(256);  // row 2: toggle

document.addEventListener('keydown', e => {
  const k = e.keyCode;
  if (k < 256) {
    if (!keyStates[k]) {
      keyDown_ev[k] = 255;
      keyToggle_st[k] = keyToggle_st[k] ? 0 : 255;
    }
    keyStates[k] = 255;
  }
});
document.addEventListener('keyup', e => {
  const k = e.keyCode;
  if (k < 256) keyStates[k] = 0;
});

function updateKeyboardTexture() {
  keyboardData.set(keyStates, 0);
  keyboardData.set(keyDown_ev, 256);
  keyboardData.set(keyToggle_st, 512);
  gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
  gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 3, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
  keyDown_ev.fill(0);
}
` : ""}
${u || l ? `
// ── Script Textures ──
const scriptTextures = new Map();

function updateScriptTexture(name, w, h, data) {
  const existing = scriptTextures.get(name);
  const isFloat = data instanceof Float32Array;
  const internalFormat = isFloat ? gl.RGBA32F : gl.RGBA;
  const type = isFloat ? gl.FLOAT : gl.UNSIGNED_BYTE;
  if (existing && existing.width === w && existing.height === h) {
    gl.bindTexture(gl.TEXTURE_2D, existing.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, type, data);
  } else {
    const tex = existing ? existing.texture : gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, gl.RGBA, type, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    scriptTextures.set(name, { texture: tex, width: w, height: h });
  }
}
` : ""}
// ── Shader Compilation ──

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    console.error(source.split('\\n').map((l,i) => (i+1) + ': ' + l).join('\\n'));
    throw new Error('Shader compile failed');
  }
  return shader;
}

function createProgram(fragSource) {
  const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error('Program link failed: ' + gl.getProgramInfoLog(program));
  }
  return program;
}

function createRenderTexture(w, h) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

function createFramebuffer(tex) {
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  return fb;
}

// ── Initialize Passes ──

const container = canvas.parentElement;
let width = canvas.width = container.clientWidth * devicePixelRatio;
let height = canvas.height = container.clientHeight * devicePixelRatio;

const runtimePasses = PASSES.map(pass => {
  const fragSource = FRAGMENT_PREAMBLE +
    (COMMON_SOURCE ? '\\n// Common\\n' + COMMON_SOURCE + '\\n' : '') +
    '\\n// User code\\n' + pass.source + FRAGMENT_SUFFIX;
  const program = createProgram(fragSource);
  const currentTexture = createRenderTexture(width, height);
  const previousTexture = createRenderTexture(width, height);
  const framebuffer = createFramebuffer(currentTexture);

  // Cache uniform locations
  const uniforms = {
    iResolution: gl.getUniformLocation(program, 'iResolution'),
    iTime: gl.getUniformLocation(program, 'iTime'),
    iTimeDelta: gl.getUniformLocation(program, 'iTimeDelta'),
    iFrame: gl.getUniformLocation(program, 'iFrame'),
    iMouse: gl.getUniformLocation(program, 'iMouse'),
    iMousePressed: gl.getUniformLocation(program, 'iMousePressed'),
    iDate: gl.getUniformLocation(program, 'iDate'),
    iFrameRate: gl.getUniformLocation(program, 'iFrameRate'),
    iChannel: [0,1,2,3].map(i => gl.getUniformLocation(program, 'iChannel' + i)),
    iChannelResolution: gl.getUniformLocation(program, 'iChannelResolution'),
    custom: {},
    uboCountLocs: {},
  };

  // Scalar uniform locations
  for (const name of Object.keys(UNIFORM_VALUES)) {
    uniforms.custom[name] = gl.getUniformLocation(program, name);
  }

  // UBO block bindings and count locations
  for (const ubo of UBO_DATA) {
    const blockIndex = gl.getUniformBlockIndex(program, '_ub_' + ubo.name);
    if (blockIndex !== gl.INVALID_INDEX) {
      gl.uniformBlockBinding(program, blockIndex, ubo.binding);
    }
    uniforms.uboCountLocs[ubo.name] = gl.getUniformLocation(program, ubo.name + '_count');
  }

  return { name: pass.name, channels: pass.channels, program, framebuffer, currentTexture, previousTexture, uniforms };
});

// ── UBO Buffers ──

const uboBuffers = UBO_DATA.map(ubo => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.bufferData(gl.UNIFORM_BUFFER, ubo.data, gl.DYNAMIC_DRAW);
  gl.bindBufferBase(gl.UNIFORM_BUFFER, ubo.binding, buffer);
  return { name: ubo.name, buffer, count: ubo.count, data: ubo.data };
});

const findPass = name => runtimePasses.find(p => p.name === name);
${l ? `
// ── Script Setup ──

const scriptSetup = ${E || "null"};
const scriptOnFrame = ${R || "null"};

const scriptEngine = {
  setUniformValue(name, value) {
    // Check if this is an array uniform (Float32Array)
    if (value instanceof Float32Array) {
      const ubo = uboBuffers.find(u => u.name === name);
      if (ubo) {
        // Pack to std140: user provides tight data, we need to pad
        // For simplicity, copy directly (assume already padded or vec4/mat4)
        const len = Math.min(value.length, ubo.data.length);
        ubo.data.set(value.subarray(0, len));
        gl.bindBuffer(gl.UNIFORM_BUFFER, ubo.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, ubo.data);
      }
    } else {
      UNIFORM_VALUES[name] = value;
    }
  },
  getUniformValue(name) {
    return UNIFORM_VALUES[name];
  },
  updateTexture(name, w, h, data) {
    updateScriptTexture(name, w, h, data);
  },
  readPixels(passName, x, y, w, h) {
    const pass = findPass(passName);
    if (!pass) return new Uint8Array(w * h * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.previousTexture, 0);
    const pixels = new Uint8Array(w * h * 4);
    gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
    return pixels;
  },
  get width() { return width; },
  get height() { return height; },
  setOverlay() {},
};

try {
  if (scriptSetup) scriptSetup(scriptEngine);
} catch(e) { console.error('script setup error:', e); }
` : ""}
// ── Mouse ──

let mouse = [0, 0, 0, 0];
let mouseDown = false;
canvas.addEventListener('mousedown', e => {
  mouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * width;
  const y = (1 - (e.clientY - rect.top) / rect.height) * height;
  mouse[0] = x; mouse[1] = y;
  mouse[2] = x; mouse[3] = y;
});
canvas.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const rect = canvas.getBoundingClientRect();
  mouse[0] = (e.clientX - rect.left) / rect.width * width;
  mouse[1] = (1 - (e.clientY - rect.top) / rect.height) * height;
});
canvas.addEventListener('mouseup', () => {
  mouseDown = false;
  mouse[2] = -Math.abs(mouse[2]);
  mouse[3] = -Math.abs(mouse[3]);
});

// ── Resize ──

let resizeTimer = null;
new ResizeObserver(() => {
  const newW = container.clientWidth * devicePixelRatio;
  const newH = container.clientHeight * devicePixelRatio;
  canvas.width = newW;
  canvas.height = newH;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    width = newW;
    height = newH;
    runtimePasses.forEach(p => {
      [p.currentTexture, p.previousTexture].forEach(tex => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null);
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, p.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, p.currentTexture, 0);
    });
    frame = 0;
    startTime = performance.now() / 1000;
    lastTime = 0;
  }, 150);
}).observe(container);

// ── Animation Loop ──

let frame = 0;
let startTime = performance.now() / 1000;
let lastTime = 0;

function render(now) {
  requestAnimationFrame(render);

  const time = now / 1000 - startTime;
  const deltaTime = Math.max(0.001, time - lastTime);
  lastTime = time;

  const date = new Date();
  const iDate = [date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000];
${c ? `
  updateKeyboardTexture();` : ""}
${l ? `
  // Run script onFrame
  try {
    if (scriptOnFrame) scriptOnFrame(scriptEngine, time, deltaTime, frame);
  } catch(e) { console.error('script onFrame error:', e); }
` : ""}
  gl.bindVertexArray(vao);

  runtimePasses.forEach(pass => {
    gl.useProgram(pass.program);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.viewport(0, 0, width, height);

    // Built-in uniforms
    gl.uniform3f(pass.uniforms.iResolution, width, height, 1);
    gl.uniform1f(pass.uniforms.iTime, time);
    gl.uniform1f(pass.uniforms.iTimeDelta, deltaTime);
    gl.uniform1i(pass.uniforms.iFrame, frame);
    gl.uniform4fv(pass.uniforms.iMouse, mouse);
    gl.uniform1i(pass.uniforms.iMousePressed, mouseDown ? 1 : 0);
    gl.uniform4fv(pass.uniforms.iDate, iDate);
    gl.uniform1f(pass.uniforms.iFrameRate, 1 / deltaTime);

    // Scalar custom uniforms
    for (const [name, value] of Object.entries(UNIFORM_VALUES)) {
      const loc = pass.uniforms.custom[name];
      if (!loc) continue;
      if (Array.isArray(value)) {
        if (value.length === 2) gl.uniform2fv(loc, value);
        else if (value.length === 3) gl.uniform3fv(loc, value);
        else if (value.length === 4) gl.uniform4fv(loc, value);
      } else if (typeof value === 'number') {
        gl.uniform1f(loc, value);
      }
    }

    // UBO count uniforms
    for (const ubo of UBO_DATA) {
      const countLoc = pass.uniforms.uboCountLocs[ubo.name];
      if (countLoc) gl.uniform1i(countLoc, ubo.count);
    }

    // Bind channels
    const channelRes = new Float32Array(12); // iChannelResolution[4] × vec3
    pass.channels.forEach((ch, i) => {
      gl.activeTexture(gl.TEXTURE0 + i);
      if (ch === 'none') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch === 'procedural') {
        gl.bindTexture(gl.TEXTURE_2D, proceduralTex);
        channelRes[i*3] = 8; channelRes[i*3+1] = 8; channelRes[i*3+2] = 1;
      } else if (ch === 'keyboard') {
        gl.bindTexture(gl.TEXTURE_2D, ${c ? "keyboardTex" : "blackTex"});
        channelRes[i*3] = 256; channelRes[i*3+1] = 3; channelRes[i*3+2] = 1;
      } else if (ch === 'black') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch.startsWith('buffer:')) {
        const srcPass = findPass(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, srcPass ? srcPass.previousTexture : blackTex);
        channelRes[i*3] = width; channelRes[i*3+1] = height; channelRes[i*3+2] = 1;
      } else if (ch.startsWith('script:')) {
        const stex = scriptTextures?.get(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, stex ? stex.texture : blackTex);
        if (stex) { channelRes[i*3] = stex.width; channelRes[i*3+1] = stex.height; channelRes[i*3+2] = 1; }
      } else {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      }
      gl.uniform1i(pass.uniforms.iChannel[i], i);
    });

    if (pass.uniforms.iChannelResolution) {
      gl.uniform3fv(pass.uniforms.iChannelResolution, channelRes);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Swap textures
    const temp = pass.currentTexture;
    pass.currentTexture = pass.previousTexture;
    pass.previousTexture = temp;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
  });

  // Blit Image pass to screen
  const imagePass = findPass('Image');
  if (imagePass) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.previousTexture, 0);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, imagePass.framebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.currentTexture, 0);
  }

  frame++;
}

requestAnimationFrame(render);
  <\/script>
</body>
</html>`;
}
class ds {
  constructor(e, t, i) {
    this.isRecording = !1, this.mediaRecorder = null, this.recordedChunks = [], this.recordingIndicator = null, this.canvas = e, this.container = t, this.projectRoot = i;
  }
  /**
   * Toggle recording on/off.
   * If paused, calls unpause callback before starting.
   */
  toggle(e, t) {
    this.isRecording ? this.stop() : this.start(e, t);
  }
  /**
   * Start recording the canvas as WebM video.
   */
  start(e, t) {
    if (!MediaRecorder.isTypeSupported("video/webm")) {
      console.error("WebM recording not supported in this browser");
      return;
    }
    e && t();
    const i = this.canvas.captureStream(60);
    this.mediaRecorder = new MediaRecorder(i, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 8e6
      // 8 Mbps for high quality
    }), this.recordedChunks = [], this.mediaRecorder.ondataavailable = (s) => {
      s.data.size > 0 && this.recordedChunks.push(s.data);
    }, this.mediaRecorder.onstop = () => {
      const s = new Blob(this.recordedChunks, { type: "video/webm" }), r = this.projectRoot.split("/").pop() || "shader", o = /* @__PURE__ */ new Date(), a = o.getFullYear().toString() + (o.getMonth() + 1).toString().padStart(2, "0") + o.getDate().toString().padStart(2, "0") + "-" + o.getHours().toString().padStart(2, "0") + o.getMinutes().toString().padStart(2, "0") + o.getSeconds().toString().padStart(2, "0"), c = `shadertoy-${r}-${a}.webm`, u = URL.createObjectURL(s), l = document.createElement("a");
      l.href = u, l.download = c, l.click(), URL.revokeObjectURL(u), console.log(`Recording saved: ${c}`);
    }, this.mediaRecorder.start(), this.isRecording = !0, this.showRecordingIndicator(), console.log("Recording started");
  }
  /**
   * Stop recording and trigger download.
   */
  stop() {
    this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop(), this.isRecording = !1, this.mediaRecorder = null, this.hideRecordingIndicator(), console.log("Recording stopped");
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.isRecording && this.stop(), this.hideRecordingIndicator();
  }
  /**
   * Show the recording indicator (pulsing red dot in corner).
   */
  showRecordingIndicator() {
    this.recordingIndicator || (this.recordingIndicator = document.createElement("div"), this.recordingIndicator.className = "recording-indicator", this.recordingIndicator.innerHTML = `
      <span class="recording-dot"></span>
      <span class="recording-text">REC</span>
    `, this.container.appendChild(this.recordingIndicator));
  }
  /**
   * Hide the recording indicator.
   */
  hideRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
}
class hs {
  constructor(e) {
    this.frameCount = 0, this.totalFrameCount = 0, this.lastFpsUpdate = 0, this.currentFps = 0, this.isStatsOpen = !1, this.container = e, this.statsContainer = document.createElement("div"), this.statsContainer.className = "stats-container", this.fpsDisplay = document.createElement("button"), this.fpsDisplay.className = "fps-counter", this.fpsDisplay.textContent = "0 FPS", this.fpsDisplay.title = "Click to show stats", this.fpsDisplay.addEventListener("click", () => this.toggle()), this.statsGrid = document.createElement("div"), this.statsGrid.className = "stats-grid", this.timeDisplay = document.createElement("div"), this.timeDisplay.className = "stat-item", this.timeDisplay.innerHTML = '<span class="stat-value">0:00</span><span class="stat-label">time</span>', this.statsGrid.appendChild(this.timeDisplay), this.frameDisplay = document.createElement("div"), this.frameDisplay.className = "stat-item", this.frameDisplay.innerHTML = '<span class="stat-value">0</span><span class="stat-label">frame</span>', this.statsGrid.appendChild(this.frameDisplay), this.resolutionDisplay = document.createElement("div"), this.resolutionDisplay.className = "stat-item", this.resolutionDisplay.innerHTML = '<span class="stat-value">0×0</span><span class="stat-label">res</span>', this.statsGrid.appendChild(this.resolutionDisplay), this.statsContainer.appendChild(this.statsGrid), this.statsContainer.appendChild(this.fpsDisplay), this.container.appendChild(this.statsContainer);
  }
  /**
   * Update FPS counter and stats. Call once per frame.
   */
  update(e, t) {
    this.frameCount++, this.totalFrameCount++, this.isStatsOpen && this.updateFrameDisplay(), e - this.lastFpsUpdate >= 1 && (this.currentFps = this.frameCount / (e - this.lastFpsUpdate), this.fpsDisplay.textContent = `${Math.round(this.currentFps)} FPS`, this.frameCount = 0, this.lastFpsUpdate = e, this.isStatsOpen && (this.updateTimeDisplay(t), this.updateResolutionDisplay()));
  }
  /**
   * Reset all counters.
   */
  reset() {
    this.frameCount = 0, this.totalFrameCount = 0, this.lastFpsUpdate = 0, this.isStatsOpen && (this.updateTimeDisplay(0), this.updateFrameDisplay(), this.updateResolutionDisplay());
  }
  /**
   * Update resolution display with current canvas dimensions.
   */
  updateResolution(e, t) {
    this.resolutionDisplay.querySelector(".stat-value").textContent = `${e}×${t}`;
  }
  /**
   * Clean up DOM.
   */
  dispose() {
    this.statsContainer.remove();
  }
  toggle() {
    this.isStatsOpen = !this.isStatsOpen, this.statsGrid.classList.toggle("open", this.isStatsOpen), this.statsContainer.classList.toggle("open", this.isStatsOpen), this.isStatsOpen && (this.updateFrameDisplay(), this.updateResolutionDisplay());
  }
  updateFrameDisplay() {
    let e;
    this.totalFrameCount >= 1e6 ? e = (this.totalFrameCount / 1e6).toFixed(1) + "M" : this.totalFrameCount >= 1e3 ? e = (this.totalFrameCount / 1e3).toFixed(1) + "K" : e = this.totalFrameCount.toString(), this.frameDisplay.querySelector(".stat-value").textContent = e;
  }
  updateTimeDisplay(e) {
    const t = Math.floor(e), i = Math.floor(t / 3600), s = Math.floor(t % 3600 / 60), r = t % 60;
    let o;
    i > 0 ? o = `${i}:${s.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}` : o = `${s}:${r.toString().padStart(2, "0")}`, this.timeDisplay.querySelector(".stat-value").textContent = o;
  }
  updateResolutionDisplay() {
    this.resolutionDisplay.querySelector(".stat-value").textContent || (this.resolutionDisplay.querySelector(".stat-value").textContent = "0×0");
  }
}
class fs {
  constructor(e, t) {
    this.isMenuOpen = !1, this.container = e, this.controlsContainer = document.createElement("div"), this.controlsContainer.className = "playback-controls", this.menuButton = document.createElement("button"), this.menuButton.className = "controls-menu-button", this.menuButton.title = "Controls", this.menuButton.textContent = "+", this.menuButton.addEventListener("click", () => this.toggleMenu()), this.controlsGrid = document.createElement("div"), this.controlsGrid.className = "controls-grid", this.playPauseButton = document.createElement("button"), this.playPauseButton.className = "control-button", this.playPauseButton.title = "Play/Pause (Space)", this.playPauseButton.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
      </svg>
    `, this.playPauseButton.addEventListener("click", () => t.onTogglePlayPause());
    const i = document.createElement("button");
    i.className = "control-button", i.title = "Reset (R)", i.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>
    `, i.addEventListener("click", () => t.onReset());
    const s = document.createElement("button");
    s.className = "control-button", s.title = "Screenshot (S)", s.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
      </svg>
    `, s.addEventListener("click", () => t.onScreenshot());
    const r = document.createElement("button");
    r.className = "control-button", r.title = "Record Video", r.innerHTML = `
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5"/>
      </svg>
    `, r.addEventListener("click", () => t.onToggleRecording());
    const o = document.createElement("button");
    o.className = "control-button", o.title = "Export HTML", o.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `, o.addEventListener("click", () => t.onExportHTML());
    const a = document.createElement("button");
    a.className = "control-button", a.title = "Record", a.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
      </svg>
    `, a.addEventListener("click", () => t.onRender());
    const c = document.createElement("button");
    c.className = "control-button", c.title = "Close", c.textContent = "−", c.style.fontSize = "20px", c.style.fontWeight = "300", c.addEventListener("click", () => this.toggleMenu()), this.controlsGrid.appendChild(this.playPauseButton), this.controlsGrid.appendChild(i), this.controlsGrid.appendChild(o), this.controlsGrid.appendChild(a), this.controlsGrid.appendChild(s), this.controlsGrid.appendChild(r);
    const u = document.createElement("div");
    this.controlsGrid.appendChild(u), this.controlsGrid.appendChild(c), this.controlsContainer.appendChild(this.controlsGrid), this.controlsContainer.appendChild(this.menuButton), this.container.appendChild(this.controlsContainer);
  }
  /**
   * Update the play/pause button icon.
   */
  setPaused(e) {
    e ? this.playPauseButton.innerHTML = `
        <svg viewBox="0 0 16 16">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
      ` : this.playPauseButton.innerHTML = `
        <svg viewBox="0 0 16 16">
          <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
        </svg>
      `;
  }
  /**
   * Clean up DOM.
   */
  dispose() {
    this.controlsContainer.remove();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen, this.menuButton.textContent = this.isMenuOpen ? "−" : "+", this.controlsGrid.classList.toggle("open", this.isMenuOpen), this.controlsContainer.classList.toggle("open", this.isMenuOpen);
  }
}
const ms = [
  ["720p", 1280, 720],
  ["1080p", 1920, 1080],
  ["1440p", 2560, 1440],
  ["4K", 3840, 2160],
  ["8K", 7680, 4320]
];
class ps {
  constructor(e, t, i, s, r) {
    this.uniformControls = null, this.aspectLocked = !0, this.timeSlider = null, this.sliderMinInput = null, this.sliderMaxInput = null, this.isBusy = !1, this.callbacks = r, this.canvasWidth = t, this.canvasHeight = i, this.aspectRatio = t / i, this.hasBuffers = r.hasBufferPasses(), this.currentTime = r.getCurrentTime(), this.backdrop = document.createElement("div"), this.backdrop.className = "screenshot-panel-backdrop", this.backdrop.addEventListener("click", (g) => {
      g.target === this.backdrop && this.close();
    }), this.panel = document.createElement("div"), this.panel.className = "screenshot-panel";
    const o = document.createElement("div");
    o.className = "screenshot-panel-header", o.innerHTML = `
      <div class="screenshot-panel-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
        </svg>
        Screenshot
      </div>
    `;
    const a = document.createElement("button");
    a.className = "screenshot-panel-close", a.textContent = "×", a.addEventListener("click", () => this.close()), o.appendChild(a);
    const c = document.createElement("div");
    c.className = "screenshot-panel-body";
    const u = this.createSection("Resolution");
    this.presetSelect = document.createElement("select"), this.presetSelect.className = "screenshot-input screenshot-select";
    const l = document.createElement("option");
    l.value = "current", l.textContent = `Current (${t}×${i})`, this.presetSelect.appendChild(l);
    for (const [g, b, T] of ms) {
      const _ = document.createElement("option");
      _.value = `${b}x${T}`, _.textContent = `${g} (${b}×${T})`, this.presetSelect.appendChild(_);
    }
    const d = document.createElement("option");
    d.value = "custom", d.textContent = "Custom", this.presetSelect.appendChild(d), this.presetSelect.addEventListener("change", () => this.onPresetChange()), u.appendChild(this.presetSelect);
    const h = document.createElement("div");
    h.className = "screenshot-res-row", this.widthInput = this.createNumberInput(t, 1, 7680), this.heightInput = this.createNumberInput(i, 1, 4320), this.widthInput.addEventListener("input", () => {
      if (this.presetSelect.value = "custom", this.aspectLocked) {
        const g = parseInt(this.widthInput.value) || 1;
        this.heightInput.value = String(Math.round(g / this.aspectRatio));
      }
    }), this.heightInput.addEventListener("input", () => {
      if (this.presetSelect.value = "custom", this.aspectLocked) {
        const g = parseInt(this.heightInput.value) || 1;
        this.widthInput.value = String(Math.round(g * this.aspectRatio));
      }
    });
    const f = document.createElement("span");
    f.className = "screenshot-dim-separator", f.textContent = "×", this.lockButton = document.createElement("button"), this.lockButton.className = "screenshot-aspect-lock active", this.lockButton.title = "Lock aspect ratio", this.lockButton.innerHTML = `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
    </svg>`, this.lockButton.addEventListener("click", () => this.toggleAspectLock()), h.appendChild(this.widthInput), h.appendChild(f), h.appendChild(this.heightInput), h.appendChild(this.lockButton), u.appendChild(h);
    const y = this.createSection("Time");
    if (!this.hasBuffers) {
      const b = Math.max(0, this.currentTime - 5), T = this.currentTime + 5, _ = document.createElement("div");
      _.className = "screenshot-range-row", this.sliderMinInput = document.createElement("input"), this.sliderMinInput.type = "number", this.sliderMinInput.className = "screenshot-input screenshot-range-input", this.sliderMinInput.value = b.toFixed(1), this.sliderMinInput.step = "0.1", this.sliderMinInput.min = "0", this.sliderMinInput.addEventListener("input", () => this.updateSliderRange()), this.sliderMaxInput = document.createElement("input"), this.sliderMaxInput.type = "number", this.sliderMaxInput.className = "screenshot-input screenshot-range-input", this.sliderMaxInput.value = T.toFixed(1), this.sliderMaxInput.step = "0.1", this.sliderMaxInput.min = "0", this.sliderMaxInput.addEventListener("input", () => this.updateSliderRange());
      const A = document.createElement("span");
      A.className = "screenshot-dim-separator", A.textContent = "to";
      const v = document.createElement("span");
      v.className = "screenshot-unit", v.textContent = "sec", _.appendChild(this.sliderMinInput), _.appendChild(A), _.appendChild(this.sliderMaxInput), _.appendChild(v), y.appendChild(_), this.timeSlider = document.createElement("input"), this.timeSlider.type = "range", this.timeSlider.className = "screenshot-time-slider", this.timeSlider.min = String(b), this.timeSlider.max = String(T), this.timeSlider.step = String(1 / 60), this.timeSlider.value = String(this.currentTime), this.timeSlider.addEventListener("input", () => {
        const P = parseFloat(this.timeSlider.value);
        this.timeInput.value = P.toFixed(3), this.callbacks.renderPreviewAtTime(P);
      }), y.appendChild(this.timeSlider);
    }
    const w = document.createElement("div");
    w.className = "screenshot-time-row", this.timeInput = document.createElement("input"), this.timeInput.type = "number", this.timeInput.className = "screenshot-input", this.timeInput.value = this.currentTime.toFixed(3), this.timeInput.step = String(1 / 60), this.timeInput.min = "0", this.hasBuffers || this.timeInput.addEventListener("input", () => {
      const g = parseFloat(this.timeInput.value) || 0;
      this.timeSlider && (this.timeSlider.value = String(g)), this.callbacks.renderPreviewAtTime(g);
    });
    const E = document.createElement("span");
    if (E.className = "screenshot-unit", E.textContent = "sec", w.appendChild(this.timeInput), w.appendChild(E), this.hasBuffers) {
      const g = document.createElement("button");
      g.className = "screenshot-btn screenshot-btn-secondary", g.textContent = "Render Preview", g.addEventListener("click", () => this.renderBufferPreview()), w.appendChild(g);
    }
    if (y.appendChild(w), this.hasBuffers) {
      const g = document.createElement("div");
      g.className = "screenshot-notice", g.textContent = "This shader has feedback buffers. Preview requires computing all frames from the start.", y.appendChild(g);
    }
    let R = null;
    if (s && Object.values(s).some((g) => Ie(g))) {
      R = this.createCollapsibleSection("Uniforms");
      const g = R.querySelector(".screenshot-section-content");
      this.uniformControls = new nt({
        container: g,
        uniforms: s,
        onChange: (b, T) => {
          if (r.setUniformValue(b, T), !this.hasBuffers) {
            const _ = parseFloat(this.timeInput.value) || 0;
            this.callbacks.renderPreviewAtTime(_);
          }
        }
      });
    }
    this.progressEl = document.createElement("div"), this.progressEl.className = "screenshot-progress", this.progressEl.innerHTML = `
      <div class="screenshot-progress-bar-bg"><div class="screenshot-progress-bar"></div></div>
      <div class="screenshot-progress-text">Preparing...</div>
    `, this.progressBar = this.progressEl.querySelector(".screenshot-progress-bar"), this.progressText = this.progressEl.querySelector(".screenshot-progress-text");
    const m = document.createElement("div");
    m.className = "screenshot-panel-actions";
    const p = document.createElement("button");
    p.className = "screenshot-btn screenshot-btn-cancel", p.textContent = "Cancel", p.addEventListener("click", () => this.close()), this.captureBtn = document.createElement("button"), this.captureBtn.className = "screenshot-btn screenshot-btn-primary", this.captureBtn.textContent = "Capture", this.captureBtn.addEventListener("click", () => this.capture()), m.appendChild(p), m.appendChild(this.captureBtn), c.appendChild(u), c.appendChild(y), R && c.appendChild(R), c.appendChild(this.progressEl), this.panel.appendChild(o), this.panel.appendChild(c), this.panel.appendChild(m), this.backdrop.appendChild(this.panel), e.appendChild(this.backdrop), this.callbacks.pause(), this.hasBuffers || this.callbacks.renderPreviewAtTime(this.currentTime);
  }
  close() {
    var e;
    (e = this.uniformControls) == null || e.destroy(), this.backdrop.remove(), this.callbacks.resume();
  }
  // ===========================================================================
  // Resolution
  // ===========================================================================
  onPresetChange() {
    const e = this.presetSelect.value;
    if (e === "current")
      this.widthInput.value = String(this.canvasWidth), this.heightInput.value = String(this.canvasHeight), this.aspectRatio = this.canvasWidth / this.canvasHeight;
    else if (e !== "custom") {
      const [t, i] = e.split("x").map(Number);
      this.widthInput.value = String(t), this.heightInput.value = String(i), this.aspectRatio = t / i;
    }
  }
  toggleAspectLock() {
    if (this.aspectLocked = !this.aspectLocked, this.lockButton.classList.toggle("active", this.aspectLocked), this.aspectLocked) {
      const e = parseInt(this.widthInput.value) || 1, t = parseInt(this.heightInput.value) || 1;
      this.aspectRatio = e / t;
    }
  }
  // ===========================================================================
  // Time
  // ===========================================================================
  updateSliderRange() {
    if (!this.timeSlider || !this.sliderMinInput || !this.sliderMaxInput)
      return;
    const e = parseFloat(this.sliderMinInput.value) || 0, t = parseFloat(this.sliderMaxInput.value) || 10;
    this.timeSlider.min = String(Math.max(0, e)), this.timeSlider.max = String(t);
  }
  async renderBufferPreview() {
    if (this.isBusy)
      return;
    this.isBusy = !0;
    const e = parseFloat(this.timeInput.value) || 0;
    this.showProgress("Rendering preview...");
    const t = await this.callbacks.renderPreviewStepped(e, 60, (i, s) => {
      const r = i / s * 100;
      this.progressBar.style.width = `${r}%`, this.progressText.textContent = `Frame ${i} / ${s} (${Math.round(r)}%)`;
    });
    this.hideProgress(), this.isBusy = !1, t && (this.progressText.textContent = "Preview ready");
  }
  // ===========================================================================
  // Capture
  // ===========================================================================
  async capture() {
    if (this.isBusy)
      return;
    this.isBusy = !0;
    const e = parseInt(this.widthInput.value) || this.canvasWidth, t = parseInt(this.heightInput.value) || this.canvasHeight, i = parseFloat(this.timeInput.value) || 0;
    this.showProgress("Capturing..."), this.captureBtn.classList.add("disabled");
    try {
      const s = await this.callbacks.captureScreenshot({
        width: e,
        height: t,
        time: i,
        hasBuffers: this.hasBuffers,
        onProgress: (r, o) => {
          const a = r / o * 100;
          this.progressBar.style.width = `${a}%`, this.progressText.textContent = `Frame ${r} / ${o} (${Math.round(a)}%)`;
        }
      });
      s && (this.downloadBlob(s, e, t), this.progressText.textContent = "Saved!", setTimeout(() => this.close(), 1e3));
    } catch (s) {
      this.progressText.textContent = `Error: ${s.message}`, this.progressBar.style.background = "#c62828";
    } finally {
      this.captureBtn.classList.remove("disabled"), this.isBusy = !1;
    }
  }
  downloadBlob(e, t, i) {
    const s = /* @__PURE__ */ new Date(), r = s.getFullYear().toString() + (s.getMonth() + 1).toString().padStart(2, "0") + s.getDate().toString().padStart(2, "0") + "-" + s.getHours().toString().padStart(2, "0") + s.getMinutes().toString().padStart(2, "0") + s.getSeconds().toString().padStart(2, "0"), o = `screenshot_${t}x${i}_${r}.png`, a = URL.createObjectURL(e), c = document.createElement("a");
    c.href = a, c.download = o, c.click(), URL.revokeObjectURL(a);
  }
  // ===========================================================================
  // Progress
  // ===========================================================================
  showProgress(e) {
    this.progressEl.classList.add("active"), this.progressBar.style.width = "0%", this.progressBar.style.background = "", this.progressText.textContent = e;
  }
  hideProgress() {
    this.progressEl.classList.remove("active");
  }
  // ===========================================================================
  // DOM Helpers
  // ===========================================================================
  createSection(e) {
    const t = document.createElement("div");
    t.className = "screenshot-section";
    const i = document.createElement("div");
    return i.className = "screenshot-section-label", i.textContent = e, t.appendChild(i), t;
  }
  createCollapsibleSection(e) {
    const t = document.createElement("div");
    t.className = "screenshot-section screenshot-collapsible collapsed";
    const i = document.createElement("div");
    i.className = "screenshot-collapsible-header", i.innerHTML = `<span class="screenshot-collapsible-arrow">&#9654;</span> ${e}`, i.addEventListener("click", () => {
      t.classList.toggle("collapsed");
    });
    const s = document.createElement("div");
    return s.className = "screenshot-section-content", t.appendChild(i), t.appendChild(s), t;
  }
  createNumberInput(e, t, i) {
    const s = document.createElement("input");
    return s.type = "number", s.className = "screenshot-input", s.value = String(Math.round(e)), s.min = String(t), s.max = String(i), s;
  }
}
const Qt = {
  low: 2e6,
  medium: 8e6,
  high: 16e6,
  ultra: 32e6
};
function Re() {
  return typeof VideoEncoder < "u";
}
class gs {
  constructor(e, t, i, s = "high") {
    this.output = null, this.target = null, this.videoSource = null, this.encoder = null, this.EncodedPacket = null, this.frameCount = 0, this.width = e, this.height = t, this.fps = i, this.bitrate = Qt[s] ?? Qt.high;
  }
  async init() {
    const { Output: e, BufferTarget: t, Mp4OutputFormat: i, EncodedVideoPacketSource: s, EncodedPacket: r } = await Promise.resolve().then(() => xa);
    this.EncodedPacket = r, this.target = new t(), this.videoSource = new s("avc"), this.output = new e({
      format: new i({ fastStart: "in-memory" }),
      target: this.target
    }), this.output.addVideoTrack(this.videoSource), await this.output.start(), this.encoder = new VideoEncoder({
      output: (o, a) => {
        const c = this.EncodedPacket.fromEncodedChunk(o);
        this.videoSource.add(c, a ?? void 0);
      },
      error: (o) => {
        console.error("VideoEncoder error:", o);
      }
    }), this.encoder.configure({
      codec: "avc1.640028",
      // H.264 High Profile Level 4.0
      width: this.width,
      height: this.height,
      bitrate: this.bitrate,
      framerate: this.fps
    }), this.frameCount = 0;
  }
  /**
   * Add a frame from a canvas element.
   */
  async addFrame(e) {
    if (!this.encoder)
      throw new Error("Mp4Encoder not initialized");
    const t = await createImageBitmap(e), i = new VideoFrame(t, {
      timestamp: this.frameCount / this.fps * 1e6,
      // microseconds
      duration: 1 / this.fps * 1e6
    }), s = this.frameCount % (this.fps * 2) === 0;
    this.encoder.encode(i, { keyFrame: s }), i.close(), t.close(), this.frameCount++;
  }
  /**
   * Finalize encoding and return the MP4 as a Blob.
   */
  async finish() {
    if (!this.encoder || !this.output || !this.target)
      throw new Error("Mp4Encoder not initialized");
    await this.encoder.flush(), this.encoder.close(), await this.output.finalize();
    const e = this.target.buffer;
    return new Blob([e], { type: "video/mp4" });
  }
  /**
   * Clean up without finalizing (e.g. on cancel).
   */
  dispose() {
    try {
      this.encoder && this.encoder.state !== "closed" && this.encoder.close();
    } catch {
    }
    try {
      this.output && this.output.state === "started" && this.output.cancel();
    } catch {
    }
    this.encoder = null, this.output = null, this.target = null, this.videoSource = null;
  }
}
const bs = [
  ["720p", 1280, 720],
  ["1080p", 1920, 1080],
  ["1440p", 2560, 1440],
  ["4K", 3840, 2160],
  ["8K", 7680, 4320]
];
class ys {
  constructor(e, t, i, s, r) {
    this.uniformControls = null, this.cancelRenderFn = null, this.aspectLocked = !0, this.warmupNotice = null, this.callbacks = r, this.canvasWidth = t, this.canvasHeight = i, this.aspectRatio = t / i, this.hasBuffers = r.hasBufferPasses(), this.backdrop = document.createElement("div"), this.backdrop.className = "recording-panel-backdrop", this.backdrop.addEventListener("click", (U) => {
      U.target === this.backdrop && this.close();
    }), this.panel = document.createElement("div"), this.panel.className = "recording-panel";
    const o = document.createElement("div");
    o.className = "recording-panel-header", o.innerHTML = `
      <div class="recording-panel-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
        </svg>
        Record
      </div>
    `;
    const a = document.createElement("button");
    a.className = "recording-panel-close", a.textContent = "×", a.addEventListener("click", () => this.close()), o.appendChild(a), this.bodyEl = document.createElement("div"), this.bodyEl.className = "recording-panel-body";
    const c = this.createSection("Resolution");
    this.presetSelect = document.createElement("select"), this.presetSelect.className = "recording-input recording-select";
    const u = document.createElement("option");
    u.value = "current", u.textContent = `Current (${t}×${i})`, this.presetSelect.appendChild(u);
    for (const [U, $, D] of bs) {
      const O = document.createElement("option");
      O.value = `${$}x${D}`, O.textContent = `${U} (${$}×${D})`, this.presetSelect.appendChild(O);
    }
    const l = document.createElement("option");
    l.value = "custom", l.textContent = "Custom", this.presetSelect.appendChild(l), this.presetSelect.addEventListener("change", () => this.onPresetChange()), c.appendChild(this.presetSelect);
    const d = document.createElement("div");
    d.className = "recording-res-row", this.widthInput = this.createNumberInput(t, 1, 7680), this.heightInput = this.createNumberInput(i, 1, 4320), this.widthInput.addEventListener("input", () => {
      if (this.presetSelect.value = "custom", this.aspectLocked) {
        const U = parseInt(this.widthInput.value) || 1;
        this.heightInput.value = String(Math.round(U / this.aspectRatio));
      }
      this.updateEstimate();
    }), this.heightInput.addEventListener("input", () => {
      if (this.presetSelect.value = "custom", this.aspectLocked) {
        const U = parseInt(this.heightInput.value) || 1;
        this.widthInput.value = String(Math.round(U * this.aspectRatio));
      }
      this.updateEstimate();
    });
    const h = document.createElement("span");
    h.className = "recording-dim-separator", h.textContent = "×", this.lockButton = document.createElement("button"), this.lockButton.className = "recording-aspect-lock active", this.lockButton.title = "Lock aspect ratio", this.lockButton.innerHTML = `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
    </svg>`, this.lockButton.addEventListener("click", () => this.toggleAspectLock()), d.appendChild(this.widthInput), d.appendChild(h), d.appendChild(this.heightInput), d.appendChild(this.lockButton), c.appendChild(d);
    const f = this.createSection("Timing"), y = this.createFieldRow("Start Time");
    this.startTimeInput = this.createNumberInput(0, 0, 3600), this.startTimeInput.step = "0.1", this.startTimeInput.addEventListener("input", () => {
      this.updateEstimate(), this.updateWarmupNotice();
    });
    const w = document.createElement("span");
    w.className = "recording-unit", w.textContent = "sec", y.appendChild(this.startTimeInput), y.appendChild(w), f.appendChild(y);
    const E = this.createFieldRow("Duration");
    this.durationInput = this.createNumberInput(10, 0.1, 3600), this.durationInput.step = "0.1", this.durationInput.addEventListener("input", () => this.updateEstimate());
    const R = document.createElement("span");
    R.className = "recording-unit", R.textContent = "sec", E.appendChild(this.durationInput), E.appendChild(R), f.appendChild(E);
    const m = this.createFieldRow("FPS");
    this.fpsInput = this.createNumberInput(60, 1, 120), this.fpsInput.addEventListener("input", () => this.updateEstimate()), m.appendChild(this.fpsInput), f.appendChild(m), this.hasBuffers && (this.warmupNotice = document.createElement("div"), this.warmupNotice.className = "recording-notice", this.warmupNotice.style.display = "none", f.appendChild(this.warmupNotice)), this.estimateEl = document.createElement("div"), this.estimateEl.className = "recording-estimate", f.appendChild(this.estimateEl);
    const p = this.createSection("Format"), g = document.createElement("div");
    g.className = "recording-format-group";
    const b = document.createElement("div");
    b.className = "recording-format-option", this.formatMp4 = document.createElement("input"), this.formatMp4.type = "radio", this.formatMp4.name = "recording-format", this.formatMp4.id = "rec-fmt-mp4", this.formatMp4.value = "mp4", this.formatMp4.checked = Re(), this.formatMp4.disabled = !Re(), this.mp4Label = document.createElement("label"), this.mp4Label.htmlFor = "rec-fmt-mp4", this.mp4Label.textContent = Re() ? "MP4" : "MP4 (unsupported)", Re() || this.mp4Label.classList.add("disabled"), b.appendChild(this.formatMp4), b.appendChild(this.mp4Label), this.formatMp4.addEventListener("change", () => this.onFormatChange());
    const T = document.createElement("div");
    T.className = "recording-format-option", this.formatWebm = document.createElement("input"), this.formatWebm.type = "radio", this.formatWebm.name = "recording-format", this.formatWebm.id = "rec-fmt-webm", this.formatWebm.value = "webm", this.formatWebm.checked = !Re();
    const _ = document.createElement("label");
    _.htmlFor = "rec-fmt-webm", _.textContent = "WebM", T.appendChild(this.formatWebm), T.appendChild(_), this.formatWebm.addEventListener("change", () => this.onFormatChange());
    const A = document.createElement("div");
    A.className = "recording-format-option", this.formatFrames = document.createElement("input"), this.formatFrames.type = "radio", this.formatFrames.name = "recording-format", this.formatFrames.id = "rec-fmt-frames", this.formatFrames.value = "frames";
    const v = document.createElement("label");
    v.htmlFor = "rec-fmt-frames", v.textContent = "PNG Frames", A.appendChild(this.formatFrames), A.appendChild(v), this.formatFrames.addEventListener("change", () => this.onFormatChange()), g.appendChild(b), g.appendChild(T), g.appendChild(A), p.appendChild(g), this.qualityGroup = document.createElement("div"), this.qualityGroup.className = "recording-quality-row";
    const P = document.createElement("span");
    P.className = "recording-field-label", P.textContent = "Quality", this.qualitySelect = document.createElement("select"), this.qualitySelect.className = "recording-input recording-select";
    for (const [U, $] of [["low", "Low (2 Mbps)"], ["medium", "Medium (8 Mbps)"], ["high", "High (16 Mbps)"], ["ultra", "Ultra (32 Mbps)"]]) {
      const D = document.createElement("option");
      D.value = U, D.textContent = $, U === "high" && (D.selected = !0), this.qualitySelect.appendChild(D);
    }
    this.qualityGroup.appendChild(P), this.qualityGroup.appendChild(this.qualitySelect), p.appendChild(this.qualityGroup);
    let M = null;
    if (s && Object.values(s).some((U) => Ie(U))) {
      M = this.createCollapsibleSection("Uniforms");
      const U = M.querySelector(".recording-section-content");
      this.uniformControls = new nt({
        container: U,
        uniforms: s,
        onChange: ($, D) => {
          r.setUniformValue($, D);
        }
      });
    }
    this.progressEl = document.createElement("div"), this.progressEl.className = "recording-progress", this.progressEl.innerHTML = `
      <div class="recording-progress-bar-bg"><div class="recording-progress-bar"></div></div>
      <div class="recording-progress-text">Preparing...</div>
    `, this.progressBar = this.progressEl.querySelector(".recording-progress-bar"), this.progressText = this.progressEl.querySelector(".recording-progress-text");
    const k = document.createElement("button");
    k.className = "recording-btn recording-btn-cancel", k.textContent = "Cancel Render", k.style.marginTop = "4px", k.addEventListener("click", () => this.cancelRender()), this.progressEl.appendChild(k), this.actionsEl = document.createElement("div"), this.actionsEl.className = "recording-panel-actions";
    const z = document.createElement("button");
    z.className = "recording-btn recording-btn-cancel", z.textContent = "Cancel", z.addEventListener("click", () => this.close());
    const H = document.createElement("button");
    H.className = "recording-btn recording-btn-primary", H.textContent = "Start Render", H.addEventListener("click", () => this.startRender()), this.actionsEl.appendChild(z), this.actionsEl.appendChild(H), this.bodyEl.appendChild(c), this.bodyEl.appendChild(f), this.bodyEl.appendChild(p), M && this.bodyEl.appendChild(M), this.panel.appendChild(o), this.panel.appendChild(this.bodyEl), this.panel.appendChild(this.actionsEl), this.panel.appendChild(this.progressEl), this.backdrop.appendChild(this.panel), this.updateEstimate(), this.onFormatChange(), e.appendChild(this.backdrop);
  }
  close() {
    var e, t;
    (e = this.cancelRenderFn) == null || e.call(this), this.cancelRenderFn = null, (t = this.uniformControls) == null || t.destroy(), this.backdrop.remove();
  }
  // ===========================================================================
  // Resolution
  // ===========================================================================
  onPresetChange() {
    const e = this.presetSelect.value;
    if (e === "current")
      this.widthInput.value = String(this.canvasWidth), this.heightInput.value = String(this.canvasHeight), this.aspectRatio = this.canvasWidth / this.canvasHeight;
    else if (e !== "custom") {
      const [t, i] = e.split("x").map(Number);
      this.widthInput.value = String(t), this.heightInput.value = String(i), this.aspectRatio = t / i;
    }
    this.updateEstimate();
  }
  toggleAspectLock() {
    if (this.aspectLocked = !this.aspectLocked, this.lockButton.classList.toggle("active", this.aspectLocked), this.aspectLocked) {
      const e = parseInt(this.widthInput.value) || 1, t = parseInt(this.heightInput.value) || 1;
      this.aspectRatio = e / t;
    }
  }
  // ===========================================================================
  // Format
  // ===========================================================================
  onFormatChange() {
    const e = this.formatMp4.checked || this.formatWebm.checked;
    this.qualityGroup.style.display = e ? "flex" : "none";
  }
  getSelectedFormat() {
    return this.formatMp4.checked ? "mp4" : this.formatFrames.checked ? "frames" : "webm";
  }
  // ===========================================================================
  // Estimate
  // ===========================================================================
  updateEstimate() {
    const e = parseInt(this.fpsInput.value) || 0, t = parseFloat(this.durationInput.value) || 0, i = Math.ceil(e * t);
    if (this.formatFrames.checked) {
      const s = parseInt(this.widthInput.value) || 0, r = parseInt(this.heightInput.value) || 0, a = s * r * 4 / (1024 * 1024) * i;
      this.estimateEl.textContent = `${i} frames, ~${a < 1024 ? Math.round(a) + " MB" : (a / 1024).toFixed(1) + " GB"} raw`;
    } else
      this.estimateEl.textContent = `${i} frames, ${t}s at ${e} fps`;
  }
  updateWarmupNotice() {
    if (!this.warmupNotice)
      return;
    const e = parseFloat(this.startTimeInput.value) || 0, t = parseInt(this.fpsInput.value) || 60;
    if (e > 0) {
      const i = Math.ceil(e * t);
      this.warmupNotice.textContent = `Feedback buffers detected. Will compute ${i} warm-up frames before recording.`, this.warmupNotice.style.display = "";
    } else
      this.warmupNotice.style.display = "none";
  }
  // ===========================================================================
  // Render
  // ===========================================================================
  startRender() {
    const e = parseInt(this.widthInput.value) || this.canvasWidth, t = parseInt(this.heightInput.value) || this.canvasHeight, i = parseInt(this.fpsInput.value) || 60, s = parseFloat(this.startTimeInput.value) || 0, r = parseFloat(this.durationInput.value) || 10, o = this.getSelectedFormat(), a = this.qualitySelect.value;
    this.bodyEl.style.display = "none", this.actionsEl.style.display = "none", this.progressEl.classList.add("active"), this.progressBar.style.width = "0%", this.progressBar.style.background = "", this.progressText.textContent = "Preparing...", this.cancelRenderFn = this.callbacks.startRecording({
      width: e,
      height: t,
      fps: i,
      startTime: s,
      duration: r,
      format: o,
      quality: a,
      onProgress: (c, u, l) => {
        const d = u / l * 100;
        this.progressBar.style.width = `${d}%`, this.progressText.textContent = `${c}: ${u} / ${l} (${Math.round(d)}%)`;
      },
      onComplete: () => {
        this.progressText.textContent = "Done!", this.progressBar.style.width = "100%", setTimeout(() => this.close(), 1500);
      },
      onError: (c) => {
        this.progressText.textContent = `Error: ${c.message}`, this.progressBar.style.background = "#c62828";
      }
    });
  }
  cancelRender() {
    var e;
    (e = this.cancelRenderFn) == null || e.call(this), this.cancelRenderFn = null, this.bodyEl.style.display = "", this.actionsEl.style.display = "", this.progressEl.classList.remove("active");
  }
  // ===========================================================================
  // DOM Helpers
  // ===========================================================================
  createSection(e) {
    const t = document.createElement("div");
    t.className = "recording-section";
    const i = document.createElement("div");
    return i.className = "recording-section-label", i.textContent = e, t.appendChild(i), t;
  }
  createCollapsibleSection(e) {
    const t = document.createElement("div");
    t.className = "recording-section recording-collapsible collapsed";
    const i = document.createElement("div");
    i.className = "recording-collapsible-header", i.innerHTML = `<span class="recording-collapsible-arrow">&#9654;</span> ${e}`, i.addEventListener("click", () => {
      t.classList.toggle("collapsed");
    });
    const s = document.createElement("div");
    return s.className = "recording-section-content", t.appendChild(i), t.appendChild(s), t;
  }
  createFieldRow(e) {
    const t = document.createElement("div");
    t.className = "recording-field-row";
    const i = document.createElement("span");
    return i.className = "recording-field-label", i.textContent = e, t.appendChild(i), t;
  }
  createNumberInput(e, t, i) {
    const s = document.createElement("input");
    return s.type = "number", s.className = "recording-input", s.value = String(Math.round(e)), s.min = String(t), s.max = String(i), s;
  }
}
class le {
  constructor(e) {
    var c;
    this.views = /* @__PURE__ */ new Map(), this.animationId = null, this.startTime = 0, this.pausedElapsedTime = 0, this.disposed = !1, this.statsPanel = null, this.playbackControls = null, this.isPaused = !1, this._pauseAfterFirstFrame = !1, this.isVisible = !0, this.uniformsPanel = null, this.scriptAPI = null, this.scriptErrorCount = 0, this._lastOnFrameTime = null, this._insideScriptSet = !1, this.globalKeyHandler = null, this.controlsKeyHandler = null, this.animate = (u) => {
      var h, f, y;
      if (this.disposed || (this.animationId = requestAnimationFrame(this.animate), this.isPaused || !this.isVisible))
        return;
      for (const w of this.views.values())
        if (w.isContextLost)
          return;
      const l = u / 1e3, d = l - this.startTime;
      if ((h = this.statsPanel) == null || h.update(l, d), this.runScriptOnFrame(d, ((f = this.statsPanel) == null ? void 0 : f.totalFrameCount) ?? 0), this.isMultiView) {
        const w = /* @__PURE__ */ new Map();
        for (const [E, R] of this.views)
          w.set(E, {
            mouse: R.getMouseState(),
            resolution: R.getResolution(),
            mousePressed: R.getMousePressed()
          });
        for (const E of this.views.values())
          E.step(d, w);
      } else
        this.primaryView.step(d);
      this._pauseAfterFirstFrame && (this._pauseAfterFirstFrame = !1, this.isPaused = !0, (y = this.playbackControls) == null || y.setPaused(!0));
    }, this.container = e.container, this.project = e.project, this.isMultiView = Sn(e.project), this.container.hasAttribute("tabindex") || this.container.setAttribute("tabindex", "-1"), this.container.style.outline = "none", this.container.addEventListener("mousedown", () => this.container.focus());
    const t = e.pixelRatio ?? e.project.pixelRatio ?? window.devicePixelRatio;
    if (this.isMultiView) {
      const u = e.project, l = u.views.map((d) => d.name);
      if (!e.viewContainers)
        throw new Error("viewContainers required for multi-view projects");
      for (const d of u.views) {
        const h = e.viewContainers.get(d.name);
        if (!h)
          throw new Error(`No container provided for view "${d.name}"`);
        const f = this.createViewProject(u, d), y = new qt({
          container: h,
          project: f,
          keyboardTarget: this.container,
          pixelRatio: t,
          viewNames: l
        });
        this.views.set(d.name, y);
      }
      this.primaryView = this.views.values().next().value;
    } else {
      const u = new qt({
        container: e.container,
        project: e.project,
        keyboardTarget: this.container,
        pixelRatio: t
      });
      this.views.set("default", u), this.primaryView = u;
    }
    this.recorder = new ds(this.primaryView.canvas, this.container, this.project.root);
    const i = this.project.stats ?? this.project.controls ?? !1, s = this.project.playback ?? this.project.controls ?? !1, r = this.project.uniformsUI ?? "panel", o = r !== "off", a = r === "panel";
    if (i && (this.statsPanel = new hs(this.container), this.statsPanel.updateResolution(this.primaryView.canvas.width, this.primaryView.canvas.height)), this.isMultiView) {
      this.primaryView.onResize = (u, l) => {
        var d;
        (d = this.statsPanel) == null || d.updateResolution(u, l);
      };
      for (const u of this.views.values())
        u.onContextRestored = () => {
          var l;
          if (this.scriptAPI && ((l = this.project.script) != null && l.setup))
            try {
              this.project.script.setup(this.scriptAPI, { isRestore: !0 });
            } catch (d) {
              console.error("script.js setup() threw during context restore:", d), this.primaryView.runtimeErrorOverlay.showError("setup", d);
            }
        };
    } else
      this.primaryView.onResize = (u, l) => {
        var d;
        (d = this.statsPanel) == null || d.updateResolution(u, l), this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this.isPaused && this.primaryView.step(0);
      }, this.primaryView.onContextRestored = () => {
        var u;
        if (this.scriptAPI && ((u = this.project.script) != null && u.setup))
          try {
            this.project.script.setup(this.scriptAPI, { isRestore: !0 });
          } catch (l) {
            console.error("script.js setup() threw during context restore:", l), this.primaryView.runtimeErrorOverlay.showError("setup", l);
          }
        this.reset(), this.start();
      };
    if (s && !e.skipPlaybackControls && (this.playbackControls = new fs(this.container, {
      onTogglePlayPause: () => this.togglePlayPause(),
      onReset: () => this.reset(),
      onScreenshot: () => this.openScreenshotPanel(),
      onToggleRecording: () => this.toggleRecording(),
      onExportHTML: () => this.exportHTML(),
      onRender: () => this.openRecordingPanel()
    })), this.project.startPaused && (this._pauseAfterFirstFrame = !0, (c = this.playbackControls) == null || c.setPaused(!0)), this.intersectionObserver = new IntersectionObserver((u) => {
      this.isVisible = u[0].isIntersecting;
    }, { threshold: 0.1 }), this.intersectionObserver.observe(this.container), this.project.script && (this.initScriptAPI(), this.project.script.setup && this.scriptAPI))
      try {
        this.project.script.setup(this.scriptAPI, { isRestore: !1 });
      } catch (u) {
        console.error("script.js setup() threw:", u), this.primaryView.runtimeErrorOverlay.showError("setup", u);
      }
    o && !e.skipUniformsPanel && this.project.uniforms && Object.values(this.project.uniforms).some((u) => Ie(u)) && (this.uniformsPanel = new cs({
      container: this.container,
      uniforms: this.project.uniforms,
      collapsible: a,
      onChange: (u, l) => {
        this.setUniformValue(u, l);
      }
    })), this.setupGlobalShortcuts(), s && this.setupKeyboardShortcuts();
  }
  // ===========================================================================
  // Multi-View Helpers
  // ===========================================================================
  /**
   * Create a single-view ShaderProject from a MultiViewProject + ViewEntry.
   * Each view gets a fullscreen layout with no controls (App manages controls).
   */
  createViewProject(e, t) {
    return {
      mode: e.mode,
      root: e.root,
      meta: {
        ...e.meta,
        title: `${e.meta.title} - ${t.name}`
      },
      layout: "fullscreen",
      theme: e.theme,
      controls: !1,
      uniformsUI: e.uniformsUI,
      startPaused: e.startPaused,
      stickyMouse: e.stickyMouse,
      pixelRatio: e.pixelRatio,
      commonSource: e.commonSource,
      passes: t.passes,
      textures: e.textures,
      uniforms: e.uniforms,
      uniformData: e.uniformData,
      script: null
      // Script handled by App, not individual views
    };
  }
  // ===========================================================================
  // Script API
  // ===========================================================================
  initScriptAPI() {
    const e = this;
    this.scriptAPI = {
      setUniformValue: (t, i) => {
        e._insideScriptSet = !0, e.setUniformValue(t, i), e._insideScriptSet = !1;
      },
      getUniformValue: (t) => e.primaryView.engine.getUniformValue(t),
      updateTexture: (t, i, s, r) => e.primaryView.engine.updateTexture(t, i, s, r),
      readPixels: (t, i, s, r, o) => e.primaryView.engine.readPixels(t, i, s, r, o),
      get width() {
        return e.primaryView.engine.width;
      },
      get height() {
        return e.primaryView.engine.height;
      },
      setOverlay: (t, i, s) => {
        const r = s ? e.views.get(s) : e.primaryView;
        r == null || r.setOverlay(t, i);
      },
      setArrayUniform: (t, i) => {
        for (const s of e.views.values())
          s.engine.setArrayUniform(t, i);
      },
      setArrayElement: (t, i, s) => {
        for (const r of e.views.values())
          r.engine.setArrayElement(t, i, s);
      },
      setActiveCount: (t, i) => {
        for (const s of e.views.values())
          s.engine.setActiveCount(t, i);
      },
      setStructArrayUniform: (t, i) => {
        for (const s of e.views.values())
          s.engine.setStructArrayUniform(t, i);
      },
      setStructArrayElement: (t, i, s) => {
        for (const r of e.views.values())
          r.engine.setStructArrayElement(t, i, s);
      },
      // Multi-view extensions (undefined for single-view)
      getCrossViewState: e.isMultiView ? (t) => e.getCrossViewState(t) : void 0,
      viewNames: e.isMultiView ? e.project.views.map((t) => t.name) : void 0
    };
  }
  /**
   * Run script onFrame hook with error tracking.
   * Called from animate() with error tracking.
   */
  runScriptOnFrame(e, t) {
    var s;
    if (!this.scriptAPI || !((s = this.project.script) != null && s.onFrame) || this.scriptErrorCount >= le.MAX_SCRIPT_ERRORS)
      return;
    const i = this._lastOnFrameTime !== null ? e - this._lastOnFrameTime : 0;
    try {
      this.project.script.onFrame(this.scriptAPI, e, i, t), this.scriptErrorCount = 0;
    } catch (r) {
      this.scriptErrorCount++, console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${le.MAX_SCRIPT_ERRORS}):`, r), this.primaryView.runtimeErrorOverlay.showError("onFrame", r), this.scriptErrorCount >= le.MAX_SCRIPT_ERRORS && (console.warn("script.js onFrame() disabled after too many errors"), this.primaryView.runtimeErrorOverlay.showDisabled());
    }
    this._lastOnFrameTime = e;
  }
  // ===========================================================================
  // Public API
  // ===========================================================================
  hasErrors() {
    for (const e of this.views.values())
      if (e.hasErrors())
        return !0;
    return !1;
  }
  getEngine() {
    return this.primaryView.engine;
  }
  /**
   * Set a uniform value across all views.
   * Fires onUniformChange hook unless the call originated from the script itself.
   */
  setUniformValue(e, t) {
    var i;
    for (const s of this.views.values())
      s.engine.setUniformValue(e, t);
    if (!this._insideScriptSet && this.scriptAPI && ((i = this.project.script) != null && i.onUniformChange))
      try {
        this.project.script.onUniformChange(this.scriptAPI, e, t);
      } catch (s) {
        console.error(`script.js onUniformChange('${e}') threw:`, s);
      }
  }
  /**
   * Get a uniform value from the primary view.
   */
  getUniformValue(e) {
    return this.primaryView.engine.getUniformValue(e);
  }
  /**
   * Start the animation loop.
   */
  start() {
    this.animationId === null && (this.startTime = performance.now() / 1e3, this.animationId = requestAnimationFrame(this.animate));
  }
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
  // ===========================================================================
  // Cross-View State
  // ===========================================================================
  getMouseState() {
    return this.primaryView.getMouseState();
  }
  getResolution() {
    return this.primaryView.getResolution();
  }
  getMousePressed() {
    return this.primaryView.getMousePressed();
  }
  /**
   * Get cross-view state for a named view.
   */
  getCrossViewState(e) {
    const t = this.views.get(e);
    if (t)
      return {
        mouse: t.getMouseState(),
        resolution: t.getResolution(),
        mousePressed: t.getMousePressed()
      };
  }
  setOverlay(e, t) {
    this.primaryView.setOverlay(e, t);
  }
  // ===========================================================================
  // Playback Control
  // ===========================================================================
  togglePlayPause() {
    var e;
    this.isPaused ? this.startTime = performance.now() / 1e3 - this.pausedElapsedTime : this.pausedElapsedTime = performance.now() / 1e3 - this.startTime, this.isPaused = !this.isPaused, (e = this.playbackControls) == null || e.setPaused(this.isPaused);
  }
  getPaused() {
    return this.isPaused;
  }
  reset() {
    var e;
    this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this._lastOnFrameTime = null, (e = this.statsPanel) == null || e.reset();
    for (const t of this.views.values())
      t.engine.reset();
  }
  // ===========================================================================
  // Screenshots & Recording
  // ===========================================================================
  /** Quick screenshot at current canvas size (S key shortcut). */
  screenshot() {
    const e = this.project.root.split("/").pop() || "shader", t = /* @__PURE__ */ new Date(), i = t.getFullYear().toString() + (t.getMonth() + 1).toString().padStart(2, "0") + t.getDate().toString().padStart(2, "0") + "-" + t.getHours().toString().padStart(2, "0") + t.getMinutes().toString().padStart(2, "0") + t.getSeconds().toString().padStart(2, "0"), s = `shadertoy-${e}-${i}.png`;
    this.primaryView.canvas.toBlob((r) => {
      if (!r) {
        console.error("Failed to create screenshot blob");
        return;
      }
      const o = URL.createObjectURL(r), a = document.createElement("a");
      a.href = o, a.download = s, a.click(), URL.revokeObjectURL(o), console.log(`Screenshot saved: ${s}`);
    }, "image/png");
  }
  toggleRecording() {
    this.recorder.toggle(this.isPaused, () => this.togglePlayPause());
  }
  /** Check if this shader has feedback buffer passes. */
  hasBufferPasses() {
    if (this.isMultiView)
      return !1;
    const e = this.project;
    return !!(e.passes.BufferA || e.passes.BufferB || e.passes.BufferC || e.passes.BufferD);
  }
  /** Get current elapsed shader time. */
  getCurrentTime() {
    return performance.now() / 1e3 - this.startTime;
  }
  // ===========================================================================
  // Screenshot Panel
  // ===========================================================================
  openScreenshotPanel() {
    const e = this.isPaused;
    new ps(this.container, this.primaryView.canvas.width, this.primaryView.canvas.height, this.project.uniforms, {
      renderPreviewAtTime: (t) => {
        this.primaryView.engine.reset(), this.primaryView.engine.step(t, [0, 0, 0, 0], !1), this.primaryView.presentToScreen();
      },
      renderPreviewStepped: async (t, i, s) => {
        var a;
        if (this.primaryView.engine.reset(), this.scriptAPI && ((a = this.project.script) != null && a.setup))
          try {
            this.project.script.setup(this.scriptAPI, { isRestore: !0 });
          } catch {
          }
        const o = Math.ceil(t * i);
        for (let c = 0; c <= o; c++)
          this.stepForRender(c, i, 0), c % 100 === 0 && (s(c, o), await new Promise((u) => setTimeout(u, 0)));
        return this.primaryView.presentToScreen(), s(o, o), !0;
      },
      captureScreenshot: async (t) => {
        var a, c;
        const i = this.primaryView.canvas, s = this.primaryView.engine, r = i.width, o = i.height;
        try {
          if (i.width = t.width, i.height = t.height, s.resize(t.width, t.height), s.reset(), this.scriptAPI && ((a = this.project.script) != null && a.setup))
            try {
              this.project.script.setup(this.scriptAPI, { isRestore: !0 });
            } catch {
            }
          if (t.hasBuffers) {
            const l = Math.ceil(t.time * 60);
            for (let d = 0; d <= l; d++)
              this.stepForRender(d, 60, 0), d % 100 === 0 && (t.onProgress(d, l), await new Promise((h) => setTimeout(h, 0)));
            t.onProgress(l, l);
          } else
            s.step(t.time, [0, 0, 0, 0], !1);
          return this.primaryView.presentToScreen(), await new Promise((u, l) => {
            i.toBlob((d) => d ? u(d) : l(new Error("Failed to capture")), "image/png");
          });
        } finally {
          if (i.width = r, i.height = o, s.resize(r, o), s.reset(), this.scriptAPI && ((c = this.project.script) != null && c.setup))
            try {
              this.project.script.setup(this.scriptAPI, { isRestore: !0 });
            } catch {
            }
          if (!this.hasBufferPasses()) {
            const u = this.getCurrentTime();
            this.primaryView.engine.step(u, [0, 0, 0, 0], !1), this.primaryView.presentToScreen();
          }
        }
      },
      getCurrentTime: () => this.getCurrentTime(),
      hasBufferPasses: () => this.hasBufferPasses(),
      setUniformValue: (t, i) => this.setUniformValue(t, i),
      pause: () => {
        this.isPaused || (this.pausedElapsedTime = performance.now() / 1e3 - this.startTime), this.isPaused = !0;
      },
      resume: () => {
        e || (this.startTime = performance.now() / 1e3 - this.pausedElapsedTime, this.isPaused = !1);
      }
    });
  }
  // ===========================================================================
  // Recording Panel
  // ===========================================================================
  openRecordingPanel() {
    new ys(this.container, this.primaryView.canvas.width, this.primaryView.canvas.height, this.project.uniforms, {
      startRecording: (e) => this.handleRecording(e),
      hasBufferPasses: () => this.hasBufferPasses(),
      setUniformValue: (e, t) => this.setUniformValue(e, t)
    });
  }
  handleRecording(e) {
    let t = !1;
    const i = () => {
      t = !0;
    };
    return (async () => {
      var l, d;
      const r = this.primaryView.canvas, o = this.primaryView.engine, a = r.width, c = r.height, u = this.isPaused;
      try {
        if (this.isPaused = !0, r.width = e.width, r.height = e.height, o.resize(e.width, e.height), o.reset(), this.scriptAPI && ((l = this.project.script) != null && l.setup) && this.project.script.setup(this.scriptAPI, { isRestore: !0 }), e.startTime > 0) {
          const f = Math.ceil(e.startTime * e.fps);
          for (let y = 0; y < f; y++) {
            if (t)
              return;
            this.stepForRender(y, e.fps, 0), y % 100 === 0 && (e.onProgress("Warming up", y, f), await new Promise((w) => setTimeout(w, 0)));
          }
        }
        const h = Math.ceil(e.fps * e.duration);
        e.format === "mp4" ? await this.renderMp4Frames(h, e.fps, e.startTime, e.quality, () => t, (f, y) => e.onProgress("Recording", f, y)) : e.format === "webm" ? await this.renderWebmFrames(h, e.fps, e.startTime, () => t, (f, y) => e.onProgress("Recording", f, y)) : await this.renderPngFrames(h, e.fps, e.startTime, () => t, (f, y) => e.onProgress("Recording", f, y)), t || e.onComplete();
      } catch (h) {
        t || e.onError(h instanceof Error ? h : new Error(String(h)));
      } finally {
        if (r.width = a, r.height = c, o.resize(a, c), o.reset(), this.scriptAPI && ((d = this.project.script) != null && d.setup))
          try {
            this.project.script.setup(this.scriptAPI, { isRestore: !0 });
          } catch {
          }
        this.isPaused = u;
      }
    })(), i;
  }
  // ===========================================================================
  // HTML Export
  // ===========================================================================
  exportHTML() {
    if (this.isMultiView) {
      console.warn("HTML export is not supported for multi-view projects");
      return;
    }
    ls(this.project, this.primaryView.engine);
  }
  // ===========================================================================
  // Render Helpers
  // ===========================================================================
  async renderPngFrames(e, t, i, s, r) {
    let o = null;
    if ("showDirectoryPicker" in window)
      try {
        o = await window.showDirectoryPicker({ mode: "readwrite" });
      } catch {
      }
    for (let a = 0; a < e; a++) {
      if (s())
        return;
      this.stepForRender(a, t, i), this.primaryView.presentToScreen();
      const c = await new Promise((l, d) => {
        this.primaryView.canvas.toBlob((h) => h ? l(h) : d(new Error("Failed to capture frame")), "image/png");
      }), u = `frame_${String(a).padStart(5, "0")}.png`;
      if (o) {
        const d = await (await o.getFileHandle(u, { create: !0 })).createWritable();
        await d.write(c), await d.close();
      } else {
        const l = URL.createObjectURL(c), d = document.createElement("a");
        d.href = l, d.download = u, d.click(), URL.revokeObjectURL(l);
      }
      r(a + 1, e), a % 10 === 0 && await new Promise((l) => setTimeout(l, 0));
    }
  }
  async renderWebmFrames(e, t, i, s, r) {
    const o = this.primaryView.canvas, a = document.createElement("canvas");
    a.width = o.width, a.height = o.height;
    const c = a.getContext("2d"), u = a.captureStream(0), l = new MediaRecorder(u, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 8e6
    }), d = [];
    l.ondataavailable = (E) => {
      E.data.size > 0 && d.push(E.data);
    };
    const h = new Promise((E) => {
      l.onstop = () => E();
    });
    l.start();
    for (let E = 0; E < e; E++) {
      if (s()) {
        l.stop(), await h;
        return;
      }
      this.stepForRender(E, t, i), this.primaryView.presentToScreen(), c.drawImage(o, 0, 0);
      const R = u.getVideoTracks()[0];
      R != null && R.requestFrame && R.requestFrame(), r(E + 1, e), E % 10 === 0 && await new Promise((m) => setTimeout(m, 0));
    }
    l.stop(), await h;
    const f = new Blob(d, { type: "video/webm" }), y = URL.createObjectURL(f), w = document.createElement("a");
    w.href = y, w.download = `render_${o.width}x${o.height}_${t}fps.webm`, w.click(), URL.revokeObjectURL(y);
  }
  async renderMp4Frames(e, t, i, s, r, o) {
    const a = this.primaryView.canvas, c = new gs(a.width, a.height, t, s);
    await c.init();
    try {
      for (let h = 0; h < e; h++) {
        if (r()) {
          c.dispose();
          return;
        }
        this.stepForRender(h, t, i), this.primaryView.presentToScreen(), await c.addFrame(a), o(h + 1, e), h % 10 === 0 && await new Promise((f) => setTimeout(f, 0));
      }
      const u = await c.finish(), l = URL.createObjectURL(u), d = document.createElement("a");
      d.href = l, d.download = `render_${a.width}x${a.height}_${t}fps.mp4`, d.click(), URL.revokeObjectURL(l);
    } catch (u) {
      throw c.dispose(), u;
    }
  }
  stepForRender(e, t, i) {
    var o;
    const s = i + e / t, r = 1 / t;
    if (this.scriptAPI && ((o = this.project.script) != null && o.onFrame))
      try {
        this.project.script.onFrame(this.scriptAPI, s, r, e);
      } catch {
      }
    this.primaryView.engine.step(s, [0, 0, 0, 0], !1);
  }
  // ===========================================================================
  // Keyboard Shortcuts
  // ===========================================================================
  static isTextInput(e) {
    const t = e.target;
    if (!t)
      return !1;
    const i = t.tagName;
    return i === "INPUT" || i === "TEXTAREA" || t.isContentEditable;
  }
  setupGlobalShortcuts() {
    this.globalKeyHandler = (e) => {
      le.isTextInput(e) || e.code === "KeyS" && !e.repeat && (e.preventDefault(), this.screenshot());
    }, this.container.addEventListener("keydown", this.globalKeyHandler);
  }
  setupKeyboardShortcuts() {
    this.controlsKeyHandler = (e) => {
      le.isTextInput(e) || (e.code === "Space" && !e.repeat && (e.preventDefault(), this.togglePlayPause()), e.code === "KeyR" && !e.repeat && (e.preventDefault(), this.reset()));
    }, this.container.addEventListener("keydown", this.controlsKeyHandler);
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    var e, t, i, s;
    if (this.disposed = !0, this.stop(), (e = this.project.script) != null && e.dispose)
      try {
        this.project.script.dispose();
      } catch (r) {
        console.error("script.js dispose() threw:", r);
      }
    for (const r of this.views.values())
      r.dispose();
    this.recorder.dispose(), (t = this.playbackControls) == null || t.dispose(), this.intersectionObserver.disconnect(), this.globalKeyHandler && this.container.removeEventListener("keydown", this.globalKeyHandler), this.controlsKeyHandler && this.container.removeEventListener("keydown", this.controlsKeyHandler), (i = this.uniformsPanel) == null || i.destroy(), (s = this.statsPanel) == null || s.dispose();
  }
}
le.MAX_SCRIPT_ERRORS = 10;
class ws {
  constructor(e) {
    this.panel = null, this.controls = null, this.isOpen = !1, this.isPaused = !1, this.wrapper = e.wrapper, this.opts = e, this.isPaused = e.getPaused(), this.controlsWrapper = document.createElement("div"), this.controlsWrapper.className = "multi-view-controls-wrapper", this.toggleButton = document.createElement("button"), this.toggleButton.className = "multi-view-controls-toggle", this.toggleButton.title = "Toggle Controls", this.toggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `, this.toggleButton.addEventListener("click", () => this.toggle()), this.controlsWrapper.appendChild(this.toggleButton), this.createPanel(e.uniforms), this.wrapper.appendChild(this.controlsWrapper);
  }
  createPanel(e) {
    this.panel = document.createElement("div"), this.panel.className = "multi-view-controls-panel";
    const t = document.createElement("div");
    t.className = "multi-view-controls-header";
    const i = document.createElement("span");
    i.textContent = "Controls", t.appendChild(i);
    const s = document.createElement("button");
    s.className = "multi-view-controls-close", s.innerHTML = "&times;", s.title = "Close", s.addEventListener("click", () => this.toggle()), t.appendChild(s), this.panel.appendChild(t);
    const r = document.createElement("div");
    r.className = "controls-section playback-controls";
    const o = document.createElement("button");
    o.className = "control-btn play-pause-btn", o.title = "Play/Pause", this.updatePlayPauseIcon(o), o.addEventListener("click", () => {
      this.opts.onTogglePlayPause(), this.isPaused = this.opts.getPaused(), this.updatePlayPauseIcon(o);
    }), r.appendChild(o);
    const a = document.createElement("button");
    if (a.className = "control-btn reset-btn", a.title = "Reset", a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    `, a.addEventListener("click", () => {
      this.opts.onReset();
    }), r.appendChild(a), this.panel.appendChild(r), e && Object.values(e).some((c) => Ie(c))) {
      const c = document.createElement("div");
      c.className = "controls-section uniforms-section";
      const u = document.createElement("div");
      u.className = "section-label", u.textContent = "Uniforms", c.appendChild(u);
      const l = document.createElement("div");
      l.className = "uniforms-container", this.controls = new nt({
        container: l,
        uniforms: e,
        onChange: (d, h) => {
          var f, y;
          (y = (f = this.opts).onSetUniformValue) == null || y.call(f, d, h);
        }
      }), c.appendChild(l), this.panel.appendChild(c);
    }
    this.panel.classList.add("closed"), this.controlsWrapper.appendChild(this.panel);
  }
  updatePlayPauseIcon(e) {
    this.isPaused ? e.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ` : e.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
  }
  toggle() {
    var e, t;
    this.isOpen = !this.isOpen, this.isOpen ? ((e = this.panel) == null || e.classList.remove("closed"), this.toggleButton.classList.add("hidden")) : ((t = this.panel) == null || t.classList.add("closed"), this.toggleButton.classList.remove("hidden"));
  }
  dispose() {
    var e;
    (e = this.controls) == null || e.destroy(), this.wrapper.removeChild(this.controlsWrapper);
  }
}
class vs {
  constructor(e) {
    this.container = e.container, this.root = document.createElement("div"), this.root.className = "layout-fullscreen", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class Ts {
  constructor(e) {
    this.container = e.container, this.root = document.createElement("div"), this.root.className = "layout-default", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class Es {
  constructor(e) {
    this.editorPanel = null, this.recompileHandler = null, this._disposed = !1, this.container = e.container, this.project = e.project, this.root = document.createElement("div"), this.root.className = "layout-split", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.codePanel = document.createElement("div"), this.codePanel.className = "code-panel", this.buildEditorPanel(), this.root.appendChild(this.canvasContainer), this.root.appendChild(this.codePanel), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  setRecompileHandler(e) {
    this.recompileHandler = e, this.editorPanel && this.editorPanel.setRecompileHandler(e);
  }
  setUniformHandler(e) {
  }
  dispose() {
    this._disposed = !0, this.editorPanel && (this.editorPanel.dispose(), this.editorPanel = null), this.container.innerHTML = "";
  }
  /**
   * Build editor panel (dynamically loaded).
   */
  async buildEditorPanel() {
    try {
      const { EditorPanel: e } = await Promise.resolve().then(() => Ca);
      if (this._disposed)
        return;
      this.editorPanel = new e(this.codePanel, this.project), this.recompileHandler && this.editorPanel.setRecompileHandler(this.recompileHandler);
    } catch (e) {
      console.error("Failed to load editor panel:", e);
    }
  }
}
class xs {
  constructor(e) {
    this.editorInstance = null, this.recompileHandler = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.tabs = [], this.activeTabIndex = 0, this.keydownHandler = null, this.container = e.container, this.project = e.project, this.root = document.createElement("div"), this.root.className = "layout-tabbed";
    const t = document.createElement("div");
    t.className = "tabbed-wrapper", this.contentArea = document.createElement("div"), this.contentArea.className = "tabbed-content", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "tabbed-canvas-container", this.imageViewer = document.createElement("div"), this.imageViewer.className = "tabbed-image-viewer", this.imageViewer.style.visibility = "hidden", this.contentArea.appendChild(this.canvasContainer), this.contentArea.appendChild(this.imageViewer), this.editorContainer = document.createElement("div"), this.editorContainer.className = "tabbed-editor-container", this.editorContainer.style.visibility = "hidden", this.contentArea.appendChild(this.editorContainer), this.buttonContainer = document.createElement("div"), this.buttonContainer.className = "tabbed-button-container", this.buttonContainer.style.display = "none", this.copyButton = document.createElement("button"), this.copyButton.className = "tabbed-copy-button", this.copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `, this.copyButton.title = "Copy code to clipboard", this.copyButton.addEventListener("click", () => this.copyToClipboard()), this.buttonContainer.appendChild(this.copyButton), this.recompileButton = document.createElement("button"), this.recompileButton.className = "tabbed-recompile-button", this.recompileButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `, this.recompileButton.title = "Recompile shader (Ctrl+Enter)", this.recompileButton.addEventListener("click", () => this.recompile()), this.buttonContainer.appendChild(this.recompileButton), this.errorDisplay = document.createElement("div"), this.errorDisplay.className = "tabbed-error-display", this.errorDisplay.style.display = "none", this.contentArea.appendChild(this.errorDisplay), this.setupKeyboardShortcut();
    const i = this.buildTabBar();
    t.appendChild(i), t.appendChild(this.contentArea), this.root.appendChild(t), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  setRecompileHandler(e) {
    this.recompileHandler = e;
  }
  dispose() {
    this.keydownHandler && (this.container.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.container.innerHTML = "";
  }
  setupKeyboardShortcut() {
    this.keydownHandler = (e) => {
      (e.ctrlKey || e.metaKey) && e.key === "Enter" && this.tabs[this.activeTabIndex].kind === "code" && (e.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
  saveCurrentEditorContent() {
    if (this.editorInstance) {
      const e = this.tabs[this.activeTabIndex];
      if (e.kind === "code") {
        const t = this.editorInstance.getSource();
        this.modifiedSources.set(e.passName, t);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const t = this.modifiedSources.get(e.passName) ?? e.source, i = this.recompileHandler(e.passName, t);
    i.success ? (this.hideError(), e.source = t) : this.showError(i.error || "Compilation failed");
  }
  showError(e) {
    this.errorDisplay && (this.errorDisplay.textContent = e, this.errorDisplay.style.display = "block");
  }
  hideError() {
    this.errorDisplay && (this.errorDisplay.style.display = "none");
  }
  async copyToClipboard() {
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const t = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(e.passName) ?? e.source;
    try {
      await navigator.clipboard.writeText(t);
      const i = this.copyButton.innerHTML;
      this.copyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `, this.copyButton.classList.add("copied"), setTimeout(() => {
        this.copyButton.innerHTML = i, this.copyButton.classList.remove("copied");
      }, 1500);
    } catch (i) {
      console.error("Failed to copy:", i);
    }
  }
  buildTabBar() {
    const e = document.createElement("div");
    e.className = "tabbed-toolbar";
    const t = document.createElement("div");
    t.className = "tabbed-tab-bar", this.tabs = [], this.tabs.push({ kind: "shader", name: "Shader" }), this.project.commonSource && this.tabs.push({
      kind: "code",
      name: "common.glsl",
      passName: "common",
      source: this.project.commonSource
    });
    const i = [
      "BufferA",
      "BufferB",
      "BufferC",
      "BufferD"
    ];
    for (const o of i) {
      const a = this.project.passes[o];
      a && this.tabs.push({
        kind: "code",
        name: `${o.toLowerCase()}.glsl`,
        passName: o,
        source: a.glslSource
      });
    }
    const s = this.project.passes.Image;
    this.tabs.push({
      kind: "code",
      name: "image.glsl",
      passName: "Image",
      source: s.glslSource
    });
    for (const o of this.project.textures)
      this.tabs.push({
        kind: "image",
        name: o.filename || o.name,
        url: o.source
      });
    const r = async (o) => {
      this.saveCurrentEditorContent();
      const a = this.tabs[o];
      if (this.activeTabIndex = o, t.querySelectorAll(".tabbed-tab-button").forEach((c, u) => {
        c.classList.toggle("active", u === o);
      }), this.canvasContainer.style.visibility = "hidden", this.imageViewer.style.visibility = "hidden", this.editorContainer.style.visibility = "hidden", this.buttonContainer.style.display = "none", this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), a.kind === "shader")
        this.canvasContainer.style.visibility = "visible";
      else if (a.kind === "code") {
        this.editorContainer.style.visibility = "visible", this.buttonContainer.style.display = "flex";
        const c = this.modifiedSources.get(a.passName) ?? a.source;
        this.editorContainer.innerHTML = "";
        try {
          const { createEditor: u } = await Promise.resolve().then(() => hi);
          this.editorInstance = u(this.editorContainer, c, (l) => {
            this.modifiedSources.set(a.passName, l);
          });
        } catch (u) {
          console.error("Failed to load editor:", u);
          const l = document.createElement("textarea");
          l.className = "tabbed-fallback-textarea", l.value = c, l.addEventListener("input", () => {
            this.modifiedSources.set(a.passName, l.value);
          }), this.editorContainer.appendChild(l);
        }
      } else {
        this.imageViewer.style.visibility = "visible";
        const c = document.createElement("img");
        c.src = a.url, c.alt = a.name, this.imageViewer.innerHTML = "", this.imageViewer.appendChild(c);
      }
    };
    return this.tabs.forEach((o, a) => {
      const c = document.createElement("button");
      c.className = "tabbed-tab-button", o.kind === "shader" ? c.classList.add("shader-tab") : o.kind === "image" && c.classList.add("image-tab"), c.textContent = o.name, a === 0 && c.classList.add("active"), c.addEventListener("click", () => r(a)), t.appendChild(c);
    }), e.appendChild(t), e.appendChild(this.buttonContainer), e;
  }
}
class Jt {
  constructor(e) {
    this.canvasContainers = /* @__PURE__ */ new Map(), this.container = e.container;
    const t = e.viewNames.length;
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-grid-view", this.wrapper.dataset.viewCount = String(t);
    for (const s of e.viewNames) {
      const r = document.createElement("div");
      r.className = "multi-view-canvas", r.setAttribute("data-view-name", s);
      const o = document.createElement("div");
      o.className = "multi-view-label", o.textContent = s, r.appendChild(o), this.canvasContainers.set(s, r), this.wrapper.appendChild(r);
    }
    this.container.appendChild(this.wrapper), this.resizeObserver = new ResizeObserver((s) => {
      for (const r of s) {
        const { width: o, height: a } = r.contentRect;
        this.updateOrientation(o, a);
      }
    }), this.resizeObserver.observe(this.wrapper);
    const i = this.wrapper.getBoundingClientRect();
    this.updateOrientation(i.width, i.height);
  }
  updateOrientation(e, t) {
    const i = e > t;
    this.wrapper.classList.toggle("grid-horizontal", i), this.wrapper.classList.toggle("grid-vertical", !i);
  }
  getCanvasContainers() {
    return this.canvasContainers;
  }
  getWrapperElement() {
    return this.wrapper;
  }
  dispose() {
    this.resizeObserver.disconnect(), this.container.innerHTML = "";
  }
}
class _s {
  constructor(e) {
    if (this.canvasContainers = /* @__PURE__ */ new Map(), this.insetContainer = null, this.minimizeBtn = null, this.isMinimized = !1, this.toggleMinimize = () => {
      this.isMinimized = !this.isMinimized, this.insetContainer && this.insetContainer.classList.toggle("minimized", this.isMinimized), this.minimizeBtn && (this.isMinimized ? (this.minimizeBtn.innerHTML = "&#x25A1;", this.minimizeBtn.title = "Restore", this.minimizeBtn.style.display = "none") : (this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.style.display = ""));
    }, this.container = e.container, e.viewNames.length < 2)
      throw new Error("InsetViewLayout requires at least 2 views");
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-inset-view";
    const t = e.viewNames[0], i = document.createElement("div");
    i.className = "multi-view-canvas inset-main", i.setAttribute("data-view-name", t), this.canvasContainers.set(t, i), this.wrapper.appendChild(i);
    const s = e.viewNames[1];
    this.insetContainer = document.createElement("div"), this.insetContainer.className = "multi-view-canvas inset-overlay", this.insetContainer.setAttribute("data-view-name", s), this.canvasContainers.set(s, this.insetContainer), this.minimizeBtn = document.createElement("button"), this.minimizeBtn.className = "inset-minimize-btn", this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.addEventListener("click", this.toggleMinimize), this.insetContainer.appendChild(this.minimizeBtn), this.wrapper.appendChild(this.insetContainer), this.insetContainer.addEventListener("click", (r) => {
      this.isMinimized && r.target === this.insetContainer && this.toggleMinimize();
    }), this.container.appendChild(this.wrapper);
  }
  getCanvasContainers() {
    return this.canvasContainers;
  }
  getWrapperElement() {
    return this.wrapper;
  }
  dispose() {
    this.minimizeBtn && this.minimizeBtn.removeEventListener("click", this.toggleMinimize), this.container.innerHTML = "";
  }
}
function Cs(n, e) {
  switch (n) {
    case "fullscreen":
      return new vs(e);
    case "default":
      return new Ts(e);
    case "split":
      return new Es(e);
    case "tabbed":
      return new xs(e);
  }
}
function Ss(n, e) {
  switch (n) {
    case "split":
    case "quad":
    case "grid":
      return new Jt(e);
    case "inset":
      return new _s(e);
    default:
      return new Jt(e);
  }
}
function Rs(n, e) {
  const { styled: t = !0, pixelRatio: i = window.devicePixelRatio } = e, s = { ...e.project };
  return e.layout !== void 0 && (s.layout = e.layout), e.controls !== void 0 && (s.controls = e.controls), e.stats !== void 0 && (s.stats = e.stats), e.playback !== void 0 && (s.playback = e.playback), e.uniformsUI !== void 0 && (s.uniformsUI = e.uniformsUI), e.theme !== void 0 && (s.theme = e.theme), e.startPaused !== void 0 && (s.startPaused = e.startPaused), e.stickyMouse !== void 0 && (s.stickyMouse = e.stickyMouse), e.pixelRatio !== void 0 && (s.pixelRatio = e.pixelRatio), t || n.classList.add("unstyled"), n.setAttribute("data-theme", s.theme), Sn(s) ? As(n, s, i) : ks(n, s, i);
}
function kn(n, e) {
  return {
    pause: () => {
      n.getPaused() || n.togglePlayPause();
    },
    resume: () => {
      n.getPaused() && n.togglePlayPause();
    },
    reset: () => n.reset(),
    get isPaused() {
      return n.getPaused();
    },
    setUniform: (t, i) => n.setUniformValue(t, i),
    getUniform: (t) => n.getUniformValue(t),
    destroy: e
  };
}
function ks(n, e, t) {
  const i = Cs(e.layout, {
    container: n,
    project: e
  }), s = new le({
    container: i.getCanvasContainer(),
    project: e,
    pixelRatio: t,
    skipUniformsPanel: !1,
    skipPlaybackControls: !1
  });
  return i.setRecompileHandler && i.setRecompileHandler((r, o) => {
    const a = s.getEngine();
    if (!a)
      return { success: !1, error: "Engine not initialized" };
    if (r === "common") {
      const c = a.recompileCommon(o);
      if (c.success)
        return { success: !0 };
      const u = c.errors[0];
      return {
        success: !1,
        error: u ? `${u.passName}: ${u.error}` : "Unknown error"
      };
    }
    return a.recompilePass(r, o);
  }), i.setUniformHandler && i.setUniformHandler((r, o) => {
    const a = s.getEngine();
    a && a.setUniformValue(r, o);
  }), s.hasErrors() || s.start(), kn(s, () => {
    s.dispose(), i.dispose();
  });
}
function As(n, e, t) {
  const i = e.views.map((a) => a.name), s = Ss(e.viewLayout, {
    container: n,
    project: e,
    viewNames: i
  }), r = new le({
    container: s.getWrapperElement(),
    project: e,
    pixelRatio: t,
    viewContainers: s.getCanvasContainers(),
    skipPlaybackControls: !0,
    skipUniformsPanel: !0
  }), o = new ws({
    wrapper: s.getWrapperElement(),
    onTogglePlayPause: () => r.togglePlayPause(),
    onReset: () => r.reset(),
    getPaused: () => r.getPaused(),
    onSetUniformValue: (a, c) => r.setUniformValue(a, c),
    uniforms: e.uniforms
  });
  return r.hasErrors() || r.start(), kn(r, () => {
    o.dispose(), r.dispose(), s.dispose();
  });
}
function Rt(n) {
  return n === "Image" || n === "BufferA" || n === "BufferB" || n === "BufferC" || n === "BufferD";
}
function Fs(n) {
  switch (n) {
    case "Image":
      return "image.glsl";
    case "BufferA":
      return "bufferA.glsl";
    case "BufferB":
      return "bufferB.glsl";
    case "BufferC":
      return "bufferC.glsl";
    case "BufferD":
      return "bufferD.glsl";
  }
}
function An(n) {
  return typeof n == "string" ? Rt(n) ? { buffer: n } : n === "keyboard" ? { keyboard: !0 } : n === "audio" ? { audio: !0 } : n === "webcam" ? { webcam: !0 } : { texture: n } : n;
}
const vt = ["Image", "BufferA", "BufferB", "BufferC", "BufferD"], Ps = ["BufferA", "BufferB", "BufferC", "BufferD"], Fn = ["iChannel0", "iChannel1", "iChannel2", "iChannel3"], Bs = "default", Ms = "auto", Pn = /* @__PURE__ */ new Set([
  "iResolution",
  "iTime",
  "iTimeDelta",
  "iFrame",
  "iMouse",
  "iDate",
  "iFrameRate",
  "iChannelResolution",
  "iChannel0",
  "iChannel1",
  "iChannel2",
  "iChannel3",
  "iTouchCount",
  "iTouch0",
  "iTouch1",
  "iTouch2",
  "iPinch",
  "iPinchDelta",
  "iPinchCenter"
]), Ls = /^[a-zA-Z_][a-zA-Z0-9_]*$/, Is = /* @__PURE__ */ new Set([
  "attribute",
  "const",
  "uniform",
  "varying",
  "break",
  "continue",
  "do",
  "for",
  "while",
  "if",
  "else",
  "in",
  "out",
  "inout",
  "float",
  "int",
  "void",
  "bool",
  "true",
  "false",
  "discard",
  "return",
  "mat2",
  "mat3",
  "mat4",
  "vec2",
  "vec3",
  "vec4",
  "ivec2",
  "ivec3",
  "ivec4",
  "bvec2",
  "bvec3",
  "bvec4",
  "sampler2D",
  "samplerCube",
  "struct",
  "precision",
  "highp",
  "mediump",
  "lowp",
  "layout",
  "centroid",
  "flat",
  "smooth",
  "noperspective",
  "switch",
  "case",
  "default"
]);
function Ae(n) {
  return Ls.test(n) && !Is.has(n);
}
const Zt = /* @__PURE__ */ new Set(["fullscreen", "default", "split", "tabbed"]), et = /* @__PURE__ */ new Set(["light", "dark", "system"]), Us = /* @__PURE__ */ new Set([
  "mode",
  "title",
  "author",
  "description",
  "layout",
  "theme",
  "controls",
  "stats",
  "playback",
  "uniformsUI",
  "common",
  "startPaused",
  "stickyMouse",
  "pixelRatio",
  "uniforms",
  "buffers",
  "textures",
  "Image",
  "BufferA",
  "BufferB",
  "BufferC",
  "BufferD",
  "views"
  // multi-view projects
]), Os = /* @__PURE__ */ new Set(["source", "iChannel0", "iChannel1", "iChannel2", "iChannel3"]), en = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
function Ns(n, e) {
  const t = [], i = [];
  for (const r of Object.keys(n))
    Us.has(r) || t.push(`Unknown config key '${r}'`);
  if (n.layout !== void 0 && !Zt.has(n.layout) && i.push(`Invalid layout '${n.layout}'. Expected one of: ${[...Zt].join(", ")}`), n.theme !== void 0 && !et.has(n.theme) && i.push(`Invalid theme '${n.theme}'. Expected one of: ${[...et].join(", ")}`), n.uniforms && typeof n.uniforms == "object")
    for (const r of Object.keys(n.uniforms))
      Pn.has(r) && i.push(`Uniform name '${r}' is reserved (built-in uniform)`), Ae(r) || i.push(`Uniform name '${r}' is not a valid GLSL identifier`);
  const s = /* @__PURE__ */ new Set();
  if (n.buffers) {
    const r = Object.keys(n.buffers);
    for (const o of r) {
      if (typeof o != "string") {
        i.push(`Buffer name must be a string, got ${typeof o}`);
        continue;
      }
      Ae(o) || i.push(`Buffer name '${o}' is not a valid GLSL identifier`), s.add(o);
    }
  }
  if (n.textures && typeof n.textures == "object")
    for (const [r, o] of Object.entries(n.textures))
      Ae(r) || i.push(`Texture name '${r}' is not a valid GLSL identifier`), s.has(r) && i.push(`Texture name '${r}' collides with a buffer name`), typeof o != "string" ? i.push(`Texture source for '${r}' must be a string`) : !en.has(o) && !/\.\w+$/.test(o) && !Ae(o) && i.push(`Invalid texture source '${o}' for '${r}'. Expected a file path with extension, a script texture name, or one of: ${[...en].join(", ")}`);
  for (const r of vt) {
    const o = n[r];
    if (!(!o || typeof o != "object")) {
      for (const a of Object.keys(o))
        Os.has(a) || t.push(`Unknown key '${a}' in pass '${r}'`);
      for (const a of Fn) {
        const c = o[a];
        c && typeof c == "string" && Rt(c) && c !== "Image" && !n[c] && t.push(`${r}.${a} references '${c}' but no ${c} pass is configured`);
      }
    }
  }
  for (const r of t)
    console.warn(`[config] ${e}: ${r}`);
  if (i.length > 0)
    throw new Error(`Config validation failed for '${e}':
${i.map((r) => `  - ${r}`).join(`
`)}`);
}
const tn = /* @__PURE__ */ new Set(["split", "quad", "grid", "inset"]);
function $s(n, e) {
  const t = [];
  if (!Array.isArray(n.views) || n.views.length < 2)
    t.push("'views' must be an array with at least 2 entries");
  else {
    for (const s of n.views)
      (typeof s != "string" || !s) && t.push(`Each view name must be a non-empty string, got '${s}'`);
    new Set(n.views).size !== n.views.length && t.push("Duplicate view names found");
  }
  if (n.layout !== void 0 && !tn.has(n.layout) && t.push(`Invalid multi-view layout '${n.layout}'. Expected one of: ${[...tn].join(", ")}`), n.theme !== void 0 && !et.has(n.theme) && t.push(`Invalid theme '${n.theme}'. Expected one of: ${[...et].join(", ")}`), n.uniforms && typeof n.uniforms == "object")
    for (const i of Object.keys(n.uniforms))
      Pn.has(i) && t.push(`Uniform name '${i}' is reserved (built-in uniform)`), Ae(i) || t.push(`Uniform name '${i}' is not a valid GLSL identifier`);
  if (t.length > 0)
    throw new Error(`Multi-view config validation failed for '${e}':
${t.map((i) => `  - ${i}`).join(`
`)}`);
}
function it(n) {
  return {
    mode: n.mode,
    root: n.root,
    meta: {
      title: n.title ?? n.root.split("/").pop() ?? "Untitled",
      author: n.author ?? null,
      description: n.description ?? null
    },
    layout: n.layout ?? Bs,
    theme: n.theme ?? Ms,
    controls: n.controls,
    stats: n.stats,
    playback: n.playback,
    uniformsUI: n.uniformsUI,
    startPaused: n.startPaused ?? !1,
    stickyMouse: n.stickyMouse ?? !1,
    pixelRatio: n.pixelRatio ?? null,
    commonSource: n.commonSource,
    passes: n.passes,
    textures: n.textures ?? [],
    uniforms: n.uniforms ?? {},
    uniformData: n.uniformData ?? {},
    script: n.script ?? null
  };
}
const nn = /* @__PURE__ */ new Set(["float", "int", "bool", "vec2", "vec3", "vec4"]), He = /* @__PURE__ */ new Set(["float", "vec2", "vec3", "vec4", "mat3", "mat4"]), Ds = {
  vec2: 2,
  vec3: 3,
  vec4: 4
};
function Vs(n, e) {
  for (const [t, i] of Object.entries(n)) {
    const s = `Uniform '${t}' in '${e}'`;
    if (Z(i)) {
      if (typeof i.struct != "object" || i.struct === null || Array.isArray(i.struct))
        throw new Error(`${s}: 'struct' must be an object mapping field names to types`);
      if (Object.keys(i.struct).length === 0)
        throw new Error(`${s}: struct must have at least one field`);
      for (const [a, c] of Object.entries(i.struct))
        if (!He.has(c))
          throw new Error(`${s}: invalid struct field type '${c}' for field '${a}'. Expected one of: ${[...He].join(", ")}`);
      if (typeof i.count != "number" || i.count < 1 || !Number.isInteger(i.count))
        throw new Error(`${s}: 'count' must be a positive integer, got ${i.count}`);
      continue;
    }
    if (J(i)) {
      if (!He.has(i.type))
        throw new Error(`${s}: invalid array type '${i.type}'. Expected one of: ${[...He].join(", ")}`);
      if (typeof i.count != "number" || i.count < 1 || !Number.isInteger(i.count))
        throw new Error(`${s}: 'count' must be a positive integer, got ${i.count}`);
      continue;
    }
    if (!i.type)
      throw new Error(`${s}: missing 'type' field`);
    const r = i;
    if (!nn.has(r.type))
      throw new Error(`${s}: invalid type '${r.type}'. Expected one of: ${[...nn].join(", ")}`);
    switch (r.type) {
      case "float":
      case "int":
        if (typeof r.value != "number")
          throw new Error(`${s}: 'value' must be a number for type '${r.type}', got ${typeof r.value}`);
        if (r.min !== void 0 && typeof r.min != "number")
          throw new Error(`${s}: 'min' must be a number`);
        if (r.max !== void 0 && typeof r.max != "number")
          throw new Error(`${s}: 'max' must be a number`);
        if (r.step !== void 0 && typeof r.step != "number")
          throw new Error(`${s}: 'step' must be a number`);
        break;
      case "bool":
        if (typeof r.value != "boolean")
          throw new Error(`${s}: 'value' must be a boolean for type 'bool', got ${typeof r.value}`);
        break;
      case "vec2":
      case "vec3":
      case "vec4": {
        const o = Ds[r.type];
        if (!Array.isArray(r.value) || r.value.length !== o)
          throw new Error(`${s}: 'value' must be an array of ${o} numbers for type '${r.type}'`);
        if (r.value.some((c) => typeof c != "number"))
          throw new Error(`${s}: all components of 'value' must be numbers`);
        const a = r;
        for (const c of ["min", "max", "step"]) {
          const u = a[c];
          if (u !== void 0 && (!Array.isArray(u) || u.length !== o))
            throw new Error(`${s}: '${c}' must be an array of ${o} numbers for type '${r.type}'`);
        }
        break;
      }
    }
  }
}
async function zs(n, e, t) {
  const i = {};
  for (const [s, r] of Object.entries(t)) {
    const o = r.data;
    if (typeof o != "string")
      continue;
    const a = n.joinPath(e, o);
    if (!await n.exists(a))
      throw new Error(`Uniform '${s}': data file '${o}' not found at '${a}'`);
    const c = await n.readText(a);
    let u;
    try {
      u = JSON.parse(c);
    } catch (l) {
      throw new Error(`Uniform '${s}': invalid JSON in '${o}': ${(l == null ? void 0 : l.message) ?? String(l)}`);
    }
    if (J(r))
      if (Array.isArray(u))
        i[s] = u;
      else if (u && typeof u == "object" && s in u)
        i[s] = u[s];
      else
        throw new Error(`Uniform '${s}': data file '${o}' must be an array or contain key '${s}'`);
    else if (Z(r))
      if (u && typeof u == "object" && !Array.isArray(u))
        i[s] = s in u && typeof u[s] == "object" ? u[s] : u;
      else
        throw new Error(`Uniform '${s}': data file '${o}' must be an object with field data`);
  }
  return i;
}
async function Bn(n, e, t) {
  if (t) {
    const s = n.joinPath(e, t);
    if (!await n.exists(s))
      throw new Error(`Common GLSL file '${t}' not found in '${e}'.`);
    return await n.readText(s);
  }
  const i = n.joinPath(e, "common.glsl");
  return await n.exists(i) ? await n.readText(i) : null;
}
class Mn {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  register(e, t = "linear", i = "repeat", s) {
    const r = `${e}|${t}|${i}`, o = this.map.get(r);
    if (o)
      return o.name;
    const a = `tex${this.map.size}`;
    return this.map.set(r, { name: a, filename: s, source: e, filter: t, wrap: i }), a;
  }
  toArray() {
    return Array.from(this.map.values());
  }
}
function js(n, e, t, i, s, r) {
  if ("buffer" in n) {
    const o = n.buffer;
    if (!Rt(o))
      throw new Error(`Invalid buffer name '${o}' for ${t} in pass '${e}' at '${i}'.`);
    return { kind: "buffer", buffer: o, current: !!n.current };
  }
  if ("texture" in n)
    return { kind: "texture", name: (r == null ? void 0 : r.get(n.texture)) ?? s.register(n.texture, n.filter, n.wrap), cubemap: n.type === "cubemap" };
  if ("keyboard" in n)
    return { kind: "keyboard" };
  if ("audio" in n)
    return { kind: "audio" };
  if ("webcam" in n)
    return { kind: "webcam" };
  if ("video" in n)
    return { kind: "video", src: n.video };
  if ("script" in n)
    return { kind: "script", name: n.script };
  throw new Error(`Invalid channel object for ${t} in pass '${e}' at '${i}'.`);
}
function We(n, e, t, i, s, r) {
  if (!n)
    return { kind: "none" };
  const o = An(n);
  return o ? js(o, e, t, i, s, r) : { kind: "none" };
}
async function Hs(n, e, t) {
  let i = t == null ? void 0 : t.config;
  if (i === void 0) {
    const s = n.joinPath(e, "config.json");
    if (await n.exists(s)) {
      const r = await n.readText(s);
      try {
        i = JSON.parse(r);
      } catch (o) {
        throw new Error(`Invalid JSON in config.json at '${e}': ${(o == null ? void 0 : o.message) ?? String(o)}`);
      }
    }
  }
  return i ? (Ns(i, e), i.mode === "shadertoy" ? Xs(n, e, i, t) : Gs(n, e, i, t)) : Ws(n, e, t);
}
async function Ws(n, e, t) {
  const i = n.joinPath(e, "image.glsl");
  if (!await n.exists(i))
    throw new Error(`Single-pass project at '${e}' requires 'image.glsl'.`);
  const s = await n.listGlslFiles(e);
  if (s.length > 0 && s.filter((u) => u !== "image.glsl").length > 0)
    throw new Error(`Project at '${e}' contains multiple GLSL files (${s.join(", ")}) but no 'config.json'. Add a config file to use multiple passes.`);
  if (await n.hasFiles(n.joinPath(e, "textures")))
    throw new Error(`Project at '${e}' uses textures (in 'textures/' folder) but has no 'config.json'. Add a config file to define texture bindings.`);
  const o = await n.readText(i);
  return it({
    mode: "standard",
    root: e,
    commonSource: null,
    passes: {
      Image: { name: "Image", glslSource: o, channels: [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }] }
    },
    script: t == null ? void 0 : t.script
  });
}
async function Xs(n, e, t, i) {
  const s = {
    Image: t.Image,
    BufferA: t.BufferA,
    BufferB: t.BufferB,
    BufferC: t.BufferC,
    BufferD: t.BufferD
  };
  s.Image || s.BufferA || s.BufferB || s.BufferC || s.BufferD || (s.Image = {});
  const o = await Bn(n, e, t.common), a = new Mn(), c = /* @__PURE__ */ new Map();
  if (i != null && i.textureUrlResolver)
    for (const l of vt) {
      const d = s[l];
      if (d)
        for (const h of Fn) {
          const f = d[h];
          if (!f)
            continue;
          const y = An(f);
          if (y && "texture" in y && !c.has(y.texture)) {
            const w = await i.textureUrlResolver(y.texture), E = y.texture.split("/").pop(), R = a.register(w, y.filter, y.wrap, E);
            c.set(y.texture, R);
          }
        }
    }
  const u = {};
  for (const l of vt) {
    const d = s[l];
    if (!d)
      continue;
    const h = d.source ?? Fs(l), f = n.joinPath(e, h);
    if (!await n.exists(f))
      throw new Error(`Source GLSL file for pass '${l}' not found at '${h}' in '${e}'.`);
    const y = await n.readText(f), w = [
      We(d.iChannel0, l, "iChannel0", e, a, c),
      We(d.iChannel1, l, "iChannel1", e, a, c),
      We(d.iChannel2, l, "iChannel2", e, a, c),
      We(d.iChannel3, l, "iChannel3", e, a, c)
    ];
    u[l] = { name: l, glslSource: y, channels: w };
  }
  if (!u.Image)
    throw new Error(`config.json at '${e}' must define an Image pass.`);
  return it({
    mode: "shadertoy",
    root: e,
    title: t.title,
    author: t.author,
    description: t.description,
    layout: t.layout,
    theme: t.theme,
    controls: t.controls,
    stats: t.stats,
    playback: t.playback,
    uniformsUI: t.uniformsUI,
    startPaused: t.startPaused,
    stickyMouse: t.stickyMouse,
    pixelRatio: t.pixelRatio,
    commonSource: o,
    passes: u,
    textures: a.toArray(),
    script: i == null ? void 0 : i.script
  });
}
async function Gs(n, e, t, i) {
  let s = {};
  t.uniforms && (Vs(t.uniforms, e), s = await zs(n, e, t.uniforms));
  const r = await Bn(n, e, t.common), o = t.buffers ?? {};
  if (Object.keys(o).length > 0 || t.textures && Object.keys(t.textures).length > 0)
    return Ys(n, e, t, r, i, s);
  const a = n.joinPath(e, "image.glsl");
  if (!await n.exists(a))
    throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);
  const c = await n.readText(a), u = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }];
  return it({
    mode: "standard",
    root: e,
    title: t.title,
    author: t.author,
    description: t.description,
    layout: t.layout,
    theme: t.theme,
    controls: t.controls,
    stats: t.stats,
    playback: t.playback,
    uniformsUI: t.uniformsUI,
    startPaused: t.startPaused,
    stickyMouse: t.stickyMouse,
    pixelRatio: t.pixelRatio,
    commonSource: r,
    passes: {
      Image: { name: "Image", glslSource: c, channels: u }
    },
    uniforms: t.uniforms,
    uniformData: s,
    script: i == null ? void 0 : i.script
  });
}
const Ks = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
async function Ys(n, e, t, i, s, r) {
  const o = t.buffers ?? {}, a = Object.keys(o);
  if (a.length > 4)
    throw new Error(`Standard mode at '${e}' supports max 4 buffers, got ${a.length}: ${a.join(", ")}`);
  const c = /* @__PURE__ */ new Map();
  for (let w = 0; w < a.length; w++)
    c.set(a[w], Ps[w]);
  const u = new Mn(), l = /* @__PURE__ */ new Map();
  for (const [w, E] of c)
    l.set(w, { kind: "buffer", buffer: E, current: !1 });
  for (const [w, E] of Object.entries(t.textures ?? {}))
    if (E === "keyboard")
      l.set(w, { kind: "keyboard" });
    else if (E === "audio")
      l.set(w, { kind: "audio" });
    else if (E === "webcam")
      l.set(w, { kind: "webcam" });
    else if (/\.\w+$/.test(E)) {
      let R;
      s != null && s.textureUrlResolver ? R = await s.textureUrlResolver(E) : R = E;
      const m = u.register(R);
      l.set(w, { kind: "texture", name: m, cubemap: !1 });
    } else Ks.has(E) || l.set(w, { kind: "script", name: E });
  const d = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }], h = n.joinPath(e, "image.glsl");
  if (!await n.exists(h))
    throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);
  const y = {
    Image: {
      name: "Image",
      glslSource: await n.readText(h),
      channels: d,
      namedSamplers: new Map(l)
    }
  };
  for (const [w, E] of c) {
    const R = n.joinPath(e, `${w}.glsl`);
    if (!await n.exists(R))
      throw new Error(`Buffer '${w}' requires '${w}.glsl' in '${e}'.`);
    const m = await n.readText(R);
    y[E] = {
      name: E,
      glslSource: m,
      channels: d,
      namedSamplers: new Map(l)
    };
  }
  return it({
    mode: "standard",
    root: e,
    title: t.title,
    author: t.author,
    description: t.description,
    layout: t.layout,
    theme: t.theme,
    controls: t.controls,
    stats: t.stats,
    playback: t.playback,
    uniformsUI: t.uniformsUI,
    startPaused: t.startPaused,
    stickyMouse: t.stickyMouse,
    pixelRatio: t.pixelRatio,
    commonSource: i,
    passes: y,
    textures: u.toArray(),
    uniforms: t.uniforms,
    uniformData: r,
    script: s == null ? void 0 : s.script
  });
}
function pe(n, e) {
  if (e in n)
    return e;
  const t = e.toLowerCase();
  for (const i of Object.keys(n))
    if (i.toLowerCase() === t)
      return i;
  return null;
}
async function Ln(n, e) {
  if (!e)
    return null;
  const t = `${n}/script.js`, i = pe(e, t);
  if (!i)
    return null;
  const s = await e[i](), r = {};
  return typeof s.setup == "function" && (r.setup = s.setup), typeof s.onFrame == "function" && (r.onFrame = s.onFrame), typeof s.dispose == "function" && (r.dispose = s.dispose), typeof s.onUniformChange == "function" && (r.onUniformChange = s.onUniformChange), r.setup || r.onFrame || r.dispose || r.onUniformChange ? r : null;
}
function In(n, e) {
  return {
    async exists(t) {
      return pe(n, t) !== null || pe(e, t) !== null;
    },
    async readText(t) {
      const i = pe(n, t);
      if (!i)
        throw new Error(`File not found: ${t}`);
      return n[i]();
    },
    async resolveImageUrl(t) {
      const i = pe(e, t);
      if (!i)
        throw new Error(`Image not found: ${t}`);
      return e[i]();
    },
    async listGlslFiles() {
      return [];
    },
    async hasFiles() {
      return !1;
    },
    joinPath(...t) {
      return t.map((i, s) => s === 0 ? i : i.replace(/^\/+/, "")).join("/").replace(/\/+/g, "/");
    },
    baseName(t) {
      return t.split("/").pop() || t;
    }
  };
}
function Un(n) {
  return (n.split("/").pop() || n).split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
async function sn(n, e, t, i, s) {
  const r = n.startsWith("./") ? n : `./${n}`, o = `${r}/config.json`;
  let a;
  if (o in t && (a = await t[o]()), a && Li(a))
    return $s(a, r), qs(r, a, e, i, s);
  const c = await Ln(r, s), u = In(e, i), d = await Hs(u, r, {
    config: a,
    script: c,
    textureUrlResolver: async (h) => {
      const f = `${r}/${h.replace(/^\.\//, "")}`;
      return u.resolveImageUrl(f);
    }
  });
  return a != null && a.title || (d.meta.title = Un(r)), d;
}
async function qs(n, e, t, i, s) {
  const r = In(t, i), o = await Ln(n, s);
  let a = null;
  const c = `${n}/common.glsl`;
  pe(t, c) && (a = await r.readText(c));
  const u = [], l = [
    { kind: "none" },
    { kind: "none" },
    { kind: "none" },
    { kind: "none" }
  ];
  for (const d of e.views) {
    const h = `${n}/${d}.glsl`, f = `${n}/${d}/image.glsl`;
    let y;
    if (pe(t, h))
      y = await r.readText(h);
    else if (pe(t, f))
      y = await r.readText(f);
    else
      throw new Error(`Multi-view: No shader found for view "${d}". Expected ${d}.glsl or ${d}/image.glsl`);
    const w = {
      name: "Image",
      glslSource: y,
      channels: l,
      namedSamplers: /* @__PURE__ */ new Map()
    };
    u.push({
      name: d,
      passes: { Image: w }
    });
  }
  return {
    mode: "standard",
    root: n,
    meta: {
      title: e.title ?? Un(n),
      author: e.author ?? null,
      description: e.description ?? null
    },
    theme: e.theme ?? "light",
    controls: e.controls,
    stats: e.stats,
    playback: e.playback,
    uniformsUI: e.uniformsUI,
    startPaused: e.startPaused ?? !1,
    stickyMouse: e.stickyMouse ?? !1,
    pixelRatio: e.pixelRatio ?? null,
    commonSource: a,
    uniforms: e.uniforms ?? {},
    uniformData: {},
    textures: [],
    script: o,
    views: u,
    viewLayout: e.layout ?? "split"
  };
}
function Tt(n) {
  return !n || !n.trim() ? [] : n.split(/[\s,]+/).map((e) => parseInt(e, 10)).filter((e) => !isNaN(e));
}
function Qs(n) {
  if (n.length === 0) return 0;
  let e = n[n.length - 1];
  for (let t = n.length - 2; t >= 0; t--)
    e = n[t] + 1 / e;
  return e;
}
function Js(n, e) {
  if (e.length === 0) return Qs(n);
  let t = [[1, 0], [0, 1]];
  for (const c of e)
    t = [
      [c * t[0][0] + t[0][1], t[0][0]],
      [c * t[1][0] + t[1][1], t[1][0]]
    ];
  const i = t[1][0], s = t[1][1] - t[0][0], r = -t[0][1], o = s * s - 4 * i * r;
  if (o < 0) throw new Error("quadraticCF: negative discriminant");
  let a = (-s + Math.sqrt(o)) / (2 * i);
  for (let c = n.length - 1; c >= 0; c--)
    a = n[c] + 1 / a;
  return a;
}
function rn(n, e) {
  return Js(Tt(n), Tt(e));
}
function Zs(n) {
  return Tt(n).reverse().join(", ");
}
let ge = [1, 1.618033988749895], be = [-1.618033988749895, 1], er = null, Et = !1;
function tr(n) {
  console.log("checkPeriodSnap called, flow:", n, "p1:", er);
}
function On(n, e) {
  n = q.matrix(n), e = q.matrix(e);
  const t = (i) => q.dot(i, i);
  for (t(n) > t(e) && ([n, e] = [e, n]); ; ) {
    const i = Math.round(q.dot(n, e) / t(n));
    if (e = q.subtract(e, q.multiply(i, n)), t(e) >= t(n)) break;
    [n, e] = [e, n];
  }
  return [n.toArray(), e.toArray()];
}
const tt = 60;
function nr(n) {
  return q.matrix([
    [Math.exp(n / (3 * tt)), 0],
    [0, Math.exp(-n / (3 * tt))]
  ]);
}
function ir(n) {
  return q.matrix([
    [1, 0],
    [n / tt, 1]
  ]);
}
function sr(n) {
  return q.matrix([
    [1, n / tt],
    [0, 1]
  ]);
}
function rr(n, e) {
  const t = rn(n.cfPrefix ?? "", n.cfPeriod ?? "0");
  ge = [1, rn("", Zs(n.cfPeriod) ?? "0")], be = [-t, 1], [ge, be] = On(ge, be), Et = !0;
}
function or(n) {
  ge = [1, 1.618033988749895], be = [-1.618033988749895, 1];
}
function ar(n, e, t, i) {
  const s = n.getUniformValue("uFlow"), r = n.getUniformValue("uSpeed");
  let o;
  switch (s) {
    case 1:
      o = ir(r);
      break;
    case 2:
      o = sr(r);
      break;
    default:
      o = nr(r * 2);
  }
  const a = q.multiply(o, ge), c = q.multiply(o, be);
  [ge, be] = On(a, c), tr(s), n.setUniformValue("uLattice", [ge[0], ge[1], be[0], be[1]]), n.setUniformValue("uNewLattice", Et), Et = !1;
}
const Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onFrame: ar,
  onSetLattice: rr,
  setup: or
}, Symbol.toStringTag, { value: "Module" })), on = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/common.glsl": () => Promise.resolve().then(() => Aa).then((n) => n.default), "./shaders/2dFlowJS/common.glsl": () => Promise.resolve().then(() => Pa).then((n) => n.default), "./shaders/2dFlowJS/dotTrails.glsl": () => Promise.resolve().then(() => Ma).then((n) => n.default), "./shaders/2dFlowJS/gridTrace.glsl": () => Promise.resolve().then(() => Ia).then((n) => n.default), "./shaders/2dFlowJS/image.glsl": () => Promise.resolve().then(() => Oa).then((n) => n.default), "./shaders/2dHalfplaneJS/common.glsl": () => Promise.resolve().then(() => $a).then((n) => n.default), "./shaders/2dHalfplaneJS/hpBackground.glsl": () => Promise.resolve().then(() => Va).then((n) => n.default), "./shaders/2dHalfplaneJS/hpTrails.glsl": () => Promise.resolve().then(() => ja).then((n) => n.default), "./shaders/2dHalfplaneJS/image.glsl": () => Promise.resolve().then(() => Wa).then((n) => n.default), "./shaders/2dHalfplaneJS/pathBackground.glsl": () => Promise.resolve().then(() => Ga).then((n) => n.default) }), Xe = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/config.json": () => Promise.resolve().then(() => Ya).then((n) => n.default), "./shaders/2dFlowJS/config.json": () => Promise.resolve().then(() => Qa).then((n) => n.default), "./shaders/2dHalfplaneJS/config.json": () => Promise.resolve().then(() => Za).then((n) => n.default) }), an = /* @__PURE__ */ Object.assign({}), Ge = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/script.js": () => Promise.resolve().then(() => Qe), "./shaders/2dFlowJS/script.js": () => Promise.resolve().then(() => Qe), "./shaders/2dHalfplaneJS/script.js": () => Promise.resolve().then(() => Qe) });
async function cr() {
  const e = await Xe["./shaders/2dCombinedJS/config.json"](), t = (i) => `./shaders/${i}/config.json` in Xe;
  if (e.views && e.views.some(t)) {
    const i = await Promise.all(
      e.views.map((a) => sn(`shaders/${a}`, on, Xe, an, Ge))
    );
    let s = null;
    const r = "./shaders/2dCombinedJS/script.js";
    if (r in Ge) {
      const a = await Ge[r](), c = {};
      typeof a.setup == "function" && (c.setup = a.setup), typeof a.onFrame == "function" && (c.onFrame = a.onFrame), (c.setup || c.onFrame) && (s = c);
    }
    const o = Object.assign(
      {},
      ...i.map((a) => a.uniforms),
      e.uniforms ?? {}
    );
    return {
      mode: "standard",
      root: "./shaders/2dCombinedJS",
      meta: { title: e.title ?? "2dCombinedJS", author: null, description: null },
      theme: e.theme ?? "light",
      controls: e.controls ?? !0,
      startPaused: e.startPaused ?? !1,
      pixelRatio: e.pixelRatio ?? null,
      commonSource: null,
      uniforms: o,
      textures: i.flatMap((a) => a.textures),
      script: s,
      views: e.views.map((a, c) => ({ name: a, passes: i[c].passes })),
      viewLayout: e.viewLayout ?? e.layout ?? "split"
    };
  }
  return sn("shaders/2dCombinedJS", on, Xe, an, Ge);
}
async function ec(n, e = {}) {
  const t = await cr();
  return Rs(n, { project: t, ...e });
}
const tc = Qe;
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
function S(n) {
  if (!n)
    throw new Error("Assertion failed.");
}
const Te = (n) => n && n[n.length - 1], ye = (n) => n >= 0 && n < 2 ** 32, C = (n) => {
  let e = 0;
  for (; n.readBits(1) === 0 && e < 32; )
    e++;
  if (e >= 32)
    throw new Error("Invalid exponential-Golomb code.");
  return (1 << e) - 1 + n.readBits(e);
}, de = (n) => {
  const e = C(n);
  return e & 1 ? e + 1 >> 1 : -(e >> 1);
}, Oe = (n) => n.constructor === Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n), Nn = (n) => n.constructor === DataView ? n : ArrayBuffer.isView(n) ? new DataView(n.buffer, n.byteOffset, n.byteLength) : new DataView(n), oe = /* @__PURE__ */ new TextEncoder(), kt = {
  bt709: 1,
  // ITU-R BT.709
  bt470bg: 5,
  // ITU-R BT.470BG
  smpte170m: 6,
  // ITU-R BT.601 525 - SMPTE 170M
  bt2020: 9,
  // ITU-R BT.202
  smpte432: 12
  // SMPTE EG 432-1
}, At = {
  bt709: 1,
  // ITU-R BT.709
  smpte170m: 6,
  // SMPTE 170M
  linear: 8,
  // Linear transfer characteristics
  "iec61966-2-1": 13,
  // IEC 61966-2-1
  pq: 16,
  // Rec. ITU-R BT.2100-2 perceptual quantization (PQ) system
  hlg: 18
  // Rec. ITU-R BT.2100-2 hybrid loggamma (HLG) system
}, Ft = {
  rgb: 0,
  // Identity
  bt709: 1,
  // ITU-R BT.709
  bt470bg: 5,
  // ITU-R BT.470BG
  smpte170m: 6,
  // SMPTE 170M
  "bt2020-ncl": 9
  // ITU-R BT.2020-2 (non-constant luminance)
}, lr = (n) => !!n && !!n.primaries && !!n.transfer && !!n.matrix && n.fullRange !== void 0, $n = (n) => n instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && n instanceof SharedArrayBuffer || ArrayBuffer.isView(n);
class Dn {
  constructor() {
    this.currentPromise = Promise.resolve(), this.pending = 0;
  }
  async acquire() {
    let e;
    const t = new Promise((s) => {
      let r = !1;
      e = () => {
        r || (s(), this.pending--, r = !0);
      };
    }), i = this.currentPromise;
    return this.currentPromise = t, this.pending++, await i, e;
  }
}
const ur = () => {
  let n, e;
  return { promise: new Promise((i, s) => {
    n = i, e = s;
  }), resolve: n, reject: e };
}, Vn = (n) => {
  throw new Error(`Unexpected value: ${n}`);
}, dr = (n, e, t, i) => {
  t = t >>> 0, t = t & 16777215, n.setUint8(e, t >>> 16 & 255), n.setUint8(e + 1, t >>> 8 & 255), n.setUint8(e + 2, t & 255);
}, hr = "und", fr = /^[a-z]{3}$/, mr = (n) => fr.test(n), cn = 1e6 * (1 + Number.EPSILON), pr = (n, e) => {
  const t = n < 0 ? -1 : 1;
  n = Math.abs(n);
  let i = 0, s = 1, r = 1, o = 0, a = n;
  for (; ; ) {
    const c = Math.floor(a), u = c * r + i, l = c * o + s;
    if (l > e)
      return {
        numerator: t * r,
        denominator: o
      };
    if (i = r, s = o, r = u, o = l, a = 1 / (a - c), !isFinite(a))
      break;
  }
  return {
    numerator: t * r,
    denominator: o
  };
}, zn = function* (n) {
  for (const e in n) {
    const t = n[e];
    t !== void 0 && (yield { key: e, value: t });
  }
}, gr = (n) => {
  S(Number.isInteger(n.num)), S(Number.isInteger(n.den)), S(n.den !== 0);
  let e = Math.abs(n.num), t = Math.abs(n.den);
  for (; t !== 0; ) {
    const s = e % t;
    e = t, t = s;
  }
  const i = e || 1;
  return {
    num: n.num / i,
    den: n.den / i
  };
}, ln = (n) => Array.isArray(n) ? n : [n];
class Pt {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  /** Registers a listener for the given event. */
  on(e, t, i) {
    this._listeners.has(e) || this._listeners.set(e, /* @__PURE__ */ new Set());
    const s = { fn: t, once: (i == null ? void 0 : i.once) ?? !1 };
    return this._listeners.get(e).add(s), () => {
      var r;
      (r = this._listeners.get(e)) == null || r.delete(s);
    };
  }
  /** @internal */
  _emit(...e) {
    const [t, i] = e, s = this._listeners.get(t);
    if (s)
      for (const r of s) {
        try {
          r.fn(i);
        } catch (o) {
          console.error(o);
        }
        r.once && s.delete(r);
      }
  }
}
const br = (n) => n !== null && typeof n == "object" && Object.getPrototypeOf(n) === Object.prototype && Object.values(n).every((e) => typeof e == "string");
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Bt {
  /** Creates a new {@link RichImageData}. */
  constructor(e, t) {
    if (this.data = e, this.mimeType = t, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (typeof t != "string")
      throw new TypeError("mimeType must be a string.");
  }
}
class jn {
  /** Creates a new {@link AttachedFile}. */
  constructor(e, t, i, s) {
    if (this.data = e, this.mimeType = t, this.name = i, this.description = s, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== void 0 && typeof t != "string")
      throw new TypeError("mimeType, when provided, must be a string.");
    if (i !== void 0 && typeof i != "string")
      throw new TypeError("name, when provided, must be a string.");
    if (s !== void 0 && typeof s != "string")
      throw new TypeError("description, when provided, must be a string.");
  }
}
const yr = (n) => {
  if (!n || typeof n != "object")
    throw new TypeError("tags must be an object.");
  if (n.title !== void 0 && typeof n.title != "string")
    throw new TypeError("tags.title, when provided, must be a string.");
  if (n.description !== void 0 && typeof n.description != "string")
    throw new TypeError("tags.description, when provided, must be a string.");
  if (n.artist !== void 0 && typeof n.artist != "string")
    throw new TypeError("tags.artist, when provided, must be a string.");
  if (n.album !== void 0 && typeof n.album != "string")
    throw new TypeError("tags.album, when provided, must be a string.");
  if (n.albumArtist !== void 0 && typeof n.albumArtist != "string")
    throw new TypeError("tags.albumArtist, when provided, must be a string.");
  if (n.trackNumber !== void 0 && (!Number.isInteger(n.trackNumber) || n.trackNumber <= 0))
    throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
  if (n.tracksTotal !== void 0 && (!Number.isInteger(n.tracksTotal) || n.tracksTotal <= 0))
    throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
  if (n.discNumber !== void 0 && (!Number.isInteger(n.discNumber) || n.discNumber <= 0))
    throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
  if (n.discsTotal !== void 0 && (!Number.isInteger(n.discsTotal) || n.discsTotal <= 0))
    throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
  if (n.genre !== void 0 && typeof n.genre != "string")
    throw new TypeError("tags.genre, when provided, must be a string.");
  if (n.date !== void 0 && (!(n.date instanceof Date) || Number.isNaN(n.date.getTime())))
    throw new TypeError("tags.date, when provided, must be a valid Date.");
  if (n.lyrics !== void 0 && typeof n.lyrics != "string")
    throw new TypeError("tags.lyrics, when provided, must be a string.");
  if (n.images !== void 0) {
    if (!Array.isArray(n.images))
      throw new TypeError("tags.images, when provided, must be an array.");
    for (const e of n.images) {
      if (!e || typeof e != "object")
        throw new TypeError("Each image in tags.images must be an object.");
      if (!(e.data instanceof Uint8Array))
        throw new TypeError("Each image.data must be a Uint8Array.");
      if (typeof e.mimeType != "string")
        throw new TypeError("Each image.mimeType must be a string.");
      if (!["coverFront", "coverBack", "unknown"].includes(e.kind))
        throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
    }
  }
  if (n.comment !== void 0 && typeof n.comment != "string")
    throw new TypeError("tags.comment, when provided, must be a string.");
  if (n.raw !== void 0) {
    if (!n.raw || typeof n.raw != "object")
      throw new TypeError("tags.raw, when provided, must be an object.");
    for (const e of Object.values(n.raw))
      if (e !== null && typeof e != "string" && !(e instanceof Uint8Array) && !(e instanceof Bt) && !(e instanceof jn) && !br(e))
        throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.");
  }
}, wr = (n) => {
  if (!n || typeof n != "object")
    throw new TypeError("disposition must be an object.");
  if (n.default !== void 0 && typeof n.default != "boolean")
    throw new TypeError("disposition.default must be a boolean.");
  if (n.primary !== void 0 && typeof n.primary != "boolean")
    throw new TypeError("disposition.primary must be a boolean.");
  if (n.forced !== void 0 && typeof n.forced != "boolean")
    throw new TypeError("disposition.forced must be a boolean.");
  if (n.original !== void 0 && typeof n.original != "boolean")
    throw new TypeError("disposition.original must be a boolean.");
  if (n.commentary !== void 0 && typeof n.commentary != "boolean")
    throw new TypeError("disposition.commentary must be a boolean.");
  if (n.hearingImpaired !== void 0 && typeof n.hearingImpaired != "boolean")
    throw new TypeError("disposition.hearingImpaired must be a boolean.");
  if (n.visuallyImpaired !== void 0 && typeof n.visuallyImpaired != "boolean")
    throw new TypeError("disposition.visuallyImpaired must be a boolean.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class te {
  constructor(e) {
    this.bytes = e, this.pos = 0;
  }
  seekToByte(e) {
    this.pos = 8 * e;
  }
  readBit() {
    const e = Math.floor(this.pos / 8), t = this.bytes[e] ?? 0, i = 7 - (this.pos & 7), s = (t & 1 << i) >> i;
    return this.pos++, s;
  }
  readBits(e) {
    if (e === 1)
      return this.readBit();
    let t = 0;
    for (let i = 0; i < e; i++)
      t <<= 1, t |= this.readBit();
    return t;
  }
  writeBits(e, t) {
    const i = this.pos + e;
    for (let s = this.pos; s < i; s++) {
      const r = Math.floor(s / 8);
      let o = this.bytes[r];
      const a = 7 - (s & 7);
      o &= ~(1 << a), o |= (t & 1 << i - s - 1) >> i - s - 1 << a, this.bytes[r] = o;
    }
    this.pos = i;
  }
  readAlignedByte() {
    if (this.pos % 8 !== 0)
      throw new Error("Bitstream is not byte-aligned.");
    const e = this.pos / 8, t = this.bytes[e] ?? 0;
    return this.pos += 8, t;
  }
  skipBits(e) {
    this.pos += e;
  }
  getBitsLeft() {
    return this.bytes.length * 8 - this.pos;
  }
  clone() {
    const e = new te(this.bytes);
    return e.pos = this.pos, e;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Hn = [
  96e3,
  88200,
  64e3,
  48e3,
  44100,
  32e3,
  24e3,
  22050,
  16e3,
  12e3,
  11025,
  8e3,
  7350
], Wn = [-1, 1, 2, 3, 4, 5, 6, 8], vr = (n) => {
  let e = Hn.indexOf(n.sampleRate), t = null;
  e === -1 && (e = 15, t = n.sampleRate);
  const i = Wn.indexOf(n.numberOfChannels);
  if (i === -1)
    throw new TypeError(`Unsupported number of channels: ${n.numberOfChannels}`);
  let s = 13;
  n.objectType >= 32 && (s += 6), e === 15 && (s += 24);
  const r = Math.ceil(s / 8), o = new Uint8Array(r), a = new te(o);
  return n.objectType < 32 ? a.writeBits(5, n.objectType) : (a.writeBits(5, 31), a.writeBits(6, n.objectType - 32)), a.writeBits(4, e), e === 15 && a.writeBits(24, t), a.writeBits(4, i), o;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const we = [
  "avc",
  "hevc",
  "vp9",
  "av1",
  "vp8"
], ve = [
  "pcm-s16",
  // We don't prefix 'le' so we're compatible with the WebCodecs-registered PCM codec strings
  "pcm-s16be",
  "pcm-s24",
  "pcm-s24be",
  "pcm-s32",
  "pcm-s32be",
  "pcm-f32",
  "pcm-f32be",
  "pcm-f64",
  "pcm-f64be",
  "pcm-u8",
  "pcm-s8",
  "ulaw",
  "alaw"
], st = [
  "aac",
  "opus",
  "mp3",
  "vorbis",
  "flac",
  "ac3",
  "eac3"
], Be = [
  ...st,
  ...ve
], Ee = [
  "webvtt"
], un = [
  { maxMacroblocks: 99, maxBitrate: 64e3, maxDpbMbs: 396, level: 10 },
  // Level 1
  { maxMacroblocks: 396, maxBitrate: 192e3, maxDpbMbs: 900, level: 11 },
  // Level 1.1
  { maxMacroblocks: 396, maxBitrate: 384e3, maxDpbMbs: 2376, level: 12 },
  // Level 1.2
  { maxMacroblocks: 396, maxBitrate: 768e3, maxDpbMbs: 2376, level: 13 },
  // Level 1.3
  { maxMacroblocks: 396, maxBitrate: 2e6, maxDpbMbs: 2376, level: 20 },
  // Level 2
  { maxMacroblocks: 792, maxBitrate: 4e6, maxDpbMbs: 4752, level: 21 },
  // Level 2.1
  { maxMacroblocks: 1620, maxBitrate: 4e6, maxDpbMbs: 8100, level: 22 },
  // Level 2.2
  { maxMacroblocks: 1620, maxBitrate: 1e7, maxDpbMbs: 8100, level: 30 },
  // Level 3
  { maxMacroblocks: 3600, maxBitrate: 14e6, maxDpbMbs: 18e3, level: 31 },
  // Level 3.1
  { maxMacroblocks: 5120, maxBitrate: 2e7, maxDpbMbs: 20480, level: 32 },
  // Level 3.2
  { maxMacroblocks: 8192, maxBitrate: 2e7, maxDpbMbs: 32768, level: 40 },
  // Level 4
  { maxMacroblocks: 8192, maxBitrate: 5e7, maxDpbMbs: 32768, level: 41 },
  // Level 4.1
  { maxMacroblocks: 8704, maxBitrate: 5e7, maxDpbMbs: 34816, level: 42 },
  // Level 4.2
  { maxMacroblocks: 22080, maxBitrate: 135e6, maxDpbMbs: 110400, level: 50 },
  // Level 5
  { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 51 },
  // Level 5.1
  { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 52 },
  // Level 5.2
  { maxMacroblocks: 139264, maxBitrate: 24e7, maxDpbMbs: 696320, level: 60 },
  // Level 6
  { maxMacroblocks: 139264, maxBitrate: 48e7, maxDpbMbs: 696320, level: 61 },
  // Level 6.1
  { maxMacroblocks: 139264, maxBitrate: 8e8, maxDpbMbs: 696320, level: 62 }
  // Level 6.2
], Tr = (n) => {
  const e = n.split("."), s = (1 << 7) + 1, r = Number(e[1]), o = e[2], a = Number(o.slice(0, -1)), c = (r << 5) + a, u = o.slice(-1) === "H" ? 1 : 0, d = Number(e[3]) === 8 ? 0 : 1, h = 0, f = e[4] ? Number(e[4]) : 0, y = e[5] ? Number(e[5][0]) : 1, w = e[5] ? Number(e[5][1]) : 1, E = e[5] ? Number(e[5][2]) : 0, R = (u << 7) + (d << 6) + (h << 5) + (f << 4) + (y << 3) + (w << 2) + E;
  return [s, c, R, 0];
}, Er = /^pcm-([usf])(\d+)+(be)?$/, xe = (n) => {
  if (S(ve.includes(n)), n === "ulaw")
    return { dataType: "ulaw", sampleSize: 1, littleEndian: !0, silentValue: 255 };
  if (n === "alaw")
    return { dataType: "alaw", sampleSize: 1, littleEndian: !0, silentValue: 213 };
  const e = Er.exec(n);
  S(e);
  let t;
  e[1] === "u" ? t = "unsigned" : e[1] === "s" ? t = "signed" : t = "float";
  const i = Number(e[2]) / 8, s = e[3] !== "be", r = n === "pcm-u8" ? 2 ** 7 : 0;
  return { dataType: t, sampleSize: i, littleEndian: s, silentValue: r };
}, xr = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01"], _r = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/, Cr = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/, Sr = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/, Rr = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/, kr = (n) => {
  if (!n)
    throw new TypeError("Video chunk metadata must be provided.");
  if (typeof n != "object")
    throw new TypeError("Video chunk metadata must be an object.");
  if (!n.decoderConfig)
    throw new TypeError("Video chunk metadata must include a decoder configuration.");
  if (typeof n.decoderConfig != "object")
    throw new TypeError("Video chunk metadata decoder configuration must be an object.");
  if (typeof n.decoderConfig.codec != "string")
    throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
  if (!xr.some((e) => n.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(n.decoderConfig.codedWidth) || n.decoderConfig.codedWidth <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
  if (!Number.isInteger(n.decoderConfig.codedHeight) || n.decoderConfig.codedHeight <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
  if (n.decoderConfig.displayAspectWidth !== void 0 && (!Number.isInteger(n.decoderConfig.displayAspectWidth) || n.decoderConfig.displayAspectWidth <= 0))
    throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
  if (n.decoderConfig.displayAspectHeight !== void 0 && (!Number.isInteger(n.decoderConfig.displayAspectHeight) || n.decoderConfig.displayAspectHeight <= 0))
    throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
  if (n.decoderConfig.displayAspectWidth !== void 0 != (n.decoderConfig.displayAspectHeight !== void 0))
    throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
  if (n.decoderConfig.description !== void 0 && !$n(n.decoderConfig.description))
    throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (n.decoderConfig.colorSpace !== void 0) {
    const { colorSpace: e } = n.decoderConfig;
    if (typeof e != "object")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
    const t = Object.keys(kt);
    if (e.primaries != null && !t.includes(e.primaries))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${t.join(", ")}.`);
    const i = Object.keys(At);
    if (e.transfer != null && !i.includes(e.transfer))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${i.join(", ")}.`);
    const s = Object.keys(Ft);
    if (e.matrix != null && !s.includes(e.matrix))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);
    if (e.fullRange != null && typeof e.fullRange != "boolean")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
  }
  if (n.decoderConfig.codec.startsWith("avc1") || n.decoderConfig.codec.startsWith("avc3")) {
    if (!_r.test(n.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
  } else if (n.decoderConfig.codec.startsWith("hev1") || n.decoderConfig.codec.startsWith("hvc1")) {
    if (!Cr.test(n.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
  } else if (n.decoderConfig.codec.startsWith("vp8")) {
    if (n.decoderConfig.codec !== "vp8")
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
  } else if (n.decoderConfig.codec.startsWith("vp09")) {
    if (!Sr.test(n.decoderConfig.codec))
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
  } else if (n.decoderConfig.codec.startsWith("av01") && !Rr.test(n.decoderConfig.codec))
    throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
}, Ar = [
  "mp4a",
  "mp3",
  "opus",
  "vorbis",
  "flac",
  "ulaw",
  "alaw",
  "pcm",
  "ac-3",
  "ec-3"
], Fr = (n) => {
  if (!n)
    throw new TypeError("Audio chunk metadata must be provided.");
  if (typeof n != "object")
    throw new TypeError("Audio chunk metadata must be an object.");
  if (!n.decoderConfig)
    throw new TypeError("Audio chunk metadata must include a decoder configuration.");
  if (typeof n.decoderConfig != "object")
    throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
  if (typeof n.decoderConfig.codec != "string")
    throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
  if (!Ar.some((e) => n.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(n.decoderConfig.sampleRate) || n.decoderConfig.sampleRate <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
  if (!Number.isInteger(n.decoderConfig.numberOfChannels) || n.decoderConfig.numberOfChannels <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
  if (n.decoderConfig.description !== void 0 && !$n(n.decoderConfig.description))
    throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (n.decoderConfig.codec.startsWith("mp4a") && n.decoderConfig.codec !== "mp4a.69" && n.decoderConfig.codec !== "mp4a.6B" && n.decoderConfig.codec !== "mp4a.6b") {
    if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(n.decoderConfig.codec))
      throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
  } else if (n.decoderConfig.codec.startsWith("mp3") || n.decoderConfig.codec.startsWith("mp4a")) {
    if (n.decoderConfig.codec !== "mp3" && n.decoderConfig.codec !== "mp4a.69" && n.decoderConfig.codec !== "mp4a.6B" && n.decoderConfig.codec !== "mp4a.6b")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".');
  } else if (n.decoderConfig.codec.startsWith("opus")) {
    if (n.decoderConfig.codec !== "opus")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
    if (n.decoderConfig.description && n.decoderConfig.description.byteLength < 18)
      throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
  } else if (n.decoderConfig.codec.startsWith("vorbis")) {
    if (n.decoderConfig.codec !== "vorbis")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
    if (!n.decoderConfig.description)
      throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
  } else if (n.decoderConfig.codec.startsWith("flac")) {
    if (n.decoderConfig.codec !== "flac")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
    if (!n.decoderConfig.description || n.decoderConfig.description.byteLength < 42)
      throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
  } else if (n.decoderConfig.codec.startsWith("ac-3") || n.decoderConfig.codec.startsWith("ac3")) {
    if (n.decoderConfig.codec !== "ac-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".');
  } else if (n.decoderConfig.codec.startsWith("ec-3") || n.decoderConfig.codec.startsWith("eac3")) {
    if (n.decoderConfig.codec !== "ec-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".');
  } else if ((n.decoderConfig.codec.startsWith("pcm") || n.decoderConfig.codec.startsWith("ulaw") || n.decoderConfig.codec.startsWith("alaw")) && !ve.includes(n.decoderConfig.codec))
    throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ve.join(", ")}).`);
}, Pr = (n) => {
  if (!n)
    throw new TypeError("Subtitle metadata must be provided.");
  if (typeof n != "object")
    throw new TypeError("Subtitle metadata must be an object.");
  if (!n.config)
    throw new TypeError("Subtitle metadata must include a config object.");
  if (typeof n.config != "object")
    throw new TypeError("Subtitle metadata config must be an object.");
  if (typeof n.config.description != "string")
    throw new TypeError("Subtitle metadata config description must be a string.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Br = [48e3, 44100, 32e3], Mr = [24e3, 22050, 16e3];
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var Fe;
(function(n) {
  n[n.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", n[n.SLICE_DPA = 2] = "SLICE_DPA", n[n.SLICE_DPB = 3] = "SLICE_DPB", n[n.SLICE_DPC = 4] = "SLICE_DPC", n[n.IDR = 5] = "IDR", n[n.SEI = 6] = "SEI", n[n.SPS = 7] = "SPS", n[n.PPS = 8] = "PPS", n[n.AUD = 9] = "AUD", n[n.SPS_EXT = 13] = "SPS_EXT";
})(Fe || (Fe = {}));
var se;
(function(n) {
  n[n.RASL_N = 8] = "RASL_N", n[n.RASL_R = 9] = "RASL_R", n[n.BLA_W_LP = 16] = "BLA_W_LP", n[n.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", n[n.VPS_NUT = 32] = "VPS_NUT", n[n.SPS_NUT = 33] = "SPS_NUT", n[n.PPS_NUT = 34] = "PPS_NUT", n[n.AUD_NUT = 35] = "AUD_NUT", n[n.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", n[n.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
})(se || (se = {}));
const Mt = function* (n) {
  let e = 0, t = -1;
  for (; e < n.length - 2; ) {
    const i = n.indexOf(0, e);
    if (i === -1 || i >= n.length - 2)
      break;
    e = i;
    let s = 0;
    if (e + 3 < n.length && n[e + 1] === 0 && n[e + 2] === 0 && n[e + 3] === 1 ? s = 4 : n[e + 1] === 0 && n[e + 2] === 1 && (s = 3), s === 0) {
      e++;
      continue;
    }
    t !== -1 && e > t && (yield {
      offset: t,
      length: e - t
    }), t = e + s, e = t;
  }
  t !== -1 && t < n.length && (yield {
    offset: t,
    length: n.length - t
  });
}, Lr = (n) => n & 31, Lt = (n) => {
  const e = [], t = n.length;
  for (let i = 0; i < t; i++)
    i + 2 < t && n[i] === 0 && n[i + 1] === 0 && n[i + 2] === 3 ? (e.push(0, 0), i += 2) : e.push(n[i]);
  return new Uint8Array(e);
}, Ir = (n, e) => {
  const t = n.reduce((r, o) => r + e + o.byteLength, 0), i = new Uint8Array(t);
  let s = 0;
  for (const r of n) {
    const o = new DataView(i.buffer, i.byteOffset, i.byteLength);
    switch (e) {
      case 1:
        o.setUint8(s, r.byteLength);
        break;
      case 2:
        o.setUint16(s, r.byteLength, !1);
        break;
      case 3:
        dr(o, s, r.byteLength);
        break;
      case 4:
        o.setUint32(s, r.byteLength, !1);
        break;
    }
    s += e, i.set(r, s), s += r.byteLength;
  }
  return i;
}, Ur = (n) => {
  try {
    const e = [], t = [], i = [];
    for (const a of Mt(n)) {
      const c = n.subarray(a.offset, a.offset + a.length), u = Lr(c[0]);
      u === Fe.SPS ? e.push(c) : u === Fe.PPS ? t.push(c) : u === Fe.SPS_EXT && i.push(c);
    }
    if (e.length === 0 || t.length === 0)
      return null;
    const s = e[0], r = Nr(s);
    S(r !== null);
    const o = r.profileIdc === 100 || r.profileIdc === 110 || r.profileIdc === 122 || r.profileIdc === 144;
    return {
      configurationVersion: 1,
      avcProfileIndication: r.profileIdc,
      profileCompatibility: r.constraintFlags,
      avcLevelIndication: r.levelIdc,
      lengthSizeMinusOne: 3,
      // Typically 4 bytes for length field
      sequenceParameterSets: e,
      pictureParameterSets: t,
      chromaFormat: o ? r.chromaFormatIdc : null,
      bitDepthLumaMinus8: o ? r.bitDepthLumaMinus8 : null,
      bitDepthChromaMinus8: o ? r.bitDepthChromaMinus8 : null,
      sequenceParameterSetExt: o ? i : null
    };
  } catch (e) {
    return console.error("Error building AVC Decoder Configuration Record:", e), null;
  }
}, Or = (n) => {
  const e = [];
  e.push(n.configurationVersion), e.push(n.avcProfileIndication), e.push(n.profileCompatibility), e.push(n.avcLevelIndication), e.push(252 | n.lengthSizeMinusOne & 3), e.push(224 | n.sequenceParameterSets.length & 31);
  for (const t of n.sequenceParameterSets) {
    const i = t.byteLength;
    e.push(i >> 8), e.push(i & 255);
    for (let s = 0; s < i; s++)
      e.push(t[s]);
  }
  e.push(n.pictureParameterSets.length);
  for (const t of n.pictureParameterSets) {
    const i = t.byteLength;
    e.push(i >> 8), e.push(i & 255);
    for (let s = 0; s < i; s++)
      e.push(t[s]);
  }
  if (n.avcProfileIndication === 100 || n.avcProfileIndication === 110 || n.avcProfileIndication === 122 || n.avcProfileIndication === 144) {
    S(n.chromaFormat !== null), S(n.bitDepthLumaMinus8 !== null), S(n.bitDepthChromaMinus8 !== null), S(n.sequenceParameterSetExt !== null), e.push(252 | n.chromaFormat & 3), e.push(248 | n.bitDepthLumaMinus8 & 7), e.push(248 | n.bitDepthChromaMinus8 & 7), e.push(n.sequenceParameterSetExt.length);
    for (const t of n.sequenceParameterSetExt) {
      const i = t.byteLength;
      e.push(i >> 8), e.push(i & 255);
      for (let s = 0; s < i; s++)
        e.push(t[s]);
    }
  }
  return new Uint8Array(e);
}, Xn = {
  1: { num: 1, den: 1 },
  2: { num: 12, den: 11 },
  3: { num: 10, den: 11 },
  4: { num: 16, den: 11 },
  5: { num: 40, den: 33 },
  6: { num: 24, den: 11 },
  7: { num: 20, den: 11 },
  8: { num: 32, den: 11 },
  9: { num: 80, den: 33 },
  10: { num: 18, den: 11 },
  11: { num: 15, den: 11 },
  12: { num: 64, den: 33 },
  13: { num: 160, den: 99 },
  14: { num: 4, den: 3 },
  15: { num: 3, den: 2 },
  16: { num: 2, den: 1 }
}, Nr = (n) => {
  try {
    const e = new te(Lt(n));
    if (e.skipBits(1), e.skipBits(2), e.readBits(5) !== 7)
      return null;
    const i = e.readAlignedByte(), s = e.readAlignedByte(), r = e.readAlignedByte();
    C(e);
    let o = 1, a = 0, c = 0, u = 0;
    if ((i === 100 || i === 110 || i === 122 || i === 244 || i === 44 || i === 83 || i === 86 || i === 118 || i === 128) && (o = C(e), o === 3 && (u = e.readBits(1)), a = C(e), c = C(e), e.skipBits(1), e.readBits(1))) {
      for (let k = 0; k < (o !== 3 ? 8 : 12); k++)
        if (e.readBits(1)) {
          const H = k < 6 ? 16 : 64;
          let U = 8, $ = 8;
          for (let D = 0; D < H; D++) {
            if ($ !== 0) {
              const O = de(e);
              $ = (U + O + 256) % 256;
            }
            U = $ === 0 ? U : $;
          }
        }
    }
    C(e);
    const l = C(e);
    if (l === 0)
      C(e);
    else if (l === 1) {
      e.skipBits(1), de(e), de(e);
      const M = C(e);
      for (let k = 0; k < M; k++)
        de(e);
    }
    C(e), e.skipBits(1);
    const d = C(e), h = C(e), f = 16 * (d + 1), y = 16 * (h + 1);
    let w = f, E = y;
    const R = e.readBits(1);
    if (R || e.skipBits(1), e.skipBits(1), e.readBits(1)) {
      const M = C(e), k = C(e), z = C(e), H = C(e);
      let U, $;
      if ((u === 0 ? o : 0) === 0)
        U = 1, $ = 2 - R;
      else {
        const O = o === 3 ? 1 : 2, W = o === 1 ? 2 : 1;
        U = O, $ = W * (2 - R);
      }
      w -= U * (M + k), E -= $ * (z + H);
    }
    let p = 2, g = 2, b = 2, T = 0, _ = { num: 1, den: 1 }, A = null, v = null;
    if (e.readBits(1)) {
      if (e.readBits(1)) {
        const W = e.readBits(8);
        if (W === 255)
          _ = {
            num: e.readBits(16),
            den: e.readBits(16)
          };
        else {
          const ce = Xn[W];
          ce && (_ = ce);
        }
      }
      e.readBits(1) && e.skipBits(1), e.readBits(1) && (e.skipBits(3), T = e.readBits(1), e.readBits(1) && (p = e.readBits(8), g = e.readBits(8), b = e.readBits(8))), e.readBits(1) && (C(e), C(e)), e.readBits(1) && (e.skipBits(32), e.skipBits(32), e.skipBits(1));
      const $ = e.readBits(1);
      $ && dn(e);
      const D = e.readBits(1);
      D && dn(e), ($ || D) && e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(1), C(e), C(e), C(e), C(e), A = C(e), v = C(e));
    }
    if (A === null) {
      S(v === null);
      const M = s & 16;
      if ((i === 44 || i === 86 || i === 100 || i === 110 || i === 122 || i === 244) && M)
        A = 0, v = 0;
      else {
        const k = d + 1, z = h + 1, H = (2 - R) * z, U = un.find((D) => D.level >= r) ?? Te(un), $ = Math.min(Math.floor(U.maxDpbMbs / (k * H)), 16);
        A = $, v = $;
      }
    }
    return S(v !== null), {
      profileIdc: i,
      constraintFlags: s,
      levelIdc: r,
      frameMbsOnlyFlag: R,
      chromaFormatIdc: o,
      bitDepthLumaMinus8: a,
      bitDepthChromaMinus8: c,
      codedWidth: f,
      codedHeight: y,
      displayWidth: w,
      displayHeight: E,
      pixelAspectRatio: _,
      colourPrimaries: p,
      matrixCoefficients: b,
      transferCharacteristics: g,
      fullRangeFlag: T,
      numReorderFrames: A,
      maxDecFrameBuffering: v
    };
  } catch (e) {
    return console.error("Error parsing AVC SPS:", e), null;
  }
}, dn = (n) => {
  const e = C(n);
  n.skipBits(4), n.skipBits(4);
  for (let t = 0; t <= e; t++)
    C(n), C(n), n.skipBits(1);
  n.skipBits(5), n.skipBits(5), n.skipBits(5), n.skipBits(5);
}, hn = (n) => n >> 1 & 63, $r = (n) => {
  try {
    const e = new te(Lt(n));
    e.skipBits(16), e.readBits(4);
    const t = e.readBits(3), i = e.readBits(1), { general_profile_space: s, general_tier_flag: r, general_profile_idc: o, general_profile_compatibility_flags: a, general_constraint_indicator_flags: c, general_level_idc: u } = Vr(e, t);
    C(e);
    const l = C(e);
    let d = 0;
    l === 3 && (d = e.readBits(1));
    const h = C(e), f = C(e);
    let y = h, w = f;
    if (e.readBits(1)) {
      const k = C(e), z = C(e), H = C(e), U = C(e);
      let $ = 1, D = 1;
      const O = d === 0 ? l : 0;
      O === 1 ? ($ = 2, D = 2) : O === 2 && ($ = 2, D = 1), y -= (k + z) * $, w -= (H + U) * D;
    }
    const E = C(e), R = C(e);
    C(e);
    const p = e.readBits(1) ? 0 : t;
    let g = 0;
    for (let k = p; k <= t; k++)
      C(e), g = C(e), C(e);
    C(e), C(e), C(e), C(e), C(e), C(e), e.readBits(1) && e.readBits(1) && zr(e), e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(4), e.skipBits(4), C(e), C(e), e.skipBits(1));
    const b = C(e);
    if (jr(e, b), e.readBits(1)) {
      const k = C(e);
      for (let z = 0; z < k; z++)
        C(e), e.skipBits(1);
    }
    e.skipBits(1), e.skipBits(1);
    let T = 2, _ = 2, A = 2, v = 0, P = 0, M = { num: 1, den: 1 };
    if (e.readBits(1)) {
      const k = Wr(e, t);
      M = k.pixelAspectRatio, T = k.colourPrimaries, _ = k.transferCharacteristics, A = k.matrixCoefficients, v = k.fullRangeFlag, P = k.minSpatialSegmentationIdc;
    }
    return {
      displayWidth: y,
      displayHeight: w,
      pixelAspectRatio: M,
      colourPrimaries: T,
      transferCharacteristics: _,
      matrixCoefficients: A,
      fullRangeFlag: v,
      maxDecFrameBuffering: g + 1,
      spsMaxSubLayersMinus1: t,
      spsTemporalIdNestingFlag: i,
      generalProfileSpace: s,
      generalTierFlag: r,
      generalProfileIdc: o,
      generalProfileCompatibilityFlags: a,
      generalConstraintIndicatorFlags: c,
      generalLevelIdc: u,
      chromaFormatIdc: l,
      bitDepthLumaMinus8: E,
      bitDepthChromaMinus8: R,
      minSpatialSegmentationIdc: P
    };
  } catch (e) {
    return console.error("Error parsing HEVC SPS:", e), null;
  }
}, Dr = (n) => {
  try {
    const e = [], t = [], i = [], s = [];
    for (const u of Mt(n)) {
      const l = n.subarray(u.offset, u.offset + u.length), d = hn(l[0]);
      d === se.VPS_NUT ? e.push(l) : d === se.SPS_NUT ? t.push(l) : d === se.PPS_NUT ? i.push(l) : (d === se.PREFIX_SEI_NUT || d === se.SUFFIX_SEI_NUT) && s.push(l);
    }
    if (t.length === 0 || i.length === 0)
      return null;
    const r = $r(t[0]);
    if (!r)
      return null;
    let o = 0;
    if (i.length > 0) {
      const u = i[0], l = new te(Lt(u));
      l.skipBits(16), C(l), C(l), l.skipBits(1), l.skipBits(1), l.skipBits(3), l.skipBits(1), l.skipBits(1), C(l), C(l), de(l), l.skipBits(1), l.skipBits(1), l.readBits(1) && C(l), de(l), de(l), l.skipBits(1), l.skipBits(1), l.skipBits(1), l.skipBits(1);
      const d = l.readBits(1), h = l.readBits(1);
      !d && !h ? o = 0 : d && !h ? o = 2 : !d && h ? o = 3 : o = 0;
    }
    const a = [
      ...e.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: se.VPS_NUT,
          nalUnits: e
        }
      ] : [],
      ...t.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: se.SPS_NUT,
          nalUnits: t
        }
      ] : [],
      ...i.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: se.PPS_NUT,
          nalUnits: i
        }
      ] : [],
      ...s.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: hn(s[0][0]),
          nalUnits: s
        }
      ] : []
    ];
    return {
      configurationVersion: 1,
      generalProfileSpace: r.generalProfileSpace,
      generalTierFlag: r.generalTierFlag,
      generalProfileIdc: r.generalProfileIdc,
      generalProfileCompatibilityFlags: r.generalProfileCompatibilityFlags,
      generalConstraintIndicatorFlags: r.generalConstraintIndicatorFlags,
      generalLevelIdc: r.generalLevelIdc,
      minSpatialSegmentationIdc: r.minSpatialSegmentationIdc,
      parallelismType: o,
      chromaFormatIdc: r.chromaFormatIdc,
      bitDepthLumaMinus8: r.bitDepthLumaMinus8,
      bitDepthChromaMinus8: r.bitDepthChromaMinus8,
      avgFrameRate: 0,
      constantFrameRate: 0,
      numTemporalLayers: r.spsMaxSubLayersMinus1 + 1,
      temporalIdNested: r.spsTemporalIdNestingFlag,
      lengthSizeMinusOne: 3,
      arrays: a
    };
  } catch (e) {
    return console.error("Error building HEVC Decoder Configuration Record:", e), null;
  }
}, Vr = (n, e) => {
  const t = n.readBits(2), i = n.readBits(1), s = n.readBits(5);
  let r = 0;
  for (let l = 0; l < 32; l++)
    r = r << 1 | n.readBits(1);
  const o = new Uint8Array(6);
  for (let l = 0; l < 6; l++)
    o[l] = n.readBits(8);
  const a = n.readBits(8), c = [], u = [];
  for (let l = 0; l < e; l++)
    c.push(n.readBits(1)), u.push(n.readBits(1));
  if (e > 0)
    for (let l = e; l < 8; l++)
      n.skipBits(2);
  for (let l = 0; l < e; l++)
    c[l] && n.skipBits(88), u[l] && n.skipBits(8);
  return {
    general_profile_space: t,
    general_tier_flag: i,
    general_profile_idc: s,
    general_profile_compatibility_flags: r,
    general_constraint_indicator_flags: o,
    general_level_idc: a
  };
}, zr = (n) => {
  for (let e = 0; e < 4; e++)
    for (let t = 0; t < (e === 3 ? 2 : 6); t++)
      if (!n.readBits(1))
        C(n);
      else {
        const s = Math.min(64, 1 << 4 + (e << 1));
        e > 1 && de(n);
        for (let r = 0; r < s; r++)
          de(n);
      }
}, jr = (n, e) => {
  const t = [];
  for (let i = 0; i < e; i++)
    t[i] = Hr(n, i, e, t);
}, Hr = (n, e, t, i) => {
  let s = 0, r = 0, o = 0;
  if (e !== 0 && (r = n.readBits(1)), r) {
    if (e === t) {
      const c = C(n);
      o = e - (c + 1);
    } else
      o = e - 1;
    n.readBits(1), C(n);
    const a = i[o] ?? 0;
    for (let c = 0; c <= a; c++)
      n.readBits(1) || n.readBits(1);
    s = i[o];
  } else {
    const a = C(n), c = C(n);
    for (let u = 0; u < a; u++)
      C(n), n.readBits(1);
    for (let u = 0; u < c; u++)
      C(n), n.readBits(1);
    s = a + c;
  }
  return s;
}, Wr = (n, e) => {
  let t = 2, i = 2, s = 2, r = 0, o = 0, a = { num: 1, den: 1 };
  if (n.readBits(1)) {
    const c = n.readBits(8);
    if (c === 255)
      a = {
        num: n.readBits(16),
        den: n.readBits(16)
      };
    else {
      const u = Xn[c];
      u && (a = u);
    }
  }
  return n.readBits(1) && n.readBits(1), n.readBits(1) && (n.readBits(3), r = n.readBits(1), n.readBits(1) && (t = n.readBits(8), i = n.readBits(8), s = n.readBits(8))), n.readBits(1) && (C(n), C(n)), n.readBits(1), n.readBits(1), n.readBits(1), n.readBits(1) && (C(n), C(n), C(n), C(n)), n.readBits(1) && (n.readBits(32), n.readBits(32), n.readBits(1) && C(n), n.readBits(1) && Xr(n, !0, e)), n.readBits(1) && (n.readBits(1), n.readBits(1), n.readBits(1), o = C(n), C(n), C(n), C(n), C(n)), {
    pixelAspectRatio: a,
    colourPrimaries: t,
    transferCharacteristics: i,
    matrixCoefficients: s,
    fullRangeFlag: r,
    minSpatialSegmentationIdc: o
  };
}, Xr = (n, e, t) => {
  let i = !1, s = !1, r = !1;
  i = n.readBits(1) === 1, s = n.readBits(1) === 1, (i || s) && (r = n.readBits(1) === 1, r && (n.readBits(8), n.readBits(5), n.readBits(1), n.readBits(5)), n.readBits(4), n.readBits(4), r && n.readBits(4), n.readBits(5), n.readBits(5), n.readBits(5));
  for (let o = 0; o <= t; o++) {
    const a = n.readBits(1) === 1;
    let c = !0;
    a || (c = n.readBits(1) === 1);
    let u = !1;
    c ? C(n) : u = n.readBits(1) === 1;
    let l = 1;
    u || (l = C(n) + 1), i && fn(n, l, r), s && fn(n, l, r);
  }
}, fn = (n, e, t) => {
  for (let i = 0; i < e; i++)
    C(n), C(n), t && (C(n), C(n)), n.readBits(1);
}, Gr = (n) => {
  const e = [];
  e.push(n.configurationVersion), e.push((n.generalProfileSpace & 3) << 6 | (n.generalTierFlag & 1) << 5 | n.generalProfileIdc & 31), e.push(n.generalProfileCompatibilityFlags >>> 24 & 255), e.push(n.generalProfileCompatibilityFlags >>> 16 & 255), e.push(n.generalProfileCompatibilityFlags >>> 8 & 255), e.push(n.generalProfileCompatibilityFlags & 255), e.push(...n.generalConstraintIndicatorFlags), e.push(n.generalLevelIdc & 255), e.push(240 | n.minSpatialSegmentationIdc >> 8 & 15), e.push(n.minSpatialSegmentationIdc & 255), e.push(252 | n.parallelismType & 3), e.push(252 | n.chromaFormatIdc & 3), e.push(248 | n.bitDepthLumaMinus8 & 7), e.push(248 | n.bitDepthChromaMinus8 & 7), e.push(n.avgFrameRate >> 8 & 255), e.push(n.avgFrameRate & 255), e.push((n.constantFrameRate & 3) << 6 | (n.numTemporalLayers & 7) << 3 | (n.temporalIdNested & 1) << 2 | n.lengthSizeMinusOne & 3), e.push(n.arrays.length & 255);
  for (const t of n.arrays) {
    e.push((t.arrayCompleteness & 1) << 7 | 0 | t.nalUnitType & 63), e.push(t.nalUnits.length >> 8 & 255), e.push(t.nalUnits.length & 255);
    for (const i of t.nalUnits) {
      e.push(i.length >> 8 & 255), e.push(i.length & 255);
      for (let s = 0; s < i.length; s++)
        e.push(i[s]);
    }
  }
  return new Uint8Array(e);
};
var mn;
(function(n) {
  n[n.audAllowed = 0] = "audAllowed", n[n.beforeFirstVcl = 1] = "beforeFirstVcl", n[n.afterFirstVcl = 2] = "afterFirstVcl", n[n.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", n[n.noMoreDataAllowed = 4] = "noMoreDataAllowed";
})(mn || (mn = {}));
const Kr = (n) => {
  const e = Nn(n), t = e.getUint8(9), i = e.getUint16(10, !0), s = e.getUint32(12, !0), r = e.getInt16(16, !0), o = e.getUint8(18);
  let a = null;
  return o && (a = n.subarray(19, 21 + t)), {
    outputChannelCount: t,
    preSkip: i,
    inputSampleRate: s,
    outputGain: r,
    channelMappingFamily: o,
    channelMappingTable: a
  };
};
var pn;
(function(n) {
  n[n.STREAMINFO = 0] = "STREAMINFO", n[n.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", n[n.PICTURE = 6] = "PICTURE";
})(pn || (pn = {}));
const Yr = (n) => {
  if (n.length < 7 || n[0] !== 11 || n[1] !== 119)
    return null;
  const e = new te(n);
  e.skipBits(16), e.skipBits(16);
  const t = e.readBits(2);
  if (t === 3)
    return null;
  const i = e.readBits(6), s = e.readBits(5);
  if (s > 8)
    return null;
  const r = e.readBits(3), o = e.readBits(3);
  o & 1 && o !== 1 && e.skipBits(2), o & 4 && e.skipBits(2), o === 2 && e.skipBits(2);
  const a = e.readBits(1), c = Math.floor(i / 2);
  return { fscod: t, bsid: s, bsmod: r, acmod: o, lfeon: a, bitRateCode: c };
}, qr = [1, 2, 3, 6], Qr = (n) => {
  if (n.length < 6 || n[0] !== 11 || n[1] !== 119)
    return null;
  const e = new te(n);
  e.skipBits(16);
  const t = e.readBits(2);
  if (e.skipBits(3), t !== 0 && t !== 2)
    return null;
  const i = e.readBits(11), s = e.readBits(2);
  let r = 0, o;
  s === 3 ? (r = e.readBits(2), o = 3) : o = e.readBits(2);
  const a = e.readBits(3), c = e.readBits(1), u = e.readBits(5);
  if (u < 11 || u > 16)
    return null;
  const l = qr[o];
  let d;
  return s < 3 ? d = Br[s] / 1e3 : d = Mr[r] / 1e3, {
    dataRate: Math.round((i + 1) * d / (l * 16)),
    substreams: [{
      fscod: s,
      fscod2: r,
      bsid: u,
      bsmod: 0,
      acmod: a,
      lfeon: c,
      numDepSub: 0,
      chanLoc: 0
    }]
  };
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const gn = /* @__PURE__ */ new Uint8Array(0);
class Me {
  /** Creates a new {@link EncodedPacket} from raw bytes and timing information. */
  constructor(e, t, i, s, r = -1, o, a) {
    if (this.data = e, this.type = t, this.timestamp = i, this.duration = s, this.sequenceNumber = r, e === gn && o === void 0)
      throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
    if (o === void 0 && (o = e.byteLength), !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== "key" && t !== "delta")
      throw new TypeError('type must be either "key" or "delta".');
    if (!Number.isFinite(i))
      throw new TypeError("timestamp must be a number.");
    if (!Number.isFinite(s) || s < 0)
      throw new TypeError("duration must be a non-negative number.");
    if (!Number.isFinite(r))
      throw new TypeError("sequenceNumber must be a number.");
    if (!Number.isInteger(o) || o < 0)
      throw new TypeError("byteLength must be a non-negative integer.");
    if (a !== void 0 && (typeof a != "object" || !a))
      throw new TypeError("sideData, when provided, must be an object.");
    if ((a == null ? void 0 : a.alpha) !== void 0 && !(a.alpha instanceof Uint8Array))
      throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
    if ((a == null ? void 0 : a.alphaByteLength) !== void 0 && (!Number.isInteger(a.alphaByteLength) || a.alphaByteLength < 0))
      throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
    this.byteLength = o, this.sideData = a ?? {}, this.sideData.alpha && this.sideData.alphaByteLength === void 0 && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength);
  }
  /**
   * If this packet is a metadata-only packet. Metadata-only packets don't contain their packet data. They are the
   * result of retrieving packets with {@link PacketRetrievalOptions.metadataOnly} set to `true`.
   */
  get isMetadataOnly() {
    return this.data === gn;
  }
  /** The timestamp of this packet in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(cn * this.timestamp);
  }
  /** The duration of this packet in microseconds. */
  get microsecondDuration() {
    return Math.trunc(cn * this.duration);
  }
  /** Converts this packet to an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
   * WebCodecs API. */
  toEncodedVideoChunk() {
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u")
      throw new Error("Your browser does not support EncodedVideoChunk.");
    return new EncodedVideoChunk({
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /**
   * Converts this packet to an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
   * WebCodecs API, using the alpha side data instead of the color data. Throws if no alpha side data is defined.
   */
  alphaToEncodedVideoChunk(e = this.type) {
    if (!this.sideData.alpha)
      throw new TypeError("This packet does not contain alpha side data.");
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u")
      throw new Error("Your browser does not support EncodedVideoChunk.");
    return new EncodedVideoChunk({
      data: this.sideData.alpha,
      type: e,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /** Converts this packet to an
   * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk) for use with the
   * WebCodecs API. */
  toEncodedAudioChunk() {
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
    if (typeof EncodedAudioChunk > "u")
      throw new Error("Your browser does not support EncodedAudioChunk.");
    return new EncodedAudioChunk({
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /**
   * Creates an {@link EncodedPacket} from an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) or
   * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk). This method is useful
   * for converting chunks from the WebCodecs API to `EncodedPacket` instances.
   */
  static fromEncodedChunk(e, t) {
    if (!(e instanceof EncodedVideoChunk || e instanceof EncodedAudioChunk))
      throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
    const i = new Uint8Array(e.byteLength);
    return e.copyTo(i), new Me(i, e.type, e.timestamp / 1e6, (e.duration ?? 0) / 1e6, void 0, void 0, t);
  }
  /** Clones this packet while optionally modifying the new packet's data. */
  clone(e) {
    if (e !== void 0 && (typeof e != "object" || e === null))
      throw new TypeError("options, when provided, must be an object.");
    if ((e == null ? void 0 : e.data) !== void 0 && !(e.data instanceof Uint8Array))
      throw new TypeError("options.data, when provided, must be a Uint8Array.");
    if ((e == null ? void 0 : e.type) !== void 0 && e.type !== "key" && e.type !== "delta")
      throw new TypeError('options.type, when provided, must be either "key" or "delta".');
    if ((e == null ? void 0 : e.timestamp) !== void 0 && !Number.isFinite(e.timestamp))
      throw new TypeError("options.timestamp, when provided, must be a number.");
    if ((e == null ? void 0 : e.duration) !== void 0 && !Number.isFinite(e.duration))
      throw new TypeError("options.duration, when provided, must be a number.");
    if ((e == null ? void 0 : e.sequenceNumber) !== void 0 && !Number.isFinite(e.sequenceNumber))
      throw new TypeError("options.sequenceNumber, when provided, must be a number.");
    if ((e == null ? void 0 : e.sideData) !== void 0 && (typeof e.sideData != "object" || e.sideData === null))
      throw new TypeError("options.sideData, when provided, must be an object.");
    return new Me((e == null ? void 0 : e.data) ?? this.data, (e == null ? void 0 : e.type) ?? this.type, (e == null ? void 0 : e.timestamp) ?? this.timestamp, (e == null ? void 0 : e.duration) ?? this.duration, (e == null ? void 0 : e.sequenceNumber) ?? this.sequenceNumber, this.byteLength, (e == null ? void 0 : e.sideData) ?? this.sideData);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Jr = (n) => {
  let t = (n.hasVideo ? "video/" : n.hasAudio ? "audio/" : "application/") + (n.isQuickTime ? "quicktime" : "mp4");
  if (n.codecStrings.length > 0) {
    const i = [...new Set(n.codecStrings)];
    t += `; codecs="${i.join(", ")}"`;
  }
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ft = 8, bn = 16;
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Zr = 7, eo = 9, yn = (n) => {
  const e = n.filePos, t = no(n, 9), i = new te(t);
  if (i.readBits(12) !== 4095 || (i.skipBits(1), i.readBits(2) !== 0))
    return null;
  const o = i.readBits(1), a = i.readBits(2) + 1, c = i.readBits(4);
  if (c === 15)
    return null;
  i.skipBits(1);
  const u = i.readBits(3);
  if (u === 0)
    throw new Error("ADTS frames with channel configuration 0 are not supported.");
  i.skipBits(1), i.skipBits(1), i.skipBits(1), i.skipBits(1);
  const l = i.readBits(13);
  i.skipBits(11);
  const d = i.readBits(2) + 1;
  if (d !== 1)
    throw new Error("ADTS frames with more than one AAC frame are not supported.");
  let h = null;
  return o === 1 ? n.filePos -= 2 : h = i.readBits(16), {
    objectType: a,
    samplingFrequencyIndex: c,
    channelConfiguration: u,
    frameLength: l,
    numberOfAacFrames: d,
    crcCheck: h,
    startPos: e
  };
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Le {
  constructor(e, t, i, s, r) {
    this.bytes = e, this.view = t, this.offset = i, this.start = s, this.end = r, this.bufferPos = s - i;
  }
  static tempFromBytes(e) {
    return new Le(e, Nn(e), 0, 0, e.length);
  }
  get length() {
    return this.end - this.start;
  }
  get filePos() {
    return this.offset + this.bufferPos;
  }
  set filePos(e) {
    this.bufferPos = e - this.offset;
  }
  /** The number of bytes left from the current pos to the end of the slice. */
  get remainingLength() {
    return Math.max(this.end - this.filePos, 0);
  }
  skip(e) {
    this.bufferPos += e;
  }
  /** Creates a new subslice of this slice whose byte range must be contained within this slice. */
  slice(e, t = this.end - e) {
    if (e < this.start || e + t > this.end)
      throw new RangeError("Slicing outside of original slice.");
    return new Le(this.bytes, this.view, this.offset, e, e + t);
  }
}
const to = (n, e) => {
  if (n.filePos < n.start || n.filePos + e > n.end)
    throw new RangeError(`Tried reading [${n.filePos}, ${n.filePos + e}), but slice is [${n.start}, ${n.end}). This is likely an internal error, please report it alongside the file that caused it.`);
}, no = (n, e) => {
  to(n, e);
  const t = n.bytes.subarray(n.bufferPos, n.bufferPos + e);
  return n.bufferPos += e, t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class io {
  constructor(e) {
    this.mutex = new Dn(), this.trackTimestampInfo = /* @__PURE__ */ new WeakMap(), this.output = e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTrackClose(e) {
  }
  validateTimestamp(e, t, i) {
    if (t < 0)
      throw new Error(`Timestamps must be non-negative (got ${t}s).`);
    let s = this.trackTimestampInfo.get(e);
    if (s) {
      if (i && (s.maxTimestampBeforeLastKeyPacket = s.maxTimestamp), s.maxTimestampBeforeLastKeyPacket !== null && t < s.maxTimestampBeforeLastKeyPacket)
        throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${s.maxTimestampBeforeLastKeyPacket}s.`);
      s.maxTimestamp = Math.max(s.maxTimestamp, t);
    } else {
      if (!i)
        throw new Error("First packet must be a key packet.");
      s = {
        maxTimestamp: t,
        maxTimestampBeforeLastKeyPacket: null
      }, this.trackTimestampInfo.set(e, s);
    }
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const wn = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g, so = (n) => {
  const e = Math.floor(n / 36e5), t = Math.floor(n % (60 * 60 * 1e3) / (60 * 1e3)), i = Math.floor(n % (60 * 1e3) / 1e3), s = n % 1e3;
  return e.toString().padStart(2, "0") + ":" + t.toString().padStart(2, "0") + ":" + i.toString().padStart(2, "0") + "." + s.toString().padStart(3, "0");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Ke {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap();
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeU64(e) {
    this.helperView.setUint32(0, Math.floor(e / 2 ** 32), !1), this.helperView.setUint32(4, e, !1), this.writer.write(this.helper.subarray(0, 8));
  }
  writeAscii(e) {
    for (let t = 0; t < e.length; t++)
      this.helperView.setUint8(t % 8, e.charCodeAt(t)), t % 8 === 7 && this.writer.write(this.helper);
    e.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, e.length % 8));
  }
  writeBox(e) {
    if (this.offsets.set(e, this.writer.getPos()), e.contents && !e.children)
      this.writeBoxHeader(e, e.size ?? e.contents.byteLength + 8), this.writer.write(e.contents);
    else {
      const t = this.writer.getPos();
      if (this.writeBoxHeader(e, 0), e.contents && this.writer.write(e.contents), e.children)
        for (const r of e.children)
          r && this.writeBox(r);
      const i = this.writer.getPos(), s = e.size ?? i - t;
      this.writer.seek(t), this.writeBoxHeader(e, s), this.writer.seek(i);
    }
  }
  writeBoxHeader(e, t) {
    this.writeU32(e.largeSize ? 1 : t), this.writeAscii(e.type), e.largeSize && this.writeU64(t);
  }
  measureBoxHeader(e) {
    return 8 + (e.largeSize ? 8 : 0);
  }
  patchBox(e) {
    const t = this.offsets.get(e);
    S(t !== void 0);
    const i = this.writer.getPos();
    this.writer.seek(t), this.writeBox(e), this.writer.seek(i);
  }
  measureBox(e) {
    if (e.contents && !e.children)
      return this.measureBoxHeader(e) + e.contents.byteLength;
    {
      let t = this.measureBoxHeader(e);
      if (e.contents && (t += e.contents.byteLength), e.children)
        for (const i of e.children)
          i && (t += this.measureBox(i));
      return t;
    }
  }
}
const L = /* @__PURE__ */ new Uint8Array(8), G = /* @__PURE__ */ new DataView(L.buffer), j = (n) => [(n % 256 + 256) % 256], B = (n) => (G.setUint16(0, n, !1), [L[0], L[1]]), It = (n) => (G.setInt16(0, n, !1), [L[0], L[1]]), Gn = (n) => (G.setUint32(0, n, !1), [L[1], L[2], L[3]]), x = (n) => (G.setUint32(0, n, !1), [L[0], L[1], L[2], L[3]]), ue = (n) => (G.setInt32(0, n, !1), [L[0], L[1], L[2], L[3]]), ae = (n) => (G.setUint32(0, Math.floor(n / 2 ** 32), !1), G.setUint32(4, n, !1), [L[0], L[1], L[2], L[3], L[4], L[5], L[6], L[7]]), ro = (n) => (G.setInt32(0, Math.floor(n / 2 ** 32), !1), G.setUint32(4, n, !1), [L[0], L[1], L[2], L[3], L[4], L[5], L[6], L[7]]), Kn = (n) => (G.setInt16(0, 2 ** 8 * n, !1), [L[0], L[1]]), Q = (n) => (G.setInt32(0, 2 ** 16 * n, !1), [L[0], L[1], L[2], L[3]]), mt = (n) => (G.setInt32(0, 2 ** 30 * n, !1), [L[0], L[1], L[2], L[3]]), pt = (n, e) => {
  const t = [];
  let i = n;
  do {
    let s = i & 127;
    i >>= 7, t.length > 0 && (s |= 128), t.push(s);
  } while (i > 0 || e);
  return t.reverse();
}, N = (n, e = !1) => {
  const t = Array(n.length).fill(null).map((i, s) => n.charCodeAt(s));
  return e && t.push(0), t;
}, Yn = (n) => {
  const e = n * (Math.PI / 180), t = Math.round(Math.cos(e)), i = Math.round(Math.sin(e));
  return [
    t,
    i,
    0,
    -i,
    t,
    0,
    0,
    0,
    1
  ];
}, qn = /* @__PURE__ */ Yn(0), Qn = (n) => [
  Q(n[0]),
  Q(n[1]),
  mt(n[2]),
  Q(n[3]),
  Q(n[4]),
  mt(n[5]),
  Q(n[6]),
  Q(n[7]),
  mt(n[8])
], F = (n, e, t) => ({
  type: n,
  contents: e && new Uint8Array(e.flat(10)),
  children: t
}), I = (n, e, t, i, s) => F(n, [j(e), Gn(t), i ?? []], s), oo = (n) => n.isQuickTime ? F("ftyp", [
  N("qt  "),
  // Major brand
  x(512),
  // Minor version
  // Compatible brands
  N("qt  ")
]) : n.fragmented ? n.cmaf ? F("ftyp", [
  N("iso5"),
  // Major brand
  x(512),
  // Minor version
  // Compatible brands
  N("iso5"),
  N("iso6"),
  N("mp41"),
  N("cmfc"),
  N("dash")
]) : F("ftyp", [
  N("iso5"),
  // Major brand
  x(512),
  // Minor version
  // Compatible brands
  N("iso5"),
  N("iso6"),
  N("mp41")
]) : F("ftyp", [
  N("isom"),
  // Major brand
  x(512),
  // Minor version
  // Compatible brands
  N("isom"),
  n.holdsAvc ? N("avc1") : [],
  N("mp41")
]), vn = () => F("styp", [
  N("iso5"),
  // Major brand
  x(0),
  // Minor version
  // Compatible brands
  N("iso5"),
  N("iso6"),
  N("mp41"),
  N("cmfc"),
  N("dash")
]), Tn = (n, e) => {
  let t = n.maxWrittenEndTimestamp - n.minWrittenTimestamp;
  return Number.isFinite(t) || (t = 0), I("sidx", 1, 0, [
    x(1),
    // Reference ID
    x(ee),
    // Timescale
    ae(V(n.minWrittenTimestamp, ee)),
    // Earliest presentation time
    ae(0),
    // First offset
    B(0),
    // Reserved
    B(1),
    // Reference count
    x(e & 2147483647),
    // Reference type (0) + referenced size
    x(V(t, ee)),
    // Subsegment duration
    x(0)
    // Starts with SAP + SAP type + SAP delta time (no information provided)
  ]);
}, Ye = (n) => ({ type: "mdat", largeSize: n }), ao = (n) => ({ type: "free", size: n }), ke = (n) => F("moov", void 0, [
  co(n.creationTime, n.trackDatas),
  ...n.trackDatas.map((e) => lo(e, n.creationTime)),
  n.isFragmented ? Yo(n.trackDatas) : null,
  ca(n)
]), co = (n, e) => {
  const t = Math.max(0, ...e.map((o) => V(rt(o), ee) + V(o.startTimestampOffset ?? 0, ee))), i = Math.max(0, ...e.map((o) => o.track.id)) + 1, s = !ye(n) || !ye(t), r = s ? ae : x;
  return I("mvhd", +s, 0, [
    r(n),
    // Creation time
    r(n),
    // Modification time
    x(ee),
    // Timescale
    r(t),
    // Duration
    Q(1),
    // Preferred rate
    Kn(1),
    // Preferred volume
    Array(10).fill(0),
    // Reserved
    Qn(qn),
    // Matrix
    Array(24).fill(0),
    // Pre-defined
    x(i)
    // Next track ID
  ]);
}, rt = (n) => {
  if (n.samples.length === 0)
    return 0;
  let e = 1 / 0, t = -1 / 0;
  for (let i = 0; i < n.samples.length; i++) {
    const s = n.samples[i];
    s.timestamp < e && (e = s.timestamp), s.timestamp + s.duration > t && (t = s.timestamp + s.duration);
  }
  return e === 1 / 0 ? 0 : t - e;
}, lo = (n, e) => {
  const t = ya(n), i = n.startTimestampOffset !== null && n.startTimestampOffset > 0;
  return F("trak", void 0, [
    uo(n, e),
    i ? ho(n, n.startTimestampOffset) : null,
    fo(n, e),
    t.name !== void 0 ? F("udta", void 0, [
      F("name", [
        ...oe.encode(t.name)
      ])
    ]) : null
  ]);
}, uo = (n, e) => {
  var a;
  const t = V(rt(n), ee) + V(n.startTimestampOffset ?? 0, ee), i = !ye(e) || !ye(t), s = i ? ae : x;
  let r;
  if (n.type === "video") {
    const c = n.track.metadata.rotation;
    r = Yn(c ?? 0);
  } else
    r = qn;
  let o = 2;
  return ((a = n.track.metadata.disposition) == null ? void 0 : a.default) !== !1 && (o |= 1), I("tkhd", +i, o, [
    s(e),
    // Creation time
    s(e),
    // Modification time
    x(n.track.id),
    // Track ID
    x(0),
    // Reserved
    s(t),
    // Duration
    Array(8).fill(0),
    // Reserved
    B(0),
    // Layer
    B(n.track.id),
    // Alternate group
    Kn(n.type === "audio" ? 1 : 0),
    // Volume
    B(0),
    // Reserved
    Qn(r),
    // Matrix
    Q(n.type === "video" ? n.info.width : 0),
    // Track width
    Q(n.type === "video" ? n.info.height : 0)
    // Track height
  ]);
}, ho = (n, e) => {
  const t = V(e, ee), i = V(rt(n), ee), s = !ye(t) || !ye(i), r = s ? ae : x, o = s ? ro : ue;
  return F("edts", void 0, [
    I("elst", s ? 1 : 0, 0, [
      x(2),
      // Entry count
      // #1
      r(t),
      // Segment duration
      o(-1),
      // Media time
      Q(1),
      // Media rate
      // #2
      r(i),
      // Segment duration
      o(0),
      // Media time
      Q(1)
      // Media rate
    ])
  ]);
}, fo = (n, e) => F("mdia", void 0, [
  mo(n, e),
  Ut(!0, po[n.type], go[n.type]),
  bo(n)
]), mo = (n, e) => {
  const t = V(rt(n), n.timescale), i = !ye(e) || !ye(t), s = i ? ae : x;
  return I("mdhd", +i, 0, [
    s(e),
    // Creation time
    s(e),
    // Modification time
    x(n.timescale),
    // Timescale
    s(t),
    // Duration
    B(ti(n.track.metadata.languageCode ?? hr)),
    // Language
    B(0)
    // Quality
  ]);
}, po = {
  video: "vide",
  audio: "soun",
  subtitle: "text"
}, go = {
  video: "MediabunnyVideoHandler",
  audio: "MediabunnySoundHandler",
  subtitle: "MediabunnyTextHandler"
}, Ut = (n, e, t, i = "\0\0\0\0") => I("hdlr", 0, 0, [
  n ? N("mhlr") : x(0),
  // Component type
  N(e),
  // Component subtype
  N(i),
  // Component manufacturer
  x(0),
  // Component flags
  x(0),
  // Component flags mask
  N(t, !0)
  // Component name
]), bo = (n) => F("minf", void 0, [
  To[n.type](),
  Eo(),
  Co(n)
]), yo = () => I("vmhd", 0, 1, [
  B(0),
  // Graphics mode
  B(0),
  // Opcolor R
  B(0),
  // Opcolor G
  B(0)
  // Opcolor B
]), wo = () => I("smhd", 0, 0, [
  B(0),
  // Balance
  B(0)
  // Reserved
]), vo = () => I("nmhd", 0, 0), To = {
  video: yo,
  audio: wo,
  subtitle: vo
}, Eo = () => F("dinf", void 0, [
  xo()
]), xo = () => I("dref", 0, 0, [
  x(1)
  // Entry count
], [
  _o()
]), _o = () => I("url ", 0, 1), Co = (n) => {
  const e = n.compositionTimeOffsetTable.length > 1 || n.compositionTimeOffsetTable.some((t) => t.sampleCompositionTimeOffset !== 0);
  return F("stbl", void 0, [
    So(n),
    zo(n),
    e ? Go(n) : null,
    e ? Ko(n) : null,
    Ho(n),
    Wo(n),
    Xo(n),
    jo(n)
  ]);
}, So = (n) => {
  let e;
  if (n.type === "video")
    e = Ro(ha(n.track.source._codec, n.info.decoderConfig.codec), n);
  else if (n.type === "audio") {
    const t = ei(n.track.source._codec, n.muxer.isQuickTime);
    S(t), e = Mo(t, n);
  } else n.type === "subtitle" && (e = Do(pa[n.track.source._codec], n));
  return S(e), I("stsd", 0, 0, [
    x(1)
    // Entry count
  ], [
    e
  ]);
}, Ro = (n, e) => F(n, [
  Array(6).fill(0),
  // Reserved
  B(1),
  // Data reference index
  B(0),
  // Pre-defined
  B(0),
  // Reserved
  Array(12).fill(0),
  // Pre-defined
  B(e.info.width),
  // Width
  B(e.info.height),
  // Height
  x(4718592),
  // Horizontal resolution
  x(4718592),
  // Vertical resolution
  x(0),
  // Reserved
  B(1),
  // Frame count
  Array(32).fill(0),
  // Compressor name
  B(24),
  // Depth
  It(65535)
  // Pre-defined
], [
  fa[e.track.source._codec](e),
  ko(e),
  lr(e.info.decoderConfig.colorSpace) ? Ao(e) : null
]), ko = (n) => n.info.pixelAspectRatio.num === n.info.pixelAspectRatio.den ? null : F("pasp", [
  x(n.info.pixelAspectRatio.num),
  x(n.info.pixelAspectRatio.den)
]), Ao = (n) => F("colr", [
  N("nclx"),
  // Colour type
  B(kt[n.info.decoderConfig.colorSpace.primaries]),
  // Colour primaries
  B(At[n.info.decoderConfig.colorSpace.transfer]),
  // Transfer characteristics
  B(Ft[n.info.decoderConfig.colorSpace.matrix]),
  // Matrix coefficients
  j((n.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)
  // Full range flag
]), Fo = (n) => n.info.decoderConfig && F("avcC", [
  // For AVC, description is an AVCDecoderConfigurationRecord, so nothing else to do here
  ...Oe(n.info.decoderConfig.description)
]), Po = (n) => n.info.decoderConfig && F("hvcC", [
  // For HEVC, description is an HEVCDecoderConfigurationRecord, so nothing else to do here
  ...Oe(n.info.decoderConfig.description)
]), En = (n) => {
  var h, f, y, w;
  if (!n.info.decoderConfig)
    return null;
  const e = n.info.decoderConfig, t = e.codec.split("."), i = Number(t[1]), s = Number(t[2]), r = Number(t[3]), o = t[4] ? Number(t[4]) : 1, a = t[8] ? Number(t[8]) : Number(((h = e.colorSpace) == null ? void 0 : h.fullRange) ?? 0), c = (r << 4) + (o << 1) + a, u = t[5] ? Number(t[5]) : (f = e.colorSpace) != null && f.primaries ? kt[e.colorSpace.primaries] : 2, l = t[6] ? Number(t[6]) : (y = e.colorSpace) != null && y.transfer ? At[e.colorSpace.transfer] : 2, d = t[7] ? Number(t[7]) : (w = e.colorSpace) != null && w.matrix ? Ft[e.colorSpace.matrix] : 2;
  return I("vpcC", 1, 0, [
    j(i),
    // Profile
    j(s),
    // Level
    j(c),
    // Bit depth, chroma subsampling, full range
    j(u),
    // Colour primaries
    j(l),
    // Transfer characteristics
    j(d),
    // Matrix coefficients
    B(0)
    // Codec initialization data size
  ]);
}, Bo = (n) => F("av1C", Tr(n.info.decoderConfig.codec)), Mo = (n, e) => {
  var o;
  let t = 0, i, s = 16;
  const r = ve.includes(e.track.source._codec);
  if (r) {
    const a = e.track.source._codec, { sampleSize: c } = xe(a);
    s = 8 * c, s > 16 && (t = 1);
  }
  if (e.muxer.isQuickTime && (t = 1), t === 0)
    i = [
      Array(6).fill(0),
      // Reserved
      B(1),
      // Data reference index
      B(t),
      // Version
      B(0),
      // Revision level
      x(0),
      // Vendor
      B(e.info.numberOfChannels),
      // Number of channels
      B(s),
      // Sample size (bits)
      B(0),
      // Compression ID
      B(0),
      // Packet size
      B(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      B(0)
      // Sample rate (lower)
    ];
  else {
    const a = r ? 0 : -2;
    i = [
      Array(6).fill(0),
      // Reserved
      B(1),
      // Data reference index
      B(t),
      // Version
      B(0),
      // Revision level
      x(0),
      // Vendor
      B(e.info.numberOfChannels),
      // Number of channels
      B(Math.min(s, 16)),
      // Sample size (bits)
      It(a),
      // Compression ID
      B(0),
      // Packet size
      B(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      B(0),
      // Sample rate (lower)
      r ? [
        x(1),
        // Samples per packet (must be 1 for uncompressed formats)
        x(s / 8),
        // Bytes per packet
        x(e.info.numberOfChannels * s / 8)
        // Bytes per frame
      ] : [
        x(0),
        // Samples per packet (don't bother, still works with 0)
        x(0),
        // Bytes per packet (variable)
        x(0)
        // Bytes per frame (variable)
      ],
      x(2)
      // Bytes per sample (constant in FFmpeg)
    ];
  }
  return F(n, i, [
    ((o = ma(e.track.source._codec, e.muxer.isQuickTime)) == null ? void 0 : o(e)) ?? null
  ]);
}, gt = (n) => {
  let e;
  switch (n.track.source._codec) {
    case "aac":
      e = 64;
      break;
    case "mp3":
      e = 107;
      break;
    case "vorbis":
      e = 221;
      break;
    default:
      throw new Error(`Unhandled audio codec: ${n.track.source._codec}`);
  }
  let t = [
    ...j(e),
    // Object type indication
    ...j(21),
    // stream type(6bits)=5 audio, flags(2bits)=1
    ...Gn(0),
    // 24bit buffer size
    ...x(0),
    // max bitrate
    ...x(0)
    // avg bitrate
  ];
  if (n.info.decoderConfig.description) {
    const i = Oe(n.info.decoderConfig.description);
    t = [
      ...t,
      ...j(5),
      // TAG(5) = DecoderSpecificInfo
      ...pt(i.byteLength),
      ...i
    ];
  }
  return t = [
    ...B(1),
    // ES_ID = 1
    ...j(0),
    // flags etc = 0
    ...j(4),
    // TAG(4) = ES Descriptor
    ...pt(t.length),
    ...t,
    ...j(6),
    // TAG(6)
    ...j(1),
    // length
    ...j(2)
    // data
  ], t = [
    ...j(3),
    // TAG(3) = Object Descriptor
    ...pt(t.length),
    ...t
  ], I("esds", 0, 0, t);
}, fe = (n) => F("wave", void 0, [
  Lo(n),
  Io(n),
  F("\0\0\0\0")
  // NULL tag at the end
]), Lo = (n) => F("frma", [
  N(ei(n.track.source._codec, n.muxer.isQuickTime))
]), Io = (n) => {
  const { littleEndian: e } = xe(n.track.source._codec);
  return F("enda", [
    B(+e)
  ]);
}, Uo = (n) => {
  var c;
  let e = n.info.numberOfChannels, t = 3840, i = n.info.sampleRate, s = 0, r = 0, o = new Uint8Array(0);
  const a = (c = n.info.decoderConfig) == null ? void 0 : c.description;
  if (a) {
    S(a.byteLength >= 18);
    const u = Oe(a), l = Kr(u);
    e = l.outputChannelCount, t = l.preSkip, i = l.inputSampleRate, s = l.outputGain, r = l.channelMappingFamily, l.channelMappingTable && (o = l.channelMappingTable);
  }
  return F("dOps", [
    j(0),
    // Version
    j(e),
    // OutputChannelCount
    B(t),
    // PreSkip
    x(i),
    // InputSampleRate
    It(s),
    // OutputGain
    j(r),
    // ChannelMappingFamily
    ...o
  ]);
}, Oo = (n) => {
  var i;
  const e = (i = n.info.decoderConfig) == null ? void 0 : i.description;
  S(e);
  const t = Oe(e);
  return I("dfLa", 0, 0, [
    ...t.subarray(4)
  ]);
}, ne = (n) => {
  const { littleEndian: e, sampleSize: t } = xe(n.track.source._codec), i = +e;
  return I("pcmC", 0, 0, [
    j(i),
    j(8 * t)
  ]);
}, No = (n) => {
  const e = Yr(n.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
  const t = new Uint8Array(3), i = new te(t);
  return i.writeBits(2, e.fscod), i.writeBits(5, e.bsid), i.writeBits(3, e.bsmod), i.writeBits(3, e.acmod), i.writeBits(1, e.lfeon), i.writeBits(5, e.bitRateCode), i.writeBits(5, 0), F("dac3", [...t]);
}, $o = (n) => {
  const e = Qr(n.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
  let t = 16;
  for (const o of e.substreams)
    t += 23, o.numDepSub > 0 ? t += 9 : t += 1;
  const i = Math.ceil(t / 8), s = new Uint8Array(i), r = new te(s);
  r.writeBits(13, e.dataRate), r.writeBits(3, e.substreams.length - 1);
  for (const o of e.substreams)
    r.writeBits(2, o.fscod), r.writeBits(5, o.bsid), r.writeBits(1, 0), r.writeBits(1, 0), r.writeBits(3, o.bsmod), r.writeBits(3, o.acmod), r.writeBits(1, o.lfeon), r.writeBits(3, 0), r.writeBits(4, o.numDepSub), o.numDepSub > 0 ? r.writeBits(9, o.chanLoc) : r.writeBits(1, 0);
  return F("dec3", [...s]);
}, Do = (n, e) => F(n, [
  Array(6).fill(0),
  // Reserved
  B(1)
  // Data reference index
], [
  ga[e.track.source._codec](e)
]), Vo = (n) => F("vttC", [
  ...oe.encode(n.info.config.description)
]), zo = (n) => I("stts", 0, 0, [
  x(n.timeToSampleTable.length),
  // Number of entries
  n.timeToSampleTable.map((e) => [
    x(e.sampleCount),
    // Sample count
    x(e.sampleDelta)
    // Sample duration
  ])
]), jo = (n) => {
  if (n.samples.every((t) => t.type === "key"))
    return null;
  const e = [...n.samples.entries()].filter(([, t]) => t.type === "key");
  return I("stss", 0, 0, [
    x(e.length),
    // Number of entries
    e.map(([t]) => x(t + 1))
    // Sync sample table
  ]);
}, Ho = (n) => I("stsc", 0, 0, [
  x(n.compactlyCodedChunkTable.length),
  // Number of entries
  n.compactlyCodedChunkTable.map((e) => [
    x(e.firstChunk),
    // First chunk
    x(e.samplesPerChunk),
    // Samples per chunk
    x(1)
    // Sample description index
  ])
]), Wo = (n) => {
  if (n.type === "audio" && n.info.requiresPcmTransformation) {
    const { sampleSize: e } = xe(n.track.source._codec);
    return I("stsz", 0, 0, [
      x(e * n.info.numberOfChannels),
      // Sample size
      x(n.samples.reduce((t, i) => t + V(i.duration, n.timescale), 0))
    ]);
  }
  return I("stsz", 0, 0, [
    x(0),
    // Sample size (0 means non-constant size)
    x(n.samples.length),
    // Number of entries
    n.samples.map((e) => x(e.size))
    // Sample size table
  ]);
}, Xo = (n) => n.finalizedChunks.length > 0 && Te(n.finalizedChunks).offset >= 2 ** 32 ? I("co64", 0, 0, [
  x(n.finalizedChunks.length),
  // Number of entries
  n.finalizedChunks.map((e) => ae(e.offset))
  // Chunk offset table
]) : I("stco", 0, 0, [
  x(n.finalizedChunks.length),
  // Number of entries
  n.finalizedChunks.map((e) => x(e.offset))
  // Chunk offset table
]), Go = (n) => I("ctts", 1, 0, [
  x(n.compositionTimeOffsetTable.length),
  // Number of entries
  n.compositionTimeOffsetTable.map((e) => [
    x(e.sampleCount),
    // Sample count
    ue(e.sampleCompositionTimeOffset)
    // Sample offset
  ])
]), Ko = (n) => {
  let e = 1 / 0, t = -1 / 0, i = 1 / 0, s = -1 / 0;
  S(n.compositionTimeOffsetTable.length > 0), S(n.samples.length > 0);
  for (let o = 0; o < n.compositionTimeOffsetTable.length; o++) {
    const a = n.compositionTimeOffsetTable[o];
    e = Math.min(e, a.sampleCompositionTimeOffset), t = Math.max(t, a.sampleCompositionTimeOffset);
  }
  for (let o = 0; o < n.samples.length; o++) {
    const a = n.samples[o];
    i = Math.min(i, V(a.timestamp, n.timescale)), s = Math.max(s, V(a.timestamp + a.duration, n.timescale));
  }
  const r = Math.max(-e, 0);
  return s >= 2 ** 31 ? null : I("cslg", 0, 0, [
    ue(r),
    // Composition to DTS shift
    ue(e),
    // Least decode to display delta
    ue(t),
    // Greatest decode to display delta
    ue(i),
    // Composition start time
    ue(s)
    // Composition end time
  ]);
}, Yo = (n) => F("mvex", void 0, n.map(qo)), qo = (n) => I("trex", 0, 0, [
  x(n.track.id),
  // Track ID
  x(1),
  // Default sample description index
  x(0),
  // Default sample duration
  x(0),
  // Default sample size
  x(0)
  // Default sample flags
]), xn = (n, e) => F("moof", void 0, [
  Qo(n),
  ...e.map(Jo)
]), Qo = (n) => I("mfhd", 0, 0, [
  x(n)
  // Sequence number
]), Jn = (n) => {
  let e = 0, t = 0;
  const i = 0, s = 0, r = n.type === "delta";
  return t |= +r, r ? e |= 1 : e |= 2, e << 24 | t << 16 | i << 8 | s;
}, Jo = (n) => F("traf", void 0, [
  Zo(n),
  ea(n),
  ta(n)
]), Zo = (n) => {
  S(n.currentChunk);
  let e = 0;
  e |= 8, e |= 16, e |= 32, e |= 131072;
  const t = n.currentChunk.samples[1] ?? n.currentChunk.samples[0], i = {
    duration: t.timescaleUnitsToNextSample,
    size: t.size,
    flags: Jn(t)
  };
  return I("tfhd", 0, e, [
    x(n.track.id),
    // Track ID
    x(i.duration),
    // Default sample duration
    x(i.size),
    // Default sample size
    x(i.flags)
    // Default sample flags
  ]);
}, ea = (n) => (S(n.currentChunk), I("tfdt", 1, 0, [
  ae(V(n.currentChunk.startTimestamp, n.timescale))
  // Base Media Decode Time
])), ta = (n) => {
  S(n.currentChunk);
  const e = n.currentChunk.samples.map((w) => w.timescaleUnitsToNextSample), t = n.currentChunk.samples.map((w) => w.size), i = n.currentChunk.samples.map(Jn), s = n.currentChunk.samples.map((w) => V(w.timestamp - w.decodeTimestamp, n.timescale)), r = new Set(e), o = new Set(t), a = new Set(i), c = new Set(s), u = a.size === 2 && i[0] !== i[1], l = r.size > 1, d = o.size > 1, h = !u && a.size > 1, f = c.size > 1 || [...c].some((w) => w !== 0);
  let y = 0;
  return y |= 1, y |= 4 * +u, y |= 256 * +l, y |= 512 * +d, y |= 1024 * +h, y |= 2048 * +f, I("trun", 1, y, [
    x(n.currentChunk.samples.length),
    // Sample count
    x(n.currentChunk.offset - n.currentChunk.moofOffset || 0),
    // Data offset
    u ? x(i[0]) : [],
    n.currentChunk.samples.map((w, E) => [
      l ? x(e[E]) : [],
      // Sample duration
      d ? x(t[E]) : [],
      // Sample size
      h ? x(i[E]) : [],
      // Sample flags
      // Sample composition time offsets
      f ? ue(s[E]) : []
    ])
  ]);
}, na = (n) => F("mfra", void 0, [
  ...n.map(ia),
  sa()
]), ia = (n, e) => I("tfra", 1, 0, [
  x(n.track.id),
  // Track ID
  x(63),
  // This specifies that traf number, trun number and sample number are 32-bit ints
  x(n.finalizedChunks.length),
  // Number of entries
  n.finalizedChunks.map((i) => [
    ae(V(i.samples[0].timestamp, n.timescale)),
    // Time (in presentation time)
    ae(i.moofOffset),
    // moof offset
    x(e + 1),
    // traf number
    x(1),
    // trun number
    x(1)
    // Sample number
  ])
]), sa = () => I("mfro", 0, 0, [
  // This value needs to be overwritten manually from the outside, where the actual size of the enclosing mfra box
  // is known
  x(0)
  // Size
]), ra = () => F("vtte"), oa = (n, e, t, i, s) => F("vttc", void 0, [
  s !== null ? F("vsid", [ue(s)]) : null,
  t !== null ? F("iden", [...oe.encode(t)]) : null,
  e !== null ? F("ctim", [...oe.encode(so(e))]) : null,
  i !== null ? F("sttg", [...oe.encode(i)]) : null,
  F("payl", [...oe.encode(n)])
]), aa = (n) => F("vtta", [...oe.encode(n)]), ca = (n) => {
  const e = [], t = n.format._options.metadataFormat ?? "auto", i = n.output._metadataTags;
  if (t === "mdir" || t === "auto" && !n.isQuickTime) {
    const s = ua(i);
    s && e.push(s);
  } else if (t === "mdta") {
    const s = da(i);
    s && e.push(s);
  } else (t === "udta" || t === "auto" && n.isQuickTime) && la(e, n.output._metadataTags);
  return e.length === 0 ? null : F("udta", void 0, e);
}, la = (n, e) => {
  for (const { key: t, value: i } of zn(e))
    switch (t) {
      case "title":
        n.push(ie("©nam", i));
        break;
      case "description":
        n.push(ie("©des", i));
        break;
      case "artist":
        n.push(ie("©ART", i));
        break;
      case "album":
        n.push(ie("©alb", i));
        break;
      case "albumArtist":
        n.push(ie("albr", i));
        break;
      case "genre":
        n.push(ie("©gen", i));
        break;
      case "date":
        n.push(ie("©day", i.toISOString().slice(0, 10)));
        break;
      case "comment":
        n.push(ie("©cmt", i));
        break;
      case "lyrics":
        n.push(ie("©lyr", i));
        break;
      case "raw":
        break;
      case "discNumber":
      case "discsTotal":
      case "trackNumber":
      case "tracksTotal":
      case "images":
        break;
      default:
        Vn(t);
    }
  if (e.raw)
    for (const t in e.raw) {
      const i = e.raw[t];
      i == null || t.length !== 4 || n.some((s) => s.type === t) || (typeof i == "string" ? n.push(ie(t, i)) : i instanceof Uint8Array && n.push(F(t, Array.from(i))));
    }
}, ie = (n, e) => {
  const t = oe.encode(e);
  return F(n, [
    B(t.length),
    B(ti("und")),
    Array.from(t)
  ]);
}, _n = {
  "image/jpeg": 13,
  "image/png": 14,
  "image/bmp": 27
}, Zn = (n, e) => {
  const t = [];
  for (const { key: i, value: s } of zn(n))
    switch (i) {
      case "title":
        t.push({ key: e ? "title" : "©nam", value: Y(s) });
        break;
      case "description":
        t.push({ key: e ? "description" : "©des", value: Y(s) });
        break;
      case "artist":
        t.push({ key: e ? "artist" : "©ART", value: Y(s) });
        break;
      case "album":
        t.push({ key: e ? "album" : "©alb", value: Y(s) });
        break;
      case "albumArtist":
        t.push({ key: e ? "album_artist" : "aART", value: Y(s) });
        break;
      case "comment":
        t.push({ key: e ? "comment" : "©cmt", value: Y(s) });
        break;
      case "genre":
        t.push({ key: e ? "genre" : "©gen", value: Y(s) });
        break;
      case "lyrics":
        t.push({ key: e ? "lyrics" : "©lyr", value: Y(s) });
        break;
      case "date":
        t.push({
          key: e ? "date" : "©day",
          value: Y(s.toISOString().slice(0, 10))
        });
        break;
      case "images":
        for (const r of s)
          r.kind === "coverFront" && t.push({ key: "covr", value: F("data", [
            x(_n[r.mimeType] ?? 0),
            // Type indicator
            x(0),
            // Locale indicator
            Array.from(r.data)
            // Kinda slow, hopefully temp
          ]) });
        break;
      case "trackNumber":
        if (e) {
          const r = n.tracksTotal !== void 0 ? `${s}/${n.tracksTotal}` : s.toString();
          t.push({ key: "track", value: Y(r) });
        } else
          t.push({ key: "trkn", value: F("data", [
            x(0),
            // 8 bytes empty
            x(0),
            B(0),
            // Empty
            B(s),
            B(n.tracksTotal ?? 0),
            B(0)
            // Empty
          ]) });
        break;
      case "discNumber":
        e || t.push({ key: "disc", value: F("data", [
          x(0),
          // 8 bytes empty
          x(0),
          B(0),
          // Empty
          B(s),
          B(n.discsTotal ?? 0),
          B(0)
          // Empty
        ]) });
        break;
      case "tracksTotal":
      case "discsTotal":
        break;
      case "raw":
        break;
      default:
        Vn(i);
    }
  if (n.raw)
    for (const i in n.raw) {
      const s = n.raw[i];
      s == null || !e && i.length !== 4 || t.some((r) => r.key === i) || (typeof s == "string" ? t.push({ key: i, value: Y(s) }) : s instanceof Uint8Array ? t.push({ key: i, value: F("data", [
        x(0),
        // Type indicator
        x(0),
        // Locale indicator
        Array.from(s)
      ]) }) : s instanceof Bt && t.push({ key: i, value: F("data", [
        x(_n[s.mimeType] ?? 0),
        // Type indicator
        x(0),
        // Locale indicator
        Array.from(s.data)
        // Kinda slow, hopefully temp
      ]) }));
    }
  return t;
}, ua = (n) => {
  const e = Zn(n, !1);
  return e.length === 0 ? null : I("meta", 0, 0, void 0, [
    Ut(!1, "mdir", "", "appl"),
    // mdir handler
    F("ilst", void 0, e.map((t) => F(t.key, void 0, [t.value])))
    // Item list without keys box
  ]);
}, da = (n) => {
  const e = Zn(n, !0);
  return e.length === 0 ? null : F("meta", void 0, [
    Ut(!1, "mdta", ""),
    // mdta handler
    I("keys", 0, 0, [
      x(e.length)
    ], e.map((t) => F("mdta", [
      ...oe.encode(t.key)
    ]))),
    F("ilst", void 0, e.map((t, i) => {
      const s = String.fromCharCode(...x(i + 1));
      return F(s, void 0, [t.value]);
    }))
  ]);
}, Y = (n) => F("data", [
  x(1),
  // Type indicator (UTF-8)
  x(0),
  // Locale indicator
  ...oe.encode(n)
]), ha = (n, e) => {
  switch (n) {
    case "avc":
      return e.startsWith("avc3") ? "avc3" : "avc1";
    case "hevc":
      return "hvc1";
    case "vp8":
      return "vp08";
    case "vp9":
      return "vp09";
    case "av1":
      return "av01";
  }
}, fa = {
  avc: Fo,
  hevc: Po,
  vp8: En,
  vp9: En,
  av1: Bo
}, ei = (n, e) => {
  switch (n) {
    case "aac":
      return "mp4a";
    case "mp3":
      return "mp4a";
    case "opus":
      return "Opus";
    case "vorbis":
      return "mp4a";
    case "flac":
      return "fLaC";
    case "ulaw":
      return "ulaw";
    case "alaw":
      return "alaw";
    case "pcm-u8":
      return "raw ";
    case "pcm-s8":
      return "sowt";
    case "ac3":
      return "ac-3";
    case "eac3":
      return "ec-3";
  }
  if (e)
    switch (n) {
      case "pcm-s16":
        return "sowt";
      case "pcm-s16be":
        return "twos";
      case "pcm-s24":
        return "in24";
      case "pcm-s24be":
        return "in24";
      case "pcm-s32":
        return "in32";
      case "pcm-s32be":
        return "in32";
      case "pcm-f32":
        return "fl32";
      case "pcm-f32be":
        return "fl32";
      case "pcm-f64":
        return "fl64";
      case "pcm-f64be":
        return "fl64";
    }
  else
    switch (n) {
      case "pcm-s16":
        return "ipcm";
      case "pcm-s16be":
        return "ipcm";
      case "pcm-s24":
        return "ipcm";
      case "pcm-s24be":
        return "ipcm";
      case "pcm-s32":
        return "ipcm";
      case "pcm-s32be":
        return "ipcm";
      case "pcm-f32":
        return "fpcm";
      case "pcm-f32be":
        return "fpcm";
      case "pcm-f64":
        return "fpcm";
      case "pcm-f64be":
        return "fpcm";
    }
}, ma = (n, e) => {
  switch (n) {
    case "aac":
      return gt;
    case "mp3":
      return gt;
    case "opus":
      return Uo;
    case "vorbis":
      return gt;
    case "flac":
      return Oo;
    case "ac3":
      return No;
    case "eac3":
      return $o;
  }
  if (e)
    switch (n) {
      case "pcm-s24":
        return fe;
      case "pcm-s24be":
        return fe;
      case "pcm-s32":
        return fe;
      case "pcm-s32be":
        return fe;
      case "pcm-f32":
        return fe;
      case "pcm-f32be":
        return fe;
      case "pcm-f64":
        return fe;
      case "pcm-f64be":
        return fe;
    }
  else
    switch (n) {
      case "pcm-s16":
        return ne;
      case "pcm-s16be":
        return ne;
      case "pcm-s24":
        return ne;
      case "pcm-s24be":
        return ne;
      case "pcm-s32":
        return ne;
      case "pcm-s32be":
        return ne;
      case "pcm-f32":
        return ne;
      case "pcm-f32be":
        return ne;
      case "pcm-f64":
        return ne;
      case "pcm-f64be":
        return ne;
    }
  return null;
}, pa = {
  webvtt: "wvtt"
}, ga = {
  webvtt: Vo
}, ti = (n) => {
  S(n.length === 3);
  let e = 0;
  for (let t = 0; t < 3; t++)
    e <<= 5, e += n.charCodeAt(t) - 96;
  return e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class xt {
  constructor(e, t) {
    if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, e._writerAcquired)
      throw new Error("Can't have multiple Writers for the same Target.");
    this.target = e, e._setMonotonicity(t), e._writerAcquired = !0;
  }
  start() {
    S(!this.started), this.target._start(), this.started = !0;
  }
  /** Writes the given data to the target, at the current position. */
  write(e) {
    S(this.started && !this.finalized), this.maybeTrackWrites(e), this.target._write(e, this.pos), this.pos += e.byteLength;
  }
  /** Sets the current position for future writes to a new one. */
  seek(e) {
    this.pos = e;
  }
  /** Returns the current position. */
  getPos() {
    return this.pos;
  }
  /** Signals to the writer that it may be time to flush. */
  async flush() {
    return S(this.started && !this.finalized), this.target._flush();
  }
  /** Called after muxing has finished. */
  async finalize() {
    S(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0;
  }
  maybeTrackWrites(e) {
    if (!this.trackedWrites)
      return;
    let t = this.getPos();
    if (t < this.trackedStart) {
      if (t + e.byteLength <= this.trackedStart)
        return;
      e = e.subarray(this.trackedStart - t), t = 0;
    }
    const i = t + e.byteLength - this.trackedStart;
    let s = this.trackedWrites.byteLength;
    for (; s < i; )
      s *= 2;
    if (s !== this.trackedWrites.byteLength) {
      const r = new Uint8Array(s);
      r.set(this.trackedWrites, 0), this.trackedWrites = r;
    }
    this.trackedWrites.set(e, t - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, t + e.byteLength);
  }
  startTrackingWrites() {
    this.trackedWrites = new Uint8Array(2 ** 10), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart;
  }
  stopTrackingWrites() {
    if (!this.trackedWrites)
      throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
    const t = {
      data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
      start: this.trackedStart,
      end: this.trackedEnd
    };
    return this.trackedWrites = null, t;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class re extends Pt {
  constructor() {
    super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null;
  }
  /** @internal */
  _setMonotonicity(e) {
    this._monotonicity !== !1 && (this._monotonicity = e);
  }
  /** @internal */
  _dispatchWrite(e, t) {
    var i;
    (i = this.onwrite) == null || i.call(this, e, t), this._emit("write", { start: e, end: t });
  }
  /**
   * Returns a new {@link RangedTarget} that writes data to this target using the given offset.
   *
   * Useful for writing a file into a section of a larger file.
   */
  slice(e) {
    if (!Number.isInteger(e) || e < 0)
      throw new TypeError("offset must be a non-negative integer.");
    return new ni(this, e);
  }
}
const bt = 2 ** 16, yt = 2 ** 32;
class Je extends re {
  /** Creates a new {@link BufferTarget}. The buffer holding the data will be created and managed internally. */
  constructor(e = {}) {
    if (super(), this.buffer = null, this._maxPos = 0, !e || typeof e != "object")
      throw new TypeError("BufferTarget options, when provided, must be an object.");
    if (e.onFinalize !== void 0 && typeof e.onFinalize != "function")
      throw new TypeError("options.onFinalize, when provided, must be a function.");
    if (this._options = e, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize)
      try {
        this._buffer = new ArrayBuffer(bt, { maxByteLength: yt });
      } catch {
        this._buffer = new ArrayBuffer(bt), this._supportsResize = !1;
      }
    else
      this._buffer = new ArrayBuffer(bt);
    this._bytes = new Uint8Array(this._buffer);
  }
  /** @internal */
  _ensureSize(e) {
    let t = this._buffer.byteLength;
    for (; t < e; )
      t *= 2;
    if (t !== this._buffer.byteLength) {
      if (t > yt)
        throw new Error(`ArrayBuffer exceeded maximum size of ${yt} bytes. Please consider using another target.`);
      if (this._supportsResize)
        this._buffer.resize(t);
      else {
        const i = new ArrayBuffer(t), s = new Uint8Array(i);
        s.set(this._bytes, 0), this._buffer = i, this._bytes = s;
      }
    }
  }
  /** @internal */
  _start() {
  }
  /** @internal */
  _write(e, t) {
    this._ensureSize(t + e.byteLength), this._bytes.set(e, t), this._maxPos = Math.max(this._maxPos, t + e.byteLength), this._dispatchWrite(t, t + e.byteLength);
  }
  /** @internal */
  async _flush() {
  }
  /** @internal */
  async _finalize() {
    this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized");
  }
  /** @internal */
  async _close() {
  }
  /** @internal */
  _getSlice(e, t) {
    return this._bytes.slice(e, t);
  }
}
class ni extends re {
  /** @internal */
  constructor(e, t) {
    super(), this._baseTarget = e, this._offset = t;
  }
  /** @internal */
  _start() {
  }
  /** @internal */
  _write(e, t) {
    this._baseTarget._write(e, this._offset + t), this._dispatchWrite(t, t + e.byteLength);
  }
  /** @internal */
  _flush() {
    return this._baseTarget._flush();
  }
  /** @internal */
  async _finalize() {
    this._emit("finalized");
  }
  /** @internal */
  async _close() {
  }
  /** @internal */
  _setMonotonicity(e) {
    super._setMonotonicity(e), this._baseTarget._setMonotonicity(e);
  }
}
class Ze {
  /** Creates a new {@link PathedTarget} from a root path and a callback. */
  constructor(e, t) {
    if (this.rootPath = e, this.getTarget = t, typeof e != "string")
      throw new TypeError("rootPath must be a string.");
    if (typeof t != "function")
      throw new TypeError("getTarget must be a function.");
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ee = 57600, ba = 2082844800, ya = (n) => {
  const e = {}, t = n.track;
  return t.metadata.name !== void 0 && (e.name = t.metadata.name), e;
}, V = (n, e, t = !0) => {
  const i = n * e;
  return t ? Math.round(i) : i;
};
class wa extends io {
  constructor(e, t) {
    super(e), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new Je(), this.auxWriter = new xt(this.auxTarget, !1), this.auxBoxWriter = new Ke(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = ur(), this.creationTime = Math.floor(Date.now() / 1e3) + ba, this.finalizedChunks = [], this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = t, this.isQuickTime = t instanceof $t, this.isCmaf = t instanceof _t, this.minimumFragmentDuration = t._options.minimumFragmentDuration ?? (t instanceof _t ? 1 / 0 : 1);
  }
  async start() {
    var i;
    const e = await this.mutex.acquire();
    if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((s) => this.format._options.fastStart !== void 0 ? this.format._options.fastStart === "fragmented" : s instanceof Je), this.boxWriter = new Ke(this.writer), this.fastStart = this.format._options.fastStart ?? (this.writer.target instanceof Je ? "in-memory" : !1), this.isFragmented = this.fastStart === "fragmented"), this.isCmaf) {
      if (!this.output._hasInitTarget())
        throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
      const s = await this.output._getInitTarget(), r = new xt(s, !0);
      r.start(), this.initWriter = r, this.initBoxWriter = new Ke(r);
    }
    const t = this.output._tracks.some((s) => s.isVideoTrack() && s.source._codec === "avc");
    {
      const s = this.initBoxWriter ?? this.boxWriter;
      if (S(s), this.format._options.onFtyp && s.writer.startTrackingWrites(), s.writeBox(oo({
        isQuickTime: this.isQuickTime,
        holdsAvc: t,
        fragmented: this.isFragmented,
        cmaf: this.isCmaf
      })), this.format._options.onFtyp) {
        const { data: r, start: o } = s.writer.stopTrackingWrites();
        this.format._options.onFtyp(r, o);
      }
      this.ftypSize = s.writer.getPos(), this.isCmaf && await this.initWriter.flush();
    }
    if (this.fastStart !== "in-memory") if (this.fastStart === "reserve") {
      for (const s of this.output._tracks)
        if (s.metadata.maximumPacketCount === void 0)
          throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
    } else this.isFragmented || (S(this.writer), S(this.boxWriter), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Ye(!0), this.boxWriter.writeBox(this.mdat));
    await ((i = this.writer) == null ? void 0 : i.flush()), e();
  }
  allTracksAreKnown() {
    for (const e of this.output._tracks)
      if (!e.source._closed && !this.trackDatas.some((t) => t.track === e))
        return !1;
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    const e = this.trackDatas.map((t) => t.type === "video" || t.type === "audio" ? t.info.decoderConfig.codec : {
      webvtt: "wvtt"
    }[t.track.source._codec]);
    return Jr({
      isQuickTime: this.isQuickTime,
      hasVideo: this.trackDatas.some((t) => t.type === "video"),
      hasAudio: this.trackDatas.some((t) => t.type === "audio"),
      codecStrings: e
    });
  }
  getVideoTrackData(e, t, i) {
    const s = this.trackDatas.find((h) => h.track === e);
    if (s)
      return s;
    kr(i), S(i), S(i.decoderConfig);
    const r = { ...i.decoderConfig };
    S(r.codedWidth !== void 0), S(r.codedHeight !== void 0);
    let o = !1;
    if (e.source._codec === "avc" && !r.description) {
      const h = Ur(t.data);
      if (!h)
        throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
      r.description = Or(h), o = !0;
    } else if (e.source._codec === "hevc" && !r.description) {
      const h = Dr(t.data);
      if (!h)
        throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
      r.description = Gr(h), o = !0;
    }
    const a = pr(1 / (e.metadata.frameRate ?? ee), 1e6).denominator, c = r.displayAspectWidth, u = r.displayAspectHeight, l = c === void 0 || u === void 0 ? { num: 1, den: 1 } : gr({
      num: c * r.codedHeight,
      den: u * r.codedWidth
    }), d = {
      muxer: this,
      track: e,
      type: "video",
      info: {
        width: r.codedWidth,
        height: r.codedHeight,
        pixelAspectRatio: l,
        decoderConfig: r,
        requiresAnnexBTransformation: o
      },
      timescale: a,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1
    };
    return this.trackDatas.push(d), this.trackDatas.sort((h, f) => h.track.id - f.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), d;
  }
  getAudioTrackData(e, t, i) {
    const s = this.trackDatas.find((c) => c.track === e);
    if (s)
      return s;
    Fr(i), S(i), S(i.decoderConfig);
    const r = { ...i.decoderConfig };
    let o = !1;
    if (e.source._codec === "aac" && !r.description) {
      const c = yn(Le.tempFromBytes(t.data));
      if (!c)
        throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      const u = Hn[c.samplingFrequencyIndex], l = Wn[c.channelConfiguration];
      if (u === void 0 || l === void 0)
        throw new Error("Invalid ADTS frame header.");
      r.description = vr({
        objectType: c.objectType,
        sampleRate: u,
        numberOfChannels: l
      }), o = !0;
    }
    const a = {
      muxer: this,
      track: e,
      type: "audio",
      info: {
        numberOfChannels: i.decoderConfig.numberOfChannels,
        sampleRate: i.decoderConfig.sampleRate,
        decoderConfig: r,
        requiresPcmTransformation: !this.isFragmented && ve.includes(e.source._codec),
        expectedNextPcmPacketTimestamp: null,
        requiresAdtsStripping: o,
        firstPacket: t
      },
      timescale: r.sampleRate,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1
    };
    return this.trackDatas.push(a), this.trackDatas.sort((c, u) => c.track.id - u.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), a;
  }
  getSubtitleTrackData(e, t) {
    const i = this.trackDatas.find((r) => r.track === e);
    if (i)
      return i;
    Pr(t), S(t), S(t.config);
    const s = {
      muxer: this,
      track: e,
      type: "subtitle",
      info: {
        config: t.config
      },
      timescale: 1e3,
      // Reasonable
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1,
      lastCueEndTimestamp: 0,
      cueQueue: [],
      nextSourceId: 0,
      cueToSourceId: /* @__PURE__ */ new WeakMap()
    };
    return this.trackDatas.push(s), this.trackDatas.sort((r, o) => r.track.id - o.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), s;
  }
  async addEncodedVideoPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const r = this.getVideoTrackData(e, t, i);
      let o = t.data;
      if (r.info.requiresAnnexBTransformation) {
        const c = [...Mt(o)].map((u) => o.subarray(u.offset, u.offset + u.length));
        if (c.length === 0)
          throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
        o = Ir(c, 4);
      }
      this.validateTimestamp(r.track, t.timestamp, t.type === "key");
      const a = this.createSampleForTrack(r, o, t.timestamp, t.duration, t.type);
      await this.registerSample(r, a);
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const r = this.getAudioTrackData(e, t, i);
      let o = t.data;
      if (r.info.requiresAdtsStripping) {
        const l = yn(Le.tempFromBytes(o));
        if (!l)
          throw new Error("Expected ADTS frame, didn't get one.");
        const d = l.crcCheck === null ? Zr : eo;
        o = o.subarray(d);
      }
      this.validateTimestamp(r.track, t.timestamp, t.type === "key");
      let a = t.timestamp, c = t.duration;
      if (r.info.requiresPcmTransformation) {
        const d = xe(r.info.decoderConfig.codec).sampleSize * r.info.numberOfChannels;
        if (c = o.byteLength / d / r.info.sampleRate, r.info.expectedNextPcmPacketTimestamp !== null) {
          const h = a - r.info.expectedNextPcmPacketTimestamp;
          if (h < 0.01)
            a = r.info.expectedNextPcmPacketTimestamp;
          else {
            const f = await this.padWithSilence(r, r.info.expectedNextPcmPacketTimestamp, h);
            a = r.info.expectedNextPcmPacketTimestamp + f;
          }
        }
        r.info.expectedNextPcmPacketTimestamp = a + c;
      }
      const u = this.createSampleForTrack(r, o, a, c, t.type);
      await this.registerSample(r, u);
    } finally {
      s();
    }
  }
  async padWithSilence(e, t, i) {
    const s = V(i, e.timescale);
    if (i = s / e.timescale, s > 0) {
      const { sampleSize: r, silentValue: o } = xe(e.info.decoderConfig.codec), a = s * e.info.numberOfChannels, c = new Uint8Array(r * a).fill(o), u = this.createSampleForTrack(e, new Uint8Array(c.buffer), t, i, "key");
      await this.registerSample(e, u);
    }
    return i;
  }
  async addSubtitleCue(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const r = this.getSubtitleTrackData(e, i);
      this.validateTimestamp(r.track, t.timestamp, !0), e.source._codec === "webvtt" && (r.cueQueue.push(t), await this.processWebVTTCues(r, t.timestamp));
    } finally {
      s();
    }
  }
  async processWebVTTCues(e, t) {
    for (; e.cueQueue.length > 0; ) {
      const i = /* @__PURE__ */ new Set([]);
      for (const u of e.cueQueue)
        S(u.timestamp <= t), S(e.lastCueEndTimestamp <= u.timestamp + u.duration), i.add(Math.max(u.timestamp, e.lastCueEndTimestamp)), i.add(u.timestamp + u.duration);
      const s = [...i].sort((u, l) => u - l), r = s[0], o = s[1] ?? r;
      if (t < o)
        break;
      if (e.lastCueEndTimestamp < r) {
        this.auxWriter.seek(0);
        const u = ra();
        this.auxBoxWriter.writeBox(u);
        const l = this.auxTarget._getSlice(0, this.auxWriter.getPos()), d = this.createSampleForTrack(e, l, e.lastCueEndTimestamp, r - e.lastCueEndTimestamp, "key");
        await this.registerSample(e, d), e.lastCueEndTimestamp = r;
      }
      this.auxWriter.seek(0);
      for (let u = 0; u < e.cueQueue.length; u++) {
        const l = e.cueQueue[u];
        if (l.timestamp >= o)
          break;
        wn.lastIndex = 0;
        const d = wn.test(l.text), h = l.timestamp + l.duration;
        let f = e.cueToSourceId.get(l);
        if (f === void 0 && o < h && (f = e.nextSourceId++, e.cueToSourceId.set(l, f)), l.notes) {
          const w = aa(l.notes);
          this.auxBoxWriter.writeBox(w);
        }
        const y = oa(l.text, d ? r : null, l.identifier ?? null, l.settings ?? null, f ?? null);
        this.auxBoxWriter.writeBox(y), h === o && e.cueQueue.splice(u--, 1);
      }
      const a = this.auxTarget._getSlice(0, this.auxWriter.getPos()), c = this.createSampleForTrack(e, a, r, o - r, "key");
      await this.registerSample(e, c), e.lastCueEndTimestamp = o;
    }
  }
  createSampleForTrack(e, t, i, s, r) {
    return {
      timestamp: i,
      decodeTimestamp: i,
      // This may be refined later
      duration: s,
      data: t,
      size: t.byteLength,
      type: r,
      timescaleUnitsToNextSample: V(s, e.timescale)
      // Will be refined
    };
  }
  processTimestamps(e, t) {
    if (e.timestampProcessingQueue.length === 0)
      return;
    if (e.type === "audio" && e.info.requiresPcmTransformation) {
      this.isFragmented || (e.startTimestampOffset ?? (e.startTimestampOffset = e.timestampProcessingQueue[0].timestamp));
      let s = 0;
      for (let r = 0; r < e.timestampProcessingQueue.length; r++) {
        const o = e.timestampProcessingQueue[r], a = V(o.duration, e.timescale);
        s += a;
      }
      if (e.timeToSampleTable.length === 0)
        e.timeToSampleTable.push({
          sampleCount: s,
          sampleDelta: 1
        });
      else {
        const r = Te(e.timeToSampleTable);
        r.sampleCount += s;
      }
      e.timestampProcessingQueue.length = 0;
      return;
    }
    const i = e.timestampProcessingQueue.map((s) => s.timestamp).sort((s, r) => s - r);
    this.isFragmented || (e.startTimestampOffset ?? (e.startTimestampOffset = i[0]));
    for (let s = 0; s < e.timestampProcessingQueue.length; s++) {
      const r = e.timestampProcessingQueue[s];
      r.decodeTimestamp = i[s];
      const o = V(r.timestamp - r.decodeTimestamp, e.timescale), a = V(r.duration, e.timescale);
      if (e.lastTimescaleUnits !== null) {
        S(e.lastSample);
        const c = V(r.decodeTimestamp, e.timescale, !1), u = Math.round(c - e.lastTimescaleUnits);
        if (S(u >= 0), e.lastTimescaleUnits += u, e.lastSample.timescaleUnitsToNextSample = u, !this.isFragmented) {
          let l = Te(e.timeToSampleTable);
          if (S(l), l.sampleCount === 1) {
            l.sampleDelta = u;
            const h = e.timeToSampleTable[e.timeToSampleTable.length - 2];
            h && h.sampleDelta === u && (h.sampleCount++, e.timeToSampleTable.pop(), l = h);
          } else l.sampleDelta !== u && (l.sampleCount--, e.timeToSampleTable.push(l = {
            sampleCount: 1,
            sampleDelta: u
          }));
          l.sampleDelta === a ? l.sampleCount++ : e.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: a
          });
          const d = Te(e.compositionTimeOffsetTable);
          S(d), d.sampleCompositionTimeOffset === o ? d.sampleCount++ : e.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: o
          });
        }
      } else
        e.lastTimescaleUnits = V(r.decodeTimestamp, e.timescale, !1), this.isFragmented || (e.timeToSampleTable.push({
          sampleCount: 1,
          sampleDelta: a
        }), e.compositionTimeOffsetTable.push({
          sampleCount: 1,
          sampleCompositionTimeOffset: o
        }));
      e.lastSample = r;
    }
    if (e.timestampProcessingQueue.length = 0, S(e.lastSample), S(e.lastTimescaleUnits !== null), t !== void 0 && e.lastSample.timescaleUnitsToNextSample === 0) {
      S(t.type === "key");
      const s = V(t.timestamp, e.timescale, !1), r = Math.round(s - e.lastTimescaleUnits);
      e.lastSample.timescaleUnitsToNextSample = r;
    }
  }
  async registerSample(e, t) {
    t.type === "key" && this.processTimestamps(e, t), e.timestampProcessingQueue.push(t), this.isFragmented ? (e.sampleQueue.push(t), await this.interleaveSamples()) : this.fastStart === "reserve" ? await this.registerSampleFastStartReserve(e, t) : await this.addSampleToTrack(e, t);
  }
  async addSampleToTrack(e, t) {
    if (!this.isFragmented && (e.samples.push(t), this.fastStart === "reserve")) {
      const s = e.track.metadata.maximumPacketCount;
      if (S(s !== void 0), e.samples.length > s)
        throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${s}). Either add less packets or increase the maximum packet count.`);
    }
    let i = !1;
    if (!e.currentChunk)
      i = !0;
    else {
      e.currentChunk.startTimestamp = Math.min(e.currentChunk.startTimestamp, t.timestamp);
      const s = t.timestamp - e.currentChunk.startTimestamp;
      if (this.isFragmented) {
        const r = this.trackDatas.every((o) => {
          if (e === o)
            return t.type === "key";
          const a = o.sampleQueue[0];
          return a ? a.type === "key" : o.closed;
        });
        s >= this.minimumFragmentDuration && r && t.timestamp > this.maxWrittenTimestamp && (i = !0, await this.finalizeFragment());
      } else
        i = s >= 0.5;
    }
    i && (e.currentChunk && await this.finalizeCurrentChunk(e), e.currentChunk = {
      startTimestamp: t.timestamp,
      samples: [],
      offset: null,
      moofOffset: null
    }), S(e.currentChunk), e.currentChunk.samples.push(t), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, t.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, t.timestamp + t.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, t.timestamp));
  }
  async finalizeCurrentChunk(e) {
    if (S(!this.isFragmented), S(this.writer), !e.currentChunk)
      return;
    e.finalizedChunks.push(e.currentChunk), this.finalizedChunks.push(e.currentChunk);
    let t = e.currentChunk.samples.length;
    if (e.type === "audio" && e.info.requiresPcmTransformation && (t = e.currentChunk.samples.reduce((i, s) => i + V(s.duration, e.timescale), 0)), (e.compactlyCodedChunkTable.length === 0 || Te(e.compactlyCodedChunkTable).samplesPerChunk !== t) && e.compactlyCodedChunkTable.push({
      firstChunk: e.finalizedChunks.length,
      // 1-indexed
      samplesPerChunk: t
    }), this.fastStart === "in-memory") {
      e.currentChunk.offset = 0;
      return;
    }
    e.currentChunk.offset = this.writer.getPos();
    for (const i of e.currentChunk.samples)
      S(i.data), this.writer.write(i.data), i.data = null;
    await this.writer.flush();
  }
  async interleaveSamples(e = !1) {
    if (S(this.isFragmented), !(!e && !this.allTracksAreKnown()))
      e: for (; ; ) {
        let t = null, i = 1 / 0;
        for (const r of this.trackDatas) {
          if (!e && r.sampleQueue.length === 0 && !r.closed)
            break e;
          r.sampleQueue.length > 0 && r.sampleQueue[0].timestamp < i && (t = r, i = r.sampleQueue[0].timestamp);
        }
        if (!t)
          break;
        const s = t.sampleQueue.shift();
        await this.addSampleToTrack(t, s);
      }
  }
  async finalizeFragment(e = !this.isCmaf) {
    S(this.isFragmented);
    const t = this.nextFragmentNumber++;
    if (t === 1) {
      const f = this.initBoxWriter ?? this.boxWriter;
      S(f), this.format._options.onMoov && f.writer.startTrackingWrites();
      const y = ke(this);
      if (f.writeBox(y), this.format._options.onMoov) {
        const { data: w, start: E } = f.writer.stopTrackingWrites();
        this.format._options.onMoov(w, E);
      }
      if (this.isCmaf) {
        S(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new Ke(this.writer);
        const w = this.boxWriter.measureBox(vn()), E = this.boxWriter.measureBox(Tn(this, 0));
        this.segmentHeaderSize = w + E, this.writer.seek(this.segmentHeaderSize);
      }
    }
    S(this.writer), S(this.boxWriter);
    const i = this.trackDatas.filter((f) => f.currentChunk), s = xn(t, i), r = this.writer.getPos(), o = r + this.boxWriter.measureBox(s);
    let a = o + ft, c = 1 / 0;
    for (const f of i) {
      f.currentChunk.offset = a, f.currentChunk.moofOffset = r;
      for (const y of f.currentChunk.samples)
        a += y.size;
      c = Math.min(c, f.currentChunk.startTimestamp);
    }
    const u = a - o, l = u >= 2 ** 32;
    if (l)
      for (const f of i)
        f.currentChunk.offset += bn - ft;
    this.format._options.onMoof && this.writer.startTrackingWrites();
    const d = xn(t, i);
    if (this.boxWriter.writeBox(d), this.format._options.onMoof) {
      const { data: f, start: y } = this.writer.stopTrackingWrites();
      this.format._options.onMoof(f, y, c);
    }
    S(this.writer.getPos() === o), this.format._options.onMdat && this.writer.startTrackingWrites();
    const h = Ye(l);
    h.size = u, this.boxWriter.writeBox(h), this.writer.seek(o + (l ? bn : ft));
    for (const f of i)
      for (const y of f.currentChunk.samples)
        this.writer.write(y.data), y.data = null;
    if (this.format._options.onMdat) {
      const { data: f, start: y } = this.writer.stopTrackingWrites();
      this.format._options.onMdat(f, y);
    }
    for (const f of i)
      f.finalizedChunks.push(f.currentChunk), this.finalizedChunks.push(f.currentChunk), f.currentChunk = null;
    e && await this.writer.flush();
  }
  async registerSampleFastStartReserve(e, t) {
    if (S(this.writer), S(this.boxWriter), this.allTracksAreKnown()) {
      if (!this.mdat) {
        const i = ke(this), r = this.boxWriter.measureBox(i) + this.computeSampleTableSizeUpperBound() + 4096;
        S(this.ftypSize !== null), this.writer.seek(this.ftypSize + r), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Ye(!0), this.boxWriter.writeBox(this.mdat);
        for (const o of this.trackDatas) {
          for (const a of o.sampleQueue)
            await this.addSampleToTrack(o, a);
          o.sampleQueue.length = 0;
        }
      }
      await this.addSampleToTrack(e, t);
    } else
      e.sampleQueue.push(t);
  }
  computeSampleTableSizeUpperBound() {
    S(this.fastStart === "reserve");
    let e = 0;
    for (const t of this.trackDatas) {
      const i = t.track.metadata.maximumPacketCount;
      S(i !== void 0), e += 8 * Math.ceil(2 / 3 * i), e += 4 * i, e += 8 * Math.ceil(2 / 3 * i), e += 12 * Math.ceil(2 / 3 * i), e += 4 * i, e += 8 * i;
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose(e) {
    const t = await this.mutex.acquire(), i = this.trackDatas.find((s) => s.track === e);
    i && (i.closed = !0, i.type === "subtitle" && e.source._codec === "webvtt" && await this.processWebVTTCues(i, 1 / 0), this.processTimestamps(i)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), t();
  }
  /** Finalizes the file, making it ready for use. Must be called after all video and audio chunks have been added. */
  async finalize() {
    const e = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    for (const t of this.trackDatas)
      t.closed = !0, t.type === "subtitle" && t.track.source._codec === "webvtt" && await this.processWebVTTCues(t, 1 / 0), this.processTimestamps(t);
    if (this.isFragmented)
      await this.interleaveSamples(!0), await this.finalizeFragment(!1);
    else
      for (const t of this.trackDatas) {
        await this.finalizeCurrentChunk(t), S(t.startTimestampOffset !== null);
        for (let i = 0; i < t.samples.length; i++) {
          const s = t.samples[i];
          s.timestamp -= t.startTimestampOffset, s.decodeTimestamp -= t.startTimestampOffset;
        }
      }
    if (S(this.writer), S(this.boxWriter), this.fastStart === "in-memory") {
      this.mdat = Ye(!1);
      let t;
      for (let s = 0; s < 2; s++) {
        const r = ke(this), o = this.boxWriter.measureBox(r);
        t = this.boxWriter.measureBox(this.mdat);
        let a = this.writer.getPos() + o + t;
        for (const c of this.finalizedChunks) {
          c.offset = a;
          for (const { data: u } of c.samples)
            S(u), a += u.byteLength, t += u.byteLength;
        }
        if (a < 2 ** 32)
          break;
        t >= 2 ** 32 && (this.mdat.largeSize = !0);
      }
      this.format._options.onMoov && this.writer.startTrackingWrites();
      const i = ke(this);
      if (this.boxWriter.writeBox(i), this.format._options.onMoov) {
        const { data: s, start: r } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(s, r);
      }
      this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat.size = t, this.boxWriter.writeBox(this.mdat);
      for (const s of this.finalizedChunks)
        for (const r of s.samples)
          S(r.data), this.writer.write(r.data), r.data = null;
      if (this.format._options.onMdat) {
        const { data: s, start: r } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(s, r);
      }
    } else if (this.isFragmented)
      if (this.isCmaf) {
        const t = this.segmentHeaderSize !== null ? this.writer.getPos() - this.segmentHeaderSize : 0;
        this.writer.seek(0), this.boxWriter.writeBox(vn()), this.boxWriter.writeBox(Tn(this, t));
      } else {
        const t = this.writer.getPos(), i = na(this.trackDatas);
        this.boxWriter.writeBox(i);
        const s = this.writer.getPos() - t;
        this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(s);
      }
    else {
      S(this.mdat);
      const t = this.boxWriter.offsets.get(this.mdat);
      S(t !== void 0);
      const i = this.writer.getPos() - t;
      if (this.mdat.size = i, this.mdat.largeSize = i >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.format._options.onMdat) {
        const { data: r, start: o } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(r, o);
      }
      const s = ke(this);
      if (this.fastStart === "reserve") {
        S(this.ftypSize !== null), this.writer.seek(this.ftypSize), this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(s);
        const r = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
        this.boxWriter.writeBox(ao(r));
      } else
        this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(s);
      if (this.format._options.onMoov) {
        const { data: r, start: o } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(r, o);
      }
    }
    e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ot {
  constructor() {
    this._connectedTrack = null, this._closingPromise = null, this._closed = !1;
  }
  /** @internal */
  _ensureValidAdd() {
    if (!this._connectedTrack)
      throw new Error("Source is not connected to an output track.");
    if (this._connectedTrack.output.state === "canceled")
      throw new Error("Output has been canceled.");
    if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized")
      throw new Error("Output has been finalized.");
    if (this._connectedTrack.output.state === "pending")
      throw new Error("Output has not started.");
    if (this._closed)
      throw new Error("Source is closed.");
  }
  /** @internal */
  async _start() {
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async _flushAndClose(e) {
  }
  /**
   * Closes this source. This prevents future samples from being added and signals to the output file that no further
   * samples will come in for this track. Calling `.close()` is optional but recommended after adding the
   * last sample - for improved performance and reduced memory usage.
   */
  close() {
    if (this._closingPromise)
      return;
    const e = this._connectedTrack;
    if (!e)
      throw new Error("Cannot call close without connecting the source to an output track.");
    if (e.output.state === "pending")
      throw new Error("Cannot call close before output has been started.");
    this._closingPromise = (async () => {
      await this._flushAndClose(!1), this._closed = !0, !(e.output.state === "finalizing" || e.output.state === "finalized") && e.output._muxer.onTrackClose(e);
    })();
  }
  /** @internal */
  async _flushOrWaitForOngoingClose(e) {
    return this._closingPromise ?? (this._closingPromise = (async () => {
      await this._flushAndClose(e), this._closed = !0;
    })());
  }
}
class Ot extends ot {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !we.includes(e))
      throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${we.join(", ")}.`);
    this._codec = e;
  }
}
const va = (n, e) => {
  if (n.metadata.hasOnlyKeyPackets && e.type !== "key")
    throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.");
};
class Ta extends Ot {
  /** Creates a new {@link EncodedVideoPacketSource} whose packets are encoded using `codec`. */
  constructor(e) {
    super(e);
  }
  /**
   * Adds an encoded packet to the output video track. Packets must be added in *decode order*, while a packet's
   * timestamp must be its *presentation timestamp*. B-frames are handled automatically.
   *
   * @param meta - Additional metadata from the encoder. You should pass this for the first call, including a valid
   * decoder config.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t) {
    if (!(e instanceof Me))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be added.");
    if (t !== void 0 && (!t || typeof t != "object"))
      throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), va(this._connectedTrack, e), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, e, t);
  }
}
class ii extends ot {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !Be.includes(e))
      throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Be.join(", ")}.`);
    this._codec = e;
  }
}
class si extends ot {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !Ee.includes(e))
      throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Ee.join(", ")}.`);
    this._codec = e;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Nt {
  /** Returns a list of video codecs that this output format can contain. */
  getSupportedVideoCodecs() {
    return this.getSupportedCodecs().filter((e) => we.includes(e));
  }
  /** Returns a list of audio codecs that this output format can contain. */
  getSupportedAudioCodecs() {
    return this.getSupportedCodecs().filter((e) => Be.includes(e));
  }
  /** Returns a list of subtitle codecs that this output format can contain. */
  getSupportedSubtitleCodecs() {
    return this.getSupportedCodecs().filter((e) => Ee.includes(e));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _codecUnsupportedHint(e) {
    return "";
  }
}
class at extends Nt {
  /** Internal constructor. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.fastStart !== void 0 && ![!1, "in-memory", "reserve", "fragmented"].includes(e.fastStart))
      throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
    if (e.minimumFragmentDuration !== void 0 && (!Number.isFinite(e.minimumFragmentDuration) || e.minimumFragmentDuration < 0))
      throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
    if (e.onFtyp !== void 0 && typeof e.onFtyp != "function")
      throw new TypeError("options.onFtyp, when provided, must be a function.");
    if (e.onMoov !== void 0 && typeof e.onMoov != "function")
      throw new TypeError("options.onMoov, when provided, must be a function.");
    if (e.onMdat !== void 0 && typeof e.onMdat != "function")
      throw new TypeError("options.onMdat, when provided, must be a function.");
    if (e.onMoof !== void 0 && typeof e.onMoof != "function")
      throw new TypeError("options.onMoof, when provided, must be a function.");
    if (e.metadataFormat !== void 0 && !["mdir", "mdta", "udta", "auto"].includes(e.metadataFormat))
      throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
    super(), this._options = e;
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 4294967295 },
      audio: { min: 0, max: 4294967295 },
      subtitle: { min: 0, max: 4294967295 },
      total: { min: 1, max: 4294967295 }
    };
  }
  get supportsVideoRotationMetadata() {
    return !0;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
  /** @internal */
  _createMuxer(e) {
    return new wa(e, this);
  }
}
class ri extends at {
  /** Creates a new {@link Mp4OutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  /** @internal */
  get _name() {
    return "MP4";
  }
  get fileExtension() {
    return ".mp4";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [
      ...we,
      ...st,
      // These are supported via ISO/IEC 23003-5:
      "pcm-s16",
      "pcm-s16be",
      "pcm-s24",
      "pcm-s24be",
      "pcm-s32",
      "pcm-s32be",
      "pcm-f32",
      "pcm-f32be",
      "pcm-f64",
      "pcm-f64be",
      ...Ee
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new $t().getSupportedCodecs().includes(e) ? " Switching to MOV will grant support for this codec." : "";
  }
}
class _t extends at {
  /** Creates a new {@link CmafOutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  /** @internal */
  get _name() {
    return "CMAF";
  }
  get fileExtension() {
    return ".m4s";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [
      ...we,
      ...st,
      // These are supported via ISO/IEC 23003-5:
      "pcm-s16",
      "pcm-s16be",
      "pcm-s24",
      "pcm-s24be",
      "pcm-s32",
      "pcm-s32be",
      "pcm-f32",
      "pcm-f32be",
      "pcm-f64",
      "pcm-f64be",
      ...Ee
    ];
  }
}
class $t extends at {
  /** Creates a new {@link MovOutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  /** @internal */
  get _name() {
    return "MOV";
  }
  get fileExtension() {
    return ".mov";
  }
  get mimeType() {
    return "video/quicktime";
  }
  getSupportedCodecs() {
    return [
      ...we,
      ...Be
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new ri().getSupportedCodecs().includes(e) ? " Switching to MP4 will grant support for this codec." : "";
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const oi = ["video", "audio", "subtitle"];
class Ce {
  /** @internal */
  constructor(e, t, i, s, r) {
    this.id = e, this.output = t, this.type = i, this.source = s, this.metadata = r;
  }
  /** Returns true if and only if this track is a video track. */
  isVideoTrack() {
    return this.type === "video";
  }
  /** Returns true if and only if this track is an audio track. */
  isAudioTrack() {
    return this.type === "audio";
  }
  /** Returns true if and only if this track is a subtitle track. */
  isSubtitleTrack() {
    return this.type === "subtitle";
  }
  /**
   * Returns true if and only if this track can be paired with the given other track. Pairability can be set using
   * the {@link BaseTrackMetadata.group} option.
   */
  canBePairedWith(e) {
    if (!(e instanceof Ce))
      throw new TypeError("other must be an OutputTrack.");
    if (this === e)
      return !1;
    const t = ln(this.metadata.group), i = ln(e.metadata.group);
    for (const s of t)
      if (this.type !== e.type && i.some((a) => s === a) || i.some((a) => s._pairedGroups.has(a)))
        return !0;
    return !1;
  }
}
class ai extends Ce {
  /** @internal */
  constructor(e, t, i, s) {
    super(e, t, "video", i, s);
  }
}
class ci extends Ce {
  /** @internal */
  constructor(e, t, i, s) {
    super(e, t, "audio", i, s);
  }
}
class li extends Ce {
  /** @internal */
  constructor(e, t, i, s) {
    super(e, t, "subtitle", i, s);
  }
}
class _e {
  /** Creates a new {@link OutputTrackGroup}. */
  constructor() {
    this._pairedGroups = /* @__PURE__ */ new Set();
  }
  /**
   * Marks this group as being pairable with another group, symmetrically. Output tracks where each track is assigned
   * to one half of a group pairing are then considered pairable.
   *
   * You cannot pair a group with itself.
   */
  pairWith(e) {
    if (!(e instanceof _e))
      throw new TypeError("other must be an OutputTrackGroup.");
    if (this === e)
      throw new TypeError("Cannot pair a group with itself.");
    this._pairedGroups.add(e), e._pairedGroups.add(this);
  }
}
const wt = (n) => {
  if (!n || typeof n != "object")
    throw new TypeError("metadata must be an object.");
  if (n.languageCode !== void 0 && !mr(n.languageCode))
    throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
  if (n.name !== void 0 && typeof n.name != "string")
    throw new TypeError("metadata.name, when provided, must be a string.");
  if (n.disposition !== void 0 && wr(n.disposition), n.maximumPacketCount !== void 0 && (!Number.isInteger(n.maximumPacketCount) || n.maximumPacketCount < 0))
    throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
  if (n.group !== void 0 && !(n.group instanceof _e) && (!Array.isArray(n.group) || n.group.some((e) => !(e instanceof _e))))
    throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.");
};
class Ea extends Pt {
  /**
   * The target to which the root file will be written. Throws when using {@link PathedTarget} with an async callback;
   * prefer the `'target'` event for those cases.
   */
  get target() {
    const e = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
    if (this._rootTargetPromise)
      throw new TypeError(e);
    const t = this._getRootTarget();
    if (t instanceof Promise)
      throw new TypeError(e);
    return t;
  }
  /**
   * Creates a new instance of {@link Output} which can then be used to create a new media file according to the
   * specified {@link OutputOptions}.
   */
  constructor(e) {
    if (super(), this.state = "pending", this.defaultTrackGroup = new _e(), this._onFinalize = null, this._unfinalizedTargets = /* @__PURE__ */ new Set(), this._rootWriterPromise = null, this._tracks = [], this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new Dn(), this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!(e.format instanceof Nt))
      throw new TypeError("options.format must be an OutputFormat.");
    if (!(e.target instanceof re || e.target instanceof Ze))
      throw new TypeError("options.target must be a Target or a PathedTarget.");
    if (e.target instanceof re && this._rememberTarget(e.target), e.initTarget !== void 0 && !(e.initTarget instanceof re) && typeof e.initTarget != "function")
      throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
    if (e.onFinalize !== void 0 && typeof e.onFinalize != "function")
      throw new TypeError("options.onFinalize, when provided, must be a function.");
    this.format = e.format, this._target = e.target, this._onFinalize = e.onFinalize ?? null, this._initTarget = e.initTarget ?? null, this._initTarget instanceof re && this._rememberTarget(this._initTarget), this._muxer = e.format._createMuxer(this);
  }
  /** @internal */
  _getTargetValidated(e) {
    S(this._target instanceof Ze);
    const t = this._target.getTarget(e), i = (s) => {
      if (!(s instanceof re))
        throw new TypeError("getTarget must return a Target.");
      return s;
    };
    return t instanceof Promise ? t.then(i) : i(t);
  }
  /** @internal */
  async _getTarget(e) {
    S(this._target instanceof Ze);
    const t = await this._getTargetValidated(e);
    return this._emit("target", { target: t, request: e, isRoot: e.isRoot }), this.state === "canceled" ? await t._close() : this._rememberTarget(t), t;
  }
  /** @internal */
  _rememberTarget(e) {
    this._unfinalizedTargets.add(e), e.on("finalized", () => this._unfinalizedTargets.delete(e), { once: !0 });
  }
  /** @internal */
  async _getInitTarget() {
    if (S(this._initTarget !== null), this._initTarget instanceof re)
      return this._initTarget;
    const e = await this._initTarget();
    return this.state === "canceled" ? await e._close() : this._rememberTarget(e), e;
  }
  /** @internal */
  _hasInitTarget() {
    return this._initTarget !== null;
  }
  /** @internal */
  _getRootTarget() {
    if (this._rootTarget)
      return this._rootTarget;
    if (this._rootTargetPromise)
      return this._rootTargetPromise;
    if (this._target instanceof re)
      return this._emit("target", { target: this._target, request: null, isRoot: !0 }), this._rootTarget = this._target, this._target;
    const e = {
      path: this._target.rootPath,
      isRoot: !0,
      mimeType: this.format.mimeType
    }, t = this._getTargetValidated(e), i = (s) => (this.state === "canceled" ? s._close() : this._rememberTarget(s), this._emit("target", { target: s, request: e, isRoot: !0 }), this._rootTarget = s, s);
    return t instanceof Promise ? this._rootTargetPromise = t.then(i) : i(t);
  }
  /** @internal */
  _getRootWriter(e) {
    return this._rootWriterPromise ?? (this._rootWriterPromise = (async () => {
      const t = await this._getRootTarget(), i = new xt(t, typeof e == "boolean" ? e : e(t));
      return i.start(), i;
    })());
  }
  /** Adds a video track to the output with the given source. Can only be called before the output is started. */
  addVideoTrack(e, t = {}) {
    if (!(e instanceof Ot))
      throw new TypeError("source must be a VideoSource.");
    if (wt(t), t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
      throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);
    if (!this.format.supportsVideoRotationMetadata && t.rotation)
      throw new Error(`${this.format._name} does not support video rotation metadata.`);
    if (t.frameRate !== void 0 && (!Number.isFinite(t.frameRate) || t.frameRate <= 0))
      throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);
    const i = { ...t };
    return i.group ?? (i.group = this.defaultTrackGroup), this._addTrack(new ai(this._tracks.length + 1, this, e, i));
  }
  /** Adds an audio track to the output with the given source. Can only be called before the output is started. */
  addAudioTrack(e, t = {}) {
    if (!(e instanceof ii))
      throw new TypeError("source must be an AudioSource.");
    wt(t);
    const i = { ...t };
    return i.group ?? (i.group = this.defaultTrackGroup), this._addTrack(new ci(this._tracks.length + 1, this, e, i));
  }
  /** Adds a subtitle track to the output with the given source. Can only be called before the output is started. */
  addSubtitleTrack(e, t = {}) {
    if (!(e instanceof si))
      throw new TypeError("source must be a SubtitleSource.");
    wt(t);
    const i = { ...t };
    return i.group ?? (i.group = this.defaultTrackGroup), this._addTrack(new li(this._tracks.length + 1, this, e, i));
  }
  /**
   * Sets descriptive metadata tags about the media file, such as title, author, date, or cover art. When called
   * multiple times, only the metadata from the last call will be used.
   *
   * Can only be called before the output is started.
   */
  setMetadataTags(e) {
    if (yr(e), this.state !== "pending")
      throw new Error("Cannot set metadata tags after output has been started or canceled.");
    this._metadataTags = e;
  }
  /** @internal */
  _addTrack(e) {
    if (this.state !== "pending")
      throw new Error("Cannot add track after output has been started or canceled.");
    if (e.source._connectedTrack)
      throw new Error("Source is already used for a track.");
    const t = this.format.getSupportedTrackCounts(), i = this._tracks.reduce((o, a) => o + (a.type === e.type ? 1 : 0), 0), s = t[e.type].max;
    if (i === s)
      throw new Error(s === 0 ? `${this.format._name} does not support ${e.type} tracks.` : `${this.format._name} does not support more than ${s} ${e.type} track${s === 1 ? "" : "s"}.`);
    const r = t.total.max;
    if (this._tracks.length === r)
      throw new Error(`${this.format._name} does not support more than ${r} tracks${r === 1 ? "" : "s"} in total.`);
    if (e.isVideoTrack()) {
      const o = this.format.getSupportedVideoCodecs();
      if (o.length === 0)
        throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(e.source._codec));
      if (!o.includes(e.source._codec))
        throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${o.map((a) => `'${a}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
    } else if (e.isAudioTrack()) {
      const o = this.format.getSupportedAudioCodecs();
      if (o.length === 0)
        throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(e.source._codec));
      if (!o.includes(e.source._codec))
        throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${o.map((a) => `'${a}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
    } else if (e.isSubtitleTrack()) {
      const o = this.format.getSupportedSubtitleCodecs();
      if (o.length === 0)
        throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(e.source._codec));
      if (!o.includes(e.source._codec))
        throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${o.map((a) => `'${a}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
    }
    return this._tracks.push(e), e.source._connectedTrack = e, e;
  }
  /**
   * Starts the creation of the output file. This method should be called after all tracks have been added. Only after
   * the output has started can media samples be added to the tracks.
   *
   * @returns A promise that resolves when the output has successfully started and is ready to receive media samples.
   */
  async start() {
    const e = this.format.getSupportedTrackCounts();
    for (const i of oi) {
      const s = this._tracks.reduce((o, a) => o + (a.type === i ? 1 : 0), 0), r = e[i].min;
      if (s < r)
        throw new Error(r === e[i].max ? `${this.format._name} requires exactly ${r} ${i} track${r === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${r} ${i} track${r === 1 ? "" : "s"}.`);
    }
    const t = e.total.min;
    if (this._tracks.length < t)
      throw new Error(t === e.total.max ? `${this.format._name} requires exactly ${t} track${t === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${t} track${t === 1 ? "" : "s"}.`);
    if (this.state === "canceled")
      throw new Error("Output has been canceled.");
    return this._startPromise ? (console.warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
      this.state = "started";
      const i = await this._mutex.acquire();
      try {
        await this._muxer.start();
        const s = this._tracks.map((r) => r.source._start());
        await Promise.all(s);
      } finally {
        i();
      }
    })();
  }
  /**
   * Resolves with the full MIME type of the output file, including track codecs.
   *
   * The returned promise will resolve only once the precise codec strings of all tracks are known.
   */
  getMimeType() {
    return this._muxer.getMimeType();
  }
  /**
   * Cancels the creation of the output file, releasing internal resources like encoders and preventing further
   * samples from being added.
   *
   * @returns A promise that resolves once all internal resources have been released.
   */
  async cancel() {
    if (this._cancelPromise)
      return console.warn("Output has already been canceled."), this._cancelPromise;
    if (this.state === "finalizing" || this.state === "finalized") {
      this.state === "finalized" && console.warn("Output has already been finalized.");
      return;
    }
    return this._cancelPromise = (async () => {
      this.state = "canceled";
      const e = await this._mutex.acquire();
      try {
        const t = this._tracks.map((i) => i.source._flushOrWaitForOngoingClose(!0));
        await Promise.all(t), await Promise.all([...this._unfinalizedTargets].map((i) => i._close())), this._unfinalizedTargets.clear();
      } finally {
        e();
      }
    })();
  }
  /**
   * Finalizes the output file. This method must be called after all media samples across all tracks have been added.
   * Once the Promise returned by this method completes, the output file is ready.
   */
  async finalize() {
    if (this.state === "pending")
      throw new Error("Cannot finalize before starting.");
    if (this.state === "canceled")
      throw new Error("Cannot finalize after canceling.");
    return this._finalizePromise ? (console.warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
      this.state = "finalizing";
      const e = await this._mutex.acquire();
      try {
        const t = this._tracks.map((i) => i.source._flushOrWaitForOngoingClose(!1));
        if (await Promise.all(t), await this._muxer.finalize(), this._rootWriterPromise) {
          const i = await this._rootWriterPromise;
          i.finalized || (await i.flush(), await i.finalize());
        }
        this._onFinalize && await this._onFinalize(), this.state = "finalized";
      } finally {
        e();
      }
    })();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ui = Symbol.for("mediabunny loaded");
globalThis[ui] && console.error(`[WARNING]
Mediabunny was loaded twice. This will likely cause Mediabunny not to work correctly. Check if multiple dependencies are importing different versions of Mediabunny, or if something is being bundled incorrectly.`);
globalThis[ui] = !0;
const xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALL_TRACK_TYPES: oi,
  AUDIO_CODECS: Be,
  AttachedFile: jn,
  AudioSource: ii,
  BufferTarget: Je,
  CmafOutputFormat: _t,
  EncodedPacket: Me,
  EncodedVideoPacketSource: Ta,
  EventEmitter: Pt,
  IsobmffOutputFormat: at,
  MediaSource: ot,
  MovOutputFormat: $t,
  Mp4OutputFormat: ri,
  NON_PCM_AUDIO_CODECS: st,
  Output: Ea,
  OutputAudioTrack: ci,
  OutputFormat: Nt,
  OutputSubtitleTrack: li,
  OutputTrack: Ce,
  OutputTrackGroup: _e,
  OutputVideoTrack: ai,
  PCM_AUDIO_CODECS: ve,
  PathedTarget: Ze,
  RangedTarget: ni,
  RichImageData: Bt,
  SUBTITLE_CODECS: Ee,
  SubtitleSource: si,
  Target: re,
  VIDEO_CODECS: we,
  VideoSource: Ot
}, Symbol.toStringTag, { value: "Module" }));
class _a {
  constructor(e, t) {
    this.recompileHandler = null, this.tabs = [], this.activeTabIndex = 0, this.editorInstance = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.keydownHandler = null, this.container = e, this.project = t, this.buildTabs(), this.tabBar = document.createElement("div"), this.tabBar.className = "editor-tab-bar", this.buildTabBar(), this.contentArea = document.createElement("div"), this.contentArea.className = "editor-content-area", this.copyButton = document.createElement("button"), this.copyButton.className = "editor-copy-button", this.copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `, this.copyButton.title = "Copy code to clipboard", this.copyButton.addEventListener("click", () => this.copyToClipboard()), this.recompileButton = document.createElement("button"), this.recompileButton.className = "editor-recompile-button", this.recompileButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `, this.recompileButton.title = "Recompile shader (Ctrl+Enter)", this.recompileButton.addEventListener("click", () => this.recompile()), this.errorDisplay = document.createElement("div"), this.errorDisplay.className = "editor-error-display", this.errorDisplay.style.display = "none";
    const i = document.createElement("div");
    i.className = "editor-toolbar", i.appendChild(this.tabBar), i.appendChild(this.copyButton), i.appendChild(this.recompileButton), this.container.appendChild(i), this.container.appendChild(this.contentArea), this.container.appendChild(this.errorDisplay), this.setupKeyboardShortcut(), this.showTab(0);
  }
  setRecompileHandler(e) {
    this.recompileHandler = e;
  }
  dispose() {
    this.keydownHandler && (this.container.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.container.innerHTML = "";
  }
  buildTabs() {
    this.tabs = [], this.project.commonSource && this.tabs.push({
      kind: "code",
      name: "common.glsl",
      passName: "common",
      source: this.project.commonSource
    });
    const e = [
      "BufferA",
      "BufferB",
      "BufferC",
      "BufferD"
    ];
    for (const i of e) {
      const s = this.project.passes[i];
      s && this.tabs.push({
        kind: "code",
        name: `${i.toLowerCase()}.glsl`,
        passName: i,
        source: s.glslSource
      });
    }
    const t = this.project.passes.Image;
    this.tabs.push({
      kind: "code",
      name: "image.glsl",
      passName: "Image",
      source: t.glslSource
    });
    for (const i of this.project.textures)
      this.tabs.push({
        kind: "image",
        name: i.filename || i.name,
        url: i.source
      });
  }
  buildTabBar() {
    this.tabBar.innerHTML = "", this.tabs.forEach((e, t) => {
      const i = document.createElement("button");
      i.className = "editor-tab-button", e.kind === "image" && i.classList.add("image-tab"), i.textContent = e.name, t === this.activeTabIndex && i.classList.add("active"), i.addEventListener("click", () => this.showTab(t)), this.tabBar.appendChild(i);
    });
  }
  async showTab(e) {
    this.saveCurrentEditorContent(), this.activeTabIndex = e;
    const t = this.tabs[e];
    if (this.tabBar.querySelectorAll(".editor-tab-button").forEach((i, s) => {
      i.classList.toggle("active", s === e);
    }), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.contentArea.innerHTML = "", t.kind === "code") {
      this.copyButton.style.display = "", this.recompileButton.style.display = "";
      const i = this.modifiedSources.get(t.passName) ?? t.source, s = document.createElement("div");
      s.className = "editor-prism-container", this.contentArea.appendChild(s);
      try {
        const { createEditor: r } = await Promise.resolve().then(() => hi);
        this.editorInstance = r(s, i, (o) => {
          this.modifiedSources.set(t.passName, o);
        });
      } catch (r) {
        console.error("Failed to load editor:", r);
        const o = document.createElement("textarea");
        o.className = "editor-fallback-textarea", o.value = i, o.addEventListener("input", () => {
          this.modifiedSources.set(t.passName, o.value);
        }), s.appendChild(o);
      }
    } else {
      this.copyButton.style.display = "none", this.recompileButton.style.display = "none";
      const i = document.createElement("div");
      i.className = "editor-image-viewer";
      const s = document.createElement("img");
      s.src = t.url, s.alt = t.name, i.appendChild(s), this.contentArea.appendChild(i);
    }
  }
  saveCurrentEditorContent() {
    if (this.editorInstance) {
      const e = this.tabs[this.activeTabIndex];
      if (e.kind === "code") {
        const t = this.editorInstance.getSource();
        this.modifiedSources.set(e.passName, t);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const t = this.modifiedSources.get(e.passName) ?? e.source, i = this.recompileHandler(e.passName, t);
    i.success ? (this.hideError(), e.source = t) : this.showError(i.error || "Compilation failed");
  }
  showError(e) {
    this.errorDisplay.textContent = e, this.errorDisplay.style.display = "block";
  }
  hideError() {
    this.errorDisplay.style.display = "none";
  }
  async copyToClipboard() {
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const t = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(e.passName) ?? e.source;
    try {
      await navigator.clipboard.writeText(t);
      const i = this.copyButton.innerHTML;
      this.copyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `, this.copyButton.classList.add("copied"), setTimeout(() => {
        this.copyButton.innerHTML = i, this.copyButton.classList.remove("copied");
      }, 1500);
    } catch (i) {
      console.error("Failed to copy:", i);
    }
  }
  setupKeyboardShortcut() {
    this.keydownHandler = (e) => {
      (e.ctrlKey || e.metaKey) && e.key === "Enter" && (e.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
}
const Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EditorPanel: _a
}, Symbol.toStringTag, { value: "Module" }));
var Cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, di = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(i) {
    var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, o = {}, a = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: i.Prism && i.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function m(p) {
          return p instanceof c ? new c(p.type, m(p.content), p.alias) : Array.isArray(p) ? p.map(m) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(m) {
          return Object.prototype.toString.call(m).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(m) {
          return m.__id || Object.defineProperty(m, "__id", { value: ++r }), m.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function m(p, g) {
          g = g || {};
          var b, T;
          switch (a.util.type(p)) {
            case "Object":
              if (T = a.util.objId(p), g[T])
                return g[T];
              b = /** @type {Record<string, any>} */
              {}, g[T] = b;
              for (var _ in p)
                p.hasOwnProperty(_) && (b[_] = m(p[_], g));
              return (
                /** @type {any} */
                b
              );
            case "Array":
              return T = a.util.objId(p), g[T] ? g[T] : (b = [], g[T] = b, /** @type {Array} */
              /** @type {any} */
              p.forEach(function(A, v) {
                b[v] = m(A, g);
              }), /** @type {any} */
              b);
            default:
              return p;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(m) {
          for (; m; ) {
            var p = s.exec(m.className);
            if (p)
              return p[1].toLowerCase();
            m = m.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(m, p) {
          m.className = m.className.replace(RegExp(s, "gi"), ""), m.classList.add("language-" + p);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (b) {
            var m = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(b.stack) || [])[1];
            if (m) {
              var p = document.getElementsByTagName("script");
              for (var g in p)
                if (p[g].src == m)
                  return p[g];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(m, p, g) {
          for (var b = "no-" + p; m; ) {
            var T = m.classList;
            if (T.contains(p))
              return !0;
            if (T.contains(b))
              return !1;
            m = m.parentElement;
          }
          return !!g;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(m, p) {
          var g = a.util.clone(a.languages[m]);
          for (var b in p)
            g[b] = p[b];
          return g;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(m, p, g, b) {
          b = b || /** @type {any} */
          a.languages;
          var T = b[m], _ = {};
          for (var A in T)
            if (T.hasOwnProperty(A)) {
              if (A == p)
                for (var v in g)
                  g.hasOwnProperty(v) && (_[v] = g[v]);
              g.hasOwnProperty(A) || (_[A] = T[A]);
            }
          var P = b[m];
          return b[m] = _, a.languages.DFS(a.languages, function(M, k) {
            k === P && M != m && (this[M] = _);
          }), _;
        },
        // Traverse a language definition with Depth First Search
        DFS: function m(p, g, b, T) {
          T = T || {};
          var _ = a.util.objId;
          for (var A in p)
            if (p.hasOwnProperty(A)) {
              g.call(p, A, p[A], b || A);
              var v = p[A], P = a.util.type(v);
              P === "Object" && !T[_(v)] ? (T[_(v)] = !0, m(v, g, null, T)) : P === "Array" && !T[_(v)] && (T[_(v)] = !0, m(v, g, A, T));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(m, p) {
        a.highlightAllUnder(document, m, p);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(m, p, g) {
        var b = {
          callback: g,
          container: m,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", b), b.elements = Array.prototype.slice.apply(b.container.querySelectorAll(b.selector)), a.hooks.run("before-all-elements-highlight", b);
        for (var T = 0, _; _ = b.elements[T++]; )
          a.highlightElement(_, p === !0, b.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(m, p, g) {
        var b = a.util.getLanguage(m), T = a.languages[b];
        a.util.setLanguage(m, b);
        var _ = m.parentElement;
        _ && _.nodeName.toLowerCase() === "pre" && a.util.setLanguage(_, b);
        var A = m.textContent, v = {
          element: m,
          language: b,
          grammar: T,
          code: A
        };
        function P(k) {
          v.highlightedCode = k, a.hooks.run("before-insert", v), v.element.innerHTML = v.highlightedCode, a.hooks.run("after-highlight", v), a.hooks.run("complete", v), g && g.call(v.element);
        }
        if (a.hooks.run("before-sanity-check", v), _ = v.element.parentElement, _ && _.nodeName.toLowerCase() === "pre" && !_.hasAttribute("tabindex") && _.setAttribute("tabindex", "0"), !v.code) {
          a.hooks.run("complete", v), g && g.call(v.element);
          return;
        }
        if (a.hooks.run("before-highlight", v), !v.grammar) {
          P(a.util.encode(v.code));
          return;
        }
        if (p && i.Worker) {
          var M = new Worker(a.filename);
          M.onmessage = function(k) {
            P(k.data);
          }, M.postMessage(JSON.stringify({
            language: v.language,
            code: v.code,
            immediateClose: !0
          }));
        } else
          P(a.highlight(v.code, v.grammar, v.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(m, p, g) {
        var b = {
          code: m,
          grammar: p,
          language: g
        };
        if (a.hooks.run("before-tokenize", b), !b.grammar)
          throw new Error('The language "' + b.language + '" has no grammar.');
        return b.tokens = a.tokenize(b.code, b.grammar), a.hooks.run("after-tokenize", b), c.stringify(a.util.encode(b.tokens), b.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(m, p) {
        var g = p.rest;
        if (g) {
          for (var b in g)
            p[b] = g[b];
          delete p.rest;
        }
        var T = new d();
        return h(T, T.head, m), l(m, T, p, T.head, 0), y(T);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(m, p) {
          var g = a.hooks.all;
          g[m] = g[m] || [], g[m].push(p);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(m, p) {
          var g = a.hooks.all[m];
          if (!(!g || !g.length))
            for (var b = 0, T; T = g[b++]; )
              T(p);
        }
      },
      Token: c
    };
    i.Prism = a;
    function c(m, p, g, b) {
      this.type = m, this.content = p, this.alias = g, this.length = (b || "").length | 0;
    }
    c.stringify = function m(p, g) {
      if (typeof p == "string")
        return p;
      if (Array.isArray(p)) {
        var b = "";
        return p.forEach(function(P) {
          b += m(P, g);
        }), b;
      }
      var T = {
        type: p.type,
        content: m(p.content, g),
        tag: "span",
        classes: ["token", p.type],
        attributes: {},
        language: g
      }, _ = p.alias;
      _ && (Array.isArray(_) ? Array.prototype.push.apply(T.classes, _) : T.classes.push(_)), a.hooks.run("wrap", T);
      var A = "";
      for (var v in T.attributes)
        A += " " + v + '="' + (T.attributes[v] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + A + ">" + T.content + "</" + T.tag + ">";
    };
    function u(m, p, g, b) {
      m.lastIndex = p;
      var T = m.exec(g);
      if (T && b && T[1]) {
        var _ = T[1].length;
        T.index += _, T[0] = T[0].slice(_);
      }
      return T;
    }
    function l(m, p, g, b, T, _) {
      for (var A in g)
        if (!(!g.hasOwnProperty(A) || !g[A])) {
          var v = g[A];
          v = Array.isArray(v) ? v : [v];
          for (var P = 0; P < v.length; ++P) {
            if (_ && _.cause == A + "," + P)
              return;
            var M = v[P], k = M.inside, z = !!M.lookbehind, H = !!M.greedy, U = M.alias;
            if (H && !M.pattern.global) {
              var $ = M.pattern.toString().match(/[imsuy]*$/)[0];
              M.pattern = RegExp(M.pattern.source, $ + "g");
            }
            for (var D = M.pattern || M, O = b.next, W = T; O !== p.tail && !(_ && W >= _.reach); W += O.value.length, O = O.next) {
              var ce = O.value;
              if (p.length > m.length)
                return;
              if (!(ce instanceof c)) {
                var Ne = 1, K;
                if (H) {
                  if (K = u(D, W, m, z), !K || K.index >= m.length)
                    break;
                  var $e = K.index, Bi = K.index + K[0].length, he = W;
                  for (he += O.value.length; $e >= he; )
                    O = O.next, he += O.value.length;
                  if (he -= O.value.length, W = he, O.value instanceof c)
                    continue;
                  for (var Se = O; Se !== p.tail && (he < Bi || typeof Se.value == "string"); Se = Se.next)
                    Ne++, he += Se.value.length;
                  Ne--, ce = m.slice(W, he), K.index -= W;
                } else if (K = u(D, 0, ce, z), !K)
                  continue;
                var $e = K.index, De = K[0], ct = ce.slice(0, $e), Dt = ce.slice($e + De.length), lt = W + ce.length;
                _ && lt > _.reach && (_.reach = lt);
                var Ve = O.prev;
                ct && (Ve = h(p, Ve, ct), W += ct.length), f(p, Ve, Ne);
                var Mi = new c(A, k ? a.tokenize(De, k) : De, U, De);
                if (O = h(p, Ve, Mi), Dt && h(p, O, Dt), Ne > 1) {
                  var ut = {
                    cause: A + "," + P,
                    reach: lt
                  };
                  l(m, p, g, O.prev, W, ut), _ && ut.reach > _.reach && (_.reach = ut.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var m = { value: null, prev: null, next: null }, p = { value: null, prev: m, next: null };
      m.next = p, this.head = m, this.tail = p, this.length = 0;
    }
    function h(m, p, g) {
      var b = p.next, T = { value: g, prev: p, next: b };
      return p.next = T, b.prev = T, m.length++, T;
    }
    function f(m, p, g) {
      for (var b = p.next, T = 0; T < g && b !== m.tail; T++)
        b = b.next;
      p.next = b, b.prev = p, m.length -= T;
    }
    function y(m) {
      for (var p = [], g = m.head.next; g !== m.tail; )
        p.push(g.value), g = g.next;
      return p;
    }
    if (!i.document)
      return i.addEventListener && (a.disableWorkerMessageHandler || i.addEventListener("message", function(m) {
        var p = JSON.parse(m.data), g = p.language, b = p.code, T = p.immediateClose;
        i.postMessage(a.highlight(b, a.languages[g], g)), T && i.close();
      }, !1)), a;
    var w = a.util.currentScript();
    w && (a.filename = w.src, w.hasAttribute("data-manual") && (a.manual = !0));
    function E() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var R = document.readyState;
      R === "loading" || R === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", E) : window.requestAnimationFrame ? window.requestAnimationFrame(E) : window.setTimeout(E, 16);
    }
    return a;
  }(e);
  n.exports && (n.exports = t), typeof Cn < "u" && (Cn.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(i) {
    i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(s, r) {
      var o = {};
      o["language-" + r] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[r]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      a["language-" + r] = {
        pattern: /[\s\S]+/,
        inside: t.languages[r]
      };
      var c = {};
      c[s] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return s;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, t.languages.insertBefore("markup", "cdata", c);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(i, s) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [s, "language-" + s],
                inside: t.languages[s]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(i) {
    var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + s.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + s.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + s.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + s.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: s,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, i.languages.css.atrule.inside.rest = i.languages.css;
    var r = i.languages.markup;
    r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var i = "Loading…", s = function(w, E) {
      return "✖ Error " + w + " while fetching file: " + E;
    }, r = "✖ Error: File does not exist or is empty", o = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, a = "data-src-status", c = "loading", u = "loaded", l = "failed", d = "pre[data-src]:not([" + a + '="' + u + '"]):not([' + a + '="' + c + '"])';
    function h(w, E, R) {
      var m = new XMLHttpRequest();
      m.open("GET", w, !0), m.onreadystatechange = function() {
        m.readyState == 4 && (m.status < 400 && m.responseText ? E(m.responseText) : m.status >= 400 ? R(s(m.status, m.statusText)) : R(r));
      }, m.send(null);
    }
    function f(w) {
      var E = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w || "");
      if (E) {
        var R = Number(E[1]), m = E[2], p = E[3];
        return m ? p ? [R, Number(p)] : [R, void 0] : [R, R];
      }
    }
    t.hooks.add("before-highlightall", function(w) {
      w.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(w) {
      var E = (
        /** @type {HTMLPreElement} */
        w.element
      );
      if (E.matches(d)) {
        w.code = "", E.setAttribute(a, c);
        var R = E.appendChild(document.createElement("CODE"));
        R.textContent = i;
        var m = E.getAttribute("data-src"), p = w.language;
        if (p === "none") {
          var g = (/\.(\w+)$/.exec(m) || [, "none"])[1];
          p = o[g] || g;
        }
        t.util.setLanguage(R, p), t.util.setLanguage(E, p);
        var b = t.plugins.autoloader;
        b && b.loadLanguages(p), h(
          m,
          function(T) {
            E.setAttribute(a, u);
            var _ = f(E.getAttribute("data-range"));
            if (_) {
              var A = T.split(/\r\n?|\n/g), v = _[0], P = _[1] == null ? A.length : _[1];
              v < 0 && (v += A.length), v = Math.max(0, Math.min(v - 1, A.length)), P < 0 && (P += A.length), P = Math.max(0, Math.min(P, A.length)), T = A.slice(v, P).join(`
`), E.hasAttribute("data-start") || E.setAttribute("data-start", String(v + 1));
            }
            R.textContent = T, t.highlightElement(R);
          },
          function(T) {
            E.setAttribute(a, l), R.textContent = T;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(E) {
        for (var R = (E || document).querySelectorAll(d), m = 0, p; p = R[m++]; )
          t.highlightElement(p);
      }
    };
    var y = !1;
    t.fileHighlight = function() {
      y || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), y = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(di);
var Sa = di.exports;
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(n) {
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  n.languages.cpp = n.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: e,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), n.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return t;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), n.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: n.languages.cpp
        }
      }
    }
  }), n.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), n.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: n.languages.extend("cpp", {})
    }
  }), n.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, n.languages.cpp["base-clause"]);
})(Prism);
function Ra(n, e, t) {
  const i = document.createElement("div");
  i.className = "prism-editor-wrapper";
  const s = document.createElement("div");
  s.className = "prism-editor-line-numbers";
  const r = document.createElement("div");
  r.className = "prism-editor-area";
  const o = document.createElement("textarea");
  o.className = "prism-editor-textarea", o.value = e, o.spellcheck = !1, o.autocapitalize = "off", o.autocomplete = "off";
  const a = document.createElement("div");
  a.className = "prism-editor-highlight";
  const c = document.createElement("code");
  c.className = "language-cpp", a.appendChild(c), r.appendChild(o), r.appendChild(a), i.appendChild(s), i.appendChild(r), n.appendChild(i);
  function u() {
    const h = o.value;
    c.textContent = h + `
`, Sa.highlightElement(c);
    const f = h.split(`
`);
    s.innerHTML = f.map((y, w) => `<span>${w + 1}</span>`).join(""), t && t(h);
  }
  function l() {
    a.scrollTop = o.scrollTop, a.scrollLeft = o.scrollLeft, s.scrollTop = o.scrollTop;
  }
  function d(h) {
    if (h.key === "Tab") {
      h.preventDefault();
      const f = o.selectionStart, y = o.selectionEnd, w = o.value;
      o.value = w.substring(0, f) + "  " + w.substring(y), o.selectionStart = o.selectionEnd = f + 2, u();
    }
  }
  return o.addEventListener("input", u), o.addEventListener("scroll", l), o.addEventListener("keydown", d), u(), {
    getSource: () => o.value,
    setSource: (h) => {
      o.value = h, u();
    },
    destroy: () => {
      o.removeEventListener("input", u), o.removeEventListener("scroll", l), o.removeEventListener("keydown", d), i.parentNode && i.parentNode.removeChild(i);
    }
  };
}
const hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createEditor: Ra
}, Symbol.toStringTag, { value: "Module" })), ka = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 cDiv(vec2 a, vec2 b)
{
    return vec2(a.x*b.x + a.y*b.y, a.y*b.x - a.x*b.y) / dot(b, b);
}

vec4 hpPt(in vec2 b1, in vec2 b2)
{
    vec4 pt;
    if (length(b1) > length(b2)) {
        pt = vec4(cDiv(b1, b2), 0, 0);
    } else {
        pt = vec4(cDiv(b2, b1), 0, 0);
    }
    if (pt.y < 0.) { pt = -pt; }
    return pt;
}

bool uCellTest(vec2 p)
{
    return length(p)>=1. && p.x>=-.5 && p.x < .5;
}

bool seriesCellTest(vec2 p)
{
    return length(p-vec2(0.5,0.))>=.5 && p.x>=0. && p.x < 1.;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 1.;
bool showDots = true;
bool showBasis = false;
bool wholePlane = true;
float traceLevel = 0.3;
float backFadeHp = .99995;
float backFade = .999;
float lineThick = 1./15.;

vec4 dotCol   = vec4(.8, .05, .04, 1.);
vec4 backCol  = vec4(1., 1., 1., 0);
vec4 traceCol = vec4(0., 0., 0., 1.);
vec4 basisCol = vec4(.651, .669, .95, 1.);
vec4 edgeCol  = vec4(.651, .669, .95, 1.);

`, Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ka
}, Symbol.toStringTag, { value: "Module" })), Fa = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 1.; // Length of fading trails, 1 gives no tails.
bool showDots = true;
bool showBasis = false;
bool secondLattice = false;
float traceLevel = 0.3;
float backFade = .999;
bool chBasis = true;

vec4 dotCol = vec4(.8,.05,.04,1.);
vec4 dotCol2 = vec4(.05,.04,.55,1.);
vec4 backCol = vec4(1.,1.,1.,0);
vec4 traceCol = vec4(0.,0.,0.,1.);
vec4 basisCol = vec4(.651,.669,.95,1.);

float sc = 14.;
`, Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), Ba = `// Buffer for trailing dots

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    vec2 p = coords(fragCoord, iResolution, uScale, iResolution.xy * 0.5);
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col = vec4(blur(dotTrails,uv,5.*iResolution.xy));
    if(showTrails) {
    	col = mix(col,vec4(backCol.xyz,0),iResolution.y/640.*trailFalloff/length(backCol-col));
    } else {
        col = vec4(backCol.xyz,0);
    }
    
    mat2 pLattice = mat2(uLattice);

    if(showDots) 
    { 
        col = drGrid(col, p, pLattice, 0.2, dotCol, 0.15); 
    }
    
    if(showBasis)
    {    
    	col = drPt(col, p, uLattice, .4, basisCol, .75);
    	col = drPt(col, p, vec4(uLattice.zw,0,0), .4, basisCol, .75);
    }

    fragColor = col;
}`, Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ba
}, Symbol.toStringTag, { value: "Module" })), La = `// Buffer for Background and complete path record

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{   
    vec2 p = coords(fragCoord, iResolution, uScale, iResolution.xy * 0.5);
	vec2 uv = fragCoord / iResolution.xy;

    vec4 col = mix(backCol,vec4(texture(gridTrace,uv).xyz,1),backFade);

    col = drGrid(col, p, mat2(uLattice), 0.075, mix(col,traceCol,traceLevel), 2.);
    
    if(iFrame == 0 || uv.x > 1. || uv.y <0. || uv.y > 1. || uv.y < 0. || iMouse.z > 0.) 
    { col = backCol; }
    
    fragColor = col;
}`, Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: La
}, Symbol.toStringTag, { value: "Module" })), Ua = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 col = vec4(texture(gridTrace,uv).xyz,1);
    
    vec4 traced = vec4(texture(dotTrails,uv));
    
    col = vec4(mix(col, traced, traced.w).xyz,1.);

    // Output to screen
    fragColor = col;
}
`, Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ua
}, Symbol.toStringTag, { value: "Module" })), Na = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 cDiv(vec2 a, vec2 b)
{
    return vec2(a.x*b.x + a.y*b.y, a.y*b.x - a.x*b.y) / dot(b, b);
}

vec4 hpPt(in vec2 b1, in vec2 b2)
{
    vec4 pt;
    if (length(b1) > length(b2)) {
        pt = vec4(cDiv(b1, b2), 0, 0);
    } else {
        pt = vec4(cDiv(b2, b1), 0, 0);
    }
    if (pt.y < 0.) { pt = -pt; }
    return pt;
}

bool uCellTest(vec2 p)
{
    return length(p)>=1. && p.x>=-.5 && p.x < .5;
}

bool seriesCellTest(vec2 p)
{
    return length(p-vec2(0.5,0.))>=.5 && p.x>=0. && p.x < 1.;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 0.5; // Length of fading trails, 1 gives no tails.
bool showDots = true;
float traceLevel = .3;
float lineThick = 1./20.;
float backFadeHp = .99999; 


vec4 dotCol = vec4(.8,.05,.04,1.);
vec4 backCol = vec4(1.,1.,1.,1.);
vec4 traceCol = vec4(0.,0.,0.,1.);
vec4 edgeCol = vec4(.651,.669,.95,1.);

`, $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Na
}, Symbol.toStringTag, { value: "Module" })), Da = `// Buffer for Background

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col;

        col = backCol; 
        float len = length(p);
                
        float d = abs(len - 1.);
        if( abs(p.x) < .5 && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }

                
        d = abs(p.x - .5);        
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        d = abs(p.x + .5);
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        
        p = vec2(-p.x/(len*len),p.y/(len*len));
        len =1./len;
                
        d = abs(p.x - .5);        
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        d = abs(p.x + .5);
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }

    fragColor = col;
}`, Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), za = `// Buffer for trailing dots

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 col = vec4(blur(hpTrails,uv,5.*iResolution.xy));
    if(showTrails) {
    	col = mix(col,vec4(backCol.xyz,0),iResolution.y/640.*trailFalloff/length(backCol-col));
    } else {
        col = vec4(backCol.xyz,0);
    }
    //col = backCol;
    
    if(showDots) { 
    	vec2 b1 = uLattice.xy;
    	vec2 b2 = uLattice.zw;

        vec4 pt = hpPt(b1, b2);

        col = drPt(col, p, pt, pt.y/25., dotCol, 0.15); 
        col = drPt(col, p+vec2(1.,0.), pt, pt.y/25., dotCol, 0.15); 
        col = drPt(col, p-vec2(1.,0.), pt, pt.y/25., dotCol, 0.15); 
               
        float len2 = dot(pt,pt);
    	pt = vec4(-pt.x/len2, pt.y/len2,0,0);
        
        col = drPt(col, p, pt, pt.y/25., dotCol, 0.15); 
        len2 = dot(p,p);
        float div = 1. - 2.*p.x + len2;
        col = drPt(col, vec2((p.x-len2)/div,p.y/div), pt, pt.y/25., dotCol, 0.15); 
        div = 1. + 2.*p.x + len2;
        col = drPt(col, vec2((p.x+len2)/div,p.y/div), pt, pt.y/25., dotCol, 0.15); 
    }
    
    fragColor = col;
}`, ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: za
}, Symbol.toStringTag, { value: "Module" })), Ha = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec4 col = vec4(.6,.6,.6,1.);
    
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));

    bool inCell;
    switch(uCell) {
        case 0:  inCell = uCellTest(p);      break;
        case 1:  inCell = seriesCellTest(p); break;
        default: inCell = true;              break;
    }

    	for(int i=0; i<10; i++)
    	{    
    		p.x = p.x - round(p.x);
    		float len2 = dot(p,p);
    
    		if(len2 < 1.) { 
    	    	p = vec2(-p.x/len2, p.y/len2);
    		}
    	}
    	float len2 = dot(p,p);
    
    	if(p.y > 2.)
    	{
    		p = vec2(-p.x/len2, p.y/len2);
    	}

    if(inCell)
    {
        vec2 uv = iCoords(p, iResolution, 2., vec2(iResolution.x * 0.5, 0.0)) / iResolution.xy;
    
        if(uv.y > .998) { uv.y = .9995;}
    
        col = vec4(texture(hpBackground,uv).xyz,1);

        vec4 traced = vec4(texture(pathBackground,uv));
        
        col = vec4(mix(col, traced, 1.-traced.x).xyz,1.);
    
        traced = vec4(texture(hpTrails,uv));
    
        if(traced.w < .001) { traced.w = 0.; }
    
        col = vec4(mix(col, traced, traced.w).xyz,1.);
    }

    // Output to screen
    fragColor = col;
}
`, Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ha
}, Symbol.toStringTag, { value: "Module" })), Xa = `// Buffer for complete path record

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col;
    
    if(iFrame == 0 || uv.x > 1. || uv.y > 1. || uv.x < 0. || uv.y < 0. || iMouse.z > 0.) 
    { 
        col = vec4(1.,1.,1.,1.); 
        float len = length(p); } 
    else
    {
    	col = texture(pathBackground,uv);
        col = mix(backCol,col,backFadeHp);

        vec4 recCol = vec4(0.,0.,0.5,1.);

        if(uNewLattice && col.z < 1.) { col = mix(backCol,recCol,1.-col.z); }
        //if(uNewLattice) { col = col*vec4(0.,1.,0.,1.);}

    	vec2 b1 = uLattice.xy;
    	vec2 b2 = uLattice.zw;

        vec4 pt = hpPt(b1, b2);
    	col = drPt(col, p, pt, pt.y/100., mix(col,traceCol,traceLevel), .5);
        col = drPt(col, p+vec2(1.,0.), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        col = drPt(col, p-vec2(1.,0.), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        
    	float len2 = dot(pt,pt);
    	pt = vec4(-pt.x/len2, pt.y/len2,0,0);
        
    	col = drPt(col, p, pt, pt.y/100., mix(col,traceCol,traceLevel), .5);
        len2 = dot(p,p);
        float div = 1. - 2.*p.x + len2;
        col = drPt(col, vec2((p.x-len2)/div,p.y/div), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        div = 1. + 2.*p.x + len2;
        col = drPt(col, vec2((p.x+len2)/div,p.y/div), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 

    }

    fragColor = col;
}`, Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xa
}, Symbol.toStringTag, { value: "Module" })), fi = [
  "2dFlowJS",
  "2dHalfplaneJS"
], mi = "split", pi = !0, gi = {
  left: "0",
  top: "25%",
  width: "100%",
  height: "50%"
}, bi = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], yi = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], wi = {
  uLattice: {
    type: "vec4",
    value: [
      1,
      0,
      0,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 0.15,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uCell: {
    type: "int",
    value: 2,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Cell",
    options: [
      "Unit cell",
      "Series cell",
      "Whole plane"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, Ka = {
  views: fi,
  layout: mi,
  controls: pi,
  patch: gi,
  textInputs: bi,
  buttons: yi,
  uniforms: wi
}, Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buttons: yi,
  controls: pi,
  default: Ka,
  layout: mi,
  patch: gi,
  textInputs: bi,
  uniforms: wi,
  views: fi
}, Symbol.toStringTag, { value: "Module" })), vi = "default", Ti = !0, Ei = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], xi = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], _i = {
  gridTrace: {},
  dotTrails: {}
}, Ci = {
  uScale: {
    type: "float",
    value: 30,
    min: 5,
    max: 100,
    step: 0.1,
    label: "Scale"
  },
  uLattice: {
    type: "vec4",
    value: [
      1,
      0,
      0,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 10,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, qa = {
  layout: vi,
  controls: Ti,
  textInputs: Ei,
  buttons: xi,
  buffers: _i,
  uniforms: Ci
}, Qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffers: _i,
  buttons: xi,
  controls: Ti,
  default: qa,
  layout: vi,
  textInputs: Ei,
  uniforms: Ci
}, Symbol.toStringTag, { value: "Module" })), Si = "default", Ri = !0, ki = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], Ai = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], Fi = {
  hpBackground: {},
  pathBackground: {},
  hpTrails: {}
}, Pi = {
  uLattice: {
    type: "vec4",
    value: [
      1,
      1.618033988749895,
      -1.618033988749895,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 0.15,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uCell: {
    type: "int",
    value: 2,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Cell",
    options: [
      "Unit cell",
      "Series cell",
      "Whole plane"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, Ja = {
  layout: Si,
  controls: Ri,
  textInputs: ki,
  buttons: Ai,
  buffers: Fi,
  uniforms: Pi
}, Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffers: Fi,
  buttons: Ai,
  controls: Ri,
  default: Ja,
  layout: Si,
  textInputs: ki,
  uniforms: Pi
}, Symbol.toStringTag, { value: "Module" }));
export {
  ec as mount,
  tc as scriptMod
};
