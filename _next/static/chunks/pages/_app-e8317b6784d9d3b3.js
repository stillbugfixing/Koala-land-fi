(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6477);
        },
      ]);
    },
    4547: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo_with_name.png",
        height: 78,
        width: 332,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUAAAAAAACTfmgAAAAAAAAAAAAAAACUfmmDb1zH/wV2AAAACXRSTlNwVaJrN4d5ussGNXzJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZ2JhYGZmYGTgYGJhZWNjZQQAAe4AOlcCVl4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    3686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(8754),
        i = n(1757),
        o = n(5893),
        a = i._(n(7294)),
        l = r._(n(3935)),
        s = r._(n(6665)),
        u = n(1908),
        c = n(4706),
        d = n(5670);
      n(1558);
      let f = n(1973),
        m = r._(n(3293)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, n, r, i, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        let [t, n] = a.version.split(".", 2),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let v = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: l,
          width: s,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: m,
          loading: p,
          unoptimized: v,
          fill: b,
          onLoadRef: y,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: E,
          onLoad: S,
          onError: I,
          ...A
        } = e;
        return (0, o.jsx)("img", {
          ...A,
          ...g(f),
          loading: p,
          width: s,
          height: l,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (I && (e.src = e.src), e.complete && h(e, m, y, w, x));
            },
            [n, m, y, w, x, I, v, t]
          ),
          onLoad: (e) => {
            h(e.currentTarget, m, y, w, x);
          },
          onError: (e) => {
            E(!0), "empty" !== m && x(!0), I && I(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, o.jsx)(s.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let y = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(f.RouterContext),
          r = (0, a.useContext)(d.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = p || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: l, onLoadingComplete: s } = e,
          h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          h.current = l;
        }, [l]);
        let g = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [y, w] = (0, a.useState)(!1),
          [x, E] = (0, a.useState)(!1),
          { props: S, meta: I } = (0, u.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: i,
            blurComplete: y,
            showAltText: x,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...S,
              unoptimized: I.unoptimized,
              placeholder: I.placeholder,
              fill: I.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: E,
              ref: t,
            }),
            I.priority
              ? (0, o.jsx)(b, { isAppRouter: !n, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1908: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(1558);
      let r = n(7386),
        i = n(4706);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var n;
        let l,
          s,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: m = !1,
            loading: p,
            className: h,
            quality: g,
            width: v,
            height: b,
            fill: y = !1,
            style: w,
            onLoad: x,
            onLoadingComplete: E,
            placeholder: S = "empty",
            blurDataURL: I,
            fetchPriority: A,
            layout: P,
            objectFit: j,
            objectPosition: C,
            lazyBoundary: N,
            lazyRoot: R,
            ...k
          } = e,
          { imgConf: D, showAltText: O, blurComplete: M, defaultLoader: F } = t,
          T = D || i.imageConfigDefault;
        if ("allSizes" in T) l = T;
        else {
          let e = [...T.deviceSizes, ...T.imageSizes].sort((e, t) => e - t),
            t = T.deviceSizes.sort((e, t) => e - t);
          l = { ...T, allSizes: e, deviceSizes: t };
        }
        let L = k.loader || F;
        delete k.loader, delete k.srcSet;
        let _ = "__next_img_default" in L;
        if (_) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (P) {
          "fill" === P && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !d && (d = t);
        }
        let z = "",
          B = a(v),
          U = a(b);
        if ("object" == typeof (n = c) && (o(n) || void 0 !== n.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((s = e.blurWidth),
            (u = e.blurHeight),
            (I = I || e.blurDataURL),
            (z = e.src),
            !y)
          )
            if (B || U) {
              if (B && !U) {
                let t = B / e.width;
                U = Math.round(e.height * t);
              } else if (!B && U) {
                let t = U / e.height;
                B = Math.round(e.width * t);
              }
            } else (B = e.width), (U = e.height);
        }
        let H = !m && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : z) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (H = !1)),
          l.unoptimized && (f = !0),
          _ && c.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0),
          m && (A = "high");
        let G = a(g),
          W = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: C,
                }
              : {},
            O ? {} : { color: "transparent" },
            w
          ),
          V =
            M || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: B,
                  heightInt: U,
                  blurWidth: s,
                  blurHeight: u,
                  blurDataURL: I || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          q = V
            ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              c = s.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: s
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u
                )
                .join(", "),
              src: l({ config: t, src: n, quality: o, width: s[c] }),
            };
          })({
            config: l,
            src: c,
            unoptimized: f,
            width: B,
            quality: G,
            sizes: d,
            loader: L,
          });
        return {
          props: {
            ...k,
            loading: H ? "lazy" : p,
            fetchPriority: A,
            width: B,
            height: U,
            decoding: "async",
            className: h,
            style: { ...W, ...q },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: K.src,
          },
          meta: { unoptimized: f, priority: m, placeholder: S, fill: y },
        };
      }
    },
    7386: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          s = i ? 40 * i : n,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    9267: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getImageProps: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      let r = n(8754),
        i = n(1908),
        o = n(3686),
        a = r._(n(3293)),
        l = (e) => {
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        s = o.Image;
    },
    3293: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    6477: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Ye;
          },
        });
      var r,
        i,
        o,
        a,
        l,
        s,
        u,
        c,
        d,
        f,
        m,
        p,
        h,
        g,
        v,
        b,
        y,
        w = n(5893);
      n(7133);
      var x = n(7294),
        E = n.t(x, 2);
      function S(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let r = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, S), r);
      }
      function I(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      var A =
          (((r = A || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        P =
          (((i = P || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function j({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: i,
        visible: o = !0,
        name: a,
      }) {
        let l = N(t, e);
        if (o) return C(l, n, r, a);
        let s = null != i ? i : 0;
        if (2 & s) {
          let { static: e = !1, ...t } = l;
          if (e) return C(t, n, r, a);
        }
        if (1 & s) {
          let { unmount: e = !0, ...t } = l;
          return S(e ? 0 : 1, {
            0: () => null,
            1: () =>
              C({ ...t, hidden: !0, style: { display: "none" } }, n, r, a),
          });
        }
        return C(l, n, r, a);
      }
      function C(e, t = {}, n, r) {
        let {
            as: i = n,
            children: o,
            refName: a = "ref",
            ...l
          } = D(e, ["unmount", "static"]),
          s = void 0 !== e.ref ? { [a]: e.ref } : {},
          u = "function" == typeof o ? o(t) : o;
        "className" in l &&
          l.className &&
          "function" == typeof l.className &&
          (l.className = l.className(t));
        let c = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, i] of Object.entries(t))
            "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
          e && (c["data-headlessui-state"] = n.join(" "));
        }
        if (i === x.Fragment && Object.keys(k(l)).length > 0) {
          if (!(0, x.isValidElement)(u) || (Array.isArray(u) && u.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(l)
                  .map((e) => `  - ${e}`)
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map((e) => `  - ${e}`)
                  .join("\n"),
              ].join("\n")
            );
          let e = u.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    I(null == e ? void 0 : e.className(...t), l.className)
                : I(null == e ? void 0 : e.className, l.className);
          return (0, x.cloneElement)(
            u,
            Object.assign(
              {},
              N(u.props, k(D(l, ["ref"]))),
              c,
              s,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(u.ref, s.ref),
              t ? { className: t } : {}
            )
          );
        }
        return (0, x.createElement)(
          i,
          Object.assign(
            {},
            D(l, ["ref"]),
            i !== x.Fragment && s,
            i !== x.Fragment && c
          ),
          u
        );
      }
      function N(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let i of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                i(t, ...r);
              }
            },
          });
        return t;
      }
      function R(e) {
        var t;
        return Object.assign((0, x.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function k(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function D(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var O = Object.defineProperty,
        M = (e, t, n) => (
          ((e, t, n) => {
            t in e
              ? O(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
          })(e, "symbol" != typeof t ? t + "" : t, n),
          n
        );
      let F = new (class {
          constructor() {
            M(this, "current", this.detect()),
              M(this, "handoffState", "pending"),
              M(this, "currentId", 0);
          }
          set(e) {
            this.current !== e &&
              ((this.handoffState = "pending"),
              (this.currentId = 0),
              (this.current = e));
          }
          reset() {
            this.set(this.detect());
          }
          nextId() {
            return ++this.currentId;
          }
          get isServer() {
            return "server" === this.current;
          }
          get isClient() {
            return "client" === this.current;
          }
          detect() {
            return "undefined" == typeof window ||
              "undefined" == typeof document
              ? "server"
              : "client";
          }
          handoff() {
            "pending" === this.handoffState && (this.handoffState = "complete");
          }
          get isHandoffComplete() {
            return "complete" === this.handoffState;
          }
        })(),
        T = (e, t) => {
          F.isServer ? (0, x.useEffect)(e, t) : (0, x.useLayoutEffect)(e, t);
        };
      function L(e) {
        let t = (0, x.useRef)(e);
        return (
          T(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      let _ = function (e) {
          let t = L(e);
          return x.useCallback((...e) => t.current(...e), [t]);
        },
        z = Symbol();
      function B(...e) {
        let t = (0, x.useRef)(e);
        (0, x.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = _((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[z]))
          ? void 0
          : n;
      }
      let U =
        null != (b = x.useId)
          ? b
          : function () {
              let e = (function () {
                  let e,
                    t =
                      ((e = "undefined" == typeof document),
                      (0, E.useSyncExternalStore)(
                        () => () => {},
                        () => !1,
                        () => !e
                      )),
                    [n, r] = x.useState(F.isHandoffComplete);
                  return (
                    n && !1 === F.isHandoffComplete && r(!1),
                    x.useEffect(() => {
                      !0 !== n && r(!0);
                    }, [n]),
                    x.useEffect(() => F.handoff(), []),
                    !t && n
                  );
                })(),
                [t, n] = x.useState(e ? () => F.nextId() : null);
              return (
                T(() => {
                  null === t && n(F.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
      var H =
        (((o = H || {}).Space = " "),
        (o.Enter = "Enter"),
        (o.Escape = "Escape"),
        (o.Backspace = "Backspace"),
        (o.Delete = "Delete"),
        (o.ArrowLeft = "ArrowLeft"),
        (o.ArrowUp = "ArrowUp"),
        (o.ArrowRight = "ArrowRight"),
        (o.ArrowDown = "ArrowDown"),
        (o.Home = "Home"),
        (o.End = "End"),
        (o.PageUp = "PageUp"),
        (o.PageDown = "PageDown"),
        (o.Tab = "Tab"),
        o);
      function G(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      let W = (0, x.createContext)(null);
      W.displayName = "OpenClosedContext";
      var V =
        (((a = V || {})[(a.Open = 1)] = "Open"),
        (a[(a.Closed = 2)] = "Closed"),
        (a[(a.Closing = 4)] = "Closing"),
        (a[(a.Opening = 8)] = "Opening"),
        a);
      function q() {
        return (0, x.useContext)(W);
      }
      function K({ value: e, children: t }) {
        return x.createElement(W.Provider, { value: e }, t);
      }
      function $(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        return "string" == typeof n && "button" === n.toLowerCase()
          ? "button"
          : void 0;
      }
      function Q(e, t) {
        let [n, r] = (0, x.useState)(() => $(e));
        return (
          T(() => {
            r($(e));
          }, [e.type, e.as]),
          T(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                r("button"));
          }, [n, t]),
          n
        );
      }
      function Z(e) {
        return F.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      let X =
        null != (y = x.startTransition)
          ? y
          : function (e) {
              e();
            };
      var Y =
          (((l = Y || {})[(l.Open = 0)] = "Open"),
          (l[(l.Closed = 1)] = "Closed"),
          l),
        J =
          (((s = J || {})[(s.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (s[(s.CloseDisclosure = 1)] = "CloseDisclosure"),
          (s[(s.SetButtonId = 2)] = "SetButtonId"),
          (s[(s.SetPanelId = 3)] = "SetPanelId"),
          (s[(s.LinkPanel = 4)] = "LinkPanel"),
          (s[(s.UnlinkPanel = 5)] = "UnlinkPanel"),
          s);
      let ee = {
          0: (e) => ({
            ...e,
            disclosureState: S(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
          5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        te = (0, x.createContext)(null);
      function ne(e) {
        let t = (0, x.useContext)(te);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ne), t);
        }
        return t;
      }
      te.displayName = "DisclosureContext";
      let re = (0, x.createContext)(null);
      re.displayName = "DisclosureAPIContext";
      let ie = (0, x.createContext)(null);
      function oe(e, t) {
        return S(t.type, ee, e, t);
      }
      ie.displayName = "DisclosurePanelContext";
      let ae = x.Fragment,
        le = A.RenderStrategy | A.Static,
        se = Object.assign(
          R(function (e, t) {
            let { defaultOpen: n = !1, ...r } = e,
              i = (0, x.useRef)(null),
              o = B(
                t,
                (function (e, t = !0) {
                  return Object.assign(e, { [z]: t });
                })((e) => {
                  i.current = e;
                }, void 0 === e.as || e.as === x.Fragment)
              ),
              a = (0, x.useRef)(null),
              l = (0, x.useRef)(null),
              s = (0, x.useReducer)(oe, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: l,
                panelRef: a,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: u, buttonId: c }, d] = s,
              f = _((e) => {
                d({ type: 1 });
                let t = Z(i);
                if (!t || !c) return;
                let n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(c)
                  : t.getElementById(c);
                null == n || n.focus();
              }),
              m = (0, x.useMemo)(() => ({ close: f }), [f]),
              p = (0, x.useMemo)(() => ({ open: 0 === u, close: f }), [u, f]);
            return x.createElement(
              te.Provider,
              { value: s },
              x.createElement(
                re.Provider,
                { value: m },
                x.createElement(
                  K,
                  { value: S(u, { 0: V.Open, 1: V.Closed }) },
                  j({
                    ourProps: { ref: o },
                    theirProps: r,
                    slot: p,
                    defaultTag: ae,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: R(function (e, t) {
              let n = U(),
                { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
                [o, a] = ne("Disclosure.Button"),
                l = (0, x.useContext)(ie),
                s = null !== l && l === o.panelId,
                u = (0, x.useRef)(null),
                c = B(u, t, s ? null : o.buttonRef);
              (0, x.useEffect)(() => {
                if (!s)
                  return (
                    a({ type: 2, buttonId: r }),
                    () => {
                      a({ type: 2, buttonId: null });
                    }
                  );
              }, [r, a, s]);
              let d = _((e) => {
                  var t;
                  if (s) {
                    if (1 === o.disclosureState) return;
                    switch (e.key) {
                      case H.Space:
                      case H.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          a({ type: 0 }),
                          null == (t = o.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case H.Space:
                      case H.Enter:
                        e.preventDefault(), e.stopPropagation(), a({ type: 0 });
                    }
                }),
                f = _((e) => {
                  e.key === H.Space && e.preventDefault();
                }),
                m = _((t) => {
                  var n;
                  G(t.currentTarget) ||
                    e.disabled ||
                    (s
                      ? (a({ type: 0 }),
                        null == (n = o.buttonRef.current) || n.focus())
                      : a({ type: 0 }));
                }),
                p = (0, x.useMemo)(
                  () => ({ open: 0 === o.disclosureState }),
                  [o]
                ),
                h = Q(e, u);
              return j({
                ourProps: s
                  ? { ref: c, type: h, onKeyDown: d, onClick: m }
                  : {
                      ref: c,
                      id: r,
                      type: h,
                      "aria-expanded": 0 === o.disclosureState,
                      "aria-controls": o.linkedPanel ? o.panelId : void 0,
                      onKeyDown: d,
                      onKeyUp: f,
                      onClick: m,
                    },
                theirProps: i,
                slot: p,
                defaultTag: "button",
                name: "Disclosure.Button",
              });
            }),
            Panel: R(function (e, t) {
              let n = U(),
                { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
                [o, a] = ne("Disclosure.Panel"),
                { close: l } = (function e(t) {
                  let n = (0, x.useContext)(re);
                  if (null === n) {
                    let n = Error(
                      `<${t} /> is missing a parent <Disclosure /> component.`
                    );
                    throw (
                      (Error.captureStackTrace && Error.captureStackTrace(n, e),
                      n)
                    );
                  }
                  return n;
                })("Disclosure.Panel"),
                s = B(t, o.panelRef, (e) => {
                  X(() => a({ type: e ? 4 : 5 }));
                });
              (0, x.useEffect)(
                () => (
                  a({ type: 3, panelId: r }),
                  () => {
                    a({ type: 3, panelId: null });
                  }
                ),
                [r, a]
              );
              let u = q(),
                c =
                  null !== u
                    ? (u & V.Open) === V.Open
                    : 0 === o.disclosureState,
                d = (0, x.useMemo)(
                  () => ({ open: 0 === o.disclosureState, close: l }),
                  [o, l]
                );
              return x.createElement(
                ie.Provider,
                { value: o.panelId },
                j({
                  ourProps: { ref: s, id: r },
                  theirProps: i,
                  slot: d,
                  defaultTag: "div",
                  features: le,
                  visible: c,
                  name: "Disclosure.Panel",
                })
              );
            }),
          }
        );
      function ue() {
        let e = [],
          t = {
            addEventListener: (e, n, r, i) => (
              e.addEventListener(n, r, i),
              t.add(() => e.removeEventListener(n, r, i))
            ),
            requestAnimationFrame(...e) {
              let n = requestAnimationFrame(...e);
              return t.add(() => cancelAnimationFrame(n));
            },
            nextFrame: (...e) =>
              t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let n = setTimeout(...e);
              return t.add(() => clearTimeout(n));
            },
            microTask(...e) {
              var n;
              let r = { current: !0 };
              return (
                (n = () => {
                  r.current && e[0]();
                }),
                "function" == typeof queueMicrotask
                  ? queueMicrotask(n)
                  : Promise.resolve()
                      .then(n)
                      .catch((e) =>
                        setTimeout(() => {
                          throw e;
                        })
                      ),
                t.add(() => {
                  r.current = !1;
                })
              );
            },
            style(e, t, n) {
              let r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: r });
                })
              );
            },
            group(e) {
              let t = ue();
              return e(t), this.add(() => t.dispose());
            },
            add: (t) => (
              e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) for (let t of e.splice(n, 1)) t();
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
          };
        return t;
      }
      function ce() {
        let [e] = (0, x.useState)(ue);
        return (0, x.useEffect)(() => () => e.dispose(), [e]), e;
      }
      var de =
        (((u = de || {})[(u.First = 0)] = "First"),
        (u[(u.Previous = 1)] = "Previous"),
        (u[(u.Next = 2)] = "Next"),
        (u[(u.Last = 3)] = "Last"),
        (u[(u.Specific = 4)] = "Specific"),
        (u[(u.Nothing = 5)] = "Nothing"),
        u);
      let fe = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var me =
          (((c = me || {})[(c.First = 1)] = "First"),
          (c[(c.Previous = 2)] = "Previous"),
          (c[(c.Next = 4)] = "Next"),
          (c[(c.Last = 8)] = "Last"),
          (c[(c.WrapAround = 16)] = "WrapAround"),
          (c[(c.NoScroll = 32)] = "NoScroll"),
          c),
        pe =
          (((d = pe || {})[(d.Error = 0)] = "Error"),
          (d[(d.Overflow = 1)] = "Overflow"),
          (d[(d.Success = 2)] = "Success"),
          (d[(d.Underflow = 3)] = "Underflow"),
          d),
        he =
          (((f = he || {})[(f.Previous = -1)] = "Previous"),
          (f[(f.Next = 1)] = "Next"),
          f);
      function ge(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(fe)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var ve =
        (((m = ve || {})[(m.Strict = 0)] = "Strict"),
        (m[(m.Loose = 1)] = "Loose"),
        m);
      function be(e, t = 0) {
        var n;
        return (
          e !== (null == (n = Z(e)) ? void 0 : n.body) &&
          S(t, {
            0: () => e.matches(fe),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(fe)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function ye(e) {
        let t = Z(e);
        ue().nextFrame(() => {
          t &&
            !be(t.activeElement, 0) &&
            (null == e || e.focus({ preventScroll: !0 }));
        });
      }
      var we =
        (((p = we || {})[(p.Keyboard = 0)] = "Keyboard"),
        (p[(p.Mouse = 1)] = "Mouse"),
        p);
      function xe(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            i = t(n);
          if (null === r || null === i) return 0;
          let o = r.compareDocumentPosition(i);
          return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function Ee(e, t, n) {
        let r = L(t);
        (0, x.useEffect)(() => {
          function t(e) {
            r.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      function Se(e) {
        return [e.screenX, e.screenY];
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      let Ie =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function Ae(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          i = e.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return r;
        let o = !1;
        for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (o = !0);
        let a = o ? (null != (n = i.innerText) ? n : "") : r;
        return Ie.test(a) && (a = a.replace(Ie, "")), a;
      }
      var Pe =
          (((h = Pe || {})[(h.Open = 0)] = "Open"),
          (h[(h.Closed = 1)] = "Closed"),
          h),
        je =
          (((g = je || {})[(g.Pointer = 0)] = "Pointer"),
          (g[(g.Other = 1)] = "Other"),
          g),
        Ce =
          (((v = Ce || {})[(v.OpenMenu = 0)] = "OpenMenu"),
          (v[(v.CloseMenu = 1)] = "CloseMenu"),
          (v[(v.GoToItem = 2)] = "GoToItem"),
          (v[(v.Search = 3)] = "Search"),
          (v[(v.ClearSearch = 4)] = "ClearSearch"),
          (v[(v.RegisterItem = 5)] = "RegisterItem"),
          (v[(v.UnregisterItem = 6)] = "UnregisterItem"),
          v);
      function Ne(e, t = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = xe(t(e.items.slice()), (e) => e.dataRef.current.domRef.current),
          i = n ? r.indexOf(n) : null;
        return -1 === i && (i = null), { items: r, activeItemIndex: i };
      }
      let Re = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, t) => {
            var n;
            let r = Ne(e),
              i = (function (e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                  i = null != r ? r : -1,
                  o = (() => {
                    switch (e.focus) {
                      case 0:
                        return n.findIndex((e) => !t.resolveDisabled(e));
                      case 1: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, n, r) =>
                              !(
                                (-1 !== i && r.length - n - 1 >= i) ||
                                t.resolveDisabled(e)
                              )
                          );
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 2:
                        return n.findIndex(
                          (e, n) => !(n <= i || t.resolveDisabled(e))
                        );
                      case 3: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex((e) => !t.resolveDisabled(e));
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 4:
                        return n.findIndex((n) => t.resolveId(n) === e.id);
                      case 5:
                        return null;
                      default:
                        !(function (e) {
                          throw Error("Unexpected object: " + e);
                        })(e);
                    }
                  })();
                return -1 === o ? r : o;
              })(t, {
                resolveItems: () => r.items,
                resolveActiveIndex: () => r.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeItemIndex: i,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              i = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find((e) => {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r)) && !e.dataRef.current.disabled
                );
              }),
              o = i ? e.items.indexOf(i) : -1;
            return -1 === o || o === e.activeItemIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeItemIndex: o,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, t) => {
            let n = Ne(e, (e) => [...e, { id: t.id, dataRef: t.dataRef }]);
            return { ...e, ...n };
          },
          6: (e, t) => {
            let n = Ne(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
        },
        ke = (0, x.createContext)(null);
      function De(e) {
        let t = (0, x.useContext)(ke);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, De), t);
        }
        return t;
      }
      function Oe(e, t) {
        return S(t.type, Re, e, t);
      }
      ke.displayName = "MenuContext";
      let Me = x.Fragment,
        Fe = A.RenderStrategy | A.Static,
        Te = x.Fragment,
        Le = Object.assign(
          R(function (e, t) {
            let { __demoMode: n = !1, ...r } = e,
              i = (0, x.useReducer)(Oe, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0, x.createRef)(),
                itemsRef: (0, x.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: o, itemsRef: a, buttonRef: l }, s] = i,
              u = B(t);
            !(function (e, t, n = !0) {
              var r;
              let i,
                o = (0, x.useRef)(!1);
              function a(n, r) {
                if (!o.current || n.defaultPrevented) return;
                let i = r(n);
                if (
                  null !== i &&
                  i.getRootNode().contains(i) &&
                  i.isConnected
                ) {
                  for (let t of (function e(t) {
                    return "function" == typeof t
                      ? e(t())
                      : Array.isArray(t) || t instanceof Set
                      ? t
                      : [t];
                  })(e)) {
                    if (null === t) continue;
                    let e = t instanceof HTMLElement ? t : t.current;
                    if (
                      (null != e && e.contains(i)) ||
                      (n.composed && n.composedPath().includes(e))
                    )
                      return;
                  }
                  return (
                    be(i, ve.Loose) || -1 === i.tabIndex || n.preventDefault(),
                    t(n, i)
                  );
                }
              }
              (0, x.useEffect)(() => {
                requestAnimationFrame(() => {
                  o.current = n;
                });
              }, [n]);
              let l = (0, x.useRef)(null);
              Ee(
                "pointerdown",
                (e) => {
                  var t, n;
                  o.current &&
                    (l.current =
                      (null ==
                      (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                        ? void 0
                        : n[0]) || e.target);
                },
                !0
              ),
                Ee(
                  "mousedown",
                  (e) => {
                    var t, n;
                    o.current &&
                      (l.current =
                        (null ==
                        (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                          ? void 0
                          : n[0]) || e.target);
                  },
                  !0
                ),
                Ee(
                  "click",
                  (e) => {
                    l.current && (a(e, () => l.current), (l.current = null));
                  },
                  !0
                ),
                Ee(
                  "touchend",
                  (e) =>
                    a(e, () =>
                      e.target instanceof HTMLElement ? e.target : null
                    ),
                  !0
                ),
                (r = "blur"),
                (i = L((e) =>
                  a(e, () =>
                    window.document.activeElement instanceof HTMLIFrameElement
                      ? window.document.activeElement
                      : null
                  )
                )),
                (0, x.useEffect)(() => {
                  function e(e) {
                    i.current(e);
                  }
                  return (
                    window.addEventListener(r, e, !0),
                    () => window.removeEventListener(r, e, !0)
                  );
                }, [r, !0]);
            })(
              [l, a],
              (e, t) => {
                var n;
                s({ type: 1 }),
                  be(t, ve.Loose) ||
                    (e.preventDefault(), null == (n = l.current) || n.focus());
              },
              0 === o
            );
            let c = _(() => {
                s({ type: 1 });
              }),
              d = (0, x.useMemo)(() => ({ open: 0 === o, close: c }), [o, c]);
            return x.createElement(
              ke.Provider,
              { value: i },
              x.createElement(
                K,
                { value: S(o, { 0: V.Open, 1: V.Closed }) },
                j({
                  ourProps: { ref: u },
                  theirProps: r,
                  slot: d,
                  defaultTag: Me,
                  name: "Menu",
                })
              )
            );
          }),
          {
            Button: R(function (e, t) {
              var n;
              let r = U(),
                { id: i = `headlessui-menu-button-${r}`, ...o } = e,
                [a, l] = De("Menu.Button"),
                s = B(a.buttonRef, t),
                u = ce(),
                c = _((e) => {
                  switch (e.key) {
                    case H.Space:
                    case H.Enter:
                    case H.ArrowDown:
                      e.preventDefault(),
                        e.stopPropagation(),
                        l({ type: 0 }),
                        u.nextFrame(() => l({ type: 2, focus: de.First }));
                      break;
                    case H.ArrowUp:
                      e.preventDefault(),
                        e.stopPropagation(),
                        l({ type: 0 }),
                        u.nextFrame(() => l({ type: 2, focus: de.Last }));
                  }
                }),
                d = _((e) => {
                  e.key === H.Space && e.preventDefault();
                }),
                f = _((t) => {
                  if (G(t.currentTarget)) return t.preventDefault();
                  e.disabled ||
                    (0 === a.menuState
                      ? (l({ type: 1 }),
                        u.nextFrame(() => {
                          var e;
                          return null == (e = a.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (t.preventDefault(), l({ type: 0 })));
                }),
                m = (0, x.useMemo)(() => ({ open: 0 === a.menuState }), [a]);
              return j({
                ourProps: {
                  ref: s,
                  id: i,
                  type: Q(e, a.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (n = a.itemsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === a.menuState,
                  onKeyDown: c,
                  onKeyUp: d,
                  onClick: f,
                },
                theirProps: o,
                slot: m,
                defaultTag: "button",
                name: "Menu.Button",
              });
            }),
            Items: R(function (e, t) {
              var n, r;
              let i = U(),
                { id: o = `headlessui-menu-items-${i}`, ...a } = e,
                [l, s] = De("Menu.Items"),
                u = B(l.itemsRef, t),
                c = (function (...e) {
                  return (0, x.useMemo)(() => Z(...e), [...e]);
                })(l.itemsRef),
                d = ce(),
                f = q(),
                m = null !== f ? (f & V.Open) === V.Open : 0 === l.menuState;
              (0, x.useEffect)(() => {
                let e = l.itemsRef.current;
                e &&
                  0 === l.menuState &&
                  e !== (null == c ? void 0 : c.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [l.menuState, l.itemsRef, c]),
                (function ({
                  container: e,
                  accept: t,
                  walk: n,
                  enabled: r = !0,
                }) {
                  let i = (0, x.useRef)(t),
                    o = (0, x.useRef)(n);
                  (0, x.useEffect)(() => {
                    (i.current = t), (o.current = n);
                  }, [t, n]),
                    T(() => {
                      if (!e || !r) return;
                      let t = Z(e);
                      if (!t) return;
                      let n = i.current,
                        a = o.current,
                        l = Object.assign((e) => n(e), { acceptNode: n }),
                        s = t.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          l,
                          !1
                        );
                      for (; s.nextNode(); ) a(s.currentNode);
                    }, [e, r, i, o]);
                })({
                  container: l.itemsRef.current,
                  enabled: 0 === l.menuState,
                  accept: (e) =>
                    "menuitem" === e.getAttribute("role")
                      ? NodeFilter.FILTER_REJECT
                      : e.hasAttribute("role")
                      ? NodeFilter.FILTER_SKIP
                      : NodeFilter.FILTER_ACCEPT,
                  walk(e) {
                    e.setAttribute("role", "none");
                  },
                });
              let p = _((e) => {
                  var t, n;
                  switch ((d.dispose(), e.key)) {
                    case H.Space:
                      if ("" !== l.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          s({ type: 3, value: e.key })
                        );
                    case H.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 1 }),
                        null !== l.activeItemIndex)
                      ) {
                        let { dataRef: e } = l.items[l.activeItemIndex];
                        null ==
                          (n =
                            null == (t = e.current)
                              ? void 0
                              : t.domRef.current) || n.click();
                      }
                      ye(l.buttonRef.current);
                      break;
                    case H.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 2, focus: de.Next })
                      );
                    case H.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 2, focus: de.Previous })
                      );
                    case H.Home:
                    case H.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 2, focus: de.First })
                      );
                    case H.End:
                    case H.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 2, focus: de.Last })
                      );
                    case H.Escape:
                      e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 1 }),
                        ue().nextFrame(() => {
                          var e;
                          return null == (e = l.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        });
                      break;
                    case H.Tab:
                      e.preventDefault(),
                        e.stopPropagation(),
                        s({ type: 1 }),
                        ue().nextFrame(() => {
                          var t, n;
                          (t = l.buttonRef.current),
                            (n = e.shiftKey ? me.Previous : me.Next),
                            (function (
                              e,
                              t,
                              {
                                sorted: n = !0,
                                relativeTo: r = null,
                                skipElements: i = [],
                              } = {}
                            ) {
                              var o, a, l;
                              let s = Array.isArray(e)
                                  ? e.length > 0
                                    ? e[0].ownerDocument
                                    : document
                                  : e.ownerDocument,
                                u = Array.isArray(e) ? (n ? xe(e) : e) : ge(e);
                              i.length > 0 &&
                                u.length > 1 &&
                                (u = u.filter((e) => !i.includes(e))),
                                (r = null != r ? r : s.activeElement);
                              let c,
                                d = (() => {
                                  if (5 & t) return 1;
                                  if (10 & t) return -1;
                                  throw Error(
                                    "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
                                  );
                                })(),
                                f = (() => {
                                  if (1 & t) return 0;
                                  if (2 & t)
                                    return Math.max(0, u.indexOf(r)) - 1;
                                  if (4 & t)
                                    return Math.max(0, u.indexOf(r)) + 1;
                                  if (8 & t) return u.length - 1;
                                  throw Error(
                                    "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
                                  );
                                })(),
                                m = 32 & t ? { preventScroll: !0 } : {},
                                p = 0,
                                h = u.length;
                              do {
                                if (p >= h || p + h <= 0) return 0;
                                let e = f + p;
                                if (16 & t) e = (e + h) % h;
                                else {
                                  if (e < 0) return 3;
                                  if (e >= h) return 1;
                                }
                                null == (c = u[e]) || c.focus(m), (p += d);
                              } while (c !== s.activeElement);
                              6 & t &&
                                null !=
                                  (l =
                                    null ==
                                    (a = null == (o = c) ? void 0 : o.matches)
                                      ? void 0
                                      : a.call(o, "textarea,input")) &&
                                l &&
                                c.select();
                            })(ge(), n, { relativeTo: t });
                        });
                      break;
                    default:
                      1 === e.key.length &&
                        (s({ type: 3, value: e.key }),
                        d.setTimeout(() => s({ type: 4 }), 350));
                  }
                }),
                h = _((e) => {
                  e.key === H.Space && e.preventDefault();
                }),
                g = (0, x.useMemo)(() => ({ open: 0 === l.menuState }), [l]);
              return j({
                ourProps: {
                  "aria-activedescendant":
                    null === l.activeItemIndex ||
                    null == (n = l.items[l.activeItemIndex])
                      ? void 0
                      : n.id,
                  "aria-labelledby":
                    null == (r = l.buttonRef.current) ? void 0 : r.id,
                  id: o,
                  onKeyDown: p,
                  onKeyUp: h,
                  role: "menu",
                  tabIndex: 0,
                  ref: u,
                },
                theirProps: a,
                slot: g,
                defaultTag: "div",
                features: Fe,
                visible: m,
                name: "Menu.Items",
              });
            }),
            Item: R(function (e, t) {
              let n,
                r,
                i,
                o = U(),
                {
                  id: a = `headlessui-menu-item-${o}`,
                  disabled: l = !1,
                  ...s
                } = e,
                [u, c] = De("Menu.Item"),
                d =
                  null !== u.activeItemIndex &&
                  u.items[u.activeItemIndex].id === a,
                f = (0, x.useRef)(null),
                m = B(t, f);
              T(() => {
                if (
                  u.__demoMode ||
                  0 !== u.menuState ||
                  !d ||
                  0 === u.activationTrigger
                )
                  return;
                let e = ue();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = f.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [u.__demoMode, f, d, u.menuState, u.activationTrigger, u.activeItemIndex]);
              let p =
                  ((n = (0, x.useRef)("")),
                  (r = (0, x.useRef)("")),
                  _(() => {
                    let e = f.current;
                    if (!e) return "";
                    let t = e.innerText;
                    if (n.current === t) return r.current;
                    let i = (function (e) {
                      let t = e.getAttribute("aria-label");
                      if ("string" == typeof t) return t.trim();
                      let n = e.getAttribute("aria-labelledby");
                      if (n) {
                        let e = n
                          .split(" ")
                          .map((e) => {
                            let t = document.getElementById(e);
                            if (t) {
                              let e = t.getAttribute("aria-label");
                              return "string" == typeof e
                                ? e.trim()
                                : Ae(t).trim();
                            }
                            return null;
                          })
                          .filter(Boolean);
                        if (e.length > 0) return e.join(", ");
                      }
                      return Ae(e).trim();
                    })(e)
                      .trim()
                      .toLowerCase();
                    return (n.current = t), (r.current = i), i;
                  })),
                h = (0, x.useRef)({
                  disabled: l,
                  domRef: f,
                  get textValue() {
                    return p();
                  },
                });
              T(() => {
                h.current.disabled = l;
              }, [h, l]),
                T(
                  () => (
                    c({ type: 5, id: a, dataRef: h }),
                    () => c({ type: 6, id: a })
                  ),
                  [h, a]
                );
              let g = _(() => {
                  c({ type: 1 });
                }),
                v = _((e) => {
                  if (l) return e.preventDefault();
                  c({ type: 1 }), ye(u.buttonRef.current);
                }),
                b = _(() => {
                  if (l) return c({ type: 2, focus: de.Nothing });
                  c({ type: 2, focus: de.Specific, id: a });
                }),
                y =
                  ((i = (0, x.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let t = Se(e);
                      return (
                        (i.current[0] !== t[0] || i.current[1] !== t[1]) &&
                        ((i.current = t), !0)
                      );
                    },
                    update(e) {
                      i.current = Se(e);
                    },
                  }),
                w = _((e) => y.update(e)),
                E = _((e) => {
                  y.wasMoved(e) &&
                    (l ||
                      d ||
                      c({ type: 2, focus: de.Specific, id: a, trigger: 0 }));
                }),
                S = _((e) => {
                  y.wasMoved(e) &&
                    (l || (d && c({ type: 2, focus: de.Nothing })));
                }),
                I = (0, x.useMemo)(
                  () => ({ active: d, disabled: l, close: g }),
                  [d, l, g]
                );
              return j({
                ourProps: {
                  id: a,
                  ref: m,
                  role: "menuitem",
                  tabIndex: !0 === l ? void 0 : -1,
                  "aria-disabled": !0 === l || void 0,
                  disabled: void 0,
                  onClick: v,
                  onFocus: b,
                  onPointerEnter: w,
                  onMouseEnter: w,
                  onPointerMove: E,
                  onMouseMove: E,
                  onPointerLeave: S,
                  onMouseLeave: S,
                },
                theirProps: s,
                slot: I,
                defaultTag: Te,
                name: "Menu.Item",
              });
            }),
          }
        );
      var _e = function (e) {
          return x.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
              },
              e
            ),
            x.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 15l7-7 7 7",
            })
          );
        },
        ze = function (e) {
          return x.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
              },
              e
            ),
            x.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M4 6h16M4 12h16M4 18h16",
            })
          );
        },
        Be = n(3350),
        Ue = n(5675),
        He = n.n(Ue),
        Ge = n(3035),
        We = n(4547),
        Ve = {
          src: "/_next/static/media/enter_app_nav.7d4dad5e.svg",
          height: 32,
          width: 120,
          blurWidth: 0,
          blurHeight: 0,
        };
      function qe() {
        let [e, t] = (0, x.useState)(!1),
          { pathname: n } = (0, Ge.useRouter)(),
          r = [
            {
              name: "Features",
              href: "#welcome",
              key: "welcome",
              current: "/todo_remove" === n,
            },
            {
              name: "Resources",
              href: "#community",
              key: "resources",
              current: "/todo_remove" === n,
            },
            {
              name: "Community",
              href: "#community",
              key: "gitbook",
              current: "/todo_remove" === n,
            },
          ];
        return (0, w.jsx)("header", {
          className: " px-8 pt-3 bg-wombatEggshell mx-auto sticky top-0 z-50",
          children: (0, w.jsx)(se, {
            as: "nav",
            className: "max-w-6xl mx-auto w-full",
            children: (n) => {
              let { open: i } = n;
              return (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsx)("div", {
                    children: (0, w.jsxs)("div", {
                      className: "flex justify-between h-16",
                      children: [
                        (0, w.jsx)("div", {
                          className: "flex-none pt-2 lg:pt-0 w-28 lg:w-44",
                          children: (0, w.jsx)("a", {
                            href: "#",
                            children: (0, w.jsx)("img", {
                              src: We.Z.src,
                              width: We.Z.width,
                              height: We.Z.height,
                              alt: "wombat",
                              style: { marginTop: 5 },
                            }),
                          }),
                        }),
                        (0, w.jsx)("div", {
                          className: "hidden md:block inset-x-0 inset-0",
                          children: (0, w.jsxs)("div", {
                            className: "ml-8 flex space-x-3 lg:space-x-7",
                            children: [
                              r.map((n) =>
                                (0, w.jsx)(w.Fragment, {
                                  children: (0, w.jsx)(
                                    "a",
                                    {
                                      href: n.href,
                                      target:
                                        "Whitepaper" == n.name ? "_blank" : "",
                                      rel: "noreferrer",
                                      className: (0, Be.Z)(
                                        "text-gray-700 hover:text-wombatPurple",
                                        "pt-4 rounded-md text-sm font-medium"
                                      ),
                                      "aria-current": n.current
                                        ? "page"
                                        : void 0,
                                      onClick: () => {
                                        "Open App" == n.name && t(!e);
                                      },
                                      children:
                                        "Open App" == n.name
                                          ? e
                                            ? "Coming Soon... :)"
                                            : "Open App"
                                          : n.name,
                                    },
                                    n.name
                                  ),
                                })
                              ),
                              (0, w.jsx)(Le, {
                                as: "div",
                                children: (0, w.jsx)("div", {
                                  className: "flex items-start",
                                  children: (0, w.jsx)(
                                    "a",
                                    {
                                      href: "https://app.wombat.exchange/",
                                      className: "pt-3 w-90",
                                      children: (0, w.jsx)(He(), {
                                        src: Ve,
                                        alt: "enter",
                                      }),
                                    },
                                    "wombat"
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, w.jsxs)("div", {
                          className: "flex md:hidden",
                          children: [
                            (0, w.jsx)("a", {
                              href: "https://app.wombat.exchange/",
                              className: "block md:hidden pt-1 mr-2 w-40",
                              children: (0, w.jsx)(He(), {
                                src: Ve,
                                height: 40,
                                width: 166,
                                alt: "enter",
                              }),
                            }),
                            (0, w.jsxs)(se.Button, {
                              className: "inline-flex pt-4 h-6 text-black",
                              children: [
                                (0, w.jsx)("span", {
                                  className: "sr-only",
                                  children: "Open main menu",
                                }),
                                i
                                  ? (0, w.jsx)(_e, {
                                      className: "block h-6 w-6",
                                      "aria-hidden": "true",
                                    })
                                  : (0, w.jsx)(ze, {
                                      className: "block h-6 w-6",
                                      "aria-hidden": "true",
                                    }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(se.Panel, {
                    className: "md:hidden",
                    children: (0, w.jsx)("div", {
                      className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                      children: [...r].map((e) =>
                        (0, w.jsxs)(w.Fragment, {
                          children: [
                            (0, w.jsx)(
                              se.Button,
                              {
                                as: "a",
                                href: e.href,
                                className: (0, Be.Z)(
                                  "Open App" == e.name
                                    ? "bg-yellow-300 text-black text-center"
                                    : "text-gray-700 hover:bg-gray-700 hover:text-white",
                                  "block px-3 py-2 rounded-md text-base text-center"
                                ),
                                "aria-current": e.current ? "page" : void 0,
                                children:
                                  "Open App" == e.name
                                    ? "App Coming Soon..."
                                    : e.name,
                              },
                              e.name
                            ),
                            (0, w.jsx)("hr", {
                              className:
                                "border-wombatpurple border border-dashed",
                            }),
                          ],
                        })
                      ),
                    }),
                  }),
                ],
              });
            },
          }),
        });
      }
      var Ke = n(9008),
        $e = n.n(Ke),
        Qe = n(4298),
        Ze = n.n(Qe);
      function Xe(e) {
        let { children: t } = e;
        return (0, w.jsxs)("div", {
          className: "",
          children: [
            (0, w.jsxs)($e(), {
              children: [
                (0, w.jsx)("title", {
                  children:
                    "Koala Exchange: Hyper Efficient multichain Stableswap #BNB and beyond",
                }),
                (0, w.jsx)("meta", {
                  name: "description",
                  content:
                    "Koala is a multichain and crosschain DEX backed by Binance Labs, Animoca, Shima, and Jump Crypto. Its innovative single-sided pool design allows users to minimize slippage and maximize yield, that means more savings and earnings!",
                }),
                (0, w.jsx)(
                  "link",
                  { rel: "canonical", href: "https://www.wombat.exchange" },
                  "wombat_exchange"
                ),
              ],
            }),
            (0, w.jsx)(Ze(), {
              src: "https://www.googletagmanager.com/gtag/js?id=G-NBD2MBCVBL",
              strategy: "afterInteractive",
            }),
            (0, w.jsx)(Ze(), {
              id: "google-analytics",
              strategy: "afterInteractive",
              children:
                "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-NBD2MBCVBL');\n        ",
            }),
            (0, w.jsx)(qe, {}),
            (0, w.jsx)("main", { children: t }),
          ],
        });
      }
      var Ye = function (e) {
        let { Component: t, pageProps: n } = e;
        return (0, w.jsx)(Xe, { children: (0, w.jsx)(t, { ...n }) });
      };
    },
    3350: function (e, t, n) {
      "use strict";
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7133: function () {},
    9008: function (e, t, n) {
      e.exports = n(6665);
    },
    5675: function (e, t, n) {
      e.exports = n(9267);
    },
    4298: function (e, t, n) {
      e.exports = n(5874);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(3035);
    }),
      (_N_E = e.O());
  },
]);
