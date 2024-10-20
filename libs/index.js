!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.docx = e())
    : (t.docx = e());
})(this, function () {
  return (() => {
    var t = {
        742: (t, e) => {
          "use strict";
          (e.byteLength = function (t) {
            var e = c(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (e.toByteArray = function (t) {
              var e,
                r,
                i = c(t),
                o = i[0],
                a = i[1],
                u = new s(
                  (function (t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, o, a)
                ),
                l = 0,
                h = a > 0 ? o - 4 : o;
              for (r = 0; r < h; r += 4)
                (e =
                  (n[t.charCodeAt(r)] << 18) |
                  (n[t.charCodeAt(r + 1)] << 12) |
                  (n[t.charCodeAt(r + 2)] << 6) |
                  n[t.charCodeAt(r + 3)]),
                  (u[l++] = (e >> 16) & 255),
                  (u[l++] = (e >> 8) & 255),
                  (u[l++] = 255 & e);
              return (
                2 === a &&
                  ((e =
                    (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
                  (u[l++] = 255 & e)),
                1 === a &&
                  ((e =
                    (n[t.charCodeAt(r)] << 10) |
                    (n[t.charCodeAt(r + 1)] << 4) |
                    (n[t.charCodeAt(r + 2)] >> 2)),
                  (u[l++] = (e >> 8) & 255),
                  (u[l++] = 255 & e)),
                u
              );
            }),
            (e.fromByteArray = function (t) {
              for (
                var e,
                  n = t.length,
                  s = n % 3,
                  i = [],
                  o = 16383,
                  a = 0,
                  c = n - s;
                a < c;
                a += o
              )
                i.push(u(t, a, a + o > c ? c : a + o));
              return (
                1 === s
                  ? ((e = t[n - 1]),
                    i.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                  : 2 === s &&
                    ((e = (t[n - 2] << 8) + t[n - 1]),
                    i.push(
                      r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="
                    )),
                i.join("")
              );
            });
          for (
            var r = [],
              n = [],
              s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              i =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              o = 0,
              a = i.length;
            o < a;
            ++o
          )
            (r[o] = i[o]), (n[i.charCodeAt(o)] = o);
          function c(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }
          function u(t, e, n) {
            for (var s, i, o = [], a = e; a < n; a += 3)
              (s =
                ((t[a] << 16) & 16711680) +
                ((t[a + 1] << 8) & 65280) +
                (255 & t[a + 2])),
                o.push(
                  r[((i = s) >> 18) & 63] +
                    r[(i >> 12) & 63] +
                    r[(i >> 6) & 63] +
                    r[63 & i]
                );
            return o.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        764: (t, e, r) => {
          "use strict";
          const n = r(742),
            s = r(645),
            i =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (e.Buffer = c),
            (e.SlowBuffer = function (t) {
              return +t != t && (t = 0), c.alloc(+t);
            }),
            (e.INSPECT_MAX_BYTES = 50);
          const o = 2147483647;
          function a(t) {
            if (t > o)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            const e = new Uint8Array(t);
            return Object.setPrototypeOf(e, c.prototype), e;
          }
          function c(t, e, r) {
            if ("number" == typeof t) {
              if ("string" == typeof e)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return h(t);
            }
            return u(t, e, r);
          }
          function u(t, e, r) {
            if ("string" == typeof t)
              return (function (t, e) {
                if (
                  (("string" == typeof e && "" !== e) || (e = "utf8"),
                  !c.isEncoding(e))
                )
                  throw new TypeError("Unknown encoding: " + e);
                const r = 0 | m(t, e);
                let n = a(r);
                const s = n.write(t, e);
                return s !== r && (n = n.slice(0, s)), n;
              })(t, e);
            if (ArrayBuffer.isView(t))
              return (function (t) {
                if (q(t, Uint8Array)) {
                  const e = new Uint8Array(t);
                  return d(e.buffer, e.byteOffset, e.byteLength);
                }
                return p(t);
              })(t);
            if (null == t)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            if (q(t, ArrayBuffer) || (t && q(t.buffer, ArrayBuffer)))
              return d(t, e, r);
            if (
              "undefined" != typeof SharedArrayBuffer &&
              (q(t, SharedArrayBuffer) || (t && q(t.buffer, SharedArrayBuffer)))
            )
              return d(t, e, r);
            if ("number" == typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            const n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return c.from(n, e, r);
            const s = (function (t) {
              if (c.isBuffer(t)) {
                const e = 0 | f(t.length),
                  r = a(e);
                return 0 === r.length || t.copy(r, 0, 0, e), r;
              }
              return void 0 !== t.length
                ? "number" != typeof t.length || Z(t.length)
                  ? a(0)
                  : p(t)
                : "Buffer" === t.type && Array.isArray(t.data)
                ? p(t.data)
                : void 0;
            })(t);
            if (s) return s;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof t[Symbol.toPrimitive]
            )
              return c.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          }
          function l(t) {
            if ("number" != typeof t)
              throw new TypeError('"size" argument must be of type number');
            if (t < 0)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
          }
          function h(t) {
            return l(t), a(t < 0 ? 0 : 0 | f(t));
          }
          function p(t) {
            const e = t.length < 0 ? 0 : 0 | f(t.length),
              r = a(e);
            for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
            return r;
          }
          function d(t, e, r) {
            if (e < 0 || t.byteLength < e)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return (
              (n =
                void 0 === e && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, e)
                  : new Uint8Array(t, e, r)),
              Object.setPrototypeOf(n, c.prototype),
              n
            );
          }
          function f(t) {
            if (t >= o)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  o.toString(16) +
                  " bytes"
              );
            return 0 | t;
          }
          function m(t, e) {
            if (c.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || q(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof t
              );
            const r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let s = !1;
            for (;;)
              switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return V(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return $(t).length;
                default:
                  if (s) return n ? -1 : V(t).length;
                  (e = ("" + e).toLowerCase()), (s = !0);
              }
          }
          function w(t, e, r) {
            let n = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return O(this, e, r);
                case "utf8":
                case "utf-8":
                  return S(this, e, r);
                case "ascii":
                  return I(this, e, r);
                case "latin1":
                case "binary":
                  return N(this, e, r);
                case "base64":
                  return A(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return C(this, e, r);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (n = !0);
              }
          }
          function g(t, e, r) {
            const n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }
          function y(t, e, r, n, s) {
            if (0 === t.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              Z((r = +r)) && (r = s ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            ) {
              if (s) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!s) return -1;
              r = 0;
            }
            if (("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)))
              return 0 === e.length ? -1 : b(t, e, r, n, s);
            if ("number" == typeof e)
              return (
                (e &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? s
                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                  : b(t, [e], r, n, s)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function b(t, e, r, n, s) {
            let i,
              o = 1,
              a = t.length,
              c = e.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (o = 2), (a /= 2), (c /= 2), (r /= 2);
            }
            function u(t, e) {
              return 1 === o ? t[e] : t.readUInt16BE(e * o);
            }
            if (s) {
              let n = -1;
              for (i = r; i < a; i++)
                if (u(t, i) === u(e, -1 === n ? 0 : i - n)) {
                  if ((-1 === n && (n = i), i - n + 1 === c)) return n * o;
                } else -1 !== n && (i -= i - n), (n = -1);
            } else
              for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                let r = !0;
                for (let n = 0; n < c; n++)
                  if (u(t, i + n) !== u(e, n)) {
                    r = !1;
                    break;
                  }
                if (r) return i;
              }
            return -1;
          }
          function v(t, e, r, n) {
            r = Number(r) || 0;
            const s = t.length - r;
            n ? (n = Number(n)) > s && (n = s) : (n = s);
            const i = e.length;
            let o;
            for (n > i / 2 && (n = i / 2), o = 0; o < n; ++o) {
              const n = parseInt(e.substr(2 * o, 2), 16);
              if (Z(n)) return o;
              t[r + o] = n;
            }
            return o;
          }
          function _(t, e, r, n) {
            return X(V(e, t.length - r), t, r, n);
          }
          function x(t, e, r, n) {
            return X(
              (function (t) {
                const e = [];
                for (let r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              })(e),
              t,
              r,
              n
            );
          }
          function E(t, e, r, n) {
            return X($(e), t, r, n);
          }
          function T(t, e, r, n) {
            return X(
              (function (t, e) {
                let r, n, s;
                const i = [];
                for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                  (r = t.charCodeAt(o)),
                    (n = r >> 8),
                    (s = r % 256),
                    i.push(s),
                    i.push(n);
                return i;
              })(e, t.length - r),
              t,
              r,
              n
            );
          }
          function A(t, e, r) {
            return 0 === e && r === t.length
              ? n.fromByteArray(t)
              : n.fromByteArray(t.slice(e, r));
          }
          function S(t, e, r) {
            r = Math.min(t.length, r);
            const n = [];
            let s = e;
            for (; s < r; ) {
              const e = t[s];
              let i = null,
                o = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
              if (s + o <= r) {
                let r, n, a, c;
                switch (o) {
                  case 1:
                    e < 128 && (i = e);
                    break;
                  case 2:
                    (r = t[s + 1]),
                      128 == (192 & r) &&
                        ((c = ((31 & e) << 6) | (63 & r)), c > 127 && (i = c));
                    break;
                  case 3:
                    (r = t[s + 1]),
                      (n = t[s + 2]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        ((c = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                        c > 2047 && (c < 55296 || c > 57343) && (i = c));
                    break;
                  case 4:
                    (r = t[s + 1]),
                      (n = t[s + 2]),
                      (a = t[s + 3]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        128 == (192 & a) &&
                        ((c =
                          ((15 & e) << 18) |
                          ((63 & r) << 12) |
                          ((63 & n) << 6) |
                          (63 & a)),
                        c > 65535 && c < 1114112 && (i = c));
                }
              }
              null === i
                ? ((i = 65533), (o = 1))
                : i > 65535 &&
                  ((i -= 65536),
                  n.push(((i >>> 10) & 1023) | 55296),
                  (i = 56320 | (1023 & i))),
                n.push(i),
                (s += o);
            }
            return (function (t) {
              const e = t.length;
              if (e <= R) return String.fromCharCode.apply(String, t);
              let r = "",
                n = 0;
              for (; n < e; )
                r += String.fromCharCode.apply(String, t.slice(n, (n += R)));
              return r;
            })(n);
          }
          (e.kMaxLength = o),
            (c.TYPED_ARRAY_SUPPORT = (function () {
              try {
                const t = new Uint8Array(1),
                  e = {
                    foo: function () {
                      return 42;
                    },
                  };
                return (
                  Object.setPrototypeOf(e, Uint8Array.prototype),
                  Object.setPrototypeOf(t, e),
                  42 === t.foo()
                );
              } catch (t) {
                return !1;
              }
            })()),
            c.TYPED_ARRAY_SUPPORT ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(c.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(c.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.byteOffset;
              },
            }),
            (c.poolSize = 8192),
            (c.from = function (t, e, r) {
              return u(t, e, r);
            }),
            Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(c, Uint8Array),
            (c.alloc = function (t, e, r) {
              return (function (t, e, r) {
                return (
                  l(t),
                  t <= 0
                    ? a(t)
                    : void 0 !== e
                    ? "string" == typeof r
                      ? a(t).fill(e, r)
                      : a(t).fill(e)
                    : a(t)
                );
              })(t, e, r);
            }),
            (c.allocUnsafe = function (t) {
              return h(t);
            }),
            (c.allocUnsafeSlow = function (t) {
              return h(t);
            }),
            (c.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== c.prototype;
            }),
            (c.compare = function (t, e) {
              if (
                (q(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                q(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                !c.isBuffer(t) || !c.isBuffer(e))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (t === e) return 0;
              let r = t.length,
                n = e.length;
              for (let s = 0, i = Math.min(r, n); s < i; ++s)
                if (t[s] !== e[s]) {
                  (r = t[s]), (n = e[s]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (c.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (c.concat = function (t, e) {
              if (!Array.isArray(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              if (0 === t.length) return c.alloc(0);
              let r;
              if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
              const n = c.allocUnsafe(e);
              let s = 0;
              for (r = 0; r < t.length; ++r) {
                let e = t[r];
                if (q(e, Uint8Array))
                  s + e.length > n.length
                    ? (c.isBuffer(e) || (e = c.from(e)), e.copy(n, s))
                    : Uint8Array.prototype.set.call(n, e, s);
                else {
                  if (!c.isBuffer(e))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  e.copy(n, s);
                }
                s += e.length;
              }
              return n;
            }),
            (c.byteLength = m),
            (c.prototype._isBuffer = !0),
            (c.prototype.swap16 = function () {
              const t = this.length;
              if (t % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits"
                );
              for (let e = 0; e < t; e += 2) g(this, e, e + 1);
              return this;
            }),
            (c.prototype.swap32 = function () {
              const t = this.length;
              if (t % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits"
                );
              for (let e = 0; e < t; e += 4)
                g(this, e, e + 3), g(this, e + 1, e + 2);
              return this;
            }),
            (c.prototype.swap64 = function () {
              const t = this.length;
              if (t % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits"
                );
              for (let e = 0; e < t; e += 8)
                g(this, e, e + 7),
                  g(this, e + 1, e + 6),
                  g(this, e + 2, e + 5),
                  g(this, e + 3, e + 4);
              return this;
            }),
            (c.prototype.toString = function () {
              const t = this.length;
              return 0 === t
                ? ""
                : 0 === arguments.length
                ? S(this, 0, t)
                : w.apply(this, arguments);
            }),
            (c.prototype.toLocaleString = c.prototype.toString),
            (c.prototype.equals = function (t) {
              if (!c.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === c.compare(this, t);
            }),
            (c.prototype.inspect = function () {
              let t = "";
              const r = e.INSPECT_MAX_BYTES;
              return (
                (t = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (t += " ... "),
                "<Buffer " + t + ">"
              );
            }),
            i && (c.prototype[i] = c.prototype.inspect),
            (c.prototype.compare = function (t, e, r, n, s) {
              if (
                (q(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                !c.isBuffer(t))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t
                );
              if (
                (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === s && (s = this.length),
                e < 0 || r > t.length || n < 0 || s > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= s && e >= r) return 0;
              if (n >= s) return -1;
              if (e >= r) return 1;
              if (this === t) return 0;
              let i = (s >>>= 0) - (n >>>= 0),
                o = (r >>>= 0) - (e >>>= 0);
              const a = Math.min(i, o),
                u = this.slice(n, s),
                l = t.slice(e, r);
              for (let t = 0; t < a; ++t)
                if (u[t] !== l[t]) {
                  (i = u[t]), (o = l[t]);
                  break;
                }
              return i < o ? -1 : o < i ? 1 : 0;
            }),
            (c.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (c.prototype.indexOf = function (t, e, r) {
              return y(this, t, e, r, !0);
            }),
            (c.prototype.lastIndexOf = function (t, e, r) {
              return y(this, t, e, r, !1);
            }),
            (c.prototype.write = function (t, e, r, n) {
              if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
              else if (void 0 === r && "string" == typeof e)
                (n = e), (r = this.length), (e = 0);
              else {
                if (!isFinite(e))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                  );
                (e >>>= 0),
                  isFinite(r)
                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                    : ((n = r), (r = void 0));
              }
              const s = this.length - e;
              if (
                ((void 0 === r || r > s) && (r = s),
                (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              let i = !1;
              for (;;)
                switch (n) {
                  case "hex":
                    return v(this, t, e, r);
                  case "utf8":
                  case "utf-8":
                    return _(this, t, e, r);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return x(this, t, e, r);
                  case "base64":
                    return E(this, t, e, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return T(this, t, e, r);
                  default:
                    if (i) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (i = !0);
                }
            }),
            (c.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          const R = 4096;
          function I(t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let s = e; s < r; ++s) n += String.fromCharCode(127 & t[s]);
            return n;
          }
          function N(t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let s = e; s < r; ++s) n += String.fromCharCode(t[s]);
            return n;
          }
          function O(t, e, r) {
            const n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            let s = "";
            for (let n = e; n < r; ++n) s += Y[t[n]];
            return s;
          }
          function C(t, e, r) {
            const n = t.slice(e, r);
            let s = "";
            for (let t = 0; t < n.length - 1; t += 2)
              s += String.fromCharCode(n[t] + 256 * n[t + 1]);
            return s;
          }
          function k(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function D(t, e, r, n, s, i) {
            if (!c.isBuffer(t))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance'
              );
            if (e > s || e < i)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range");
          }
          function L(t, e, r, n, s) {
            j(e, n, s, t, r, 7);
            let i = Number(e & BigInt(4294967295));
            (t[r++] = i),
              (i >>= 8),
              (t[r++] = i),
              (i >>= 8),
              (t[r++] = i),
              (i >>= 8),
              (t[r++] = i);
            let o = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (
              (t[r++] = o),
              (o >>= 8),
              (t[r++] = o),
              (o >>= 8),
              (t[r++] = o),
              (o >>= 8),
              (t[r++] = o),
              r
            );
          }
          function P(t, e, r, n, s) {
            j(e, n, s, t, r, 7);
            let i = Number(e & BigInt(4294967295));
            (t[r + 7] = i),
              (i >>= 8),
              (t[r + 6] = i),
              (i >>= 8),
              (t[r + 5] = i),
              (i >>= 8),
              (t[r + 4] = i);
            let o = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (
              (t[r + 3] = o),
              (o >>= 8),
              (t[r + 2] = o),
              (o >>= 8),
              (t[r + 1] = o),
              (o >>= 8),
              (t[r] = o),
              r + 8
            );
          }
          function F(t, e, r, n, s, i) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function B(t, e, r, n, i) {
            return (
              (e = +e),
              (r >>>= 0),
              i || F(t, 0, r, 4),
              s.write(t, e, r, n, 23, 4),
              r + 4
            );
          }
          function M(t, e, r, n, i) {
            return (
              (e = +e),
              (r >>>= 0),
              i || F(t, 0, r, 8),
              s.write(t, e, r, n, 52, 8),
              r + 8
            );
          }
          (c.prototype.slice = function (t, e) {
            const r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (e = void 0 === e ? r : ~~e) < 0
                ? (e += r) < 0 && (e = 0)
                : e > r && (e = r),
              e < t && (e = t);
            const n = this.subarray(t, e);
            return Object.setPrototypeOf(n, c.prototype), n;
          }),
            (c.prototype.readUintLE = c.prototype.readUIntLE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || k(t, e, this.length);
                let n = this[t],
                  s = 1,
                  i = 0;
                for (; ++i < e && (s *= 256); ) n += this[t + i] * s;
                return n;
              }),
            (c.prototype.readUintBE = c.prototype.readUIntBE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || k(t, e, this.length);
                let n = this[t + --e],
                  s = 1;
                for (; e > 0 && (s *= 256); ) n += this[t + --e] * s;
                return n;
              }),
            (c.prototype.readUint8 = c.prototype.readUInt8 =
              function (t, e) {
                return (t >>>= 0), e || k(t, 1, this.length), this[t];
              }),
            (c.prototype.readUint16LE = c.prototype.readUInt16LE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || k(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                );
              }),
            (c.prototype.readUint16BE = c.prototype.readUInt16BE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || k(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                );
              }),
            (c.prototype.readUint32LE = c.prototype.readUInt32LE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || k(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                );
              }),
            (c.prototype.readUint32BE = c.prototype.readUInt32BE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || k(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
            (c.prototype.readBigUInt64LE = Q(function (t) {
              K((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n =
                  e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                s =
                  this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
              return BigInt(n) + (BigInt(s) << BigInt(32));
            })),
            (c.prototype.readBigUInt64BE = Q(function (t) {
              K((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n =
                  e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                s =
                  this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
              return (BigInt(n) << BigInt(32)) + BigInt(s);
            })),
            (c.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || k(t, e, this.length);
              let n = this[t],
                s = 1,
                i = 0;
              for (; ++i < e && (s *= 256); ) n += this[t + i] * s;
              return (s *= 128), n >= s && (n -= Math.pow(2, 8 * e)), n;
            }),
            (c.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || k(t, e, this.length);
              let n = e,
                s = 1,
                i = this[t + --n];
              for (; n > 0 && (s *= 256); ) i += this[t + --n] * s;
              return (s *= 128), i >= s && (i -= Math.pow(2, 8 * e)), i;
            }),
            (c.prototype.readInt8 = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              );
            }),
            (c.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || k(t, 2, this.length);
              const r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (c.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || k(t, 2, this.length);
              const r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (c.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (c.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (c.prototype.readBigInt64LE = Q(function (t) {
              K((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n =
                this[t + 4] +
                256 * this[t + 5] +
                65536 * this[t + 6] +
                (r << 24);
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
                )
              );
            })),
            (c.prototype.readBigInt64BE = Q(function (t) {
              K((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n =
                (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
                )
              );
            })),
            (c.prototype.readFloatLE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 4, this.length),
                s.read(this, t, !0, 23, 4)
              );
            }),
            (c.prototype.readFloatBE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 4, this.length),
                s.read(this, t, !1, 23, 4)
              );
            }),
            (c.prototype.readDoubleLE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 8, this.length),
                s.read(this, t, !0, 52, 8)
              );
            }),
            (c.prototype.readDoubleBE = function (t, e) {
              return (
                (t >>>= 0),
                e || k(t, 8, this.length),
                s.read(this, t, !1, 52, 8)
              );
            }),
            (c.prototype.writeUintLE = c.prototype.writeUIntLE =
              function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let s = 1,
                  i = 0;
                for (this[e] = 255 & t; ++i < r && (s *= 256); )
                  this[e + i] = (t / s) & 255;
                return e + r;
              }),
            (c.prototype.writeUintBE = c.prototype.writeUIntBE =
              function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let s = r - 1,
                  i = 1;
                for (this[e + s] = 255 & t; --s >= 0 && (i *= 256); )
                  this[e + s] = (t / i) & 255;
                return e + r;
              }),
            (c.prototype.writeUint8 = c.prototype.writeUInt8 =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || D(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
            (c.prototype.writeUint16LE = c.prototype.writeUInt16LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || D(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
            (c.prototype.writeUint16BE = c.prototype.writeUInt16BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || D(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
            (c.prototype.writeUint32LE = c.prototype.writeUInt32LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || D(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
            (c.prototype.writeUint32BE = c.prototype.writeUInt32BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || D(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
            (c.prototype.writeBigUInt64LE = Q(function (t, e = 0) {
              return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (c.prototype.writeBigUInt64BE = Q(function (t, e = 0) {
              return P(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (c.prototype.writeIntLE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                D(this, t, e, r, n - 1, -n);
              }
              let s = 0,
                i = 1,
                o = 0;
              for (this[e] = 255 & t; ++s < r && (i *= 256); )
                t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
                  (this[e + s] = (((t / i) >> 0) - o) & 255);
              return e + r;
            }),
            (c.prototype.writeIntBE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                D(this, t, e, r, n - 1, -n);
              }
              let s = r - 1,
                i = 1,
                o = 0;
              for (this[e + s] = 255 & t; --s >= 0 && (i *= 256); )
                t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
                  (this[e + s] = (((t / i) >> 0) - o) & 255);
              return e + r;
            }),
            (c.prototype.writeInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || D(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (c.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || D(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (c.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || D(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (c.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || D(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (c.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || D(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (c.prototype.writeBigInt64LE = Q(function (t, e = 0) {
              return L(
                this,
                t,
                e,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            })),
            (c.prototype.writeBigInt64BE = Q(function (t, e = 0) {
              return P(
                this,
                t,
                e,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            })),
            (c.prototype.writeFloatLE = function (t, e, r) {
              return B(this, t, e, !0, r);
            }),
            (c.prototype.writeFloatBE = function (t, e, r) {
              return B(this, t, e, !1, r);
            }),
            (c.prototype.writeDoubleLE = function (t, e, r) {
              return M(this, t, e, !0, r);
            }),
            (c.prototype.writeDoubleBE = function (t, e, r) {
              return M(this, t, e, !1, r);
            }),
            (c.prototype.copy = function (t, e, r, n) {
              if (!c.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
              const s = n - r;
              return (
                this === t &&
                "function" == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(e, r, n)
                  : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
                s
              );
            }),
            (c.prototype.fill = function (t, e, r, n) {
              if ("string" == typeof t) {
                if (
                  ("string" == typeof e
                    ? ((n = e), (e = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !c.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                  const e = t.charCodeAt(0);
                  (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
                }
              } else
                "number" == typeof t
                  ? (t &= 255)
                  : "boolean" == typeof t && (t = Number(t));
              if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= e) return this;
              let s;
              if (
                ((e >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" == typeof t)
              )
                for (s = e; s < r; ++s) this[s] = t;
              else {
                const i = c.isBuffer(t) ? t : c.from(t, n),
                  o = i.length;
                if (0 === o)
                  throw new TypeError(
                    'The value "' + t + '" is invalid for argument "value"'
                  );
                for (s = 0; s < r - e; ++s) this[s + e] = i[s % o];
              }
              return this;
            });
          const U = {};
          function z(t, e, r) {
            U[t] = class extends r {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${t}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return t;
              }
              set code(t) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: t,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${t}]: ${this.message}`;
              }
            };
          }
          function H(t) {
            let e = "",
              r = t.length;
            const n = "-" === t[0] ? 1 : 0;
            for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
            return `${t.slice(0, r)}${e}`;
          }
          function j(t, e, r, n, s, i) {
            if (t > r || t < e) {
              const n = "bigint" == typeof e ? "n" : "";
              let s;
              throw (
                ((s =
                  i > 3
                    ? 0 === e || e === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${
                          8 * (i + 1) - 1
                        }${n}`
                    : `>= ${e}${n} and <= ${r}${n}`),
                new U.ERR_OUT_OF_RANGE("value", s, t))
              );
            }
            !(function (t, e, r) {
              K(e, "offset"),
                (void 0 !== t[e] && void 0 !== t[e + r]) ||
                  G(e, t.length - (r + 1));
            })(n, s, i);
          }
          function K(t, e) {
            if ("number" != typeof t)
              throw new U.ERR_INVALID_ARG_TYPE(e, "number", t);
          }
          function G(t, e, r) {
            if (Math.floor(t) !== t)
              throw (
                (K(t, r),
                new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
              );
            if (e < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new U.ERR_OUT_OF_RANGE(
              r || "offset",
              `>= ${r ? 1 : 0} and <= ${e}`,
              t
            );
          }
          z(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (t) {
              return t
                ? `${t} is outside of buffer bounds`
                : "Attempt to access memory outside buffer bounds";
            },
            RangeError
          ),
            z(
              "ERR_INVALID_ARG_TYPE",
              function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`;
              },
              TypeError
            ),
            z(
              "ERR_OUT_OF_RANGE",
              function (t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                  s = r;
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (s = H(String(r)))
                    : "bigint" == typeof r &&
                      ((s = String(r)),
                      (r > BigInt(2) ** BigInt(32) ||
                        r < -(BigInt(2) ** BigInt(32))) &&
                        (s = H(s)),
                      (s += "n")),
                  (n += ` It must be ${e}. Received ${s}`),
                  n
                );
              },
              RangeError
            );
          const W = /[^+/0-9A-Za-z-_]/g;
          function V(t, e) {
            let r;
            e = e || 1 / 0;
            const n = t.length;
            let s = null;
            const i = [];
            for (let o = 0; o < n; ++o) {
              if (((r = t.charCodeAt(o)), r > 55295 && r < 57344)) {
                if (!s) {
                  if (r > 56319) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  if (o + 1 === n) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  s = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && i.push(239, 191, 189), (s = r);
                  continue;
                }
                r = 65536 + (((s - 55296) << 10) | (r - 56320));
              } else s && (e -= 3) > -1 && i.push(239, 191, 189);
              if (((s = null), r < 128)) {
                if ((e -= 1) < 0) break;
                i.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                i.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                i.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                );
              }
            }
            return i;
          }
          function $(t) {
            return n.toByteArray(
              (function (t) {
                if (
                  (t = (t = t.split("=")[0]).trim().replace(W, "")).length < 2
                )
                  return "";
                for (; t.length % 4 != 0; ) t += "=";
                return t;
              })(t)
            );
          }
          function X(t, e, r, n) {
            let s;
            for (s = 0; s < n && !(s + r >= e.length || s >= t.length); ++s)
              e[s + r] = t[s];
            return s;
          }
          function q(t, e) {
            return (
              t instanceof e ||
              (null != t &&
                null != t.constructor &&
                null != t.constructor.name &&
                t.constructor.name === e.name)
            );
          }
          function Z(t) {
            return t != t;
          }
          const Y = (function () {
            const t = "0123456789abcdef",
              e = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r;
              for (let s = 0; s < 16; ++s) e[n + s] = t[r] + t[s];
            }
            return e;
          })();
          function Q(t) {
            return "undefined" == typeof BigInt ? J : t;
          }
          function J() {
            throw new Error("BigInt not supported");
          }
        },
        187: (t) => {
          "use strict";
          var e,
            r = "object" == typeof Reflect ? Reflect : null,
            n =
              r && "function" == typeof r.apply
                ? r.apply
                : function (t, e, r) {
                    return Function.prototype.apply.call(t, e, r);
                  };
          e =
            r && "function" == typeof r.ownKeys
              ? r.ownKeys
              : Object.getOwnPropertySymbols
              ? function (t) {
                  return Object.getOwnPropertyNames(t).concat(
                    Object.getOwnPropertySymbols(t)
                  );
                }
              : function (t) {
                  return Object.getOwnPropertyNames(t);
                };
          var s =
            Number.isNaN ||
            function (t) {
              return t != t;
            };
          function i() {
            i.init.call(this);
          }
          (t.exports = i),
            (t.exports.once = function (t, e) {
              return new Promise(function (r, n) {
                function s(r) {
                  t.removeListener(e, i), n(r);
                }
                function i() {
                  "function" == typeof t.removeListener &&
                    t.removeListener("error", s),
                    r([].slice.call(arguments));
                }
                m(t, e, i, { once: !0 }),
                  "error" !== e &&
                    (function (t, e, r) {
                      "function" == typeof t.on &&
                        m(t, "error", e, { once: !0 });
                    })(t, s);
              });
            }),
            (i.EventEmitter = i),
            (i.prototype._events = void 0),
            (i.prototype._eventsCount = 0),
            (i.prototype._maxListeners = void 0);
          var o = 10;
          function a(t) {
            if ("function" != typeof t)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof t
              );
          }
          function c(t) {
            return void 0 === t._maxListeners
              ? i.defaultMaxListeners
              : t._maxListeners;
          }
          function u(t, e, r, n) {
            var s, i, o, u;
            if (
              (a(r),
              void 0 === (i = t._events)
                ? ((i = t._events = Object.create(null)), (t._eventsCount = 0))
                : (void 0 !== i.newListener &&
                    (t.emit("newListener", e, r.listener ? r.listener : r),
                    (i = t._events)),
                  (o = i[e])),
              void 0 === o)
            )
              (o = i[e] = r), ++t._eventsCount;
            else if (
              ("function" == typeof o
                ? (o = i[e] = n ? [r, o] : [o, r])
                : n
                ? o.unshift(r)
                : o.push(r),
              (s = c(t)) > 0 && o.length > s && !o.warned)
            ) {
              o.warned = !0;
              var l = new Error(
                "Possible EventEmitter memory leak detected. " +
                  o.length +
                  " " +
                  String(e) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit"
              );
              (l.name = "MaxListenersExceededWarning"),
                (l.emitter = t),
                (l.type = e),
                (l.count = o.length),
                (u = l),
                console && console.warn && console.warn(u);
            }
            return t;
          }
          function l() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function h(t, e, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r,
              },
              s = l.bind(n);
            return (s.listener = r), (n.wrapFn = s), s;
          }
          function p(t, e, r) {
            var n = t._events;
            if (void 0 === n) return [];
            var s = n[e];
            return void 0 === s
              ? []
              : "function" == typeof s
              ? r
                ? [s.listener || s]
                : [s]
              : r
              ? (function (t) {
                  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                    e[r] = t[r].listener || t[r];
                  return e;
                })(s)
              : f(s, s.length);
          }
          function d(t) {
            var e = this._events;
            if (void 0 !== e) {
              var r = e[t];
              if ("function" == typeof r) return 1;
              if (void 0 !== r) return r.length;
            }
            return 0;
          }
          function f(t, e) {
            for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
            return r;
          }
          function m(t, e, r, n) {
            if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
            else {
              if ("function" != typeof t.addEventListener)
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' +
                    typeof t
                );
              t.addEventListener(e, function s(i) {
                n.once && t.removeEventListener(e, s), r(i);
              });
            }
          }
          Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return o;
            },
            set: function (t) {
              if ("number" != typeof t || t < 0 || s(t))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    t +
                    "."
                );
              o = t;
            },
          }),
            (i.init = function () {
              (void 0 !== this._events &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (i.prototype.setMaxListeners = function (t) {
              if ("number" != typeof t || t < 0 || s(t))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    t +
                    "."
                );
              return (this._maxListeners = t), this;
            }),
            (i.prototype.getMaxListeners = function () {
              return c(this);
            }),
            (i.prototype.emit = function (t) {
              for (var e = [], r = 1; r < arguments.length; r++)
                e.push(arguments[r]);
              var s = "error" === t,
                i = this._events;
              if (void 0 !== i) s = s && void 0 === i.error;
              else if (!s) return !1;
              if (s) {
                var o;
                if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
                var a = new Error(
                  "Unhandled error." + (o ? " (" + o.message + ")" : "")
                );
                throw ((a.context = o), a);
              }
              var c = i[t];
              if (void 0 === c) return !1;
              if ("function" == typeof c) n(c, this, e);
              else {
                var u = c.length,
                  l = f(c, u);
                for (r = 0; r < u; ++r) n(l[r], this, e);
              }
              return !0;
            }),
            (i.prototype.addListener = function (t, e) {
              return u(this, t, e, !1);
            }),
            (i.prototype.on = i.prototype.addListener),
            (i.prototype.prependListener = function (t, e) {
              return u(this, t, e, !0);
            }),
            (i.prototype.once = function (t, e) {
              return a(e), this.on(t, h(this, t, e)), this;
            }),
            (i.prototype.prependOnceListener = function (t, e) {
              return a(e), this.prependListener(t, h(this, t, e)), this;
            }),
            (i.prototype.removeListener = function (t, e) {
              var r, n, s, i, o;
              if ((a(e), void 0 === (n = this._events))) return this;
              if (void 0 === (r = n[t])) return this;
              if (r === e || r.listener === e)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete n[t],
                    n.removeListener &&
                      this.emit("removeListener", t, r.listener || e));
              else if ("function" != typeof r) {
                for (s = -1, i = r.length - 1; i >= 0; i--)
                  if (r[i] === e || r[i].listener === e) {
                    (o = r[i].listener), (s = i);
                    break;
                  }
                if (s < 0) return this;
                0 === s
                  ? r.shift()
                  : (function (t, e) {
                      for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                      t.pop();
                    })(r, s),
                  1 === r.length && (n[t] = r[0]),
                  void 0 !== n.removeListener &&
                    this.emit("removeListener", t, o || e);
              }
              return this;
            }),
            (i.prototype.off = i.prototype.removeListener),
            (i.prototype.removeAllListeners = function (t) {
              var e, r, n;
              if (void 0 === (r = this._events)) return this;
              if (void 0 === r.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = Object.create(null)),
                      (this._eventsCount = 0))
                    : void 0 !== r[t] &&
                      (0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : delete r[t]),
                  this
                );
              if (0 === arguments.length) {
                var s,
                  i = Object.keys(r);
                for (n = 0; n < i.length; ++n)
                  "removeListener" !== (s = i[n]) && this.removeAllListeners(s);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (e = r[t])) this.removeListener(t, e);
              else if (void 0 !== e)
                for (n = e.length - 1; n >= 0; n--)
                  this.removeListener(t, e[n]);
              return this;
            }),
            (i.prototype.listeners = function (t) {
              return p(this, t, !0);
            }),
            (i.prototype.rawListeners = function (t) {
              return p(this, t, !1);
            }),
            (i.listenerCount = function (t, e) {
              return "function" == typeof t.listenerCount
                ? t.listenerCount(e)
                : d.call(t, e);
            }),
            (i.prototype.listenerCount = d),
            (i.prototype.eventNames = function () {
              return this._eventsCount > 0 ? e(this._events) : [];
            });
        },
        645: (t, e) => {
          (e.read = function (t, e, r, n, s) {
            var i,
              o,
              a = 8 * s - n - 1,
              c = (1 << a) - 1,
              u = c >> 1,
              l = -7,
              h = r ? s - 1 : 0,
              p = r ? -1 : 1,
              d = t[e + h];
            for (
              h += p, i = d & ((1 << -l) - 1), d >>= -l, l += a;
              l > 0;
              i = 256 * i + t[e + h], h += p, l -= 8
            );
            for (
              o = i & ((1 << -l) - 1), i >>= -l, l += n;
              l > 0;
              o = 256 * o + t[e + h], h += p, l -= 8
            );
            if (0 === i) i = 1 - u;
            else {
              if (i === c) return o ? NaN : (1 / 0) * (d ? -1 : 1);
              (o += Math.pow(2, n)), (i -= u);
            }
            return (d ? -1 : 1) * o * Math.pow(2, i - n);
          }),
            (e.write = function (t, e, r, n, s, i) {
              var o,
                a,
                c,
                u = 8 * i - s - 1,
                l = (1 << u) - 1,
                h = l >> 1,
                p = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = n ? 0 : i - 1,
                f = n ? 1 : -1,
                m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((a = isNaN(e) ? 1 : 0), (o = l))
                    : ((o = Math.floor(Math.log(e) / Math.LN2)),
                      e * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                      (e += o + h >= 1 ? p / c : p * Math.pow(2, 1 - h)) * c >=
                        2 && (o++, (c /= 2)),
                      o + h >= l
                        ? ((a = 0), (o = l))
                        : o + h >= 1
                        ? ((a = (e * c - 1) * Math.pow(2, s)), (o += h))
                        : ((a = e * Math.pow(2, h - 1) * Math.pow(2, s)),
                          (o = 0)));
                s >= 8;
                t[r + d] = 255 & a, d += f, a /= 256, s -= 8
              );
              for (
                o = (o << s) | a, u += s;
                u > 0;
                t[r + d] = 255 & o, d += f, o /= 256, u -= 8
              );
              t[r + d - f] |= 128 * m;
            });
        },
        717: (t) => {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        },
        733: (t, e, r) => {
          t.exports = (function t(e, r, n) {
            function s(o, a) {
              if (!r[o]) {
                if (!e[o]) {
                  if (i) return i(o, !0);
                  var c = new Error("Cannot find module '" + o + "'");
                  throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                var u = (r[o] = { exports: {} });
                e[o][0].call(
                  u.exports,
                  function (t) {
                    return s(e[o][1][t] || t);
                  },
                  u,
                  u.exports,
                  t,
                  e,
                  r,
                  n
                );
              }
              return r[o].exports;
            }
            for (var i = void 0, o = 0; o < n.length; o++) s(n[o]);
            return s;
          })(
            {
              1: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./utils"),
                    s = t("./support"),
                    i =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  (r.encode = function (t) {
                    for (
                      var e,
                        r,
                        s,
                        o,
                        a,
                        c,
                        u,
                        l = [],
                        h = 0,
                        p = t.length,
                        d = p,
                        f = "string" !== n.getTypeOf(t);
                      h < t.length;

                    )
                      (d = p - h),
                        (s = f
                          ? ((e = t[h++]),
                            (r = h < p ? t[h++] : 0),
                            h < p ? t[h++] : 0)
                          : ((e = t.charCodeAt(h++)),
                            (r = h < p ? t.charCodeAt(h++) : 0),
                            h < p ? t.charCodeAt(h++) : 0)),
                        (o = e >> 2),
                        (a = ((3 & e) << 4) | (r >> 4)),
                        (c = 1 < d ? ((15 & r) << 2) | (s >> 6) : 64),
                        (u = 2 < d ? 63 & s : 64),
                        l.push(
                          i.charAt(o) + i.charAt(a) + i.charAt(c) + i.charAt(u)
                        );
                    return l.join("");
                  }),
                    (r.decode = function (t) {
                      var e,
                        r,
                        n,
                        o,
                        a,
                        c,
                        u = 0,
                        l = 0,
                        h = "data:";
                      if (t.substr(0, h.length) === h)
                        throw new Error(
                          "Invalid base64 input, it looks like a data url."
                        );
                      var p,
                        d =
                          (3 *
                            (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length) /
                          4;
                      if (
                        (t.charAt(t.length - 1) === i.charAt(64) && d--,
                        t.charAt(t.length - 2) === i.charAt(64) && d--,
                        d % 1 != 0)
                      )
                        throw new Error(
                          "Invalid base64 input, bad content length."
                        );
                      for (
                        p = s.uint8array
                          ? new Uint8Array(0 | d)
                          : new Array(0 | d);
                        u < t.length;

                      )
                        (e =
                          (i.indexOf(t.charAt(u++)) << 2) |
                          ((o = i.indexOf(t.charAt(u++))) >> 4)),
                          (r =
                            ((15 & o) << 4) |
                            ((a = i.indexOf(t.charAt(u++))) >> 2)),
                          (n = ((3 & a) << 6) | (c = i.indexOf(t.charAt(u++)))),
                          (p[l++] = e),
                          64 !== a && (p[l++] = r),
                          64 !== c && (p[l++] = n);
                      return p;
                    });
                },
                { "./support": 30, "./utils": 32 },
              ],
              2: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./external"),
                    s = t("./stream/DataWorker"),
                    i = t("./stream/Crc32Probe"),
                    o = t("./stream/DataLengthProbe");
                  function a(t, e, r, n, s) {
                    (this.compressedSize = t),
                      (this.uncompressedSize = e),
                      (this.crc32 = r),
                      (this.compression = n),
                      (this.compressedContent = s);
                  }
                  (a.prototype = {
                    getContentWorker: function () {
                      var t = new s(n.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new o("data_length")),
                        e = this;
                      return (
                        t.on("end", function () {
                          if (
                            this.streamInfo.data_length !== e.uncompressedSize
                          )
                            throw new Error(
                              "Bug : uncompressed data size mismatch"
                            );
                        }),
                        t
                      );
                    },
                    getCompressedWorker: function () {
                      return new s(n.Promise.resolve(this.compressedContent))
                        .withStreamInfo("compressedSize", this.compressedSize)
                        .withStreamInfo(
                          "uncompressedSize",
                          this.uncompressedSize
                        )
                        .withStreamInfo("crc32", this.crc32)
                        .withStreamInfo("compression", this.compression);
                    },
                  }),
                    (a.createWorkerFrom = function (t, e, r) {
                      return t
                        .pipe(new i())
                        .pipe(new o("uncompressedSize"))
                        .pipe(e.compressWorker(r))
                        .pipe(new o("compressedSize"))
                        .withStreamInfo("compression", e);
                    }),
                    (e.exports = a);
                },
                {
                  "./external": 6,
                  "./stream/Crc32Probe": 25,
                  "./stream/DataLengthProbe": 26,
                  "./stream/DataWorker": 27,
                },
              ],
              3: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./stream/GenericWorker");
                  (r.STORE = {
                    magic: "\0\0",
                    compressWorker: function (t) {
                      return new n("STORE compression");
                    },
                    uncompressWorker: function () {
                      return new n("STORE decompression");
                    },
                  }),
                    (r.DEFLATE = t("./flate"));
                },
                { "./flate": 7, "./stream/GenericWorker": 28 },
              ],
              4: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./utils"),
                    s = (function () {
                      for (var t, e = [], r = 0; r < 256; r++) {
                        t = r;
                        for (var n = 0; n < 8; n++)
                          t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                        e[r] = t;
                      }
                      return e;
                    })();
                  e.exports = function (t, e) {
                    return void 0 !== t && t.length
                      ? "string" !== n.getTypeOf(t)
                        ? (function (t, e, r, n) {
                            var i = s,
                              o = 0 + r;
                            t ^= -1;
                            for (var a = 0; a < o; a++)
                              t = (t >>> 8) ^ i[255 & (t ^ e[a])];
                            return -1 ^ t;
                          })(0 | e, t, t.length)
                        : (function (t, e, r, n) {
                            var i = s,
                              o = 0 + r;
                            t ^= -1;
                            for (var a = 0; a < o; a++)
                              t = (t >>> 8) ^ i[255 & (t ^ e.charCodeAt(a))];
                            return -1 ^ t;
                          })(0 | e, t, t.length)
                      : 0;
                  };
                },
                { "./utils": 32 },
              ],
              5: [
                function (t, e, r) {
                  "use strict";
                  (r.base64 = !1),
                    (r.binary = !1),
                    (r.dir = !1),
                    (r.createFolders = !0),
                    (r.date = null),
                    (r.compression = null),
                    (r.compressionOptions = null),
                    (r.comment = null),
                    (r.unixPermissions = null),
                    (r.dosPermissions = null);
                },
                {},
              ],
              6: [
                function (t, e, r) {
                  "use strict";
                  var n;
                  (n = "undefined" != typeof Promise ? Promise : t("lie")),
                    (e.exports = { Promise: n });
                },
                { lie: 37 },
              ],
              7: [
                function (t, e, r) {
                  "use strict";
                  var n =
                      "undefined" != typeof Uint8Array &&
                      "undefined" != typeof Uint16Array &&
                      "undefined" != typeof Uint32Array,
                    s = t("pako"),
                    i = t("./utils"),
                    o = t("./stream/GenericWorker"),
                    a = n ? "uint8array" : "array";
                  function c(t, e) {
                    o.call(this, "FlateWorker/" + t),
                      (this._pako = null),
                      (this._pakoAction = t),
                      (this._pakoOptions = e),
                      (this.meta = {});
                  }
                  (r.magic = "\b\0"),
                    i.inherits(c, o),
                    (c.prototype.processChunk = function (t) {
                      (this.meta = t.meta),
                        null === this._pako && this._createPako(),
                        this._pako.push(i.transformTo(a, t.data), !1);
                    }),
                    (c.prototype.flush = function () {
                      o.prototype.flush.call(this),
                        null === this._pako && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (c.prototype.cleanUp = function () {
                      o.prototype.cleanUp.call(this), (this._pako = null);
                    }),
                    (c.prototype._createPako = function () {
                      this._pako = new s[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      });
                      var t = this;
                      this._pako.onData = function (e) {
                        t.push({ data: e, meta: t.meta });
                      };
                    }),
                    (r.compressWorker = function (t) {
                      return new c("Deflate", t);
                    }),
                    (r.uncompressWorker = function () {
                      return new c("Inflate", {});
                    });
                },
                { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
              ],
              8: [
                function (t, e, r) {
                  "use strict";
                  function n(t, e) {
                    var r,
                      n = "";
                    for (r = 0; r < e; r++)
                      (n += String.fromCharCode(255 & t)), (t >>>= 8);
                    return n;
                  }
                  function s(t, e, r, s, o, l) {
                    var h,
                      p,
                      d = t.file,
                      f = t.compression,
                      m = l !== a.utf8encode,
                      w = i.transformTo("string", l(d.name)),
                      g = i.transformTo("string", a.utf8encode(d.name)),
                      y = d.comment,
                      b = i.transformTo("string", l(y)),
                      v = i.transformTo("string", a.utf8encode(y)),
                      _ = g.length !== d.name.length,
                      x = v.length !== y.length,
                      E = "",
                      T = "",
                      A = "",
                      S = d.dir,
                      R = d.date,
                      I = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (e && !r) ||
                      ((I.crc32 = t.crc32),
                      (I.compressedSize = t.compressedSize),
                      (I.uncompressedSize = t.uncompressedSize));
                    var N = 0;
                    e && (N |= 8), m || (!_ && !x) || (N |= 2048);
                    var O = 0,
                      C = 0;
                    S && (O |= 16),
                      "UNIX" === o
                        ? ((C = 798),
                          (O |= (function (t, e) {
                            var r = t;
                            return (
                              t || (r = e ? 16893 : 33204), (65535 & r) << 16
                            );
                          })(d.unixPermissions, S)))
                        : ((C = 20),
                          (O |= (function (t) {
                            return 63 & (t || 0);
                          })(d.dosPermissions))),
                      (h = R.getUTCHours()),
                      (h <<= 6),
                      (h |= R.getUTCMinutes()),
                      (h <<= 5),
                      (h |= R.getUTCSeconds() / 2),
                      (p = R.getUTCFullYear() - 1980),
                      (p <<= 4),
                      (p |= R.getUTCMonth() + 1),
                      (p <<= 5),
                      (p |= R.getUTCDate()),
                      _ &&
                        ((T = n(1, 1) + n(c(w), 4) + g),
                        (E += "up" + n(T.length, 2) + T)),
                      x &&
                        ((A = n(1, 1) + n(c(b), 4) + v),
                        (E += "uc" + n(A.length, 2) + A));
                    var k = "";
                    return (
                      (k += "\n\0"),
                      (k += n(N, 2)),
                      (k += f.magic),
                      (k += n(h, 2)),
                      (k += n(p, 2)),
                      (k += n(I.crc32, 4)),
                      (k += n(I.compressedSize, 4)),
                      (k += n(I.uncompressedSize, 4)),
                      (k += n(w.length, 2)),
                      (k += n(E.length, 2)),
                      {
                        fileRecord: u.LOCAL_FILE_HEADER + k + w + E,
                        dirRecord:
                          u.CENTRAL_FILE_HEADER +
                          n(C, 2) +
                          k +
                          n(b.length, 2) +
                          "\0\0\0\0" +
                          n(O, 4) +
                          n(s, 4) +
                          w +
                          E +
                          b,
                      }
                    );
                  }
                  var i = t("../utils"),
                    o = t("../stream/GenericWorker"),
                    a = t("../utf8"),
                    c = t("../crc32"),
                    u = t("../signature");
                  function l(t, e, r, n) {
                    o.call(this, "ZipFileWorker"),
                      (this.bytesWritten = 0),
                      (this.zipComment = e),
                      (this.zipPlatform = r),
                      (this.encodeFileName = n),
                      (this.streamFiles = t),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  i.inherits(l, o),
                    (l.prototype.push = function (t) {
                      var e = t.meta.percent || 0,
                        r = this.entriesCount,
                        n = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(t)
                        : ((this.bytesWritten += t.data.length),
                          o.prototype.push.call(this, {
                            data: t.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: r ? (e + 100 * (r - n - 1)) / r : 100,
                            },
                          }));
                    }),
                    (l.prototype.openedSource = function (t) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = t.file.name);
                      var e = this.streamFiles && !t.file.dir;
                      if (e) {
                        var r = s(
                          t,
                          e,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        );
                        this.push({ data: r.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (l.prototype.closedSource = function (t) {
                      this.accumulate = !1;
                      var e = this.streamFiles && !t.file.dir,
                        r = s(
                          t,
                          e,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        );
                      if ((this.dirRecords.push(r.dirRecord), e))
                        this.push({
                          data: (function (t) {
                            return (
                              u.DATA_DESCRIPTOR +
                              n(t.crc32, 4) +
                              n(t.compressedSize, 4) +
                              n(t.uncompressedSize, 4)
                            );
                          })(t),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({
                            data: r.fileRecord,
                            meta: { percent: 0 },
                          });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (l.prototype.flush = function () {
                      for (
                        var t = this.bytesWritten, e = 0;
                        e < this.dirRecords.length;
                        e++
                      )
                        this.push({
                          data: this.dirRecords[e],
                          meta: { percent: 100 },
                        });
                      var r = this.bytesWritten - t,
                        s = (function (t, e, r, s, o) {
                          var a = i.transformTo("string", o(s));
                          return (
                            u.CENTRAL_DIRECTORY_END +
                            "\0\0\0\0" +
                            n(t, 2) +
                            n(t, 2) +
                            n(e, 4) +
                            n(r, 4) +
                            n(a.length, 2) +
                            a
                          );
                        })(
                          this.dirRecords.length,
                          r,
                          t,
                          this.zipComment,
                          this.encodeFileName
                        );
                      this.push({ data: s, meta: { percent: 100 } });
                    }),
                    (l.prototype.prepareNextSource = function () {
                      (this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused
                          ? this.previous.pause()
                          : this.previous.resume();
                    }),
                    (l.prototype.registerPrevious = function (t) {
                      this._sources.push(t);
                      var e = this;
                      return (
                        t.on("data", function (t) {
                          e.processChunk(t);
                        }),
                        t.on("end", function () {
                          e.closedSource(e.previous.streamInfo),
                            e._sources.length ? e.prepareNextSource() : e.end();
                        }),
                        t.on("error", function (t) {
                          e.error(t);
                        }),
                        this
                      );
                    }),
                    (l.prototype.resume = function () {
                      return (
                        !!o.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous ||
                            this._sources.length ||
                            this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (l.prototype.error = function (t) {
                      var e = this._sources;
                      if (!o.prototype.error.call(this, t)) return !1;
                      for (var r = 0; r < e.length; r++)
                        try {
                          e[r].error(t);
                        } catch (t) {}
                      return !0;
                    }),
                    (l.prototype.lock = function () {
                      o.prototype.lock.call(this);
                      for (var t = this._sources, e = 0; e < t.length; e++)
                        t[e].lock();
                    }),
                    (e.exports = l);
                },
                {
                  "../crc32": 4,
                  "../signature": 23,
                  "../stream/GenericWorker": 28,
                  "../utf8": 31,
                  "../utils": 32,
                },
              ],
              9: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../compressions"),
                    s = t("./ZipFileWorker");
                  r.generateWorker = function (t, e, r) {
                    var i = new s(
                        e.streamFiles,
                        r,
                        e.platform,
                        e.encodeFileName
                      ),
                      o = 0;
                    try {
                      t.forEach(function (t, r) {
                        o++;
                        var s = (function (t, e) {
                            var r = t || e,
                              s = n[r];
                            if (!s)
                              throw new Error(
                                r + " is not a valid compression method !"
                              );
                            return s;
                          })(r.options.compression, e.compression),
                          a =
                            r.options.compressionOptions ||
                            e.compressionOptions ||
                            {},
                          c = r.dir,
                          u = r.date;
                        r._compressWorker(s, a)
                          .withStreamInfo("file", {
                            name: t,
                            dir: c,
                            date: u,
                            comment: r.comment || "",
                            unixPermissions: r.unixPermissions,
                            dosPermissions: r.dosPermissions,
                          })
                          .pipe(i);
                      }),
                        (i.entriesCount = o);
                    } catch (t) {
                      i.error(t);
                    }
                    return i;
                  };
                },
                { "../compressions": 3, "./ZipFileWorker": 8 },
              ],
              10: [
                function (t, e, r) {
                  "use strict";
                  function n() {
                    if (!(this instanceof n)) return new n();
                    if (arguments.length)
                      throw new Error(
                        "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    (this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ""),
                      (this.clone = function () {
                        var t = new n();
                        for (var e in this)
                          "function" != typeof this[e] && (t[e] = this[e]);
                        return t;
                      });
                  }
                  ((n.prototype = t("./object")).loadAsync = t("./load")),
                    (n.support = t("./support")),
                    (n.defaults = t("./defaults")),
                    (n.version = "3.7.1"),
                    (n.loadAsync = function (t, e) {
                      return new n().loadAsync(t, e);
                    }),
                    (n.external = t("./external")),
                    (e.exports = n);
                },
                {
                  "./defaults": 5,
                  "./external": 6,
                  "./load": 11,
                  "./object": 15,
                  "./support": 30,
                },
              ],
              11: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./utils"),
                    s = t("./external"),
                    i = t("./utf8"),
                    o = t("./zipEntries"),
                    a = t("./stream/Crc32Probe"),
                    c = t("./nodejsUtils");
                  function u(t) {
                    return new s.Promise(function (e, r) {
                      var n = t.decompressed.getContentWorker().pipe(new a());
                      n.on("error", function (t) {
                        r(t);
                      })
                        .on("end", function () {
                          n.streamInfo.crc32 !== t.decompressed.crc32
                            ? r(new Error("Corrupted zip : CRC32 mismatch"))
                            : e();
                        })
                        .resume();
                    });
                  }
                  e.exports = function (t, e) {
                    var r = this;
                    return (
                      (e = n.extend(e || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: i.utf8decode,
                      })),
                      c.isNode && c.isStream(t)
                        ? s.Promise.reject(
                            new Error(
                              "JSZip can't accept a stream when loading a zip file."
                            )
                          )
                        : n
                            .prepareContent(
                              "the loaded zip file",
                              t,
                              !0,
                              e.optimizedBinaryString,
                              e.base64
                            )
                            .then(function (t) {
                              var r = new o(e);
                              return r.load(t), r;
                            })
                            .then(function (t) {
                              var r = [s.Promise.resolve(t)],
                                n = t.files;
                              if (e.checkCRC32)
                                for (var i = 0; i < n.length; i++)
                                  r.push(u(n[i]));
                              return s.Promise.all(r);
                            })
                            .then(function (t) {
                              for (
                                var n = t.shift(), s = n.files, i = 0;
                                i < s.length;
                                i++
                              ) {
                                var o = s[i];
                                r.file(o.fileNameStr, o.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: o.date,
                                  dir: o.dir,
                                  comment: o.fileCommentStr.length
                                    ? o.fileCommentStr
                                    : null,
                                  unixPermissions: o.unixPermissions,
                                  dosPermissions: o.dosPermissions,
                                  createFolders: e.createFolders,
                                });
                              }
                              return (
                                n.zipComment.length &&
                                  (r.comment = n.zipComment),
                                r
                              );
                            })
                    );
                  };
                },
                {
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./stream/Crc32Probe": 25,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipEntries": 33,
                },
              ],
              12: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils"),
                    s = t("../stream/GenericWorker");
                  function i(t, e) {
                    s.call(this, "Nodejs stream input adapter for " + t),
                      (this._upstreamEnded = !1),
                      this._bindStream(e);
                  }
                  n.inherits(i, s),
                    (i.prototype._bindStream = function (t) {
                      var e = this;
                      (this._stream = t).pause(),
                        t
                          .on("data", function (t) {
                            e.push({ data: t, meta: { percent: 0 } });
                          })
                          .on("error", function (t) {
                            e.isPaused ? (this.generatedError = t) : e.error(t);
                          })
                          .on("end", function () {
                            e.isPaused ? (e._upstreamEnded = !0) : e.end();
                          });
                    }),
                    (i.prototype.pause = function () {
                      return (
                        !!s.prototype.pause.call(this) &&
                        (this._stream.pause(), !0)
                      );
                    }),
                    (i.prototype.resume = function () {
                      return (
                        !!s.prototype.resume.call(this) &&
                        (this._upstreamEnded
                          ? this.end()
                          : this._stream.resume(),
                        !0)
                      );
                    }),
                    (e.exports = i);
                },
                { "../stream/GenericWorker": 28, "../utils": 32 },
              ],
              13: [
                function (t, e, r) {
                  "use strict";
                  var n = t("readable-stream").Readable;
                  function s(t, e, r) {
                    n.call(this, e), (this._helper = t);
                    var s = this;
                    t.on("data", function (t, e) {
                      s.push(t) || s._helper.pause(), r && r(e);
                    })
                      .on("error", function (t) {
                        s.emit("error", t);
                      })
                      .on("end", function () {
                        s.push(null);
                      });
                  }
                  t("../utils").inherits(s, n),
                    (s.prototype._read = function () {
                      this._helper.resume();
                    }),
                    (e.exports = s);
                },
                { "../utils": 32, "readable-stream": 16 },
              ],
              14: [
                function (t, e, r) {
                  "use strict";
                  e.exports = {
                    isNode: "undefined" != typeof Buffer,
                    newBufferFrom: function (t, e) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from)
                        return Buffer.from(t, e);
                      if ("number" == typeof t)
                        throw new Error(
                          'The "data" argument must not be a number'
                        );
                      return new Buffer(t, e);
                    },
                    allocBuffer: function (t) {
                      if (Buffer.alloc) return Buffer.alloc(t);
                      var e = new Buffer(t);
                      return e.fill(0), e;
                    },
                    isBuffer: function (t) {
                      return Buffer.isBuffer(t);
                    },
                    isStream: function (t) {
                      return (
                        t &&
                        "function" == typeof t.on &&
                        "function" == typeof t.pause &&
                        "function" == typeof t.resume
                      );
                    },
                  };
                },
                {},
              ],
              15: [
                function (t, e, r) {
                  "use strict";
                  function n(t, e, r) {
                    var n,
                      s = i.getTypeOf(e),
                      a = i.extend(r || {}, c);
                    (a.date = a.date || new Date()),
                      null !== a.compression &&
                        (a.compression = a.compression.toUpperCase()),
                      "string" == typeof a.unixPermissions &&
                        (a.unixPermissions = parseInt(a.unixPermissions, 8)),
                      a.unixPermissions &&
                        16384 & a.unixPermissions &&
                        (a.dir = !0),
                      a.dosPermissions && 16 & a.dosPermissions && (a.dir = !0),
                      a.dir && (t = m(t)),
                      a.createFolders && (n = f(t)) && w.call(this, n, !0);
                    var h =
                      "string" === s && !1 === a.binary && !1 === a.base64;
                    (r && void 0 !== r.binary) || (a.binary = !h),
                      ((e instanceof u && 0 === e.uncompressedSize) ||
                        a.dir ||
                        !e ||
                        0 === e.length) &&
                        ((a.base64 = !1),
                        (a.binary = !0),
                        (e = ""),
                        (a.compression = "STORE"),
                        (s = "string"));
                    var g;
                    g =
                      e instanceof u || e instanceof o
                        ? e
                        : p.isNode && p.isStream(e)
                        ? new d(t, e)
                        : i.prepareContent(
                            t,
                            e,
                            a.binary,
                            a.optimizedBinaryString,
                            a.base64
                          );
                    var y = new l(t, g, a);
                    this.files[t] = y;
                  }
                  var s = t("./utf8"),
                    i = t("./utils"),
                    o = t("./stream/GenericWorker"),
                    a = t("./stream/StreamHelper"),
                    c = t("./defaults"),
                    u = t("./compressedObject"),
                    l = t("./zipObject"),
                    h = t("./generate"),
                    p = t("./nodejsUtils"),
                    d = t("./nodejs/NodejsStreamInputAdapter"),
                    f = function (t) {
                      "/" === t.slice(-1) && (t = t.substring(0, t.length - 1));
                      var e = t.lastIndexOf("/");
                      return 0 < e ? t.substring(0, e) : "";
                    },
                    m = function (t) {
                      return "/" !== t.slice(-1) && (t += "/"), t;
                    },
                    w = function (t, e) {
                      return (
                        (e = void 0 !== e ? e : c.createFolders),
                        (t = m(t)),
                        this.files[t] ||
                          n.call(this, t, null, { dir: !0, createFolders: e }),
                        this.files[t]
                      );
                    };
                  function g(t) {
                    return (
                      "[object RegExp]" === Object.prototype.toString.call(t)
                    );
                  }
                  var y = {
                    load: function () {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    },
                    forEach: function (t) {
                      var e, r, n;
                      for (e in this.files)
                        (n = this.files[e]),
                          (r = e.slice(this.root.length, e.length)) &&
                            e.slice(0, this.root.length) === this.root &&
                            t(r, n);
                    },
                    filter: function (t) {
                      var e = [];
                      return (
                        this.forEach(function (r, n) {
                          t(r, n) && e.push(n);
                        }),
                        e
                      );
                    },
                    file: function (t, e, r) {
                      if (1 !== arguments.length)
                        return (t = this.root + t), n.call(this, t, e, r), this;
                      if (g(t)) {
                        var s = t;
                        return this.filter(function (t, e) {
                          return !e.dir && s.test(t);
                        });
                      }
                      var i = this.files[this.root + t];
                      return i && !i.dir ? i : null;
                    },
                    folder: function (t) {
                      if (!t) return this;
                      if (g(t))
                        return this.filter(function (e, r) {
                          return r.dir && t.test(e);
                        });
                      var e = this.root + t,
                        r = w.call(this, e),
                        n = this.clone();
                      return (n.root = r.name), n;
                    },
                    remove: function (t) {
                      t = this.root + t;
                      var e = this.files[t];
                      if (
                        (e ||
                          ("/" !== t.slice(-1) && (t += "/"),
                          (e = this.files[t])),
                        e && !e.dir)
                      )
                        delete this.files[t];
                      else
                        for (
                          var r = this.filter(function (e, r) {
                              return r.name.slice(0, t.length) === t;
                            }),
                            n = 0;
                          n < r.length;
                          n++
                        )
                          delete this.files[r[n].name];
                      return this;
                    },
                    generate: function (t) {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    },
                    generateInternalStream: function (t) {
                      var e,
                        r = {};
                      try {
                        if (
                          (((r = i.extend(t || {}, {
                            streamFiles: !1,
                            compression: "STORE",
                            compressionOptions: null,
                            type: "",
                            platform: "DOS",
                            comment: null,
                            mimeType: "application/zip",
                            encodeFileName: s.utf8encode,
                          })).type = r.type.toLowerCase()),
                          (r.compression = r.compression.toUpperCase()),
                          "binarystring" === r.type && (r.type = "string"),
                          !r.type)
                        )
                          throw new Error("No output type specified.");
                        i.checkSupport(r.type),
                          ("darwin" !== r.platform &&
                            "freebsd" !== r.platform &&
                            "linux" !== r.platform &&
                            "sunos" !== r.platform) ||
                            (r.platform = "UNIX"),
                          "win32" === r.platform && (r.platform = "DOS");
                        var n = r.comment || this.comment || "";
                        e = h.generateWorker(this, r, n);
                      } catch (t) {
                        (e = new o("error")).error(t);
                      }
                      return new a(e, r.type || "string", r.mimeType);
                    },
                    generateAsync: function (t, e) {
                      return this.generateInternalStream(t).accumulate(e);
                    },
                    generateNodeStream: function (t, e) {
                      return (
                        (t = t || {}).type || (t.type = "nodebuffer"),
                        this.generateInternalStream(t).toNodejsStream(e)
                      );
                    },
                  };
                  e.exports = y;
                },
                {
                  "./compressedObject": 2,
                  "./defaults": 5,
                  "./generate": 9,
                  "./nodejs/NodejsStreamInputAdapter": 12,
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipObject": 35,
                },
              ],
              16: [
                function (t, e, r) {
                  e.exports = t("stream");
                },
                { stream: void 0 },
              ],
              17: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./DataReader");
                  function s(t) {
                    n.call(this, t);
                    for (var e = 0; e < this.data.length; e++)
                      t[e] = 255 & t[e];
                  }
                  t("../utils").inherits(s, n),
                    (s.prototype.byteAt = function (t) {
                      return this.data[this.zero + t];
                    }),
                    (s.prototype.lastIndexOfSignature = function (t) {
                      for (
                        var e = t.charCodeAt(0),
                          r = t.charCodeAt(1),
                          n = t.charCodeAt(2),
                          s = t.charCodeAt(3),
                          i = this.length - 4;
                        0 <= i;
                        --i
                      )
                        if (
                          this.data[i] === e &&
                          this.data[i + 1] === r &&
                          this.data[i + 2] === n &&
                          this.data[i + 3] === s
                        )
                          return i - this.zero;
                      return -1;
                    }),
                    (s.prototype.readAndCheckSignature = function (t) {
                      var e = t.charCodeAt(0),
                        r = t.charCodeAt(1),
                        n = t.charCodeAt(2),
                        s = t.charCodeAt(3),
                        i = this.readData(4);
                      return (
                        e === i[0] && r === i[1] && n === i[2] && s === i[3]
                      );
                    }),
                    (s.prototype.readData = function (t) {
                      if ((this.checkOffset(t), 0 === t)) return [];
                      var e = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + t
                      );
                      return (this.index += t), e;
                    }),
                    (e.exports = s);
                },
                { "../utils": 32, "./DataReader": 18 },
              ],
              18: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils");
                  function s(t) {
                    (this.data = t),
                      (this.length = t.length),
                      (this.index = 0),
                      (this.zero = 0);
                  }
                  (s.prototype = {
                    checkOffset: function (t) {
                      this.checkIndex(this.index + t);
                    },
                    checkIndex: function (t) {
                      if (this.length < this.zero + t || t < 0)
                        throw new Error(
                          "End of data reached (data length = " +
                            this.length +
                            ", asked index = " +
                            t +
                            "). Corrupted zip ?"
                        );
                    },
                    setIndex: function (t) {
                      this.checkIndex(t), (this.index = t);
                    },
                    skip: function (t) {
                      this.setIndex(this.index + t);
                    },
                    byteAt: function (t) {},
                    readInt: function (t) {
                      var e,
                        r = 0;
                      for (
                        this.checkOffset(t), e = this.index + t - 1;
                        e >= this.index;
                        e--
                      )
                        r = (r << 8) + this.byteAt(e);
                      return (this.index += t), r;
                    },
                    readString: function (t) {
                      return n.transformTo("string", this.readData(t));
                    },
                    readData: function (t) {},
                    lastIndexOfSignature: function (t) {},
                    readAndCheckSignature: function (t) {},
                    readDate: function () {
                      var t = this.readInt(4);
                      return new Date(
                        Date.UTC(
                          1980 + ((t >> 25) & 127),
                          ((t >> 21) & 15) - 1,
                          (t >> 16) & 31,
                          (t >> 11) & 31,
                          (t >> 5) & 63,
                          (31 & t) << 1
                        )
                      );
                    },
                  }),
                    (e.exports = s);
                },
                { "../utils": 32 },
              ],
              19: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./Uint8ArrayReader");
                  function s(t) {
                    n.call(this, t);
                  }
                  t("../utils").inherits(s, n),
                    (s.prototype.readData = function (t) {
                      this.checkOffset(t);
                      var e = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + t
                      );
                      return (this.index += t), e;
                    }),
                    (e.exports = s);
                },
                { "../utils": 32, "./Uint8ArrayReader": 21 },
              ],
              20: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./DataReader");
                  function s(t) {
                    n.call(this, t);
                  }
                  t("../utils").inherits(s, n),
                    (s.prototype.byteAt = function (t) {
                      return this.data.charCodeAt(this.zero + t);
                    }),
                    (s.prototype.lastIndexOfSignature = function (t) {
                      return this.data.lastIndexOf(t) - this.zero;
                    }),
                    (s.prototype.readAndCheckSignature = function (t) {
                      return t === this.readData(4);
                    }),
                    (s.prototype.readData = function (t) {
                      this.checkOffset(t);
                      var e = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + t
                      );
                      return (this.index += t), e;
                    }),
                    (e.exports = s);
                },
                { "../utils": 32, "./DataReader": 18 },
              ],
              21: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./ArrayReader");
                  function s(t) {
                    n.call(this, t);
                  }
                  t("../utils").inherits(s, n),
                    (s.prototype.readData = function (t) {
                      if ((this.checkOffset(t), 0 === t))
                        return new Uint8Array(0);
                      var e = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + t
                      );
                      return (this.index += t), e;
                    }),
                    (e.exports = s);
                },
                { "../utils": 32, "./ArrayReader": 17 },
              ],
              22: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils"),
                    s = t("../support"),
                    i = t("./ArrayReader"),
                    o = t("./StringReader"),
                    a = t("./NodeBufferReader"),
                    c = t("./Uint8ArrayReader");
                  e.exports = function (t) {
                    var e = n.getTypeOf(t);
                    return (
                      n.checkSupport(e),
                      "string" !== e || s.uint8array
                        ? "nodebuffer" === e
                          ? new a(t)
                          : s.uint8array
                          ? new c(n.transformTo("uint8array", t))
                          : new i(n.transformTo("array", t))
                        : new o(t)
                    );
                  };
                },
                {
                  "../support": 30,
                  "../utils": 32,
                  "./ArrayReader": 17,
                  "./NodeBufferReader": 19,
                  "./StringReader": 20,
                  "./Uint8ArrayReader": 21,
                },
              ],
              23: [
                function (t, e, r) {
                  "use strict";
                  (r.LOCAL_FILE_HEADER = "PK"),
                    (r.CENTRAL_FILE_HEADER = "PK"),
                    (r.CENTRAL_DIRECTORY_END = "PK"),
                    (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
                    (r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                    (r.DATA_DESCRIPTOR = "PK\b");
                },
                {},
              ],
              24: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./GenericWorker"),
                    s = t("../utils");
                  function i(t) {
                    n.call(this, "ConvertWorker to " + t), (this.destType = t);
                  }
                  s.inherits(i, n),
                    (i.prototype.processChunk = function (t) {
                      this.push({
                        data: s.transformTo(this.destType, t.data),
                        meta: t.meta,
                      });
                    }),
                    (e.exports = i);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              25: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./GenericWorker"),
                    s = t("../crc32");
                  function i() {
                    n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                  }
                  t("../utils").inherits(i, n),
                    (i.prototype.processChunk = function (t) {
                      (this.streamInfo.crc32 = s(
                        t.data,
                        this.streamInfo.crc32 || 0
                      )),
                        this.push(t);
                    }),
                    (e.exports = i);
                },
                { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
              ],
              26: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils"),
                    s = t("./GenericWorker");
                  function i(t) {
                    s.call(this, "DataLengthProbe for " + t),
                      (this.propName = t),
                      this.withStreamInfo(t, 0);
                  }
                  n.inherits(i, s),
                    (i.prototype.processChunk = function (t) {
                      if (t) {
                        var e = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = e + t.data.length;
                      }
                      s.prototype.processChunk.call(this, t);
                    }),
                    (e.exports = i);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              27: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils"),
                    s = t("./GenericWorker");
                  function i(t) {
                    s.call(this, "DataWorker");
                    var e = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ""),
                      (this._tickScheduled = !1),
                      t.then(
                        function (t) {
                          (e.dataIsReady = !0),
                            (e.data = t),
                            (e.max = (t && t.length) || 0),
                            (e.type = n.getTypeOf(t)),
                            e.isPaused || e._tickAndRepeat();
                        },
                        function (t) {
                          e.error(t);
                        }
                      );
                  }
                  n.inherits(i, s),
                    (i.prototype.cleanUp = function () {
                      s.prototype.cleanUp.call(this), (this.data = null);
                    }),
                    (i.prototype.resume = function () {
                      return (
                        !!s.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0),
                          n.delay(this._tickAndRepeat, [], this)),
                        !0)
                      );
                    }),
                    (i.prototype._tickAndRepeat = function () {
                      (this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (n.delay(this._tickAndRepeat, [], this),
                            (this._tickScheduled = !0)));
                    }),
                    (i.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1;
                      var t = null,
                        e = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case "string":
                          t = this.data.substring(this.index, e);
                          break;
                        case "uint8array":
                          t = this.data.subarray(this.index, e);
                          break;
                        case "array":
                        case "nodebuffer":
                          t = this.data.slice(this.index, e);
                      }
                      return (
                        (this.index = e),
                        this.push({
                          data: t,
                          meta: {
                            percent: this.max
                              ? (this.index / this.max) * 100
                              : 0,
                          },
                        })
                      );
                    }),
                    (e.exports = i);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              28: [
                function (t, e, r) {
                  "use strict";
                  function n(t) {
                    (this.name = t || "default"),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null);
                  }
                  (n.prototype = {
                    push: function (t) {
                      this.emit("data", t);
                    },
                    end: function () {
                      if (this.isFinished) return !1;
                      this.flush();
                      try {
                        this.emit("end"),
                          this.cleanUp(),
                          (this.isFinished = !0);
                      } catch (t) {
                        this.emit("error", t);
                      }
                      return !0;
                    },
                    error: function (t) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = t)
                          : ((this.isFinished = !0),
                            this.emit("error", t),
                            this.previous && this.previous.error(t),
                            this.cleanUp()),
                        !0)
                      );
                    },
                    on: function (t, e) {
                      return this._listeners[t].push(e), this;
                    },
                    cleanUp: function () {
                      (this.streamInfo =
                        this.generatedError =
                        this.extraStreamInfo =
                          null),
                        (this._listeners = []);
                    },
                    emit: function (t, e) {
                      if (this._listeners[t])
                        for (var r = 0; r < this._listeners[t].length; r++)
                          this._listeners[t][r].call(this, e);
                    },
                    pipe: function (t) {
                      return t.registerPrevious(this);
                    },
                    registerPrevious: function (t) {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        );
                      (this.streamInfo = t.streamInfo),
                        this.mergeStreamInfo(),
                        (this.previous = t);
                      var e = this;
                      return (
                        t.on("data", function (t) {
                          e.processChunk(t);
                        }),
                        t.on("end", function () {
                          e.end();
                        }),
                        t.on("error", function (t) {
                          e.error(t);
                        }),
                        this
                      );
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0),
                        this.previous && this.previous.pause(),
                        !0)
                      );
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1;
                      var t = (this.isPaused = !1);
                      return (
                        this.generatedError &&
                          (this.error(this.generatedError), (t = !0)),
                        this.previous && this.previous.resume(),
                        !t
                      );
                    },
                    flush: function () {},
                    processChunk: function (t) {
                      this.push(t);
                    },
                    withStreamInfo: function (t, e) {
                      return (
                        (this.extraStreamInfo[t] = e),
                        this.mergeStreamInfo(),
                        this
                      );
                    },
                    mergeStreamInfo: function () {
                      for (var t in this.extraStreamInfo)
                        this.extraStreamInfo.hasOwnProperty(t) &&
                          (this.streamInfo[t] = this.extraStreamInfo[t]);
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        );
                      (this.isLocked = !0),
                        this.previous && this.previous.lock();
                    },
                    toString: function () {
                      var t = "Worker " + this.name;
                      return this.previous ? this.previous + " -> " + t : t;
                    },
                  }),
                    (e.exports = n);
                },
                {},
              ],
              29: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils"),
                    s = t("./ConvertWorker"),
                    i = t("./GenericWorker"),
                    o = t("../base64"),
                    a = t("../support"),
                    c = t("../external"),
                    u = null;
                  if (a.nodestream)
                    try {
                      u = t("../nodejs/NodejsStreamOutputAdapter");
                    } catch (t) {}
                  function l(t, e, r) {
                    var o = e;
                    switch (e) {
                      case "blob":
                      case "arraybuffer":
                        o = "uint8array";
                        break;
                      case "base64":
                        o = "string";
                    }
                    try {
                      (this._internalType = o),
                        (this._outputType = e),
                        (this._mimeType = r),
                        n.checkSupport(o),
                        (this._worker = t.pipe(new s(o))),
                        t.lock();
                    } catch (t) {
                      (this._worker = new i("error")), this._worker.error(t);
                    }
                  }
                  (l.prototype = {
                    accumulate: function (t) {
                      return (function (t, e) {
                        return new c.Promise(function (r, s) {
                          var i = [],
                            a = t._internalType,
                            c = t._outputType,
                            u = t._mimeType;
                          t.on("data", function (t, r) {
                            i.push(t), e && e(r);
                          })
                            .on("error", function (t) {
                              (i = []), s(t);
                            })
                            .on("end", function () {
                              try {
                                var t = (function (t, e, r) {
                                  switch (t) {
                                    case "blob":
                                      return n.newBlob(
                                        n.transformTo("arraybuffer", e),
                                        r
                                      );
                                    case "base64":
                                      return o.encode(e);
                                    default:
                                      return n.transformTo(t, e);
                                  }
                                })(
                                  c,
                                  (function (t, e) {
                                    var r,
                                      n = 0,
                                      s = null,
                                      i = 0;
                                    for (r = 0; r < e.length; r++)
                                      i += e[r].length;
                                    switch (t) {
                                      case "string":
                                        return e.join("");
                                      case "array":
                                        return Array.prototype.concat.apply(
                                          [],
                                          e
                                        );
                                      case "uint8array":
                                        for (
                                          s = new Uint8Array(i), r = 0;
                                          r < e.length;
                                          r++
                                        )
                                          s.set(e[r], n), (n += e[r].length);
                                        return s;
                                      case "nodebuffer":
                                        return Buffer.concat(e);
                                      default:
                                        throw new Error(
                                          "concat : unsupported type '" +
                                            t +
                                            "'"
                                        );
                                    }
                                  })(a, i),
                                  u
                                );
                                r(t);
                              } catch (t) {
                                s(t);
                              }
                              i = [];
                            })
                            .resume();
                        });
                      })(this, t);
                    },
                    on: function (t, e) {
                      var r = this;
                      return (
                        "data" === t
                          ? this._worker.on(t, function (t) {
                              e.call(r, t.data, t.meta);
                            })
                          : this._worker.on(t, function () {
                              n.delay(e, arguments, r);
                            }),
                        this
                      );
                    },
                    resume: function () {
                      return (
                        n.delay(this._worker.resume, [], this._worker), this
                      );
                    },
                    pause: function () {
                      return this._worker.pause(), this;
                    },
                    toNodejsStream: function (t) {
                      if (
                        (n.checkSupport("nodestream"),
                        "nodebuffer" !== this._outputType)
                      )
                        throw new Error(
                          this._outputType + " is not supported by this method"
                        );
                      return new u(
                        this,
                        { objectMode: "nodebuffer" !== this._outputType },
                        t
                      );
                    },
                  }),
                    (e.exports = l);
                },
                {
                  "../base64": 1,
                  "../external": 6,
                  "../nodejs/NodejsStreamOutputAdapter": 13,
                  "../support": 30,
                  "../utils": 32,
                  "./ConvertWorker": 24,
                  "./GenericWorker": 28,
                },
              ],
              30: [
                function (t, e, r) {
                  "use strict";
                  if (
                    ((r.base64 = !0),
                    (r.array = !0),
                    (r.string = !0),
                    (r.arraybuffer =
                      "undefined" != typeof ArrayBuffer &&
                      "undefined" != typeof Uint8Array),
                    (r.nodebuffer = "undefined" != typeof Buffer),
                    (r.uint8array = "undefined" != typeof Uint8Array),
                    "undefined" == typeof ArrayBuffer)
                  )
                    r.blob = !1;
                  else {
                    var n = new ArrayBuffer(0);
                    try {
                      r.blob =
                        0 === new Blob([n], { type: "application/zip" }).size;
                    } catch (t) {
                      try {
                        var s = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        s.append(n),
                          (r.blob = 0 === s.getBlob("application/zip").size);
                      } catch (t) {
                        r.blob = !1;
                      }
                    }
                  }
                  try {
                    r.nodestream = !!t("readable-stream").Readable;
                  } catch (t) {
                    r.nodestream = !1;
                  }
                },
                { "readable-stream": 16 },
              ],
              31: [
                function (t, e, r) {
                  "use strict";
                  for (
                    var n = t("./utils"),
                      s = t("./support"),
                      i = t("./nodejsUtils"),
                      o = t("./stream/GenericWorker"),
                      a = new Array(256),
                      c = 0;
                    c < 256;
                    c++
                  )
                    a[c] =
                      252 <= c
                        ? 6
                        : 248 <= c
                        ? 5
                        : 240 <= c
                        ? 4
                        : 224 <= c
                        ? 3
                        : 192 <= c
                        ? 2
                        : 1;
                  function u() {
                    o.call(this, "utf-8 decode"), (this.leftOver = null);
                  }
                  function l() {
                    o.call(this, "utf-8 encode");
                  }
                  (a[254] = a[254] = 1),
                    (r.utf8encode = function (t) {
                      return s.nodebuffer
                        ? i.newBufferFrom(t, "utf-8")
                        : (function (t) {
                            var e,
                              r,
                              n,
                              i,
                              o,
                              a = t.length,
                              c = 0;
                            for (i = 0; i < a; i++)
                              55296 == (64512 & (r = t.charCodeAt(i))) &&
                                i + 1 < a &&
                                56320 == (64512 & (n = t.charCodeAt(i + 1))) &&
                                ((r =
                                  65536 + ((r - 55296) << 10) + (n - 56320)),
                                i++),
                                (c +=
                                  r < 128
                                    ? 1
                                    : r < 2048
                                    ? 2
                                    : r < 65536
                                    ? 3
                                    : 4);
                            for (
                              e = s.uint8array
                                ? new Uint8Array(c)
                                : new Array(c),
                                i = o = 0;
                              o < c;
                              i++
                            )
                              55296 == (64512 & (r = t.charCodeAt(i))) &&
                                i + 1 < a &&
                                56320 == (64512 & (n = t.charCodeAt(i + 1))) &&
                                ((r =
                                  65536 + ((r - 55296) << 10) + (n - 56320)),
                                i++),
                                r < 128
                                  ? (e[o++] = r)
                                  : (r < 2048
                                      ? (e[o++] = 192 | (r >>> 6))
                                      : (r < 65536
                                          ? (e[o++] = 224 | (r >>> 12))
                                          : ((e[o++] = 240 | (r >>> 18)),
                                            (e[o++] = 128 | ((r >>> 12) & 63))),
                                        (e[o++] = 128 | ((r >>> 6) & 63))),
                                    (e[o++] = 128 | (63 & r)));
                            return e;
                          })(t);
                    }),
                    (r.utf8decode = function (t) {
                      return s.nodebuffer
                        ? n.transformTo("nodebuffer", t).toString("utf-8")
                        : (function (t) {
                            var e,
                              r,
                              s,
                              i,
                              o = t.length,
                              c = new Array(2 * o);
                            for (e = r = 0; e < o; )
                              if ((s = t[e++]) < 128) c[r++] = s;
                              else if (4 < (i = a[s]))
                                (c[r++] = 65533), (e += i - 1);
                              else {
                                for (
                                  s &= 2 === i ? 31 : 3 === i ? 15 : 7;
                                  1 < i && e < o;

                                )
                                  (s = (s << 6) | (63 & t[e++])), i--;
                                1 < i
                                  ? (c[r++] = 65533)
                                  : s < 65536
                                  ? (c[r++] = s)
                                  : ((s -= 65536),
                                    (c[r++] = 55296 | ((s >> 10) & 1023)),
                                    (c[r++] = 56320 | (1023 & s)));
                              }
                            return (
                              c.length !== r &&
                                (c.subarray
                                  ? (c = c.subarray(0, r))
                                  : (c.length = r)),
                              n.applyFromCharCode(c)
                            );
                          })(
                            (t = n.transformTo(
                              s.uint8array ? "uint8array" : "array",
                              t
                            ))
                          );
                    }),
                    n.inherits(u, o),
                    (u.prototype.processChunk = function (t) {
                      var e = n.transformTo(
                        s.uint8array ? "uint8array" : "array",
                        t.data
                      );
                      if (this.leftOver && this.leftOver.length) {
                        if (s.uint8array) {
                          var i = e;
                          (e = new Uint8Array(
                            i.length + this.leftOver.length
                          )).set(this.leftOver, 0),
                            e.set(i, this.leftOver.length);
                        } else e = this.leftOver.concat(e);
                        this.leftOver = null;
                      }
                      var o = (function (t, e) {
                          var r;
                          for (
                            (e = e || t.length) > t.length && (e = t.length),
                              r = e - 1;
                            0 <= r && 128 == (192 & t[r]);

                          )
                            r--;
                          return r < 0 || 0 === r ? e : r + a[t[r]] > e ? r : e;
                        })(e),
                        c = e;
                      o !== e.length &&
                        (s.uint8array
                          ? ((c = e.subarray(0, o)),
                            (this.leftOver = e.subarray(o, e.length)))
                          : ((c = e.slice(0, o)),
                            (this.leftOver = e.slice(o, e.length)))),
                        this.push({ data: r.utf8decode(c), meta: t.meta });
                    }),
                    (u.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({
                          data: r.utf8decode(this.leftOver),
                          meta: {},
                        }),
                        (this.leftOver = null));
                    }),
                    (r.Utf8DecodeWorker = u),
                    n.inherits(l, o),
                    (l.prototype.processChunk = function (t) {
                      this.push({ data: r.utf8encode(t.data), meta: t.meta });
                    }),
                    (r.Utf8EncodeWorker = l);
                },
                {
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./support": 30,
                  "./utils": 32,
                },
              ],
              32: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./support"),
                    s = t("./base64"),
                    i = t("./nodejsUtils"),
                    o = t("set-immediate-shim"),
                    a = t("./external");
                  function c(t) {
                    return t;
                  }
                  function u(t, e) {
                    for (var r = 0; r < t.length; ++r)
                      e[r] = 255 & t.charCodeAt(r);
                    return e;
                  }
                  r.newBlob = function (t, e) {
                    r.checkSupport("blob");
                    try {
                      return new Blob([t], { type: e });
                    } catch (r) {
                      try {
                        var n = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        return n.append(t), n.getBlob(e);
                      } catch (t) {
                        throw new Error("Bug : can't construct the Blob.");
                      }
                    }
                  };
                  var l = {
                    stringifyByChunk: function (t, e, r) {
                      var n = [],
                        s = 0,
                        i = t.length;
                      if (i <= r) return String.fromCharCode.apply(null, t);
                      for (; s < i; )
                        "array" === e || "nodebuffer" === e
                          ? n.push(
                              String.fromCharCode.apply(
                                null,
                                t.slice(s, Math.min(s + r, i))
                              )
                            )
                          : n.push(
                              String.fromCharCode.apply(
                                null,
                                t.subarray(s, Math.min(s + r, i))
                              )
                            ),
                          (s += r);
                      return n.join("");
                    },
                    stringifyByChar: function (t) {
                      for (var e = "", r = 0; r < t.length; r++)
                        e += String.fromCharCode(t[r]);
                      return e;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            n.uint8array &&
                            1 ===
                              String.fromCharCode.apply(null, new Uint8Array(1))
                                .length
                          );
                        } catch (t) {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            n.nodebuffer &&
                            1 ===
                              String.fromCharCode.apply(null, i.allocBuffer(1))
                                .length
                          );
                        } catch (t) {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function h(t) {
                    var e = 65536,
                      n = r.getTypeOf(t),
                      s = !0;
                    if (
                      ("uint8array" === n
                        ? (s = l.applyCanBeUsed.uint8array)
                        : "nodebuffer" === n &&
                          (s = l.applyCanBeUsed.nodebuffer),
                      s)
                    )
                      for (; 1 < e; )
                        try {
                          return l.stringifyByChunk(t, n, e);
                        } catch (t) {
                          e = Math.floor(e / 2);
                        }
                    return l.stringifyByChar(t);
                  }
                  function p(t, e) {
                    for (var r = 0; r < t.length; r++) e[r] = t[r];
                    return e;
                  }
                  r.applyFromCharCode = h;
                  var d = {};
                  (d.string = {
                    string: c,
                    array: function (t) {
                      return u(t, new Array(t.length));
                    },
                    arraybuffer: function (t) {
                      return d.string.uint8array(t).buffer;
                    },
                    uint8array: function (t) {
                      return u(t, new Uint8Array(t.length));
                    },
                    nodebuffer: function (t) {
                      return u(t, i.allocBuffer(t.length));
                    },
                  }),
                    (d.array = {
                      string: h,
                      array: c,
                      arraybuffer: function (t) {
                        return new Uint8Array(t).buffer;
                      },
                      uint8array: function (t) {
                        return new Uint8Array(t);
                      },
                      nodebuffer: function (t) {
                        return i.newBufferFrom(t);
                      },
                    }),
                    (d.arraybuffer = {
                      string: function (t) {
                        return h(new Uint8Array(t));
                      },
                      array: function (t) {
                        return p(new Uint8Array(t), new Array(t.byteLength));
                      },
                      arraybuffer: c,
                      uint8array: function (t) {
                        return new Uint8Array(t);
                      },
                      nodebuffer: function (t) {
                        return i.newBufferFrom(new Uint8Array(t));
                      },
                    }),
                    (d.uint8array = {
                      string: h,
                      array: function (t) {
                        return p(t, new Array(t.length));
                      },
                      arraybuffer: function (t) {
                        return t.buffer;
                      },
                      uint8array: c,
                      nodebuffer: function (t) {
                        return i.newBufferFrom(t);
                      },
                    }),
                    (d.nodebuffer = {
                      string: h,
                      array: function (t) {
                        return p(t, new Array(t.length));
                      },
                      arraybuffer: function (t) {
                        return d.nodebuffer.uint8array(t).buffer;
                      },
                      uint8array: function (t) {
                        return p(t, new Uint8Array(t.length));
                      },
                      nodebuffer: c,
                    }),
                    (r.transformTo = function (t, e) {
                      if (((e = e || ""), !t)) return e;
                      r.checkSupport(t);
                      var n = r.getTypeOf(e);
                      return d[n][t](e);
                    }),
                    (r.getTypeOf = function (t) {
                      return "string" == typeof t
                        ? "string"
                        : "[object Array]" === Object.prototype.toString.call(t)
                        ? "array"
                        : n.nodebuffer && i.isBuffer(t)
                        ? "nodebuffer"
                        : n.uint8array && t instanceof Uint8Array
                        ? "uint8array"
                        : n.arraybuffer && t instanceof ArrayBuffer
                        ? "arraybuffer"
                        : void 0;
                    }),
                    (r.checkSupport = function (t) {
                      if (!n[t.toLowerCase()])
                        throw new Error(
                          t + " is not supported by this platform"
                        );
                    }),
                    (r.MAX_VALUE_16BITS = 65535),
                    (r.MAX_VALUE_32BITS = -1),
                    (r.pretty = function (t) {
                      var e,
                        r,
                        n = "";
                      for (r = 0; r < (t || "").length; r++)
                        n +=
                          "\\x" +
                          ((e = t.charCodeAt(r)) < 16 ? "0" : "") +
                          e.toString(16).toUpperCase();
                      return n;
                    }),
                    (r.delay = function (t, e, r) {
                      o(function () {
                        t.apply(r || null, e || []);
                      });
                    }),
                    (r.inherits = function (t, e) {
                      function r() {}
                      (r.prototype = e.prototype), (t.prototype = new r());
                    }),
                    (r.extend = function () {
                      var t,
                        e,
                        r = {};
                      for (t = 0; t < arguments.length; t++)
                        for (e in arguments[t])
                          arguments[t].hasOwnProperty(e) &&
                            void 0 === r[e] &&
                            (r[e] = arguments[t][e]);
                      return r;
                    }),
                    (r.prepareContent = function (t, e, i, o, c) {
                      return a.Promise.resolve(e)
                        .then(function (t) {
                          return n.blob &&
                            (t instanceof Blob ||
                              -1 !==
                                ["[object File]", "[object Blob]"].indexOf(
                                  Object.prototype.toString.call(t)
                                )) &&
                            "undefined" != typeof FileReader
                            ? new a.Promise(function (e, r) {
                                var n = new FileReader();
                                (n.onload = function (t) {
                                  e(t.target.result);
                                }),
                                  (n.onerror = function (t) {
                                    r(t.target.error);
                                  }),
                                  n.readAsArrayBuffer(t);
                              })
                            : t;
                        })
                        .then(function (e) {
                          var l = r.getTypeOf(e);
                          return l
                            ? ("arraybuffer" === l
                                ? (e = r.transformTo("uint8array", e))
                                : "string" === l &&
                                  (c
                                    ? (e = s.decode(e))
                                    : i &&
                                      !0 !== o &&
                                      (e = (function (t) {
                                        return u(
                                          t,
                                          n.uint8array
                                            ? new Uint8Array(t.length)
                                            : new Array(t.length)
                                        );
                                      })(e))),
                              e)
                            : a.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    t +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                                )
                              );
                        });
                    });
                },
                {
                  "./base64": 1,
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./support": 30,
                  "set-immediate-shim": 54,
                },
              ],
              33: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./reader/readerFor"),
                    s = t("./utils"),
                    i = t("./signature"),
                    o = t("./zipEntry"),
                    a = (t("./utf8"), t("./support"));
                  function c(t) {
                    (this.files = []), (this.loadOptions = t);
                  }
                  (c.prototype = {
                    checkSignature: function (t) {
                      if (!this.reader.readAndCheckSignature(t)) {
                        this.reader.index -= 4;
                        var e = this.reader.readString(4);
                        throw new Error(
                          "Corrupted zip or bug: unexpected signature (" +
                            s.pretty(e) +
                            ", expected " +
                            s.pretty(t) +
                            ")"
                        );
                      }
                    },
                    isSignature: function (t, e) {
                      var r = this.reader.index;
                      this.reader.setIndex(t);
                      var n = this.reader.readString(4) === e;
                      return this.reader.setIndex(r), n;
                    },
                    readBlockEndOfCentral: function () {
                      (this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2));
                      var t = this.reader.readData(this.zipCommentLength),
                        e = a.uint8array ? "uint8array" : "array",
                        r = s.transformTo(e, t);
                      this.zipComment = this.loadOptions.decodeFileName(r);
                    },
                    readBlockZip64EndOfCentral: function () {
                      (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {});
                      for (
                        var t, e, r, n = this.zip64EndOfCentralSize - 44;
                        0 < n;

                      )
                        (t = this.reader.readInt(2)),
                          (e = this.reader.readInt(4)),
                          (r = this.reader.readData(e)),
                          (this.zip64ExtensibleData[t] = {
                            id: t,
                            length: e,
                            value: r,
                          });
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart =
                          this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error("Multi-volumes zip are not supported");
                    },
                    readLocalFiles: function () {
                      var t, e;
                      for (t = 0; t < this.files.length; t++)
                        (e = this.files[t]),
                          this.reader.setIndex(e.localHeaderOffset),
                          this.checkSignature(i.LOCAL_FILE_HEADER),
                          e.readLocalPart(this.reader),
                          e.handleUTF8(),
                          e.processAttributes();
                    },
                    readCentralDir: function () {
                      var t;
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(
                          i.CENTRAL_FILE_HEADER
                        );

                      )
                        (t = new o(
                          { zip64: this.zip64 },
                          this.loadOptions
                        )).readCentralPart(this.reader),
                          this.files.push(t);
                      if (
                        this.centralDirRecords !== this.files.length &&
                        0 !== this.centralDirRecords &&
                        0 === this.files.length
                      )
                        throw new Error(
                          "Corrupted zip or bug: expected " +
                            this.centralDirRecords +
                            " records in central dir, got " +
                            this.files.length
                        );
                    },
                    readEndOfCentral: function () {
                      var t = this.reader.lastIndexOfSignature(
                        i.CENTRAL_DIRECTORY_END
                      );
                      if (t < 0)
                        throw this.isSignature(0, i.LOCAL_FILE_HEADER)
                          ? new Error(
                              "Corrupted zip: can't find end of central directory"
                            )
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                            );
                      this.reader.setIndex(t);
                      var e = t;
                      if (
                        (this.checkSignature(i.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === s.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === s.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk ===
                            s.MAX_VALUE_16BITS ||
                          this.centralDirRecords === s.MAX_VALUE_16BITS ||
                          this.centralDirSize === s.MAX_VALUE_32BITS ||
                          this.centralDirOffset === s.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (t = this.reader.lastIndexOfSignature(
                            i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator"
                          );
                        if (
                          (this.reader.setIndex(t),
                          this.checkSignature(
                            i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          ),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            i.ZIP64_CENTRAL_DIRECTORY_END
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(
                                i.ZIP64_CENTRAL_DIRECTORY_END
                              )),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory"
                          );
                        this.reader.setIndex(
                          this.relativeOffsetEndOfZip64CentralDir
                        ),
                          this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral();
                      }
                      var r = this.centralDirOffset + this.centralDirSize;
                      this.zip64 &&
                        ((r += 20), (r += 12 + this.zip64EndOfCentralSize));
                      var n = e - r;
                      if (0 < n)
                        this.isSignature(e, i.CENTRAL_FILE_HEADER) ||
                          (this.reader.zero = n);
                      else if (n < 0)
                        throw new Error(
                          "Corrupted zip: missing " + Math.abs(n) + " bytes."
                        );
                    },
                    prepareReader: function (t) {
                      this.reader = n(t);
                    },
                    load: function (t) {
                      this.prepareReader(t),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles();
                    },
                  }),
                    (e.exports = c);
                },
                {
                  "./reader/readerFor": 22,
                  "./signature": 23,
                  "./support": 30,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipEntry": 34,
                },
              ],
              34: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./reader/readerFor"),
                    s = t("./utils"),
                    i = t("./compressedObject"),
                    o = t("./crc32"),
                    a = t("./utf8"),
                    c = t("./compressions"),
                    u = t("./support");
                  function l(t, e) {
                    (this.options = t), (this.loadOptions = e);
                  }
                  (l.prototype = {
                    isEncrypted: function () {
                      return 1 == (1 & this.bitFlag);
                    },
                    useUTF8: function () {
                      return 2048 == (2048 & this.bitFlag);
                    },
                    readLocalPart: function (t) {
                      var e, r;
                      if (
                        (t.skip(22),
                        (this.fileNameLength = t.readInt(2)),
                        (r = t.readInt(2)),
                        (this.fileName = t.readData(this.fileNameLength)),
                        t.skip(r),
                        -1 === this.compressedSize ||
                          -1 === this.uncompressedSize)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                        );
                      if (
                        null ===
                        (e = (function (t) {
                          for (var e in c)
                            if (c.hasOwnProperty(e) && c[e].magic === t)
                              return c[e];
                          return null;
                        })(this.compressionMethod))
                      )
                        throw new Error(
                          "Corrupted zip : compression " +
                            s.pretty(this.compressionMethod) +
                            " unknown (inner file : " +
                            s.transformTo("string", this.fileName) +
                            ")"
                        );
                      this.decompressed = new i(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        e,
                        t.readData(this.compressedSize)
                      );
                    },
                    readCentralPart: function (t) {
                      (this.versionMadeBy = t.readInt(2)),
                        t.skip(2),
                        (this.bitFlag = t.readInt(2)),
                        (this.compressionMethod = t.readString(2)),
                        (this.date = t.readDate()),
                        (this.crc32 = t.readInt(4)),
                        (this.compressedSize = t.readInt(4)),
                        (this.uncompressedSize = t.readInt(4));
                      var e = t.readInt(2);
                      if (
                        ((this.extraFieldsLength = t.readInt(2)),
                        (this.fileCommentLength = t.readInt(2)),
                        (this.diskNumberStart = t.readInt(2)),
                        (this.internalFileAttributes = t.readInt(2)),
                        (this.externalFileAttributes = t.readInt(4)),
                        (this.localHeaderOffset = t.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error("Encrypted zip are not supported");
                      t.skip(e),
                        this.readExtraFields(t),
                        this.parseZIP64ExtraField(t),
                        (this.fileComment = t.readData(this.fileCommentLength));
                    },
                    processAttributes: function () {
                      (this.unixPermissions = null),
                        (this.dosPermissions = null);
                      var t = this.versionMadeBy >> 8;
                      (this.dir = !!(16 & this.externalFileAttributes)),
                        0 == t &&
                          (this.dosPermissions =
                            63 & this.externalFileAttributes),
                        3 == t &&
                          (this.unixPermissions =
                            (this.externalFileAttributes >> 16) & 65535),
                        this.dir ||
                          "/" !== this.fileNameStr.slice(-1) ||
                          (this.dir = !0);
                    },
                    parseZIP64ExtraField: function (t) {
                      if (this.extraFields[1]) {
                        var e = n(this.extraFields[1].value);
                        this.uncompressedSize === s.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = e.readInt(8)),
                          this.compressedSize === s.MAX_VALUE_32BITS &&
                            (this.compressedSize = e.readInt(8)),
                          this.localHeaderOffset === s.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = e.readInt(8)),
                          this.diskNumberStart === s.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = e.readInt(4));
                      }
                    },
                    readExtraFields: function (t) {
                      var e,
                        r,
                        n,
                        s = t.index + this.extraFieldsLength;
                      for (
                        this.extraFields || (this.extraFields = {});
                        t.index + 4 < s;

                      )
                        (e = t.readInt(2)),
                          (r = t.readInt(2)),
                          (n = t.readData(r)),
                          (this.extraFields[e] = {
                            id: e,
                            length: r,
                            value: n,
                          });
                      t.setIndex(s);
                    },
                    handleUTF8: function () {
                      var t = u.uint8array ? "uint8array" : "array";
                      if (this.useUTF8())
                        (this.fileNameStr = a.utf8decode(this.fileName)),
                          (this.fileCommentStr = a.utf8decode(
                            this.fileComment
                          ));
                      else {
                        var e = this.findExtraFieldUnicodePath();
                        if (null !== e) this.fileNameStr = e;
                        else {
                          var r = s.transformTo(t, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(r);
                        }
                        var n = this.findExtraFieldUnicodeComment();
                        if (null !== n) this.fileCommentStr = n;
                        else {
                          var i = s.transformTo(t, this.fileComment);
                          this.fileCommentStr =
                            this.loadOptions.decodeFileName(i);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var t = this.extraFields[28789];
                      if (t) {
                        var e = n(t.value);
                        return 1 !== e.readInt(1) ||
                          o(this.fileName) !== e.readInt(4)
                          ? null
                          : a.utf8decode(e.readData(t.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var t = this.extraFields[25461];
                      if (t) {
                        var e = n(t.value);
                        return 1 !== e.readInt(1) ||
                          o(this.fileComment) !== e.readInt(4)
                          ? null
                          : a.utf8decode(e.readData(t.length - 5));
                      }
                      return null;
                    },
                  }),
                    (e.exports = l);
                },
                {
                  "./compressedObject": 2,
                  "./compressions": 3,
                  "./crc32": 4,
                  "./reader/readerFor": 22,
                  "./support": 30,
                  "./utf8": 31,
                  "./utils": 32,
                },
              ],
              35: [
                function (t, e, r) {
                  "use strict";
                  function n(t, e, r) {
                    (this.name = t),
                      (this.dir = r.dir),
                      (this.date = r.date),
                      (this.comment = r.comment),
                      (this.unixPermissions = r.unixPermissions),
                      (this.dosPermissions = r.dosPermissions),
                      (this._data = e),
                      (this._dataBinary = r.binary),
                      (this.options = {
                        compression: r.compression,
                        compressionOptions: r.compressionOptions,
                      });
                  }
                  var s = t("./stream/StreamHelper"),
                    i = t("./stream/DataWorker"),
                    o = t("./utf8"),
                    a = t("./compressedObject"),
                    c = t("./stream/GenericWorker");
                  n.prototype = {
                    internalStream: function (t) {
                      var e = null,
                        r = "string";
                      try {
                        if (!t) throw new Error("No output type specified.");
                        var n =
                          "string" === (r = t.toLowerCase()) || "text" === r;
                        ("binarystring" !== r && "text" !== r) ||
                          (r = "string"),
                          (e = this._decompressWorker());
                        var i = !this._dataBinary;
                        i && !n && (e = e.pipe(new o.Utf8EncodeWorker())),
                          !i && n && (e = e.pipe(new o.Utf8DecodeWorker()));
                      } catch (t) {
                        (e = new c("error")).error(t);
                      }
                      return new s(e, r, "");
                    },
                    async: function (t, e) {
                      return this.internalStream(t).accumulate(e);
                    },
                    nodeStream: function (t, e) {
                      return this.internalStream(
                        t || "nodebuffer"
                      ).toNodejsStream(e);
                    },
                    _compressWorker: function (t, e) {
                      if (
                        this._data instanceof a &&
                        this._data.compression.magic === t.magic
                      )
                        return this._data.getCompressedWorker();
                      var r = this._decompressWorker();
                      return (
                        this._dataBinary ||
                          (r = r.pipe(new o.Utf8EncodeWorker())),
                        a.createWorkerFrom(r, t, e)
                      );
                    },
                    _decompressWorker: function () {
                      return this._data instanceof a
                        ? this._data.getContentWorker()
                        : this._data instanceof c
                        ? this._data
                        : new i(this._data);
                    },
                  };
                  for (
                    var u = [
                        "asText",
                        "asBinary",
                        "asNodeBuffer",
                        "asUint8Array",
                        "asArrayBuffer",
                      ],
                      l = function () {
                        throw new Error(
                          "This method has been removed in JSZip 3.0, please check the upgrade guide."
                        );
                      },
                      h = 0;
                    h < u.length;
                    h++
                  )
                    n.prototype[u[h]] = l;
                  e.exports = n;
                },
                {
                  "./compressedObject": 2,
                  "./stream/DataWorker": 27,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31,
                },
              ],
              36: [
                function (t, e, n) {
                  (function (t) {
                    "use strict";
                    var r,
                      n,
                      s = t.MutationObserver || t.WebKitMutationObserver;
                    if (s) {
                      var i = 0,
                        o = new s(l),
                        a = t.document.createTextNode("");
                      o.observe(a, { characterData: !0 }),
                        (r = function () {
                          a.data = i = ++i % 2;
                        });
                    } else if (t.setImmediate || void 0 === t.MessageChannel)
                      r =
                        "document" in t &&
                        "onreadystatechange" in
                          t.document.createElement("script")
                          ? function () {
                              var e = t.document.createElement("script");
                              (e.onreadystatechange = function () {
                                l(),
                                  (e.onreadystatechange = null),
                                  e.parentNode.removeChild(e),
                                  (e = null);
                              }),
                                t.document.documentElement.appendChild(e);
                            }
                          : function () {
                              setTimeout(l, 0);
                            };
                    else {
                      var c = new t.MessageChannel();
                      (c.port1.onmessage = l),
                        (r = function () {
                          c.port2.postMessage(0);
                        });
                    }
                    var u = [];
                    function l() {
                      var t, e;
                      n = !0;
                      for (var r = u.length; r; ) {
                        for (e = u, u = [], t = -1; ++t < r; ) e[t]();
                        r = u.length;
                      }
                      n = !1;
                    }
                    e.exports = function (t) {
                      1 !== u.push(t) || n || r();
                    };
                  }).call(
                    this,
                    void 0 !== r.g
                      ? r.g
                      : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                      ? window
                      : {}
                  );
                },
                {},
              ],
              37: [
                function (t, e, r) {
                  "use strict";
                  var n = t("immediate");
                  function s() {}
                  var i = {},
                    o = ["REJECTED"],
                    a = ["FULFILLED"],
                    c = ["PENDING"];
                  function u(t) {
                    if ("function" != typeof t)
                      throw new TypeError("resolver must be a function");
                    (this.state = c),
                      (this.queue = []),
                      (this.outcome = void 0),
                      t !== s && d(this, t);
                  }
                  function l(t, e, r) {
                    (this.promise = t),
                      "function" == typeof e &&
                        ((this.onFulfilled = e),
                        (this.callFulfilled = this.otherCallFulfilled)),
                      "function" == typeof r &&
                        ((this.onRejected = r),
                        (this.callRejected = this.otherCallRejected));
                  }
                  function h(t, e, r) {
                    n(function () {
                      var n;
                      try {
                        n = e(r);
                      } catch (n) {
                        return i.reject(t, n);
                      }
                      n === t
                        ? i.reject(
                            t,
                            new TypeError("Cannot resolve promise with itself")
                          )
                        : i.resolve(t, n);
                    });
                  }
                  function p(t) {
                    var e = t && t.then;
                    if (
                      t &&
                      ("object" == typeof t || "function" == typeof t) &&
                      "function" == typeof e
                    )
                      return function () {
                        e.apply(t, arguments);
                      };
                  }
                  function d(t, e) {
                    var r = !1;
                    function n(e) {
                      r || ((r = !0), i.reject(t, e));
                    }
                    function s(e) {
                      r || ((r = !0), i.resolve(t, e));
                    }
                    var o = f(function () {
                      e(s, n);
                    });
                    "error" === o.status && n(o.value);
                  }
                  function f(t, e) {
                    var r = {};
                    try {
                      (r.value = t(e)), (r.status = "success");
                    } catch (t) {
                      (r.status = "error"), (r.value = t);
                    }
                    return r;
                  }
                  ((e.exports = u).prototype.finally = function (t) {
                    if ("function" != typeof t) return this;
                    var e = this.constructor;
                    return this.then(
                      function (r) {
                        return e.resolve(t()).then(function () {
                          return r;
                        });
                      },
                      function (r) {
                        return e.resolve(t()).then(function () {
                          throw r;
                        });
                      }
                    );
                  }),
                    (u.prototype.catch = function (t) {
                      return this.then(null, t);
                    }),
                    (u.prototype.then = function (t, e) {
                      if (
                        ("function" != typeof t && this.state === a) ||
                        ("function" != typeof e && this.state === o)
                      )
                        return this;
                      var r = new this.constructor(s);
                      return (
                        this.state !== c
                          ? h(r, this.state === a ? t : e, this.outcome)
                          : this.queue.push(new l(r, t, e)),
                        r
                      );
                    }),
                    (l.prototype.callFulfilled = function (t) {
                      i.resolve(this.promise, t);
                    }),
                    (l.prototype.otherCallFulfilled = function (t) {
                      h(this.promise, this.onFulfilled, t);
                    }),
                    (l.prototype.callRejected = function (t) {
                      i.reject(this.promise, t);
                    }),
                    (l.prototype.otherCallRejected = function (t) {
                      h(this.promise, this.onRejected, t);
                    }),
                    (i.resolve = function (t, e) {
                      var r = f(p, e);
                      if ("error" === r.status) return i.reject(t, r.value);
                      var n = r.value;
                      if (n) d(t, n);
                      else {
                        (t.state = a), (t.outcome = e);
                        for (var s = -1, o = t.queue.length; ++s < o; )
                          t.queue[s].callFulfilled(e);
                      }
                      return t;
                    }),
                    (i.reject = function (t, e) {
                      (t.state = o), (t.outcome = e);
                      for (var r = -1, n = t.queue.length; ++r < n; )
                        t.queue[r].callRejected(e);
                      return t;
                    }),
                    (u.resolve = function (t) {
                      return t instanceof this ? t : i.resolve(new this(s), t);
                    }),
                    (u.reject = function (t) {
                      var e = new this(s);
                      return i.reject(e, t);
                    }),
                    (u.all = function (t) {
                      var e = this;
                      if (
                        "[object Array]" !== Object.prototype.toString.call(t)
                      )
                        return this.reject(new TypeError("must be an array"));
                      var r = t.length,
                        n = !1;
                      if (!r) return this.resolve([]);
                      for (
                        var o = new Array(r), a = 0, c = -1, u = new this(s);
                        ++c < r;

                      )
                        l(t[c], c);
                      return u;
                      function l(t, s) {
                        e.resolve(t).then(
                          function (t) {
                            (o[s] = t),
                              ++a !== r || n || ((n = !0), i.resolve(u, o));
                          },
                          function (t) {
                            n || ((n = !0), i.reject(u, t));
                          }
                        );
                      }
                    }),
                    (u.race = function (t) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(t)
                      )
                        return this.reject(new TypeError("must be an array"));
                      var e = t.length,
                        r = !1;
                      if (!e) return this.resolve([]);
                      for (var n, o = -1, a = new this(s); ++o < e; )
                        (n = t[o]),
                          this.resolve(n).then(
                            function (t) {
                              r || ((r = !0), i.resolve(a, t));
                            },
                            function (t) {
                              r || ((r = !0), i.reject(a, t));
                            }
                          );
                      return a;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (t, e, r) {
                  "use strict";
                  var n = {};
                  (0, t("./lib/utils/common").assign)(
                    n,
                    t("./lib/deflate"),
                    t("./lib/inflate"),
                    t("./lib/zlib/constants")
                  ),
                    (e.exports = n);
                },
                {
                  "./lib/deflate": 39,
                  "./lib/inflate": 40,
                  "./lib/utils/common": 41,
                  "./lib/zlib/constants": 44,
                },
              ],
              39: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./zlib/deflate"),
                    s = t("./utils/common"),
                    i = t("./utils/strings"),
                    o = t("./zlib/messages"),
                    a = t("./zlib/zstream"),
                    c = Object.prototype.toString;
                  function u(t) {
                    if (!(this instanceof u)) return new u(t);
                    this.options = s.assign(
                      {
                        level: -1,
                        method: 8,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: 0,
                        to: "",
                      },
                      t || {}
                    );
                    var e = this.options;
                    e.raw && 0 < e.windowBits
                      ? (e.windowBits = -e.windowBits)
                      : e.gzip &&
                        0 < e.windowBits &&
                        e.windowBits < 16 &&
                        (e.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new a()),
                      (this.strm.avail_out = 0);
                    var r = n.deflateInit2(
                      this.strm,
                      e.level,
                      e.method,
                      e.windowBits,
                      e.memLevel,
                      e.strategy
                    );
                    if (0 !== r) throw new Error(o[r]);
                    if (
                      (e.header && n.deflateSetHeader(this.strm, e.header),
                      e.dictionary)
                    ) {
                      var l;
                      if (
                        ((l =
                          "string" == typeof e.dictionary
                            ? i.string2buf(e.dictionary)
                            : "[object ArrayBuffer]" === c.call(e.dictionary)
                            ? new Uint8Array(e.dictionary)
                            : e.dictionary),
                        0 !== (r = n.deflateSetDictionary(this.strm, l)))
                      )
                        throw new Error(o[r]);
                      this._dict_set = !0;
                    }
                  }
                  function l(t, e) {
                    var r = new u(e);
                    if ((r.push(t, !0), r.err)) throw r.msg || o[r.err];
                    return r.result;
                  }
                  (u.prototype.push = function (t, e) {
                    var r,
                      o,
                      a = this.strm,
                      u = this.options.chunkSize;
                    if (this.ended) return !1;
                    (o = e === ~~e ? e : !0 === e ? 4 : 0),
                      "string" == typeof t
                        ? (a.input = i.string2buf(t))
                        : "[object ArrayBuffer]" === c.call(t)
                        ? (a.input = new Uint8Array(t))
                        : (a.input = t),
                      (a.next_in = 0),
                      (a.avail_in = a.input.length);
                    do {
                      if (
                        (0 === a.avail_out &&
                          ((a.output = new s.Buf8(u)),
                          (a.next_out = 0),
                          (a.avail_out = u)),
                        1 !== (r = n.deflate(a, o)) && 0 !== r)
                      )
                        return this.onEnd(r), !(this.ended = !0);
                      (0 !== a.avail_out &&
                        (0 !== a.avail_in || (4 !== o && 2 !== o))) ||
                        ("string" === this.options.to
                          ? this.onData(
                              i.buf2binstring(s.shrinkBuf(a.output, a.next_out))
                            )
                          : this.onData(s.shrinkBuf(a.output, a.next_out)));
                    } while ((0 < a.avail_in || 0 === a.avail_out) && 1 !== r);
                    return 4 === o
                      ? ((r = n.deflateEnd(this.strm)),
                        this.onEnd(r),
                        (this.ended = !0),
                        0 === r)
                      : 2 !== o || (this.onEnd(0), !(a.avail_out = 0));
                  }),
                    (u.prototype.onData = function (t) {
                      this.chunks.push(t);
                    }),
                    (u.prototype.onEnd = function (t) {
                      0 === t &&
                        ("string" === this.options.to
                          ? (this.result = this.chunks.join(""))
                          : (this.result = s.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = t),
                        (this.msg = this.strm.msg);
                    }),
                    (r.Deflate = u),
                    (r.deflate = l),
                    (r.deflateRaw = function (t, e) {
                      return ((e = e || {}).raw = !0), l(t, e);
                    }),
                    (r.gzip = function (t, e) {
                      return ((e = e || {}).gzip = !0), l(t, e);
                    });
                },
                {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/deflate": 46,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53,
                },
              ],
              40: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./zlib/inflate"),
                    s = t("./utils/common"),
                    i = t("./utils/strings"),
                    o = t("./zlib/constants"),
                    a = t("./zlib/messages"),
                    c = t("./zlib/zstream"),
                    u = t("./zlib/gzheader"),
                    l = Object.prototype.toString;
                  function h(t) {
                    if (!(this instanceof h)) return new h(t);
                    this.options = s.assign(
                      { chunkSize: 16384, windowBits: 0, to: "" },
                      t || {}
                    );
                    var e = this.options;
                    e.raw &&
                      0 <= e.windowBits &&
                      e.windowBits < 16 &&
                      ((e.windowBits = -e.windowBits),
                      0 === e.windowBits && (e.windowBits = -15)),
                      !(0 <= e.windowBits && e.windowBits < 16) ||
                        (t && t.windowBits) ||
                        (e.windowBits += 32),
                      15 < e.windowBits &&
                        e.windowBits < 48 &&
                        0 == (15 & e.windowBits) &&
                        (e.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new c()),
                      (this.strm.avail_out = 0);
                    var r = n.inflateInit2(this.strm, e.windowBits);
                    if (r !== o.Z_OK) throw new Error(a[r]);
                    (this.header = new u()),
                      n.inflateGetHeader(this.strm, this.header);
                  }
                  function p(t, e) {
                    var r = new h(e);
                    if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
                    return r.result;
                  }
                  (h.prototype.push = function (t, e) {
                    var r,
                      a,
                      c,
                      u,
                      h,
                      p,
                      d = this.strm,
                      f = this.options.chunkSize,
                      m = this.options.dictionary,
                      w = !1;
                    if (this.ended) return !1;
                    (a = e === ~~e ? e : !0 === e ? o.Z_FINISH : o.Z_NO_FLUSH),
                      "string" == typeof t
                        ? (d.input = i.binstring2buf(t))
                        : "[object ArrayBuffer]" === l.call(t)
                        ? (d.input = new Uint8Array(t))
                        : (d.input = t),
                      (d.next_in = 0),
                      (d.avail_in = d.input.length);
                    do {
                      if (
                        (0 === d.avail_out &&
                          ((d.output = new s.Buf8(f)),
                          (d.next_out = 0),
                          (d.avail_out = f)),
                        (r = n.inflate(d, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
                          m &&
                          ((p =
                            "string" == typeof m
                              ? i.string2buf(m)
                              : "[object ArrayBuffer]" === l.call(m)
                              ? new Uint8Array(m)
                              : m),
                          (r = n.inflateSetDictionary(this.strm, p))),
                        r === o.Z_BUF_ERROR &&
                          !0 === w &&
                          ((r = o.Z_OK), (w = !1)),
                        r !== o.Z_STREAM_END && r !== o.Z_OK)
                      )
                        return this.onEnd(r), !(this.ended = !0);
                      d.next_out &&
                        ((0 !== d.avail_out &&
                          r !== o.Z_STREAM_END &&
                          (0 !== d.avail_in ||
                            (a !== o.Z_FINISH && a !== o.Z_SYNC_FLUSH))) ||
                          ("string" === this.options.to
                            ? ((c = i.utf8border(d.output, d.next_out)),
                              (u = d.next_out - c),
                              (h = i.buf2string(d.output, c)),
                              (d.next_out = u),
                              (d.avail_out = f - u),
                              u && s.arraySet(d.output, d.output, c, u, 0),
                              this.onData(h))
                            : this.onData(s.shrinkBuf(d.output, d.next_out)))),
                        0 === d.avail_in && 0 === d.avail_out && (w = !0);
                    } while (
                      (0 < d.avail_in || 0 === d.avail_out) &&
                      r !== o.Z_STREAM_END
                    );
                    return (
                      r === o.Z_STREAM_END && (a = o.Z_FINISH),
                      a === o.Z_FINISH
                        ? ((r = n.inflateEnd(this.strm)),
                          this.onEnd(r),
                          (this.ended = !0),
                          r === o.Z_OK)
                        : a !== o.Z_SYNC_FLUSH ||
                          (this.onEnd(o.Z_OK), !(d.avail_out = 0))
                    );
                  }),
                    (h.prototype.onData = function (t) {
                      this.chunks.push(t);
                    }),
                    (h.prototype.onEnd = function (t) {
                      t === o.Z_OK &&
                        ("string" === this.options.to
                          ? (this.result = this.chunks.join(""))
                          : (this.result = s.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = t),
                        (this.msg = this.strm.msg);
                    }),
                    (r.Inflate = h),
                    (r.inflate = p),
                    (r.inflateRaw = function (t, e) {
                      return ((e = e || {}).raw = !0), p(t, e);
                    }),
                    (r.ungzip = p);
                },
                {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/constants": 44,
                  "./zlib/gzheader": 47,
                  "./zlib/inflate": 49,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53,
                },
              ],
              41: [
                function (t, e, r) {
                  "use strict";
                  var n =
                    "undefined" != typeof Uint8Array &&
                    "undefined" != typeof Uint16Array &&
                    "undefined" != typeof Int32Array;
                  (r.assign = function (t) {
                    for (
                      var e = Array.prototype.slice.call(arguments, 1);
                      e.length;

                    ) {
                      var r = e.shift();
                      if (r) {
                        if ("object" != typeof r)
                          throw new TypeError(r + "must be non-object");
                        for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
                      }
                    }
                    return t;
                  }),
                    (r.shrinkBuf = function (t, e) {
                      return t.length === e
                        ? t
                        : t.subarray
                        ? t.subarray(0, e)
                        : ((t.length = e), t);
                    });
                  var s = {
                      arraySet: function (t, e, r, n, s) {
                        if (e.subarray && t.subarray)
                          t.set(e.subarray(r, r + n), s);
                        else for (var i = 0; i < n; i++) t[s + i] = e[r + i];
                      },
                      flattenChunks: function (t) {
                        var e, r, n, s, i, o;
                        for (e = n = 0, r = t.length; e < r; e++)
                          n += t[e].length;
                        for (
                          o = new Uint8Array(n), e = s = 0, r = t.length;
                          e < r;
                          e++
                        )
                          (i = t[e]), o.set(i, s), (s += i.length);
                        return o;
                      },
                    },
                    i = {
                      arraySet: function (t, e, r, n, s) {
                        for (var i = 0; i < n; i++) t[s + i] = e[r + i];
                      },
                      flattenChunks: function (t) {
                        return [].concat.apply([], t);
                      },
                    };
                  (r.setTyped = function (t) {
                    t
                      ? ((r.Buf8 = Uint8Array),
                        (r.Buf16 = Uint16Array),
                        (r.Buf32 = Int32Array),
                        r.assign(r, s))
                      : ((r.Buf8 = Array),
                        (r.Buf16 = Array),
                        (r.Buf32 = Array),
                        r.assign(r, i));
                  }),
                    r.setTyped(n);
                },
                {},
              ],
              42: [
                function (t, e, r) {
                  "use strict";
                  var n = t("./common"),
                    s = !0,
                    i = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch (t) {
                    s = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch (t) {
                    i = !1;
                  }
                  for (var o = new n.Buf8(256), a = 0; a < 256; a++)
                    o[a] =
                      252 <= a
                        ? 6
                        : 248 <= a
                        ? 5
                        : 240 <= a
                        ? 4
                        : 224 <= a
                        ? 3
                        : 192 <= a
                        ? 2
                        : 1;
                  function c(t, e) {
                    if (e < 65537 && ((t.subarray && i) || (!t.subarray && s)))
                      return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
                    for (var r = "", o = 0; o < e; o++)
                      r += String.fromCharCode(t[o]);
                    return r;
                  }
                  (o[254] = o[254] = 1),
                    (r.string2buf = function (t) {
                      var e,
                        r,
                        s,
                        i,
                        o,
                        a = t.length,
                        c = 0;
                      for (i = 0; i < a; i++)
                        55296 == (64512 & (r = t.charCodeAt(i))) &&
                          i + 1 < a &&
                          56320 == (64512 & (s = t.charCodeAt(i + 1))) &&
                          ((r = 65536 + ((r - 55296) << 10) + (s - 56320)),
                          i++),
                          (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                      for (e = new n.Buf8(c), i = o = 0; o < c; i++)
                        55296 == (64512 & (r = t.charCodeAt(i))) &&
                          i + 1 < a &&
                          56320 == (64512 & (s = t.charCodeAt(i + 1))) &&
                          ((r = 65536 + ((r - 55296) << 10) + (s - 56320)),
                          i++),
                          r < 128
                            ? (e[o++] = r)
                            : (r < 2048
                                ? (e[o++] = 192 | (r >>> 6))
                                : (r < 65536
                                    ? (e[o++] = 224 | (r >>> 12))
                                    : ((e[o++] = 240 | (r >>> 18)),
                                      (e[o++] = 128 | ((r >>> 12) & 63))),
                                  (e[o++] = 128 | ((r >>> 6) & 63))),
                              (e[o++] = 128 | (63 & r)));
                      return e;
                    }),
                    (r.buf2binstring = function (t) {
                      return c(t, t.length);
                    }),
                    (r.binstring2buf = function (t) {
                      for (
                        var e = new n.Buf8(t.length), r = 0, s = e.length;
                        r < s;
                        r++
                      )
                        e[r] = t.charCodeAt(r);
                      return e;
                    }),
                    (r.buf2string = function (t, e) {
                      var r,
                        n,
                        s,
                        i,
                        a = e || t.length,
                        u = new Array(2 * a);
                      for (r = n = 0; r < a; )
                        if ((s = t[r++]) < 128) u[n++] = s;
                        else if (4 < (i = o[s])) (u[n++] = 65533), (r += i - 1);
                        else {
                          for (
                            s &= 2 === i ? 31 : 3 === i ? 15 : 7;
                            1 < i && r < a;

                          )
                            (s = (s << 6) | (63 & t[r++])), i--;
                          1 < i
                            ? (u[n++] = 65533)
                            : s < 65536
                            ? (u[n++] = s)
                            : ((s -= 65536),
                              (u[n++] = 55296 | ((s >> 10) & 1023)),
                              (u[n++] = 56320 | (1023 & s)));
                        }
                      return c(u, n);
                    }),
                    (r.utf8border = function (t, e) {
                      var r;
                      for (
                        (e = e || t.length) > t.length && (e = t.length),
                          r = e - 1;
                        0 <= r && 128 == (192 & t[r]);

                      )
                        r--;
                      return r < 0 || 0 === r ? e : r + o[t[r]] > e ? r : e;
                    });
                },
                { "./common": 41 },
              ],
              43: [
                function (t, e, r) {
                  "use strict";
                  e.exports = function (t, e, r, n) {
                    for (
                      var s = (65535 & t) | 0,
                        i = ((t >>> 16) & 65535) | 0,
                        o = 0;
                      0 !== r;

                    ) {
                      for (
                        r -= o = 2e3 < r ? 2e3 : r;
                        (i = (i + (s = (s + e[n++]) | 0)) | 0), --o;

                      );
                      (s %= 65521), (i %= 65521);
                    }
                    return s | (i << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (t, e, r) {
                  "use strict";
                  e.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                  };
                },
                {},
              ],
              45: [
                function (t, e, r) {
                  "use strict";
                  var n = (function () {
                    for (var t, e = [], r = 0; r < 256; r++) {
                      t = r;
                      for (var n = 0; n < 8; n++)
                        t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                      e[r] = t;
                    }
                    return e;
                  })();
                  e.exports = function (t, e, r, s) {
                    var i = n,
                      o = s + r;
                    t ^= -1;
                    for (var a = s; a < o; a++)
                      t = (t >>> 8) ^ i[255 & (t ^ e[a])];
                    return -1 ^ t;
                  };
                },
                {},
              ],
              46: [
                function (t, e, r) {
                  "use strict";
                  var n,
                    s = t("../utils/common"),
                    i = t("./trees"),
                    o = t("./adler32"),
                    a = t("./crc32"),
                    c = t("./messages"),
                    u = -2,
                    l = 258,
                    h = 262,
                    p = 113;
                  function d(t, e) {
                    return (t.msg = c[e]), e;
                  }
                  function f(t) {
                    return (t << 1) - (4 < t ? 9 : 0);
                  }
                  function m(t) {
                    for (var e = t.length; 0 <= --e; ) t[e] = 0;
                  }
                  function w(t) {
                    var e = t.state,
                      r = e.pending;
                    r > t.avail_out && (r = t.avail_out),
                      0 !== r &&
                        (s.arraySet(
                          t.output,
                          e.pending_buf,
                          e.pending_out,
                          r,
                          t.next_out
                        ),
                        (t.next_out += r),
                        (e.pending_out += r),
                        (t.total_out += r),
                        (t.avail_out -= r),
                        (e.pending -= r),
                        0 === e.pending && (e.pending_out = 0));
                  }
                  function g(t, e) {
                    i._tr_flush_block(
                      t,
                      0 <= t.block_start ? t.block_start : -1,
                      t.strstart - t.block_start,
                      e
                    ),
                      (t.block_start = t.strstart),
                      w(t.strm);
                  }
                  function y(t, e) {
                    t.pending_buf[t.pending++] = e;
                  }
                  function b(t, e) {
                    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                      (t.pending_buf[t.pending++] = 255 & e);
                  }
                  function v(t, e) {
                    var r,
                      n,
                      s = t.max_chain_length,
                      i = t.strstart,
                      o = t.prev_length,
                      a = t.nice_match,
                      c =
                        t.strstart > t.w_size - h
                          ? t.strstart - (t.w_size - h)
                          : 0,
                      u = t.window,
                      p = t.w_mask,
                      d = t.prev,
                      f = t.strstart + l,
                      m = u[i + o - 1],
                      w = u[i + o];
                    t.prev_length >= t.good_match && (s >>= 2),
                      a > t.lookahead && (a = t.lookahead);
                    do {
                      if (
                        u[(r = e) + o] === w &&
                        u[r + o - 1] === m &&
                        u[r] === u[i] &&
                        u[++r] === u[i + 1]
                      ) {
                        (i += 2), r++;
                        do {} while (
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          u[++i] === u[++r] &&
                          i < f
                        );
                        if (((n = l - (f - i)), (i = f - l), o < n)) {
                          if (((t.match_start = e), a <= (o = n))) break;
                          (m = u[i + o - 1]), (w = u[i + o]);
                        }
                      }
                    } while ((e = d[e & p]) > c && 0 != --s);
                    return o <= t.lookahead ? o : t.lookahead;
                  }
                  function _(t) {
                    var e,
                      r,
                      n,
                      i,
                      c,
                      u,
                      l,
                      p,
                      d,
                      f,
                      m = t.w_size;
                    do {
                      if (
                        ((i = t.window_size - t.lookahead - t.strstart),
                        t.strstart >= m + (m - h))
                      ) {
                        for (
                          s.arraySet(t.window, t.window, m, m, 0),
                            t.match_start -= m,
                            t.strstart -= m,
                            t.block_start -= m,
                            e = r = t.hash_size;
                          (n = t.head[--e]),
                            (t.head[e] = m <= n ? n - m : 0),
                            --r;

                        );
                        for (
                          e = r = m;
                          (n = t.prev[--e]),
                            (t.prev[e] = m <= n ? n - m : 0),
                            --r;

                        );
                        i += m;
                      }
                      if (0 === t.strm.avail_in) break;
                      if (
                        ((u = t.strm),
                        (l = t.window),
                        (p = t.strstart + t.lookahead),
                        (f = void 0),
                        (d = i) < (f = u.avail_in) && (f = d),
                        (r =
                          0 === f
                            ? 0
                            : ((u.avail_in -= f),
                              s.arraySet(l, u.input, u.next_in, f, p),
                              1 === u.state.wrap
                                ? (u.adler = o(u.adler, l, f, p))
                                : 2 === u.state.wrap &&
                                  (u.adler = a(u.adler, l, f, p)),
                              (u.next_in += f),
                              (u.total_in += f),
                              f)),
                        (t.lookahead += r),
                        t.lookahead + t.insert >= 3)
                      )
                        for (
                          c = t.strstart - t.insert,
                            t.ins_h = t.window[c],
                            t.ins_h =
                              ((t.ins_h << t.hash_shift) ^ t.window[c + 1]) &
                              t.hash_mask;
                          t.insert &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[c + 3 - 1]) &
                            t.hash_mask),
                          (t.prev[c & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = c),
                          c++,
                          t.insert--,
                          !(t.lookahead + t.insert < 3));

                        );
                    } while (t.lookahead < h && 0 !== t.strm.avail_in);
                  }
                  function x(t, e) {
                    for (var r, n; ; ) {
                      if (t.lookahead < h) {
                        if ((_(t), t.lookahead < h && 0 === e)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((r = 0),
                        t.lookahead >= 3 &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 3 - 1]) &
                            t.hash_mask),
                          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart)),
                        0 !== r &&
                          t.strstart - r <= t.w_size - h &&
                          (t.match_length = v(t, r)),
                        t.match_length >= 3)
                      )
                        if (
                          ((n = i._tr_tally(
                            t,
                            t.strstart - t.match_start,
                            t.match_length - 3
                          )),
                          (t.lookahead -= t.match_length),
                          t.match_length <= t.max_lazy_match &&
                            t.lookahead >= 3)
                        ) {
                          for (
                            t.match_length--;
                            t.strstart++,
                              (t.ins_h =
                                ((t.ins_h << t.hash_shift) ^
                                  t.window[t.strstart + 3 - 1]) &
                                t.hash_mask),
                              (r = t.prev[t.strstart & t.w_mask] =
                                t.head[t.ins_h]),
                              (t.head[t.ins_h] = t.strstart),
                              0 != --t.match_length;

                          );
                          t.strstart++;
                        } else
                          (t.strstart += t.match_length),
                            (t.match_length = 0),
                            (t.ins_h = t.window[t.strstart]),
                            (t.ins_h =
                              ((t.ins_h << t.hash_shift) ^
                                t.window[t.strstart + 1]) &
                              t.hash_mask);
                      else
                        (n = i._tr_tally(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++;
                      if (n && (g(t, !1), 0 === t.strm.avail_out)) return 1;
                    }
                    return (
                      (t.insert = t.strstart < 2 ? t.strstart : 2),
                      4 === e
                        ? (g(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.last_lit && (g(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  }
                  function E(t, e) {
                    for (var r, n, s; ; ) {
                      if (t.lookahead < h) {
                        if ((_(t), t.lookahead < h && 0 === e)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((r = 0),
                        t.lookahead >= 3 &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 3 - 1]) &
                            t.hash_mask),
                          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart)),
                        (t.prev_length = t.match_length),
                        (t.prev_match = t.match_start),
                        (t.match_length = 2),
                        0 !== r &&
                          t.prev_length < t.max_lazy_match &&
                          t.strstart - r <= t.w_size - h &&
                          ((t.match_length = v(t, r)),
                          t.match_length <= 5 &&
                            (1 === t.strategy ||
                              (3 === t.match_length &&
                                4096 < t.strstart - t.match_start)) &&
                            (t.match_length = 2)),
                        t.prev_length >= 3 && t.match_length <= t.prev_length)
                      ) {
                        for (
                          s = t.strstart + t.lookahead - 3,
                            n = i._tr_tally(
                              t,
                              t.strstart - 1 - t.prev_match,
                              t.prev_length - 3
                            ),
                            t.lookahead -= t.prev_length - 1,
                            t.prev_length -= 2;
                          ++t.strstart <= s &&
                            ((t.ins_h =
                              ((t.ins_h << t.hash_shift) ^
                                t.window[t.strstart + 3 - 1]) &
                              t.hash_mask),
                            (r = t.prev[t.strstart & t.w_mask] =
                              t.head[t.ins_h]),
                            (t.head[t.ins_h] = t.strstart)),
                            0 != --t.prev_length;

                        );
                        if (
                          ((t.match_available = 0),
                          (t.match_length = 2),
                          t.strstart++,
                          n && (g(t, !1), 0 === t.strm.avail_out))
                        )
                          return 1;
                      } else if (t.match_available) {
                        if (
                          ((n = i._tr_tally(t, 0, t.window[t.strstart - 1])) &&
                            g(t, !1),
                          t.strstart++,
                          t.lookahead--,
                          0 === t.strm.avail_out)
                        )
                          return 1;
                      } else
                        (t.match_available = 1), t.strstart++, t.lookahead--;
                    }
                    return (
                      t.match_available &&
                        ((n = i._tr_tally(t, 0, t.window[t.strstart - 1])),
                        (t.match_available = 0)),
                      (t.insert = t.strstart < 2 ? t.strstart : 2),
                      4 === e
                        ? (g(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.last_lit && (g(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  }
                  function T(t, e, r, n, s) {
                    (this.good_length = t),
                      (this.max_lazy = e),
                      (this.nice_length = r),
                      (this.max_chain = n),
                      (this.func = s);
                  }
                  function A() {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = 8),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new s.Buf16(1146)),
                      (this.dyn_dtree = new s.Buf16(122)),
                      (this.bl_tree = new s.Buf16(78)),
                      m(this.dyn_ltree),
                      m(this.dyn_dtree),
                      m(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new s.Buf16(16)),
                      (this.heap = new s.Buf16(573)),
                      m(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new s.Buf16(573)),
                      m(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  }
                  function S(t) {
                    var e;
                    return t && t.state
                      ? ((t.total_in = t.total_out = 0),
                        (t.data_type = 2),
                        ((e = t.state).pending = 0),
                        (e.pending_out = 0),
                        e.wrap < 0 && (e.wrap = -e.wrap),
                        (e.status = e.wrap ? 42 : p),
                        (t.adler = 2 === e.wrap ? 0 : 1),
                        (e.last_flush = 0),
                        i._tr_init(e),
                        0)
                      : d(t, u);
                  }
                  function R(t) {
                    var e = S(t);
                    return (
                      0 === e &&
                        (function (t) {
                          (t.window_size = 2 * t.w_size),
                            m(t.head),
                            (t.max_lazy_match = n[t.level].max_lazy),
                            (t.good_match = n[t.level].good_length),
                            (t.nice_match = n[t.level].nice_length),
                            (t.max_chain_length = n[t.level].max_chain),
                            (t.strstart = 0),
                            (t.block_start = 0),
                            (t.lookahead = 0),
                            (t.insert = 0),
                            (t.match_length = t.prev_length = 2),
                            (t.match_available = 0),
                            (t.ins_h = 0);
                        })(t.state),
                      e
                    );
                  }
                  function I(t, e, r, n, i, o) {
                    if (!t) return u;
                    var a = 1;
                    if (
                      (-1 === e && (e = 6),
                      n < 0
                        ? ((a = 0), (n = -n))
                        : 15 < n && ((a = 2), (n -= 16)),
                      i < 1 ||
                        9 < i ||
                        8 !== r ||
                        n < 8 ||
                        15 < n ||
                        e < 0 ||
                        9 < e ||
                        o < 0 ||
                        4 < o)
                    )
                      return d(t, u);
                    8 === n && (n = 9);
                    var c = new A();
                    return (
                      ((t.state = c).strm = t),
                      (c.wrap = a),
                      (c.gzhead = null),
                      (c.w_bits = n),
                      (c.w_size = 1 << c.w_bits),
                      (c.w_mask = c.w_size - 1),
                      (c.hash_bits = i + 7),
                      (c.hash_size = 1 << c.hash_bits),
                      (c.hash_mask = c.hash_size - 1),
                      (c.hash_shift = ~~((c.hash_bits + 3 - 1) / 3)),
                      (c.window = new s.Buf8(2 * c.w_size)),
                      (c.head = new s.Buf16(c.hash_size)),
                      (c.prev = new s.Buf16(c.w_size)),
                      (c.lit_bufsize = 1 << (i + 6)),
                      (c.pending_buf_size = 4 * c.lit_bufsize),
                      (c.pending_buf = new s.Buf8(c.pending_buf_size)),
                      (c.d_buf = 1 * c.lit_bufsize),
                      (c.l_buf = 3 * c.lit_bufsize),
                      (c.level = e),
                      (c.strategy = o),
                      (c.method = r),
                      R(t)
                    );
                  }
                  (n = [
                    new T(0, 0, 0, 0, function (t, e) {
                      var r = 65535;
                      for (
                        r > t.pending_buf_size - 5 &&
                        (r = t.pending_buf_size - 5);
                        ;

                      ) {
                        if (t.lookahead <= 1) {
                          if ((_(t), 0 === t.lookahead && 0 === e)) return 1;
                          if (0 === t.lookahead) break;
                        }
                        (t.strstart += t.lookahead), (t.lookahead = 0);
                        var n = t.block_start + r;
                        if (
                          (0 === t.strstart || t.strstart >= n) &&
                          ((t.lookahead = t.strstart - n),
                          (t.strstart = n),
                          g(t, !1),
                          0 === t.strm.avail_out)
                        )
                          return 1;
                        if (
                          t.strstart - t.block_start >= t.w_size - h &&
                          (g(t, !1), 0 === t.strm.avail_out)
                        )
                          return 1;
                      }
                      return (
                        (t.insert = 0),
                        4 === e
                          ? (g(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                          : (t.strstart > t.block_start &&
                              (g(t, !1), t.strm.avail_out),
                            1)
                      );
                    }),
                    new T(4, 4, 8, 4, x),
                    new T(4, 5, 16, 8, x),
                    new T(4, 6, 32, 32, x),
                    new T(4, 4, 16, 16, E),
                    new T(8, 16, 32, 32, E),
                    new T(8, 16, 128, 128, E),
                    new T(8, 32, 128, 256, E),
                    new T(32, 128, 258, 1024, E),
                    new T(32, 258, 258, 4096, E),
                  ]),
                    (r.deflateInit = function (t, e) {
                      return I(t, e, 8, 15, 8, 0);
                    }),
                    (r.deflateInit2 = I),
                    (r.deflateReset = R),
                    (r.deflateResetKeep = S),
                    (r.deflateSetHeader = function (t, e) {
                      return t && t.state
                        ? 2 !== t.state.wrap
                          ? u
                          : ((t.state.gzhead = e), 0)
                        : u;
                    }),
                    (r.deflate = function (t, e) {
                      var r, s, o, c;
                      if (!t || !t.state || 5 < e || e < 0)
                        return t ? d(t, u) : u;
                      if (
                        ((s = t.state),
                        !t.output ||
                          (!t.input && 0 !== t.avail_in) ||
                          (666 === s.status && 4 !== e))
                      )
                        return d(t, 0 === t.avail_out ? -5 : u);
                      if (
                        ((s.strm = t),
                        (r = s.last_flush),
                        (s.last_flush = e),
                        42 === s.status)
                      )
                        if (2 === s.wrap)
                          (t.adler = 0),
                            y(s, 31),
                            y(s, 139),
                            y(s, 8),
                            s.gzhead
                              ? (y(
                                  s,
                                  (s.gzhead.text ? 1 : 0) +
                                    (s.gzhead.hcrc ? 2 : 0) +
                                    (s.gzhead.extra ? 4 : 0) +
                                    (s.gzhead.name ? 8 : 0) +
                                    (s.gzhead.comment ? 16 : 0)
                                ),
                                y(s, 255 & s.gzhead.time),
                                y(s, (s.gzhead.time >> 8) & 255),
                                y(s, (s.gzhead.time >> 16) & 255),
                                y(s, (s.gzhead.time >> 24) & 255),
                                y(
                                  s,
                                  9 === s.level
                                    ? 2
                                    : 2 <= s.strategy || s.level < 2
                                    ? 4
                                    : 0
                                ),
                                y(s, 255 & s.gzhead.os),
                                s.gzhead.extra &&
                                  s.gzhead.extra.length &&
                                  (y(s, 255 & s.gzhead.extra.length),
                                  y(s, (s.gzhead.extra.length >> 8) & 255)),
                                s.gzhead.hcrc &&
                                  (t.adler = a(
                                    t.adler,
                                    s.pending_buf,
                                    s.pending,
                                    0
                                  )),
                                (s.gzindex = 0),
                                (s.status = 69))
                              : (y(s, 0),
                                y(s, 0),
                                y(s, 0),
                                y(s, 0),
                                y(s, 0),
                                y(
                                  s,
                                  9 === s.level
                                    ? 2
                                    : 2 <= s.strategy || s.level < 2
                                    ? 4
                                    : 0
                                ),
                                y(s, 3),
                                (s.status = p));
                        else {
                          var h = (8 + ((s.w_bits - 8) << 4)) << 8;
                          (h |=
                            (2 <= s.strategy || s.level < 2
                              ? 0
                              : s.level < 6
                              ? 1
                              : 6 === s.level
                              ? 2
                              : 3) << 6),
                            0 !== s.strstart && (h |= 32),
                            (h += 31 - (h % 31)),
                            (s.status = p),
                            b(s, h),
                            0 !== s.strstart &&
                              (b(s, t.adler >>> 16), b(s, 65535 & t.adler)),
                            (t.adler = 1);
                        }
                      if (69 === s.status)
                        if (s.gzhead.extra) {
                          for (
                            o = s.pending;
                            s.gzindex < (65535 & s.gzhead.extra.length) &&
                            (s.pending !== s.pending_buf_size ||
                              (s.gzhead.hcrc &&
                                s.pending > o &&
                                (t.adler = a(
                                  t.adler,
                                  s.pending_buf,
                                  s.pending - o,
                                  o
                                )),
                              w(t),
                              (o = s.pending),
                              s.pending !== s.pending_buf_size));

                          )
                            y(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                          s.gzhead.hcrc &&
                            s.pending > o &&
                            (t.adler = a(
                              t.adler,
                              s.pending_buf,
                              s.pending - o,
                              o
                            )),
                            s.gzindex === s.gzhead.extra.length &&
                              ((s.gzindex = 0), (s.status = 73));
                        } else s.status = 73;
                      if (73 === s.status)
                        if (s.gzhead.name) {
                          o = s.pending;
                          do {
                            if (
                              s.pending === s.pending_buf_size &&
                              (s.gzhead.hcrc &&
                                s.pending > o &&
                                (t.adler = a(
                                  t.adler,
                                  s.pending_buf,
                                  s.pending - o,
                                  o
                                )),
                              w(t),
                              (o = s.pending),
                              s.pending === s.pending_buf_size)
                            ) {
                              c = 1;
                              break;
                            }
                            (c =
                              s.gzindex < s.gzhead.name.length
                                ? 255 & s.gzhead.name.charCodeAt(s.gzindex++)
                                : 0),
                              y(s, c);
                          } while (0 !== c);
                          s.gzhead.hcrc &&
                            s.pending > o &&
                            (t.adler = a(
                              t.adler,
                              s.pending_buf,
                              s.pending - o,
                              o
                            )),
                            0 === c && ((s.gzindex = 0), (s.status = 91));
                        } else s.status = 91;
                      if (91 === s.status)
                        if (s.gzhead.comment) {
                          o = s.pending;
                          do {
                            if (
                              s.pending === s.pending_buf_size &&
                              (s.gzhead.hcrc &&
                                s.pending > o &&
                                (t.adler = a(
                                  t.adler,
                                  s.pending_buf,
                                  s.pending - o,
                                  o
                                )),
                              w(t),
                              (o = s.pending),
                              s.pending === s.pending_buf_size)
                            ) {
                              c = 1;
                              break;
                            }
                            (c =
                              s.gzindex < s.gzhead.comment.length
                                ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++)
                                : 0),
                              y(s, c);
                          } while (0 !== c);
                          s.gzhead.hcrc &&
                            s.pending > o &&
                            (t.adler = a(
                              t.adler,
                              s.pending_buf,
                              s.pending - o,
                              o
                            )),
                            0 === c && (s.status = 103);
                        } else s.status = 103;
                      if (
                        (103 === s.status &&
                          (s.gzhead.hcrc
                            ? (s.pending + 2 > s.pending_buf_size && w(t),
                              s.pending + 2 <= s.pending_buf_size &&
                                (y(s, 255 & t.adler),
                                y(s, (t.adler >> 8) & 255),
                                (t.adler = 0),
                                (s.status = p)))
                            : (s.status = p)),
                        0 !== s.pending)
                      ) {
                        if ((w(t), 0 === t.avail_out))
                          return (s.last_flush = -1), 0;
                      } else if (0 === t.avail_in && f(e) <= f(r) && 4 !== e)
                        return d(t, -5);
                      if (666 === s.status && 0 !== t.avail_in) return d(t, -5);
                      if (
                        0 !== t.avail_in ||
                        0 !== s.lookahead ||
                        (0 !== e && 666 !== s.status)
                      ) {
                        var v =
                          2 === s.strategy
                            ? (function (t, e) {
                                for (var r; ; ) {
                                  if (
                                    0 === t.lookahead &&
                                    (_(t), 0 === t.lookahead)
                                  ) {
                                    if (0 === e) return 1;
                                    break;
                                  }
                                  if (
                                    ((t.match_length = 0),
                                    (r = i._tr_tally(
                                      t,
                                      0,
                                      t.window[t.strstart]
                                    )),
                                    t.lookahead--,
                                    t.strstart++,
                                    r && (g(t, !1), 0 === t.strm.avail_out))
                                  )
                                    return 1;
                                }
                                return (
                                  (t.insert = 0),
                                  4 === e
                                    ? (g(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                    : t.last_lit &&
                                      (g(t, !1), 0 === t.strm.avail_out)
                                    ? 1
                                    : 2
                                );
                              })(s, e)
                            : 3 === s.strategy
                            ? (function (t, e) {
                                for (var r, n, s, o, a = t.window; ; ) {
                                  if (t.lookahead <= l) {
                                    if ((_(t), t.lookahead <= l && 0 === e))
                                      return 1;
                                    if (0 === t.lookahead) break;
                                  }
                                  if (
                                    ((t.match_length = 0),
                                    t.lookahead >= 3 &&
                                      0 < t.strstart &&
                                      (n = a[(s = t.strstart - 1)]) ===
                                        a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s])
                                  ) {
                                    o = t.strstart + l;
                                    do {} while (
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      n === a[++s] &&
                                      s < o
                                    );
                                    (t.match_length = l - (o - s)),
                                      t.match_length > t.lookahead &&
                                        (t.match_length = t.lookahead);
                                  }
                                  if (
                                    (t.match_length >= 3
                                      ? ((r = i._tr_tally(
                                          t,
                                          1,
                                          t.match_length - 3
                                        )),
                                        (t.lookahead -= t.match_length),
                                        (t.strstart += t.match_length),
                                        (t.match_length = 0))
                                      : ((r = i._tr_tally(
                                          t,
                                          0,
                                          t.window[t.strstart]
                                        )),
                                        t.lookahead--,
                                        t.strstart++),
                                    r && (g(t, !1), 0 === t.strm.avail_out))
                                  )
                                    return 1;
                                }
                                return (
                                  (t.insert = 0),
                                  4 === e
                                    ? (g(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                    : t.last_lit &&
                                      (g(t, !1), 0 === t.strm.avail_out)
                                    ? 1
                                    : 2
                                );
                              })(s, e)
                            : n[s.level].func(s, e);
                        if (
                          ((3 !== v && 4 !== v) || (s.status = 666),
                          1 === v || 3 === v)
                        )
                          return 0 === t.avail_out && (s.last_flush = -1), 0;
                        if (
                          2 === v &&
                          (1 === e
                            ? i._tr_align(s)
                            : 5 !== e &&
                              (i._tr_stored_block(s, 0, 0, !1),
                              3 === e &&
                                (m(s.head),
                                0 === s.lookahead &&
                                  ((s.strstart = 0),
                                  (s.block_start = 0),
                                  (s.insert = 0)))),
                          w(t),
                          0 === t.avail_out)
                        )
                          return (s.last_flush = -1), 0;
                      }
                      return 4 !== e
                        ? 0
                        : s.wrap <= 0
                        ? 1
                        : (2 === s.wrap
                            ? (y(s, 255 & t.adler),
                              y(s, (t.adler >> 8) & 255),
                              y(s, (t.adler >> 16) & 255),
                              y(s, (t.adler >> 24) & 255),
                              y(s, 255 & t.total_in),
                              y(s, (t.total_in >> 8) & 255),
                              y(s, (t.total_in >> 16) & 255),
                              y(s, (t.total_in >> 24) & 255))
                            : (b(s, t.adler >>> 16), b(s, 65535 & t.adler)),
                          w(t),
                          0 < s.wrap && (s.wrap = -s.wrap),
                          0 !== s.pending ? 0 : 1);
                    }),
                    (r.deflateEnd = function (t) {
                      var e;
                      return t && t.state
                        ? 42 !== (e = t.state.status) &&
                          69 !== e &&
                          73 !== e &&
                          91 !== e &&
                          103 !== e &&
                          e !== p &&
                          666 !== e
                          ? d(t, u)
                          : ((t.state = null), e === p ? d(t, -3) : 0)
                        : u;
                    }),
                    (r.deflateSetDictionary = function (t, e) {
                      var r,
                        n,
                        i,
                        a,
                        c,
                        l,
                        h,
                        p,
                        d = e.length;
                      if (!t || !t.state) return u;
                      if (
                        2 === (a = (r = t.state).wrap) ||
                        (1 === a && 42 !== r.status) ||
                        r.lookahead
                      )
                        return u;
                      for (
                        1 === a && (t.adler = o(t.adler, e, d, 0)),
                          r.wrap = 0,
                          d >= r.w_size &&
                            (0 === a &&
                              (m(r.head),
                              (r.strstart = 0),
                              (r.block_start = 0),
                              (r.insert = 0)),
                            (p = new s.Buf8(r.w_size)),
                            s.arraySet(p, e, d - r.w_size, r.w_size, 0),
                            (e = p),
                            (d = r.w_size)),
                          c = t.avail_in,
                          l = t.next_in,
                          h = t.input,
                          t.avail_in = d,
                          t.next_in = 0,
                          t.input = e,
                          _(r);
                        r.lookahead >= 3;

                      ) {
                        for (
                          n = r.strstart, i = r.lookahead - 2;
                          (r.ins_h =
                            ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) &
                            r.hash_mask),
                            (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                            (r.head[r.ins_h] = n),
                            n++,
                            --i;

                        );
                        (r.strstart = n), (r.lookahead = 2), _(r);
                      }
                      return (
                        (r.strstart += r.lookahead),
                        (r.block_start = r.strstart),
                        (r.insert = r.lookahead),
                        (r.lookahead = 0),
                        (r.match_length = r.prev_length = 2),
                        (r.match_available = 0),
                        (t.next_in = l),
                        (t.input = h),
                        (t.avail_in = c),
                        (r.wrap = a),
                        0
                      );
                    }),
                    (r.deflateInfo = "pako deflate (from Nodeca project)");
                },
                {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./messages": 51,
                  "./trees": 52,
                },
              ],
              47: [
                function (t, e, r) {
                  "use strict";
                  e.exports = function () {
                    (this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ""),
                      (this.comment = ""),
                      (this.hcrc = 0),
                      (this.done = !1);
                  };
                },
                {},
              ],
              48: [
                function (t, e, r) {
                  "use strict";
                  e.exports = function (t, e) {
                    var r,
                      n,
                      s,
                      i,
                      o,
                      a,
                      c,
                      u,
                      l,
                      h,
                      p,
                      d,
                      f,
                      m,
                      w,
                      g,
                      y,
                      b,
                      v,
                      _,
                      x,
                      E,
                      T,
                      A,
                      S;
                    (r = t.state),
                      (n = t.next_in),
                      (A = t.input),
                      (s = n + (t.avail_in - 5)),
                      (i = t.next_out),
                      (S = t.output),
                      (o = i - (e - t.avail_out)),
                      (a = i + (t.avail_out - 257)),
                      (c = r.dmax),
                      (u = r.wsize),
                      (l = r.whave),
                      (h = r.wnext),
                      (p = r.window),
                      (d = r.hold),
                      (f = r.bits),
                      (m = r.lencode),
                      (w = r.distcode),
                      (g = (1 << r.lenbits) - 1),
                      (y = (1 << r.distbits) - 1);
                    t: do {
                      f < 15 &&
                        ((d += A[n++] << f),
                        (f += 8),
                        (d += A[n++] << f),
                        (f += 8)),
                        (b = m[d & g]);
                      e: for (;;) {
                        if (
                          ((d >>>= v = b >>> 24),
                          (f -= v),
                          0 == (v = (b >>> 16) & 255))
                        )
                          S[i++] = 65535 & b;
                        else {
                          if (!(16 & v)) {
                            if (0 == (64 & v)) {
                              b = m[(65535 & b) + (d & ((1 << v) - 1))];
                              continue e;
                            }
                            if (32 & v) {
                              r.mode = 12;
                              break t;
                            }
                            (t.msg = "invalid literal/length code"),
                              (r.mode = 30);
                            break t;
                          }
                          (_ = 65535 & b),
                            (v &= 15) &&
                              (f < v && ((d += A[n++] << f), (f += 8)),
                              (_ += d & ((1 << v) - 1)),
                              (d >>>= v),
                              (f -= v)),
                            f < 15 &&
                              ((d += A[n++] << f),
                              (f += 8),
                              (d += A[n++] << f),
                              (f += 8)),
                            (b = w[d & y]);
                          r: for (;;) {
                            if (
                              ((d >>>= v = b >>> 24),
                              (f -= v),
                              !(16 & (v = (b >>> 16) & 255)))
                            ) {
                              if (0 == (64 & v)) {
                                b = w[(65535 & b) + (d & ((1 << v) - 1))];
                                continue r;
                              }
                              (t.msg = "invalid distance code"), (r.mode = 30);
                              break t;
                            }
                            if (
                              ((x = 65535 & b),
                              f < (v &= 15) &&
                                ((d += A[n++] << f),
                                (f += 8) < v && ((d += A[n++] << f), (f += 8))),
                              c < (x += d & ((1 << v) - 1)))
                            ) {
                              (t.msg = "invalid distance too far back"),
                                (r.mode = 30);
                              break t;
                            }
                            if (((d >>>= v), (f -= v), (v = i - o) < x)) {
                              if (l < (v = x - v) && r.sane) {
                                (t.msg = "invalid distance too far back"),
                                  (r.mode = 30);
                                break t;
                              }
                              if (((T = p), (E = 0) === h)) {
                                if (((E += u - v), v < _)) {
                                  for (_ -= v; (S[i++] = p[E++]), --v; );
                                  (E = i - x), (T = S);
                                }
                              } else if (h < v) {
                                if (((E += u + h - v), (v -= h) < _)) {
                                  for (_ -= v; (S[i++] = p[E++]), --v; );
                                  if (((E = 0), h < _)) {
                                    for (_ -= v = h; (S[i++] = p[E++]), --v; );
                                    (E = i - x), (T = S);
                                  }
                                }
                              } else if (((E += h - v), v < _)) {
                                for (_ -= v; (S[i++] = p[E++]), --v; );
                                (E = i - x), (T = S);
                              }
                              for (; 2 < _; )
                                (S[i++] = T[E++]),
                                  (S[i++] = T[E++]),
                                  (S[i++] = T[E++]),
                                  (_ -= 3);
                              _ &&
                                ((S[i++] = T[E++]), 1 < _ && (S[i++] = T[E++]));
                            } else {
                              for (
                                E = i - x;
                                (S[i++] = S[E++]),
                                  (S[i++] = S[E++]),
                                  (S[i++] = S[E++]),
                                  2 < (_ -= 3);

                              );
                              _ &&
                                ((S[i++] = S[E++]), 1 < _ && (S[i++] = S[E++]));
                            }
                            break;
                          }
                        }
                        break;
                      }
                    } while (n < s && i < a);
                    (n -= _ = f >> 3),
                      (d &= (1 << (f -= _ << 3)) - 1),
                      (t.next_in = n),
                      (t.next_out = i),
                      (t.avail_in = n < s ? s - n + 5 : 5 - (n - s)),
                      (t.avail_out = i < a ? a - i + 257 : 257 - (i - a)),
                      (r.hold = d),
                      (r.bits = f);
                  };
                },
                {},
              ],
              49: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils/common"),
                    s = t("./adler32"),
                    i = t("./crc32"),
                    o = t("./inffast"),
                    a = t("./inftrees"),
                    c = -2;
                  function u(t) {
                    return (
                      ((t >>> 24) & 255) +
                      ((t >>> 8) & 65280) +
                      ((65280 & t) << 8) +
                      ((255 & t) << 24)
                    );
                  }
                  function l() {
                    (this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new n.Buf16(320)),
                      (this.work = new n.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0);
                  }
                  function h(t) {
                    var e;
                    return t && t.state
                      ? ((e = t.state),
                        (t.total_in = t.total_out = e.total = 0),
                        (t.msg = ""),
                        e.wrap && (t.adler = 1 & e.wrap),
                        (e.mode = 1),
                        (e.last = 0),
                        (e.havedict = 0),
                        (e.dmax = 32768),
                        (e.head = null),
                        (e.hold = 0),
                        (e.bits = 0),
                        (e.lencode = e.lendyn = new n.Buf32(852)),
                        (e.distcode = e.distdyn = new n.Buf32(592)),
                        (e.sane = 1),
                        (e.back = -1),
                        0)
                      : c;
                  }
                  function p(t) {
                    var e;
                    return t && t.state
                      ? (((e = t.state).wsize = 0),
                        (e.whave = 0),
                        (e.wnext = 0),
                        h(t))
                      : c;
                  }
                  function d(t, e) {
                    var r, n;
                    return t && t.state
                      ? ((n = t.state),
                        e < 0
                          ? ((r = 0), (e = -e))
                          : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
                        e && (e < 8 || 15 < e)
                          ? c
                          : (null !== n.window &&
                              n.wbits !== e &&
                              (n.window = null),
                            (n.wrap = r),
                            (n.wbits = e),
                            p(t)))
                      : c;
                  }
                  function f(t, e) {
                    var r, n;
                    return t
                      ? ((n = new l()),
                        ((t.state = n).window = null),
                        0 !== (r = d(t, e)) && (t.state = null),
                        r)
                      : c;
                  }
                  var m,
                    w,
                    g = !0;
                  function y(t) {
                    if (g) {
                      var e;
                      for (
                        m = new n.Buf32(512), w = new n.Buf32(32), e = 0;
                        e < 144;

                      )
                        t.lens[e++] = 8;
                      for (; e < 256; ) t.lens[e++] = 9;
                      for (; e < 280; ) t.lens[e++] = 7;
                      for (; e < 288; ) t.lens[e++] = 8;
                      for (
                        a(1, t.lens, 0, 288, m, 0, t.work, { bits: 9 }), e = 0;
                        e < 32;

                      )
                        t.lens[e++] = 5;
                      a(2, t.lens, 0, 32, w, 0, t.work, { bits: 5 }), (g = !1);
                    }
                    (t.lencode = m),
                      (t.lenbits = 9),
                      (t.distcode = w),
                      (t.distbits = 5);
                  }
                  function b(t, e, r, s) {
                    var i,
                      o = t.state;
                    return (
                      null === o.window &&
                        ((o.wsize = 1 << o.wbits),
                        (o.wnext = 0),
                        (o.whave = 0),
                        (o.window = new n.Buf8(o.wsize))),
                      s >= o.wsize
                        ? (n.arraySet(o.window, e, r - o.wsize, o.wsize, 0),
                          (o.wnext = 0),
                          (o.whave = o.wsize))
                        : (s < (i = o.wsize - o.wnext) && (i = s),
                          n.arraySet(o.window, e, r - s, i, o.wnext),
                          (s -= i)
                            ? (n.arraySet(o.window, e, r - s, s, 0),
                              (o.wnext = s),
                              (o.whave = o.wsize))
                            : ((o.wnext += i),
                              o.wnext === o.wsize && (o.wnext = 0),
                              o.whave < o.wsize && (o.whave += i))),
                      0
                    );
                  }
                  (r.inflateReset = p),
                    (r.inflateReset2 = d),
                    (r.inflateResetKeep = h),
                    (r.inflateInit = function (t) {
                      return f(t, 15);
                    }),
                    (r.inflateInit2 = f),
                    (r.inflate = function (t, e) {
                      var r,
                        l,
                        h,
                        p,
                        d,
                        f,
                        m,
                        w,
                        g,
                        v,
                        _,
                        x,
                        E,
                        T,
                        A,
                        S,
                        R,
                        I,
                        N,
                        O,
                        C,
                        k,
                        D,
                        L,
                        P = 0,
                        F = new n.Buf8(4),
                        B = [
                          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                          14, 1, 15,
                        ];
                      if (
                        !t ||
                        !t.state ||
                        !t.output ||
                        (!t.input && 0 !== t.avail_in)
                      )
                        return c;
                      12 === (r = t.state).mode && (r.mode = 13),
                        (d = t.next_out),
                        (h = t.output),
                        (m = t.avail_out),
                        (p = t.next_in),
                        (l = t.input),
                        (f = t.avail_in),
                        (w = r.hold),
                        (g = r.bits),
                        (v = f),
                        (_ = m),
                        (k = 0);
                      t: for (;;)
                        switch (r.mode) {
                          case 1:
                            if (0 === r.wrap) {
                              r.mode = 13;
                              break;
                            }
                            for (; g < 16; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if (2 & r.wrap && 35615 === w) {
                              (F[(r.check = 0)] = 255 & w),
                                (F[1] = (w >>> 8) & 255),
                                (r.check = i(r.check, F, 2, 0)),
                                (g = w = 0),
                                (r.mode = 2);
                              break;
                            }
                            if (
                              ((r.flags = 0),
                              r.head && (r.head.done = !1),
                              !(1 & r.wrap) ||
                                (((255 & w) << 8) + (w >> 8)) % 31)
                            ) {
                              (t.msg = "incorrect header check"), (r.mode = 30);
                              break;
                            }
                            if (8 != (15 & w)) {
                              (t.msg = "unknown compression method"),
                                (r.mode = 30);
                              break;
                            }
                            if (
                              ((g -= 4),
                              (C = 8 + (15 & (w >>>= 4))),
                              0 === r.wbits)
                            )
                              r.wbits = C;
                            else if (C > r.wbits) {
                              (t.msg = "invalid window size"), (r.mode = 30);
                              break;
                            }
                            (r.dmax = 1 << C),
                              (t.adler = r.check = 1),
                              (r.mode = 512 & w ? 10 : 12),
                              (g = w = 0);
                            break;
                          case 2:
                            for (; g < 16; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if (((r.flags = w), 8 != (255 & r.flags))) {
                              (t.msg = "unknown compression method"),
                                (r.mode = 30);
                              break;
                            }
                            if (57344 & r.flags) {
                              (t.msg = "unknown header flags set"),
                                (r.mode = 30);
                              break;
                            }
                            r.head && (r.head.text = (w >> 8) & 1),
                              512 & r.flags &&
                                ((F[0] = 255 & w),
                                (F[1] = (w >>> 8) & 255),
                                (r.check = i(r.check, F, 2, 0))),
                              (g = w = 0),
                              (r.mode = 3);
                          case 3:
                            for (; g < 32; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            r.head && (r.head.time = w),
                              512 & r.flags &&
                                ((F[0] = 255 & w),
                                (F[1] = (w >>> 8) & 255),
                                (F[2] = (w >>> 16) & 255),
                                (F[3] = (w >>> 24) & 255),
                                (r.check = i(r.check, F, 4, 0))),
                              (g = w = 0),
                              (r.mode = 4);
                          case 4:
                            for (; g < 16; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            r.head &&
                              ((r.head.xflags = 255 & w), (r.head.os = w >> 8)),
                              512 & r.flags &&
                                ((F[0] = 255 & w),
                                (F[1] = (w >>> 8) & 255),
                                (r.check = i(r.check, F, 2, 0))),
                              (g = w = 0),
                              (r.mode = 5);
                          case 5:
                            if (1024 & r.flags) {
                              for (; g < 16; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (r.length = w),
                                r.head && (r.head.extra_len = w),
                                512 & r.flags &&
                                  ((F[0] = 255 & w),
                                  (F[1] = (w >>> 8) & 255),
                                  (r.check = i(r.check, F, 2, 0))),
                                (g = w = 0);
                            } else r.head && (r.head.extra = null);
                            r.mode = 6;
                          case 6:
                            if (
                              1024 & r.flags &&
                              (f < (x = r.length) && (x = f),
                              x &&
                                (r.head &&
                                  ((C = r.head.extra_len - r.length),
                                  r.head.extra ||
                                    (r.head.extra = new Array(
                                      r.head.extra_len
                                    )),
                                  n.arraySet(r.head.extra, l, p, x, C)),
                                512 & r.flags &&
                                  (r.check = i(r.check, l, x, p)),
                                (f -= x),
                                (p += x),
                                (r.length -= x)),
                              r.length)
                            )
                              break t;
                            (r.length = 0), (r.mode = 7);
                          case 7:
                            if (2048 & r.flags) {
                              if (0 === f) break t;
                              for (
                                x = 0;
                                (C = l[p + x++]),
                                  r.head &&
                                    C &&
                                    r.length < 65536 &&
                                    (r.head.name += String.fromCharCode(C)),
                                  C && x < f;

                              );
                              if (
                                (512 & r.flags &&
                                  (r.check = i(r.check, l, x, p)),
                                (f -= x),
                                (p += x),
                                C)
                              )
                                break t;
                            } else r.head && (r.head.name = null);
                            (r.length = 0), (r.mode = 8);
                          case 8:
                            if (4096 & r.flags) {
                              if (0 === f) break t;
                              for (
                                x = 0;
                                (C = l[p + x++]),
                                  r.head &&
                                    C &&
                                    r.length < 65536 &&
                                    (r.head.comment += String.fromCharCode(C)),
                                  C && x < f;

                              );
                              if (
                                (512 & r.flags &&
                                  (r.check = i(r.check, l, x, p)),
                                (f -= x),
                                (p += x),
                                C)
                              )
                                break t;
                            } else r.head && (r.head.comment = null);
                            r.mode = 9;
                          case 9:
                            if (512 & r.flags) {
                              for (; g < 16; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              if (w !== (65535 & r.check)) {
                                (t.msg = "header crc mismatch"), (r.mode = 30);
                                break;
                              }
                              g = w = 0;
                            }
                            r.head &&
                              ((r.head.hcrc = (r.flags >> 9) & 1),
                              (r.head.done = !0)),
                              (t.adler = r.check = 0),
                              (r.mode = 12);
                            break;
                          case 10:
                            for (; g < 32; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            (t.adler = r.check = u(w)),
                              (g = w = 0),
                              (r.mode = 11);
                          case 11:
                            if (0 === r.havedict)
                              return (
                                (t.next_out = d),
                                (t.avail_out = m),
                                (t.next_in = p),
                                (t.avail_in = f),
                                (r.hold = w),
                                (r.bits = g),
                                2
                              );
                            (t.adler = r.check = 1), (r.mode = 12);
                          case 12:
                            if (5 === e || 6 === e) break t;
                          case 13:
                            if (r.last) {
                              (w >>>= 7 & g), (g -= 7 & g), (r.mode = 27);
                              break;
                            }
                            for (; g < 3; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            switch (
                              ((r.last = 1 & w), (g -= 1), 3 & (w >>>= 1))
                            ) {
                              case 0:
                                r.mode = 14;
                                break;
                              case 1:
                                if ((y(r), (r.mode = 20), 6 !== e)) break;
                                (w >>>= 2), (g -= 2);
                                break t;
                              case 2:
                                r.mode = 17;
                                break;
                              case 3:
                                (t.msg = "invalid block type"), (r.mode = 30);
                            }
                            (w >>>= 2), (g -= 2);
                            break;
                          case 14:
                            for (w >>>= 7 & g, g -= 7 & g; g < 32; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if ((65535 & w) != ((w >>> 16) ^ 65535)) {
                              (t.msg = "invalid stored block lengths"),
                                (r.mode = 30);
                              break;
                            }
                            if (
                              ((r.length = 65535 & w),
                              (g = w = 0),
                              (r.mode = 15),
                              6 === e)
                            )
                              break t;
                          case 15:
                            r.mode = 16;
                          case 16:
                            if ((x = r.length)) {
                              if ((f < x && (x = f), m < x && (x = m), 0 === x))
                                break t;
                              n.arraySet(h, l, p, x, d),
                                (f -= x),
                                (p += x),
                                (m -= x),
                                (d += x),
                                (r.length -= x);
                              break;
                            }
                            r.mode = 12;
                            break;
                          case 17:
                            for (; g < 14; ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if (
                              ((r.nlen = 257 + (31 & w)),
                              (w >>>= 5),
                              (g -= 5),
                              (r.ndist = 1 + (31 & w)),
                              (w >>>= 5),
                              (g -= 5),
                              (r.ncode = 4 + (15 & w)),
                              (w >>>= 4),
                              (g -= 4),
                              286 < r.nlen || 30 < r.ndist)
                            ) {
                              (t.msg = "too many length or distance symbols"),
                                (r.mode = 30);
                              break;
                            }
                            (r.have = 0), (r.mode = 18);
                          case 18:
                            for (; r.have < r.ncode; ) {
                              for (; g < 3; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (r.lens[B[r.have++]] = 7 & w),
                                (w >>>= 3),
                                (g -= 3);
                            }
                            for (; r.have < 19; ) r.lens[B[r.have++]] = 0;
                            if (
                              ((r.lencode = r.lendyn),
                              (r.lenbits = 7),
                              (D = { bits: r.lenbits }),
                              (k = a(
                                0,
                                r.lens,
                                0,
                                19,
                                r.lencode,
                                0,
                                r.work,
                                D
                              )),
                              (r.lenbits = D.bits),
                              k)
                            ) {
                              (t.msg = "invalid code lengths set"),
                                (r.mode = 30);
                              break;
                            }
                            (r.have = 0), (r.mode = 19);
                          case 19:
                            for (; r.have < r.nlen + r.ndist; ) {
                              for (
                                ;
                                (S =
                                  ((P =
                                    r.lencode[w & ((1 << r.lenbits) - 1)]) >>>
                                    16) &
                                  255),
                                  (R = 65535 & P),
                                  !((A = P >>> 24) <= g);

                              ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              if (R < 16)
                                (w >>>= A), (g -= A), (r.lens[r.have++] = R);
                              else {
                                if (16 === R) {
                                  for (L = A + 2; g < L; ) {
                                    if (0 === f) break t;
                                    f--, (w += l[p++] << g), (g += 8);
                                  }
                                  if (((w >>>= A), (g -= A), 0 === r.have)) {
                                    (t.msg = "invalid bit length repeat"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (C = r.lens[r.have - 1]),
                                    (x = 3 + (3 & w)),
                                    (w >>>= 2),
                                    (g -= 2);
                                } else if (17 === R) {
                                  for (L = A + 3; g < L; ) {
                                    if (0 === f) break t;
                                    f--, (w += l[p++] << g), (g += 8);
                                  }
                                  (g -= A),
                                    (C = 0),
                                    (x = 3 + (7 & (w >>>= A))),
                                    (w >>>= 3),
                                    (g -= 3);
                                } else {
                                  for (L = A + 7; g < L; ) {
                                    if (0 === f) break t;
                                    f--, (w += l[p++] << g), (g += 8);
                                  }
                                  (g -= A),
                                    (C = 0),
                                    (x = 11 + (127 & (w >>>= A))),
                                    (w >>>= 7),
                                    (g -= 7);
                                }
                                if (r.have + x > r.nlen + r.ndist) {
                                  (t.msg = "invalid bit length repeat"),
                                    (r.mode = 30);
                                  break;
                                }
                                for (; x--; ) r.lens[r.have++] = C;
                              }
                            }
                            if (30 === r.mode) break;
                            if (0 === r.lens[256]) {
                              (t.msg = "invalid code -- missing end-of-block"),
                                (r.mode = 30);
                              break;
                            }
                            if (
                              ((r.lenbits = 9),
                              (D = { bits: r.lenbits }),
                              (k = a(
                                1,
                                r.lens,
                                0,
                                r.nlen,
                                r.lencode,
                                0,
                                r.work,
                                D
                              )),
                              (r.lenbits = D.bits),
                              k)
                            ) {
                              (t.msg = "invalid literal/lengths set"),
                                (r.mode = 30);
                              break;
                            }
                            if (
                              ((r.distbits = 6),
                              (r.distcode = r.distdyn),
                              (D = { bits: r.distbits }),
                              (k = a(
                                2,
                                r.lens,
                                r.nlen,
                                r.ndist,
                                r.distcode,
                                0,
                                r.work,
                                D
                              )),
                              (r.distbits = D.bits),
                              k)
                            ) {
                              (t.msg = "invalid distances set"), (r.mode = 30);
                              break;
                            }
                            if (((r.mode = 20), 6 === e)) break t;
                          case 20:
                            r.mode = 21;
                          case 21:
                            if (6 <= f && 258 <= m) {
                              (t.next_out = d),
                                (t.avail_out = m),
                                (t.next_in = p),
                                (t.avail_in = f),
                                (r.hold = w),
                                (r.bits = g),
                                o(t, _),
                                (d = t.next_out),
                                (h = t.output),
                                (m = t.avail_out),
                                (p = t.next_in),
                                (l = t.input),
                                (f = t.avail_in),
                                (w = r.hold),
                                (g = r.bits),
                                12 === r.mode && (r.back = -1);
                              break;
                            }
                            for (
                              r.back = 0;
                              (S =
                                ((P = r.lencode[w & ((1 << r.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (R = 65535 & P),
                                !((A = P >>> 24) <= g);

                            ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if (S && 0 == (240 & S)) {
                              for (
                                I = A, N = S, O = R;
                                (S =
                                  ((P =
                                    r.lencode[
                                      O + ((w & ((1 << (I + N)) - 1)) >> I)
                                    ]) >>>
                                    16) &
                                  255),
                                  (R = 65535 & P),
                                  !(I + (A = P >>> 24) <= g);

                              ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (w >>>= I), (g -= I), (r.back += I);
                            }
                            if (
                              ((w >>>= A),
                              (g -= A),
                              (r.back += A),
                              (r.length = R),
                              0 === S)
                            ) {
                              r.mode = 26;
                              break;
                            }
                            if (32 & S) {
                              (r.back = -1), (r.mode = 12);
                              break;
                            }
                            if (64 & S) {
                              (t.msg = "invalid literal/length code"),
                                (r.mode = 30);
                              break;
                            }
                            (r.extra = 15 & S), (r.mode = 22);
                          case 22:
                            if (r.extra) {
                              for (L = r.extra; g < L; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (r.length += w & ((1 << r.extra) - 1)),
                                (w >>>= r.extra),
                                (g -= r.extra),
                                (r.back += r.extra);
                            }
                            (r.was = r.length), (r.mode = 23);
                          case 23:
                            for (
                              ;
                              (S =
                                ((P =
                                  r.distcode[w & ((1 << r.distbits) - 1)]) >>>
                                  16) &
                                255),
                                (R = 65535 & P),
                                !((A = P >>> 24) <= g);

                            ) {
                              if (0 === f) break t;
                              f--, (w += l[p++] << g), (g += 8);
                            }
                            if (0 == (240 & S)) {
                              for (
                                I = A, N = S, O = R;
                                (S =
                                  ((P =
                                    r.distcode[
                                      O + ((w & ((1 << (I + N)) - 1)) >> I)
                                    ]) >>>
                                    16) &
                                  255),
                                  (R = 65535 & P),
                                  !(I + (A = P >>> 24) <= g);

                              ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (w >>>= I), (g -= I), (r.back += I);
                            }
                            if (((w >>>= A), (g -= A), (r.back += A), 64 & S)) {
                              (t.msg = "invalid distance code"), (r.mode = 30);
                              break;
                            }
                            (r.offset = R), (r.extra = 15 & S), (r.mode = 24);
                          case 24:
                            if (r.extra) {
                              for (L = r.extra; g < L; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              (r.offset += w & ((1 << r.extra) - 1)),
                                (w >>>= r.extra),
                                (g -= r.extra),
                                (r.back += r.extra);
                            }
                            if (r.offset > r.dmax) {
                              (t.msg = "invalid distance too far back"),
                                (r.mode = 30);
                              break;
                            }
                            r.mode = 25;
                          case 25:
                            if (0 === m) break t;
                            if (((x = _ - m), r.offset > x)) {
                              if ((x = r.offset - x) > r.whave && r.sane) {
                                (t.msg = "invalid distance too far back"),
                                  (r.mode = 30);
                                break;
                              }
                              (E =
                                x > r.wnext
                                  ? ((x -= r.wnext), r.wsize - x)
                                  : r.wnext - x),
                                x > r.length && (x = r.length),
                                (T = r.window);
                            } else (T = h), (E = d - r.offset), (x = r.length);
                            for (
                              m < x && (x = m), m -= x, r.length -= x;
                              (h[d++] = T[E++]), --x;

                            );
                            0 === r.length && (r.mode = 21);
                            break;
                          case 26:
                            if (0 === m) break t;
                            (h[d++] = r.length), m--, (r.mode = 21);
                            break;
                          case 27:
                            if (r.wrap) {
                              for (; g < 32; ) {
                                if (0 === f) break t;
                                f--, (w |= l[p++] << g), (g += 8);
                              }
                              if (
                                ((_ -= m),
                                (t.total_out += _),
                                (r.total += _),
                                _ &&
                                  (t.adler = r.check =
                                    r.flags
                                      ? i(r.check, h, _, d - _)
                                      : s(r.check, h, _, d - _)),
                                (_ = m),
                                (r.flags ? w : u(w)) !== r.check)
                              ) {
                                (t.msg = "incorrect data check"), (r.mode = 30);
                                break;
                              }
                              g = w = 0;
                            }
                            r.mode = 28;
                          case 28:
                            if (r.wrap && r.flags) {
                              for (; g < 32; ) {
                                if (0 === f) break t;
                                f--, (w += l[p++] << g), (g += 8);
                              }
                              if (w !== (4294967295 & r.total)) {
                                (t.msg = "incorrect length check"),
                                  (r.mode = 30);
                                break;
                              }
                              g = w = 0;
                            }
                            r.mode = 29;
                          case 29:
                            k = 1;
                            break t;
                          case 30:
                            k = -3;
                            break t;
                          case 31:
                            return -4;
                          default:
                            return c;
                        }
                      return (
                        (t.next_out = d),
                        (t.avail_out = m),
                        (t.next_in = p),
                        (t.avail_in = f),
                        (r.hold = w),
                        (r.bits = g),
                        (r.wsize ||
                          (_ !== t.avail_out &&
                            r.mode < 30 &&
                            (r.mode < 27 || 4 !== e))) &&
                        b(t, t.output, t.next_out, _ - t.avail_out)
                          ? ((r.mode = 31), -4)
                          : ((v -= t.avail_in),
                            (_ -= t.avail_out),
                            (t.total_in += v),
                            (t.total_out += _),
                            (r.total += _),
                            r.wrap &&
                              _ &&
                              (t.adler = r.check =
                                r.flags
                                  ? i(r.check, h, _, t.next_out - _)
                                  : s(r.check, h, _, t.next_out - _)),
                            (t.data_type =
                              r.bits +
                              (r.last ? 64 : 0) +
                              (12 === r.mode ? 128 : 0) +
                              (20 === r.mode || 15 === r.mode ? 256 : 0)),
                            ((0 == v && 0 === _) || 4 === e) &&
                              0 === k &&
                              (k = -5),
                            k)
                      );
                    }),
                    (r.inflateEnd = function (t) {
                      if (!t || !t.state) return c;
                      var e = t.state;
                      return e.window && (e.window = null), (t.state = null), 0;
                    }),
                    (r.inflateGetHeader = function (t, e) {
                      var r;
                      return t && t.state
                        ? 0 == (2 & (r = t.state).wrap)
                          ? c
                          : (((r.head = e).done = !1), 0)
                        : c;
                    }),
                    (r.inflateSetDictionary = function (t, e) {
                      var r,
                        n = e.length;
                      return t && t.state
                        ? 0 !== (r = t.state).wrap && 11 !== r.mode
                          ? c
                          : 11 === r.mode && s(1, e, n, 0) !== r.check
                          ? -3
                          : b(t, e, n, n)
                          ? ((r.mode = 31), -4)
                          : ((r.havedict = 1), 0)
                        : c;
                    }),
                    (r.inflateInfo = "pako inflate (from Nodeca project)");
                },
                {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./inffast": 48,
                  "./inftrees": 50,
                },
              ],
              50: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils/common"),
                    s = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
                      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                      0, 0,
                    ],
                    i = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
                      18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
                      16, 72, 78,
                    ],
                    o = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                      8193, 12289, 16385, 24577, 0, 0,
                    ],
                    a = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
                      22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                      29, 29, 64, 64,
                    ];
                  e.exports = function (t, e, r, c, u, l, h, p) {
                    var d,
                      f,
                      m,
                      w,
                      g,
                      y,
                      b,
                      v,
                      _,
                      x = p.bits,
                      E = 0,
                      T = 0,
                      A = 0,
                      S = 0,
                      R = 0,
                      I = 0,
                      N = 0,
                      O = 0,
                      C = 0,
                      k = 0,
                      D = null,
                      L = 0,
                      P = new n.Buf16(16),
                      F = new n.Buf16(16),
                      B = null,
                      M = 0;
                    for (E = 0; E <= 15; E++) P[E] = 0;
                    for (T = 0; T < c; T++) P[e[r + T]]++;
                    for (R = x, S = 15; 1 <= S && 0 === P[S]; S--);
                    if ((S < R && (R = S), 0 === S))
                      return (
                        (u[l++] = 20971520),
                        (u[l++] = 20971520),
                        (p.bits = 1),
                        0
                      );
                    for (A = 1; A < S && 0 === P[A]; A++);
                    for (R < A && (R = A), E = O = 1; E <= 15; E++)
                      if (((O <<= 1), (O -= P[E]) < 0)) return -1;
                    if (0 < O && (0 === t || 1 !== S)) return -1;
                    for (F[1] = 0, E = 1; E < 15; E++) F[E + 1] = F[E] + P[E];
                    for (T = 0; T < c; T++)
                      0 !== e[r + T] && (h[F[e[r + T]]++] = T);
                    if (
                      ((y =
                        0 === t
                          ? ((D = B = h), 19)
                          : 1 === t
                          ? ((D = s), (L -= 257), (B = i), (M -= 257), 256)
                          : ((D = o), (B = a), -1)),
                      (E = A),
                      (g = l),
                      (N = T = k = 0),
                      (m = -1),
                      (w = (C = 1 << (I = R)) - 1),
                      (1 === t && 852 < C) || (2 === t && 592 < C))
                    )
                      return 1;
                    for (;;) {
                      for (
                        b = E - N,
                          _ =
                            h[T] < y
                              ? ((v = 0), h[T])
                              : h[T] > y
                              ? ((v = B[M + h[T]]), D[L + h[T]])
                              : ((v = 96), 0),
                          d = 1 << (E - N),
                          A = f = 1 << I;
                        (u[g + (k >> N) + (f -= d)] =
                          (b << 24) | (v << 16) | _ | 0),
                          0 !== f;

                      );
                      for (d = 1 << (E - 1); k & d; ) d >>= 1;
                      if (
                        (0 !== d ? ((k &= d - 1), (k += d)) : (k = 0),
                        T++,
                        0 == --P[E])
                      ) {
                        if (E === S) break;
                        E = e[r + h[T]];
                      }
                      if (R < E && (k & w) !== m) {
                        for (
                          0 === N && (N = R), g += A, O = 1 << (I = E - N);
                          I + N < S && !((O -= P[I + N]) <= 0);

                        )
                          I++, (O <<= 1);
                        if (
                          ((C += 1 << I),
                          (1 === t && 852 < C) || (2 === t && 592 < C))
                        )
                          return 1;
                        u[(m = k & w)] = (R << 24) | (I << 16) | (g - l) | 0;
                      }
                    }
                    return (
                      0 !== k && (u[g + k] = ((E - N) << 24) | (64 << 16) | 0),
                      (p.bits = R),
                      0
                    );
                  };
                },
                { "../utils/common": 41 },
              ],
              51: [
                function (t, e, r) {
                  "use strict";
                  e.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version",
                  };
                },
                {},
              ],
              52: [
                function (t, e, r) {
                  "use strict";
                  var n = t("../utils/common");
                  function s(t) {
                    for (var e = t.length; 0 <= --e; ) t[e] = 0;
                  }
                  var i = 256,
                    o = 286,
                    a = 30,
                    c = 15,
                    u = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3,
                      3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                    ],
                    l = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8,
                      8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                    ],
                    h = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
                    ],
                    p = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ],
                    d = new Array(576);
                  s(d);
                  var f = new Array(60);
                  s(f);
                  var m = new Array(512);
                  s(m);
                  var w = new Array(256);
                  s(w);
                  var g = new Array(29);
                  s(g);
                  var y,
                    b,
                    v,
                    _ = new Array(a);
                  function x(t, e, r, n, s) {
                    (this.static_tree = t),
                      (this.extra_bits = e),
                      (this.extra_base = r),
                      (this.elems = n),
                      (this.max_length = s),
                      (this.has_stree = t && t.length);
                  }
                  function E(t, e) {
                    (this.dyn_tree = t),
                      (this.max_code = 0),
                      (this.stat_desc = e);
                  }
                  function T(t) {
                    return t < 256 ? m[t] : m[256 + (t >>> 7)];
                  }
                  function A(t, e) {
                    (t.pending_buf[t.pending++] = 255 & e),
                      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                  }
                  function S(t, e, r) {
                    t.bi_valid > 16 - r
                      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                        A(t, t.bi_buf),
                        (t.bi_buf = e >> (16 - t.bi_valid)),
                        (t.bi_valid += r - 16))
                      : ((t.bi_buf |= (e << t.bi_valid) & 65535),
                        (t.bi_valid += r));
                  }
                  function R(t, e, r) {
                    S(t, r[2 * e], r[2 * e + 1]);
                  }
                  function I(t, e) {
                    for (
                      var r = 0;
                      (r |= 1 & t), (t >>>= 1), (r <<= 1), 0 < --e;

                    );
                    return r >>> 1;
                  }
                  function N(t, e, r) {
                    var n,
                      s,
                      i = new Array(16),
                      o = 0;
                    for (n = 1; n <= c; n++) i[n] = o = (o + r[n - 1]) << 1;
                    for (s = 0; s <= e; s++) {
                      var a = t[2 * s + 1];
                      0 !== a && (t[2 * s] = I(i[a]++, a));
                    }
                  }
                  function O(t) {
                    var e;
                    for (e = 0; e < o; e++) t.dyn_ltree[2 * e] = 0;
                    for (e = 0; e < a; e++) t.dyn_dtree[2 * e] = 0;
                    for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                    (t.dyn_ltree[512] = 1),
                      (t.opt_len = t.static_len = 0),
                      (t.last_lit = t.matches = 0);
                  }
                  function C(t) {
                    8 < t.bi_valid
                      ? A(t, t.bi_buf)
                      : 0 < t.bi_valid &&
                        (t.pending_buf[t.pending++] = t.bi_buf),
                      (t.bi_buf = 0),
                      (t.bi_valid = 0);
                  }
                  function k(t, e, r, n) {
                    var s = 2 * e,
                      i = 2 * r;
                    return t[s] < t[i] || (t[s] === t[i] && n[e] <= n[r]);
                  }
                  function D(t, e, r) {
                    for (
                      var n = t.heap[r], s = r << 1;
                      s <= t.heap_len &&
                      (s < t.heap_len &&
                        k(e, t.heap[s + 1], t.heap[s], t.depth) &&
                        s++,
                      !k(e, n, t.heap[s], t.depth));

                    )
                      (t.heap[r] = t.heap[s]), (r = s), (s <<= 1);
                    t.heap[r] = n;
                  }
                  function L(t, e, r) {
                    var n,
                      s,
                      o,
                      a,
                      c = 0;
                    if (0 !== t.last_lit)
                      for (
                        ;
                        (n =
                          (t.pending_buf[t.d_buf + 2 * c] << 8) |
                          t.pending_buf[t.d_buf + 2 * c + 1]),
                          (s = t.pending_buf[t.l_buf + c]),
                          c++,
                          0 === n
                            ? R(t, s, e)
                            : (R(t, (o = w[s]) + i + 1, e),
                              0 !== (a = u[o]) && S(t, (s -= g[o]), a),
                              R(t, (o = T(--n)), r),
                              0 !== (a = l[o]) && S(t, (n -= _[o]), a)),
                          c < t.last_lit;

                      );
                    R(t, 256, e);
                  }
                  function P(t, e) {
                    var r,
                      n,
                      s,
                      i = e.dyn_tree,
                      o = e.stat_desc.static_tree,
                      a = e.stat_desc.has_stree,
                      u = e.stat_desc.elems,
                      l = -1;
                    for (t.heap_len = 0, t.heap_max = 573, r = 0; r < u; r++)
                      0 !== i[2 * r]
                        ? ((t.heap[++t.heap_len] = l = r), (t.depth[r] = 0))
                        : (i[2 * r + 1] = 0);
                    for (; t.heap_len < 2; )
                      (i[2 * (s = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1),
                        (t.depth[s] = 0),
                        t.opt_len--,
                        a && (t.static_len -= o[2 * s + 1]);
                    for (e.max_code = l, r = t.heap_len >> 1; 1 <= r; r--)
                      D(t, i, r);
                    for (
                      s = u;
                      (r = t.heap[1]),
                        (t.heap[1] = t.heap[t.heap_len--]),
                        D(t, i, 1),
                        (n = t.heap[1]),
                        (t.heap[--t.heap_max] = r),
                        (t.heap[--t.heap_max] = n),
                        (i[2 * s] = i[2 * r] + i[2 * n]),
                        (t.depth[s] =
                          (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) +
                          1),
                        (i[2 * r + 1] = i[2 * n + 1] = s),
                        (t.heap[1] = s++),
                        D(t, i, 1),
                        2 <= t.heap_len;

                    );
                    (t.heap[--t.heap_max] = t.heap[1]),
                      (function (t, e) {
                        var r,
                          n,
                          s,
                          i,
                          o,
                          a,
                          u = e.dyn_tree,
                          l = e.max_code,
                          h = e.stat_desc.static_tree,
                          p = e.stat_desc.has_stree,
                          d = e.stat_desc.extra_bits,
                          f = e.stat_desc.extra_base,
                          m = e.stat_desc.max_length,
                          w = 0;
                        for (i = 0; i <= c; i++) t.bl_count[i] = 0;
                        for (
                          u[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1;
                          r < 573;
                          r++
                        )
                          m < (i = u[2 * u[2 * (n = t.heap[r]) + 1] + 1] + 1) &&
                            ((i = m), w++),
                            (u[2 * n + 1] = i),
                            l < n ||
                              (t.bl_count[i]++,
                              (o = 0),
                              f <= n && (o = d[n - f]),
                              (a = u[2 * n]),
                              (t.opt_len += a * (i + o)),
                              p && (t.static_len += a * (h[2 * n + 1] + o)));
                        if (0 !== w) {
                          do {
                            for (i = m - 1; 0 === t.bl_count[i]; ) i--;
                            t.bl_count[i]--,
                              (t.bl_count[i + 1] += 2),
                              t.bl_count[m]--,
                              (w -= 2);
                          } while (0 < w);
                          for (i = m; 0 !== i; i--)
                            for (n = t.bl_count[i]; 0 !== n; )
                              l < (s = t.heap[--r]) ||
                                (u[2 * s + 1] !== i &&
                                  ((t.opt_len += (i - u[2 * s + 1]) * u[2 * s]),
                                  (u[2 * s + 1] = i)),
                                n--);
                        }
                      })(t, e),
                      N(i, l, t.bl_count);
                  }
                  function F(t, e, r) {
                    var n,
                      s,
                      i = -1,
                      o = e[1],
                      a = 0,
                      c = 7,
                      u = 4;
                    for (
                      0 === o && ((c = 138), (u = 3)),
                        e[2 * (r + 1) + 1] = 65535,
                        n = 0;
                      n <= r;
                      n++
                    )
                      (s = o),
                        (o = e[2 * (n + 1) + 1]),
                        (++a < c && s === o) ||
                          (a < u
                            ? (t.bl_tree[2 * s] += a)
                            : 0 !== s
                            ? (s !== i && t.bl_tree[2 * s]++, t.bl_tree[32]++)
                            : a <= 10
                            ? t.bl_tree[34]++
                            : t.bl_tree[36]++,
                          (i = s),
                          (u =
                            (a = 0) === o
                              ? ((c = 138), 3)
                              : s === o
                              ? ((c = 6), 3)
                              : ((c = 7), 4)));
                  }
                  function B(t, e, r) {
                    var n,
                      s,
                      i = -1,
                      o = e[1],
                      a = 0,
                      c = 7,
                      u = 4;
                    for (0 === o && ((c = 138), (u = 3)), n = 0; n <= r; n++)
                      if (
                        ((s = o),
                        (o = e[2 * (n + 1) + 1]),
                        !(++a < c && s === o))
                      ) {
                        if (a < u) for (; R(t, s, t.bl_tree), 0 != --a; );
                        else
                          0 !== s
                            ? (s !== i && (R(t, s, t.bl_tree), a--),
                              R(t, 16, t.bl_tree),
                              S(t, a - 3, 2))
                            : a <= 10
                            ? (R(t, 17, t.bl_tree), S(t, a - 3, 3))
                            : (R(t, 18, t.bl_tree), S(t, a - 11, 7));
                        (i = s),
                          (u =
                            (a = 0) === o
                              ? ((c = 138), 3)
                              : s === o
                              ? ((c = 6), 3)
                              : ((c = 7), 4));
                      }
                  }
                  s(_);
                  var M = !1;
                  function U(t, e, r, s) {
                    S(t, 0 + (s ? 1 : 0), 3),
                      (function (t, e, r, s) {
                        C(t),
                          A(t, r),
                          A(t, ~r),
                          n.arraySet(t.pending_buf, t.window, e, r, t.pending),
                          (t.pending += r);
                      })(t, e, r);
                  }
                  (r._tr_init = function (t) {
                    M ||
                      ((function () {
                        var t,
                          e,
                          r,
                          n,
                          s,
                          i = new Array(16);
                        for (n = r = 0; n < 28; n++)
                          for (g[n] = r, t = 0; t < 1 << u[n]; t++) w[r++] = n;
                        for (w[r - 1] = n, n = s = 0; n < 16; n++)
                          for (_[n] = s, t = 0; t < 1 << l[n]; t++) m[s++] = n;
                        for (s >>= 7; n < a; n++)
                          for (_[n] = s << 7, t = 0; t < 1 << (l[n] - 7); t++)
                            m[256 + s++] = n;
                        for (e = 0; e <= c; e++) i[e] = 0;
                        for (t = 0; t <= 143; ) (d[2 * t + 1] = 8), t++, i[8]++;
                        for (; t <= 255; ) (d[2 * t + 1] = 9), t++, i[9]++;
                        for (; t <= 279; ) (d[2 * t + 1] = 7), t++, i[7]++;
                        for (; t <= 287; ) (d[2 * t + 1] = 8), t++, i[8]++;
                        for (N(d, 287, i), t = 0; t < a; t++)
                          (f[2 * t + 1] = 5), (f[2 * t] = I(t, 5));
                        (y = new x(d, u, 257, o, c)),
                          (b = new x(f, l, 0, a, c)),
                          (v = new x(new Array(0), h, 0, 19, 7));
                      })(),
                      (M = !0)),
                      (t.l_desc = new E(t.dyn_ltree, y)),
                      (t.d_desc = new E(t.dyn_dtree, b)),
                      (t.bl_desc = new E(t.bl_tree, v)),
                      (t.bi_buf = 0),
                      (t.bi_valid = 0),
                      O(t);
                  }),
                    (r._tr_stored_block = U),
                    (r._tr_flush_block = function (t, e, r, n) {
                      var s,
                        o,
                        a = 0;
                      0 < t.level
                        ? (2 === t.strm.data_type &&
                            (t.strm.data_type = (function (t) {
                              var e,
                                r = 4093624447;
                              for (e = 0; e <= 31; e++, r >>>= 1)
                                if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
                              if (
                                0 !== t.dyn_ltree[18] ||
                                0 !== t.dyn_ltree[20] ||
                                0 !== t.dyn_ltree[26]
                              )
                                return 1;
                              for (e = 32; e < i; e++)
                                if (0 !== t.dyn_ltree[2 * e]) return 1;
                              return 0;
                            })(t)),
                          P(t, t.l_desc),
                          P(t, t.d_desc),
                          (a = (function (t) {
                            var e;
                            for (
                              F(t, t.dyn_ltree, t.l_desc.max_code),
                                F(t, t.dyn_dtree, t.d_desc.max_code),
                                P(t, t.bl_desc),
                                e = 18;
                              3 <= e && 0 === t.bl_tree[2 * p[e] + 1];
                              e--
                            );
                            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                          })(t)),
                          (s = (t.opt_len + 3 + 7) >>> 3),
                          (o = (t.static_len + 3 + 7) >>> 3) <= s && (s = o))
                        : (s = o = r + 5),
                        r + 4 <= s && -1 !== e
                          ? U(t, e, r, n)
                          : 4 === t.strategy || o === s
                          ? (S(t, 2 + (n ? 1 : 0), 3), L(t, d, f))
                          : (S(t, 4 + (n ? 1 : 0), 3),
                            (function (t, e, r, n) {
                              var s;
                              for (
                                S(t, e - 257, 5),
                                  S(t, r - 1, 5),
                                  S(t, n - 4, 4),
                                  s = 0;
                                s < n;
                                s++
                              )
                                S(t, t.bl_tree[2 * p[s] + 1], 3);
                              B(t, t.dyn_ltree, e - 1),
                                B(t, t.dyn_dtree, r - 1);
                            })(
                              t,
                              t.l_desc.max_code + 1,
                              t.d_desc.max_code + 1,
                              a + 1
                            ),
                            L(t, t.dyn_ltree, t.dyn_dtree)),
                        O(t),
                        n && C(t);
                    }),
                    (r._tr_tally = function (t, e, r) {
                      return (
                        (t.pending_buf[t.d_buf + 2 * t.last_lit] =
                          (e >>> 8) & 255),
                        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                        (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
                        t.last_lit++,
                        0 === e
                          ? t.dyn_ltree[2 * r]++
                          : (t.matches++,
                            e--,
                            t.dyn_ltree[2 * (w[r] + i + 1)]++,
                            t.dyn_dtree[2 * T(e)]++),
                        t.last_lit === t.lit_bufsize - 1
                      );
                    }),
                    (r._tr_align = function (t) {
                      S(t, 2, 3),
                        R(t, 256, d),
                        (function (t) {
                          16 === t.bi_valid
                            ? (A(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                            : 8 <= t.bi_valid &&
                              ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                              (t.bi_buf >>= 8),
                              (t.bi_valid -= 8));
                        })(t);
                    });
                },
                { "../utils/common": 41 },
              ],
              53: [
                function (t, e, r) {
                  "use strict";
                  e.exports = function () {
                    (this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ""),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0);
                  };
                },
                {},
              ],
              54: [
                function (t, e, r) {
                  "use strict";
                  e.exports =
                    "function" == typeof setImmediate
                      ? setImmediate
                      : function () {
                          var t = [].slice.apply(arguments);
                          t.splice(1, 0, 0), setTimeout.apply(null, t);
                        };
                },
                {},
              ],
            },
            {},
            [10]
          )(10);
        },
        155: (t) => {
          var e,
            r,
            n = (t.exports = {});
          function s() {
            throw new Error("setTimeout has not been defined");
          }
          function i() {
            throw new Error("clearTimeout has not been defined");
          }
          function o(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === s || !e) && setTimeout)
              return (e = setTimeout), setTimeout(t, 0);
            try {
              return e(t, 0);
            } catch (r) {
              try {
                return e.call(null, t, 0);
              } catch (r) {
                return e.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              e = "function" == typeof setTimeout ? setTimeout : s;
            } catch (t) {
              e = s;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (t) {
              r = i;
            }
          })();
          var a,
            c = [],
            u = !1,
            l = -1;
          function h() {
            u &&
              a &&
              ((u = !1),
              a.length ? (c = a.concat(c)) : (l = -1),
              c.length && p());
          }
          function p() {
            if (!u) {
              var t = o(h);
              u = !0;
              for (var e = c.length; e; ) {
                for (a = c, c = []; ++l < e; ) a && a[l].run();
                (l = -1), (e = c.length);
              }
              (a = null),
                (u = !1),
                (function (t) {
                  if (r === clearTimeout) return clearTimeout(t);
                  if ((r === i || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(t);
                  try {
                    r(t);
                  } catch (e) {
                    try {
                      return r.call(null, t);
                    } catch (e) {
                      return r.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function d(t, e) {
            (this.fun = t), (this.array = e);
          }
          function f() {}
          (n.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            c.push(new d(t, e)), 1 !== c.length || u || o(p);
          }),
            (d.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = f),
            (n.addListener = f),
            (n.once = f),
            (n.off = f),
            (n.removeListener = f),
            (n.removeAllListeners = f),
            (n.emit = f),
            (n.prependListener = f),
            (n.prependOnceListener = f),
            (n.listeners = function (t) {
              return [];
            }),
            (n.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (n.cwd = function () {
              return "/";
            }),
            (n.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (n.umask = function () {
              return 0;
            });
        },
        509: (t, e, r) => {
          var n = r(764),
            s = n.Buffer;
          function i(t, e) {
            for (var r in t) e[r] = t[r];
          }
          function o(t, e, r) {
            return s(t, e, r);
          }
          s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow
            ? (t.exports = n)
            : (i(n, e), (e.Buffer = o)),
            i(s, o),
            (o.from = function (t, e, r) {
              if ("number" == typeof t)
                throw new TypeError("Argument must not be a number");
              return s(t, e, r);
            }),
            (o.alloc = function (t, e, r) {
              if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
              var n = s(t);
              return (
                void 0 !== e
                  ? "string" == typeof r
                    ? n.fill(e, r)
                    : n.fill(e)
                  : n.fill(0),
                n
              );
            }),
            (o.allocUnsafe = function (t) {
              if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
              return s(t);
            }),
            (o.allocUnsafeSlow = function (t) {
              if ("number" != typeof t)
                throw new TypeError("Argument must be a number");
              return n.SlowBuffer(t);
            });
        },
        99: (t, e, r) => {
          !(function (t) {
            (t.parser = function (t, e) {
              return new s(t, e);
            }),
              (t.SAXParser = s),
              (t.SAXStream = o),
              (t.createStream = function (t, e) {
                return new o(t, e);
              }),
              (t.MAX_BUFFER_LENGTH = 65536);
            var e,
              n = [
                "comment",
                "sgmlDecl",
                "textNode",
                "tagName",
                "doctype",
                "procInstName",
                "procInstBody",
                "entity",
                "attribName",
                "attribValue",
                "cdata",
                "script",
              ];
            function s(e, r) {
              if (!(this instanceof s)) return new s(e, r);
              var i = this;
              !(function (t) {
                for (var e = 0, r = n.length; e < r; e++) t[n[e]] = "";
              })(i),
                (i.q = i.c = ""),
                (i.bufferCheckPosition = t.MAX_BUFFER_LENGTH),
                (i.opt = r || {}),
                (i.opt.lowercase = i.opt.lowercase || i.opt.lowercasetags),
                (i.looseCase = i.opt.lowercase ? "toLowerCase" : "toUpperCase"),
                (i.tags = []),
                (i.closed = i.closedRoot = i.sawRoot = !1),
                (i.tag = i.error = null),
                (i.strict = !!e),
                (i.noscript = !(!e && !i.opt.noscript)),
                (i.state = x.BEGIN),
                (i.strictEntities = i.opt.strictEntities),
                (i.ENTITIES = i.strictEntities
                  ? Object.create(t.XML_ENTITIES)
                  : Object.create(t.ENTITIES)),
                (i.attribList = []),
                i.opt.xmlns && (i.ns = Object.create(u)),
                (i.trackPosition = !1 !== i.opt.position),
                i.trackPosition && (i.position = i.line = i.column = 0),
                T(i, "onready");
            }
            (t.EVENTS = [
              "text",
              "processinginstruction",
              "sgmldeclaration",
              "doctype",
              "comment",
              "opentagstart",
              "attribute",
              "opentag",
              "closetag",
              "opencdata",
              "cdata",
              "closecdata",
              "error",
              "end",
              "ready",
              "script",
              "opennamespace",
              "closenamespace",
            ]),
              Object.create ||
                (Object.create = function (t) {
                  function e() {}
                  return (e.prototype = t), new e();
                }),
              Object.keys ||
                (Object.keys = function (t) {
                  var e = [];
                  for (var r in t) t.hasOwnProperty(r) && e.push(r);
                  return e;
                }),
              (s.prototype = {
                end: function () {
                  N(this);
                },
                write: function (e) {
                  var r = this;
                  if (this.error) throw this.error;
                  if (r.closed)
                    return I(
                      r,
                      "Cannot write after close. Assign an onready handler."
                    );
                  if (null === e) return N(r);
                  "object" == typeof e && (e = e.toString());
                  for (var s = 0, i = ""; (i = M(e, s++)), (r.c = i), i; )
                    switch (
                      (r.trackPosition &&
                        (r.position++,
                        "\n" === i ? (r.line++, (r.column = 0)) : r.column++),
                      r.state)
                    ) {
                      case x.BEGIN:
                        if (((r.state = x.BEGIN_WHITESPACE), "\ufeff" === i))
                          continue;
                        B(r, i);
                        continue;
                      case x.BEGIN_WHITESPACE:
                        B(r, i);
                        continue;
                      case x.TEXT:
                        if (r.sawRoot && !r.closedRoot) {
                          for (var o = s - 1; i && "<" !== i && "&" !== i; )
                            (i = M(e, s++)) &&
                              r.trackPosition &&
                              (r.position++,
                              "\n" === i
                                ? (r.line++, (r.column = 0))
                                : r.column++);
                          r.textNode += e.substring(o, s - 1);
                        }
                        "<" !== i || (r.sawRoot && r.closedRoot && !r.strict)
                          ? (f(i) ||
                              (r.sawRoot && !r.closedRoot) ||
                              O(r, "Text data outside of root node."),
                            "&" === i
                              ? (r.state = x.TEXT_ENTITY)
                              : (r.textNode += i))
                          : ((r.state = x.OPEN_WAKA),
                            (r.startTagPosition = r.position));
                        continue;
                      case x.SCRIPT:
                        "<" === i
                          ? (r.state = x.SCRIPT_ENDING)
                          : (r.script += i);
                        continue;
                      case x.SCRIPT_ENDING:
                        "/" === i
                          ? (r.state = x.CLOSE_TAG)
                          : ((r.script += "<" + i), (r.state = x.SCRIPT));
                        continue;
                      case x.OPEN_WAKA:
                        if ("!" === i)
                          (r.state = x.SGML_DECL), (r.sgmlDecl = "");
                        else if (f(i));
                        else if (g(l, i))
                          (r.state = x.OPEN_TAG), (r.tagName = i);
                        else if ("/" === i)
                          (r.state = x.CLOSE_TAG), (r.tagName = "");
                        else if ("?" === i)
                          (r.state = x.PROC_INST),
                            (r.procInstName = r.procInstBody = "");
                        else {
                          if (
                            (O(r, "Unencoded <"),
                            r.startTagPosition + 1 < r.position)
                          ) {
                            var a = r.position - r.startTagPosition;
                            i = new Array(a).join(" ") + i;
                          }
                          (r.textNode += "<" + i), (r.state = x.TEXT);
                        }
                        continue;
                      case x.SGML_DECL:
                        "[CDATA[" === (r.sgmlDecl + i).toUpperCase()
                          ? (A(r, "onopencdata"),
                            (r.state = x.CDATA),
                            (r.sgmlDecl = ""),
                            (r.cdata = ""))
                          : r.sgmlDecl + i === "--"
                          ? ((r.state = x.COMMENT),
                            (r.comment = ""),
                            (r.sgmlDecl = ""))
                          : "DOCTYPE" === (r.sgmlDecl + i).toUpperCase()
                          ? ((r.state = x.DOCTYPE),
                            (r.doctype || r.sawRoot) &&
                              O(
                                r,
                                "Inappropriately located doctype declaration"
                              ),
                            (r.doctype = ""),
                            (r.sgmlDecl = ""))
                          : ">" === i
                          ? (A(r, "onsgmldeclaration", r.sgmlDecl),
                            (r.sgmlDecl = ""),
                            (r.state = x.TEXT))
                          : m(i)
                          ? ((r.state = x.SGML_DECL_QUOTED), (r.sgmlDecl += i))
                          : (r.sgmlDecl += i);
                        continue;
                      case x.SGML_DECL_QUOTED:
                        i === r.q && ((r.state = x.SGML_DECL), (r.q = "")),
                          (r.sgmlDecl += i);
                        continue;
                      case x.DOCTYPE:
                        ">" === i
                          ? ((r.state = x.TEXT),
                            A(r, "ondoctype", r.doctype),
                            (r.doctype = !0))
                          : ((r.doctype += i),
                            "[" === i
                              ? (r.state = x.DOCTYPE_DTD)
                              : m(i) &&
                                ((r.state = x.DOCTYPE_QUOTED), (r.q = i)));
                        continue;
                      case x.DOCTYPE_QUOTED:
                        (r.doctype += i),
                          i === r.q && ((r.q = ""), (r.state = x.DOCTYPE));
                        continue;
                      case x.DOCTYPE_DTD:
                        (r.doctype += i),
                          "]" === i
                            ? (r.state = x.DOCTYPE)
                            : m(i) &&
                              ((r.state = x.DOCTYPE_DTD_QUOTED), (r.q = i));
                        continue;
                      case x.DOCTYPE_DTD_QUOTED:
                        (r.doctype += i),
                          i === r.q && ((r.state = x.DOCTYPE_DTD), (r.q = ""));
                        continue;
                      case x.COMMENT:
                        "-" === i
                          ? (r.state = x.COMMENT_ENDING)
                          : (r.comment += i);
                        continue;
                      case x.COMMENT_ENDING:
                        "-" === i
                          ? ((r.state = x.COMMENT_ENDED),
                            (r.comment = R(r.opt, r.comment)),
                            r.comment && A(r, "oncomment", r.comment),
                            (r.comment = ""))
                          : ((r.comment += "-" + i), (r.state = x.COMMENT));
                        continue;
                      case x.COMMENT_ENDED:
                        ">" !== i
                          ? (O(r, "Malformed comment"),
                            (r.comment += "--" + i),
                            (r.state = x.COMMENT))
                          : (r.state = x.TEXT);
                        continue;
                      case x.CDATA:
                        "]" === i ? (r.state = x.CDATA_ENDING) : (r.cdata += i);
                        continue;
                      case x.CDATA_ENDING:
                        "]" === i
                          ? (r.state = x.CDATA_ENDING_2)
                          : ((r.cdata += "]" + i), (r.state = x.CDATA));
                        continue;
                      case x.CDATA_ENDING_2:
                        ">" === i
                          ? (r.cdata && A(r, "oncdata", r.cdata),
                            A(r, "onclosecdata"),
                            (r.cdata = ""),
                            (r.state = x.TEXT))
                          : "]" === i
                          ? (r.cdata += "]")
                          : ((r.cdata += "]]" + i), (r.state = x.CDATA));
                        continue;
                      case x.PROC_INST:
                        "?" === i
                          ? (r.state = x.PROC_INST_ENDING)
                          : f(i)
                          ? (r.state = x.PROC_INST_BODY)
                          : (r.procInstName += i);
                        continue;
                      case x.PROC_INST_BODY:
                        if (!r.procInstBody && f(i)) continue;
                        "?" === i
                          ? (r.state = x.PROC_INST_ENDING)
                          : (r.procInstBody += i);
                        continue;
                      case x.PROC_INST_ENDING:
                        ">" === i
                          ? (A(r, "onprocessinginstruction", {
                              name: r.procInstName,
                              body: r.procInstBody,
                            }),
                            (r.procInstName = r.procInstBody = ""),
                            (r.state = x.TEXT))
                          : ((r.procInstBody += "?" + i),
                            (r.state = x.PROC_INST_BODY));
                        continue;
                      case x.OPEN_TAG:
                        g(h, i)
                          ? (r.tagName += i)
                          : (C(r),
                            ">" === i
                              ? L(r)
                              : "/" === i
                              ? (r.state = x.OPEN_TAG_SLASH)
                              : (f(i) || O(r, "Invalid character in tag name"),
                                (r.state = x.ATTRIB)));
                        continue;
                      case x.OPEN_TAG_SLASH:
                        ">" === i
                          ? (L(r, !0), P(r))
                          : (O(
                              r,
                              "Forward-slash in opening tag not followed by >"
                            ),
                            (r.state = x.ATTRIB));
                        continue;
                      case x.ATTRIB:
                        if (f(i)) continue;
                        ">" === i
                          ? L(r)
                          : "/" === i
                          ? (r.state = x.OPEN_TAG_SLASH)
                          : g(l, i)
                          ? ((r.attribName = i),
                            (r.attribValue = ""),
                            (r.state = x.ATTRIB_NAME))
                          : O(r, "Invalid attribute name");
                        continue;
                      case x.ATTRIB_NAME:
                        "=" === i
                          ? (r.state = x.ATTRIB_VALUE)
                          : ">" === i
                          ? (O(r, "Attribute without value"),
                            (r.attribValue = r.attribName),
                            D(r),
                            L(r))
                          : f(i)
                          ? (r.state = x.ATTRIB_NAME_SAW_WHITE)
                          : g(h, i)
                          ? (r.attribName += i)
                          : O(r, "Invalid attribute name");
                        continue;
                      case x.ATTRIB_NAME_SAW_WHITE:
                        if ("=" === i) r.state = x.ATTRIB_VALUE;
                        else {
                          if (f(i)) continue;
                          O(r, "Attribute without value"),
                            (r.tag.attributes[r.attribName] = ""),
                            (r.attribValue = ""),
                            A(r, "onattribute", {
                              name: r.attribName,
                              value: "",
                            }),
                            (r.attribName = ""),
                            ">" === i
                              ? L(r)
                              : g(l, i)
                              ? ((r.attribName = i), (r.state = x.ATTRIB_NAME))
                              : (O(r, "Invalid attribute name"),
                                (r.state = x.ATTRIB));
                        }
                        continue;
                      case x.ATTRIB_VALUE:
                        if (f(i)) continue;
                        m(i)
                          ? ((r.q = i), (r.state = x.ATTRIB_VALUE_QUOTED))
                          : (O(r, "Unquoted attribute value"),
                            (r.state = x.ATTRIB_VALUE_UNQUOTED),
                            (r.attribValue = i));
                        continue;
                      case x.ATTRIB_VALUE_QUOTED:
                        if (i !== r.q) {
                          "&" === i
                            ? (r.state = x.ATTRIB_VALUE_ENTITY_Q)
                            : (r.attribValue += i);
                          continue;
                        }
                        D(r), (r.q = ""), (r.state = x.ATTRIB_VALUE_CLOSED);
                        continue;
                      case x.ATTRIB_VALUE_CLOSED:
                        f(i)
                          ? (r.state = x.ATTRIB)
                          : ">" === i
                          ? L(r)
                          : "/" === i
                          ? (r.state = x.OPEN_TAG_SLASH)
                          : g(l, i)
                          ? (O(r, "No whitespace between attributes"),
                            (r.attribName = i),
                            (r.attribValue = ""),
                            (r.state = x.ATTRIB_NAME))
                          : O(r, "Invalid attribute name");
                        continue;
                      case x.ATTRIB_VALUE_UNQUOTED:
                        if (!w(i)) {
                          "&" === i
                            ? (r.state = x.ATTRIB_VALUE_ENTITY_U)
                            : (r.attribValue += i);
                          continue;
                        }
                        D(r), ">" === i ? L(r) : (r.state = x.ATTRIB);
                        continue;
                      case x.CLOSE_TAG:
                        if (r.tagName)
                          ">" === i
                            ? P(r)
                            : g(h, i)
                            ? (r.tagName += i)
                            : r.script
                            ? ((r.script += "</" + r.tagName),
                              (r.tagName = ""),
                              (r.state = x.SCRIPT))
                            : (f(i) || O(r, "Invalid tagname in closing tag"),
                              (r.state = x.CLOSE_TAG_SAW_WHITE));
                        else {
                          if (f(i)) continue;
                          y(l, i)
                            ? r.script
                              ? ((r.script += "</" + i), (r.state = x.SCRIPT))
                              : O(r, "Invalid tagname in closing tag.")
                            : (r.tagName = i);
                        }
                        continue;
                      case x.CLOSE_TAG_SAW_WHITE:
                        if (f(i)) continue;
                        ">" === i
                          ? P(r)
                          : O(r, "Invalid characters in closing tag");
                        continue;
                      case x.TEXT_ENTITY:
                      case x.ATTRIB_VALUE_ENTITY_Q:
                      case x.ATTRIB_VALUE_ENTITY_U:
                        var c, u;
                        switch (r.state) {
                          case x.TEXT_ENTITY:
                            (c = x.TEXT), (u = "textNode");
                            break;
                          case x.ATTRIB_VALUE_ENTITY_Q:
                            (c = x.ATTRIB_VALUE_QUOTED), (u = "attribValue");
                            break;
                          case x.ATTRIB_VALUE_ENTITY_U:
                            (c = x.ATTRIB_VALUE_UNQUOTED), (u = "attribValue");
                        }
                        ";" === i
                          ? ((r[u] += F(r)), (r.entity = ""), (r.state = c))
                          : g(r.entity.length ? d : p, i)
                          ? (r.entity += i)
                          : (O(r, "Invalid character in entity name"),
                            (r[u] += "&" + r.entity + i),
                            (r.entity = ""),
                            (r.state = c));
                        continue;
                      default:
                        throw new Error(r, "Unknown state: " + r.state);
                    }
                  return (
                    r.position >= r.bufferCheckPosition &&
                      (function (e) {
                        for (
                          var r = Math.max(t.MAX_BUFFER_LENGTH, 10),
                            s = 0,
                            i = 0,
                            o = n.length;
                          i < o;
                          i++
                        ) {
                          var a = e[n[i]].length;
                          if (a > r)
                            switch (n[i]) {
                              case "textNode":
                                S(e);
                                break;
                              case "cdata":
                                A(e, "oncdata", e.cdata), (e.cdata = "");
                                break;
                              case "script":
                                A(e, "onscript", e.script), (e.script = "");
                                break;
                              default:
                                I(e, "Max buffer length exceeded: " + n[i]);
                            }
                          s = Math.max(s, a);
                        }
                        var c = t.MAX_BUFFER_LENGTH - s;
                        e.bufferCheckPosition = c + e.position;
                      })(r),
                    r
                  );
                },
                resume: function () {
                  return (this.error = null), this;
                },
                close: function () {
                  return this.write(null);
                },
                flush: function () {
                  var t;
                  S((t = this)),
                    "" !== t.cdata &&
                      (A(t, "oncdata", t.cdata), (t.cdata = "")),
                    "" !== t.script &&
                      (A(t, "onscript", t.script), (t.script = ""));
                },
              });
            try {
              e = r(830).Stream;
            } catch (t) {
              e = function () {};
            }
            var i = t.EVENTS.filter(function (t) {
              return "error" !== t && "end" !== t;
            });
            function o(t, r) {
              if (!(this instanceof o)) return new o(t, r);
              e.apply(this),
                (this._parser = new s(t, r)),
                (this.writable = !0),
                (this.readable = !0);
              var n = this;
              (this._parser.onend = function () {
                n.emit("end");
              }),
                (this._parser.onerror = function (t) {
                  n.emit("error", t), (n._parser.error = null);
                }),
                (this._decoder = null),
                i.forEach(function (t) {
                  Object.defineProperty(n, "on" + t, {
                    get: function () {
                      return n._parser["on" + t];
                    },
                    set: function (e) {
                      if (!e)
                        return (
                          n.removeAllListeners(t), (n._parser["on" + t] = e), e
                        );
                      n.on(t, e);
                    },
                    enumerable: !0,
                    configurable: !1,
                  });
                });
            }
            (o.prototype = Object.create(e.prototype, {
              constructor: { value: o },
            })),
              (o.prototype.write = function (t) {
                if (
                  "function" == typeof Buffer &&
                  "function" == typeof Buffer.isBuffer &&
                  Buffer.isBuffer(t)
                ) {
                  if (!this._decoder) {
                    var e = r(553).s;
                    this._decoder = new e("utf8");
                  }
                  t = this._decoder.write(t);
                }
                return (
                  this._parser.write(t.toString()), this.emit("data", t), !0
                );
              }),
              (o.prototype.end = function (t) {
                return t && t.length && this.write(t), this._parser.end(), !0;
              }),
              (o.prototype.on = function (t, r) {
                var n = this;
                return (
                  n._parser["on" + t] ||
                    -1 === i.indexOf(t) ||
                    (n._parser["on" + t] = function () {
                      var e =
                        1 === arguments.length
                          ? [arguments[0]]
                          : Array.apply(null, arguments);
                      e.splice(0, 0, t), n.emit.apply(n, e);
                    }),
                  e.prototype.on.call(n, t, r)
                );
              });
            var a = "http://www.w3.org/XML/1998/namespace",
              c = "http://www.w3.org/2000/xmlns/",
              u = { xml: a, xmlns: c },
              l =
                /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
              h =
                /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
              p =
                /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
              d =
                /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
            function f(t) {
              return " " === t || "\n" === t || "\r" === t || "\t" === t;
            }
            function m(t) {
              return '"' === t || "'" === t;
            }
            function w(t) {
              return ">" === t || f(t);
            }
            function g(t, e) {
              return t.test(e);
            }
            function y(t, e) {
              return !g(t, e);
            }
            var b,
              v,
              _,
              x = 0;
            for (var E in ((t.STATE = {
              BEGIN: x++,
              BEGIN_WHITESPACE: x++,
              TEXT: x++,
              TEXT_ENTITY: x++,
              OPEN_WAKA: x++,
              SGML_DECL: x++,
              SGML_DECL_QUOTED: x++,
              DOCTYPE: x++,
              DOCTYPE_QUOTED: x++,
              DOCTYPE_DTD: x++,
              DOCTYPE_DTD_QUOTED: x++,
              COMMENT_STARTING: x++,
              COMMENT: x++,
              COMMENT_ENDING: x++,
              COMMENT_ENDED: x++,
              CDATA: x++,
              CDATA_ENDING: x++,
              CDATA_ENDING_2: x++,
              PROC_INST: x++,
              PROC_INST_BODY: x++,
              PROC_INST_ENDING: x++,
              OPEN_TAG: x++,
              OPEN_TAG_SLASH: x++,
              ATTRIB: x++,
              ATTRIB_NAME: x++,
              ATTRIB_NAME_SAW_WHITE: x++,
              ATTRIB_VALUE: x++,
              ATTRIB_VALUE_QUOTED: x++,
              ATTRIB_VALUE_CLOSED: x++,
              ATTRIB_VALUE_UNQUOTED: x++,
              ATTRIB_VALUE_ENTITY_Q: x++,
              ATTRIB_VALUE_ENTITY_U: x++,
              CLOSE_TAG: x++,
              CLOSE_TAG_SAW_WHITE: x++,
              SCRIPT: x++,
              SCRIPT_ENDING: x++,
            }),
            (t.XML_ENTITIES = {
              amp: "&",
              gt: ">",
              lt: "<",
              quot: '"',
              apos: "'",
            }),
            (t.ENTITIES = {
              amp: "&",
              gt: ">",
              lt: "<",
              quot: '"',
              apos: "'",
              AElig: 198,
              Aacute: 193,
              Acirc: 194,
              Agrave: 192,
              Aring: 197,
              Atilde: 195,
              Auml: 196,
              Ccedil: 199,
              ETH: 208,
              Eacute: 201,
              Ecirc: 202,
              Egrave: 200,
              Euml: 203,
              Iacute: 205,
              Icirc: 206,
              Igrave: 204,
              Iuml: 207,
              Ntilde: 209,
              Oacute: 211,
              Ocirc: 212,
              Ograve: 210,
              Oslash: 216,
              Otilde: 213,
              Ouml: 214,
              THORN: 222,
              Uacute: 218,
              Ucirc: 219,
              Ugrave: 217,
              Uuml: 220,
              Yacute: 221,
              aacute: 225,
              acirc: 226,
              aelig: 230,
              agrave: 224,
              aring: 229,
              atilde: 227,
              auml: 228,
              ccedil: 231,
              eacute: 233,
              ecirc: 234,
              egrave: 232,
              eth: 240,
              euml: 235,
              iacute: 237,
              icirc: 238,
              igrave: 236,
              iuml: 239,
              ntilde: 241,
              oacute: 243,
              ocirc: 244,
              ograve: 242,
              oslash: 248,
              otilde: 245,
              ouml: 246,
              szlig: 223,
              thorn: 254,
              uacute: 250,
              ucirc: 251,
              ugrave: 249,
              uuml: 252,
              yacute: 253,
              yuml: 255,
              copy: 169,
              reg: 174,
              nbsp: 160,
              iexcl: 161,
              cent: 162,
              pound: 163,
              curren: 164,
              yen: 165,
              brvbar: 166,
              sect: 167,
              uml: 168,
              ordf: 170,
              laquo: 171,
              not: 172,
              shy: 173,
              macr: 175,
              deg: 176,
              plusmn: 177,
              sup1: 185,
              sup2: 178,
              sup3: 179,
              acute: 180,
              micro: 181,
              para: 182,
              middot: 183,
              cedil: 184,
              ordm: 186,
              raquo: 187,
              frac14: 188,
              frac12: 189,
              frac34: 190,
              iquest: 191,
              times: 215,
              divide: 247,
              OElig: 338,
              oelig: 339,
              Scaron: 352,
              scaron: 353,
              Yuml: 376,
              fnof: 402,
              circ: 710,
              tilde: 732,
              Alpha: 913,
              Beta: 914,
              Gamma: 915,
              Delta: 916,
              Epsilon: 917,
              Zeta: 918,
              Eta: 919,
              Theta: 920,
              Iota: 921,
              Kappa: 922,
              Lambda: 923,
              Mu: 924,
              Nu: 925,
              Xi: 926,
              Omicron: 927,
              Pi: 928,
              Rho: 929,
              Sigma: 931,
              Tau: 932,
              Upsilon: 933,
              Phi: 934,
              Chi: 935,
              Psi: 936,
              Omega: 937,
              alpha: 945,
              beta: 946,
              gamma: 947,
              delta: 948,
              epsilon: 949,
              zeta: 950,
              eta: 951,
              theta: 952,
              iota: 953,
              kappa: 954,
              lambda: 955,
              mu: 956,
              nu: 957,
              xi: 958,
              omicron: 959,
              pi: 960,
              rho: 961,
              sigmaf: 962,
              sigma: 963,
              tau: 964,
              upsilon: 965,
              phi: 966,
              chi: 967,
              psi: 968,
              omega: 969,
              thetasym: 977,
              upsih: 978,
              piv: 982,
              ensp: 8194,
              emsp: 8195,
              thinsp: 8201,
              zwnj: 8204,
              zwj: 8205,
              lrm: 8206,
              rlm: 8207,
              ndash: 8211,
              mdash: 8212,
              lsquo: 8216,
              rsquo: 8217,
              sbquo: 8218,
              ldquo: 8220,
              rdquo: 8221,
              bdquo: 8222,
              dagger: 8224,
              Dagger: 8225,
              bull: 8226,
              hellip: 8230,
              permil: 8240,
              prime: 8242,
              Prime: 8243,
              lsaquo: 8249,
              rsaquo: 8250,
              oline: 8254,
              frasl: 8260,
              euro: 8364,
              image: 8465,
              weierp: 8472,
              real: 8476,
              trade: 8482,
              alefsym: 8501,
              larr: 8592,
              uarr: 8593,
              rarr: 8594,
              darr: 8595,
              harr: 8596,
              crarr: 8629,
              lArr: 8656,
              uArr: 8657,
              rArr: 8658,
              dArr: 8659,
              hArr: 8660,
              forall: 8704,
              part: 8706,
              exist: 8707,
              empty: 8709,
              nabla: 8711,
              isin: 8712,
              notin: 8713,
              ni: 8715,
              prod: 8719,
              sum: 8721,
              minus: 8722,
              lowast: 8727,
              radic: 8730,
              prop: 8733,
              infin: 8734,
              ang: 8736,
              and: 8743,
              or: 8744,
              cap: 8745,
              cup: 8746,
              int: 8747,
              there4: 8756,
              sim: 8764,
              cong: 8773,
              asymp: 8776,
              ne: 8800,
              equiv: 8801,
              le: 8804,
              ge: 8805,
              sub: 8834,
              sup: 8835,
              nsub: 8836,
              sube: 8838,
              supe: 8839,
              oplus: 8853,
              otimes: 8855,
              perp: 8869,
              sdot: 8901,
              lceil: 8968,
              rceil: 8969,
              lfloor: 8970,
              rfloor: 8971,
              lang: 9001,
              rang: 9002,
              loz: 9674,
              spades: 9824,
              clubs: 9827,
              hearts: 9829,
              diams: 9830,
            }),
            Object.keys(t.ENTITIES).forEach(function (e) {
              var r = t.ENTITIES[e],
                n = "number" == typeof r ? String.fromCharCode(r) : r;
              t.ENTITIES[e] = n;
            }),
            t.STATE))
              t.STATE[t.STATE[E]] = E;
            function T(t, e, r) {
              t[e] && t[e](r);
            }
            function A(t, e, r) {
              t.textNode && S(t), T(t, e, r);
            }
            function S(t) {
              (t.textNode = R(t.opt, t.textNode)),
                t.textNode && T(t, "ontext", t.textNode),
                (t.textNode = "");
            }
            function R(t, e) {
              return (
                t.trim && (e = e.trim()),
                t.normalize && (e = e.replace(/\s+/g, " ")),
                e
              );
            }
            function I(t, e) {
              return (
                S(t),
                t.trackPosition &&
                  (e +=
                    "\nLine: " +
                    t.line +
                    "\nColumn: " +
                    t.column +
                    "\nChar: " +
                    t.c),
                (e = new Error(e)),
                (t.error = e),
                T(t, "onerror", e),
                t
              );
            }
            function N(t) {
              return (
                t.sawRoot && !t.closedRoot && O(t, "Unclosed root tag"),
                t.state !== x.BEGIN &&
                  t.state !== x.BEGIN_WHITESPACE &&
                  t.state !== x.TEXT &&
                  I(t, "Unexpected end"),
                S(t),
                (t.c = ""),
                (t.closed = !0),
                T(t, "onend"),
                s.call(t, t.strict, t.opt),
                t
              );
            }
            function O(t, e) {
              if ("object" != typeof t || !(t instanceof s))
                throw new Error("bad call to strictFail");
              t.strict && I(t, e);
            }
            function C(t) {
              t.strict || (t.tagName = t.tagName[t.looseCase]());
              var e = t.tags[t.tags.length - 1] || t,
                r = (t.tag = { name: t.tagName, attributes: {} });
              t.opt.xmlns && (r.ns = e.ns),
                (t.attribList.length = 0),
                A(t, "onopentagstart", r);
            }
            function k(t, e) {
              var r = t.indexOf(":") < 0 ? ["", t] : t.split(":"),
                n = r[0],
                s = r[1];
              return (
                e && "xmlns" === t && ((n = "xmlns"), (s = "")),
                { prefix: n, local: s }
              );
            }
            function D(t) {
              if (
                (t.strict || (t.attribName = t.attribName[t.looseCase]()),
                -1 !== t.attribList.indexOf(t.attribName) ||
                  t.tag.attributes.hasOwnProperty(t.attribName))
              )
                t.attribName = t.attribValue = "";
              else {
                if (t.opt.xmlns) {
                  var e = k(t.attribName, !0),
                    r = e.prefix,
                    n = e.local;
                  if ("xmlns" === r)
                    if ("xml" === n && t.attribValue !== a)
                      O(
                        t,
                        "xml: prefix must be bound to " +
                          a +
                          "\nActual: " +
                          t.attribValue
                      );
                    else if ("xmlns" === n && t.attribValue !== c)
                      O(
                        t,
                        "xmlns: prefix must be bound to " +
                          c +
                          "\nActual: " +
                          t.attribValue
                      );
                    else {
                      var s = t.tag,
                        i = t.tags[t.tags.length - 1] || t;
                      s.ns === i.ns && (s.ns = Object.create(i.ns)),
                        (s.ns[n] = t.attribValue);
                    }
                  t.attribList.push([t.attribName, t.attribValue]);
                } else
                  (t.tag.attributes[t.attribName] = t.attribValue),
                    A(t, "onattribute", {
                      name: t.attribName,
                      value: t.attribValue,
                    });
                t.attribName = t.attribValue = "";
              }
            }
            function L(t, e) {
              if (t.opt.xmlns) {
                var r = t.tag,
                  n = k(t.tagName);
                (r.prefix = n.prefix),
                  (r.local = n.local),
                  (r.uri = r.ns[n.prefix] || ""),
                  r.prefix &&
                    !r.uri &&
                    (O(
                      t,
                      "Unbound namespace prefix: " + JSON.stringify(t.tagName)
                    ),
                    (r.uri = n.prefix));
                var s = t.tags[t.tags.length - 1] || t;
                r.ns &&
                  s.ns !== r.ns &&
                  Object.keys(r.ns).forEach(function (e) {
                    A(t, "onopennamespace", { prefix: e, uri: r.ns[e] });
                  });
                for (var i = 0, o = t.attribList.length; i < o; i++) {
                  var a = t.attribList[i],
                    c = a[0],
                    u = a[1],
                    l = k(c, !0),
                    h = l.prefix,
                    p = l.local,
                    d = "" === h ? "" : r.ns[h] || "",
                    f = { name: c, value: u, prefix: h, local: p, uri: d };
                  h &&
                    "xmlns" !== h &&
                    !d &&
                    (O(t, "Unbound namespace prefix: " + JSON.stringify(h)),
                    (f.uri = h)),
                    (t.tag.attributes[c] = f),
                    A(t, "onattribute", f);
                }
                t.attribList.length = 0;
              }
              (t.tag.isSelfClosing = !!e),
                (t.sawRoot = !0),
                t.tags.push(t.tag),
                A(t, "onopentag", t.tag),
                e ||
                  (t.noscript || "script" !== t.tagName.toLowerCase()
                    ? (t.state = x.TEXT)
                    : (t.state = x.SCRIPT),
                  (t.tag = null),
                  (t.tagName = "")),
                (t.attribName = t.attribValue = ""),
                (t.attribList.length = 0);
            }
            function P(t) {
              if (!t.tagName)
                return (
                  O(t, "Weird empty close tag."),
                  (t.textNode += "</>"),
                  void (t.state = x.TEXT)
                );
              if (t.script) {
                if ("script" !== t.tagName)
                  return (
                    (t.script += "</" + t.tagName + ">"),
                    (t.tagName = ""),
                    void (t.state = x.SCRIPT)
                  );
                A(t, "onscript", t.script), (t.script = "");
              }
              var e = t.tags.length,
                r = t.tagName;
              t.strict || (r = r[t.looseCase]());
              for (var n = r; e-- && t.tags[e].name !== n; )
                O(t, "Unexpected close tag");
              if (e < 0)
                return (
                  O(t, "Unmatched closing tag: " + t.tagName),
                  (t.textNode += "</" + t.tagName + ">"),
                  void (t.state = x.TEXT)
                );
              t.tagName = r;
              for (var s = t.tags.length; s-- > e; ) {
                var i = (t.tag = t.tags.pop());
                (t.tagName = t.tag.name), A(t, "onclosetag", t.tagName);
                var o = {};
                for (var a in i.ns) o[a] = i.ns[a];
                var c = t.tags[t.tags.length - 1] || t;
                t.opt.xmlns &&
                  i.ns !== c.ns &&
                  Object.keys(i.ns).forEach(function (e) {
                    var r = i.ns[e];
                    A(t, "onclosenamespace", { prefix: e, uri: r });
                  });
              }
              0 === e && (t.closedRoot = !0),
                (t.tagName = t.attribValue = t.attribName = ""),
                (t.attribList.length = 0),
                (t.state = x.TEXT);
            }
            function F(t) {
              var e,
                r = t.entity,
                n = r.toLowerCase(),
                s = "";
              return t.ENTITIES[r]
                ? t.ENTITIES[r]
                : t.ENTITIES[n]
                ? t.ENTITIES[n]
                : ("#" === (r = n).charAt(0) &&
                    ("x" === r.charAt(1)
                      ? ((r = r.slice(2)),
                        (s = (e = parseInt(r, 16)).toString(16)))
                      : ((r = r.slice(1)),
                        (s = (e = parseInt(r, 10)).toString(10)))),
                  (r = r.replace(/^0+/, "")),
                  isNaN(e) || s.toLowerCase() !== r
                    ? (O(t, "Invalid character entity"), "&" + t.entity + ";")
                    : String.fromCodePoint(e));
            }
            function B(t, e) {
              "<" === e
                ? ((t.state = x.OPEN_WAKA), (t.startTagPosition = t.position))
                : f(e) ||
                  (O(t, "Non-whitespace before first tag."),
                  (t.textNode = e),
                  (t.state = x.TEXT));
            }
            function M(t, e) {
              var r = "";
              return e < t.length && (r = t.charAt(e)), r;
            }
            (x = t.STATE),
              String.fromCodePoint ||
                ((b = String.fromCharCode),
                (v = Math.floor),
                (_ = function () {
                  var t,
                    e,
                    r = 16384,
                    n = [],
                    s = -1,
                    i = arguments.length;
                  if (!i) return "";
                  for (var o = ""; ++s < i; ) {
                    var a = Number(arguments[s]);
                    if (!isFinite(a) || a < 0 || a > 1114111 || v(a) !== a)
                      throw RangeError("Invalid code point: " + a);
                    a <= 65535
                      ? n.push(a)
                      : ((t = 55296 + ((a -= 65536) >> 10)),
                        (e = (a % 1024) + 56320),
                        n.push(t, e)),
                      (s + 1 === i || n.length > r) &&
                        ((o += b.apply(null, n)), (n.length = 0));
                  }
                  return o;
                }),
                Object.defineProperty
                  ? Object.defineProperty(String, "fromCodePoint", {
                      value: _,
                      configurable: !0,
                      writable: !0,
                    })
                  : (String.fromCodePoint = _));
          })(e);
        },
        830: (t, e, r) => {
          t.exports = s;
          var n = r(187).EventEmitter;
          function s() {
            n.call(this);
          }
          r(717)(s, n),
            (s.Readable = r(577)),
            (s.Writable = r(323)),
            (s.Duplex = r(656)),
            (s.Transform = r(473)),
            (s.PassThrough = r(366)),
            (s.finished = r(86)),
            (s.pipeline = r(472)),
            (s.Stream = s),
            (s.prototype.pipe = function (t, e) {
              var r = this;
              function s(e) {
                t.writable && !1 === t.write(e) && r.pause && r.pause();
              }
              function i() {
                r.readable && r.resume && r.resume();
              }
              r.on("data", s),
                t.on("drain", i),
                t._isStdio ||
                  (e && !1 === e.end) ||
                  (r.on("end", a), r.on("close", c));
              var o = !1;
              function a() {
                o || ((o = !0), t.end());
              }
              function c() {
                o || ((o = !0), "function" == typeof t.destroy && t.destroy());
              }
              function u(t) {
                if ((l(), 0 === n.listenerCount(this, "error"))) throw t;
              }
              function l() {
                r.removeListener("data", s),
                  t.removeListener("drain", i),
                  r.removeListener("end", a),
                  r.removeListener("close", c),
                  r.removeListener("error", u),
                  t.removeListener("error", u),
                  r.removeListener("end", l),
                  r.removeListener("close", l),
                  t.removeListener("close", l);
              }
              return (
                r.on("error", u),
                t.on("error", u),
                r.on("end", l),
                r.on("close", l),
                t.on("close", l),
                t.emit("pipe", r),
                t
              );
            });
        },
        106: (t) => {
          "use strict";
          var e = {};
          function r(t, r, n) {
            n || (n = Error);
            var s = (function (t) {
              var e, n;
              function s(e, n, s) {
                return (
                  t.call(
                    this,
                    (function (t, e, n) {
                      return "string" == typeof r ? r : r(t, e, n);
                    })(e, n, s)
                  ) || this
                );
              }
              return (
                (n = t),
                ((e = s).prototype = Object.create(n.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = n),
                s
              );
            })(n);
            (s.prototype.name = n.name), (s.prototype.code = t), (e[t] = s);
          }
          function n(t, e) {
            if (Array.isArray(t)) {
              var r = t.length;
              return (
                (t = t.map(function (t) {
                  return String(t);
                })),
                r > 2
                  ? "one of "
                      .concat(e, " ")
                      .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                  : 2 === r
                  ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                  : "of ".concat(e, " ").concat(t[0])
              );
            }
            return "of ".concat(e, " ").concat(String(t));
          }
          r(
            "ERR_INVALID_OPT_VALUE",
            function (t, e) {
              return 'The value "' + e + '" is invalid for option "' + t + '"';
            },
            TypeError
          ),
            r(
              "ERR_INVALID_ARG_TYPE",
              function (t, e, r) {
                var s, i, o, a, c;
                if (
                  ("string" == typeof e &&
                  ((i = "not "), e.substr(0, i.length) === i)
                    ? ((s = "must not be"), (e = e.replace(/^not /, "")))
                    : (s = "must be"),
                  (function (t, e, r) {
                    return (
                      (void 0 === r || r > t.length) && (r = t.length),
                      t.substring(r - e.length, r) === e
                    );
                  })(t, " argument"))
                )
                  o = "The ".concat(t, " ").concat(s, " ").concat(n(e, "type"));
                else {
                  var u =
                    ("number" != typeof c && (c = 0),
                    c + ".".length > (a = t).length || -1 === a.indexOf(".", c)
                      ? "argument"
                      : "property");
                  o = 'The "'
                    .concat(t, '" ')
                    .concat(u, " ")
                    .concat(s, " ")
                    .concat(n(e, "type"));
                }
                return o + ". Received type ".concat(typeof r);
              },
              TypeError
            ),
            r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
            r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
              return "The " + t + " method is not implemented";
            }),
            r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
            r("ERR_STREAM_DESTROYED", function (t) {
              return "Cannot call " + t + " after a stream was destroyed";
            }),
            r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
            r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
            r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
            r(
              "ERR_STREAM_NULL_VALUES",
              "May not write null values to stream",
              TypeError
            ),
            r(
              "ERR_UNKNOWN_ENCODING",
              function (t) {
                return "Unknown encoding: " + t;
              },
              TypeError
            ),
            r(
              "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
              "stream.unshift() after end event"
            ),
            (t.exports.q = e);
        },
        656: (t, e, r) => {
          "use strict";
          var n = r(155),
            s =
              Object.keys ||
              function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return e;
              };
          t.exports = l;
          var i = r(577),
            o = r(323);
          r(717)(l, i);
          for (var a = s(o.prototype), c = 0; c < a.length; c++) {
            var u = a[c];
            l.prototype[u] || (l.prototype[u] = o.prototype[u]);
          }
          function l(t) {
            if (!(this instanceof l)) return new l(t);
            i.call(this, t),
              o.call(this, t),
              (this.allowHalfOpen = !0),
              t &&
                (!1 === t.readable && (this.readable = !1),
                !1 === t.writable && (this.writable = !1),
                !1 === t.allowHalfOpen &&
                  ((this.allowHalfOpen = !1), this.once("end", h)));
          }
          function h() {
            this._writableState.ended || n.nextTick(p, this);
          }
          function p(t) {
            t.end();
          }
          Object.defineProperty(l.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
            Object.defineProperty(l.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(l.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(l.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  this._readableState.destroyed &&
                  this._writableState.destroyed
                );
              },
              set: function (t) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = t),
                  (this._writableState.destroyed = t));
              },
            });
        },
        366: (t, e, r) => {
          "use strict";
          t.exports = s;
          var n = r(473);
          function s(t) {
            if (!(this instanceof s)) return new s(t);
            n.call(this, t);
          }
          r(717)(s, n),
            (s.prototype._transform = function (t, e, r) {
              r(null, t);
            });
        },
        577: (t, e, r) => {
          "use strict";
          var n,
            s = r(155);
          (t.exports = A), (A.ReadableState = T), r(187).EventEmitter;
          var i,
            o = function (t, e) {
              return t.listeners(e).length;
            },
            a = r(194),
            c = r(764).Buffer,
            u = r.g.Uint8Array || function () {},
            l = r(964);
          i = l && l.debuglog ? l.debuglog("stream") : function () {};
          var h,
            p,
            d,
            f = r(686),
            m = r(29),
            w = r(94).getHighWaterMark,
            g = r(106).q,
            y = g.ERR_INVALID_ARG_TYPE,
            b = g.ERR_STREAM_PUSH_AFTER_EOF,
            v = g.ERR_METHOD_NOT_IMPLEMENTED,
            _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
          r(717)(A, a);
          var x = m.errorOrDestroy,
            E = ["error", "close", "destroy", "pause", "resume"];
          function T(t, e, s) {
            (n = n || r(656)),
              (t = t || {}),
              "boolean" != typeof s && (s = e instanceof n),
              (this.objectMode = !!t.objectMode),
              s &&
                (this.objectMode = this.objectMode || !!t.readableObjectMode),
              (this.highWaterMark = w(this, t, "readableHighWaterMark", s)),
              (this.buffer = new f()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.paused = !0),
              (this.emitClose = !1 !== t.emitClose),
              (this.autoDestroy = !!t.autoDestroy),
              (this.destroyed = !1),
              (this.defaultEncoding = t.defaultEncoding || "utf8"),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              t.encoding &&
                (h || (h = r(553).s),
                (this.decoder = new h(t.encoding)),
                (this.encoding = t.encoding));
          }
          function A(t) {
            if (((n = n || r(656)), !(this instanceof A))) return new A(t);
            var e = this instanceof n;
            (this._readableState = new T(t, this, e)),
              (this.readable = !0),
              t &&
                ("function" == typeof t.read && (this._read = t.read),
                "function" == typeof t.destroy && (this._destroy = t.destroy)),
              a.call(this);
          }
          function S(t, e, r, n, s) {
            i("readableAddChunk", e);
            var o,
              a = t._readableState;
            if (null === e)
              (a.reading = !1),
                (function (t, e) {
                  if ((i("onEofChunk"), !e.ended)) {
                    if (e.decoder) {
                      var r = e.decoder.end();
                      r &&
                        r.length &&
                        (e.buffer.push(r),
                        (e.length += e.objectMode ? 1 : r.length));
                    }
                    (e.ended = !0),
                      e.sync
                        ? O(t)
                        : ((e.needReadable = !1),
                          e.emittedReadable ||
                            ((e.emittedReadable = !0), C(t)));
                  }
                })(t, a);
            else if (
              (s ||
                (o = (function (t, e) {
                  var r, n;
                  return (
                    (n = e),
                    c.isBuffer(n) ||
                      n instanceof u ||
                      "string" == typeof e ||
                      void 0 === e ||
                      t.objectMode ||
                      (r = new y(
                        "chunk",
                        ["string", "Buffer", "Uint8Array"],
                        e
                      )),
                    r
                  );
                })(a, e)),
              o)
            )
              x(t, o);
            else if (a.objectMode || (e && e.length > 0))
              if (
                ("string" == typeof e ||
                  a.objectMode ||
                  Object.getPrototypeOf(e) === c.prototype ||
                  (e = (function (t) {
                    return c.from(t);
                  })(e)),
                n)
              )
                a.endEmitted ? x(t, new _()) : R(t, a, e, !0);
              else if (a.ended) x(t, new b());
              else {
                if (a.destroyed) return !1;
                (a.reading = !1),
                  a.decoder && !r
                    ? ((e = a.decoder.write(e)),
                      a.objectMode || 0 !== e.length ? R(t, a, e, !1) : k(t, a))
                    : R(t, a, e, !1);
              }
            else n || ((a.reading = !1), k(t, a));
            return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
          }
          function R(t, e, r, n) {
            e.flowing && 0 === e.length && !e.sync
              ? ((e.awaitDrain = 0), t.emit("data", r))
              : ((e.length += e.objectMode ? 1 : r.length),
                n ? e.buffer.unshift(r) : e.buffer.push(r),
                e.needReadable && O(t)),
              k(t, e);
          }
          Object.defineProperty(A.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              );
            },
            set: function (t) {
              this._readableState && (this._readableState.destroyed = t);
            },
          }),
            (A.prototype.destroy = m.destroy),
            (A.prototype._undestroy = m.undestroy),
            (A.prototype._destroy = function (t, e) {
              e(t);
            }),
            (A.prototype.push = function (t, e) {
              var r,
                n = this._readableState;
              return (
                n.objectMode
                  ? (r = !0)
                  : "string" == typeof t &&
                    ((e = e || n.defaultEncoding) !== n.encoding &&
                      ((t = c.from(t, e)), (e = "")),
                    (r = !0)),
                S(this, t, e, !1, r)
              );
            }),
            (A.prototype.unshift = function (t) {
              return S(this, t, null, !0, !1);
            }),
            (A.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (A.prototype.setEncoding = function (t) {
              h || (h = r(553).s);
              var e = new h(t);
              (this._readableState.decoder = e),
                (this._readableState.encoding =
                  this._readableState.decoder.encoding);
              for (
                var n = this._readableState.buffer.head, s = "";
                null !== n;

              )
                (s += e.write(n.data)), (n = n.next);
              return (
                this._readableState.buffer.clear(),
                "" !== s && this._readableState.buffer.push(s),
                (this._readableState.length = s.length),
                this
              );
            });
          var I = 1073741824;
          function N(t, e) {
            return t <= 0 || (0 === e.length && e.ended)
              ? 0
              : e.objectMode
              ? 1
              : t != t
              ? e.flowing && e.length
                ? e.buffer.head.data.length
                : e.length
              : (t > e.highWaterMark &&
                  (e.highWaterMark = (function (t) {
                    return (
                      t >= I
                        ? (t = I)
                        : (t--,
                          (t |= t >>> 1),
                          (t |= t >>> 2),
                          (t |= t >>> 4),
                          (t |= t >>> 8),
                          (t |= t >>> 16),
                          t++),
                      t
                    );
                  })(t)),
                t <= e.length
                  ? t
                  : e.ended
                  ? e.length
                  : ((e.needReadable = !0), 0));
          }
          function O(t) {
            var e = t._readableState;
            i("emitReadable", e.needReadable, e.emittedReadable),
              (e.needReadable = !1),
              e.emittedReadable ||
                (i("emitReadable", e.flowing),
                (e.emittedReadable = !0),
                s.nextTick(C, t));
          }
          function C(t) {
            var e = t._readableState;
            i("emitReadable_", e.destroyed, e.length, e.ended),
              e.destroyed ||
                (!e.length && !e.ended) ||
                (t.emit("readable"), (e.emittedReadable = !1)),
              (e.needReadable =
                !e.flowing && !e.ended && e.length <= e.highWaterMark),
              B(t);
          }
          function k(t, e) {
            e.readingMore || ((e.readingMore = !0), s.nextTick(D, t, e));
          }
          function D(t, e) {
            for (
              ;
              !e.reading &&
              !e.ended &&
              (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

            ) {
              var r = e.length;
              if ((i("maybeReadMore read 0"), t.read(0), r === e.length)) break;
            }
            e.readingMore = !1;
          }
          function L(t) {
            var e = t._readableState;
            (e.readableListening = t.listenerCount("readable") > 0),
              e.resumeScheduled && !e.paused
                ? (e.flowing = !0)
                : t.listenerCount("data") > 0 && t.resume();
          }
          function P(t) {
            i("readable nexttick read 0"), t.read(0);
          }
          function F(t, e) {
            i("resume", e.reading),
              e.reading || t.read(0),
              (e.resumeScheduled = !1),
              t.emit("resume"),
              B(t),
              e.flowing && !e.reading && t.read(0);
          }
          function B(t) {
            var e = t._readableState;
            for (i("flow", e.flowing); e.flowing && null !== t.read(); );
          }
          function M(t, e) {
            return 0 === e.length
              ? null
              : (e.objectMode
                  ? (r = e.buffer.shift())
                  : !t || t >= e.length
                  ? ((r = e.decoder
                      ? e.buffer.join("")
                      : 1 === e.buffer.length
                      ? e.buffer.first()
                      : e.buffer.concat(e.length)),
                    e.buffer.clear())
                  : (r = e.buffer.consume(t, e.decoder)),
                r);
            var r;
          }
          function U(t) {
            var e = t._readableState;
            i("endReadable", e.endEmitted),
              e.endEmitted || ((e.ended = !0), s.nextTick(z, e, t));
          }
          function z(t, e) {
            if (
              (i("endReadableNT", t.endEmitted, t.length),
              !t.endEmitted &&
                0 === t.length &&
                ((t.endEmitted = !0),
                (e.readable = !1),
                e.emit("end"),
                t.autoDestroy))
            ) {
              var r = e._writableState;
              (!r || (r.autoDestroy && r.finished)) && e.destroy();
            }
          }
          function H(t, e) {
            for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
            return -1;
          }
          (A.prototype.read = function (t) {
            i("read", t), (t = parseInt(t, 10));
            var e = this._readableState,
              r = t;
            if (
              (0 !== t && (e.emittedReadable = !1),
              0 === t &&
                e.needReadable &&
                ((0 !== e.highWaterMark
                  ? e.length >= e.highWaterMark
                  : e.length > 0) ||
                  e.ended))
            )
              return (
                i("read: emitReadable", e.length, e.ended),
                0 === e.length && e.ended ? U(this) : O(this),
                null
              );
            if (0 === (t = N(t, e)) && e.ended)
              return 0 === e.length && U(this), null;
            var n,
              s = e.needReadable;
            return (
              i("need readable", s),
              (0 === e.length || e.length - t < e.highWaterMark) &&
                i("length less than watermark", (s = !0)),
              e.ended || e.reading
                ? i("reading or ended", (s = !1))
                : s &&
                  (i("do read"),
                  (e.reading = !0),
                  (e.sync = !0),
                  0 === e.length && (e.needReadable = !0),
                  this._read(e.highWaterMark),
                  (e.sync = !1),
                  e.reading || (t = N(r, e))),
              null === (n = t > 0 ? M(t, e) : null)
                ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
                : ((e.length -= t), (e.awaitDrain = 0)),
              0 === e.length &&
                (e.ended || (e.needReadable = !0),
                r !== t && e.ended && U(this)),
              null !== n && this.emit("data", n),
              n
            );
          }),
            (A.prototype._read = function (t) {
              x(this, new v("_read()"));
            }),
            (A.prototype.pipe = function (t, e) {
              var r = this,
                n = this._readableState;
              switch (n.pipesCount) {
                case 0:
                  n.pipes = t;
                  break;
                case 1:
                  n.pipes = [n.pipes, t];
                  break;
                default:
                  n.pipes.push(t);
              }
              (n.pipesCount += 1), i("pipe count=%d opts=%j", n.pipesCount, e);
              var a =
                (e && !1 === e.end) || t === s.stdout || t === s.stderr ? m : c;
              function c() {
                i("onend"), t.end();
              }
              n.endEmitted ? s.nextTick(a) : r.once("end", a),
                t.on("unpipe", function e(s, o) {
                  i("onunpipe"),
                    s === r &&
                      o &&
                      !1 === o.hasUnpiped &&
                      ((o.hasUnpiped = !0),
                      i("cleanup"),
                      t.removeListener("close", d),
                      t.removeListener("finish", f),
                      t.removeListener("drain", u),
                      t.removeListener("error", p),
                      t.removeListener("unpipe", e),
                      r.removeListener("end", c),
                      r.removeListener("end", m),
                      r.removeListener("data", h),
                      (l = !0),
                      !n.awaitDrain ||
                        (t._writableState && !t._writableState.needDrain) ||
                        u());
                });
              var u = (function (t) {
                return function () {
                  var e = t._readableState;
                  i("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain &&
                      o(t, "data") &&
                      ((e.flowing = !0), B(t));
                };
              })(r);
              t.on("drain", u);
              var l = !1;
              function h(e) {
                i("ondata");
                var s = t.write(e);
                i("dest.write", s),
                  !1 === s &&
                    (((1 === n.pipesCount && n.pipes === t) ||
                      (n.pipesCount > 1 && -1 !== H(n.pipes, t))) &&
                      !l &&
                      (i("false write response, pause", n.awaitDrain),
                      n.awaitDrain++),
                    r.pause());
              }
              function p(e) {
                i("onerror", e),
                  m(),
                  t.removeListener("error", p),
                  0 === o(t, "error") && x(t, e);
              }
              function d() {
                t.removeListener("finish", f), m();
              }
              function f() {
                i("onfinish"), t.removeListener("close", d), m();
              }
              function m() {
                i("unpipe"), r.unpipe(t);
              }
              return (
                r.on("data", h),
                (function (t, e, r) {
                  if ("function" == typeof t.prependListener)
                    return t.prependListener(e, r);
                  t._events && t._events.error
                    ? Array.isArray(t._events.error)
                      ? t._events.error.unshift(r)
                      : (t._events.error = [r, t._events.error])
                    : t.on(e, r);
                })(t, "error", p),
                t.once("close", d),
                t.once("finish", f),
                t.emit("pipe", r),
                n.flowing || (i("pipe resume"), r.resume()),
                t
              );
            }),
            (A.prototype.unpipe = function (t) {
              var e = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === e.pipesCount) return this;
              if (1 === e.pipesCount)
                return (
                  (t && t !== e.pipes) ||
                    (t || (t = e.pipes),
                    (e.pipes = null),
                    (e.pipesCount = 0),
                    (e.flowing = !1),
                    t && t.emit("unpipe", this, r)),
                  this
                );
              if (!t) {
                var n = e.pipes,
                  s = e.pipesCount;
                (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                for (var i = 0; i < s; i++)
                  n[i].emit("unpipe", this, { hasUnpiped: !1 });
                return this;
              }
              var o = H(e.pipes, t);
              return (
                -1 === o ||
                  (e.pipes.splice(o, 1),
                  (e.pipesCount -= 1),
                  1 === e.pipesCount && (e.pipes = e.pipes[0]),
                  t.emit("unpipe", this, r)),
                this
              );
            }),
            (A.prototype.on = function (t, e) {
              var r = a.prototype.on.call(this, t, e),
                n = this._readableState;
              return (
                "data" === t
                  ? ((n.readableListening = this.listenerCount("readable") > 0),
                    !1 !== n.flowing && this.resume())
                  : "readable" === t &&
                    (n.endEmitted ||
                      n.readableListening ||
                      ((n.readableListening = n.needReadable = !0),
                      (n.flowing = !1),
                      (n.emittedReadable = !1),
                      i("on readable", n.length, n.reading),
                      n.length ? O(this) : n.reading || s.nextTick(P, this))),
                r
              );
            }),
            (A.prototype.addListener = A.prototype.on),
            (A.prototype.removeListener = function (t, e) {
              var r = a.prototype.removeListener.call(this, t, e);
              return "readable" === t && s.nextTick(L, this), r;
            }),
            (A.prototype.removeAllListeners = function (t) {
              var e = a.prototype.removeAllListeners.apply(this, arguments);
              return (
                ("readable" !== t && void 0 !== t) || s.nextTick(L, this), e
              );
            }),
            (A.prototype.resume = function () {
              var t = this._readableState;
              return (
                t.flowing ||
                  (i("resume"),
                  (t.flowing = !t.readableListening),
                  (function (t, e) {
                    e.resumeScheduled ||
                      ((e.resumeScheduled = !0), s.nextTick(F, t, e));
                  })(this, t)),
                (t.paused = !1),
                this
              );
            }),
            (A.prototype.pause = function () {
              return (
                i("call pause flowing=%j", this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (i("pause"),
                  (this._readableState.flowing = !1),
                  this.emit("pause")),
                (this._readableState.paused = !0),
                this
              );
            }),
            (A.prototype.wrap = function (t) {
              var e = this,
                r = this._readableState,
                n = !1;
              for (var s in (t.on("end", function () {
                if ((i("wrapped end"), r.decoder && !r.ended)) {
                  var t = r.decoder.end();
                  t && t.length && e.push(t);
                }
                e.push(null);
              }),
              t.on("data", function (s) {
                i("wrapped data"),
                  r.decoder && (s = r.decoder.write(s)),
                  (r.objectMode && null == s) ||
                    ((r.objectMode || (s && s.length)) &&
                      (e.push(s) || ((n = !0), t.pause())));
              }),
              t))
                void 0 === this[s] &&
                  "function" == typeof t[s] &&
                  (this[s] = (function (e) {
                    return function () {
                      return t[e].apply(t, arguments);
                    };
                  })(s));
              for (var o = 0; o < E.length; o++)
                t.on(E[o], this.emit.bind(this, E[o]));
              return (
                (this._read = function (e) {
                  i("wrapped _read", e), n && ((n = !1), t.resume());
                }),
                this
              );
            }),
            "function" == typeof Symbol &&
              (A.prototype[Symbol.asyncIterator] = function () {
                return void 0 === p && (p = r(828)), p(this);
              }),
            Object.defineProperty(A.prototype, "readableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark;
              },
            }),
            Object.defineProperty(A.prototype, "readableBuffer", {
              enumerable: !1,
              get: function () {
                return this._readableState && this._readableState.buffer;
              },
            }),
            Object.defineProperty(A.prototype, "readableFlowing", {
              enumerable: !1,
              get: function () {
                return this._readableState.flowing;
              },
              set: function (t) {
                this._readableState && (this._readableState.flowing = t);
              },
            }),
            (A._fromList = M),
            Object.defineProperty(A.prototype, "readableLength", {
              enumerable: !1,
              get: function () {
                return this._readableState.length;
              },
            }),
            "function" == typeof Symbol &&
              (A.from = function (t, e) {
                return void 0 === d && (d = r(265)), d(A, t, e);
              });
        },
        473: (t, e, r) => {
          "use strict";
          t.exports = l;
          var n = r(106).q,
            s = n.ERR_METHOD_NOT_IMPLEMENTED,
            i = n.ERR_MULTIPLE_CALLBACK,
            o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            a = n.ERR_TRANSFORM_WITH_LENGTH_0,
            c = r(656);
          function u(t, e) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n) return this.emit("error", new i());
            (r.writechunk = null),
              (r.writecb = null),
              null != e && this.push(e),
              n(t);
            var s = this._readableState;
            (s.reading = !1),
              (s.needReadable || s.length < s.highWaterMark) &&
                this._read(s.highWaterMark);
          }
          function l(t) {
            if (!(this instanceof l)) return new l(t);
            c.call(this, t),
              (this._transformState = {
                afterTransform: u.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null,
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              t &&
                ("function" == typeof t.transform &&
                  (this._transform = t.transform),
                "function" == typeof t.flush && (this._flush = t.flush)),
              this.on("prefinish", h);
          }
          function h() {
            var t = this;
            "function" != typeof this._flush || this._readableState.destroyed
              ? p(this, null, null)
              : this._flush(function (e, r) {
                  p(t, e, r);
                });
          }
          function p(t, e, r) {
            if (e) return t.emit("error", e);
            if ((null != r && t.push(r), t._writableState.length))
              throw new a();
            if (t._transformState.transforming) throw new o();
            return t.push(null);
          }
          r(717)(l, c),
            (l.prototype.push = function (t, e) {
              return (
                (this._transformState.needTransform = !1),
                c.prototype.push.call(this, t, e)
              );
            }),
            (l.prototype._transform = function (t, e, r) {
              r(new s("_transform()"));
            }),
            (l.prototype._write = function (t, e, r) {
              var n = this._transformState;
              if (
                ((n.writecb = r),
                (n.writechunk = t),
                (n.writeencoding = e),
                !n.transforming)
              ) {
                var s = this._readableState;
                (n.needTransform ||
                  s.needReadable ||
                  s.length < s.highWaterMark) &&
                  this._read(s.highWaterMark);
              }
            }),
            (l.prototype._read = function (t) {
              var e = this._transformState;
              null === e.writechunk || e.transforming
                ? (e.needTransform = !0)
                : ((e.transforming = !0),
                  this._transform(
                    e.writechunk,
                    e.writeencoding,
                    e.afterTransform
                  ));
            }),
            (l.prototype._destroy = function (t, e) {
              c.prototype._destroy.call(this, t, function (t) {
                e(t);
              });
            });
        },
        323: (t, e, r) => {
          "use strict";
          var n,
            s = r(155);
          function i(t) {
            var e = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function (t, e, r) {
                  var n = t.entry;
                  for (t.entry = null; n; ) {
                    var s = n.callback;
                    e.pendingcb--, s(undefined), (n = n.next);
                  }
                  e.corkedRequestsFree.next = t;
                })(e, t);
              });
          }
          (t.exports = A), (A.WritableState = T);
          var o,
            a = { deprecate: r(927) },
            c = r(194),
            u = r(764).Buffer,
            l = r.g.Uint8Array || function () {},
            h = r(29),
            p = r(94).getHighWaterMark,
            d = r(106).q,
            f = d.ERR_INVALID_ARG_TYPE,
            m = d.ERR_METHOD_NOT_IMPLEMENTED,
            w = d.ERR_MULTIPLE_CALLBACK,
            g = d.ERR_STREAM_CANNOT_PIPE,
            y = d.ERR_STREAM_DESTROYED,
            b = d.ERR_STREAM_NULL_VALUES,
            v = d.ERR_STREAM_WRITE_AFTER_END,
            _ = d.ERR_UNKNOWN_ENCODING,
            x = h.errorOrDestroy;
          function E() {}
          function T(t, e, o) {
            (n = n || r(656)),
              (t = t || {}),
              "boolean" != typeof o && (o = e instanceof n),
              (this.objectMode = !!t.objectMode),
              o &&
                (this.objectMode = this.objectMode || !!t.writableObjectMode),
              (this.highWaterMark = p(this, t, "writableHighWaterMark", o)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var a = !1 === t.decodeStrings;
            (this.decodeStrings = !a),
              (this.defaultEncoding = t.defaultEncoding || "utf8"),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (t) {
                !(function (t, e) {
                  var r = t._writableState,
                    n = r.sync,
                    i = r.writecb;
                  if ("function" != typeof i) throw new w();
                  if (
                    ((function (t) {
                      (t.writing = !1),
                        (t.writecb = null),
                        (t.length -= t.writelen),
                        (t.writelen = 0);
                    })(r),
                    e)
                  )
                    !(function (t, e, r, n, i) {
                      --e.pendingcb,
                        r
                          ? (s.nextTick(i, n),
                            s.nextTick(C, t, e),
                            (t._writableState.errorEmitted = !0),
                            x(t, n))
                          : (i(n),
                            (t._writableState.errorEmitted = !0),
                            x(t, n),
                            C(t, e));
                    })(t, r, n, e, i);
                  else {
                    var o = N(r) || t.destroyed;
                    o ||
                      r.corked ||
                      r.bufferProcessing ||
                      !r.bufferedRequest ||
                      I(t, r),
                      n ? s.nextTick(R, t, r, o, i) : R(t, r, o, i);
                  }
                })(e, t);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.emitClose = !1 !== t.emitClose),
              (this.autoDestroy = !!t.autoDestroy),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new i(this));
          }
          function A(t) {
            var e = this instanceof (n = n || r(656));
            if (!e && !o.call(A, this)) return new A(t);
            (this._writableState = new T(t, this, e)),
              (this.writable = !0),
              t &&
                ("function" == typeof t.write && (this._write = t.write),
                "function" == typeof t.writev && (this._writev = t.writev),
                "function" == typeof t.destroy && (this._destroy = t.destroy),
                "function" == typeof t.final && (this._final = t.final)),
              c.call(this);
          }
          function S(t, e, r, n, s, i, o) {
            (e.writelen = n),
              (e.writecb = o),
              (e.writing = !0),
              (e.sync = !0),
              e.destroyed
                ? e.onwrite(new y("write"))
                : r
                ? t._writev(s, e.onwrite)
                : t._write(s, i, e.onwrite),
              (e.sync = !1);
          }
          function R(t, e, r, n) {
            r ||
              (function (t, e) {
                0 === e.length &&
                  e.needDrain &&
                  ((e.needDrain = !1), t.emit("drain"));
              })(t, e),
              e.pendingcb--,
              n(),
              C(t, e);
          }
          function I(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
              var n = e.bufferedRequestCount,
                s = new Array(n),
                o = e.corkedRequestsFree;
              o.entry = r;
              for (var a = 0, c = !0; r; )
                (s[a] = r), r.isBuf || (c = !1), (r = r.next), (a += 1);
              (s.allBuffers = c),
                S(t, e, !0, e.length, s, "", o.finish),
                e.pendingcb++,
                (e.lastBufferedRequest = null),
                o.next
                  ? ((e.corkedRequestsFree = o.next), (o.next = null))
                  : (e.corkedRequestsFree = new i(e)),
                (e.bufferedRequestCount = 0);
            } else {
              for (; r; ) {
                var u = r.chunk,
                  l = r.encoding,
                  h = r.callback;
                if (
                  (S(t, e, !1, e.objectMode ? 1 : u.length, u, l, h),
                  (r = r.next),
                  e.bufferedRequestCount--,
                  e.writing)
                )
                  break;
              }
              null === r && (e.lastBufferedRequest = null);
            }
            (e.bufferedRequest = r), (e.bufferProcessing = !1);
          }
          function N(t) {
            return (
              t.ending &&
              0 === t.length &&
              null === t.bufferedRequest &&
              !t.finished &&
              !t.writing
            );
          }
          function O(t, e) {
            t._final(function (r) {
              e.pendingcb--,
                r && x(t, r),
                (e.prefinished = !0),
                t.emit("prefinish"),
                C(t, e);
            });
          }
          function C(t, e) {
            var r = N(e);
            if (
              r &&
              ((function (t, e) {
                e.prefinished ||
                  e.finalCalled ||
                  ("function" != typeof t._final || e.destroyed
                    ? ((e.prefinished = !0), t.emit("prefinish"))
                    : (e.pendingcb++,
                      (e.finalCalled = !0),
                      s.nextTick(O, t, e)));
              })(t, e),
              0 === e.pendingcb &&
                ((e.finished = !0), t.emit("finish"), e.autoDestroy))
            ) {
              var n = t._readableState;
              (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
            }
            return r;
          }
          r(717)(A, c),
            (T.prototype.getBuffer = function () {
              for (var t = this.bufferedRequest, e = []; t; )
                e.push(t), (t = t.next);
              return e;
            }),
            (function () {
              try {
                Object.defineProperty(T.prototype, "buffer", {
                  get: a.deprecate(
                    function () {
                      return this.getBuffer();
                    },
                    "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                    "DEP0003"
                  ),
                });
              } catch (t) {}
            })(),
            "function" == typeof Symbol &&
            Symbol.hasInstance &&
            "function" == typeof Function.prototype[Symbol.hasInstance]
              ? ((o = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(A, Symbol.hasInstance, {
                  value: function (t) {
                    return (
                      !!o.call(this, t) ||
                      (this === A && t && t._writableState instanceof T)
                    );
                  },
                }))
              : (o = function (t) {
                  return t instanceof this;
                }),
            (A.prototype.pipe = function () {
              x(this, new g());
            }),
            (A.prototype.write = function (t, e, r) {
              var n,
                i = this._writableState,
                o = !1,
                a = !i.objectMode && ((n = t), u.isBuffer(n) || n instanceof l);
              return (
                a &&
                  !u.isBuffer(t) &&
                  (t = (function (t) {
                    return u.from(t);
                  })(t)),
                "function" == typeof e && ((r = e), (e = null)),
                a ? (e = "buffer") : e || (e = i.defaultEncoding),
                "function" != typeof r && (r = E),
                i.ending
                  ? (function (t, e) {
                      var r = new v();
                      x(t, r), s.nextTick(e, r);
                    })(this, r)
                  : (a ||
                      (function (t, e, r, n) {
                        var i;
                        return (
                          null === r
                            ? (i = new b())
                            : "string" == typeof r ||
                              e.objectMode ||
                              (i = new f("chunk", ["string", "Buffer"], r)),
                          !i || (x(t, i), s.nextTick(n, i), !1)
                        );
                      })(this, i, t, r)) &&
                    (i.pendingcb++,
                    (o = (function (t, e, r, n, s, i) {
                      if (!r) {
                        var o = (function (t, e, r) {
                          return (
                            t.objectMode ||
                              !1 === t.decodeStrings ||
                              "string" != typeof e ||
                              (e = u.from(e, r)),
                            e
                          );
                        })(e, n, s);
                        n !== o && ((r = !0), (s = "buffer"), (n = o));
                      }
                      var a = e.objectMode ? 1 : n.length;
                      e.length += a;
                      var c = e.length < e.highWaterMark;
                      if ((c || (e.needDrain = !0), e.writing || e.corked)) {
                        var l = e.lastBufferedRequest;
                        (e.lastBufferedRequest = {
                          chunk: n,
                          encoding: s,
                          isBuf: r,
                          callback: i,
                          next: null,
                        }),
                          l
                            ? (l.next = e.lastBufferedRequest)
                            : (e.bufferedRequest = e.lastBufferedRequest),
                          (e.bufferedRequestCount += 1);
                      } else S(t, e, !1, a, n, s, i);
                      return c;
                    })(this, i, a, t, e, r))),
                o
              );
            }),
            (A.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (A.prototype.uncork = function () {
              var t = this._writableState;
              t.corked &&
                (t.corked--,
                t.writing ||
                  t.corked ||
                  t.bufferProcessing ||
                  !t.bufferedRequest ||
                  I(this, t));
            }),
            (A.prototype.setDefaultEncoding = function (t) {
              if (
                ("string" == typeof t && (t = t.toLowerCase()),
                !(
                  [
                    "hex",
                    "utf8",
                    "utf-8",
                    "ascii",
                    "binary",
                    "base64",
                    "ucs2",
                    "ucs-2",
                    "utf16le",
                    "utf-16le",
                    "raw",
                  ].indexOf((t + "").toLowerCase()) > -1
                ))
              )
                throw new _(t);
              return (this._writableState.defaultEncoding = t), this;
            }),
            Object.defineProperty(A.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(A.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark;
              },
            }),
            (A.prototype._write = function (t, e, r) {
              r(new m("_write()"));
            }),
            (A.prototype._writev = null),
            (A.prototype.end = function (t, e, r) {
              var n = this._writableState;
              return (
                "function" == typeof t
                  ? ((r = t), (t = null), (e = null))
                  : "function" == typeof e && ((r = e), (e = null)),
                null != t && this.write(t, e),
                n.corked && ((n.corked = 1), this.uncork()),
                n.ending ||
                  (function (t, e, r) {
                    (e.ending = !0),
                      C(t, e),
                      r && (e.finished ? s.nextTick(r) : t.once("finish", r)),
                      (e.ended = !0),
                      (t.writable = !1);
                  })(this, n, r),
                this
              );
            }),
            Object.defineProperty(A.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(A.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                );
              },
              set: function (t) {
                this._writableState && (this._writableState.destroyed = t);
              },
            }),
            (A.prototype.destroy = h.destroy),
            (A.prototype._undestroy = h.undestroy),
            (A.prototype._destroy = function (t, e) {
              e(t);
            });
        },
        828: (t, e, r) => {
          "use strict";
          var n,
            s = r(155);
          function i(t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          var o = r(86),
            a = Symbol("lastResolve"),
            c = Symbol("lastReject"),
            u = Symbol("error"),
            l = Symbol("ended"),
            h = Symbol("lastPromise"),
            p = Symbol("handlePromise"),
            d = Symbol("stream");
          function f(t, e) {
            return { value: t, done: e };
          }
          function m(t) {
            var e = t[a];
            if (null !== e) {
              var r = t[d].read();
              null !== r &&
                ((t[h] = null), (t[a] = null), (t[c] = null), e(f(r, !1)));
            }
          }
          function w(t) {
            s.nextTick(m, t);
          }
          var g = Object.getPrototypeOf(function () {}),
            y = Object.setPrototypeOf(
              (i(
                (n = {
                  get stream() {
                    return this[d];
                  },
                  next: function () {
                    var t = this,
                      e = this[u];
                    if (null !== e) return Promise.reject(e);
                    if (this[l]) return Promise.resolve(f(void 0, !0));
                    if (this[d].destroyed)
                      return new Promise(function (e, r) {
                        s.nextTick(function () {
                          t[u] ? r(t[u]) : e(f(void 0, !0));
                        });
                      });
                    var r,
                      n = this[h];
                    if (n)
                      r = new Promise(
                        (function (t, e) {
                          return function (r, n) {
                            t.then(function () {
                              e[l] ? r(f(void 0, !0)) : e[p](r, n);
                            }, n);
                          };
                        })(n, this)
                      );
                    else {
                      var i = this[d].read();
                      if (null !== i) return Promise.resolve(f(i, !1));
                      r = new Promise(this[p]);
                    }
                    return (this[h] = r), r;
                  },
                }),
                Symbol.asyncIterator,
                function () {
                  return this;
                }
              ),
              i(n, "return", function () {
                var t = this;
                return new Promise(function (e, r) {
                  t[d].destroy(null, function (t) {
                    t ? r(t) : e(f(void 0, !0));
                  });
                });
              }),
              n),
              g
            );
          t.exports = function (t) {
            var e,
              r = Object.create(
                y,
                (i((e = {}), d, { value: t, writable: !0 }),
                i(e, a, { value: null, writable: !0 }),
                i(e, c, { value: null, writable: !0 }),
                i(e, u, { value: null, writable: !0 }),
                i(e, l, { value: t._readableState.endEmitted, writable: !0 }),
                i(e, p, {
                  value: function (t, e) {
                    var n = r[d].read();
                    n
                      ? ((r[h] = null),
                        (r[a] = null),
                        (r[c] = null),
                        t(f(n, !1)))
                      : ((r[a] = t), (r[c] = e));
                  },
                  writable: !0,
                }),
                e)
              );
            return (
              (r[h] = null),
              o(t, function (t) {
                if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                  var e = r[c];
                  return (
                    null !== e &&
                      ((r[h] = null), (r[a] = null), (r[c] = null), e(t)),
                    void (r[u] = t)
                  );
                }
                var n = r[a];
                null !== n &&
                  ((r[h] = null),
                  (r[a] = null),
                  (r[c] = null),
                  n(f(void 0, !0))),
                  (r[l] = !0);
              }),
              t.on("readable", w.bind(null, r)),
              r
            );
          };
        },
        686: (t, e, r) => {
          "use strict";
          function n(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function s(t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          function i(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          var o = r(764).Buffer,
            a = r(862).inspect,
            c = (a && a.custom) || "inspect";
          t.exports = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.head = null),
                (this.tail = null),
                (this.length = 0);
            }
            var e, r;
            return (
              (e = t),
              (r = [
                {
                  key: "push",
                  value: function (t) {
                    var e = { data: t, next: null };
                    this.length > 0 ? (this.tail.next = e) : (this.head = e),
                      (this.tail = e),
                      ++this.length;
                  },
                },
                {
                  key: "unshift",
                  value: function (t) {
                    var e = { data: t, next: this.head };
                    0 === this.length && (this.tail = e),
                      (this.head = e),
                      ++this.length;
                  },
                },
                {
                  key: "shift",
                  value: function () {
                    if (0 !== this.length) {
                      var t = this.head.data;
                      return (
                        1 === this.length
                          ? (this.head = this.tail = null)
                          : (this.head = this.head.next),
                        --this.length,
                        t
                      );
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this.head = this.tail = null), (this.length = 0);
                  },
                },
                {
                  key: "join",
                  value: function (t) {
                    if (0 === this.length) return "";
                    for (var e = this.head, r = "" + e.data; (e = e.next); )
                      r += t + e.data;
                    return r;
                  },
                },
                {
                  key: "concat",
                  value: function (t) {
                    if (0 === this.length) return o.alloc(0);
                    for (
                      var e,
                        r,
                        n,
                        s = o.allocUnsafe(t >>> 0),
                        i = this.head,
                        a = 0;
                      i;

                    )
                      (e = i.data),
                        (r = s),
                        (n = a),
                        o.prototype.copy.call(e, r, n),
                        (a += i.data.length),
                        (i = i.next);
                    return s;
                  },
                },
                {
                  key: "consume",
                  value: function (t, e) {
                    var r;
                    return (
                      t < this.head.data.length
                        ? ((r = this.head.data.slice(0, t)),
                          (this.head.data = this.head.data.slice(t)))
                        : (r =
                            t === this.head.data.length
                              ? this.shift()
                              : e
                              ? this._getString(t)
                              : this._getBuffer(t)),
                      r
                    );
                  },
                },
                {
                  key: "first",
                  value: function () {
                    return this.head.data;
                  },
                },
                {
                  key: "_getString",
                  value: function (t) {
                    var e = this.head,
                      r = 1,
                      n = e.data;
                    for (t -= n.length; (e = e.next); ) {
                      var s = e.data,
                        i = t > s.length ? s.length : t;
                      if (
                        (i === s.length ? (n += s) : (n += s.slice(0, t)),
                        0 == (t -= i))
                      ) {
                        i === s.length
                          ? (++r,
                            e.next
                              ? (this.head = e.next)
                              : (this.head = this.tail = null))
                          : ((this.head = e), (e.data = s.slice(i)));
                        break;
                      }
                      ++r;
                    }
                    return (this.length -= r), n;
                  },
                },
                {
                  key: "_getBuffer",
                  value: function (t) {
                    var e = o.allocUnsafe(t),
                      r = this.head,
                      n = 1;
                    for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                      var s = r.data,
                        i = t > s.length ? s.length : t;
                      if ((s.copy(e, e.length - t, 0, i), 0 == (t -= i))) {
                        i === s.length
                          ? (++n,
                            r.next
                              ? (this.head = r.next)
                              : (this.head = this.tail = null))
                          : ((this.head = r), (r.data = s.slice(i)));
                        break;
                      }
                      ++n;
                    }
                    return (this.length -= n), e;
                  },
                },
                {
                  key: c,
                  value: function (t, e) {
                    return a(
                      this,
                      (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var r = null != arguments[e] ? arguments[e] : {};
                          e % 2
                            ? n(Object(r), !0).forEach(function (e) {
                                s(t, e, r[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : n(Object(r)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(r, e)
                                );
                              });
                        }
                        return t;
                      })({}, e, { depth: 0, customInspect: !1 })
                    );
                  },
                },
              ]),
              r && i(e.prototype, r),
              t
            );
          })();
        },
        29: (t, e, r) => {
          "use strict";
          var n = r(155);
          function s(t, e) {
            o(t, e), i(t);
          }
          function i(t) {
            (t._writableState && !t._writableState.emitClose) ||
              (t._readableState && !t._readableState.emitClose) ||
              t.emit("close");
          }
          function o(t, e) {
            t.emit("error", e);
          }
          t.exports = {
            destroy: function (t, e) {
              var r = this,
                a = this._readableState && this._readableState.destroyed,
                c = this._writableState && this._writableState.destroyed;
              return a || c
                ? (e
                    ? e(t)
                    : t &&
                      (this._writableState
                        ? this._writableState.errorEmitted ||
                          ((this._writableState.errorEmitted = !0),
                          n.nextTick(o, this, t))
                        : n.nextTick(o, this, t)),
                  this)
                : (this._readableState && (this._readableState.destroyed = !0),
                  this._writableState && (this._writableState.destroyed = !0),
                  this._destroy(t || null, function (t) {
                    !e && t
                      ? r._writableState
                        ? r._writableState.errorEmitted
                          ? n.nextTick(i, r)
                          : ((r._writableState.errorEmitted = !0),
                            n.nextTick(s, r, t))
                        : n.nextTick(s, r, t)
                      : e
                      ? (n.nextTick(i, r), e(t))
                      : n.nextTick(i, r);
                  }),
                  this);
            },
            undestroy: function () {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finalCalled = !1),
                  (this._writableState.prefinished = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1));
            },
            errorOrDestroy: function (t, e) {
              var r = t._readableState,
                n = t._writableState;
              (r && r.autoDestroy) || (n && n.autoDestroy)
                ? t.destroy(e)
                : t.emit("error", e);
            },
          };
        },
        86: (t, e, r) => {
          "use strict";
          var n = r(106).q.ERR_STREAM_PREMATURE_CLOSE;
          function s() {}
          t.exports = function t(e, r, i) {
            if ("function" == typeof r) return t(e, null, r);
            r || (r = {}),
              (i = (function (t) {
                var e = !1;
                return function () {
                  if (!e) {
                    e = !0;
                    for (
                      var r = arguments.length, n = new Array(r), s = 0;
                      s < r;
                      s++
                    )
                      n[s] = arguments[s];
                    t.apply(this, n);
                  }
                };
              })(i || s));
            var o = r.readable || (!1 !== r.readable && e.readable),
              a = r.writable || (!1 !== r.writable && e.writable),
              c = function () {
                e.writable || l();
              },
              u = e._writableState && e._writableState.finished,
              l = function () {
                (a = !1), (u = !0), o || i.call(e);
              },
              h = e._readableState && e._readableState.endEmitted,
              p = function () {
                (o = !1), (h = !0), a || i.call(e);
              },
              d = function (t) {
                i.call(e, t);
              },
              f = function () {
                var t;
                return o && !h
                  ? ((e._readableState && e._readableState.ended) ||
                      (t = new n()),
                    i.call(e, t))
                  : a && !u
                  ? ((e._writableState && e._writableState.ended) ||
                      (t = new n()),
                    i.call(e, t))
                  : void 0;
              },
              m = function () {
                e.req.on("finish", l);
              };
            return (
              (function (t) {
                return t.setHeader && "function" == typeof t.abort;
              })(e)
                ? (e.on("complete", l),
                  e.on("abort", f),
                  e.req ? m() : e.on("request", m))
                : a && !e._writableState && (e.on("end", c), e.on("close", c)),
              e.on("end", p),
              e.on("finish", l),
              !1 !== r.error && e.on("error", d),
              e.on("close", f),
              function () {
                e.removeListener("complete", l),
                  e.removeListener("abort", f),
                  e.removeListener("request", m),
                  e.req && e.req.removeListener("finish", l),
                  e.removeListener("end", c),
                  e.removeListener("close", c),
                  e.removeListener("finish", l),
                  e.removeListener("end", p),
                  e.removeListener("error", d),
                  e.removeListener("close", f);
              }
            );
          };
        },
        265: (t) => {
          t.exports = function () {
            throw new Error("Readable.from is not available in the browser");
          };
        },
        472: (t, e, r) => {
          "use strict";
          var n,
            s = r(106).q,
            i = s.ERR_MISSING_ARGS,
            o = s.ERR_STREAM_DESTROYED;
          function a(t) {
            if (t) throw t;
          }
          function c(t, e, s, i) {
            i = (function (t) {
              var e = !1;
              return function () {
                e || ((e = !0), t.apply(void 0, arguments));
              };
            })(i);
            var a = !1;
            t.on("close", function () {
              a = !0;
            }),
              void 0 === n && (n = r(86)),
              n(t, { readable: e, writable: s }, function (t) {
                if (t) return i(t);
                (a = !0), i();
              });
            var c = !1;
            return function (e) {
              if (!a && !c)
                return (
                  (c = !0),
                  (function (t) {
                    return t.setHeader && "function" == typeof t.abort;
                  })(t)
                    ? t.abort()
                    : "function" == typeof t.destroy
                    ? t.destroy()
                    : void i(e || new o("pipe"))
                );
            };
          }
          function u(t) {
            t();
          }
          function l(t, e) {
            return t.pipe(e);
          }
          function h(t) {
            return t.length
              ? "function" != typeof t[t.length - 1]
                ? a
                : t.pop()
              : a;
          }
          t.exports = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            var n,
              s = h(e);
            if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
              throw new i("streams");
            var o = e.map(function (t, r) {
              var i = r < e.length - 1;
              return c(t, i, r > 0, function (t) {
                n || (n = t), t && o.forEach(u), i || (o.forEach(u), s(n));
              });
            });
            return e.reduce(l);
          };
        },
        94: (t, e, r) => {
          "use strict";
          var n = r(106).q.ERR_INVALID_OPT_VALUE;
          t.exports = {
            getHighWaterMark: function (t, e, r, s) {
              var i = (function (t, e, r) {
                return null != t.highWaterMark
                  ? t.highWaterMark
                  : e
                  ? t[r]
                  : null;
              })(e, s, r);
              if (null != i) {
                if (!isFinite(i) || Math.floor(i) !== i || i < 0)
                  throw new n(s ? r : "highWaterMark", i);
                return Math.floor(i);
              }
              return t.objectMode ? 16 : 16384;
            },
          };
        },
        194: (t, e, r) => {
          t.exports = r(187).EventEmitter;
        },
        553: (t, e, r) => {
          "use strict";
          var n = r(509).Buffer,
            s =
              n.isEncoding ||
              function (t) {
                switch ((t = "" + t) && t.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1;
                }
              };
          function i(t) {
            var e;
            switch (
              ((this.encoding = (function (t) {
                var e = (function (t) {
                  if (!t) return "utf8";
                  for (var e; ; )
                    switch (t) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return t;
                      default:
                        if (e) return;
                        (t = ("" + t).toLowerCase()), (e = !0);
                    }
                })(t);
                if ("string" != typeof e && (n.isEncoding === s || !s(t)))
                  throw new Error("Unknown encoding: " + t);
                return e || t;
              })(t)),
              this.encoding)
            ) {
              case "utf16le":
                (this.text = c), (this.end = u), (e = 4);
                break;
              case "utf8":
                (this.fillLast = a), (e = 4);
                break;
              case "base64":
                (this.text = l), (this.end = h), (e = 3);
                break;
              default:
                return (this.write = p), void (this.end = d);
            }
            (this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = n.allocUnsafe(e));
          }
          function o(t) {
            return t <= 127
              ? 0
              : t >> 5 == 6
              ? 2
              : t >> 4 == 14
              ? 3
              : t >> 3 == 30
              ? 4
              : t >> 6 == 2
              ? -1
              : -2;
          }
          function a(t) {
            var e = this.lastTotal - this.lastNeed,
              r = (function (t, e, r) {
                if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
                if (t.lastNeed > 1 && e.length > 1) {
                  if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
                  if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                    return (t.lastNeed = 2), "�";
                }
              })(this, t);
            return void 0 !== r
              ? r
              : this.lastNeed <= t.length
              ? (t.copy(this.lastChar, e, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : (t.copy(this.lastChar, e, 0, t.length),
                void (this.lastNeed -= t.length));
          }
          function c(t, e) {
            if ((t.length - e) % 2 == 0) {
              var r = t.toString("utf16le", e);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = t[t.length - 2]),
                    (this.lastChar[1] = t[t.length - 1]),
                    r.slice(0, -1)
                  );
              }
              return r;
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = t[t.length - 1]),
              t.toString("utf16le", e, t.length - 1)
            );
          }
          function u(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return e + this.lastChar.toString("utf16le", 0, r);
            }
            return e;
          }
          function l(t, e) {
            var r = (t.length - e) % 3;
            return 0 === r
              ? t.toString("base64", e)
              : ((this.lastNeed = 3 - r),
                (this.lastTotal = 3),
                1 === r
                  ? (this.lastChar[0] = t[t.length - 1])
                  : ((this.lastChar[0] = t[t.length - 2]),
                    (this.lastChar[1] = t[t.length - 1])),
                t.toString("base64", e, t.length - r));
          }
          function h(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed
              ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
              : e;
          }
          function p(t) {
            return t.toString(this.encoding);
          }
          function d(t) {
            return t && t.length ? this.write(t) : "";
          }
          (e.s = i),
            (i.prototype.write = function (t) {
              if (0 === t.length) return "";
              var e, r;
              if (this.lastNeed) {
                if (void 0 === (e = this.fillLast(t))) return "";
                (r = this.lastNeed), (this.lastNeed = 0);
              } else r = 0;
              return r < t.length
                ? e
                  ? e + this.text(t, r)
                  : this.text(t, r)
                : e || "";
            }),
            (i.prototype.end = function (t) {
              var e = t && t.length ? this.write(t) : "";
              return this.lastNeed ? e + "�" : e;
            }),
            (i.prototype.text = function (t, e) {
              var r = (function (t, e, r) {
                var n = e.length - 1;
                if (n < r) return 0;
                var s = o(e[n]);
                return s >= 0
                  ? (s > 0 && (t.lastNeed = s - 1), s)
                  : --n < r || -2 === s
                  ? 0
                  : (s = o(e[n])) >= 0
                  ? (s > 0 && (t.lastNeed = s - 2), s)
                  : --n < r || -2 === s
                  ? 0
                  : (s = o(e[n])) >= 0
                  ? (s > 0 && (2 === s ? (s = 0) : (t.lastNeed = s - 3)), s)
                  : 0;
              })(this, t, e);
              if (!this.lastNeed) return t.toString("utf8", e);
              this.lastTotal = r;
              var n = t.length - (r - this.lastNeed);
              return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
            }),
            (i.prototype.fillLast = function (t) {
              if (this.lastNeed <= t.length)
                return (
                  t.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                );
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                t.length
              ),
                (this.lastNeed -= t.length);
            });
        },
        927: (t, e, r) => {
          function n(t) {
            try {
              if (!r.g.localStorage) return !1;
            } catch (t) {
              return !1;
            }
            var e = r.g.localStorage[t];
            return null != e && "true" === String(e).toLowerCase();
          }
          t.exports = function (t, e) {
            if (n("noDeprecation")) return t;
            var r = !1;
            return function () {
              if (!r) {
                if (n("throwDeprecation")) throw new Error(e);
                n("traceDeprecation") ? console.trace(e) : console.warn(e),
                  (r = !0);
              }
              return t.apply(this, arguments);
            };
          };
        },
        881: (t) => {
          t.exports = {
            isArray: function (t) {
              return Array.isArray
                ? Array.isArray(t)
                : "[object Array]" === Object.prototype.toString.call(t);
            },
          };
        },
        888: (t, e, r) => {
          var n = r(229),
            s = r(388),
            i = r(501),
            o = r(673);
          t.exports = { xml2js: n, xml2json: s, js2xml: i, json2xml: o };
        },
        501: (t, e, r) => {
          var n,
            s,
            i = r(740),
            o = r(881).isArray;
          function a(t, e, r) {
            return (!r && t.spaces ? "\n" : "") + Array(e + 1).join(t.spaces);
          }
          function c(t, e, r) {
            if (e.ignoreAttributes) return "";
            "attributesFn" in e && (t = e.attributesFn(t, s, n));
            var i,
              o,
              c,
              u,
              l = [];
            for (i in t)
              t.hasOwnProperty(i) &&
                null !== t[i] &&
                void 0 !== t[i] &&
                ((u =
                  e.noQuotesForNativeAttributes && "string" != typeof t[i]
                    ? ""
                    : '"'),
                (o = (o = "" + t[i]).replace(/"/g, "&quot;")),
                (c =
                  "attributeNameFn" in e ? e.attributeNameFn(i, o, s, n) : i),
                l.push(e.spaces && e.indentAttributes ? a(e, r + 1, !1) : " "),
                l.push(
                  c +
                    "=" +
                    u +
                    ("attributeValueFn" in e
                      ? e.attributeValueFn(o, i, s, n)
                      : o) +
                    u
                ));
            return (
              t &&
                Object.keys(t).length &&
                e.spaces &&
                e.indentAttributes &&
                l.push(a(e, r, !1)),
              l.join("")
            );
          }
          function u(t, e, r) {
            return (
              (n = t),
              (s = "xml"),
              e.ignoreDeclaration
                ? ""
                : "<?xml" + c(t[e.attributesKey], e, r) + "?>"
            );
          }
          function l(t, e, r) {
            if (e.ignoreInstruction) return "";
            var i;
            for (i in t) if (t.hasOwnProperty(i)) break;
            var o =
              "instructionNameFn" in e ? e.instructionNameFn(i, t[i], s, n) : i;
            if ("object" == typeof t[i])
              return (
                (n = t),
                (s = o),
                "<?" + o + c(t[i][e.attributesKey], e, r) + "?>"
              );
            var a = t[i] ? t[i] : "";
            return (
              "instructionFn" in e && (a = e.instructionFn(a, i, s, n)),
              "<?" + o + (a ? " " + a : "") + "?>"
            );
          }
          function h(t, e) {
            return e.ignoreComment
              ? ""
              : "\x3c!--" +
                  ("commentFn" in e ? e.commentFn(t, s, n) : t) +
                  "--\x3e";
          }
          function p(t, e) {
            return e.ignoreCdata
              ? ""
              : "<![CDATA[" +
                  ("cdataFn" in e
                    ? e.cdataFn(t, s, n)
                    : t.replace("]]>", "]]]]><![CDATA[>")) +
                  "]]>";
          }
          function d(t, e) {
            return e.ignoreDoctype
              ? ""
              : "<!DOCTYPE " +
                  ("doctypeFn" in e ? e.doctypeFn(t, s, n) : t) +
                  ">";
          }
          function f(t, e) {
            return e.ignoreText
              ? ""
              : ((t = (t = (t = "" + t).replace(/&amp;/g, "&"))
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")),
                "textFn" in e ? e.textFn(t, s, n) : t);
          }
          function m(t, e, r, i) {
            return t.reduce(function (t, o) {
              var u = a(e, r, i && !t);
              switch (o.type) {
                case "element":
                  return (
                    t +
                    u +
                    (function (t, e, r) {
                      (n = t), (s = t.name);
                      var i = [],
                        o =
                          "elementNameFn" in e
                            ? e.elementNameFn(t.name, t)
                            : t.name;
                      i.push("<" + o),
                        t[e.attributesKey] &&
                          i.push(c(t[e.attributesKey], e, r));
                      var a =
                        (t[e.elementsKey] && t[e.elementsKey].length) ||
                        (t[e.attributesKey] &&
                          "preserve" === t[e.attributesKey]["xml:space"]);
                      return (
                        a ||
                          (a =
                            "fullTagEmptyElementFn" in e
                              ? e.fullTagEmptyElementFn(t.name, t)
                              : e.fullTagEmptyElement),
                        a
                          ? (i.push(">"),
                            t[e.elementsKey] &&
                              t[e.elementsKey].length &&
                              (i.push(m(t[e.elementsKey], e, r + 1)),
                              (n = t),
                              (s = t.name)),
                            i.push(
                              e.spaces &&
                                (function (t, e) {
                                  var r;
                                  if (t.elements && t.elements.length)
                                    for (r = 0; r < t.elements.length; ++r)
                                      switch (t.elements[r][e.typeKey]) {
                                        case "text":
                                          if (e.indentText) return !0;
                                          break;
                                        case "cdata":
                                          if (e.indentCdata) return !0;
                                          break;
                                        case "instruction":
                                          if (e.indentInstruction) return !0;
                                          break;
                                        default:
                                          return !0;
                                      }
                                  return !1;
                                })(t, e)
                                ? "\n" + Array(r + 1).join(e.spaces)
                                : ""
                            ),
                            i.push("</" + o + ">"))
                          : i.push("/>"),
                        i.join("")
                      );
                    })(o, e, r)
                  );
                case "comment":
                  return t + u + h(o[e.commentKey], e);
                case "doctype":
                  return t + u + d(o[e.doctypeKey], e);
                case "cdata":
                  return t + (e.indentCdata ? u : "") + p(o[e.cdataKey], e);
                case "text":
                  return t + (e.indentText ? u : "") + f(o[e.textKey], e);
                case "instruction":
                  var w = {};
                  return (
                    (w[o[e.nameKey]] = o[e.attributesKey]
                      ? o
                      : o[e.instructionKey]),
                    t + (e.indentInstruction ? u : "") + l(w, e, r)
                  );
              }
            }, "");
          }
          function w(t, e, r) {
            var n;
            for (n in t)
              if (t.hasOwnProperty(n))
                switch (n) {
                  case e.parentKey:
                  case e.attributesKey:
                    break;
                  case e.textKey:
                    if (e.indentText || r) return !0;
                    break;
                  case e.cdataKey:
                    if (e.indentCdata || r) return !0;
                    break;
                  case e.instructionKey:
                    if (e.indentInstruction || r) return !0;
                    break;
                  case e.doctypeKey:
                  case e.commentKey:
                  default:
                    return !0;
                }
            return !1;
          }
          function g(t, e, r, i, o) {
            (n = t), (s = e);
            var u = "elementNameFn" in r ? r.elementNameFn(e, t) : e;
            if (null == t || "" === t)
              return ("fullTagEmptyElementFn" in r &&
                r.fullTagEmptyElementFn(e, t)) ||
                r.fullTagEmptyElement
                ? "<" + u + "></" + u + ">"
                : "<" + u + "/>";
            var l = [];
            if (e) {
              if ((l.push("<" + u), "object" != typeof t))
                return l.push(">" + f(t, r) + "</" + u + ">"), l.join("");
              t[r.attributesKey] && l.push(c(t[r.attributesKey], r, i));
              var h =
                w(t, r, !0) ||
                (t[r.attributesKey] &&
                  "preserve" === t[r.attributesKey]["xml:space"]);
              if (
                (h ||
                  (h =
                    "fullTagEmptyElementFn" in r
                      ? r.fullTagEmptyElementFn(e, t)
                      : r.fullTagEmptyElement),
                !h)
              )
                return l.push("/>"), l.join("");
              l.push(">");
            }
            return (
              l.push(y(t, r, i + 1, !1)),
              (n = t),
              (s = e),
              e && l.push((o ? a(r, i, !1) : "") + "</" + u + ">"),
              l.join("")
            );
          }
          function y(t, e, r, n) {
            var s,
              i,
              c,
              m = [];
            for (i in t)
              if (t.hasOwnProperty(i))
                for (c = o(t[i]) ? t[i] : [t[i]], s = 0; s < c.length; ++s) {
                  switch (i) {
                    case e.declarationKey:
                      m.push(u(c[s], e, r));
                      break;
                    case e.instructionKey:
                      m.push(
                        (e.indentInstruction ? a(e, r, n) : "") + l(c[s], e, r)
                      );
                      break;
                    case e.attributesKey:
                    case e.parentKey:
                      break;
                    case e.textKey:
                      m.push((e.indentText ? a(e, r, n) : "") + f(c[s], e));
                      break;
                    case e.cdataKey:
                      m.push((e.indentCdata ? a(e, r, n) : "") + p(c[s], e));
                      break;
                    case e.doctypeKey:
                      m.push(a(e, r, n) + d(c[s], e));
                      break;
                    case e.commentKey:
                      m.push(a(e, r, n) + h(c[s], e));
                      break;
                    default:
                      m.push(a(e, r, n) + g(c[s], i, e, r, w(c[s], e)));
                  }
                  n = n && !m.length;
                }
            return m.join("");
          }
          t.exports = function (t, e) {
            e = (function (t) {
              var e = i.copyOptions(t);
              return (
                i.ensureFlagExists("ignoreDeclaration", e),
                i.ensureFlagExists("ignoreInstruction", e),
                i.ensureFlagExists("ignoreAttributes", e),
                i.ensureFlagExists("ignoreText", e),
                i.ensureFlagExists("ignoreComment", e),
                i.ensureFlagExists("ignoreCdata", e),
                i.ensureFlagExists("ignoreDoctype", e),
                i.ensureFlagExists("compact", e),
                i.ensureFlagExists("indentText", e),
                i.ensureFlagExists("indentCdata", e),
                i.ensureFlagExists("indentAttributes", e),
                i.ensureFlagExists("indentInstruction", e),
                i.ensureFlagExists("fullTagEmptyElement", e),
                i.ensureFlagExists("noQuotesForNativeAttributes", e),
                i.ensureSpacesExists(e),
                "number" == typeof e.spaces &&
                  (e.spaces = Array(e.spaces + 1).join(" ")),
                i.ensureKeyExists("declaration", e),
                i.ensureKeyExists("instruction", e),
                i.ensureKeyExists("attributes", e),
                i.ensureKeyExists("text", e),
                i.ensureKeyExists("comment", e),
                i.ensureKeyExists("cdata", e),
                i.ensureKeyExists("doctype", e),
                i.ensureKeyExists("type", e),
                i.ensureKeyExists("name", e),
                i.ensureKeyExists("elements", e),
                i.checkFnExists("doctype", e),
                i.checkFnExists("instruction", e),
                i.checkFnExists("cdata", e),
                i.checkFnExists("comment", e),
                i.checkFnExists("text", e),
                i.checkFnExists("instructionName", e),
                i.checkFnExists("elementName", e),
                i.checkFnExists("attributeName", e),
                i.checkFnExists("attributeValue", e),
                i.checkFnExists("attributes", e),
                i.checkFnExists("fullTagEmptyElement", e),
                e
              );
            })(e);
            var r = [];
            return (
              (n = t),
              (s = "_root_"),
              e.compact
                ? r.push(y(t, e, 0, !0))
                : (t[e.declarationKey] && r.push(u(t[e.declarationKey], e, 0)),
                  t[e.elementsKey] &&
                    t[e.elementsKey].length &&
                    r.push(m(t[e.elementsKey], e, 0, !r.length))),
              r.join("")
            );
          };
        },
        673: (t, e, r) => {
          var n = r(501);
          t.exports = function (t, e) {
            t instanceof Buffer && (t = t.toString());
            var r = null;
            if ("string" == typeof t)
              try {
                r = JSON.parse(t);
              } catch (t) {
                throw new Error("The JSON structure is invalid");
              }
            else r = t;
            return n(r, e);
          };
        },
        740: (t, e, r) => {
          var n = r(881).isArray;
          t.exports = {
            copyOptions: function (t) {
              var e,
                r = {};
              for (e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
              return r;
            },
            ensureFlagExists: function (t, e) {
              (t in e && "boolean" == typeof e[t]) || (e[t] = !1);
            },
            ensureSpacesExists: function (t) {
              (!("spaces" in t) ||
                ("number" != typeof t.spaces && "string" != typeof t.spaces)) &&
                (t.spaces = 0);
            },
            ensureAlwaysArrayExists: function (t) {
              ("alwaysArray" in t &&
                ("boolean" == typeof t.alwaysArray || n(t.alwaysArray))) ||
                (t.alwaysArray = !1);
            },
            ensureKeyExists: function (t, e) {
              (t + "Key" in e && "string" == typeof e[t + "Key"]) ||
                (e[t + "Key"] = e.compact ? "_" + t : t);
            },
            checkFnExists: function (t, e) {
              return t + "Fn" in e;
            },
          };
        },
        229: (t, e, r) => {
          var n,
            s,
            i = r(99),
            o = r(740),
            a = r(881).isArray;
          function c(t) {
            var e = Number(t);
            if (!isNaN(e)) return e;
            var r = t.toLowerCase();
            return "true" === r || ("false" !== r && t);
          }
          function u(t, e) {
            var r;
            if (n.compact) {
              if (
                (!s[n[t + "Key"]] &&
                  (a(n.alwaysArray)
                    ? -1 !== n.alwaysArray.indexOf(n[t + "Key"])
                    : n.alwaysArray) &&
                  (s[n[t + "Key"]] = []),
                s[n[t + "Key"]] &&
                  !a(s[n[t + "Key"]]) &&
                  (s[n[t + "Key"]] = [s[n[t + "Key"]]]),
                t + "Fn" in n &&
                  "string" == typeof e &&
                  (e = n[t + "Fn"](e, s)),
                "instruction" === t &&
                  ("instructionFn" in n || "instructionNameFn" in n))
              )
                for (r in e)
                  if (e.hasOwnProperty(r))
                    if ("instructionFn" in n)
                      e[r] = n.instructionFn(e[r], r, s);
                    else {
                      var i = e[r];
                      delete e[r], (e[n.instructionNameFn(r, i, s)] = i);
                    }
              a(s[n[t + "Key"]])
                ? s[n[t + "Key"]].push(e)
                : (s[n[t + "Key"]] = e);
            } else {
              s[n.elementsKey] || (s[n.elementsKey] = []);
              var o = {};
              if (((o[n.typeKey] = t), "instruction" === t)) {
                for (r in e) if (e.hasOwnProperty(r)) break;
                (o[n.nameKey] =
                  "instructionNameFn" in n ? n.instructionNameFn(r, e, s) : r),
                  n.instructionHasAttributes
                    ? ((o[n.attributesKey] = e[r][n.attributesKey]),
                      "instructionFn" in n &&
                        (o[n.attributesKey] = n.instructionFn(
                          o[n.attributesKey],
                          r,
                          s
                        )))
                    : ("instructionFn" in n &&
                        (e[r] = n.instructionFn(e[r], r, s)),
                      (o[n.instructionKey] = e[r]));
              } else
                t + "Fn" in n && (e = n[t + "Fn"](e, s)), (o[n[t + "Key"]] = e);
              n.addParent && (o[n.parentKey] = s), s[n.elementsKey].push(o);
            }
          }
          function l(t) {
            var e;
            if (
              ("attributesFn" in n && t && (t = n.attributesFn(t, s)),
              (n.trim ||
                "attributeValueFn" in n ||
                "attributeNameFn" in n ||
                n.nativeTypeAttributes) &&
                t)
            )
              for (e in t)
                if (
                  t.hasOwnProperty(e) &&
                  (n.trim && (t[e] = t[e].trim()),
                  n.nativeTypeAttributes && (t[e] = c(t[e])),
                  "attributeValueFn" in n &&
                    (t[e] = n.attributeValueFn(t[e], e, s)),
                  "attributeNameFn" in n)
                ) {
                  var r = t[e];
                  delete t[e], (t[n.attributeNameFn(e, t[e], s)] = r);
                }
            return t;
          }
          function h(t) {
            var e = {};
            if (
              t.body &&
              ("xml" === t.name.toLowerCase() || n.instructionHasAttributes)
            ) {
              for (
                var r, i = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
                null !== (r = i.exec(t.body));

              )
                e[r[1]] = r[2] || r[3] || r[4];
              e = l(e);
            }
            if ("xml" === t.name.toLowerCase()) {
              if (n.ignoreDeclaration) return;
              (s[n.declarationKey] = {}),
                Object.keys(e).length &&
                  (s[n.declarationKey][n.attributesKey] = e),
                n.addParent && (s[n.declarationKey][n.parentKey] = s);
            } else {
              if (n.ignoreInstruction) return;
              n.trim && (t.body = t.body.trim());
              var o = {};
              n.instructionHasAttributes && Object.keys(e).length
                ? ((o[t.name] = {}), (o[t.name][n.attributesKey] = e))
                : (o[t.name] = t.body),
                u("instruction", o);
            }
          }
          function p(t, e) {
            var r;
            if (
              ("object" == typeof t && ((e = t.attributes), (t = t.name)),
              (e = l(e)),
              "elementNameFn" in n && (t = n.elementNameFn(t, s)),
              n.compact)
            ) {
              var i;
              if (((r = {}), !n.ignoreAttributes && e && Object.keys(e).length))
                for (i in ((r[n.attributesKey] = {}), e))
                  e.hasOwnProperty(i) && (r[n.attributesKey][i] = e[i]);
              !(t in s) &&
                (a(n.alwaysArray)
                  ? -1 !== n.alwaysArray.indexOf(t)
                  : n.alwaysArray) &&
                (s[t] = []),
                s[t] && !a(s[t]) && (s[t] = [s[t]]),
                a(s[t]) ? s[t].push(r) : (s[t] = r);
            } else
              s[n.elementsKey] || (s[n.elementsKey] = []),
                ((r = {})[n.typeKey] = "element"),
                (r[n.nameKey] = t),
                !n.ignoreAttributes &&
                  e &&
                  Object.keys(e).length &&
                  (r[n.attributesKey] = e),
                n.alwaysChildren && (r[n.elementsKey] = []),
                s[n.elementsKey].push(r);
            (r[n.parentKey] = s), (s = r);
          }
          function d(t) {
            n.ignoreText ||
              ((t.trim() || n.captureSpacesBetweenElements) &&
                (n.trim && (t = t.trim()),
                n.nativeType && (t = c(t)),
                n.sanitize &&
                  (t = t
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")),
                u("text", t)));
          }
          function f(t) {
            n.ignoreComment || (n.trim && (t = t.trim()), u("comment", t));
          }
          function m(t) {
            var e = s[n.parentKey];
            n.addParent || delete s[n.parentKey], (s = e);
          }
          function w(t) {
            n.ignoreCdata || (n.trim && (t = t.trim()), u("cdata", t));
          }
          function g(t) {
            n.ignoreDoctype ||
              ((t = t.replace(/^ /, "")),
              n.trim && (t = t.trim()),
              u("doctype", t));
          }
          function y(t) {
            t.note = t;
          }
          t.exports = function (t, e) {
            var r = i.parser(!0, {}),
              a = {};
            if (
              ((s = a),
              (n = (function (t) {
                return (
                  (n = o.copyOptions(t)),
                  o.ensureFlagExists("ignoreDeclaration", n),
                  o.ensureFlagExists("ignoreInstruction", n),
                  o.ensureFlagExists("ignoreAttributes", n),
                  o.ensureFlagExists("ignoreText", n),
                  o.ensureFlagExists("ignoreComment", n),
                  o.ensureFlagExists("ignoreCdata", n),
                  o.ensureFlagExists("ignoreDoctype", n),
                  o.ensureFlagExists("compact", n),
                  o.ensureFlagExists("alwaysChildren", n),
                  o.ensureFlagExists("addParent", n),
                  o.ensureFlagExists("trim", n),
                  o.ensureFlagExists("nativeType", n),
                  o.ensureFlagExists("nativeTypeAttributes", n),
                  o.ensureFlagExists("sanitize", n),
                  o.ensureFlagExists("instructionHasAttributes", n),
                  o.ensureFlagExists("captureSpacesBetweenElements", n),
                  o.ensureAlwaysArrayExists(n),
                  o.ensureKeyExists("declaration", n),
                  o.ensureKeyExists("instruction", n),
                  o.ensureKeyExists("attributes", n),
                  o.ensureKeyExists("text", n),
                  o.ensureKeyExists("comment", n),
                  o.ensureKeyExists("cdata", n),
                  o.ensureKeyExists("doctype", n),
                  o.ensureKeyExists("type", n),
                  o.ensureKeyExists("name", n),
                  o.ensureKeyExists("elements", n),
                  o.ensureKeyExists("parent", n),
                  o.checkFnExists("doctype", n),
                  o.checkFnExists("instruction", n),
                  o.checkFnExists("cdata", n),
                  o.checkFnExists("comment", n),
                  o.checkFnExists("text", n),
                  o.checkFnExists("instructionName", n),
                  o.checkFnExists("elementName", n),
                  o.checkFnExists("attributeName", n),
                  o.checkFnExists("attributeValue", n),
                  o.checkFnExists("attributes", n),
                  n
                );
              })(e)),
              (r.opt = { strictEntities: !0 }),
              (r.onopentag = p),
              (r.ontext = d),
              (r.oncomment = f),
              (r.onclosetag = m),
              (r.onerror = y),
              (r.oncdata = w),
              (r.ondoctype = g),
              (r.onprocessinginstruction = h),
              r.write(t).close(),
              a[n.elementsKey])
            ) {
              var c = a[n.elementsKey];
              delete a[n.elementsKey], (a[n.elementsKey] = c), delete a.text;
            }
            return a;
          };
        },
        388: (t, e, r) => {
          var n = r(740),
            s = r(229);
          t.exports = function (t, e) {
            var r, i, o;
            return (
              (r = (function (t) {
                var e = n.copyOptions(t);
                return n.ensureSpacesExists(e), e;
              })(e)),
              (i = s(t, r)),
              (o = "compact" in r && r.compact ? "_parent" : "parent"),
              ("addParent" in r && r.addParent
                ? JSON.stringify(
                    i,
                    function (t, e) {
                      return t === o ? "_" : e;
                    },
                    r.spaces
                  )
                : JSON.stringify(i, null, r.spaces)
              )
                .replace(/\u2028/g, "\\u2028")
                .replace(/\u2029/g, "\\u2029")
            );
          };
        },
        255: (t) => {
          var e = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&apos;",
            "<": "&lt;",
            ">": "&gt;",
          };
          t.exports = function (t) {
            return t && t.replace
              ? t.replace(/([&"<>'])/g, function (t, r) {
                  return e[r];
                })
              : t;
          };
        },
        479: (t, e, r) => {
          var n = r(155),
            s = r(255),
            i = r(830).Stream;
          function o(t, e, r) {
            r = r || 0;
            var n,
              i,
              a = ((n = e), new Array(r || 0).join(n || "")),
              c = t;
            if (
              "object" == typeof t &&
              (c = t[(i = Object.keys(t)[0])]) &&
              c._elem
            )
              return (
                (c._elem.name = i),
                (c._elem.icount = r),
                (c._elem.indent = e),
                (c._elem.indents = a),
                (c._elem.interrupt = c),
                c._elem
              );
            var u,
              l = [],
              h = [];
            function p(t) {
              Object.keys(t).forEach(function (e) {
                l.push(
                  (function (t, e) {
                    return t + '="' + s(e) + '"';
                  })(e, t[e])
                );
              });
            }
            switch (typeof c) {
              case "object":
                if (null === c) break;
                c._attr && p(c._attr),
                  c._cdata &&
                    h.push(
                      ("<![CDATA[" + c._cdata).replace(
                        /\]\]>/g,
                        "]]]]><![CDATA[>"
                      ) + "]]>"
                    ),
                  c.forEach &&
                    ((u = !1),
                    h.push(""),
                    c.forEach(function (t) {
                      "object" == typeof t
                        ? "_attr" == Object.keys(t)[0]
                          ? p(t._attr)
                          : h.push(o(t, e, r + 1))
                        : (h.pop(), (u = !0), h.push(s(t)));
                    }),
                    u || h.push(""));
                break;
              default:
                h.push(s(c));
            }
            return {
              name: i,
              interrupt: !1,
              attributes: l,
              content: h,
              icount: r,
              indents: a,
              indent: e,
            };
          }
          function a(t, e, r) {
            if ("object" != typeof e) return t(!1, e);
            var n = e.interrupt ? 1 : e.content.length;
            function s() {
              for (; e.content.length; ) {
                var s = e.content.shift();
                if (void 0 !== s) {
                  if (i(s)) return;
                  a(t, s);
                }
              }
              t(
                !1,
                (n > 1 ? e.indents : "") +
                  (e.name ? "</" + e.name + ">" : "") +
                  (e.indent && !r ? "\n" : "")
              ),
                r && r();
            }
            function i(e) {
              return (
                !!e.interrupt &&
                ((e.interrupt.append = t),
                (e.interrupt.end = s),
                (e.interrupt = !1),
                t(!0),
                !0)
              );
            }
            if (
              (t(
                !1,
                e.indents +
                  (e.name ? "<" + e.name : "") +
                  (e.attributes.length ? " " + e.attributes.join(" ") : "") +
                  (n ? (e.name ? ">" : "") : e.name ? "/>" : "") +
                  (e.indent && n > 1 ? "\n" : "")
              ),
              !n)
            )
              return t(!1, e.indent ? "\n" : "");
            i(e) || s();
          }
          (t.exports = function (t, e) {
            "object" != typeof e && (e = { indent: e });
            var r,
              s,
              c = e.stream ? new i() : null,
              u = "",
              l = !1,
              h = e.indent ? (!0 === e.indent ? "    " : e.indent) : "",
              p = !0;
            function d(t) {
              p ? n.nextTick(t) : t();
            }
            function f(t, e) {
              if (
                (void 0 !== e && (u += e),
                t && !l && ((c = c || new i()), (l = !0)),
                t && l)
              ) {
                var r = u;
                d(function () {
                  c.emit("data", r);
                }),
                  (u = "");
              }
            }
            function m(t, e) {
              a(f, o(t, h, h ? 1 : 0), e);
            }
            function w() {
              if (c) {
                var t = u;
                d(function () {
                  c.emit("data", t),
                    c.emit("end"),
                    (c.readable = !1),
                    c.emit("close");
                });
              }
            }
            return (
              d(function () {
                p = !1;
              }),
              e.declaration &&
                ((s = {
                  version: "1.0",
                  encoding: (r = e.declaration).encoding || "UTF-8",
                }),
                r.standalone && (s.standalone = r.standalone),
                m({ "?xml": { _attr: s } }),
                (u = u.replace("/>", "?>"))),
              t && t.forEach
                ? t.forEach(function (e, r) {
                    var n;
                    r + 1 === t.length && (n = w), m(e, n);
                  })
                : m(t, w),
              c ? ((c.readable = !0), c) : u
            );
          }),
            (t.exports.element = t.exports.Element =
              function () {
                var t = Array.prototype.slice.call(arguments),
                  e = {
                    _elem: o(t),
                    push: function (t) {
                      if (!this.append)
                        throw new Error("not assigned to a parent!");
                      var e = this,
                        r = this._elem.indent;
                      a(
                        this.append,
                        o(t, r, this._elem.icount + (r ? 1 : 0)),
                        function () {
                          e.append(!0);
                        }
                      );
                    },
                    close: function (t) {
                      void 0 !== t && this.push(t), this.end && this.end();
                    },
                  };
                return e;
              });
        },
        862: () => {},
        964: () => {},
      },
      e = {};
    function r(n) {
      var s = e[n];
      if (void 0 !== s) return s.exports;
      var i = (e[n] = { exports: {} });
      return t[n](i, i.exports, r), i.exports;
    }
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (r.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        "use strict";
        r.r(n),
          r.d(n, {
            AbstractNumbering: () => uo,
            Alignment: () => X,
            AlignmentAttributes: () => $,
            AlignmentType: () => U,
            Attributes: () => a,
            BaseEmphasisMark: () => dt,
            BaseXmlComponent: () => t,
            Body: () => xn,
            Bookmark: () => Kr,
            BookmarkEnd: () => Wr,
            BookmarkStart: () => Gr,
            Border: () => Y,
            BorderElement: () => q,
            BorderStyle: () => z,
            Column: () => Tn,
            ColumnAttributes: () => En,
            ColumnBreak: () => Tr,
            Columns: () => en,
            ColumnsAttributes: () => tn,
            ConcreteHyperlink: () => Mr,
            ConcreteNumbering: () => po,
            DeletedTextRun: () => ba,
            DocGridAttributes: () => rn,
            Document: () => Yo,
            DocumentAttributes: () => An,
            DocumentBackground: () => Rn,
            DocumentBackgroundAttributes: () => Sn,
            DocumentDefaults: () => Xo,
            DocumentGrid: () => nn,
            DocumentGridType: () => ee,
            DotEmphasisMark: () => mt,
            Drawing: () => dr,
            DropCapType: () => kn,
            EMPTY_OBJECT: () => e,
            EmphasisMark: () => ft,
            EmphasisMarkType: () => G,
            ExternalHyperlink: () => zr,
            File: () => Yo,
            FootNoteReferenceRunAttributes: () => ua,
            FootNotes: () => Gi,
            Footer: () => ca,
            FooterWrapper: () => Li,
            FootnoteReference: () => la,
            FootnoteReferenceRun: () => ha,
            FrameAnchorType: () => Dn,
            FrameProperties: () => Fn,
            FramePropertiesAttributes: () => Pn,
            FrameWrap: () => Ln,
            GridSpan: () => js,
            Header: () => aa,
            HeaderFooterReference: () => Jr,
            HeaderFooterReferenceType: () => Jt,
            HeaderFooterType: () => te,
            HeaderWrapper: () => Xi,
            HeadingLevel: () => Vt,
            HeightRule: () => ii,
            HorizontalPosition: () => me,
            HorizontalPositionAlign: () => _a,
            HorizontalPositionRelativeFrom: () => zt,
            HpsMeasureElement: () => P,
            HyperlinkType: () => Yt,
            IgnoreIfEmptyXmlComponent: () => i,
            ImageRun: () => fr,
            ImportDotx: () => La,
            ImportedRootElementAttributes: () => p,
            ImportedXmlComponent: () => h,
            Indent: () => tt,
            InitializableXmlComponent: () => f,
            InsertedTextRun: () => pa,
            InternalHyperlink: () => Ur,
            LeaderType: () => Xt,
            Level: () => io,
            LevelBase: () => so,
            LevelForOverride: () => oo,
            LevelFormat: () => Yi,
            LevelOverride: () => mo,
            LevelSuffix: () => Qi,
            LineNumberAttributes: () => sn,
            LineNumberRestartFormat: () => re,
            LineNumberType: () => on,
            LineRuleType: () => Wt,
            Math: () => Un,
            MathAccentCharacter: () => Vn,
            MathAngledBrackets: () => Ns,
            MathBase: () => $n,
            MathCurlyBrackets: () => Is,
            MathDegree: () => ds,
            MathDenominator: () => jn,
            MathFraction: () => Gn,
            MathFunction: () => vs,
            MathFunctionName: () => ys,
            MathFunctionProperties: () => bs,
            MathLimitLocation: () => qn,
            MathNArayProperties: () => ts,
            MathNumerator: () => Kn,
            MathPreSubSuperScript: () => hs,
            MathPreSubSuperScriptProperties: () => ls,
            MathRadical: () => gs,
            MathRadicalProperties: () => ws,
            MathRoundBrackets: () => Ss,
            MathRun: () => Hn,
            MathSquareBrackets: () => Rs,
            MathSubScript: () => as,
            MathSubScriptElement: () => es,
            MathSubScriptProperties: () => os,
            MathSubSuperScript: () => us,
            MathSubSuperScriptProperties: () => cs,
            MathSum: () => ns,
            MathSuperScript: () => is,
            MathSuperScriptElement: () => rs,
            MathSuperScriptProperties: () => ss,
            Media: () => qi,
            NumberFormat: () => Ea,
            NumberProperties: () => kr,
            NumberValueElement: () => B,
            Numbering: () => yo,
            OnOffElement: () => L,
            OutlineLevel: () => Vr,
            OverlapType: () => Qs,
            Packer: () => Oa,
            PageBorderDisplay: () => ne,
            PageBorderOffsetFrom: () => se,
            PageBorderZOrder: () => ie,
            PageBorders: () => cn,
            PageBreak: () => Er,
            PageBreakBefore: () => Ar,
            PageMargin: () => ln,
            PageMarginAttributes: () => un,
            PageNumber: () => V,
            PageNumberSeparator: () => oe,
            PageNumberType: () => pn,
            PageNumberTypeAttributes: () => hn,
            PageOrientation: () => ae,
            PageReference: () => qr,
            PageSize: () => fn,
            PageSizeAttributes: () => dn,
            PageTextDirection: () => wn,
            PageTextDirectionType: () => ce,
            Paragraph: () => Mn,
            ParagraphProperties: () => Bn,
            ParagraphPropertiesDefaults: () => Vo,
            RelativeHorizontalPosition: () => ri,
            RelativeVerticalPosition: () => ni,
            Run: () => Ot,
            RunFonts: () => _t,
            RunProperties: () => St,
            RunPropertiesChange: () => Rt,
            RunPropertiesDefaults: () => $o,
            SectionProperties: () => _n,
            SectionType: () => ue,
            SectionTypeAttributes: () => gn,
            SequentialIdentifier: () => gr,
            Shading: () => pt,
            ShadingType: () => K,
            SimpleField: () => vr,
            SimpleMailMergeField: () => _r,
            SimplePos: () => he,
            Spacing: () => Rr,
            StringContainer: () => M,
            StringValueElement: () => F,
            Style: () => Ir,
            StyleForCharacter: () => Oo,
            StyleForParagraph: () => No,
            StyleLevel: () => oa,
            Styles: () => Wo,
            SymbolRun: () => Lt,
            TDirection: () => Vs,
            Tab: () => yr,
            TabAttributes: () => Or,
            TabStop: () => Nr,
            TabStopItem: () => Cr,
            TabStopPosition: () => qt,
            TabStopType: () => $t,
            Table: () => pi,
            TableAnchorType: () => ei,
            TableBorders: () => Ys,
            TableCell: () => Xs,
            TableCellBorders: () => zs,
            TableFloatOptionsAttributes: () => ai,
            TableFloatProperties: () => ci,
            TableLayout: () => li,
            TableLayoutType: () => si,
            TableOfContents: () => ia,
            TableOverlap: () => ti,
            TableProperties: () => hi,
            TableRow: () => wi,
            TableRowHeight: () => fi,
            TableRowHeightAttributes: () => di,
            TableRowProperties: () => mi,
            TableWidthElement: () => Ms,
            TextDirection: () => Fs,
            TextRun: () => Ct,
            TextWrappingSide: () => Kt,
            TextWrappingType: () => jt,
            ThematicBreak: () => Q,
            Type: () => yn,
            Underline: () => At,
            UnderlineType: () => W,
            VerticalAlign: () => Qt,
            VerticalAlignAttributes: () => Zr,
            VerticalAlignElement: () => Yr,
            VerticalMerge: () => Gs,
            VerticalMergeType: () => Ps,
            VerticalPosition: () => ge,
            VerticalPositionAlign: () => xa,
            VerticalPositionRelativeFrom: () => Ht,
            WORKAROUND: () => Qo,
            WORKAROUND2: () => Zi,
            WORKAROUND3: () => d,
            WORKAROUND4: () => ps,
            WidthType: () => Ds,
            WrapNone: () => $e,
            WrapSquare: () => qe,
            WrapTight: () => Ye,
            WrapTopAndBottom: () => Je,
            XmlAttributeComponent: () => o,
            XmlComponent: () => s,
            convertInchesToTwip: () => Bt,
            convertMillimetersToTwip: () => Ft,
            convertToXmlComponent: () => u,
            dateTimeValue: () => D,
            decimalNumber: () => m,
            eighthPointMeasureValue: () => C,
            hexColorValue: () => T,
            hpsMeasureValue: () => S,
            longHexNumber: () => y,
            measurementOrPercentValue: () => O,
            percentageValue: () => N,
            pointMeasureValue: () => k,
            positiveUniversalMeasureValue: () => E,
            sectionMarginDefaults: () => bn,
            sectionPageSizeDefaults: () => vn,
            shortHexNumber: () => b,
            signedHpsMeasureValue: () => R,
            signedTwipsMeasureValue: () => A,
            twipsMeasureValue: () => I,
            uCharHexNumber: () => v,
            uniqueId: () => Ut,
            uniqueNumericId: () => Mt,
            universalMeasureValue: () => _,
            unsignedDecimalNumber: () => w,
          });
        class t {
          constructor(t) {
            this.rootKey = t;
          }
        }
        const e = Object.seal({});
        class s extends t {
          constructor(t) {
            super(t), (this.root = new Array());
          }
          prepForXml(r) {
            var n;
            const s = this.root
              .map((e) => (e instanceof t ? e.prepForXml(r) : e))
              .filter((t) => void 0 !== t);
            return {
              [this.rootKey]: s.length
                ? 1 === s.length &&
                  (null === (n = s[0]) || void 0 === n ? void 0 : n._attr)
                  ? s[0]
                  : s
                : e,
            };
          }
          addChildElement(t) {
            return this.root.push(t), this;
          }
        }
        class i extends s {
          prepForXml(t) {
            const e = super.prepForXml(t);
            if (
              e &&
              ("object" != typeof e[this.rootKey] ||
                Object.keys(e[this.rootKey]).length)
            )
              return e;
          }
        }
        class o extends t {
          constructor(t) {
            super("_attr"), (this.root = t);
          }
          prepForXml(t) {
            const e = {};
            return (
              Object.keys(this.root).forEach((t) => {
                const r = this.root[t];
                if (void 0 !== r) {
                  const n = (this.xmlKeys && this.xmlKeys[t]) || t;
                  e[n] = r;
                }
              }),
              { _attr: e }
            );
          }
          set(t) {
            this.root = t;
          }
        }
        class a extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                val: "w:val",
                color: "w:color",
                fill: "w:fill",
                space: "w:space",
                sz: "w:sz",
                type: "w:type",
                rsidR: "w:rsidR",
                rsidRPr: "w:rsidRPr",
                rsidSect: "w:rsidSect",
                w: "w:w",
                h: "w:h",
                top: "w:top",
                right: "w:right",
                bottom: "w:bottom",
                left: "w:left",
                header: "w:header",
                footer: "w:footer",
                gutter: "w:gutter",
                linePitch: "w:linePitch",
                pos: "w:pos",
              });
          }
        }
        var c = r(888);
        function u(t) {
          switch (t.type) {
            case void 0:
            case "element":
              const e = new h(t.name, t.attributes),
                r = t.elements || [];
              for (const t of r) {
                const r = u(t);
                void 0 !== r && e.push(r);
              }
              return e;
            case "text":
              return t.text;
            default:
              return;
          }
        }
        class l extends o {}
        class h extends s {
          static fromXmlString(t) {
            return u((0, c.xml2js)(t, { compact: !1 }));
          }
          constructor(t, e) {
            super(t), e && this.root.push(new l(e));
          }
          push(t) {
            this.root.push(t);
          }
        }
        class p extends s {
          constructor(t) {
            super(""), (this._attr = t);
          }
          prepForXml(t) {
            return { _attr: this._attr };
          }
        }
        const d = "";
        class f extends s {
          constructor(t, e) {
            super(t), e && (this.root = e.root);
          }
        }
        function m(t) {
          if (isNaN(t))
            throw new Error(
              `Invalid value '${t}' specified. Must be an integer.`
            );
          return Math.floor(t);
        }
        function w(t) {
          const e = m(t);
          if (e < 0)
            throw new Error(
              `Invalid value '${t}' specified. Must be a positive integer.`
            );
          return e;
        }
        function g(t, e) {
          const r = 2 * e;
          if (t.length !== r || isNaN(Number("0x" + t)))
            throw new Error(
              `Invalid hex value '${t}'. Expected ${r} digit hex value`
            );
          return t;
        }
        function y(t) {
          return g(t, 4);
        }
        function b(t) {
          return g(t, 2);
        }
        function v(t) {
          return g(t, 1);
        }
        function _(t) {
          const e = t.slice(-2);
          if (!x.includes(e))
            throw new Error(
              `Invalid unit '${e}' specified. Valid units are ${x.join(", ")}`
            );
          const r = t.substring(0, t.length - 2);
          if (isNaN(Number(r)))
            throw new Error(
              `Invalid value '${r}' specified. Expected a valid number.`
            );
          return `${Number(r)}${e}`;
        }
        const x = ["mm", "cm", "in", "pt", "pc", "pi"];
        function E(t) {
          const e = _(t);
          if (parseFloat(e) < 0)
            throw new Error(
              `Invalid value '${e}' specified. Expected a positive number.`
            );
          return e;
        }
        function T(t) {
          return "auto" === t
            ? t
            : g("#" === t.charAt(0) ? t.substring(1) : t, 3);
        }
        function A(t) {
          return "string" == typeof t ? _(t) : m(t);
        }
        function S(t) {
          return "string" == typeof t ? E(t) : w(t);
        }
        function R(t) {
          return "string" == typeof t ? _(t) : m(t);
        }
        function I(t) {
          return "string" == typeof t ? E(t) : w(t);
        }
        function N(t) {
          if ("%" !== t.slice(-1))
            throw new Error(
              `Invalid value '${t}'. Expected percentage value (eg '55%')`
            );
          const e = t.substring(0, t.length - 1);
          if (isNaN(Number(e)))
            throw new Error(
              `Invalid value '${e}' specified. Expected a valid number.`
            );
          return `${Number(e)}%`;
        }
        function O(t) {
          return "number" == typeof t
            ? m(t)
            : "%" === t.slice(-1)
            ? N(t)
            : _(t);
        }
        const C = w,
          k = w;
        function D(t) {
          return t.toISOString();
        }
        class L extends s {
          constructor(t, e = !0) {
            super(t), !0 !== e && this.root.push(new a({ val: e }));
          }
        }
        class P extends s {
          constructor(t, e) {
            super(t), this.root.push(new a({ val: S(e) }));
          }
        }
        class F extends s {
          constructor(t, e) {
            super(t), this.root.push(new a({ val: e }));
          }
        }
        class B extends s {
          constructor(t, e) {
            super(t), this.root.push(new a({ val: e }));
          }
        }
        class M extends s {
          constructor(t, e) {
            super(t), this.root.push(e);
          }
        }
        var U, z, H, j, K, G, W, V;
        !(function (t) {
          (t.START = "start"),
            (t.END = "end"),
            (t.CENTER = "center"),
            (t.BOTH = "both"),
            (t.JUSTIFIED = "both"),
            (t.DISTRIBUTE = "distribute"),
            (t.LEFT = "left"),
            (t.RIGHT = "right");
        })(U || (U = {}));
        class $ extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class X extends s {
          constructor(t) {
            super("w:jc"), this.root.push(new $({ val: t }));
          }
        }
        class q extends s {
          constructor(t, { color: e, size: r, space: n, style: s }) {
            super(t),
              this.root.push(
                new Z({
                  style: s,
                  color: void 0 === e ? void 0 : T(e),
                  size: void 0 === r ? void 0 : C(r),
                  space: void 0 === n ? void 0 : k(n),
                })
              );
          }
        }
        class Z extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                style: "w:val",
                color: "w:color",
                size: "w:sz",
                space: "w:space",
              });
          }
        }
        !(function (t) {
          (t.SINGLE = "single"),
            (t.DASH_DOT_STROKED = "dashDotStroked"),
            (t.DASHED = "dashed"),
            (t.DASH_SMALL_GAP = "dashSmallGap"),
            (t.DOT_DASH = "dotDash"),
            (t.DOT_DOT_DASH = "dotDotDash"),
            (t.DOTTED = "dotted"),
            (t.DOUBLE = "double"),
            (t.DOUBLE_WAVE = "doubleWave"),
            (t.INSET = "inset"),
            (t.NIL = "nil"),
            (t.NONE = "none"),
            (t.OUTSET = "outset"),
            (t.THICK = "thick"),
            (t.THICK_THIN_LARGE_GAP = "thickThinLargeGap"),
            (t.THICK_THIN_MEDIUM_GAP = "thickThinMediumGap"),
            (t.THICK_THIN_SMALL_GAP = "thickThinSmallGap"),
            (t.THIN_THICK_LARGE_GAP = "thinThickLargeGap"),
            (t.THIN_THICK_MEDIUM_GAP = "thinThickMediumGap"),
            (t.THIN_THICK_SMALL_GAP = "thinThickSmallGap"),
            (t.THIN_THICK_THIN_LARGE_GAP = "thinThickThinLargeGap"),
            (t.THIN_THICK_THIN_MEDIUM_GAP = "thinThickThinMediumGap"),
            (t.THIN_THICK_THIN_SMALL_GAP = "thinThickThinSmallGap"),
            (t.THREE_D_EMBOSS = "threeDEmboss"),
            (t.THREE_D_ENGRAVE = "threeDEngrave"),
            (t.TRIPLE = "triple"),
            (t.WAVE = "wave");
        })(z || (z = {}));
        class Y extends i {
          constructor(t) {
            super("w:pBdr"),
              t.top && this.root.push(new q("w:top", t.top)),
              t.bottom && this.root.push(new q("w:bottom", t.bottom)),
              t.left && this.root.push(new q("w:left", t.left)),
              t.right && this.root.push(new q("w:right", t.right));
          }
        }
        class Q extends s {
          constructor() {
            super("w:pBdr");
            const t = new q("w:bottom", {
              color: "auto",
              space: 1,
              style: z.SINGLE,
              size: 6,
            });
            this.root.push(t);
          }
        }
        class J extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                start: "w:start",
                end: "w:end",
                left: "w:left",
                right: "w:right",
                hanging: "w:hanging",
                firstLine: "w:firstLine",
              });
          }
        }
        class tt extends s {
          constructor({
            start: t,
            end: e,
            left: r,
            right: n,
            hanging: s,
            firstLine: i,
          }) {
            super("w:ind"),
              this.root.push(
                new J({
                  start: void 0 === t ? void 0 : A(t),
                  end: void 0 === e ? void 0 : A(e),
                  left: void 0 === r ? void 0 : A(r),
                  right: void 0 === n ? void 0 : A(n),
                  hanging: void 0 === s ? void 0 : I(s),
                  firstLine: void 0 === i ? void 0 : I(i),
                })
              );
          }
        }
        class et extends s {
          constructor() {
            super("w:br");
          }
        }
        !(function (t) {
          (t.BEGIN = "begin"), (t.END = "end"), (t.SEPARATE = "separate");
        })(H || (H = {}));
        class rt extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { type: "w:fldCharType", dirty: "w:dirty" });
          }
        }
        class nt extends s {
          constructor(t) {
            super("w:fldChar"),
              this.root.push(new rt({ type: H.BEGIN, dirty: t }));
          }
        }
        class st extends s {
          constructor(t) {
            super("w:fldChar"),
              this.root.push(new rt({ type: H.SEPARATE, dirty: t }));
          }
        }
        class it extends s {
          constructor(t) {
            super("w:fldChar"),
              this.root.push(new rt({ type: H.END, dirty: t }));
          }
        }
        !(function (t) {
          (t.DEFAULT = "default"), (t.PRESERVE = "preserve");
        })(j || (j = {}));
        class ot extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class at extends s {
          constructor() {
            super("w:instrText"),
              this.root.push(new ot({ space: j.PRESERVE })),
              this.root.push("PAGE");
          }
        }
        class ct extends s {
          constructor() {
            super("w:instrText"),
              this.root.push(new ot({ space: j.PRESERVE })),
              this.root.push("NUMPAGES");
          }
        }
        class ut extends s {
          constructor() {
            super("w:instrText"),
              this.root.push(new ot({ space: j.PRESERVE })),
              this.root.push("SECTIONPAGES");
          }
        }
        class lt extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                id: "w:id",
                author: "w:author",
                date: "w:date",
              });
          }
        }
        class ht extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                fill: "w:fill",
                color: "w:color",
                type: "w:val",
              });
          }
        }
        class pt extends s {
          constructor({ fill: t, color: e, type: r }) {
            super("w:shd"),
              this.root.push(
                new ht({
                  fill: void 0 === t ? void 0 : T(t),
                  color: void 0 === e ? void 0 : T(e),
                  type: r,
                })
              );
          }
        }
        !(function (t) {
          (t.CLEAR = "clear"),
            (t.DIAGONAL_CROSS = "diagCross"),
            (t.DIAGONAL_STRIPE = "diagStripe"),
            (t.HORIZONTAL_CROSS = "horzCross"),
            (t.HORIZONTAL_STRIPE = "horzStripe"),
            (t.NIL = "nil"),
            (t.PERCENT_5 = "pct5"),
            (t.PERCENT_10 = "pct10"),
            (t.PERCENT_12 = "pct12"),
            (t.PERCENT_15 = "pct15"),
            (t.PERCENT_20 = "pct20"),
            (t.PERCENT_25 = "pct25"),
            (t.PERCENT_30 = "pct30"),
            (t.PERCENT_35 = "pct35"),
            (t.PERCENT_37 = "pct37"),
            (t.PERCENT_40 = "pct40"),
            (t.PERCENT_45 = "pct45"),
            (t.PERCENT_50 = "pct50"),
            (t.PERCENT_55 = "pct55"),
            (t.PERCENT_60 = "pct60"),
            (t.PERCENT_62 = "pct62"),
            (t.PERCENT_65 = "pct65"),
            (t.PERCENT_70 = "pct70"),
            (t.PERCENT_75 = "pct75"),
            (t.PERCENT_80 = "pct80"),
            (t.PERCENT_85 = "pct85"),
            (t.PERCENT_87 = "pct87"),
            (t.PERCENT_90 = "pct90"),
            (t.PERCENT_95 = "pct95"),
            (t.REVERSE_DIAGONAL_STRIPE = "reverseDiagStripe"),
            (t.SOLID = "solid"),
            (t.THIN_DIAGONAL_CROSS = "thinDiagCross"),
            (t.THIN_DIAGONAL_STRIPE = "thinDiagStripe"),
            (t.THIN_HORIZONTAL_CROSS = "thinHorzCross"),
            (t.THIN_REVERSE_DIAGONAL_STRIPE = "thinReverseDiagStripe"),
            (t.THIN_VERTICAL_STRIPE = "thinVertStripe"),
            (t.VERTICAL_STRIPE = "vertStripe");
        })(K || (K = {})),
          (function (t) {
            t.DOT = "dot";
          })(G || (G = {}));
        class dt extends s {
          constructor(t) {
            super("w:em"), this.root.push(new a({ val: t }));
          }
        }
        class ft extends dt {
          constructor(t = G.DOT) {
            super(t);
          }
        }
        class mt extends dt {
          constructor() {
            super(G.DOT);
          }
        }
        class wt extends s {
          constructor(t) {
            super("w:spacing"), this.root.push(new a({ val: A(t) }));
          }
        }
        class gt extends s {
          constructor(t) {
            super("w:color"), this.root.push(new a({ val: T(t) }));
          }
        }
        class yt extends s {
          constructor(t) {
            super("w:highlight"), this.root.push(new a({ val: t }));
          }
        }
        class bt extends s {
          constructor(t) {
            super("w:highlightCs"), this.root.push(new a({ val: t }));
          }
        }
        class vt extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                ascii: "w:ascii",
                cs: "w:cs",
                eastAsia: "w:eastAsia",
                hAnsi: "w:hAnsi",
                hint: "w:hint",
              });
          }
        }
        class _t extends s {
          constructor(t, e) {
            if ((super("w:rFonts"), "string" == typeof t)) {
              const r = t;
              this.root.push(
                new vt({ ascii: r, cs: r, eastAsia: r, hAnsi: r, hint: e })
              );
            } else {
              const e = t;
              this.root.push(new vt(e));
            }
          }
        }
        class xt extends s {
          constructor(t) {
            super("w:vertAlign"), this.root.push(new a({ val: t }));
          }
        }
        class Et extends xt {
          constructor() {
            super("superscript");
          }
        }
        class Tt extends xt {
          constructor() {
            super("subscript");
          }
        }
        !(function (t) {
          (t.SINGLE = "single"),
            (t.WORDS = "words"),
            (t.DOUBLE = "double"),
            (t.THICK = "thick"),
            (t.DOTTED = "dotted"),
            (t.DOTTEDHEAVY = "dottedHeavy"),
            (t.DASH = "dash"),
            (t.DASHEDHEAVY = "dashedHeavy"),
            (t.DASHLONG = "dashLong"),
            (t.DASHLONGHEAVY = "dashLongHeavy"),
            (t.DOTDASH = "dotDash"),
            (t.DASHDOTHEAVY = "dashDotHeavy"),
            (t.DOTDOTDASH = "dotDotDash"),
            (t.DASHDOTDOTHEAVY = "dashDotDotHeavy"),
            (t.WAVE = "wave"),
            (t.WAVYHEAVY = "wavyHeavy"),
            (t.WAVYDOUBLE = "wavyDouble");
        })(W || (W = {}));
        class At extends s {
          constructor(t = W.SINGLE, e) {
            super("w:u"),
              this.root.push(
                new a({ val: t, color: void 0 === e ? void 0 : T(e) })
              );
          }
        }
        class St extends i {
          constructor(t) {
            var e, r;
            if ((super("w:rPr"), !t)) return;
            void 0 !== t.bold && this.push(new L("w:b", t.bold)),
              ((void 0 === t.boldComplexScript && void 0 !== t.bold) ||
                t.boldComplexScript) &&
                this.push(
                  new L(
                    "w:bCs",
                    null !== (e = t.boldComplexScript) && void 0 !== e
                      ? e
                      : t.bold
                  )
                ),
              void 0 !== t.italics && this.push(new L("w:i", t.italics)),
              ((void 0 === t.italicsComplexScript && void 0 !== t.italics) ||
                t.italicsComplexScript) &&
                this.push(
                  new L(
                    "w:iCs",
                    null !== (r = t.italicsComplexScript) && void 0 !== r
                      ? r
                      : t.italics
                  )
                ),
              t.underline &&
                this.push(new At(t.underline.type, t.underline.color)),
              t.emphasisMark && this.push(new ft(t.emphasisMark.type)),
              t.color && this.push(new gt(t.color)),
              void 0 !== t.size && this.push(new P("w:sz", t.size));
            const n =
              void 0 === t.sizeComplexScript || !0 === t.sizeComplexScript
                ? t.size
                : t.sizeComplexScript;
            n && this.push(new P("w:szCs", n)),
              void 0 !== t.rightToLeft &&
                this.push(new L("w:rtl", t.rightToLeft)),
              void 0 !== t.smallCaps
                ? this.push(new L("w:smallCaps", t.smallCaps))
                : void 0 !== t.allCaps && this.push(new L("w:caps", t.allCaps)),
              void 0 !== t.strike && this.push(new L("w:strike", t.strike)),
              void 0 !== t.doubleStrike &&
                this.push(new L("w:dstrike", t.doubleStrike)),
              t.subScript && this.push(new Tt()),
              t.superScript && this.push(new Et()),
              t.style && this.push(new F("w:rStyle", t.style)),
              t.font &&
                ("string" == typeof t.font
                  ? this.push(new _t(t.font))
                  : "name" in t.font
                  ? this.push(new _t(t.font.name, t.font.hint))
                  : this.push(new _t(t.font))),
              t.highlight && this.push(new yt(t.highlight));
            const s =
              void 0 === t.highlightComplexScript ||
              !0 === t.highlightComplexScript
                ? t.highlight
                : t.highlightComplexScript;
            s && this.push(new bt(s)),
              t.characterSpacing && this.push(new wt(t.characterSpacing)),
              void 0 !== t.emboss && this.push(new L("w:emboss", t.emboss)),
              void 0 !== t.imprint && this.push(new L("w:imprint", t.imprint)),
              t.shading && this.push(new pt(t.shading)),
              t.revision && this.push(new Rt(t.revision));
          }
          push(t) {
            this.root.push(t);
          }
        }
        class Rt extends s {
          constructor(t) {
            super("w:rPrChange"),
              this.root.push(
                new lt({ id: t.id, author: t.author, date: t.date })
              ),
              this.addChildElement(new St(t));
          }
        }
        class It extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class Nt extends s {
          constructor(t) {
            super("w:t"),
              this.root.push(new It({ space: j.PRESERVE })),
              this.root.push(t);
          }
        }
        !(function (t) {
          (t.CURRENT = "CURRENT"),
            (t.TOTAL_PAGES = "TOTAL_PAGES"),
            (t.TOTAL_PAGES_IN_SECTION = "TOTAL_PAGES_IN_SECTION");
        })(V || (V = {}));
        class Ot extends s {
          constructor(t) {
            if (
              (super("w:r"),
              (this.properties = new St(t)),
              this.root.push(this.properties),
              t.break)
            )
              for (let e = 0; e < t.break; e++) this.root.push(new et());
            if (t.children)
              for (const e of t.children)
                if ("string" != typeof e) this.root.push(e);
                else
                  switch (e) {
                    case V.CURRENT:
                      this.root.push(new nt()),
                        this.root.push(new at()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES:
                      this.root.push(new nt()),
                        this.root.push(new ct()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES_IN_SECTION:
                      this.root.push(new nt()),
                        this.root.push(new ut()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    default:
                      this.root.push(new Nt(e));
                  }
            else t.text && this.root.push(new Nt(t.text));
          }
        }
        class Ct extends Ot {
          constructor(t) {
            if ("string" == typeof t)
              return super({}), this.root.push(new Nt(t)), this;
            super(t);
          }
        }
        class kt extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { char: "w:char", symbolfont: "w:font" });
          }
        }
        class Dt extends s {
          constructor(t = "", e = "Wingdings") {
            super("w:sym"), this.root.push(new kt({ char: t, symbolfont: e }));
          }
        }
        class Lt extends Ot {
          constructor(t) {
            if ("string" == typeof t)
              return super({}), void this.root.push(new Dt(t));
            super(t), this.root.push(new Dt(t.char, t.symbolfont));
          }
        }
        let Pt = 0;
        const Ft = (t) => Math.floor((t / 25.4) * 72 * 20),
          Bt = (t) => Math.floor(72 * t * 20),
          Mt = () => ++Pt,
          Ut = () =>
            ((t = 21) => {
              let e = "",
                r = t;
              for (; r--; )
                e +=
                  "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
                    (64 * Math.random()) | 0
                  ];
              return e;
            })().toLowerCase();
        var zt,
          Ht,
          jt,
          Kt,
          Gt,
          Wt,
          Vt,
          $t,
          Xt,
          qt,
          Zt,
          Yt,
          Qt,
          Jt,
          te,
          ee,
          re,
          ne,
          se,
          ie,
          oe,
          ae,
          ce,
          ue;
        !(function (t) {
          (t.CHARACTER = "character"),
            (t.COLUMN = "column"),
            (t.INSIDE_MARGIN = "insideMargin"),
            (t.LEFT_MARGIN = "leftMargin"),
            (t.MARGIN = "margin"),
            (t.OUTSIDE_MARGIN = "outsideMargin"),
            (t.PAGE = "page"),
            (t.RIGHT_MARGIN = "rightMargin");
        })(zt || (zt = {})),
          (function (t) {
            (t.BOTTOM_MARGIN = "bottomMargin"),
              (t.INSIDE_MARGIN = "insideMargin"),
              (t.LINE = "line"),
              (t.MARGIN = "margin"),
              (t.OUTSIDE_MARGIN = "outsideMargin"),
              (t.PAGE = "page"),
              (t.PARAGRAPH = "paragraph"),
              (t.TOP_MARGIN = "topMargin");
          })(Ht || (Ht = {}));
        class le extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { x: "x", y: "y" });
          }
        }
        class he extends s {
          constructor() {
            super("wp:simplePos"), this.root.push(new le({ x: 0, y: 0 }));
          }
        }
        class pe extends s {
          constructor(t) {
            super("wp:align"), this.root.push(t);
          }
        }
        class de extends s {
          constructor(t) {
            super("wp:posOffset"), this.root.push(t.toString());
          }
        }
        class fe extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { relativeFrom: "relativeFrom" });
          }
        }
        class me extends s {
          constructor(t) {
            if (
              (super("wp:positionH"),
              this.root.push(new fe({ relativeFrom: t.relative || zt.PAGE })),
              t.align)
            )
              this.root.push(new pe(t.align));
            else {
              if (void 0 === t.offset)
                throw new Error(
                  "There is no configuration provided for floating position (Align or offset)"
                );
              this.root.push(new de(t.offset));
            }
          }
        }
        class we extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { relativeFrom: "relativeFrom" });
          }
        }
        class ge extends s {
          constructor(t) {
            if (
              (super("wp:positionV"),
              this.root.push(new we({ relativeFrom: t.relative || Ht.PAGE })),
              t.align)
            )
              this.root.push(new pe(t.align));
            else {
              if (void 0 === t.offset)
                throw new Error(
                  "There is no configuration provided for floating position (Align or offset)"
                );
              this.root.push(new de(t.offset));
            }
          }
        }
        class ye extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { uri: "uri" });
          }
        }
        class be extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { embed: "r:embed", cstate: "cstate" });
          }
        }
        class ve extends s {
          constructor(t) {
            super("a:blip"),
              this.root.push(
                new be({ embed: `rId{${t.fileName}}`, cstate: "none" })
              );
          }
        }
        class _e extends s {
          constructor() {
            super("a:srcRect");
          }
        }
        class xe extends s {
          constructor() {
            super("a:fillRect");
          }
        }
        class Ee extends s {
          constructor() {
            super("a:stretch"), this.root.push(new xe());
          }
        }
        class Te extends s {
          constructor(t) {
            super("pic:blipFill"),
              this.root.push(new ve(t)),
              this.root.push(new _e()),
              this.root.push(new Ee());
          }
        }
        class Ae extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                noChangeAspect: "noChangeAspect",
                noChangeArrowheads: "noChangeArrowheads",
              });
          }
        }
        class Se extends s {
          constructor() {
            super("a:picLocks"),
              this.root.push(
                new Ae({ noChangeAspect: 1, noChangeArrowheads: 1 })
              );
          }
        }
        class Re extends s {
          constructor() {
            super("pic:cNvPicPr"), this.root.push(new Se());
          }
        }
        class Ie extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { id: "id", name: "name", descr: "descr" });
          }
        }
        class Ne extends s {
          constructor() {
            super("pic:cNvPr"),
              this.root.push(new Ie({ id: 0, name: "", descr: "" }));
          }
        }
        class Oe extends s {
          constructor() {
            super("pic:nvPicPr"),
              this.root.push(new Ne()),
              this.root.push(new Re());
          }
        }
        class Ce extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { xmlns: "xmlns:pic" });
          }
        }
        class ke extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { cx: "cx", cy: "cy" });
          }
        }
        class De extends s {
          constructor(t, e) {
            super("a:ext"),
              (this.attributes = new ke({ cx: t, cy: e })),
              this.root.push(this.attributes);
          }
        }
        class Le extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { x: "x", y: "y" });
          }
        }
        class Pe extends s {
          constructor() {
            super("a:off"), this.root.push(new Le({ x: 0, y: 0 }));
          }
        }
        class Fe extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                flipVertical: "flipV",
                flipHorizontal: "flipH",
                rotation: "rot",
              });
          }
        }
        class Be extends s {
          constructor(t) {
            var e, r;
            super("a:xfrm"),
              this.root.push(
                new Fe({
                  flipVertical:
                    null === (e = t.flip) || void 0 === e ? void 0 : e.vertical,
                  flipHorizontal:
                    null === (r = t.flip) || void 0 === r
                      ? void 0
                      : r.horizontal,
                  rotation: t.rotation,
                })
              ),
              (this.extents = new De(t.emus.x, t.emus.y)),
              this.root.push(new Pe()),
              this.root.push(this.extents);
          }
        }
        class Me extends s {
          constructor() {
            super("a:avLst");
          }
        }
        class Ue extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { prst: "prst" });
          }
        }
        class ze extends s {
          constructor() {
            super("a:prstGeom"),
              this.root.push(new Ue({ prst: "rect" })),
              this.root.push(new Me());
          }
        }
        class He extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { bwMode: "bwMode" });
          }
        }
        class je extends s {
          constructor(t) {
            super("pic:spPr"),
              this.root.push(new He({ bwMode: "auto" })),
              (this.form = new Be(t)),
              this.root.push(this.form),
              this.root.push(new ze());
          }
        }
        class Ke extends s {
          constructor(t, e) {
            super("pic:pic"),
              this.root.push(
                new Ce({
                  xmlns:
                    "http://schemas.openxmlformats.org/drawingml/2006/picture",
                })
              ),
              this.root.push(new Oe()),
              this.root.push(new Te(t)),
              this.root.push(new je(e));
          }
        }
        class Ge extends s {
          constructor(t, e) {
            super("a:graphicData"),
              this.root.push(
                new ye({
                  uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
                })
              ),
              (this.pic = new Ke(t, e)),
              this.root.push(this.pic);
          }
        }
        class We extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { a: "xmlns:a" });
          }
        }
        class Ve extends s {
          constructor(t, e) {
            super("a:graphic"),
              this.root.push(
                new We({
                  a: "http://schemas.openxmlformats.org/drawingml/2006/main",
                })
              ),
              (this.data = new Ge(t, e)),
              this.root.push(this.data);
          }
        }
        !(function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.SQUARE = 1)] = "SQUARE"),
            (t[(t.TIGHT = 2)] = "TIGHT"),
            (t[(t.TOP_AND_BOTTOM = 3)] = "TOP_AND_BOTTOM");
        })(jt || (jt = {})),
          (function (t) {
            (t.BOTH_SIDES = "bothSides"),
              (t.LEFT = "left"),
              (t.RIGHT = "right"),
              (t.LARGEST = "largest");
          })(Kt || (Kt = {}));
        class $e extends s {
          constructor() {
            super("wp:wrapNone");
          }
        }
        class Xe extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                distT: "distT",
                distB: "distB",
                distL: "distL",
                distR: "distR",
                wrapText: "wrapText",
              });
          }
        }
        class qe extends s {
          constructor(t, e = { top: 0, bottom: 0, left: 0, right: 0 }) {
            super("wp:wrapSquare"),
              this.root.push(
                new Xe({
                  wrapText: t.side || Kt.BOTH_SIDES,
                  distT: e.top,
                  distB: e.bottom,
                  distL: e.left,
                  distR: e.right,
                })
              );
          }
        }
        class Ze extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { distT: "distT", distB: "distB" });
          }
        }
        class Ye extends s {
          constructor(t = { top: 0, bottom: 0 }) {
            super("wp:wrapTight"),
              this.root.push(new Ze({ distT: t.top, distB: t.bottom }));
          }
        }
        class Qe extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { distT: "distT", distB: "distB" });
          }
        }
        class Je extends s {
          constructor(t = { top: 0, bottom: 0 }) {
            super("wp:wrapTopAndBottom"),
              this.root.push(new Qe({ distT: t.top, distB: t.bottom }));
          }
        }
        class tr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { id: "id", name: "name", descr: "descr" });
          }
        }
        class er extends s {
          constructor() {
            super("wp:docPr"),
              this.root.push(new tr({ id: 0, name: "", descr: "" }));
          }
        }
        class rr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { b: "b", l: "l", r: "r", t: "t" });
          }
        }
        class nr extends s {
          constructor() {
            super("wp:effectExtent"),
              this.root.push(new rr({ b: 0, l: 0, r: 0, t: 0 }));
          }
        }
        class sr extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { cx: "cx", cy: "cy" });
          }
        }
        class ir extends s {
          constructor(t, e) {
            super("wp:extent"),
              (this.attributes = new sr({ cx: t, cy: e })),
              this.root.push(this.attributes);
          }
        }
        class or extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                xmlns: "xmlns:a",
                noChangeAspect: "noChangeAspect",
              });
          }
        }
        class ar extends s {
          constructor() {
            super("a:graphicFrameLocks"),
              this.root.push(
                new or({
                  xmlns:
                    "http://schemas.openxmlformats.org/drawingml/2006/main",
                  noChangeAspect: 1,
                })
              );
          }
        }
        class cr extends s {
          constructor() {
            super("wp:cNvGraphicFramePr"), this.root.push(new ar());
          }
        }
        class ur extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                distT: "distT",
                distB: "distB",
                distL: "distL",
                distR: "distR",
                allowOverlap: "allowOverlap",
                behindDoc: "behindDoc",
                layoutInCell: "layoutInCell",
                locked: "locked",
                relativeHeight: "relativeHeight",
                simplePos: "simplePos",
              });
          }
        }
        class lr extends s {
          constructor(t, e, r) {
            super("wp:anchor");
            const n = Object.assign(
              {
                allowOverlap: !0,
                behindDocument: !1,
                lockAnchor: !1,
                layoutInCell: !0,
                verticalPosition: {},
                horizontalPosition: {},
              },
              r.floating
            );
            if (
              (this.root.push(
                new ur({
                  distT: (n.margins && n.margins.top) || 0,
                  distB: (n.margins && n.margins.bottom) || 0,
                  distL: (n.margins && n.margins.left) || 0,
                  distR: (n.margins && n.margins.right) || 0,
                  simplePos: "0",
                  allowOverlap: !0 === n.allowOverlap ? "1" : "0",
                  behindDoc: !0 === n.behindDocument ? "1" : "0",
                  locked: !0 === n.lockAnchor ? "1" : "0",
                  layoutInCell: !0 === n.layoutInCell ? "1" : "0",
                  relativeHeight: n.zIndex ? n.zIndex : e.emus.y,
                })
              ),
              this.root.push(new he()),
              this.root.push(new me(n.horizontalPosition)),
              this.root.push(new ge(n.verticalPosition)),
              this.root.push(new ir(e.emus.x, e.emus.y)),
              this.root.push(new nr()),
              void 0 !== r.floating && void 0 !== r.floating.wrap)
            )
              switch (r.floating.wrap.type) {
                case jt.SQUARE:
                  this.root.push(new qe(r.floating.wrap, r.floating.margins));
                  break;
                case jt.TIGHT:
                  this.root.push(new Ye(r.floating.margins));
                  break;
                case jt.TOP_AND_BOTTOM:
                  this.root.push(new Je(r.floating.margins));
                  break;
                case jt.NONE:
                default:
                  this.root.push(new $e());
              }
            else this.root.push(new $e());
            this.root.push(new er()),
              this.root.push(new cr()),
              this.root.push(new Ve(t, e));
          }
        }
        class hr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                distT: "distT",
                distB: "distB",
                distL: "distL",
                distR: "distR",
              });
          }
        }
        class pr extends s {
          constructor(t, e) {
            super("wp:inline"),
              this.root.push(
                new hr({ distT: 0, distB: 0, distL: 0, distR: 0 })
              ),
              (this.extent = new ir(e.emus.x, e.emus.y)),
              (this.graphic = new Ve(t, e)),
              this.root.push(this.extent),
              this.root.push(new nr()),
              this.root.push(new er()),
              this.root.push(new cr()),
              this.root.push(this.graphic);
          }
        }
        class dr extends s {
          constructor(t, e = {}) {
            super("w:drawing"),
              e.floating
                ? this.root.push(new lr(t, t.transformation, e))
                : ((this.inline = new pr(t, t.transformation)),
                  this.root.push(this.inline));
          }
        }
        class fr extends Ot {
          constructor(t) {
            super({}), (this.key = `${Ut()}.png`);
            const e =
              "string" == typeof t.data
                ? this.convertDataURIToBinary(t.data)
                : t.data;
            this.imageData = {
              stream: e,
              fileName: this.key,
              transformation: {
                pixels: {
                  x: Math.round(t.transformation.width),
                  y: Math.round(t.transformation.height),
                },
                emus: {
                  x: Math.round(9525 * t.transformation.width),
                  y: Math.round(9525 * t.transformation.height),
                },
                flip: t.transformation.flip,
                rotation: t.transformation.rotation
                  ? 6e4 * t.transformation.rotation
                  : void 0,
              },
            };
            const r = new dr(this.imageData, { floating: t.floating });
            this.root.push(r);
          }
          prepForXml(t) {
            return (
              t.file.Media.addImage(this.key, this.imageData),
              super.prepForXml(t)
            );
          }
          convertDataURIToBinary(t) {
            const e = ";base64,",
              n = t.indexOf(e) + e.length;
            return "function" == typeof atob
              ? new Uint8Array(
                  atob(t.substring(n))
                    .split("")
                    .map((t) => t.charCodeAt(0))
                )
              : new (r(764).Buffer)(t, "base64");
          }
        }
        class mr extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class wr extends s {
          constructor(t) {
            super("w:instrText"),
              this.root.push(new mr({ space: j.PRESERVE })),
              this.root.push(`SEQ ${t}`);
          }
        }
        class gr extends Ot {
          constructor(t) {
            super({}),
              this.root.push(new nt(!0)),
              this.root.push(new wr(t)),
              this.root.push(new st()),
              this.root.push(new it());
          }
        }
        class yr extends s {
          constructor() {
            super("w:tab");
          }
        }
        class br extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { instr: "w:instr" });
          }
        }
        class vr extends s {
          constructor(t, e) {
            super("w:fldSimple"),
              this.root.push(new br({ instr: t })),
              void 0 !== e && this.root.push(new Ct(e));
          }
        }
        class _r extends vr {
          constructor(t) {
            super(` MERGEFIELD ${t} `, `«${t}»`);
          }
        }
        !(function (t) {
          (t.COLUMN = "column"), (t.PAGE = "page");
        })(Gt || (Gt = {}));
        class xr extends s {
          constructor(t) {
            super("w:br"), this.root.push(new a({ type: t }));
          }
        }
        class Er extends Ot {
          constructor() {
            super({}), this.root.push(new xr(Gt.PAGE));
          }
        }
        class Tr extends Ot {
          constructor() {
            super({}), this.root.push(new xr(Gt.COLUMN));
          }
        }
        class Ar extends s {
          constructor() {
            super("w:pageBreakBefore");
          }
        }
        !(function (t) {
          (t.AT_LEAST = "atLeast"), (t.EXACTLY = "exactly"), (t.AUTO = "auto");
        })(Wt || (Wt = {}));
        class Sr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                after: "w:after",
                before: "w:before",
                line: "w:line",
                lineRule: "w:lineRule",
              });
          }
        }
        class Rr extends s {
          constructor(t) {
            super("w:spacing"), this.root.push(new Sr(t));
          }
        }
        !(function (t) {
          (t.HEADING_1 = "Heading1"),
            (t.HEADING_2 = "Heading2"),
            (t.HEADING_3 = "Heading3"),
            (t.HEADING_4 = "Heading4"),
            (t.HEADING_5 = "Heading5"),
            (t.HEADING_6 = "Heading6"),
            (t.TITLE = "Title");
        })(Vt || (Vt = {}));
        class Ir extends s {
          constructor(t) {
            super("w:pStyle"), this.root.push(new a({ val: t }));
          }
        }
        class Nr extends s {
          constructor(t, e, r) {
            super("w:tabs"), this.root.push(new Cr(t, e, r));
          }
        }
        !(function (t) {
          (t.LEFT = "left"),
            (t.RIGHT = "right"),
            (t.CENTER = "center"),
            (t.BAR = "bar"),
            (t.CLEAR = "clear"),
            (t.DECIMAL = "decimal"),
            (t.END = "end"),
            (t.NUM = "num"),
            (t.START = "start");
        })($t || ($t = {})),
          (function (t) {
            (t.DOT = "dot"),
              (t.HYPHEN = "hyphen"),
              (t.MIDDLE_DOT = "middleDot"),
              (t.NONE = "none"),
              (t.UNDERSCORE = "underscore");
          })(Xt || (Xt = {})),
          (function (t) {
            t[(t.MAX = 9026)] = "MAX";
          })(qt || (qt = {}));
        class Or extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                val: "w:val",
                pos: "w:pos",
                leader: "w:leader",
              });
          }
        }
        class Cr extends s {
          constructor(t, e, r) {
            super("w:tab"),
              this.root.push(new Or({ val: t, pos: e, leader: r }));
          }
        }
        class kr extends s {
          constructor(t, e) {
            super("w:numPr"),
              this.root.push(new Dr(e)),
              this.root.push(new Lr(t));
          }
        }
        class Dr extends s {
          constructor(t) {
            if ((super("w:ilvl"), t > 9))
              throw new Error(
                "Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7"
              );
            this.root.push(new a({ val: t }));
          }
        }
        class Lr extends s {
          constructor(t) {
            super("w:numId"),
              this.root.push(
                new a({ val: "string" == typeof t ? `{${t}}` : t })
              );
          }
        }
        class Pr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                id: "Id",
                type: "Type",
                target: "Target",
                targetMode: "TargetMode",
              });
          }
        }
        !(function (t) {
          t.EXTERNAL = "External";
        })(Zt || (Zt = {}));
        class Fr extends s {
          constructor(t, e, r, n) {
            super("Relationship"),
              this.root.push(
                new Pr({ id: t, type: e, target: r, targetMode: n })
              );
          }
        }
        class Br extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                id: "r:id",
                history: "w:history",
                anchor: "w:anchor",
              });
          }
        }
        !(function (t) {
          (t.INTERNAL = "INTERNAL"), (t.EXTERNAL = "EXTERNAL");
        })(Yt || (Yt = {}));
        class Mr extends s {
          constructor(t, e, r) {
            super("w:hyperlink"), (this.linkId = e);
            const n = {
                history: 1,
                anchor: r || void 0,
                id: r ? void 0 : `rId${this.linkId}`,
              },
              s = new Br(n);
            this.root.push(s),
              t.forEach((t) => {
                this.root.push(t);
              });
          }
        }
        class Ur extends Mr {
          constructor(t) {
            super(t.children, Ut(), t.anchor);
          }
        }
        class zr {
          constructor(t) {
            this.options = t;
          }
        }
        class Hr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { id: "w:id", name: "w:name" });
          }
        }
        class jr extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { id: "w:id" });
          }
        }
        class Kr {
          constructor(t) {
            const e = Mt();
            (this.start = new Gr(t.id, e)),
              (this.children = t.children),
              (this.end = new Wr(e));
          }
        }
        class Gr extends s {
          constructor(t, e) {
            super("w:bookmarkStart");
            const r = new Hr({ name: t, id: e });
            this.root.push(r);
          }
        }
        class Wr extends s {
          constructor(t) {
            super("w:bookmarkEnd");
            const e = new jr({ id: t });
            this.root.push(e);
          }
        }
        class Vr extends s {
          constructor(t) {
            super("w:outlineLvl"),
              (this.level = t),
              this.root.push(new a({ val: t }));
          }
        }
        class $r extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class Xr extends s {
          constructor(t, e = {}) {
            super("w:instrText"), this.root.push(new $r({ space: j.PRESERVE }));
            let r = `PAGEREF ${t}`;
            e.hyperlink && (r = `${r} \\h`),
              e.useRelativePosition && (r = `${r} \\p`),
              this.root.push(r);
          }
        }
        class qr extends Ot {
          constructor(t, e = {}) {
            super({ children: [new nt(!0), new Xr(t, e), new it()] });
          }
        }
        !(function (t) {
          (t.BOTH = "both"),
            (t.BOTTOM = "bottom"),
            (t.CENTER = "center"),
            (t.TOP = "top");
        })(Qt || (Qt = {}));
        class Zr extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { verticalAlign: "w:val" });
          }
        }
        class Yr extends s {
          constructor(t) {
            super("w:vAlign"), this.root.push(new Zr({ verticalAlign: t }));
          }
        }
        !(function (t) {
          (t.DEFAULT = "default"), (t.FIRST = "first"), (t.EVEN = "even");
        })(Jt || (Jt = {}));
        class Qr extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { type: "w:type", id: "r:id" });
          }
        }
        !(function (t) {
          (t.HEADER = "w:headerReference"), (t.FOOTER = "w:footerReference");
        })(te || (te = {}));
        class Jr extends s {
          constructor(t, e) {
            super(t),
              this.root.push(
                new Qr({ type: e.type || Jt.DEFAULT, id: `rId${e.id}` })
              );
          }
        }
        class tn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                space: "w:space",
                count: "w:num",
                separate: "w:sep",
                equalWidth: "w:equalWidth",
              });
          }
        }
        class en extends s {
          constructor({
            space: t,
            count: e,
            separate: r,
            equalWidth: n,
            children: s,
          }) {
            super("w:cols"),
              this.root.push(
                new tn({
                  space: void 0 === t ? void 0 : I(t),
                  count: void 0 === e ? void 0 : m(e),
                  separate: r,
                  equalWidth: n,
                })
              ),
              !n && s && s.forEach((t) => this.addChildElement(t));
          }
        }
        !(function (t) {
          (t.DEFAULT = "default"),
            (t.LINES = "lines"),
            (t.LINES_AND_CHARS = "linesAndChars"),
            (t.SNAP_TO_CHARS = "snapToChars");
        })(ee || (ee = {}));
        class rn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                type: "w:type",
                linePitch: "w:linePitch",
                charSpace: "w:charSpace",
              });
          }
        }
        class nn extends s {
          constructor(t, e, r) {
            super("w:docGrid"),
              this.root.push(
                new rn({
                  type: r,
                  linePitch: m(t),
                  charSpace: e ? m(e) : void 0,
                })
              );
          }
        }
        !(function (t) {
          (t.NEW_PAGE = "newPage"),
            (t.NEW_SECTION = "newSection"),
            (t.CONTINUOUS = "continuous");
        })(re || (re = {}));
        class sn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                countBy: "w:countBy",
                start: "w:start",
                restart: "w:restart",
                distance: "w:distance",
              });
          }
        }
        class on extends s {
          constructor({ countBy: t, start: e, restart: r, distance: n }) {
            super("w:lnNumType"),
              this.root.push(
                new sn({
                  countBy: void 0 === t ? void 0 : m(t),
                  start: void 0 === e ? void 0 : m(e),
                  restart: r,
                  distance: void 0 === n ? void 0 : I(n),
                })
              );
          }
        }
        !(function (t) {
          (t.ALL_PAGES = "allPages"),
            (t.FIRST_PAGE = "firstPage"),
            (t.NOT_FIRST_PAGE = "notFirstPage");
        })(ne || (ne = {})),
          (function (t) {
            (t.PAGE = "page"), (t.TEXT = "text");
          })(se || (se = {})),
          (function (t) {
            (t.BACK = "back"), (t.FRONT = "front");
          })(ie || (ie = {}));
        class an extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                display: "w:display",
                offsetFrom: "w:offsetFrom",
                zOrder: "w:zOrder",
              });
          }
        }
        class cn extends i {
          constructor(t) {
            super("w:pgBorders"),
              t &&
                (t.pageBorders
                  ? this.root.push(
                      new an({
                        display: t.pageBorders.display,
                        offsetFrom: t.pageBorders.offsetFrom,
                        zOrder: t.pageBorders.zOrder,
                      })
                    )
                  : this.root.push(new an({})),
                t.pageBorderTop &&
                  this.root.push(new q("w:top", t.pageBorderTop)),
                t.pageBorderLeft &&
                  this.root.push(new q("w:left", t.pageBorderLeft)),
                t.pageBorderBottom &&
                  this.root.push(new q("w:bottom", t.pageBorderBottom)),
                t.pageBorderRight &&
                  this.root.push(new q("w:right", t.pageBorderRight)));
          }
        }
        class un extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                top: "w:top",
                right: "w:right",
                bottom: "w:bottom",
                left: "w:left",
                header: "w:header",
                footer: "w:footer",
                gutter: "w:gutter",
              });
          }
        }
        class ln extends s {
          constructor(t, e, r, n, s, i, o) {
            super("w:pgMar"),
              this.root.push(
                new un({
                  top: A(t),
                  right: I(e),
                  bottom: A(r),
                  left: I(n),
                  header: I(s),
                  footer: I(i),
                  gutter: I(o),
                })
              );
          }
        }
        !(function (t) {
          (t.HYPHEN = "hyphen"),
            (t.PERIOD = "period"),
            (t.COLON = "colon"),
            (t.EM_DASH = "emDash"),
            (t.EN_DASH = "endash");
        })(oe || (oe = {}));
        class hn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                start: "w:start",
                formatType: "w:fmt",
                separator: "w:chapSep",
              });
          }
        }
        class pn extends s {
          constructor({ start: t, formatType: e, separator: r }) {
            super("w:pgNumType"),
              this.root.push(
                new hn({
                  start: void 0 === t ? void 0 : m(t),
                  formatType: e,
                  separator: r,
                })
              );
          }
        }
        !(function (t) {
          (t.PORTRAIT = "portrait"), (t.LANDSCAPE = "landscape");
        })(ae || (ae = {}));
        class dn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                width: "w:w",
                height: "w:h",
                orientation: "w:orient",
              });
          }
        }
        class fn extends s {
          constructor(t, e, r) {
            super("w:pgSz");
            const n = r === ae.LANDSCAPE,
              s = I(t),
              i = I(e);
            this.root.push(
              new dn({ width: n ? i : s, height: n ? s : i, orientation: r })
            );
          }
        }
        !(function (t) {
          (t.LEFT_TO_RIGHT_TOP_TO_BOTTOM = "lrTb"),
            (t.TOP_TO_BOTTOM_RIGHT_TO_LEFT = "tbRl");
        })(ce || (ce = {}));
        class mn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class wn extends s {
          constructor(t) {
            super("w:textDirection"), this.root.push(new mn({ val: t }));
          }
        }
        !(function (t) {
          (t.NEXT_PAGE = "nextPage"),
            (t.NEXT_COLUMN = "nextColumn"),
            (t.CONTINUOUS = "continuous"),
            (t.EVEN_PAGE = "evenPage"),
            (t.ODD_PAGE = "oddPage");
        })(ue || (ue = {}));
        class gn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class yn extends s {
          constructor(t) {
            super("w:type"), this.root.push(new gn({ val: t }));
          }
        }
        const bn = {
            TOP: "1in",
            RIGHT: "1in",
            BOTTOM: "1in",
            LEFT: "1in",
            HEADER: 708,
            FOOTER: 708,
            GUTTER: 0,
          },
          vn = { WIDTH: 11906, HEIGHT: 16838, ORIENTATION: ae.PORTRAIT };
        class _n extends s {
          constructor({
            page: {
              size: {
                width: t = vn.WIDTH,
                height: e = vn.HEIGHT,
                orientation: r = vn.ORIENTATION,
              } = {},
              margin: {
                top: n = bn.TOP,
                right: s = bn.RIGHT,
                bottom: i = bn.BOTTOM,
                left: o = bn.LEFT,
                header: a = bn.HEADER,
                footer: c = bn.FOOTER,
                gutter: u = bn.GUTTER,
              } = {},
              pageNumbers: l = {},
              borders: h,
              textDirection: p,
            } = {},
            grid: { linePitch: d = 360, charSpace: f, type: m } = {},
            headerWrapperGroup: w = {},
            footerWrapperGroup: g = {},
            lineNumbers: y,
            titlePage: b,
            verticalAlign: v,
            column: _,
            type: x,
          } = {}) {
            super("w:sectPr"),
              this.addHeaderFooterGroup(te.HEADER, w),
              this.addHeaderFooterGroup(te.FOOTER, g),
              x && this.root.push(new yn(x)),
              this.root.push(new fn(t, e, r)),
              this.root.push(new ln(n, s, i, o, a, c, u)),
              h && this.root.push(new cn(h)),
              y && this.root.push(new on(y)),
              this.root.push(new pn(l)),
              _ && this.root.push(new en(_)),
              v && this.root.push(new Yr(v)),
              void 0 !== b && this.root.push(new L("w:titlePg", b)),
              p && this.root.push(new wn(p)),
              this.root.push(new nn(d, f, m));
          }
          addHeaderFooterGroup(t, e) {
            e.default &&
              this.root.push(
                new Jr(t, { type: Jt.DEFAULT, id: e.default.View.ReferenceId })
              ),
              e.first &&
                this.root.push(
                  new Jr(t, { type: Jt.FIRST, id: e.first.View.ReferenceId })
                ),
              e.even &&
                this.root.push(
                  new Jr(t, { type: Jt.EVEN, id: e.even.View.ReferenceId })
                );
          }
        }
        class xn extends s {
          constructor() {
            super("w:body"), (this.sections = []);
          }
          addSection(t) {
            const e = this.sections.pop();
            this.root.push(this.createSectionParagraph(e)),
              this.sections.push(new _n(t));
          }
          prepForXml(t) {
            return (
              1 === this.sections.length &&
                (this.root.splice(0, 1), this.root.push(this.sections.pop())),
              super.prepForXml(t)
            );
          }
          push(t) {
            this.root.push(t);
          }
          createSectionParagraph(t) {
            const e = new Mn({}),
              r = new Bn({});
            return r.push(t), e.addChildElement(r), e;
          }
        }
        class En extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { width: "w:w", space: "w:space" });
          }
        }
        class Tn extends s {
          constructor({ width: t, space: e }) {
            super("w:col"),
              this.root.push(
                new En({ width: I(t), space: void 0 === e ? void 0 : I(e) })
              );
          }
        }
        class An extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                wpc: "xmlns:wpc",
                mc: "xmlns:mc",
                o: "xmlns:o",
                r: "xmlns:r",
                m: "xmlns:m",
                v: "xmlns:v",
                wp14: "xmlns:wp14",
                wp: "xmlns:wp",
                w10: "xmlns:w10",
                w: "xmlns:w",
                w14: "xmlns:w14",
                w15: "xmlns:w15",
                wpg: "xmlns:wpg",
                wpi: "xmlns:wpi",
                wne: "xmlns:wne",
                wps: "xmlns:wps",
                Ignorable: "mc:Ignorable",
                cp: "xmlns:cp",
                dc: "xmlns:dc",
                dcterms: "xmlns:dcterms",
                dcmitype: "xmlns:dcmitype",
                xsi: "xmlns:xsi",
                type: "xsi:type",
              });
          }
        }
        class Sn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                color: "w:color",
                themeColor: "w:themeColor",
                themeShade: "w:themeShade",
                themeTint: "w:themeTint",
              });
          }
        }
        class Rn extends s {
          constructor(t) {
            super("w:background"),
              this.root.push(
                new Sn({
                  color: void 0 === t.color ? void 0 : T(t.color),
                  themeColor: t.themeColor,
                  themeShade:
                    void 0 === t.themeShade ? void 0 : v(t.themeShade),
                  themeTint: void 0 === t.themeTint ? void 0 : v(t.themeTint),
                })
              );
          }
        }
        class In extends s {
          constructor(t) {
            super("w:document"),
              this.root.push(
                new An({
                  wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                  mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                  o: "urn:schemas-microsoft-com:office:office",
                  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                  m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                  v: "urn:schemas-microsoft-com:vml",
                  wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                  wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                  w10: "urn:schemas-microsoft-com:office:word",
                  w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                  w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                  w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                  wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                  wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                  wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                  wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                  Ignorable: "w14 w15 wp14",
                })
              ),
              (this.body = new xn()),
              this.root.push(new Rn(t.background)),
              this.root.push(this.body);
          }
          add(t) {
            return this.body.push(t), this;
          }
          get Body() {
            return this.body;
          }
        }
        class Nn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { xmlns: "xmlns" });
          }
        }
        class On extends s {
          constructor() {
            super("Relationships"),
              this.root.push(
                new Nn({
                  xmlns:
                    "http://schemas.openxmlformats.org/package/2006/relationships",
                })
              );
          }
          addRelationship(t) {
            this.root.push(t);
          }
          createRelationship(t, e, r, n) {
            const s = new Fr(`rId${t}`, e, r, n);
            return this.addRelationship(s), s;
          }
          get RelationshipCount() {
            return this.root.length - 1;
          }
        }
        class Cn {
          constructor(t) {
            (this.document = new In(t)), (this.relationships = new On());
          }
          get View() {
            return this.document;
          }
          get Relationships() {
            return this.relationships;
          }
        }
        var kn, Dn, Ln;
        !(function (t) {
          (t.NONE = "none"), (t.DROP = "drop"), (t.MARGIN = "margin");
        })(kn || (kn = {})),
          (function (t) {
            (t.MARGIN = "margin"), (t.PAGE = "page"), (t.TEXT = "text");
          })(Dn || (Dn = {})),
          (function (t) {
            (t.AROUND = "around"),
              (t.AUTO = "auto"),
              (t.NONE = "none"),
              (t.NOT_BESIDE = "notBeside"),
              (t.THROUGH = "through"),
              (t.TIGHT = "tight");
          })(Ln || (Ln = {}));
        class Pn extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                anchorLock: "w:anchorLock",
                dropCap: "w:dropCap",
                width: "w:w",
                height: "w:h",
                x: "w:x",
                y: "w:y",
                anchorHorizontal: "w:hAnchor",
                anchorVertical: "w:vAnchor",
                spaceHorizontal: "w:hSpace",
                spaceVertical: "w:vSpace",
                rule: "w:hRule",
                alignmentX: "w:xAlign",
                alignmentY: "w:yAlign",
                lines: "w:lines",
                wrap: "w:wrap",
              });
          }
        }
        class Fn extends s {
          constructor(t) {
            var e, r;
            super("w:framePr"),
              this.root.push(
                new Pn({
                  anchorLock: t.anchorLock,
                  dropCap: t.dropCap,
                  width: t.width,
                  height: t.height,
                  x: t.position.x,
                  y: t.position.y,
                  anchorHorizontal: t.anchor.horizontal,
                  anchorVertical: t.anchor.vertical,
                  spaceHorizontal:
                    null === (e = t.space) || void 0 === e
                      ? void 0
                      : e.horizontal,
                  spaceVertical:
                    null === (r = t.space) || void 0 === r
                      ? void 0
                      : r.vertical,
                  rule: t.rule,
                  alignmentX: t.alignment.x,
                  alignmentY: t.alignment.y,
                  lines: t.lines,
                  wrap: t.wrap,
                })
              );
          }
        }
        class Bn extends i {
          constructor(t) {
            var e, r;
            if ((super("w:pPr"), (this.numberingReferences = []), !t))
              return this;
            if (
              (t.heading && this.push(new Ir(t.heading)),
              t.bullet && this.push(new Ir("ListParagraph")),
              t.numbering &&
                (t.style ||
                  t.heading ||
                  t.numbering.custom ||
                  this.push(new Ir("ListParagraph"))),
              t.style && this.push(new Ir(t.style)),
              void 0 !== t.keepNext &&
                this.push(new L("w:keepNext", t.keepNext)),
              void 0 !== t.keepLines &&
                this.push(new L("w:keepLines", t.keepLines)),
              t.pageBreakBefore && this.push(new Ar()),
              t.frame && this.push(new Fn(t.frame)),
              void 0 !== t.widowControl &&
                this.push(new L("w:widowControl", t.widowControl)),
              t.bullet && this.push(new kr(1, t.bullet.level)),
              t.numbering &&
                (this.numberingReferences.push({
                  reference: t.numbering.reference,
                  instance:
                    null !== (e = t.numbering.instance) && void 0 !== e ? e : 0,
                }),
                this.push(
                  new kr(
                    `${t.numbering.reference}-${
                      null !== (r = t.numbering.instance) && void 0 !== r
                        ? r
                        : 0
                    }`,
                    t.numbering.level
                  )
                )),
              t.border && this.push(new Y(t.border)),
              t.thematicBreak && this.push(new Q()),
              t.shading && this.push(new pt(t.shading)),
              t.rightTabStop && this.push(new Nr($t.RIGHT, t.rightTabStop)),
              t.tabStops)
            )
              for (const e of t.tabStops)
                this.push(new Nr(e.type, e.position, e.leader));
            t.leftTabStop && this.push(new Nr($t.LEFT, t.leftTabStop)),
              void 0 !== t.bidirectional &&
                this.push(new L("w:bidi", t.bidirectional)),
              t.spacing && this.push(new Rr(t.spacing)),
              t.indent && this.push(new tt(t.indent)),
              void 0 !== t.contextualSpacing &&
                this.push(new L("w:contextualSpacing", t.contextualSpacing)),
              t.alignment && this.push(new X(t.alignment)),
              void 0 !== t.outlineLevel && this.push(new Vr(t.outlineLevel)),
              void 0 !== t.suppressLineNumbers &&
                this.push(
                  new L("w:suppressLineNumbers", t.suppressLineNumbers)
                );
          }
          push(t) {
            this.root.push(t);
          }
          prepForXml(t) {
            if (t.viewWrapper instanceof Cn)
              for (const e of this.numberingReferences)
                t.file.Numbering.createConcreteNumberingInstance(
                  e.reference,
                  e.instance
                );
            return super.prepForXml(t);
          }
        }
        class Mn extends s {
          constructor(t) {
            if ((super("w:p"), "string" == typeof t))
              return (
                (this.properties = new Bn({})),
                this.root.push(this.properties),
                this.root.push(new Ct(t)),
                this
              );
            if (
              ((this.properties = new Bn(t)),
              this.root.push(this.properties),
              t.text && this.root.push(new Ct(t.text)),
              t.children)
            )
              for (const e of t.children)
                if (e instanceof Kr) {
                  this.root.push(e.start);
                  for (const t of e.children) this.root.push(t);
                  this.root.push(e.end);
                } else this.root.push(e);
          }
          prepForXml(t) {
            for (const e of this.root)
              if (e instanceof zr) {
                const r = this.root.indexOf(e),
                  n = new Mr(e.options.children, Ut());
                t.viewWrapper.Relationships.createRelationship(
                  n.linkId,
                  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                  e.options.link,
                  Zt.EXTERNAL
                ),
                  (this.root[r] = n);
              }
            return super.prepForXml(t);
          }
          addRunToFront(t) {
            return this.root.splice(1, 0, t), this;
          }
        }
        class Un extends s {
          constructor(t) {
            super("m:oMath");
            for (const e of t.children) this.root.push(e);
          }
        }
        class zn extends s {
          constructor(t) {
            super("m:t"), this.root.push(t);
          }
        }
        class Hn extends s {
          constructor(t) {
            super("m:r"), this.root.push(new zn(t));
          }
        }
        class jn extends s {
          constructor(t) {
            super("m:den");
            for (const e of t) this.root.push(e);
          }
        }
        class Kn extends s {
          constructor(t) {
            super("m:num");
            for (const e of t) this.root.push(e);
          }
        }
        class Gn extends s {
          constructor(t) {
            super("m:f"),
              this.root.push(new Kn(t.numerator)),
              this.root.push(new jn(t.denominator));
          }
        }
        class Wn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { accent: "m:val" });
          }
        }
        class Vn extends s {
          constructor(t) {
            super("m:chr"), this.root.push(new Wn({ accent: t }));
          }
        }
        class $n extends s {
          constructor(t) {
            super("m:e");
            for (const e of t) this.root.push(e);
          }
        }
        class Xn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { value: "m:val" });
          }
        }
        class qn extends s {
          constructor() {
            super("m:limLoc"), this.root.push(new Xn({ value: "undOvr" }));
          }
        }
        class Zn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { hide: "m:val" });
          }
        }
        class Yn extends s {
          constructor() {
            super("m:subHide"), this.root.push(new Zn({ hide: 1 }));
          }
        }
        class Qn extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { hide: "m:val" });
          }
        }
        class Jn extends s {
          constructor() {
            super("m:supHide"), this.root.push(new Qn({ hide: 1 }));
          }
        }
        class ts extends s {
          constructor(t, e, r) {
            super("m:naryPr"),
              this.root.push(new Vn(t)),
              this.root.push(new qn()),
              e || this.root.push(new Jn()),
              r || this.root.push(new Yn());
          }
        }
        class es extends s {
          constructor(t) {
            super("m:sub");
            for (const e of t) this.root.push(e);
          }
        }
        class rs extends s {
          constructor(t) {
            super("m:sup");
            for (const e of t) this.root.push(e);
          }
        }
        class ns extends s {
          constructor(t) {
            super("m:nary"),
              this.root.push(new ts("∑", !!t.superScript, !!t.subScript)),
              t.subScript && this.root.push(new es(t.subScript)),
              t.superScript && this.root.push(new rs(t.superScript)),
              this.root.push(new $n(t.children));
          }
        }
        class ss extends s {
          constructor() {
            super("m:sSupPr");
          }
        }
        class is extends s {
          constructor(t) {
            super("m:sSup"),
              this.root.push(new ss()),
              this.root.push(new $n(t.children)),
              this.root.push(new rs(t.superScript));
          }
        }
        class os extends s {
          constructor() {
            super("m:sSubPr");
          }
        }
        class as extends s {
          constructor(t) {
            super("m:sSub"),
              this.root.push(new os()),
              this.root.push(new $n(t.children)),
              this.root.push(new es(t.subScript));
          }
        }
        class cs extends s {
          constructor() {
            super("m:sSubSupPr");
          }
        }
        class us extends s {
          constructor(t) {
            super("m:sSubSup"),
              this.root.push(new cs()),
              this.root.push(new $n(t.children)),
              this.root.push(new es(t.subScript)),
              this.root.push(new rs(t.superScript));
          }
        }
        class ls extends s {
          constructor() {
            super("m:sPrePr");
          }
        }
        class hs extends s {
          constructor(t) {
            super("m:sPre"),
              this.root.push(new ls()),
              this.root.push(new $n(t.children)),
              this.root.push(new es(t.subScript)),
              this.root.push(new rs(t.superScript));
          }
        }
        const ps = "";
        class ds extends s {
          constructor(t) {
            if ((super("m:deg"), t)) for (const e of t) this.root.push(e);
          }
        }
        class fs extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { hide: "m:val" });
          }
        }
        class ms extends s {
          constructor() {
            super("m:degHide"), this.root.push(new fs({ hide: 1 }));
          }
        }
        class ws extends s {
          constructor(t) {
            super("m:radPr"), t || this.root.push(new ms());
          }
        }
        class gs extends s {
          constructor(t) {
            super("m:rad"),
              this.root.push(new ws(!!t.degree)),
              this.root.push(new ds(t.degree)),
              this.root.push(new $n(t.children));
          }
        }
        class ys extends s {
          constructor(t) {
            super("m:fName");
            for (const e of t) this.root.push(e);
          }
        }
        class bs extends s {
          constructor() {
            super("m:funcPr");
          }
        }
        class vs extends s {
          constructor(t) {
            super("m:func"),
              this.root.push(new bs()),
              this.root.push(new ys(t.name)),
              this.root.push(new $n(t.children));
          }
        }
        class _s extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { character: "m:val" });
          }
        }
        class xs extends s {
          constructor(t) {
            super("m:begChr"), this.root.push(new _s({ character: t }));
          }
        }
        class Es extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { character: "m:val" });
          }
        }
        class Ts extends s {
          constructor(t) {
            super("m:endChr"), this.root.push(new Es({ character: t }));
          }
        }
        class As extends s {
          constructor(t) {
            super("m:dPr"),
              t &&
                (this.root.push(new xs(t.beginningCharacter)),
                this.root.push(new Ts(t.endingCharacter)));
          }
        }
        class Ss extends s {
          constructor(t) {
            super("m:d"),
              this.root.push(new As()),
              this.root.push(new $n(t.children));
          }
        }
        class Rs extends s {
          constructor(t) {
            super("m:d"),
              this.root.push(
                new As({ beginningCharacter: "[", endingCharacter: "]" })
              ),
              this.root.push(new $n(t.children));
          }
        }
        class Is extends s {
          constructor(t) {
            super("m:d"),
              this.root.push(
                new As({ beginningCharacter: "{", endingCharacter: "}" })
              ),
              this.root.push(new $n(t.children));
          }
        }
        class Ns extends s {
          constructor(t) {
            super("m:d"),
              this.root.push(
                new As({ beginningCharacter: "〈", endingCharacter: "〉" })
              ),
              this.root.push(new $n(t.children));
          }
        }
        class Os extends s {
          constructor(t) {
            super("w:tblGrid");
            for (const e of t) this.root.push(new ks(e));
          }
        }
        class Cs extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { w: "w:w" });
          }
        }
        class ks extends s {
          constructor(t) {
            super("w:gridCol"),
              void 0 !== t && this.root.push(new Cs({ w: I(t) }));
          }
        }
        var Ds, Ls, Ps, Fs;
        !(function (t) {
          (t.AUTO = "auto"),
            (t.DXA = "dxa"),
            (t.NIL = "nil"),
            (t.PERCENTAGE = "pct");
        })(Ds || (Ds = {}));
        class Bs extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { type: "w:type", size: "w:w" });
          }
        }
        class Ms extends s {
          constructor(t, { type: e = Ds.AUTO, size: r }) {
            super(t);
            let n = r;
            e === Ds.PERCENTAGE && "number" == typeof r && (n = `${r}%`),
              this.root.push(new Bs({ type: e, size: O(n) }));
          }
        }
        !(function (t) {
          (t.TABLE = "w:tblCellMar"), (t.TABLE_CELL = "w:tcMar");
        })(Ls || (Ls = {}));
        class Us extends i {
          constructor(
            t,
            { marginUnitType: e = Ds.DXA, top: r, left: n, bottom: s, right: i }
          ) {
            super(t),
              void 0 !== r &&
                this.root.push(new Ms("w:top", { type: e, size: r })),
              void 0 !== n &&
                this.root.push(new Ms("w:left", { type: e, size: n })),
              void 0 !== s &&
                this.root.push(new Ms("w:bottom", { type: e, size: s })),
              void 0 !== i &&
                this.root.push(new Ms("w:right", { type: e, size: i }));
          }
        }
        class zs extends i {
          constructor(t) {
            super("w:tcBorders"),
              t.top && this.root.push(new q("w:top", t.top)),
              t.start && this.root.push(new q("w:start", t.start)),
              t.left && this.root.push(new q("w:left", t.left)),
              t.bottom && this.root.push(new q("w:bottom", t.bottom)),
              t.end && this.root.push(new q("w:end", t.end)),
              t.right && this.root.push(new q("w:right", t.right));
          }
        }
        class Hs extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class js extends s {
          constructor(t) {
            super("w:gridSpan"), this.root.push(new Hs({ val: m(t) }));
          }
        }
        !(function (t) {
          (t.CONTINUE = "continue"), (t.RESTART = "restart");
        })(Ps || (Ps = {}));
        class Ks extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class Gs extends s {
          constructor(t) {
            super("w:vMerge"), this.root.push(new Ks({ val: t }));
          }
        }
        !(function (t) {
          (t.BOTTOM_TO_TOP_LEFT_TO_RIGHT = "btLr"),
            (t.LEFT_TO_RIGHT_TOP_TO_BOTTOM = "lrTb"),
            (t.TOP_TO_BOTTOM_RIGHT_TO_LEFT = "tbRl");
        })(Fs || (Fs = {}));
        class Ws extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class Vs extends s {
          constructor(t) {
            super("w:textDirection"), this.root.push(new Ws({ val: t }));
          }
        }
        class $s extends i {
          constructor(t) {
            super("w:tcPr"),
              t.width && this.root.push(new Ms("w:tcW", t.width)),
              t.columnSpan && this.root.push(new js(t.columnSpan)),
              t.verticalMerge
                ? this.root.push(new Gs(t.verticalMerge))
                : t.rowSpan &&
                  t.rowSpan > 1 &&
                  this.root.push(new Gs(Ps.RESTART)),
              t.borders && this.root.push(new zs(t.borders)),
              t.shading && this.root.push(new pt(t.shading)),
              t.margins && this.root.push(new Us(Ls.TABLE_CELL, t.margins)),
              t.textDirection && this.root.push(new Vs(t.textDirection)),
              t.verticalAlign && this.root.push(new Yr(t.verticalAlign));
          }
        }
        class Xs extends s {
          constructor(t) {
            super("w:tc"), (this.options = t), this.root.push(new $s(t));
            for (const e of t.children) this.root.push(e);
          }
          prepForXml(t) {
            return (
              this.root[this.root.length - 1] instanceof Mn ||
                this.root.push(new Mn({})),
              super.prepForXml(t)
            );
          }
        }
        const qs = { style: z.NONE, size: 0, color: "auto" },
          Zs = { style: z.SINGLE, size: 4, color: "auto" };
        class Ys extends s {
          constructor(t) {
            super("w:tblBorders"),
              t.top
                ? this.root.push(new q("w:top", t.top))
                : this.root.push(new q("w:top", Zs)),
              t.left
                ? this.root.push(new q("w:left", t.left))
                : this.root.push(new q("w:left", Zs)),
              t.bottom
                ? this.root.push(new q("w:bottom", t.bottom))
                : this.root.push(new q("w:bottom", Zs)),
              t.right
                ? this.root.push(new q("w:right", t.right))
                : this.root.push(new q("w:right", Zs)),
              t.insideHorizontal
                ? this.root.push(new q("w:insideH", t.insideHorizontal))
                : this.root.push(new q("w:insideH", Zs)),
              t.insideVertical
                ? this.root.push(new q("w:insideV", t.insideVertical))
                : this.root.push(new q("w:insideV", Zs));
          }
        }
        var Qs;
        (Ys.NONE = {
          top: qs,
          bottom: qs,
          left: qs,
          right: qs,
          insideHorizontal: qs,
          insideVertical: qs,
        }),
          (function (t) {
            (t.NEVER = "never"), (t.OVERLAP = "overlap");
          })(Qs || (Qs = {}));
        class Js extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class ti extends s {
          constructor(t) {
            super("w:tblOverlap"), this.root.push(new Js({ val: t }));
          }
        }
        var ei, ri, ni, si, ii, oi;
        !(function (t) {
          (t.MARGIN = "margin"), (t.PAGE = "page"), (t.TEXT = "text");
        })(ei || (ei = {})),
          (function (t) {
            (t.CENTER = "center"),
              (t.INSIDE = "inside"),
              (t.LEFT = "left"),
              (t.OUTSIDE = "outside"),
              (t.RIGHT = "right");
          })(ri || (ri = {})),
          (function (t) {
            (t.CENTER = "center"),
              (t.INSIDE = "inside"),
              (t.BOTTOM = "bottom"),
              (t.OUTSIDE = "outside"),
              (t.INLINE = "inline"),
              (t.TOP = "top");
          })(ni || (ni = {}));
        class ai extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                horizontalAnchor: "w:horzAnchor",
                verticalAnchor: "w:vertAnchor",
                absoluteHorizontalPosition: "w:tblpX",
                relativeHorizontalPosition: "w:tblpXSpec",
                absoluteVerticalPosition: "w:tblpY",
                relativeVerticalPosition: "w:tblpYSpec",
                bottomFromText: "w:bottomFromText",
                topFromText: "w:topFromText",
                leftFromText: "w:leftFromText",
                rightFromText: "w:rightFromText",
              });
          }
        }
        class ci extends s {
          constructor(t) {
            var {
                leftFromText: e,
                rightFromText: r,
                topFromText: n,
                bottomFromText: s,
                absoluteHorizontalPosition: i,
                absoluteVerticalPosition: o,
              } = t,
              a = (function (t, e) {
                var r = {};
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    e.indexOf(n) < 0 &&
                    (r[n] = t[n]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var s = 0;
                  for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
                    e.indexOf(n[s]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
                      (r[n[s]] = t[n[s]]);
                }
                return r;
              })(t, [
                "leftFromText",
                "rightFromText",
                "topFromText",
                "bottomFromText",
                "absoluteHorizontalPosition",
                "absoluteVerticalPosition",
              ]);
            super("w:tblpPr"),
              this.root.push(
                new ai(
                  Object.assign(
                    {
                      leftFromText: void 0 === e ? void 0 : I(e),
                      rightFromText: void 0 === r ? void 0 : I(r),
                      topFromText: void 0 === n ? void 0 : I(n),
                      bottomFromText: void 0 === s ? void 0 : I(s),
                      absoluteHorizontalPosition: void 0 === i ? void 0 : A(i),
                      absoluteVerticalPosition: void 0 === o ? void 0 : A(o),
                    },
                    a
                  )
                )
              ),
              a.overlap && this.root.push(new ti(a.overlap));
          }
        }
        !(function (t) {
          (t.AUTOFIT = "autofit"), (t.FIXED = "fixed");
        })(si || (si = {}));
        class ui extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { type: "w:type" });
          }
        }
        class li extends s {
          constructor(t) {
            super("w:tblLayout"), this.root.push(new ui({ type: t }));
          }
        }
        class hi extends i {
          constructor(t) {
            super("w:tblPr"),
              t.style && this.root.push(new F("w:tblStyle", t.style)),
              t.float && this.root.push(new ci(t.float)),
              void 0 !== t.visuallyRightToLeft &&
                this.root.push(new L("w:bidiVisual", t.visuallyRightToLeft)),
              t.width && this.root.push(new Ms("w:tblW", t.width)),
              t.alignment && this.root.push(new X(t.alignment)),
              t.indent && this.root.push(new Ms("w:tblInd", t.indent)),
              t.borders && this.root.push(new Ys(t.borders)),
              t.shading && this.root.push(new pt(t.shading)),
              t.layout && this.root.push(new li(t.layout)),
              t.cellMargin && this.root.push(new Us(Ls.TABLE, t.cellMargin));
          }
        }
        class pi extends s {
          constructor({
            rows: t,
            width: e,
            columnWidths: r = Array(
              Math.max(...t.map((t) => t.CellCount))
            ).fill(100),
            margins: n,
            indent: s,
            float: i,
            layout: o,
            style: a,
            borders: c,
            alignment: u,
            visuallyRightToLeft: l,
          }) {
            super("w:tbl"),
              this.root.push(
                new hi({
                  borders: null != c ? c : {},
                  width: null != e ? e : { size: 100 },
                  indent: s,
                  float: i,
                  layout: o,
                  style: a,
                  alignment: u,
                  cellMargin: n,
                  visuallyRightToLeft: l,
                })
              ),
              this.root.push(new Os(r));
            for (const e of t) this.root.push(e);
            t.forEach((e, r) => {
              if (r === t.length - 1) return;
              let n = 0;
              e.cells.forEach((e) => {
                if (e.options.rowSpan && e.options.rowSpan > 1) {
                  const s = new Xs({
                    rowSpan: e.options.rowSpan - 1,
                    columnSpan: e.options.columnSpan,
                    borders: e.options.borders,
                    children: [],
                    verticalMerge: Ps.CONTINUE,
                  });
                  t[r + 1].addCellToColumnIndex(s, n);
                }
                n += e.options.columnSpan || 1;
              });
            });
          }
        }
        !(function (t) {
          (t.AUTO = "auto"), (t.ATLEAST = "atLeast"), (t.EXACT = "exact");
        })(ii || (ii = {}));
        class di extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { value: "w:val", rule: "w:hRule" });
          }
        }
        class fi extends s {
          constructor(t, e) {
            super("w:trHeight"),
              this.root.push(new di({ value: I(t), rule: e }));
          }
        }
        class mi extends i {
          constructor(t) {
            super("w:trPr"),
              void 0 !== t.cantSplit &&
                this.root.push(new L("w:cantSplit", t.cantSplit)),
              void 0 !== t.tableHeader &&
                this.root.push(new L("w:tblHeader", t.tableHeader)),
              t.height && this.root.push(new fi(t.height.value, t.height.rule));
          }
        }
        class wi extends s {
          constructor(t) {
            super("w:tr"), (this.options = t), this.root.push(new mi(t));
            for (const e of t.children) this.root.push(e);
          }
          get CellCount() {
            return this.options.children.length;
          }
          get cells() {
            return this.root.filter((t) => t instanceof Xs);
          }
          addCellToIndex(t, e) {
            this.root.splice(e + 1, 0, t);
          }
          addCellToColumnIndex(t, e) {
            const r = this.columnIndexToRootIndex(e, !0);
            this.addCellToIndex(t, r - 1);
          }
          rootIndexToColumnIndex(t) {
            if (t < 1 || t >= this.root.length)
              throw new Error(
                "cell 'rootIndex' should between 1 to " + (this.root.length - 1)
              );
            let e = 0;
            for (let r = 1; r < t; r++)
              e += this.root[r].options.columnSpan || 1;
            return e;
          }
          columnIndexToRootIndex(t, e = !1) {
            if (t < 0)
              throw new Error("cell 'columnIndex' should not less than zero");
            let r = 0,
              n = 1;
            for (; r <= t; ) {
              if (n >= this.root.length) {
                if (e) return this.root.length;
                throw new Error(
                  "cell 'columnIndex' should not great than " + (r - 1)
                );
              }
              const t = this.root[n];
              (n += 1), (r += (t && t.options.columnSpan) || 1);
            }
            return n - 1;
          }
        }
        class gi extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { xmlns: "xmlns", vt: "xmlns:vt" });
          }
        }
        class yi extends s {
          constructor() {
            super("Properties"),
              this.root.push(
                new gi({
                  xmlns:
                    "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
                  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
                })
              );
          }
        }
        class bi extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { xmlns: "xmlns" });
          }
        }
        class vi extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                contentType: "ContentType",
                extension: "Extension",
              });
          }
        }
        class _i extends s {
          constructor(t, e) {
            super("Default"),
              this.root.push(new vi({ contentType: t, extension: e }));
          }
        }
        class xi extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                contentType: "ContentType",
                partName: "PartName",
              });
          }
        }
        class Ei extends s {
          constructor(t, e) {
            super("Override"),
              this.root.push(new xi({ contentType: t, partName: e }));
          }
        }
        class Ti extends s {
          constructor() {
            super("Types"),
              this.root.push(
                new bi({
                  xmlns:
                    "http://schemas.openxmlformats.org/package/2006/content-types",
                })
              ),
              this.root.push(new _i("image/png", "png")),
              this.root.push(new _i("image/jpeg", "jpeg")),
              this.root.push(new _i("image/jpeg", "jpg")),
              this.root.push(new _i("image/bmp", "bmp")),
              this.root.push(new _i("image/gif", "gif")),
              this.root.push(
                new _i(
                  "application/vnd.openxmlformats-package.relationships+xml",
                  "rels"
                )
              ),
              this.root.push(new _i("application/xml", "xml")),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
                  "/word/document.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
                  "/word/styles.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-package.core-properties+xml",
                  "/docProps/core.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.custom-properties+xml",
                  "/docProps/custom.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.extended-properties+xml",
                  "/docProps/app.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
                  "/word/numbering.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
                  "/word/footnotes.xml"
                )
              ),
              this.root.push(
                new Ei(
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
                  "/word/settings.xml"
                )
              );
          }
          addFooter(t) {
            this.root.push(
              new Ei(
                "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
                `/word/footer${t}.xml`
              )
            );
          }
          addHeader(t) {
            this.root.push(
              new Ei(
                "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml",
                `/word/header${t}.xml`
              )
            );
          }
        }
        class Ai extends s {
          constructor(t) {
            super("cp:coreProperties"),
              this.root.push(
                new An({
                  cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
                  dc: "http://purl.org/dc/elements/1.1/",
                  dcterms: "http://purl.org/dc/terms/",
                  dcmitype: "http://purl.org/dc/dcmitype/",
                  xsi: "http://www.w3.org/2001/XMLSchema-instance",
                })
              ),
              t.title && this.root.push(new M("dc:title", t.title)),
              t.subject && this.root.push(new M("dc:subject", t.subject)),
              t.creator && this.root.push(new M("dc:creator", t.creator)),
              t.keywords && this.root.push(new M("cp:keywords", t.keywords)),
              t.description &&
                this.root.push(new M("dc:description", t.description)),
              t.lastModifiedBy &&
                this.root.push(new M("cp:lastModifiedBy", t.lastModifiedBy)),
              t.revision &&
                this.root.push(new M("cp:revision", String(t.revision))),
              this.root.push(new Si("dcterms:created")),
              this.root.push(new Si("dcterms:modified"));
          }
        }
        class Si extends s {
          constructor(t) {
            super(t),
              this.root.push(new An({ type: "dcterms:W3CDTF" })),
              this.root.push(D(new Date()));
          }
        }
        class Ri extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { xmlns: "xmlns", vt: "xmlns:vt" });
          }
        }
        class Ii extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { fmtid: "fmtid", pid: "pid", name: "name" });
          }
        }
        class Ni extends s {
          constructor(t, e) {
            super("property"),
              this.root.push(
                new Ii({
                  fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                  pid: t.toString(),
                  name: e.name,
                })
              ),
              this.root.push(new Oi(e.value));
          }
        }
        class Oi extends s {
          constructor(t) {
            super("vt:lpwstr"), this.root.push(t);
          }
        }
        class Ci extends s {
          constructor(t) {
            super("Properties"),
              (this.properties = []),
              this.root.push(
                new Ri({
                  xmlns:
                    "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
                  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
                })
              ),
              (this.nextId = 2);
            for (const e of t) this.addCustomProperty(e);
          }
          prepForXml(t) {
            return (
              this.properties.forEach((t) => this.root.push(t)),
              super.prepForXml(t)
            );
          }
          addCustomProperty(t) {
            this.properties.push(new Ni(this.nextId++, t));
          }
        }
        class ki extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                wpc: "xmlns:wpc",
                mc: "xmlns:mc",
                o: "xmlns:o",
                r: "xmlns:r",
                m: "xmlns:m",
                v: "xmlns:v",
                wp14: "xmlns:wp14",
                wp: "xmlns:wp",
                w10: "xmlns:w10",
                w: "xmlns:w",
                w14: "xmlns:w14",
                w15: "xmlns:w15",
                wpg: "xmlns:wpg",
                wpi: "xmlns:wpi",
                wne: "xmlns:wne",
                wps: "xmlns:wps",
                cp: "xmlns:cp",
                dc: "xmlns:dc",
                dcterms: "xmlns:dcterms",
                dcmitype: "xmlns:dcmitype",
                xsi: "xmlns:xsi",
                type: "xsi:type",
              });
          }
        }
        class Di extends f {
          constructor(t, e) {
            super("w:ftr", e),
              (this.refId = t),
              e ||
                this.root.push(
                  new ki({
                    wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                    mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                    o: "urn:schemas-microsoft-com:office:office",
                    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                    m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                    v: "urn:schemas-microsoft-com:vml",
                    wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                    wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                    w10: "urn:schemas-microsoft-com:office:word",
                    w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                    w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                    w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                    wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                    wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                    wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                    wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                  })
                );
          }
          get ReferenceId() {
            return this.refId;
          }
          add(t) {
            this.root.push(t);
          }
        }
        class Li {
          constructor(t, e, r) {
            (this.media = t),
              (this.footer = new Di(e, r)),
              (this.relationships = new On());
          }
          add(t) {
            this.footer.add(t);
          }
          addChildElement(t) {
            this.footer.addChildElement(t);
          }
          get View() {
            return this.footer;
          }
          get Relationships() {
            return this.relationships;
          }
          get Media() {
            return this.media;
          }
        }
        class Pi extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { type: "w:type", id: "w:id" });
          }
        }
        class Fi extends s {
          constructor() {
            super("w:footnoteRef");
          }
        }
        class Bi extends Ot {
          constructor() {
            super({ style: "FootnoteReference" }), this.root.push(new Fi());
          }
        }
        !(function (t) {
          (t.SEPERATOR = "separator"),
            (t.CONTINUATION_SEPERATOR = "continuationSeparator");
        })(oi || (oi = {}));
        class Mi extends s {
          constructor(t) {
            super("w:footnote"),
              this.root.push(new Pi({ type: t.type, id: t.id }));
            for (let e = 0; e < t.children.length; e++) {
              const r = t.children[e];
              0 === e && r.addRunToFront(new Bi()), this.root.push(r);
            }
          }
        }
        class Ui extends s {
          constructor() {
            super("w:continuationSeparator");
          }
        }
        class zi extends Ot {
          constructor() {
            super({}), this.root.push(new Ui());
          }
        }
        class Hi extends s {
          constructor() {
            super("w:separator");
          }
        }
        class ji extends Ot {
          constructor() {
            super({}), this.root.push(new Hi());
          }
        }
        class Ki extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                wpc: "xmlns:wpc",
                mc: "xmlns:mc",
                o: "xmlns:o",
                r: "xmlns:r",
                m: "xmlns:m",
                v: "xmlns:v",
                wp14: "xmlns:wp14",
                wp: "xmlns:wp",
                w10: "xmlns:w10",
                w: "xmlns:w",
                w14: "xmlns:w14",
                w15: "xmlns:w15",
                wpg: "xmlns:wpg",
                wpi: "xmlns:wpi",
                wne: "xmlns:wne",
                wps: "xmlns:wps",
                Ignorable: "mc:Ignorable",
              });
          }
        }
        class Gi extends s {
          constructor() {
            super("w:footnotes"),
              this.root.push(
                new Ki({
                  wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                  mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                  o: "urn:schemas-microsoft-com:office:office",
                  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                  m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                  v: "urn:schemas-microsoft-com:vml",
                  wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                  wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                  w10: "urn:schemas-microsoft-com:office:word",
                  w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                  w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                  w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                  wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                  wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                  wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                  wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                  Ignorable: "w14 w15 wp14",
                })
              );
            const t = new Mi({
              id: -1,
              type: oi.SEPERATOR,
              children: [
                new Mn({
                  spacing: { after: 0, line: 240, lineRule: Wt.AUTO },
                  children: [new ji()],
                }),
              ],
            });
            this.root.push(t);
            const e = new Mi({
              id: 0,
              type: oi.CONTINUATION_SEPERATOR,
              children: [
                new Mn({
                  spacing: { after: 0, line: 240, lineRule: Wt.AUTO },
                  children: [new zi()],
                }),
              ],
            });
            this.root.push(e);
          }
          createFootNote(t, e) {
            const r = new Mi({ id: t, children: e });
            this.root.push(r);
          }
        }
        class Wi {
          constructor() {
            (this.footnotess = new Gi()), (this.relationships = new On());
          }
          get View() {
            return this.footnotess;
          }
          get Relationships() {
            return this.relationships;
          }
        }
        class Vi extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                wpc: "xmlns:wpc",
                mc: "xmlns:mc",
                o: "xmlns:o",
                r: "xmlns:r",
                m: "xmlns:m",
                v: "xmlns:v",
                wp14: "xmlns:wp14",
                wp: "xmlns:wp",
                w10: "xmlns:w10",
                w: "xmlns:w",
                w14: "xmlns:w14",
                w15: "xmlns:w15",
                wpg: "xmlns:wpg",
                wpi: "xmlns:wpi",
                wne: "xmlns:wne",
                wps: "xmlns:wps",
                cp: "xmlns:cp",
                dc: "xmlns:dc",
                dcterms: "xmlns:dcterms",
                dcmitype: "xmlns:dcmitype",
                xsi: "xmlns:xsi",
                type: "xsi:type",
                cx: "xmlns:cx",
                cx1: "xmlns:cx1",
                cx2: "xmlns:cx2",
                cx3: "xmlns:cx3",
                cx4: "xmlns:cx4",
                cx5: "xmlns:cx5",
                cx6: "xmlns:cx6",
                cx7: "xmlns:cx7",
                cx8: "xmlns:cx8",
                w16cid: "xmlns:w16cid",
                w16se: "xmlns:w16se",
              });
          }
        }
        class $i extends f {
          constructor(t, e) {
            super("w:hdr", e),
              (this.refId = t),
              e ||
                this.root.push(
                  new Vi({
                    wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                    mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                    o: "urn:schemas-microsoft-com:office:office",
                    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                    m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                    v: "urn:schemas-microsoft-com:vml",
                    wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                    wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                    w10: "urn:schemas-microsoft-com:office:word",
                    w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                    w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                    w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                    wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                    wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                    wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                    wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                    cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
                    cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
                    cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
                    cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
                    cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
                    cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
                    cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
                    cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
                    cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
                    w16cid:
                      "http://schemas.microsoft.com/office/word/2016/wordml/cid",
                    w16se:
                      "http://schemas.microsoft.com/office/word/2015/wordml/symex",
                  })
                );
          }
          get ReferenceId() {
            return this.refId;
          }
          add(t) {
            this.root.push(t);
          }
        }
        class Xi {
          constructor(t, e, r) {
            (this.media = t),
              (this.header = new $i(e, r)),
              (this.relationships = new On());
          }
          add(t) {
            return this.header.add(t), this;
          }
          addChildElement(t) {
            this.header.addChildElement(t);
          }
          get View() {
            return this.header;
          }
          get Relationships() {
            return this.relationships;
          }
          get Media() {
            return this.media;
          }
        }
        class qi {
          constructor() {
            this.map = new Map();
          }
          addMedia(t, e) {
            const r = `${Ut()}.png`,
              n = {
                stream:
                  "string" == typeof t ? this.convertDataURIToBinary(t) : t,
                fileName: r,
                transformation: {
                  pixels: { x: Math.round(e.width), y: Math.round(e.height) },
                  emus: {
                    x: Math.round(9525 * e.width),
                    y: Math.round(9525 * e.height),
                  },
                  flip: e.flip,
                  rotation: e.rotation ? 6e4 * e.rotation : void 0,
                },
              };
            return this.map.set(r, n), n;
          }
          addImage(t, e) {
            this.map.set(t, e);
          }
          get Array() {
            return Array.from(this.map.values());
          }
          convertDataURIToBinary(t) {
            const e = ";base64,",
              n = t.indexOf(e) + e.length;
            return "function" == typeof atob
              ? new Uint8Array(
                  atob(t.substring(n))
                    .split("")
                    .map((t) => t.charCodeAt(0))
                )
              : new (r(764).Buffer)(t, "base64");
          }
        }
        const Zi = "";
        var Yi, Qi;
        !(function (t) {
          (t.BULLET = "bullet"),
            (t.CARDINAL_TEXT = "cardinalText"),
            (t.CHICAGO = "chicago"),
            (t.DECIMAL = "decimal"),
            (t.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle"),
            (t.DECIMAL_ENCLOSED_FULLSTOP = "decimalEnclosedFullstop"),
            (t.DECIMAL_ENCLOSED_PARENTHESES = "decimalEnclosedParen"),
            (t.DECIMAL_ZERO = "decimalZero"),
            (t.LOWER_LETTER = "lowerLetter"),
            (t.LOWER_ROMAN = "lowerRoman"),
            (t.NONE = "none"),
            (t.ORDINAL_TEXT = "ordinalText"),
            (t.UPPER_LETTER = "upperLetter"),
            (t.UPPER_ROMAN = "upperRoman");
        })(Yi || (Yi = {}));
        class Ji extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = { ilvl: "w:ilvl", tentative: "w15:tentative" });
          }
        }
        class to extends s {
          constructor(t) {
            super("w:numFmt"), this.root.push(new a({ val: t }));
          }
        }
        class eo extends s {
          constructor(t) {
            super("w:lvlText"), this.root.push(new a({ val: t }));
          }
        }
        class ro extends s {
          constructor(t) {
            super("w:lvlJc"), this.root.push(new a({ val: t }));
          }
        }
        !(function (t) {
          (t.NOTHING = "nothing"), (t.SPACE = "space"), (t.TAB = "tab");
        })(Qi || (Qi = {}));
        class no extends s {
          constructor(t) {
            super("w:suff"), this.root.push(new a({ val: t }));
          }
        }
        class so extends s {
          constructor({
            level: t,
            format: e,
            text: r,
            alignment: n = U.START,
            start: s = 1,
            style: i,
            suffix: o,
          }) {
            if (
              (super("w:lvl"),
              this.root.push(new B("w:start", m(s))),
              e && this.root.push(new to(e)),
              o && this.root.push(new no(o)),
              r && this.root.push(new eo(r)),
              this.root.push(new ro(n)),
              (this.paragraphProperties = new Bn(i && i.paragraph)),
              (this.runProperties = new St(i && i.run)),
              this.root.push(this.paragraphProperties),
              this.root.push(this.runProperties),
              t > 9)
            )
              throw new Error(
                "Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7"
              );
            this.root.push(new Ji({ ilvl: m(t), tentative: 1 }));
          }
        }
        class io extends so {
          constructor(t) {
            super(t);
          }
        }
        class oo extends so {}
        class ao extends s {
          constructor(t) {
            super("w:multiLevelType"), this.root.push(new a({ val: t }));
          }
        }
        class co extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                abstractNumId: "w:abstractNumId",
                restartNumberingAfterBreak: "w15:restartNumberingAfterBreak",
              });
          }
        }
        class uo extends s {
          constructor(t, e) {
            super("w:abstractNum"),
              this.root.push(
                new co({ abstractNumId: m(t), restartNumberingAfterBreak: 0 })
              ),
              this.root.push(new ao("hybridMultilevel")),
              (this.id = t);
            for (const t of e) this.root.push(new io(t));
          }
        }
        class lo extends s {
          constructor(t) {
            super("w:abstractNumId"), this.root.push(new a({ val: t }));
          }
        }
        class ho extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { numId: "w:numId" });
          }
        }
        class po extends s {
          constructor(t) {
            super("w:num"),
              (this.numId = t.numId),
              (this.reference = t.reference),
              (this.instance = t.instance),
              this.root.push(new ho({ numId: m(t.numId) })),
              this.root.push(new lo(m(t.abstractNumId))),
              t.overrideLevel &&
                this.root.push(
                  new mo(t.overrideLevel.num, t.overrideLevel.start)
                );
          }
        }
        class fo extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { ilvl: "w:ilvl" });
          }
        }
        class mo extends s {
          constructor(t, e) {
            super("w:lvlOverride"),
              this.root.push(new fo({ ilvl: t })),
              void 0 !== e && this.root.push(new go(e));
          }
        }
        class wo extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class go extends s {
          constructor(t) {
            super("w:startOverride"), this.root.push(new wo({ val: t }));
          }
        }
        class yo extends s {
          constructor(t) {
            super("w:numbering"),
              (this.abstractNumberingMap = new Map()),
              (this.concreteNumberingMap = new Map()),
              (this.referenceConfigMap = new Map()),
              this.root.push(
                new An({
                  wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                  mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                  o: "urn:schemas-microsoft-com:office:office",
                  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                  m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                  v: "urn:schemas-microsoft-com:vml",
                  wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                  wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                  w10: "urn:schemas-microsoft-com:office:word",
                  w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                  w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                  w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                  wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                  wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                  wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                  wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                  Ignorable: "w14 w15 wp14",
                })
              );
            const e = new uo(Mt(), [
              {
                level: 0,
                format: Yi.BULLET,
                text: "●",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: Bt(0.5), hanging: Bt(0.25) } },
                },
              },
              {
                level: 1,
                format: Yi.BULLET,
                text: "○",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: Bt(1), hanging: Bt(0.25) } },
                },
              },
              {
                level: 2,
                format: Yi.BULLET,
                text: "■",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 2160, hanging: Bt(0.25) } },
                },
              },
              {
                level: 3,
                format: Yi.BULLET,
                text: "●",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 2880, hanging: Bt(0.25) } },
                },
              },
              {
                level: 4,
                format: Yi.BULLET,
                text: "○",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 3600, hanging: Bt(0.25) } },
                },
              },
              {
                level: 5,
                format: Yi.BULLET,
                text: "■",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 4320, hanging: Bt(0.25) } },
                },
              },
              {
                level: 6,
                format: Yi.BULLET,
                text: "●",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 5040, hanging: Bt(0.25) } },
                },
              },
              {
                level: 7,
                format: Yi.BULLET,
                text: "●",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 5760, hanging: Bt(0.25) } },
                },
              },
              {
                level: 8,
                format: Yi.BULLET,
                text: "●",
                alignment: U.LEFT,
                style: {
                  paragraph: { indent: { left: 6480, hanging: Bt(0.25) } },
                },
              },
            ]);
            this.concreteNumberingMap.set(
              "default-bullet-numbering",
              new po({
                numId: 1,
                abstractNumId: e.id,
                reference: "default-bullet-numbering",
                instance: 0,
                overrideLevel: { num: 0, start: 1 },
              })
            ),
              this.abstractNumberingMap.set("default-bullet-numbering", e);
            for (const e of t.config)
              this.abstractNumberingMap.set(
                e.reference,
                new uo(Mt(), e.levels)
              ),
                this.referenceConfigMap.set(e.reference, e.levels);
          }
          prepForXml(t) {
            for (const t of this.abstractNumberingMap.values())
              this.root.push(t);
            for (const t of this.concreteNumberingMap.values())
              this.root.push(t);
            return super.prepForXml(t);
          }
          createConcreteNumberingInstance(t, e) {
            const r = this.abstractNumberingMap.get(t);
            if (!r) return;
            const n = `${t}-${e}`;
            if (this.concreteNumberingMap.has(n)) return;
            const s = {
                numId: Mt(),
                abstractNumId: r.id,
                reference: t,
                instance: e,
                overrideLevel: { num: 0, start: 1 },
              },
              i = this.referenceConfigMap.get(t),
              o = i && i[0].start;
            o &&
              Number.isInteger(o) &&
              (s.overrideLevel = { num: 0, start: o }),
              this.concreteNumberingMap.set(n, new po(s));
          }
          get ConcreteNumbering() {
            return Array.from(this.concreteNumberingMap.values());
          }
          get ReferenceConfig() {
            return Array.from(this.referenceConfigMap.values());
          }
        }
        class bo extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                version: "w:val",
                name: "w:name",
                uri: "w:uri",
              });
          }
        }
        class vo extends s {
          constructor(t) {
            super("w:compatSetting"),
              this.root.push(
                new bo({
                  version: t,
                  uri: "http://schemas.microsoft.com/office/word",
                  name: "compatibilityMode",
                })
              );
          }
        }
        class _o extends s {
          constructor(t) {
            super("w:compat"),
              void 0 !== t.doNotExpandShiftReturn &&
                this.root.push(
                  new L("w:doNotExpandShiftReturn", t.doNotExpandShiftReturn)
                ),
              t.version && this.root.push(new vo(t.version));
          }
        }
        class xo extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                wpc: "xmlns:wpc",
                mc: "xmlns:mc",
                o: "xmlns:o",
                r: "xmlns:r",
                m: "xmlns:m",
                v: "xmlns:v",
                wp14: "xmlns:wp14",
                wp: "xmlns:wp",
                w10: "xmlns:w10",
                w: "xmlns:w",
                w14: "xmlns:w14",
                w15: "xmlns:w15",
                wpg: "xmlns:wpg",
                wpi: "xmlns:wpi",
                wne: "xmlns:wne",
                wps: "xmlns:wps",
                Ignorable: "mc:Ignorable",
              });
          }
        }
        class Eo extends s {
          constructor(t) {
            super("w:settings"),
              this.root.push(
                new xo({
                  wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                  mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                  o: "urn:schemas-microsoft-com:office:office",
                  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                  m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
                  v: "urn:schemas-microsoft-com:vml",
                  wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                  wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                  w10: "urn:schemas-microsoft-com:office:word",
                  w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                  w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                  w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                  wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                  wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                  wne: "http://schemas.microsoft.com/office/word/2006/wordml",
                  wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                  Ignorable: "w14 w15 wp14",
                })
              ),
              this.root.push(new L("w:displayBackgroundShape", !0)),
              void 0 !== t.trackRevisions &&
                this.root.push(new L("w:trackRevisions", t.trackRevisions)),
              void 0 !== t.evenAndOddHeaders &&
                this.root.push(
                  new L("w:evenAndOddHeaders", t.evenAndOddHeaders)
                ),
              void 0 !== t.updateFields &&
                this.root.push(new L("w:updateFields", t.updateFields)),
              this.root.push(
                new _o({ version: t.compatabilityModeVersion || 15 })
              );
          }
        }
        class To extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { val: "w:val" });
          }
        }
        class Ao extends s {
          constructor(t) {
            super("w:name"), this.root.push(new To({ val: t }));
          }
        }
        class So extends s {
          constructor(t) {
            super("w:uiPriority"), this.root.push(new To({ val: m(t) }));
          }
        }
        class Ro extends o {
          constructor() {
            super(...arguments),
              (this.xmlKeys = {
                type: "w:type",
                styleId: "w:styleId",
                default: "w:default",
                customStyle: "w:customStyle",
              });
          }
        }
        class Io extends s {
          constructor(t, e) {
            super("w:style"),
              this.root.push(new Ro(t)),
              e.name && this.root.push(new Ao(e.name)),
              e.basedOn && this.root.push(new F("w:basedOn", e.basedOn)),
              e.next && this.root.push(new F("w:next", e.next)),
              e.link && this.root.push(new F("w:link", e.link)),
              void 0 !== e.uiPriority && this.root.push(new So(e.uiPriority)),
              void 0 !== e.semiHidden &&
                this.root.push(new L("w:semiHidden", e.semiHidden)),
              void 0 !== e.unhideWhenUsed &&
                this.root.push(new L("w:unhideWhenUsed", e.unhideWhenUsed)),
              void 0 !== e.quickFormat &&
                this.root.push(new L("w:qFormat", e.quickFormat));
          }
        }
        class No extends Io {
          constructor(t) {
            super({ type: "paragraph", styleId: t.id }, t),
              (this.paragraphProperties = new Bn(t.paragraph)),
              (this.runProperties = new St(t.run)),
              this.root.push(this.paragraphProperties),
              this.root.push(this.runProperties);
          }
        }
        class Oo extends Io {
          constructor(t) {
            super(
              { type: "character", styleId: t.id },
              Object.assign({ uiPriority: 99, unhideWhenUsed: !0 }, t)
            ),
              (this.runProperties = new St(t.run)),
              this.root.push(this.runProperties);
          }
        }
        class Co extends No {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                basedOn: "Normal",
                next: "Normal",
                quickFormat: !0,
              })
            );
          }
        }
        class ko extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Title",
                name: "Title",
              })
            );
          }
        }
        class Do extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading1",
                name: "Heading 1",
              })
            );
          }
        }
        class Lo extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading2",
                name: "Heading 2",
              })
            );
          }
        }
        class Po extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading3",
                name: "Heading 3",
              })
            );
          }
        }
        class Fo extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading4",
                name: "Heading 4",
              })
            );
          }
        }
        class Bo extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading5",
                name: "Heading 5",
              })
            );
          }
        }
        class Mo extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Heading6",
                name: "Heading 6",
              })
            );
          }
        }
        class Uo extends Co {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Strong",
                name: "Strong",
              })
            );
          }
        }
        class zo extends No {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "ListParagraph",
                name: "List Paragraph",
                basedOn: "Normal",
                quickFormat: !0,
              })
            );
          }
        }
        class Ho extends No {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "FootnoteText",
                name: "footnote text",
                link: "FootnoteTextChar",
                basedOn: "Normal",
                uiPriority: 99,
                semiHidden: !0,
                unhideWhenUsed: !0,
                paragraph: {
                  spacing: { after: 0, line: 240, lineRule: Wt.AUTO },
                },
                run: { size: 20 },
              })
            );
          }
        }
        class jo extends Oo {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "FootnoteReference",
                name: "footnote reference",
                basedOn: "DefaultParagraphFont",
                semiHidden: !0,
                run: { superScript: !0 },
              })
            );
          }
        }
        class Ko extends Oo {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "FootnoteTextChar",
                name: "Footnote Text Char",
                basedOn: "DefaultParagraphFont",
                link: "FootnoteText",
                semiHidden: !0,
                run: { size: 20 },
              })
            );
          }
        }
        class Go extends Oo {
          constructor(t) {
            super(
              Object.assign(Object.assign({}, t), {
                id: "Hyperlink",
                name: "Hyperlink",
                basedOn: "DefaultParagraphFont",
                run: { color: "0563C1", underline: { type: W.SINGLE } },
              })
            );
          }
        }
        class Wo extends s {
          constructor(t) {
            if (
              (super("w:styles"),
              t.initialStyles && this.root.push(t.initialStyles),
              t.importedStyles)
            )
              for (const e of t.importedStyles) this.root.push(e);
            if (t.paragraphStyles)
              for (const e of t.paragraphStyles) this.root.push(new No(e));
            if (t.characterStyles)
              for (const e of t.characterStyles) this.root.push(new Oo(e));
          }
        }
        class Vo extends s {
          constructor(t) {
            super("w:pPrDefault"), this.root.push(new Bn(t));
          }
        }
        class $o extends s {
          constructor(t) {
            super("w:rPrDefault"), this.root.push(new St(t));
          }
        }
        class Xo extends s {
          constructor(t) {
            super("w:docDefaults"),
              (this.runPropertiesDefaults = new $o(t.run)),
              (this.paragraphPropertiesDefaults = new Vo(t.paragraph)),
              this.root.push(this.runPropertiesDefaults),
              this.root.push(this.paragraphPropertiesDefaults);
          }
        }
        class qo {
          newInstance(t) {
            const e = (0, c.xml2js)(t, { compact: !1 });
            let r;
            for (const t of e.elements || []) "w:styles" === t.name && (r = t);
            if (void 0 === r) throw new Error("can not find styles element");
            const n = r.elements || [];
            return new Wo({
              initialStyles: new p(r.attributes),
              importedStyles: n.map((t) => u(t)),
            });
          }
        }
        class Zo {
          newInstance(t = {}) {
            var e;
            return {
              initialStyles: new An({
                mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
                r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                w14: "http://schemas.microsoft.com/office/word/2010/wordml",
                w15: "http://schemas.microsoft.com/office/word/2012/wordml",
                Ignorable: "w14 w15",
              }),
              importedStyles: [
                new Xo(null !== (e = t.document) && void 0 !== e ? e : {}),
                new ko(Object.assign({ run: { size: 56 } }, t.title)),
                new Do(
                  Object.assign(
                    { run: { color: "2E74B5", size: 32 } },
                    t.heading1
                  )
                ),
                new Lo(
                  Object.assign(
                    { run: { color: "2E74B5", size: 26 } },
                    t.heading2
                  )
                ),
                new Po(
                  Object.assign(
                    { run: { color: "1F4D78", size: 24 } },
                    t.heading3
                  )
                ),
                new Fo(
                  Object.assign(
                    { run: { color: "2E74B5", italics: !0 } },
                    t.heading4
                  )
                ),
                new Bo(Object.assign({ run: { color: "2E74B5" } }, t.heading5)),
                new Mo(Object.assign({ run: { color: "1F4D78" } }, t.heading6)),
                new Uo(Object.assign({ run: { bold: !0 } }, t.strong)),
                new zo(t.listParagraph || {}),
                new Go(t.hyperlink || {}),
                new jo(t.footnoteReference || {}),
                new Ho(t.footnoteText || {}),
                new Ko(t.footnoteTextChar || {}),
              ],
            };
          }
        }
        class Yo {
          constructor(t, e = {}) {
            var r, n, s, i, o, a;
            if (
              ((this.currentRelationshipId = 1),
              (this.headers = []),
              (this.footers = []),
              (this.coreProperties = new Ai(
                Object.assign(Object.assign({}, t), {
                  creator:
                    null !== (r = t.creator) && void 0 !== r ? r : "Un-named",
                  revision: null !== (n = t.revision) && void 0 !== n ? n : 1,
                  lastModifiedBy:
                    null !== (s = t.lastModifiedBy) && void 0 !== s
                      ? s
                      : "Un-named",
                })
              )),
              (this.numbering = new yo(
                t.numbering ? t.numbering : { config: [] }
              )),
              (this.fileRelationships = new On()),
              (this.customProperties = new Ci(
                null !== (i = t.customProperties) && void 0 !== i ? i : []
              )),
              (this.appProperties = new yi()),
              (this.footnotesWrapper = new Wi()),
              (this.contentTypes = new Ti()),
              (this.documentWrapper = new Cn({
                background: t.background || {},
              })),
              (this.settings = new Eo({
                compatabilityModeVersion: t.compatabilityModeVersion,
                evenAndOddHeaders: !!t.evenAndOddHeaderAndFooters,
                trackRevisions:
                  null === (o = t.features) || void 0 === o
                    ? void 0
                    : o.trackRevisions,
                updateFields:
                  null === (a = t.features) || void 0 === a
                    ? void 0
                    : a.updateFields,
              })),
              (this.media =
                e.template && e.template.media ? e.template.media : new qi()),
              e.template &&
                (this.currentRelationshipId =
                  e.template.currentRelationshipId + 1),
              e.template && t.externalStyles)
            )
              throw Error("can not use both template and external styles");
            if (e.template) {
              const t = new qo();
              this.styles = t.newInstance(e.template.styles);
            } else if (t.externalStyles) {
              const e = new qo();
              this.styles = e.newInstance(t.externalStyles);
            } else if (t.styles) {
              const e = new Zo().newInstance(t.styles.default);
              this.styles = new Wo(
                Object.assign(Object.assign({}, e), t.styles)
              );
            } else {
              const t = new Zo();
              this.styles = new Wo(t.newInstance());
            }
            if (
              (this.addDefaultRelationships(), e.template && e.template.headers)
            )
              for (const t of e.template.headers)
                this.addHeaderToDocument(t.header, t.type);
            if (e.template && e.template.footers)
              for (const t of e.template.footers)
                this.addFooterToDocument(t.footer, t.type);
            for (const e of t.sections) this.addSection(e);
            if (t.footnotes)
              for (const e in t.footnotes)
                this.footnotesWrapper.View.createFootNote(
                  parseFloat(e),
                  t.footnotes[e].children
                );
          }
          addSection({
            headers: t = {},
            footers: e = {},
            children: r,
            properties: n,
          }) {
            this.documentWrapper.View.Body.addSection(
              Object.assign(Object.assign({}, n), {
                headerWrapperGroup: {
                  default: t.default ? this.createHeader(t.default) : void 0,
                  first: t.first ? this.createHeader(t.first) : void 0,
                  even: t.even ? this.createHeader(t.even) : void 0,
                },
                footerWrapperGroup: {
                  default: e.default ? this.createFooter(e.default) : void 0,
                  first: e.first ? this.createFooter(e.first) : void 0,
                  even: e.even ? this.createFooter(e.even) : void 0,
                },
              })
            );
            for (const t of r) this.documentWrapper.View.add(t);
          }
          createHeader(t) {
            const e = new Xi(this.media, this.currentRelationshipId++);
            for (const r of t.options.children) e.add(r);
            return this.addHeaderToDocument(e), e;
          }
          createFooter(t) {
            const e = new Li(this.media, this.currentRelationshipId++);
            for (const r of t.options.children) e.add(r);
            return this.addFooterToDocument(e), e;
          }
          addHeaderToDocument(t, e = Jt.DEFAULT) {
            this.headers.push({ header: t, type: e }),
              this.documentWrapper.Relationships.createRelationship(
                t.View.ReferenceId,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",
                `header${this.headers.length}.xml`
              ),
              this.contentTypes.addHeader(this.headers.length);
          }
          addFooterToDocument(t, e = Jt.DEFAULT) {
            this.footers.push({ footer: t, type: e }),
              this.documentWrapper.Relationships.createRelationship(
                t.View.ReferenceId,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer",
                `footer${this.footers.length}.xml`
              ),
              this.contentTypes.addFooter(this.footers.length);
          }
          addDefaultRelationships() {
            this.fileRelationships.createRelationship(
              1,
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
              "word/document.xml"
            ),
              this.fileRelationships.createRelationship(
                2,
                "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
                "docProps/core.xml"
              ),
              this.fileRelationships.createRelationship(
                3,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
                "docProps/app.xml"
              ),
              this.fileRelationships.createRelationship(
                4,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
                "docProps/custom.xml"
              ),
              this.documentWrapper.Relationships.createRelationship(
                this.currentRelationshipId++,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
                "styles.xml"
              ),
              this.documentWrapper.Relationships.createRelationship(
                this.currentRelationshipId++,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
                "numbering.xml"
              ),
              this.documentWrapper.Relationships.createRelationship(
                this.currentRelationshipId++,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes",
                "footnotes.xml"
              ),
              this.documentWrapper.Relationships.createRelationship(
                this.currentRelationshipId++,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
                "settings.xml"
              );
          }
          get Document() {
            return this.documentWrapper;
          }
          get Styles() {
            return this.styles;
          }
          get CoreProperties() {
            return this.coreProperties;
          }
          get Numbering() {
            return this.numbering;
          }
          get Media() {
            return this.media;
          }
          get FileRelationships() {
            return this.fileRelationships;
          }
          get Headers() {
            return this.headers.map((t) => t.header);
          }
          get Footers() {
            return this.footers.map((t) => t.footer);
          }
          get ContentTypes() {
            return this.contentTypes;
          }
          get CustomProperties() {
            return this.customProperties;
          }
          get AppProperties() {
            return this.appProperties;
          }
          get FootNotes() {
            return this.footnotesWrapper;
          }
          get Settings() {
            return this.settings;
          }
        }
        const Qo = "";
        class Jo extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class ta extends s {
          constructor(t = {}) {
            super("w:instrText"),
              (this.properties = t),
              this.root.push(new Jo({ space: j.PRESERVE }));
            let e = "TOC";
            this.properties.captionLabel &&
              (e = `${e} \\a "${this.properties.captionLabel}"`),
              this.properties.entriesFromBookmark &&
                (e = `${e} \\b "${this.properties.entriesFromBookmark}"`),
              this.properties.captionLabelIncludingNumbers &&
                (e = `${e} \\c "${this.properties.captionLabelIncludingNumbers}"`),
              this.properties.sequenceAndPageNumbersSeparator &&
                (e = `${e} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`),
              this.properties.tcFieldIdentifier &&
                (e = `${e} \\f "${this.properties.tcFieldIdentifier}"`),
              this.properties.hyperlink && (e = `${e} \\h`),
              this.properties.tcFieldLevelRange &&
                (e = `${e} \\l "${this.properties.tcFieldLevelRange}"`),
              this.properties.pageNumbersEntryLevelsRange &&
                (e = `${e} \\n "${this.properties.pageNumbersEntryLevelsRange}"`),
              this.properties.headingStyleRange &&
                (e = `${e} \\o "${this.properties.headingStyleRange}"`),
              this.properties.entryAndPageNumberSeparator &&
                (e = `${e} \\p "${this.properties.entryAndPageNumberSeparator}"`),
              this.properties.seqFieldIdentifierForPrefix &&
                (e = `${e} \\s "${this.properties.seqFieldIdentifierForPrefix}"`),
              this.properties.stylesWithLevels &&
                this.properties.stylesWithLevels.length &&
                (e = `${e} \\t "${this.properties.stylesWithLevels
                  .map((t) => `${t.styleName},${t.level}`)
                  .join(",")}"`),
              this.properties.useAppliedParagraphOutlineLevel &&
                (e = `${e} \\u`),
              this.properties.preserveTabInEntries && (e = `${e} \\w`),
              this.properties.preserveNewLineInEntries && (e = `${e} \\x`),
              this.properties.hideTabAndPageNumbersInWebView &&
                (e = `${e} \\z`),
              this.root.push(e);
          }
        }
        class ea extends s {
          constructor() {
            super("w:sdtContent");
          }
        }
        class ra extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { alias: "w:val" });
          }
        }
        class na extends s {
          constructor(t) {
            super("w:alias"), this.root.push(new ra({ alias: t }));
          }
        }
        class sa extends s {
          constructor(t) {
            super("w:sdtPr"), this.root.push(new na(t));
          }
        }
        class ia extends s {
          constructor(t = "Table of Contents", e) {
            super("w:sdt"), this.root.push(new sa(t));
            const r = new ea(),
              n = new Mn({
                children: [
                  new Ot({ children: [new nt(!0), new ta(e), new st()] }),
                ],
              });
            r.addChildElement(n);
            const s = new Mn({ children: [new Ot({ children: [new it()] })] });
            r.addChildElement(s), this.root.push(r);
          }
        }
        class oa {
          constructor(t, e) {
            (this.styleName = t), (this.level = e);
          }
        }
        class aa {
          constructor(t = { children: [] }) {
            this.options = t;
          }
        }
        class ca {
          constructor(t = { children: [] }) {
            this.options = t;
          }
        }
        class ua extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { id: "w:id" });
          }
        }
        class la extends s {
          constructor(t) {
            super("w:footnoteReference"), this.root.push(new ua({ id: t }));
          }
        }
        class ha extends Ot {
          constructor(t) {
            super({ style: "FootnoteReference" }), this.root.push(new la(t));
          }
        }
        class pa extends s {
          constructor(t) {
            super("w:ins"),
              this.root.push(
                new lt({ id: t.id, author: t.author, date: t.date })
              ),
              this.addChildElement(new Ct(t));
          }
        }
        class da extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class fa extends s {
          constructor() {
            super("w:delInstrText"),
              this.root.push(new da({ space: j.PRESERVE })),
              this.root.push("PAGE");
          }
        }
        class ma extends s {
          constructor() {
            super("w:delInstrText"),
              this.root.push(new da({ space: j.PRESERVE })),
              this.root.push("NUMPAGES");
          }
        }
        class wa extends s {
          constructor() {
            super("w:delInstrText"),
              this.root.push(new da({ space: j.PRESERVE })),
              this.root.push("SECTIONPAGES");
          }
        }
        class ga extends o {
          constructor() {
            super(...arguments), (this.xmlKeys = { space: "xml:space" });
          }
        }
        class ya extends s {
          constructor(t) {
            super("w:delText"),
              this.root.push(new ga({ space: j.PRESERVE })),
              this.root.push(t);
          }
        }
        class ba extends s {
          constructor(t) {
            super("w:del"),
              this.root.push(
                new lt({ id: t.id, author: t.author, date: t.date })
              ),
              (this.deletedTextRunWrapper = new va(t)),
              this.addChildElement(this.deletedTextRunWrapper);
          }
        }
        class va extends s {
          constructor(t) {
            if ((super("w:r"), this.root.push(new St(t)), t.children))
              for (const e of t.children)
                if ("string" != typeof e) this.root.push(e);
                else
                  switch (e) {
                    case V.CURRENT:
                      this.root.push(new nt()),
                        this.root.push(new fa()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES:
                      this.root.push(new nt()),
                        this.root.push(new ma()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES_IN_SECTION:
                      this.root.push(new nt()),
                        this.root.push(new wa()),
                        this.root.push(new st()),
                        this.root.push(new it());
                      break;
                    default:
                      this.root.push(new ya(e));
                  }
            else t.text && this.root.push(new ya(t.text));
            if (t.break)
              for (let e = 0; e < t.break; e++)
                this.root.splice(1, 0, new et());
          }
        }
        var _a, xa, Ea;
        !(function (t) {
          (t.CENTER = "center"),
            (t.INSIDE = "inside"),
            (t.LEFT = "left"),
            (t.OUTSIDE = "outside"),
            (t.RIGHT = "right");
        })(_a || (_a = {})),
          (function (t) {
            (t.BOTTOM = "bottom"),
              (t.CENTER = "center"),
              (t.INSIDE = "inside"),
              (t.OUTSIDE = "outside"),
              (t.TOP = "top");
          })(xa || (xa = {})),
          (function (t) {
            (t.DECIMAL = "decimal"),
              (t.UPPER_ROMAN = "upperRoman"),
              (t.LOWER_ROMAN = "lowerRoman"),
              (t.UPPER_LETTER = "upperLetter"),
              (t.LOWER_LETTER = "lowerLetter"),
              (t.ORDINAL = "ordinal"),
              (t.CARDINAL_TEXT = "cardinalText"),
              (t.ORDINAL_TEXT = "ordinalText"),
              (t.HEX = "hex"),
              (t.CHICAGO = "chicago"),
              (t.IDEOGRAPH_DIGITAL = "ideographDigital"),
              (t.JAPANESE_COUNTING = "japaneseCounting"),
              (t.AIUEO = "aiueo"),
              (t.IROHA = "iroha"),
              (t.DECIMAL_FULL_WIDTH = "decimalFullWidth"),
              (t.DECIMAL_HALF_WIDTH = "decimalHalfWidth"),
              (t.JAPANESE_LEGAL = "japaneseLegal"),
              (t.JAPANESE_DIGITAL_TEN_THOUSAND = "japaneseDigitalTenThousand"),
              (t.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle"),
              (t.DECIMAL_FULL_WIDTH_2 = "decimalFullWidth2"),
              (t.AIUEO_FULL_WIDTH = "aiueoFullWidth"),
              (t.IROHA_FULL_WIDTH = "irohaFullWidth"),
              (t.DECIMAL_ZERO = "decimalZero"),
              (t.BULLET = "bullet"),
              (t.GANADA = "ganada"),
              (t.CHOSUNG = "chosung"),
              (t.DECIMAL_ENCLOSED_FULL_STOP = "decimalEnclosedFullstop"),
              (t.DECIMAL_ENCLOSED_PAREN = "decimalEnclosedParen"),
              (t.DECIMAL_ENCLOSED_CIRCLE_CHINESE =
                "decimalEnclosedCircleChinese"),
              (t.IDEOGRAPH_ENCLOSED_CIRCLE = "ideographEnclosedCircle"),
              (t.IDEOGRAPH_TRADITIONAL = "ideographTraditional"),
              (t.IDEOGRAPH_ZODIAC = "ideographZodiac"),
              (t.IDEOGRAPH_ZODIAC_TRADITIONAL = "ideographZodiacTraditional"),
              (t.TAIWANESE_COUNTING = "taiwaneseCounting"),
              (t.IDEOGRAPH_LEGAL_TRADITIONAL = "ideographLegalTraditional"),
              (t.TAIWANESE_COUNTING_THOUSAND = "taiwaneseCountingThousand"),
              (t.TAIWANESE_DIGITAL = "taiwaneseDigital"),
              (t.CHINESE_COUNTING = "chineseCounting"),
              (t.CHINESE_LEGAL_SIMPLIFIED = "chineseLegalSimplified"),
              (t.CHINESE_COUNTING_TEN_THOUSAND = "chineseCountingThousand"),
              (t.KOREAN_DIGITAL = "koreanDigital"),
              (t.KOREAN_COUNTING = "koreanCounting"),
              (t.KOREAN_LEGAL = "koreanLegal"),
              (t.KOREAN_DIGITAL_2 = "koreanDigital2"),
              (t.VIETNAMESE_COUNTING = "vietnameseCounting"),
              (t.RUSSIAN_LOWER = "russianLower"),
              (t.RUSSIAN_UPPER = "russianUpper"),
              (t.NONE = "none"),
              (t.NUMBER_IN_DASH = "numberInDash"),
              (t.HEBREW_1 = "hebrew1"),
              (t.HEBREW_2 = "hebrew2"),
              (t.ARABIC_ALPHA = "arabicAlpha"),
              (t.ARABIC_ABJAD = "arabicAbjad"),
              (t.HINDI_VOWELS = "hindiVowels"),
              (t.HINDI_CONSONANTS = "hindiConsonants"),
              (t.HINDI_NUMBERS = "hindiNumbers"),
              (t.HINDI_COUNTING = "hindiCounting"),
              (t.THAI_LETTERS = "thaiLetters"),
              (t.THAI_NUMBERS = "thaiNumbers"),
              (t.THAI_COUNTING = "thaiCounting"),
              (t.BAHT_TEXT = "bahtText"),
              (t.DOLLAR_TEXT = "dollarText");
          })(Ea || (Ea = {}));
        var Ta = r(733),
          Aa = r(479);
        class Sa {
          format(t, e = {}) {
            const r = t.prepForXml(e);
            if (r) return r;
            throw Error("XMLComponent did not format correctly");
          }
        }
        class Ra {
          replace(t, e, r) {
            let n = t;
            return (
              e.forEach((t, e) => {
                n = n.replace(
                  new RegExp(`{${t.fileName}}`, "g"),
                  (r + e).toString()
                );
              }),
              n
            );
          }
          getMediaData(t, e) {
            return e.Array.filter((e) => t.search(`{${e.fileName}}`) > 0);
          }
        }
        class Ia {
          replace(t, e) {
            let r = t;
            for (const t of e)
              r = r.replace(
                new RegExp(`{${t.reference}-${t.instance}}`, "g"),
                t.numId.toString()
              );
            return r;
          }
        }
        var Na = function (t, e, r, n) {
          return new (r || (r = Promise))(function (s, i) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(o, a);
            }
            c((n = n.apply(t, e || [])).next());
          });
        };
        class Oa {
          static toBuffer(t, e) {
            return Na(this, void 0, void 0, function* () {
              const r = this.compiler.compile(t, e);
              return yield r.generateAsync({
                type: "nodebuffer",
                mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
              });
            });
          }
          static toBase64String(t, e) {
            return Na(this, void 0, void 0, function* () {
              const r = this.compiler.compile(t, e);
              return yield r.generateAsync({
                type: "base64",
                mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
              });
            });
          }
          static toBlob(t, e) {
            return Na(this, void 0, void 0, function* () {
              const r = this.compiler.compile(t, e);
              return yield r.generateAsync({
                type: "blob",
                mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
              });
            });
          }
        }
        Oa.compiler = new (class {
          constructor() {
            (this.formatter = new Sa()),
              (this.imageReplacer = new Ra()),
              (this.numberingReplacer = new Ia());
          }
          compile(t, e) {
            const r = new Ta(),
              n = this.xmlifyFile(t, e),
              s = new Map(Object.entries(n));
            for (const [, t] of s)
              if (Array.isArray(t)) for (const e of t) r.file(e.path, e.data);
              else r.file(t.path, t.data);
            for (const e of t.Media.Array) {
              const t = e.stream;
              r.file(`word/media/${e.fileName}`, t);
            }
            return r;
          }
          xmlifyFile(t, e) {
            const r = t.Document.Relationships.RelationshipCount + 1,
              n = Aa(
                this.formatter.format(t.Document.View, {
                  viewWrapper: t.Document,
                  file: t,
                }),
                {
                  indent: e,
                  declaration: { standalone: "yes", encoding: "UTF-8" },
                }
              ),
              s = this.imageReplacer.getMediaData(n, t.Media);
            return {
              Relationships: {
                data: (() => (
                  s.forEach((e, n) => {
                    t.Document.Relationships.createRelationship(
                      r + n,
                      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                      `media/${e.fileName}`
                    );
                  }),
                  Aa(
                    this.formatter.format(t.Document.Relationships, {
                      viewWrapper: t.Document,
                      file: t,
                    }),
                    { indent: e, declaration: { encoding: "UTF-8" } }
                  )
                ))(),
                path: "word/_rels/document.xml.rels",
              },
              Document: {
                data: (() => {
                  const e = this.imageReplacer.replace(n, s, r);
                  return this.numberingReplacer.replace(
                    e,
                    t.Numbering.ConcreteNumbering
                  );
                })(),
                path: "word/document.xml",
              },
              Styles: {
                data: (() => {
                  const r = Aa(
                    this.formatter.format(t.Styles, {
                      viewWrapper: t.Document,
                      file: t,
                    }),
                    {
                      indent: e,
                      declaration: { standalone: "yes", encoding: "UTF-8" },
                    }
                  );
                  return this.numberingReplacer.replace(
                    r,
                    t.Numbering.ConcreteNumbering
                  );
                })(),
                path: "word/styles.xml",
              },
              Properties: {
                data: Aa(
                  this.formatter.format(t.CoreProperties, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  {
                    indent: e,
                    declaration: { standalone: "yes", encoding: "UTF-8" },
                  }
                ),
                path: "docProps/core.xml",
              },
              Numbering: {
                data: Aa(
                  this.formatter.format(t.Numbering, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  {
                    indent: e,
                    declaration: { standalone: "yes", encoding: "UTF-8" },
                  }
                ),
                path: "word/numbering.xml",
              },
              FileRelationships: {
                data: Aa(
                  this.formatter.format(t.FileRelationships, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                ),
                path: "_rels/.rels",
              },
              HeaderRelationships: t.Headers.map((r, n) => {
                const s = Aa(
                  this.formatter.format(r.View, { viewWrapper: r, file: t }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                );
                return (
                  this.imageReplacer
                    .getMediaData(s, t.Media)
                    .forEach((t, e) => {
                      r.Relationships.createRelationship(
                        e,
                        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                        `media/${t.fileName}`
                      );
                    }),
                  {
                    data: Aa(
                      this.formatter.format(r.Relationships, {
                        viewWrapper: r,
                        file: t,
                      }),
                      { indent: e, declaration: { encoding: "UTF-8" } }
                    ),
                    path: `word/_rels/header${n + 1}.xml.rels`,
                  }
                );
              }),
              FooterRelationships: t.Footers.map((r, n) => {
                const s = Aa(
                  this.formatter.format(r.View, { viewWrapper: r, file: t }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                );
                return (
                  this.imageReplacer
                    .getMediaData(s, t.Media)
                    .forEach((t, e) => {
                      r.Relationships.createRelationship(
                        e,
                        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                        `media/${t.fileName}`
                      );
                    }),
                  {
                    data: Aa(
                      this.formatter.format(r.Relationships, {
                        viewWrapper: r,
                        file: t,
                      }),
                      { indent: e, declaration: { encoding: "UTF-8" } }
                    ),
                    path: `word/_rels/footer${n + 1}.xml.rels`,
                  }
                );
              }),
              Headers: t.Headers.map((r, n) => {
                const s = Aa(
                    this.formatter.format(r.View, { viewWrapper: r, file: t }),
                    { indent: e, declaration: { encoding: "UTF-8" } }
                  ),
                  i = this.imageReplacer.getMediaData(s, t.Media);
                return {
                  data: this.imageReplacer.replace(s, i, 0),
                  path: `word/header${n + 1}.xml`,
                };
              }),
              Footers: t.Footers.map((r, n) => {
                const s = Aa(
                    this.formatter.format(r.View, { viewWrapper: r, file: t }),
                    { indent: e, declaration: { encoding: "UTF-8" } }
                  ),
                  i = this.imageReplacer.getMediaData(s, t.Media);
                return {
                  data: this.imageReplacer.replace(s, i, 0),
                  path: `word/footer${n + 1}.xml`,
                };
              }),
              ContentTypes: {
                data: Aa(
                  this.formatter.format(t.ContentTypes, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                ),
                path: "[Content_Types].xml",
              },
              CustomProperties: {
                data: Aa(
                  this.formatter.format(t.CustomProperties, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  {
                    indent: e,
                    declaration: { standalone: "yes", encoding: "UTF-8" },
                  }
                ),
                path: "docProps/custom.xml",
              },
              AppProperties: {
                data: Aa(
                  this.formatter.format(t.AppProperties, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  {
                    indent: e,
                    declaration: { standalone: "yes", encoding: "UTF-8" },
                  }
                ),
                path: "docProps/app.xml",
              },
              FootNotes: {
                data: Aa(
                  this.formatter.format(t.FootNotes.View, {
                    viewWrapper: t.FootNotes,
                    file: t,
                  }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                ),
                path: "word/footnotes.xml",
              },
              FootNotesRelationships: {
                data: Aa(
                  this.formatter.format(t.FootNotes.Relationships, {
                    viewWrapper: t.FootNotes,
                    file: t,
                  }),
                  { indent: e, declaration: { encoding: "UTF-8" } }
                ),
                path: "word/_rels/footnotes.xml.rels",
              },
              Settings: {
                data: Aa(
                  this.formatter.format(t.Settings, {
                    viewWrapper: t.Document,
                    file: t,
                  }),
                  {
                    indent: e,
                    declaration: { standalone: "yes", encoding: "UTF-8" },
                  }
                ),
                path: "word/settings.xml",
              },
            };
          }
        })();
        var Ca = function (t, e, r, n) {
          return new (r || (r = Promise))(function (s, i) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(o, a);
            }
            c((n = n.apply(t, e || [])).next());
          });
        };
        const ka = {
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header":
            "header",
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer":
            "footer",
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image":
            "image",
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink":
            "hyperlink",
        };
        var Da;
        !(function (t) {
          (t.HEADER = "header"),
            (t.FOOTER = "footer"),
            (t.IMAGE = "image"),
            (t.HYPERLINK = "hyperlink");
        })(Da || (Da = {}));
        class La {
          extract(t) {
            return Ca(this, void 0, void 0, function* () {
              const e = yield Ta.loadAsync(t),
                r = yield e.files["word/document.xml"].async("text"),
                n = yield e.files["word/_rels/document.xml.rels"].async("text"),
                s = this.extractDocumentRefs(r),
                i = this.findReferenceFiles(n),
                o = new qi();
              return {
                headers: yield this.createHeaders(e, s, i, o, 0),
                footers: yield this.createFooters(e, s, i, o, s.headers.length),
                currentRelationshipId: s.footers.length + s.headers.length,
                styles: yield e.files["word/styles.xml"].async("text"),
                titlePageIsDefined: this.checkIfTitlePageIsDefined(r),
                media: o,
              };
            });
          }
          createFooters(t, e, r, n, s) {
            return Ca(this, void 0, void 0, function* () {
              const i = e.footers
                .map((e, i) =>
                  Ca(this, void 0, void 0, function* () {
                    const o = r.find((t) => t.id === e.id);
                    if (null === o || !o)
                      throw new Error(
                        `Can not find target file for id ${e.id}`
                      );
                    const a = yield t.files[`word/${o.target}`].async("text"),
                      l = (0, c.xml2js)(a, {
                        compact: !1,
                        captureSpacesBetweenElements: !0,
                      });
                    if (!l.elements) return;
                    const h = u(
                        l.elements.reduce((t, e) =>
                          "w:ftr" === e.name ? e : t
                        )
                      ),
                      p = new Li(n, s + i, h);
                    return (
                      yield this.addRelationshipToWrapper(o, t, p, n),
                      { type: e.type, footer: p }
                    );
                  })
                )
                .filter((t) => !!t);
              return Promise.all(i);
            });
          }
          createHeaders(t, e, r, n, s) {
            return Ca(this, void 0, void 0, function* () {
              const i = e.headers
                .map((e, i) =>
                  Ca(this, void 0, void 0, function* () {
                    const o = r.find((t) => t.id === e.id);
                    if (null === o || !o)
                      throw new Error(
                        `Can not find target file for id ${e.id}`
                      );
                    const a = yield t.files[`word/${o.target}`].async("text"),
                      l = (0, c.xml2js)(a, {
                        compact: !1,
                        captureSpacesBetweenElements: !0,
                      });
                    if (!l.elements) return;
                    const h = u(
                        l.elements.reduce((t, e) =>
                          "w:hdr" === e.name ? e : t
                        )
                      ),
                      p = new Xi(n, s + i, h);
                    return (
                      yield this.addRelationshipToWrapper(o, t, p, n),
                      { type: e.type, header: p }
                    );
                  })
                )
                .filter((t) => !!t);
              return Promise.all(i);
            });
          }
          addRelationshipToWrapper(t, e, r, n) {
            return Ca(this, void 0, void 0, function* () {
              const s = e.files[`word/_rels/${t.target}.rels`];
              if (!s) return;
              const i = yield s.async("text"),
                o = this.findReferenceFiles(i).filter(
                  (t) => t.type === Da.IMAGE
                ),
                a = this.findReferenceFiles(i).filter(
                  (t) => t.type === Da.HYPERLINK
                );
              for (const t of o) {
                const s = yield e.files[`word/${t.target}`].async("nodebuffer"),
                  i = n.addMedia(s, { width: 100, height: 100 });
                r.Relationships.createRelationship(
                  t.id,
                  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                  `media/${i.fileName}`
                );
              }
              for (const t of a)
                r.Relationships.createRelationship(
                  t.id,
                  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                  t.target,
                  Zt.EXTERNAL
                );
            });
          }
          findReferenceFiles(t) {
            const e = (0, c.xml2js)(t, { compact: !0 });
            return (
              Array.isArray(e.Relationships.Relationship)
                ? e.Relationships.Relationship
                : [e.Relationships.Relationship]
            )
              .map((t) => {
                if (void 0 === t._attributes)
                  throw Error("relationship element has no attributes");
                return {
                  id: this.parseRefId(t._attributes.Id),
                  type: ka[t._attributes.Type],
                  target: t._attributes.Target,
                };
              })
              .filter((t) => null !== t.type);
          }
          extractDocumentRefs(t) {
            const e = (0, c.xml2js)(t, { compact: !0 })["w:document"]["w:body"][
                "w:sectPr"
              ],
              r = e["w:headerReference"];
            let n;
            n = void 0 === r ? [] : Array.isArray(r) ? r : [r];
            const s = n.map((t) => {
                if (void 0 === t._attributes)
                  throw Error("header reference element has no attributes");
                return {
                  type: t._attributes["w:type"],
                  id: this.parseRefId(t._attributes["r:id"]),
                };
              }),
              i = e["w:footerReference"];
            let o;
            return (
              (o = void 0 === i ? [] : Array.isArray(i) ? i : [i]),
              {
                headers: s,
                footers: o.map((t) => {
                  if (void 0 === t._attributes)
                    throw Error("footer reference element has no attributes");
                  return {
                    type: t._attributes["w:type"],
                    id: this.parseRefId(t._attributes["r:id"]),
                  };
                }),
              }
            );
          }
          checkIfTitlePageIsDefined(t) {
            return (
              void 0 !==
              (0, c.xml2js)(t, { compact: !0 })["w:document"]["w:body"][
                "w:sectPr"
              ]["w:titlePg"]
            );
          }
          parseRefId(t) {
            const e = /^rId(\d+)$/.exec(t);
            if (null === e) throw new Error("Invalid ref id");
            return parseInt(e[1], 10);
          }
        }
      })(),
      n
    );
  })();
});
