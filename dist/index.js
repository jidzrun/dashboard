parcelRequire = function(e, r, t, n) {
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function(r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function(e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
		e[r] = [function(e, r) {
			r.exports = t
		}, {}]
	};
	for (var c = 0; c < t.length; c++) try {
		f(t[c])
	} catch (e) {
		i || (i = e)
	}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
			return l
		}) : n && (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}({
	"dKqR": [function(require, module, exports) {
		"use strict";

		function t() {}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.WebGLMultisampleRenderTarget = Ye, exports.WebGLRenderTargetCube = Je, exports.WebGLRenderTarget = Xe, exports.WebGLRenderer = Zo, exports.FogExp2 = Qo, exports.Fog = Ko, exports.Scene = $o, exports.Sprite = ns, exports.LOD = is, exports.SkinnedMesh = as, exports.Skeleton = os, exports.Bone = ss, exports.Mesh = ta, exports.LineSegments = ls, exports.LineLoop = us, exports.Line = hs, exports.Points = ds, exports.Group = Go, exports.VideoTexture = fs, exports.DataTexture = Ze, exports.DataTexture3D = da, exports.CompressedTexture = ms, exports.CubeTexture = pa, exports.CanvasTexture = gs, exports.DepthTexture = vs, exports.Texture = We, exports.AnimationLoader = gh, exports.CompressedTextureLoader = vh, exports.DataTextureLoader = yh, exports.CubeTextureLoader = bh, exports.TextureLoader = wh, exports.ObjectLoader = dl, exports.MaterialLoader = hl, exports.BufferGeometryLoader = ul, exports.LoadingManager = ph, exports.ImageLoader = xh, exports.ImageBitmapLoader = yl, exports.FontLoader = Ml, exports.FileLoader = mh, exports.Loader = Sl, exports.AudioLoader = Tl, exports.SpotLightShadow = el, exports.SpotLight = rl, exports.PointLight = nl, exports.RectAreaLight = cl, exports.HemisphereLight = $h, exports.DirectionalLightShadow = al, exports.DirectionalLight = ol, exports.AmbientLight = sl, exports.LightShadow = tl, exports.Light = Kh, exports.StereoCamera = Al, exports.PerspectiveCamera = Vo, exports.OrthographicCamera = il, exports.CubeCamera = Ll, exports.ArrayCamera = ko, exports.Camera = Ho, exports.AudioListener = Cl, exports.PositionalAudio = Ol, exports.AudioAnalyser = Il, exports.Audio = Pl, exports.VectorKeyframeTrack = sh, exports.StringKeyframeTrack = oh, exports.QuaternionKeyframeTrack = ah, exports.NumberKeyframeTrack = nh, exports.ColorKeyframeTrack = rh, exports.BooleanKeyframeTrack = eh, exports.PropertyMixer = Dl, exports.PropertyBinding = Ul, exports.KeyframeTrack = th, exports.AnimationObjectGroup = Gl, exports.AnimationMixer = Vl, exports.AnimationClip = ch, exports.Uniform = kl, exports.InstancedBufferGeometry = jl, exports.BufferGeometry = ki, exports.Geometry = Ri, exports.InterleavedBufferAttribute = es, exports.InstancedInterleavedBuffer = Wl, exports.InterleavedBuffer = ts, exports.InstancedBufferAttribute = ql, exports.Face3 = Mi, exports.Object3D = Ai, exports.Raycaster = Xl, exports.Layers = Ei, exports.EventDispatcher = t, exports.Clock = Rl, exports.QuaternionLinearInterpolant = ih, exports.LinearInterpolant = Kc, exports.DiscreteInterpolant = $c, exports.CubicInterpolant = Qc, exports.Interpolant = Zc, exports.Triangle = Ki, exports.Spherical = Zl, exports.Cylindrical = Ql, exports.Plane = $e, exports.Frustum = tr, exports.Sphere = Ke, exports.Ray = Qi, exports.Matrix4 = Ue, exports.Matrix3 = Ve, exports.Box3 = Qe, exports.Box2 = Kl, exports.Line3 = $l, exports.Euler = Si, exports.Vector4 = qe, exports.Vector3 = He, exports.Vector2 = Fe, exports.Quaternion = Ge, exports.Color = yi, exports.ImmediateRenderObject = tu, exports.VertexNormalsHelper = eu, exports.SpotLightHelper = ru, exports.SkeletonHelper = iu, exports.PointLightHelper = au, exports.RectAreaLightHelper = ou, exports.HemisphereLightHelper = su, exports.GridHelper = cu, exports.PolarGridHelper = hu, exports.FaceNormalsHelper = lu, exports.DirectionalLightHelper = uu, exports.CameraHelper = pu, exports.BoxHelper = du, exports.Box3Helper = fu, exports.PlaneHelper = mu, exports.ArrowHelper = gu, exports.AxesHelper = vu, exports.Shape = Qh, exports.Path = Zh, exports.ShapePath = xl, exports.Font = bl, exports.CurvePath = Jh, exports.Curve = _h, exports.WebGLUtils = Uo, exports.WireframeGeometry = ys, exports.ParametricGeometry = xs, exports.ParametricBufferGeometry = bs, exports.TetrahedronGeometry = Ms, exports.TetrahedronBufferGeometry = Ss, exports.OctahedronGeometry = Es, exports.OctahedronBufferGeometry = Ts, exports.IcosahedronGeometry = As, exports.IcosahedronBufferGeometry = Ls, exports.DodecahedronGeometry = Rs, exports.DodecahedronBufferGeometry = Cs, exports.PolyhedronGeometry = ws, exports.PolyhedronBufferGeometry = _s, exports.TubeGeometry = Ps, exports.TubeBufferGeometry = Os, exports.TorusKnotGeometry = Is, exports.TorusKnotBufferGeometry = Ds, exports.TorusGeometry = Bs, exports.TorusBufferGeometry = Ns, exports.TextGeometry = xc, exports.TextBufferGeometry = bc, exports.SphereGeometry = wc, exports.SphereBufferGeometry = _c, exports.RingGeometry = Mc, exports.RingBufferGeometry = Sc, exports.PlaneGeometry = qi, exports.PlaneBufferGeometry = Xi, exports.LatheGeometry = Ec, exports.LatheBufferGeometry = Tc, exports.ShapeGeometry = Ac, exports.ShapeBufferGeometry = Lc, exports.ExtrudeGeometry = mc, exports.ExtrudeBufferGeometry = gc, exports.EdgesGeometry = Cc, exports.ConeGeometry = Ic, exports.ConeBufferGeometry = Dc, exports.CylinderGeometry = Pc, exports.CylinderBufferGeometry = Oc, exports.CircleGeometry = Bc, exports.CircleBufferGeometry = Nc, exports.CubeGeometry = exports.BoxGeometry = ji, exports.BoxBufferGeometry = Wi, exports.ShadowMaterial = Fc, exports.SpriteMaterial = rs, exports.RawShaderMaterial = Uc, exports.ShaderMaterial = Zi, exports.PointsMaterial = ps, exports.MeshPhysicalMaterial = Hc, exports.MeshStandardMaterial = Gc, exports.MeshPhongMaterial = Vc, exports.MeshToonMaterial = kc, exports.MeshNormalMaterial = jc, exports.MeshLambertMaterial = Wc, exports.MeshDepthMaterial = Do, exports.MeshDistanceMaterial = Bo, exports.MeshBasicMaterial = $i, exports.MeshMatcapMaterial = qc, exports.LineDashedMaterial = Xc, exports.LineBasicMaterial = cs, exports.Material = Ji, exports.Float64BufferAttribute = Ui, exports.Float32BufferAttribute = Fi, exports.Uint32BufferAttribute = zi, exports.Int32BufferAttribute = Ni, exports.Uint16BufferAttribute = Bi, exports.Int16BufferAttribute = Di, exports.Uint8ClampedBufferAttribute = Ii, exports.Uint8BufferAttribute = Oi, exports.Int8BufferAttribute = Pi, exports.BufferAttribute = Ci, exports.ArcCurve = Sh, exports.CatmullRomCurve3 = Ch, exports.CubicBezierCurve = Hh, exports.CubicBezierCurve3 = Vh, exports.EllipseCurve = Mh, exports.LineCurve = kh, exports.LineCurve3 = jh, exports.QuadraticBezierCurve = Wh, exports.QuadraticBezierCurve3 = qh, exports.SplineCurve = Xh, exports.Face4 = yu, exports.MeshFaceMaterial = wu, exports.MultiMaterial = _u, exports.PointCloud = Mu, exports.Particle = Su, exports.ParticleSystem = Eu, exports.PointCloudMaterial = Tu, exports.ParticleBasicMaterial = Au, exports.ParticleSystemMaterial = Lu, exports.Vertex = Ru, exports.DynamicBufferAttribute = Cu, exports.Int8Attribute = Pu, exports.Uint8Attribute = Ou, exports.Uint8ClampedAttribute = Iu, exports.Int16Attribute = Du, exports.Uint16Attribute = Bu, exports.Int32Attribute = Nu, exports.Uint32Attribute = zu, exports.Float32Attribute = Fu, exports.Float64Attribute = Uu, exports.ClosedSplineCurve3 = Gu, exports.SplineCurve3 = Hu, exports.Spline = Vu, exports.AxisHelper = ku, exports.BoundingBoxHelper = ju, exports.EdgesHelper = Wu, exports.WireframeHelper = qu, exports.XHRLoader = Xu, exports.BinaryTextureLoader = Yu, exports.Projector = Zu, exports.CanvasRenderer = Qu, exports.JSONLoader = Ku, exports.LensFlare = tp, exports.AlphaFormat = exports.UnsignedInt248Type = exports.UnsignedShort565Type = exports.UnsignedShort5551Type = exports.UnsignedShort4444Type = exports.HalfFloatType = exports.FloatType = exports.UnsignedIntType = exports.IntType = exports.UnsignedShortType = exports.ShortType = exports.ByteType = exports.UnsignedByteType = exports.LinearMipMapLinearFilter = exports.LinearMipMapNearestFilter = exports.LinearFilter = exports.NearestMipMapLinearFilter = exports.NearestMipMapNearestFilter = exports.NearestFilter = exports.MirroredRepeatWrapping = exports.ClampToEdgeWrapping = exports.RepeatWrapping = exports.CubeUVRefractionMapping = exports.CubeUVReflectionMapping = exports.SphericalReflectionMapping = exports.EquirectangularRefractionMapping = exports.EquirectangularReflectionMapping = exports.CubeRefractionMapping = exports.CubeReflectionMapping = exports.UVMapping = exports.ACESFilmicToneMapping = exports.CineonToneMapping = exports.Uncharted2ToneMapping = exports.ReinhardToneMapping = exports.LinearToneMapping = exports.NoToneMapping = exports.AddOperation = exports.MixOperation = exports.MultiplyOperation = exports.NotEqualDepth = exports.GreaterDepth = exports.GreaterEqualDepth = exports.EqualDepth = exports.LessEqualDepth = exports.LessDepth = exports.AlwaysDepth = exports.NeverDepth = exports.SrcAlphaSaturateFactor = exports.OneMinusDstColorFactor = exports.DstColorFactor = exports.OneMinusDstAlphaFactor = exports.DstAlphaFactor = exports.OneMinusSrcAlphaFactor = exports.SrcAlphaFactor = exports.OneMinusSrcColorFactor = exports.SrcColorFactor = exports.OneFactor = exports.ZeroFactor = exports.MaxEquation = exports.MinEquation = exports.ReverseSubtractEquation = exports.SubtractEquation = exports.AddEquation = exports.CustomBlending = exports.MultiplyBlending = exports.SubtractiveBlending = exports.AdditiveBlending = exports.NormalBlending = exports.NoBlending = exports.VertexColors = exports.FaceColors = exports.NoColors = exports.SmoothShading = exports.FlatShading = exports.DoubleSide = exports.BackSide = exports.FrontSide = exports.PCFSoftShadowMap = exports.PCFShadowMap = exports.BasicShadowMap = exports.FrontFaceDirectionCCW = exports.FrontFaceDirectionCW = exports.CullFaceFrontBack = exports.CullFaceFront = exports.CullFaceBack = exports.CullFaceNone = exports.MOUSE = exports.REVISION = exports.ShapeUtils = exports.ImageUtils = exports.Math = exports.AnimationUtils = exports.AudioContext = exports.Cache = exports.LoaderUtils = exports.DefaultLoadingManager = exports.ShaderChunk = exports.UniformsUtils = exports.UniformsLib = exports.ShaderLib = void 0, exports.SceneUtils = exports.GeometryUtils = exports.LinePieces = exports.LineStrip = exports.ObjectSpaceNormalMap = exports.TangentSpaceNormalMap = exports.RGBADepthPacking = exports.BasicDepthPacking = exports.RGBDEncoding = exports.RGBM16Encoding = exports.RGBM7Encoding = exports.LogLuvEncoding = exports.RGBEEncoding = exports.GammaEncoding = exports.sRGBEncoding = exports.LinearEncoding = exports.TriangleFanDrawMode = exports.TriangleStripDrawMode = exports.TrianglesDrawMode = exports.WrapAroundEnding = exports.ZeroSlopeEnding = exports.ZeroCurvatureEnding = exports.InterpolateSmooth = exports.InterpolateLinear = exports.InterpolateDiscrete = exports.LoopPingPong = exports.LoopRepeat = exports.LoopOnce = exports.RGBA_ASTC_12x12_Format = exports.RGBA_ASTC_12x10_Format = exports.RGBA_ASTC_10x10_Format = exports.RGBA_ASTC_10x8_Format = exports.RGBA_ASTC_10x6_Format = exports.RGBA_ASTC_10x5_Format = exports.RGBA_ASTC_8x8_Format = exports.RGBA_ASTC_8x6_Format = exports.RGBA_ASTC_8x5_Format = exports.RGBA_ASTC_6x6_Format = exports.RGBA_ASTC_6x5_Format = exports.RGBA_ASTC_5x5_Format = exports.RGBA_ASTC_5x4_Format = exports.RGBA_ASTC_4x4_Format = exports.RGB_ETC1_Format = exports.RGBA_PVRTC_2BPPV1_Format = exports.RGBA_PVRTC_4BPPV1_Format = exports.RGB_PVRTC_2BPPV1_Format = exports.RGB_PVRTC_4BPPV1_Format = exports.RGBA_S3TC_DXT5_Format = exports.RGBA_S3TC_DXT3_Format = exports.RGBA_S3TC_DXT1_Format = exports.RGB_S3TC_DXT1_Format = exports.RedFormat = exports.DepthStencilFormat = exports.DepthFormat = exports.RGBEFormat = exports.LuminanceAlphaFormat = exports.LuminanceFormat = exports.RGBAFormat = exports.RGBFormat = void 0, void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
			return "number" == typeof t && isFinite(t) && Math.floor(t) === t
		}), void 0 === Math.sign && (Math.sign = function(t) {
			return t < 0 ? -1 : t > 0 ? 1 : +t
		}), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
			get: function() {
				return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
			}
		}), void 0 === Object.assign && (Object.assign = function(t) {
			if (null == t) throw new TypeError("Cannot convert undefined or null to object");
			for (var e = Object(t), r = 1; r < arguments.length; r++) {
				var n = arguments[r];
				if (null != n)
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		}), Object.assign(t.prototype, {
			addEventListener: function(t, e) {
				void 0 === this._listeners && (this._listeners = {});
				var r = this._listeners;
				void 0 === r[t] && (r[t] = []), -1 === r[t].indexOf(e) && r[t].push(e)
			},
			hasEventListener: function(t, e) {
				if (void 0 === this._listeners) return !1;
				var r = this._listeners;
				return void 0 !== r[t] && -1 !== r[t].indexOf(e)
			},
			removeEventListener: function(t, e) {
				if (void 0 !== this._listeners) {
					var r = this._listeners[t];
					if (void 0 !== r) {
						var n = r.indexOf(e); - 1 !== n && r.splice(n, 1)
					}
				}
			},
			dispatchEvent: function(t) {
				if (void 0 !== this._listeners) {
					var e = this._listeners[t.type];
					if (void 0 !== e) {
						t.target = this;
						for (var r = e.slice(0), n = 0, i = r.length; n < i; n++) r[n].call(this, t)
					}
				}
			}
		});
		var e = "101";
		exports.REVISION = e;
		var r = {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		};
		exports.MOUSE = r;
		var n = 0;
		exports.CullFaceNone = n;
		var i = 1;
		exports.CullFaceBack = i;
		var a = 2;
		exports.CullFaceFront = a;
		var o = 3;
		exports.CullFaceFrontBack = o;
		var s = 0;
		exports.FrontFaceDirectionCW = s;
		var c = 1;
		exports.FrontFaceDirectionCCW = c;
		var h = 0;
		exports.BasicShadowMap = h;
		var l = 1;
		exports.PCFShadowMap = l;
		var u = 2;
		exports.PCFSoftShadowMap = u;
		var p = 0;
		exports.FrontSide = p;
		var d = 1;
		exports.BackSide = d;
		var f = 2;
		exports.DoubleSide = f;
		var m = 1;
		exports.FlatShading = m;
		var g = 2;
		exports.SmoothShading = g;
		var v = 0;
		exports.NoColors = v;
		var y = 1;
		exports.FaceColors = y;
		var x = 2;
		exports.VertexColors = x;
		var b = 0;
		exports.NoBlending = b;
		var w = 1;
		exports.NormalBlending = w;
		var _ = 2;
		exports.AdditiveBlending = _;
		var M = 3;
		exports.SubtractiveBlending = M;
		var S = 4;
		exports.MultiplyBlending = S;
		var E = 5;
		exports.CustomBlending = E;
		var T = 100;
		exports.AddEquation = T;
		var A = 101;
		exports.SubtractEquation = A;
		var L = 102;
		exports.ReverseSubtractEquation = L;
		var R = 103;
		exports.MinEquation = R;
		var C = 104;
		exports.MaxEquation = C;
		var P = 200;
		exports.ZeroFactor = P;
		var O = 201;
		exports.OneFactor = O;
		var I = 202;
		exports.SrcColorFactor = I;
		var D = 203;
		exports.OneMinusSrcColorFactor = D;
		var B = 204;
		exports.SrcAlphaFactor = B;
		var N = 205;
		exports.OneMinusSrcAlphaFactor = N;
		var z = 206;
		exports.DstAlphaFactor = z;
		var F = 207;
		exports.OneMinusDstAlphaFactor = F;
		var U = 208;
		exports.DstColorFactor = U;
		var G = 209;
		exports.OneMinusDstColorFactor = G;
		var H = 210;
		exports.SrcAlphaSaturateFactor = H;
		var V = 0;
		exports.NeverDepth = V;
		var k = 1;
		exports.AlwaysDepth = k;
		var j = 2;
		exports.LessDepth = j;
		var W = 3;
		exports.LessEqualDepth = W;
		var q = 4;
		exports.EqualDepth = q;
		var X = 5;
		exports.GreaterEqualDepth = X;
		var Y = 6;
		exports.GreaterDepth = Y;
		var J = 7;
		exports.NotEqualDepth = J;
		var Z = 0;
		exports.MultiplyOperation = Z;
		var Q = 1;
		exports.MixOperation = Q;
		var K = 2;
		exports.AddOperation = K;
		var $ = 0;
		exports.NoToneMapping = $;
		var tt = 1;
		exports.LinearToneMapping = tt;
		var et = 2;
		exports.ReinhardToneMapping = et;
		var rt = 3;
		exports.Uncharted2ToneMapping = rt;
		var nt = 4;
		exports.CineonToneMapping = nt;
		var it = 5;
		exports.ACESFilmicToneMapping = it;
		var at = 300;
		exports.UVMapping = at;
		var ot = 301;
		exports.CubeReflectionMapping = ot;
		var st = 302;
		exports.CubeRefractionMapping = st;
		var ct = 303;
		exports.EquirectangularReflectionMapping = ct;
		var ht = 304;
		exports.EquirectangularRefractionMapping = ht;
		var lt = 305;
		exports.SphericalReflectionMapping = lt;
		var ut = 306;
		exports.CubeUVReflectionMapping = ut;
		var pt = 307;
		exports.CubeUVRefractionMapping = pt;
		var dt = 1e3;
		exports.RepeatWrapping = dt;
		var ft = 1001;
		exports.ClampToEdgeWrapping = ft;
		var mt = 1002;
		exports.MirroredRepeatWrapping = mt;
		var gt = 1003;
		exports.NearestFilter = gt;
		var vt = 1004;
		exports.NearestMipMapNearestFilter = vt;
		var yt = 1005;
		exports.NearestMipMapLinearFilter = yt;
		var xt = 1006;
		exports.LinearFilter = xt;
		var bt = 1007;
		exports.LinearMipMapNearestFilter = bt;
		var wt = 1008;
		exports.LinearMipMapLinearFilter = wt;
		var _t = 1009;
		exports.UnsignedByteType = _t;
		var Mt = 1010;
		exports.ByteType = Mt;
		var St = 1011;
		exports.ShortType = St;
		var Et = 1012;
		exports.UnsignedShortType = Et;
		var Tt = 1013;
		exports.IntType = Tt;
		var At = 1014;
		exports.UnsignedIntType = At;
		var Lt = 1015;
		exports.FloatType = Lt;
		var Rt = 1016;
		exports.HalfFloatType = Rt;
		var Ct = 1017;
		exports.UnsignedShort4444Type = Ct;
		var Pt = 1018;
		exports.UnsignedShort5551Type = Pt;
		var Ot = 1019;
		exports.UnsignedShort565Type = Ot;
		var It = 1020;
		exports.UnsignedInt248Type = It;
		var Dt = 1021;
		exports.AlphaFormat = Dt;
		var Bt = 1022;
		exports.RGBFormat = Bt;
		var Nt = 1023;
		exports.RGBAFormat = Nt;
		var zt = 1024;
		exports.LuminanceFormat = zt;
		var Ft = 1025;
		exports.LuminanceAlphaFormat = Ft;
		var Ut = Nt;
		exports.RGBEFormat = Ut;
		var Gt = 1026;
		exports.DepthFormat = Gt;
		var Ht = 1027;
		exports.DepthStencilFormat = Ht;
		var Vt = 1028;
		exports.RedFormat = Vt;
		var kt = 33776;
		exports.RGB_S3TC_DXT1_Format = kt;
		var jt = 33777;
		exports.RGBA_S3TC_DXT1_Format = jt;
		var Wt = 33778;
		exports.RGBA_S3TC_DXT3_Format = Wt;
		var qt = 33779;
		exports.RGBA_S3TC_DXT5_Format = qt;
		var Xt = 35840;
		exports.RGB_PVRTC_4BPPV1_Format = Xt;
		var Yt = 35841;
		exports.RGB_PVRTC_2BPPV1_Format = Yt;
		var Jt = 35842;
		exports.RGBA_PVRTC_4BPPV1_Format = Jt;
		var Zt = 35843;
		exports.RGBA_PVRTC_2BPPV1_Format = Zt;
		var Qt = 36196;
		exports.RGB_ETC1_Format = Qt;
		var Kt = 37808;
		exports.RGBA_ASTC_4x4_Format = Kt;
		var $t = 37809;
		exports.RGBA_ASTC_5x4_Format = $t;
		var te = 37810;
		exports.RGBA_ASTC_5x5_Format = te;
		var ee = 37811;
		exports.RGBA_ASTC_6x5_Format = ee;
		var re = 37812;
		exports.RGBA_ASTC_6x6_Format = re;
		var ne = 37813;
		exports.RGBA_ASTC_8x5_Format = ne;
		var ie = 37814;
		exports.RGBA_ASTC_8x6_Format = ie;
		var ae = 37815;
		exports.RGBA_ASTC_8x8_Format = ae;
		var oe = 37816;
		exports.RGBA_ASTC_10x5_Format = oe;
		var se = 37817;
		exports.RGBA_ASTC_10x6_Format = se;
		var ce = 37818;
		exports.RGBA_ASTC_10x8_Format = ce;
		var he = 37819;
		exports.RGBA_ASTC_10x10_Format = he;
		var le = 37820;
		exports.RGBA_ASTC_12x10_Format = le;
		var ue = 37821;
		exports.RGBA_ASTC_12x12_Format = ue;
		var pe = 2200;
		exports.LoopOnce = pe;
		var de = 2201;
		exports.LoopRepeat = de;
		var fe = 2202;
		exports.LoopPingPong = fe;
		var me = 2300;
		exports.InterpolateDiscrete = me;
		var ge = 2301;
		exports.InterpolateLinear = ge;
		var ve = 2302;
		exports.InterpolateSmooth = ve;
		var ye = 2400;
		exports.ZeroCurvatureEnding = ye;
		var xe = 2401;
		exports.ZeroSlopeEnding = xe;
		var be = 2402;
		exports.WrapAroundEnding = be;
		var we = 0;
		exports.TrianglesDrawMode = we;
		var _e = 1;
		exports.TriangleStripDrawMode = _e;
		var Me = 2;
		exports.TriangleFanDrawMode = Me;
		var Se = 3e3;
		exports.LinearEncoding = Se;
		var Ee = 3001;
		exports.sRGBEncoding = Ee;
		var Te = 3007;
		exports.GammaEncoding = Te;
		var Ae = 3002;
		exports.RGBEEncoding = Ae;
		var Le = 3003;
		exports.LogLuvEncoding = Le;
		var Re = 3004;
		exports.RGBM7Encoding = Re;
		var Ce = 3005;
		exports.RGBM16Encoding = Ce;
		var Pe = 3006;
		exports.RGBDEncoding = Pe;
		var Oe = 3200;
		exports.BasicDepthPacking = Oe;
		var Ie = 3201;
		exports.RGBADepthPacking = Ie;
		var De = 0;
		exports.TangentSpaceNormalMap = De;
		var Be = 1;
		exports.ObjectSpaceNormalMap = Be;
		var Ne, ze = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function() {
				for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
				return function() {
					var e = 4294967295 * Math.random() | 0,
						r = 4294967295 * Math.random() | 0,
						n = 4294967295 * Math.random() | 0,
						i = 4294967295 * Math.random() | 0;
					return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & r] + t[r >> 8 & 255] + "-" + t[r >> 16 & 15 | 64] + t[r >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255]).toUpperCase()
				}
			}(),
			clamp: function(t, e, r) {
				return Math.max(e, Math.min(r, t))
			},
			euclideanModulo: function(t, e) {
				return (t % e + e) % e
			},
			mapLinear: function(t, e, r, n, i) {
				return n + (t - e) * (i - n) / (r - e)
			},
			lerp: function(t, e, r) {
				return (1 - r) * t + r * e
			},
			smoothstep: function(t, e, r) {
				return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e)) * t * (3 - 2 * t)
			},
			smootherstep: function(t, e, r) {
				return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e)) * t * t * (t * (6 * t - 15) + 10)
			},
			randInt: function(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			},
			randFloat: function(t, e) {
				return t + Math.random() * (e - t)
			},
			randFloatSpread: function(t) {
				return t * (.5 - Math.random())
			},
			degToRad: function(t) {
				return t * ze.DEG2RAD
			},
			radToDeg: function(t) {
				return t * ze.RAD2DEG
			},
			isPowerOfTwo: function(t) {
				return 0 == (t & t - 1) && 0 !== t
			},
			ceilPowerOfTwo: function(t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
			},
			floorPowerOfTwo: function(t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
			}
		};

		function Fe(t, e) {
			this.x = t || 0, this.y = e || 0
		}

		function Ue() {
			this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
		}

		function Ge(t, e, r, n) {
			this._x = t || 0, this._y = e || 0, this._z = r || 0, this._w = void 0 !== n ? n : 1
		}

		function He(t, e, r) {
			this.x = t || 0, this.y = e || 0, this.z = r || 0
		}

		function Ve() {
			this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
		}
		exports.Math = ze, Object.defineProperties(Fe.prototype, {
			width: {
				get: function() {
					return this.x
				},
				set: function(t) {
					this.x = t
				}
			},
			height: {
				get: function() {
					return this.y
				},
				set: function(t) {
					this.y = t
				}
			}
		}), Object.assign(Fe.prototype, {
			isVector2: !0,
			set: function(t, e) {
				return this.x = t, this.y = e, this
			},
			setScalar: function(t) {
				return this.x = t, this.y = t, this
			},
			setX: function(t) {
				return this.x = t, this
			},
			setY: function(t) {
				return this.y = t, this
			},
			setComponent: function(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			},
			getComponent: function(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					default:
						throw new Error("index is out of range: " + t)
				}
			},
			clone: function() {
				return new this.constructor(this.x, this.y)
			},
			copy: function(t) {
				return this.x = t.x, this.y = t.y, this
			},
			add: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
			},
			addScalar: function(t) {
				return this.x += t, this.y += t, this
			},
			addVectors: function(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this
			},
			addScaledVector: function(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this
			},
			sub: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
			},
			subScalar: function(t) {
				return this.x -= t, this.y -= t, this
			},
			subVectors: function(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this
			},
			multiply: function(t) {
				return this.x *= t.x, this.y *= t.y, this
			},
			multiplyScalar: function(t) {
				return this.x *= t, this.y *= t, this
			},
			divide: function(t) {
				return this.x /= t.x, this.y /= t.y, this
			},
			divideScalar: function(t) {
				return this.multiplyScalar(1 / t)
			},
			applyMatrix3: function(t) {
				var e = this.x,
					r = this.y,
					n = t.elements;
				return this.x = n[0] * e + n[3] * r + n[6], this.y = n[1] * e + n[4] * r + n[7], this
			},
			min: function(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
			},
			max: function(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
			},
			clamp: function(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
			},
			clampScalar: function() {
				var t = new Fe,
					e = new Fe;
				return function(r, n) {
					return t.set(r, r), e.set(n, n), this.clamp(t, e)
				}
			}(),
			clampLength: function(t, e) {
				var r = this.length();
				return this.divideScalar(r || 1).multiplyScalar(Math.max(t, Math.min(e, r)))
			},
			floor: function() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
			},
			ceil: function() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
			},
			round: function() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this
			},
			roundToZero: function() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
			},
			negate: function() {
				return this.x = -this.x, this.y = -this.y, this
			},
			dot: function(t) {
				return this.x * t.x + this.y * t.y
			},
			cross: function(t) {
				return this.x * t.y - this.y * t.x
			},
			lengthSq: function() {
				return this.x * this.x + this.y * this.y
			},
			length: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y)
			},
			manhattanLength: function() {
				return Math.abs(this.x) + Math.abs(this.y)
			},
			normalize: function() {
				return this.divideScalar(this.length() || 1)
			},
			angle: function() {
				var t = Math.atan2(this.y, this.x);
				return t < 0 && (t += 2 * Math.PI), t
			},
			distanceTo: function(t) {
				return Math.sqrt(this.distanceToSquared(t))
			},
			distanceToSquared: function(t) {
				var e = this.x - t.x,
					r = this.y - t.y;
				return e * e + r * r
			},
			manhattanDistanceTo: function(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
			},
			setLength: function(t) {
				return this.normalize().multiplyScalar(t)
			},
			lerp: function(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
			},
			lerpVectors: function(t, e, r) {
				return this.subVectors(e, t).multiplyScalar(r).add(t)
			},
			equals: function(t) {
				return t.x === this.x && t.y === this.y
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
			},
			fromBufferAttribute: function(t, e, r) {
				return void 0 !== r && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
			},
			rotateAround: function(t, e) {
				var r = Math.cos(e),
					n = Math.sin(e),
					i = this.x - t.x,
					a = this.y - t.y;
				return this.x = i * r - a * n + t.x, this.y = i * n + a * r + t.y, this
			}
		}), Object.assign(Ue.prototype, {
			isMatrix4: !0,
			set: function(t, e, r, n, i, a, o, s, c, h, l, u, p, d, f, m) {
				var g = this.elements;
				return g[0] = t, g[4] = e, g[8] = r, g[12] = n, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
			},
			identity: function() {
				return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
			},
			clone: function() {
				return (new Ue).fromArray(this.elements)
			},
			copy: function(t) {
				var e = this.elements,
					r = t.elements;
				return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15], this
			},
			copyPosition: function(t) {
				var e = this.elements,
					r = t.elements;
				return e[12] = r[12], e[13] = r[13], e[14] = r[14], this
			},
			extractBasis: function(t, e, r) {
				return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), r.setFromMatrixColumn(this, 2), this
			},
			makeBasis: function(t, e, r) {
				return this.set(t.x, e.x, r.x, 0, t.y, e.y, r.y, 0, t.z, e.z, r.z, 0, 0, 0, 0, 1), this
			},
			extractRotation: function() {
				var t = new He;
				return function(e) {
					var r = this.elements,
						n = e.elements,
						i = 1 / t.setFromMatrixColumn(e, 0).length(),
						a = 1 / t.setFromMatrixColumn(e, 1).length(),
						o = 1 / t.setFromMatrixColumn(e, 2).length();
					return r[0] = n[0] * i, r[1] = n[1] * i, r[2] = n[2] * i, r[3] = 0, r[4] = n[4] * a, r[5] = n[5] * a, r[6] = n[6] * a, r[7] = 0, r[8] = n[8] * o, r[9] = n[9] * o, r[10] = n[10] * o, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, this
				}
			}(),
			makeRotationFromEuler: function(t) {
				t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
				var e = this.elements,
					r = t.x,
					n = t.y,
					i = t.z,
					a = Math.cos(r),
					o = Math.sin(r),
					s = Math.cos(n),
					c = Math.sin(n),
					h = Math.cos(i),
					l = Math.sin(i);
				if ("XYZ" === t.order) {
					var u = a * h,
						p = a * l,
						d = o * h,
						f = o * l;
					e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
				} else if ("YXZ" === t.order) {
					var m = s * h,
						g = s * l,
						v = c * h,
						y = c * l;
					e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
				} else if ("ZXY" === t.order) {
					m = s * h, g = s * l, v = c * h, y = c * l;
					e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
				} else if ("ZYX" === t.order) {
					u = a * h, p = a * l, d = o * h, f = o * l;
					e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
				} else if ("YZX" === t.order) {
					var x = a * s,
						b = a * c,
						w = o * s,
						_ = o * c;
					e[0] = s * h, e[4] = _ - x * l, e[8] = w * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = b * l + w, e[10] = x - _ * l
				} else if ("XZY" === t.order) {
					x = a * s, b = a * c, w = o * s, _ = o * c;
					e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + _, e[5] = a * h, e[9] = b * l - w, e[2] = w * l - b, e[6] = o * h, e[10] = _ * l + x
				}
				return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
			},
			makeRotationFromQuaternion: function() {
				var t = new He(0, 0, 0),
					e = new He(1, 1, 1);
				return function(r) {
					return this.compose(t, r, e)
				}
			}(),
			lookAt: function() {
				var t = new He,
					e = new He,
					r = new He;
				return function(n, i, a) {
					var o = this.elements;
					return r.subVectors(n, i), 0 === r.lengthSq() && (r.z = 1), r.normalize(), t.crossVectors(a, r), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? r.x += 1e-4 : r.z += 1e-4, r.normalize(), t.crossVectors(a, r)), t.normalize(), e.crossVectors(r, t), o[0] = t.x, o[4] = e.x, o[8] = r.x, o[1] = t.y, o[5] = e.y, o[9] = r.y, o[2] = t.z, o[6] = e.z, o[10] = r.z, this
				}
			}(),
			multiply: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
			},
			premultiply: function(t) {
				return this.multiplyMatrices(t, this)
			},
			multiplyMatrices: function(t, e) {
				var r = t.elements,
					n = e.elements,
					i = this.elements,
					a = r[0],
					o = r[4],
					s = r[8],
					c = r[12],
					h = r[1],
					l = r[5],
					u = r[9],
					p = r[13],
					d = r[2],
					f = r[6],
					m = r[10],
					g = r[14],
					v = r[3],
					y = r[7],
					x = r[11],
					b = r[15],
					w = n[0],
					_ = n[4],
					M = n[8],
					S = n[12],
					E = n[1],
					T = n[5],
					A = n[9],
					L = n[13],
					R = n[2],
					C = n[6],
					P = n[10],
					O = n[14],
					I = n[3],
					D = n[7],
					B = n[11],
					N = n[15];
				return i[0] = a * w + o * E + s * R + c * I, i[4] = a * _ + o * T + s * C + c * D, i[8] = a * M + o * A + s * P + c * B, i[12] = a * S + o * L + s * O + c * N, i[1] = h * w + l * E + u * R + p * I, i[5] = h * _ + l * T + u * C + p * D, i[9] = h * M + l * A + u * P + p * B, i[13] = h * S + l * L + u * O + p * N, i[2] = d * w + f * E + m * R + g * I, i[6] = d * _ + f * T + m * C + g * D, i[10] = d * M + f * A + m * P + g * B, i[14] = d * S + f * L + m * O + g * N, i[3] = v * w + y * E + x * R + b * I, i[7] = v * _ + y * T + x * C + b * D, i[11] = v * M + y * A + x * P + b * B, i[15] = v * S + y * L + x * O + b * N, this
			},
			multiplyScalar: function(t) {
				var e = this.elements;
				return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
			},
			applyToBufferAttribute: function() {
				var t = new He;
				return function(e) {
					for (var r = 0, n = e.count; r < n; r++) t.x = e.getX(r), t.y = e.getY(r), t.z = e.getZ(r), t.applyMatrix4(this), e.setXYZ(r, t.x, t.y, t.z);
					return e
				}
			}(),
			determinant: function() {
				var t = this.elements,
					e = t[0],
					r = t[4],
					n = t[8],
					i = t[12],
					a = t[1],
					o = t[5],
					s = t[9],
					c = t[13],
					h = t[2],
					l = t[6],
					u = t[10],
					p = t[14];
				return t[3] * (+i * s * l - n * c * l - i * o * u + r * c * u + n * o * p - r * s * p) + t[7] * (+e * s * p - e * c * u + i * a * u - n * a * p + n * c * h - i * s * h) + t[11] * (+e * c * l - e * o * p - i * a * l + r * a * p + i * o * h - r * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - r * a * u + r * s * h)
			},
			transpose: function() {
				var t, e = this.elements;
				return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
			},
			setPosition: function(t) {
				var e = this.elements;
				return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
			},
			getInverse: function(t, e) {
				var r = this.elements,
					n = t.elements,
					i = n[0],
					a = n[1],
					o = n[2],
					s = n[3],
					c = n[4],
					h = n[5],
					l = n[6],
					u = n[7],
					p = n[8],
					d = n[9],
					f = n[10],
					m = n[11],
					g = n[12],
					v = n[13],
					y = n[14],
					x = n[15],
					b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x,
					w = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x,
					_ = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x,
					M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y,
					S = i * b + a * w + o * _ + s * M;
				if (0 === S) {
					var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
					if (!0 === e) throw new Error(E);
					return console.warn(E), this.identity()
				}
				var T = 1 / S;
				return r[0] = b * T, r[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * T, r[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * T, r[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * T, r[4] = w * T, r[5] = (p * y * s - g * f * s + g * o * m - i * y * m - p * o * x + i * f * x) * T, r[6] = (g * l * s - c * y * s - g * o * u + i * y * u + c * o * x - i * l * x) * T, r[7] = (c * f * s - p * l * s + p * o * u - i * f * u - c * o * m + i * l * m) * T, r[8] = _ * T, r[9] = (g * d * s - p * v * s - g * a * m + i * v * m + p * a * x - i * d * x) * T, r[10] = (c * v * s - g * h * s + g * a * u - i * v * u - c * a * x + i * h * x) * T, r[11] = (p * h * s - c * d * s - p * a * u + i * d * u + c * a * m - i * h * m) * T, r[12] = M * T, r[13] = (p * v * o - g * d * o + g * a * f - i * v * f - p * a * y + i * d * y) * T, r[14] = (g * h * o - c * v * o - g * a * l + i * v * l + c * a * y - i * h * y) * T, r[15] = (c * d * o - p * h * o + p * a * l - i * d * l - c * a * f + i * h * f) * T, this
			},
			scale: function(t) {
				var e = this.elements,
					r = t.x,
					n = t.y,
					i = t.z;
				return e[0] *= r, e[4] *= n, e[8] *= i, e[1] *= r, e[5] *= n, e[9] *= i, e[2] *= r, e[6] *= n, e[10] *= i, e[3] *= r, e[7] *= n, e[11] *= i, this
			},
			getMaxScaleOnAxis: function() {
				var t = this.elements,
					e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
					r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
					n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
				return Math.sqrt(Math.max(e, r, n))
			},
			makeTranslation: function(t, e, r) {
				return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1), this
			},
			makeRotationX: function(t) {
				var e = Math.cos(t),
					r = Math.sin(t);
				return this.set(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1), this
			},
			makeRotationY: function(t) {
				var e = Math.cos(t),
					r = Math.sin(t);
				return this.set(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1), this
			},
			makeRotationZ: function(t) {
				var e = Math.cos(t),
					r = Math.sin(t);
				return this.set(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
			},
			makeRotationAxis: function(t, e) {
				var r = Math.cos(e),
					n = Math.sin(e),
					i = 1 - r,
					a = t.x,
					o = t.y,
					s = t.z,
					c = i * a,
					h = i * o;
				return this.set(c * a + r, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + r, h * s - n * a, 0, c * s - n * o, h * s + n * a, i * s * s + r, 0, 0, 0, 0, 1), this
			},
			makeScale: function(t, e, r) {
				return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
			},
			makeShear: function(t, e, r) {
				return this.set(1, e, r, 0, t, 1, r, 0, t, e, 1, 0, 0, 0, 0, 1), this
			},
			compose: function(t, e, r) {
				var n = this.elements,
					i = e._x,
					a = e._y,
					o = e._z,
					s = e._w,
					c = i + i,
					h = a + a,
					l = o + o,
					u = i * c,
					p = i * h,
					d = i * l,
					f = a * h,
					m = a * l,
					g = o * l,
					v = s * c,
					y = s * h,
					x = s * l,
					b = r.x,
					w = r.y,
					_ = r.z;
				return n[0] = (1 - (f + g)) * b, n[1] = (p + x) * b, n[2] = (d - y) * b, n[3] = 0, n[4] = (p - x) * w, n[5] = (1 - (u + g)) * w, n[6] = (m + v) * w, n[7] = 0, n[8] = (d + y) * _, n[9] = (m - v) * _, n[10] = (1 - (u + f)) * _, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
			},
			decompose: function() {
				var t = new He,
					e = new Ue;
				return function(r, n, i) {
					var a = this.elements,
						o = t.set(a[0], a[1], a[2]).length(),
						s = t.set(a[4], a[5], a[6]).length(),
						c = t.set(a[8], a[9], a[10]).length();
					this.determinant() < 0 && (o = -o), r.x = a[12], r.y = a[13], r.z = a[14], e.copy(this);
					var h = 1 / o,
						l = 1 / s,
						u = 1 / c;
					return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= l, e.elements[5] *= l, e.elements[6] *= l, e.elements[8] *= u, e.elements[9] *= u, e.elements[10] *= u, n.setFromRotationMatrix(e), i.x = o, i.y = s, i.z = c, this
				}
			}(),
			makePerspective: function(t, e, r, n, i, a) {
				void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
				var o = this.elements,
					s = 2 * i / (e - t),
					c = 2 * i / (r - n),
					h = (e + t) / (e - t),
					l = (r + n) / (r - n),
					u = -(a + i) / (a - i),
					p = -2 * a * i / (a - i);
				return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
			},
			makeOrthographic: function(t, e, r, n, i, a) {
				var o = this.elements,
					s = 1 / (e - t),
					c = 1 / (r - n),
					h = 1 / (a - i),
					l = (e + t) * s,
					u = (r + n) * c,
					p = (a + i) * h;
				return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
			},
			equals: function(t) {
				for (var e = this.elements, r = t.elements, n = 0; n < 16; n++)
					if (e[n] !== r[n]) return !1;
				return !0
			},
			fromArray: function(t, e) {
				void 0 === e && (e = 0);
				for (var r = 0; r < 16; r++) this.elements[r] = t[r + e];
				return this
			},
			toArray: function(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				var r = this.elements;
				return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t[e + 9] = r[9], t[e + 10] = r[10], t[e + 11] = r[11], t[e + 12] = r[12], t[e + 13] = r[13], t[e + 14] = r[14], t[e + 15] = r[15], t
			}
		}), Object.assign(Ge, {
			slerp: function(t, e, r, n) {
				return r.copy(t).slerp(e, n)
			},
			slerpFlat: function(t, e, r, n, i, a, o) {
				var s = r[n + 0],
					c = r[n + 1],
					h = r[n + 2],
					l = r[n + 3],
					u = i[a + 0],
					p = i[a + 1],
					d = i[a + 2],
					f = i[a + 3];
				if (l !== f || s !== u || c !== p || h !== d) {
					var m = 1 - o,
						g = s * u + c * p + h * d + l * f,
						v = g >= 0 ? 1 : -1,
						y = 1 - g * g;
					if (y > Number.EPSILON) {
						var x = Math.sqrt(y),
							b = Math.atan2(x, g * v);
						m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
					}
					var w = o * v;
					if (s = s * m + u * w, c = c * m + p * w, h = h * m + d * w, l = l * m + f * w, m === 1 - o) {
						var _ = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
						s *= _, c *= _, h *= _, l *= _
					}
				}
				t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
			}
		}), Object.defineProperties(Ge.prototype, {
			x: {
				get: function() {
					return this._x
				},
				set: function(t) {
					this._x = t, this.onChangeCallback()
				}
			},
			y: {
				get: function() {
					return this._y
				},
				set: function(t) {
					this._y = t, this.onChangeCallback()
				}
			},
			z: {
				get: function() {
					return this._z
				},
				set: function(t) {
					this._z = t, this.onChangeCallback()
				}
			},
			w: {
				get: function() {
					return this._w
				},
				set: function(t) {
					this._w = t, this.onChangeCallback()
				}
			}
		}), Object.assign(Ge.prototype, {
			isQuaternion: !0,
			set: function(t, e, r, n) {
				return this._x = t, this._y = e, this._z = r, this._w = n, this.onChangeCallback(), this
			},
			clone: function() {
				return new this.constructor(this._x, this._y, this._z, this._w)
			},
			copy: function(t) {
				return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
			},
			setFromEuler: function(t, e) {
				if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
				var r = t._x,
					n = t._y,
					i = t._z,
					a = t.order,
					o = Math.cos,
					s = Math.sin,
					c = o(r / 2),
					h = o(n / 2),
					l = o(i / 2),
					u = s(r / 2),
					p = s(n / 2),
					d = s(i / 2);
				return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l + u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) : "XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), !1 !== e && this.onChangeCallback(), this
			},
			setFromAxisAngle: function(t, e) {
				var r = e / 2,
					n = Math.sin(r);
				return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(r), this.onChangeCallback(), this
			},
			setFromRotationMatrix: function(t) {
				var e, r = t.elements,
					n = r[0],
					i = r[4],
					a = r[8],
					o = r[1],
					s = r[5],
					c = r[9],
					h = r[2],
					l = r[6],
					u = r[10],
					p = n + s + u;
				return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - i) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (i + o) / e, this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (i + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - i) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = .25 * e), this.onChangeCallback(), this
			},
			setFromUnitVectors: function() {
				var t, e = new He;
				return function(r, n) {
					return void 0 === e && (e = new He), (t = r.dot(n) + 1) < 1e-6 ? (t = 0, Math.abs(r.x) > Math.abs(r.z) ? e.set(-r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
				}
			}(),
			angleTo: function(t) {
				return 2 * Math.acos(Math.abs(ze.clamp(this.dot(t), -1, 1)))
			},
			rotateTowards: function(t, e) {
				var r = this.angleTo(t);
				if (0 === r) return this;
				var n = Math.min(1, e / r);
				return this.slerp(t, n), this
			},
			inverse: function() {
				return this.conjugate()
			},
			conjugate: function() {
				return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
			},
			dot: function(t) {
				return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
			},
			lengthSq: function() {
				return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
			},
			length: function() {
				return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
			},
			normalize: function() {
				var t = this.length();
				return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
			},
			multiply: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
			},
			premultiply: function(t) {
				return this.multiplyQuaternions(t, this)
			},
			multiplyQuaternions: function(t, e) {
				var r = t._x,
					n = t._y,
					i = t._z,
					a = t._w,
					o = e._x,
					s = e._y,
					c = e._z,
					h = e._w;
				return this._x = r * h + a * o + n * c - i * s, this._y = n * h + a * s + i * o - r * c, this._z = i * h + a * c + r * s - n * o, this._w = a * h - r * o - n * s - i * c, this.onChangeCallback(), this
			},
			slerp: function(t, e) {
				if (0 === e) return this;
				if (1 === e) return this.copy(t);
				var r = this._x,
					n = this._y,
					i = this._z,
					a = this._w,
					o = a * t._w + r * t._x + n * t._y + i * t._z;
				if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = r, this._y = n, this._z = i, this;
				var s = 1 - o * o;
				if (s <= Number.EPSILON) {
					var c = 1 - e;
					return this._w = c * a + e * this._w, this._x = c * r + e * this._x, this._y = c * n + e * this._y, this._z = c * i + e * this._z, this.normalize()
				}
				var h = Math.sqrt(s),
					l = Math.atan2(h, o),
					u = Math.sin((1 - e) * l) / h,
					p = Math.sin(e * l) / h;
				return this._w = a * u + this._w * p, this._x = r * u + this._x * p, this._y = n * u + this._y * p, this._z = i * u + this._z * p, this.onChangeCallback(), this
			},
			equals: function(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
			},
			onChange: function(t) {
				return this.onChangeCallback = t, this
			},
			onChangeCallback: function() {}
		}), Object.assign(He.prototype, {
			isVector3: !0,
			set: function(t, e, r) {
				return this.x = t, this.y = e, this.z = r, this
			},
			setScalar: function(t) {
				return this.x = t, this.y = t, this.z = t, this
			},
			setX: function(t) {
				return this.x = t, this
			},
			setY: function(t) {
				return this.y = t, this
			},
			setZ: function(t) {
				return this.z = t, this
			},
			setComponent: function(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			},
			getComponent: function(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					default:
						throw new Error("index is out of range: " + t)
				}
			},
			clone: function() {
				return new this.constructor(this.x, this.y, this.z)
			},
			copy: function(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this
			},
			add: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
			},
			addScalar: function(t) {
				return this.x += t, this.y += t, this.z += t, this
			},
			addVectors: function(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
			},
			addScaledVector: function(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
			},
			sub: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
			},
			subScalar: function(t) {
				return this.x -= t, this.y -= t, this.z -= t, this
			},
			subVectors: function(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
			},
			multiply: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
			},
			multiplyScalar: function(t) {
				return this.x *= t, this.y *= t, this.z *= t, this
			},
			multiplyVectors: function(t, e) {
				return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
			},
			applyEuler: function() {
				var t = new Ge;
				return function(e) {
					return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
				}
			}(),
			applyAxisAngle: function() {
				var t = new Ge;
				return function(e, r) {
					return this.applyQuaternion(t.setFromAxisAngle(e, r))
				}
			}(),
			applyMatrix3: function(t) {
				var e = this.x,
					r = this.y,
					n = this.z,
					i = t.elements;
				return this.x = i[0] * e + i[3] * r + i[6] * n, this.y = i[1] * e + i[4] * r + i[7] * n, this.z = i[2] * e + i[5] * r + i[8] * n, this
			},
			applyMatrix4: function(t) {
				var e = this.x,
					r = this.y,
					n = this.z,
					i = t.elements,
					a = 1 / (i[3] * e + i[7] * r + i[11] * n + i[15]);
				return this.x = (i[0] * e + i[4] * r + i[8] * n + i[12]) * a, this.y = (i[1] * e + i[5] * r + i[9] * n + i[13]) * a, this.z = (i[2] * e + i[6] * r + i[10] * n + i[14]) * a, this
			},
			applyQuaternion: function(t) {
				var e = this.x,
					r = this.y,
					n = this.z,
					i = t.x,
					a = t.y,
					o = t.z,
					s = t.w,
					c = s * e + a * n - o * r,
					h = s * r + o * e - i * n,
					l = s * n + i * r - a * e,
					u = -i * e - a * r - o * n;
				return this.x = c * s + u * -i + h * -o - l * -a, this.y = h * s + u * -a + l * -i - c * -o, this.z = l * s + u * -o + c * -a - h * -i, this
			},
			project: function(t) {
				return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
			},
			unproject: function() {
				var t = new Ue;
				return function(e) {
					return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld)
				}
			}(),
			transformDirection: function(t) {
				var e = this.x,
					r = this.y,
					n = this.z,
					i = t.elements;
				return this.x = i[0] * e + i[4] * r + i[8] * n, this.y = i[1] * e + i[5] * r + i[9] * n, this.z = i[2] * e + i[6] * r + i[10] * n, this.normalize()
			},
			divide: function(t) {
				return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
			},
			divideScalar: function(t) {
				return this.multiplyScalar(1 / t)
			},
			min: function(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
			},
			max: function(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
			},
			clamp: function(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
			},
			clampScalar: function() {
				var t = new He,
					e = new He;
				return function(r, n) {
					return t.set(r, r, r), e.set(n, n, n), this.clamp(t, e)
				}
			}(),
			clampLength: function(t, e) {
				var r = this.length();
				return this.divideScalar(r || 1).multiplyScalar(Math.max(t, Math.min(e, r)))
			},
			floor: function() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
			},
			ceil: function() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
			},
			round: function() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
			},
			roundToZero: function() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
			},
			negate: function() {
				return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
			},
			dot: function(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z
			},
			lengthSq: function() {
				return this.x * this.x + this.y * this.y + this.z * this.z
			},
			length: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
			},
			manhattanLength: function() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
			},
			normalize: function() {
				return this.divideScalar(this.length() || 1)
			},
			setLength: function(t) {
				return this.normalize().multiplyScalar(t)
			},
			lerp: function(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
			},
			lerpVectors: function(t, e, r) {
				return this.subVectors(e, t).multiplyScalar(r).add(t)
			},
			cross: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
			},
			crossVectors: function(t, e) {
				var r = t.x,
					n = t.y,
					i = t.z,
					a = e.x,
					o = e.y,
					s = e.z;
				return this.x = n * s - i * o, this.y = i * a - r * s, this.z = r * o - n * a, this
			},
			projectOnVector: function(t) {
				var e = t.dot(this) / t.lengthSq();
				return this.copy(t).multiplyScalar(e)
			},
			projectOnPlane: function() {
				var t = new He;
				return function(e) {
					return t.copy(this).projectOnVector(e), this.sub(t)
				}
			}(),
			reflect: function() {
				var t = new He;
				return function(e) {
					return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
				}
			}(),
			angleTo: function(t) {
				var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
				return Math.acos(ze.clamp(e, -1, 1))
			},
			distanceTo: function(t) {
				return Math.sqrt(this.distanceToSquared(t))
			},
			distanceToSquared: function(t) {
				var e = this.x - t.x,
					r = this.y - t.y,
					n = this.z - t.z;
				return e * e + r * r + n * n
			},
			manhattanDistanceTo: function(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
			},
			setFromSpherical: function(t) {
				return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
			},
			setFromSphericalCoords: function(t, e, r) {
				var n = Math.sin(e) * t;
				return this.x = n * Math.sin(r), this.y = Math.cos(e) * t, this.z = n * Math.cos(r), this
			},
			setFromCylindrical: function(t) {
				return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
			},
			setFromCylindricalCoords: function(t, e, r) {
				return this.x = t * Math.sin(e), this.y = r, this.z = t * Math.cos(e), this
			},
			setFromMatrixPosition: function(t) {
				var e = t.elements;
				return this.x = e[12], this.y = e[13], this.z = e[14], this
			},
			setFromMatrixScale: function(t) {
				var e = this.setFromMatrixColumn(t, 0).length(),
					r = this.setFromMatrixColumn(t, 1).length(),
					n = this.setFromMatrixColumn(t, 2).length();
				return this.x = e, this.y = r, this.z = n, this
			},
			setFromMatrixColumn: function(t, e) {
				return this.fromArray(t.elements, 4 * e)
			},
			equals: function(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
			},
			fromBufferAttribute: function(t, e, r) {
				return void 0 !== r && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
			}
		}), Object.assign(Ve.prototype, {
			isMatrix3: !0,
			set: function(t, e, r, n, i, a, o, s, c) {
				var h = this.elements;
				return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = i, h[5] = s, h[6] = r, h[7] = a, h[8] = c, this
			},
			identity: function() {
				return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
			},
			clone: function() {
				return (new this.constructor).fromArray(this.elements)
			},
			copy: function(t) {
				var e = this.elements,
					r = t.elements;
				return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e[8] = r[8], this
			},
			setFromMatrix4: function(t) {
				var e = t.elements;
				return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
			},
			applyToBufferAttribute: function() {
				var t = new He;
				return function(e) {
					for (var r = 0, n = e.count; r < n; r++) t.x = e.getX(r), t.y = e.getY(r), t.z = e.getZ(r), t.applyMatrix3(this), e.setXYZ(r, t.x, t.y, t.z);
					return e
				}
			}(),
			multiply: function(t) {
				return this.multiplyMatrices(this, t)
			},
			premultiply: function(t) {
				return this.multiplyMatrices(t, this)
			},
			multiplyMatrices: function(t, e) {
				var r = t.elements,
					n = e.elements,
					i = this.elements,
					a = r[0],
					o = r[3],
					s = r[6],
					c = r[1],
					h = r[4],
					l = r[7],
					u = r[2],
					p = r[5],
					d = r[8],
					f = n[0],
					m = n[3],
					g = n[6],
					v = n[1],
					y = n[4],
					x = n[7],
					b = n[2],
					w = n[5],
					_ = n[8];
				return i[0] = a * f + o * v + s * b, i[3] = a * m + o * y + s * w, i[6] = a * g + o * x + s * _, i[1] = c * f + h * v + l * b, i[4] = c * m + h * y + l * w, i[7] = c * g + h * x + l * _, i[2] = u * f + p * v + d * b, i[5] = u * m + p * y + d * w, i[8] = u * g + p * x + d * _, this
			},
			multiplyScalar: function(t) {
				var e = this.elements;
				return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
			},
			determinant: function() {
				var t = this.elements,
					e = t[0],
					r = t[1],
					n = t[2],
					i = t[3],
					a = t[4],
					o = t[5],
					s = t[6],
					c = t[7],
					h = t[8];
				return e * a * h - e * o * c - r * i * h + r * o * s + n * i * c - n * a * s
			},
			getInverse: function(t, e) {
				t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
				var r = t.elements,
					n = this.elements,
					i = r[0],
					a = r[1],
					o = r[2],
					s = r[3],
					c = r[4],
					h = r[5],
					l = r[6],
					u = r[7],
					p = r[8],
					d = p * c - h * u,
					f = h * l - p * s,
					m = u * s - c * l,
					g = i * d + a * f + o * m;
				if (0 === g) {
					var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
					if (!0 === e) throw new Error(v);
					return console.warn(v), this.identity()
				}
				var y = 1 / g;
				return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y, n[4] = (p * i - o * l) * y, n[5] = (o * s - h * i) * y, n[6] = m * y, n[7] = (a * l - u * i) * y, n[8] = (c * i - a * s) * y, this
			},
			transpose: function() {
				var t, e = this.elements;
				return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
			},
			getNormalMatrix: function(t) {
				return this.setFromMatrix4(t).getInverse(this).transpose()
			},
			transposeIntoArray: function(t) {
				var e = this.elements;
				return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
			},
			setUvTransform: function(t, e, r, n, i, a, o) {
				var s = Math.cos(i),
					c = Math.sin(i);
				this.set(r * s, r * c, -r * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) + o + e, 0, 0, 1)
			},
			scale: function(t, e) {
				var r = this.elements;
				return r[0] *= t, r[3] *= t, r[6] *= t, r[1] *= e, r[4] *= e, r[7] *= e, this
			},
			rotate: function(t) {
				var e = Math.cos(t),
					r = Math.sin(t),
					n = this.elements,
					i = n[0],
					a = n[3],
					o = n[6],
					s = n[1],
					c = n[4],
					h = n[7];
				return n[0] = e * i + r * s, n[3] = e * a + r * c, n[6] = e * o + r * h, n[1] = -r * i + e * s, n[4] = -r * a + e * c, n[7] = -r * o + e * h, this
			},
			translate: function(t, e) {
				var r = this.elements;
				return r[0] += t * r[2], r[3] += t * r[5], r[6] += t * r[8], r[1] += e * r[2], r[4] += e * r[5], r[7] += e * r[8], this
			},
			equals: function(t) {
				for (var e = this.elements, r = t.elements, n = 0; n < 9; n++)
					if (e[n] !== r[n]) return !1;
				return !0
			},
			fromArray: function(t, e) {
				void 0 === e && (e = 0);
				for (var r = 0; r < 9; r++) this.elements[r] = t[r + e];
				return this
			},
			toArray: function(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				var r = this.elements;
				return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t
			}
		});
		var ke = {
			getDataURL: function(t) {
				var e;
				if ("undefined" == typeof HTMLCanvasElement) return t.src;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === Ne && (Ne = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), Ne.width = t.width, Ne.height = t.height;
					var r = Ne.getContext("2d");
					t instanceof ImageData ? r.putImageData(t, 0, 0) : r.drawImage(t, 0, 0, t.width, t.height), e = Ne
				}
				return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
			}
		};
		exports.ImageUtils = ke;
		var je = 0;

		function We(t, e, r, n, i, a, o, s, c, h) {
			Object.defineProperty(this, "id", {
				value: je++
			}), this.uuid = ze.generateUUID(), this.name = "", this.image = void 0 !== t ? t : We.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : We.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : ft, this.wrapT = void 0 !== n ? n : ft, this.magFilter = void 0 !== i ? i : xt, this.minFilter = void 0 !== a ? a : wt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Nt, this.type = void 0 !== s ? s : _t, this.offset = new Fe(0, 0), this.repeat = new Fe(1, 1), this.center = new Fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ve, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : Se, this.version = 0, this.onUpdate = null
		}

		function qe(t, e, r, n) {
			this.x = t || 0, this.y = e || 0, this.z = r || 0, this.w = void 0 !== n ? n : 1
		}

		function Xe(t, e, r) {
			this.width = t, this.height = e, this.scissor = new qe(0, 0, t, e), this.scissorTest = !1, this.viewport = new qe(0, 0, t, e), r = r || {}, this.texture = new We(void 0, void 0, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy, r.encoding), this.texture.generateMipmaps = void 0 !== r.generateMipmaps && r.generateMipmaps, this.texture.minFilter = void 0 !== r.minFilter ? r.minFilter : xt, this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer, this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer, this.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null
		}

		function Ye(t, e, r) {
			Xe.call(this, t, e, r), this.samples = 4
		}

		function Je(t, e, r) {
			Xe.call(this, t, e, r), this.activeCubeFace = 0, this.activeMipMapLevel = 0
		}

		function Ze(t, e, r, n, i, a, o, s, c, h, l, u) {
			We.call(this, null, a, o, s, c, h, n, i, l, u), this.image = {
				data: t,
				width: e,
				height: r
			}, this.magFilter = void 0 !== c ? c : gt, this.minFilter = void 0 !== h ? h : gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
		}

		function Qe(t, e) {
			this.min = void 0 !== t ? t : new He(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new He(-1 / 0, -1 / 0, -1 / 0)
		}

		function Ke(t, e) {
			this.center = void 0 !== t ? t : new He, this.radius = void 0 !== e ? e : 0
		}

		function $e(t, e) {
			this.normal = void 0 !== t ? t : new He(1, 0, 0), this.constant = void 0 !== e ? e : 0
		}

		function tr(t, e, r, n, i, a) {
			this.planes = [void 0 !== t ? t : new $e, void 0 !== e ? e : new $e, void 0 !== r ? r : new $e, void 0 !== n ? n : new $e, void 0 !== i ? i : new $e, void 0 !== a ? a : new $e]
		}
		We.DEFAULT_IMAGE = void 0, We.DEFAULT_MAPPING = at, We.prototype = Object.assign(Object.create(t.prototype), {
			constructor: We,
			isTexture: !0,
			updateMatrix: function() {
				this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
			},
			toJSON: function(t) {
				var e = void 0 === t || "string" == typeof t;
				if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
				var r = {
					metadata: {
						version: 4.5,
						type: "Texture",
						generator: "Texture.toJSON"
					},
					uuid: this.uuid,
					name: this.name,
					mapping: this.mapping,
					repeat: [this.repeat.x, this.repeat.y],
					offset: [this.offset.x, this.offset.y],
					center: [this.center.x, this.center.y],
					rotation: this.rotation,
					wrap: [this.wrapS, this.wrapT],
					format: this.format,
					type: this.type,
					encoding: this.encoding,
					minFilter: this.minFilter,
					magFilter: this.magFilter,
					anisotropy: this.anisotropy,
					flipY: this.flipY,
					premultiplyAlpha: this.premultiplyAlpha,
					unpackAlignment: this.unpackAlignment
				};
				if (void 0 !== this.image) {
					var n = this.image;
					if (void 0 === n.uuid && (n.uuid = ze.generateUUID()), !e && void 0 === t.images[n.uuid]) {
						var i;
						if (Array.isArray(n)) {
							i = [];
							for (var a = 0, o = n.length; a < o; a++) i.push(ke.getDataURL(n[a]))
						} else i = ke.getDataURL(n);
						t.images[n.uuid] = {
							uuid: n.uuid,
							url: i
						}
					}
					r.image = n.uuid
				}
				return e || (t.textures[this.uuid] = r), r
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			},
			transformUv: function(t) {
				if (this.mapping !== at) return t;
				if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
					case dt:
						t.x = t.x - Math.floor(t.x);
						break;
					case ft:
						t.x = t.x < 0 ? 0 : 1;
						break;
					case mt:
						1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
				}
				if (t.y < 0 || t.y > 1) switch (this.wrapT) {
					case dt:
						t.y = t.y - Math.floor(t.y);
						break;
					case ft:
						t.y = t.y < 0 ? 0 : 1;
						break;
					case mt:
						1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
				}
				return this.flipY && (t.y = 1 - t.y), t
			}
		}), Object.defineProperty(We.prototype, "needsUpdate", {
			set: function(t) {
				!0 === t && this.version++
			}
		}), Object.assign(qe.prototype, {
			isVector4: !0,
			set: function(t, e, r, n) {
				return this.x = t, this.y = e, this.z = r, this.w = n, this
			},
			setScalar: function(t) {
				return this.x = t, this.y = t, this.z = t, this.w = t, this
			},
			setX: function(t) {
				return this.x = t, this
			},
			setY: function(t) {
				return this.y = t, this
			},
			setZ: function(t) {
				return this.z = t, this
			},
			setW: function(t) {
				return this.w = t, this
			},
			setComponent: function(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			},
			getComponent: function(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error("index is out of range: " + t)
				}
			},
			clone: function() {
				return new this.constructor(this.x, this.y, this.z, this.w)
			},
			copy: function(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
			},
			add: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
			},
			addScalar: function(t) {
				return this.x += t, this.y += t, this.z += t, this.w += t, this
			},
			addVectors: function(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
			},
			addScaledVector: function(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
			},
			sub: function(t, e) {
				return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
			},
			subScalar: function(t) {
				return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
			},
			subVectors: function(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
			},
			multiplyScalar: function(t) {
				return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
			},
			applyMatrix4: function(t) {
				var e = this.x,
					r = this.y,
					n = this.z,
					i = this.w,
					a = t.elements;
				return this.x = a[0] * e + a[4] * r + a[8] * n + a[12] * i, this.y = a[1] * e + a[5] * r + a[9] * n + a[13] * i, this.z = a[2] * e + a[6] * r + a[10] * n + a[14] * i, this.w = a[3] * e + a[7] * r + a[11] * n + a[15] * i, this
			},
			divideScalar: function(t) {
				return this.multiplyScalar(1 / t)
			},
			setAxisAngleFromQuaternion: function(t) {
				this.w = 2 * Math.acos(t.w);
				var e = Math.sqrt(1 - t.w * t.w);
				return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
			},
			setAxisAngleFromRotationMatrix: function(t) {
				var e, r, n, i, a = t.elements,
					o = a[0],
					s = a[4],
					c = a[8],
					h = a[1],
					l = a[5],
					u = a[9],
					p = a[2],
					d = a[6],
					f = a[10];
				if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
					if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					var m = (o + 1) / 2,
						g = (l + 1) / 2,
						v = (f + 1) / 2,
						y = (s + h) / 4,
						x = (c + p) / 4,
						b = (u + d) / 4;
					return m > g && m > v ? m < .01 ? (r = 0, n = .707106781, i = .707106781) : (n = y / (r = Math.sqrt(m)), i = x / r) : g > v ? g < .01 ? (r = .707106781, n = 0, i = .707106781) : (r = y / (n = Math.sqrt(g)), i = b / n) : v < .01 ? (r = .707106781, n = .707106781, i = 0) : (r = x / (i = Math.sqrt(v)), n = b / i), this.set(r, n, i, e), this
				}
				var w = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s));
				return Math.abs(w) < .001 && (w = 1), this.x = (d - u) / w, this.y = (c - p) / w, this.z = (h - s) / w, this.w = Math.acos((o + l + f - 1) / 2), this
			},
			min: function(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
			},
			max: function(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
			},
			clamp: function(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
			},
			clampScalar: function() {
				var t, e;
				return function(r, n) {
					return void 0 === t && (t = new qe, e = new qe), t.set(r, r, r, r), e.set(n, n, n, n), this.clamp(t, e)
				}
			}(),
			clampLength: function(t, e) {
				var r = this.length();
				return this.divideScalar(r || 1).multiplyScalar(Math.max(t, Math.min(e, r)))
			},
			floor: function() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
			},
			ceil: function() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
			},
			round: function() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
			},
			roundToZero: function() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
			},
			negate: function() {
				return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
			},
			dot: function(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
			},
			lengthSq: function() {
				return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
			},
			length: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
			},
			manhattanLength: function() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
			},
			normalize: function() {
				return this.divideScalar(this.length() || 1)
			},
			setLength: function(t) {
				return this.normalize().multiplyScalar(t)
			},
			lerp: function(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
			},
			lerpVectors: function(t, e, r) {
				return this.subVectors(e, t).multiplyScalar(r).add(t)
			},
			equals: function(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
			},
			fromBufferAttribute: function(t, e, r) {
				return void 0 !== r && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
			}
		}), Xe.prototype = Object.assign(Object.create(t.prototype), {
			constructor: Xe,
			isWebGLRenderTarget: !0,
			setSize: function(t, e) {
				this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Ye.prototype = Object.assign(Object.create(Xe.prototype), {
			constructor: Ye,
			isWebGLMultisampleRenderTarget: !0,
			copy: function(t) {
				return Xe.prototype.copy.call(this, t), this.samples = t.samples, this
			}
		}), Je.prototype = Object.create(Xe.prototype), Je.prototype.constructor = Je, Je.prototype.isWebGLRenderTargetCube = !0, Ze.prototype = Object.create(We.prototype), Ze.prototype.constructor = Ze, Ze.prototype.isDataTexture = !0, Object.assign(Qe.prototype, {
			isBox3: !0,
			set: function(t, e) {
				return this.min.copy(t), this.max.copy(e), this
			},
			setFromArray: function(t) {
				for (var e = 1 / 0, r = 1 / 0, n = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
					var h = t[s],
						l = t[s + 1],
						u = t[s + 2];
					h < e && (e = h), l < r && (r = l), u < n && (n = u), h > i && (i = h), l > a && (a = l), u > o && (o = u)
				}
				return this.min.set(e, r, n), this.max.set(i, a, o), this
			},
			setFromBufferAttribute: function(t) {
				for (var e = 1 / 0, r = 1 / 0, n = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
					var h = t.getX(s),
						l = t.getY(s),
						u = t.getZ(s);
					h < e && (e = h), l < r && (r = l), u < n && (n = u), h > i && (i = h), l > a && (a = l), u > o && (o = u)
				}
				return this.min.set(e, r, n), this.max.set(i, a, o), this
			},
			setFromPoints: function(t) {
				this.makeEmpty();
				for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
				return this
			},
			setFromCenterAndSize: function() {
				var t = new He;
				return function(e, r) {
					var n = t.copy(r).multiplyScalar(.5);
					return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
				}
			}(),
			setFromObject: function(t) {
				return this.makeEmpty(), this.expandByObject(t)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this
			},
			makeEmpty: function() {
				return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
			},
			isEmpty: function() {
				return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
			},
			getCenter: function(t) {
				return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new He), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
			},
			getSize: function(t) {
				return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new He), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
			},
			expandByPoint: function(t) {
				return this.min.min(t), this.max.max(t), this
			},
			expandByVector: function(t) {
				return this.min.sub(t), this.max.add(t), this
			},
			expandByScalar: function(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this
			},
			expandByObject: function() {
				var t, e, r, n = new He;

				function i(i) {
					var a = i.geometry;
					if (void 0 !== a)
						if (a.isGeometry) {
							var o = a.vertices;
							for (e = 0, r = o.length; e < r; e++) n.copy(o[e]), n.applyMatrix4(i.matrixWorld), t.expandByPoint(n)
						} else if (a.isBufferGeometry) {
						var s = a.attributes.position;
						if (void 0 !== s)
							for (e = 0, r = s.count; e < r; e++) n.fromBufferAttribute(s, e).applyMatrix4(i.matrixWorld), t.expandByPoint(n)
					}
				}
				return function(e) {
					return t = this, e.updateMatrixWorld(!0), e.traverse(i), this
				}
			}(),
			containsPoint: function(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
			},
			containsBox: function(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
			},
			getParameter: function(t, e) {
				return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new He), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
			},
			intersectsBox: function(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
			},
			intersectsSphere: function() {
				var t = new He;
				return function(e) {
					return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
				}
			}(),
			intersectsPlane: function(t) {
				var e, r;
				return t.normal.x > 0 ? (e = t.normal.x * this.min.x, r = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, r = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, r += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, r += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, r += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, r += t.normal.z * this.min.z), e <= -t.constant && r >= -t.constant
			},
			intersectsTriangle: function() {
				var t = new He,
					e = new He,
					r = new He,
					n = new He,
					i = new He,
					a = new He,
					o = new He,
					s = new He,
					c = new He,
					h = new He;

				function l(n) {
					var i, a;
					for (i = 0, a = n.length - 3; i <= a; i += 3) {
						o.fromArray(n, i);
						var s = c.x * Math.abs(o.x) + c.y * Math.abs(o.y) + c.z * Math.abs(o.z),
							h = t.dot(o),
							l = e.dot(o),
							u = r.dot(o);
						if (Math.max(-Math.max(h, l, u), Math.min(h, l, u)) > s) return !1
					}
					return !0
				}
				return function(o) {
					if (this.isEmpty()) return !1;
					this.getCenter(s), c.subVectors(this.max, s), t.subVectors(o.a, s), e.subVectors(o.b, s), r.subVectors(o.c, s), n.subVectors(e, t), i.subVectors(r, e), a.subVectors(t, r);
					var u = [0, -n.z, n.y, 0, -i.z, i.y, 0, -a.z, a.y, n.z, 0, -n.x, i.z, 0, -i.x, a.z, 0, -a.x, -n.y, n.x, 0, -i.y, i.x, 0, -a.y, a.x, 0];
					return !!l(u) && (!!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (h.crossVectors(n, i), l(u = [h.x, h.y, h.z])))
				}
			}(),
			clampPoint: function(t, e) {
				return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new He), e.copy(t).clamp(this.min, this.max)
			},
			distanceToPoint: function() {
				var t = new He;
				return function(e) {
					return t.copy(e).clamp(this.min, this.max).sub(e).length()
				}
			}(),
			getBoundingSphere: function() {
				var t = new He;
				return function(e) {
					return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new Ke), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
				}
			}(),
			intersect: function(t) {
				return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
			},
			union: function(t) {
				return this.min.min(t.min), this.max.max(t.max), this
			},
			applyMatrix4: function() {
				var t = [new He, new He, new He, new He, new He, new He, new He, new He];
				return function(e) {
					return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
				}
			}(),
			translate: function(t) {
				return this.min.add(t), this.max.add(t), this
			},
			equals: function(t) {
				return t.min.equals(this.min) && t.max.equals(this.max)
			}
		}), Object.assign(Ke.prototype, {
			set: function(t, e) {
				return this.center.copy(t), this.radius = e, this
			},
			setFromPoints: function() {
				var t = new Qe;
				return function(e, r) {
					var n = this.center;
					void 0 !== r ? n.copy(r) : t.setFromPoints(e).getCenter(n);
					for (var i = 0, a = 0, o = e.length; a < o; a++) i = Math.max(i, n.distanceToSquared(e[a]));
					return this.radius = Math.sqrt(i), this
				}
			}(),
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.center.copy(t.center), this.radius = t.radius, this
			},
			empty: function() {
				return this.radius <= 0
			},
			containsPoint: function(t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius
			},
			distanceToPoint: function(t) {
				return t.distanceTo(this.center) - this.radius
			},
			intersectsSphere: function(t) {
				var e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e
			},
			intersectsBox: function(t) {
				return t.intersectsSphere(this)
			},
			intersectsPlane: function(t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius
			},
			clampPoint: function(t, e) {
				var r = this.center.distanceToSquared(t);
				return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new He), e.copy(t), r > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
			},
			getBoundingBox: function(t) {
				return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Qe), t.set(this.center, this.center), t.expandByScalar(this.radius), t
			},
			applyMatrix4: function(t) {
				return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
			},
			translate: function(t) {
				return this.center.add(t), this
			},
			equals: function(t) {
				return t.center.equals(this.center) && t.radius === this.radius
			}
		}), Object.assign($e.prototype, {
			set: function(t, e) {
				return this.normal.copy(t), this.constant = e, this
			},
			setComponents: function(t, e, r, n) {
				return this.normal.set(t, e, r), this.constant = n, this
			},
			setFromNormalAndCoplanarPoint: function(t, e) {
				return this.normal.copy(t), this.constant = -e.dot(this.normal), this
			},
			setFromCoplanarPoints: function() {
				var t = new He,
					e = new He;
				return function(r, n, i) {
					var a = t.subVectors(i, n).cross(e.subVectors(r, n)).normalize();
					return this.setFromNormalAndCoplanarPoint(a, r), this
				}
			}(),
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.normal.copy(t.normal), this.constant = t.constant, this
			},
			normalize: function() {
				var t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), this.constant *= t, this
			},
			negate: function() {
				return this.constant *= -1, this.normal.negate(), this
			},
			distanceToPoint: function(t) {
				return this.normal.dot(t) + this.constant
			},
			distanceToSphere: function(t) {
				return this.distanceToPoint(t.center) - t.radius
			},
			projectPoint: function(t, e) {
				return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new He), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
			},
			intersectLine: function() {
				var t = new He;
				return function(e, r) {
					void 0 === r && (console.warn("THREE.Plane: .intersectLine() target is now required"), r = new He);
					var n = e.delta(t),
						i = this.normal.dot(n);
					if (0 === i) return 0 === this.distanceToPoint(e.start) ? r.copy(e.start) : void 0;
					var a = -(e.start.dot(this.normal) + this.constant) / i;
					return a < 0 || a > 1 ? void 0 : r.copy(n).multiplyScalar(a).add(e.start)
				}
			}(),
			intersectsLine: function(t) {
				var e = this.distanceToPoint(t.start),
					r = this.distanceToPoint(t.end);
				return e < 0 && r > 0 || r < 0 && e > 0
			},
			intersectsBox: function(t) {
				return t.intersectsPlane(this)
			},
			intersectsSphere: function(t) {
				return t.intersectsPlane(this)
			},
			coplanarPoint: function(t) {
				return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new He), t.copy(this.normal).multiplyScalar(-this.constant)
			},
			applyMatrix4: function() {
				var t = new He,
					e = new Ve;
				return function(r, n) {
					var i = n || e.getNormalMatrix(r),
						a = this.coplanarPoint(t).applyMatrix4(r),
						o = this.normal.applyMatrix3(i).normalize();
					return this.constant = -a.dot(o), this
				}
			}(),
			translate: function(t) {
				return this.constant -= t.dot(this.normal), this
			},
			equals: function(t) {
				return t.normal.equals(this.normal) && t.constant === this.constant
			}
		}), Object.assign(tr.prototype, {
			set: function(t, e, r, n, i, a) {
				var o = this.planes;
				return o[0].copy(t), o[1].copy(e), o[2].copy(r), o[3].copy(n), o[4].copy(i), o[5].copy(a), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				for (var e = this.planes, r = 0; r < 6; r++) e[r].copy(t.planes[r]);
				return this
			},
			setFromMatrix: function(t) {
				var e = this.planes,
					r = t.elements,
					n = r[0],
					i = r[1],
					a = r[2],
					o = r[3],
					s = r[4],
					c = r[5],
					h = r[6],
					l = r[7],
					u = r[8],
					p = r[9],
					d = r[10],
					f = r[11],
					m = r[12],
					g = r[13],
					v = r[14],
					y = r[15];
				return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + i, l + c, f + p, y + g).normalize(), e[3].setComponents(o - i, l - c, f - p, y - g).normalize(), e[4].setComponents(o - a, l - h, f - d, y - v).normalize(), e[5].setComponents(o + a, l + h, f + d, y + v).normalize(), this
			},
			intersectsObject: function() {
				var t = new Ke;
				return function(e) {
					var r = e.geometry;
					return null === r.boundingSphere && r.computeBoundingSphere(), t.copy(r.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
				}
			}(),
			intersectsSprite: function() {
				var t = new Ke;
				return function(e) {
					return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
				}
			}(),
			intersectsSphere: function(t) {
				for (var e = this.planes, r = t.center, n = -t.radius, i = 0; i < 6; i++) {
					if (e[i].distanceToPoint(r) < n) return !1
				}
				return !0
			},
			intersectsBox: function() {
				var t = new He;
				return function(e) {
					for (var r = this.planes, n = 0; n < 6; n++) {
						var i = r[n];
						if (t.x = i.normal.x > 0 ? e.max.x : e.min.x, t.y = i.normal.y > 0 ? e.max.y : e.min.y, t.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(t) < 0) return !1
					}
					return !0
				}
			}(),
			containsPoint: function(t) {
				for (var e = this.planes, r = 0; r < 6; r++)
					if (e[r].distanceToPoint(t) < 0) return !1;
				return !0
			}
		});
		var er = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
			rr = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			nr = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
			ir = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
			ar = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			or = "vec3 transformed = vec3( position );",
			sr = "vec3 objectNormal = vec3( normal );",
			cr = "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick( specularColor, dotNV );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
			hr = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
			lr = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
			ur = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
			pr = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
			dr = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
			fr = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			mr = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			gr = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			vr = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
			yr = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
			xr = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
			br = "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif",
			wr = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
			_r = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
			Mr = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
			Sr = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
			Er = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
			Tr = "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
			Ar = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
			Lr = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
			Rr = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
			Cr = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
			Pr = "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
			Or = "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
			Ir = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
			Dr = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
			Br = "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
			Nr = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
			zr = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			Fr = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
			Ur = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
			Gr = "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
			Hr = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
			Vr = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
			kr = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
			jr = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#endif\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\tfloat clearCoatInv = 1.0 - clearCoatDHR;\n\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec3 singleScattering = vec3( 0.0 );\n\t\tvec3 multiScattering = vec3( 0.0 );\n\t\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\t\tvec3 diffuse = material.diffuseColor;\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\n\t\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\t\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\t#else\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#endif\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
			Wr = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
			qr = "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
			Xr = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
			Yr = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			Jr = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
			Zr = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
			Qr = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
			Kr = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
			$r = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
			tn = "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
			en = "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
			rn = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
			nn = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			an = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
			on = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			sn = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
			cn = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif",
			hn = "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
			ln = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
			un = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
			pn = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
			dn = "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
			fn = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
			mn = "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
			gn = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
			vn = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			yn = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
			xn = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
			bn = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
			wn = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
			_n = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			Mn = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
			Sn = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
			En = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif",
			Tn = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			An = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			Ln = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
			Rn = "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
			Cn = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
			Pn = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
			On = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			In = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			Dn = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
			Bn = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
			Nn = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
			zn = "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			Fn = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
			Un = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			Gn = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
			Hn = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
			Vn = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
			kn = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
			jn = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
			Wn = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			qn = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
			Xn = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			Yn = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			Jn = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			Zn = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
			Qn = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			Kn = "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			$n = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			ti = "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
			ei = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			ri = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			ni = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			ii = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			ai = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
			oi = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
			si = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			ci = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
			hi = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
			li = "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			ui = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			pi = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			di = {
				alphamap_fragment: er,
				alphamap_pars_fragment: rr,
				alphatest_fragment: nr,
				aomap_fragment: ir,
				aomap_pars_fragment: ar,
				begin_vertex: or,
				beginnormal_vertex: sr,
				bsdfs: cr,
				bumpmap_pars_fragment: hr,
				clipping_planes_fragment: lr,
				clipping_planes_pars_fragment: ur,
				clipping_planes_pars_vertex: pr,
				clipping_planes_vertex: dr,
				color_fragment: fr,
				color_pars_fragment: mr,
				color_pars_vertex: gr,
				color_vertex: vr,
				common: yr,
				cube_uv_reflection_fragment: xr,
				defaultnormal_vertex: br,
				displacementmap_pars_vertex: wr,
				displacementmap_vertex: _r,
				emissivemap_fragment: Mr,
				emissivemap_pars_fragment: Sr,
				encodings_fragment: Er,
				encodings_pars_fragment: Tr,
				envmap_fragment: Ar,
				envmap_pars_fragment: Lr,
				envmap_pars_vertex: Rr,
				envmap_physical_pars_fragment: Gr,
				envmap_vertex: Cr,
				fog_vertex: Pr,
				fog_pars_vertex: Or,
				fog_fragment: Ir,
				fog_pars_fragment: Dr,
				gradientmap_pars_fragment: Br,
				lightmap_fragment: Nr,
				lightmap_pars_fragment: zr,
				lights_lambert_vertex: Fr,
				lights_pars_begin: Ur,
				lights_phong_fragment: Hr,
				lights_phong_pars_fragment: Vr,
				lights_physical_fragment: kr,
				lights_physical_pars_fragment: jr,
				lights_fragment_begin: Wr,
				lights_fragment_maps: qr,
				lights_fragment_end: Xr,
				logdepthbuf_fragment: Yr,
				logdepthbuf_pars_fragment: Jr,
				logdepthbuf_pars_vertex: Zr,
				logdepthbuf_vertex: Qr,
				map_fragment: Kr,
				map_pars_fragment: $r,
				map_particle_fragment: tn,
				map_particle_pars_fragment: en,
				metalnessmap_fragment: rn,
				metalnessmap_pars_fragment: nn,
				morphnormal_vertex: an,
				morphtarget_pars_vertex: on,
				morphtarget_vertex: sn,
				normal_fragment_begin: cn,
				normal_fragment_maps: hn,
				normalmap_pars_fragment: ln,
				packing: un,
				premultiplied_alpha_fragment: pn,
				project_vertex: dn,
				dithering_fragment: fn,
				dithering_pars_fragment: mn,
				roughnessmap_fragment: gn,
				roughnessmap_pars_fragment: vn,
				shadowmap_pars_fragment: yn,
				shadowmap_pars_vertex: xn,
				shadowmap_vertex: bn,
				shadowmask_pars_fragment: wn,
				skinbase_vertex: _n,
				skinning_pars_vertex: Mn,
				skinning_vertex: Sn,
				skinnormal_vertex: En,
				specularmap_fragment: Tn,
				specularmap_pars_fragment: An,
				tonemapping_fragment: Ln,
				tonemapping_pars_fragment: Rn,
				uv_pars_fragment: Cn,
				uv_pars_vertex: Pn,
				uv_vertex: On,
				uv2_pars_fragment: In,
				uv2_pars_vertex: Dn,
				uv2_vertex: Bn,
				worldpos_vertex: Nn,
				background_frag: zn,
				background_vert: Fn,
				cube_frag: Un,
				cube_vert: Gn,
				depth_frag: Hn,
				depth_vert: Vn,
				distanceRGBA_frag: kn,
				distanceRGBA_vert: jn,
				equirect_frag: Wn,
				equirect_vert: qn,
				linedashed_frag: Xn,
				linedashed_vert: Yn,
				meshbasic_frag: Jn,
				meshbasic_vert: Zn,
				meshlambert_frag: Qn,
				meshlambert_vert: Kn,
				meshmatcap_frag: $n,
				meshmatcap_vert: ti,
				meshphong_frag: ei,
				meshphong_vert: ri,
				meshphysical_frag: ni,
				meshphysical_vert: ii,
				normal_frag: ai,
				normal_vert: oi,
				points_frag: si,
				points_vert: ci,
				shadow_frag: hi,
				shadow_vert: li,
				sprite_frag: ui,
				sprite_vert: pi
			};

		function fi(t) {
			var e = {};
			for (var r in t)
				for (var n in e[r] = {}, t[r]) {
					var i = t[r][n];
					i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? e[r][n] = i.clone() : Array.isArray(i) ? e[r][n] = i.slice() : e[r][n] = i
				}
			return e
		}

		function mi(t) {
			for (var e = {}, r = 0; r < t.length; r++) {
				var n = fi(t[r]);
				for (var i in n) e[i] = n[i]
			}
			return e
		}
		exports.ShaderChunk = di;
		var gi = {
			clone: fi,
			merge: mi
		};
		exports.UniformsUtils = gi;
		var vi = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};

		function yi(t, e, r) {
			return void 0 === e && void 0 === r ? this.set(t) : this.setRGB(t, e, r)
		}
		Object.assign(yi.prototype, {
			isColor: !0,
			r: 1,
			g: 1,
			b: 1,
			set: function(t) {
				return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
			},
			setScalar: function(t) {
				return this.r = t, this.g = t, this.b = t, this
			},
			setHex: function(t) {
				return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
			},
			setRGB: function(t, e, r) {
				return this.r = t, this.g = e, this.b = r, this
			},
			setHSL: function() {
				function t(t, e, r) {
					return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - r) : t
				}
				return function(e, r, n) {
					if (e = ze.euclideanModulo(e, 1), r = ze.clamp(r, 0, 1), n = ze.clamp(n, 0, 1), 0 === r) this.r = this.g = this.b = n;
					else {
						var i = n <= .5 ? n * (1 + r) : n + r - n * r,
							a = 2 * n - i;
						this.r = t(a, i, e + 1 / 3), this.g = t(a, i, e), this.b = t(a, i, e - 1 / 3)
					}
					return this
				}
			}(),
			setStyle: function(t) {
				function e(e) {
					void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
				}
				var r;
				if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
					var n, i = r[1],
						a = r[2];
					switch (i) {
						case "rgb":
						case "rgba":
							if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
							if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
							break;
						case "hsl":
						case "hsla":
							if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
								var o = parseFloat(n[1]) / 360,
									s = parseInt(n[2], 10) / 100,
									c = parseInt(n[3], 10) / 100;
								return e(n[5]), this.setHSL(o, s, c)
							}
					}
				} else if (r = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
					var h, l = (h = r[1]).length;
					if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
					if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
				}
				t && t.length > 0 && (void 0 !== (h = vi[t]) ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + t));
				return this
			},
			clone: function() {
				return new this.constructor(this.r, this.g, this.b)
			},
			copy: function(t) {
				return this.r = t.r, this.g = t.g, this.b = t.b, this
			},
			copyGammaToLinear: function(t, e) {
				return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
			},
			copyLinearToGamma: function(t, e) {
				void 0 === e && (e = 2);
				var r = e > 0 ? 1 / e : 1;
				return this.r = Math.pow(t.r, r), this.g = Math.pow(t.g, r), this.b = Math.pow(t.b, r), this
			},
			convertGammaToLinear: function(t) {
				return this.copyGammaToLinear(this, t), this
			},
			convertLinearToGamma: function(t) {
				return this.copyLinearToGamma(this, t), this
			},
			copySRGBToLinear: function() {
				function t(t) {
					return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
				}
				return function(e) {
					return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
				}
			}(),
			copyLinearToSRGB: function() {
				function t(t) {
					return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
				}
				return function(e) {
					return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
				}
			}(),
			convertSRGBToLinear: function() {
				return this.copySRGBToLinear(this), this
			},
			convertLinearToSRGB: function() {
				return this.copyLinearToSRGB(this), this
			},
			getHex: function() {
				return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
			},
			getHexString: function() {
				return ("000000" + this.getHex().toString(16)).slice(-6)
			},
			getHSL: function(t) {
				void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
					h: 0,
					s: 0,
					l: 0
				});
				var e, r, n = this.r,
					i = this.g,
					a = this.b,
					o = Math.max(n, i, a),
					s = Math.min(n, i, a),
					c = (s + o) / 2;
				if (s === o) e = 0, r = 0;
				else {
					var h = o - s;
					switch (r = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
						case n:
							e = (i - a) / h + (i < a ? 6 : 0);
							break;
						case i:
							e = (a - n) / h + 2;
							break;
						case a:
							e = (n - i) / h + 4
					}
					e /= 6
				}
				return t.h = e, t.s = r, t.l = c, t
			},
			getStyle: function() {
				return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
			},
			offsetHSL: function() {
				var t = {};
				return function(e, r, n) {
					return this.getHSL(t), t.h += e, t.s += r, t.l += n, this.setHSL(t.h, t.s, t.l), this
				}
			}(),
			add: function(t) {
				return this.r += t.r, this.g += t.g, this.b += t.b, this
			},
			addColors: function(t, e) {
				return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
			},
			addScalar: function(t) {
				return this.r += t, this.g += t, this.b += t, this
			},
			sub: function(t) {
				return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
			},
			multiply: function(t) {
				return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
			},
			multiplyScalar: function(t) {
				return this.r *= t, this.g *= t, this.b *= t, this
			},
			lerp: function(t, e) {
				return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
			},
			lerpHSL: function() {
				var t = {
						h: 0,
						s: 0,
						l: 0
					},
					e = {
						h: 0,
						s: 0,
						l: 0
					};
				return function(r, n) {
					this.getHSL(t), r.getHSL(e);
					var i = ze.lerp(t.h, e.h, n),
						a = ze.lerp(t.s, e.s, n),
						o = ze.lerp(t.l, e.l, n);
					return this.setHSL(i, a, o), this
				}
			}(),
			equals: function(t) {
				return t.r === this.r && t.g === this.g && t.b === this.b
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
			},
			toJSON: function() {
				return this.getHex()
			}
		});
		var xi = {
			common: {
				diffuse: {
					value: new yi(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Ve
				},
				alphaMap: {
					value: null
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: .98
				},
				maxMipLevel: {
					value: 0
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new Fe(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new yi(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				}
			},
			points: {
				diffuse: {
					value: new yi(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Ve
				}
			},
			sprite: {
				diffuse: {
					value: new yi(15658734)
				},
				opacity: {
					value: 1
				},
				center: {
					value: new Fe(.5, .5)
				},
				rotation: {
					value: 0
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Ve
				}
			}
		};
		exports.UniformsLib = xi;
		var bi = {
			basic: {
				uniforms: mi([xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.fog]),
				vertexShader: di.meshbasic_vert,
				fragmentShader: di.meshbasic_frag
			},
			lambert: {
				uniforms: mi([xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.fog, xi.lights, {
					emissive: {
						value: new yi(0)
					}
				}]),
				vertexShader: di.meshlambert_vert,
				fragmentShader: di.meshlambert_frag
			},
			phong: {
				uniforms: mi([xi.common, xi.specularmap, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.bumpmap, xi.normalmap, xi.displacementmap, xi.gradientmap, xi.fog, xi.lights, {
					emissive: {
						value: new yi(0)
					},
					specular: {
						value: new yi(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: di.meshphong_vert,
				fragmentShader: di.meshphong_frag
			},
			standard: {
				uniforms: mi([xi.common, xi.envmap, xi.aomap, xi.lightmap, xi.emissivemap, xi.bumpmap, xi.normalmap, xi.displacementmap, xi.roughnessmap, xi.metalnessmap, xi.fog, xi.lights, {
					emissive: {
						value: new yi(0)
					},
					roughness: {
						value: .5
					},
					metalness: {
						value: .5
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: di.meshphysical_vert,
				fragmentShader: di.meshphysical_frag
			},
			matcap: {
				uniforms: mi([xi.common, xi.bumpmap, xi.normalmap, xi.displacementmap, xi.fog, {
					matcap: {
						value: null
					}
				}]),
				vertexShader: di.meshmatcap_vert,
				fragmentShader: di.meshmatcap_frag
			},
			points: {
				uniforms: mi([xi.points, xi.fog]),
				vertexShader: di.points_vert,
				fragmentShader: di.points_frag
			},
			dashed: {
				uniforms: mi([xi.common, xi.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: di.linedashed_vert,
				fragmentShader: di.linedashed_frag
			},
			depth: {
				uniforms: mi([xi.common, xi.displacementmap]),
				vertexShader: di.depth_vert,
				fragmentShader: di.depth_frag
			},
			normal: {
				uniforms: mi([xi.common, xi.bumpmap, xi.normalmap, xi.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: di.normal_vert,
				fragmentShader: di.normal_frag
			},
			sprite: {
				uniforms: mi([xi.sprite, xi.fog]),
				vertexShader: di.sprite_vert,
				fragmentShader: di.sprite_frag
			},
			background: {
				uniforms: {
					uvTransform: {
						value: new Ve
					},
					t2D: {
						value: null
					}
				},
				vertexShader: di.background_vert,
				fragmentShader: di.background_frag
			},
			cube: {
				uniforms: {
					tCube: {
						value: null
					},
					tFlip: {
						value: -1
					},
					opacity: {
						value: 1
					}
				},
				vertexShader: di.cube_vert,
				fragmentShader: di.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: di.equirect_vert,
				fragmentShader: di.equirect_frag
			},
			distanceRGBA: {
				uniforms: mi([xi.common, xi.displacementmap, {
					referencePosition: {
						value: new He
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: di.distanceRGBA_vert,
				fragmentShader: di.distanceRGBA_frag
			},
			shadow: {
				uniforms: mi([xi.lights, xi.fog, {
					color: {
						value: new yi(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: di.shadow_vert,
				fragmentShader: di.shadow_frag
			}
		};

		function wi() {
			var t = null,
				e = !1,
				r = null;

			function n(i, a) {
				!1 !== e && (r(i, a), t.requestAnimationFrame(n))
			}
			return {
				start: function() {
					!0 !== e && null !== r && (t.requestAnimationFrame(n), e = !0)
				},
				stop: function() {
					e = !1
				},
				setAnimationLoop: function(t) {
					r = t
				},
				setContext: function(e) {
					t = e
				}
			}
		}

		function _i(t) {
			var e = new WeakMap;
			return {
				get: function(t) {
					return t.isInterleavedBufferAttribute && (t = t.data), e.get(t)
				},
				remove: function(r) {
					r.isInterleavedBufferAttribute && (r = r.data);
					var n = e.get(r);
					n && (t.deleteBuffer(n.buffer), e.delete(r))
				},
				update: function(r, n) {
					r.isInterleavedBufferAttribute && (r = r.data);
					var i = e.get(r);
					void 0 === i ? e.set(r, function(e, r) {
						var n = e.array,
							i = e.dynamic ? 35048 : 35044,
							a = t.createBuffer();
						t.bindBuffer(r, a), t.bufferData(r, n, i), e.onUploadCallback();
						var o = 5126;
						return n instanceof Float32Array ? o = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = 5123 : n instanceof Int16Array ? o = 5122 : n instanceof Uint32Array ? o = 5125 : n instanceof Int32Array ? o = 5124 : n instanceof Int8Array ? o = 5120 : n instanceof Uint8Array && (o = 5121), {
							buffer: a,
							type: o,
							bytesPerElement: n.BYTES_PER_ELEMENT,
							version: e.version
						}
					}(r, n)) : i.version < r.version && (function(e, r, n) {
						var i = r.array,
							a = r.updateRange;
						t.bindBuffer(n, e), !1 === r.dynamic ? t.bufferData(n, i, 35044) : -1 === a.count ? t.bufferSubData(n, 0, i) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * i.BYTES_PER_ELEMENT, i.subarray(a.offset, a.offset + a.count)), a.count = -1)
					}(i.buffer, r, n), i.version = r.version)
				}
			}
		}

		function Mi(t, e, r, n, i, a) {
			this.a = t, this.b = e, this.c = r, this.normal = n && n.isVector3 ? n : new He, this.vertexNormals = Array.isArray(n) ? n : [], this.color = i && i.isColor ? i : new yi, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== a ? a : 0
		}

		function Si(t, e, r, n) {
			this._x = t || 0, this._y = e || 0, this._z = r || 0, this._order = n || Si.DefaultOrder
		}

		function Ei() {
			this.mask = 1
		}
		exports.ShaderLib = bi, bi.physical = {
			uniforms: mi([bi.standard.uniforms, {
				clearCoat: {
					value: 0
				},
				clearCoatRoughness: {
					value: 0
				}
			}]),
			vertexShader: di.meshphysical_vert,
			fragmentShader: di.meshphysical_frag
		}, Object.assign(Mi.prototype, {
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
				for (var e = 0, r = t.vertexNormals.length; e < r; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
				for (e = 0, r = t.vertexColors.length; e < r; e++) this.vertexColors[e] = t.vertexColors[e].clone();
				return this
			}
		}), Si.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Si.DefaultOrder = "XYZ", Object.defineProperties(Si.prototype, {
			x: {
				get: function() {
					return this._x
				},
				set: function(t) {
					this._x = t, this.onChangeCallback()
				}
			},
			y: {
				get: function() {
					return this._y
				},
				set: function(t) {
					this._y = t, this.onChangeCallback()
				}
			},
			z: {
				get: function() {
					return this._z
				},
				set: function(t) {
					this._z = t, this.onChangeCallback()
				}
			},
			order: {
				get: function() {
					return this._order
				},
				set: function(t) {
					this._order = t, this.onChangeCallback()
				}
			}
		}), Object.assign(Si.prototype, {
			isEuler: !0,
			set: function(t, e, r, n) {
				return this._x = t, this._y = e, this._z = r, this._order = n || this._order, this.onChangeCallback(), this
			},
			clone: function() {
				return new this.constructor(this._x, this._y, this._z, this._order)
			},
			copy: function(t) {
				return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
			},
			setFromRotationMatrix: function(t, e, r) {
				var n = ze.clamp,
					i = t.elements,
					a = i[0],
					o = i[4],
					s = i[8],
					c = i[1],
					h = i[5],
					l = i[9],
					u = i[2],
					p = i[6],
					d = i[10];
				return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== r && this.onChangeCallback(), this
			},
			setFromQuaternion: function() {
				var t = new Ue;
				return function(e, r, n) {
					return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, r, n)
				}
			}(),
			setFromVector3: function(t, e) {
				return this.set(t.x, t.y, t.z, e || this._order)
			},
			reorder: function() {
				var t = new Ge;
				return function(e) {
					return t.setFromEuler(this), this.setFromQuaternion(t, e)
				}
			}(),
			equals: function(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
			},
			fromArray: function(t) {
				return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
			},
			toVector3: function(t) {
				return t ? t.set(this._x, this._y, this._z) : new He(this._x, this._y, this._z)
			},
			onChange: function(t) {
				return this.onChangeCallback = t, this
			},
			onChangeCallback: function() {}
		}), Object.assign(Ei.prototype, {
			set: function(t) {
				this.mask = 1 << t | 0
			},
			enable: function(t) {
				this.mask |= 1 << t | 0
			},
			toggle: function(t) {
				this.mask ^= 1 << t | 0
			},
			disable: function(t) {
				this.mask &= ~(1 << t | 0)
			},
			test: function(t) {
				return 0 != (this.mask & t.mask)
			}
		});
		var Ti = 0;

		function Ai() {
			Object.defineProperty(this, "id", {
				value: Ti++
			}), this.uuid = ze.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ai.DefaultUp.clone();
			var t = new He,
				e = new Si,
				r = new Ge,
				n = new He(1, 1, 1);
			e.onChange(function() {
				r.setFromEuler(e, !1)
			}), r.onChange(function() {
				e.setFromQuaternion(r, void 0, !1)
			}), Object.defineProperties(this, {
				position: {
					configurable: !0,
					enumerable: !0,
					value: t
				},
				rotation: {
					configurable: !0,
					enumerable: !0,
					value: e
				},
				quaternion: {
					configurable: !0,
					enumerable: !0,
					value: r
				},
				scale: {
					configurable: !0,
					enumerable: !0,
					value: n
				},
				modelViewMatrix: {
					value: new Ue
				},
				normalMatrix: {
					value: new Ve
				}
			}), this.matrix = new Ue, this.matrixWorld = new Ue, this.matrixAutoUpdate = Ai.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ei, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
		}
		Ai.DefaultUp = new He(0, 1, 0), Ai.DefaultMatrixAutoUpdate = !0, Ai.prototype = Object.assign(Object.create(t.prototype), {
			constructor: Ai,
			isObject3D: !0,
			onBeforeRender: function() {},
			onAfterRender: function() {},
			applyMatrix: function(t) {
				this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
			},
			applyQuaternion: function(t) {
				return this.quaternion.premultiply(t), this
			},
			setRotationFromAxisAngle: function(t, e) {
				this.quaternion.setFromAxisAngle(t, e)
			},
			setRotationFromEuler: function(t) {
				this.quaternion.setFromEuler(t, !0)
			},
			setRotationFromMatrix: function(t) {
				this.quaternion.setFromRotationMatrix(t)
			},
			setRotationFromQuaternion: function(t) {
				this.quaternion.copy(t)
			},
			rotateOnAxis: function() {
				var t = new Ge;
				return function(e, r) {
					return t.setFromAxisAngle(e, r), this.quaternion.multiply(t), this
				}
			}(),
			rotateOnWorldAxis: function() {
				var t = new Ge;
				return function(e, r) {
					return t.setFromAxisAngle(e, r), this.quaternion.premultiply(t), this
				}
			}(),
			rotateX: function() {
				var t = new He(1, 0, 0);
				return function(e) {
					return this.rotateOnAxis(t, e)
				}
			}(),
			rotateY: function() {
				var t = new He(0, 1, 0);
				return function(e) {
					return this.rotateOnAxis(t, e)
				}
			}(),
			rotateZ: function() {
				var t = new He(0, 0, 1);
				return function(e) {
					return this.rotateOnAxis(t, e)
				}
			}(),
			translateOnAxis: function() {
				var t = new He;
				return function(e, r) {
					return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(r)), this
				}
			}(),
			translateX: function() {
				var t = new He(1, 0, 0);
				return function(e) {
					return this.translateOnAxis(t, e)
				}
			}(),
			translateY: function() {
				var t = new He(0, 1, 0);
				return function(e) {
					return this.translateOnAxis(t, e)
				}
			}(),
			translateZ: function() {
				var t = new He(0, 0, 1);
				return function(e) {
					return this.translateOnAxis(t, e)
				}
			}(),
			localToWorld: function(t) {
				return t.applyMatrix4(this.matrixWorld)
			},
			worldToLocal: function() {
				var t = new Ue;
				return function(e) {
					return e.applyMatrix4(t.getInverse(this.matrixWorld))
				}
			}(),
			lookAt: function() {
				var t = new Ge,
					e = new Ue,
					r = new He,
					n = new He;
				return function(i, a, o) {
					i.isVector3 ? r.copy(i) : r.set(i, a, o);
					var s = this.parent;
					this.updateWorldMatrix(!0, !1), n.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? e.lookAt(n, r, this.up) : e.lookAt(r, n, this.up), this.quaternion.setFromRotationMatrix(e), s && (e.extractRotation(s.matrixWorld), t.setFromRotationMatrix(e), this.quaternion.premultiply(t.inverse()))
				}
			}(),
			add: function(t) {
				if (arguments.length > 1) {
					for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
					return this
				}
				return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
					type: "added"
				}), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
			},
			remove: function(t) {
				if (arguments.length > 1) {
					for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
					return this
				}
				var r = this.children.indexOf(t);
				return -1 !== r && (t.parent = null, t.dispatchEvent({
					type: "removed"
				}), this.children.splice(r, 1)), this
			},
			getObjectById: function(t) {
				return this.getObjectByProperty("id", t)
			},
			getObjectByName: function(t) {
				return this.getObjectByProperty("name", t)
			},
			getObjectByProperty: function(t, e) {
				if (this[t] === e) return this;
				for (var r = 0, n = this.children.length; r < n; r++) {
					var i = this.children[r].getObjectByProperty(t, e);
					if (void 0 !== i) return i
				}
			},
			getWorldPosition: function(t) {
				return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new He), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
			},
			getWorldQuaternion: function() {
				var t = new He,
					e = new He;
				return function(r) {
					return void 0 === r && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), r = new Ge), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
				}
			}(),
			getWorldScale: function() {
				var t = new He,
					e = new Ge;
				return function(r) {
					return void 0 === r && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), r = new He), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
				}
			}(),
			getWorldDirection: function(t) {
				void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new He), this.updateMatrixWorld(!0);
				var e = this.matrixWorld.elements;
				return t.set(e[8], e[9], e[10]).normalize()
			},
			raycast: function() {},
			traverse: function(t) {
				t(this);
				for (var e = this.children, r = 0, n = e.length; r < n; r++) e[r].traverse(t)
			},
			traverseVisible: function(t) {
				if (!1 !== this.visible) {
					t(this);
					for (var e = this.children, r = 0, n = e.length; r < n; r++) e[r].traverseVisible(t)
				}
			},
			traverseAncestors: function(t) {
				var e = this.parent;
				null !== e && (t(e), e.traverseAncestors(t))
			},
			updateMatrix: function() {
				this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
			},
			updateMatrixWorld: function(t) {
				this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
				for (var e = this.children, r = 0, n = e.length; r < n; r++) e[r].updateMatrixWorld(t)
			},
			updateWorldMatrix: function(t, e) {
				var r = this.parent;
				if (!0 === t && null !== r && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
					for (var n = this.children, i = 0, a = n.length; i < a; i++) n[i].updateWorldMatrix(!1, !0)
			},
			toJSON: function(t) {
				var e = void 0 === t || "string" == typeof t,
					r = {};
				e && (t = {
					geometries: {},
					materials: {},
					textures: {},
					images: {},
					shapes: {}
				}, r.metadata = {
					version: 4.5,
					type: "Object",
					generator: "Object3D.toJSON"
				});
				var n = {};

				function i(e, r) {
					return void 0 === e[r.uuid] && (e[r.uuid] = r.toJSON(t)), r.uuid
				}
				if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh && this.drawMode !== we && (n.drawMode = this.drawMode), this.isMesh || this.isLine || this.isPoints) {
					n.geometry = i(t.geometries, this.geometry);
					var a = this.geometry.parameters;
					if (void 0 !== a && void 0 !== a.shapes) {
						var o = a.shapes;
						if (Array.isArray(o))
							for (var s = 0, c = o.length; s < c; s++) {
								var h = o[s];
								i(t.shapes, h)
							} else i(t.shapes, o)
					}
				}
				if (void 0 !== this.material)
					if (Array.isArray(this.material)) {
						var l = [];
						for (s = 0, c = this.material.length; s < c; s++) l.push(i(t.materials, this.material[s]));
						n.material = l
					} else n.material = i(t.materials, this.material);
				if (this.children.length > 0) {
					n.children = [];
					for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object)
				}
				if (e) {
					var u = m(t.geometries),
						p = m(t.materials),
						d = m(t.textures),
						f = m(t.images);
					o = m(t.shapes);
					u.length > 0 && (r.geometries = u), p.length > 0 && (r.materials = p), d.length > 0 && (r.textures = d), f.length > 0 && (r.images = f), o.length > 0 && (r.shapes = o)
				}
				return r.object = n, r;

				function m(t) {
					var e = [];
					for (var r in t) {
						var n = t[r];
						delete n.metadata, e.push(n)
					}
					return e
				}
			},
			clone: function(t) {
				return (new this.constructor).copy(this, t)
			},
			copy: function(t, e) {
				if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
					for (var r = 0; r < t.children.length; r++) {
						var n = t.children[r];
						this.add(n.clone())
					}
				return this
			}
		});
		var Li = 0;

		function Ri() {
			Object.defineProperty(this, "id", {
				value: Li += 2
			}), this.uuid = ze.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
				[]
			], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
		}

		function Ci(t, e, r) {
			if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === r, this.dynamic = !1, this.updateRange = {
				offset: 0,
				count: -1
			}, this.version = 0
		}

		function Pi(t, e, r) {
			Ci.call(this, new Int8Array(t), e, r)
		}

		function Oi(t, e, r) {
			Ci.call(this, new Uint8Array(t), e, r)
		}

		function Ii(t, e, r) {
			Ci.call(this, new Uint8ClampedArray(t), e, r)
		}

		function Di(t, e, r) {
			Ci.call(this, new Int16Array(t), e, r)
		}

		function Bi(t, e, r) {
			Ci.call(this, new Uint16Array(t), e, r)
		}

		function Ni(t, e, r) {
			Ci.call(this, new Int32Array(t), e, r)
		}

		function zi(t, e, r) {
			Ci.call(this, new Uint32Array(t), e, r)
		}

		function Fi(t, e, r) {
			Ci.call(this, new Float32Array(t), e, r)
		}

		function Ui(t, e, r) {
			Ci.call(this, new Float64Array(t), e, r)
		}

		function Gi() {
			this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
		}

		function Hi(t) {
			if (0 === t.length) return -1 / 0;
			for (var e = t[0], r = 1, n = t.length; r < n; ++r) t[r] > e && (e = t[r]);
			return e
		}
		Ri.prototype = Object.assign(Object.create(t.prototype), {
			constructor: Ri,
			isGeometry: !0,
			applyMatrix: function(t) {
				for (var e = (new Ve).getNormalMatrix(t), r = 0, n = this.vertices.length; r < n; r++) {
					this.vertices[r].applyMatrix4(t)
				}
				for (r = 0, n = this.faces.length; r < n; r++) {
					var i = this.faces[r];
					i.normal.applyMatrix3(e).normalize();
					for (var a = 0, o = i.vertexNormals.length; a < o; a++) i.vertexNormals[a].applyMatrix3(e).normalize()
				}
				return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
			},
			rotateX: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationX(e), this.applyMatrix(t), this
				}
			}(),
			rotateY: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationY(e), this.applyMatrix(t), this
				}
			}(),
			rotateZ: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationZ(e), this.applyMatrix(t), this
				}
			}(),
			translate: function() {
				var t = new Ue;
				return function(e, r, n) {
					return t.makeTranslation(e, r, n), this.applyMatrix(t), this
				}
			}(),
			scale: function() {
				var t = new Ue;
				return function(e, r, n) {
					return t.makeScale(e, r, n), this.applyMatrix(t), this
				}
			}(),
			lookAt: function() {
				var t = new Ai;
				return function(e) {
					t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
				}
			}(),
			fromBufferGeometry: function(t) {
				var e = this,
					r = null !== t.index ? t.index.array : void 0,
					n = t.attributes,
					i = n.position.array,
					a = void 0 !== n.normal ? n.normal.array : void 0,
					o = void 0 !== n.color ? n.color.array : void 0,
					s = void 0 !== n.uv ? n.uv.array : void 0,
					c = void 0 !== n.uv2 ? n.uv2.array : void 0;
				void 0 !== c && (this.faceVertexUvs[1] = []);
				for (var h = 0, l = 0; h < i.length; h += 3, l += 2) e.vertices.push((new He).fromArray(i, h)), void 0 !== o && e.colors.push((new yi).fromArray(o, h));

				function u(t, r, n, i) {
					var h = void 0 === o ? [] : [e.colors[t].clone(), e.colors[r].clone(), e.colors[n].clone()],
						l = new Mi(t, r, n, void 0 === a ? [] : [(new He).fromArray(a, 3 * t), (new He).fromArray(a, 3 * r), (new He).fromArray(a, 3 * n)], h, i);
					e.faces.push(l), void 0 !== s && e.faceVertexUvs[0].push([(new Fe).fromArray(s, 2 * t), (new Fe).fromArray(s, 2 * r), (new Fe).fromArray(s, 2 * n)]), void 0 !== c && e.faceVertexUvs[1].push([(new Fe).fromArray(c, 2 * t), (new Fe).fromArray(c, 2 * r), (new Fe).fromArray(c, 2 * n)])
				}
				var p = t.groups;
				if (p.length > 0)
					for (h = 0; h < p.length; h++)
						for (var d = p[h], f = d.start, m = (l = f, f + d.count); l < m; l += 3) void 0 !== r ? u(r[l], r[l + 1], r[l + 2], d.materialIndex) : u(l, l + 1, l + 2, d.materialIndex);
				else if (void 0 !== r)
					for (h = 0; h < r.length; h += 3) u(r[h], r[h + 1], r[h + 2]);
				else
					for (h = 0; h < i.length / 3; h += 3) u(h, h + 1, h + 2);
				return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
			},
			center: function() {
				var t = new He;
				return function() {
					return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
				}
			}(),
			normalize: function() {
				this.computeBoundingSphere();
				var t = this.boundingSphere.center,
					e = this.boundingSphere.radius,
					r = 0 === e ? 1 : 1 / e,
					n = new Ue;
				return n.set(r, 0, 0, -r * t.x, 0, r, 0, -r * t.y, 0, 0, r, -r * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
			},
			computeFaceNormals: function() {
				for (var t = new He, e = new He, r = 0, n = this.faces.length; r < n; r++) {
					var i = this.faces[r],
						a = this.vertices[i.a],
						o = this.vertices[i.b],
						s = this.vertices[i.c];
					t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), i.normal.copy(t)
				}
			},
			computeVertexNormals: function(t) {
				var e, r, n, i, a, o;
				for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, r = this.vertices.length; e < r; e++) o[e] = new He;
				if (t) {
					var s, c, h, l = new He,
						u = new He;
					for (n = 0, i = this.faces.length; n < i; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
				} else
					for (this.computeFaceNormals(), n = 0, i = this.faces.length; n < i; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
				for (e = 0, r = this.vertices.length; e < r; e++) o[e].normalize();
				for (n = 0, i = this.faces.length; n < i; n++) {
					var p = (a = this.faces[n]).vertexNormals;
					3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0)
			},
			computeFlatVertexNormals: function() {
				var t, e, r;
				for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
					var n = (r = this.faces[t]).vertexNormals;
					3 === n.length ? (n[0].copy(r.normal), n[1].copy(r.normal), n[2].copy(r.normal)) : (n[0] = r.normal.clone(), n[1] = r.normal.clone(), n[2] = r.normal.clone())
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0)
			},
			computeMorphNormals: function() {
				var t, e, r, n, i;
				for (r = 0, n = this.faces.length; r < n; r++)
					for ((i = this.faces[r]).__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), t = 0, e = i.vertexNormals.length; t < e; t++) i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
				var a = new Ri;
				for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
					if (!this.morphNormals[t]) {
						this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
						var o = this.morphNormals[t].faceNormals,
							s = this.morphNormals[t].vertexNormals;
						for (r = 0, n = this.faces.length; r < n; r++) c = new He, h = {
							a: new He,
							b: new He,
							c: new He
						}, o.push(c), s.push(h)
					}
					var c, h, l = this.morphNormals[t];
					for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), r = 0, n = this.faces.length; r < n; r++) i = this.faces[r], c = l.faceNormals[r], h = l.vertexNormals[r], c.copy(i.normal), h.a.copy(i.vertexNormals[0]), h.b.copy(i.vertexNormals[1]), h.c.copy(i.vertexNormals[2])
				}
				for (r = 0, n = this.faces.length; r < n; r++)(i = this.faces[r]).normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
			},
			computeBoundingBox: function() {
				null === this.boundingBox && (this.boundingBox = new Qe), this.boundingBox.setFromPoints(this.vertices)
			},
			computeBoundingSphere: function() {
				null === this.boundingSphere && (this.boundingSphere = new Ke), this.boundingSphere.setFromPoints(this.vertices)
			},
			merge: function(t, e, r) {
				if (t && t.isGeometry) {
					var n, i = this.vertices.length,
						a = this.vertices,
						o = t.vertices,
						s = this.faces,
						c = t.faces,
						h = this.faceVertexUvs[0],
						l = t.faceVertexUvs[0],
						u = this.colors,
						p = t.colors;
					void 0 === r && (r = 0), void 0 !== e && (n = (new Ve).getNormalMatrix(e));
					for (var d = 0, f = o.length; d < f; d++) {
						var m = o[d].clone();
						void 0 !== e && m.applyMatrix4(e), a.push(m)
					}
					for (d = 0, f = p.length; d < f; d++) u.push(p[d].clone());
					for (d = 0, f = c.length; d < f; d++) {
						var g, v, y, x = c[d],
							b = x.vertexNormals,
							w = x.vertexColors;
						(g = new Mi(x.a + i, x.b + i, x.c + i)).normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
						for (var _ = 0, M = b.length; _ < M; _++) v = b[_].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
						g.color.copy(x.color);
						for (_ = 0, M = w.length; _ < M; _++) y = w[_], g.vertexColors.push(y.clone());
						g.materialIndex = x.materialIndex + r, s.push(g)
					}
					for (d = 0, f = l.length; d < f; d++) {
						var S = l[d],
							E = [];
						if (void 0 !== S) {
							for (_ = 0, M = S.length; _ < M; _++) E.push(S[_].clone());
							h.push(E)
						}
					}
				} else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
			},
			mergeMesh: function(t) {
				t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
			},
			mergeVertices: function() {
				var t, e, r, n, i, a, o, s, c = {},
					h = [],
					l = [],
					u = Math.pow(10, 4);
				for (r = 0, n = this.vertices.length; r < n; r++) t = this.vertices[r], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = r, h.push(this.vertices[r]), l[r] = h.length - 1) : l[r] = l[c[e]];
				var p = [];
				for (r = 0, n = this.faces.length; r < n; r++) {
					(i = this.faces[r]).a = l[i.a], i.b = l[i.b], i.c = l[i.c], a = [i.a, i.b, i.c];
					for (var d = 0; d < 3; d++)
						if (a[d] === a[(d + 1) % 3]) {
							p.push(r);
							break
						}
				}
				for (r = p.length - 1; r >= 0; r--) {
					var f = p[r];
					for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
				}
				var m = this.vertices.length - h.length;
				return this.vertices = h, m
			},
			setFromPoints: function(t) {
				this.vertices = [];
				for (var e = 0, r = t.length; e < r; e++) {
					var n = t[e];
					this.vertices.push(new He(n.x, n.y, n.z || 0))
				}
				return this
			},
			sortFacesByMaterialIndex: function() {
				for (var t = this.faces, e = t.length, r = 0; r < e; r++) t[r]._id = r;
				t.sort(function(t, e) {
					return t.materialIndex - e.materialIndex
				});
				var n, i, a = this.faceVertexUvs[0],
					o = this.faceVertexUvs[1];
				a && a.length === e && (n = []), o && o.length === e && (i = []);
				for (r = 0; r < e; r++) {
					var s = t[r]._id;
					n && n.push(a[s]), i && i.push(o[s])
				}
				n && (this.faceVertexUvs[0] = n), i && (this.faceVertexUvs[1] = i)
			},
			toJSON: function() {
				var t = {
					metadata: {
						version: 4.5,
						type: "Geometry",
						generator: "Geometry.toJSON"
					}
				};
				if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
					var e = this.parameters;
					for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
					return t
				}
				for (var n = [], i = 0; i < this.vertices.length; i++) {
					var a = this.vertices[i];
					n.push(a.x, a.y, a.z)
				}
				var o = [],
					s = [],
					c = {},
					h = [],
					l = {},
					u = [],
					p = {};
				for (i = 0; i < this.faces.length; i++) {
					var d = this.faces[i],
						f = void 0 !== this.faceVertexUvs[0][i],
						m = d.normal.length() > 0,
						g = d.vertexNormals.length > 0,
						v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
						y = d.vertexColors.length > 0,
						x = 0;
					if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, g), x = M(x, 6, v), x = M(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
						var b = this.faceVertexUvs[0][i];
						o.push(T(b[0]), T(b[1]), T(b[2]))
					}
					if (m && o.push(S(d.normal)), g) {
						var w = d.vertexNormals;
						o.push(S(w[0]), S(w[1]), S(w[2]))
					}
					if (v && o.push(E(d.color)), y) {
						var _ = d.vertexColors;
						o.push(E(_[0]), E(_[1]), E(_[2]))
					}
				}

				function M(t, e, r) {
					return r ? t | 1 << e : t & ~(1 << e)
				}

				function S(t) {
					var e = t.x.toString() + t.y.toString() + t.z.toString();
					return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3, s.push(t.x, t.y, t.z), c[e])
				}

				function E(t) {
					var e = t.r.toString() + t.g.toString() + t.b.toString();
					return void 0 !== l[e] ? l[e] : (l[e] = h.length, h.push(t.getHex()), l[e])
				}

				function T(t) {
					var e = t.x.toString() + t.y.toString();
					return void 0 !== p[e] ? p[e] : (p[e] = u.length / 2, u.push(t.x, t.y), p[e])
				}
				return t.data = {}, t.data.vertices = n, t.data.normals = s, h.length > 0 && (t.data.colors = h), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
			},
			clone: function() {
				return (new Ri).copy(this)
			},
			copy: function(t) {
				var e, r, n, i, a, o;
				this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
					[]
				], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
				var s = t.vertices;
				for (e = 0, r = s.length; e < r; e++) this.vertices.push(s[e].clone());
				var c = t.colors;
				for (e = 0, r = c.length; e < r; e++) this.colors.push(c[e].clone());
				var h = t.faces;
				for (e = 0, r = h.length; e < r; e++) this.faces.push(h[e].clone());
				for (e = 0, r = t.faceVertexUvs.length; e < r; e++) {
					var l = t.faceVertexUvs[e];
					for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, i = l.length; n < i; n++) {
						var u = l[n],
							p = [];
						for (a = 0, o = u.length; a < o; a++) {
							var d = u[a];
							p.push(d.clone())
						}
						this.faceVertexUvs[e].push(p)
					}
				}
				var f = t.morphTargets;
				for (e = 0, r = f.length; e < r; e++) {
					var m = {};
					if (m.name = f[e].name, void 0 !== f[e].vertices)
						for (m.vertices = [], n = 0, i = f[e].vertices.length; n < i; n++) m.vertices.push(f[e].vertices[n].clone());
					if (void 0 !== f[e].normals)
						for (m.normals = [], n = 0, i = f[e].normals.length; n < i; n++) m.normals.push(f[e].normals[n].clone());
					this.morphTargets.push(m)
				}
				var g = t.morphNormals;
				for (e = 0, r = g.length; e < r; e++) {
					var v = {};
					if (void 0 !== g[e].vertexNormals)
						for (v.vertexNormals = [], n = 0, i = g[e].vertexNormals.length; n < i; n++) {
							var y = g[e].vertexNormals[n],
								x = {};
							x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
						}
					if (void 0 !== g[e].faceNormals)
						for (v.faceNormals = [], n = 0, i = g[e].faceNormals.length; n < i; n++) v.faceNormals.push(g[e].faceNormals[n].clone());
					this.morphNormals.push(v)
				}
				var b = t.skinWeights;
				for (e = 0, r = b.length; e < r; e++) this.skinWeights.push(b[e].clone());
				var w = t.skinIndices;
				for (e = 0, r = w.length; e < r; e++) this.skinIndices.push(w[e].clone());
				var _ = t.lineDistances;
				for (e = 0, r = _.length; e < r; e++) this.lineDistances.push(_[e]);
				var M = t.boundingBox;
				null !== M && (this.boundingBox = M.clone());
				var S = t.boundingSphere;
				return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Object.defineProperty(Ci.prototype, "needsUpdate", {
			set: function(t) {
				!0 === t && this.version++
			}
		}), Object.assign(Ci.prototype, {
			isBufferAttribute: !0,
			onUploadCallback: function() {},
			setArray: function(t) {
				if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
				return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
			},
			setDynamic: function(t) {
				return this.dynamic = t, this
			},
			copy: function(t) {
				return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
			},
			copyAt: function(t, e, r) {
				t *= this.itemSize, r *= e.itemSize;
				for (var n = 0, i = this.itemSize; n < i; n++) this.array[t + n] = e.array[r + n];
				return this
			},
			copyArray: function(t) {
				return this.array.set(t), this
			},
			copyColorsArray: function(t) {
				for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
					var a = t[n];
					void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new yi), e[r++] = a.r, e[r++] = a.g, e[r++] = a.b
				}
				return this
			},
			copyVector2sArray: function(t) {
				for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
					var a = t[n];
					void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new Fe), e[r++] = a.x, e[r++] = a.y
				}
				return this
			},
			copyVector3sArray: function(t) {
				for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
					var a = t[n];
					void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new He), e[r++] = a.x, e[r++] = a.y, e[r++] = a.z
				}
				return this
			},
			copyVector4sArray: function(t) {
				for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
					var a = t[n];
					void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new qe), e[r++] = a.x, e[r++] = a.y, e[r++] = a.z, e[r++] = a.w
				}
				return this
			},
			set: function(t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this
			},
			getX: function(t) {
				return this.array[t * this.itemSize]
			},
			setX: function(t, e) {
				return this.array[t * this.itemSize] = e, this
			},
			getY: function(t) {
				return this.array[t * this.itemSize + 1]
			},
			setY: function(t, e) {
				return this.array[t * this.itemSize + 1] = e, this
			},
			getZ: function(t) {
				return this.array[t * this.itemSize + 2]
			},
			setZ: function(t, e) {
				return this.array[t * this.itemSize + 2] = e, this
			},
			getW: function(t) {
				return this.array[t * this.itemSize + 3]
			},
			setW: function(t, e) {
				return this.array[t * this.itemSize + 3] = e, this
			},
			setXY: function(t, e, r) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = r, this
			},
			setXYZ: function(t, e, r, n) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = r, this.array[t + 2] = n, this
			},
			setXYZW: function(t, e, r, n, i) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = r, this.array[t + 2] = n, this.array[t + 3] = i, this
			},
			onUpload: function(t) {
				return this.onUploadCallback = t, this
			},
			clone: function() {
				return new this.constructor(this.array, this.itemSize).copy(this)
			}
		}), Pi.prototype = Object.create(Ci.prototype), Pi.prototype.constructor = Pi, Oi.prototype = Object.create(Ci.prototype), Oi.prototype.constructor = Oi, Ii.prototype = Object.create(Ci.prototype), Ii.prototype.constructor = Ii, Di.prototype = Object.create(Ci.prototype), Di.prototype.constructor = Di, Bi.prototype = Object.create(Ci.prototype), Bi.prototype.constructor = Bi, Ni.prototype = Object.create(Ci.prototype), Ni.prototype.constructor = Ni, zi.prototype = Object.create(Ci.prototype), zi.prototype.constructor = zi, Fi.prototype = Object.create(Ci.prototype), Fi.prototype.constructor = Fi, Ui.prototype = Object.create(Ci.prototype), Ui.prototype.constructor = Ui, Object.assign(Gi.prototype, {
			computeGroups: function(t) {
				for (var e, r = [], n = void 0, i = t.faces, a = 0; a < i.length; a++) {
					var o = i[a];
					o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, r.push(e)), e = {
						start: 3 * a,
						materialIndex: n
					})
				}
				void 0 !== e && (e.count = 3 * a - e.start, r.push(e)), this.groups = r
			},
			fromGeometry: function(t) {
				var e, r = t.faces,
					n = t.vertices,
					i = t.faceVertexUvs,
					a = i[0] && i[0].length > 0,
					o = i[1] && i[1].length > 0,
					s = t.morphTargets,
					c = s.length;
				if (c > 0) {
					e = [];
					for (var h = 0; h < c; h++) e[h] = {
						name: s[h].name,
						data: []
					};
					this.morphTargets.position = e
				}
				var l, u = t.morphNormals,
					p = u.length;
				if (p > 0) {
					l = [];
					for (h = 0; h < p; h++) l[h] = {
						name: u[h].name,
						data: []
					};
					this.morphTargets.normal = l
				}
				var d = t.skinIndices,
					f = t.skinWeights,
					m = d.length === n.length,
					g = f.length === n.length;
				n.length > 0 && 0 === r.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
				for (h = 0; h < r.length; h++) {
					var v = r[h];
					this.vertices.push(n[v.a], n[v.b], n[v.c]);
					var y = v.vertexNormals;
					if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
					else {
						var x = v.normal;
						this.normals.push(x, x, x)
					}
					var b, w = v.vertexColors;
					if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
					else {
						var _ = v.color;
						this.colors.push(_, _, _)
					}
					if (!0 === a) void 0 !== (b = i[0][h]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new Fe, new Fe, new Fe));
					if (!0 === o) void 0 !== (b = i[1][h]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new Fe, new Fe, new Fe));
					for (var M = 0; M < c; M++) {
						var S = s[M].vertices;
						e[M].data.push(S[v.a], S[v.b], S[v.c])
					}
					for (M = 0; M < p; M++) {
						var E = u[M].vertexNormals[h];
						l[M].data.push(E.a, E.b, E.c)
					}
					m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]), g && this.skinWeights.push(f[v.a], f[v.b], f[v.c])
				}
				return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
			}
		});
		var Vi = 1;

		function ki() {
			Object.defineProperty(this, "id", {
				value: Vi += 2
			}), this.uuid = ze.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
				start: 0,
				count: 1 / 0
			}, this.userData = {}
		}

		function ji(t, e, r, n, i, a) {
			Ri.call(this), this.type = "BoxGeometry", this.parameters = {
				width: t,
				height: e,
				depth: r,
				widthSegments: n,
				heightSegments: i,
				depthSegments: a
			}, this.fromBufferGeometry(new Wi(t, e, r, n, i, a)), this.mergeVertices()
		}

		function Wi(t, e, r, n, i, a) {
			ki.call(this), this.type = "BoxBufferGeometry", this.parameters = {
				width: t,
				height: e,
				depth: r,
				widthSegments: n,
				heightSegments: i,
				depthSegments: a
			};
			var o = this;
			t = t || 1, e = e || 1, r = r || 1, n = Math.floor(n) || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1;
			var s = [],
				c = [],
				h = [],
				l = [],
				u = 0,
				p = 0;

			function d(t, e, r, n, i, a, d, f, m, g, v) {
				var y, x, b = a / m,
					w = d / g,
					_ = a / 2,
					M = d / 2,
					S = f / 2,
					E = m + 1,
					T = g + 1,
					A = 0,
					L = 0,
					R = new He;
				for (x = 0; x < T; x++) {
					var C = x * w - M;
					for (y = 0; y < E; y++) {
						var P = y * b - _;
						R[t] = P * n, R[e] = C * i, R[r] = S, c.push(R.x, R.y, R.z), R[t] = 0, R[e] = 0, R[r] = f > 0 ? 1 : -1, h.push(R.x, R.y, R.z), l.push(y / m), l.push(1 - x / g), A += 1
					}
				}
				for (x = 0; x < g; x++)
					for (y = 0; y < m; y++) {
						var O = u + y + E * x,
							I = u + y + E * (x + 1),
							D = u + (y + 1) + E * (x + 1),
							B = u + (y + 1) + E * x;
						s.push(O, I, B), s.push(I, D, B), L += 6
					}
				o.addGroup(p, L, v), p += L, u += A
			}
			d("z", "y", "x", -1, -1, r, e, t, a, i, 0), d("z", "y", "x", 1, -1, r, e, -t, a, i, 1), d("x", "z", "y", 1, 1, t, r, e, n, a, 2), d("x", "z", "y", 1, -1, t, r, -e, n, a, 3), d("x", "y", "z", 1, -1, t, e, r, n, i, 4), d("x", "y", "z", -1, -1, t, e, -r, n, i, 5), this.setIndex(s), this.addAttribute("position", new Fi(c, 3)), this.addAttribute("normal", new Fi(h, 3)), this.addAttribute("uv", new Fi(l, 2))
		}

		function qi(t, e, r, n) {
			Ri.call(this), this.type = "PlaneGeometry", this.parameters = {
				width: t,
				height: e,
				widthSegments: r,
				heightSegments: n
			}, this.fromBufferGeometry(new Xi(t, e, r, n)), this.mergeVertices()
		}

		function Xi(t, e, r, n) {
			ki.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
				width: t,
				height: e,
				widthSegments: r,
				heightSegments: n
			};
			var i, a, o = (t = t || 1) / 2,
				s = (e = e || 1) / 2,
				c = Math.floor(r) || 1,
				h = Math.floor(n) || 1,
				l = c + 1,
				u = h + 1,
				p = t / c,
				d = e / h,
				f = [],
				m = [],
				g = [],
				v = [];
			for (a = 0; a < u; a++) {
				var y = a * d - s;
				for (i = 0; i < l; i++) {
					var x = i * p - o;
					m.push(x, -y, 0), g.push(0, 0, 1), v.push(i / c), v.push(1 - a / h)
				}
			}
			for (a = 0; a < h; a++)
				for (i = 0; i < c; i++) {
					var b = i + l * a,
						w = i + l * (a + 1),
						_ = i + 1 + l * (a + 1),
						M = i + 1 + l * a;
					f.push(b, w, M), f.push(w, _, M)
				}
			this.setIndex(f), this.addAttribute("position", new Fi(m, 3)), this.addAttribute("normal", new Fi(g, 3)), this.addAttribute("uv", new Fi(v, 2))
		}
		ki.prototype = Object.assign(Object.create(t.prototype), {
			constructor: ki,
			isBufferGeometry: !0,
			getIndex: function() {
				return this.index
			},
			setIndex: function(t) {
				Array.isArray(t) ? this.index = new(Hi(t) > 65535 ? zi : Bi)(t, 1) : this.index = t
			},
			addAttribute: function(t, e) {
				return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new Ci(arguments[1], arguments[2])))
			},
			getAttribute: function(t) {
				return this.attributes[t]
			},
			removeAttribute: function(t) {
				return delete this.attributes[t], this
			},
			addGroup: function(t, e, r) {
				this.groups.push({
					start: t,
					count: e,
					materialIndex: void 0 !== r ? r : 0
				})
			},
			clearGroups: function() {
				this.groups = []
			},
			setDrawRange: function(t, e) {
				this.drawRange.start = t, this.drawRange.count = e
			},
			applyMatrix: function(t) {
				var e = this.attributes.position;
				void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
				var r = this.attributes.normal;
				void 0 !== r && ((new Ve).getNormalMatrix(t).applyToBufferAttribute(r), r.needsUpdate = !0);
				return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
			},
			rotateX: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationX(e), this.applyMatrix(t), this
				}
			}(),
			rotateY: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationY(e), this.applyMatrix(t), this
				}
			}(),
			rotateZ: function() {
				var t = new Ue;
				return function(e) {
					return t.makeRotationZ(e), this.applyMatrix(t), this
				}
			}(),
			translate: function() {
				var t = new Ue;
				return function(e, r, n) {
					return t.makeTranslation(e, r, n), this.applyMatrix(t), this
				}
			}(),
			scale: function() {
				var t = new Ue;
				return function(e, r, n) {
					return t.makeScale(e, r, n), this.applyMatrix(t), this
				}
			}(),
			lookAt: function() {
				var t = new Ai;
				return function(e) {
					t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
				}
			}(),
			center: function() {
				var t = new He;
				return function() {
					return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
				}
			}(),
			setFromObject: function(t) {
				var e = t.geometry;
				if (t.isPoints || t.isLine) {
					var r = new Fi(3 * e.vertices.length, 3),
						n = new Fi(3 * e.colors.length, 3);
					if (this.addAttribute("position", r.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
						var i = new Fi(e.lineDistances.length, 1);
						this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
					}
					null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
				} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
				return this
			},
			setFromPoints: function(t) {
				for (var e = [], r = 0, n = t.length; r < n; r++) {
					var i = t[r];
					e.push(i.x, i.y, i.z || 0)
				}
				return this.addAttribute("position", new Fi(e, 3)), this
			},
			updateFromObject: function(t) {
				var e, r = t.geometry;
				if (t.isMesh) {
					var n = r.__directGeometry;
					if (!0 === r.elementsNeedUpdate && (n = void 0, r.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(r);
					n.verticesNeedUpdate = r.verticesNeedUpdate, n.normalsNeedUpdate = r.normalsNeedUpdate, n.colorsNeedUpdate = r.colorsNeedUpdate, n.uvsNeedUpdate = r.uvsNeedUpdate, n.groupsNeedUpdate = r.groupsNeedUpdate, r.verticesNeedUpdate = !1, r.normalsNeedUpdate = !1, r.colorsNeedUpdate = !1, r.uvsNeedUpdate = !1, r.groupsNeedUpdate = !1, r = n
				}
				return !0 === r.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(r.vertices), e.needsUpdate = !0), r.verticesNeedUpdate = !1), !0 === r.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(r.normals), e.needsUpdate = !0), r.normalsNeedUpdate = !1), !0 === r.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(r.colors), e.needsUpdate = !0), r.colorsNeedUpdate = !1), r.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(r.uvs), e.needsUpdate = !0), r.uvsNeedUpdate = !1), r.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(r.lineDistances), e.needsUpdate = !0), r.lineDistancesNeedUpdate = !1), r.groupsNeedUpdate && (r.computeGroups(t.geometry), this.groups = r.groups, r.groupsNeedUpdate = !1), this
			},
			fromGeometry: function(t) {
				return t.__directGeometry = (new Gi).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
			},
			fromDirectGeometry: function(t) {
				var e = new Float32Array(3 * t.vertices.length);
				if (this.addAttribute("position", new Ci(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
					var r = new Float32Array(3 * t.normals.length);
					this.addAttribute("normal", new Ci(r, 3).copyVector3sArray(t.normals))
				}
				if (t.colors.length > 0) {
					var n = new Float32Array(3 * t.colors.length);
					this.addAttribute("color", new Ci(n, 3).copyColorsArray(t.colors))
				}
				if (t.uvs.length > 0) {
					var i = new Float32Array(2 * t.uvs.length);
					this.addAttribute("uv", new Ci(i, 2).copyVector2sArray(t.uvs))
				}
				if (t.uvs2.length > 0) {
					var a = new Float32Array(2 * t.uvs2.length);
					this.addAttribute("uv2", new Ci(a, 2).copyVector2sArray(t.uvs2))
				}
				for (var o in this.groups = t.groups, t.morphTargets) {
					for (var s = [], c = t.morphTargets[o], h = 0, l = c.length; h < l; h++) {
						var u = c[h],
							p = new Fi(3 * u.data.length, 3);
						p.name = u.name, s.push(p.copyVector3sArray(u.data))
					}
					this.morphAttributes[o] = s
				}
				if (t.skinIndices.length > 0) {
					var d = new Fi(4 * t.skinIndices.length, 4);
					this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
				}
				if (t.skinWeights.length > 0) {
					var f = new Fi(4 * t.skinWeights.length, 4);
					this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
				}
				return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
			},
			computeBoundingBox: function() {
				null === this.boundingBox && (this.boundingBox = new Qe);
				var t = this.attributes.position;
				void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
			},
			computeBoundingSphere: function() {
				var t = new Qe,
					e = new He;
				return function() {
					null === this.boundingSphere && (this.boundingSphere = new Ke);
					var r = this.attributes.position;
					if (r) {
						var n = this.boundingSphere.center;
						t.setFromBufferAttribute(r), t.getCenter(n);
						for (var i = 0, a = 0, o = r.count; a < o; a++) e.x = r.getX(a), e.y = r.getY(a), e.z = r.getZ(a), i = Math.max(i, n.distanceToSquared(e));
						this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
					}
				}
			}(),
			computeFaceNormals: function() {},
			computeVertexNormals: function() {
				var t = this.index,
					e = this.attributes;
				if (e.position) {
					var r = e.position.array;
					if (void 0 === e.normal) this.addAttribute("normal", new Ci(new Float32Array(r.length), 3));
					else
						for (var n = e.normal.array, i = 0, a = n.length; i < a; i++) n[i] = 0;
					var o, s, c, h = e.normal.array,
						l = new He,
						u = new He,
						p = new He,
						d = new He,
						f = new He;
					if (t) {
						var m = t.array;
						for (i = 0, a = t.count; i < a; i += 3) o = 3 * m[i + 0], s = 3 * m[i + 1], c = 3 * m[i + 2], l.fromArray(r, o), u.fromArray(r, s), p.fromArray(r, c), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[o] += d.x, h[o + 1] += d.y, h[o + 2] += d.z, h[s] += d.x, h[s + 1] += d.y, h[s + 2] += d.z, h[c] += d.x, h[c + 1] += d.y, h[c + 2] += d.z
					} else
						for (i = 0, a = r.length; i < a; i += 9) l.fromArray(r, i), u.fromArray(r, i + 3), p.fromArray(r, i + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), h[i] = d.x, h[i + 1] = d.y, h[i + 2] = d.z, h[i + 3] = d.x, h[i + 4] = d.y, h[i + 5] = d.z, h[i + 6] = d.x, h[i + 7] = d.y, h[i + 8] = d.z;
					this.normalizeNormals(), e.normal.needsUpdate = !0
				}
			},
			merge: function(t, e) {
				if (t && t.isBufferGeometry) {
					void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
					var r = this.attributes;
					for (var n in r)
						if (void 0 !== t.attributes[n])
							for (var i = r[n].array, a = t.attributes[n], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) i[c] = o[s];
					return this
				}
				console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
			},
			normalizeNormals: function() {
				var t = new He;
				return function() {
					for (var e = this.attributes.normal, r = 0, n = e.count; r < n; r++) t.x = e.getX(r), t.y = e.getY(r), t.z = e.getZ(r), t.normalize(), e.setXYZ(r, t.x, t.y, t.z)
				}
			}(),
			toNonIndexed: function() {
				function t(t, e) {
					for (var r = t.array, n = t.itemSize, i = new r.constructor(e.length * n), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
						a = e[s] * n;
						for (var h = 0; h < n; h++) i[o++] = r[a++]
					}
					return new Ci(i, n)
				}
				if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
				var e = new ki,
					r = this.index.array,
					n = this.attributes;
				for (var i in n) {
					var a = t(n[i], r);
					e.addAttribute(i, a)
				}
				var o = this.morphAttributes;
				for (i in o) {
					for (var s = [], c = o[i], h = 0, l = c.length; h < l; h++) {
						a = t(c[h], r);
						s.push(a)
					}
					e.morphAttributes[i] = s
				}
				for (var u = this.groups, p = (h = 0, u.length); h < p; h++) {
					var d = u[h];
					e.addGroup(d.start, d.count, d.materialIndex)
				}
				return e
			},
			toJSON: function() {
				var t = {
					metadata: {
						version: 4.5,
						type: "BufferGeometry",
						generator: "BufferGeometry.toJSON"
					}
				};
				if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
					var e = this.parameters;
					for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
					return t
				}
				t.data = {
					attributes: {}
				};
				var n = this.index;
				if (null !== n) {
					var i = Array.prototype.slice.call(n.array);
					t.data.index = {
						type: n.array.constructor.name,
						array: i
					}
				}
				var a = this.attributes;
				for (var r in a) {
					var o = a[r];
					i = Array.prototype.slice.call(o.array);
					t.data.attributes[r] = {
						itemSize: o.itemSize,
						type: o.array.constructor.name,
						array: i,
						normalized: o.normalized
					}
				}
				var s = this.groups;
				s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
				var c = this.boundingSphere;
				return null !== c && (t.data.boundingSphere = {
					center: c.center.toArray(),
					radius: c.radius
				}), t
			},
			clone: function() {
				return (new ki).copy(this)
			},
			copy: function(t) {
				var e, r, n;
				this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
				var i = t.index;
				null !== i && this.setIndex(i.clone());
				var a = t.attributes;
				for (e in a) {
					var o = a[e];
					this.addAttribute(e, o.clone())
				}
				var s = t.morphAttributes;
				for (e in s) {
					var c = [],
						h = s[e];
					for (r = 0, n = h.length; r < n; r++) c.push(h[r].clone());
					this.morphAttributes[e] = c
				}
				var l = t.groups;
				for (r = 0, n = l.length; r < n; r++) {
					var u = l[r];
					this.addGroup(u.start, u.count, u.materialIndex)
				}
				var p = t.boundingBox;
				null !== p && (this.boundingBox = p.clone());
				var d = t.boundingSphere;
				return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), ji.prototype = Object.create(Ri.prototype), ji.prototype.constructor = ji, Wi.prototype = Object.create(ki.prototype), Wi.prototype.constructor = Wi, qi.prototype = Object.create(Ri.prototype), qi.prototype.constructor = qi, Xi.prototype = Object.create(ki.prototype), Xi.prototype.constructor = Xi;
		var Yi = 0;

		function Ji() {
			Object.defineProperty(this, "id", {
				value: Yi++
			}), this.uuid = ze.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = w, this.side = p, this.flatShading = !1, this.vertexColors = v, this.opacity = 1, this.transparent = !1, this.blendSrc = B, this.blendDst = N, this.blendEquation = T, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = W, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0
		}

		function Zi(t) {
			Ji.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
				derivatives: !1,
				fragDepth: !1,
				drawBuffers: !1,
				shaderTextureLOD: !1
			}, this.defaultAttributeValues = {
				color: [1, 1, 1],
				uv: [0, 0],
				uv2: [0, 0]
			}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
		}

		function Qi(t, e) {
			this.origin = void 0 !== t ? t : new He, this.direction = void 0 !== e ? e : new He
		}

		function Ki(t, e, r) {
			this.a = void 0 !== t ? t : new He, this.b = void 0 !== e ? e : new He, this.c = void 0 !== r ? r : new He
		}

		function $i(t) {
			Ji.call(this), this.type = "MeshBasicMaterial", this.color = new yi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Z, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
		}

		function ta(t, e) {
			Ai.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new ki, this.material = void 0 !== e ? e : new $i({
				color: 16777215 * Math.random()
			}), this.drawMode = we, this.updateMorphTargets()
		}

		function ea(t, e, r, n) {
			var i, a, o = new yi(0),
				s = 0,
				c = null,
				h = 0;

			function l(t, r) {
				e.buffers.color.setClear(t.r, t.g, t.b, r, n)
			}
			return {
				getClearColor: function() {
					return o
				},
				setClearColor: function(t, e) {
					o.set(t), l(o, s = void 0 !== e ? e : 1)
				},
				getClearAlpha: function() {
					return s
				},
				setClearAlpha: function(t) {
					l(o, s = t)
				},
				render: function(e, n, u, f) {
					var m = n.background;
					if (null === m ? (l(o, s), c = null, h = 0) : m && m.isColor && (l(m, 1), f = !0, c = null, h = 0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLRenderTargetCube)) {
						void 0 === a && ((a = new ta(new Wi(1, 1, 1), new Zi({
							type: "BackgroundCubeMaterial",
							uniforms: fi(bi.cube.uniforms),
							vertexShader: bi.cube.vertexShader,
							fragmentShader: bi.cube.fragmentShader,
							side: d,
							depthTest: !1,
							depthWrite: !1,
							fog: !1
						}))).geometry.removeAttribute("normal"), a.geometry.removeAttribute("uv"), a.onBeforeRender = function(t, e, r) {
							this.matrixWorld.copyPosition(r.matrixWorld)
						}, Object.defineProperty(a.material, "map", {
							get: function() {
								return this.uniforms.tCube.value
							}
						}), r.update(a));
						var g = m.isWebGLRenderTargetCube ? m.texture : m;
						a.material.uniforms.tCube.value = g, a.material.uniforms.tFlip.value = m.isWebGLRenderTargetCube ? 1 : -1, c === m && h === g.version || (a.material.needsUpdate = !0, c = m, h = g.version), e.unshift(a, a.geometry, a.material, 0, 0, null)
					} else m && m.isTexture && (void 0 === i && ((i = new ta(new Xi(2, 2), new Zi({
						type: "BackgroundMaterial",
						uniforms: fi(bi.background.uniforms),
						vertexShader: bi.background.vertexShader,
						fragmentShader: bi.background.fragmentShader,
						side: p,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					}))).geometry.removeAttribute("normal"), Object.defineProperty(i.material, "map", {
						get: function() {
							return this.uniforms.t2D.value
						}
					}), r.update(i)), i.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), i.material.uniforms.uvTransform.value.copy(m.matrix), c === m && h === m.version || (i.material.needsUpdate = !0, c = m, h = m.version), e.unshift(i, i.geometry, i.material, 0, 0, null))
				}
			}
		}

		function ra(t, e, r, n) {
			var i;
			this.setMode = function(t) {
				i = t
			}, this.render = function(e, n) {
				t.drawArrays(i, e, n), r.update(n, i)
			}, this.renderInstances = function(a, o, s) {
				var c;
				if (n.isWebGL2) c = t;
				else if (null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
				c[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](i, o, s, a.maxInstancedCount), r.update(s, i, a.maxInstancedCount)
			}
		}

		function na(t, e, r) {
			var n;

			function i(e) {
				if ("highp" === e) {
					if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
					e = "mediump"
				}
				return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
			}
			var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
				o = void 0 !== r.precision ? r.precision : "highp",
				s = i(o);
			s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
			var c = !0 === r.logarithmicDepthBuffer,
				h = t.getParameter(34930),
				l = t.getParameter(35660),
				u = t.getParameter(3379),
				p = t.getParameter(34076),
				d = t.getParameter(34921),
				f = t.getParameter(36347),
				m = t.getParameter(36348),
				g = t.getParameter(36349),
				v = l > 0,
				y = a || !!e.get("OES_texture_float");
			return {
				isWebGL2: a,
				getMaxAnisotropy: function() {
					if (void 0 !== n) return n;
					var r = e.get("EXT_texture_filter_anisotropic");
					return n = null !== r ? t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
				},
				getMaxPrecision: i,
				precision: o,
				logarithmicDepthBuffer: c,
				maxTextures: h,
				maxVertexTextures: l,
				maxTextureSize: u,
				maxCubemapSize: p,
				maxAttributes: d,
				maxVertexUniforms: f,
				maxVaryings: m,
				maxFragmentUniforms: g,
				vertexTextures: v,
				floatFragmentTextures: y,
				floatVertexTextures: v && y,
				maxSamples: a ? t.getParameter(36183) : 0
			}
		}

		function ia() {
			var t = this,
				e = null,
				r = 0,
				n = !1,
				i = !1,
				a = new $e,
				o = new Ve,
				s = {
					value: null,
					needsUpdate: !1
				};

			function c() {
				s.value !== e && (s.value = e, s.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0
			}

			function h(e, r, n, i) {
				var c = null !== e ? e.length : 0,
					h = null;
				if (0 !== c) {
					if (h = s.value, !0 !== i || null === h) {
						var l = n + 4 * c,
							u = r.matrixWorldInverse;
						o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
						for (var p = 0, d = n; p !== c; ++p, d += 4) a.copy(e[p]).applyMatrix4(u, o), a.normal.toArray(h, d), h[d + 3] = a.constant
					}
					s.value = h, s.needsUpdate = !0
				}
				return t.numPlanes = c, h
			}
			this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, i, a) {
				var o = 0 !== t.length || i || 0 !== r || n;
				return n = i, e = h(t, a, 0), r = t.length, o
			}, this.beginShadows = function() {
				i = !0, h(null)
			}, this.endShadows = function() {
				i = !1, c()
			}, this.setState = function(t, a, o, l, u, p) {
				if (!n || null === t || 0 === t.length || i && !o) i ? h(null) : c();
				else {
					var d = i ? 0 : r,
						f = 4 * d,
						m = u.clippingState || null;
					s.value = m, m = h(t, l, f, p);
					for (var g = 0; g !== f; ++g) m[g] = e[g];
					u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
				}
			}
		}

		function aa(t) {
			var e = {};
			return {
				get: function(r) {
					if (void 0 !== e[r]) return e[r];
					var n;
					switch (r) {
						case "WEBGL_depth_texture":
							n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
							break;
						case "EXT_texture_filter_anisotropic":
							n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
							break;
						case "WEBGL_compressed_texture_s3tc":
							n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
							break;
						case "WEBGL_compressed_texture_pvrtc":
							n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
							break;
						default:
							n = t.getExtension(r)
					}
					return null === n && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."), e[r] = n, n
				}
			}
		}

		function oa(t, e, r) {
			var n = {},
				i = {};

			function a(t) {
				var o = t.target,
					s = n[o.id];
				for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
				o.removeEventListener("dispose", a), delete n[o.id];
				var h = i[s.id];
				h && (e.remove(h), delete i[s.id]), r.memory.geometries--
			}
			return {
				get: function(t, e) {
					var i = n[e.id];
					return i || (e.addEventListener("dispose", a), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new ki).setFromObject(t)), i = e._bufferGeometry), n[e.id] = i, r.memory.geometries++, i)
				},
				update: function(t) {
					var r = t.index,
						n = t.attributes;
					for (var i in null !== r && e.update(r, 34963), n) e.update(n[i], 34962);
					var a = t.morphAttributes;
					for (var i in a)
						for (var o = a[i], s = 0, c = o.length; s < c; s++) e.update(o[s], 34962)
				},
				getWireframeAttribute: function(t) {
					var r = i[t.id];
					if (r) return r;
					var n, a = [],
						o = t.index,
						s = t.attributes;
					if (null !== o)
						for (var c = 0, h = (n = o.array).length; c < h; c += 3) {
							var l = n[c + 0],
								u = n[c + 1],
								p = n[c + 2];
							a.push(l, u, u, p, p, l)
						} else
							for (c = 0, h = (n = s.position.array).length / 3 - 1; c < h; c += 3) l = c + 0, u = c + 1, p = c + 2, a.push(l, u, u, p, p, l);
					return r = new(Hi(a) > 65535 ? zi : Bi)(a, 1), e.update(r, 34963), i[t.id] = r, r
				}
			}
		}

		function sa(t, e, r, n) {
			var i, a, o;
			this.setMode = function(t) {
				i = t
			}, this.setIndex = function(t) {
				a = t.type, o = t.bytesPerElement
			}, this.render = function(e, n) {
				t.drawElements(i, n, a, e * o), r.update(n, i)
			}, this.renderInstances = function(s, c, h) {
				var l;
				if (n.isWebGL2) l = t;
				else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
				l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](i, h, a, c * o, s.maxInstancedCount), r.update(h, i, s.maxInstancedCount)
			}
		}

		function ca(t) {
			var e = {
				frame: 0,
				calls: 0,
				triangles: 0,
				points: 0,
				lines: 0
			};
			return {
				memory: {
					geometries: 0,
					textures: 0
				},
				render: e,
				programs: null,
				autoReset: !0,
				reset: function() {
					e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
				},
				update: function(t, r, n) {
					switch (n = n || 1, e.calls++, r) {
						case 4:
							e.triangles += n * (t / 3);
							break;
						case 5:
						case 6:
							e.triangles += n * (t - 2);
							break;
						case 1:
							e.lines += n * (t / 2);
							break;
						case 3:
							e.lines += n * (t - 1);
							break;
						case 2:
							e.lines += n * t;
							break;
						case 0:
							e.points += n * t;
							break;
						default:
							console.error("THREE.WebGLInfo: Unknown draw mode:", r)
					}
				}
			}
		}

		function ha(t, e) {
			return Math.abs(e[1]) - Math.abs(t[1])
		}

		function la(t) {
			var e = {},
				r = new Float32Array(8);
			return {
				update: function(n, i, a, o) {
					var s = n.morphTargetInfluences,
						c = s.length,
						h = e[i.id];
					if (void 0 === h) {
						h = [];
						for (var l = 0; l < c; l++) h[l] = [l, 0];
						e[i.id] = h
					}
					var u = a.morphTargets && i.morphAttributes.position,
						p = a.morphNormals && i.morphAttributes.normal;
					for (l = 0; l < c; l++) 0 !== (d = h[l])[1] && (u && i.removeAttribute("morphTarget" + l), p && i.removeAttribute("morphNormal" + l));
					for (l = 0; l < c; l++)(d = h[l])[0] = l, d[1] = s[l];
					for (h.sort(ha), l = 0; l < 8; l++) {
						var d;
						if (d = h[l]) {
							var f = d[0],
								m = d[1];
							if (m) {
								u && i.addAttribute("morphTarget" + l, u[f]), p && i.addAttribute("morphNormal" + l, p[f]), r[l] = m;
								continue
							}
						}
						r[l] = 0
					}
					o.getUniforms().setValue(t, "morphTargetInfluences", r)
				}
			}
		}

		function ua(t, e) {
			var r = {};
			return {
				update: function(n) {
					var i = e.render.frame,
						a = n.geometry,
						o = t.get(n, a);
					return r[o.id] !== i && (a.isGeometry && o.updateFromObject(n), t.update(o), r[o.id] = i), o
				},
				dispose: function() {
					r = {}
				}
			}
		}

		function pa(t, e, r, n, i, a, o, s, c, h) {
			t = void 0 !== t ? t : [], e = void 0 !== e ? e : ot, We.call(this, t, e, r, n, i, a, o, s, c, h), this.flipY = !1
		}

		function da(t, e, r, n) {
			We.call(this, null), this.image = {
				data: t,
				width: e,
				height: r,
				depth: n
			}, this.magFilter = gt, this.minFilter = gt, this.generateMipmaps = !1, this.flipY = !1
		}
		Ji.prototype = Object.assign(Object.create(t.prototype), {
			constructor: Ji,
			isMaterial: !0,
			onBeforeCompile: function() {},
			setValues: function(t) {
				if (void 0 !== t)
					for (var e in t) {
						var r = t[e];
						if (void 0 !== r)
							if ("shading" !== e) {
								var n = this[e];
								void 0 !== n ? n && n.isColor ? n.set(r) : n && n.isVector3 && r && r.isVector3 ? n.copy(r) : this[e] = r : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
							} else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === m;
						else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
					}
			},
			toJSON: function(t) {
				var e = void 0 === t || "string" == typeof t;
				e && (t = {
					textures: {},
					images: {}
				});
				var r = {
					metadata: {
						version: 4.5,
						type: "Material",
						generator: "Material.toJSON"
					}
				};

				function n(t) {
					var e = [];
					for (var r in t) {
						var n = t[r];
						delete n.metadata, e.push(n)
					}
					return e
				}
				if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color && this.color.isColor && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (r.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), void 0 !== this.clearCoat && (r.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (r.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (r.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (r.aoMap = this.aoMap.toJSON(t).uuid, r.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(t).uuid, r.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(t).uuid, r.normalMapType = this.normalMapType, r.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(t).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(t).uuid, r.reflectivity = this.reflectivity, void 0 !== this.combine && (r.combine = this.combine), void 0 !== this.envMapIntensity && (r.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (r.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== w && (r.blending = this.blending), !0 === this.flatShading && (r.flatShading = this.flatShading), this.side !== p && (r.side = this.side), this.vertexColors !== v && (r.vertexColors = this.vertexColors), this.opacity < 1 && (r.opacity = this.opacity), !0 === this.transparent && (r.transparent = this.transparent), r.depthFunc = this.depthFunc, r.depthTest = this.depthTest, r.depthWrite = this.depthWrite, 0 !== this.rotation && (r.rotation = this.rotation), !0 === this.polygonOffset && (r.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (r.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (r.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (r.linewidth = this.linewidth), void 0 !== this.dashSize && (r.dashSize = this.dashSize), void 0 !== this.gapSize && (r.gapSize = this.gapSize), void 0 !== this.scale && (r.scale = this.scale), !0 === this.dithering && (r.dithering = !0), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (r.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (r.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (r.morphTargets = !0), !0 === this.skinning && (r.skinning = !0), !1 === this.visible && (r.visible = !1), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), e) {
					var i = n(t.textures),
						a = n(t.images);
					i.length > 0 && (r.textures = i), a.length > 0 && (r.images = a)
				}
				return r
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
				var e = t.clippingPlanes,
					r = null;
				if (null !== e) {
					var n = e.length;
					r = new Array(n);
					for (var i = 0; i !== n; ++i) r[i] = e[i].clone()
				}
				return this.clippingPlanes = r, this.shadowSide = t.shadowSide, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Zi.prototype = Object.create(Ji.prototype), Zi.prototype.constructor = Zi, Zi.prototype.isShaderMaterial = !0, Zi.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = fi(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
		}, Zi.prototype.toJSON = function(t) {
			var e = Ji.prototype.toJSON.call(this, t);
			for (var r in e.uniforms = {}, this.uniforms) {
				var n = this.uniforms[r].value;
				n && n.isTexture ? e.uniforms[r] = {
					type: "t",
					value: n.toJSON(t).uuid
				} : n && n.isColor ? e.uniforms[r] = {
					type: "c",
					value: n.getHex()
				} : n && n.isVector2 ? e.uniforms[r] = {
					type: "v2",
					value: n.toArray()
				} : n && n.isVector3 ? e.uniforms[r] = {
					type: "v3",
					value: n.toArray()
				} : n && n.isVector4 ? e.uniforms[r] = {
					type: "v4",
					value: n.toArray()
				} : n && n.isMatrix3 ? e.uniforms[r] = {
					type: "m3",
					value: n.toArray()
				} : n && n.isMatrix4 ? e.uniforms[r] = {
					type: "m4",
					value: n.toArray()
				} : e.uniforms[r] = {
					value: n
				}
			}
			Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
			var i = {};
			for (var a in this.extensions) !0 === this.extensions[a] && (i[a] = !0);
			return Object.keys(i).length > 0 && (e.extensions = i), e
		}, Object.assign(Qi.prototype, {
			set: function(t, e) {
				return this.origin.copy(t), this.direction.copy(e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.origin.copy(t.origin), this.direction.copy(t.direction), this
			},
			at: function(t, e) {
				return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new He), e.copy(this.direction).multiplyScalar(t).add(this.origin)
			},
			lookAt: function(t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this
			},
			recast: function() {
				var t = new He;
				return function(e) {
					return this.origin.copy(this.at(e, t)), this
				}
			}(),
			closestPointToPoint: function(t, e) {
				void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new He), e.subVectors(t, this.origin);
				var r = e.dot(this.direction);
				return r < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(r).add(this.origin)
			},
			distanceToPoint: function(t) {
				return Math.sqrt(this.distanceSqToPoint(t))
			},
			distanceSqToPoint: function() {
				var t = new He;
				return function(e) {
					var r = t.subVectors(e, this.origin).dot(this.direction);
					return r < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(r).add(this.origin), t.distanceToSquared(e))
				}
			}(),
			distanceSqToSegment: function() {
				var t = new He,
					e = new He,
					r = new He;
				return function(n, i, a, o) {
					t.copy(n).add(i).multiplyScalar(.5), e.copy(i).sub(n).normalize(), r.copy(this.origin).sub(t);
					var s, c, h, l, u = .5 * n.distanceTo(i),
						p = -this.direction.dot(e),
						d = r.dot(this.direction),
						f = -r.dot(e),
						m = r.lengthSq(),
						g = Math.abs(1 - p * p);
					if (g > 0)
						if (c = p * d - f, l = u * g, (s = p * f - d) >= 0)
							if (c >= -l)
								if (c <= l) {
									var v = 1 / g;
									h = (s *= v) * (s + p * (c *= v) + 2 * d) + c * (p * s + c + 2 * f) + m
								} else c = u, h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + m;
					else c = -u, h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + m;
					else c <= -l ? h = -(s = Math.max(0, -(-p * u + d))) * s + (c = s > 0 ? -u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m : c <= l ? (s = 0, h = (c = Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m) : h = -(s = Math.max(0, -(p * u + d))) * s + (c = s > 0 ? u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m;
					else c = p > 0 ? -u : u, h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + m;
					return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(e).multiplyScalar(c).add(t), h
				}
			}(),
			intersectSphere: function() {
				var t = new He;
				return function(e, r) {
					t.subVectors(e.center, this.origin);
					var n = t.dot(this.direction),
						i = t.dot(t) - n * n,
						a = e.radius * e.radius;
					if (i > a) return null;
					var o = Math.sqrt(a - i),
						s = n - o,
						c = n + o;
					return s < 0 && c < 0 ? null : s < 0 ? this.at(c, r) : this.at(s, r)
				}
			}(),
			intersectsSphere: function(t) {
				return this.distanceSqToPoint(t.center) <= t.radius * t.radius
			},
			distanceToPlane: function(t) {
				var e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				var r = -(this.origin.dot(t.normal) + t.constant) / e;
				return r >= 0 ? r : null
			},
			intersectPlane: function(t, e) {
				var r = this.distanceToPlane(t);
				return null === r ? null : this.at(r, e)
			},
			intersectsPlane: function(t) {
				var e = t.distanceToPoint(this.origin);
				return 0 === e || t.normal.dot(this.direction) * e < 0
			},
			intersectBox: function(t, e) {
				var r, n, i, a, o, s, c = 1 / this.direction.x,
					h = 1 / this.direction.y,
					l = 1 / this.direction.z,
					u = this.origin;
				return c >= 0 ? (r = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (r = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), h >= 0 ? (i = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (i = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), r > a || i > n ? null : ((i > r || r != r) && (r = i), (a < n || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), r > s || o > n ? null : ((o > r || r != r) && (r = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(r >= 0 ? r : n, e)))
			},
			intersectsBox: function() {
				var t = new He;
				return function(e) {
					return null !== this.intersectBox(e, t)
				}
			}(),
			intersectTriangle: function() {
				var t = new He,
					e = new He,
					r = new He,
					n = new He;
				return function(i, a, o, s, c) {
					e.subVectors(a, i), r.subVectors(o, i), n.crossVectors(e, r);
					var h, l = this.direction.dot(n);
					if (l > 0) {
						if (s) return null;
						h = 1
					} else {
						if (!(l < 0)) return null;
						h = -1, l = -l
					}
					t.subVectors(this.origin, i);
					var u = h * this.direction.dot(r.crossVectors(t, r));
					if (u < 0) return null;
					var p = h * this.direction.dot(e.cross(t));
					if (p < 0) return null;
					if (u + p > l) return null;
					var d = -h * t.dot(n);
					return d < 0 ? null : this.at(d / l, c)
				}
			}(),
			applyMatrix4: function(t) {
				return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
			},
			equals: function(t) {
				return t.origin.equals(this.origin) && t.direction.equals(this.direction)
			}
		}), Object.assign(Ki, {
			getNormal: function() {
				var t = new He;
				return function(e, r, n, i) {
					void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new He), i.subVectors(n, r), t.subVectors(e, r), i.cross(t);
					var a = i.lengthSq();
					return a > 0 ? i.multiplyScalar(1 / Math.sqrt(a)) : i.set(0, 0, 0)
				}
			}(),
			getBarycoord: function() {
				var t = new He,
					e = new He,
					r = new He;
				return function(n, i, a, o, s) {
					t.subVectors(o, i), e.subVectors(a, i), r.subVectors(n, i);
					var c = t.dot(t),
						h = t.dot(e),
						l = t.dot(r),
						u = e.dot(e),
						p = e.dot(r),
						d = c * u - h * h;
					if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new He), 0 === d) return s.set(-2, -1, -1);
					var f = 1 / d,
						m = (u * l - h * p) * f,
						g = (c * p - h * l) * f;
					return s.set(1 - m - g, g, m)
				}
			}(),
			containsPoint: function() {
				var t = new He;
				return function(e, r, n, i) {
					return Ki.getBarycoord(e, r, n, i, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
				}
			}(),
			getUV: function() {
				var t = new He;
				return function(e, r, n, i, a, o, s, c) {
					return this.getBarycoord(e, r, n, i, t), c.set(0, 0), c.addScaledVector(a, t.x), c.addScaledVector(o, t.y), c.addScaledVector(s, t.z), c
				}
			}()
		}), Object.assign(Ki.prototype, {
			set: function(t, e, r) {
				return this.a.copy(t), this.b.copy(e), this.c.copy(r), this
			},
			setFromPointsAndIndices: function(t, e, r, n) {
				return this.a.copy(t[e]), this.b.copy(t[r]), this.c.copy(t[n]), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
			},
			getArea: function() {
				var t = new He,
					e = new He;
				return function() {
					return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
				}
			}(),
			getMidpoint: function(t) {
				return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new He), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
			},
			getNormal: function(t) {
				return Ki.getNormal(this.a, this.b, this.c, t)
			},
			getPlane: function(t) {
				return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new He), t.setFromCoplanarPoints(this.a, this.b, this.c)
			},
			getBarycoord: function(t, e) {
				return Ki.getBarycoord(t, this.a, this.b, this.c, e)
			},
			containsPoint: function(t) {
				return Ki.containsPoint(t, this.a, this.b, this.c)
			},
			getUV: function(t, e, r, n, i) {
				return Ki.getUV(t, this.a, this.b, this.c, e, r, n, i)
			},
			intersectsBox: function(t) {
				return t.intersectsTriangle(this)
			},
			closestPointToPoint: function() {
				var t = new He,
					e = new He,
					r = new He,
					n = new He,
					i = new He,
					a = new He;
				return function(o, s) {
					void 0 === s && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), s = new He);
					var c, h, l = this.a,
						u = this.b,
						p = this.c;
					t.subVectors(u, l), e.subVectors(p, l), n.subVectors(o, l);
					var d = t.dot(n),
						f = e.dot(n);
					if (d <= 0 && f <= 0) return s.copy(l);
					i.subVectors(o, u);
					var m = t.dot(i),
						g = e.dot(i);
					if (m >= 0 && g <= m) return s.copy(u);
					var v = d * g - m * f;
					if (v <= 0 && d >= 0 && m <= 0) return c = d / (d - m), s.copy(l).addScaledVector(t, c);
					a.subVectors(o, p);
					var y = t.dot(a),
						x = e.dot(a);
					if (x >= 0 && y <= x) return s.copy(p);
					var b = y * f - d * x;
					if (b <= 0 && f >= 0 && x <= 0) return h = f / (f - x), s.copy(l).addScaledVector(e, h);
					var w = m * x - y * g;
					if (w <= 0 && g - m >= 0 && y - x >= 0) return r.subVectors(p, u), h = (g - m) / (g - m + (y - x)), s.copy(u).addScaledVector(r, h);
					var _ = 1 / (w + b + v);
					return c = b * _, h = v * _, s.copy(l).addScaledVector(t, c).addScaledVector(e, h)
				}
			}(),
			equals: function(t) {
				return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
			}
		}), $i.prototype = Object.create(Ji.prototype), $i.prototype.constructor = $i, $i.prototype.isMeshBasicMaterial = !0, $i.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
		}, ta.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: ta,
			isMesh: !0,
			setDrawMode: function(t) {
				this.drawMode = t
			},
			copy: function(t) {
				return Ai.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
			},
			updateMorphTargets: function() {
				var t, e, r, n = this.geometry;
				if (n.isBufferGeometry) {
					var i = n.morphAttributes,
						a = Object.keys(i);
					if (a.length > 0) {
						var o = i[a[0]];
						if (void 0 !== o)
							for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t
					}
				} else {
					var s = n.morphTargets;
					void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
				}
			},
			raycast: function() {
				var t = new Ue,
					e = new Qi,
					r = new Ke,
					n = new He,
					i = new He,
					a = new He,
					o = new He,
					s = new He,
					c = new He,
					h = new Fe,
					l = new Fe,
					u = new Fe,
					p = new He,
					m = new He;

				function g(t, e, r, n, i, a, o, s) {
					if (null === (e.side === d ? n.intersectTriangle(o, a, i, !0, s) : n.intersectTriangle(i, a, o, e.side !== f, s))) return null;
					m.copy(s), m.applyMatrix4(t.matrixWorld);
					var c = r.ray.origin.distanceTo(m);
					return c < r.near || c > r.far ? null : {
						distance: c,
						point: m.clone(),
						object: t
					}
				}

				function v(t, e, r, o, s, c, d, f, m) {
					n.fromBufferAttribute(s, d), i.fromBufferAttribute(s, f), a.fromBufferAttribute(s, m);
					var v = g(t, e, r, o, n, i, a, p);
					if (v) {
						c && (h.fromBufferAttribute(c, d), l.fromBufferAttribute(c, f), u.fromBufferAttribute(c, m), v.uv = Ki.getUV(p, n, i, a, h, l, u, new Fe));
						var y = new Mi(d, f, m);
						Ki.getNormal(n, i, a, y.normal), v.face = y
					}
					return v
				}
				return function(d, f) {
					var m, y = this.geometry,
						x = this.material,
						b = this.matrixWorld;
					if (void 0 !== x && (null === y.boundingSphere && y.computeBoundingSphere(), r.copy(y.boundingSphere), r.applyMatrix4(b), !1 !== d.ray.intersectsSphere(r) && (t.getInverse(b), e.copy(d.ray).applyMatrix4(t), null === y.boundingBox || !1 !== e.intersectsBox(y.boundingBox))))
						if (y.isBufferGeometry) {
							var w, _, M, S, E, T, A, L, R, C = y.index,
								P = y.attributes.position,
								O = y.attributes.uv,
								I = y.groups,
								D = y.drawRange;
							if (null !== C)
								if (Array.isArray(x))
									for (S = 0, T = I.length; S < T; S++)
										for (R = x[(L = I[S]).materialIndex], E = Math.max(L.start, D.start), A = Math.min(L.start + L.count, D.start + D.count); E < A; E += 3) w = C.getX(E), _ = C.getX(E + 1), M = C.getX(E + 2), (m = v(this, R, d, e, P, O, w, _, M)) && (m.faceIndex = Math.floor(E / 3), m.face.materialIndex = L.materialIndex, f.push(m));
								else
									for (S = Math.max(0, D.start), T = Math.min(C.count, D.start + D.count); S < T; S += 3) w = C.getX(S), _ = C.getX(S + 1), M = C.getX(S + 2), (m = v(this, x, d, e, P, O, w, _, M)) && (m.faceIndex = Math.floor(S / 3), f.push(m));
							else if (void 0 !== P)
								if (Array.isArray(x))
									for (S = 0, T = I.length; S < T; S++)
										for (R = x[(L = I[S]).materialIndex], E = Math.max(L.start, D.start), A = Math.min(L.start + L.count, D.start + D.count); E < A; E += 3)(m = v(this, R, d, e, P, O, w = E, _ = E + 1, M = E + 2)) && (m.faceIndex = Math.floor(E / 3), m.face.materialIndex = L.materialIndex, f.push(m));
								else
									for (S = Math.max(0, D.start), T = Math.min(P.count, D.start + D.count); S < T; S += 3)(m = v(this, x, d, e, P, O, w = S, _ = S + 1, M = S + 2)) && (m.faceIndex = Math.floor(S / 3), f.push(m))
						} else if (y.isGeometry) {
						var B, N, z, F, U = Array.isArray(x),
							G = y.vertices,
							H = y.faces,
							V = y.faceVertexUvs[0];
						V.length > 0 && (F = V);
						for (var k = 0, j = H.length; k < j; k++) {
							var W = H[k],
								q = U ? x[W.materialIndex] : x;
							if (void 0 !== q) {
								if (B = G[W.a], N = G[W.b], z = G[W.c], !0 === q.morphTargets) {
									var X = y.morphTargets,
										Y = this.morphTargetInfluences;
									n.set(0, 0, 0), i.set(0, 0, 0), a.set(0, 0, 0);
									for (var J = 0, Z = X.length; J < Z; J++) {
										var Q = Y[J];
										if (0 !== Q) {
											var K = X[J].vertices;
											n.addScaledVector(o.subVectors(K[W.a], B), Q), i.addScaledVector(s.subVectors(K[W.b], N), Q), a.addScaledVector(c.subVectors(K[W.c], z), Q)
										}
									}
									n.add(B), i.add(N), a.add(z), B = n, N = i, z = a
								}
								if (m = g(this, q, d, e, B, N, z, p)) {
									if (F && F[k]) {
										var $ = F[k];
										h.copy($[0]), l.copy($[1]), u.copy($[2]), m.uv = Ki.getUV(p, B, N, z, h, l, u, new Fe)
									}
									m.face = W, m.faceIndex = k, f.push(m)
								}
							}
						}
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), pa.prototype = Object.create(We.prototype), pa.prototype.constructor = pa, pa.prototype.isCubeTexture = !0, Object.defineProperty(pa.prototype, "images", {
			get: function() {
				return this.image
			},
			set: function(t) {
				this.image = t
			}
		}), da.prototype = Object.create(We.prototype), da.prototype.constructor = da, da.prototype.isDataTexture3D = !0;
		var fa = new We,
			ma = new da,
			ga = new pa;

		function va() {
			this.seq = [], this.map = {}
		}
		var ya = [],
			xa = [],
			ba = new Float32Array(16),
			wa = new Float32Array(9),
			_a = new Float32Array(4);

		function Ma(t, e, r) {
			var n = t[0];
			if (n <= 0 || n > 0) return t;
			var i = e * r,
				a = ya[i];
			if (void 0 === a && (a = new Float32Array(i), ya[i] = a), 0 !== e) {
				n.toArray(a, 0);
				for (var o = 1, s = 0; o !== e; ++o) s += r, t[o].toArray(a, s)
			}
			return a
		}

		function Sa(t, e) {
			if (t.length !== e.length) return !1;
			for (var r = 0, n = t.length; r < n; r++)
				if (t[r] !== e[r]) return !1;
			return !0
		}

		function Ea(t, e) {
			for (var r = 0, n = e.length; r < n; r++) t[r] = e[r]
		}

		function Ta(t, e) {
			var r = xa[e];
			void 0 === r && (r = new Int32Array(e), xa[e] = r);
			for (var n = 0; n !== e; ++n) r[n] = t.allocTextureUnit();
			return r
		}

		function Aa(t, e) {
			var r = this.cache;
			r[0] !== e && (t.uniform1f(this.addr, e), r[0] = e)
		}

		function La(t, e) {
			var r = this.cache;
			r[0] !== e && (t.uniform1i(this.addr, e), r[0] = e)
		}

		function Ra(t, e) {
			var r = this.cache;
			if (void 0 !== e.x) r[0] === e.x && r[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), r[0] = e.x, r[1] = e.y);
			else {
				if (Sa(r, e)) return;
				t.uniform2fv(this.addr, e), Ea(r, e)
			}
		}

		function Ca(t, e) {
			var r = this.cache;
			if (void 0 !== e.x) r[0] === e.x && r[1] === e.y && r[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), r[0] = e.x, r[1] = e.y, r[2] = e.z);
			else if (void 0 !== e.r) r[0] === e.r && r[1] === e.g && r[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), r[0] = e.r, r[1] = e.g, r[2] = e.b);
			else {
				if (Sa(r, e)) return;
				t.uniform3fv(this.addr, e), Ea(r, e)
			}
		}

		function Pa(t, e) {
			var r = this.cache;
			if (void 0 !== e.x) r[0] === e.x && r[1] === e.y && r[2] === e.z && r[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), r[0] = e.x, r[1] = e.y, r[2] = e.z, r[3] = e.w);
			else {
				if (Sa(r, e)) return;
				t.uniform4fv(this.addr, e), Ea(r, e)
			}
		}

		function Oa(t, e) {
			var r = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Sa(r, e)) return;
				t.uniformMatrix2fv(this.addr, !1, e), Ea(r, e)
			} else {
				if (Sa(r, n)) return;
				_a.set(n), t.uniformMatrix2fv(this.addr, !1, _a), Ea(r, n)
			}
		}

		function Ia(t, e) {
			var r = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Sa(r, e)) return;
				t.uniformMatrix3fv(this.addr, !1, e), Ea(r, e)
			} else {
				if (Sa(r, n)) return;
				wa.set(n), t.uniformMatrix3fv(this.addr, !1, wa), Ea(r, n)
			}
		}

		function Da(t, e) {
			var r = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Sa(r, e)) return;
				t.uniformMatrix4fv(this.addr, !1, e), Ea(r, e)
			} else {
				if (Sa(r, n)) return;
				ba.set(n), t.uniformMatrix4fv(this.addr, !1, ba), Ea(r, n)
			}
		}

		function Ba(t, e, r) {
			var n = this.cache,
				i = r.allocTextureUnit();
			n[0] !== i && (t.uniform1i(this.addr, i), n[0] = i), r.setTexture2D(e || fa, i)
		}

		function Na(t, e, r) {
			var n = this.cache,
				i = r.allocTextureUnit();
			n[0] !== i && (t.uniform1i(this.addr, i), n[0] = i), r.setTexture3D(e || ma, i)
		}

		function za(t, e, r) {
			var n = this.cache,
				i = r.allocTextureUnit();
			n[0] !== i && (t.uniform1i(this.addr, i), n[0] = i), r.setTextureCube(e || ga, i)
		}

		function Fa(t, e) {
			var r = this.cache;
			Sa(r, e) || (t.uniform2iv(this.addr, e), Ea(r, e))
		}

		function Ua(t, e) {
			var r = this.cache;
			Sa(r, e) || (t.uniform3iv(this.addr, e), Ea(r, e))
		}

		function Ga(t, e) {
			var r = this.cache;
			Sa(r, e) || (t.uniform4iv(this.addr, e), Ea(r, e))
		}

		function Ha(t) {
			switch (t) {
				case 5126:
					return Aa;
				case 35664:
					return Ra;
				case 35665:
					return Ca;
				case 35666:
					return Pa;
				case 35674:
					return Oa;
				case 35675:
					return Ia;
				case 35676:
					return Da;
				case 35678:
				case 36198:
					return Ba;
				case 35679:
					return Na;
				case 35680:
					return za;
				case 5124:
				case 35670:
					return La;
				case 35667:
				case 35671:
					return Fa;
				case 35668:
				case 35672:
					return Ua;
				case 35669:
				case 35673:
					return Ga
			}
		}

		function Va(t, e) {
			var r = this.cache;
			Sa(r, e) || (t.uniform1fv(this.addr, e), Ea(r, e))
		}

		function ka(t, e) {
			var r = this.cache;
			Sa(r, e) || (t.uniform1iv(this.addr, e), Ea(r, e))
		}

		function ja(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 2);
			Sa(r, n) || (t.uniform2fv(this.addr, n), this.updateCache(n))
		}

		function Wa(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 3);
			Sa(r, n) || (t.uniform3fv(this.addr, n), this.updateCache(n))
		}

		function qa(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 4);
			Sa(r, n) || (t.uniform4fv(this.addr, n), this.updateCache(n))
		}

		function Xa(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 4);
			Sa(r, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
		}

		function Ya(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 9);
			Sa(r, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
		}

		function Ja(t, e) {
			var r = this.cache,
				n = Ma(e, this.size, 16);
			Sa(r, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
		}

		function Za(t, e, r) {
			var n = this.cache,
				i = e.length,
				a = Ta(r, i);
			!1 === Sa(n, a) && (t.uniform1iv(this.addr, a), Ea(n, a));
			for (var o = 0; o !== i; ++o) r.setTexture2D(e[o] || fa, a[o])
		}

		function Qa(t, e, r) {
			var n = this.cache,
				i = e.length,
				a = Ta(r, i);
			!1 === Sa(n, a) && (t.uniform1iv(this.addr, a), Ea(n, a));
			for (var o = 0; o !== i; ++o) r.setTextureCube(e[o] || ga, a[o])
		}

		function Ka(t) {
			switch (t) {
				case 5126:
					return Va;
				case 35664:
					return ja;
				case 35665:
					return Wa;
				case 35666:
					return qa;
				case 35674:
					return Xa;
				case 35675:
					return Ya;
				case 35676:
					return Ja;
				case 35678:
					return Za;
				case 35680:
					return Qa;
				case 5124:
				case 35670:
					return ka;
				case 35667:
				case 35671:
					return Fa;
				case 35668:
				case 35672:
					return Ua;
				case 35669:
				case 35673:
					return Ga
			}
		}

		function $a(t, e, r) {
			this.id = t, this.addr = r, this.cache = [], this.setValue = Ha(e.type)
		}

		function to(t, e, r) {
			this.id = t, this.addr = r, this.cache = [], this.size = e.size, this.setValue = Ka(e.type)
		}

		function eo(t) {
			this.id = t, va.call(this)
		}
		to.prototype.updateCache = function(t) {
			var e = this.cache;
			t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Ea(e, t)
		}, eo.prototype.setValue = function(t, e, r) {
			for (var n = this.seq, i = 0, a = n.length; i !== a; ++i) {
				var o = n[i];
				o.setValue(t, e[o.id], r)
			}
		};
		var ro = /([\w\d_]+)(\])?(\[|\.)?/g;

		function no(t, e) {
			t.seq.push(e), t.map[e.id] = e
		}

		function io(t, e, r) {
			var n = t.name,
				i = n.length;
			for (ro.lastIndex = 0;;) {
				var a = ro.exec(n),
					o = ro.lastIndex,
					s = a[1],
					c = "]" === a[2],
					h = a[3];
				if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === i) {
					no(r, void 0 === h ? new $a(s, t, e) : new to(s, t, e));
					break
				}
				var l = r.map[s];
				void 0 === l && no(r, l = new eo(s)), r = l
			}
		}

		function ao(t, e, r) {
			va.call(this), this.renderer = r;
			for (var n = t.getProgramParameter(e, 35718), i = 0; i < n; ++i) {
				var a = t.getActiveUniform(e, i);
				io(a, t.getUniformLocation(e, a.name), this)
			}
		}

		function oo(t) {
			for (var e = t.split("\n"), r = 0; r < e.length; r++) e[r] = r + 1 + ": " + e[r];
			return e.join("\n")
		}

		function so(t, e, r) {
			var n = t.createShader(e);
			return t.shaderSource(n, r), t.compileShader(n), !1 === t.getShaderParameter(n, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === e ? "vertex" : "fragment", t.getShaderInfoLog(n), oo(r)), n
		}
		ao.prototype.setValue = function(t, e, r) {
			var n = this.map[e];
			void 0 !== n && n.setValue(t, r, this.renderer)
		}, ao.prototype.setOptional = function(t, e, r) {
			var n = e[r];
			void 0 !== n && this.setValue(t, r, n)
		}, ao.upload = function(t, e, r, n) {
			for (var i = 0, a = e.length; i !== a; ++i) {
				var o = e[i],
					s = r[o.id];
				!1 !== s.needsUpdate && o.setValue(t, s.value, n)
			}
		}, ao.seqWithValue = function(t, e) {
			for (var r = [], n = 0, i = t.length; n !== i; ++n) {
				var a = t[n];
				a.id in e && r.push(a)
			}
			return r
		};
		var co = 0;

		function ho(t) {
			switch (t) {
				case Se:
					return ["Linear", "( value )"];
				case Ee:
					return ["sRGB", "( value )"];
				case Ae:
					return ["RGBE", "( value )"];
				case Re:
					return ["RGBM", "( value, 7.0 )"];
				case Ce:
					return ["RGBM", "( value, 16.0 )"];
				case Pe:
					return ["RGBD", "( value, 256.0 )"];
				case Te:
					return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
				default:
					throw new Error("unsupported encoding: " + t)
			}
		}

		function lo(t, e) {
			var r = ho(e);
			return "vec4 " + t + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
		}

		function uo(t, e) {
			var r = ho(e);
			return "vec4 " + t + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
		}

		function po(t, e) {
			var r;
			switch (e) {
				case tt:
					r = "Linear";
					break;
				case et:
					r = "Reinhard";
					break;
				case rt:
					r = "Uncharted2";
					break;
				case nt:
					r = "OptimizedCineon";
					break;
				case it:
					r = "ACESFilmic";
					break;
				default:
					throw new Error("unsupported toneMapping: " + e)
			}
			return "vec3 " + t + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
		}

		function fo(t, e, r) {
			return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && r.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && r.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && r.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(vo).join("\n")
		}

		function mo(t) {
			var e = [];
			for (var r in t) {
				var n = t[r];
				!1 !== n && e.push("#define " + r + " " + n)
			}
			return e.join("\n")
		}

		function go(t, e) {
			for (var r = {}, n = t.getProgramParameter(e, 35721), i = 0; i < n; i++) {
				var a = t.getActiveAttrib(e, i).name;
				r[a] = t.getAttribLocation(e, a)
			}
			return r
		}

		function vo(t) {
			return "" !== t
		}

		function yo(t, e) {
			return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
		}

		function xo(t, e) {
			return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
		}

		function bo(t) {
			return t.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, function(t, e) {
				var r = di[e];
				if (void 0 === r) throw new Error("Can not resolve #include <" + e + ">");
				return bo(r)
			})
		}

		function wo(t) {
			return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, r, n) {
				for (var i = "", a = parseInt(e); a < parseInt(r); a++) i += n.replace(/\[ i \]/g, "[ " + a + " ]");
				return i
			})
		}

		function _o(t, e, r, n, i, a, o) {
			var s = t.context,
				c = n.defines,
				h = i.vertexShader,
				p = i.fragmentShader,
				d = "SHADOWMAP_TYPE_BASIC";
			a.shadowMapType === l ? d = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === u && (d = "SHADOWMAP_TYPE_PCF_SOFT");
			var f = "ENVMAP_TYPE_CUBE",
				m = "ENVMAP_MODE_REFLECTION",
				g = "ENVMAP_BLENDING_MULTIPLY";
			if (a.envMap) {
				switch (n.envMap.mapping) {
					case ot:
					case st:
						f = "ENVMAP_TYPE_CUBE";
						break;
					case ut:
					case pt:
						f = "ENVMAP_TYPE_CUBE_UV";
						break;
					case ct:
					case ht:
						f = "ENVMAP_TYPE_EQUIREC";
						break;
					case lt:
						f = "ENVMAP_TYPE_SPHERE"
				}
				switch (n.envMap.mapping) {
					case st:
					case ht:
						m = "ENVMAP_MODE_REFRACTION"
				}
				switch (n.combine) {
					case Z:
						g = "ENVMAP_BLENDING_MULTIPLY";
						break;
					case Q:
						g = "ENVMAP_BLENDING_MIX";
						break;
					case K:
						g = "ENVMAP_BLENDING_ADD"
				}
			}
			var v, y, x = t.gammaFactor > 0 ? t.gammaFactor : 1,
				b = o.isWebGL2 ? "" : fo(n.extensions, a, e),
				w = mo(c),
				_ = s.createProgram();
			if (n.isRawShaderMaterial ? ((v = [w].filter(vo).join("\n")).length > 0 && (v += "\n"), (y = [b, w].filter(vo).join("\n")).length > 0 && (y += "\n")) : (v = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, w, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + m : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + d : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(vo).join("\n"), y = [b, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, w, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + x, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + f : "", a.envMap ? "#define " + m : "", a.envMap ? "#define " + g : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + d : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== $ ? "#define TONE_MAPPING" : "", a.toneMapping !== $ ? di.tonemapping_pars_fragment : "", a.toneMapping !== $ ? po("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? di.encodings_pars_fragment : "", a.mapEncoding ? lo("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? lo("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? lo("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? lo("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? uo("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(vo).join("\n")), h = xo(h = yo(h = bo(h), a), a), p = xo(p = yo(p = bo(p), a), a), h = wo(h), p = wo(p), o.isWebGL2 && !n.isRawShaderMaterial) {
				var M = !1,
					S = /^\s*#version\s+300\s+es\s*\n/;
				n.isShaderMaterial && null !== h.match(S) && null !== p.match(S) && (M = !0, h = h.replace(S, ""), p = p.replace(S, "")), v = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + v, y = ["#version 300 es\n", "#define varying in", M ? "" : "out highp vec4 pc_fragColor;", M ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y
			}
			var E = y + p,
				T = so(s, 35633, v + h),
				A = so(s, 35632, E);
			s.attachShader(_, T), s.attachShader(_, A), void 0 !== n.index0AttributeName ? s.bindAttribLocation(_, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
			var L, R, C = s.getProgramInfoLog(_).trim(),
				P = s.getShaderInfoLog(T).trim(),
				O = s.getShaderInfoLog(A).trim(),
				I = !0,
				D = !0;
			return !1 === s.getProgramParameter(_, 35714) ? (I = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(_, 35715), "gl.getProgramInfoLog", C, P, O)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : "" !== P && "" !== O || (D = !1), D && (this.diagnostics = {
				runnable: I,
				material: n,
				programLog: C,
				vertexShader: {
					log: P,
					prefix: v
				},
				fragmentShader: {
					log: O,
					prefix: y
				}
			}), s.deleteShader(T), s.deleteShader(A), this.getUniforms = function() {
				return void 0 === L && (L = new ao(s, _, t)), L
			}, this.getAttributes = function() {
				return void 0 === R && (R = go(s, _)), R
			}, this.destroy = function() {
				s.deleteProgram(_), this.program = void 0
			}, Object.defineProperties(this, {
				uniforms: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
					}
				},
				attributes: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
					}
				}
			}), this.name = i.name, this.id = co++, this.code = r, this.usedTimes = 1, this.program = _, this.vertexShader = T, this.fragmentShader = A, this
		}

		function Mo(t, e, r) {
			var n = [],
				i = {
					MeshDepthMaterial: "depth",
					MeshDistanceMaterial: "distanceRGBA",
					MeshNormalMaterial: "normal",
					MeshBasicMaterial: "basic",
					MeshLambertMaterial: "lambert",
					MeshPhongMaterial: "phong",
					MeshToonMaterial: "phong",
					MeshStandardMaterial: "physical",
					MeshPhysicalMaterial: "physical",
					MeshMatcapMaterial: "matcap",
					LineBasicMaterial: "basic",
					LineDashedMaterial: "dashed",
					PointsMaterial: "points",
					ShadowMaterial: "shadow",
					SpriteMaterial: "sprite"
				},
				a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

			function o(t, e) {
				var r;
				return t ? t.isTexture ? r = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), r = t.texture.encoding) : r = Se, r === Se && e && (r = Te), r
			}
			this.getParameters = function(e, n, a, s, c, h, l) {
				var u = i[e.type],
					p = l.isSkinnedMesh ? function(t) {
						var e = t.skeleton.bones;
						if (r.floatVertexTextures) return 1024;
						var n = r.maxVertexUniforms,
							i = Math.floor((n - 20) / 4),
							a = Math.min(i, e.length);
						return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."), 0) : a
					}(l) : 0,
					m = r.precision;
				null !== e.precision && (m = r.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", m, "instead.");
				var g = t.getRenderTarget();
				return {
					shaderID: u,
					precision: m,
					supportsVertexTextures: r.vertexTextures,
					outputEncoding: o(g ? g.texture : null, t.gammaOutput),
					map: !!e.map,
					mapEncoding: o(e.map, t.gammaInput),
					matcap: !!e.matcap,
					matcapEncoding: o(e.matcap, t.gammaInput),
					envMap: !!e.envMap,
					envMapMode: e.envMap && e.envMap.mapping,
					envMapEncoding: o(e.envMap, t.gammaInput),
					envMapCubeUV: !!e.envMap && (e.envMap.mapping === ut || e.envMap.mapping === pt),
					lightMap: !!e.lightMap,
					aoMap: !!e.aoMap,
					emissiveMap: !!e.emissiveMap,
					emissiveMapEncoding: o(e.emissiveMap, t.gammaInput),
					bumpMap: !!e.bumpMap,
					normalMap: !!e.normalMap,
					objectSpaceNormalMap: e.normalMapType === Be,
					displacementMap: !!e.displacementMap,
					roughnessMap: !!e.roughnessMap,
					metalnessMap: !!e.metalnessMap,
					specularMap: !!e.specularMap,
					alphaMap: !!e.alphaMap,
					gradientMap: !!e.gradientMap,
					combine: e.combine,
					vertexColors: e.vertexColors,
					fog: !!s,
					useFog: e.fog,
					fogExp: s && s.isFogExp2,
					flatShading: e.flatShading,
					sizeAttenuation: e.sizeAttenuation,
					logarithmicDepthBuffer: r.logarithmicDepthBuffer,
					skinning: e.skinning && p > 0,
					maxBones: p,
					useVertexTexture: r.floatVertexTextures,
					morphTargets: e.morphTargets,
					morphNormals: e.morphNormals,
					maxMorphTargets: t.maxMorphTargets,
					maxMorphNormals: t.maxMorphNormals,
					numDirLights: n.directional.length,
					numPointLights: n.point.length,
					numSpotLights: n.spot.length,
					numRectAreaLights: n.rectArea.length,
					numHemiLights: n.hemi.length,
					numClippingPlanes: c,
					numClipIntersection: h,
					dithering: e.dithering,
					shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: t.toneMapping,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: e.premultipliedAlpha,
					alphaTest: e.alphaTest,
					doubleSided: e.side === f,
					flipSided: e.side === d,
					depthPacking: void 0 !== e.depthPacking && e.depthPacking
				}
			}, this.getProgramCode = function(e, r) {
				var n = [];
				if (r.shaderID ? n.push(r.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
					for (var i in e.defines) n.push(i), n.push(e.defines[i]);
				for (var o = 0; o < a.length; o++) n.push(r[a[o]]);
				return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.push(t.gammaFactor), n.join()
			}, this.acquireProgram = function(i, a, o, s) {
				for (var c, h = 0, l = n.length; h < l; h++) {
					var u = n[h];
					if (u.code === s) {
						++(c = u).usedTimes;
						break
					}
				}
				return void 0 === c && (c = new _o(t, e, s, i, a, o, r), n.push(c)), c
			}, this.releaseProgram = function(t) {
				if (0 == --t.usedTimes) {
					var e = n.indexOf(t);
					n[e] = n[n.length - 1], n.pop(), t.destroy()
				}
			}, this.programs = n
		}

		function So() {
			var t = new WeakMap;
			return {
				get: function(e) {
					var r = t.get(e);
					return void 0 === r && (r = {}, t.set(e, r)), r
				},
				remove: function(e) {
					t.delete(e)
				},
				update: function(e, r, n) {
					t.get(e)[r] = n
				},
				dispose: function() {
					t = new WeakMap
				}
			}
		}

		function Eo(t, e) {
			return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
		}

		function To(t, e) {
			return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
		}

		function Ao() {
			var t = [],
				e = 0,
				r = [],
				n = [];

			function i(r, n, i, a, o, s) {
				var c = t[e];
				return void 0 === c ? (c = {
					id: r.id,
					object: r,
					geometry: n,
					material: i,
					program: i.program,
					groupOrder: a,
					renderOrder: r.renderOrder,
					z: o,
					group: s
				}, t[e] = c) : (c.id = r.id, c.object = r, c.geometry = n, c.material = i, c.program = i.program, c.groupOrder = a, c.renderOrder = r.renderOrder, c.z = o, c.group = s), e++, c
			}
			return {
				opaque: r,
				transparent: n,
				init: function() {
					e = 0, r.length = 0, n.length = 0
				},
				push: function(t, e, a, o, s, c) {
					var h = i(t, e, a, o, s, c);
					(!0 === a.transparent ? n : r).push(h)
				},
				unshift: function(t, e, a, o, s, c) {
					var h = i(t, e, a, o, s, c);
					(!0 === a.transparent ? n : r).unshift(h)
				},
				sort: function() {
					r.length > 1 && r.sort(Eo), n.length > 1 && n.sort(To)
				}
			}
		}

		function Lo() {
			var t = {};

			function e(r) {
				var n = r.target;
				n.removeEventListener("dispose", e), delete t[n.id]
			}
			return {
				get: function(r, n) {
					var i, a = t[r.id];
					return void 0 === a ? (i = new Ao, t[r.id] = {}, t[r.id][n.id] = i, r.addEventListener("dispose", e)) : void 0 === (i = a[n.id]) && (i = new Ao, a[n.id] = i), i
				},
				dispose: function() {
					t = {}
				}
			}
		}

		function Ro() {
			var t = {};
			return {
				get: function(e) {
					if (void 0 !== t[e.id]) return t[e.id];
					var r;
					switch (e.type) {
						case "DirectionalLight":
							r = {
								direction: new He,
								color: new yi,
								shadow: !1,
								shadowBias: 0,
								shadowRadius: 1,
								shadowMapSize: new Fe
							};
							break;
						case "SpotLight":
							r = {
								position: new He,
								direction: new He,
								color: new yi,
								distance: 0,
								coneCos: 0,
								penumbraCos: 0,
								decay: 0,
								shadow: !1,
								shadowBias: 0,
								shadowRadius: 1,
								shadowMapSize: new Fe
							};
							break;
						case "PointLight":
							r = {
								position: new He,
								color: new yi,
								distance: 0,
								decay: 0,
								shadow: !1,
								shadowBias: 0,
								shadowRadius: 1,
								shadowMapSize: new Fe,
								shadowCameraNear: 1,
								shadowCameraFar: 1e3
							};
							break;
						case "HemisphereLight":
							r = {
								direction: new He,
								skyColor: new yi,
								groundColor: new yi
							};
							break;
						case "RectAreaLight":
							r = {
								color: new yi,
								position: new He,
								halfWidth: new He,
								halfHeight: new He
							}
					}
					return t[e.id] = r, r
				}
			}
		}
		var Co = 0;

		function Po() {
			var t = new Ro,
				e = {
					id: Co++,
					hash: {
						stateID: -1,
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						shadowsLength: -1
					},
					ambient: [0, 0, 0],
					directional: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					point: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: []
				},
				r = new He,
				n = new Ue,
				i = new Ue;
			return {
				setup: function(a, o, s) {
					for (var c = 0, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = a.length; v < y; v++) {
						var x = a[v],
							b = x.color,
							w = x.intensity,
							_ = x.distance,
							M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
						if (x.isAmbientLight) c += b.r * w, h += b.g * w, l += b.b * w;
						else if (x.isDirectionalLight) {
							if ((E = t.get(x)).color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(g), E.shadow = x.castShadow, x.castShadow) {
								var S = x.shadow;
								E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
							}
							e.directionalShadowMap[u] = M, e.directionalShadowMatrix[u] = x.shadow.matrix, e.directional[u] = E, u++
						} else if (x.isSpotLight)(E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(b).multiplyScalar(w), E.distance = _, E.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(g), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize), e.spotShadowMap[d] = M, e.spotShadowMatrix[d] = x.shadow.matrix, e.spot[d] = E, d++;
						else if (x.isRectAreaLight)(E = t.get(x)).color.copy(b).multiplyScalar(w), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), i.identity(), n.copy(x.matrixWorld), n.premultiply(g), i.extractRotation(n), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(i), E.halfHeight.applyMatrix4(i), e.rectArea[f] = E, f++;
						else if (x.isPointLight)(E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize, E.shadowCameraNear = S.camera.near, E.shadowCameraFar = S.camera.far), e.pointShadowMap[p] = M, e.pointShadowMatrix[p] = x.shadow.matrix, e.point[p] = E, p++;
						else if (x.isHemisphereLight) {
							var E;
							(E = t.get(x)).direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(g), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(w), E.groundColor.copy(x.groundColor).multiplyScalar(w), e.hemi[m] = E, m++
						}
					}
					e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = o.length
				},
				state: e
			}
		}

		function Oo() {
			var t = new Po,
				e = [],
				r = [];
			return {
				init: function() {
					e.length = 0, r.length = 0
				},
				state: {
					lightsArray: e,
					shadowsArray: r,
					lights: t
				},
				setupLights: function(n) {
					t.setup(e, r, n)
				},
				pushLight: function(t) {
					e.push(t)
				},
				pushShadow: function(t) {
					r.push(t)
				}
			}
		}

		function Io() {
			var t = {};

			function e(r) {
				var n = r.target;
				n.removeEventListener("dispose", e), delete t[n.id]
			}
			return {
				get: function(r, n) {
					var i;
					return void 0 === t[r.id] ? (i = new Oo, t[r.id] = {}, t[r.id][n.id] = i, r.addEventListener("dispose", e)) : void 0 === t[r.id][n.id] ? (i = new Oo, t[r.id][n.id] = i) : i = t[r.id][n.id], i
				},
				dispose: function() {
					t = {}
				}
			}
		}

		function Do(t) {
			Ji.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Oe, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
		}

		function Bo(t) {
			Ji.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new He, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
		}

		function No(t, e, r) {
			for (var n = new tr, i = new Ue, a = new Fe, o = new Fe(r, r), s = new He, c = new He, h = 1, u = 2, m = 1 + (h | u), g = new Array(m), v = new Array(m), y = {}, x = {
					0: d,
					1: p,
					2: f
				}, w = [new He(1, 0, 0), new He(-1, 0, 0), new He(0, 0, 1), new He(0, 0, -1), new He(0, 1, 0), new He(0, -1, 0)], _ = [new He(0, 1, 0), new He(0, 1, 0), new He(0, 1, 0), new He(0, 1, 0), new He(0, 0, 1), new He(0, 0, -1)], M = [new qe, new qe, new qe, new qe, new qe, new qe], S = 0; S !== m; ++S) {
				var E = 0 != (S & h),
					T = 0 != (S & u),
					A = new Do({
						depthPacking: Ie,
						morphTargets: E,
						skinning: T
					});
				g[S] = A;
				var L = new Bo({
					morphTargets: E,
					skinning: T
				});
				v[S] = L
			}
			var R = this;

			function C(e, r, n, i, a, o) {
				var s = e.geometry,
					c = null,
					l = g,
					p = e.customDepthMaterial;
				if (n && (l = v, p = e.customDistanceMaterial), p) c = p;
				else {
					var d = !1;
					r.morphTargets && (s && s.isBufferGeometry ? d = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (d = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === r.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
					var f = e.isSkinnedMesh && r.skinning,
						m = 0;
					d && (m |= h), f && (m |= u), c = l[m]
				}
				if (t.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length) {
					var b = c.uuid,
						w = r.uuid,
						_ = y[b];
					void 0 === _ && (_ = {}, y[b] = _);
					var M = _[w];
					void 0 === M && (M = c.clone(), _[w] = M), c = M
				}
				return c.visible = r.visible, c.wireframe = r.wireframe, c.side = null != r.shadowSide ? r.shadowSide : x[r.side], c.clipShadows = r.clipShadows, c.clippingPlanes = r.clippingPlanes, c.clipIntersection = r.clipIntersection, c.wireframeLinewidth = r.wireframeLinewidth, c.linewidth = r.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(i), c.nearDistance = a, c.farDistance = o), c
			}

			function P(r, i, a, o) {
				if (!1 !== r.visible) {
					if (r.layers.test(i.layers) && (r.isMesh || r.isLine || r.isPoints) && r.castShadow && (!r.frustumCulled || n.intersectsObject(r))) {
						r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, r.matrixWorld);
						var s = e.update(r),
							h = r.material;
						if (Array.isArray(h))
							for (var l = s.groups, u = 0, p = l.length; u < p; u++) {
								var d = l[u],
									f = h[d.materialIndex];
								if (f && f.visible) {
									var m = C(r, f, o, c, a.near, a.far);
									t.renderBufferDirect(a, null, s, m, r, d)
								}
							} else if (h.visible) {
								m = C(r, h, o, c, a.near, a.far);
								t.renderBufferDirect(a, null, s, m, r, null)
							}
					}
					for (var g = r.children, v = 0, y = g.length; v < y; v++) P(g[v], i, a, o)
				}
			}
			this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = l, this.render = function(e, r, h) {
				if (!1 !== R.enabled && (!1 !== R.autoUpdate || !1 !== R.needsUpdate) && 0 !== e.length) {
					var l, u = t.state;
					u.setBlending(b), u.buffers.color.setClear(1, 1, 1, 1), u.buffers.depth.setTest(!0), u.setScissorTest(!1);
					for (var p = 0, d = e.length; p < d; p++) {
						var f = e[p],
							m = f.shadow,
							g = f && f.isPointLight;
						if (void 0 !== m) {
							var v = m.camera;
							if (a.copy(m.mapSize), a.min(o), g) {
								var y = a.x,
									x = a.y;
								M[0].set(2 * y, x, y, x), M[1].set(0, x, y, x), M[2].set(3 * y, x, y, x), M[3].set(y, x, y, x), M[4].set(3 * y, 0, y, x), M[5].set(y, 0, y, x), a.x *= 4, a.y *= 2
							}
							if (null === m.map) {
								var S = {
									minFilter: gt,
									magFilter: gt,
									format: Nt
								};
								m.map = new Xe(a.x, a.y, S), m.map.texture.name = f.name + ".shadowMap", v.updateProjectionMatrix()
							}
							m.isSpotLightShadow && m.update(f);
							var E = m.map,
								T = m.matrix;
							c.setFromMatrixPosition(f.matrixWorld), v.position.copy(c), g ? (l = 6, T.makeTranslation(-c.x, -c.y, -c.z)) : (l = 1, s.setFromMatrixPosition(f.target.matrixWorld), v.lookAt(s), v.updateMatrixWorld(), T.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), T.multiply(v.projectionMatrix), T.multiply(v.matrixWorldInverse)), t.setRenderTarget(E), t.clear();
							for (var A = 0; A < l; A++) {
								if (g) {
									s.copy(v.position), s.add(w[A]), v.up.copy(_[A]), v.lookAt(s), v.updateMatrixWorld();
									var L = M[A];
									u.viewport(L)
								}
								i.multiplyMatrices(v.projectionMatrix, v.matrixWorldInverse), n.setFromMatrix(i), P(r, h, v, g)
							}
						} else console.warn("THREE.WebGLShadowMap:", f, "has no shadow.")
					}
					R.needsUpdate = !1
				}
			}
		}

		function zo(t, e, r, o) {
			var s = new function() {
					var e = !1,
						r = new qe,
						n = null,
						i = new qe(0, 0, 0, 0);
					return {
						setMask: function(r) {
							n === r || e || (t.colorMask(r, r, r, r), n = r)
						},
						setLocked: function(t) {
							e = t
						},
						setClear: function(e, n, a, o, s) {
							!0 === s && (e *= o, n *= o, a *= o), r.set(e, n, a, o), !1 === i.equals(r) && (t.clearColor(e, n, a, o), i.copy(r))
						},
						reset: function() {
							e = !1, n = null, i.set(-1, 0, 0, 0)
						}
					}
				},
				c = new function() {
					var e = !1,
						r = null,
						n = null,
						i = null;
					return {
						setTest: function(t) {
							t ? at(2929) : ot(2929)
						},
						setMask: function(n) {
							r === n || e || (t.depthMask(n), r = n)
						},
						setFunc: function(e) {
							if (n !== e) {
								if (e) switch (e) {
									case V:
										t.depthFunc(512);
										break;
									case k:
										t.depthFunc(519);
										break;
									case j:
										t.depthFunc(513);
										break;
									case W:
										t.depthFunc(515);
										break;
									case q:
										t.depthFunc(514);
										break;
									case X:
										t.depthFunc(518);
										break;
									case Y:
										t.depthFunc(516);
										break;
									case J:
										t.depthFunc(517);
										break;
									default:
										t.depthFunc(515)
								} else t.depthFunc(515);
								n = e
							}
						},
						setLocked: function(t) {
							e = t
						},
						setClear: function(e) {
							i !== e && (t.clearDepth(e), i = e)
						},
						reset: function() {
							e = !1, r = null, n = null, i = null
						}
					}
				},
				h = new function() {
					var e = !1,
						r = null,
						n = null,
						i = null,
						a = null,
						o = null,
						s = null,
						c = null,
						h = null;
					return {
						setTest: function(t) {
							t ? at(2960) : ot(2960)
						},
						setMask: function(n) {
							r === n || e || (t.stencilMask(n), r = n)
						},
						setFunc: function(e, r, o) {
							n === e && i === r && a === o || (t.stencilFunc(e, r, o), n = e, i = r, a = o)
						},
						setOp: function(e, r, n) {
							o === e && s === r && c === n || (t.stencilOp(e, r, n), o = e, s = r, c = n)
						},
						setLocked: function(t) {
							e = t
						},
						setClear: function(e) {
							h !== e && (t.clearStencil(e), h = e)
						},
						reset: function() {
							e = !1, r = null, n = null, i = null, a = null, o = null, s = null, c = null, h = null
						}
					}
				},
				l = t.getParameter(34921),
				u = new Uint8Array(l),
				p = new Uint8Array(l),
				m = new Uint8Array(l),
				g = {},
				v = null,
				y = null,
				x = null,
				A = null,
				L = null,
				R = null,
				C = null,
				P = null,
				O = null,
				I = null,
				D = !1,
				B = null,
				N = null,
				z = null,
				F = null,
				U = null,
				G = t.getParameter(35661),
				H = !1,
				Z = 0,
				Q = t.getParameter(7938); - 1 !== Q.indexOf("WebGL") ? (Z = parseFloat(/^WebGL\ ([0-9])/.exec(Q)[1]), H = Z >= 1) : -1 !== Q.indexOf("OpenGL ES") && (Z = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(Q)[1]), H = Z >= 2);
			var K = null,
				$ = {},
				tt = new qe,
				et = new qe;

			function rt(e, r, n) {
				var i = new Uint8Array(4),
					a = t.createTexture();
				t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
				for (var o = 0; o < n; o++) t.texImage2D(r + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
				return a
			}
			var nt = {};

			function it(r, n) {
				(u[r] = 1, 0 === p[r] && (t.enableVertexAttribArray(r), p[r] = 1), m[r] !== n) && ((o.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[o.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](r, n), m[r] = n)
			}

			function at(e) {
				!0 !== g[e] && (t.enable(e), g[e] = !0)
			}

			function ot(e) {
				!1 !== g[e] && (t.disable(e), g[e] = !1)
			}

			function st(e, n, i, a, o, s, c, h) {
				if (e !== b) {
					if (x || (at(3042), x = !0), e === E) o = o || n, s = s || i, c = c || a, n === L && o === P || (t.blendEquationSeparate(r.convert(n), r.convert(o)), L = n, P = o), i === R && a === C && s === O && c === I || (t.blendFuncSeparate(r.convert(i), r.convert(a), r.convert(s), r.convert(c)), R = i, C = a, O = s, I = c), A = e, D = null;
					else if (e !== A || h !== D) {
						if (L === T && P === T || (t.blendEquation(32774), L = T, P = T), h) switch (e) {
							case w:
								t.blendFuncSeparate(1, 771, 1, 771);
								break;
							case _:
								t.blendFunc(1, 1);
								break;
							case M:
								t.blendFuncSeparate(0, 0, 769, 771);
								break;
							case S:
								t.blendFuncSeparate(0, 768, 0, 770);
								break;
							default:
								console.error("THREE.WebGLState: Invalid blending: ", e)
						} else switch (e) {
							case w:
								t.blendFuncSeparate(770, 771, 1, 771);
								break;
							case _:
								t.blendFunc(770, 1);
								break;
							case M:
								t.blendFunc(0, 769);
								break;
							case S:
								t.blendFunc(0, 768);
								break;
							default:
								console.error("THREE.WebGLState: Invalid blending: ", e)
						}
						R = null, C = null, O = null, I = null, A = e, D = h
					}
				} else x && (ot(3042), x = !1)
			}

			function ct(e) {
				B !== e && (e ? t.frontFace(2304) : t.frontFace(2305), B = e)
			}

			function ht(e) {
				e !== n ? (at(2884), e !== N && (e === i ? t.cullFace(1029) : e === a ? t.cullFace(1028) : t.cullFace(1032))) : ot(2884), N = e
			}

			function lt(e, r, n) {
				e ? (at(32823), F === r && U === n || (t.polygonOffset(r, n), F = r, U = n)) : ot(32823)
			}

			function ut(e) {
				void 0 === e && (e = 33984 + G - 1), K !== e && (t.activeTexture(e), K = e)
			}
			return nt[3553] = rt(3553, 3553, 1), nt[34067] = rt(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), h.setClear(0), at(2929), c.setFunc(W), ct(!1), ht(i), at(2884), st(b), {
				buffers: {
					color: s,
					depth: c,
					stencil: h
				},
				initAttributes: function() {
					for (var t = 0, e = u.length; t < e; t++) u[t] = 0
				},
				enableAttribute: function(t) {
					it(t, 0)
				},
				enableAttributeAndDivisor: it,
				disableUnusedAttributes: function() {
					for (var e = 0, r = p.length; e !== r; ++e) p[e] !== u[e] && (t.disableVertexAttribArray(e), p[e] = 0)
				},
				enable: at,
				disable: ot,
				getCompressedTextureFormats: function() {
					if (null === v && (v = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
						for (var r = t.getParameter(34467), n = 0; n < r.length; n++) v.push(r[n]);
					return v
				},
				useProgram: function(e) {
					return y !== e && (t.useProgram(e), y = e, !0)
				},
				setBlending: st,
				setMaterial: function(t, e) {
					t.side === f ? ot(2884) : at(2884);
					var r = t.side === d;
					e && (r = !r), ct(r), t.blending === w && !1 === t.transparent ? st(b) : st(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), c.setFunc(t.depthFunc), c.setTest(t.depthTest), c.setMask(t.depthWrite), s.setMask(t.colorWrite), lt(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
				},
				setFlipSided: ct,
				setCullFace: ht,
				setLineWidth: function(e) {
					e !== z && (H && t.lineWidth(e), z = e)
				},
				setPolygonOffset: lt,
				setScissorTest: function(t) {
					t ? at(3089) : ot(3089)
				},
				activeTexture: ut,
				bindTexture: function(e, r) {
					null === K && ut();
					var n = $[K];
					void 0 === n && (n = {
						type: void 0,
						texture: void 0
					}, $[K] = n), n.type === e && n.texture === r || (t.bindTexture(e, r || nt[e]), n.type = e, n.texture = r)
				},
				compressedTexImage2D: function() {
					try {
						t.compressedTexImage2D.apply(t, arguments)
					} catch (e) {
						console.error("THREE.WebGLState:", e)
					}
				},
				texImage2D: function() {
					try {
						t.texImage2D.apply(t, arguments)
					} catch (e) {
						console.error("THREE.WebGLState:", e)
					}
				},
				texImage3D: function() {
					try {
						t.texImage3D.apply(t, arguments)
					} catch (e) {
						console.error("THREE.WebGLState:", e)
					}
				},
				scissor: function(e) {
					!1 === tt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), tt.copy(e))
				},
				viewport: function(e) {
					!1 === et.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), et.copy(e))
				},
				reset: function() {
					for (var e = 0; e < p.length; e++) 1 === p[e] && (t.disableVertexAttribArray(e), p[e] = 0);
					g = {}, v = null, K = null, $ = {}, y = null, A = null, B = null, N = null, s.reset(), c.reset(), h.reset()
				}
			}
		}

		function Fo(t, e, r, n, i, a, o) {
			var s, c = {};

			function h(t, e, r, n) {
				var i = 1;
				if ((t.width > n || t.height > n) && (i = n / Math.max(t.width, t.height)), i < 1 || !0 === e) {
					if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
						void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
						var a = r ? document.createElementNS("http://www.w3.org/1999/xhtml", "canvas") : s,
							o = e ? ze.floorPowerOfTwo : Math.floor;
						return a.width = o(i * t.width), a.height = o(i * t.height), a.getContext("2d").drawImage(t, 0, 0, a.width, a.height), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a.width + "x" + a.height + ")."), a
					}
					return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
				}
				return t
			}

			function l(t) {
				return ze.isPowerOfTwo(t.width) && ze.isPowerOfTwo(t.height)
			}

			function u(t, e) {
				return t.generateMipmaps && e && t.minFilter !== gt && t.minFilter !== xt
			}

			function p(e, r, i, a) {
				t.generateMipmap(e), n.get(r).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E
			}

			function d(t, r) {
				if (!i.isWebGL2) return t;
				var n = t;
				return 6403 === t && (5126 === r && (n = 33326), 5131 === r && (n = 33325), 5121 === r && (n = 33321)), 6407 === t && (5126 === r && (n = 34837), 5131 === r && (n = 34843), 5121 === r && (n = 32849)), 6408 === t && (5126 === r && (n = 34836), 5131 === r && (n = 34842), 5121 === r && (n = 32856)), 33325 === n || 33326 === n || 34842 === n || 34836 === n ? e.get("EXT_color_buffer_float") : 34843 !== n && 34837 !== n || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), n
			}

			function f(t) {
				return t === gt || t === vt || t === yt ? 9728 : 9729
			}

			function m(e) {
				var r = e.target;
				r.removeEventListener("dispose", m),
					function(e) {
						var r = n.get(e);
						if (e.image && r.__image__webglTextureCube) t.deleteTexture(r.__image__webglTextureCube);
						else {
							if (void 0 === r.__webglInit) return;
							t.deleteTexture(r.__webglTexture)
						}
						n.remove(e)
					}(r), r.isVideoTexture && delete c[r.id], o.memory.textures--
			}

			function g(e) {
				var r = e.target;
				r.removeEventListener("dispose", g),
					function(e) {
						var r = n.get(e),
							i = n.get(e.texture);
						if (!e) return;
						void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture);
						e.depthTexture && e.depthTexture.dispose();
						if (e.isWebGLRenderTargetCube)
							for (var a = 0; a < 6; a++) t.deleteFramebuffer(r.__webglFramebuffer[a]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[a]);
						else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer);
						n.remove(e.texture), n.remove(e)
					}(r), o.memory.textures--
			}

			function v(t, e) {
				var i = n.get(t);
				if (t.isVideoTexture && function(t) {
						var e = t.id,
							r = o.render.frame;
						c[e] !== r && (c[e] = r, t.update())
					}(t), t.version > 0 && i.__version !== t.version) {
					var a = t.image;
					if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
					else {
						if (!1 !== a.complete) return void x(i, t, e);
						console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
					}
				}
				r.activeTexture(33984 + e), r.bindTexture(3553, i.__webglTexture)
			}

			function y(r, o, s) {
				var c;
				if (s ? (t.texParameteri(r, 10242, a.convert(o.wrapS)), t.texParameteri(r, 10243, a.convert(o.wrapT)), t.texParameteri(r, 10240, a.convert(o.magFilter)), t.texParameteri(r, 10241, a.convert(o.minFilter))) : (t.texParameteri(r, 10242, 33071), t.texParameteri(r, 10243, 33071), o.wrapS === ft && o.wrapT === ft || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(r, 10240, f(o.magFilter)), t.texParameteri(r, 10241, f(o.minFilter)), o.minFilter !== gt && o.minFilter !== xt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = e.get("EXT_texture_filter_anisotropic")) {
					if (o.type === Lt && null === e.get("OES_texture_float_linear")) return;
					if (o.type === Rt && null === (i.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
					(o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(r, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, i.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
				}
			}

			function x(e, n, s) {
				var c;
				c = n.isDataTexture3D ? 32879 : 3553, void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", m), e.__webglTexture = t.createTexture(), o.memory.textures++), r.activeTexture(33984 + s), r.bindTexture(c, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment);
				var f = function(t) {
						return !i.isWebGL2 && (t.wrapS !== ft || t.wrapT !== ft || t.minFilter !== gt && t.minFilter !== xt)
					}(n) && !1 === l(n.image),
					g = h(n.image, f, !1, i.maxTextureSize),
					v = l(g) || i.isWebGL2,
					x = a.convert(n.format),
					b = a.convert(n.type),
					w = d(x, b);
				y(c, n, v);
				var _, M = n.mipmaps;
				if (n.isDepthTexture) {
					if (w = 6402, n.type === Lt) {
						if (!i.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
						w = 36012
					} else i.isWebGL2 && (w = 33189);
					n.format === Gt && 6402 === w && n.type !== Et && n.type !== At && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = Et, b = a.convert(n.type)), n.format === Ht && (w = 34041, n.type !== It && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = It, b = a.convert(n.type))), r.texImage2D(3553, 0, w, g.width, g.height, 0, x, b, null)
				} else if (n.isDataTexture)
					if (M.length > 0 && v) {
						for (var S = 0, E = M.length; S < E; S++) _ = M[S], r.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
						n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
					} else r.texImage2D(3553, 0, w, g.width, g.height, 0, x, b, g.data), e.__maxMipLevel = 0;
				else if (n.isCompressedTexture) {
					for (S = 0, E = M.length; S < E; S++) _ = M[S], n.format !== Nt && n.format !== Bt ? r.getCompressedTextureFormats().indexOf(x) > -1 ? r.compressedTexImage2D(3553, S, w, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
					e.__maxMipLevel = M.length - 1
				} else if (n.isDataTexture3D) r.texImage3D(32879, 0, w, g.width, g.height, g.depth, 0, x, b, g.data), e.__maxMipLevel = 0;
				else if (M.length > 0 && v) {
					for (S = 0, E = M.length; S < E; S++) _ = M[S], r.texImage2D(3553, S, w, x, b, _);
					n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
				} else r.texImage2D(3553, 0, w, x, b, g), e.__maxMipLevel = 0;
				u(n, v) && p(3553, n, g.width, g.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
			}

			function b(e, i, o, s) {
				var c = a.convert(i.texture.format),
					h = a.convert(i.texture.type),
					l = d(c, h);
				r.texImage2D(s, 0, l, i.width, i.height, 0, c, h, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, n.get(i.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
			}

			function w(e, r, n) {
				if (t.bindRenderbuffer(36161, e), r.depthBuffer && !r.stencilBuffer) {
					if (n) {
						var i = M(r);
						t.renderbufferStorageMultisample(36161, i, 33189, r.width, r.height)
					} else t.renderbufferStorage(36161, 33189, r.width, r.height);
					t.framebufferRenderbuffer(36160, 36096, 36161, e)
				} else if (r.depthBuffer && r.stencilBuffer) {
					if (n) {
						i = M(r);
						t.renderbufferStorageMultisample(36161, i, 34041, r.width, r.height)
					} else t.renderbufferStorage(36161, 34041, r.width, r.height);
					t.framebufferRenderbuffer(36160, 33306, 36161, e)
				} else {
					var o = d(a.convert(r.texture.format), a.convert(r.texture.type));
					if (n) {
						i = M(r);
						t.renderbufferStorageMultisample(36161, i, o, r.width, r.height)
					} else t.renderbufferStorage(36161, o, r.width, r.height)
				}
				t.bindRenderbuffer(36161, null)
			}

			function _(e) {
				var r = n.get(e),
					i = !0 === e.isWebGLRenderTargetCube;
				if (e.depthTexture) {
					if (i) throw new Error("target.depthTexture not supported in Cube render targets");
					! function(e, r) {
						if (r && r.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
						if (t.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
						n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), v(r.depthTexture, 0);
						var i = n.get(r.depthTexture).__webglTexture;
						if (r.depthTexture.format === Gt) t.framebufferTexture2D(36160, 36096, 3553, i, 0);
						else {
							if (r.depthTexture.format !== Ht) throw new Error("Unknown depthTexture format");
							t.framebufferTexture2D(36160, 33306, 3553, i, 0)
						}
					}(r.__webglFramebuffer, e)
				} else if (i) {
					r.__webglDepthbuffer = [];
					for (var a = 0; a < 6; a++) t.bindFramebuffer(36160, r.__webglFramebuffer[a]), r.__webglDepthbuffer[a] = t.createRenderbuffer(), w(r.__webglDepthbuffer[a], e)
				} else t.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), w(r.__webglDepthbuffer, e);
				t.bindFramebuffer(36160, null)
			}

			function M(t) {
				return i.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(i.maxSamples, t.samples) : 0
			}
			this.setTexture2D = v, this.setTexture3D = function(t, e) {
				var i = n.get(t);
				t.version > 0 && i.__version !== t.version ? x(i, t, e) : (r.activeTexture(33984 + e), r.bindTexture(32879, i.__webglTexture))
			}, this.setTextureCube = function(e, s) {
				var c = n.get(e);
				if (6 === e.image.length)
					if (e.version > 0 && c.__version !== e.version) {
						c.__image__webglTextureCube || (e.addEventListener("dispose", m), c.__image__webglTextureCube = t.createTexture(), o.memory.textures++), r.activeTexture(33984 + s), r.bindTexture(34067, c.__image__webglTextureCube), t.pixelStorei(37440, e.flipY);
						for (var f = e && e.isCompressedTexture, g = e.image[0] && e.image[0].isDataTexture, v = [], x = 0; x < 6; x++) v[x] = f || g ? g ? e.image[x].image : e.image[x] : h(e.image[x], !1, !0, i.maxCubemapSize);
						var b = v[0],
							w = l(b) || i.isWebGL2,
							_ = a.convert(e.format),
							M = a.convert(e.type),
							S = d(_, M);
						for (y(34067, e, w), x = 0; x < 6; x++)
							if (f)
								for (var E, T = v[x].mipmaps, A = 0, L = T.length; A < L; A++) E = T[A], e.format !== Nt && e.format !== Bt ? r.getCompressedTextureFormats().indexOf(_) > -1 ? r.compressedTexImage2D(34069 + x, A, S, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r.texImage2D(34069 + x, A, S, E.width, E.height, 0, _, M, E.data);
							else g ? r.texImage2D(34069 + x, 0, S, v[x].width, v[x].height, 0, _, M, v[x].data) : r.texImage2D(34069 + x, 0, S, _, M, v[x]);
						c.__maxMipLevel = f ? T.length - 1 : 0, u(e, w) && p(34067, e, b.width, b.height), c.__version = e.version, e.onUpdate && e.onUpdate(e)
					} else r.activeTexture(33984 + s), r.bindTexture(34067, c.__image__webglTextureCube)
			}, this.setTextureCubeDynamic = function(t, e) {
				r.activeTexture(33984 + e), r.bindTexture(34067, n.get(t).__webglTexture)
			}, this.setupRenderTarget = function(e) {
				var s = n.get(e),
					c = n.get(e.texture);
				e.addEventListener("dispose", g), c.__webglTexture = t.createTexture(), o.memory.textures++;
				var h = !0 === e.isWebGLRenderTargetCube,
					f = !0 === e.isWebGLMultisampleRenderTarget,
					m = l(e) || i.isWebGL2;
				if (h) {
					s.__webglFramebuffer = [];
					for (var v = 0; v < 6; v++) s.__webglFramebuffer[v] = t.createFramebuffer()
				} else if (s.__webglFramebuffer = t.createFramebuffer(), f)
					if (i.isWebGL2) {
						s.__webglMultisampledFramebuffer = t.createFramebuffer(), s.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
						var x = d(a.convert(e.texture.format), a.convert(e.texture.type)),
							S = M(e);
						t.renderbufferStorageMultisample(36161, S, x, e.width, e.height), t.bindFramebuffer(36160, s.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(), w(s.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
					} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
				if (h) {
					for (r.bindTexture(34067, c.__webglTexture), y(34067, e.texture, m), v = 0; v < 6; v++) b(s.__webglFramebuffer[v], e, 36064, 34069 + v);
					u(e.texture, m) && p(34067, e.texture, e.width, e.height), r.bindTexture(34067, null)
				} else r.bindTexture(3553, c.__webglTexture), y(3553, e.texture, m), b(s.__webglFramebuffer, e, 36064, 3553), u(e.texture, m) && p(3553, e.texture, e.width, e.height), r.bindTexture(3553, null);
				e.depthBuffer && _(e)
			}, this.updateRenderTargetMipmap = function(t) {
				var e = t.texture;
				if (u(e, l(t) || i.isWebGL2)) {
					var a = t.isWebGLRenderTargetCube ? 34067 : 3553,
						o = n.get(e).__webglTexture;
					r.bindTexture(a, o), p(a, e, t.width, t.height), r.bindTexture(a, null)
				}
			}, this.updateMultisampleRenderTarget = function(e) {
				if (e.isWebGLMultisampleRenderTarget)
					if (i.isWebGL2) {
						var r = n.get(e);
						t.bindFramebuffer(36008, r.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, r.__webglFramebuffer);
						var a = e.width,
							o = e.height,
							s = 16384;
						e.depthBuffer && (s |= 256), e.stencilBuffer && (s |= 1024), t.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, 9728)
					} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
			}
		}

		function Uo(t, e, r) {
			return {
				convert: function(t) {
					var n;
					if (t === dt) return 10497;
					if (t === ft) return 33071;
					if (t === mt) return 33648;
					if (t === gt) return 9728;
					if (t === vt) return 9984;
					if (t === yt) return 9986;
					if (t === xt) return 9729;
					if (t === bt) return 9985;
					if (t === wt) return 9987;
					if (t === _t) return 5121;
					if (t === Ct) return 32819;
					if (t === Pt) return 32820;
					if (t === Ot) return 33635;
					if (t === Mt) return 5120;
					if (t === St) return 5122;
					if (t === Et) return 5123;
					if (t === Tt) return 5124;
					if (t === At) return 5125;
					if (t === Lt) return 5126;
					if (t === Rt) {
						if (r.isWebGL2) return 5131;
						if (null !== (n = e.get("OES_texture_half_float"))) return n.HALF_FLOAT_OES
					}
					if (t === Dt) return 6406;
					if (t === Bt) return 6407;
					if (t === Nt) return 6408;
					if (t === zt) return 6409;
					if (t === Ft) return 6410;
					if (t === Gt) return 6402;
					if (t === Ht) return 34041;
					if (t === Vt) return 6403;
					if (t === T) return 32774;
					if (t === A) return 32778;
					if (t === L) return 32779;
					if (t === P) return 0;
					if (t === O) return 1;
					if (t === I) return 768;
					if (t === D) return 769;
					if (t === B) return 770;
					if (t === N) return 771;
					if (t === z) return 772;
					if (t === F) return 773;
					if (t === U) return 774;
					if (t === G) return 775;
					if (t === H) return 776;
					if ((t === kt || t === jt || t === Wt || t === qt) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) {
						if (t === kt) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (t === jt) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (t === Wt) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (t === qt) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
					}
					if ((t === Xt || t === Yt || t === Jt || t === Zt) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) {
						if (t === Xt) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (t === Yt) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (t === Jt) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (t === Zt) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
					}
					if (t === Qt && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL;
					if ((t === Kt || t === $t || t === te || t === ee || t === re || t === ne || t === ie || t === ae || t === oe || t === se || t === ce || t === he || t === le || t === ue) && null !== (n = e.get("WEBGL_compressed_texture_astc"))) return t;
					if (t === R || t === C) {
						if (r.isWebGL2) {
							if (t === R) return 32775;
							if (t === C) return 32776
						}
						if (null !== (n = e.get("EXT_blend_minmax"))) {
							if (t === R) return n.MIN_EXT;
							if (t === C) return n.MAX_EXT
						}
					}
					if (t === It) {
						if (r.isWebGL2) return 34042;
						if (null !== (n = e.get("WEBGL_depth_texture"))) return n.UNSIGNED_INT_24_8_WEBGL
					}
					return 0
				}
			}
		}

		function Go() {
			Ai.call(this), this.type = "Group"
		}

		function Ho() {
			Ai.call(this), this.type = "Camera", this.matrixWorldInverse = new Ue, this.projectionMatrix = new Ue, this.projectionMatrixInverse = new Ue
		}

		function Vo(t, e, r, n) {
			Ho.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
		}

		function ko(t) {
			Vo.call(this), this.cameras = t || []
		}
		Do.prototype = Object.create(Ji.prototype), Do.prototype.constructor = Do, Do.prototype.isMeshDepthMaterial = !0, Do.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
		}, Bo.prototype = Object.create(Ji.prototype), Bo.prototype.constructor = Bo, Bo.prototype.isMeshDistanceMaterial = !0, Bo.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
		}, Go.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: Go,
			isGroup: !0
		}), Ho.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: Ho,
			isCamera: !0,
			copy: function(t, e) {
				return Ai.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
			},
			getWorldDirection: function(t) {
				void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new He), this.updateMatrixWorld(!0);
				var e = this.matrixWorld.elements;
				return t.set(-e[8], -e[9], -e[10]).normalize()
			},
			updateMatrixWorld: function(t) {
				Ai.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			}
		}), Vo.prototype = Object.assign(Object.create(Ho.prototype), {
			constructor: Vo,
			isPerspectiveCamera: !0,
			copy: function(t, e) {
				return Ho.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
			},
			setFocalLength: function(t) {
				var e = .5 * this.getFilmHeight() / t;
				this.fov = 2 * ze.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
			},
			getFocalLength: function() {
				var t = Math.tan(.5 * ze.DEG2RAD * this.fov);
				return .5 * this.getFilmHeight() / t
			},
			getEffectiveFOV: function() {
				return 2 * ze.RAD2DEG * Math.atan(Math.tan(.5 * ze.DEG2RAD * this.fov) / this.zoom)
			},
			getFilmWidth: function() {
				return this.filmGauge * Math.min(this.aspect, 1)
			},
			getFilmHeight: function() {
				return this.filmGauge / Math.max(this.aspect, 1)
			},
			setViewOffset: function(t, e, r, n, i, a) {
				this.aspect = t / e, null === this.view && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = r, this.view.offsetY = n, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
			},
			clearViewOffset: function() {
				null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
			},
			updateProjectionMatrix: function() {
				var t = this.near,
					e = t * Math.tan(.5 * ze.DEG2RAD * this.fov) / this.zoom,
					r = 2 * e,
					n = this.aspect * r,
					i = -.5 * n,
					a = this.view;
				if (null !== this.view && this.view.enabled) {
					var o = a.fullWidth,
						s = a.fullHeight;
					i += a.offsetX * n / o, e -= a.offsetY * r / s, n *= a.width / o, r *= a.height / s
				}
				var c = this.filmOffset;
				0 !== c && (i += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + n, e, e - r, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
			},
			toJSON: function(t) {
				var e = Ai.prototype.toJSON.call(this, t);
				return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
			}
		}), ko.prototype = Object.assign(Object.create(Vo.prototype), {
			constructor: ko,
			isArrayCamera: !0
		});
		var jo, Wo = new He,
			qo = new He;

		function Xo(t, e, r) {
			Wo.setFromMatrixPosition(e.matrixWorld), qo.setFromMatrixPosition(r.matrixWorld);
			var n = Wo.distanceTo(qo),
				i = e.projectionMatrix.elements,
				a = r.projectionMatrix.elements,
				o = i[14] / (i[10] - 1),
				s = i[14] / (i[10] + 1),
				c = (i[9] + 1) / i[5],
				h = (i[9] - 1) / i[5],
				l = (i[8] - 1) / i[0],
				u = (a[8] + 1) / a[0],
				p = o * l,
				d = o * u,
				f = n / (-l + u),
				m = f * -l;
			e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
			var g = o + f,
				v = s + f,
				y = p - m,
				x = d + (n - m),
				b = c * s / v * g,
				w = h * s / v * g;
			t.projectionMatrix.makePerspective(y, x, b, w, g, v)
		}

		function Yo(t) {
			var e = this,
				r = null,
				n = null,
				i = null,
				a = [],
				o = new Ue,
				s = new Ue,
				c = 1,
				h = "stage";
			"undefined" != typeof window && "VRFrameData" in window && (n = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", x, !1));
			var l = new Ue,
				u = new Ge,
				p = new He,
				d = new Vo;
			d.bounds = new qe(0, 0, .5, 1), d.layers.enable(1);
			var f = new Vo;
			f.bounds = new qe(.5, 0, .5, 1), f.layers.enable(2);
			var m, g, v = new ko([d, f]);

			function y() {
				return null !== r && !0 === r.isPresenting
			}

			function x() {
				if (y()) {
					var n = r.getEyeParameters("left"),
						i = n.renderWidth * c,
						a = n.renderHeight * c;
					g = t.getPixelRatio(), m = t.getSize(), t.setDrawingBufferSize(2 * i, a, 1), _.start()
				} else e.enabled && t.setDrawingBufferSize(m.width, m.height, g), _.stop()
			}
			v.layers.enable(1), v.layers.enable(2);
			var b = [];

			function w(t) {
				for (var e = navigator.getGamepads && navigator.getGamepads(), r = 0, n = 0, i = e.length; r < i; r++) {
					var a = e[r];
					if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
						if (n === t) return a;
						n++
					}
				}
			}
			this.enabled = !1, this.getController = function(t) {
				var e = a[t];
				return void 0 === e && ((e = new Go).matrixAutoUpdate = !1, e.visible = !1, a[t] = e), e
			}, this.getDevice = function() {
				return r
			}, this.setDevice = function(t) {
				void 0 !== t && (r = t), _.setContext(t)
			}, this.setFramebufferScaleFactor = function(t) {
				c = t
			}, this.setFrameOfReferenceType = function(t) {
				h = t
			}, this.setPoseTarget = function(t) {
				void 0 !== t && (i = t)
			}, this.getCamera = function(t) {
				var e = "stage" === h ? 1.6 : 0;
				if (null === r) return t.position.set(0, e, 0), t;
				if (r.depthNear = t.near, r.depthFar = t.far, r.getFrameData(n), "stage" === h) {
					var c = r.stageParameters;
					c ? o.fromArray(c.sittingToStandingTransform) : o.makeTranslation(0, e, 0)
				}
				var m = n.pose,
					g = null !== i ? i : t;
				if (g.matrix.copy(o), g.matrix.decompose(g.position, g.quaternion, g.scale), null !== m.orientation && (u.fromArray(m.orientation), g.quaternion.multiply(u)), null !== m.position && (u.setFromRotationMatrix(o), p.fromArray(m.position), p.applyQuaternion(u), g.position.add(p)), g.updateMatrixWorld(), !1 === r.isPresenting) return t;
				d.near = t.near, f.near = t.near, d.far = t.far, f.far = t.far, d.matrixWorldInverse.fromArray(n.leftViewMatrix), f.matrixWorldInverse.fromArray(n.rightViewMatrix), s.getInverse(o), "stage" === h && (d.matrixWorldInverse.multiply(s), f.matrixWorldInverse.multiply(s));
				var y = g.parent;
				null !== y && (l.getInverse(y.matrixWorld), d.matrixWorldInverse.multiply(l), f.matrixWorldInverse.multiply(l)), d.matrixWorld.getInverse(d.matrixWorldInverse), f.matrixWorld.getInverse(f.matrixWorldInverse), d.projectionMatrix.fromArray(n.leftProjectionMatrix), f.projectionMatrix.fromArray(n.rightProjectionMatrix), Xo(v, d, f);
				var x = r.getLayers();
				if (x.length) {
					var _ = x[0];
					null !== _.leftBounds && 4 === _.leftBounds.length && d.bounds.fromArray(_.leftBounds), null !== _.rightBounds && 4 === _.rightBounds.length && f.bounds.fromArray(_.rightBounds)
				}
				return function() {
					for (var t = 0; t < a.length; t++) {
						var e = a[t],
							r = w(t);
						if (void 0 !== r && void 0 !== r.pose) {
							if (null === r.pose) return;
							var n = r.pose;
							!1 === n.hasPosition && e.position.set(.2, -.6, -.05), null !== n.position && e.position.fromArray(n.position), null !== n.orientation && e.quaternion.fromArray(n.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(o), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0;
							var i = "Daydream Controller" === r.id ? 0 : 1;
							b[t] !== r.buttons[i].pressed && (b[t] = r.buttons[i].pressed, !0 === b[t] ? e.dispatchEvent({
								type: "selectstart"
							}) : (e.dispatchEvent({
								type: "selectend"
							}), e.dispatchEvent({
								type: "select"
							})))
						} else e.visible = !1
					}
				}(), v
			}, this.getStandingMatrix = function() {
				return o
			}, this.isPresenting = y;
			var _ = new wi;
			this.setAnimationLoop = function(t) {
				_.setAnimationLoop(t)
			}, this.submitFrame = function() {
				y() && r.submitFrame()
			}, this.dispose = function() {
				"undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", x)
			}
		}

		function Jo(t) {
			var e = t.context,
				r = null,
				n = null,
				i = 1,
				a = null,
				o = "stage",
				s = null,
				c = [],
				h = [];

			function l() {
				return null !== n && null !== a
			}
			var u = new Vo;
			u.layers.enable(1), u.viewport = new qe;
			var p = new Vo;
			p.layers.enable(2), p.viewport = new qe;
			var d = new ko([u, p]);

			function f(t) {
				var e = c[h.indexOf(t.inputSource)];
				e && e.dispatchEvent({
					type: t.type
				})
			}

			function m() {
				t.setFramebuffer(null), y.stop()
			}

			function g(t, e) {
				null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
			}
			d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getController = function(t) {
				var e = c[t];
				return void 0 === e && ((e = new Go).matrixAutoUpdate = !1, e.visible = !1, c[t] = e), e
			}, this.getDevice = function() {
				return r
			}, this.setDevice = function(t) {
				void 0 !== t && (r = t), t instanceof XRDevice && e.setCompatibleXRDevice(t)
			}, this.setFramebufferScaleFactor = function(t) {
				i = t
			}, this.setFrameOfReferenceType = function(t) {
				o = t
			}, this.setSession = function(r) {
				null !== (n = r) && (n.addEventListener("select", f), n.addEventListener("selectstart", f), n.addEventListener("selectend", f), n.addEventListener("end", m), n.baseLayer = new XRWebGLLayer(n, e, {
					framebufferScaleFactor: i
				}), n.requestFrameOfReference(o).then(function(e) {
					a = e, t.setFramebuffer(n.baseLayer.framebuffer), y.setContext(n), y.start()
				}), h = n.getInputSources(), n.addEventListener("inputsourceschange", function() {
					h = n.getInputSources(), console.log(h);
					for (var t = 0; t < c.length; t++) {
						c[t].userData.inputSource = h[t]
					}
				}))
			}, this.getCamera = function(t) {
				if (l()) {
					var e = t.parent,
						r = d.cameras;
					g(d, e);
					for (var n = 0; n < r.length; n++) g(r[n], e);
					t.matrixWorld.copy(d.matrixWorld);
					for (var i = t.children, a = (n = 0, i.length); n < a; n++) i[n].updateMatrixWorld(!0);
					return Xo(d, u, p), d
				}
				return t
			}, this.isPresenting = l;
			var v = null;
			var y = new wi;
			y.setAnimationLoop(function(t, e) {
				if (null !== (s = e.getDevicePose(a)))
					for (var r = n.baseLayer, i = e.views, o = 0; o < i.length; o++) {
						var l = i[o],
							u = r.getViewport(l),
							p = s.getViewMatrix(l),
							f = d.cameras[o];
						f.matrix.fromArray(p).getInverse(f.matrix), f.projectionMatrix.fromArray(l.projectionMatrix), f.viewport.set(u.x, u.y, u.width, u.height), 0 === o && d.matrix.copy(f.matrix)
					}
				for (o = 0; o < c.length; o++) {
					var m = c[o],
						g = h[o];
					if (g) {
						var y = e.getInputPose(g, a);
						if (null !== y) {
							"targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0;
							continue
						}
					}
					m.visible = !1
				}
				v && v(t)
			}), this.setAnimationLoop = function(t) {
				v = t
			}, this.dispose = function() {}, this.getStandingMatrix = function() {
				return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
			}, this.submitFrame = function() {}
		}

		function Zo(t) {
			console.log("THREE.WebGLRenderer", e);
			var r = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
				n = void 0 !== t.context ? t.context : null,
				i = void 0 !== t.alpha && t.alpha,
				a = void 0 === t.depth || t.depth,
				o = void 0 === t.stencil || t.stencil,
				s = void 0 !== t.antialias && t.antialias,
				c = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
				h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
				l = void 0 !== t.powerPreference ? t.powerPreference : "default",
				u = null,
				p = null;
			this.domElement = r, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = tt, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
			var f, m, g, v, y, x, b, w, _, M, S, E, T, A, L, R, C, P, O = this,
				I = !1,
				D = null,
				B = null,
				N = null,
				z = -1,
				F = {
					geometry: null,
					program: null,
					wireframe: !1
				},
				U = null,
				G = null,
				H = new qe,
				V = new qe,
				k = null,
				j = 0,
				W = r.width,
				q = r.height,
				X = 1,
				Y = new qe(0, 0, W, q),
				J = new qe(0, 0, W, q),
				Z = !1,
				Q = new tr,
				K = new ia,
				$ = !1,
				et = !1,
				rt = new Ue,
				nt = new He;

			function it() {
				return null === B ? X : 1
			}
			try {
				var at = {
					alpha: i,
					depth: a,
					stencil: o,
					antialias: s,
					premultipliedAlpha: c,
					preserveDrawingBuffer: h,
					powerPreference: l
				};
				if (r.addEventListener("webglcontextlost", ht, !1), r.addEventListener("webglcontextrestored", lt, !1), null === (f = n || r.getContext("webgl", at) || r.getContext("experimental-webgl", at))) throw null !== r.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
				void 0 === f.getShaderPrecisionFormat && (f.getShaderPrecisionFormat = function() {
					return {
						rangeMin: 1,
						rangeMax: 1,
						precision: 1
					}
				})
			} catch (St) {
				console.error("THREE.WebGLRenderer: " + St.message)
			}

			function ot() {
				m = new aa(f), (g = new na(f, m, t)).isWebGL2 || (m.get("WEBGL_depth_texture"), m.get("OES_texture_float"), m.get("OES_texture_half_float"), m.get("OES_texture_half_float_linear"), m.get("OES_standard_derivatives"), m.get("OES_element_index_uint"), m.get("ANGLE_instanced_arrays")), m.get("OES_texture_float_linear"), P = new Uo(f, m, g), (v = new zo(f, m, P, g)).scissor(V.copy(J).multiplyScalar(X)), v.viewport(H.copy(Y).multiplyScalar(X)), y = new ca(f), x = new So, b = new Fo(f, m, v, x, g, P, y), w = new _i(f), _ = new oa(f, w, y), M = new ua(_, y), L = new la(f), S = new Mo(O, m, g), E = new Lo, T = new Io, A = new ea(O, v, M, c), R = new ra(f, m, y, g), C = new sa(f, m, y, g), y.programs = S.programs, O.context = f, O.capabilities = g, O.extensions = m, O.properties = x, O.renderLists = E, O.state = v, O.info = y
			}
			ot();
			var st = null;
			"undefined" != typeof navigator && (st = "xr" in navigator ? new Jo(O) : new Yo(O)), this.vr = st;
			var ct = new No(O, M, g.maxTextureSize);

			function ht(t) {
				t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0
			}

			function lt() {
				console.log("THREE.WebGLRenderer: Context Restored."), I = !1, ot()
			}

			function ut(t) {
				var e = t.target;
				e.removeEventListener("dispose", ut),
					function(t) {
						pt(t), x.remove(t)
					}(e)
			}

			function pt(t) {
				var e = x.get(t).program;
				t.program = void 0, void 0 !== e && S.releaseProgram(e)
			}
			this.shadowMap = ct, this.getContext = function() {
				return f
			}, this.getContextAttributes = function() {
				return f.getContextAttributes()
			}, this.forceContextLoss = function() {
				var t = m.get("WEBGL_lose_context");
				t && t.loseContext()
			}, this.forceContextRestore = function() {
				var t = m.get("WEBGL_lose_context");
				t && t.restoreContext()
			}, this.getPixelRatio = function() {
				return X
			}, this.setPixelRatio = function(t) {
				void 0 !== t && (X = t, this.setSize(W, q, !1))
			}, this.getSize = function() {
				return {
					width: W,
					height: q
				}
			}, this.setSize = function(t, e, n) {
				st.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (W = t, q = e, r.width = t * X, r.height = e * X, !1 !== n && (r.style.width = t + "px", r.style.height = e + "px"), this.setViewport(0, 0, t, e))
			}, this.getDrawingBufferSize = function() {
				return {
					width: W * X,
					height: q * X
				}
			}, this.setDrawingBufferSize = function(t, e, n) {
				W = t, q = e, X = n, r.width = t * n, r.height = e * n, this.setViewport(0, 0, t, e)
			}, this.getCurrentViewport = function() {
				return H
			}, this.setViewport = function(t, e, r, n) {
				Y.set(t, q - e - n, r, n), v.viewport(H.copy(Y).multiplyScalar(X))
			}, this.setScissor = function(t, e, r, n) {
				J.set(t, q - e - n, r, n), v.scissor(V.copy(J).multiplyScalar(X))
			}, this.setScissorTest = function(t) {
				v.setScissorTest(Z = t)
			}, this.getClearColor = function() {
				return A.getClearColor()
			}, this.setClearColor = function() {
				A.setClearColor.apply(A, arguments)
			}, this.getClearAlpha = function() {
				return A.getClearAlpha()
			}, this.setClearAlpha = function() {
				A.setClearAlpha.apply(A, arguments)
			}, this.clear = function(t, e, r) {
				var n = 0;
				(void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === r || r) && (n |= 1024), f.clear(n)
			}, this.clearColor = function() {
				this.clear(!0, !1, !1)
			}, this.clearDepth = function() {
				this.clear(!1, !0, !1)
			}, this.clearStencil = function() {
				this.clear(!1, !1, !0)
			}, this.dispose = function() {
				r.removeEventListener("webglcontextlost", ht, !1), r.removeEventListener("webglcontextrestored", lt, !1), E.dispose(), T.dispose(), x.dispose(), M.dispose(), st.dispose(), mt.stop()
			}, this.renderBufferImmediate = function(t, e) {
				v.initAttributes();
				var r = x.get(t);
				t.hasPositions && !r.position && (r.position = f.createBuffer()), t.hasNormals && !r.normal && (r.normal = f.createBuffer()), t.hasUvs && !r.uv && (r.uv = f.createBuffer()), t.hasColors && !r.color && (r.color = f.createBuffer());
				var n = e.getAttributes();
				t.hasPositions && (f.bindBuffer(34962, r.position), f.bufferData(34962, t.positionArray, 35048), v.enableAttribute(n.position), f.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (f.bindBuffer(34962, r.normal), f.bufferData(34962, t.normalArray, 35048), v.enableAttribute(n.normal), f.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (f.bindBuffer(34962, r.uv), f.bufferData(34962, t.uvArray, 35048), v.enableAttribute(n.uv), f.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (f.bindBuffer(34962, r.color), f.bufferData(34962, t.colorArray, 35048), v.enableAttribute(n.color), f.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), v.disableUnusedAttributes(), f.drawArrays(4, 0, t.count), t.count = 0
			}, this.renderBufferDirect = function(t, e, r, n, i, a) {
				var o = i.isMesh && i.normalMatrix.determinant() < 0;
				v.setMaterial(n, o);
				var s = xt(t, e, n, i),
					c = !1;
				F.geometry === r.id && F.program === s.id && F.wireframe === (!0 === n.wireframe) || (F.geometry = r.id, F.program = s.id, F.wireframe = !0 === n.wireframe, c = !0), i.morphTargetInfluences && (L.update(i, r, n, s), c = !0);
				var h, l = r.index,
					u = r.attributes.position,
					p = 1;
				!0 === n.wireframe && (l = _.getWireframeAttribute(r), p = 2);
				var d = R;
				null !== l && (h = w.get(l), (d = C).setIndex(h)), c && (! function(t, e, r) {
					if (r && r.isInstancedBufferGeometry & !g.isWebGL2 && null === m.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
					v.initAttributes();
					var n = r.attributes,
						i = e.getAttributes(),
						a = t.defaultAttributeValues;
					for (var o in i) {
						var s = i[o];
						if (s >= 0) {
							var c = n[o];
							if (void 0 !== c) {
								var h = c.normalized,
									l = c.itemSize,
									u = w.get(c);
								if (void 0 === u) continue;
								var p = u.buffer,
									d = u.type,
									y = u.bytesPerElement;
								if (c.isInterleavedBufferAttribute) {
									var x = c.data,
										b = x.stride,
										_ = c.offset;
									x && x.isInstancedInterleavedBuffer ? (v.enableAttributeAndDivisor(s, x.meshPerAttribute), void 0 === r.maxInstancedCount && (r.maxInstancedCount = x.meshPerAttribute * x.count)) : v.enableAttribute(s), f.bindBuffer(34962, p), f.vertexAttribPointer(s, l, d, h, b * y, _ * y)
								} else c.isInstancedBufferAttribute ? (v.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === r.maxInstancedCount && (r.maxInstancedCount = c.meshPerAttribute * c.count)) : v.enableAttribute(s), f.bindBuffer(34962, p), f.vertexAttribPointer(s, l, d, h, 0, 0)
							} else if (void 0 !== a) {
								var M = a[o];
								if (void 0 !== M) switch (M.length) {
									case 2:
										f.vertexAttrib2fv(s, M);
										break;
									case 3:
										f.vertexAttrib3fv(s, M);
										break;
									case 4:
										f.vertexAttrib4fv(s, M);
										break;
									default:
										f.vertexAttrib1fv(s, M)
								}
							}
						}
					}
					v.disableUnusedAttributes()
				}(n, s, r), null !== l && f.bindBuffer(34963, h.buffer));
				var y = 1 / 0;
				null !== l ? y = l.count : void 0 !== u && (y = u.count);
				var x = r.drawRange.start * p,
					b = r.drawRange.count * p,
					M = null !== a ? a.start * p : 0,
					S = null !== a ? a.count * p : 1 / 0,
					E = Math.max(x, M),
					T = Math.min(y, x + b, M + S) - 1,
					A = Math.max(0, T - E + 1);
				if (0 !== A) {
					if (i.isMesh)
						if (!0 === n.wireframe) v.setLineWidth(n.wireframeLinewidth * it()), d.setMode(1);
						else switch (i.drawMode) {
							case we:
								d.setMode(4);
								break;
							case _e:
								d.setMode(5);
								break;
							case Me:
								d.setMode(6)
						} else if (i.isLine) {
							var P = n.linewidth;
							void 0 === P && (P = 1), v.setLineWidth(P * it()), i.isLineSegments ? d.setMode(1) : i.isLineLoop ? d.setMode(2) : d.setMode(3)
						} else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
					r && r.isInstancedBufferGeometry ? r.maxInstancedCount > 0 && d.renderInstances(r, E, A) : d.render(E, A)
				}
			}, this.compile = function(t, e) {
				(p = T.get(t, e)).init(), t.traverse(function(t) {
					t.isLight && (p.pushLight(t), t.castShadow && p.pushShadow(t))
				}), p.setupLights(e), t.traverse(function(e) {
					if (e.material)
						if (Array.isArray(e.material))
							for (var r = 0; r < e.material.length; r++) yt(e.material[r], t.fog, e);
						else yt(e.material, t.fog, e)
				})
			};
			var dt = null;
			var ft, mt = new wi;

			function gt(t, e, r, n) {
				for (var i = 0, a = t.length; i < a; i++) {
					var o = t[i],
						s = o.object,
						c = o.geometry,
						h = void 0 === n ? o.material : n,
						l = o.group;
					if (r.isArrayCamera) {
						G = r;
						for (var u = r.cameras, d = 0, f = u.length; d < f; d++) {
							var m = u[d];
							if (s.layers.test(m.layers)) {
								if ("viewport" in m) v.viewport(H.copy(m.viewport));
								else {
									var g = m.bounds,
										y = g.x * W,
										x = g.y * q,
										b = g.z * W,
										w = g.w * q;
									v.viewport(H.set(y, x, b, w).multiplyScalar(X))
								}
								p.setupLights(m), vt(s, e, m, c, h, l)
							}
						}
					} else G = null, vt(s, e, r, c, h, l)
				}
			}

			function vt(t, e, r, n, i, a) {
				if (t.onBeforeRender(O, e, r, n, i, a), p = T.get(e, G || r), t.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
					v.setMaterial(i);
					var o = xt(r, e.fog, i, t);
					F.geometry = null, F.program = null, F.wireframe = !1,
						function(t, e) {
							t.render(function(t) {
								O.renderBufferImmediate(t, e)
							})
						}(t, o)
				} else O.renderBufferDirect(r, e.fog, n, i, t, a);
				t.onAfterRender(O, e, r, n, i, a), p = T.get(e, G || r)
			}

			function yt(t, e, r) {
				var n = x.get(t),
					i = p.state.lights,
					a = p.state.shadowsArray,
					o = n.lightsHash,
					s = i.state.hash,
					c = S.getParameters(t, i.state, a, e, K.numPlanes, K.numIntersection, r),
					h = S.getProgramCode(t, c),
					l = n.program,
					u = !0;
				if (void 0 === l) t.addEventListener("dispose", ut);
				else if (l.code !== h) pt(t);
				else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, u = !1;
				else {
					if (void 0 !== c.shaderID) return;
					u = !1
				}
				if (u) {
					if (c.shaderID) {
						var d = bi[c.shaderID];
						n.shader = {
							name: t.type,
							uniforms: fi(d.uniforms),
							vertexShader: d.vertexShader,
							fragmentShader: d.fragmentShader
						}
					} else n.shader = {
						name: t.type,
						uniforms: t.uniforms,
						vertexShader: t.vertexShader,
						fragmentShader: t.fragmentShader
					};
					t.onBeforeCompile(n.shader, O), h = S.getProgramCode(t, c), l = S.acquireProgram(t, n.shader, c, h), n.program = l, t.program = l
				}
				var f = l.getAttributes();
				if (t.morphTargets) {
					t.numSupportedMorphTargets = 0;
					for (var m = 0; m < O.maxMorphTargets; m++) f["morphTarget" + m] >= 0 && t.numSupportedMorphTargets++
				}
				if (t.morphNormals) {
					t.numSupportedMorphNormals = 0;
					for (m = 0; m < O.maxMorphNormals; m++) f["morphNormal" + m] >= 0 && t.numSupportedMorphNormals++
				}
				var g = n.shader.uniforms;
				(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = K.numPlanes, n.numIntersection = K.numIntersection, g.clippingPlanes = K.uniform), n.fog = e, void 0 === o && (n.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, t.lights && (g.ambientLightColor.value = i.state.ambient, g.directionalLights.value = i.state.directional, g.spotLights.value = i.state.spot, g.rectAreaLights.value = i.state.rectArea, g.pointLights.value = i.state.point, g.hemisphereLights.value = i.state.hemi, g.directionalShadowMap.value = i.state.directionalShadowMap, g.directionalShadowMatrix.value = i.state.directionalShadowMatrix, g.spotShadowMap.value = i.state.spotShadowMap, g.spotShadowMatrix.value = i.state.spotShadowMatrix, g.pointShadowMap.value = i.state.pointShadowMap, g.pointShadowMatrix.value = i.state.pointShadowMatrix);
				var v = n.program.getUniforms(),
					y = ao.seqWithValue(v.seq, g);
				n.uniformsList = y
			}

			function xt(t, e, r, n) {
				j = 0;
				var i = x.get(r),
					a = p.state.lights,
					o = i.lightsHash,
					s = a.state.hash;
				if ($ && (et || t !== U)) {
					var c = t === U && r.id === z;
					K.setState(r.clippingPlanes, r.clipIntersection, r.clipShadows, t, i, c)
				}!1 === r.needsUpdate && (void 0 === i.program ? r.needsUpdate = !0 : r.fog && i.fog !== e ? r.needsUpdate = !0 : (!r.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === i.numClippingPlanes || i.numClippingPlanes === K.numPlanes && i.numIntersection === K.numIntersection) || (r.needsUpdate = !0)), r.needsUpdate && (yt(r, e, n), r.needsUpdate = !1);
				var h, l, u = !1,
					m = !1,
					y = !1,
					b = i.program,
					w = b.getUniforms(),
					_ = i.shader.uniforms;
				if (v.useProgram(b.program) && (u = !0, m = !0, y = !0), r.id !== z && (z = r.id, m = !0), u || U !== t) {
					if (w.setValue(f, "projectionMatrix", t.projectionMatrix), g.logarithmicDepthBuffer && w.setValue(f, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), U !== t && (U = t, m = !0, y = !0), r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshStandardMaterial || r.envMap) {
						var M = w.map.cameraPosition;
						void 0 !== M && M.setValue(f, nt.setFromMatrixPosition(t.matrixWorld))
					}(r.isMeshPhongMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.skinning) && w.setValue(f, "viewMatrix", t.matrixWorldInverse)
				}
				if (r.skinning) {
					w.setOptional(f, n, "bindMatrix"), w.setOptional(f, n, "bindMatrixInverse");
					var S = n.skeleton;
					if (S) {
						var E = S.bones;
						if (g.floatVertexTextures) {
							if (void 0 === S.boneTexture) {
								var T = Math.sqrt(4 * E.length);
								T = ze.ceilPowerOfTwo(T), T = Math.max(T, 4);
								var A = new Float32Array(T * T * 4);
								A.set(S.boneMatrices);
								var L = new Ze(A, T, T, Nt, Lt);
								L.needsUpdate = !0, S.boneMatrices = A, S.boneTexture = L, S.boneTextureSize = T
							}
							w.setValue(f, "boneTexture", S.boneTexture), w.setValue(f, "boneTextureSize", S.boneTextureSize)
						} else w.setOptional(f, S, "boneMatrices")
					}
				}
				return m && (w.setValue(f, "toneMappingExposure", O.toneMappingExposure), w.setValue(f, "toneMappingWhitePoint", O.toneMappingWhitePoint), r.lights && (l = y, (h = _).ambientLightColor.needsUpdate = l, h.directionalLights.needsUpdate = l, h.pointLights.needsUpdate = l, h.spotLights.needsUpdate = l, h.rectAreaLights.needsUpdate = l, h.hemisphereLights.needsUpdate = l), e && r.fog && function(t, e) {
					t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
				}(_, e), r.isMeshBasicMaterial ? bt(_, r) : r.isMeshLambertMaterial ? (bt(_, r), function(t, e) {
					e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
				}(_, r)) : r.isMeshPhongMaterial ? (bt(_, r), r.isMeshToonMaterial ? function(t, e) {
					wt(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
				}(_, r) : wt(_, r)) : r.isMeshStandardMaterial ? (bt(_, r), r.isMeshPhysicalMaterial ? function(t, e) {
					Mt(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness
				}(_, r) : Mt(_, r)) : r.isMeshMatcapMaterial ? (bt(_, r), function(t, e) {
					e.matcap && (t.matcap.value = e.matcap);
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === d && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === d && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(_, r)) : r.isMeshDepthMaterial ? (bt(_, r), function(t, e) {
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(_, r)) : r.isMeshDistanceMaterial ? (bt(_, r), function(t, e) {
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
					t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
				}(_, r)) : r.isMeshNormalMaterial ? (bt(_, r), function(t, e) {
					e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === d && (t.bumpScale.value *= -1));
					e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === d && t.normalScale.value.negate());
					e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
				}(_, r)) : r.isLineBasicMaterial ? (function(t, e) {
					t.diffuse.value = e.color, t.opacity.value = e.opacity
				}(_, r), r.isLineDashedMaterial && function(t, e) {
					t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
				}(_, r)) : r.isPointsMaterial ? function(t, e) {
					t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * X, t.scale.value = .5 * q, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
				}(_, r) : r.isSpriteMaterial ? function(t, e) {
					t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
				}(_, r) : r.isShadowMaterial && (_.color.value = r.color, _.opacity.value = r.opacity), void 0 !== _.ltc_1 && (_.ltc_1.value = xi.LTC_1), void 0 !== _.ltc_2 && (_.ltc_2.value = xi.LTC_2), ao.upload(f, i.uniformsList, _, O)), r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (ao.upload(f, i.uniformsList, _, O), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && w.setValue(f, "center", n.center), w.setValue(f, "modelViewMatrix", n.modelViewMatrix), w.setValue(f, "normalMatrix", n.normalMatrix), w.setValue(f, "modelMatrix", n.matrixWorld), b
			}

			function bt(t, e) {
				var r;
				t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = x.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? r = e.map : e.specularMap ? r = e.specularMap : e.displacementMap ? r = e.displacementMap : e.normalMap ? r = e.normalMap : e.bumpMap ? r = e.bumpMap : e.roughnessMap ? r = e.roughnessMap : e.metalnessMap ? r = e.metalnessMap : e.alphaMap ? r = e.alphaMap : e.emissiveMap && (r = e.emissiveMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
			}

			function wt(t, e) {
				t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === d && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === d && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
			}

			function Mt(t, e) {
				t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === d && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === d && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
			}
			mt.setAnimationLoop(function(t) {
				st.isPresenting() || dt && dt(t)
			}), "undefined" != typeof window && mt.setContext(window), this.setAnimationLoop = function(t) {
				dt = t, st.setAnimationLoop(t), mt.start()
			}, this.render = function(t, e, r, n) {
				if (e && e.isCamera) {
					if (!I) {
						F.geometry = null, F.program = null, F.wireframe = !1, z = -1, U = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), st.enabled && (e = st.getCamera(e)), (p = T.get(t, e)).init(), t.onBeforeRender(O, t, e, r), rt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Q.setFromMatrix(rt), et = this.localClippingEnabled, $ = K.init(this.clippingPlanes, et, e), (u = E.get(t, e)).init(),
							function t(e, r, n, i) {
								if (!1 === e.visible) return;
								var a = e.layers.test(r.layers);
								if (a)
									if (e.isGroup) n = e.renderOrder;
									else if (e.isLight) p.pushLight(e), e.castShadow && p.pushShadow(e);
								else if (e.isSprite) {
									if (!e.frustumCulled || Q.intersectsSprite(e)) {
										i && nt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt);
										var o = M.update(e),
											s = e.material;
										u.push(e, o, s, n, nt.z, null)
									}
								} else if (e.isImmediateRenderObject) i && nt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt), u.push(e, null, e.material, n, nt.z, null);
								else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || Q.intersectsObject(e))) {
									i && nt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt);
									var o = M.update(e),
										s = e.material;
									if (Array.isArray(s))
										for (var c = o.groups, h = 0, l = c.length; h < l; h++) {
											var d = c[h],
												f = s[d.materialIndex];
											f && f.visible && u.push(e, o, f, n, nt.z, d)
										} else s.visible && u.push(e, o, s, n, nt.z, null)
								}
								var m = e.children;
								for (var h = 0, l = m.length; h < l; h++) t(m[h], r, n, i)
							}(t, e, 0, O.sortObjects), !0 === O.sortObjects && u.sort(), $ && K.beginShadows();
						var i = p.state.shadowsArray;
						ct.render(i, t, e), p.setupLights(e), $ && K.endShadows(), this.info.autoReset && this.info.reset(), void 0 === r && (r = null), this.setRenderTarget(r), A.render(u, t, e, n);
						var a = u.opaque,
							o = u.transparent;
						if (t.overrideMaterial) {
							var s = t.overrideMaterial;
							a.length && gt(a, t, e, s), o.length && gt(o, t, e, s)
						} else a.length && gt(a, t, e), o.length && gt(o, t, e);
						r && (b.updateRenderTargetMipmap(r), b.updateMultisampleRenderTarget(r)), v.buffers.depth.setTest(!0), v.buffers.depth.setMask(!0), v.buffers.color.setMask(!0), v.setPolygonOffset(!1), t.onAfterRender(O, t, e), st.enabled && st.submitFrame(), u = null, p = null
					}
				} else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
			}, this.allocTextureUnit = function() {
				var t = j;
				return t >= g.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + g.maxTextures), j += 1, t
			}, this.setTexture2D = (ft = !1, function(t, e) {
				t && t.isWebGLRenderTarget && (ft || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), ft = !0), t = t.texture), b.setTexture2D(t, e)
			}), this.setTexture3D = function(t, e) {
				b.setTexture3D(t, e)
			}, this.setTexture = function() {
				var t = !1;
				return function(e, r) {
					t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), b.setTexture2D(e, r)
				}
			}(), this.setTextureCube = function() {
				var t = !1;
				return function(e, r) {
					e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? b.setTextureCube(e, r) : b.setTextureCubeDynamic(e, r)
				}
			}(), this.setFramebuffer = function(t) {
				D = t
			}, this.getRenderTarget = function() {
				return B
			}, this.setRenderTarget = function(t) {
				B = t, t && void 0 === x.get(t).__webglFramebuffer && b.setupRenderTarget(t);
				var e = D,
					r = !1;
				if (t) {
					var n = x.get(t).__webglFramebuffer;
					t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], r = !0) : e = t.isWebGLMultisampleRenderTarget ? x.get(t).__webglMultisampledFramebuffer : n, H.copy(t.viewport), V.copy(t.scissor), k = t.scissorTest
				} else H.copy(Y).multiplyScalar(X), V.copy(J).multiplyScalar(X), k = Z;
				if (N !== e && (f.bindFramebuffer(36160, e), N = e), v.viewport(H), v.scissor(V), v.setScissorTest(k), r) {
					var i = x.get(t.texture);
					f.framebufferTexture2D(36160, 36064, 34069 + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel)
				}
			}, this.readRenderTargetPixels = function(t, e, r, n, i, a) {
				if (t && t.isWebGLRenderTarget) {
					var o = x.get(t).__webglFramebuffer;
					if (o) {
						var s = !1;
						o !== N && (f.bindFramebuffer(36160, o), s = !0);
						try {
							var c = t.texture,
								h = c.format,
								l = c.type;
							if (h !== Nt && P.convert(h) !== f.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
							if (!(l === _t || P.convert(l) === f.getParameter(35738) || l === Lt && (g.isWebGL2 || m.get("OES_texture_float") || m.get("WEBGL_color_buffer_float")) || l === Rt && (g.isWebGL2 ? m.get("EXT_color_buffer_float") : m.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
							36053 === f.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - n && r >= 0 && r <= t.height - i && f.readPixels(e, r, n, i, P.convert(h), P.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
						} finally {
							s && f.bindFramebuffer(36160, N)
						}
					}
				} else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
			}, this.copyFramebufferToTexture = function(t, e, r) {
				var n = e.image.width,
					i = e.image.height,
					a = P.convert(e.format);
				this.setTexture2D(e, 0), f.copyTexImage2D(3553, r || 0, a, t.x, t.y, n, i, 0)
			}, this.copyTextureToTexture = function(t, e, r, n) {
				var i = e.image.width,
					a = e.image.height,
					o = P.convert(r.format),
					s = P.convert(r.type);
				this.setTexture2D(r, 0), e.isDataTexture ? f.texSubImage2D(3553, n || 0, t.x, t.y, i, a, o, s, e.image.data) : f.texSubImage2D(3553, n || 0, t.x, t.y, o, s, e.image)
			}
		}

		function Qo(t, e) {
			this.name = "", this.color = new yi(t), this.density = void 0 !== e ? e : 25e-5
		}

		function Ko(t, e, r) {
			this.name = "", this.color = new yi(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== r ? r : 1e3
		}

		function $o() {
			Ai.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
		}

		function ts(t, e) {
			this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
				offset: 0,
				count: -1
			}, this.version = 0
		}

		function es(t, e, r, n) {
			this.data = t, this.itemSize = e, this.offset = r, this.normalized = !0 === n
		}

		function rs(t) {
			Ji.call(this), this.type = "SpriteMaterial", this.color = new yi(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t)
		}

		function ns(t) {
			if (Ai.call(this), this.type = "Sprite", void 0 === jo) {
				jo = new ki;
				var e = new ts(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
				jo.setIndex([0, 1, 2, 0, 2, 3]), jo.addAttribute("position", new es(e, 3, 0, !1)), jo.addAttribute("uv", new es(e, 2, 3, !1))
			}
			this.geometry = jo, this.material = void 0 !== t ? t : new rs, this.center = new Fe(.5, .5)
		}

		function is() {
			Ai.call(this), this.type = "LOD", Object.defineProperties(this, {
				levels: {
					enumerable: !0,
					value: []
				}
			})
		}

		function as(t, e) {
			t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), ta.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ue, this.bindMatrixInverse = new Ue
		}

		function os(t, e) {
			if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
			else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
			else {
				console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
				for (var r = 0, n = this.bones.length; r < n; r++) this.boneInverses.push(new Ue)
			}
		}

		function ss() {
			Ai.call(this), this.type = "Bone"
		}

		function cs(t) {
			Ji.call(this), this.type = "LineBasicMaterial", this.color = new yi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
		}

		function hs(t, e, r) {
			1 === r && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Ai.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new ki, this.material = void 0 !== e ? e : new cs({
				color: 16777215 * Math.random()
			})
		}

		function ls(t, e) {
			hs.call(this, t, e), this.type = "LineSegments"
		}

		function us(t, e) {
			hs.call(this, t, e), this.type = "LineLoop"
		}

		function ps(t) {
			Ji.call(this), this.type = "PointsMaterial", this.color = new yi(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
		}

		function ds(t, e) {
			Ai.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new ki, this.material = void 0 !== e ? e : new ps({
				color: 16777215 * Math.random()
			})
		}

		function fs(t, e, r, n, i, a, o, s, c) {
			We.call(this, t, e, r, n, i, a, o, s, c), this.format = void 0 !== o ? o : Bt, this.minFilter = void 0 !== a ? a : xt, this.magFilter = void 0 !== i ? i : xt, this.generateMipmaps = !1
		}

		function ms(t, e, r, n, i, a, o, s, c, h, l, u) {
			We.call(this, null, a, o, s, c, h, n, i, l, u), this.image = {
				width: e,
				height: r
			}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
		}

		function gs(t, e, r, n, i, a, o, s, c) {
			We.call(this, t, e, r, n, i, a, o, s, c), this.needsUpdate = !0
		}

		function vs(t, e, r, n, i, a, o, s, c, h) {
			if ((h = void 0 !== h ? h : Gt) !== Gt && h !== Ht) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
			void 0 === r && h === Gt && (r = Et), void 0 === r && h === Ht && (r = It), We.call(this, null, n, i, a, o, s, h, r, c), this.image = {
				width: t,
				height: e
			}, this.magFilter = void 0 !== o ? o : gt, this.minFilter = void 0 !== s ? s : gt, this.flipY = !1, this.generateMipmaps = !1
		}

		function ys(t) {
			ki.call(this), this.type = "WireframeGeometry";
			var e, r, n, i, a, o, s, c, h, l, u = [],
				p = [0, 0],
				d = {},
				f = ["a", "b", "c"];
			if (t && t.isGeometry) {
				var m = t.faces;
				for (e = 0, n = m.length; e < n; e++) {
					var g = m[e];
					for (r = 0; r < 3; r++) s = g[f[r]], c = g[f[(r + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
						index1: p[0],
						index2: p[1]
					})
				}
				for (h in d) o = d[h], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z)
			} else if (t && t.isBufferGeometry) {
				var v, y, x, b, w, _, M;
				if (l = new He, null !== t.index) {
					for (v = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{
							start: 0,
							count: y.count,
							materialIndex: 0
						}]), i = 0, a = x.length; i < a; ++i)
						for (e = w = (b = x[i]).start, n = w + b.count; e < n; e += 3)
							for (r = 0; r < 3; r++) s = y.getX(e + r), c = y.getX(e + (r + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[h = p[0] + "," + p[1]] && (d[h] = {
								index1: p[0],
								index2: p[1]
							});
					for (h in d) o = d[h], l.fromBufferAttribute(v, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, o.index2), u.push(l.x, l.y, l.z)
				} else
					for (e = 0, n = (v = t.attributes.position).count / 3; e < n; e++)
						for (r = 0; r < 3; r++) _ = 3 * e + r, l.fromBufferAttribute(v, _), u.push(l.x, l.y, l.z), M = 3 * e + (r + 1) % 3, l.fromBufferAttribute(v, M), u.push(l.x, l.y, l.z)
			}
			this.addAttribute("position", new Fi(u, 3))
		}

		function xs(t, e, r) {
			Ri.call(this), this.type = "ParametricGeometry", this.parameters = {
				func: t,
				slices: e,
				stacks: r
			}, this.fromBufferGeometry(new bs(t, e, r)), this.mergeVertices()
		}

		function bs(t, e, r) {
			ki.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
				func: t,
				slices: e,
				stacks: r
			};
			var n, i, a = [],
				o = [],
				s = [],
				c = [],
				h = new He,
				l = new He,
				u = new He,
				p = new He,
				d = new He;
			t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
			var f = e + 1;
			for (n = 0; n <= r; n++) {
				var m = n / r;
				for (i = 0; i <= e; i++) {
					var g = i / e;
					t(g, m, l), o.push(l.x, l.y, l.z), g - 1e-5 >= 0 ? (t(g - 1e-5, m, u), p.subVectors(l, u)) : (t(g + 1e-5, m, u), p.subVectors(u, l)), m - 1e-5 >= 0 ? (t(g, m - 1e-5, u), d.subVectors(l, u)) : (t(g, m + 1e-5, u), d.subVectors(u, l)), h.crossVectors(p, d).normalize(), s.push(h.x, h.y, h.z), c.push(g, m)
				}
			}
			for (n = 0; n < r; n++)
				for (i = 0; i < e; i++) {
					var v = n * f + i,
						y = n * f + i + 1,
						x = (n + 1) * f + i + 1,
						b = (n + 1) * f + i;
					a.push(v, y, b), a.push(y, x, b)
				}
			this.setIndex(a), this.addAttribute("position", new Fi(o, 3)), this.addAttribute("normal", new Fi(s, 3)), this.addAttribute("uv", new Fi(c, 2))
		}

		function ws(t, e, r, n) {
			Ri.call(this), this.type = "PolyhedronGeometry", this.parameters = {
				vertices: t,
				indices: e,
				radius: r,
				detail: n
			}, this.fromBufferGeometry(new _s(t, e, r, n)), this.mergeVertices()
		}

		function _s(t, e, r, n) {
			ki.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
				vertices: t,
				indices: e,
				radius: r,
				detail: n
			}, r = r || 1;
			var i = [],
				a = [];

			function o(t, e, r, n) {
				var i, a, o = Math.pow(2, n),
					c = [];
				for (i = 0; i <= o; i++) {
					c[i] = [];
					var h = t.clone().lerp(r, i / o),
						l = e.clone().lerp(r, i / o),
						u = o - i;
					for (a = 0; a <= u; a++) c[i][a] = 0 === a && i === o ? h : h.clone().lerp(l, a / u)
				}
				for (i = 0; i < o; i++)
					for (a = 0; a < 2 * (o - i) - 1; a++) {
						var p = Math.floor(a / 2);
						a % 2 == 0 ? (s(c[i][p + 1]), s(c[i + 1][p]), s(c[i][p])) : (s(c[i][p + 1]), s(c[i + 1][p + 1]), s(c[i + 1][p]))
					}
			}

			function s(t) {
				i.push(t.x, t.y, t.z)
			}

			function c(e, r) {
				var n = 3 * e;
				r.x = t[n + 0], r.y = t[n + 1], r.z = t[n + 2]
			}

			function h(t, e, r, n) {
				n < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === r.x && 0 === r.z && (a[e] = n / 2 / Math.PI + .5)
			}

			function l(t) {
				return Math.atan2(t.z, -t.x)
			}! function(t) {
				for (var r = new He, n = new He, i = new He, a = 0; a < e.length; a += 3) c(e[a + 0], r), c(e[a + 1], n), c(e[a + 2], i), o(r, n, i, t)
			}(n = n || 0),
			function(t) {
				for (var e = new He, r = 0; r < i.length; r += 3) e.x = i[r + 0], e.y = i[r + 1], e.z = i[r + 2], e.normalize().multiplyScalar(t), i[r + 0] = e.x, i[r + 1] = e.y, i[r + 2] = e.z
			}(r),
			function() {
				for (var t = new He, e = 0; e < i.length; e += 3) {
					t.x = i[e + 0], t.y = i[e + 1], t.z = i[e + 2];
					var r = l(t) / 2 / Math.PI + .5,
						n = (o = t, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
					a.push(r, 1 - n)
				}
				var o;
				(function() {
					for (var t = new He, e = new He, r = new He, n = new He, o = new Fe, s = new Fe, c = new Fe, u = 0, p = 0; u < i.length; u += 9, p += 6) {
						t.set(i[u + 0], i[u + 1], i[u + 2]), e.set(i[u + 3], i[u + 4], i[u + 5]), r.set(i[u + 6], i[u + 7], i[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), n.copy(t).add(e).add(r).divideScalar(3);
						var d = l(n);
						h(o, p + 0, t, d), h(s, p + 2, e, d), h(c, p + 4, r, d)
					}
				})(),
				function() {
					for (var t = 0; t < a.length; t += 6) {
						var e = a[t + 0],
							r = a[t + 2],
							n = a[t + 4],
							i = Math.max(e, r, n),
							o = Math.min(e, r, n);
						i > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), r < .2 && (a[t + 2] += 1), n < .2 && (a[t + 4] += 1))
					}
				}()
			}(), this.addAttribute("position", new Fi(i, 3)), this.addAttribute("normal", new Fi(i.slice(), 3)), this.addAttribute("uv", new Fi(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
		}

		function Ms(t, e) {
			Ri.call(this), this.type = "TetrahedronGeometry", this.parameters = {
				radius: t,
				detail: e
			}, this.fromBufferGeometry(new Ss(t, e)), this.mergeVertices()
		}

		function Ss(t, e) {
			_s.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
				radius: t,
				detail: e
			}
		}

		function Es(t, e) {
			Ri.call(this), this.type = "OctahedronGeometry", this.parameters = {
				radius: t,
				detail: e
			}, this.fromBufferGeometry(new Ts(t, e)), this.mergeVertices()
		}

		function Ts(t, e) {
			_s.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
				radius: t,
				detail: e
			}
		}

		function As(t, e) {
			Ri.call(this), this.type = "IcosahedronGeometry", this.parameters = {
				radius: t,
				detail: e
			}, this.fromBufferGeometry(new Ls(t, e)), this.mergeVertices()
		}

		function Ls(t, e) {
			var r = (1 + Math.sqrt(5)) / 2,
				n = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1];
			_s.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
				radius: t,
				detail: e
			}
		}

		function Rs(t, e) {
			Ri.call(this), this.type = "DodecahedronGeometry", this.parameters = {
				radius: t,
				detail: e
			}, this.fromBufferGeometry(new Cs(t, e)), this.mergeVertices()
		}

		function Cs(t, e) {
			var r = (1 + Math.sqrt(5)) / 2,
				n = 1 / r,
				i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n];
			_s.call(this, i, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
				radius: t,
				detail: e
			}
		}

		function Ps(t, e, r, n, i, a) {
			Ri.call(this), this.type = "TubeGeometry", this.parameters = {
				path: t,
				tubularSegments: e,
				radius: r,
				radialSegments: n,
				closed: i
			}, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
			var o = new Os(t, e, r, n, i);
			this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
		}

		function Os(t, e, r, n, i) {
			ki.call(this), this.type = "TubeBufferGeometry", this.parameters = {
				path: t,
				tubularSegments: e,
				radius: r,
				radialSegments: n,
				closed: i
			}, e = e || 64, r = r || 1, n = n || 8, i = i || !1;
			var a = t.computeFrenetFrames(e, i);
			this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
			var o, s, c = new He,
				h = new He,
				l = new Fe,
				u = new He,
				p = [],
				d = [],
				f = [],
				m = [];

			function g(i) {
				u = t.getPointAt(i / e, u);
				var o = a.normals[i],
					l = a.binormals[i];
				for (s = 0; s <= n; s++) {
					var f = s / n * Math.PI * 2,
						m = Math.sin(f),
						g = -Math.cos(f);
					h.x = g * o.x + m * l.x, h.y = g * o.y + m * l.y, h.z = g * o.z + m * l.z, h.normalize(), d.push(h.x, h.y, h.z), c.x = u.x + r * h.x, c.y = u.y + r * h.y, c.z = u.z + r * h.z, p.push(c.x, c.y, c.z)
				}
			}! function() {
				for (o = 0; o < e; o++) g(o);
				g(!1 === i ? e : 0),
					function() {
						for (o = 0; o <= e; o++)
							for (s = 0; s <= n; s++) l.x = o / e, l.y = s / n, f.push(l.x, l.y)
					}(),
					function() {
						for (s = 1; s <= e; s++)
							for (o = 1; o <= n; o++) {
								var t = (n + 1) * (s - 1) + (o - 1),
									r = (n + 1) * s + (o - 1),
									i = (n + 1) * s + o,
									a = (n + 1) * (s - 1) + o;
								m.push(t, r, a), m.push(r, i, a)
							}
					}()
			}(), this.setIndex(m), this.addAttribute("position", new Fi(p, 3)), this.addAttribute("normal", new Fi(d, 3)), this.addAttribute("uv", new Fi(f, 2))
		}

		function Is(t, e, r, n, i, a, o) {
			Ri.call(this), this.type = "TorusKnotGeometry", this.parameters = {
				radius: t,
				tube: e,
				tubularSegments: r,
				radialSegments: n,
				p: i,
				q: a
			}, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Ds(t, e, r, n, i, a)), this.mergeVertices()
		}

		function Ds(t, e, r, n, i, a) {
			ki.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
				radius: t,
				tube: e,
				tubularSegments: r,
				radialSegments: n,
				p: i,
				q: a
			}, t = t || 1, e = e || .4, r = Math.floor(r) || 64, n = Math.floor(n) || 8, i = i || 2, a = a || 3;
			var o, s, c = [],
				h = [],
				l = [],
				u = [],
				p = new He,
				d = new He,
				f = new He,
				m = new He,
				g = new He,
				v = new He,
				y = new He;
			for (o = 0; o <= r; ++o) {
				var x = o / r * i * Math.PI * 2;
				for (A(x, i, a, t, f), A(x + .01, i, a, t, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) {
					var b = s / n * Math.PI * 2,
						w = -e * Math.cos(b),
						_ = e * Math.sin(b);
					p.x = f.x + (w * y.x + _ * g.x), p.y = f.y + (w * y.y + _ * g.y), p.z = f.z + (w * y.z + _ * g.z), h.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / r), u.push(s / n)
				}
			}
			for (s = 1; s <= r; s++)
				for (o = 1; o <= n; o++) {
					var M = (n + 1) * (s - 1) + (o - 1),
						S = (n + 1) * s + (o - 1),
						E = (n + 1) * s + o,
						T = (n + 1) * (s - 1) + o;
					c.push(M, S, T), c.push(S, E, T)
				}

			function A(t, e, r, n, i) {
				var a = Math.cos(t),
					o = Math.sin(t),
					s = r / e * t,
					c = Math.cos(s);
				i.x = n * (2 + c) * .5 * a, i.y = n * (2 + c) * o * .5, i.z = n * Math.sin(s) * .5
			}
			this.setIndex(c), this.addAttribute("position", new Fi(h, 3)), this.addAttribute("normal", new Fi(l, 3)), this.addAttribute("uv", new Fi(u, 2))
		}

		function Bs(t, e, r, n, i) {
			Ri.call(this), this.type = "TorusGeometry", this.parameters = {
				radius: t,
				tube: e,
				radialSegments: r,
				tubularSegments: n,
				arc: i
			}, this.fromBufferGeometry(new Ns(t, e, r, n, i)), this.mergeVertices()
		}

		function Ns(t, e, r, n, i) {
			ki.call(this), this.type = "TorusBufferGeometry", this.parameters = {
				radius: t,
				tube: e,
				radialSegments: r,
				tubularSegments: n,
				arc: i
			}, t = t || 1, e = e || .4, r = Math.floor(r) || 8, n = Math.floor(n) || 6, i = i || 2 * Math.PI;
			var a, o, s = [],
				c = [],
				h = [],
				l = [],
				u = new He,
				p = new He,
				d = new He;
			for (a = 0; a <= r; a++)
				for (o = 0; o <= n; o++) {
					var f = o / n * i,
						m = a / r * Math.PI * 2;
					p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), h.push(d.x, d.y, d.z), l.push(o / n), l.push(a / r)
				}
			for (a = 1; a <= r; a++)
				for (o = 1; o <= n; o++) {
					var g = (n + 1) * a + o - 1,
						v = (n + 1) * (a - 1) + o - 1,
						y = (n + 1) * (a - 1) + o,
						x = (n + 1) * a + o;
					s.push(g, v, x), s.push(v, y, x)
				}
			this.setIndex(s), this.addAttribute("position", new Fi(c, 3)), this.addAttribute("normal", new Fi(h, 3)), this.addAttribute("uv", new Fi(l, 2))
		}
		Qo.prototype.isFogExp2 = !0, Qo.prototype.clone = function() {
			return new Qo(this.color, this.density)
		}, Qo.prototype.toJSON = function() {
			return {
				type: "FogExp2",
				color: this.color.getHex(),
				density: this.density
			}
		}, Ko.prototype.isFog = !0, Ko.prototype.clone = function() {
			return new Ko(this.color, this.near, this.far)
		}, Ko.prototype.toJSON = function() {
			return {
				type: "Fog",
				color: this.color.getHex(),
				near: this.near,
				far: this.far
			}
		}, $o.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: $o,
			isScene: !0,
			copy: function(t, e) {
				return Ai.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
			},
			toJSON: function(t) {
				var e = Ai.prototype.toJSON.call(this, t);
				return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Object.defineProperty(ts.prototype, "needsUpdate", {
			set: function(t) {
				!0 === t && this.version++
			}
		}), Object.assign(ts.prototype, {
			isInterleavedBuffer: !0,
			onUploadCallback: function() {},
			setArray: function(t) {
				if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
				return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
			},
			setDynamic: function(t) {
				return this.dynamic = t, this
			},
			copy: function(t) {
				return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
			},
			copyAt: function(t, e, r) {
				t *= this.stride, r *= e.stride;
				for (var n = 0, i = this.stride; n < i; n++) this.array[t + n] = e.array[r + n];
				return this
			},
			set: function(t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			onUpload: function(t) {
				return this.onUploadCallback = t, this
			}
		}), Object.defineProperties(es.prototype, {
			count: {
				get: function() {
					return this.data.count
				}
			},
			array: {
				get: function() {
					return this.data.array
				}
			}
		}), Object.assign(es.prototype, {
			isInterleavedBufferAttribute: !0,
			setX: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset] = e, this
			},
			setY: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 1] = e, this
			},
			setZ: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 2] = e, this
			},
			setW: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 3] = e, this
			},
			getX: function(t) {
				return this.data.array[t * this.data.stride + this.offset]
			},
			getY: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 1]
			},
			getZ: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 2]
			},
			getW: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 3]
			},
			setXY: function(t, e, r) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = r, this
			},
			setXYZ: function(t, e, r, n) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = r, this.data.array[t + 2] = n, this
			},
			setXYZW: function(t, e, r, n, i) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = r, this.data.array[t + 2] = n, this.data.array[t + 3] = i, this
			}
		}), rs.prototype = Object.create(Ji.prototype), rs.prototype.constructor = rs, rs.prototype.isSpriteMaterial = !0, rs.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
		}, ns.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: ns,
			isSprite: !0,
			raycast: function() {
				var t = new He,
					e = new He,
					r = new He,
					n = new Fe,
					i = new Fe,
					a = new Ue,
					o = new He,
					s = new He,
					c = new He,
					h = new Fe,
					l = new Fe,
					u = new Fe;

				function p(t, e, r, o, s, c) {
					n.subVectors(t, r).addScalar(.5).multiply(o), void 0 !== s ? (i.x = c * n.x - s * n.y, i.y = s * n.x + c * n.y) : i.copy(n), t.copy(e), t.x += i.x, t.y += i.y, t.applyMatrix4(a)
				}
				return function(n, i) {
					e.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), r.setFromMatrixPosition(this.modelViewMatrix);
					var d, f, m = this.material.rotation;
					0 !== m && (f = Math.cos(m), d = Math.sin(m));
					var g = this.center;
					p(o.set(-.5, -.5, 0), r, g, e, d, f), p(s.set(.5, -.5, 0), r, g, e, d, f), p(c.set(.5, .5, 0), r, g, e, d, f), h.set(0, 0), l.set(1, 0), u.set(1, 1);
					var v = n.ray.intersectTriangle(o, s, c, !1, t);
					if (null !== v || (p(s.set(-.5, .5, 0), r, g, e, d, f), l.set(0, 1), null !== (v = n.ray.intersectTriangle(o, c, s, !1, t)))) {
						var y = n.ray.origin.distanceTo(t);
						y < n.near || y > n.far || i.push({
							distance: y,
							point: t.clone(),
							uv: Ki.getUV(t, o, s, c, h, l, u, new Fe),
							face: null,
							object: this
						})
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.material).copy(this)
			},
			copy: function(t) {
				return Ai.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
			}
		}), is.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: is,
			copy: function(t) {
				Ai.prototype.copy.call(this, t, !1);
				for (var e = t.levels, r = 0, n = e.length; r < n; r++) {
					var i = e[r];
					this.addLevel(i.object.clone(), i.distance)
				}
				return this
			},
			addLevel: function(t, e) {
				void 0 === e && (e = 0), e = Math.abs(e);
				for (var r = this.levels, n = 0; n < r.length && !(e < r[n].distance); n++);
				r.splice(n, 0, {
					distance: e,
					object: t
				}), this.add(t)
			},
			getObjectForDistance: function(t) {
				for (var e = this.levels, r = 1, n = e.length; r < n && !(t < e[r].distance); r++);
				return e[r - 1].object
			},
			raycast: function() {
				var t = new He;
				return function(e, r) {
					t.setFromMatrixPosition(this.matrixWorld);
					var n = e.ray.origin.distanceTo(t);
					this.getObjectForDistance(n).raycast(e, r)
				}
			}(),
			update: function() {
				var t = new He,
					e = new He;
				return function(r) {
					var n = this.levels;
					if (n.length > 1) {
						t.setFromMatrixPosition(r.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
						var i = t.distanceTo(e);
						n[0].object.visible = !0;
						for (var a = 1, o = n.length; a < o && i >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
						for (; a < o; a++) n[a].object.visible = !1
					}
				}
			}(),
			toJSON: function(t) {
				var e = Ai.prototype.toJSON.call(this, t);
				e.object.levels = [];
				for (var r = this.levels, n = 0, i = r.length; n < i; n++) {
					var a = r[n];
					e.object.levels.push({
						object: a.object.uuid,
						distance: a.distance
					})
				}
				return e
			}
		}), as.prototype = Object.assign(Object.create(ta.prototype), {
			constructor: as,
			isSkinnedMesh: !0,
			bind: function(t, e) {
				this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
			},
			pose: function() {
				this.skeleton.pose()
			},
			normalizeSkinWeights: function() {
				for (var t = new qe, e = this.geometry.attributes.skinWeight, r = 0, n = e.count; r < n; r++) {
					t.x = e.getX(r), t.y = e.getY(r), t.z = e.getZ(r), t.w = e.getW(r);
					var i = 1 / t.manhattanLength();
					i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(r, t.x, t.y, t.z, t.w)
				}
			},
			updateMatrixWorld: function(t) {
				ta.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
			},
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), Object.assign(os.prototype, {
			calculateInverses: function() {
				this.boneInverses = [];
				for (var t = 0, e = this.bones.length; t < e; t++) {
					var r = new Ue;
					this.bones[t] && r.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(r)
				}
			},
			pose: function() {
				var t, e, r;
				for (e = 0, r = this.bones.length; e < r; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
				for (e = 0, r = this.bones.length; e < r; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
			},
			update: function() {
				var t = new Ue,
					e = new Ue;
				return function() {
					for (var r = this.bones, n = this.boneInverses, i = this.boneMatrices, a = this.boneTexture, o = 0, s = r.length; o < s; o++) {
						var c = r[o] ? r[o].matrixWorld : e;
						t.multiplyMatrices(c, n[o]), t.toArray(i, 16 * o)
					}
					void 0 !== a && (a.needsUpdate = !0)
				}
			}(),
			clone: function() {
				return new os(this.bones, this.boneInverses)
			},
			getBoneByName: function(t) {
				for (var e = 0, r = this.bones.length; e < r; e++) {
					var n = this.bones[e];
					if (n.name === t) return n
				}
			}
		}), ss.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: ss,
			isBone: !0
		}), cs.prototype = Object.create(Ji.prototype), cs.prototype.constructor = cs, cs.prototype.isLineBasicMaterial = !0, cs.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
		}, hs.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: hs,
			isLine: !0,
			computeLineDistances: function() {
				var t = new He,
					e = new He;
				return function() {
					var r = this.geometry;
					if (r.isBufferGeometry)
						if (null === r.index) {
							for (var n = r.attributes.position, i = [0], a = 1, o = n.count; a < o; a++) t.fromBufferAttribute(n, a - 1), e.fromBufferAttribute(n, a), i[a] = i[a - 1], i[a] += t.distanceTo(e);
							r.addAttribute("lineDistance", new Fi(i, 1))
						} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
					else if (r.isGeometry) {
						var s = r.vertices;
						(i = r.lineDistances)[0] = 0;
						for (a = 1, o = s.length; a < o; a++) i[a] = i[a - 1], i[a] += s[a - 1].distanceTo(s[a])
					}
					return this
				}
			}(),
			raycast: function() {
				var t = new Ue,
					e = new Qi,
					r = new Ke;
				return function(n, i) {
					var a = n.linePrecision,
						o = this.geometry,
						s = this.matrixWorld;
					if (null === o.boundingSphere && o.computeBoundingSphere(), r.copy(o.boundingSphere), r.applyMatrix4(s), r.radius += a, !1 !== n.ray.intersectsSphere(r)) {
						t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
						var c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
							h = c * c,
							l = new He,
							u = new He,
							p = new He,
							d = new He,
							f = this && this.isLineSegments ? 2 : 1;
						if (o.isBufferGeometry) {
							var m = o.index,
								g = o.attributes.position.array;
							if (null !== m)
								for (var v = m.array, y = 0, x = v.length - 1; y < x; y += f) {
									var b = v[y],
										w = v[y + 1];
									if (l.fromArray(g, 3 * b), u.fromArray(g, 3 * w), !(e.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || i.push({
										distance: S,
										point: p.clone().applyMatrix4(this.matrixWorld),
										index: y,
										face: null,
										faceIndex: null,
										object: this
									})
								} else
									for (y = 0, x = g.length / 3 - 1; y < x; y += f) {
										if (l.fromArray(g, 3 * y), u.fromArray(g, 3 * y + 3), !(e.distanceSqToSegment(l, u, d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || i.push({
											distance: S,
											point: p.clone().applyMatrix4(this.matrixWorld),
											index: y,
											face: null,
											faceIndex: null,
											object: this
										})
									}
						} else if (o.isGeometry) {
							var _ = o.vertices,
								M = _.length;
							for (y = 0; y < M - 1; y += f) {
								var S;
								if (!(e.distanceSqToSegment(_[y], _[y + 1], d, p) > h)) d.applyMatrix4(this.matrixWorld), (S = n.ray.origin.distanceTo(d)) < n.near || S > n.far || i.push({
									distance: S,
									point: p.clone().applyMatrix4(this.matrixWorld),
									index: y,
									face: null,
									faceIndex: null,
									object: this
								})
							}
						}
					}
				}
			}(),
			copy: function(t) {
				return Ai.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			}
		}), ls.prototype = Object.assign(Object.create(hs.prototype), {
			constructor: ls,
			isLineSegments: !0,
			computeLineDistances: function() {
				var t = new He,
					e = new He;
				return function() {
					var r = this.geometry;
					if (r.isBufferGeometry)
						if (null === r.index) {
							for (var n = r.attributes.position, i = [], a = 0, o = n.count; a < o; a += 2) t.fromBufferAttribute(n, a), e.fromBufferAttribute(n, a + 1), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + t.distanceTo(e);
							r.addAttribute("lineDistance", new Fi(i, 1))
						} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
					else if (r.isGeometry) {
						var s = r.vertices;
						for (i = r.lineDistances, a = 0, o = s.length; a < o; a += 2) t.copy(s[a]), e.copy(s[a + 1]), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + t.distanceTo(e)
					}
					return this
				}
			}()
		}), us.prototype = Object.assign(Object.create(hs.prototype), {
			constructor: us,
			isLineLoop: !0
		}), ps.prototype = Object.create(Ji.prototype), ps.prototype.constructor = ps, ps.prototype.isPointsMaterial = !0, ps.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
		}, ds.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: ds,
			isPoints: !0,
			raycast: function() {
				var t = new Ue,
					e = new Qi,
					r = new Ke;
				return function(n, i) {
					var a = this,
						o = this.geometry,
						s = this.matrixWorld,
						c = n.params.Points.threshold;
					if (null === o.boundingSphere && o.computeBoundingSphere(), r.copy(o.boundingSphere), r.applyMatrix4(s), r.radius += c, !1 !== n.ray.intersectsSphere(r)) {
						t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
						var h = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
							l = h * h,
							u = new He,
							p = new He;
						if (o.isBufferGeometry) {
							var d = o.index,
								f = o.attributes.position.array;
							if (null !== d)
								for (var m = d.array, g = 0, v = m.length; g < v; g++) {
									var y = m[g];
									u.fromArray(f, 3 * y), w(u, y)
								} else {
									g = 0;
									for (var x = f.length / 3; g < x; g++) u.fromArray(f, 3 * g), w(u, g)
								}
						} else {
							var b = o.vertices;
							for (g = 0, x = b.length; g < x; g++) w(b[g], g)
						}
					}

					function w(t, r) {
						var o = e.distanceSqToPoint(t);
						if (o < l) {
							e.closestPointToPoint(t, p), p.applyMatrix4(s);
							var c = n.ray.origin.distanceTo(p);
							if (c < n.near || c > n.far) return;
							i.push({
								distance: c,
								distanceToRay: Math.sqrt(o),
								point: p.clone(),
								index: r,
								face: null,
								object: a
							})
						}
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), fs.prototype = Object.assign(Object.create(We.prototype), {
			constructor: fs,
			isVideoTexture: !0,
			update: function() {
				var t = this.image;
				t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
			}
		}), ms.prototype = Object.create(We.prototype), ms.prototype.constructor = ms, ms.prototype.isCompressedTexture = !0, gs.prototype = Object.create(We.prototype), gs.prototype.constructor = gs, gs.prototype.isCanvasTexture = !0, vs.prototype = Object.create(We.prototype), vs.prototype.constructor = vs, vs.prototype.isDepthTexture = !0, ys.prototype = Object.create(ki.prototype), ys.prototype.constructor = ys, xs.prototype = Object.create(Ri.prototype), xs.prototype.constructor = xs, bs.prototype = Object.create(ki.prototype), bs.prototype.constructor = bs, ws.prototype = Object.create(Ri.prototype), ws.prototype.constructor = ws, _s.prototype = Object.create(ki.prototype), _s.prototype.constructor = _s, Ms.prototype = Object.create(Ri.prototype), Ms.prototype.constructor = Ms, Ss.prototype = Object.create(_s.prototype), Ss.prototype.constructor = Ss, Es.prototype = Object.create(Ri.prototype), Es.prototype.constructor = Es, Ts.prototype = Object.create(_s.prototype), Ts.prototype.constructor = Ts, As.prototype = Object.create(Ri.prototype), As.prototype.constructor = As, Ls.prototype = Object.create(_s.prototype), Ls.prototype.constructor = Ls, Rs.prototype = Object.create(Ri.prototype), Rs.prototype.constructor = Rs, Cs.prototype = Object.create(_s.prototype), Cs.prototype.constructor = Cs, Ps.prototype = Object.create(Ri.prototype), Ps.prototype.constructor = Ps, Os.prototype = Object.create(ki.prototype), Os.prototype.constructor = Os, Is.prototype = Object.create(Ri.prototype), Is.prototype.constructor = Is, Ds.prototype = Object.create(ki.prototype), Ds.prototype.constructor = Ds, Bs.prototype = Object.create(Ri.prototype), Bs.prototype.constructor = Bs, Ns.prototype = Object.create(ki.prototype), Ns.prototype.constructor = Ns;
		var zs = {
			triangulate: function(t, e, r) {
				r = r || 2;
				var n, i, a, o, s, c, h, l = e && e.length,
					u = l ? e[0] * r : t.length,
					p = Fs(t, 0, u, r, !0),
					d = [];
				if (!p) return d;
				if (l && (p = Ws(t, e, p, r)), t.length > 80 * r) {
					n = a = t[0], i = o = t[1];
					for (var f = r; f < u; f += r)(s = t[f]) < n && (n = s), (c = t[f + 1]) < i && (i = c), s > a && (a = s), c > o && (o = c);
					h = 0 !== (h = Math.max(a - n, o - i)) ? 1 / h : 0
				}
				return Gs(p, d, r, n, i, h), d
			}
		};

		function Fs(t, e, r, n, i) {
			var a, o;
			if (i === uc(t, e, r, n) > 0)
				for (a = e; a < r; a += n) o = cc(a, t[a], t[a + 1], o);
			else
				for (a = r - n; a >= e; a -= n) o = cc(a, t[a], t[a + 1], o);
			return o && rc(o, o.next) && (hc(o), o = o.next), o
		}

		function Us(t, e) {
			if (!t) return t;
			e || (e = t);
			var r, n = t;
			do {
				if (r = !1, n.steiner || !rc(n, n.next) && 0 !== ec(n.prev, n, n.next)) n = n.next;
				else {
					if (hc(n), (n = e = n.prev) === n.next) break;
					r = !0
				}
			} while (r || n !== e);
			return e
		}

		function Gs(t, e, r, n, i, a, o) {
			if (t) {
				!o && a && Js(t, n, i, a);
				for (var s, c, h = t; t.prev !== t.next;)
					if (s = t.prev, c = t.next, a ? Vs(t, n, i, a) : Hs(t)) e.push(s.i / r), e.push(t.i / r), e.push(c.i / r), hc(t), t = c.next, h = c.next;
					else if ((t = c) === h) {
					o ? 1 === o ? Gs(t = ks(t, e, r), e, r, n, i, a, 2) : 2 === o && js(t, e, r, n, i, a) : Gs(Us(t), e, r, n, i, a, 1);
					break
				}
			}
		}

		function Hs(t) {
			var e = t.prev,
				r = t,
				n = t.next;
			if (ec(e, r, n) >= 0) return !1;
			for (var i = t.next.next; i !== t.prev;) {
				if ($s(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) && ec(i.prev, i, i.next) >= 0) return !1;
				i = i.next
			}
			return !0
		}

		function Vs(t, e, r, n) {
			var i = t.prev,
				a = t,
				o = t.next;
			if (ec(i, a, o) >= 0) return !1;
			for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, c = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, h = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, l = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, u = Qs(s, c, e, r, n), p = Qs(h, l, e, r, n), d = t.nextZ; d && d.z <= p;) {
				if (d !== t.prev && d !== t.next && $s(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && ec(d.prev, d, d.next) >= 0) return !1;
				d = d.nextZ
			}
			for (d = t.prevZ; d && d.z >= u;) {
				if (d !== t.prev && d !== t.next && $s(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && ec(d.prev, d, d.next) >= 0) return !1;
				d = d.prevZ
			}
			return !0
		}

		function ks(t, e, r) {
			var n = t;
			do {
				var i = n.prev,
					a = n.next.next;
				!rc(i, a) && nc(i, n, n.next, a) && ac(i, a) && ac(a, i) && (e.push(i.i / r), e.push(n.i / r), e.push(a.i / r), hc(n), hc(n.next), n = t = a), n = n.next
			} while (n !== t);
			return n
		}

		function js(t, e, r, n, i, a) {
			var o = t;
			do {
				for (var s = o.next.next; s !== o.prev;) {
					if (o.i !== s.i && tc(o, s)) {
						var c = sc(o, s);
						return o = Us(o, o.next), c = Us(c, c.next), Gs(o, e, r, n, i, a), void Gs(c, e, r, n, i, a)
					}
					s = s.next
				}
				o = o.next
			} while (o !== t)
		}

		function Ws(t, e, r, n) {
			var i, a, o, s = [];
			for (i = 0, a = e.length; i < a; i++)(o = Fs(t, e[i] * n, i < a - 1 ? e[i + 1] * n : t.length, n, !1)) === o.next && (o.steiner = !0), s.push(Ks(o));
			for (s.sort(qs), i = 0; i < s.length; i++) Xs(s[i], r), r = Us(r, r.next);
			return r
		}

		function qs(t, e) {
			return t.x - e.x
		}

		function Xs(t, e) {
			if (e = Ys(t, e)) {
				var r = sc(e, t);
				Us(r, r.next)
			}
		}

		function Ys(t, e) {
			var r, n = e,
				i = t.x,
				a = t.y,
				o = -1 / 0;
			do {
				if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
					var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
					if (s <= i && s > o) {
						if (o = s, s === i) {
							if (a === n.y) return n;
							if (a === n.next.y) return n.next
						}
						r = n.x < n.next.x ? n : n.next
					}
				}
				n = n.next
			} while (n !== e);
			if (!r) return null;
			if (i === o) return r.prev;
			var c, h = r,
				l = r.x,
				u = r.y,
				p = 1 / 0;
			for (n = r.next; n !== h;) i >= n.x && n.x >= l && i !== n.x && $s(a < u ? i : o, a, l, u, a < u ? o : i, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (i - n.x)) < p || c === p && n.x > r.x) && ac(n, t) && (r = n, p = c), n = n.next;
			return r
		}

		function Js(t, e, r, n) {
			var i = t;
			do {
				null === i.z && (i.z = Qs(i.x, i.y, e, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
			} while (i !== t);
			i.prevZ.nextZ = null, i.prevZ = null, Zs(i)
		}

		function Zs(t) {
			var e, r, n, i, a, o, s, c, h = 1;
			do {
				for (r = t, t = null, a = null, o = 0; r;) {
					for (o++, n = r, s = 0, e = 0; e < h && (s++, n = n.nextZ); e++);
					for (c = h; s > 0 || c > 0 && n;) 0 !== s && (0 === c || !n || r.z <= n.z) ? (i = r, r = r.nextZ, s--) : (i = n, n = n.nextZ, c--), a ? a.nextZ = i : t = i, i.prevZ = a, a = i;
					r = n
				}
				a.nextZ = null, h *= 2
			} while (o > 1);
			return t
		}

		function Qs(t, e, r, n, i) {
			return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
		}

		function Ks(t) {
			var e = t,
				r = t;
			do {
				e.x < r.x && (r = e), e = e.next
			} while (e !== t);
			return r
		}

		function $s(t, e, r, n, i, a, o, s) {
			return (i - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (r - o) * (e - s) >= 0 && (r - o) * (a - s) - (i - o) * (n - s) >= 0
		}

		function tc(t, e) {
			return t.next.i !== e.i && t.prev.i !== e.i && !ic(t, e) && ac(t, e) && ac(e, t) && oc(t, e)
		}

		function ec(t, e, r) {
			return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
		}

		function rc(t, e) {
			return t.x === e.x && t.y === e.y
		}

		function nc(t, e, r, n) {
			return !!(rc(t, e) && rc(r, n) || rc(t, n) && rc(r, e)) || ec(t, e, r) > 0 != ec(t, e, n) > 0 && ec(r, n, t) > 0 != ec(r, n, e) > 0
		}

		function ic(t, e) {
			var r = t;
			do {
				if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && nc(r, r.next, t, e)) return !0;
				r = r.next
			} while (r !== t);
			return !1
		}

		function ac(t, e) {
			return ec(t.prev, t, t.next) < 0 ? ec(t, e, t.next) >= 0 && ec(t, t.prev, e) >= 0 : ec(t, e, t.prev) < 0 || ec(t, t.next, e) < 0
		}

		function oc(t, e) {
			var r = t,
				n = !1,
				i = (t.x + e.x) / 2,
				a = (t.y + e.y) / 2;
			do {
				r.y > a != r.next.y > a && r.next.y !== r.y && i < (r.next.x - r.x) * (a - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next
			} while (r !== t);
			return n
		}

		function sc(t, e) {
			var r = new lc(t.i, t.x, t.y),
				n = new lc(e.i, e.x, e.y),
				i = t.next,
				a = e.prev;
			return t.next = e, e.prev = t, r.next = i, i.prev = r, n.next = r, r.prev = n, a.next = n, n.prev = a, n
		}

		function cc(t, e, r, n) {
			var i = new lc(t, e, r);
			return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
		}

		function hc(t) {
			t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
		}

		function lc(t, e, r) {
			this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
		}

		function uc(t, e, r, n) {
			for (var i = 0, a = e, o = r - n; a < r; a += n) i += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
			return i
		}
		var pc = {
			area: function(t) {
				for (var e = t.length, r = 0, n = e - 1, i = 0; i < e; n = i++) r += t[n].x * t[i].y - t[i].x * t[n].y;
				return .5 * r
			},
			isClockWise: function(t) {
				return pc.area(t) < 0
			},
			triangulateShape: function(t, e) {
				var r = [],
					n = [],
					i = [];
				dc(t), fc(r, t);
				var a = t.length;
				e.forEach(dc);
				for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, fc(r, e[o]);
				var s = zs.triangulate(r, n);
				for (o = 0; o < s.length; o += 3) i.push(s.slice(o, o + 3));
				return i
			}
		};

		function dc(t) {
			var e = t.length;
			e > 2 && t[e - 1].equals(t[0]) && t.pop()
		}

		function fc(t, e) {
			for (var r = 0; r < e.length; r++) t.push(e[r].x), t.push(e[r].y)
		}

		function mc(t, e) {
			Ri.call(this), this.type = "ExtrudeGeometry", this.parameters = {
				shapes: t,
				options: e
			}, this.fromBufferGeometry(new gc(t, e)), this.mergeVertices()
		}

		function gc(t, e) {
			ki.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
				shapes: t,
				options: e
			}, t = Array.isArray(t) ? t : [t];
			for (var r = this, n = [], i = [], a = 0, o = t.length; a < o; a++) {
				s(t[a])
			}

			function s(t) {
				var a = [],
					o = void 0 !== e.curveSegments ? e.curveSegments : 12,
					s = void 0 !== e.steps ? e.steps : 1,
					c = void 0 !== e.depth ? e.depth : 100,
					h = void 0 === e.bevelEnabled || e.bevelEnabled,
					l = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
					u = void 0 !== e.bevelSize ? e.bevelSize : l - 2,
					p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
					d = e.extrudePath,
					f = void 0 !== e.UVGenerator ? e.UVGenerator : vc;
				void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
				var m, g, v, y, x, b, w, _, M = !1;
				d && (m = d.getSpacedPoints(s), M = !0, h = !1, g = d.computeFrenetFrames(s, !1), v = new He, y = new He, x = new He), h || (p = 0, l = 0, u = 0);
				var S = t.extractPoints(o),
					E = S.shape,
					T = S.holes;
				if (!pc.isClockWise(E))
					for (E = E.reverse(), w = 0, _ = T.length; w < _; w++) b = T[w], pc.isClockWise(b) && (T[w] = b.reverse());
				var A = pc.triangulateShape(E, T),
					L = E;
				for (w = 0, _ = T.length; w < _; w++) b = T[w], E = E.concat(b);

				function R(t, e, r) {
					return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(r).add(t)
				}
				var C, P, O, I, D, B, N = E.length,
					z = A.length;

				function F(t, e, r) {
					var n, i, a, o = t.x - e.x,
						s = t.y - e.y,
						c = r.x - t.x,
						h = r.y - t.y,
						l = o * o + s * s,
						u = o * h - s * c;
					if (Math.abs(u) > Number.EPSILON) {
						var p = Math.sqrt(l),
							d = Math.sqrt(c * c + h * h),
							f = e.x - s / p,
							m = e.y + o / p,
							g = ((r.x - h / d - f) * h - (r.y + c / d - m) * c) / (o * h - s * c),
							v = (n = f + o * g - t.x) * n + (i = m + s * g - t.y) * i;
						if (v <= 2) return new Fe(n, i);
						a = Math.sqrt(v / 2)
					} else {
						var y = !1;
						o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (n = -s, i = o, a = Math.sqrt(l)) : (n = o, i = s, a = Math.sqrt(l / 2))
					}
					return new Fe(n / a, i / a)
				}
				for (var U = [], G = 0, H = L.length, V = H - 1, k = G + 1; G < H; G++, V++, k++) V === H && (V = 0), k === H && (k = 0), U[G] = F(L[G], L[V], L[k]);
				var j, W, q = [],
					X = U.concat();
				for (w = 0, _ = T.length; w < _; w++) {
					for (b = T[w], j = [], G = 0, V = (H = b.length) - 1, k = G + 1; G < H; G++, V++, k++) V === H && (V = 0), k === H && (k = 0), j[G] = F(b[G], b[V], b[k]);
					q.push(j), X = X.concat(j)
				}
				for (C = 0; C < p; C++) {
					for (O = C / p, I = l * Math.cos(O * Math.PI / 2), P = u * Math.sin(O * Math.PI / 2), G = 0, H = L.length; G < H; G++) J((D = R(L[G], U[G], P)).x, D.y, -I);
					for (w = 0, _ = T.length; w < _; w++)
						for (b = T[w], j = q[w], G = 0, H = b.length; G < H; G++) J((D = R(b[G], j[G], P)).x, D.y, -I)
				}
				for (P = u, G = 0; G < N; G++) D = h ? R(E[G], X[G], P) : E[G], M ? (y.copy(g.normals[0]).multiplyScalar(D.x), v.copy(g.binormals[0]).multiplyScalar(D.y), x.copy(m[0]).add(y).add(v), J(x.x, x.y, x.z)) : J(D.x, D.y, 0);
				for (W = 1; W <= s; W++)
					for (G = 0; G < N; G++) D = h ? R(E[G], X[G], P) : E[G], M ? (y.copy(g.normals[W]).multiplyScalar(D.x), v.copy(g.binormals[W]).multiplyScalar(D.y), x.copy(m[W]).add(y).add(v), J(x.x, x.y, x.z)) : J(D.x, D.y, c / s * W);
				for (C = p - 1; C >= 0; C--) {
					for (O = C / p, I = l * Math.cos(O * Math.PI / 2), P = u * Math.sin(O * Math.PI / 2), G = 0, H = L.length; G < H; G++) J((D = R(L[G], U[G], P)).x, D.y, c + I);
					for (w = 0, _ = T.length; w < _; w++)
						for (b = T[w], j = q[w], G = 0, H = b.length; G < H; G++) D = R(b[G], j[G], P), M ? J(D.x, D.y + m[s - 1].y, m[s - 1].x + I) : J(D.x, D.y, c + I)
				}

				function Y(t, e) {
					var r, n;
					for (G = t.length; --G >= 0;) {
						r = G, (n = G - 1) < 0 && (n = t.length - 1);
						var i = 0,
							a = s + 2 * p;
						for (i = 0; i < a; i++) {
							var o = N * i,
								c = N * (i + 1);
							Q(e + r + o, e + n + o, e + n + c, e + r + c)
						}
					}
				}

				function J(t, e, r) {
					a.push(t), a.push(e), a.push(r)
				}

				function Z(t, e, i) {
					K(t), K(e), K(i);
					var a = n.length / 3,
						o = f.generateTopUV(r, n, a - 3, a - 2, a - 1);
					$(o[0]), $(o[1]), $(o[2])
				}

				function Q(t, e, i, a) {
					K(t), K(e), K(a), K(e), K(i), K(a);
					var o = n.length / 3,
						s = f.generateSideWallUV(r, n, o - 6, o - 3, o - 2, o - 1);
					$(s[0]), $(s[1]), $(s[3]), $(s[1]), $(s[2]), $(s[3])
				}

				function K(t) {
					n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2])
				}

				function $(t) {
					i.push(t.x), i.push(t.y)
				}! function() {
					var t = n.length / 3;
					if (h) {
						var e = 0,
							i = N * e;
						for (G = 0; G < z; G++) Z((B = A[G])[2] + i, B[1] + i, B[0] + i);
						for (i = N * (e = s + 2 * p), G = 0; G < z; G++) Z((B = A[G])[0] + i, B[1] + i, B[2] + i)
					} else {
						for (G = 0; G < z; G++) Z((B = A[G])[2], B[1], B[0]);
						for (G = 0; G < z; G++) Z((B = A[G])[0] + N * s, B[1] + N * s, B[2] + N * s)
					}
					r.addGroup(t, n.length / 3 - t, 0)
				}(),
				function() {
					var t = n.length / 3,
						e = 0;
					for (Y(L, e), e += L.length, w = 0, _ = T.length; w < _; w++) Y(b = T[w], e), e += b.length;
					r.addGroup(t, n.length / 3 - t, 1)
				}()
			}
			this.addAttribute("position", new Fi(n, 3)), this.addAttribute("uv", new Fi(i, 2)), this.computeVertexNormals()
		}
		exports.ShapeUtils = pc, mc.prototype = Object.create(Ri.prototype), mc.prototype.constructor = mc, mc.prototype.toJSON = function() {
			var t = Ri.prototype.toJSON.call(this);
			return yc(this.parameters.shapes, this.parameters.options, t)
		}, gc.prototype = Object.create(ki.prototype), gc.prototype.constructor = gc, gc.prototype.toJSON = function() {
			var t = ki.prototype.toJSON.call(this);
			return yc(this.parameters.shapes, this.parameters.options, t)
		};
		var vc = {
			generateTopUV: function(t, e, r, n, i) {
				var a = e[3 * r],
					o = e[3 * r + 1],
					s = e[3 * n],
					c = e[3 * n + 1],
					h = e[3 * i],
					l = e[3 * i + 1];
				return [new Fe(a, o), new Fe(s, c), new Fe(h, l)]
			},
			generateSideWallUV: function(t, e, r, n, i, a) {
				var o = e[3 * r],
					s = e[3 * r + 1],
					c = e[3 * r + 2],
					h = e[3 * n],
					l = e[3 * n + 1],
					u = e[3 * n + 2],
					p = e[3 * i],
					d = e[3 * i + 1],
					f = e[3 * i + 2],
					m = e[3 * a],
					g = e[3 * a + 1],
					v = e[3 * a + 2];
				return Math.abs(s - l) < .01 ? [new Fe(o, 1 - c), new Fe(h, 1 - u), new Fe(p, 1 - f), new Fe(m, 1 - v)] : [new Fe(s, 1 - c), new Fe(l, 1 - u), new Fe(d, 1 - f), new Fe(g, 1 - v)]
			}
		};

		function yc(t, e, r) {
			if (r.shapes = [], Array.isArray(t))
				for (var n = 0, i = t.length; n < i; n++) {
					var a = t[n];
					r.shapes.push(a.uuid)
				} else r.shapes.push(t.uuid);
			return void 0 !== e.extrudePath && (r.options.extrudePath = e.extrudePath.toJSON()), r
		}

		function xc(t, e) {
			Ri.call(this), this.type = "TextGeometry", this.parameters = {
				text: t,
				parameters: e
			}, this.fromBufferGeometry(new bc(t, e)), this.mergeVertices()
		}

		function bc(t, e) {
			var r = (e = e || {}).font;
			if (!r || !r.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ri;
			var n = r.generateShapes(t, e.size);
			e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), gc.call(this, n, e), this.type = "TextBufferGeometry"
		}

		function wc(t, e, r, n, i, a, o) {
			Ri.call(this), this.type = "SphereGeometry", this.parameters = {
				radius: t,
				widthSegments: e,
				heightSegments: r,
				phiStart: n,
				phiLength: i,
				thetaStart: a,
				thetaLength: o
			}, this.fromBufferGeometry(new _c(t, e, r, n, i, a, o)), this.mergeVertices()
		}

		function _c(t, e, r, n, i, a, o) {
			ki.call(this), this.type = "SphereBufferGeometry", this.parameters = {
				radius: t,
				widthSegments: e,
				heightSegments: r,
				phiStart: n,
				phiLength: i,
				thetaStart: a,
				thetaLength: o
			}, t = t || 1, e = Math.max(3, Math.floor(e) || 8), r = Math.max(2, Math.floor(r) || 6), n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
			var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
				l = 0,
				u = [],
				p = new He,
				d = new He,
				f = [],
				m = [],
				g = [],
				v = [];
			for (c = 0; c <= r; c++) {
				var y = [],
					x = c / r;
				for (s = 0; s <= e; s++) {
					var b = s / e;
					p.x = -t * Math.cos(n + b * i) * Math.sin(a + x * o), p.y = t * Math.cos(a + x * o), p.z = t * Math.sin(n + b * i) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), g.push(d.x, d.y, d.z), v.push(b, 1 - x), y.push(l++)
				}
				u.push(y)
			}
			for (c = 0; c < r; c++)
				for (s = 0; s < e; s++) {
					var w = u[c][s + 1],
						_ = u[c][s],
						M = u[c + 1][s],
						S = u[c + 1][s + 1];
					(0 !== c || a > 0) && f.push(w, _, S), (c !== r - 1 || h < Math.PI) && f.push(_, M, S)
				}
			this.setIndex(f), this.addAttribute("position", new Fi(m, 3)), this.addAttribute("normal", new Fi(g, 3)), this.addAttribute("uv", new Fi(v, 2))
		}

		function Mc(t, e, r, n, i, a) {
			Ri.call(this), this.type = "RingGeometry", this.parameters = {
				innerRadius: t,
				outerRadius: e,
				thetaSegments: r,
				phiSegments: n,
				thetaStart: i,
				thetaLength: a
			}, this.fromBufferGeometry(new Sc(t, e, r, n, i, a)), this.mergeVertices()
		}

		function Sc(t, e, r, n, i, a) {
			ki.call(this), this.type = "RingBufferGeometry", this.parameters = {
				innerRadius: t,
				outerRadius: e,
				thetaSegments: r,
				phiSegments: n,
				thetaStart: i,
				thetaLength: a
			}, t = t || .5, e = e || 1, i = void 0 !== i ? i : 0, a = void 0 !== a ? a : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8;
			var o, s, c, h = [],
				l = [],
				u = [],
				p = [],
				d = t,
				f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
				m = new He,
				g = new Fe;
			for (s = 0; s <= n; s++) {
				for (c = 0; c <= r; c++) o = i + c / r * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), g.x = (m.x / e + 1) / 2, g.y = (m.y / e + 1) / 2, p.push(g.x, g.y);
				d += f
			}
			for (s = 0; s < n; s++) {
				var v = s * (r + 1);
				for (c = 0; c < r; c++) {
					var y = o = c + v,
						x = o + r + 1,
						b = o + r + 2,
						w = o + 1;
					h.push(y, x, w), h.push(x, b, w)
				}
			}
			this.setIndex(h), this.addAttribute("position", new Fi(l, 3)), this.addAttribute("normal", new Fi(u, 3)), this.addAttribute("uv", new Fi(p, 2))
		}

		function Ec(t, e, r, n) {
			Ri.call(this), this.type = "LatheGeometry", this.parameters = {
				points: t,
				segments: e,
				phiStart: r,
				phiLength: n
			}, this.fromBufferGeometry(new Tc(t, e, r, n)), this.mergeVertices()
		}

		function Tc(t, e, r, n) {
			ki.call(this), this.type = "LatheBufferGeometry", this.parameters = {
				points: t,
				segments: e,
				phiStart: r,
				phiLength: n
			}, e = Math.floor(e) || 12, r = r || 0, n = n || 2 * Math.PI, n = ze.clamp(n, 0, 2 * Math.PI);
			var i, a, o, s = [],
				c = [],
				h = [],
				l = 1 / e,
				u = new He,
				p = new Fe;
			for (a = 0; a <= e; a++) {
				var d = r + a * l * n,
					f = Math.sin(d),
					m = Math.cos(d);
				for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, c.push(u.x, u.y, u.z), p.x = a / e, p.y = o / (t.length - 1), h.push(p.x, p.y)
			}
			for (a = 0; a < e; a++)
				for (o = 0; o < t.length - 1; o++) {
					var g = i = o + a * t.length,
						v = i + t.length,
						y = i + t.length + 1,
						x = i + 1;
					s.push(g, v, x), s.push(v, y, x)
				}
			if (this.setIndex(s), this.addAttribute("position", new Fi(c, 3)), this.addAttribute("uv", new Fi(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
				var b = this.attributes.normal.array,
					w = new He,
					_ = new He,
					M = new He;
				for (i = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], _.x = b[i + o + 0], _.y = b[i + o + 1], _.z = b[i + o + 2], M.addVectors(w, _).normalize(), b[o + 0] = b[i + o + 0] = M.x, b[o + 1] = b[i + o + 1] = M.y, b[o + 2] = b[i + o + 2] = M.z
			}
		}

		function Ac(t, e) {
			Ri.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
				shapes: t,
				curveSegments: e
			}, this.fromBufferGeometry(new Lc(t, e)), this.mergeVertices()
		}

		function Lc(t, e) {
			ki.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
				shapes: t,
				curveSegments: e
			}, e = e || 12;
			var r = [],
				n = [],
				i = [],
				a = [],
				o = 0,
				s = 0;
			if (!1 === Array.isArray(t)) h(t);
			else
				for (var c = 0; c < t.length; c++) h(t[c]), this.addGroup(o, s, c), o += s, s = 0;

			function h(t) {
				var o, c, h, l = n.length / 3,
					u = t.extractPoints(e),
					p = u.shape,
					d = u.holes;
				for (!1 === pc.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length; o < c; o++) h = d[o], !0 === pc.isClockWise(h) && (d[o] = h.reverse());
				var f = pc.triangulateShape(p, d);
				for (o = 0, c = d.length; o < c; o++) h = d[o], p = p.concat(h);
				for (o = 0, c = p.length; o < c; o++) {
					var m = p[o];
					n.push(m.x, m.y, 0), i.push(0, 0, 1), a.push(m.x, m.y)
				}
				for (o = 0, c = f.length; o < c; o++) {
					var g = f[o],
						v = g[0] + l,
						y = g[1] + l,
						x = g[2] + l;
					r.push(v, y, x), s += 3
				}
			}
			this.setIndex(r), this.addAttribute("position", new Fi(n, 3)), this.addAttribute("normal", new Fi(i, 3)), this.addAttribute("uv", new Fi(a, 2))
		}

		function Rc(t, e) {
			if (e.shapes = [], Array.isArray(t))
				for (var r = 0, n = t.length; r < n; r++) {
					var i = t[r];
					e.shapes.push(i.uuid)
				} else e.shapes.push(t.uuid);
			return e
		}

		function Cc(t, e) {
			ki.call(this), this.type = "EdgesGeometry", this.parameters = {
				thresholdAngle: e
			}, e = void 0 !== e ? e : 1;
			var r, n, i, a, o = [],
				s = Math.cos(ze.DEG2RAD * e),
				c = [0, 0],
				h = {},
				l = ["a", "b", "c"];
			t.isBufferGeometry ? (a = new Ri).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
			for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
				for (var m = p[d], g = 0; g < 3; g++) r = m[l[g]], n = m[l[(g + 1) % 3]], c[0] = Math.min(r, n), c[1] = Math.max(r, n), void 0 === h[i = c[0] + "," + c[1]] ? h[i] = {
					index1: c[0],
					index2: c[1],
					face1: d,
					face2: void 0
				} : h[i].face2 = d;
			for (i in h) {
				var v = h[i];
				if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) {
					var y = u[v.index1];
					o.push(y.x, y.y, y.z), y = u[v.index2], o.push(y.x, y.y, y.z)
				}
			}
			this.addAttribute("position", new Fi(o, 3))
		}

		function Pc(t, e, r, n, i, a, o, s) {
			Ri.call(this), this.type = "CylinderGeometry", this.parameters = {
				radiusTop: t,
				radiusBottom: e,
				height: r,
				radialSegments: n,
				heightSegments: i,
				openEnded: a,
				thetaStart: o,
				thetaLength: s
			}, this.fromBufferGeometry(new Oc(t, e, r, n, i, a, o, s)), this.mergeVertices()
		}

		function Oc(t, e, r, n, i, a, o, s) {
			ki.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
				radiusTop: t,
				radiusBottom: e,
				height: r,
				radialSegments: n,
				heightSegments: i,
				openEnded: a,
				thetaStart: o,
				thetaLength: s
			};
			var c = this;
			t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, r = r || 1, n = Math.floor(n) || 8, i = Math.floor(i) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
			var h = [],
				l = [],
				u = [],
				p = [],
				d = 0,
				f = [],
				m = r / 2,
				g = 0;

			function v(r) {
				var i, a, f, v = new Fe,
					y = new He,
					x = 0,
					b = !0 === r ? t : e,
					w = !0 === r ? 1 : -1;
				for (a = d, i = 1; i <= n; i++) l.push(0, m * w, 0), u.push(0, w, 0), p.push(.5, .5), d++;
				for (f = d, i = 0; i <= n; i++) {
					var _ = i / n * s + o,
						M = Math.cos(_),
						S = Math.sin(_);
					y.x = b * S, y.y = m * w, y.z = b * M, l.push(y.x, y.y, y.z), u.push(0, w, 0), v.x = .5 * M + .5, v.y = .5 * S * w + .5, p.push(v.x, v.y), d++
				}
				for (i = 0; i < n; i++) {
					var E = a + i,
						T = f + i;
					!0 === r ? h.push(T, T + 1, E) : h.push(T + 1, T, E), x += 3
				}
				c.addGroup(g, x, !0 === r ? 1 : 2), g += x
			}! function() {
				var a, v, y = new He,
					x = new He,
					b = 0,
					w = (e - t) / r;
				for (v = 0; v <= i; v++) {
					var _ = [],
						M = v / i,
						S = M * (e - t) + t;
					for (a = 0; a <= n; a++) {
						var E = a / n,
							T = E * s + o,
							A = Math.sin(T),
							L = Math.cos(T);
						x.x = S * A, x.y = -M * r + m, x.z = S * L, l.push(x.x, x.y, x.z), y.set(A, w, L).normalize(), u.push(y.x, y.y, y.z), p.push(E, 1 - M), _.push(d++)
					}
					f.push(_)
				}
				for (a = 0; a < n; a++)
					for (v = 0; v < i; v++) {
						var R = f[v][a],
							C = f[v + 1][a],
							P = f[v + 1][a + 1],
							O = f[v][a + 1];
						h.push(R, C, O), h.push(C, P, O), b += 6
					}
				c.addGroup(g, b, 0), g += b
			}(), !1 === a && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(h), this.addAttribute("position", new Fi(l, 3)), this.addAttribute("normal", new Fi(u, 3)), this.addAttribute("uv", new Fi(p, 2))
		}

		function Ic(t, e, r, n, i, a, o) {
			Pc.call(this, 0, t, e, r, n, i, a, o), this.type = "ConeGeometry", this.parameters = {
				radius: t,
				height: e,
				radialSegments: r,
				heightSegments: n,
				openEnded: i,
				thetaStart: a,
				thetaLength: o
			}
		}

		function Dc(t, e, r, n, i, a, o) {
			Oc.call(this, 0, t, e, r, n, i, a, o), this.type = "ConeBufferGeometry", this.parameters = {
				radius: t,
				height: e,
				radialSegments: r,
				heightSegments: n,
				openEnded: i,
				thetaStart: a,
				thetaLength: o
			}
		}

		function Bc(t, e, r, n) {
			Ri.call(this), this.type = "CircleGeometry", this.parameters = {
				radius: t,
				segments: e,
				thetaStart: r,
				thetaLength: n
			}, this.fromBufferGeometry(new Nc(t, e, r, n)), this.mergeVertices()
		}

		function Nc(t, e, r, n) {
			ki.call(this), this.type = "CircleBufferGeometry", this.parameters = {
				radius: t,
				segments: e,
				thetaStart: r,
				thetaLength: n
			}, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
			var i, a, o = [],
				s = [],
				c = [],
				h = [],
				l = new He,
				u = new Fe;
			for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, i = 3; a <= e; a++, i += 3) {
				var p = r + a / e * n;
				l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[i] / t + 1) / 2, u.y = (s[i + 1] / t + 1) / 2, h.push(u.x, u.y)
			}
			for (i = 1; i <= e; i++) o.push(i, i + 1, 0);
			this.setIndex(o), this.addAttribute("position", new Fi(s, 3)), this.addAttribute("normal", new Fi(c, 3)), this.addAttribute("uv", new Fi(h, 2))
		}
		xc.prototype = Object.create(Ri.prototype), xc.prototype.constructor = xc, bc.prototype = Object.create(gc.prototype), bc.prototype.constructor = bc, wc.prototype = Object.create(Ri.prototype), wc.prototype.constructor = wc, _c.prototype = Object.create(ki.prototype), _c.prototype.constructor = _c, Mc.prototype = Object.create(Ri.prototype), Mc.prototype.constructor = Mc, Sc.prototype = Object.create(ki.prototype), Sc.prototype.constructor = Sc, Ec.prototype = Object.create(Ri.prototype), Ec.prototype.constructor = Ec, Tc.prototype = Object.create(ki.prototype), Tc.prototype.constructor = Tc, Ac.prototype = Object.create(Ri.prototype), Ac.prototype.constructor = Ac, Ac.prototype.toJSON = function() {
			var t = Ri.prototype.toJSON.call(this);
			return Rc(this.parameters.shapes, t)
		}, Lc.prototype = Object.create(ki.prototype), Lc.prototype.constructor = Lc, Lc.prototype.toJSON = function() {
			var t = ki.prototype.toJSON.call(this);
			return Rc(this.parameters.shapes, t)
		}, Cc.prototype = Object.create(ki.prototype), Cc.prototype.constructor = Cc, Pc.prototype = Object.create(Ri.prototype), Pc.prototype.constructor = Pc, Oc.prototype = Object.create(ki.prototype), Oc.prototype.constructor = Oc, Ic.prototype = Object.create(Pc.prototype), Ic.prototype.constructor = Ic, Dc.prototype = Object.create(Oc.prototype), Dc.prototype.constructor = Dc, Bc.prototype = Object.create(Ri.prototype), Bc.prototype.constructor = Bc, Nc.prototype = Object.create(ki.prototype), Nc.prototype.constructor = Nc;
		var zc = Object.freeze({
			WireframeGeometry: ys,
			ParametricGeometry: xs,
			ParametricBufferGeometry: bs,
			TetrahedronGeometry: Ms,
			TetrahedronBufferGeometry: Ss,
			OctahedronGeometry: Es,
			OctahedronBufferGeometry: Ts,
			IcosahedronGeometry: As,
			IcosahedronBufferGeometry: Ls,
			DodecahedronGeometry: Rs,
			DodecahedronBufferGeometry: Cs,
			PolyhedronGeometry: ws,
			PolyhedronBufferGeometry: _s,
			TubeGeometry: Ps,
			TubeBufferGeometry: Os,
			TorusKnotGeometry: Is,
			TorusKnotBufferGeometry: Ds,
			TorusGeometry: Bs,
			TorusBufferGeometry: Ns,
			TextGeometry: xc,
			TextBufferGeometry: bc,
			SphereGeometry: wc,
			SphereBufferGeometry: _c,
			RingGeometry: Mc,
			RingBufferGeometry: Sc,
			PlaneGeometry: qi,
			PlaneBufferGeometry: Xi,
			LatheGeometry: Ec,
			LatheBufferGeometry: Tc,
			ShapeGeometry: Ac,
			ShapeBufferGeometry: Lc,
			ExtrudeGeometry: mc,
			ExtrudeBufferGeometry: gc,
			EdgesGeometry: Cc,
			ConeGeometry: Ic,
			ConeBufferGeometry: Dc,
			CylinderGeometry: Pc,
			CylinderBufferGeometry: Oc,
			CircleGeometry: Bc,
			CircleBufferGeometry: Nc,
			BoxGeometry: ji,
			BoxBufferGeometry: Wi
		});

		function Fc(t) {
			Ji.call(this), this.type = "ShadowMaterial", this.color = new yi(0), this.transparent = !0, this.setValues(t)
		}

		function Uc(t) {
			Zi.call(this, t), this.type = "RawShaderMaterial"
		}

		function Gc(t) {
			Ji.call(this), this.defines = {
				STANDARD: ""
			}, this.type = "MeshStandardMaterial", this.color = new yi(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = De, this.normalScale = new Fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
		}

		function Hc(t) {
			Gc.call(this), this.defines = {
				PHYSICAL: ""
			}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
		}

		function Vc(t) {
			Ji.call(this), this.type = "MeshPhongMaterial", this.color = new yi(16777215), this.specular = new yi(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = De, this.normalScale = new Fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Z, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
		}

		function kc(t) {
			Vc.call(this), this.defines = {
				TOON: ""
			}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
		}

		function jc(t) {
			Ji.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = De, this.normalScale = new Fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
		}

		function Wc(t) {
			Ji.call(this), this.type = "MeshLambertMaterial", this.color = new yi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new yi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Z, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
		}

		function qc(t) {
			Ji.call(this), this.defines = {
				MATCAP: ""
			}, this.type = "MeshMatcapMaterial", this.color = new yi(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = De, this.normalScale = new Fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t)
		}

		function Xc(t) {
			cs.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
		}
		Fc.prototype = Object.create(Ji.prototype), Fc.prototype.constructor = Fc, Fc.prototype.isShadowMaterial = !0, Fc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this
		}, Uc.prototype = Object.create(Zi.prototype), Uc.prototype.constructor = Uc, Uc.prototype.isRawShaderMaterial = !0, Gc.prototype = Object.create(Ji.prototype), Gc.prototype.constructor = Gc, Gc.prototype.isMeshStandardMaterial = !0, Gc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.defines = {
				STANDARD: ""
			}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
		}, Hc.prototype = Object.create(Gc.prototype), Hc.prototype.constructor = Hc, Hc.prototype.isMeshPhysicalMaterial = !0, Hc.prototype.copy = function(t) {
			return Gc.prototype.copy.call(this, t), this.defines = {
				PHYSICAL: ""
			}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
		}, Vc.prototype = Object.create(Ji.prototype), Vc.prototype.constructor = Vc, Vc.prototype.isMeshPhongMaterial = !0, Vc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
		}, kc.prototype = Object.create(Vc.prototype), kc.prototype.constructor = kc, kc.prototype.isMeshToonMaterial = !0, kc.prototype.copy = function(t) {
			return Vc.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
		}, jc.prototype = Object.create(Ji.prototype), jc.prototype.constructor = jc, jc.prototype.isMeshNormalMaterial = !0, jc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
		}, Wc.prototype = Object.create(Ji.prototype), Wc.prototype.constructor = Wc, Wc.prototype.isMeshLambertMaterial = !0, Wc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
		}, qc.prototype = Object.create(Ji.prototype), qc.prototype.constructor = qc, qc.prototype.isMeshMatcapMaterial = !0, qc.prototype.copy = function(t) {
			return Ji.prototype.copy.call(this, t), this.defines = {
				MATCAP: ""
			}, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
		}, Xc.prototype = Object.create(cs.prototype), Xc.prototype.constructor = Xc, Xc.prototype.isLineDashedMaterial = !0, Xc.prototype.copy = function(t) {
			return cs.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
		};
		var Yc = Object.freeze({
				ShadowMaterial: Fc,
				SpriteMaterial: rs,
				RawShaderMaterial: Uc,
				ShaderMaterial: Zi,
				PointsMaterial: ps,
				MeshPhysicalMaterial: Hc,
				MeshStandardMaterial: Gc,
				MeshPhongMaterial: Vc,
				MeshToonMaterial: kc,
				MeshNormalMaterial: jc,
				MeshLambertMaterial: Wc,
				MeshDepthMaterial: Do,
				MeshDistanceMaterial: Bo,
				MeshBasicMaterial: $i,
				MeshMatcapMaterial: qc,
				LineDashedMaterial: Xc,
				LineBasicMaterial: cs,
				Material: Ji
			}),
			Jc = {
				arraySlice: function(t, e, r) {
					return Jc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== r ? r : t.length)) : t.slice(e, r)
				},
				convertArray: function(t, e, r) {
					return !t || !r && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
				},
				isTypedArray: function(t) {
					return ArrayBuffer.isView(t) && !(t instanceof DataView)
				},
				getKeyframeOrder: function(t) {
					for (var e = t.length, r = new Array(e), n = 0; n !== e; ++n) r[n] = n;
					return r.sort(function(e, r) {
						return t[e] - t[r]
					}), r
				},
				sortedArray: function(t, e, r) {
					for (var n = t.length, i = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
						for (var s = r[a] * e, c = 0; c !== e; ++c) i[o++] = t[s + c];
					return i
				},
				flattenJSON: function(t, e, r, n) {
					for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[i++];
					if (void 0 !== a) {
						var o = a[n];
						if (void 0 !== o)
							if (Array.isArray(o))
								do {
									void 0 !== (o = a[n]) && (e.push(a.time), r.push.apply(r, o)), a = t[i++]
								} while (void 0 !== a);
							else if (void 0 !== o.toArray)
							do {
								void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(r, r.length)), a = t[i++]
							} while (void 0 !== a);
						else
							do {
								void 0 !== (o = a[n]) && (e.push(a.time), r.push(o)), a = t[i++]
							} while (void 0 !== a)
					}
				}
			};

		function Zc(t, e, r, n) {
			this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(r), this.sampleValues = e, this.valueSize = r
		}

		function Qc(t, e, r, n) {
			Zc.call(this, t, e, r, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
		}

		function Kc(t, e, r, n) {
			Zc.call(this, t, e, r, n)
		}

		function $c(t, e, r, n) {
			Zc.call(this, t, e, r, n)
		}

		function th(t, e, r, n) {
			if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
			if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
			this.name = t, this.times = Jc.convertArray(e, this.TimeBufferType), this.values = Jc.convertArray(r, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
		}

		function eh(t, e, r) {
			th.call(this, t, e, r)
		}

		function rh(t, e, r, n) {
			th.call(this, t, e, r, n)
		}

		function nh(t, e, r, n) {
			th.call(this, t, e, r, n)
		}

		function ih(t, e, r, n) {
			Zc.call(this, t, e, r, n)
		}

		function ah(t, e, r, n) {
			th.call(this, t, e, r, n)
		}

		function oh(t, e, r, n) {
			th.call(this, t, e, r, n)
		}

		function sh(t, e, r, n) {
			th.call(this, t, e, r, n)
		}

		function ch(t, e, r) {
			this.name = t, this.tracks = r, this.duration = void 0 !== e ? e : -1, this.uuid = ze.generateUUID(), this.duration < 0 && this.resetDuration()
		}

		function hh(t) {
			switch (t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return nh;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return sh;
				case "color":
					return rh;
				case "quaternion":
					return ah;
				case "bool":
				case "boolean":
					return eh;
				case "string":
					return oh
			}
			throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
		}

		function lh(t) {
			if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
			var e = hh(t.type);
			if (void 0 === t.times) {
				var r = [],
					n = [];
				Jc.flattenJSON(t.keys, r, n, "value"), t.times = r, t.values = n
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
		}
		exports.AnimationUtils = Jc, Object.assign(Zc.prototype, {
			evaluate: function(t) {
				var e = this.parameterPositions,
					r = this._cachedIndex,
					n = e[r],
					i = e[r - 1];
				t: {
					e: {
						var a;
						r: {
							n: if (!(t < n)) {
								for (var o = r + 2;;) {
									if (void 0 === n) {
										if (t < i) break n;
										return r = e.length, this._cachedIndex = r, this.afterEnd_(r - 1, t, i)
									}
									if (r === o) break;
									if (i = n, t < (n = e[++r])) break e
								}
								a = e.length;
								break r
							}if (t >= i) break t;
							var s = e[1];t < s && (r = 2, i = s);
							for (o = r - 2;;) {
								if (void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
								if (r === o) break;
								if (n = i, t >= (i = e[--r - 1])) break e
							}
							a = r,
							r = 0
						}
						for (; r < a;) {
							var c = r + a >>> 1;
							t < e[c] ? a = c : r = c + 1
						}
						if (n = e[r], void 0 === (i = e[r - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
						if (void 0 === n) return r = e.length, this._cachedIndex = r, this.afterEnd_(r - 1, i, t)
					}
					this._cachedIndex = r,
					this.intervalChanged_(r, i, n)
				}
				return this.interpolate_(r, i, t, n)
			},
			settings: null,
			DefaultSettings_: {},
			getSettings_: function() {
				return this.settings || this.DefaultSettings_
			},
			copySampleValue_: function(t) {
				for (var e = this.resultBuffer, r = this.sampleValues, n = this.valueSize, i = t * n, a = 0; a !== n; ++a) e[a] = r[i + a];
				return e
			},
			interpolate_: function() {
				throw new Error("call to abstract method")
			},
			intervalChanged_: function() {}
		}), Object.assign(Zc.prototype, {
			beforeStart_: Zc.prototype.copySampleValue_,
			afterEnd_: Zc.prototype.copySampleValue_
		}), Qc.prototype = Object.assign(Object.create(Zc.prototype), {
			constructor: Qc,
			DefaultSettings_: {
				endingStart: ye,
				endingEnd: ye
			},
			intervalChanged_: function(t, e, r) {
				var n = this.parameterPositions,
					i = t - 2,
					a = t + 1,
					o = n[i],
					s = n[a];
				if (void 0 === o) switch (this.getSettings_().endingStart) {
					case xe:
						i = t, o = 2 * e - r;
						break;
					case be:
						o = e + n[i = n.length - 2] - n[i + 1];
						break;
					default:
						i = t, o = r
				}
				if (void 0 === s) switch (this.getSettings_().endingEnd) {
					case xe:
						a = t, s = 2 * r - e;
						break;
					case be:
						a = 1, s = r + n[1] - n[0];
						break;
					default:
						a = t - 1, s = e
				}
				var c = .5 * (r - e),
					h = this.valueSize;
				this._weightPrev = c / (e - o), this._weightNext = c / (s - r), this._offsetPrev = i * h, this._offsetNext = a * h
			},
			interpolate_: function(t, e, r, n) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (r - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) i[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
				return i
			}
		}), Kc.prototype = Object.assign(Object.create(Zc.prototype), {
			constructor: Kc,
			interpolate_: function(t, e, r, n) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (r - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) i[u] = a[c + u] * l + a[s + u] * h;
				return i
			}
		}), $c.prototype = Object.assign(Object.create(Zc.prototype), {
			constructor: $c,
			interpolate_: function(t) {
				return this.copySampleValue_(t - 1)
			}
		}), Object.assign(th, {
			toJSON: function(t) {
				var e, r = t.constructor;
				if (void 0 !== r.toJSON) e = r.toJSON(t);
				else {
					e = {
						name: t.name,
						times: Jc.convertArray(t.times, Array),
						values: Jc.convertArray(t.values, Array)
					};
					var n = t.getInterpolation();
					n !== t.DefaultInterpolation && (e.interpolation = n)
				}
				return e.type = t.ValueTypeName, e
			}
		}), Object.assign(th.prototype, {
			constructor: th,
			TimeBufferType: Float32Array,
			ValueBufferType: Float32Array,
			DefaultInterpolation: ge,
			InterpolantFactoryMethodDiscrete: function(t) {
				return new $c(this.times, this.values, this.getValueSize(), t)
			},
			InterpolantFactoryMethodLinear: function(t) {
				return new Kc(this.times, this.values, this.getValueSize(), t)
			},
			InterpolantFactoryMethodSmooth: function(t) {
				return new Qc(this.times, this.values, this.getValueSize(), t)
			},
			setInterpolation: function(t) {
				var e;
				switch (t) {
					case me:
						e = this.InterpolantFactoryMethodDiscrete;
						break;
					case ge:
						e = this.InterpolantFactoryMethodLinear;
						break;
					case ve:
						e = this.InterpolantFactoryMethodSmooth
				}
				if (void 0 === e) {
					var r = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
					if (void 0 === this.createInterpolant) {
						if (t === this.DefaultInterpolation) throw new Error(r);
						this.setInterpolation(this.DefaultInterpolation)
					}
					return console.warn("THREE.KeyframeTrack:", r), this
				}
				return this.createInterpolant = e, this
			},
			getInterpolation: function() {
				switch (this.createInterpolant) {
					case this.InterpolantFactoryMethodDiscrete:
						return me;
					case this.InterpolantFactoryMethodLinear:
						return ge;
					case this.InterpolantFactoryMethodSmooth:
						return ve
				}
			},
			getValueSize: function() {
				return this.values.length / this.times.length
			},
			shift: function(t) {
				if (0 !== t)
					for (var e = this.times, r = 0, n = e.length; r !== n; ++r) e[r] += t;
				return this
			},
			scale: function(t) {
				if (1 !== t)
					for (var e = this.times, r = 0, n = e.length; r !== n; ++r) e[r] *= t;
				return this
			},
			trim: function(t, e) {
				for (var r = this.times, n = r.length, i = 0, a = n - 1; i !== n && r[i] < t;) ++i;
				for (; - 1 !== a && r[a] > e;) --a;
				if (++a, 0 !== i || a !== n) {
					i >= a && (i = (a = Math.max(a, 1)) - 1);
					var o = this.getValueSize();
					this.times = Jc.arraySlice(r, i, a), this.values = Jc.arraySlice(this.values, i * o, a * o)
				}
				return this
			},
			validate: function() {
				var t = !0,
					e = this.getValueSize();
				e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
				var r = this.times,
					n = this.values,
					i = r.length;
				0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
				for (var a = null, o = 0; o !== i; o++) {
					var s = r[o];
					if ("number" == typeof s && isNaN(s)) {
						console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
						break
					}
					if (null !== a && a > s) {
						console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
						break
					}
					a = s
				}
				if (void 0 !== n && Jc.isTypedArray(n)) {
					o = 0;
					for (var c = n.length; o !== c; ++o) {
						var h = n[o];
						if (isNaN(h)) {
							console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), t = !1;
							break
						}
					}
				}
				return t
			},
			optimize: function() {
				for (var t = this.times, e = this.values, r = this.getValueSize(), n = this.getInterpolation() === ve, i = 1, a = t.length - 1, o = 1; o < a; ++o) {
					var s = !1,
						c = t[o];
					if (c !== t[o + 1] && (1 !== o || c !== c[0]))
						if (n) s = !0;
						else
							for (var h = o * r, l = h - r, u = h + r, p = 0; p !== r; ++p) {
								var d = e[h + p];
								if (d !== e[l + p] || d !== e[u + p]) {
									s = !0;
									break
								}
							}
						if (s) {
							if (o !== i) {
								t[i] = t[o];
								var f = o * r,
									m = i * r;
								for (p = 0; p !== r; ++p) e[m + p] = e[f + p]
							}++i
						}
				}
				if (a > 0) {
					t[i] = t[a];
					for (f = a * r, m = i * r, p = 0; p !== r; ++p) e[m + p] = e[f + p];
					++i
				}
				return i !== t.length && (this.times = Jc.arraySlice(t, 0, i), this.values = Jc.arraySlice(e, 0, i * r)), this
			},
			clone: function() {
				var t = Jc.arraySlice(this.times, 0),
					e = Jc.arraySlice(this.values, 0),
					r = new(0, this.constructor)(this.name, t, e);
				return r.createInterpolant = this.createInterpolant, r
			}
		}), eh.prototype = Object.assign(Object.create(th.prototype), {
			constructor: eh,
			ValueTypeName: "bool",
			ValueBufferType: Array,
			DefaultInterpolation: me,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0
		}), rh.prototype = Object.assign(Object.create(th.prototype), {
			constructor: rh,
			ValueTypeName: "color"
		}), nh.prototype = Object.assign(Object.create(th.prototype), {
			constructor: nh,
			ValueTypeName: "number"
		}), ih.prototype = Object.assign(Object.create(Zc.prototype), {
			constructor: ih,
			interpolate_: function(t, e, r, n) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (r - e) / (n - e), h = s + o; s !== h; s += 4) Ge.slerpFlat(i, 0, a, s - o, a, s, c);
				return i
			}
		}), ah.prototype = Object.assign(Object.create(th.prototype), {
			constructor: ah,
			ValueTypeName: "quaternion",
			DefaultInterpolation: ge,
			InterpolantFactoryMethodLinear: function(t) {
				return new ih(this.times, this.values, this.getValueSize(), t)
			},
			InterpolantFactoryMethodSmooth: void 0
		}), oh.prototype = Object.assign(Object.create(th.prototype), {
			constructor: oh,
			ValueTypeName: "string",
			ValueBufferType: Array,
			DefaultInterpolation: me,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0
		}), sh.prototype = Object.assign(Object.create(th.prototype), {
			constructor: sh,
			ValueTypeName: "vector"
		}), Object.assign(ch, {
			parse: function(t) {
				for (var e = [], r = t.tracks, n = 1 / (t.fps || 1), i = 0, a = r.length; i !== a; ++i) e.push(lh(r[i]).scale(n));
				return new ch(t.name, t.duration, e)
			},
			toJSON: function(t) {
				for (var e = [], r = t.tracks, n = {
						name: t.name,
						duration: t.duration,
						tracks: e,
						uuid: t.uuid
					}, i = 0, a = r.length; i !== a; ++i) e.push(th.toJSON(r[i]));
				return n
			},
			CreateFromMorphTargetSequence: function(t, e, r, n) {
				for (var i = e.length, a = [], o = 0; o < i; o++) {
					var s = [],
						c = [];
					s.push((o + i - 1) % i, o, (o + 1) % i), c.push(0, 1, 0);
					var h = Jc.getKeyframeOrder(s);
					s = Jc.sortedArray(s, 1, h), c = Jc.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(i), c.push(c[0])), a.push(new nh(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / r))
				}
				return new ch(t, -1, a)
			},
			findByName: function(t, e) {
				var r = t;
				if (!Array.isArray(t)) {
					var n = t;
					r = n.geometry && n.geometry.animations || n.animations
				}
				for (var i = 0; i < r.length; i++)
					if (r[i].name === e) return r[i];
				return null
			},
			CreateClipsFromMorphTargetSequences: function(t, e, r) {
				for (var n = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
					var s = t[a],
						c = s.name.match(i);
					if (c && c.length > 1) {
						var h = n[u = c[1]];
						h || (n[u] = h = []), h.push(s)
					}
				}
				var l = [];
				for (var u in n) l.push(ch.CreateFromMorphTargetSequence(u, n[u], e, r));
				return l
			},
			parseAnimation: function(t, e) {
				if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
				for (var r = function(t, e, r, n, i) {
						if (0 !== r.length) {
							var a = [],
								o = [];
							Jc.flattenJSON(r, a, o, n), 0 !== a.length && i.push(new t(e, a, o))
						}
					}, n = [], i = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
					var h = s[c].keys;
					if (h && 0 !== h.length)
						if (h[0].morphTargets) {
							for (var l = {}, u = 0; u < h.length; u++)
								if (h[u].morphTargets)
									for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[p]] = -1;
							for (var d in l) {
								var f = [],
									m = [];
								for (p = 0; p !== h[u].morphTargets.length; ++p) {
									var g = h[u];
									f.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
								}
								n.push(new nh(".morphTargetInfluence[" + d + "]", f, m))
							}
							a = l.length * (o || 1)
						} else {
							var v = ".bones[" + e[c].name + "]";
							r(sh, v + ".position", h, "pos", n), r(ah, v + ".quaternion", h, "rot", n), r(sh, v + ".scale", h, "scl", n)
						}
				}
				return 0 === n.length ? null : new ch(i, a, n)
			}
		}), Object.assign(ch.prototype, {
			resetDuration: function() {
				for (var t = 0, e = 0, r = this.tracks.length; e !== r; ++e) {
					var n = this.tracks[e];
					t = Math.max(t, n.times[n.times.length - 1])
				}
				return this.duration = t, this
			},
			trim: function() {
				for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
				return this
			},
			validate: function() {
				for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
				return t
			},
			optimize: function() {
				for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
				return this
			},
			clone: function() {
				for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
				return new ch(this.name, this.duration, t)
			}
		});
		var uh = {
			enabled: !1,
			files: {},
			add: function(t, e) {
				!1 !== this.enabled && (this.files[t] = e)
			},
			get: function(t) {
				if (!1 !== this.enabled) return this.files[t]
			},
			remove: function(t) {
				delete this.files[t]
			},
			clear: function() {
				this.files = {}
			}
		};

		function ph(t, e, r) {
			var n = this,
				i = !1,
				a = 0,
				o = 0,
				s = void 0;
			this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = r, this.itemStart = function(t) {
				o++, !1 === i && void 0 !== n.onStart && n.onStart(t, a, o), i = !0
			}, this.itemEnd = function(t) {
				a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (i = !1, void 0 !== n.onLoad && n.onLoad())
			}, this.itemError = function(t) {
				void 0 !== n.onError && n.onError(t)
			}, this.resolveURL = function(t) {
				return s ? s(t) : t
			}, this.setURLModifier = function(t) {
				return s = t, this
			}
		}
		exports.Cache = uh;
		var dh = new ph;
		exports.DefaultLoadingManager = dh;
		var fh = {};

		function mh(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function gh(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function vh(t) {
			this.manager = void 0 !== t ? t : dh, this._parser = null
		}

		function yh(t) {
			this.manager = void 0 !== t ? t : dh, this._parser = null
		}

		function xh(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function bh(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function wh(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function _h() {
			this.type = "Curve", this.arcLengthDivisions = 200
		}

		function Mh(t, e, r, n, i, a, o, s) {
			_h.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = r || 1, this.yRadius = n || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
		}

		function Sh(t, e, r, n, i, a) {
			Mh.call(this, t, e, r, r, n, i, a), this.type = "ArcCurve"
		}

		function Eh() {
			var t = 0,
				e = 0,
				r = 0,
				n = 0;

			function i(i, a, o, s) {
				t = i, e = o, r = -3 * i + 3 * a - 2 * o - s, n = 2 * i - 2 * a + o + s
			}
			return {
				initCatmullRom: function(t, e, r, n, a) {
					i(e, r, a * (r - t), a * (n - e))
				},
				initNonuniformCatmullRom: function(t, e, r, n, a, o, s) {
					var c = (e - t) / a - (r - t) / (a + o) + (r - e) / o,
						h = (r - e) / o - (n - e) / (o + s) + (n - r) / s;
					i(e, r, c *= o, h *= o)
				},
				calc: function(i) {
					var a = i * i;
					return t + e * i + r * a + n * (a * i)
				}
			}
		}
		Object.assign(mh.prototype, {
			load: function(t, e, r, n) {
				void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				var i = this,
					a = uh.get(t);
				if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function() {
					e && e(a), i.manager.itemEnd(t)
				}, 0), a;
				if (void 0 === fh[t]) {
					var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
					if (o) {
						var s = o[1],
							c = !!o[2],
							h = o[3];
						h = decodeURIComponent(h), c && (h = atob(h));
						try {
							var l, u = (this.responseType || "").toLowerCase();
							switch (u) {
								case "arraybuffer":
								case "blob":
									for (var p = new Uint8Array(h.length), d = 0; d < h.length; d++) p[d] = h.charCodeAt(d);
									l = "blob" === u ? new Blob([p.buffer], {
										type: s
									}) : p.buffer;
									break;
								case "document":
									var f = new DOMParser;
									l = f.parseFromString(h, s);
									break;
								case "json":
									l = JSON.parse(h);
									break;
								default:
									l = h
							}
							setTimeout(function() {
								e && e(l), i.manager.itemEnd(t)
							}, 0)
						} catch (v) {
							setTimeout(function() {
								n && n(v), i.manager.itemError(t), i.manager.itemEnd(t)
							}, 0)
						}
					} else {
						fh[t] = [], fh[t].push({
							onLoad: e,
							onProgress: r,
							onError: n
						});
						var m = new XMLHttpRequest;
						for (var g in m.open("GET", t, !0), m.addEventListener("load", function(e) {
								var r = this.response;
								uh.add(t, r);
								var n = fh[t];
								if (delete fh[t], 200 === this.status || 0 === this.status) {
									0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
									for (var a = 0, o = n.length; a < o; a++) {
										(s = n[a]).onLoad && s.onLoad(r)
									}
									i.manager.itemEnd(t)
								} else {
									for (a = 0, o = n.length; a < o; a++) {
										var s;
										(s = n[a]).onError && s.onError(e)
									}
									i.manager.itemError(t), i.manager.itemEnd(t)
								}
							}, !1), m.addEventListener("progress", function(e) {
								for (var r = fh[t], n = 0, i = r.length; n < i; n++) {
									var a = r[n];
									a.onProgress && a.onProgress(e)
								}
							}, !1), m.addEventListener("error", function(e) {
								var r = fh[t];
								delete fh[t];
								for (var n = 0, a = r.length; n < a; n++) {
									var o = r[n];
									o.onError && o.onError(e)
								}
								i.manager.itemError(t), i.manager.itemEnd(t)
							}, !1), m.addEventListener("abort", function(e) {
								var r = fh[t];
								delete fh[t];
								for (var n = 0, a = r.length; n < a; n++) {
									var o = r[n];
									o.onError && o.onError(e)
								}
								i.manager.itemError(t), i.manager.itemEnd(t)
							}, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
						m.send(null)
					}
					return i.manager.itemStart(t), m
				}
				fh[t].push({
					onLoad: e,
					onProgress: r,
					onError: n
				})
			},
			setPath: function(t) {
				return this.path = t, this
			},
			setResponseType: function(t) {
				return this.responseType = t, this
			},
			setWithCredentials: function(t) {
				return this.withCredentials = t, this
			},
			setMimeType: function(t) {
				return this.mimeType = t, this
			},
			setRequestHeader: function(t) {
				return this.requestHeader = t, this
			}
		}), Object.assign(gh.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = new mh(i.manager);
				a.setPath(i.path), a.load(t, function(t) {
					e(i.parse(JSON.parse(t)))
				}, r, n)
			},
			parse: function(t, e) {
				for (var r = [], n = 0; n < t.length; n++) {
					var i = ch.parse(t[n]);
					r.push(i)
				}
				e(r)
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(vh.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = [],
					o = new ms;
				o.image = a;
				var s = new mh(this.manager);

				function c(c) {
					s.load(t[c], function(t) {
						var r = i._parser(t, !0);
						a[c] = {
							width: r.width,
							height: r.height,
							format: r.format,
							mipmaps: r.mipmaps
						}, 6 === (h += 1) && (1 === r.mipmapCount && (o.minFilter = xt), o.format = r.format, o.needsUpdate = !0, e && e(o))
					}, r, n)
				}
				if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
					for (var h = 0, l = 0, u = t.length; l < u; ++l) c(l);
				else s.load(t, function(t) {
					var r = i._parser(t, !0);
					if (r.isCubemap)
						for (var n = r.mipmaps.length / r.mipmapCount, s = 0; s < n; s++) {
							a[s] = {
								mipmaps: []
							};
							for (var c = 0; c < r.mipmapCount; c++) a[s].mipmaps.push(r.mipmaps[s * r.mipmapCount + c]), a[s].format = r.format, a[s].width = r.width, a[s].height = r.height
						} else o.image.width = r.width, o.image.height = r.height, o.mipmaps = r.mipmaps;
					1 === r.mipmapCount && (o.minFilter = xt), o.format = r.format, o.needsUpdate = !0, e && e(o)
				}, r, n);
				return o
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(yh.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = new Ze,
					o = new mh(this.manager);
				return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, function(t) {
					var r = i._parser(t);
					r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : ft, a.wrapT = void 0 !== r.wrapT ? r.wrapT : ft, a.magFilter = void 0 !== r.magFilter ? r.magFilter : xt, a.minFilter = void 0 !== r.minFilter ? r.minFilter : wt, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps), 1 === r.mipmapCount && (a.minFilter = xt), a.needsUpdate = !0, e && e(a, r))
				}, r, n), a
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(xh.prototype, {
			crossOrigin: "anonymous",
			load: function(t, e, r, n) {
				void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				var i = this,
					a = uh.get(t);
				if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function() {
					e && e(a), i.manager.itemEnd(t)
				}, 0), a;
				var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

				function s() {
					o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), uh.add(t, this), e && e(this), i.manager.itemEnd(t)
				}

				function c(e) {
					o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(e), i.manager.itemError(t), i.manager.itemEnd(t)
				}
				return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(t), o.src = t, o
			},
			setCrossOrigin: function(t) {
				return this.crossOrigin = t, this
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(bh.prototype, {
			crossOrigin: "anonymous",
			load: function(t, e, r, n) {
				var i = new pa,
					a = new xh(this.manager);
				a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
				var o = 0;

				function s(r) {
					a.load(t[r], function(t) {
						i.images[r] = t, 6 === ++o && (i.needsUpdate = !0, e && e(i))
					}, void 0, n)
				}
				for (var c = 0; c < t.length; ++c) s(c);
				return i
			},
			setCrossOrigin: function(t) {
				return this.crossOrigin = t, this
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(wh.prototype, {
			crossOrigin: "anonymous",
			load: function(t, e, r, n) {
				var i = new We,
					a = new xh(this.manager);
				return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(r) {
					i.image = r;
					var n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
					i.format = n ? Bt : Nt, i.needsUpdate = !0, void 0 !== e && e(i)
				}, r, n), i
			},
			setCrossOrigin: function(t) {
				return this.crossOrigin = t, this
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(_h.prototype, {
			getPoint: function() {
				return console.warn("THREE.Curve: .getPoint() not implemented."), null
			},
			getPointAt: function(t, e) {
				var r = this.getUtoTmapping(t);
				return this.getPoint(r, e)
			},
			getPoints: function(t) {
				void 0 === t && (t = 5);
				for (var e = [], r = 0; r <= t; r++) e.push(this.getPoint(r / t));
				return e
			},
			getSpacedPoints: function(t) {
				void 0 === t && (t = 5);
				for (var e = [], r = 0; r <= t; r++) e.push(this.getPointAt(r / t));
				return e
			},
			getLength: function() {
				var t = this.getLengths();
				return t[t.length - 1]
			},
			getLengths: function(t) {
				if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
				this.needsUpdate = !1;
				var e, r, n = [],
					i = this.getPoint(0),
					a = 0;
				for (n.push(0), r = 1; r <= t; r++) a += (e = this.getPoint(r / t)).distanceTo(i), n.push(a), i = e;
				return this.cacheArcLengths = n, n
			},
			updateArcLengths: function() {
				this.needsUpdate = !0, this.getLengths()
			},
			getUtoTmapping: function(t, e) {
				var r, n = this.getLengths(),
					i = 0,
					a = n.length;
				r = e || t * n[a - 1];
				for (var o, s = 0, c = a - 1; s <= c;)
					if ((o = n[i = Math.floor(s + (c - s) / 2)] - r) < 0) s = i + 1;
					else {
						if (!(o > 0)) {
							c = i;
							break
						}
						c = i - 1
					}
				if (n[i = c] === r) return i / (a - 1);
				var h = n[i];
				return (i + (r - h) / (n[i + 1] - h)) / (a - 1)
			},
			getTangent: function(t) {
				var e = t - 1e-4,
					r = t + 1e-4;
				e < 0 && (e = 0), r > 1 && (r = 1);
				var n = this.getPoint(e);
				return this.getPoint(r).clone().sub(n).normalize()
			},
			getTangentAt: function(t) {
				var e = this.getUtoTmapping(t);
				return this.getTangent(e)
			},
			computeFrenetFrames: function(t, e) {
				var r, n, i, a = new He,
					o = [],
					s = [],
					c = [],
					h = new He,
					l = new Ue;
				for (r = 0; r <= t; r++) n = r / t, o[r] = this.getTangentAt(n), o[r].normalize();
				s[0] = new He, c[0] = new He;
				var u = Number.MAX_VALUE,
					p = Math.abs(o[0].x),
					d = Math.abs(o[0].y),
					f = Math.abs(o[0].z);
				for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), r = 1; r <= t; r++) s[r] = s[r - 1].clone(), c[r] = c[r - 1].clone(), h.crossVectors(o[r - 1], o[r]), h.length() > Number.EPSILON && (h.normalize(), i = Math.acos(ze.clamp(o[r - 1].dot(o[r]), -1, 1)), s[r].applyMatrix4(l.makeRotationAxis(h, i))), c[r].crossVectors(o[r], s[r]);
				if (!0 === e)
					for (i = Math.acos(ze.clamp(s[0].dot(s[t]), -1, 1)), i /= t, o[0].dot(h.crossVectors(s[0], s[t])) > 0 && (i = -i), r = 1; r <= t; r++) s[r].applyMatrix4(l.makeRotationAxis(o[r], i * r)), c[r].crossVectors(o[r], s[r]);
				return {
					tangents: o,
					normals: s,
					binormals: c
				}
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.arcLengthDivisions = t.arcLengthDivisions, this
			},
			toJSON: function() {
				var t = {
					metadata: {
						version: 4.5,
						type: "Curve",
						generator: "Curve.toJSON"
					}
				};
				return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
			},
			fromJSON: function(t) {
				return this.arcLengthDivisions = t.arcLengthDivisions, this
			}
		}), Mh.prototype = Object.create(_h.prototype), Mh.prototype.constructor = Mh, Mh.prototype.isEllipseCurve = !0, Mh.prototype.getPoint = function(t, e) {
			for (var r = e || new Fe, n = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) i += n;
			for (; i > n;) i -= n;
			i < Number.EPSILON && (i = a ? 0 : n), !0 !== this.aClockwise || a || (i === n ? i = -n : i -= n);
			var o = this.aStartAngle + t * i,
				s = this.aX + this.xRadius * Math.cos(o),
				c = this.aY + this.yRadius * Math.sin(o);
			if (0 !== this.aRotation) {
				var h = Math.cos(this.aRotation),
					l = Math.sin(this.aRotation),
					u = s - this.aX,
					p = c - this.aY;
				s = u * h - p * l + this.aX, c = u * l + p * h + this.aY
			}
			return r.set(s, c)
		}, Mh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
		}, Mh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
		}, Mh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
		}, Sh.prototype = Object.create(Mh.prototype), Sh.prototype.constructor = Sh, Sh.prototype.isArcCurve = !0;
		var Th = new He,
			Ah = new Eh,
			Lh = new Eh,
			Rh = new Eh;

		function Ch(t, e, r, n) {
			_h.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = r || "centripetal", this.tension = n || .5
		}

		function Ph(t, e, r, n, i) {
			var a = .5 * (n - e),
				o = .5 * (i - r),
				s = t * t;
			return (2 * r - 2 * n + a + o) * (t * s) + (-3 * r + 3 * n - 2 * a - o) * s + a * t + r
		}

		function Oh(t, e) {
			var r = 1 - t;
			return r * r * e
		}

		function Ih(t, e) {
			return 2 * (1 - t) * t * e
		}

		function Dh(t, e) {
			return t * t * e
		}

		function Bh(t, e, r, n) {
			return Oh(t, e) + Ih(t, r) + Dh(t, n)
		}

		function Nh(t, e) {
			var r = 1 - t;
			return r * r * r * e
		}

		function zh(t, e) {
			var r = 1 - t;
			return 3 * r * r * t * e
		}

		function Fh(t, e) {
			return 3 * (1 - t) * t * t * e
		}

		function Uh(t, e) {
			return t * t * t * e
		}

		function Gh(t, e, r, n, i) {
			return Nh(t, e) + zh(t, r) + Fh(t, n) + Uh(t, i)
		}

		function Hh(t, e, r, n) {
			_h.call(this), this.type = "CubicBezierCurve", this.v0 = t || new Fe, this.v1 = e || new Fe, this.v2 = r || new Fe, this.v3 = n || new Fe
		}

		function Vh(t, e, r, n) {
			_h.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new He, this.v1 = e || new He, this.v2 = r || new He, this.v3 = n || new He
		}

		function kh(t, e) {
			_h.call(this), this.type = "LineCurve", this.v1 = t || new Fe, this.v2 = e || new Fe
		}

		function jh(t, e) {
			_h.call(this), this.type = "LineCurve3", this.v1 = t || new He, this.v2 = e || new He
		}

		function Wh(t, e, r) {
			_h.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new Fe, this.v1 = e || new Fe, this.v2 = r || new Fe
		}

		function qh(t, e, r) {
			_h.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new He, this.v1 = e || new He, this.v2 = r || new He
		}

		function Xh(t) {
			_h.call(this), this.type = "SplineCurve", this.points = t || []
		}
		Ch.prototype = Object.create(_h.prototype), Ch.prototype.constructor = Ch, Ch.prototype.isCatmullRomCurve3 = !0, Ch.prototype.getPoint = function(t, e) {
			var r, n, i, a, o = e || new He,
				s = this.points,
				c = s.length,
				h = (c - (this.closed ? 0 : 1)) * t,
				l = Math.floor(h),
				u = h - l;
			if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? r = s[(l - 1) % c] : (Th.subVectors(s[0], s[1]).add(s[0]), r = Th), n = s[l % c], i = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (Th.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = Th), "centripetal" === this.curveType || "chordal" === this.curveType) {
				var p = "chordal" === this.curveType ? .5 : .25,
					d = Math.pow(r.distanceToSquared(n), p),
					f = Math.pow(n.distanceToSquared(i), p),
					m = Math.pow(i.distanceToSquared(a), p);
				f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), Ah.initNonuniformCatmullRom(r.x, n.x, i.x, a.x, d, f, m), Lh.initNonuniformCatmullRom(r.y, n.y, i.y, a.y, d, f, m), Rh.initNonuniformCatmullRom(r.z, n.z, i.z, a.z, d, f, m)
			} else "catmullrom" === this.curveType && (Ah.initCatmullRom(r.x, n.x, i.x, a.x, this.tension), Lh.initCatmullRom(r.y, n.y, i.y, a.y, this.tension), Rh.initCatmullRom(r.z, n.z, i.z, a.z, this.tension));
			return o.set(Ah.calc(u), Lh.calc(u), Rh.calc(u)), o
		}, Ch.prototype.copy = function(t) {
			_h.prototype.copy.call(this, t), this.points = [];
			for (var e = 0, r = t.points.length; e < r; e++) {
				var n = t.points[e];
				this.points.push(n.clone())
			}
			return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
		}, Ch.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			t.points = [];
			for (var e = 0, r = this.points.length; e < r; e++) {
				var n = this.points[e];
				t.points.push(n.toArray())
			}
			return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
		}, Ch.prototype.fromJSON = function(t) {
			_h.prototype.fromJSON.call(this, t), this.points = [];
			for (var e = 0, r = t.points.length; e < r; e++) {
				var n = t.points[e];
				this.points.push((new He).fromArray(n))
			}
			return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
		}, Hh.prototype = Object.create(_h.prototype), Hh.prototype.constructor = Hh, Hh.prototype.isCubicBezierCurve = !0, Hh.prototype.getPoint = function(t, e) {
			var r = e || new Fe,
				n = this.v0,
				i = this.v1,
				a = this.v2,
				o = this.v3;
			return r.set(Gh(t, n.x, i.x, a.x, o.x), Gh(t, n.y, i.y, a.y, o.y)), r
		}, Hh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
		}, Hh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
		}, Hh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
		}, Vh.prototype = Object.create(_h.prototype), Vh.prototype.constructor = Vh, Vh.prototype.isCubicBezierCurve3 = !0, Vh.prototype.getPoint = function(t, e) {
			var r = e || new He,
				n = this.v0,
				i = this.v1,
				a = this.v2,
				o = this.v3;
			return r.set(Gh(t, n.x, i.x, a.x, o.x), Gh(t, n.y, i.y, a.y, o.y), Gh(t, n.z, i.z, a.z, o.z)), r
		}, Vh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
		}, Vh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
		}, Vh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
		}, kh.prototype = Object.create(_h.prototype), kh.prototype.constructor = kh, kh.prototype.isLineCurve = !0, kh.prototype.getPoint = function(t, e) {
			var r = e || new Fe;
			return 1 === t ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(t).add(this.v1)), r
		}, kh.prototype.getPointAt = function(t, e) {
			return this.getPoint(t, e)
		}, kh.prototype.getTangent = function() {
			return this.v2.clone().sub(this.v1).normalize()
		}, kh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, kh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}, kh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}, jh.prototype = Object.create(_h.prototype), jh.prototype.constructor = jh, jh.prototype.isLineCurve3 = !0, jh.prototype.getPoint = function(t, e) {
			var r = e || new He;
			return 1 === t ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(t).add(this.v1)), r
		}, jh.prototype.getPointAt = function(t, e) {
			return this.getPoint(t, e)
		}, jh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, jh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}, jh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}, Wh.prototype = Object.create(_h.prototype), Wh.prototype.constructor = Wh, Wh.prototype.isQuadraticBezierCurve = !0, Wh.prototype.getPoint = function(t, e) {
			var r = e || new Fe,
				n = this.v0,
				i = this.v1,
				a = this.v2;
			return r.set(Bh(t, n.x, i.x, a.x), Bh(t, n.y, i.y, a.y)), r
		}, Wh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, Wh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}, Wh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}, qh.prototype = Object.create(_h.prototype), qh.prototype.constructor = qh, qh.prototype.isQuadraticBezierCurve3 = !0, qh.prototype.getPoint = function(t, e) {
			var r = e || new He,
				n = this.v0,
				i = this.v1,
				a = this.v2;
			return r.set(Bh(t, n.x, i.x, a.x), Bh(t, n.y, i.y, a.y), Bh(t, n.z, i.z, a.z)), r
		}, qh.prototype.copy = function(t) {
			return _h.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, qh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
		}, qh.prototype.fromJSON = function(t) {
			return _h.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
		}, Xh.prototype = Object.create(_h.prototype), Xh.prototype.constructor = Xh, Xh.prototype.isSplineCurve = !0, Xh.prototype.getPoint = function(t, e) {
			var r = e || new Fe,
				n = this.points,
				i = (n.length - 1) * t,
				a = Math.floor(i),
				o = i - a,
				s = n[0 === a ? a : a - 1],
				c = n[a],
				h = n[a > n.length - 2 ? n.length - 1 : a + 1],
				l = n[a > n.length - 3 ? n.length - 1 : a + 2];
			return r.set(Ph(o, s.x, c.x, h.x, l.x), Ph(o, s.y, c.y, h.y, l.y)), r
		}, Xh.prototype.copy = function(t) {
			_h.prototype.copy.call(this, t), this.points = [];
			for (var e = 0, r = t.points.length; e < r; e++) {
				var n = t.points[e];
				this.points.push(n.clone())
			}
			return this
		}, Xh.prototype.toJSON = function() {
			var t = _h.prototype.toJSON.call(this);
			t.points = [];
			for (var e = 0, r = this.points.length; e < r; e++) {
				var n = this.points[e];
				t.points.push(n.toArray())
			}
			return t
		}, Xh.prototype.fromJSON = function(t) {
			_h.prototype.fromJSON.call(this, t), this.points = [];
			for (var e = 0, r = t.points.length; e < r; e++) {
				var n = t.points[e];
				this.points.push((new Fe).fromArray(n))
			}
			return this
		};
		var Yh = Object.freeze({
			ArcCurve: Sh,
			CatmullRomCurve3: Ch,
			CubicBezierCurve: Hh,
			CubicBezierCurve3: Vh,
			EllipseCurve: Mh,
			LineCurve: kh,
			LineCurve3: jh,
			QuadraticBezierCurve: Wh,
			QuadraticBezierCurve3: qh,
			SplineCurve: Xh
		});

		function Jh() {
			_h.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
		}

		function Zh(t) {
			Jh.call(this), this.type = "Path", this.currentPoint = new Fe, t && this.setFromPoints(t)
		}

		function Qh(t) {
			Zh.call(this, t), this.uuid = ze.generateUUID(), this.type = "Shape", this.holes = []
		}

		function Kh(t, e) {
			Ai.call(this), this.type = "Light", this.color = new yi(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
		}

		function $h(t, e, r) {
			Kh.call(this, t, r), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Ai.DefaultUp), this.updateMatrix(), this.groundColor = new yi(e)
		}

		function tl(t) {
			this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new Fe(512, 512), this.map = null, this.matrix = new Ue
		}

		function el() {
			tl.call(this, new Vo(50, 1, .5, 500))
		}

		function rl(t, e, r, n, i, a) {
			Kh.call(this, t, e), this.type = "SpotLight", this.position.copy(Ai.DefaultUp), this.updateMatrix(), this.target = new Ai, Object.defineProperty(this, "power", {
				get: function() {
					return this.intensity * Math.PI
				},
				set: function(t) {
					this.intensity = t / Math.PI
				}
			}), this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new el
		}

		function nl(t, e, r, n) {
			Kh.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
				get: function() {
					return 4 * this.intensity * Math.PI
				},
				set: function(t) {
					this.intensity = t / (4 * Math.PI)
				}
			}), this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new tl(new Vo(90, 1, .5, 500))
		}

		function il(t, e, r, n, i, a) {
			Ho.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== r ? r : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
		}

		function al() {
			tl.call(this, new il(-5, 5, 5, -5, .5, 500))
		}

		function ol(t, e) {
			Kh.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Ai.DefaultUp), this.updateMatrix(), this.target = new Ai, this.shadow = new al
		}

		function sl(t, e) {
			Kh.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
		}

		function cl(t, e, r, n) {
			Kh.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== r ? r : 10, this.height = void 0 !== n ? n : 10
		}

		function hl(t) {
			this.manager = void 0 !== t ? t : dh, this.textures = {}
		}
		Jh.prototype = Object.assign(Object.create(_h.prototype), {
			constructor: Jh,
			add: function(t) {
				this.curves.push(t)
			},
			closePath: function() {
				var t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new kh(e, t))
			},
			getPoint: function(t) {
				for (var e = t * this.getLength(), r = this.getCurveLengths(), n = 0; n < r.length;) {
					if (r[n] >= e) {
						var i = r[n] - e,
							a = this.curves[n],
							o = a.getLength(),
							s = 0 === o ? 0 : 1 - i / o;
						return a.getPointAt(s)
					}
					n++
				}
				return null
			},
			getLength: function() {
				var t = this.getCurveLengths();
				return t[t.length - 1]
			},
			updateArcLengths: function() {
				this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
			},
			getCurveLengths: function() {
				if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
				for (var t = [], e = 0, r = 0, n = this.curves.length; r < n; r++) e += this.curves[r].getLength(), t.push(e);
				return this.cacheLengths = t, t
			},
			getSpacedPoints: function(t) {
				void 0 === t && (t = 40);
				for (var e = [], r = 0; r <= t; r++) e.push(this.getPoint(r / t));
				return this.autoClose && e.push(e[0]), e
			},
			getPoints: function(t) {
				t = t || 12;
				for (var e, r = [], n = 0, i = this.curves; n < i.length; n++)
					for (var a = i[n], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
						var h = s[c];
						e && e.equals(h) || (r.push(h), e = h)
					}
				return this.autoClose && r.length > 1 && !r[r.length - 1].equals(r[0]) && r.push(r[0]), r
			},
			copy: function(t) {
				_h.prototype.copy.call(this, t), this.curves = [];
				for (var e = 0, r = t.curves.length; e < r; e++) {
					var n = t.curves[e];
					this.curves.push(n.clone())
				}
				return this.autoClose = t.autoClose, this
			},
			toJSON: function() {
				var t = _h.prototype.toJSON.call(this);
				t.autoClose = this.autoClose, t.curves = [];
				for (var e = 0, r = this.curves.length; e < r; e++) {
					var n = this.curves[e];
					t.curves.push(n.toJSON())
				}
				return t
			},
			fromJSON: function(t) {
				_h.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
				for (var e = 0, r = t.curves.length; e < r; e++) {
					var n = t.curves[e];
					this.curves.push((new Yh[n.type]).fromJSON(n))
				}
				return this
			}
		}), Zh.prototype = Object.assign(Object.create(Jh.prototype), {
			constructor: Zh,
			setFromPoints: function(t) {
				this.moveTo(t[0].x, t[0].y);
				for (var e = 1, r = t.length; e < r; e++) this.lineTo(t[e].x, t[e].y)
			},
			moveTo: function(t, e) {
				this.currentPoint.set(t, e)
			},
			lineTo: function(t, e) {
				var r = new kh(this.currentPoint.clone(), new Fe(t, e));
				this.curves.push(r), this.currentPoint.set(t, e)
			},
			quadraticCurveTo: function(t, e, r, n) {
				var i = new Wh(this.currentPoint.clone(), new Fe(t, e), new Fe(r, n));
				this.curves.push(i), this.currentPoint.set(r, n)
			},
			bezierCurveTo: function(t, e, r, n, i, a) {
				var o = new Hh(this.currentPoint.clone(), new Fe(t, e), new Fe(r, n), new Fe(i, a));
				this.curves.push(o), this.currentPoint.set(i, a)
			},
			splineThru: function(t) {
				var e = new Xh([this.currentPoint.clone()].concat(t));
				this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
			},
			arc: function(t, e, r, n, i, a) {
				var o = this.currentPoint.x,
					s = this.currentPoint.y;
				this.absarc(t + o, e + s, r, n, i, a)
			},
			absarc: function(t, e, r, n, i, a) {
				this.absellipse(t, e, r, r, n, i, a)
			},
			ellipse: function(t, e, r, n, i, a, o, s) {
				var c = this.currentPoint.x,
					h = this.currentPoint.y;
				this.absellipse(t + c, e + h, r, n, i, a, o, s)
			},
			absellipse: function(t, e, r, n, i, a, o, s) {
				var c = new Mh(t, e, r, n, i, a, o, s);
				if (this.curves.length > 0) {
					var h = c.getPoint(0);
					h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
				}
				this.curves.push(c);
				var l = c.getPoint(1);
				this.currentPoint.copy(l)
			},
			copy: function(t) {
				return Jh.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
			},
			toJSON: function() {
				var t = Jh.prototype.toJSON.call(this);
				return t.currentPoint = this.currentPoint.toArray(), t
			},
			fromJSON: function(t) {
				return Jh.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
			}
		}), Qh.prototype = Object.assign(Object.create(Zh.prototype), {
			constructor: Qh,
			getPointsHoles: function(t) {
				for (var e = [], r = 0, n = this.holes.length; r < n; r++) e[r] = this.holes[r].getPoints(t);
				return e
			},
			extractPoints: function(t) {
				return {
					shape: this.getPoints(t),
					holes: this.getPointsHoles(t)
				}
			},
			copy: function(t) {
				Zh.prototype.copy.call(this, t), this.holes = [];
				for (var e = 0, r = t.holes.length; e < r; e++) {
					var n = t.holes[e];
					this.holes.push(n.clone())
				}
				return this
			},
			toJSON: function() {
				var t = Zh.prototype.toJSON.call(this);
				t.uuid = this.uuid, t.holes = [];
				for (var e = 0, r = this.holes.length; e < r; e++) {
					var n = this.holes[e];
					t.holes.push(n.toJSON())
				}
				return t
			},
			fromJSON: function(t) {
				Zh.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
				for (var e = 0, r = t.holes.length; e < r; e++) {
					var n = t.holes[e];
					this.holes.push((new Zh).fromJSON(n))
				}
				return this
			}
		}), Kh.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: Kh,
			isLight: !0,
			copy: function(t) {
				return Ai.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
			},
			toJSON: function(t) {
				var e = Ai.prototype.toJSON.call(this, t);
				return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
			}
		}), $h.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: $h,
			isHemisphereLight: !0,
			copy: function(t) {
				return Kh.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
			}
		}), Object.assign(tl.prototype, {
			copy: function(t) {
				return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			toJSON: function() {
				var t = {};
				return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
			}
		}), el.prototype = Object.assign(Object.create(tl.prototype), {
			constructor: el,
			isSpotLightShadow: !0,
			update: function(t) {
				var e = this.camera,
					r = 2 * ze.RAD2DEG * t.angle,
					n = this.mapSize.width / this.mapSize.height,
					i = t.distance || e.far;
				r === e.fov && n === e.aspect && i === e.far || (e.fov = r, e.aspect = n, e.far = i, e.updateProjectionMatrix())
			}
		}), rl.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: rl,
			isSpotLight: !0,
			copy: function(t) {
				return Kh.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
			}
		}), nl.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: nl,
			isPointLight: !0,
			copy: function(t) {
				return Kh.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
			}
		}), il.prototype = Object.assign(Object.create(Ho.prototype), {
			constructor: il,
			isOrthographicCamera: !0,
			copy: function(t, e) {
				return Ho.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
			},
			setViewOffset: function(t, e, r, n, i, a) {
				null === this.view && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = r, this.view.offsetY = n, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
			},
			clearViewOffset: function() {
				null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
			},
			updateProjectionMatrix: function() {
				var t = (this.right - this.left) / (2 * this.zoom),
					e = (this.top - this.bottom) / (2 * this.zoom),
					r = (this.right + this.left) / 2,
					n = (this.top + this.bottom) / 2,
					i = r - t,
					a = r + t,
					o = n + e,
					s = n - e;
				if (null !== this.view && this.view.enabled) {
					var c = this.zoom / (this.view.width / this.view.fullWidth),
						h = this.zoom / (this.view.height / this.view.fullHeight),
						l = (this.right - this.left) / this.view.width,
						u = (this.top - this.bottom) / this.view.height;
					a = (i += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
				}
				this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
			},
			toJSON: function(t) {
				var e = Ai.prototype.toJSON.call(this, t);
				return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
			}
		}), al.prototype = Object.assign(Object.create(tl.prototype), {
			constructor: al
		}), ol.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: ol,
			isDirectionalLight: !0,
			copy: function(t) {
				return Kh.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
			}
		}), sl.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: sl,
			isAmbientLight: !0
		}), cl.prototype = Object.assign(Object.create(Kh.prototype), {
			constructor: cl,
			isRectAreaLight: !0,
			copy: function(t) {
				return Kh.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
			},
			toJSON: function(t) {
				var e = Kh.prototype.toJSON.call(this, t);
				return e.object.width = this.width, e.object.height = this.height, e
			}
		}), Object.assign(hl.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = new mh(i.manager);
				a.setPath(i.path), a.load(t, function(t) {
					e(i.parse(JSON.parse(t)))
				}, r, n)
			},
			parse: function(t) {
				var e = this.textures;

				function r(t) {
					return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
				}
				var n = new Yc[t.type];
				if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.uniforms)
					for (var i in t.uniforms) {
						var a = t.uniforms[i];
						switch (n.uniforms[i] = {}, a.type) {
							case "t":
								n.uniforms[i].value = r(a.value);
								break;
							case "c":
								n.uniforms[i].value = (new yi).setHex(a.value);
								break;
							case "v2":
								n.uniforms[i].value = (new Fe).fromArray(a.value);
								break;
							case "v3":
								n.uniforms[i].value = (new He).fromArray(a.value);
								break;
							case "v4":
								n.uniforms[i].value = (new qe).fromArray(a.value);
								break;
							case "m3":
								n.uniforms[i].value = (new Ve).fromArray(a.value);
							case "m4":
								n.uniforms[i].value = (new Ue).fromArray(a.value);
								break;
							default:
								n.uniforms[i].value = a.value
						}
					}
				if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
					for (var o in t.extensions) n.extensions[o] = t.extensions[o];
				if (void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = r(t.map)), void 0 !== t.alphaMap && (n.alphaMap = r(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = r(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = r(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
					var s = t.normalScale;
					!1 === Array.isArray(s) && (s = [s, s]), n.normalScale = (new Fe).fromArray(s)
				}
				return void 0 !== t.displacementMap && (n.displacementMap = r(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = r(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = r(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = r(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = r(t.specularMap)), void 0 !== t.envMap && (n.envMap = r(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = r(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = r(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = r(t.gradientMap)), n
			},
			setPath: function(t) {
				return this.path = t, this
			},
			setTextures: function(t) {
				return this.textures = t, this
			}
		});
		var ll = {
			decodeText: function(t) {
				if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
				for (var e = "", r = 0, n = t.length; r < n; r++) e += String.fromCharCode(t[r]);
				return decodeURIComponent(escape(e))
			},
			extractUrlBase: function(t) {
				var e = t.lastIndexOf("/");
				return -1 === e ? "./" : t.substr(0, e + 1)
			}
		};

		function ul(t) {
			this.manager = void 0 !== t ? t : dh
		}
		exports.LoaderUtils = ll, Object.assign(ul.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = new mh(i.manager);
				a.setPath(i.path), a.load(t, function(t) {
					e(i.parse(JSON.parse(t)))
				}, r, n)
			},
			parse: function(t) {
				var e = new ki,
					r = t.data.index;
				if (void 0 !== r) {
					var n = new pl[r.type](r.array);
					e.setIndex(new Ci(n, 1))
				}
				var i = t.data.attributes;
				for (var a in i) {
					var o = i[a];
					n = new pl[o.type](o.array);
					e.addAttribute(a, new Ci(n, o.itemSize, o.normalized))
				}
				var s = t.data.groups || t.data.drawcalls || t.data.offsets;
				if (void 0 !== s)
					for (var c = 0, h = s.length; c !== h; ++c) {
						var l = s[c];
						e.addGroup(l.start, l.count, l.materialIndex)
					}
				var u = t.data.boundingSphere;
				if (void 0 !== u) {
					var p = new He;
					void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new Ke(p, u.radius)
				}
				return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
			},
			setPath: function(t) {
				return this.path = t, this
			}
		});
		var pl = {
			Int8Array: Int8Array,
			Uint8Array: Uint8Array,
			Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
			Int16Array: Int16Array,
			Uint16Array: Uint16Array,
			Int32Array: Int32Array,
			Uint32Array: Uint32Array,
			Float32Array: Float32Array,
			Float64Array: Float64Array
		};

		function dl(t) {
			this.manager = void 0 !== t ? t : dh, this.resourcePath = ""
		}
		Object.assign(dl.prototype, {
			crossOrigin: "anonymous",
			load: function(t, e, r, n) {
				var i = this,
					a = void 0 === this.path ? ll.extractUrlBase(t) : this.path;
				this.resourcePath = this.resourcePath || a;
				var o = new mh(i.manager);
				o.setPath(this.path), o.load(t, function(r) {
					var a = null;
					try {
						a = JSON.parse(r)
					} catch (s) {
						return void 0 !== n && n(s), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", s.message)
					}
					var o = a.metadata;
					void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t)
				}, r, n)
			},
			setPath: function(t) {
				return this.path = t, this
			},
			setResourcePath: function(t) {
				return this.resourcePath = t, this
			},
			setCrossOrigin: function(t) {
				return this.crossOrigin = t, this
			},
			parse: function(t, e) {
				var r = this.parseShape(t.shapes),
					n = this.parseGeometries(t.geometries, r),
					i = this.parseImages(t.images, function() {
						void 0 !== e && e(s)
					}),
					a = this.parseTextures(t.textures, i),
					o = this.parseMaterials(t.materials, a),
					s = this.parseObject(t.object, n, o);
				return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
			},
			parseShape: function(t) {
				var e = {};
				if (void 0 !== t)
					for (var r = 0, n = t.length; r < n; r++) {
						var i = (new Qh).fromJSON(t[r]);
						e[i.uuid] = i
					}
				return e
			},
			parseGeometries: function(t, e) {
				var r = {};
				if (void 0 !== t)
					for (var n = new ul, i = 0, a = t.length; i < a; i++) {
						var o, s = t[i];
						switch (s.type) {
							case "PlaneGeometry":
							case "PlaneBufferGeometry":
								o = new zc[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
								break;
							case "BoxGeometry":
							case "BoxBufferGeometry":
							case "CubeGeometry":
								o = new zc[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
								break;
							case "CircleGeometry":
							case "CircleBufferGeometry":
								o = new zc[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
								break;
							case "CylinderGeometry":
							case "CylinderBufferGeometry":
								o = new zc[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
								break;
							case "ConeGeometry":
							case "ConeBufferGeometry":
								o = new zc[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
								break;
							case "SphereGeometry":
							case "SphereBufferGeometry":
								o = new zc[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
								break;
							case "DodecahedronGeometry":
							case "DodecahedronBufferGeometry":
							case "IcosahedronGeometry":
							case "IcosahedronBufferGeometry":
							case "OctahedronGeometry":
							case "OctahedronBufferGeometry":
							case "TetrahedronGeometry":
							case "TetrahedronBufferGeometry":
								o = new zc[s.type](s.radius, s.detail);
								break;
							case "RingGeometry":
							case "RingBufferGeometry":
								o = new zc[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
								break;
							case "TorusGeometry":
							case "TorusBufferGeometry":
								o = new zc[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
								break;
							case "TorusKnotGeometry":
							case "TorusKnotBufferGeometry":
								o = new zc[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
								break;
							case "LatheGeometry":
							case "LatheBufferGeometry":
								o = new zc[s.type](s.points, s.segments, s.phiStart, s.phiLength);
								break;
							case "PolyhedronGeometry":
							case "PolyhedronBufferGeometry":
								o = new zc[s.type](s.vertices, s.indices, s.radius, s.details);
								break;
							case "ShapeGeometry":
							case "ShapeBufferGeometry":
								for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
									var u = e[s.shapes[h]];
									c.push(u)
								}
								o = new zc[s.type](c, s.curveSegments);
								break;
							case "ExtrudeGeometry":
							case "ExtrudeBufferGeometry":
								for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
									u = e[s.shapes[h]];
									c.push(u)
								}
								var p = s.options.extrudePath;
								void 0 !== p && (s.options.extrudePath = (new Yh[p.type]).fromJSON(p)), o = new zc[s.type](c, s.options);
								break;
							case "BufferGeometry":
								o = n.parse(s);
								break;
							case "Geometry":
								if ("THREE" in window && "LegacyJSONLoader" in THREE) o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
								else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
								break;
							default:
								console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
								continue
						}
						o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), r[s.uuid] = o
					}
				return r
			},
			parseMaterials: function(t, e) {
				var r = {},
					n = {};
				if (void 0 !== t) {
					var i = new hl;
					i.setTextures(e);
					for (var a = 0, o = t.length; a < o; a++) {
						var s = t[a];
						if ("MultiMaterial" === s.type) {
							for (var c = [], h = 0; h < s.materials.length; h++) {
								var l = s.materials[h];
								void 0 === r[l.uuid] && (r[l.uuid] = i.parse(l)), c.push(r[l.uuid])
							}
							n[s.uuid] = c
						} else void 0 === r[s.uuid] && (r[s.uuid] = i.parse(s)), n[s.uuid] = r[s.uuid]
					}
				}
				return n
			},
			parseAnimations: function(t) {
				for (var e = [], r = 0; r < t.length; r++) {
					var n = t[r],
						i = ch.parse(n);
					void 0 !== n.uuid && (i.uuid = n.uuid), e.push(i)
				}
				return e
			},
			parseImages: function(t, e) {
				var r = this,
					n = {};

				function i(t) {
					return r.manager.itemStart(t), a.load(t, function() {
						r.manager.itemEnd(t)
					}, void 0, function() {
						r.manager.itemError(t), r.manager.itemEnd(t)
					})
				}
				if (void 0 !== t && t.length > 0) {
					var a = new xh(new ph(e));
					a.setCrossOrigin(this.crossOrigin);
					for (var o = 0, s = t.length; o < s; o++) {
						var c = t[o],
							h = c.url;
						if (Array.isArray(h)) {
							n[c.uuid] = [];
							for (var l = 0, u = h.length; l < u; l++) {
								var p = h[l],
									d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : r.resourcePath + p;
								n[c.uuid].push(i(d))
							}
						} else {
							d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : r.resourcePath + c.url;
							n[c.uuid] = i(d)
						}
					}
				}
				return n
			},
			parseTextures: function(t, e) {
				function r(t, e) {
					return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
				}
				var n = {};
				if (void 0 !== t)
					for (var i = 0, a = t.length; i < a; i++) {
						var o, s = t[i];
						void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new pa(e[s.image]) : new We(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = r(s.mapping, ml)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = r(s.wrap[0], gl), o.wrapT = r(s.wrap[1], gl)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = r(s.minFilter, vl)), void 0 !== s.magFilter && (o.magFilter = r(s.magFilter, vl)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), n[s.uuid] = o
					}
				return n
			},
			parseObject: function(t, e, r) {
				var n;

				function i(t) {
					return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
				}

				function a(t) {
					if (void 0 !== t) {
						if (Array.isArray(t)) {
							for (var e = [], n = 0, i = t.length; n < i; n++) {
								var a = t[n];
								void 0 === r[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(r[a])
							}
							return e
						}
						return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined material", t), r[t]
					}
				}
				switch (t.type) {
					case "Scene":
						n = new $o, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new yi(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new Ko(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new Qo(t.fog.color, t.fog.density)));
						break;
					case "PerspectiveCamera":
						n = new Vo(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view));
						break;
					case "OrthographicCamera":
						n = new il(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view));
						break;
					case "AmbientLight":
						n = new sl(t.color, t.intensity);
						break;
					case "DirectionalLight":
						n = new ol(t.color, t.intensity);
						break;
					case "PointLight":
						n = new nl(t.color, t.intensity, t.distance, t.decay);
						break;
					case "RectAreaLight":
						n = new cl(t.color, t.intensity, t.width, t.height);
						break;
					case "SpotLight":
						n = new rl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
						break;
					case "HemisphereLight":
						n = new $h(t.color, t.groundColor, t.intensity);
						break;
					case "SkinnedMesh":
						console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
					case "Mesh":
						var o = i(t.geometry),
							s = a(t.material);
						n = o.bones && o.bones.length > 0 ? new as(o, s) : new ta(o, s), void 0 !== t.drawMode && n.setDrawMode(t.drawMode);
						break;
					case "LOD":
						n = new is;
						break;
					case "Line":
						n = new hs(i(t.geometry), a(t.material), t.mode);
						break;
					case "LineLoop":
						n = new us(i(t.geometry), a(t.material));
						break;
					case "LineSegments":
						n = new ls(i(t.geometry), a(t.material));
						break;
					case "PointCloud":
					case "Points":
						n = new ds(i(t.geometry), a(t.material));
						break;
					case "Sprite":
						n = new ns(a(t.material));
						break;
					case "Group":
						n = new Go;
						break;
					default:
						n = new Ai
				}
				if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
					for (var c = t.children, h = 0; h < c.length; h++) n.add(this.parseObject(c[h], e, r));
				if ("LOD" === t.type)
					for (var l = t.levels, u = 0; u < l.length; u++) {
						var p = l[u],
							d = n.getObjectByProperty("uuid", p.object);
						void 0 !== d && n.addLevel(d, p.distance)
					}
				return n
			}
		});
		var fl, ml = {
				UVMapping: at,
				CubeReflectionMapping: ot,
				CubeRefractionMapping: st,
				EquirectangularReflectionMapping: ct,
				EquirectangularRefractionMapping: ht,
				SphericalReflectionMapping: lt,
				CubeUVReflectionMapping: ut,
				CubeUVRefractionMapping: pt
			},
			gl = {
				RepeatWrapping: dt,
				ClampToEdgeWrapping: ft,
				MirroredRepeatWrapping: mt
			},
			vl = {
				NearestFilter: gt,
				NearestMipMapNearestFilter: vt,
				NearestMipMapLinearFilter: yt,
				LinearFilter: xt,
				LinearMipMapNearestFilter: bt,
				LinearMipMapLinearFilter: wt
			};

		function yl(t) {
			"undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : dh, this.options = void 0
		}

		function xl() {
			this.type = "ShapePath", this.color = new yi, this.subPaths = [], this.currentPath = null
		}

		function bl(t) {
			this.type = "Font", this.data = t
		}

		function wl(t, e, r) {
			for (var n = Array.from ? Array.from(t) : String(t).split(""), i = e / r.resolution, a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * i, o = [], s = 0, c = 0, h = 0; h < n.length; h++) {
				var l = n[h];
				if ("\n" === l) s = 0, c -= a;
				else {
					var u = _l(l, i, s, c, r);
					s += u.offsetX, o.push(u.path)
				}
			}
			return o
		}

		function _l(t, e, r, n, i) {
			var a = i.glyphs[t] || i.glyphs["?"];
			if (a) {
				var o, s, c, h, l, u, p, d, f = new xl;
				if (a.o)
					for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) {
						switch (m[g++]) {
							case "m":
								o = m[g++] * e + r, s = m[g++] * e + n, f.moveTo(o, s);
								break;
							case "l":
								o = m[g++] * e + r, s = m[g++] * e + n, f.lineTo(o, s);
								break;
							case "q":
								c = m[g++] * e + r, h = m[g++] * e + n, l = m[g++] * e + r, u = m[g++] * e + n, f.quadraticCurveTo(l, u, c, h);
								break;
							case "b":
								c = m[g++] * e + r, h = m[g++] * e + n, l = m[g++] * e + r, u = m[g++] * e + n, p = m[g++] * e + r, d = m[g++] * e + n, f.bezierCurveTo(l, u, p, d, c, h)
						}
					}
				return {
					offsetX: a.ha * e,
					path: f
				}
			}
		}

		function Ml(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function Sl() {}
		yl.prototype = {
			constructor: yl,
			setOptions: function(t) {
				return this.options = t, this
			},
			load: function(t, e, r, n) {
				void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				var i = this,
					a = uh.get(t);
				if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function() {
					e && e(a), i.manager.itemEnd(t)
				}, 0), a;
				fetch(t).then(function(t) {
					return t.blob()
				}).then(function(t) {
					return createImageBitmap(t, i.options)
				}).then(function(r) {
					uh.add(t, r), e && e(r), i.manager.itemEnd(t)
				}).catch(function(e) {
					n && n(e), i.manager.itemError(t), i.manager.itemEnd(t)
				})
			},
			setCrossOrigin: function() {
				return this
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}, Object.assign(xl.prototype, {
			moveTo: function(t, e) {
				this.currentPath = new Zh, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
			},
			lineTo: function(t, e) {
				this.currentPath.lineTo(t, e)
			},
			quadraticCurveTo: function(t, e, r, n) {
				this.currentPath.quadraticCurveTo(t, e, r, n)
			},
			bezierCurveTo: function(t, e, r, n, i, a) {
				this.currentPath.bezierCurveTo(t, e, r, n, i, a)
			},
			splineThru: function(t) {
				this.currentPath.splineThru(t)
			},
			toShapes: function(t, e) {
				function r(t) {
					for (var e = [], r = 0, n = t.length; r < n; r++) {
						var i = t[r],
							a = new Qh;
						a.curves = i.curves, e.push(a)
					}
					return e
				}

				function n(t, e) {
					for (var r = e.length, n = !1, i = r - 1, a = 0; a < r; i = a++) {
						var o = e[i],
							s = e[a],
							c = s.x - o.x,
							h = s.y - o.y;
						if (Math.abs(h) > Number.EPSILON) {
							if (h < 0 && (o = e[a], c = -c, s = e[i], h = -h), t.y < o.y || t.y > s.y) continue;
							if (t.y === o.y) {
								if (t.x === o.x) return !0
							} else {
								var l = h * (t.x - o.x) - c * (t.y - o.y);
								if (0 === l) return !0;
								if (l < 0) continue;
								n = !n
							}
						} else {
							if (t.y !== o.y) continue;
							if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
						}
					}
					return n
				}
				var i = pc.isClockWise,
					a = this.subPaths;
				if (0 === a.length) return [];
				if (!0 === e) return r(a);
				var o, s, c, h = [];
				if (1 === a.length) return s = a[0], (c = new Qh).curves = s.curves, h.push(c), h;
				var l = !i(a[0].getPoints());
				l = t ? !l : l;
				var u, p, d = [],
					f = [],
					m = [],
					g = 0;
				f[g] = void 0, m[g] = [];
				for (var v = 0, y = a.length; v < y; v++) o = i(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!l && f[g] && g++, f[g] = {
					s: new Qh,
					p: u
				}, f[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({
					h: s,
					p: u[0]
				});
				if (!f[0]) return r(a);
				if (f.length > 1) {
					for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
					for (w = 0, _ = f.length; w < _; w++)
						for (var M = m[w], S = 0; S < M.length; S++) {
							for (var E = M[S], T = !0, A = 0; A < f.length; A++) n(E.p, f[A].p) && (w !== A && b.push({
								froms: w,
								tos: A,
								hole: S
							}), T ? (T = !1, d[A].push(E)) : x = !0);
							T && d[w].push(E)
						}
					b.length > 0 && (x || (m = d))
				}
				v = 0;
				for (var L = f.length; v < L; v++) {
					c = f[v].s, h.push(c);
					for (var R = 0, C = (p = m[v]).length; R < C; R++) c.holes.push(p[R].h)
				}
				return h
			}
		}), Object.assign(bl.prototype, {
			isFont: !0,
			generateShapes: function(t, e) {
				void 0 === e && (e = 100);
				for (var r = [], n = wl(t, e, this.data), i = 0, a = n.length; i < a; i++) Array.prototype.push.apply(r, n[i].toShapes());
				return r
			}
		}), Object.assign(Ml.prototype, {
			load: function(t, e, r, n) {
				var i = this,
					a = new mh(this.manager);
				a.setPath(this.path), a.load(t, function(t) {
					var r;
					try {
						r = JSON.parse(t)
					} catch (a) {
						console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), r = JSON.parse(t.substring(65, t.length - 2))
					}
					var n = i.parse(r);
					e && e(n)
				}, r, n)
			},
			parse: function(t) {
				return new bl(t)
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Sl.Handlers = {
			handlers: [],
			add: function(t, e) {
				this.handlers.push(t, e)
			},
			get: function(t) {
				for (var e = this.handlers, r = 0, n = e.length; r < n; r += 2) {
					var i = e[r],
						a = e[r + 1];
					if (i.test(t)) return a
				}
				return null
			}
		}, Object.assign(Sl.prototype, {
			crossOrigin: "anonymous",
			onLoadStart: function() {},
			onLoadProgress: function() {},
			onLoadComplete: function() {},
			initMaterials: function(t, e, r) {
				for (var n = [], i = 0; i < t.length; ++i) n[i] = this.createMaterial(t[i], e, r);
				return n
			},
			createMaterial: function() {
				var t = {
						NoBlending: b,
						NormalBlending: w,
						AdditiveBlending: _,
						SubtractiveBlending: M,
						MultiplyBlending: S,
						CustomBlending: E
					},
					e = new yi,
					r = new wh,
					n = new hl;
				return function(i, a, o) {
					var s = {};

					function c(t, e, n, i, c) {
						var h, l = a + t,
							u = Sl.Handlers.get(l);
						null !== u ? h = u.load(l) : (r.setCrossOrigin(o), h = r.load(l)), void 0 !== e && (h.repeat.fromArray(e), 1 !== e[0] && (h.wrapS = dt), 1 !== e[1] && (h.wrapT = dt)), void 0 !== n && h.offset.fromArray(n), void 0 !== i && ("repeat" === i[0] && (h.wrapS = dt), "mirror" === i[0] && (h.wrapS = mt), "repeat" === i[1] && (h.wrapT = dt), "mirror" === i[1] && (h.wrapT = mt)), void 0 !== c && (h.anisotropy = c);
						var p = ze.generateUUID();
						return s[p] = h, p
					}
					var h = {
						uuid: ze.generateUUID(),
						type: "MeshLambertMaterial"
					};
					for (var l in i) {
						var u = i[l];
						switch (l) {
							case "DbgColor":
							case "DbgIndex":
							case "opticalDensity":
							case "illumination":
								break;
							case "DbgName":
								h.name = u;
								break;
							case "blending":
								h.blending = t[u];
								break;
							case "colorAmbient":
							case "mapAmbient":
								console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
								break;
							case "colorDiffuse":
								h.color = e.fromArray(u).getHex();
								break;
							case "colorSpecular":
								h.specular = e.fromArray(u).getHex();
								break;
							case "colorEmissive":
								h.emissive = e.fromArray(u).getHex();
								break;
							case "specularCoef":
								h.shininess = u;
								break;
							case "shading":
								"basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
								break;
							case "mapDiffuse":
								h.map = c(u, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
								break;
							case "mapDiffuseRepeat":
							case "mapDiffuseOffset":
							case "mapDiffuseWrap":
							case "mapDiffuseAnisotropy":
								break;
							case "mapEmissive":
								h.emissiveMap = c(u, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
								break;
							case "mapEmissiveRepeat":
							case "mapEmissiveOffset":
							case "mapEmissiveWrap":
							case "mapEmissiveAnisotropy":
								break;
							case "mapLight":
								h.lightMap = c(u, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
								break;
							case "mapLightRepeat":
							case "mapLightOffset":
							case "mapLightWrap":
							case "mapLightAnisotropy":
								break;
							case "mapAO":
								h.aoMap = c(u, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
								break;
							case "mapAORepeat":
							case "mapAOOffset":
							case "mapAOWrap":
							case "mapAOAnisotropy":
								break;
							case "mapBump":
								h.bumpMap = c(u, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
								break;
							case "mapBumpScale":
								h.bumpScale = u;
								break;
							case "mapBumpRepeat":
							case "mapBumpOffset":
							case "mapBumpWrap":
							case "mapBumpAnisotropy":
								break;
							case "mapNormal":
								h.normalMap = c(u, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
								break;
							case "mapNormalFactor":
								h.normalScale = u;
								break;
							case "mapNormalRepeat":
							case "mapNormalOffset":
							case "mapNormalWrap":
							case "mapNormalAnisotropy":
								break;
							case "mapSpecular":
								h.specularMap = c(u, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
								break;
							case "mapSpecularRepeat":
							case "mapSpecularOffset":
							case "mapSpecularWrap":
							case "mapSpecularAnisotropy":
								break;
							case "mapMetalness":
								h.metalnessMap = c(u, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
								break;
							case "mapMetalnessRepeat":
							case "mapMetalnessOffset":
							case "mapMetalnessWrap":
							case "mapMetalnessAnisotropy":
								break;
							case "mapRoughness":
								h.roughnessMap = c(u, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
								break;
							case "mapRoughnessRepeat":
							case "mapRoughnessOffset":
							case "mapRoughnessWrap":
							case "mapRoughnessAnisotropy":
								break;
							case "mapAlpha":
								h.alphaMap = c(u, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
								break;
							case "mapAlphaRepeat":
							case "mapAlphaOffset":
							case "mapAlphaWrap":
							case "mapAlphaAnisotropy":
								break;
							case "flipSided":
								h.side = d;
								break;
							case "doubleSided":
								h.side = f;
								break;
							case "transparency":
								console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), h.opacity = u;
								break;
							case "depthTest":
							case "depthWrite":
							case "colorWrite":
							case "opacity":
							case "reflectivity":
							case "transparent":
							case "visible":
							case "wireframe":
								h[l] = u;
								break;
							case "vertexColors":
								!0 === u && (h.vertexColors = x), "face" === u && (h.vertexColors = y);
								break;
							default:
								console.error("THREE.Loader.createMaterial: Unsupported", l, u)
						}
					}
					return "MeshBasicMaterial" === h.type && delete h.emissive, "MeshPhongMaterial" !== h.type && delete h.specular, h.opacity < 1 && (h.transparent = !0), n.setTextures(s), n.parse(h)
				}
			}()
		});
		var El = {
			getContext: function() {
				return void 0 === fl && (fl = new(window.AudioContext || window.webkitAudioContext)), fl
			},
			setContext: function(t) {
				fl = t
			}
		};

		function Tl(t) {
			this.manager = void 0 !== t ? t : dh
		}

		function Al() {
			this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Vo, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Vo, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
		}

		function Ll(t, e, r, n) {
			Ai.call(this), this.type = "CubeCamera";
			var i = new Vo(90, 1, t, e);
			i.up.set(0, -1, 0), i.lookAt(new He(1, 0, 0)), this.add(i);
			var a = new Vo(90, 1, t, e);
			a.up.set(0, -1, 0), a.lookAt(new He(-1, 0, 0)), this.add(a);
			var o = new Vo(90, 1, t, e);
			o.up.set(0, 0, 1), o.lookAt(new He(0, 1, 0)), this.add(o);
			var s = new Vo(90, 1, t, e);
			s.up.set(0, 0, -1), s.lookAt(new He(0, -1, 0)), this.add(s);
			var c = new Vo(90, 1, t, e);
			c.up.set(0, -1, 0), c.lookAt(new He(0, 0, 1)), this.add(c);
			var h = new Vo(90, 1, t, e);
			h.up.set(0, -1, 0), h.lookAt(new He(0, 0, -1)), this.add(h), n = n || {
				format: Bt,
				magFilter: xt,
				minFilter: xt
			}, this.renderTarget = new Je(r, r, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
				null === this.parent && this.updateMatrixWorld();
				var r = t.getRenderTarget(),
					n = this.renderTarget,
					l = n.texture.generateMipmaps;
				n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, i, n), n.activeCubeFace = 1, t.render(e, a, n), n.activeCubeFace = 2, t.render(e, o, n), n.activeCubeFace = 3, t.render(e, s, n), n.activeCubeFace = 4, t.render(e, c, n), n.texture.generateMipmaps = l, n.activeCubeFace = 5, t.render(e, h, n), t.setRenderTarget(r)
			}, this.clear = function(t, e, r, n) {
				for (var i = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) a.activeCubeFace = o, t.setRenderTarget(a), t.clear(e, r, n);
				t.setRenderTarget(i)
			}
		}

		function Rl(t) {
			this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
		}

		function Cl() {
			Ai.call(this), this.type = "AudioListener", this.context = El.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0
		}

		function Pl(t) {
			Ai.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
		}

		function Ol(t) {
			Pl.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
		}

		function Il(t, e) {
			this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
		}

		function Dl(t, e, r) {
			this.binding = t, this.valueSize = r;
			var n, i = Float64Array;
			switch (e) {
				case "quaternion":
					n = this._slerp;
					break;
				case "string":
				case "bool":
					i = Array, n = this._select;
					break;
				default:
					n = this._lerp
			}
			this.buffer = new i(4 * r), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
		}
		exports.AudioContext = El, Object.assign(Tl.prototype, {
			load: function(t, e, r, n) {
				var i = new mh(this.manager);
				i.setResponseType("arraybuffer"), i.setPath(this.path), i.load(t, function(t) {
					var r = t.slice(0);
					El.getContext().decodeAudioData(r, function(t) {
						e(t)
					})
				}, r, n)
			},
			setPath: function(t) {
				return this.path = t, this
			}
		}), Object.assign(Al.prototype, {
			update: function() {
				var t, e, r, n, i, a, o, s, c = new Ue,
					h = new Ue;
				return function(l) {
					if (t !== this || e !== l.focus || r !== l.fov || n !== l.aspect * this.aspect || i !== l.near || a !== l.far || o !== l.zoom || s !== this.eyeSep) {
						t = this, e = l.focus, r = l.fov, n = l.aspect * this.aspect, i = l.near, a = l.far, o = l.zoom;
						var u, p, d = l.projectionMatrix.clone(),
							f = (s = this.eyeSep / 2) * i / e,
							m = i * Math.tan(ze.DEG2RAD * r * .5) / o;
						h.elements[12] = -s, c.elements[12] = s, u = -m * n + f, p = m * n + f, d.elements[0] = 2 * i / (p - u), d.elements[8] = (p + u) / (p - u), this.cameraL.projectionMatrix.copy(d), u = -m * n - f, p = m * n - f, d.elements[0] = 2 * i / (p - u), d.elements[8] = (p + u) / (p - u), this.cameraR.projectionMatrix.copy(d)
					}
					this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(h), this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)
				}
			}()
		}), Ll.prototype = Object.create(Ai.prototype), Ll.prototype.constructor = Ll, Object.assign(Rl.prototype, {
			start: function() {
				this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
			},
			stop: function() {
				this.getElapsedTime(), this.running = !1, this.autoStart = !1
			},
			getElapsedTime: function() {
				return this.getDelta(), this.elapsedTime
			},
			getDelta: function() {
				var t = 0;
				if (this.autoStart && !this.running) return this.start(), 0;
				if (this.running) {
					var e = ("undefined" == typeof performance ? Date : performance).now();
					t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
				}
				return t
			}
		}), Cl.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: Cl,
			getInput: function() {
				return this.gain
			},
			removeFilter: function() {
				return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
			},
			getFilter: function() {
				return this.filter
			},
			setFilter: function(t) {
				return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
			},
			getMasterVolume: function() {
				return this.gain.gain.value
			},
			setMasterVolume: function(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
			},
			updateMatrixWorld: function() {
				var t = new He,
					e = new Ge,
					r = new He,
					n = new He,
					i = new Rl;
				return function(a) {
					Ai.prototype.updateMatrixWorld.call(this, a);
					var o = this.context.listener,
						s = this.up;
					if (this.timeDelta = i.getDelta(), this.matrixWorld.decompose(t, e, r), n.set(0, 0, -1).applyQuaternion(e), o.positionX) {
						var c = this.context.currentTime + this.timeDelta;
						o.positionX.linearRampToValueAtTime(t.x, c), o.positionY.linearRampToValueAtTime(t.y, c), o.positionZ.linearRampToValueAtTime(t.z, c), o.forwardX.linearRampToValueAtTime(n.x, c), o.forwardY.linearRampToValueAtTime(n.y, c), o.forwardZ.linearRampToValueAtTime(n.z, c), o.upX.linearRampToValueAtTime(s.x, c), o.upY.linearRampToValueAtTime(s.y, c), o.upZ.linearRampToValueAtTime(s.z, c)
					} else o.setPosition(t.x, t.y, t.z), o.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z)
				}
			}()
		}), Pl.prototype = Object.assign(Object.create(Ai.prototype), {
			constructor: Pl,
			getOutput: function() {
				return this.gain
			},
			setNodeSource: function(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
			},
			setMediaElementSource: function(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
			},
			setBuffer: function(t) {
				return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
			},
			play: function() {
				if (!0 !== this.isPlaying) {
					if (!1 !== this.hasPlaybackControl) {
						var t = this.context.createBufferSource();
						return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
					}
					console.warn("THREE.Audio: this Audio has no playback control.")
				} else console.warn("THREE.Audio: Audio is already playing.")
			},
			pause: function() {
				if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
				console.warn("THREE.Audio: this Audio has no playback control.")
			},
			stop: function() {
				if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
				console.warn("THREE.Audio: this Audio has no playback control.")
			},
			connect: function() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput())
				} else this.source.connect(this.getOutput());
				return this
			},
			disconnect: function() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput())
				} else this.source.disconnect(this.getOutput());
				return this
			},
			getFilters: function() {
				return this.filters
			},
			setFilters: function(t) {
				return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
			},
			setDetune: function(t) {
				if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
			},
			getDetune: function() {
				return this.detune
			},
			getFilter: function() {
				return this.getFilters()[0]
			},
			setFilter: function(t) {
				return this.setFilters(t ? [t] : [])
			},
			setPlaybackRate: function(t) {
				if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
				console.warn("THREE.Audio: this Audio has no playback control.")
			},
			getPlaybackRate: function() {
				return this.playbackRate
			},
			onEnded: function() {
				this.isPlaying = !1
			},
			getLoop: function() {
				return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
			},
			setLoop: function(t) {
				if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
				console.warn("THREE.Audio: this Audio has no playback control.")
			},
			getVolume: function() {
				return this.gain.gain.value
			},
			setVolume: function(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
			}
		}), Ol.prototype = Object.assign(Object.create(Pl.prototype), {
			constructor: Ol,
			getOutput: function() {
				return this.panner
			},
			getRefDistance: function() {
				return this.panner.refDistance
			},
			setRefDistance: function(t) {
				return this.panner.refDistance = t, this
			},
			getRolloffFactor: function() {
				return this.panner.rolloffFactor
			},
			setRolloffFactor: function(t) {
				return this.panner.rolloffFactor = t, this
			},
			getDistanceModel: function() {
				return this.panner.distanceModel
			},
			setDistanceModel: function(t) {
				return this.panner.distanceModel = t, this
			},
			getMaxDistance: function() {
				return this.panner.maxDistance
			},
			setMaxDistance: function(t) {
				return this.panner.maxDistance = t, this
			},
			setDirectionalCone: function(t, e, r) {
				return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = r, this
			},
			updateMatrixWorld: function() {
				var t = new He,
					e = new Ge,
					r = new He,
					n = new He;
				return function(i) {
					if (Ai.prototype.updateMatrixWorld.call(this, i), !1 !== this.isPlaying) {
						this.matrixWorld.decompose(t, e, r), n.set(0, 0, 1).applyQuaternion(e);
						var a = this.panner;
						if (a.positionX) {
							var o = this.context.currentTime + this.listener.timeDelta;
							a.positionX.linearRampToValueAtTime(t.x, o), a.positionY.linearRampToValueAtTime(t.y, o), a.positionZ.linearRampToValueAtTime(t.z, o), a.orientationX.linearRampToValueAtTime(n.x, o), a.orientationY.linearRampToValueAtTime(n.y, o), a.orientationZ.linearRampToValueAtTime(n.z, o)
						} else a.setPosition(t.x, t.y, t.z), a.setOrientation(n.x, n.y, n.z)
					}
				}
			}()
		}), Object.assign(Il.prototype, {
			getFrequencyData: function() {
				return this.analyser.getByteFrequencyData(this.data), this.data
			},
			getAverageFrequency: function() {
				for (var t = 0, e = this.getFrequencyData(), r = 0; r < e.length; r++) t += e[r];
				return t / e.length
			}
		}), Object.assign(Dl.prototype, {
			accumulate: function(t, e) {
				var r = this.buffer,
					n = this.valueSize,
					i = t * n + n,
					a = this.cumulativeWeight;
				if (0 === a) {
					for (var o = 0; o !== n; ++o) r[i + o] = r[o];
					a = e
				} else {
					var s = e / (a += e);
					this._mixBufferRegion(r, i, 0, s, n)
				}
				this.cumulativeWeight = a
			},
			apply: function(t) {
				var e = this.valueSize,
					r = this.buffer,
					n = t * e + e,
					i = this.cumulativeWeight,
					a = this.binding;
				if (this.cumulativeWeight = 0, i < 1) {
					var o = 3 * e;
					this._mixBufferRegion(r, n, o, 1 - i, e)
				}
				for (var s = e, c = e + e; s !== c; ++s)
					if (r[s] !== r[s + e]) {
						a.setValue(r, n);
						break
					}
			},
			saveOriginalState: function() {
				var t = this.binding,
					e = this.buffer,
					r = this.valueSize,
					n = 3 * r;
				t.getValue(e, n);
				for (var i = r, a = n; i !== a; ++i) e[i] = e[n + i % r];
				this.cumulativeWeight = 0
			},
			restoreOriginalState: function() {
				var t = 3 * this.valueSize;
				this.binding.setValue(this.buffer, t)
			},
			_select: function(t, e, r, n, i) {
				if (n >= .5)
					for (var a = 0; a !== i; ++a) t[e + a] = t[r + a]
			},
			_slerp: function(t, e, r, n) {
				Ge.slerpFlat(t, e, t, e, t, r, n)
			},
			_lerp: function(t, e, r, n, i) {
				for (var a = 1 - n, o = 0; o !== i; ++o) {
					var s = e + o;
					t[s] = t[s] * a + t[r + o] * n
				}
			}
		});
		var Bl, Nl, zl = "\\[\\]\\.:\\/";

		function Fl(t, e, r) {
			var n = r || Ul.parseTrackName(e);
			this._targetGroup = t, this._bindings = t.subscribe_(e, n)
		}

		function Ul(t, e, r) {
			this.path = e, this.parsedPath = r || Ul.parseTrackName(e), this.node = Ul.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
		}

		function Gl() {
			this.uuid = ze.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
			var t = {};
			this._indicesByUUID = t;
			for (var e = 0, r = arguments.length; e !== r; ++e) t[arguments[e].uuid] = e;
			this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
			var n = this;
			this.stats = {
				objects: {get total() {
						return n._objects.length
					},
					get inUse() {
						return this.total - n.nCachedObjects_
					}
				},
				get bindingsPerObject() {
					return n._bindings.length
				}
			}
		}

		function Hl(t, e, r) {
			this._mixer = t, this._clip = e, this._localRoot = r || null;
			for (var n = e.tracks, i = n.length, a = new Array(i), o = {
					endingStart: ye,
					endingEnd: ye
				}, s = 0; s !== i; ++s) {
				var c = n[s].createInterpolant(null);
				a[s] = c, c.settings = o
			}
			this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = de, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
		}

		function Vl(t) {
			this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
		}

		function kl(t) {
			"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
		}

		function jl() {
			ki.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
		}

		function Wl(t, e, r) {
			ts.call(this, t, e), this.meshPerAttribute = r || 1
		}

		function ql(t, e, r, n) {
			"number" == typeof r && (n = r, r = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Ci.call(this, t, e, r), this.meshPerAttribute = n || 1
		}

		function Xl(t, e, r, n) {
			this.ray = new Qi(t, e), this.near = r || 0, this.far = n || 1 / 0, this.params = {
				Mesh: {},
				Line: {},
				LOD: {},
				Points: {
					threshold: 1
				},
				Sprite: {}
			}, Object.defineProperties(this.params, {
				PointCloud: {
					get: function() {
						return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
					}
				}
			})
		}

		function Yl(t, e) {
			return t.distance - e.distance
		}

		function Jl(t, e, r, n) {
			if (!1 !== t.visible && (t.raycast(e, r), !0 === n))
				for (var i = t.children, a = 0, o = i.length; a < o; a++) Jl(i[a], e, r, !0)
		}

		function Zl(t, e, r) {
			return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== r ? r : 0, this
		}

		function Ql(t, e, r) {
			return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== r ? r : 0, this
		}

		function Kl(t, e) {
			this.min = void 0 !== t ? t : new Fe(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Fe(-1 / 0, -1 / 0)
		}

		function $l(t, e) {
			this.start = void 0 !== t ? t : new He, this.end = void 0 !== e ? e : new He
		}

		function tu(t) {
			Ai.call(this), this.material = t, this.render = function() {}
		}

		function eu(t, e, r, n) {
			this.object = t, this.size = void 0 !== e ? e : 1;
			var i = void 0 !== r ? r : 16711680,
				a = void 0 !== n ? n : 1,
				o = 0,
				s = this.object.geometry;
			s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
			var c = new ki,
				h = new Fi(2 * o * 3, 3);
			c.addAttribute("position", h), ls.call(this, c, new cs({
				color: i,
				linewidth: a
			})), this.matrixAutoUpdate = !1, this.update()
		}

		function ru(t, e) {
			Ai.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
			for (var r = new ki, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1; i < 32; i++, a++) {
				var o = i / 32 * Math.PI * 2,
					s = a / 32 * Math.PI * 2;
				n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
			}
			r.addAttribute("position", new Fi(n, 3));
			var c = new cs({
				fog: !1
			});
			this.cone = new ls(r, c), this.add(this.cone), this.update()
		}

		function nu(t) {
			var e = [];
			t && t.isBone && e.push(t);
			for (var r = 0; r < t.children.length; r++) e.push.apply(e, nu(t.children[r]));
			return e
		}

		function iu(t) {
			for (var e = nu(t), r = new ki, n = [], i = [], a = new yi(0, 0, 1), o = new yi(0, 1, 0), s = 0; s < e.length; s++) {
				var c = e[s];
				c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b))
			}
			r.addAttribute("position", new Fi(n, 3)), r.addAttribute("color", new Fi(i, 3));
			var h = new cs({
				vertexColors: x,
				depthTest: !1,
				depthWrite: !1,
				transparent: !0
			});
			ls.call(this, r, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
		}

		function au(t, e, r) {
			this.light = t, this.light.updateMatrixWorld(), this.color = r;
			var n = new _c(e, 4, 2),
				i = new $i({
					wireframe: !0,
					fog: !1
				});
			ta.call(this, n, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
		}

		function ou(t, e) {
			this.type = "RectAreaLightHelper", this.light = t, this.color = e;
			var r = new ki;
			r.addAttribute("position", new Fi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), r.computeBoundingSphere();
			var n = new cs({
				fog: !1
			});
			hs.call(this, r, n);
			var i = new ki;
			i.addAttribute("position", new Fi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), i.computeBoundingSphere(), this.add(new ta(i, new $i({
				side: d,
				fog: !1
			}))), this.update()
		}

		function su(t, e, r) {
			Ai.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = r;
			var n = new Ts(e);
			n.rotateY(.5 * Math.PI), this.material = new $i({
				wireframe: !0,
				fog: !1
			}), void 0 === this.color && (this.material.vertexColors = x);
			var i = n.getAttribute("position"),
				a = new Float32Array(3 * i.count);
			n.addAttribute("color", new Ci(a, 3)), this.add(new ta(n, this.material)), this.update()
		}

		function cu(t, e, r, n) {
			t = t || 10, e = e || 10, r = new yi(void 0 !== r ? r : 4473924), n = new yi(void 0 !== n ? n : 8947848);
			for (var i = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
				s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
				var p = h === i ? r : n;
				p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3
			}
			var d = new ki;
			d.addAttribute("position", new Fi(s, 3)), d.addAttribute("color", new Fi(c, 3));
			var f = new cs({
				vertexColors: x
			});
			ls.call(this, d, f)
		}

		function hu(t, e, r, n, i, a) {
			t = t || 10, e = e || 16, r = r || 8, n = n || 64, i = new yi(void 0 !== i ? i : 4473924), a = new yi(void 0 !== a ? a : 8947848);
			var o, s, c, h, l, u, p, d = [],
				f = [];
			for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & h ? i : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
			for (h = 0; h <= r; h++)
				for (p = 1 & h ? i : a, u = t - t / r * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
			var m = new ki;
			m.addAttribute("position", new Fi(d, 3)), m.addAttribute("color", new Fi(f, 3));
			var g = new cs({
				vertexColors: x
			});
			ls.call(this, m, g)
		}

		function lu(t, e, r, n) {
			this.object = t, this.size = void 0 !== e ? e : 1;
			var i = void 0 !== r ? r : 16776960,
				a = void 0 !== n ? n : 1,
				o = 0,
				s = this.object.geometry;
			s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
			var c = new ki,
				h = new Fi(2 * o * 3, 3);
			c.addAttribute("position", h), ls.call(this, c, new cs({
				color: i,
				linewidth: a
			})), this.matrixAutoUpdate = !1, this.update()
		}

		function uu(t, e, r) {
			Ai.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = r, void 0 === e && (e = 1);
			var n = new ki;
			n.addAttribute("position", new Fi([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
			var i = new cs({
				fog: !1
			});
			this.lightPlane = new hs(n, i), this.add(this.lightPlane), (n = new ki).addAttribute("position", new Fi([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new hs(n, i), this.add(this.targetLine), this.update()
		}

		function pu(t) {
			var e = new ki,
				r = new cs({
					color: 16777215,
					vertexColors: y
				}),
				n = [],
				i = [],
				a = {},
				o = new yi(16755200),
				s = new yi(16711680),
				c = new yi(43775),
				h = new yi(16777215),
				l = new yi(3355443);

			function u(t, e, r) {
				p(t, r), p(e, r)
			}

			function p(t, e) {
				n.push(0, 0, 0), i.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1)
			}
			u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.addAttribute("position", new Fi(n, 3)), e.addAttribute("color", new Fi(i, 3)), ls.call(this, e, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
		}

		function du(t, e) {
			this.object = t, void 0 === e && (e = 16776960);
			var r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
				n = new Float32Array(24),
				i = new ki;
			i.setIndex(new Ci(r, 1)), i.addAttribute("position", new Ci(n, 3)), ls.call(this, i, new cs({
				color: e
			})), this.matrixAutoUpdate = !1, this.update()
		}

		function fu(t, e) {
			this.type = "Box3Helper", this.box = t;
			var r = void 0 !== e ? e : 16776960,
				n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
				i = new ki;
			i.setIndex(new Ci(n, 1)), i.addAttribute("position", new Fi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), ls.call(this, i, new cs({
				color: r
			})), this.geometry.computeBoundingSphere()
		}

		function mu(t, e, r) {
			this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
			var n = void 0 !== r ? r : 16776960,
				i = new ki;
			i.addAttribute("position", new Fi([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), i.computeBoundingSphere(), hs.call(this, i, new cs({
				color: n
			}));
			var a = new ki;
			a.addAttribute("position", new Fi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new ta(a, new $i({
				color: n,
				opacity: .2,
				transparent: !0,
				depthWrite: !1
			})))
		}

		function gu(t, e, r, n, i, a) {
			Ai.call(this), void 0 === t && (t = new He(0, 0, 1)), void 0 === e && (e = new He(0, 0, 0)), void 0 === r && (r = 1), void 0 === n && (n = 16776960), void 0 === i && (i = .2 * r), void 0 === a && (a = .2 * i), void 0 === Bl && ((Bl = new ki).addAttribute("position", new Fi([0, 0, 0, 0, 1, 0], 3)), (Nl = new Oc(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new hs(Bl, new cs({
				color: n
			})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ta(Nl, new $i({
				color: n
			})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(r, i, a)
		}

		function vu(t) {
			var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
				r = new ki;
			r.addAttribute("position", new Fi(e, 3)), r.addAttribute("color", new Fi([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
			var n = new cs({
				vertexColors: x
			});
			ls.call(this, r, n)
		}

		function yu(t, e, r, n, i, a, o) {
			return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new Mi(t, e, r, i, a, o)
		}
		Object.assign(Fl.prototype, {
			getValue: function(t, e) {
				this.bind();
				var r = this._targetGroup.nCachedObjects_,
					n = this._bindings[r];
				void 0 !== n && n.getValue(t, e)
			},
			setValue: function(t, e) {
				for (var r = this._bindings, n = this._targetGroup.nCachedObjects_, i = r.length; n !== i; ++n) r[n].setValue(t, e)
			},
			bind: function() {
				for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e) t[e].bind()
			},
			unbind: function() {
				for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e) t[e].unbind()
			}
		}), Object.assign(Ul, {
			Composite: Fl,
			create: function(t, e, r) {
				return t && t.isAnimationObjectGroup ? new Ul.Composite(t, e, r) : new Ul(t, e, r)
			},
			sanitizeNodeName: function() {
				var t = new RegExp("[" + zl + "]", "g");
				return function(e) {
					return e.replace(/\s/g, "_").replace(t, "")
				}
			}(),
			parseTrackName: function() {
				var t = "[^" + zl + "]",
					e = "[^" + zl.replace("\\.", "") + "]",
					r = /((?:WC+[\/:])*)/.source.replace("WC", t),
					n = /(WCOD+)?/.source.replace("WCOD", e),
					i = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", t),
					a = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", t),
					o = new RegExp("^" + r + n + i + a + "$"),
					s = ["material", "materials", "bones"];
				return function(t) {
					var e = o.exec(t);
					if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
					var r = {
							nodeName: e[2],
							objectName: e[3],
							objectIndex: e[4],
							propertyName: e[5],
							propertyIndex: e[6]
						},
						n = r.nodeName && r.nodeName.lastIndexOf(".");
					if (void 0 !== n && -1 !== n) {
						var i = r.nodeName.substring(n + 1); - 1 !== s.indexOf(i) && (r.nodeName = r.nodeName.substring(0, n), r.objectName = i)
					}
					if (null === r.propertyName || 0 === r.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
					return r
				}
			}(),
			findNode: function(t, e) {
				if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
				if (t.skeleton) {
					var r = t.skeleton.getBoneByName(e);
					if (void 0 !== r) return r
				}
				if (t.children) {
					var n = function(t) {
							for (var r = 0; r < t.length; r++) {
								var i = t[r];
								if (i.name === e || i.uuid === e) return i;
								var a = n(i.children);
								if (a) return a
							}
							return null
						},
						i = n(t.children);
					if (i) return i
				}
				return null
			}
		}), Object.assign(Ul.prototype, {
			_getValue_unavailable: function() {},
			_setValue_unavailable: function() {},
			BindingType: {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3
			},
			Versioning: {
				None: 0,
				NeedsUpdate: 1,
				MatrixWorldNeedsUpdate: 2
			},
			GetterByBindingType: [function(t, e) {
				t[e] = this.node[this.propertyName]
			}, function(t, e) {
				for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n) t[e++] = r[n]
			}, function(t, e) {
				t[e] = this.resolvedProperty[this.propertyIndex]
			}, function(t, e) {
				this.resolvedProperty.toArray(t, e)
			}],
			SetterByBindingTypeAndVersioning: [
				[function(t, e) {
					this.targetObject[this.propertyName] = t[e]
				}, function(t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n) r[n] = t[e++]
				}, function(t, e) {
					for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n) r[n] = t[e++];
					this.targetObject.needsUpdate = !0
				}, function(t, e) {
					for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n) r[n] = t[e++];
					this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e]
				}, function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					this.resolvedProperty.fromArray(t, e)
				}, function(t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
				}]
			],
			getValue: function(t, e) {
				this.bind(), this.getValue(t, e)
			},
			setValue: function(t, e) {
				this.bind(), this.setValue(t, e)
			},
			bind: function() {
				var t = this.node,
					e = this.parsedPath,
					r = e.objectName,
					n = e.propertyName,
					i = e.propertyIndex;
				if (t || (t = Ul.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
					if (r) {
						var a = e.objectIndex;
						switch (r) {
							case "materials":
								if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
								if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
								t = t.material.materials;
								break;
							case "bones":
								if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
								t = t.skeleton.bones;
								for (var o = 0; o < t.length; o++)
									if (t[o].name === a) {
										a = o;
										break
									}
								break;
							default:
								if (void 0 === t[r]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
								t = t[r]
						}
						if (void 0 !== a) {
							if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
							t = t[a]
						}
					}
					var s = t[n];
					if (void 0 !== s) {
						var c = this.Versioning.None;
						this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
						var h = this.BindingType.Direct;
						if (void 0 !== i) {
							if ("morphTargetInfluences" === n) {
								if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
								if (t.geometry.isBufferGeometry) {
									if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
									for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
										if (t.geometry.morphAttributes.position[o].name === i) {
											i = o;
											break
										}
								} else {
									if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
									for (o = 0; o < this.node.geometry.morphTargets.length; o++)
										if (t.geometry.morphTargets[o].name === i) {
											i = o;
											break
										}
								}
							}
							h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
						} else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
						this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
					} else {
						var l = e.nodeName;
						console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
					}
				} else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
			},
			unbind: function() {
				this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
			}
		}), Object.assign(Ul.prototype, {
			_getValue_unbound: Ul.prototype.getValue,
			_setValue_unbound: Ul.prototype.setValue
		}), Object.assign(Gl.prototype, {
			isAnimationObjectGroup: !0,
			add: function() {
				for (var t = this._objects, e = t.length, r = this.nCachedObjects_, n = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
					var u = arguments[h],
						p = u.uuid,
						d = n[p];
					if (void 0 === d) {
						d = e++, n[p] = d, t.push(u);
						for (var f = 0, m = s; f !== m; ++f) o[f].push(new Ul(u, i[f], a[f]))
					} else if (d < r) {
						c = t[d];
						var g = --r,
							v = t[g];
						n[v.uuid] = d, t[d] = v, n[p] = g, t[g] = u;
						for (f = 0, m = s; f !== m; ++f) {
							var y = o[f],
								x = y[g],
								b = y[d];
							y[d] = x, void 0 === b && (b = new Ul(u, i[f], a[f])), y[g] = b
						}
					} else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
				}
				this.nCachedObjects_ = r
			},
			remove: function() {
				for (var t = this._objects, e = this.nCachedObjects_, r = this._indicesByUUID, n = this._bindings, i = n.length, a = 0, o = arguments.length; a !== o; ++a) {
					var s = arguments[a],
						c = s.uuid,
						h = r[c];
					if (void 0 !== h && h >= e) {
						var l = e++,
							u = t[l];
						r[u.uuid] = h, t[h] = u, r[c] = l, t[l] = s;
						for (var p = 0, d = i; p !== d; ++p) {
							var f = n[p],
								m = f[l],
								g = f[h];
							f[h] = m, f[l] = g
						}
					}
				}
				this.nCachedObjects_ = e
			},
			uncache: function() {
				for (var t = this._objects, e = t.length, r = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
					var c = arguments[o].uuid,
						h = n[c];
					if (void 0 !== h)
						if (delete n[c], h < r) {
							var l = --r,
								u = t[l],
								p = t[v = --e];
							n[u.uuid] = h, t[h] = u, n[p.uuid] = l, t[l] = p, t.pop();
							for (var d = 0, f = a; d !== f; ++d) {
								var m = (y = i[d])[l],
									g = y[v];
								y[h] = m, y[l] = g, y.pop()
							}
						} else {
							var v;
							n[(p = t[v = --e]).uuid] = h, t[h] = p, t.pop();
							for (d = 0, f = a; d !== f; ++d) {
								var y;
								(y = i[d])[h] = y[v], y.pop()
							}
						}
				}
				this.nCachedObjects_ = r
			},
			subscribe_: function(t, e) {
				var r = this._bindingsIndicesByPath,
					n = r[t],
					i = this._bindings;
				if (void 0 !== n) return i[n];
				var a = this._paths,
					o = this._parsedPaths,
					s = this._objects,
					c = s.length,
					h = this.nCachedObjects_,
					l = new Array(c);
				n = i.length, r[t] = n, a.push(t), o.push(e), i.push(l);
				for (var u = h, p = s.length; u !== p; ++u) {
					var d = s[u];
					l[u] = new Ul(d, t, e)
				}
				return l
			},
			unsubscribe_: function(t) {
				var e = this._bindingsIndicesByPath,
					r = e[t];
				if (void 0 !== r) {
					var n = this._paths,
						i = this._parsedPaths,
						a = this._bindings,
						o = a.length - 1,
						s = a[o];
					e[t[o]] = r, a[r] = s, a.pop(), i[r] = i[o], i.pop(), n[r] = n[o], n.pop()
				}
			}
		}), Object.assign(Hl.prototype, {
			play: function() {
				return this._mixer._activateAction(this), this
			},
			stop: function() {
				return this._mixer._deactivateAction(this), this.reset()
			},
			reset: function() {
				return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
			},
			isRunning: function() {
				return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
			},
			isScheduled: function() {
				return this._mixer._isActiveAction(this)
			},
			startAt: function(t) {
				return this._startTime = t, this
			},
			setLoop: function(t, e) {
				return this.loop = t, this.repetitions = e, this
			},
			setEffectiveWeight: function(t) {
				return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
			},
			getEffectiveWeight: function() {
				return this._effectiveWeight
			},
			fadeIn: function(t) {
				return this._scheduleFading(t, 0, 1)
			},
			fadeOut: function(t) {
				return this._scheduleFading(t, 1, 0)
			},
			crossFadeFrom: function(t, e, r) {
				if (t.fadeOut(e), this.fadeIn(e), r) {
					var n = this._clip.duration,
						i = t._clip.duration,
						a = i / n,
						o = n / i;
					t.warp(1, a, e), this.warp(o, 1, e)
				}
				return this
			},
			crossFadeTo: function(t, e, r) {
				return t.crossFadeFrom(this, e, r)
			},
			stopFading: function() {
				var t = this._weightInterpolant;
				return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
			},
			setEffectiveTimeScale: function(t) {
				return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
			},
			getEffectiveTimeScale: function() {
				return this._effectiveTimeScale
			},
			setDuration: function(t) {
				return this.timeScale = this._clip.duration / t, this.stopWarping()
			},
			syncWith: function(t) {
				return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
			},
			halt: function(t) {
				return this.warp(this._effectiveTimeScale, 0, t)
			},
			warp: function(t, e, r) {
				var n = this._mixer,
					i = n.time,
					a = this._timeScaleInterpolant,
					o = this.timeScale;
				null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
				var s = a.parameterPositions,
					c = a.sampleValues;
				return s[0] = i, s[1] = i + r, c[0] = t / o, c[1] = e / o, this
			},
			stopWarping: function() {
				var t = this._timeScaleInterpolant;
				return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
			},
			getMixer: function() {
				return this._mixer
			},
			getClip: function() {
				return this._clip
			},
			getRoot: function() {
				return this._localRoot || this._mixer._root
			},
			_update: function(t, e, r, n) {
				if (this.enabled) {
					var i = this._startTime;
					if (null !== i) {
						var a = (t - i) * r;
						if (a < 0 || 0 === r) return;
						this._startTime = null, e = r * a
					}
					e *= this._updateTimeScale(t);
					var o = this._updateTime(e),
						s = this._updateWeight(t);
					if (s > 0)
						for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
				} else this._updateWeight(t)
			},
			_updateWeight: function(t) {
				var e = 0;
				if (this.enabled) {
					e = this.weight;
					var r = this._weightInterpolant;
					if (null !== r) {
						var n = r.evaluate(t)[0];
						e *= n, t > r.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
					}
				}
				return this._effectiveWeight = e, e
			},
			_updateTimeScale: function(t) {
				var e = 0;
				if (!this.paused) {
					e = this.timeScale;
					var r = this._timeScaleInterpolant;
					if (null !== r) e *= r.evaluate(t)[0], t > r.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
				}
				return this._effectiveTimeScale = e, e
			},
			_updateTime: function(t) {
				var e = this.time + t,
					r = this._clip.duration,
					n = this.loop,
					i = this._loopCount,
					a = n === fe;
				if (0 === t) return -1 === i ? e : a && 1 == (1 & i) ? r - e : e;
				if (n === pe) {
					-1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));
					t: {
						if (e >= r) e = r;
						else {
							if (!(e < 0)) break t;
							e = 0
						}
						this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t < 0 ? -1 : 1
						})
					}
				} else {
					if (-1 === i && (t >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= r || e < 0) {
						var o = Math.floor(e / r);
						e -= r * o, i += Math.abs(o);
						var s = this.repetitions - i;
						if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? r : 0, this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t > 0 ? 1 : -1
						});
						else {
							if (1 === s) {
								var c = t < 0;
								this._setEndings(c, !c, a)
							} else this._setEndings(!1, !1, a);
							this._loopCount = i, this._mixer.dispatchEvent({
								type: "loop",
								action: this,
								loopDelta: o
							})
						}
					}
					if (a && 1 == (1 & i)) return this.time = e, r - e
				}
				return this.time = e, e
			},
			_setEndings: function(t, e, r) {
				var n = this._interpolantSettings;
				r ? (n.endingStart = xe, n.endingEnd = xe) : (n.endingStart = t ? this.zeroSlopeAtStart ? xe : ye : be, n.endingEnd = e ? this.zeroSlopeAtEnd ? xe : ye : be)
			},
			_scheduleFading: function(t, e, r) {
				var n = this._mixer,
					i = n.time,
					a = this._weightInterpolant;
				null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
				var o = a.parameterPositions,
					s = a.sampleValues;
				return o[0] = i, s[0] = e, o[1] = i + t, s[1] = r, this
			}
		}), Vl.prototype = Object.assign(Object.create(t.prototype), {
			constructor: Vl,
			_bindAction: function(t, e) {
				var r = t._localRoot || this._root,
					n = t._clip.tracks,
					i = n.length,
					a = t._propertyBindings,
					o = t._interpolants,
					s = r.uuid,
					c = this._bindingsByRootAndName,
					h = c[s];
				void 0 === h && (h = {}, c[s] = h);
				for (var l = 0; l !== i; ++l) {
					var u = n[l],
						p = u.name,
						d = h[p];
					if (void 0 !== d) a[l] = d;
					else {
						if (void 0 !== (d = a[l])) {
							null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
							continue
						}
						var f = e && e._propertyBindings[l].binding.parsedPath;
						++(d = new Dl(Ul.create(r, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
					}
					o[l].resultBuffer = d.buffer
				}
			},
			_activateAction: function(t) {
				if (!this._isActiveAction(t)) {
					if (null === t._cacheIndex) {
						var e = (t._localRoot || this._root).uuid,
							r = t._clip.uuid,
							n = this._actionsByClip[r];
						this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, r, e)
					}
					for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
						var s = i[a];
						0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
					}
					this._lendAction(t)
				}
			},
			_deactivateAction: function(t) {
				if (this._isActiveAction(t)) {
					for (var e = t._propertyBindings, r = 0, n = e.length; r !== n; ++r) {
						var i = e[r];
						0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
					}
					this._takeBackAction(t)
				}
			},
			_initMemoryManager: function() {
				this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
				var t = this;
				this.stats = {
					actions: {get total() {
							return t._actions.length
						},
						get inUse() {
							return t._nActiveActions
						}
					},
					bindings: {get total() {
							return t._bindings.length
						},
						get inUse() {
							return t._nActiveBindings
						}
					},
					controlInterpolants: {get total() {
							return t._controlInterpolants.length
						},
						get inUse() {
							return t._nActiveControlInterpolants
						}
					}
				}
			},
			_isActiveAction: function(t) {
				var e = t._cacheIndex;
				return null !== e && e < this._nActiveActions
			},
			_addInactiveAction: function(t, e, r) {
				var n = this._actions,
					i = this._actionsByClip,
					a = i[e];
				if (void 0 === a) a = {
					knownActions: [t],
					actionByRoot: {}
				}, t._byClipCacheIndex = 0, i[e] = a;
				else {
					var o = a.knownActions;
					t._byClipCacheIndex = o.length, o.push(t)
				}
				t._cacheIndex = n.length, n.push(t), a.actionByRoot[r] = t
			},
			_removeInactiveAction: function(t) {
				var e = this._actions,
					r = e[e.length - 1],
					n = t._cacheIndex;
				r._cacheIndex = n, e[n] = r, e.pop(), t._cacheIndex = null;
				var i = t._clip.uuid,
					a = this._actionsByClip,
					o = a[i],
					s = o.knownActions,
					c = s[s.length - 1],
					h = t._byClipCacheIndex;
				c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[i], this._removeInactiveBindingsForAction(t)
			},
			_removeInactiveBindingsForAction: function(t) {
				for (var e = t._propertyBindings, r = 0, n = e.length; r !== n; ++r) {
					var i = e[r];
					0 == --i.referenceCount && this._removeInactiveBinding(i)
				}
			},
			_lendAction: function(t) {
				var e = this._actions,
					r = t._cacheIndex,
					n = this._nActiveActions++,
					i = e[n];
				t._cacheIndex = n, e[n] = t, i._cacheIndex = r, e[r] = i
			},
			_takeBackAction: function(t) {
				var e = this._actions,
					r = t._cacheIndex,
					n = --this._nActiveActions,
					i = e[n];
				t._cacheIndex = n, e[n] = t, i._cacheIndex = r, e[r] = i
			},
			_addInactiveBinding: function(t, e, r) {
				var n = this._bindingsByRootAndName,
					i = n[e],
					a = this._bindings;
				void 0 === i && (i = {}, n[e] = i), i[r] = t, t._cacheIndex = a.length, a.push(t)
			},
			_removeInactiveBinding: function(t) {
				var e = this._bindings,
					r = t.binding,
					n = r.rootNode.uuid,
					i = r.path,
					a = this._bindingsByRootAndName,
					o = a[n],
					s = e[e.length - 1],
					c = t._cacheIndex;
				s._cacheIndex = c, e[c] = s, e.pop(), delete o[i];
				t: {
					for (var h in o) break t;
					delete a[n]
				}
			},
			_lendBinding: function(t) {
				var e = this._bindings,
					r = t._cacheIndex,
					n = this._nActiveBindings++,
					i = e[n];
				t._cacheIndex = n, e[n] = t, i._cacheIndex = r, e[r] = i
			},
			_takeBackBinding: function(t) {
				var e = this._bindings,
					r = t._cacheIndex,
					n = --this._nActiveBindings,
					i = e[n];
				t._cacheIndex = n, e[n] = t, i._cacheIndex = r, e[r] = i
			},
			_lendControlInterpolant: function() {
				var t = this._controlInterpolants,
					e = this._nActiveControlInterpolants++,
					r = t[e];
				return void 0 === r && ((r = new Kc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = r), r
			},
			_takeBackControlInterpolant: function(t) {
				var e = this._controlInterpolants,
					r = t.__cacheIndex,
					n = --this._nActiveControlInterpolants,
					i = e[n];
				t.__cacheIndex = n, e[n] = t, i.__cacheIndex = r, e[r] = i
			},
			_controlInterpolantsResultBuffer: new Float32Array(1),
			clipAction: function(t, e) {
				var r = e || this._root,
					n = r.uuid,
					i = "string" == typeof t ? ch.findByName(r, t) : t,
					a = null !== i ? i.uuid : t,
					o = this._actionsByClip[a],
					s = null;
				if (void 0 !== o) {
					var c = o.actionByRoot[n];
					if (void 0 !== c) return c;
					s = o.knownActions[0], null === i && (i = s._clip)
				}
				if (null === i) return null;
				var h = new Hl(this, i, e);
				return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
			},
			existingAction: function(t, e) {
				var r = e || this._root,
					n = r.uuid,
					i = "string" == typeof t ? ch.findByName(r, t) : t,
					a = i ? i.uuid : t,
					o = this._actionsByClip[a];
				return void 0 !== o && o.actionByRoot[n] || null
			},
			stopAllAction: function() {
				var t = this._actions,
					e = this._nActiveActions,
					r = this._bindings,
					n = this._nActiveBindings;
				this._nActiveActions = 0, this._nActiveBindings = 0;
				for (var i = 0; i !== e; ++i) t[i].reset();
				for (i = 0; i !== n; ++i) r[i].useCount = 0;
				return this
			},
			update: function(t) {
				t *= this.timeScale;
				for (var e = this._actions, r = this._nActiveActions, n = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== r; ++o) {
					e[o]._update(n, t, i, a)
				}
				var s = this._bindings,
					c = this._nActiveBindings;
				for (o = 0; o !== c; ++o) s[o].apply(a);
				return this
			},
			getRoot: function() {
				return this._root
			},
			uncacheClip: function(t) {
				var e = this._actions,
					r = t.uuid,
					n = this._actionsByClip,
					i = n[r];
				if (void 0 !== i) {
					for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
						var c = a[o];
						this._deactivateAction(c);
						var h = c._cacheIndex,
							l = e[e.length - 1];
						c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction(c)
					}
					delete n[r]
				}
			},
			uncacheRoot: function(t) {
				var e = t.uuid,
					r = this._actionsByClip;
				for (var n in r) {
					var i = r[n].actionByRoot[e];
					void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
				}
				var a = this._bindingsByRootAndName[e];
				if (void 0 !== a)
					for (var o in a) {
						var s = a[o];
						s.restoreOriginalState(), this._removeInactiveBinding(s)
					}
			},
			uncacheAction: function(t, e) {
				var r = this.existingAction(t, e);
				null !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
			}
		}), kl.prototype.clone = function() {
			return new kl(void 0 === this.value.clone ? this.value : this.value.clone())
		}, jl.prototype = Object.assign(Object.create(ki.prototype), {
			constructor: jl,
			isInstancedBufferGeometry: !0,
			copy: function(t) {
				return ki.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			}
		}), Wl.prototype = Object.assign(Object.create(ts.prototype), {
			constructor: Wl,
			isInstancedInterleavedBuffer: !0,
			copy: function(t) {
				return ts.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			}
		}), ql.prototype = Object.assign(Object.create(Ci.prototype), {
			constructor: ql,
			isInstancedBufferAttribute: !0,
			copy: function(t) {
				return Ci.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			}
		}), Object.assign(Xl.prototype, {
			linePrecision: 1,
			set: function(t, e) {
				this.ray.set(t, e)
			},
			setFromCamera: function(t, e) {
				e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
			},
			intersectObject: function(t, e, r) {
				var n = r || [];
				return Jl(t, this, n, e), n.sort(Yl), n
			},
			intersectObjects: function(t, e, r) {
				var n = r || [];
				if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
				for (var i = 0, a = t.length; i < a; i++) Jl(t[i], this, n, e);
				return n.sort(Yl), n
			}
		}), Object.assign(Zl.prototype, {
			set: function(t, e, r) {
				return this.radius = t, this.phi = e, this.theta = r, this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
			},
			makeSafe: function() {
				return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
			},
			setFromVector3: function(t) {
				return this.setFromCartesianCoords(t.x, t.y, t.z)
			},
			setFromCartesianCoords: function(t, e, r) {
				return this.radius = Math.sqrt(t * t + e * e + r * r), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, r), this.phi = Math.acos(ze.clamp(e / this.radius, -1, 1))), this
			}
		}), Object.assign(Ql.prototype, {
			set: function(t, e, r) {
				return this.radius = t, this.theta = e, this.y = r, this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
			},
			setFromVector3: function(t) {
				return this.setFromCartesianCoords(t.x, t.y, t.z)
			},
			setFromCartesianCoords: function(t, e, r) {
				return this.radius = Math.sqrt(t * t + r * r), this.theta = Math.atan2(t, r), this.y = e, this
			}
		}), Object.assign(Kl.prototype, {
			set: function(t, e) {
				return this.min.copy(t), this.max.copy(e), this
			},
			setFromPoints: function(t) {
				this.makeEmpty();
				for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
				return this
			},
			setFromCenterAndSize: function() {
				var t = new Fe;
				return function(e, r) {
					var n = t.copy(r).multiplyScalar(.5);
					return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
				}
			}(),
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this
			},
			makeEmpty: function() {
				return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
			},
			isEmpty: function() {
				return this.max.x < this.min.x || this.max.y < this.min.y
			},
			getCenter: function(t) {
				return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new Fe), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
			},
			getSize: function(t) {
				return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new Fe), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
			},
			expandByPoint: function(t) {
				return this.min.min(t), this.max.max(t), this
			},
			expandByVector: function(t) {
				return this.min.sub(t), this.max.add(t), this
			},
			expandByScalar: function(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this
			},
			containsPoint: function(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
			},
			containsBox: function(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
			},
			getParameter: function(t, e) {
				return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new Fe), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
			},
			intersectsBox: function(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
			},
			clampPoint: function(t, e) {
				return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new Fe), e.copy(t).clamp(this.min, this.max)
			},
			distanceToPoint: function() {
				var t = new Fe;
				return function(e) {
					return t.copy(e).clamp(this.min, this.max).sub(e).length()
				}
			}(),
			intersect: function(t) {
				return this.min.max(t.min), this.max.min(t.max), this
			},
			union: function(t) {
				return this.min.min(t.min), this.max.max(t.max), this
			},
			translate: function(t) {
				return this.min.add(t), this.max.add(t), this
			},
			equals: function(t) {
				return t.min.equals(this.min) && t.max.equals(this.max)
			}
		}), Object.assign($l.prototype, {
			set: function(t, e) {
				return this.start.copy(t), this.end.copy(e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.start.copy(t.start), this.end.copy(t.end), this
			},
			getCenter: function(t) {
				return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new He), t.addVectors(this.start, this.end).multiplyScalar(.5)
			},
			delta: function(t) {
				return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new He), t.subVectors(this.end, this.start)
			},
			distanceSq: function() {
				return this.start.distanceToSquared(this.end)
			},
			distance: function() {
				return this.start.distanceTo(this.end)
			},
			at: function(t, e) {
				return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new He), this.delta(e).multiplyScalar(t).add(this.start)
			},
			closestPointToPointParameter: function() {
				var t = new He,
					e = new He;
				return function(r, n) {
					t.subVectors(r, this.start), e.subVectors(this.end, this.start);
					var i = e.dot(e),
						a = e.dot(t) / i;
					return n && (a = ze.clamp(a, 0, 1)), a
				}
			}(),
			closestPointToPoint: function(t, e, r) {
				var n = this.closestPointToPointParameter(t, e);
				return void 0 === r && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), r = new He), this.delta(r).multiplyScalar(n).add(this.start)
			},
			applyMatrix4: function(t) {
				return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
			},
			equals: function(t) {
				return t.start.equals(this.start) && t.end.equals(this.end)
			}
		}), tu.prototype = Object.create(Ai.prototype), tu.prototype.constructor = tu, tu.prototype.isImmediateRenderObject = !0, eu.prototype = Object.create(ls.prototype), eu.prototype.constructor = eu, eu.prototype.update = function() {
			var t = new He,
				e = new He,
				r = new Ve;
			return function() {
				var n = ["a", "b", "c"];
				this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
				var i = this.object.matrixWorld,
					a = this.geometry.attributes.position,
					o = this.object.geometry;
				if (o && o.isGeometry)
					for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
						for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
							var m = s[p[n[d]]],
								g = p.vertexNormals[d];
							t.copy(m).applyMatrix4(i), e.copy(g).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
						} else if (o && o.isBufferGeometry) {
							var v = o.attributes.position,
								y = o.attributes.normal;
							for (h = 0, d = 0, f = v.count; d < f; d++) t.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(i), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(r).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
						}
				a.needsUpdate = !0
			}
		}(), ru.prototype = Object.create(Ai.prototype), ru.prototype.constructor = ru, ru.prototype.dispose = function() {
			this.cone.geometry.dispose(), this.cone.material.dispose()
		}, ru.prototype.update = function() {
			var t = new He;
			return function() {
				this.light.updateMatrixWorld();
				var e = this.light.distance ? this.light.distance : 1e3,
					r = e * Math.tan(this.light.angle);
				this.cone.scale.set(r, r, e), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
			}
		}(), iu.prototype = Object.create(ls.prototype), iu.prototype.constructor = iu, iu.prototype.updateMatrixWorld = function() {
			var t = new He,
				e = new Ue,
				r = new Ue;
			return function(n) {
				var i = this.bones,
					a = this.geometry,
					o = a.getAttribute("position");
				r.getInverse(this.root.matrixWorld);
				for (var s = 0, c = 0; s < i.length; s++) {
					var h = i[s];
					h.parent && h.parent.isBone && (e.multiplyMatrices(r, h.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(r, h.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
				}
				a.getAttribute("position").needsUpdate = !0, Ai.prototype.updateMatrixWorld.call(this, n)
			}
		}(), au.prototype = Object.create(ta.prototype), au.prototype.constructor = au, au.prototype.dispose = function() {
			this.geometry.dispose(), this.material.dispose()
		}, au.prototype.update = function() {
			void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
		}, ou.prototype = Object.create(hs.prototype), ou.prototype.constructor = ou, ou.prototype.update = function() {
			if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1), void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
			else {
				this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
				var t = this.material.color,
					e = Math.max(t.r, t.g, t.b);
				e > 1 && t.multiplyScalar(1 / e), this.children[0].material.color.copy(this.material.color)
			}
		}, ou.prototype.dispose = function() {
			this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, su.prototype = Object.create(Ai.prototype), su.prototype.constructor = su, su.prototype.dispose = function() {
			this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, su.prototype.update = function() {
			var t = new He,
				e = new yi,
				r = new yi;
			return function() {
				var n = this.children[0];
				if (void 0 !== this.color) this.material.color.set(this.color);
				else {
					var i = n.geometry.getAttribute("color");
					e.copy(this.light.color), r.copy(this.light.groundColor);
					for (var a = 0, o = i.count; a < o; a++) {
						var s = a < o / 2 ? e : r;
						i.setXYZ(a, s.r, s.g, s.b)
					}
					i.needsUpdate = !0
				}
				n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
			}
		}(), cu.prototype = Object.create(ls.prototype), cu.prototype.constructor = cu, hu.prototype = Object.create(ls.prototype), hu.prototype.constructor = hu, lu.prototype = Object.create(ls.prototype), lu.prototype.constructor = lu, lu.prototype.update = function() {
			var t = new He,
				e = new He,
				r = new Ve;
			return function() {
				this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
				for (var n = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
					var u = s[h],
						p = u.normal;
					t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t), i.setXYZ(c, t.x, t.y, t.z), c += 1, i.setXYZ(c, e.x, e.y, e.z), c += 1
				}
				i.needsUpdate = !0
			}
		}(), uu.prototype = Object.create(Ai.prototype), uu.prototype.constructor = uu, uu.prototype.dispose = function() {
			this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
		}, uu.prototype.update = function() {
			var t = new He,
				e = new He,
				r = new He;
			return function() {
				t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(e, t), this.lightPlane.lookAt(e), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(e), this.targetLine.scale.z = r.length()
			}
		}(), pu.prototype = Object.create(ls.prototype), pu.prototype.constructor = pu, pu.prototype.update = function() {
			var t, e, r = new He,
				n = new Ho;

			function i(i, a, o, s) {
				r.set(a, o, s).unproject(n);
				var c = e[i];
				if (void 0 !== c)
					for (var h = t.getAttribute("position"), l = 0, u = c.length; l < u; l++) h.setXYZ(c[l], r.x, r.y, r.z)
			}
			return function() {
				t = this.geometry, e = this.pointMap;
				n.projectionMatrix.copy(this.camera.projectionMatrix), i("c", 0, 0, -1), i("t", 0, 0, 1), i("n1", -1, -1, -1), i("n2", 1, -1, -1), i("n3", -1, 1, -1), i("n4", 1, 1, -1), i("f1", -1, -1, 1), i("f2", 1, -1, 1), i("f3", -1, 1, 1), i("f4", 1, 1, 1), i("u1", .7, 1.1, -1), i("u2", -.7, 1.1, -1), i("u3", 0, 2, -1), i("cf1", -1, 0, 1), i("cf2", 1, 0, 1), i("cf3", 0, -1, 1), i("cf4", 0, 1, 1), i("cn1", -1, 0, -1), i("cn2", 1, 0, -1), i("cn3", 0, -1, -1), i("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0
			}
		}(), du.prototype = Object.create(ls.prototype), du.prototype.constructor = du, du.prototype.update = function() {
			var t = new Qe;
			return function(e) {
				if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
					var r = t.min,
						n = t.max,
						i = this.geometry.attributes.position,
						a = i.array;
					a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = r.x, a[4] = n.y, a[5] = n.z, a[6] = r.x, a[7] = r.y, a[8] = n.z, a[9] = n.x, a[10] = r.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = r.z, a[15] = r.x, a[16] = n.y, a[17] = r.z, a[18] = r.x, a[19] = r.y, a[20] = r.z, a[21] = n.x, a[22] = r.y, a[23] = r.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
				}
			}
		}(), du.prototype.setFromObject = function(t) {
			return this.object = t, this.update(), this
		}, du.prototype.copy = function(t) {
			return ls.prototype.copy.call(this, t), this.object = t.object, this
		}, du.prototype.clone = function() {
			return (new this.constructor).copy(this)
		}, fu.prototype = Object.create(ls.prototype), fu.prototype.constructor = fu, fu.prototype.updateMatrixWorld = function(t) {
			var e = this.box;
			e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Ai.prototype.updateMatrixWorld.call(this, t))
		}, mu.prototype = Object.create(hs.prototype), mu.prototype.constructor = mu, mu.prototype.updateMatrixWorld = function(t) {
			var e = -this.plane.constant;
			Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? d : p, this.lookAt(this.plane.normal), Ai.prototype.updateMatrixWorld.call(this, t)
		}, gu.prototype = Object.create(Ai.prototype), gu.prototype.constructor = gu, gu.prototype.setDirection = function() {
			var t, e = new He;
			return function(r) {
				r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(r.z, 0, -r.x).normalize(), t = Math.acos(r.y), this.quaternion.setFromAxisAngle(e, t))
			}
		}(), gu.prototype.setLength = function(t, e, r) {
			void 0 === e && (e = .2 * t), void 0 === r && (r = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(r, e, r), this.cone.position.y = t, this.cone.updateMatrix()
		}, gu.prototype.setColor = function(t) {
			this.line.material.color.copy(t), this.cone.material.color.copy(t)
		}, gu.prototype.copy = function(t) {
			return Ai.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
		}, gu.prototype.clone = function() {
			return (new this.constructor).copy(this)
		}, vu.prototype = Object.create(ls.prototype), vu.prototype.constructor = vu;
		var xu = 0;
		exports.LineStrip = xu;
		var bu = 1;

		function wu(t) {
			return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
		}

		function _u(t) {
			return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
				return t.slice()
			}, t
		}

		function Mu(t, e) {
			return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new ds(t, e)
		}

		function Su(t) {
			return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new ns(t)
		}

		function Eu(t, e) {
			return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new ds(t, e)
		}

		function Tu(t) {
			return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new ps(t)
		}

		function Au(t) {
			return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new ps(t)
		}

		function Lu(t) {
			return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new ps(t)
		}

		function Ru(t, e, r) {
			return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new He(t, e, r)
		}

		function Cu(t, e) {
			return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new Ci(t, e).setDynamic(!0)
		}

		function Pu(t, e) {
			return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Pi(t, e)
		}

		function Ou(t, e) {
			return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new Oi(t, e)
		}

		function Iu(t, e) {
			return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new Ii(t, e)
		}

		function Du(t, e) {
			return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new Di(t, e)
		}

		function Bu(t, e) {
			return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new Bi(t, e)
		}

		function Nu(t, e) {
			return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new Ni(t, e)
		}

		function zu(t, e) {
			return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new zi(t, e)
		}

		function Fu(t, e) {
			return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new Fi(t, e)
		}

		function Uu(t, e) {
			return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new Ui(t, e)
		}

		function Gu(t) {
			console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Ch.call(this, t), this.type = "catmullrom", this.closed = !0
		}

		function Hu(t) {
			console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Ch.call(this, t), this.type = "catmullrom"
		}

		function Vu(t) {
			console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ch.call(this, t), this.type = "catmullrom"
		}

		function ku(t) {
			return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new vu(t)
		}

		function ju(t, e) {
			return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new du(t, e)
		}

		function Wu(t, e) {
			return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new ls(new Cc(t.geometry), new cs({
				color: void 0 !== e ? e : 16777215
			}))
		}

		function qu(t, e) {
			return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new ls(new ys(t.geometry), new cs({
				color: void 0 !== e ? e : 16777215
			}))
		}

		function Xu(t) {
			return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new mh(t)
		}

		function Yu(t) {
			return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new yh(t)
		}
		exports.LinePieces = bu, _h.create = function(t, e) {
			return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(_h.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
		}, Object.assign(Jh.prototype, {
			createPointsGeometry: function(t) {
				console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
				var e = this.getPoints(t);
				return this.createGeometry(e)
			},
			createSpacedPointsGeometry: function(t) {
				console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
				var e = this.getSpacedPoints(t);
				return this.createGeometry(e)
			},
			createGeometry: function(t) {
				console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
				for (var e = new Ri, r = 0, n = t.length; r < n; r++) {
					var i = t[r];
					e.vertices.push(new He(i.x, i.y, i.z || 0))
				}
				return e
			}
		}), Object.assign(Zh.prototype, {
			fromPoints: function(t) {
				console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
			}
		}), Gu.prototype = Object.create(Ch.prototype), Hu.prototype = Object.create(Ch.prototype), Vu.prototype = Object.create(Ch.prototype), Object.assign(Vu.prototype, {
			initFromArray: function() {
				console.error("THREE.Spline: .initFromArray() has been removed.")
			},
			getControlPointsArray: function() {
				console.error("THREE.Spline: .getControlPointsArray() has been removed.")
			},
			reparametrizeByArcLength: function() {
				console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
			}
		}), cu.prototype.setColors = function() {
			console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
		}, iu.prototype.update = function() {
			console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
		}, Object.assign(Sl.prototype, {
			extractUrlBase: function(t) {
				return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ll.extractUrlBase(t)
			}
		}), Object.assign(dl.prototype, {
			setTexturePath: function(t) {
				return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
			}
		}), Object.assign(Kl.prototype, {
			center: function(t) {
				return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
			},
			empty: function() {
				return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
			},
			isIntersectionBox: function(t) {
				return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
			},
			size: function(t) {
				return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
			}
		}), Object.assign(Qe.prototype, {
			center: function(t) {
				return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
			},
			empty: function() {
				return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
			},
			isIntersectionBox: function(t) {
				return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
			},
			isIntersectionSphere: function(t) {
				return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
			},
			size: function(t) {
				return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
			}
		}), $l.prototype.center = function(t) {
			return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
		}, Object.assign(ze, {
			random16: function() {
				return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
			},
			nearestPowerOfTwo: function(t) {
				return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), ze.floorPowerOfTwo(t)
			},
			nextPowerOfTwo: function(t) {
				return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), ze.ceilPowerOfTwo(t)
			}
		}), Object.assign(Ve.prototype, {
			flattenToArrayOffset: function(t, e) {
				return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
			},
			multiplyVector3: function(t) {
				return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
			},
			multiplyVector3Array: function() {
				console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
			},
			applyToBuffer: function(t) {
				return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
			},
			applyToVector3Array: function() {
				console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
			}
		}), Object.assign(Ue.prototype, {
			extractPosition: function(t) {
				return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
			},
			flattenToArrayOffset: function(t, e) {
				return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
			},
			getPosition: function() {
				var t;
				return function() {
					return void 0 === t && (t = new He), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
				}
			}(),
			setRotationFromQuaternion: function(t) {
				return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
			},
			multiplyToArray: function() {
				console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
			},
			multiplyVector3: function(t) {
				return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
			},
			multiplyVector4: function(t) {
				return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
			},
			multiplyVector3Array: function() {
				console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
			},
			rotateAxis: function(t) {
				console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
			},
			crossVector: function(t) {
				return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
			},
			translate: function() {
				console.error("THREE.Matrix4: .translate() has been removed.")
			},
			rotateX: function() {
				console.error("THREE.Matrix4: .rotateX() has been removed.")
			},
			rotateY: function() {
				console.error("THREE.Matrix4: .rotateY() has been removed.")
			},
			rotateZ: function() {
				console.error("THREE.Matrix4: .rotateZ() has been removed.")
			},
			rotateByAxis: function() {
				console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
			},
			applyToBuffer: function(t) {
				return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
			},
			applyToVector3Array: function() {
				console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
			},
			makeFrustum: function(t, e, r, n, i, a) {
				return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, r, i, a)
			}
		}), $e.prototype.isIntersectionLine = function(t) {
			return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
		}, Ge.prototype.multiplyVector3 = function(t) {
			return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
		}, Object.assign(Qi.prototype, {
			isIntersectionBox: function(t) {
				return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
			},
			isIntersectionPlane: function(t) {
				return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
			},
			isIntersectionSphere: function(t) {
				return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
			}
		}), Object.assign(Ki.prototype, {
			area: function() {
				return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
			},
			barycoordFromPoint: function(t, e) {
				return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
			},
			midpoint: function(t) {
				return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
			},
			normal: function(t) {
				return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
			},
			plane: function(t) {
				return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
			}
		}), Object.assign(Ki, {
			barycoordFromPoint: function(t, e, r, n, i) {
				return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Ki.getBarycoord(t, e, r, n, i)
			},
			normal: function(t, e, r, n) {
				return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Ki.getNormal(t, e, r, n)
			}
		}), Object.assign(Qh.prototype, {
			extractAllPoints: function(t) {
				return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
			},
			extrude: function(t) {
				return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new mc(this, t)
			},
			makeGeometry: function(t) {
				return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Ac(this, t)
			}
		}), Object.assign(Fe.prototype, {
			fromAttribute: function(t, e, r) {
				return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, r)
			},
			distanceToManhattan: function(t) {
				return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
			},
			lengthManhattan: function() {
				return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			}
		}), Object.assign(He.prototype, {
			setEulerFromRotationMatrix: function() {
				console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
			},
			setEulerFromQuaternion: function() {
				console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
			},
			getPositionFromMatrix: function(t) {
				return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
			},
			getScaleFromMatrix: function(t) {
				return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
			},
			getColumnFromMatrix: function(t, e) {
				return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
			},
			applyProjection: function(t) {
				return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
			},
			fromAttribute: function(t, e, r) {
				return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, r)
			},
			distanceToManhattan: function(t) {
				return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
			},
			lengthManhattan: function() {
				return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			}
		}), Object.assign(qe.prototype, {
			fromAttribute: function(t, e, r) {
				return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, r)
			},
			lengthManhattan: function() {
				return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
			}
		}), Object.assign(Ri.prototype, {
			computeTangents: function() {
				console.error("THREE.Geometry: .computeTangents() has been removed.")
			},
			computeLineDistances: function() {
				console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
			}
		}), Object.assign(Ai.prototype, {
			getChildByName: function(t) {
				return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
			},
			renderDepth: function() {
				console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
			},
			translate: function(t, e) {
				return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
			},
			getWorldRotation: function() {
				console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
			}
		}), Object.defineProperties(Ai.prototype, {
			eulerOrder: {
				get: function() {
					return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
				},
				set: function(t) {
					console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
				}
			},
			useQuaternion: {
				get: function() {
					console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
				},
				set: function() {
					console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
				}
			}
		}), Object.defineProperties(is.prototype, {
			objects: {
				get: function() {
					return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
				}
			}
		}), Object.defineProperty(os.prototype, "useVertexTexture", {
			get: function() {
				console.warn("THREE.Skeleton: useVertexTexture has been removed.")
			},
			set: function() {
				console.warn("THREE.Skeleton: useVertexTexture has been removed.")
			}
		}), as.prototype.initBones = function() {
			console.error("THREE.SkinnedMesh: initBones() has been removed.")
		}, Object.defineProperty(_h.prototype, "__arcLengthDivisions", {
			get: function() {
				return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
			},
			set: function(t) {
				console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
			}
		}), Vo.prototype.setLens = function(t, e) {
			console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
		}, Object.defineProperties(Kh.prototype, {
			onlyShadow: {
				set: function() {
					console.warn("THREE.Light: .onlyShadow has been removed.")
				}
			},
			shadowCameraFov: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
				}
			},
			shadowCameraLeft: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
				}
			},
			shadowCameraRight: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
				}
			},
			shadowCameraTop: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
				}
			},
			shadowCameraBottom: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
				}
			},
			shadowCameraNear: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
				}
			},
			shadowCameraFar: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
				}
			},
			shadowCameraVisible: {
				set: function() {
					console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
				}
			},
			shadowBias: {
				set: function(t) {
					console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
				}
			},
			shadowDarkness: {
				set: function() {
					console.warn("THREE.Light: .shadowDarkness has been removed.")
				}
			},
			shadowMapWidth: {
				set: function(t) {
					console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
				}
			},
			shadowMapHeight: {
				set: function(t) {
					console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
				}
			}
		}), Object.defineProperties(Ci.prototype, {
			length: {
				get: function() {
					return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
				}
			},
			copyIndicesArray: function() {
				console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
			}
		}), Object.assign(ki.prototype, {
			addIndex: function(t) {
				console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
			},
			addDrawCall: function(t, e, r) {
				void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
			},
			clearDrawCalls: function() {
				console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
			},
			computeTangents: function() {
				console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
			},
			computeOffsets: function() {
				console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
			}
		}), Object.defineProperties(ki.prototype, {
			drawcalls: {
				get: function() {
					return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
				}
			},
			offsets: {
				get: function() {
					return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
				}
			}
		}), Object.assign(gc.prototype, {
			getArrays: function() {
				console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
			},
			addShapeList: function() {
				console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
			},
			addShape: function() {
				console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
			}
		}), Object.defineProperties(kl.prototype, {
			dynamic: {
				set: function() {
					console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
				}
			},
			onUpdate: {
				value: function() {
					return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
				}
			}
		}), Object.defineProperties(Ji.prototype, {
			wrapAround: {
				get: function() {
					console.warn("THREE.Material: .wrapAround has been removed.")
				},
				set: function() {
					console.warn("THREE.Material: .wrapAround has been removed.")
				}
			},
			overdraw: {
				get: function() {
					console.warn("THREE.Material: .overdraw has been removed.")
				},
				set: function() {
					console.warn("THREE.Material: .overdraw has been removed.")
				}
			},
			wrapRGB: {
				get: function() {
					return console.warn("THREE.Material: .wrapRGB has been removed."), new yi
				}
			},
			shading: {
				get: function() {
					console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
				},
				set: function(t) {
					console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = t === m
				}
			}
		}), Object.defineProperties(Vc.prototype, {
			metal: {
				get: function() {
					return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
				},
				set: function() {
					console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
				}
			}
		}), Object.defineProperties(Zi.prototype, {
			derivatives: {
				get: function() {
					return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
				},
				set: function(t) {
					console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
				}
			}
		}), Object.assign(Zo.prototype, {
			clearTarget: function(t, e, r, n) {
				console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, r, n)
			},
			animate: function(t) {
				console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
			},
			getCurrentRenderTarget: function() {
				return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
			},
			getMaxAnisotropy: function() {
				return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
			},
			getPrecision: function() {
				return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
			},
			resetGLState: function() {
				return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
			},
			supportsFloatTextures: function() {
				return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
			},
			supportsHalfFloatTextures: function() {
				return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
			},
			supportsStandardDerivatives: function() {
				return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
			},
			supportsCompressedTextureS3TC: function() {
				return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
			},
			supportsCompressedTexturePVRTC: function() {
				return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
			},
			supportsBlendMinMax: function() {
				return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
			},
			supportsVertexTextures: function() {
				return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
			},
			supportsInstancedArrays: function() {
				return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
			},
			enableScissorTest: function(t) {
				console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
			},
			initMaterial: function() {
				console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
			},
			addPrePlugin: function() {
				console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
			},
			addPostPlugin: function() {
				console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
			},
			updateShadowMap: function() {
				console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
			},
			setFaceCulling: function() {
				console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
			}
		}), Object.defineProperties(Zo.prototype, {
			shadowMapEnabled: {
				get: function() {
					return this.shadowMap.enabled
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
				}
			},
			shadowMapType: {
				get: function() {
					return this.shadowMap.type
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
				}
			},
			shadowMapCullFace: {
				get: function() {
					console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
				},
				set: function() {
					console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
				}
			}
		}), Object.defineProperties(No.prototype, {
			cullFace: {
				get: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
				},
				set: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
				}
			},
			renderReverseSided: {
				get: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
				},
				set: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
				}
			},
			renderSingleSided: {
				get: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
				},
				set: function() {
					console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
				}
			}
		}), Object.defineProperties(Xe.prototype, {
			wrapS: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
				}
			},
			wrapT: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
				}
			},
			magFilter: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
				}
			},
			minFilter: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
				}
			},
			anisotropy: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
				}
			},
			offset: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
				}
			},
			repeat: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
				}
			},
			format: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
				}
			},
			type: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
				}
			},
			generateMipmaps: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
				}
			}
		}), Object.defineProperties(Yo.prototype, {
			standing: {
				set: function() {
					console.warn("THREE.WebVRManager: .standing has been removed.")
				}
			},
			userHeight: {
				set: function() {
					console.warn("THREE.WebVRManager: .userHeight has been removed.")
				}
			}
		}), Pl.prototype.load = function(t) {
			console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
			var e = this;
			return (new Tl).load(t, function(t) {
				e.setBuffer(t)
			}), this
		}, Il.prototype.getData = function() {
			return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
		}, Ll.prototype.updateCubeMap = function(t, e) {
			return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
		};
		var Ju = {
			merge: function(t, e, r) {
				var n;
				console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, r)
			},
			center: function(t) {
				return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
			}
		};

		function Zu() {
			console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
				console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
			}, this.unprojectVector = function(t, e) {
				console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
			}, this.pickingRay = function() {
				console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
			}
		}

		function Qu() {
			console.error("THREE.CanvasRenderer has been removed")
		}

		function Ku() {
			console.error("THREE.JSONLoader has been removed.")
		}
		exports.GeometryUtils = Ju, ke.crossOrigin = void 0, ke.loadTexture = function(t, e, r, n) {
			console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
			var i = new wh;
			i.setCrossOrigin(this.crossOrigin);
			var a = i.load(t, r, void 0, n);
			return e && (a.mapping = e), a
		}, ke.loadTextureCube = function(t, e, r, n) {
			console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
			var i = new bh;
			i.setCrossOrigin(this.crossOrigin);
			var a = i.load(t, r, void 0, n);
			return e && (a.mapping = e), a
		}, ke.loadCompressedTexture = function() {
			console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
		}, ke.loadCompressedTextureCube = function() {
			console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
		};
		var $u = {
			createMultiMaterialObject: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			},
			detach: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			},
			attach: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			}
		};

		function tp() {
			console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
		}
		exports.SceneUtils = $u;
	}, {}],
	"C7HB": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.vertex = exports.fragment = void 0;
		var e = "\nuniform vec2 u_resolution;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_texture2;\nuniform vec2 u_textureFactor;\nuniform vec2 u_texture2Factor;\nuniform float u_textureProgress;\n\n// RGB\nuniform vec2 u_rgbPosition;\nuniform vec2 u_rgbVelocity;\n\nvarying vec2 vUv;\nvec2 centeredAspectRatio(vec2 uvs, vec2 factor){\n    return uvs * factor - factor /2. + 0.5;\n}\nvoid main(){\n    // On THREE 102 The image is has Y backwards\n    // vec2 flipedUV = vec2(vUv.x,1.-vUv.y);\n\n    vec2 normalizedRgbPos = u_rgbPosition / u_resolution;\n    normalizedRgbPos.y = 1. - normalizedRgbPos.y; \n\n    \n    vec2 vel = u_rgbVelocity;\n    float dist = distance(normalizedRgbPos + vel / u_resolution, vUv.xy);\n\n    float ratio = clamp(1.0 - dist * 5., 0., 1.);\n\n\n    vec4 tex1 = vec4(1.);\n    vec4 tex2 = vec4(1.);\n\n    vec2 uv = vUv;\n\n    uv.x -= sin(uv.y) * ratio / 100. * (vel.x + vel.y) / 7.;\n    uv.y -= sin(uv.x) * ratio / 100. * (vel.x + vel.y) / 7.;\n\n    tex1.r = texture2D(u_texture, centeredAspectRatio(uv, u_textureFactor )).r;\n    tex2.r = texture2D(u_texture2, centeredAspectRatio(uv, u_textureFactor )).r;\n\n    \n    uv.x -= sin(uv.y) * ratio / 150. * (vel.x + vel.y) / 7.;\n    uv.y -= sin(uv.x) * ratio / 150. * (vel.x + vel.y) / 7.;\n\n    tex1.g = texture2D(u_texture, centeredAspectRatio(uv, u_textureFactor )).g;\n    tex2.g = texture2D(u_texture2, centeredAspectRatio(uv, u_textureFactor )).g;\n    \n    uv.x -= sin(uv.y) * ratio / 300. * (vel.x + vel.y) / 7.;\n    uv.y -= sin(uv.x) * ratio / 300. * (vel.x + vel.y) / 7.;\n\n    tex1.b = texture2D(u_texture, centeredAspectRatio(uv, u_textureFactor )).b;\n    tex2.b = texture2D(u_texture2, centeredAspectRatio(uv, u_textureFactor )).b;\n     \n    \n\n\n    vec4 fulltex1 = texture2D(u_texture, centeredAspectRatio(vUv, u_textureFactor) );\n    vec4 fulltex2 = texture2D(u_texture2, centeredAspectRatio(vUv, u_texture2Factor));\n    \n    vec4 mixedTextures =  mix(tex1,tex2,u_textureProgress);\n\n    gl_FragColor = mixedTextures;\n}\n";
		exports.fragment = e;
		var t = "\n#define PI 3.14159265359\nuniform float u_offset;\nuniform float u_progress;\nuniform float u_direction;\nuniform float u_time;\nuniform float u_waveIntensity;\nvarying vec2 vUv;\nvoid main(){\n    vec3 pos = position.xyz;\n\n    float distance = length(uv.xy - 0.5 );\n    float sizeDist = length(vec2(0.5,0.5));\n    float normalizedDistance = distance/sizeDist ;\n\n    float stickOutEffect = normalizedDistance ;\n    float stickInEffect = -normalizedDistance ;\n\n    \n    float stickEffect = mix(stickOutEffect,stickInEffect, u_direction);\n\n    // Backwards V wave.\n    float stick = 0.5;\n\n    float waveIn = u_progress*(1. / stick); \n    float waveOut =  -( u_progress - 1.) * (1./(1.-stick) );\n    waveOut = pow(smoothstep(0.,1.,waveOut),0.7);\n\n    float stickProgress = min(waveIn, waveOut);\n\n\n\n\n\n    // We can re-use stick Influcse because this oen starts at the same position\n    float offsetInProgress = clamp(waveIn,0.,1.);\n\n    // Invert stickout to get the slope moving upwards to the right\n    // and move it left by 1\n    float offsetOutProgress = clamp(1.-waveOut,0.,1.);\n\n    float offsetProgress = mix(offsetInProgress,offsetOutProgress,u_direction);\n\n\n    float stickOffset = u_offset;\n    pos.z += stickEffect * stickOffset * stickProgress  - u_offset * offsetProgress;\n\n    \n    pos.z += sin(distance * 8. - u_time * 2. )  * u_waveIntensity;\n\n    gl_Position =   \n        projectionMatrix * \n        modelViewMatrix * \n         vec4(pos, 1.0);\n\n    vUv = uv;\n}\n";
		exports.vertex = t;
	}, {}],
	"XX42": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.GLManager = r;
		var e = i(require("three")),
			t = require("./shaders");

		function i(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var i in e)
					if (Object.prototype.hasOwnProperty.call(e, i)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
						r.get || r.set ? Object.defineProperty(t, i, r) : t[i] = e[i]
					}
			return t.default = e, t
		}

		function r(t) {
			var i = this;
			this.totalEntries = t.length, this.loadedEntries = 0;
			var r = new e.PerspectiveCamera(45, 1, .1, 1e4);
			r.position.z = 5;
			var s = new e.Scene;
			r.lookAt = s.position;
			var n = new e.WebGLRenderer({
				alpha: !0,
				antialias: !0
			});
			n.setSize(window.innerWidth, window.innerHeight), n.setPixelRatio(window.devicePixelRatio), this.render = this.render.bind(this), this.textures = t.map(function(t, r) {
				return (new e.TextureLoader).load(t.image, i.calculateAspectRatioFactor.bind(i, r))
			}), this.factors = t.map(function(t) {
				return new e.Vector2(1, 1)
			}), this.currentIndex = 0, this.nextIndex = 0, this.textureProgress = 0, this.camera = r, this.scene = s, this.renderer = n, this.initialRender = !1, this.time = 0, this.loopRaf = null, this.loop = this.loop.bind(this)
		}
		r.prototype.getViewSize = function() {
			var e = this.camera.fov * Math.PI / 180;
			return Math.abs(this.camera.position.z * Math.tan(e / 2) * 2)
		}, r.prototype.getPlaneSize = function() {
			var e = this.getViewSize();
			return {
				width: 1.5 * e,
				height: e
			}
		}, r.prototype.calculateAspectRatioFactor = function(t, i) {
			var r = this.getPlaneSize(),
				s = window.innerWidth / window.innerHeight,
				n = r.width / r.height * s,
				o = i.image.width / i.image.height,
				a = 1,
				u = 1;
			n > o ? (a = 1, u = 1 / n * o) : (a = 1 * n / o, u = 1), this.factors[t] = new e.Vector2(a, u), this.currentIndex === t && (this.mesh.material.uniforms.u_textureFactor.value = this.factors[t], this.mesh.material.uniforms.u_textureFactor.needsUpdate = !0), this.nextIndex === t && (this.mesh.material.uniforms.u_texture2Factor.value = this.factors[t], this.mesh.material.uniforms.u_texture2Factor.needsUpdate = !0), this.initialRender && (this.loadedEntries++, this.loadedEntries === this.totalEntries && document.body.classList.remove("loading"), this.render())
		}, r.prototype.createPlane = function() {
			this.getViewSize();
			var i = this.getPlaneSize(),
				r = i.width,
				s = i.height,
				n = new e.PlaneBufferGeometry(r, s, 60, 60),
				o = new e.ShaderMaterial({
					uniforms: {
						u_texture: {
							type: "t",
							value: this.textures[this.currentIndex]
						},
						u_textureFactor: {
							type: "f",
							value: this.factors[this.currentIndex]
						},
						u_texture2: {
							type: "t",
							value: this.textures[this.nextIndex]
						},
						u_texture2Factor: {
							type: "f",
							value: this.factors[this.nextIndex]
						},
						u_textureProgress: {
							type: "f",
							value: this.textureProgress
						},
						u_offset: {
							type: "f",
							value: 8
						},
						u_progress: {
							type: "f",
							value: 0
						},
						u_direction: {
							type: "f",
							value: 1
						},
						u_effect: {
							type: "f",
							value: 0
						},
						u_time: {
							type: "f",
							value: this.time
						},
						u_waveIntensity: {
							type: "f",
							value: 0
						},
						u_resolution: {
							type: "v2",
							value: new e.Vector2(window.innerWidth, window.innerHeight)
						},
						u_rgbPosition: {
							type: "v2",
							value: new e.Vector2(window.innerWidth / 2, window.innerHeight / 2)
						},
						u_rgbVelocity: {
							type: "v2",
							value: new e.Vector2(0, 0)
						}
					},
					vertexShader: t.vertex,
					fragmentShader: t.fragment,
					side: e.DoubleSide
				}),
				a = new e.Mesh(n, o);
			this.scene.add(a), this.mesh = a
		}, r.prototype.updateTexture = function(e, t) {
			var i = !1;
			null != e && this.newIndex !== this.currentIndex && (this.currentIndex = this.nextIndex, this.nextIndex = e, this.textureProgress = 0, this.mesh.material.uniforms.u_textureProgress.value = 0, this.mesh.material.uniforms.u_texture.value = this.textures[this.currentIndex], this.mesh.material.uniforms.u_textureFactor.value = this.factors[this.currentIndex], this.mesh.material.uniforms.u_texture2.value = this.textures[e], this.mesh.material.uniforms.u_texture2Factor.value = this.factors[e], i = !0), null != t && t !== this.textureProgress && (this.mesh.material.uniforms.u_textureProgress.value = t, this.textureProgress = t, i = !0), !this.loopRaf && i && this.render()
		}, r.prototype.updateStickEffect = function(e) {
			var t = e.progress,
				i = e.direction,
				r = e.waveIntensity;
			this.mesh.material.uniforms.u_progress.value = t, this.mesh.material.uniforms.u_direction.value = i, this.mesh.material.uniforms.u_waveIntensity.value = r
		}, r.prototype.updateRgbEffect = function(t) {
			var i = t.position,
				r = t.velocity;
			this.mesh.material.uniforms.u_rgbPosition.value = new e.Vector2(i.x, i.y), this.mesh.material.uniforms.u_rgbVelocity.value = new e.Vector2(r.x, r.y), this.loopRaf || this.render()
		}, r.prototype.render = function() {
			this.initialRender || (this.initialRender = !0), this.renderer.render(this.scene, this.camera)
		}, r.prototype.mount = function(e) {
			e.appendChild(this.renderer.domElement)
		}, r.prototype.unmount = function() {
			this.mesh.material.dispose(), this.mesh.geometry.dispose(), this.mesh = null, this.renderer = null, this.camera = null, this.scene = null, this.container = null
		}, r.prototype.onResize = function() {
			this.renderer.setSize(window.innerWidth, window.innerHeight), this.mesh.material.uniforms.u_resolution.value = new e.Vector2(window.innerWidth, window.innerHeight);
			for (var t = 0; t < this.textures.length; t++) this.textures[t].image && this.calculateAspectRatioFactor(t, this.textures[t]);
			this.render()
		}, r.prototype.scheduleLoop = function() {
			this.loopRaf || this.loop()
		}, r.prototype.loop = function() {
			this.render(), this.time += .1, this.mesh.material.uniforms.u_time.value = this.time, this.loopRaf = requestAnimationFrame(this.loop)
		}, r.prototype.cancelLoop = function() {
			cancelAnimationFrame(this.loopRaf), this.loopRaf = null
		};
	}, {
		"three": "dKqR",
		"./shaders": "C7HB"
	}],
	"vCxL": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.__extends = e, exports.__rest = n, exports.__decorate = o, exports.__param = a, exports.__metadata = u, exports.__awaiter = i, exports.__generator = c, exports.__exportStar = f, exports.__values = l, exports.__read = s, exports.__spread = p, exports.__await = y, exports.__asyncGenerator = _, exports.__asyncDelegator = h, exports.__asyncValues = b, exports.__makeTemplateObject = v, exports.__importStar = d, exports.__importDefault = x, exports.__assign = void 0;
		var t = function(e, r) {
			return (t = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, e) {
					t.__proto__ = e
				} || function(t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(e, r)
		};

		function e(e, r) {
			function n() {
				this.constructor = e
			}
			t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
		}
		var r = function() {
			return exports.__assign = r = Object.assign || function(t) {
				for (var e, r = 1, n = arguments.length; r < n; r++)
					for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}, r.apply(this, arguments)
		};

		function n(t, e) {
			var r = {};
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
			if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]])
			}
			return r
		}

		function o(t, e, r, n) {
			var o, a = arguments.length,
				u = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, r, n);
			else
				for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (u = (a < 3 ? o(u) : a > 3 ? o(e, r, u) : o(e, r)) || u);
			return a > 3 && u && Object.defineProperty(e, r, u), u
		}

		function a(t, e) {
			return function(r, n) {
				e(r, n, t)
			}
		}

		function u(t, e) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
		}

		function i(t, e, r, n) {
			return new(r || (r = Promise))(function(o, a) {
				function u(t) {
					try {
						c(n.next(t))
					} catch (e) {
						a(e)
					}
				}

				function i(t) {
					try {
						c(n.throw(t))
					} catch (e) {
						a(e)
					}
				}

				function c(t) {
					t.done ? o(t.value) : new r(function(e) {
						e(t.value)
					}).then(u, i)
				}
				c((n = n.apply(t, e || [])).next())
			})
		}

		function c(t, e) {
			var r, n, o, a, u = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return a = {
				next: i(0),
				throw: i(1),
				return: i(2)
			}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function i(a) {
				return function(i) {
					return function(a) {
						if (r) throw new TypeError("Generator is already executing.");
						for (; u;) try {
							if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
							switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
								case 0:
								case 1:
									o = a;
									break;
								case 4:
									return u.label++, {
										value: a[1],
										done: !1
									};
								case 5:
									u.label++, n = a[1], a = [0];
									continue;
								case 7:
									a = u.ops.pop(), u.trys.pop();
									continue;
								default:
									if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
										u = 0;
										continue
									}
									if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
										u.label = a[1];
										break
									}
									if (6 === a[0] && u.label < o[1]) {
										u.label = o[1], o = a;
										break
									}
									if (o && u.label < o[2]) {
										u.label = o[2], u.ops.push(a);
										break
									}
									o[2] && u.ops.pop(), u.trys.pop();
									continue
							}
							a = e.call(t, u)
						} catch (i) {
							a = [6, i], n = 0
						} finally {
							r = o = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}([a, i])
				}
			}
		}

		function f(t, e) {
			for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
		}

		function l(t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function() {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		}

		function s(t, e) {
			var r = "function" == typeof Symbol && t[Symbol.iterator];
			if (!r) return t;
			var n, o, a = r.call(t),
				u = [];
			try {
				for (;
					(void 0 === e || e-- > 0) && !(n = a.next()).done;) u.push(n.value)
			} catch (i) {
				o = {
					error: i
				}
			} finally {
				try {
					n && !n.done && (r = a.return) && r.call(a)
				} finally {
					if (o) throw o.error
				}
			}
			return u
		}

		function p() {
			for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
			return t
		}

		function y(t) {
			return this instanceof y ? (this.v = t, this) : new y(t)
		}

		function _(t, e, r) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var n, o = r.apply(t, e || []),
				a = [];
			return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
				return this
			}, n;

			function u(t) {
				o[t] && (n[t] = function(e) {
					return new Promise(function(r, n) {
						a.push([t, e, r, n]) > 1 || i(t, e)
					})
				})
			}

			function i(t, e) {
				try {
					(r = o[t](e)).value instanceof y ? Promise.resolve(r.value.v).then(c, f) : l(a[0][2], r)
				} catch (n) {
					l(a[0][3], n)
				}
				var r
			}

			function c(t) {
				i("next", t)
			}

			function f(t) {
				i("throw", t)
			}

			function l(t, e) {
				t(e), a.shift(), a.length && i(a[0][0], a[0][1])
			}
		}

		function h(t) {
			var e, r;
			return e = {}, n("next"), n("throw", function(t) {
				throw t
			}), n("return"), e[Symbol.iterator] = function() {
				return this
			}, e;

			function n(n, o) {
				e[n] = t[n] ? function(e) {
					return (r = !r) ? {
						value: y(t[n](e)),
						done: "return" === n
					} : o ? o(e) : e
				} : o
			}
		}

		function b(t) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var e, r = t[Symbol.asyncIterator];
			return r ? r.call(t) : (t = "function" == typeof l ? l(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
				return this
			}, e);

			function n(r) {
				e[r] = t[r] && function(e) {
					return new Promise(function(n, o) {
						(function(t, e, r, n) {
							Promise.resolve(n).then(function(e) {
								t({
									value: e,
									done: r
								})
							}, e)
						})(n, o, (e = t[r](e)).done, e.value)
					})
				}
			}
		}

		function v(t, e) {
			return Object.defineProperty ? Object.defineProperty(t, "raw", {
				value: e
			}) : t.raw = e, t
		}

		function d(t) {
			if (t && t.__esModule) return t;
			var e = {};
			if (null != t)
				for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
			return e.default = t, e
		}

		function x(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		exports.__assign = r;
	}, {}],
	"Hokg": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.complex = exports.color = exports.hex = exports.hsla = exports.rgbUnit = exports.rgba = exports.vh = exports.vw = exports.px = exports.progressPercentage = exports.percent = exports.degrees = exports.alpha = exports.scale = exports.number = void 0;
		var r = function() {
				return (r = Object.assign || function(r) {
					for (var t, e = 1, n = arguments.length; e < n; e++)
						for (var s in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
					return r
				}).apply(this, arguments)
			},
			t = function(r, t) {
				return function(e) {
					return Math.max(Math.min(e, t), r)
				}
			},
			e = function(r) {
				return function(t) {
					return "string" == typeof t && 0 === t.indexOf(r)
				}
			},
			n = function(r) {
				return r.substring(r.indexOf("(") + 1, r.lastIndexOf(")"))
			},
			s = function(r) {
				return "string" == typeof r ? r.split(/,\s*/) : [r]
			},
			a = function(r) {
				return r % 1 ? Number(r.toFixed(5)) : r
			},
			o = {
				test: function(r) {
					return "number" == typeof r
				},
				parse: parseFloat,
				transform: function(r) {
					return r
				}
			};
		exports.number = o;
		var u = r({}, o, {
			transform: t(0, 1)
		});
		exports.alpha = u;
		var p = r({}, o, {
			default: 1
		});
		exports.scale = p;
		var f = function(r) {
				return {
					test: function(t) {
						return "string" == typeof t && t.endsWith(r) && 1 === t.split(" ").length
					},
					parse: parseFloat,
					transform: function(t) {
						return "" + t + r
					}
				}
			},
			i = f("deg");
		exports.degrees = i;
		var c = f("%");
		exports.percent = c;
		var l = f("px");
		exports.px = l;
		var h = f("vh");
		exports.vh = h;
		var g = f("vw");
		exports.vw = g;
		var v = r({}, c, {
			parse: function(r) {
				return c.parse(r) / 100
			},
			transform: function(r) {
				return c.transform(100 * r)
			}
		});
		exports.progressPercentage = v;
		var x = t(0, 255),
			m = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
			d = function(r) {
				return void 0 !== r.red
			},
			b = function(r) {
				return void 0 !== r.hue
			},
			y = function(r) {
				var t = r.length;
				return function(e) {
					if ("string" != typeof e) return e;
					for (var a = {}, o = s(n(e)), u = 0; u < t; u++) a[r[u]] = void 0 !== o[u] ? parseFloat(o[u]) : 1;
					return a
				}
			},
			O = function(r) {
				var t = r.red,
					e = r.green,
					n = r.blue,
					s = r.alpha;
				return "rgba(" + t + ", " + e + ", " + n + ", " + (void 0 === s ? 1 : s) + ")"
			},
			M = function(r) {
				var t = r.hue,
					e = r.saturation,
					n = r.lightness,
					s = r.alpha;
				return "hsla(" + t + ", " + e + ", " + n + ", " + (void 0 === s ? 1 : s) + ")"
			},
			w = r({}, o, {
				transform: function(r) {
					return Math.round(x(r))
				}
			});
		exports.rgbUnit = w;
		var F = e("rgb"),
			I = {
				test: function(r) {
					return "string" == typeof r ? F(r) : d(r)
				},
				parse: y(["red", "green", "blue", "alpha"]),
				transform: function(r) {
					var t = r.red,
						e = r.green,
						n = r.blue,
						s = r.alpha;
					return O({
						red: w.transform(t),
						green: w.transform(e),
						blue: w.transform(n),
						alpha: a(s)
					})
				}
			};
		exports.rgba = I;
		var P = e("hsl"),
			j = {
				test: function(r) {
					return "string" == typeof r ? P(r) : b(r)
				},
				parse: y(["hue", "saturation", "lightness", "alpha"]),
				transform: function(r) {
					var t = r.hue,
						e = r.saturation,
						n = r.lightness,
						s = r.alpha;
					return M({
						hue: Math.round(t),
						saturation: c.transform(a(e)),
						lightness: c.transform(a(n)),
						alpha: a(s)
					})
				}
			};
		exports.hsla = j;
		var N = r({}, I, {
			test: e("#"),
			parse: function(r) {
				var t = "",
					e = "",
					n = "";
				return r.length > 4 ? (t = r.substr(1, 2), e = r.substr(3, 2), n = r.substr(5, 2)) : (t = r.substr(1, 1), e = r.substr(2, 1), n = r.substr(3, 1), t += t, e += e, n += n), {
					red: parseInt(t, 16),
					green: parseInt(e, 16),
					blue: parseInt(n, 16),
					alpha: 1
				}
			}
		});
		exports.hex = N;
		var $ = {
			test: function(r) {
				return "string" == typeof r && m.test(r) || I.test(r) || j.test(r) || N.test(r)
			},
			parse: function(r) {
				return I.test(r) ? I.parse(r) : j.test(r) ? j.parse(r) : N.test(r) ? N.parse(r) : r
			},
			transform: function(r) {
				return d(r) ? I.transform(r) : b(r) ? j.transform(r) : r
			}
		};
		exports.color = $;
		var U = /(-)?(\d[\d\.]*)/g,
			_ = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
			T = "${c}",
			W = "${n}",
			k = {
				test: function(r) {
					if ("string" != typeof r || !isNaN(r)) return !1;
					var t = 0,
						e = r.match(U),
						n = r.match(_);
					return e && (t += e.length), n && (t += n.length), t > 0
				},
				parse: function(r) {
					var t = r,
						e = [],
						n = t.match(_);
					n && (t = t.replace(_, T), e.push.apply(e, n.map($.parse)));
					var s = t.match(U);
					return s && e.push.apply(e, s.map(o.parse)), e
				},
				createTransformer: function(r) {
					var t = r,
						e = 0,
						n = r.match(_),
						s = n ? n.length : 0;
					if (n)
						for (var o = 0; o < s; o++) t = t.replace(n[o], T), e++;
					var u = t.match(U),
						p = u ? u.length : 0;
					if (u)
						for (o = 0; o < p; o++) t = t.replace(u[o], W), e++;
					return function(r) {
						for (var n = t, o = 0; o < e; o++) n = n.replace(o < s ? T : W, o < s ? $.transform(r[o]) : a(r[o]));
						return n
					}
				}
			};
		exports.complex = k;
	}, {}],
	"KFGT": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.warning = exports.invariant = void 0;
		var r = function() {};
		exports.warning = r;
		var e = function() {};
		exports.invariant = e;
	}, {}],
	"pBGv": [function(require, module, exports) {

		var t, e, n = module.exports = {};

		function r() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function i(e) {
			if (t === setTimeout) return setTimeout(e, 0);
			if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
			try {
				return t(e, 0)
			} catch (n) {
				try {
					return t.call(null, e, 0)
				} catch (n) {
					return t.call(this, e, 0)
				}
			}
		}

		function u(t) {
			if (e === clearTimeout) return clearTimeout(t);
			if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
			try {
				return e(t)
			} catch (n) {
				try {
					return e.call(null, t)
				} catch (n) {
					return e.call(this, t)
				}
			}
		}! function() {
			try {
				t = "function" == typeof setTimeout ? setTimeout : r
			} catch (n) {
				t = r
			}
			try {
				e = "function" == typeof clearTimeout ? clearTimeout : o
			} catch (n) {
				e = o
			}
		}();
		var c, s = [],
			l = !1,
			a = -1;

		function f() {
			l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
		}

		function h() {
			if (!l) {
				var t = i(f);
				l = !0;
				for (var e = s.length; e;) {
					for (c = s, s = []; ++a < e;) c && c[a].run();
					a = -1, e = s.length
				}
				c = null, l = !1, u(t)
			}
		}

		function m(t, e) {
			this.fun = t, this.array = e
		}

		function p() {}
		n.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			s.push(new m(t, e)), 1 !== s.length || l || i(h)
		}, m.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
			return []
		}, n.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, n.cwd = function() {
			return "/"
		}, n.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, n.umask = function() {
			return 0
		};
	}, {}],
	"bSZI": [function(require, module, exports) {
		var process = require("process");
		var e = require("process");
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.getFrameData = exports.cancelSync = exports.default = void 0;
		var n, t = require("hey-listen"),
			r = 0,
			a = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function(e) {
				return window.requestAnimationFrame(e)
			} : function(e) {
				var n = Date.now(),
					t = Math.max(0, 16.7 - (n - r));
				r = n + t, setTimeout(function() {
					return e(r)
				}, t)
			},
			c = function(e) {
				var n = [],
					r = [],
					a = 0,
					c = !1,
					o = 0,
					i = new WeakSet,
					d = new WeakSet,
					u = {
						cancel: function(e) {
							var n = r.indexOf(e);
							i.add(e), -1 !== n && r.splice(n, 1)
						},
						process: function(t) {
							var s, f;
							if (c = !0, n = (s = [r, n])[0], (r = s[1]).length = 0, a = n.length)
								for (o = 0; o < a; o++)(f = n[o])(t), !0 !== d.has(f) || i.has(f) || (u.schedule(f), e(!0));
							c = !1
						},
						schedule: function(e, o, u) {
							void 0 === o && (o = !1), void 0 === u && (u = !1), (0, t.invariant)("function" == typeof e, "Argument must be a function");
							var s = u && c,
								f = s ? n : r;
							i.delete(e), o && d.add(e), -1 === f.indexOf(e) && (f.push(e), s && (a = n.length))
						}
					};
				return u
			};
		! function(e) {
			e.Read = "read", e.Update = "update", e.Render = "render", e.PostRender = "postRender", e.FixedUpdate = "fixedUpdate"
		}(n || (n = {}));
		var o = 40,
			i = 1 / 60 * 1e3,
			d = !0,
			u = !1,
			s = !1,
			f = {
				delta: 0,
				timestamp: 0
			},
			p = [n.Read, n.Update, n.Render, n.PostRender],
			l = function(e) {
				return u = e
			},
			v = p.reduce(function(e, n) {
				var t = c(l);
				return e.sync[n] = function(e, n, r) {
					return void 0 === n && (n = !1), void 0 === r && (r = !1), u || R(), t.schedule(e, n, r), e
				}, e.cancelSync[n] = function(e) {
					return t.cancel(e)
				}, e.steps[n] = t, e
			}, {
				steps: {},
				sync: {},
				cancelSync: {}
			}),
			m = v.steps,
			h = v.sync,
			x = v.cancelSync;
		exports.cancelSync = x;
		var y = function(e) {
				return m[e].process(f)
			},
			w = function(e) {
				u = !1, f.delta = d ? i : Math.max(Math.min(e - f.timestamp, o), 1), d || (i = f.delta), f.timestamp = e, s = !0, p.forEach(y), s = !1, u && (d = !1, a(w))
			},
			R = function() {
				u = !0, d = !0, s || a(w)
			},
			S = function() {
				return f
			};
		exports.getFrameData = S;
		var g = h;
		exports.default = g;
	}, {
		"hey-listen": "KFGT",
		"process": "pBGv"
	}],
	"xQjT": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.cubicBezier = J, exports.bounceInOut = exports.bounceIn = exports.bounceOut = exports.anticipate = exports.backInOut = exports.backOut = exports.backIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.linear = exports.createAnticipateEasing = exports.createBackIn = exports.createExpoIn = exports.createMirroredEasing = exports.createReversedEasing = exports.mirrored = exports.reversed = void 0;
		var r = 1.525,
			e = function(r) {
				return function(e) {
					return 1 - r(1 - e)
				}
			};
		exports.reversed = e;
		var t = function(r) {
			return function(e) {
				return e <= .5 ? r(2 * e) / 2 : (2 - r(2 * (1 - e))) / 2
			}
		};
		exports.mirrored = t;
		var n = e;
		exports.createReversedEasing = n;
		var o = t;
		exports.createMirroredEasing = o;
		var a = function(r) {
			return function(e) {
				return Math.pow(e, r)
			}
		};
		exports.createExpoIn = a;
		var u = function(r) {
			return function(e) {
				return e * e * ((r + 1) * e - r)
			}
		};
		exports.createBackIn = u;
		var c = function(r) {
			var e = u(r);
			return function(r) {
				return (r *= 2) < 1 ? .5 * e(r) : .5 * (2 - Math.pow(2, -10 * (r - 1)))
			}
		};
		exports.createAnticipateEasing = c;
		var s = function(r) {
			return r
		};
		exports.linear = s;
		var i = a(2);
		exports.easeIn = i;
		var p = e(i);
		exports.easeOut = p;
		var x = t(i);
		exports.easeInOut = x;
		var v = function(r) {
			return 1 - Math.sin(Math.acos(r))
		};
		exports.circIn = v;
		var f = e(v);
		exports.circOut = f;
		var I = t(f);
		exports.circInOut = I;
		var O = u(r);
		exports.backIn = O;
		var b = e(O);
		exports.backOut = b;
		var d = t(O);
		exports.backInOut = d;
		var k = c(r);
		exports.anticipate = k;
		var E = 4 / 11,
			M = 8 / 11,
			l = .9,
			g = 4356 / 361,
			h = 35442 / 1805,
			w = 16061 / 1805,
			y = function(r) {
				var e = r * r;
				return r < E ? 7.5625 * e : r < M ? 9.075 * e - 9.9 * r + 3.4 : r < l ? g * e - h * r + w : 10.8 * r * r - 20.52 * r + 10.72
			};
		exports.bounceOut = y;
		var A = function(r) {
			return 1 - y(1 - r)
		};
		exports.bounceIn = A;
		var B = function(r) {
			return r < .5 ? .5 * (1 - y(1 - 2 * r)) : .5 * y(2 * r - 1) + .5
		};
		exports.bounceInOut = B;
		var m = 8,
			F = .001,
			R = 1e-7,
			_ = 10,
			j = 11,
			z = 1 / (j - 1),
			P = "undefined" != typeof Float32Array,
			q = function(r, e) {
				return 1 - 3 * e + 3 * r
			},
			C = function(r, e) {
				return 3 * e - 6 * r
			},
			D = function(r) {
				return 3 * r
			},
			G = function(r, e, t) {
				return 3 * q(e, t) * r * r + 2 * C(e, t) * r + D(e)
			},
			H = function(r, e, t) {
				return ((q(e, t) * r + C(e, t)) * r + D(e)) * r
			};

		function J(r, e, t, n) {
			var o = P ? new Float32Array(j) : new Array(j),
				a = function(e) {
					for (var n, a, u, c = 0, s = 1, i = j - 1; s !== i && o[s] <= e; ++s) c += z;
					return n = (e - o[--s]) / (o[s + 1] - o[s]), (u = G(a = c + n * z, r, t)) >= F ? function(e, n) {
						for (var o = 0, a = 0; o < m; ++o) {
							if (0 === (a = G(n, r, t))) return n;
							n -= (H(n, r, t) - e) / a
						}
						return n
					}(e, a) : 0 === u ? a : function(e, n, o) {
						var a, u, c = 0;
						do {
							(a = H(u = n + (o - n) / 2, r, t) - e) > 0 ? o = u : n = u
						} while (Math.abs(a) > R && ++c < _);
						return u
					}(e, c, c + z)
				};
			! function() {
				for (var e = 0; e < j; ++e) o[e] = H(e * z, r, t)
			}();
			return function(o) {
				return r === e && t === n ? o : 0 === o ? 0 : 1 === o ? 1 : H(a(o), e, n)
			}
		}
	}, {}],
	"cue+": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.interpolate = T, Object.defineProperty(exports, "createAnticipateEasing", {
			enumerable: !0,
			get: function() {
				return n.createAnticipateEasing
			}
		}), Object.defineProperty(exports, "createBackIn", {
			enumerable: !0,
			get: function() {
				return n.createBackIn
			}
		}), Object.defineProperty(exports, "createExpoIn", {
			enumerable: !0,
			get: function() {
				return n.createExpoIn
			}
		}), Object.defineProperty(exports, "cubicBezier", {
			enumerable: !0,
			get: function() {
				return n.cubicBezier
			}
		}), Object.defineProperty(exports, "linear", {
			enumerable: !0,
			get: function() {
				return n.linear
			}
		}), Object.defineProperty(exports, "easeIn", {
			enumerable: !0,
			get: function() {
				return n.easeIn
			}
		}), Object.defineProperty(exports, "easeOut", {
			enumerable: !0,
			get: function() {
				return n.easeOut
			}
		}), Object.defineProperty(exports, "easeInOut", {
			enumerable: !0,
			get: function() {
				return n.easeInOut
			}
		}), Object.defineProperty(exports, "circIn", {
			enumerable: !0,
			get: function() {
				return n.circIn
			}
		}), Object.defineProperty(exports, "circOut", {
			enumerable: !0,
			get: function() {
				return n.circOut
			}
		}), Object.defineProperty(exports, "circInOut", {
			enumerable: !0,
			get: function() {
				return n.circInOut
			}
		}), Object.defineProperty(exports, "backIn", {
			enumerable: !0,
			get: function() {
				return n.backIn
			}
		}), Object.defineProperty(exports, "backOut", {
			enumerable: !0,
			get: function() {
				return n.backOut
			}
		}), Object.defineProperty(exports, "backInOut", {
			enumerable: !0,
			get: function() {
				return n.backInOut
			}
		}), Object.defineProperty(exports, "anticipate", {
			enumerable: !0,
			get: function() {
				return n.anticipate
			}
		}), Object.defineProperty(exports, "reversed", {
			enumerable: !0,
			get: function() {
				return n.reversed
			}
		}), Object.defineProperty(exports, "mirrored", {
			enumerable: !0,
			get: function() {
				return n.mirrored
			}
		}), exports.wrap = exports.velocityPerSecond = exports.velocityPerFrame = exports.toDecimal = exports.steps = exports.springForceLinear = exports.springForceExpo = exports.springForce = exports.snap = exports.smoothFrame = exports.smooth = exports.radiansToDegrees = exports.progress = exports.pointFromVector = exports.pipe = exports.mixComplex = exports.mixColor = exports.mixArray = exports.mix = exports.isPoint3D = exports.isPoint = exports.distance = exports.degreesToRadians = exports.conditional = exports.clamp = exports.applyOffset = exports.angle = void 0;
		var r = require("style-value-types"),
			e = require("hey-listen"),
			t = require("framesync"),
			n = require("@popmotion/easing"),
			o = {
				x: 0,
				y: 0,
				z: 0
			},
			a = function(r) {
				return "number" == typeof r
			},
			i = function(r) {
				return 180 * r / Math.PI
			};
		exports.radiansToDegrees = i;
		var u = function(r, e) {
			return void 0 === e && (e = o), i(Math.atan2(e.y - r.y, e.x - r.x))
		};
		exports.angle = u;
		var s = function(r, e) {
			var t = !0;
			return void 0 === e && (e = r, t = !1),
				function(n) {
					return t ? n - r + e : (r = n, t = !0, e)
				}
		};
		exports.applyOffset = s;
		var c = function(r) {
				return function(e, t, n) {
					return void 0 !== n ? r(e, t, n) : function(n) {
						return r(e, t, n)
					}
				}
			},
			p = function(r, e, t) {
				return Math.min(Math.max(t, r), e)
			},
			f = c(p);
		exports.clamp = f;
		var x = function(r, e) {
			return function(t) {
				return r(t) ? e(t) : t
			}
		};
		exports.conditional = x;
		var v = function(r) {
			return r * Math.PI / 180
		};
		exports.degreesToRadians = v;
		var l = function(r) {
			return r.hasOwnProperty("x") && r.hasOwnProperty("y")
		};
		exports.isPoint = l;
		var m = function(r) {
			return l(r) && r.hasOwnProperty("z")
		};
		exports.isPoint3D = m;
		var h = function(r, e) {
				return Math.abs(r - e)
			},
			d = function(r, e) {
				if (void 0 === e && (e = o), a(r) && a(e)) return h(r, e);
				if (l(r) && l(e)) {
					var t = h(r.x, e.x),
						n = h(r.y, e.y),
						i = m(r) && m(e) ? h(r.z, e.z) : 0;
					return Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2) + Math.pow(i, 2))
				}
				return 0
			};
		exports.distance = d;
		var b = function(r, e, t) {
			var n = e - r;
			return 0 === n ? 1 : (t - r) / n
		};
		exports.progress = b;
		var g = function(r, e, t) {
			return -t * r + t * e + r
		};
		exports.mix = g;
		var y = function() {
				return (y = Object.assign || function(r) {
					for (var e, t = 1, n = arguments.length; t < n; t++)
						for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
					return r
				}).apply(this, arguments)
			},
			O = function(r, e, t) {
				var n = r * r,
					o = e * e;
				return Math.sqrt(Math.max(0, t * (o - n) + n))
			},
			P = [r.hex, r.rgba, r.hsla],
			M = function(r) {
				return P.find(function(e) {
					return e.test(r)
				})
			},
			j = function(r) {
				return "'" + r + "' is not an animatable color. Use the equivalent color code instead."
			},
			I = function(t, n) {
				var o = M(t),
					a = M(n);
				(0, e.invariant)(!!o, j(t)), (0, e.invariant)(!!a, j(n)), (0, e.invariant)(o.transform === a.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
				var i = o.parse(t),
					u = a.parse(n),
					s = y({}, i),
					c = o === r.hsla ? g : O;
				return function(r) {
					for (var e in s) "alpha" !== e && (s[e] = c(i[e], u[e], r));
					return s.alpha = g(i.alpha, u.alpha, r), o.transform(s)
				}
			};
		exports.mixColor = I;
		var F = function(r, e) {
				return function(t) {
					return e(r(t))
				}
			},
			w = function() {
				for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
				return r.reduce(F)
			};
		exports.pipe = w;
		var A = function(e, t) {
			var n = e.slice(),
				o = n.length,
				i = e.map(function(e, n) {
					var o = t[n];
					return a(e) ? function(r) {
						return g(e, o, r)
					} : r.color.test(e) ? I(e, o) : k(e, o)
				});
			return function(r) {
				for (var e = 0; e < o; e++) n[e] = i[e](r);
				return n
			}
		};
		exports.mixArray = A;
		var k = function(t, n) {
			var o = r.complex.createTransformer(t);
			return (0, e.invariant)(o(t) === r.complex.createTransformer(n)(t), "Values '" + t + "' and '" + n + "' are of different format, or a value might have changed value type."), w(A(r.complex.parse(t), r.complex.parse(n)), o)
		};
		exports.mixComplex = k;
		var q = function(r, e) {
			return function(t) {
				return g(r, e, t)
			}
		};

		function B(e) {
			return "number" == typeof e ? q : r.color.test(e) ? I : k
		}

		function D(r, e, t) {
			for (var n = [], o = t || B(r[0]), a = r.length - 1, i = 0; i < a; i++) {
				var u = o(r[i], r[i + 1]);
				if (e) {
					var s = Array.isArray(e) ? e[i] : e;
					u = w(s, u)
				}
				n.push(u)
			}
			return n
		}

		function z(r, e) {
			var t = r[0],
				n = r[1],
				o = e[0];
			return function(r) {
				return o(b(t, n, r))
			}
		}

		function E(r, e) {
			var t = r.length,
				n = t - 1;
			return function(o) {
				var a = 0,
					i = !1;
				if (o <= r[0] ? i = !0 : o >= r[n] && (a = n - 1, i = !0), !i) {
					for (var u = 1; u < t && !(r[u] > o || u === n); u++);
					a = u - 1
				}
				var s = b(r[a], r[a + 1], o);
				return e[a](s)
			}
		}

		function T(r, t, n) {
			var o = void 0 === n ? {} : n,
				a = o.clamp,
				i = void 0 === a || a,
				u = o.ease,
				s = o.mixer,
				c = r.length;
			(0, e.invariant)(c === t.length, "Both input and output ranges must be the same length"), (0, e.invariant)(!u || !Array.isArray(u) || u.length === c - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), r[0] > r[c - 1] && (r = [].concat(r), t = [].concat(t), r.reverse(), t.reverse());
			var p = D(t, u, s),
				x = 2 === c ? z(r, p) : E(r, p);
			return i ? w(f(r[0], r[c - 1]), x) : x
		}
		var C = function(r, e, t) {
			return e = v(e), {
				x: t * Math.cos(e) + r.x,
				y: t * Math.sin(e) + r.y
			}
		};
		exports.pointFromVector = C;
		var R = function(r, e) {
			return void 0 === e && (e = 2), e = Math.pow(10, e), Math.round(r * e) / e
		};
		exports.toDecimal = R;
		var L = function(r, e, t, n) {
			return void 0 === n && (n = 0), R(r + t * (e - r) / Math.max(n, t))
		};
		exports.smoothFrame = L;
		var S = function(r) {
			void 0 === r && (r = 50);
			var e = 0,
				n = 0;
			return function(o) {
				var a = (0, t.getFrameData)().timestamp,
					i = a !== n ? a - n : 0,
					u = i ? L(e, o, i, r) : e;
				return n = a, e = u, u
			}
		};
		exports.smooth = S;
		var V = function(r) {
			if ("number" == typeof r) return function(e) {
				return Math.round(e / r) * r
			};
			var e = 0,
				t = r.length;
			return function(n) {
				var o = Math.abs(r[0] - n);
				for (e = 1; e < t; e++) {
					var a = r[e],
						i = Math.abs(a - n);
					if (0 === i) return a;
					if (i > o) return r[e - 1];
					if (e === t - 1) return a;
					o = i
				}
			}
		};
		exports.snap = V;
		var _ = function(r) {
				return r
			},
			G = function(r) {
				return void 0 === r && (r = _), c(function(e, t, n) {
					var o = t - n,
						a = -(0 - e + 1) * (0 - r(Math.abs(o)));
					return o <= 0 ? t + a : t - a
				})
			};
		exports.springForce = G;
		var H = G();
		exports.springForceLinear = H;
		var U = G(Math.sqrt);
		exports.springForceExpo = U;
		var J = function(r, e) {
			return a(r) ? r / (1e3 / e) : 0
		};
		exports.velocityPerFrame = J;
		var K = function(r, e) {
			return e ? r * (1e3 / e) : 0
		};
		exports.velocityPerSecond = K;
		var N = function(r, e, t) {
				var n = e - r;
				return ((t - r) % n + n) % n + r
			},
			Q = c(N);
		exports.wrap = Q;
		var W = f(0, 1),
			X = function(r, e) {
				return void 0 === e && (e = "end"),
					function(t) {
						var n = (t = "end" === e ? Math.min(t, .999) : Math.max(t, .001)) * r,
							o = "end" === e ? Math.floor(n) : Math.ceil(n);
						return W(o / r)
					}
			};
		exports.steps = X;
	}, {
		"style-value-types": "Hokg",
		"hey-listen": "KFGT",
		"framesync": "bSZI",
		"@popmotion/easing": "xQjT"
	}],
	"Q4bC": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.isTransformProp = exports.buildStyleProperty = exports.createStylerFactory = exports.default = void 0;
		var e = n(require("framesync")),
			r = require("style-value-types"),
			t = require("hey-listen");

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var o = function() {
			return (o = Object.assign || function(e) {
				for (var r, t = 1, n = arguments.length; t < n; t++)
					for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
				return e
			}).apply(this, arguments)
		};

		function a(e, r) {
			var t = {};
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && (t[n[o]] = e[n[o]])
			}
			return t
		}
		var i = function(r) {
			var t = r.onRead,
				n = r.onRender,
				o = r.uncachedValues,
				a = void 0 === o ? new Set : o,
				i = r.useCache,
				s = void 0 === i || i;
			return function(r) {
				var o = {},
					i = [],
					l = !1,
					u = function(r, t) {
						var n = o[r];
						o[r] = t, o[r] !== n && (-1 === i.indexOf(r) && i.push(r), l || (l = !0, e.default.render(c)))
					};

				function c(e) {
					return void 0 === e && (e = !1), (!0 === e || l) && (n(o, r, i), l = !1, i.length = 0), this
				}
				return {
					get: function(e) {
						return e ? s && !a.has(e) && void 0 !== o[e] ? o[e] : t(e, r) : o
					},
					set: function(e, r) {
						if ("string" == typeof e) {
							if (void 0 === r) return function(r) {
								return u(e, r)
							};
							u(e, r)
						} else
							for (var t in e) e.hasOwnProperty(t) && u(t, e[t]);
						return this
					},
					render: c
				}
			}
		};
		exports.createStylerFactory = i;
		var s, l = /([a-z])([A-Z])/g,
			u = "$1-$2",
			c = function(e) {
				return e.replace(l, u).toLowerCase()
			},
			p = function(e, r) {
				for (var t in r) r.hasOwnProperty(t) && e.setAttribute(t, r[t])
			},
			f = new Map,
			d = new Map,
			g = ["Webkit", "Moz", "O", "ms", ""],
			h = g.length,
			v = "undefined" != typeof document,
			x = function(e, r) {
				return d.set(e, c(r))
			},
			m = function(e) {
				s = s || document.createElement("div");
				for (var r = 0; r < h; r++) {
					var t = g[r],
						n = "" === t,
						o = n ? e : t + e.charAt(0).toUpperCase() + e.slice(1);
					(o in s.style || n) && (f.set(e, o), x(e, (n ? "" : "-") + c(o)))
				}
			},
			y = function(e) {
				return x(e, e)
			},
			w = function(e, r) {
				void 0 === r && (r = !1);
				var t = r ? d : f;
				return t.has(e) || (v ? m(e) : y(e)), t.get(e) || e
			},
			b = ["", "X", "Y", "Z"],
			O = ["scale", "rotate", "skew", "transformPerspective"],
			k = O.reduce(function(e, r) {
				return b.reduce(function(e, t) {
					return e.push(r + t), e
				}, e)
			}, ["x", "y", "z"]),
			S = k.reduce(function(e, r) {
				return e[r] = !0, e
			}, {}),
			L = function(e) {
				return !0 === S[e]
			};
		exports.isTransformProp = L;
		var R = function(e, r) {
				return k.indexOf(e) - k.indexOf(r)
			},
			P = function(e) {
				return "originX" === e || "originY" === e
			},
			T = {
				color: r.color,
				backgroundColor: r.color,
				outlineColor: r.color,
				fill: r.color,
				stroke: r.color,
				borderColor: r.color,
				borderTopColor: r.color,
				borderRightColor: r.color,
				borderBottomColor: r.color,
				borderLeftColor: r.color,
				borderWidth: r.px,
				borderTopWidth: r.px,
				borderRightWidth: r.px,
				borderBottomWidth: r.px,
				borderLeftWidth: r.px,
				borderRadius: r.px,
				borderTopLeftRadius: r.px,
				borderTopRightRadius: r.px,
				borderBottomRightRadius: r.px,
				borderBottomLeftRadius: r.px,
				width: r.px,
				maxWidth: r.px,
				height: r.px,
				maxHeight: r.px,
				top: r.px,
				right: r.px,
				bottom: r.px,
				left: r.px,
				padding: r.px,
				paddingTop: r.px,
				paddingRight: r.px,
				paddingBottom: r.px,
				paddingLeft: r.px,
				margin: r.px,
				marginTop: r.px,
				marginRight: r.px,
				marginBottom: r.px,
				marginLeft: r.px,
				rotate: r.degrees,
				rotateX: r.degrees,
				rotateY: r.degrees,
				rotateZ: r.degrees,
				scale: r.scale,
				scaleX: r.scale,
				scaleY: r.scale,
				scaleZ: r.scale,
				skew: r.degrees,
				skewX: r.degrees,
				skewY: r.degrees,
				distance: r.px,
				x: r.px,
				y: r.px,
				z: r.px,
				perspective: r.px,
				opacity: r.alpha,
				originX: r.percent,
				originY: r.percent,
				originZ: r.px
			},
			Y = function(e) {
				return T[e]
			},
			C = "scrollLeft",
			X = "scrollTop",
			B = new Set([C, X]),
			M = new Set([C, X, "transform"]),
			W = {
				x: "translateX",
				y: "translateY",
				z: "translateZ"
			},
			Z = function(e) {
				return "function" == typeof e
			},
			j = function(e, r, t, n, o) {
				var a = "",
					i = !1;
				t.sort(R);
				for (var s = t.length, l = 0; l < s; l++) {
					var u = t[l];
					a += (W[u] || u) + "(" + r[u] + ") ", i = "z" === u || i
				}
				return !i && o ? a += "translateZ(0)" : a = a.trim(), Z(e.transform) ? a = e.transform(r, a) : n && (a = "none"), a
			},
			A = function(e, r, t, n, o, a, i) {
				void 0 === r && (r = !0), void 0 === t && (t = {}), void 0 === n && (n = {}), void 0 === o && (o = {}), void 0 === a && (a = []), void 0 === i && (i = !1);
				var s = !0,
					l = !1,
					u = !1;
				for (var c in e) {
					var p = e[c],
						f = Y(c),
						d = "number" == typeof p && f ? f.transform(p) : p;
					L(c) ? (l = !0, n[c] = d, a.push(c), s && (f.default && p !== f.default || !f.default && 0 !== p) && (s = !1)) : P(c) ? (o[c] = d, u = !0) : M.has(c) && Z(d) || (t[w(c, i)] = d)
				}
				return (l || "function" == typeof e.transform) && (t.transform = j(e, n, a, s, r)), u && (t.transformOrigin = (o.originX || 0) + " " + (o.originY || 0) + " " + (o.originZ || 0)), t
			};
		exports.buildStyleProperty = A;
		var z = function(e) {
				void 0 === e && (e = !0);
				var r = {},
					t = {},
					n = {},
					o = [];
				return function(a) {
					return o.length = 0, A(a, e, r, t, n, o, !0), r
				}
			},
			E = i({
				onRead: function(e, r) {
					var t = r.element,
						n = r.preparseOutput,
						o = Y(e);
					if (L(e)) return o && o.default || 0;
					if (B.has(e)) return t[e];
					var a = window.getComputedStyle(t, null).getPropertyValue(w(e, !0)) || 0;
					return n && o && o.parse ? o.parse(a) : a
				},
				onRender: function(e, r, t) {
					var n = r.element,
						o = r.buildStyles;
					Object.assign(n.style, o(e)), -1 !== t.indexOf(C) && (n.scrollLeft = e.scrollLeft), -1 !== t.indexOf(X) && (n.scrollTop = e.scrollTop)
				},
				uncachedValues: B
			}),
			H = function(e, r) {
				void 0 === r && (r = {});
				var t = r.enableHardwareAcceleration,
					n = a(r, ["enableHardwareAcceleration"]);
				return E(o({
					element: e,
					buildStyles: z(t),
					preparseOutput: !0
				}, n))
			},
			V = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues"]),
			q = 1e-7,
			_ = function(e, r) {
				return e / 100 * r + "px"
			},
			F = function(e, r, t, n) {
				var o = !1,
					a = !1,
					i = {},
					s = t ? {
						pathLength: "0",
						pathSpacing: "" + n
					} : void 0,
					l = void 0 !== e.scale ? e.scale || q : e.scaleX || 1,
					u = void 0 !== e.scaleY ? e.scaleY || q : l || 1,
					p = r.width * ((e.originX || 50) / 100) + r.x,
					f = r.height * ((e.originY || 50) / 100) + r.y,
					d = 1 * l * -p,
					g = 1 * u * -f,
					h = p / l,
					v = f / u,
					x = {
						translate: "translate(" + e.x + ", " + e.y + ") ",
						scale: "translate(" + d + ", " + g + ") scale(" + l + ", " + u + ") translate(" + h + ", " + v + ") ",
						rotate: "rotate(" + e.rotate + ", " + p + ", " + f + ") ",
						skewX: "skewX(" + e.skewX + ") ",
						skewY: "skewY(" + e.skewY + ") "
					};
				for (var m in e)
					if (e.hasOwnProperty(m)) {
						var y = e[m];
						if (L(m)) o = !0;
						else if (!t || "pathLength" !== m && "pathSpacing" !== m || "number" != typeof y)
							if (t && "pathOffset" === m) i["stroke-dashoffset"] = _(-y, n);
							else {
								i[V.has(m) ? m : c(m)] = y
							} else a = !0, s[m] = _(y, n)
					}
				if (a && (i["stroke-dasharray"] = s.pathLength + " " + s.pathSpacing), o)
					for (var m in i.transform = "", x)
						if (x.hasOwnProperty(m)) {
							var w = "scale" === m ? "1" : "0";
							i.transform += x[m].replace(/undefined/g, w)
						}
				return i
			},
			N = o({}, r.number, {
				transform: Math.round
			}),
			G = {
				fill: r.color,
				stroke: r.color,
				scale: r.scale,
				scaleX: r.scale,
				scaleY: r.scale,
				opacity: r.alpha,
				fillOpacity: r.alpha,
				strokeOpacity: r.alpha,
				numOctaves: N
			},
			U = function(e) {
				return G[e]
			},
			$ = function(e) {
				return "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
			},
			D = function(e) {
				try {
					return $(e)
				} catch (r) {
					return {
						x: 0,
						y: 0,
						width: 0,
						height: 0
					}
				}
			},
			I = i({
				onRead: function(e, r) {
					var t = r.element;
					if (L(e)) {
						var n = U(e);
						return n ? n.default : 0
					}
					return t.getAttribute(e)
				},
				onRender: function(e, r) {
					var t = r.dimensions,
						n = r.element,
						o = r.isPath,
						a = r.pathLength;
					p(n, F(e, t, o, a))
				}
			}),
			J = function(e) {
				var r = {
					element: e,
					dimensions: D(e),
					isPath: !1
				};
				return "path" === e.tagName && (r.isPath = !0, r.pathLength = e.getTotalLength()), I(r)
			},
			K = i({
				useCache: !1,
				onRead: function(e) {
					return "scrollTop" === e ? window.pageYOffset : window.pageXOffset
				},
				onRender: function(e) {
					var r = e.scrollTop,
						t = void 0 === r ? 0 : r,
						n = e.scrollLeft,
						o = void 0 === n ? 0 : n;
					return window.scrollTo(o, t)
				}
			}),
			Q = new WeakMap,
			ee = function(e, r) {
				var n;
				return e instanceof HTMLElement ? n = H(e, r) : e instanceof SVGElement ? n = J(e) : e === window && (n = K(e)), (0, t.invariant)(void 0 !== n, "No valid node provided. Node must be HTMLElement, SVGElement or window."), Q.set(e, n), n
			},
			re = function(e, r) {
				return Q.has(e) ? Q.get(e) : ee(e, r)
			};

		function te(e, r) {
			var t = "string" == typeof e ? document.querySelector(e) : e;
			return re(t, r)
		}
		var ne = te;
		exports.default = ne;
	}, {
		"framesync": "bSZI",
		"style-value-types": "Hokg",
		"hey-listen": "KFGT"
	}],
	"z2lI": [function(require, module, exports) {
		var process = require("process");
		var t = require("process");
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), Object.defineProperty(exports, "styler", {
			enumerable: !0,
			get: function() {
				return s.default
			}
		}), exports.easing = exports.valueTypes = exports.ValueReaction = exports.Action = exports.svg = exports.css = exports.transform = exports.calc = exports.stagger = exports.schedule = exports.parallel = exports.merge = exports.delay = exports.crossfade = exports.composite = exports.chain = exports.multitouch = exports.mouse = exports.pointer = exports.listen = exports.tween = exports.timeline = exports.spring = exports.physics = exports.everyFrame = exports.keyframes = exports.inertia = exports.decay = exports.value = exports.multicast = exports.action = void 0;
		var e = require("tslib"),
			r = require("@popmotion/popcorn"),
			n = c(require("framesync")),
			o = c(require("style-value-types"));
		exports.valueTypes = o;
		var i = require("hey-listen"),
			u = c(require("@popmotion/easing"));
		exports.easing = u;
		var s = a(require("stylefire"));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function c(t) {
			if (t && t.__esModule) return t;
			var e = {};
			if (null != t)
				for (var r in t)
					if (Object.prototype.hasOwnProperty.call(t, r)) {
						var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
						n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r]
					}
			return e.default = t, e
		}
		var p = function() {
				function t(t) {
					void 0 === t && (t = {}), this.props = t
				}
				return t.prototype.applyMiddleware = function(t) {
					return this.create((0, e.__assign)({}, this.props, {
						middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]
					}))
				}, t.prototype.pipe = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					var n = 1 === t.length ? t[0] : r.pipe.apply(void 0, t);
					return this.applyMiddleware(function(t) {
						return function(e) {
							return t(n(e))
						}
					})
				}, t.prototype.while = function(t) {
					return this.applyMiddleware(function(e, r) {
						return function(n) {
							return t(n) ? e(n) : r()
						}
					})
				}, t.prototype.filter = function(t) {
					return this.applyMiddleware(function(e) {
						return function(r) {
							return t(r) && e(r)
						}
					})
				}, t
			}(),
			f = function() {
				return function(t, e) {
					var r = t.middleware,
						n = t.onComplete,
						o = this;
					this.isActive = !0, this.update = function(t) {
						o.observer.update && o.updateObserver(t)
					}, this.complete = function() {
						o.observer.complete && o.isActive && o.observer.complete(), o.onComplete && o.onComplete(), o.isActive = !1
					}, this.error = function(t) {
						o.observer.error && o.isActive && o.observer.error(t), o.isActive = !1
					}, this.observer = e, this.updateObserver = function(t) {
						return e.update(t)
					}, this.onComplete = n, e.update && r && r.length && r.forEach(function(t) {
						return o.updateObserver = t(o.updateObserver, o.complete)
					})
				}
			}(),
			l = function(t, e, r) {
				var n = e.middleware;
				return new f({
					middleware: n,
					onComplete: r
				}, "function" == typeof t ? {
					update: t
				} : t)
			},
			d = function(t) {
				function r() {
					return null !== t && t.apply(this, arguments) || this
				}
				return (0, e.__extends)(r, t), r.prototype.create = function(t) {
					return new r(t)
				}, r.prototype.start = function(t) {
					void 0 === t && (t = {});
					var r = !1,
						n = {
							stop: function() {}
						},
						o = this.props,
						i = o.init,
						u = (0, e.__rest)(o, ["init"]),
						s = i(l(t, u, function() {
							r = !0, n.stop()
						}));
					return n = s ? (0, e.__assign)({}, n, s) : n, t.registerParent && t.registerParent(n), r && n.stop(), n
				}, r
			}(p);
		exports.Action = d;
		var v = function(t) {
			return new d({
				init: t
			})
		};
		exports.action = v;
		var m = function(t) {
				function r() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.subscribers = [], e
				}
				return (0, e.__extends)(r, t), r.prototype.complete = function() {
					this.subscribers.forEach(function(t) {
						return t.complete()
					})
				}, r.prototype.error = function(t) {
					this.subscribers.forEach(function(e) {
						return e.error(t)
					})
				}, r.prototype.update = function(t) {
					for (var e = 0; e < this.subscribers.length; e++) this.subscribers[e].update(t)
				}, r.prototype.subscribe = function(t) {
					var e = this,
						r = l(t, this.props);
					return this.subscribers.push(r), {
						unsubscribe: function() {
							var t = e.subscribers.indexOf(r); - 1 !== t && e.subscribers.splice(t, 1)
						}
					}
				}, r.prototype.stop = function() {
					this.parent && this.parent.stop()
				}, r.prototype.registerParent = function(t) {
					this.stop(), this.parent = t
				}, r
			}(p),
			y = function(t) {
				function r() {
					return null !== t && t.apply(this, arguments) || this
				}
				return (0, e.__extends)(r, t), r.prototype.create = function(t) {
					return new r(t)
				}, r
			}(m),
			h = function() {
				return new y
			};
		exports.multicast = h;
		var g = function(t, e) {
				var r = 1 / (t - 1),
					n = 1 / (2 * (t - 1)),
					o = Math.min(e, 1) / n;
				return Math.floor((o + 1) / 2) * r
			},
			b = Object.freeze({
				angle: r.angle,
				degreesToRadians: r.degreesToRadians,
				distance: r.distance,
				isPoint3D: r.isPoint3D,
				isPoint: r.isPoint,
				dilate: r.mix,
				getValueFromProgress: r.mix,
				pointFromAngleAndDistance: r.pointFromVector,
				getProgressFromValue: r.progress,
				radiansToDegrees: r.radiansToDegrees,
				smooth: r.smoothFrame,
				speedPerFrame: r.velocityPerFrame,
				speedPerSecond: r.velocityPerSecond,
				stepProgress: g
			});
		exports.calc = b;
		var x = function(t) {
				return Array.isArray(t)
			},
			_ = function(t) {
				var e = typeof t;
				return "string" === e || "number" === e
			},
			O = function(t) {
				function o(e) {
					var r = t.call(this, e) || this;
					return r.scheduleVelocityCheck = function() {
						return n.default.postRender(r.velocityCheck)
					}, r.velocityCheck = function(t) {
						t.timestamp !== r.lastUpdated && (r.prev = r.current)
					}, r.prev = r.current = e.value || 0, _(r.current) ? (r.updateCurrent = function(t) {
						return r.current = t
					}, r.getVelocityOfCurrent = function() {
						return r.getSingleVelocity(r.current, r.prev)
					}) : x(r.current) ? (r.updateCurrent = function(t) {
						return r.current = t.slice()
					}, r.getVelocityOfCurrent = function() {
						return r.getListVelocity()
					}) : (r.updateCurrent = function(t) {
						for (var e in r.current = {}, t) t.hasOwnProperty(e) && (r.current[e] = t[e])
					}, r.getVelocityOfCurrent = function() {
						return r.getMapVelocity()
					}), e.initialSubscription && r.subscribe(e.initialSubscription), r
				}
				return (0, e.__extends)(o, t), o.prototype.create = function(t) {
					return new o(t)
				}, o.prototype.get = function() {
					return this.current
				}, o.prototype.getVelocity = function() {
					return this.getVelocityOfCurrent()
				}, o.prototype.update = function(e) {
					t.prototype.update.call(this, e), this.prev = this.current, this.updateCurrent(e);
					var r = (0, n.getFrameData)(),
						o = r.delta,
						i = r.timestamp;
					this.timeDelta = o, this.lastUpdated = i, n.default.postRender(this.scheduleVelocityCheck)
				}, o.prototype.subscribe = function(e) {
					var r = t.prototype.subscribe.call(this, e);
					return this.subscribers[this.subscribers.length - 1].update(this.current), r
				}, o.prototype.getSingleVelocity = function(t, e) {
					return "number" == typeof t && "number" == typeof e ? (0, r.velocityPerSecond)(t - e, this.timeDelta) : (0, r.velocityPerSecond)(parseFloat(t) - parseFloat(e), this.timeDelta) || 0
				}, o.prototype.getListVelocity = function() {
					var t = this;
					return this.current.map(function(e, r) {
						return t.getSingleVelocity(e, t.prev[r])
					})
				}, o.prototype.getMapVelocity = function() {
					var t = {};
					for (var e in this.current) this.current.hasOwnProperty(e) && (t[e] = this.getSingleVelocity(this.current[e], this.prev[e]));
					return t
				}, o
			}(m);
		exports.ValueReaction = O;
		var w = function(t, e) {
			return new O({
				value: t,
				initialSubscription: e
			})
		};
		exports.value = w;
		var P = function(t) {
				var e = t.getCount,
					r = t.getFirst,
					o = t.getOutput,
					i = t.mapApi,
					u = t.setProp,
					s = t.startActions;
				return function(t) {
					return v(function(a) {
						var c = a.update,
							p = a.complete,
							f = a.error,
							l = e(t),
							d = o(),
							v = function() {
								return c(d)
							},
							m = 0,
							y = s(t, function(t, e) {
								var r = !1;
								return t.start({
									complete: function() {
										r || (r = !0, ++m === l && n.default.update(p))
									},
									error: f,
									update: function(t) {
										u(d, e, t), n.default.update(v, !1, !0)
									}
								})
							});
						return Object.keys(r(y)).reduce(function(t, e) {
							return t[e] = i(y, e), t
						}, {})
					})
				}
			},
			S = P({
				getOutput: function() {
					return {}
				},
				getCount: function(t) {
					return Object.keys(t).length
				},
				getFirst: function(t) {
					return t[Object.keys(t)[0]]
				},
				mapApi: function(t, e) {
					return function() {
						for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
						return Object.keys(t).reduce(function(n, o) {
							var i;
							return t[o][e] && (r[0] && void 0 !== r[0][o] ? n[o] = t[o][e](r[0][o]) : n[o] = (i = t[o])[e].apply(i, r)), n
						}, {})
					}
				},
				setProp: function(t, e, r) {
					return t[e] = r
				},
				startActions: function(t, e) {
					return Object.keys(t).reduce(function(r, n) {
						return r[n] = e(t[n], n), r
					}, {})
				}
			});
		exports.composite = S;
		var A = P({
				getOutput: function() {
					return []
				},
				getCount: function(t) {
					return t.length
				},
				getFirst: function(t) {
					return t[0]
				},
				mapApi: function(t, e) {
					return function() {
						for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
						return t.map(function(t, n) {
							if (t[e]) return Array.isArray(r[0]) ? t[e](r[0][n]) : t[e].apply(t, r)
						})
					}
				},
				setProp: function(t, e, r) {
					return t[e] = r
				},
				startActions: function(t, e) {
					return t.map(function(t, r) {
						return e(t, r)
					})
				}
			}),
			C = function() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				return A(t)
			};
		exports.parallel = C;
		var M = function(t) {
				var e = Object.keys(t),
					r = function(e, r) {
						return void 0 !== e && !t[r](e)
					};
				return {
					getVectorKeys: function(t) {
						return e.reduce(function(e, n) {
							return r(t[n], n) && e.push(n), e
						}, [])
					},
					testVectorProps: function(t) {
						return t && e.some(function(e) {
							return r(t[e], e)
						})
					}
				}
			},
			V = [o.px, o.percent, o.degrees, o.vh, o.vw],
			F = function(t) {
				return V.find(function(e) {
					return e.test(t)
				})
			},
			D = function(t) {
				return Boolean(F(t))
			},
			k = function(t, e) {
				return t(e)
			},
			j = function(t) {
				return function(e, r) {
					return e[r] = e[r][t], e
				}
			},
			T = function(t, r, n) {
				var o = n[0],
					i = r[o].map(function(o, i) {
						var u = n.reduce(j(i), (0, e.__assign)({}, r));
						return U(o)(t, u)
					});
				return C.apply(void 0, i)
			},
			E = function(t) {
				return function(e, r) {
					return e[r] = e[r][t], e
				}
			},
			q = function(t, r, n) {
				var o = n[0],
					i = Object.keys(r[o]).reduce(function(i, u) {
						var s = n.reduce(E(u), (0, e.__assign)({}, r));
						return i[u] = U(r[o][u])(t, s), i
					}, {});
				return S(i)
			},
			R = function(t, r) {
				var n = r.from,
					o = r.to,
					i = (0, e.__rest)(r, ["from", "to"]),
					u = F(n) || F(o),
					s = u.transform,
					a = u.parse;
				return t((0, e.__assign)({}, i, {
					from: "string" == typeof n ? a(n) : n,
					to: "string" == typeof o ? a(o) : o
				})).pipe(s)
			},
			X = function(t, n) {
				var i = n.from,
					u = n.to,
					s = (0, e.__rest)(n, ["from", "to"]);
				return t((0, e.__assign)({}, s, {
					from: 0,
					to: 1
				})).pipe((0, r.mixColor)(i, u), o.color.transform)
			},
			Y = function(t, n) {
				var u = n.from,
					s = n.to,
					a = (0, e.__rest)(n, ["from", "to"]),
					c = o.complex.createTransformer(u);
				return (0, i.invariant)(c(u) === o.complex.createTransformer(s)(u), "Values '" + u + "' and '" + s + "' are of different format, or a value might have changed value type."), t((0, e.__assign)({}, a, {
					from: 0,
					to: 1
				})).pipe((0, r.mixArray)(o.complex.parse(u), o.complex.parse(s)), c)
			},
			L = function(t, e) {
				var r = M(e),
					n = r.testVectorProps,
					o = r.getVectorKeys;
				return function(e) {
					if (!n(e)) return t(e);
					var r = o(e),
						i = e[r[0]];
					return U(i)(t, e, r)
				}
			},
			U = function(t) {
				var e = k;
				return "number" == typeof t ? e = k : Array.isArray(t) ? e = T : D(t) ? e = R : o.color.test(t) ? e = X : o.complex.test(t) ? e = Y : "object" == typeof t && (e = q), e
			},
			z = function(t) {
				return void 0 === t && (t = {}), v(function(e) {
					var r = e.complete,
						o = e.update,
						i = t.velocity,
						u = void 0 === i ? 0 : i,
						s = t.from,
						a = void 0 === s ? 0 : s,
						c = t.power,
						p = void 0 === c ? .8 : c,
						f = t.timeConstant,
						l = void 0 === f ? 350 : f,
						d = t.restDelta,
						v = void 0 === d ? .5 : d,
						m = t.modifyTarget,
						y = 0,
						h = p * u,
						g = Math.round(a + h),
						b = void 0 === m ? g : m(g),
						x = n.default.update(function(t) {
							var e = t.delta;
							y += e;
							var i = -h * Math.exp(-y / l),
								u = i > v || i < -v;
							o(u ? b + i : b), u || (n.cancelSync.update(x), r())
						}, !0);
					return {
						stop: function() {
							return n.cancelSync.update(x)
						}
					}
				})
			},
			B = L(z, {
				from: o.number.test,
				modifyTarget: function(t) {
					return "function" == typeof t
				},
				velocity: o.number.test
			});
		exports.decay = B;
		var K = function(t) {
				return void 0 === t && (t = {}), v(function(e) {
					var o = e.update,
						i = e.complete,
						u = t.velocity,
						s = void 0 === u ? 0 : u,
						a = t.from,
						c = void 0 === a ? 0 : a,
						p = t.to,
						f = void 0 === p ? 0 : p,
						l = t.stiffness,
						d = void 0 === l ? 100 : l,
						v = t.damping,
						m = void 0 === v ? 10 : v,
						y = t.mass,
						h = void 0 === y ? 1 : y,
						g = t.restSpeed,
						b = void 0 === g ? .01 : g,
						x = t.restDelta,
						_ = void 0 === x ? .01 : x,
						O = s ? -s / 1e3 : 0,
						w = 0,
						P = f - c,
						S = c,
						A = S,
						C = n.default.update(function(t) {
							var e = t.delta;
							w += e;
							var u = m / (2 * Math.sqrt(d * h)),
								a = Math.sqrt(d / h) / 1e3;
							if (A = S, u < 1) {
								var c = Math.exp(-u * a * w),
									p = a * Math.sqrt(1 - u * u);
								S = f - c * ((O + u * a * P) / p * Math.sin(p * w) + P * Math.cos(p * w))
							} else {
								c = Math.exp(-a * w);
								S = f - c * (P + (O + a * P) * w)
							}
							s = (0, r.velocityPerSecond)(S - A, e);
							var l = Math.abs(s) <= b,
								v = Math.abs(f - S) <= _;
							l && v ? (o(S = f), n.cancelSync.update(C), i()) : o(S)
						}, !0);
					return {
						stop: function() {
							return n.cancelSync.update(C)
						}
					}
				})
			},
			I = L(K, {
				from: o.number.test,
				to: o.number.test,
				stiffness: o.number.test,
				damping: o.number.test,
				mass: o.number.test,
				velocity: o.number.test
			});
		exports.spring = I;
		var N = function(t) {
				var r = t.from,
					n = void 0 === r ? 0 : r,
					o = t.velocity,
					i = void 0 === o ? 0 : o,
					u = t.min,
					s = t.max,
					a = t.power,
					c = void 0 === a ? .8 : a,
					p = t.timeConstant,
					f = void 0 === p ? 700 : p,
					l = t.bounceStiffness,
					d = void 0 === l ? 500 : l,
					m = t.bounceDamping,
					y = void 0 === m ? 10 : m,
					h = t.restDelta,
					g = void 0 === h ? 1 : h,
					b = t.modifyTarget;
				return v(function(t) {
					var r, o = t.update,
						a = t.complete,
						p = w(n),
						l = !1,
						v = function(t) {
							return void 0 !== u && t <= u
						},
						m = function(t) {
							return void 0 !== s && t >= s
						},
						h = function(t) {
							return v(t) || m(t)
						},
						x = function(t, e) {
							r && r.stop(), r = t.start({
								update: function(t) {
									return p.update(t)
								},
								complete: function() {
									e ? e() : a()
								}
							})
						},
						_ = function(t) {
							l = !0, x(I((0, e.__assign)({}, t, {
								to: v(t.from) ? u : s,
								stiffness: d,
								damping: y,
								restDelta: g
							})))
						};
					if (p.subscribe(function(t) {
							o(t);
							var e = p.getVelocity();
							r && !l && function(t, e) {
								return v(t) && e < 0 || m(t) && e > 0
							}(t, e) && _({
								from: t,
								velocity: e
							})
						}), h(n)) _({
						from: n,
						velocity: i
					});
					else if (0 !== i) {
						var O = B({
							from: n,
							velocity: i,
							timeConstant: f,
							power: c,
							restDelta: h(n) ? 20 : g,
							modifyTarget: b
						});
						x(O, function() {
							var t = p.get();
							h(t) ? _({
								from: t,
								velocity: p.getVelocity()
							}) : a()
						})
					} else a();
					return {
						stop: function() {
							return r && r.stop()
						}
					}
				})
			},
			G = L(N, {
				from: o.number.test,
				velocity: o.number.test,
				min: o.number.test,
				max: o.number.test,
				damping: o.number.test,
				stiffness: o.number.test,
				modifyTarget: function(t) {
					return "function" == typeof t
				}
			});
		exports.inertia = G;
		var H = function() {
			return v(function(t) {
				var e = t.update,
					r = 0,
					o = n.default.update(function(t) {
						var n = t.timestamp;
						r || (r = n), e(n - r)
					}, !0, !0);
				return {
					stop: function() {
						return n.cancelSync.update(o)
					}
				}
			})
		};
		exports.everyFrame = H;
		var J = function(t) {
				var e = t.from,
					n = void 0 === e ? 0 : e,
					o = t.to,
					i = void 0 === o ? 1 : o,
					s = t.ease,
					a = void 0 === s ? u.linear : s;
				return v(function(t) {
					var e = t.update;
					return {
						seek: function(t) {
							return e(t)
						}
					}
				}).pipe(a, function(t) {
					return (0, r.mix)(n, i, t)
				})
			},
			Q = L(J, {
				ease: function(t) {
					return "function" == typeof t
				},
				from: o.number.test,
				to: o.number.test
			}),
			W = (0, r.clamp)(0, 1),
			Z = function(t) {
				return void 0 === t && (t = {}), v(function(e) {
					var o, i = e.update,
						s = e.complete,
						a = t.duration,
						c = void 0 === a ? 300 : a,
						p = t.ease,
						f = void 0 === p ? u.easeOut : p,
						l = t.flip,
						d = void 0 === l ? 0 : l,
						v = t.loop,
						m = void 0 === v ? 0 : v,
						y = t.yoyo,
						h = void 0 === y ? 0 : y,
						g = t.from,
						b = void 0 === g ? 0 : g,
						x = t.to,
						_ = void 0 === x ? 1 : x,
						O = t.elapsed,
						w = void 0 === O ? 0 : O,
						P = t.playDirection,
						S = void 0 === P ? 1 : P,
						A = t.flipCount,
						C = void 0 === A ? 0 : A,
						M = t.yoyoCount,
						V = void 0 === M ? 0 : M,
						F = t.loopCount,
						D = void 0 === F ? 0 : F,
						k = Q({
							from: b,
							to: _,
							ease: f
						}).start(i),
						j = 0,
						T = !1,
						E = function() {
							if (w > c) w -= 2 * (w - c);
							else if (w < 0) {
								w += 2 * (-1 * w)
							}
							S *= -1
						},
						q = function() {
							j = W((0, r.progress)(0, c, w)), k.seek(j)
						},
						R = function() {
							T = !0, o = n.default.update(function(t) {
								var e = t.delta;
								w += e * S, q(),
									function() {
										var t, e = 1 === S ? T && w >= c : T && w <= 0;
										if (!e) return !1;
										if (e && !m && !d && !h) return !0;
										var r = !1;
										return m && D < m ? (w = c - w, D++, r = !0) : d && C < d ? (w = c - w, k = Q({
											from: b = (t = [_, b])[0],
											to: _ = t[1],
											ease: f
										}).start(i), C++, r = !0) : h && V < h && (E(), V++, r = !0), !r
									}() && s && (n.cancelSync.update(o), n.default.update(s, !1, !0))
							}, !0)
						},
						X = function() {
							T = !1, o && n.cancelSync.update(o)
						};
					return R(), {
						isActive: function() {
							return T
						},
						getElapsed: function() {
							return (0, r.clamp)(0, c, w)
						},
						getProgress: function() {
							return j
						},
						stop: function() {
							X()
						},
						pause: function() {
							return X(), this
						},
						resume: function() {
							return T || R(), this
						},
						seek: function(t) {
							return w = (0, r.mix)(0, c, t), n.default.update(q, !1, !0), this
						},
						reverse: function() {
							return E(), this
						}
					}
				})
			};
		exports.tween = Z;
		var $ = (0, r.clamp)(0, 1),
			tt = function(t, e) {
				return t.map(function() {
					return e || u.easeOut
				}).splice(0, t.length - 1)
			},
			et = function(t) {
				var e = t.length;
				return t.map(function(t, r) {
					return 0 !== r ? r / (e - 1) : 0
				})
			},
			rt = function(t, e, n) {
				var o = t.length,
					i = o - 1,
					u = i - 1,
					s = e.map(function(t) {
						return t.start(n)
					});
				return function(e) {
					e <= t[0] && s[0].seek(0), e >= t[i] && s[u].seek(1);
					for (var n = 1; n < o && !(t[n] > e || n === i); n++);
					var a = (0, r.progress)(t[n - 1], t[n], e);
					s[n - 1].seek($(a))
				}
			},
			nt = function(t) {
				var r = t.easings,
					n = t.ease,
					o = void 0 === n ? u.linear : n,
					i = t.times,
					s = t.values,
					a = (0, e.__rest)(t, ["easings", "ease", "times", "values"]);
				r = Array.isArray(r) ? r : tt(s, r), i = i || et(s);
				var c = r.map(function(t, e) {
					return Q({
						from: s[e],
						to: s[e + 1],
						ease: t
					})
				});
				return Z((0, e.__assign)({}, a, {
					ease: o
				})).applyMiddleware(function(t) {
					return rt(i, c, t)
				})
			};
		exports.keyframes = nt;
		var ot = function(t) {
				return void 0 === t && (t = {}), v(function(e) {
					var o = e.complete,
						i = e.update,
						u = t.acceleration,
						s = void 0 === u ? 0 : u,
						a = t.friction,
						c = void 0 === a ? 0 : a,
						p = t.velocity,
						f = void 0 === p ? 0 : p,
						l = t.springStrength,
						d = t.to,
						v = t.restSpeed,
						m = void 0 === v ? .001 : v,
						y = t.from,
						h = void 0 === y ? 0 : y,
						g = n.default.update(function(t) {
							var e = t.delta,
								u = Math.max(e, 16);
							(s && (f += (0, r.velocityPerFrame)(s, u)), c && (f *= Math.pow(1 - c, u / 100)), void 0 !== l && void 0 !== d) && (f += (d - h) * (0, r.velocityPerFrame)(l, u));
							h += (0, r.velocityPerFrame)(f, u), i(h), !1 !== m && (!f || Math.abs(f) <= m) && (n.cancelSync.update(g), o())
						}, !0);
					return {
						set: function(t) {
							return h = t, this
						},
						setAcceleration: function(t) {
							return s = t, this
						},
						setFriction: function(t) {
							return c = t, this
						},
						setSpringStrength: function(t) {
							return l = t, this
						},
						setSpringTarget: function(t) {
							return d = t, this
						},
						setVelocity: function(t) {
							return f = t, this
						},
						stop: function() {
							return n.cancelSync.update(g)
						}
					}
				})
			},
			it = L(ot, {
				acceleration: o.number.test,
				friction: o.number.test,
				velocity: o.number.test,
				from: o.number.test,
				to: o.number.test,
				springStrength: o.number.test
			});
		exports.physics = it;
		var ut = 300,
			st = function(t) {
				var e = [],
					r = t[t.length - 1],
					n = "number" == typeof r,
					o = n ? r : 0,
					i = n ? t.slice(0, -1) : t,
					u = i.length,
					s = 0;
				return i.forEach(function(t, r) {
					if (e.push(t), r !== u - 1) {
						var n = t.duration || ut;
						s += o, e.push("-" + (n - s))
					}
				}), e
			},
			at = function(t, e) {
				return Array.isArray(e) ? t.push.apply(t, st(e)) : t.push(e), t
			},
			ct = function(t, e, r) {
				var n = t.duration,
					o = t.easings,
					i = t.times,
					s = t.values,
					a = s.length,
					c = i[a - 1],
					p = 0 === e.at ? 0 : e.at / n,
					f = (e.at + e.duration) / n;
				if (0 === r) s.push(e.from), i.push(p);
				else if (c !== p) {
					void 0 !== e.from && (s.push(s[a - 1]), i.push(p), o.push(u.linear));
					var l = void 0 !== e.from ? e.from : s[a - 1];
					s.push(l), i.push(p), o.push(u.linear)
				} else void 0 !== e.from && (s.push(e.from), i.push(p), o.push(u.linear));
				return s.push(e.to), i.push(f), o.push(e.ease || u.easeInOut), t
			},
			pt = function(t, r) {
				var n = void 0 === r ? {} : r,
					o = n.duration,
					i = n.elapsed,
					u = n.ease,
					s = n.loop,
					a = n.flip,
					c = n.yoyo,
					p = 0,
					f = 0,
					l = t.reduce(at, []),
					d = [];
				l.forEach(function(t) {
					if ("string" == typeof t) p += parseFloat(t);
					else if ("number" == typeof t) p = t;
					else {
						var r = (0, e.__assign)({}, t, {
							at: p
						});
						r.duration = void 0 === r.duration ? ut : r.duration, d.push(r), p += r.duration, f = Math.max(f, r.at + r.duration)
					}
				});
				for (var v = {}, m = d.length, y = 0; y < m; y++) {
					var h = d[y],
						g = h.track;
					if (void 0 === g) throw new Error("No track defined");
					v.hasOwnProperty(g) || (v[g] = []), v[g].push(h)
				}
				var b = {};
				for (var x in v)
					if (v.hasOwnProperty(x)) {
						var _ = v[x].reduce(ct, {
							duration: f,
							easings: [],
							times: [],
							values: []
						});
						b[x] = nt((0, e.__assign)({}, _, {
							duration: o || f,
							ease: u,
							elapsed: i,
							loop: s,
							yoyo: c,
							flip: a
						}))
					}
				return S(b)
			};
		exports.timeline = pt;
		var ft = function(t, e, r) {
			return v(function(n) {
				var o = n.update,
					i = e.split(" ").map(function(e) {
						return t.addEventListener(e, o, r), e
					});
				return {
					stop: function() {
						return i.forEach(function(e) {
							return t.removeEventListener(e, o, r)
						})
					}
				}
			})
		};
		exports.listen = ft;
		var lt = function() {
				return {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0,
					x: 0,
					y: 0
				}
			},
			dt = function(t, e) {
				return void 0 === e && (e = lt()), e.clientX = e.x = t.clientX, e.clientY = e.y = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY, e
			},
			vt = [lt()],
			mt = !1;
		if ("undefined" != typeof document) {
			var yt = function(t) {
				var e = t.touches;
				mt = !0;
				var r = e.length;
				vt.length = 0;
				for (var n = 0; n < r; n++) {
					var o = e[n];
					vt.push(dt(o))
				}
			};
			ft(document, "touchstart touchmove", {
				passive: !0,
				capture: !0
			}).start(yt)
		}
		var ht = function(t) {
			var e = void 0 === t ? {} : t,
				o = e.preventDefault,
				i = void 0 === o || o,
				u = e.scale,
				s = void 0 === u ? 1 : u,
				a = e.rotate,
				c = void 0 === a ? 0 : a;
			return v(function(t) {
				var e = t.update,
					o = {
						touches: vt,
						scale: s,
						rotate: c
					},
					u = 0,
					a = 0,
					p = vt.length > 1;
				if (p) {
					var f = vt[0],
						l = vt[1];
					u = (0, r.distance)(f, l), a = (0, r.angle)(f, l)
				}
				var d = function() {
						if (p) {
							var t = vt[0],
								n = vt[1],
								i = (0, r.distance)(t, n),
								f = (0, r.angle)(t, n);
							o.scale = s * (i / u), o.rotate = c + (f - a)
						}
						e(o)
					},
					v = ft(document, "touchmove", {
						passive: !i
					}).start(function(t) {
						(i || t.touches.length > 1) && t.preventDefault(), n.default.update(d)
					});
				return mt && n.default.update(d), {
					stop: function() {
						n.cancelSync.update(d), v.stop()
					}
				}
			})
		};
		exports.multitouch = ht;
		var gt = function() {
				return mt
			},
			bt = lt(),
			xt = !1;
		if ("undefined" != typeof document) {
			var _t = function(t) {
				xt = !0, dt(t, bt)
			};
			ft(document, "mousedown mousemove", !0).start(_t)
		}
		var Ot = function(t) {
			var e = (void 0 === t ? {} : t).preventDefault,
				r = void 0 === e || e;
			return v(function(t) {
				var e = t.update,
					o = function() {
						return e(bt)
					},
					i = ft(document, "mousemove").start(function(t) {
						r && t.preventDefault(), n.default.update(o)
					});
				return xt && n.default.update(o), {
					stop: function() {
						n.cancelSync.update(o), i.stop()
					}
				}
			})
		};
		exports.mouse = Ot;
		var wt = function(t) {
				return t[0]
			},
			Pt = function(t) {
				return void 0 === t && (t = {}), gt() ? ht(t).pipe(function(t) {
					return t.touches
				}, wt) : Ot(t)
			},
			St = function(t) {
				void 0 === t && (t = {});
				var n = t.x,
					o = t.y,
					i = (0, e.__rest)(t, ["x", "y"]);
				if (void 0 !== n || void 0 !== o) {
					var u = (0, r.applyOffset)(n || 0),
						s = (0, r.applyOffset)(o || 0),
						a = {
							x: 0,
							y: 0
						};
					return Pt(i).pipe(function(t) {
						return a.x = u(t.x), a.y = s(t.y), a
					})
				}
				return Pt(i)
			};
		exports.pointer = St;
		var At = function() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			return v(function(e) {
				var r, n = e.update,
					o = e.complete,
					i = 0,
					u = function() {
						r = t[i].start({
							complete: function() {
								++i >= t.length ? o() : u()
							},
							update: n
						})
					};
				return u(), {
					stop: function() {
						return r && r.stop()
					}
				}
			})
		};
		exports.chain = At;
		var Ct = function(t, n) {
			return v(function(o) {
				var i = 0,
					u = C(t, n).start((0, e.__assign)({}, o, {
						update: function(t) {
							var e = t[0],
								n = t[1];
							o.update((0, r.mix)(e, n, i))
						}
					}));
				return {
					setBalance: function(t) {
						return i = t
					},
					stop: function() {
						return u.stop()
					}
				}
			})
		};
		exports.crossfade = Ct;
		var Mt = function(t) {
			return v(function(e) {
				var r = e.complete,
					n = setTimeout(r, t);
				return {
					stop: function() {
						return clearTimeout(n)
					}
				}
			})
		};
		exports.delay = Mt;
		var Vt = function() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			return v(function(e) {
				var r = t.map(function(t) {
					return t.start(e)
				});
				return {
					stop: function() {
						return r.forEach(function(t) {
							return t.stop()
						})
					}
				}
			})
		};
		exports.merge = Vt;
		var Ft = function(t, e) {
			return v(function(r) {
				var n, o = r.update,
					i = r.complete,
					u = t.start({
						update: function() {
							return void 0 !== n && o(n)
						},
						complete: i
					}),
					s = e.start({
						update: function(t) {
							return n = t
						},
						complete: i
					});
				return {
					stop: function() {
						u.stop(), s.stop()
					}
				}
			})
		};
		exports.schedule = Ft;
		var Dt = function(t, e) {
			var r = "number" == typeof e,
				n = t.map(function(t, n) {
					var o = r ? e * n : e(n);
					return At(Mt(o), t)
				});
			return C.apply(void 0, n)
		};
		exports.stagger = Dt;
		var kt = function(t) {
				return function(e) {
					return "" + e + t
				}
			},
			jt = function(t, e, n) {
				return void 0 === e && (e = 0), void 0 === n && (n = 1),
					function(o) {
						var i = (0, r.progress)(e, n, o);
						return (0, r.mix)(e, n, g(t, i))
					}
			},
			Tt = function(t) {
				return function(r) {
					var n = (0, e.__assign)({}, r);
					for (var o in t)
						if (t.hasOwnProperty(o)) {
							var i = t[o];
							n[o] = i(r[o])
						}
					return n
				}
			},
			Et = Object.freeze({
				applyOffset: r.applyOffset,
				clamp: r.clamp,
				conditional: r.conditional,
				interpolate: r.interpolate,
				blendArray: r.mixArray,
				blendColor: r.mixColor,
				pipe: r.pipe,
				smooth: r.smooth,
				snap: r.snap,
				generateStaticSpring: r.springForce,
				nonlinearSpring: r.springForceExpo,
				linearSpring: r.springForceLinear,
				wrap: r.wrap,
				appendUnit: kt,
				steps: jt,
				transformMap: Tt
			});
		exports.transform = Et;
		var qt = function(t, e) {
			return (0, i.warning)(!1, "css() is deprecated, use styler instead"), (0, s.default)(t, e)
		};
		exports.css = qt;
		var Rt = function(t, e) {
			return (0, i.warning)(!1, "svg() is deprecated, use styler instead"), (0, s.default)(t, e)
		};
		exports.svg = Rt;
	}, {
		"tslib": "vCxL",
		"@popmotion/popcorn": "cue+",
		"framesync": "bSZI",
		"style-value-types": "Hokg",
		"hey-listen": "KFGT",
		"@popmotion/easing": "xQjT",
		"stylefire": "Q4bC",
		"process": "pBGv"
	}],
	"Zu7q": [function(require, module, exports) {
		"use strict";

		function t(t, s) {
			if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
		}

		function s(t, s) {
			for (var r = 0; r < s.length; r++) {
				var e = s[r];
				e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
			}
		}

		function r(t, r, e) {
			return r && s(t.prototype, r), e && s(t, e), t
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.Grab = void 0;
		var e = function() {
			function s(r) {
				r.indexSize, r.onIndexChange;
				var e = r.onGrabStart,
					n = r.onGrabMove,
					o = r.onGrabEnd;
				t(this, s), this.onGrabEnd = o, this.onGrabStart = e, this.onGrabMove = n, this.scroll = {
					start: 0,
					current: 0,
					initial: 0
				}, this.listen("mousedown", this.onMouseDown.bind(this)), this.listen("mousemove", this.onMouseMove.bind(this)), this.listen("mouseup", this.onMouseUp.bind(this)), this.listen("touchstart", this.onMouseDown.bind(this), !0), this.listen("touchmove", this.onMouseMove.bind(this), !0), this.listen(["touchend", "touchcancel"], this.onMouseUp.bind(this), !0)
			}
			return r(s, [{
				key: "listen",
				value: function(t, s, r) {
					var e = function(t) {
						"mouseout" === t.type && null != t.relatedTarget || s({
							y: t.clientY
						})
					};
					if (r && (e = function(t) {
							t.preventDefault(), s({
								y: t.targetTouches[0] ? t.targetTouches[0].clientY : null
							})
						}), Array.isArray(t))
						for (var n = 0; n < t.length; n++) window.addEventListener(t[n], e, !1);
					else window.addEventListener(t, e, !1)
				}
			}, {
				key: "onMouseDown",
				value: function(t) {
					this.scroll.inital = this.scroll.current, this.scroll.start = t.y, this.scroll.current = t.y, this.scroll.delta = this.scroll.current - this.scroll.start, this.onGrabStart({
						delta: this.scroll.delta,
						direction: Math.abs(this.scroll.delta),
						current: this.scroll.current,
						start: this.scroll.start
					})
				}
			}, {
				key: "onMouseMove",
				value: function(t) {
					this.scroll.start && (this.scroll.current = t.y, this.scroll.delta = this.scroll.current - this.scroll.start, this.onGrabMove({
						delta: this.scroll.delta,
						direction: Math.abs(this.scroll.delta),
						current: this.scroll.current,
						start: this.scroll.start
					}))
				}
			}, {
				key: "onMouseUp",
				value: function() {
					this.scroll.start && (this.onGrabEnd({
						delta: this.scroll.delta,
						direction: Math.abs(this.scroll.delta),
						current: this.scroll.current,
						start: this.scroll.start
					}), this.scroll.start = null, this.scroll.current = null, this.scroll.delta = null)
				}
			}]), s
		}();
		exports.Grab = e;
	}, {}],
	"Lcb8": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.reach = void 0;
		var e = function(e) {
			var r = e.from,
				t = e.to,
				n = e.restDelta,
				c = void 0 === n ? .01 : n,
				u = Object.assign({}, r),
				a = Object.keys(r),
				i = {
					current: null
				},
				o = function(e, r) {
					if (0 === a.length) return cancelAnimationFrame(i.current), i.current = null, void r(u);
					a.slice();
					for (var n, l, s = a.length; s >= 0; s--) l = a[s], n = u[l] + .1 * (t[l] - u[l]), Math.abs(t[l] - n) < c ? (u[l] = t[l], a.splice(s, 1), s--) : u[l] = n;
					e(u), i.current = requestAnimationFrame(o)
				};
			return {
				start: function(e) {
					var r = e.update,
						t = e.complete;
					return o = o.bind(null, r, t), i.current = requestAnimationFrame(o), {
						stop: function() {
							cancelAnimationFrame(i.current), i.current = null
						}
					}
				}
			}
		};
		exports.reach = e;
	}, {}],
	"UaVh": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.Showcase = o;
		var t = require("./GLManager"),
			i = require("popmotion"),
			e = require("./Grab"),
			n = require("./reach");

		function o(i) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			this.GL = new t.GLManager(i), this.GL.createPlane(), this.data = i, this.progress = 0, this.direction = 1, this.waveIntensity = 0, this.options = n, this.index = {
				target: 0,
				current: 0,
				initial: 0,
				scrollSize: window.innerHeight / 6,
				active: 0
			}, this.follower = {
				x: 0,
				y: 0
			}, this.followerSpring = null, this.slidesSpring = null, this.grab = new e.Grab({
				onGrabStart: this.onGrabStart.bind(this),
				onGrabMove: this.onGrabMove.bind(this),
				onGrabEnd: this.onGrabEnd.bind(this)
			})
		}

		function s(t, i, e) {
			return Math.max(i, Math.min(t, e))
		}
		o.prototype.mount = function(t) {
			this.GL.mount(t)
		}, o.prototype.render = function() {
			this.GL.render()
		}, o.prototype.onMouseMove = function(t) {
			var i = this;
			this.followerSpring && (this.followerSpring.stop(), this.followerSpring = null), this.followerSpring = (0, n.reach)({
				from: {
					x: this.follower.x,
					y: this.follower.y
				},
				to: {
					x: t.clientX,
					y: t.clientY
				},
				velocity: {
					x: this.follower.vx,
					y: this.follower.vy
				},
				stiffness: 500,
				damping: 50,
				mass: 1
			}).start({
				update: function(t) {
					var e = {
						x: t.x - i.follower.x,
						y: t.y - i.follower.y
					};
					i.GL.updateRgbEffect({
						position: t,
						velocity: e
					}), i.follower = {
						x: t.x,
						y: t.y,
						vx: e.x,
						vy: e.y
					}
				},
				complete: function() {
					i.GL.updateRgbEffect({
						position: i.follower,
						velocity: {
							x: 0,
							y: 0
						}
					}), i.follower.vx = 0, i.follower.vy = 0
				}
			})
		}, o.prototype.onGrabMove = function(t) {
			var e = this;
			this.index.target = s(this.index.initial + t.delta / this.index.scrollSize, .51 - this.data.length, .49);
			var o = s(Math.round(-this.index.target), 0, this.data.length - 1);
			this.index.active !== o && (this.index.active = o, this.options.onActiveIndexChange && this.options.onActiveIndexChange(this.index.active), this.GL.updateTexture(o), this.textureProgressSpring && (this.textureProgressSpring.stop(), this.textureProgressSpring = null), this.textureProgressSpring = (0, i.spring)({
				from: 0,
				to: 1,
				stiffness: 400,
				damping: 30
			}).start(function(t) {
				e.GL.updateTexture(null, t)
			})), this.slidesPop && this.slidesPop.stop(), this.slidesPop = (0, n.reach)({
				from: {
					index: this.index.current
				},
				to: {
					index: this.index.target
				},
				restDelta: .001
			}).start({
				update: function(t) {
					e.options.onIndexChange && e.options.onIndexChange(t.index), e.index.current = t.index
				},
				complete: function(t) {
					e.options.onIndexChange && e.options.onIndexChange(t.index), e.index.current = t.index
				}
			})
		}, o.prototype.onGrabStart = function() {
			var t = this;
			this.options.onZoomOutStart && this.options.onZoomOutStart({
				activeIndex: this.index.active
			}), this.index.initial = this.index.current, this.GLStickPop && this.GLStickPop.stop(), this.GL.scheduleLoop();
			var e = (0, i.spring)({
					from: 0 === this.progress ? 0 : this.direction,
					to: 0,
					mass: 1,
					stiffness: 800,
					damping: 2e3
				}),
				n = (0, i.spring)({
					from: this.progress,
					to: 1,
					mass: 5,
					stiffness: 350,
					damping: 500
				}),
				o = (0, i.spring)({
					from: this.waveIntensity,
					to: .5,
					mass: 5,
					stiffness: 10,
					damping: 200
				});
			this.GLStickPop = (0, i.parallel)(n, e, o).start({
				update: function(i) {
					t.progress, i[0], t.progress = i[0], t.direction = i[1], t.waveIntensity = i[2], t.GL.updateStickEffect({
						progress: t.progress,
						direction: t.direction,
						waveIntensity: t.waveIntensity
					})
				},
				complete: function() {
					t.options.onZoomOutFinish && t.options.onZoomOutFinish({
						activeIndex: t.index.active
					})
				}
			})
		}, o.prototype.snapCurrentToActiveIndex = function() {
			var t = this;
			this.slidesPop && this.slidesPop.stop(), this.slidesPop = (0, n.reach)({
				from: {
					index: this.index.current
				},
				to: {
					index: Math.round(this.index.target)
				},
				restDelta: .001
			}).start({
				complete: function() {},
				update: function(i) {
					t.options.onIndexChange && t.options.onIndexChange(i.index), t.index.current = i.index
				}
			})
		}, o.prototype.onGrabEnd = function() {
			var t = this;
			this.options.onFullscreenStart && this.options.onFullscreenStart({
				activeIndex: this.index.active
			}), this.snapCurrentToActiveIndex(), this.GLStickPop && this.GLStickPop.stop();
			var e = (0, i.spring)({
					from: 1 === this.progress ? 1 : this.direction,
					to: 1,
					mass: 1,
					stiffness: 800,
					damping: 2e3
				}),
				n = (0, i.spring)({
					from: this.progress,
					to: 0,
					mass: 4,
					stiffness: 400,
					damping: 70,
					restDelta: 1e-4
				}),
				o = (0, i.spring)({
					from: this.waveIntensity,
					to: 0,
					mass: .1,
					stiffness: 800,
					damping: 50
				});
			this.GLStickPop = (0, i.parallel)(n, e, o).start({
				update: function(i) {
					t.progress = i[0], t.direction = i[1], t.waveIntensity = i[2], t.GL.updateStickEffect({
						progress: t.progress,
						direction: t.direction,
						waveIntensity: t.waveIntensity
					})
				},
				complete: function() {
					t.options.onFullscreenFinish && t.options.onFullscreenFinish({
						activeIndex: t.index.active
					}), t.GL.cancelLoop()
				}
			})
		}, o.prototype.onResize = function() {
			this.GL.onResize()
		};
	}, {
		"./GLManager": "XX42",
		"popmotion": "z2lI",
		"./Grab": "Zu7q",
		"./reach": "Lcb8"
	}],
	"/YDW": [function(require, module, exports) {
		"use strict";

		function e(e, s) {
			if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
		}

		function s(e, s) {
			for (var t = 0; t < s.length; t++) {
				var i = s[t];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
			}
		}

		function t(e, t, i) {
			return t && s(e.prototype, t), i && s(e, i), e
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.Slides = void 0;
		var i = function(e, s) {
				var t = document.createElement(e);
				return t.className = s, t
			},
			n = function() {
				function s(t) {
					var n = this;
					e(this, s), this.data = t, this.container = i("div", "slides"), this.currentIdx = 0, this.slides = this.data.map(function(e, s) {
						var t = i("div", "slide"),
							a = i("h1", "slide-title title-klik"),
							r = i("p", "slide-meta"),
							l = i("a", "slide-more");
						return t.classList.add(0 !== s ? "next" : "show-meta"), 
						r.innerHTML =  e.meta , 
						a.innerHTML = '<a href='+ e.link +' id='+ e.id +'>'+ e.title +'</a>', 
						l.innerHTML = '<a href='+ e.link +' id='+ e.id +'>Log in</a>', 
						t.appendChild(r), 
						t.appendChild(a), 
						t.appendChild(l), 
						n.container.appendChild(t), 
						t
					})
				}
				return t(s, [{
					key: "mount",
					value: function(e) {
						e.appendChild(this.container)
					}
				}, {
					key: "onActiveIndexChange",
					value: function(e) {
						this.currentIdx = e;
						for (var s = 0; s < this.slides.length; s++) e === s ? (this.slides[s].classList.remove("next"), this.slides[s].classList.remove("prev")) : e > s ? (this.slides[s].classList.remove("next"), this.slides[s].classList.add("prev")) : (this.slides[s].classList.add("next"), this.slides[s].classList.remove("prev"))
					}
				}, {
					key: "onMove",
					value: function(e) {
						this.container.style.transform = "translateY(".concat(100 * e / this.slides.length, "%)")
					}
				}, {
					key: "appear",
					value: function() {
						this.container.classList.add("scrolling"), this.slides[this.currentIdx].classList.remove("show-meta")
					}
				}, {
					key: "disperse",
					value: function(e) {
						this.slides[this.currentIdx].classList.add("show-meta"), this.container.classList.remove("scrolling");
						for (var s = 0; s < this.data.length; s++) s > e ? (this.slides[s].classList.add("next"), this.slides[s].classList.remove("prev")) : s < e ? (this.slides[s].classList.remove("next"), this.slides[s].classList.add("prev")) : (this.slides[s].classList.remove("next"), this.slides[s].classList.remove("prev"))
					}
				}]), s
			}();
		exports.Slides = n;
	}, {}],
	"zps2": [function(require, module, exports) {
		"use strict";

		function t(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function e(t, e) {
			for (var s = 0; s < e.length; s++) {
				var o = e[s];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
			}
		}

		function s(t, s, o) {
			return s && e(t.prototype, s), o && e(t, o), t
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.Cursor = void 0;
		var o = function(t, e, s) {
				return (1 - s) * t + s * e
			},
			i = document.body,
			n = function(t) {
				var e = 0,
					s = 0;
				return t || (t = window.event), t.pageX || t.pageY ? (e = t.pageX, s = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + i.scrollLeft + document.documentElement.scrollLeft, s = t.clientY + i.scrollTop + document.documentElement.scrollTop), {
					x: e,
					y: s
				}
			},
			r = function() {
				function e(s) {
					var o = this;
					t(this, e), this.DOM = {
						el: s
					}, this.DOM.dot = this.DOM.el.querySelector(".cursor__inner--dot"), this.DOM.circle = this.DOM.el.querySelector(".cursor__inner--circle"), this.bounds = {
						dot: this.DOM.dot.getBoundingClientRect(),
						circle: this.DOM.circle.getBoundingClientRect()
					}, this.scale = 1, this.opacity = 1, this.mousePos = {
						x: 0,
						y: 0
					}, this.lastMousePos = {
						dot: {
							x: 0,
							y: 0
						},
						circle: {
							x: 0,
							y: 0
						}
					}, this.lastScale = 1, this.initEvents(), requestAnimationFrame(function() {
						return o.render()
					})
				}
				return s(e, [{
					key: "initEvents",
					value: function() {
						var t = this;
						window.addEventListener("mousemove", function(e) {
							return t.mousePos = n(e)
						})
					}
				}, {
					key: "render",
					value: function() {
						var t = this;
						this.lastMousePos.dot.x = o(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1), this.lastMousePos.dot.y = o(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1), this.lastMousePos.circle.x = o(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, .15), this.lastMousePos.circle.y = o(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, .15), this.lastScale = o(this.lastScale, this.scale, .15), this.DOM.dot.style.transform = "translateX(".concat(this.lastMousePos.dot.x, "px) translateY(").concat(this.lastMousePos.dot.y, "px)"), this.DOM.circle.style.transform = "translateX(".concat(this.lastMousePos.circle.x, "px) translateY(").concat(this.lastMousePos.circle.y, "px) scale(").concat(this.lastScale, ")"), requestAnimationFrame(function() {
							return t.render()
						})
					}
				}, {
					key: "enter",
					value: function() {
						this.scale = 1.5, this.DOM.dot.style.display = "none"
					}
				}, {
					key: "leave",
					value: function() {
						this.scale = 1, this.DOM.dot.style.display = ""
					}
				}]), e
			}();
		exports.Cursor = r;
	}, {}],
	"6qz6": [function(require, module, exports) {
		module.exports = "./images/pms.jpg";
	}, {}],
	"9q0M": [function(require, module, exports) {
		module.exports = "./images/itam.jpg";
	}, {}],
	"NbwZ": [function(require, module, exports) {
		module.exports = "./images/point.jpg";
	}, {}],
	"4a/l": [function(require, module, exports) {
		module.exports = "./images/jibas.jpg";
	}, {}],
	"ZEHq": [function(require, module, exports) {
		module.exports = "./images/elib.jpg";
	}, {}],
	"Focm": [function(require, module, exports) {
		"use strict";
		var e = require("./Showcase"),
			n = require("./Slides"),
			a = require("./Cursor"),
			i = s(require("images/1.jpg")),
			t = s(require("images/2.jpg")),
			o = s(require("images/3.jpg")),
			r = s(require("images/4.jpg")),
			u = s(require("images/5.jpg"));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		var d = document.getElementById("app"),
			l = new a.Cursor(document.querySelector(".cursor")),
			c = [{
				image: i.default,
				title: "PMS",
				meta: "Project Management",
				link: '../pms',
				id: 'idPms'
			}, {
				image: t.default,
				title: "ITAM",
				meta: "IT Assets Management",
				link: '../itam',
				id: 'idItam'
			}, {
				image: o.default,
				title: "Point",
				meta: "Point Management",
				link: '../fgsis_point',
				id: 'idPoint'
			}
			, {
				image: r.default,
				title: "JIBAS",
				meta: "School Management",
				link: '../jibas',
				id: 'idJibas'
			}
			, {
				image: u.default,
				title: "e-lib",
				meta: "Digital Library",
				link: '../elib',
				id: 'idElib'
			}
			],
			m = new n.Slides(c),
			g = new e.Showcase(c, {
				onActiveIndexChange: function(e) {
					m.onActiveIndexChange(e)
				},
				onIndexChange: function(e) {
					m.onMove(e)
				},
				onZoomOutStart: function(e) {
					e.activeIndex;
					l.enter(), m.appear()
				},
				onZoomOutFinish: function(e) {
					e.activeIndex
				},
				onFullscreenStart: function(e) {
					var n = e.activeIndex;
					l.leave(), m.disperse(n)
				},
				onFullscreenFinish: function(e) {
					e.activeIndex
				}
			});
		g.mount(d),
			m.mount(d),
			g.render(),
			window.addEventListener("resize", function() {
				g.onResize()
			}),
			window.addEventListener("mousemove", function(e) {
				g.onMouseMove(e)
			});
	}, {
		"./Showcase": "UaVh",
		"./Slides": "/YDW",
		"./Cursor": "zps2",
		"images/1.jpg": "6qz6",
		"images/2.jpg": "9q0M",
		"images/3.jpg": "NbwZ",
		"images/4.jpg": "4a/l",
		"images/5.jpg": "ZEHq"
	}]
}, {}, ["Focm"], null)
//# sourceMappingURL=index.js.map
