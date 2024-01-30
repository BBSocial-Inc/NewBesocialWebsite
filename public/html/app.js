/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var P_ = Object.create;
  var zr = Object.defineProperty;
  var q_ = Object.getOwnPropertyDescriptor;
  var M_ = Object.getOwnPropertyNames;
  var D_ = Object.getPrototypeOf,
    F_ = Object.prototype.hasOwnProperty;
  var ne = (e, t) => () => (e && (t = e((e = 0))), t);
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Oe = (e, t) => {
      for (var r in t) zr(e, r, { get: t[r], enumerable: !0 });
    },
    bs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of M_(t))
          !F_.call(e, i) &&
            i !== r &&
            zr(e, i, {
              get: () => t[i],
              enumerable: !(n = q_(t, i)) || n.enumerable,
            });
      return e;
    };
  var $ = (e, t, r) => (
      (r = e != null ? P_(D_(e)) : {}),
      bs(
        t || !e || !e.__esModule
          ? zr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    We = (e) => bs(zr({}, "__esModule", { value: !0 }), e);
  var Ti = u(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, v) {
        var _ = new de.Bare();
        return _.init(l, v);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function n(l) {
        var v = parseInt(l.slice(1), 16),
          _ = (v >> 16) & 255,
          I = (v >> 8) & 255,
          L = 255 & v;
        return [_, I, L];
      }
      function i(l, v, _) {
        return (
          "#" + ((1 << 24) | (l << 16) | (v << 8) | _).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, v) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
      }
      function s(l, v, _) {
        f("Units do not match [" + l + "]: " + v + ", " + _);
      }
      function c(l, v, _) {
        if ((v !== void 0 && (_ = v), l === void 0)) return _;
        var I = _;
        return (
          R_.test(l) || !Is.test(l)
            ? (I = parseInt(l, 10))
            : Is.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : _
        );
      }
      function f(l) {
        Ie.debug && window && window.console.warn(l);
      }
      function p(l) {
        for (var v = -1, _ = l ? l.length : 0, I = []; ++v < _; ) {
          var L = l[v];
          L && I.push(L);
        }
        return I;
      }
      var d = (function (l, v, _) {
          function I(j) {
            return typeof j == "object";
          }
          function L(j) {
            return typeof j == "function";
          }
          function x() {}
          function U(j, re) {
            function D() {
              var Ee = new K();
              return L(Ee.init) && Ee.init.apply(Ee, arguments), Ee;
            }
            function K() {}
            re === _ && ((re = j), (j = Object)), (D.Bare = K);
            var z,
              ue = (x[l] = j[l]),
              Be = (K[l] = D[l] = new x());
            return (
              (Be.constructor = D),
              (D.mixin = function (Ee) {
                return (K[l] = D[l] = U(D, Ee)[l]), D;
              }),
              (D.open = function (Ee) {
                if (
                  ((z = {}),
                  L(Ee) ? (z = Ee.call(D, Be, ue, D, j)) : I(Ee) && (z = Ee),
                  I(z))
                )
                  for (var ur in z) v.call(z, ur) && (Be[ur] = z[ur]);
                return L(Be.init) || (Be.init = j), D;
              }),
              D.open(re)
            );
          }
          return U;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, v, _, I) {
              var L = (l /= I) * l,
                x = L * l;
              return (
                v +
                _ * (-2.75 * x * L + 11 * L * L + -15.5 * x + 8 * L + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, v, _, I) {
              var L = (l /= I) * l,
                x = L * l;
              return v + _ * (-1 * x * L + 3 * L * L + -3 * x + 2 * L);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, v, _, I) {
              var L = (l /= I) * l,
                x = L * l;
              return (
                v +
                _ * (0.3 * x * L + -1.6 * L * L + 2.2 * x + -1.8 * L + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, v, _, I) {
              var L = (l /= I) * l,
                x = L * l;
              return v + _ * (2 * x * L + -5 * L * L + 2 * x + 2 * L);
            },
          ],
          linear: [
            "linear",
            function (l, v, _, I) {
              return (_ * l) / I + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, v, _, I) {
              return _ * (l /= I) * l + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, v, _, I) {
              return -_ * (l /= I) * (l - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l + v
                : (-_ / 2) * (--l * (l - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, v, _, I) {
              return _ * ((l = l / I - 1) * l * l + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l + v
                : (_ / 2) * ((l -= 2) * l * l + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l * l + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, v, _, I) {
              return -_ * ((l = l / I - 1) * l * l * l - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l + v
                : (-_ / 2) * ((l -= 2) * l * l * l - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l * l * l + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, v, _, I) {
              return _ * ((l = l / I - 1) * l * l * l * l + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l * l + v
                : (_ / 2) * ((l -= 2) * l * l * l * l + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, v, _, I) {
              return -_ * Math.cos((l / I) * (Math.PI / 2)) + _ + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, v, _, I) {
              return _ * Math.sin((l / I) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, v, _, I) {
              return (-_ / 2) * (Math.cos((Math.PI * l) / I) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, v, _, I) {
              return l === 0 ? v : _ * Math.pow(2, 10 * (l / I - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, v, _, I) {
              return l === I
                ? v + _
                : _ * (-Math.pow(2, (-10 * l) / I) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, v, _, I) {
              return l === 0
                ? v
                : l === I
                ? v + _
                : (l /= I / 2) < 1
                ? (_ / 2) * Math.pow(2, 10 * (l - 1)) + v
                : (_ / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, v, _, I) {
              return -_ * (Math.sqrt(1 - (l /= I) * l) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, v, _, I) {
              return _ * Math.sqrt(1 - (l = l / I - 1) * l) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (-_ / 2) * (Math.sqrt(1 - l * l) - 1) + v
                : (_ / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, v, _, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                _ * (l /= I) * l * ((L + 1) * l - L) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, v, _, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                _ * ((l = l / I - 1) * l * ((L + 1) * l + L) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, v, _, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                (l /= I / 2) < 1
                  ? (_ / 2) * l * l * (((L *= 1.525) + 1) * l - L) + v
                  : (_ / 2) *
                      ((l -= 2) * l * (((L *= 1.525) + 1) * l + L) + 2) +
                    v
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        m = window,
        C = "bkwld-tram",
        b = /[\-\.0-9]/g,
        S = /[A-Z]/,
        T = "number",
        R = /^(rgb|#)/,
        N = /(em|cm|mm|in|pt|pc|px)$/,
        w = /(em|cm|mm|in|pt|pc|px|%)$/,
        F = /(deg|rad|turn)$/,
        G = "unitless",
        V = /(all|none) 0s ease 0s/,
        X = /^(width|height)$/,
        M = " ",
        O = y.createElement("a"),
        g = ["Webkit", "Moz", "O", "ms"],
        A = ["-webkit-", "-moz-", "-o-", "-ms-"],
        P = function (l) {
          if (l in O.style) return { dom: l, css: l };
          var v,
            _,
            I = "",
            L = l.split("-");
          for (v = 0; v < L.length; v++)
            I += L[v].charAt(0).toUpperCase() + L[v].slice(1);
          for (v = 0; v < g.length; v++)
            if (((_ = g[v] + I), _ in O.style))
              return { dom: _, css: A[v] + l };
        },
        q = (t.support = {
          bind: Function.prototype.bind,
          transform: P("transform"),
          transition: P("transition"),
          backface: P("backface-visibility"),
          timing: P("transition-timing-function"),
        });
      if (q.transition) {
        var B = q.timing.dom;
        if (((O.style[B] = h["ease-in-back"][0]), !O.style[B]))
          for (var W in E) h[W][0] = E[W];
      }
      var Q = (t.frame = (function () {
          var l =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return l && q.bind
            ? l.bind(m)
            : function (v) {
                m.setTimeout(v, 16);
              };
        })()),
        se = (t.now = (function () {
          var l = m.performance,
            v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return v && q.bind
            ? v.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        He = d(function (l) {
          function v(H, Y) {
            var oe = p(("" + H).split(M)),
              J = oe[0];
            Y = Y || {};
            var ye = _i[J];
            if (!ye) return f("Unsupported property: " + J);
            if (!Y.weak || !this.props[J]) {
              var Pe = ye[0],
                be = this.props[J];
              return (
                be || (be = this.props[J] = new Pe.Bare()),
                be.init(this.$el, oe, ye, Y),
                be
              );
            }
          }
          function _(H, Y, oe) {
            if (H) {
              var J = typeof H;
              if (
                (Y ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                J == "number" && Y)
              )
                return (
                  (this.timer = new jr({
                    duration: H,
                    context: this,
                    complete: x,
                  })),
                  void (this.active = !0)
                );
              if (J == "string" && Y) {
                switch (H) {
                  case "hide":
                    D.call(this);
                    break;
                  case "stop":
                    U.call(this);
                    break;
                  case "redraw":
                    K.call(this);
                    break;
                  default:
                    v.call(this, H, oe && oe[1]);
                }
                return x.call(this);
              }
              if (J == "function") return void H.call(this, this);
              if (J == "object") {
                var ye = 0;
                Be.call(
                  this,
                  H,
                  function (ce, L_) {
                    ce.span > ye && (ye = ce.span), ce.stop(), ce.animate(L_);
                  },
                  function (ce) {
                    "wait" in ce && (ye = c(ce.wait, 0));
                  }
                ),
                  ue.call(this),
                  ye > 0 &&
                    ((this.timer = new jr({ duration: ye, context: this })),
                    (this.active = !0),
                    Y && (this.timer.complete = x));
                var Pe = this,
                  be = !1,
                  Kr = {};
                Q(function () {
                  Be.call(Pe, H, function (ce) {
                    ce.active && ((be = !0), (Kr[ce.name] = ce.nextStyle));
                  }),
                    be && Pe.$el.css(Kr);
                });
              }
            }
          }
          function I(H) {
            (H = c(H, 0)),
              this.active
                ? this.queue.push({ options: H })
                : ((this.timer = new jr({
                    duration: H,
                    context: this,
                    complete: x,
                  })),
                  (this.active = !0));
          }
          function L(H) {
            return this.active
              ? (this.queue.push({ options: H, args: arguments }),
                void (this.timer.complete = x))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function x() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var H = this.queue.shift();
              _.call(this, H.options, !0, H.args);
            }
          }
          function U(H) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var Y;
            typeof H == "string"
              ? ((Y = {}), (Y[H] = 1))
              : (Y = typeof H == "object" && H != null ? H : this.props),
              Be.call(this, Y, Ee),
              ue.call(this);
          }
          function j(H) {
            U.call(this, H), Be.call(this, H, ur, C_);
          }
          function re(H) {
            typeof H != "string" && (H = "block"), (this.el.style.display = H);
          }
          function D() {
            U.call(this), (this.el.style.display = "none");
          }
          function K() {
            this.el.offsetHeight;
          }
          function z() {
            U.call(this), e.removeData(this.el, C), (this.$el = this.el = null);
          }
          function ue() {
            var H,
              Y,
              oe = [];
            this.upstream && oe.push(this.upstream);
            for (H in this.props)
              (Y = this.props[H]), Y.active && oe.push(Y.string);
            (oe = oe.join(",")),
              this.style !== oe &&
                ((this.style = oe), (this.el.style[q.transition.dom] = oe));
          }
          function Be(H, Y, oe) {
            var J,
              ye,
              Pe,
              be,
              Kr = Y !== Ee,
              ce = {};
            for (J in H)
              (Pe = H[J]),
                J in st
                  ? (ce.transform || (ce.transform = {}),
                    (ce.transform[J] = Pe))
                  : (S.test(J) && (J = r(J)),
                    J in _i ? (ce[J] = Pe) : (be || (be = {}), (be[J] = Pe)));
            for (J in ce) {
              if (((Pe = ce[J]), (ye = this.props[J]), !ye)) {
                if (!Kr) continue;
                ye = v.call(this, J);
              }
              Y.call(this, ye, Pe);
            }
            oe && be && oe.call(this, be);
          }
          function Ee(H) {
            H.stop();
          }
          function ur(H, Y) {
            H.set(Y);
          }
          function C_(H) {
            this.$el.css(H);
          }
          function Le(H, Y) {
            l[H] = function () {
              return this.children
                ? N_.call(this, Y, arguments)
                : (this.el && Y.apply(this, arguments), this);
            };
          }
          function N_(H, Y) {
            var oe,
              J = this.children.length;
            for (oe = 0; J > oe; oe++) H.apply(this.children[oe], Y);
            return this;
          }
          (l.init = function (H) {
            if (
              ((this.$el = e(H)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Ie.keepInherited && !Ie.fallback)
            ) {
              var Y = _s(this.el, "transition");
              Y && !V.test(Y) && (this.upstream = Y);
            }
            q.backface &&
              Ie.hideBackface &&
              wt(this.el, q.backface.css, "hidden");
          }),
            Le("add", v),
            Le("start", _),
            Le("wait", I),
            Le("then", L),
            Le("next", x),
            Le("stop", U),
            Le("set", j),
            Le("show", re),
            Le("hide", D),
            Le("redraw", K),
            Le("destroy", z);
        }),
        de = d(He, function (l) {
          function v(_, I) {
            var L = e.data(_, C) || e.data(_, C, new He.Bare());
            return L.el || L.init(_), I ? L.start(I) : L;
          }
          l.init = function (_, I) {
            var L = e(_);
            if (!L.length) return this;
            if (L.length === 1) return v(L[0], I);
            var x = [];
            return (
              L.each(function (U, j) {
                x.push(v(j, I));
              }),
              (this.children = x),
              this
            );
          };
        }),
        k = d(function (l) {
          function v() {
            var x = this.get();
            this.update("auto");
            var U = this.get();
            return this.update(x), U;
          }
          function _(x, U, j) {
            return U !== void 0 && (j = U), x in h ? x : j;
          }
          function I(x) {
            var U = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
            return (U ? i(U[1], U[2], U[3]) : x).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var L = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (x, U, j, re) {
            (this.$el = x), (this.el = x[0]);
            var D = U[0];
            j[2] && (D = j[2]),
              Ts[D] && (D = Ts[D]),
              (this.name = D),
              (this.type = j[1]),
              (this.duration = c(U[1], this.duration, L.duration)),
              (this.ease = _(U[2], this.ease, L.ease)),
              (this.delay = c(U[3], this.delay, L.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = X.test(this.name)),
              (this.unit = re.unit || this.unit || Ie.defaultUnit),
              (this.angle = re.angle || this.angle || Ie.defaultAngle),
              Ie.fallback || re.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    M +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? M + h[this.ease][0] : "") +
                    (this.delay ? M + this.delay + "ms" : "")));
          }),
            (l.set = function (x) {
              (x = this.convert(x, this.type)), this.update(x), this.redraw();
            }),
            (l.transition = function (x) {
              (this.active = !0),
                (x = this.convert(x, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  x == "auto" && (x = v.call(this))),
                (this.nextStyle = x);
            }),
            (l.fallback = function (x) {
              var U =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (x = this.convert(x, this.type)),
                this.auto &&
                  (U == "auto" && (U = this.convert(this.get(), this.type)),
                  x == "auto" && (x = v.call(this))),
                (this.tween = new sr({
                  from: U,
                  to: x,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return _s(this.el, this.name);
            }),
            (l.update = function (x) {
              wt(this.el, this.name, x);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                wt(this.el, this.name, this.get()));
              var x = this.tween;
              x && x.context && x.destroy();
            }),
            (l.convert = function (x, U) {
              if (x == "auto" && this.auto) return x;
              var j,
                re = typeof x == "number",
                D = typeof x == "string";
              switch (U) {
                case T:
                  if (re) return x;
                  if (D && x.replace(b, "") === "") return +x;
                  j = "number(unitless)";
                  break;
                case R:
                  if (D) {
                    if (x === "" && this.original) return this.original;
                    if (U.test(x))
                      return x.charAt(0) == "#" && x.length == 7 ? x : I(x);
                  }
                  j = "hex or rgb string";
                  break;
                case N:
                  if (re) return x + this.unit;
                  if (D && U.test(x)) return x;
                  j = "number(px) or string(unit)";
                  break;
                case w:
                  if (re) return x + this.unit;
                  if (D && U.test(x)) return x;
                  j = "number(px) or string(unit or %)";
                  break;
                case F:
                  if (re) return x + this.angle;
                  if (D && U.test(x)) return x;
                  j = "number(deg) or string(angle)";
                  break;
                case G:
                  if (re || (D && w.test(x))) return x;
                  j = "number(unitless) or string(unit or %)";
              }
              return a(j, x), x;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Z = d(k, function (l, v) {
          l.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), R));
          };
        }),
        Ce = d(k, function (l, v) {
          (l.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (_) {
              this.$el[this.name](_);
            });
        }),
        Ne = d(k, function (l, v) {
          function _(I, L) {
            var x, U, j, re, D;
            for (x in I)
              (re = st[x]),
                (j = re[0]),
                (U = re[1] || x),
                (D = this.convert(I[x], j)),
                L.call(this, U, D, j);
          }
          (l.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                st.perspective &&
                  Ie.perspective &&
                  ((this.current.perspective = Ie.perspective),
                  wt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              _.call(this, I, function (L, x) {
                this.current[L] = x;
              }),
                wt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var L = this.values(I);
              this.tween = new ms({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var x,
                U = {};
              for (x in this.current) U[x] = x in L ? L[x] : this.current[x];
              (this.active = !0), (this.nextStyle = this.style(U));
            }),
            (l.fallback = function (I) {
              var L = this.values(I);
              this.tween = new ms({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              wt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var L,
                x = "";
              for (L in I) x += L + "(" + I[L] + ") ";
              return x;
            }),
            (l.values = function (I) {
              var L,
                x = {};
              return (
                _.call(this, I, function (U, j, re) {
                  (x[U] = j),
                    this.current[U] === void 0 &&
                      ((L = 0),
                      ~U.indexOf("scale") && (L = 1),
                      (this.current[U] = this.convert(L, re)));
                }),
                x
              );
            });
        }),
        sr = d(function (l) {
          function v(D) {
            j.push(D) === 1 && Q(_);
          }
          function _() {
            var D,
              K,
              z,
              ue = j.length;
            if (ue)
              for (Q(_), K = se(), D = ue; D--; ) (z = j[D]), z && z.render(K);
          }
          function I(D) {
            var K,
              z = e.inArray(D, j);
            z >= 0 &&
              ((K = j.slice(z + 1)),
              (j.length = z),
              K.length && (j = j.concat(K)));
          }
          function L(D) {
            return Math.round(D * re) / re;
          }
          function x(D, K, z) {
            return i(
              D[0] + z * (K[0] - D[0]),
              D[1] + z * (K[1] - D[1]),
              D[2] + z * (K[2] - D[2])
            );
          }
          var U = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (D) {
            (this.duration = D.duration || 0), (this.delay = D.delay || 0);
            var K = D.ease || U.ease;
            h[K] && (K = h[K][1]),
              typeof K != "function" && (K = U.ease),
              (this.ease = K),
              (this.update = D.update || o),
              (this.complete = D.complete || o),
              (this.context = D.context || this),
              (this.name = D.name);
            var z = D.from,
              ue = D.to;
            z === void 0 && (z = U.from),
              ue === void 0 && (ue = U.to),
              (this.unit = D.unit || ""),
              typeof z == "number" && typeof ue == "number"
                ? ((this.begin = z), (this.change = ue - z))
                : this.format(ue, z),
              (this.value = this.begin + this.unit),
              (this.start = se()),
              D.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = se()),
                (this.active = !0),
                v(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (D) {
              var K,
                z = D - this.start;
              if (this.delay) {
                if (z <= this.delay) return;
                z -= this.delay;
              }
              if (z < this.duration) {
                var ue = this.ease(z, 0, 1, this.duration);
                return (
                  (K = this.startRGB
                    ? x(this.startRGB, this.endRGB, ue)
                    : L(this.begin + ue * this.change)),
                  (this.value = K + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (K = this.endHex || this.begin + this.change),
                (this.value = K + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (D, K) {
              if (((K += ""), (D += ""), D.charAt(0) == "#"))
                return (
                  (this.startRGB = n(K)),
                  (this.endRGB = n(D)),
                  (this.endHex = D),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var z = K.replace(b, ""),
                  ue = D.replace(b, "");
                z !== ue && s("tween", K, D), (this.unit = z);
              }
              (K = parseFloat(K)),
                (D = parseFloat(D)),
                (this.begin = this.value = K),
                (this.change = D - K);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var j = [],
            re = 1e3;
        }),
        jr = d(sr, function (l) {
          (l.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || o),
              (this.context = v.context),
              this.play();
          }),
            (l.render = function (v) {
              var _ = v - this.start;
              _ < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ms = d(sr, function (l, v) {
          (l.init = function (_) {
            (this.context = _.context),
              (this.update = _.update),
              (this.tweens = []),
              (this.current = _.current);
            var I, L;
            for (I in _.values)
              (L = _.values[I]),
                this.current[I] !== L &&
                  this.tweens.push(
                    new sr({
                      name: I,
                      from: this.current[I],
                      to: L,
                      duration: _.duration,
                      delay: _.delay,
                      ease: _.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (_) {
              var I,
                L,
                x = this.tweens.length,
                U = !1;
              for (I = x; I--; )
                (L = this.tweens[I]),
                  L.context &&
                    (L.render(_), (this.current[L.name] = L.value), (U = !0));
              return U
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var _,
                  I = this.tweens.length;
                for (_ = I; _--; ) this.tweens[_].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Ie = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !q.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!q.transition) return (Ie.fallback = !0);
        Ie.agentTests.push("(" + l + ")");
        var v = new RegExp(Ie.agentTests.join("|"), "i");
        Ie.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new sr(l);
        }),
        (t.delay = function (l, v, _) {
          return new jr({ complete: v, duration: l, context: _ });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var wt = e.style,
        _s = e.css,
        Ts = { transform: q.transform && q.transform.css },
        _i = {
          color: [Z, R],
          background: [Z, R, "background-color"],
          "outline-color": [Z, R],
          "border-color": [Z, R],
          "border-top-color": [Z, R],
          "border-right-color": [Z, R],
          "border-bottom-color": [Z, R],
          "border-left-color": [Z, R],
          "border-width": [k, N],
          "border-top-width": [k, N],
          "border-right-width": [k, N],
          "border-bottom-width": [k, N],
          "border-left-width": [k, N],
          "border-spacing": [k, N],
          "letter-spacing": [k, N],
          margin: [k, N],
          "margin-top": [k, N],
          "margin-right": [k, N],
          "margin-bottom": [k, N],
          "margin-left": [k, N],
          padding: [k, N],
          "padding-top": [k, N],
          "padding-right": [k, N],
          "padding-bottom": [k, N],
          "padding-left": [k, N],
          "outline-width": [k, N],
          opacity: [k, T],
          top: [k, w],
          right: [k, w],
          bottom: [k, w],
          left: [k, w],
          "font-size": [k, w],
          "text-indent": [k, w],
          "word-spacing": [k, w],
          width: [k, w],
          "min-width": [k, w],
          "max-width": [k, w],
          height: [k, w],
          "min-height": [k, w],
          "max-height": [k, w],
          "line-height": [k, G],
          "scroll-top": [Ce, T, "scrollTop"],
          "scroll-left": [Ce, T, "scrollLeft"],
        },
        st = {};
      q.transform &&
        ((_i.transform = [Ne]),
        (st = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [F],
          rotateX: [F],
          rotateY: [F],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [F],
          skewX: [F],
          skewY: [F],
        })),
        q.transform &&
          q.backface &&
          ((st.z = [w, "translateZ"]),
          (st.rotateZ = [F]),
          (st.scaleZ = [T]),
          (st.perspective = [N]));
      var R_ = /ms/,
        Is = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var As = u((TX, Os) => {
    "use strict";
    var G_ = window.$,
      V_ = Ti() && G_.tram;
    Os.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        p = r.forEach,
        d = r.map,
        h = r.reduce,
        E = r.reduceRight,
        y = r.filter,
        m = r.every,
        C = r.some,
        b = r.indexOf,
        S = r.lastIndexOf,
        T = Array.isArray,
        R = Object.keys,
        N = i.bind,
        w =
          (e.each =
          e.forEach =
            function (g, A, P) {
              if (g == null) return g;
              if (p && g.forEach === p) g.forEach(A, P);
              else if (g.length === +g.length) {
                for (var q = 0, B = g.length; q < B; q++)
                  if (A.call(P, g[q], q, g) === t) return;
              } else
                for (var W = e.keys(g), q = 0, B = W.length; q < B; q++)
                  if (A.call(P, g[W[q]], W[q], g) === t) return;
              return g;
            });
      (e.map = e.collect =
        function (g, A, P) {
          var q = [];
          return g == null
            ? q
            : d && g.map === d
            ? g.map(A, P)
            : (w(g, function (B, W, Q) {
                q.push(A.call(P, B, W, Q));
              }),
              q);
        }),
        (e.find = e.detect =
          function (g, A, P) {
            var q;
            return (
              F(g, function (B, W, Q) {
                if (A.call(P, B, W, Q)) return (q = B), !0;
              }),
              q
            );
          }),
        (e.filter = e.select =
          function (g, A, P) {
            var q = [];
            return g == null
              ? q
              : y && g.filter === y
              ? g.filter(A, P)
              : (w(g, function (B, W, Q) {
                  A.call(P, B, W, Q) && q.push(B);
                }),
                q);
          });
      var F =
        (e.some =
        e.any =
          function (g, A, P) {
            A || (A = e.identity);
            var q = !1;
            return g == null
              ? q
              : C && g.some === C
              ? g.some(A, P)
              : (w(g, function (B, W, Q) {
                  if (q || (q = A.call(P, B, W, Q))) return t;
                }),
                !!q);
          });
      (e.contains = e.include =
        function (g, A) {
          return g == null
            ? !1
            : b && g.indexOf === b
            ? g.indexOf(A) != -1
            : F(g, function (P) {
                return P === A;
              });
        }),
        (e.delay = function (g, A) {
          var P = a.call(arguments, 2);
          return setTimeout(function () {
            return g.apply(null, P);
          }, A);
        }),
        (e.defer = function (g) {
          return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (g) {
          var A, P, q;
          return function () {
            A ||
              ((A = !0),
              (P = arguments),
              (q = this),
              V_.frame(function () {
                (A = !1), g.apply(q, P);
              }));
          };
        }),
        (e.debounce = function (g, A, P) {
          var q,
            B,
            W,
            Q,
            se,
            He = function () {
              var de = e.now() - Q;
              de < A
                ? (q = setTimeout(He, A - de))
                : ((q = null), P || ((se = g.apply(W, B)), (W = B = null)));
            };
          return function () {
            (W = this), (B = arguments), (Q = e.now());
            var de = P && !q;
            return (
              q || (q = setTimeout(He, A)),
              de && ((se = g.apply(W, B)), (W = B = null)),
              se
            );
          };
        }),
        (e.defaults = function (g) {
          if (!e.isObject(g)) return g;
          for (var A = 1, P = arguments.length; A < P; A++) {
            var q = arguments[A];
            for (var B in q) g[B] === void 0 && (g[B] = q[B]);
          }
          return g;
        }),
        (e.keys = function (g) {
          if (!e.isObject(g)) return [];
          if (R) return R(g);
          var A = [];
          for (var P in g) e.has(g, P) && A.push(P);
          return A;
        }),
        (e.has = function (g, A) {
          return f.call(g, A);
        }),
        (e.isObject = function (g) {
          return g === Object(g);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var G = /(.)^/,
        V = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        X = /\\|'|\r|\n|\u2028|\u2029/g,
        M = function (g) {
          return "\\" + V[g];
        },
        O = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (g, A, P) {
          !A && P && (A = P), (A = e.defaults({}, A, e.templateSettings));
          var q = RegExp(
              [
                (A.escape || G).source,
                (A.interpolate || G).source,
                (A.evaluate || G).source,
              ].join("|") + "|$",
              "g"
            ),
            B = 0,
            W = "__p+='";
          g.replace(q, function (de, k, Z, Ce, Ne) {
            return (
              (W += g.slice(B, Ne).replace(X, M)),
              (B = Ne + de.length),
              k
                ? (W +=
                    `'+
((__t=(` +
                    k +
                    `))==null?'':_.escape(__t))+
'`)
                : Z
                ? (W +=
                    `'+
((__t=(` +
                    Z +
                    `))==null?'':__t)+
'`)
                : Ce &&
                  (W +=
                    `';
` +
                    Ce +
                    `
__p+='`),
              de
            );
          }),
            (W += `';
`);
          var Q = A.variable;
          if (Q) {
            if (!O.test(Q))
              throw new Error("variable is not a bare identifier: " + Q);
          } else
            (W =
              `with(obj||{}){
` +
              W +
              `}
`),
              (Q = "obj");
          W =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            W +
            `return __p;
`;
          var se;
          try {
            se = new Function(A.variable || "obj", "_", W);
          } catch (de) {
            throw ((de.source = W), de);
          }
          var He = function (de) {
            return se.call(this, de, e);
          };
          return (
            (He.source =
              "function(" +
              Q +
              `){
` +
              W +
              "}"),
            He
          );
        }),
        e
      );
    })();
  });
  var je = u((IX, Ps) => {
    "use strict";
    var ee = {},
      Rt = {},
      Ct = [],
      bi = window.Webflow || [],
      ut = window.jQuery,
      Me = ut(window),
      U_ = ut(document),
      ke = ut.isFunction,
      qe = (ee._ = As()),
      Ss = (ee.tram = Ti() && ut.tram),
      $r = !1,
      Oi = !1;
    Ss.config.hideBackface = !1;
    Ss.config.keepInherited = !0;
    ee.define = function (e, t, r) {
      Rt[e] && Rs(Rt[e]);
      var n = (Rt[e] = t(ut, qe, r) || {});
      return ws(n), n;
    };
    ee.require = function (e) {
      return Rt[e];
    };
    function ws(e) {
      ee.env() &&
        (ke(e.design) && Me.on("__wf_design", e.design),
        ke(e.preview) && Me.on("__wf_preview", e.preview)),
        ke(e.destroy) && Me.on("__wf_destroy", e.destroy),
        e.ready && ke(e.ready) && X_(e);
    }
    function X_(e) {
      if ($r) {
        e.ready();
        return;
      }
      qe.contains(Ct, e.ready) || Ct.push(e.ready);
    }
    function Rs(e) {
      ke(e.design) && Me.off("__wf_design", e.design),
        ke(e.preview) && Me.off("__wf_preview", e.preview),
        ke(e.destroy) && Me.off("__wf_destroy", e.destroy),
        e.ready && ke(e.ready) && H_(e);
    }
    function H_(e) {
      Ct = qe.filter(Ct, function (t) {
        return t !== e.ready;
      });
    }
    ee.push = function (e) {
      if ($r) {
        ke(e) && e();
        return;
      }
      bi.push(e);
    };
    ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Yr = navigator.userAgent.toLowerCase(),
      Cs = (ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      B_ = (ee.env.chrome =
        /chrome/.test(Yr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Yr.match(/chrome\/(\d+)\./)[1], 10)),
      W_ = (ee.env.ios = /(ipod|iphone|ipad)/.test(Yr));
    ee.env.safari = /safari/.test(Yr) && !B_ && !W_;
    var Ii;
    Cs &&
      U_.on("touchstart mousedown", function (e) {
        Ii = e.target;
      });
    ee.validClick = Cs
      ? function (e) {
          return e === Ii || ut.contains(e, Ii);
        }
      : function () {
          return !0;
        };
    var Ns = "resize.webflow orientationchange.webflow load.webflow",
      k_ = "scroll.webflow " + Ns;
    ee.resize = Ai(Me, Ns);
    ee.scroll = Ai(Me, k_);
    ee.redraw = Ai();
    function Ai(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = qe.throttle(function (i) {
          qe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (qe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = qe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ee.location = function (e) {
      window.location = e;
    };
    ee.env() && (ee.location = function () {});
    ee.ready = function () {
      ($r = !0), Oi ? j_() : qe.each(Ct, xs), qe.each(bi, xs), ee.resize.up();
    };
    function xs(e) {
      ke(e) && e();
    }
    function j_() {
      (Oi = !1), qe.each(Rt, ws);
    }
    var Et;
    ee.load = function (e) {
      Et.then(e);
    };
    function Ls() {
      Et && (Et.reject(), Me.off("load", Et.resolve)),
        (Et = new ut.Deferred()),
        Me.on("load", Et.resolve);
    }
    ee.destroy = function (e) {
      (e = e || {}),
        (Oi = !0),
        Me.triggerHandler("__wf_destroy"),
        e.domready != null && ($r = e.domready),
        qe.each(Rt, Rs),
        ee.resize.off(),
        ee.scroll.off(),
        ee.redraw.off(),
        (Ct = []),
        (bi = []),
        Et.state() === "pending" && Ls();
    };
    ut(ee.ready);
    Ls();
    Ps.exports = window.Webflow = ee;
  });
  var Ds = u((bX, Ms) => {
    "use strict";
    var qs = je();
    qs.define(
      "brand",
      (Ms.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (E = !0),
            E &&
              !s &&
              ((f = f || d()),
              h(),
              setTimeout(h, 500),
              e(r).off(c, p).on(c, p));
        };
        function p() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function d() {
          var E = e(
              '<a style={display:none} class="w-webflow-badge"></a>'
            ).attr("href", "https://webflow.com?utm_campaign=brandjs"),
            y = e("<img>")
              .attr("src", "")
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            m = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(y, m), E[0];
        }
        function h() {
          var E = i.children(o),
            y = E.length && E.get(0) === f,
            m = qs.env("editor");
          if (y) {
            m && E.remove();
            return;
          }
          E.length && E.remove(), m || i.append(f);
        }
        return t;
      })
    );
  });
  var Gs = u((OX, Fs) => {
    "use strict";
    var xi = je();
    xi.define(
      "edit",
      (Fs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (xi.env("test") || xi.env("frame")) && !r.fixture && !K_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || h,
          p = !1;
        try {
          p =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        p
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function h() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            S(function (R) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(R),
              });
            });
        }
        function E(R) {
          return function (N) {
            if (!N) {
              console.error("Could not load editor data");
              return;
            }
            (N.thirdPartyCookiesSupported = R),
              y(C(N.bugReporterScriptPath), function () {
                y(C(N.scriptPath), function () {
                  window.WebflowEditor(N);
                });
              });
          };
        }
        function y(R, N) {
          e.ajax({ type: "GET", url: R, dataType: "script", cache: !0 }).then(
            N,
            m
          );
        }
        function m(R, N, w) {
          throw (console.error("Could not load editor script: " + N), w);
        }
        function C(R) {
          return R.indexOf("//") >= 0
            ? R
            : b("https://editor-api.webflow.com" + R);
        }
        function b(R) {
          return R.replace(/([^:])\/\//g, "$1/");
        }
        function S(R) {
          var N = window.document.createElement("iframe");
          (N.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (N.style.display = "none"),
            (N.sandbox = "allow-scripts allow-same-origin");
          var w = function (F) {
            F.data === "WF_third_party_cookies_unsupported"
              ? (T(N, w), R(!1))
              : F.data === "WF_third_party_cookies_supported" &&
                (T(N, w), R(!0));
          };
          (N.onerror = function () {
            T(N, w), R(!1);
          }),
            window.addEventListener("message", w, !1),
            window.document.body.appendChild(N);
        }
        function T(R, N) {
          window.removeEventListener("message", N, !1), R.remove();
        }
        return n;
      })
    );
    function K_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Us = u((AX, Vs) => {
    "use strict";
    var z_ = je();
    z_.define(
      "focus-visible",
      (Vs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var R = T.type,
              N = T.tagName;
            return !!(
              (N === "INPUT" && a[R] && !T.readOnly) ||
              (N === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function p(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function d(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function E(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function y(T) {
            s(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              p(T.target));
          }
          function m() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function b() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", m, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Bs = u((xX, Hs) => {
    "use strict";
    var Xs = je();
    Xs.define(
      "focus",
      (Hs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var js = u((SX, ks) => {
    "use strict";
    var Si = window.jQuery,
      Ke = {},
      Qr = [],
      Ws = ".w-ix",
      Zr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Si(t).triggerHandler(Ke.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Si(t).triggerHandler(Ke.types.OUTRO));
        },
      };
    Ke.triggers = {};
    Ke.types = { INTRO: "w-ix-intro" + Ws, OUTRO: "w-ix-outro" + Ws };
    Ke.init = function () {
      for (var e = Qr.length, t = 0; t < e; t++) {
        var r = Qr[t];
        r[0](0, r[1]);
      }
      (Qr = []), Si.extend(Ke.triggers, Zr);
    };
    Ke.async = function () {
      for (var e in Zr) {
        var t = Zr[e];
        Zr.hasOwnProperty(e) &&
          (Ke.triggers[e] = function (r, n) {
            Qr.push([t, n]);
          });
      }
    };
    Ke.async();
    ks.exports = Ke;
  });
  var Ri = u((wX, Ys) => {
    "use strict";
    var wi = js();
    function Ks(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Y_ = window.jQuery,
      Jr = {},
      zs = ".w-ix",
      $_ = {
        reset: function (e, t) {
          wi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          wi.triggers.intro(e, t), Ks(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          wi.triggers.outro(e, t), Ks(t, "COMPONENT_INACTIVE");
        },
      };
    Jr.triggers = {};
    Jr.types = { INTRO: "w-ix-intro" + zs, OUTRO: "w-ix-outro" + zs };
    Y_.extend(Jr.triggers, $_);
    Ys.exports = Jr;
  });
  var $s = u((RX, et) => {
    function Ci(e) {
      return (
        (et.exports = Ci =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (et.exports.__esModule = !0),
        (et.exports.default = et.exports),
        Ci(e)
      );
    }
    (et.exports = Ci),
      (et.exports.__esModule = !0),
      (et.exports.default = et.exports);
  });
  var en = u((CX, cr) => {
    var Q_ = $s().default;
    function Qs(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Qs = function (i) {
        return i ? r : t;
      })(e);
    }
    function Z_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Q_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Qs(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (cr.exports = Z_),
      (cr.exports.__esModule = !0),
      (cr.exports.default = cr.exports);
  });
  var Zs = u((NX, lr) => {
    function J_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (lr.exports = J_),
      (lr.exports.__esModule = !0),
      (lr.exports.default = lr.exports);
  });
  var ie = u((LX, Js) => {
    var tn = function (e) {
      return e && e.Math == Math && e;
    };
    Js.exports =
      tn(typeof globalThis == "object" && globalThis) ||
      tn(typeof window == "object" && window) ||
      tn(typeof self == "object" && self) ||
      tn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Nt = u((PX, eu) => {
    eu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var yt = u((qX, tu) => {
    var eT = Nt();
    tu.exports = !eT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var rn = u((MX, ru) => {
    var fr = Function.prototype.call;
    ru.exports = fr.bind
      ? fr.bind(fr)
      : function () {
          return fr.apply(fr, arguments);
        };
  });
  var au = u((ou) => {
    "use strict";
    var nu = {}.propertyIsEnumerable,
      iu = Object.getOwnPropertyDescriptor,
      tT = iu && !nu.call({ 1: 2 }, 1);
    ou.f = tT
      ? function (t) {
          var r = iu(this, t);
          return !!r && r.enumerable;
        }
      : nu;
  });
  var Ni = u((FX, su) => {
    su.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var De = u((GX, cu) => {
    var uu = Function.prototype,
      Li = uu.bind,
      Pi = uu.call,
      rT = Li && Li.bind(Pi);
    cu.exports = Li
      ? function (e) {
          return e && rT(Pi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Pi.apply(e, arguments);
            }
          );
        };
  });
  var du = u((VX, fu) => {
    var lu = De(),
      nT = lu({}.toString),
      iT = lu("".slice);
    fu.exports = function (e) {
      return iT(nT(e), 8, -1);
    };
  });
  var gu = u((UX, pu) => {
    var oT = ie(),
      aT = De(),
      sT = Nt(),
      uT = du(),
      qi = oT.Object,
      cT = aT("".split);
    pu.exports = sT(function () {
      return !qi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return uT(e) == "String" ? cT(e, "") : qi(e);
        }
      : qi;
  });
  var Mi = u((XX, hu) => {
    var lT = ie(),
      fT = lT.TypeError;
    hu.exports = function (e) {
      if (e == null) throw fT("Can't call method on " + e);
      return e;
    };
  });
  var dr = u((HX, vu) => {
    var dT = gu(),
      pT = Mi();
    vu.exports = function (e) {
      return dT(pT(e));
    };
  });
  var ze = u((BX, Eu) => {
    Eu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Lt = u((WX, yu) => {
    var gT = ze();
    yu.exports = function (e) {
      return typeof e == "object" ? e !== null : gT(e);
    };
  });
  var pr = u((kX, mu) => {
    var Di = ie(),
      hT = ze(),
      vT = function (e) {
        return hT(e) ? e : void 0;
      };
    mu.exports = function (e, t) {
      return arguments.length < 2 ? vT(Di[e]) : Di[e] && Di[e][t];
    };
  });
  var Tu = u((jX, _u) => {
    var ET = De();
    _u.exports = ET({}.isPrototypeOf);
  });
  var bu = u((KX, Iu) => {
    var yT = pr();
    Iu.exports = yT("navigator", "userAgent") || "";
  });
  var Cu = u((zX, Ru) => {
    var wu = ie(),
      Fi = bu(),
      Ou = wu.process,
      Au = wu.Deno,
      xu = (Ou && Ou.versions) || (Au && Au.version),
      Su = xu && xu.v8,
      Fe,
      nn;
    Su &&
      ((Fe = Su.split(".")),
      (nn = Fe[0] > 0 && Fe[0] < 4 ? 1 : +(Fe[0] + Fe[1])));
    !nn &&
      Fi &&
      ((Fe = Fi.match(/Edge\/(\d+)/)),
      (!Fe || Fe[1] >= 74) &&
        ((Fe = Fi.match(/Chrome\/(\d+)/)), Fe && (nn = +Fe[1])));
    Ru.exports = nn;
  });
  var Gi = u((YX, Lu) => {
    var Nu = Cu(),
      mT = Nt();
    Lu.exports =
      !!Object.getOwnPropertySymbols &&
      !mT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Nu && Nu < 41)
        );
      });
  });
  var Vi = u(($X, Pu) => {
    var _T = Gi();
    Pu.exports = _T && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ui = u((QX, qu) => {
    var TT = ie(),
      IT = pr(),
      bT = ze(),
      OT = Tu(),
      AT = Vi(),
      xT = TT.Object;
    qu.exports = AT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = IT("Symbol");
          return bT(t) && OT(t.prototype, xT(e));
        };
  });
  var Du = u((ZX, Mu) => {
    var ST = ie(),
      wT = ST.String;
    Mu.exports = function (e) {
      try {
        return wT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Gu = u((JX, Fu) => {
    var RT = ie(),
      CT = ze(),
      NT = Du(),
      LT = RT.TypeError;
    Fu.exports = function (e) {
      if (CT(e)) return e;
      throw LT(NT(e) + " is not a function");
    };
  });
  var Uu = u((e5, Vu) => {
    var PT = Gu();
    Vu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : PT(r);
    };
  });
  var Hu = u((t5, Xu) => {
    var qT = ie(),
      Xi = rn(),
      Hi = ze(),
      Bi = Lt(),
      MT = qT.TypeError;
    Xu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Hi((r = e.toString)) && !Bi((n = Xi(r, e)))) ||
        (Hi((r = e.valueOf)) && !Bi((n = Xi(r, e)))) ||
        (t !== "string" && Hi((r = e.toString)) && !Bi((n = Xi(r, e))))
      )
        return n;
      throw MT("Can't convert object to primitive value");
    };
  });
  var Wu = u((r5, Bu) => {
    Bu.exports = !1;
  });
  var on = u((n5, ju) => {
    var ku = ie(),
      DT = Object.defineProperty;
    ju.exports = function (e, t) {
      try {
        DT(ku, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ku[e] = t;
      }
      return t;
    };
  });
  var an = u((i5, zu) => {
    var FT = ie(),
      GT = on(),
      Ku = "__core-js_shared__",
      VT = FT[Ku] || GT(Ku, {});
    zu.exports = VT;
  });
  var Wi = u((o5, $u) => {
    var UT = Wu(),
      Yu = an();
    ($u.exports = function (e, t) {
      return Yu[e] || (Yu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: UT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Zu = u((a5, Qu) => {
    var XT = ie(),
      HT = Mi(),
      BT = XT.Object;
    Qu.exports = function (e) {
      return BT(HT(e));
    };
  });
  var ct = u((s5, Ju) => {
    var WT = De(),
      kT = Zu(),
      jT = WT({}.hasOwnProperty);
    Ju.exports =
      Object.hasOwn ||
      function (t, r) {
        return jT(kT(t), r);
      };
  });
  var ki = u((u5, ec) => {
    var KT = De(),
      zT = 0,
      YT = Math.random(),
      $T = KT((1).toString);
    ec.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + $T(++zT + YT, 36);
    };
  });
  var ji = u((c5, oc) => {
    var QT = ie(),
      ZT = Wi(),
      tc = ct(),
      JT = ki(),
      rc = Gi(),
      ic = Vi(),
      Pt = ZT("wks"),
      mt = QT.Symbol,
      nc = mt && mt.for,
      eI = ic ? mt : (mt && mt.withoutSetter) || JT;
    oc.exports = function (e) {
      if (!tc(Pt, e) || !(rc || typeof Pt[e] == "string")) {
        var t = "Symbol." + e;
        rc && tc(mt, e)
          ? (Pt[e] = mt[e])
          : ic && nc
          ? (Pt[e] = nc(t))
          : (Pt[e] = eI(t));
      }
      return Pt[e];
    };
  });
  var cc = u((l5, uc) => {
    var tI = ie(),
      rI = rn(),
      ac = Lt(),
      sc = Ui(),
      nI = Uu(),
      iI = Hu(),
      oI = ji(),
      aI = tI.TypeError,
      sI = oI("toPrimitive");
    uc.exports = function (e, t) {
      if (!ac(e) || sc(e)) return e;
      var r = nI(e, sI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = rI(r, e, t)), !ac(n) || sc(n))
        )
          return n;
        throw aI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), iI(e, t);
    };
  });
  var Ki = u((f5, lc) => {
    var uI = cc(),
      cI = Ui();
    lc.exports = function (e) {
      var t = uI(e, "string");
      return cI(t) ? t : t + "";
    };
  });
  var Yi = u((d5, dc) => {
    var lI = ie(),
      fc = Lt(),
      zi = lI.document,
      fI = fc(zi) && fc(zi.createElement);
    dc.exports = function (e) {
      return fI ? zi.createElement(e) : {};
    };
  });
  var $i = u((p5, pc) => {
    var dI = yt(),
      pI = Nt(),
      gI = Yi();
    pc.exports =
      !dI &&
      !pI(function () {
        return (
          Object.defineProperty(gI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var Qi = u((hc) => {
    var hI = yt(),
      vI = rn(),
      EI = au(),
      yI = Ni(),
      mI = dr(),
      _I = Ki(),
      TI = ct(),
      II = $i(),
      gc = Object.getOwnPropertyDescriptor;
    hc.f = hI
      ? gc
      : function (t, r) {
          if (((t = mI(t)), (r = _I(r)), II))
            try {
              return gc(t, r);
            } catch {}
          if (TI(t, r)) return yI(!vI(EI.f, t, r), t[r]);
        };
  });
  var gr = u((h5, Ec) => {
    var vc = ie(),
      bI = Lt(),
      OI = vc.String,
      AI = vc.TypeError;
    Ec.exports = function (e) {
      if (bI(e)) return e;
      throw AI(OI(e) + " is not an object");
    };
  });
  var hr = u((_c) => {
    var xI = ie(),
      SI = yt(),
      wI = $i(),
      yc = gr(),
      RI = Ki(),
      CI = xI.TypeError,
      mc = Object.defineProperty;
    _c.f = SI
      ? mc
      : function (t, r, n) {
          if ((yc(t), (r = RI(r)), yc(n), wI))
            try {
              return mc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw CI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var sn = u((E5, Tc) => {
    var NI = yt(),
      LI = hr(),
      PI = Ni();
    Tc.exports = NI
      ? function (e, t, r) {
          return LI.f(e, t, PI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var Ji = u((y5, Ic) => {
    var qI = De(),
      MI = ze(),
      Zi = an(),
      DI = qI(Function.toString);
    MI(Zi.inspectSource) ||
      (Zi.inspectSource = function (e) {
        return DI(e);
      });
    Ic.exports = Zi.inspectSource;
  });
  var Ac = u((m5, Oc) => {
    var FI = ie(),
      GI = ze(),
      VI = Ji(),
      bc = FI.WeakMap;
    Oc.exports = GI(bc) && /native code/.test(VI(bc));
  });
  var eo = u((_5, Sc) => {
    var UI = Wi(),
      XI = ki(),
      xc = UI("keys");
    Sc.exports = function (e) {
      return xc[e] || (xc[e] = XI(e));
    };
  });
  var un = u((T5, wc) => {
    wc.exports = {};
  });
  var qc = u((I5, Pc) => {
    var HI = Ac(),
      Lc = ie(),
      to = De(),
      BI = Lt(),
      WI = sn(),
      ro = ct(),
      no = an(),
      kI = eo(),
      jI = un(),
      Rc = "Object already initialized",
      oo = Lc.TypeError,
      KI = Lc.WeakMap,
      cn,
      vr,
      ln,
      zI = function (e) {
        return ln(e) ? vr(e) : cn(e, {});
      },
      YI = function (e) {
        return function (t) {
          var r;
          if (!BI(t) || (r = vr(t)).type !== e)
            throw oo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    HI || no.state
      ? ((lt = no.state || (no.state = new KI())),
        (Cc = to(lt.get)),
        (io = to(lt.has)),
        (Nc = to(lt.set)),
        (cn = function (e, t) {
          if (io(lt, e)) throw new oo(Rc);
          return (t.facade = e), Nc(lt, e, t), t;
        }),
        (vr = function (e) {
          return Cc(lt, e) || {};
        }),
        (ln = function (e) {
          return io(lt, e);
        }))
      : ((_t = kI("state")),
        (jI[_t] = !0),
        (cn = function (e, t) {
          if (ro(e, _t)) throw new oo(Rc);
          return (t.facade = e), WI(e, _t, t), t;
        }),
        (vr = function (e) {
          return ro(e, _t) ? e[_t] : {};
        }),
        (ln = function (e) {
          return ro(e, _t);
        }));
    var lt, Cc, io, Nc, _t;
    Pc.exports = { set: cn, get: vr, has: ln, enforce: zI, getterFor: YI };
  });
  var Fc = u((b5, Dc) => {
    var ao = yt(),
      $I = ct(),
      Mc = Function.prototype,
      QI = ao && Object.getOwnPropertyDescriptor,
      so = $I(Mc, "name"),
      ZI = so && function () {}.name === "something",
      JI = so && (!ao || (ao && QI(Mc, "name").configurable));
    Dc.exports = { EXISTS: so, PROPER: ZI, CONFIGURABLE: JI };
  });
  var Hc = u((O5, Xc) => {
    var eb = ie(),
      Gc = ze(),
      tb = ct(),
      Vc = sn(),
      rb = on(),
      nb = Ji(),
      Uc = qc(),
      ib = Fc().CONFIGURABLE,
      ob = Uc.get,
      ab = Uc.enforce,
      sb = String(String).split("String");
    (Xc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Gc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!tb(r, "name") || (ib && r.name !== s)) && Vc(r, "name", s),
          (c = ab(r)),
          c.source || (c.source = sb.join(typeof s == "string" ? s : ""))),
        e === eb)
      ) {
        o ? (e[t] = r) : rb(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Vc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Gc(this) && ob(this).source) || nb(this);
    });
  });
  var uo = u((A5, Bc) => {
    var ub = Math.ceil,
      cb = Math.floor;
    Bc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? cb : ub)(t);
    };
  });
  var kc = u((x5, Wc) => {
    var lb = uo(),
      fb = Math.max,
      db = Math.min;
    Wc.exports = function (e, t) {
      var r = lb(e);
      return r < 0 ? fb(r + t, 0) : db(r, t);
    };
  });
  var Kc = u((S5, jc) => {
    var pb = uo(),
      gb = Math.min;
    jc.exports = function (e) {
      return e > 0 ? gb(pb(e), 9007199254740991) : 0;
    };
  });
  var Yc = u((w5, zc) => {
    var hb = Kc();
    zc.exports = function (e) {
      return hb(e.length);
    };
  });
  var co = u((R5, Qc) => {
    var vb = dr(),
      Eb = kc(),
      yb = Yc(),
      $c = function (e) {
        return function (t, r, n) {
          var i = vb(t),
            o = yb(i),
            a = Eb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Qc.exports = { includes: $c(!0), indexOf: $c(!1) };
  });
  var fo = u((C5, Jc) => {
    var mb = De(),
      lo = ct(),
      _b = dr(),
      Tb = co().indexOf,
      Ib = un(),
      Zc = mb([].push);
    Jc.exports = function (e, t) {
      var r = _b(e),
        n = 0,
        i = [],
        o;
      for (o in r) !lo(Ib, o) && lo(r, o) && Zc(i, o);
      for (; t.length > n; ) lo(r, (o = t[n++])) && (~Tb(i, o) || Zc(i, o));
      return i;
    };
  });
  var fn = u((N5, el) => {
    el.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var rl = u((tl) => {
    var bb = fo(),
      Ob = fn(),
      Ab = Ob.concat("length", "prototype");
    tl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return bb(t, Ab);
      };
  });
  var il = u((nl) => {
    nl.f = Object.getOwnPropertySymbols;
  });
  var al = u((q5, ol) => {
    var xb = pr(),
      Sb = De(),
      wb = rl(),
      Rb = il(),
      Cb = gr(),
      Nb = Sb([].concat);
    ol.exports =
      xb("Reflect", "ownKeys") ||
      function (t) {
        var r = wb.f(Cb(t)),
          n = Rb.f;
        return n ? Nb(r, n(t)) : r;
      };
  });
  var ul = u((M5, sl) => {
    var Lb = ct(),
      Pb = al(),
      qb = Qi(),
      Mb = hr();
    sl.exports = function (e, t) {
      for (var r = Pb(t), n = Mb.f, i = qb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        Lb(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var ll = u((D5, cl) => {
    var Db = Nt(),
      Fb = ze(),
      Gb = /#|\.prototype\./,
      Er = function (e, t) {
        var r = Ub[Vb(e)];
        return r == Hb ? !0 : r == Xb ? !1 : Fb(t) ? Db(t) : !!t;
      },
      Vb = (Er.normalize = function (e) {
        return String(e).replace(Gb, ".").toLowerCase();
      }),
      Ub = (Er.data = {}),
      Xb = (Er.NATIVE = "N"),
      Hb = (Er.POLYFILL = "P");
    cl.exports = Er;
  });
  var dl = u((F5, fl) => {
    var po = ie(),
      Bb = Qi().f,
      Wb = sn(),
      kb = Hc(),
      jb = on(),
      Kb = ul(),
      zb = ll();
    fl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        p;
      if (
        (n
          ? (a = po)
          : i
          ? (a = po[r] || jb(r, {}))
          : (a = (po[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((p = Bb(a, s)), (c = p && p.value)) : (c = a[s]),
            (o = zb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            Kb(f, c);
          }
          (e.sham || (c && c.sham)) && Wb(f, "sham", !0), kb(a, s, f, e);
        }
    };
  });
  var gl = u((G5, pl) => {
    var Yb = fo(),
      $b = fn();
    pl.exports =
      Object.keys ||
      function (t) {
        return Yb(t, $b);
      };
  });
  var vl = u((V5, hl) => {
    var Qb = yt(),
      Zb = hr(),
      Jb = gr(),
      eO = dr(),
      tO = gl();
    hl.exports = Qb
      ? Object.defineProperties
      : function (t, r) {
          Jb(t);
          for (var n = eO(r), i = tO(r), o = i.length, a = 0, s; o > a; )
            Zb.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var yl = u((U5, El) => {
    var rO = pr();
    El.exports = rO("document", "documentElement");
  });
  var xl = u((X5, Al) => {
    var nO = gr(),
      iO = vl(),
      ml = fn(),
      oO = un(),
      aO = yl(),
      sO = Yi(),
      uO = eo(),
      _l = ">",
      Tl = "<",
      ho = "prototype",
      vo = "script",
      bl = uO("IE_PROTO"),
      go = function () {},
      Ol = function (e) {
        return Tl + vo + _l + e + Tl + "/" + vo + _l;
      },
      Il = function (e) {
        e.write(Ol("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      cO = function () {
        var e = sO("iframe"),
          t = "java" + vo + ":",
          r;
        return (
          (e.style.display = "none"),
          aO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Ol("document.F=Object")),
          r.close(),
          r.F
        );
      },
      dn,
      pn = function () {
        try {
          dn = new ActiveXObject("htmlfile");
        } catch {}
        pn =
          typeof document < "u"
            ? document.domain && dn
              ? Il(dn)
              : cO()
            : Il(dn);
        for (var e = ml.length; e--; ) delete pn[ho][ml[e]];
        return pn();
      };
    oO[bl] = !0;
    Al.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((go[ho] = nO(t)), (n = new go()), (go[ho] = null), (n[bl] = t))
            : (n = pn()),
          r === void 0 ? n : iO(n, r)
        );
      };
  });
  var wl = u((H5, Sl) => {
    var lO = ji(),
      fO = xl(),
      dO = hr(),
      Eo = lO("unscopables"),
      yo = Array.prototype;
    yo[Eo] == null && dO.f(yo, Eo, { configurable: !0, value: fO(null) });
    Sl.exports = function (e) {
      yo[Eo][e] = !0;
    };
  });
  var Rl = u(() => {
    "use strict";
    var pO = dl(),
      gO = co().includes,
      hO = wl();
    pO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return gO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    hO("includes");
  });
  var Nl = u((k5, Cl) => {
    var vO = ie(),
      EO = De();
    Cl.exports = function (e, t) {
      return EO(vO[e].prototype[t]);
    };
  });
  var Pl = u((j5, Ll) => {
    Rl();
    var yO = Nl();
    Ll.exports = yO("Array", "includes");
  });
  var Ml = u((K5, ql) => {
    var mO = Pl();
    ql.exports = mO;
  });
  var Fl = u((z5, Dl) => {
    var _O = Ml();
    Dl.exports = _O;
  });
  var mo = u((Y5, Gl) => {
    var TO =
      typeof global == "object" && global && global.Object === Object && global;
    Gl.exports = TO;
  });
  var Ge = u(($5, Vl) => {
    var IO = mo(),
      bO = typeof self == "object" && self && self.Object === Object && self,
      OO = IO || bO || Function("return this")();
    Vl.exports = OO;
  });
  var qt = u((Q5, Ul) => {
    var AO = Ge(),
      xO = AO.Symbol;
    Ul.exports = xO;
  });
  var Wl = u((Z5, Bl) => {
    var Xl = qt(),
      Hl = Object.prototype,
      SO = Hl.hasOwnProperty,
      wO = Hl.toString,
      yr = Xl ? Xl.toStringTag : void 0;
    function RO(e) {
      var t = SO.call(e, yr),
        r = e[yr];
      try {
        e[yr] = void 0;
        var n = !0;
      } catch {}
      var i = wO.call(e);
      return n && (t ? (e[yr] = r) : delete e[yr]), i;
    }
    Bl.exports = RO;
  });
  var jl = u((J5, kl) => {
    var CO = Object.prototype,
      NO = CO.toString;
    function LO(e) {
      return NO.call(e);
    }
    kl.exports = LO;
  });
  var ft = u((eH, Yl) => {
    var Kl = qt(),
      PO = Wl(),
      qO = jl(),
      MO = "[object Null]",
      DO = "[object Undefined]",
      zl = Kl ? Kl.toStringTag : void 0;
    function FO(e) {
      return e == null
        ? e === void 0
          ? DO
          : MO
        : zl && zl in Object(e)
        ? PO(e)
        : qO(e);
    }
    Yl.exports = FO;
  });
  var _o = u((tH, $l) => {
    function GO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    $l.exports = GO;
  });
  var To = u((rH, Ql) => {
    var VO = _o(),
      UO = VO(Object.getPrototypeOf, Object);
    Ql.exports = UO;
  });
  var tt = u((nH, Zl) => {
    function XO(e) {
      return e != null && typeof e == "object";
    }
    Zl.exports = XO;
  });
  var Io = u((iH, ef) => {
    var HO = ft(),
      BO = To(),
      WO = tt(),
      kO = "[object Object]",
      jO = Function.prototype,
      KO = Object.prototype,
      Jl = jO.toString,
      zO = KO.hasOwnProperty,
      YO = Jl.call(Object);
    function $O(e) {
      if (!WO(e) || HO(e) != kO) return !1;
      var t = BO(e);
      if (t === null) return !0;
      var r = zO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Jl.call(r) == YO;
    }
    ef.exports = $O;
  });
  var tf = u((bo) => {
    "use strict";
    Object.defineProperty(bo, "__esModule", { value: !0 });
    bo.default = QO;
    function QO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var rf = u((Ao, Oo) => {
    "use strict";
    Object.defineProperty(Ao, "__esModule", { value: !0 });
    var ZO = tf(),
      JO = eA(ZO);
    function eA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Mt;
    typeof self < "u"
      ? (Mt = self)
      : typeof window < "u"
      ? (Mt = window)
      : typeof global < "u"
      ? (Mt = global)
      : typeof Oo < "u"
      ? (Mt = Oo)
      : (Mt = Function("return this")());
    var tA = (0, JO.default)(Mt);
    Ao.default = tA;
  });
  var xo = u((mr) => {
    "use strict";
    mr.__esModule = !0;
    mr.ActionTypes = void 0;
    mr.default = sf;
    var rA = Io(),
      nA = af(rA),
      iA = rf(),
      nf = af(iA);
    function af(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var of = (mr.ActionTypes = { INIT: "@@redux/INIT" });
    function sf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(sf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function p() {
        return o;
      }
      function d(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          f(),
          s.push(m),
          function () {
            if (C) {
              (C = !1), f();
              var S = s.indexOf(m);
              s.splice(S, 1);
            }
          }
        );
      }
      function h(m) {
        if (!(0, nA.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, m));
        } finally {
          c = !1;
        }
        for (var C = (a = s), b = 0; b < C.length; b++) C[b]();
        return m;
      }
      function E(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = m), h({ type: of.INIT });
      }
      function y() {
        var m,
          C = d;
        return (
          (m = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                S.next && S.next(p());
              }
              T();
              var R = C(T);
              return { unsubscribe: R };
            },
          }),
          (m[nf.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        h({ type: of.INIT }),
        (n = { dispatch: h, subscribe: d, getState: p, replaceReducer: E }),
        (n[nf.default] = y),
        n
      );
    }
  });
  var wo = u((So) => {
    "use strict";
    So.__esModule = !0;
    So.default = oA;
    function oA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var lf = u((Ro) => {
    "use strict";
    Ro.__esModule = !0;
    Ro.default = lA;
    var uf = xo(),
      aA = Io(),
      uH = cf(aA),
      sA = wo(),
      cH = cf(sA);
    function cf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function uA(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function cA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: uf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                uf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function lA(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        cA(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          p = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var h = !1, E = {}, y = 0; y < o.length; y++) {
          var m = o[y],
            C = r[m],
            b = f[m],
            S = C(b, p);
          if (typeof S > "u") {
            var T = uA(m, p);
            throw new Error(T);
          }
          (E[m] = S), (h = h || S !== b);
        }
        return h ? E : f;
      };
    }
  });
  var df = u((Co) => {
    "use strict";
    Co.__esModule = !0;
    Co.default = fA;
    function ff(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function fA(e, t) {
      if (typeof e == "function") return ff(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = ff(a, t));
      }
      return n;
    }
  });
  var Lo = u((No) => {
    "use strict";
    No.__esModule = !0;
    No.default = dA;
    function dA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var pf = u((Po) => {
    "use strict";
    Po.__esModule = !0;
    var pA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Po.default = EA;
    var gA = Lo(),
      hA = vA(gA);
    function vA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function EA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            p = {
              getState: s.getState,
              dispatch: function (h) {
                return c(h);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(p);
            })),
            (c = hA.default.apply(void 0, f)(s.dispatch)),
            pA({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var qo = u((Re) => {
    "use strict";
    Re.__esModule = !0;
    Re.compose =
      Re.applyMiddleware =
      Re.bindActionCreators =
      Re.combineReducers =
      Re.createStore =
        void 0;
    var yA = xo(),
      mA = Dt(yA),
      _A = lf(),
      TA = Dt(_A),
      IA = df(),
      bA = Dt(IA),
      OA = pf(),
      AA = Dt(OA),
      xA = Lo(),
      SA = Dt(xA),
      wA = wo(),
      gH = Dt(wA);
    function Dt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Re.createStore = mA.default;
    Re.combineReducers = TA.default;
    Re.bindActionCreators = bA.default;
    Re.applyMiddleware = AA.default;
    Re.compose = SA.default;
  });
  var Ve,
    Mo,
    Ye,
    RA,
    CA,
    gn,
    NA,
    Do = ne(() => {
      "use strict";
      (Ve = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Mo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ye = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (RA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (CA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (gn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (NA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ae,
    LA,
    hn = ne(() => {
      "use strict";
      (Ae = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (LA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var PA,
    gf = ne(() => {
      "use strict";
      PA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var qA,
    MA,
    DA,
    FA,
    GA,
    VA,
    UA,
    Fo,
    hf = ne(() => {
      "use strict";
      hn();
      ({
        TRANSFORM_MOVE: qA,
        TRANSFORM_SCALE: MA,
        TRANSFORM_ROTATE: DA,
        TRANSFORM_SKEW: FA,
        STYLE_SIZE: GA,
        STYLE_FILTER: VA,
        STYLE_FONT_VARIATION: UA,
      } = Ae),
        (Fo = {
          [qA]: !0,
          [MA]: !0,
          [DA]: !0,
          [FA]: !0,
          [GA]: !0,
          [VA]: !0,
          [UA]: !0,
        });
    });
  var le = {};
  Oe(le, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => nx,
    IX2_ANIMATION_FRAME_CHANGED: () => QA,
    IX2_CLEAR_REQUESTED: () => zA,
    IX2_ELEMENT_STATE_CHANGED: () => rx,
    IX2_EVENT_LISTENER_ADDED: () => YA,
    IX2_EVENT_STATE_CHANGED: () => $A,
    IX2_INSTANCE_ADDED: () => JA,
    IX2_INSTANCE_REMOVED: () => tx,
    IX2_INSTANCE_STARTED: () => ex,
    IX2_MEDIA_QUERIES_DEFINED: () => ox,
    IX2_PARAMETER_CHANGED: () => ZA,
    IX2_PLAYBACK_REQUESTED: () => jA,
    IX2_PREVIEW_REQUESTED: () => kA,
    IX2_RAW_DATA_IMPORTED: () => XA,
    IX2_SESSION_INITIALIZED: () => HA,
    IX2_SESSION_STARTED: () => BA,
    IX2_SESSION_STOPPED: () => WA,
    IX2_STOP_REQUESTED: () => KA,
    IX2_TEST_FRAME_RENDERED: () => ax,
    IX2_VIEWPORT_WIDTH_CHANGED: () => ix,
  });
  var XA,
    HA,
    BA,
    WA,
    kA,
    jA,
    KA,
    zA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    vf = ne(() => {
      "use strict";
      (XA = "IX2_RAW_DATA_IMPORTED"),
        (HA = "IX2_SESSION_INITIALIZED"),
        (BA = "IX2_SESSION_STARTED"),
        (WA = "IX2_SESSION_STOPPED"),
        (kA = "IX2_PREVIEW_REQUESTED"),
        (jA = "IX2_PLAYBACK_REQUESTED"),
        (KA = "IX2_STOP_REQUESTED"),
        (zA = "IX2_CLEAR_REQUESTED"),
        (YA = "IX2_EVENT_LISTENER_ADDED"),
        ($A = "IX2_EVENT_STATE_CHANGED"),
        (QA = "IX2_ANIMATION_FRAME_CHANGED"),
        (ZA = "IX2_PARAMETER_CHANGED"),
        (JA = "IX2_INSTANCE_ADDED"),
        (ex = "IX2_INSTANCE_STARTED"),
        (tx = "IX2_INSTANCE_REMOVED"),
        (rx = "IX2_ELEMENT_STATE_CHANGED"),
        (nx = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (ix = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (ox = "IX2_MEDIA_QUERIES_DEFINED"),
        (ax = "IX2_TEST_FRAME_RENDERED");
    });
  var ve = {};
  Oe(ve, {
    ABSTRACT_NODE: () => iS,
    AUTO: () => Kx,
    BACKGROUND: () => Xx,
    BACKGROUND_COLOR: () => Ux,
    BAR_DELIMITER: () => $x,
    BORDER_COLOR: () => Hx,
    BOUNDARY_SELECTOR: () => fx,
    CHILDREN: () => Qx,
    COLON_DELIMITER: () => Yx,
    COLOR: () => Bx,
    COMMA_DELIMITER: () => zx,
    CONFIG_UNIT: () => mx,
    CONFIG_VALUE: () => hx,
    CONFIG_X_UNIT: () => vx,
    CONFIG_X_VALUE: () => dx,
    CONFIG_Y_UNIT: () => Ex,
    CONFIG_Y_VALUE: () => px,
    CONFIG_Z_UNIT: () => yx,
    CONFIG_Z_VALUE: () => gx,
    DISPLAY: () => Wx,
    FILTER: () => Dx,
    FLEX: () => kx,
    FONT_VARIATION_SETTINGS: () => Fx,
    HEIGHT: () => Vx,
    HTML_ELEMENT: () => rS,
    IMMEDIATE_CHILDREN: () => Zx,
    IX2_ID_DELIMITER: () => sx,
    OPACITY: () => Mx,
    PARENT: () => eS,
    PLAIN_OBJECT: () => nS,
    PRESERVE_3D: () => tS,
    RENDER_GENERAL: () => aS,
    RENDER_PLUGIN: () => uS,
    RENDER_STYLE: () => sS,
    RENDER_TRANSFORM: () => oS,
    ROTATE_X: () => Rx,
    ROTATE_Y: () => Cx,
    ROTATE_Z: () => Nx,
    SCALE_3D: () => wx,
    SCALE_X: () => Ax,
    SCALE_Y: () => xx,
    SCALE_Z: () => Sx,
    SIBLINGS: () => Jx,
    SKEW: () => Lx,
    SKEW_X: () => Px,
    SKEW_Y: () => qx,
    TRANSFORM: () => _x,
    TRANSLATE_3D: () => Ox,
    TRANSLATE_X: () => Tx,
    TRANSLATE_Y: () => Ix,
    TRANSLATE_Z: () => bx,
    WF_PAGE: () => ux,
    WIDTH: () => Gx,
    WILL_CHANGE: () => jx,
    W_MOD_IX: () => lx,
    W_MOD_JS: () => cx,
  });
  var sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    gx,
    hx,
    vx,
    Ex,
    yx,
    mx,
    _x,
    Tx,
    Ix,
    bx,
    Ox,
    Ax,
    xx,
    Sx,
    wx,
    Rx,
    Cx,
    Nx,
    Lx,
    Px,
    qx,
    Mx,
    Dx,
    Fx,
    Gx,
    Vx,
    Ux,
    Xx,
    Hx,
    Bx,
    Wx,
    kx,
    jx,
    Kx,
    zx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    sS,
    uS,
    Ef = ne(() => {
      "use strict";
      (sx = "|"),
        (ux = "data-wf-page"),
        (cx = "w-mod-js"),
        (lx = "w-mod-ix"),
        (fx = ".w-dyn-item"),
        (dx = "xValue"),
        (px = "yValue"),
        (gx = "zValue"),
        (hx = "value"),
        (vx = "xUnit"),
        (Ex = "yUnit"),
        (yx = "zUnit"),
        (mx = "unit"),
        (_x = "transform"),
        (Tx = "translateX"),
        (Ix = "translateY"),
        (bx = "translateZ"),
        (Ox = "translate3d"),
        (Ax = "scaleX"),
        (xx = "scaleY"),
        (Sx = "scaleZ"),
        (wx = "scale3d"),
        (Rx = "rotateX"),
        (Cx = "rotateY"),
        (Nx = "rotateZ"),
        (Lx = "skew"),
        (Px = "skewX"),
        (qx = "skewY"),
        (Mx = "opacity"),
        (Dx = "filter"),
        (Fx = "font-variation-settings"),
        (Gx = "width"),
        (Vx = "height"),
        (Ux = "backgroundColor"),
        (Xx = "background"),
        (Hx = "borderColor"),
        (Bx = "color"),
        (Wx = "display"),
        (kx = "flex"),
        (jx = "willChange"),
        (Kx = "AUTO"),
        (zx = ","),
        (Yx = ":"),
        ($x = "|"),
        (Qx = "CHILDREN"),
        (Zx = "IMMEDIATE_CHILDREN"),
        (Jx = "SIBLINGS"),
        (eS = "PARENT"),
        (tS = "preserve-3d"),
        (rS = "HTML_ELEMENT"),
        (nS = "PLAIN_OBJECT"),
        (iS = "ABSTRACT_NODE"),
        (oS = "RENDER_TRANSFORM"),
        (aS = "RENDER_GENERAL"),
        (sS = "RENDER_STYLE"),
        (uS = "RENDER_PLUGIN");
    });
  var yf = {};
  Oe(yf, {
    ActionAppliesTo: () => LA,
    ActionTypeConsts: () => Ae,
    EventAppliesTo: () => Mo,
    EventBasedOn: () => Ye,
    EventContinuousMouseAxes: () => RA,
    EventLimitAffectedElements: () => CA,
    EventTypeConsts: () => Ve,
    IX2EngineActionTypes: () => le,
    IX2EngineConstants: () => ve,
    InteractionTypeConsts: () => PA,
    QuickEffectDirectionConsts: () => NA,
    QuickEffectIds: () => gn,
    ReducedMotionTypes: () => Fo,
  });
  var xe = ne(() => {
    "use strict";
    Do();
    hn();
    gf();
    hf();
    vf();
    Ef();
    hn();
    Do();
  });
  var cS,
    mf,
    _f = ne(() => {
      "use strict";
      xe();
      ({ IX2_RAW_DATA_IMPORTED: cS } = le),
        (mf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case cS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Ft = u((ae) => {
    "use strict";
    Object.defineProperty(ae, "__esModule", { value: !0 });
    var lS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ae.clone = En;
    ae.addLast = bf;
    ae.addFirst = Of;
    ae.removeLast = Af;
    ae.removeFirst = xf;
    ae.insert = Sf;
    ae.removeAt = wf;
    ae.replaceAt = Rf;
    ae.getIn = yn;
    ae.set = mn;
    ae.setIn = _n;
    ae.update = Nf;
    ae.updateIn = Lf;
    ae.merge = Pf;
    ae.mergeDeep = qf;
    ae.mergeIn = Mf;
    ae.omit = Df;
    ae.addDefaults = Ff;
    var Tf = "INVALID_ARGS";
    function If(e) {
      throw new Error(e);
    }
    function Go(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var fS = {}.hasOwnProperty;
    function En(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Go(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Se(e, t, r) {
      var n = r;
      n == null && If(Tf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var p = Go(f);
          if (p.length)
            for (var d = 0; d <= p.length; d++) {
              var h = p[d];
              if (!(e && n[h] !== void 0)) {
                var E = f[h];
                t && vn(n[h]) && vn(E) && (E = Se(e, t, n[h], E)),
                  !(E === void 0 || E === n[h]) &&
                    (i || ((i = !0), (n = En(n))), (n[h] = E));
              }
            }
        }
      }
      return n;
    }
    function vn(e) {
      var t = typeof e > "u" ? "undefined" : lS(e);
      return e != null && (t === "object" || t === "function");
    }
    function bf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Of(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Af(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function xf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Sf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function wf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Rf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function yn(e, t) {
      if ((!Array.isArray(t) && If(Tf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function mn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = En(i);
      return (o[t] = r), o;
    }
    function Cf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          vn(e) && vn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Cf(a, t, r, n + 1);
      }
      return mn(e, o, i);
    }
    function _n(e, t, r) {
      return t.length ? Cf(e, t, r, 0) : r;
    }
    function Nf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return mn(e, t, i);
    }
    function Lf(e, t, r) {
      var n = yn(e, t),
        i = r(n);
      return _n(e, t, i);
    }
    function Pf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Se(!1, !1, e, t, r, n, i, o);
    }
    function qf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Se(!1, !0, e, t, r, n, i, o);
    }
    function Mf(e, t, r, n, i, o, a) {
      var s = yn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          p = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        p[d - 7] = arguments[d];
      return (
        p.length
          ? (c = Se.call.apply(Se, [null, !1, !1, s, r, n, i, o, a].concat(p)))
          : (c = Se(!1, !1, s, r, n, i, o, a)),
        _n(e, t, c)
      );
    }
    function Df(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (fS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Go(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Ff(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Se(!0, !1, e, t, r, n, i, o);
    }
    var dS = {
      clone: En,
      addLast: bf,
      addFirst: Of,
      removeLast: Af,
      removeFirst: xf,
      insert: Sf,
      removeAt: wf,
      replaceAt: Rf,
      getIn: yn,
      set: mn,
      setIn: _n,
      update: Nf,
      updateIn: Lf,
      merge: Pf,
      mergeDeep: qf,
      mergeIn: Mf,
      omit: Df,
      addDefaults: Ff,
    };
    ae.default = dS;
  });
  var Vf,
    pS,
    gS,
    hS,
    vS,
    ES,
    Gf,
    Uf,
    Xf = ne(() => {
      "use strict";
      xe();
      (Vf = $(Ft())),
        ({
          IX2_PREVIEW_REQUESTED: pS,
          IX2_PLAYBACK_REQUESTED: gS,
          IX2_STOP_REQUESTED: hS,
          IX2_CLEAR_REQUESTED: vS,
        } = le),
        (ES = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Gf = Object.create(null, {
          [pS]: { value: "preview" },
          [gS]: { value: "playback" },
          [hS]: { value: "stop" },
          [vS]: { value: "clear" },
        })),
        (Uf = (e = ES, t) => {
          if (t.type in Gf) {
            let r = [Gf[t.type]];
            return (0, Vf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var me,
    yS,
    mS,
    _S,
    TS,
    IS,
    bS,
    OS,
    AS,
    xS,
    SS,
    Hf,
    wS,
    Bf,
    Wf = ne(() => {
      "use strict";
      xe();
      (me = $(Ft())),
        ({
          IX2_SESSION_INITIALIZED: yS,
          IX2_SESSION_STARTED: mS,
          IX2_TEST_FRAME_RENDERED: _S,
          IX2_SESSION_STOPPED: TS,
          IX2_EVENT_LISTENER_ADDED: IS,
          IX2_EVENT_STATE_CHANGED: bS,
          IX2_ANIMATION_FRAME_CHANGED: OS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: AS,
          IX2_VIEWPORT_WIDTH_CHANGED: xS,
          IX2_MEDIA_QUERIES_DEFINED: SS,
        } = le),
        (Hf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (wS = 20),
        (Bf = (e = Hf, t) => {
          switch (t.type) {
            case yS: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, me.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case mS:
              return (0, me.set)(e, "active", !0);
            case _S: {
              let {
                payload: { step: r = wS },
              } = t;
              return (0, me.set)(e, "tick", e.tick + r);
            }
            case TS:
              return Hf;
            case OS: {
              let {
                payload: { now: r },
              } = t;
              return (0, me.set)(e, "tick", r);
            }
            case IS: {
              let r = (0, me.addLast)(e.eventListeners, t.payload);
              return (0, me.set)(e, "eventListeners", r);
            }
            case bS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, me.setIn)(e, ["eventState", r], n);
            }
            case AS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, me.setIn)(e, ["playbackState", r], n);
            }
            case xS: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: c, max: f } = n[a];
                if (r >= c && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, me.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case SS:
              return (0, me.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var jf = u((qH, kf) => {
    function RS() {
      (this.__data__ = []), (this.size = 0);
    }
    kf.exports = RS;
  });
  var Tn = u((MH, Kf) => {
    function CS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Kf.exports = CS;
  });
  var _r = u((DH, zf) => {
    var NS = Tn();
    function LS(e, t) {
      for (var r = e.length; r--; ) if (NS(e[r][0], t)) return r;
      return -1;
    }
    zf.exports = LS;
  });
  var $f = u((FH, Yf) => {
    var PS = _r(),
      qS = Array.prototype,
      MS = qS.splice;
    function DS(e) {
      var t = this.__data__,
        r = PS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : MS.call(t, r, 1), --this.size, !0;
    }
    Yf.exports = DS;
  });
  var Zf = u((GH, Qf) => {
    var FS = _r();
    function GS(e) {
      var t = this.__data__,
        r = FS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Qf.exports = GS;
  });
  var ed = u((VH, Jf) => {
    var VS = _r();
    function US(e) {
      return VS(this.__data__, e) > -1;
    }
    Jf.exports = US;
  });
  var rd = u((UH, td) => {
    var XS = _r();
    function HS(e, t) {
      var r = this.__data__,
        n = XS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    td.exports = HS;
  });
  var Tr = u((XH, nd) => {
    var BS = jf(),
      WS = $f(),
      kS = Zf(),
      jS = ed(),
      KS = rd();
    function Gt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Gt.prototype.clear = BS;
    Gt.prototype.delete = WS;
    Gt.prototype.get = kS;
    Gt.prototype.has = jS;
    Gt.prototype.set = KS;
    nd.exports = Gt;
  });
  var od = u((HH, id) => {
    var zS = Tr();
    function YS() {
      (this.__data__ = new zS()), (this.size = 0);
    }
    id.exports = YS;
  });
  var sd = u((BH, ad) => {
    function $S(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ad.exports = $S;
  });
  var cd = u((WH, ud) => {
    function QS(e) {
      return this.__data__.get(e);
    }
    ud.exports = QS;
  });
  var fd = u((kH, ld) => {
    function ZS(e) {
      return this.__data__.has(e);
    }
    ld.exports = ZS;
  });
  var $e = u((jH, dd) => {
    function JS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    dd.exports = JS;
  });
  var Vo = u((KH, pd) => {
    var e0 = ft(),
      t0 = $e(),
      r0 = "[object AsyncFunction]",
      n0 = "[object Function]",
      i0 = "[object GeneratorFunction]",
      o0 = "[object Proxy]";
    function a0(e) {
      if (!t0(e)) return !1;
      var t = e0(e);
      return t == n0 || t == i0 || t == r0 || t == o0;
    }
    pd.exports = a0;
  });
  var hd = u((zH, gd) => {
    var s0 = Ge(),
      u0 = s0["__core-js_shared__"];
    gd.exports = u0;
  });
  var yd = u((YH, Ed) => {
    var Uo = hd(),
      vd = (function () {
        var e = /[^.]+$/.exec((Uo && Uo.keys && Uo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function c0(e) {
      return !!vd && vd in e;
    }
    Ed.exports = c0;
  });
  var Xo = u(($H, md) => {
    var l0 = Function.prototype,
      f0 = l0.toString;
    function d0(e) {
      if (e != null) {
        try {
          return f0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    md.exports = d0;
  });
  var Td = u((QH, _d) => {
    var p0 = Vo(),
      g0 = yd(),
      h0 = $e(),
      v0 = Xo(),
      E0 = /[\\^$.*+?()[\]{}|]/g,
      y0 = /^\[object .+?Constructor\]$/,
      m0 = Function.prototype,
      _0 = Object.prototype,
      T0 = m0.toString,
      I0 = _0.hasOwnProperty,
      b0 = RegExp(
        "^" +
          T0.call(I0)
            .replace(E0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function O0(e) {
      if (!h0(e) || g0(e)) return !1;
      var t = p0(e) ? b0 : y0;
      return t.test(v0(e));
    }
    _d.exports = O0;
  });
  var bd = u((ZH, Id) => {
    function A0(e, t) {
      return e?.[t];
    }
    Id.exports = A0;
  });
  var dt = u((JH, Od) => {
    var x0 = Td(),
      S0 = bd();
    function w0(e, t) {
      var r = S0(e, t);
      return x0(r) ? r : void 0;
    }
    Od.exports = w0;
  });
  var In = u((eB, Ad) => {
    var R0 = dt(),
      C0 = Ge(),
      N0 = R0(C0, "Map");
    Ad.exports = N0;
  });
  var Ir = u((tB, xd) => {
    var L0 = dt(),
      P0 = L0(Object, "create");
    xd.exports = P0;
  });
  var Rd = u((rB, wd) => {
    var Sd = Ir();
    function q0() {
      (this.__data__ = Sd ? Sd(null) : {}), (this.size = 0);
    }
    wd.exports = q0;
  });
  var Nd = u((nB, Cd) => {
    function M0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Cd.exports = M0;
  });
  var Pd = u((iB, Ld) => {
    var D0 = Ir(),
      F0 = "__lodash_hash_undefined__",
      G0 = Object.prototype,
      V0 = G0.hasOwnProperty;
    function U0(e) {
      var t = this.__data__;
      if (D0) {
        var r = t[e];
        return r === F0 ? void 0 : r;
      }
      return V0.call(t, e) ? t[e] : void 0;
    }
    Ld.exports = U0;
  });
  var Md = u((oB, qd) => {
    var X0 = Ir(),
      H0 = Object.prototype,
      B0 = H0.hasOwnProperty;
    function W0(e) {
      var t = this.__data__;
      return X0 ? t[e] !== void 0 : B0.call(t, e);
    }
    qd.exports = W0;
  });
  var Fd = u((aB, Dd) => {
    var k0 = Ir(),
      j0 = "__lodash_hash_undefined__";
    function K0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = k0 && t === void 0 ? j0 : t),
        this
      );
    }
    Dd.exports = K0;
  });
  var Vd = u((sB, Gd) => {
    var z0 = Rd(),
      Y0 = Nd(),
      $0 = Pd(),
      Q0 = Md(),
      Z0 = Fd();
    function Vt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Vt.prototype.clear = z0;
    Vt.prototype.delete = Y0;
    Vt.prototype.get = $0;
    Vt.prototype.has = Q0;
    Vt.prototype.set = Z0;
    Gd.exports = Vt;
  });
  var Hd = u((uB, Xd) => {
    var Ud = Vd(),
      J0 = Tr(),
      ew = In();
    function tw() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ud(),
          map: new (ew || J0)(),
          string: new Ud(),
        });
    }
    Xd.exports = tw;
  });
  var Wd = u((cB, Bd) => {
    function rw(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Bd.exports = rw;
  });
  var br = u((lB, kd) => {
    var nw = Wd();
    function iw(e, t) {
      var r = e.__data__;
      return nw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    kd.exports = iw;
  });
  var Kd = u((fB, jd) => {
    var ow = br();
    function aw(e) {
      var t = ow(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    jd.exports = aw;
  });
  var Yd = u((dB, zd) => {
    var sw = br();
    function uw(e) {
      return sw(this, e).get(e);
    }
    zd.exports = uw;
  });
  var Qd = u((pB, $d) => {
    var cw = br();
    function lw(e) {
      return cw(this, e).has(e);
    }
    $d.exports = lw;
  });
  var Jd = u((gB, Zd) => {
    var fw = br();
    function dw(e, t) {
      var r = fw(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Zd.exports = dw;
  });
  var bn = u((hB, ep) => {
    var pw = Hd(),
      gw = Kd(),
      hw = Yd(),
      vw = Qd(),
      Ew = Jd();
    function Ut(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ut.prototype.clear = pw;
    Ut.prototype.delete = gw;
    Ut.prototype.get = hw;
    Ut.prototype.has = vw;
    Ut.prototype.set = Ew;
    ep.exports = Ut;
  });
  var rp = u((vB, tp) => {
    var yw = Tr(),
      mw = In(),
      _w = bn(),
      Tw = 200;
    function Iw(e, t) {
      var r = this.__data__;
      if (r instanceof yw) {
        var n = r.__data__;
        if (!mw || n.length < Tw - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _w(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    tp.exports = Iw;
  });
  var Ho = u((EB, np) => {
    var bw = Tr(),
      Ow = od(),
      Aw = sd(),
      xw = cd(),
      Sw = fd(),
      ww = rp();
    function Xt(e) {
      var t = (this.__data__ = new bw(e));
      this.size = t.size;
    }
    Xt.prototype.clear = Ow;
    Xt.prototype.delete = Aw;
    Xt.prototype.get = xw;
    Xt.prototype.has = Sw;
    Xt.prototype.set = ww;
    np.exports = Xt;
  });
  var op = u((yB, ip) => {
    var Rw = "__lodash_hash_undefined__";
    function Cw(e) {
      return this.__data__.set(e, Rw), this;
    }
    ip.exports = Cw;
  });
  var sp = u((mB, ap) => {
    function Nw(e) {
      return this.__data__.has(e);
    }
    ap.exports = Nw;
  });
  var cp = u((_B, up) => {
    var Lw = bn(),
      Pw = op(),
      qw = sp();
    function On(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Lw(); ++t < r; ) this.add(e[t]);
    }
    On.prototype.add = On.prototype.push = Pw;
    On.prototype.has = qw;
    up.exports = On;
  });
  var fp = u((TB, lp) => {
    function Mw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    lp.exports = Mw;
  });
  var pp = u((IB, dp) => {
    function Dw(e, t) {
      return e.has(t);
    }
    dp.exports = Dw;
  });
  var Bo = u((bB, gp) => {
    var Fw = cp(),
      Gw = fp(),
      Vw = pp(),
      Uw = 1,
      Xw = 2;
    function Hw(e, t, r, n, i, o) {
      var a = r & Uw,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        p = o.get(t);
      if (f && p) return f == t && p == e;
      var d = -1,
        h = !0,
        E = r & Xw ? new Fw() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var y = e[d],
          m = t[d];
        if (n) var C = a ? n(m, y, d, t, e, o) : n(y, m, d, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          h = !1;
          break;
        }
        if (E) {
          if (
            !Gw(t, function (b, S) {
              if (!Vw(E, S) && (y === b || i(y, b, r, n, o))) return E.push(S);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(y === m || i(y, m, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    gp.exports = Hw;
  });
  var vp = u((OB, hp) => {
    var Bw = Ge(),
      Ww = Bw.Uint8Array;
    hp.exports = Ww;
  });
  var yp = u((AB, Ep) => {
    function kw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Ep.exports = kw;
  });
  var _p = u((xB, mp) => {
    function jw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    mp.exports = jw;
  });
  var Ap = u((SB, Op) => {
    var Tp = qt(),
      Ip = vp(),
      Kw = Tn(),
      zw = Bo(),
      Yw = yp(),
      $w = _p(),
      Qw = 1,
      Zw = 2,
      Jw = "[object Boolean]",
      eR = "[object Date]",
      tR = "[object Error]",
      rR = "[object Map]",
      nR = "[object Number]",
      iR = "[object RegExp]",
      oR = "[object Set]",
      aR = "[object String]",
      sR = "[object Symbol]",
      uR = "[object ArrayBuffer]",
      cR = "[object DataView]",
      bp = Tp ? Tp.prototype : void 0,
      Wo = bp ? bp.valueOf : void 0;
    function lR(e, t, r, n, i, o, a) {
      switch (r) {
        case cR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case uR:
          return !(e.byteLength != t.byteLength || !o(new Ip(e), new Ip(t)));
        case Jw:
        case eR:
        case nR:
          return Kw(+e, +t);
        case tR:
          return e.name == t.name && e.message == t.message;
        case iR:
        case aR:
          return e == t + "";
        case rR:
          var s = Yw;
        case oR:
          var c = n & Qw;
          if ((s || (s = $w), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= Zw), a.set(e, t);
          var p = zw(s(e), s(t), n, i, o, a);
          return a.delete(e), p;
        case sR:
          if (Wo) return Wo.call(e) == Wo.call(t);
      }
      return !1;
    }
    Op.exports = lR;
  });
  var An = u((wB, xp) => {
    function fR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    xp.exports = fR;
  });
  var pe = u((RB, Sp) => {
    var dR = Array.isArray;
    Sp.exports = dR;
  });
  var ko = u((CB, wp) => {
    var pR = An(),
      gR = pe();
    function hR(e, t, r) {
      var n = t(e);
      return gR(e) ? n : pR(n, r(e));
    }
    wp.exports = hR;
  });
  var Cp = u((NB, Rp) => {
    function vR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Rp.exports = vR;
  });
  var jo = u((LB, Np) => {
    function ER() {
      return [];
    }
    Np.exports = ER;
  });
  var Ko = u((PB, Pp) => {
    var yR = Cp(),
      mR = jo(),
      _R = Object.prototype,
      TR = _R.propertyIsEnumerable,
      Lp = Object.getOwnPropertySymbols,
      IR = Lp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                yR(Lp(e), function (t) {
                  return TR.call(e, t);
                }));
          }
        : mR;
    Pp.exports = IR;
  });
  var Mp = u((qB, qp) => {
    function bR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    qp.exports = bR;
  });
  var Fp = u((MB, Dp) => {
    var OR = ft(),
      AR = tt(),
      xR = "[object Arguments]";
    function SR(e) {
      return AR(e) && OR(e) == xR;
    }
    Dp.exports = SR;
  });
  var Or = u((DB, Up) => {
    var Gp = Fp(),
      wR = tt(),
      Vp = Object.prototype,
      RR = Vp.hasOwnProperty,
      CR = Vp.propertyIsEnumerable,
      NR = Gp(
        (function () {
          return arguments;
        })()
      )
        ? Gp
        : function (e) {
            return wR(e) && RR.call(e, "callee") && !CR.call(e, "callee");
          };
    Up.exports = NR;
  });
  var Hp = u((FB, Xp) => {
    function LR() {
      return !1;
    }
    Xp.exports = LR;
  });
  var xn = u((Ar, Ht) => {
    var PR = Ge(),
      qR = Hp(),
      kp = typeof Ar == "object" && Ar && !Ar.nodeType && Ar,
      Bp = kp && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
      MR = Bp && Bp.exports === kp,
      Wp = MR ? PR.Buffer : void 0,
      DR = Wp ? Wp.isBuffer : void 0,
      FR = DR || qR;
    Ht.exports = FR;
  });
  var Sn = u((GB, jp) => {
    var GR = 9007199254740991,
      VR = /^(?:0|[1-9]\d*)$/;
    function UR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? GR),
        !!t &&
          (r == "number" || (r != "symbol" && VR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    jp.exports = UR;
  });
  var wn = u((VB, Kp) => {
    var XR = 9007199254740991;
    function HR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XR;
    }
    Kp.exports = HR;
  });
  var Yp = u((UB, zp) => {
    var BR = ft(),
      WR = wn(),
      kR = tt(),
      jR = "[object Arguments]",
      KR = "[object Array]",
      zR = "[object Boolean]",
      YR = "[object Date]",
      $R = "[object Error]",
      QR = "[object Function]",
      ZR = "[object Map]",
      JR = "[object Number]",
      eC = "[object Object]",
      tC = "[object RegExp]",
      rC = "[object Set]",
      nC = "[object String]",
      iC = "[object WeakMap]",
      oC = "[object ArrayBuffer]",
      aC = "[object DataView]",
      sC = "[object Float32Array]",
      uC = "[object Float64Array]",
      cC = "[object Int8Array]",
      lC = "[object Int16Array]",
      fC = "[object Int32Array]",
      dC = "[object Uint8Array]",
      pC = "[object Uint8ClampedArray]",
      gC = "[object Uint16Array]",
      hC = "[object Uint32Array]",
      te = {};
    te[sC] =
      te[uC] =
      te[cC] =
      te[lC] =
      te[fC] =
      te[dC] =
      te[pC] =
      te[gC] =
      te[hC] =
        !0;
    te[jR] =
      te[KR] =
      te[oC] =
      te[zR] =
      te[aC] =
      te[YR] =
      te[$R] =
      te[QR] =
      te[ZR] =
      te[JR] =
      te[eC] =
      te[tC] =
      te[rC] =
      te[nC] =
      te[iC] =
        !1;
    function vC(e) {
      return kR(e) && WR(e.length) && !!te[BR(e)];
    }
    zp.exports = vC;
  });
  var Qp = u((XB, $p) => {
    function EC(e) {
      return function (t) {
        return e(t);
      };
    }
    $p.exports = EC;
  });
  var Jp = u((xr, Bt) => {
    var yC = mo(),
      Zp = typeof xr == "object" && xr && !xr.nodeType && xr,
      Sr = Zp && typeof Bt == "object" && Bt && !Bt.nodeType && Bt,
      mC = Sr && Sr.exports === Zp,
      zo = mC && yC.process,
      _C = (function () {
        try {
          var e = Sr && Sr.require && Sr.require("util").types;
          return e || (zo && zo.binding && zo.binding("util"));
        } catch {}
      })();
    Bt.exports = _C;
  });
  var Rn = u((HB, rg) => {
    var TC = Yp(),
      IC = Qp(),
      eg = Jp(),
      tg = eg && eg.isTypedArray,
      bC = tg ? IC(tg) : TC;
    rg.exports = bC;
  });
  var Yo = u((BB, ng) => {
    var OC = Mp(),
      AC = Or(),
      xC = pe(),
      SC = xn(),
      wC = Sn(),
      RC = Rn(),
      CC = Object.prototype,
      NC = CC.hasOwnProperty;
    function LC(e, t) {
      var r = xC(e),
        n = !r && AC(e),
        i = !r && !n && SC(e),
        o = !r && !n && !i && RC(e),
        a = r || n || i || o,
        s = a ? OC(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || NC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              wC(f, c))
          ) &&
          s.push(f);
      return s;
    }
    ng.exports = LC;
  });
  var Cn = u((WB, ig) => {
    var PC = Object.prototype;
    function qC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || PC;
      return e === r;
    }
    ig.exports = qC;
  });
  var ag = u((kB, og) => {
    var MC = _o(),
      DC = MC(Object.keys, Object);
    og.exports = DC;
  });
  var Nn = u((jB, sg) => {
    var FC = Cn(),
      GC = ag(),
      VC = Object.prototype,
      UC = VC.hasOwnProperty;
    function XC(e) {
      if (!FC(e)) return GC(e);
      var t = [];
      for (var r in Object(e)) UC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    sg.exports = XC;
  });
  var Tt = u((KB, ug) => {
    var HC = Vo(),
      BC = wn();
    function WC(e) {
      return e != null && BC(e.length) && !HC(e);
    }
    ug.exports = WC;
  });
  var wr = u((zB, cg) => {
    var kC = Yo(),
      jC = Nn(),
      KC = Tt();
    function zC(e) {
      return KC(e) ? kC(e) : jC(e);
    }
    cg.exports = zC;
  });
  var fg = u((YB, lg) => {
    var YC = ko(),
      $C = Ko(),
      QC = wr();
    function ZC(e) {
      return YC(e, QC, $C);
    }
    lg.exports = ZC;
  });
  var gg = u(($B, pg) => {
    var dg = fg(),
      JC = 1,
      eN = Object.prototype,
      tN = eN.hasOwnProperty;
    function rN(e, t, r, n, i, o) {
      var a = r & JC,
        s = dg(e),
        c = s.length,
        f = dg(t),
        p = f.length;
      if (c != p && !a) return !1;
      for (var d = c; d--; ) {
        var h = s[d];
        if (!(a ? h in t : tN.call(t, h))) return !1;
      }
      var E = o.get(e),
        y = o.get(t);
      if (E && y) return E == t && y == e;
      var m = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++d < c; ) {
        h = s[d];
        var b = e[h],
          S = t[h];
        if (n) var T = a ? n(S, b, h, t, e, o) : n(b, S, h, e, t, o);
        if (!(T === void 0 ? b === S || i(b, S, r, n, o) : T)) {
          m = !1;
          break;
        }
        C || (C = h == "constructor");
      }
      if (m && !C) {
        var R = e.constructor,
          N = t.constructor;
        R != N &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof R == "function" &&
            R instanceof R &&
            typeof N == "function" &&
            N instanceof N
          ) &&
          (m = !1);
      }
      return o.delete(e), o.delete(t), m;
    }
    pg.exports = rN;
  });
  var vg = u((QB, hg) => {
    var nN = dt(),
      iN = Ge(),
      oN = nN(iN, "DataView");
    hg.exports = oN;
  });
  var yg = u((ZB, Eg) => {
    var aN = dt(),
      sN = Ge(),
      uN = aN(sN, "Promise");
    Eg.exports = uN;
  });
  var _g = u((JB, mg) => {
    var cN = dt(),
      lN = Ge(),
      fN = cN(lN, "Set");
    mg.exports = fN;
  });
  var $o = u((eW, Tg) => {
    var dN = dt(),
      pN = Ge(),
      gN = dN(pN, "WeakMap");
    Tg.exports = gN;
  });
  var Ln = u((tW, wg) => {
    var Qo = vg(),
      Zo = In(),
      Jo = yg(),
      ea = _g(),
      ta = $o(),
      Sg = ft(),
      Wt = Xo(),
      Ig = "[object Map]",
      hN = "[object Object]",
      bg = "[object Promise]",
      Og = "[object Set]",
      Ag = "[object WeakMap]",
      xg = "[object DataView]",
      vN = Wt(Qo),
      EN = Wt(Zo),
      yN = Wt(Jo),
      mN = Wt(ea),
      _N = Wt(ta),
      It = Sg;
    ((Qo && It(new Qo(new ArrayBuffer(1))) != xg) ||
      (Zo && It(new Zo()) != Ig) ||
      (Jo && It(Jo.resolve()) != bg) ||
      (ea && It(new ea()) != Og) ||
      (ta && It(new ta()) != Ag)) &&
      (It = function (e) {
        var t = Sg(e),
          r = t == hN ? e.constructor : void 0,
          n = r ? Wt(r) : "";
        if (n)
          switch (n) {
            case vN:
              return xg;
            case EN:
              return Ig;
            case yN:
              return bg;
            case mN:
              return Og;
            case _N:
              return Ag;
          }
        return t;
      });
    wg.exports = It;
  });
  var Dg = u((rW, Mg) => {
    var ra = Ho(),
      TN = Bo(),
      IN = Ap(),
      bN = gg(),
      Rg = Ln(),
      Cg = pe(),
      Ng = xn(),
      ON = Rn(),
      AN = 1,
      Lg = "[object Arguments]",
      Pg = "[object Array]",
      Pn = "[object Object]",
      xN = Object.prototype,
      qg = xN.hasOwnProperty;
    function SN(e, t, r, n, i, o) {
      var a = Cg(e),
        s = Cg(t),
        c = a ? Pg : Rg(e),
        f = s ? Pg : Rg(t);
      (c = c == Lg ? Pn : c), (f = f == Lg ? Pn : f);
      var p = c == Pn,
        d = f == Pn,
        h = c == f;
      if (h && Ng(e)) {
        if (!Ng(t)) return !1;
        (a = !0), (p = !1);
      }
      if (h && !p)
        return (
          o || (o = new ra()),
          a || ON(e) ? TN(e, t, r, n, i, o) : IN(e, t, c, r, n, i, o)
        );
      if (!(r & AN)) {
        var E = p && qg.call(e, "__wrapped__"),
          y = d && qg.call(t, "__wrapped__");
        if (E || y) {
          var m = E ? e.value() : e,
            C = y ? t.value() : t;
          return o || (o = new ra()), i(m, C, r, n, o);
        }
      }
      return h ? (o || (o = new ra()), bN(e, t, r, n, i, o)) : !1;
    }
    Mg.exports = SN;
  });
  var na = u((nW, Vg) => {
    var wN = Dg(),
      Fg = tt();
    function Gg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Fg(e) && !Fg(t))
        ? e !== e && t !== t
        : wN(e, t, r, n, Gg, i);
    }
    Vg.exports = Gg;
  });
  var Xg = u((iW, Ug) => {
    var RN = Ho(),
      CN = na(),
      NN = 1,
      LN = 2;
    function PN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          p = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new RN();
          if (n) var h = n(f, p, c, e, t, d);
          if (!(h === void 0 ? CN(p, f, NN | LN, n, d) : h)) return !1;
        }
      }
      return !0;
    }
    Ug.exports = PN;
  });
  var ia = u((oW, Hg) => {
    var qN = $e();
    function MN(e) {
      return e === e && !qN(e);
    }
    Hg.exports = MN;
  });
  var Wg = u((aW, Bg) => {
    var DN = ia(),
      FN = wr();
    function GN(e) {
      for (var t = FN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, DN(i)];
      }
      return t;
    }
    Bg.exports = GN;
  });
  var oa = u((sW, kg) => {
    function VN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    kg.exports = VN;
  });
  var Kg = u((uW, jg) => {
    var UN = Xg(),
      XN = Wg(),
      HN = oa();
    function BN(e) {
      var t = XN(e);
      return t.length == 1 && t[0][2]
        ? HN(t[0][0], t[0][1])
        : function (r) {
            return r === e || UN(r, e, t);
          };
    }
    jg.exports = BN;
  });
  var Rr = u((cW, zg) => {
    var WN = ft(),
      kN = tt(),
      jN = "[object Symbol]";
    function KN(e) {
      return typeof e == "symbol" || (kN(e) && WN(e) == jN);
    }
    zg.exports = KN;
  });
  var qn = u((lW, Yg) => {
    var zN = pe(),
      YN = Rr(),
      $N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      QN = /^\w*$/;
    function ZN(e, t) {
      if (zN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        YN(e)
        ? !0
        : QN.test(e) || !$N.test(e) || (t != null && e in Object(t));
    }
    Yg.exports = ZN;
  });
  var Zg = u((fW, Qg) => {
    var $g = bn(),
      JN = "Expected a function";
    function aa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(JN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (aa.Cache || $g)()), r;
    }
    aa.Cache = $g;
    Qg.exports = aa;
  });
  var eh = u((dW, Jg) => {
    var eL = Zg(),
      tL = 500;
    function rL(e) {
      var t = eL(e, function (n) {
          return r.size === tL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Jg.exports = rL;
  });
  var rh = u((pW, th) => {
    var nL = eh(),
      iL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oL = /\\(\\)?/g,
      aL = nL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(iL, function (r, n, i, o) {
            t.push(i ? o.replace(oL, "$1") : n || r);
          }),
          t
        );
      });
    th.exports = aL;
  });
  var sa = u((gW, nh) => {
    function sL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    nh.exports = sL;
  });
  var ch = u((hW, uh) => {
    var ih = qt(),
      uL = sa(),
      cL = pe(),
      lL = Rr(),
      fL = 1 / 0,
      oh = ih ? ih.prototype : void 0,
      ah = oh ? oh.toString : void 0;
    function sh(e) {
      if (typeof e == "string") return e;
      if (cL(e)) return uL(e, sh) + "";
      if (lL(e)) return ah ? ah.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -fL ? "-0" : t;
    }
    uh.exports = sh;
  });
  var fh = u((vW, lh) => {
    var dL = ch();
    function pL(e) {
      return e == null ? "" : dL(e);
    }
    lh.exports = pL;
  });
  var Cr = u((EW, dh) => {
    var gL = pe(),
      hL = qn(),
      vL = rh(),
      EL = fh();
    function yL(e, t) {
      return gL(e) ? e : hL(e, t) ? [e] : vL(EL(e));
    }
    dh.exports = yL;
  });
  var kt = u((yW, ph) => {
    var mL = Rr(),
      _L = 1 / 0;
    function TL(e) {
      if (typeof e == "string" || mL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -_L ? "-0" : t;
    }
    ph.exports = TL;
  });
  var Mn = u((mW, gh) => {
    var IL = Cr(),
      bL = kt();
    function OL(e, t) {
      t = IL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[bL(t[r++])];
      return r && r == n ? e : void 0;
    }
    gh.exports = OL;
  });
  var Dn = u((_W, hh) => {
    var AL = Mn();
    function xL(e, t, r) {
      var n = e == null ? void 0 : AL(e, t);
      return n === void 0 ? r : n;
    }
    hh.exports = xL;
  });
  var Eh = u((TW, vh) => {
    function SL(e, t) {
      return e != null && t in Object(e);
    }
    vh.exports = SL;
  });
  var mh = u((IW, yh) => {
    var wL = Cr(),
      RL = Or(),
      CL = pe(),
      NL = Sn(),
      LL = wn(),
      PL = kt();
    function qL(e, t, r) {
      t = wL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = PL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && LL(i) && NL(a, i) && (CL(e) || RL(e)));
    }
    yh.exports = qL;
  });
  var Th = u((bW, _h) => {
    var ML = Eh(),
      DL = mh();
    function FL(e, t) {
      return e != null && DL(e, t, ML);
    }
    _h.exports = FL;
  });
  var bh = u((OW, Ih) => {
    var GL = na(),
      VL = Dn(),
      UL = Th(),
      XL = qn(),
      HL = ia(),
      BL = oa(),
      WL = kt(),
      kL = 1,
      jL = 2;
    function KL(e, t) {
      return XL(e) && HL(t)
        ? BL(WL(e), t)
        : function (r) {
            var n = VL(r, e);
            return n === void 0 && n === t ? UL(r, e) : GL(t, n, kL | jL);
          };
    }
    Ih.exports = KL;
  });
  var Fn = u((AW, Oh) => {
    function zL(e) {
      return e;
    }
    Oh.exports = zL;
  });
  var ua = u((xW, Ah) => {
    function YL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ah.exports = YL;
  });
  var Sh = u((SW, xh) => {
    var $L = Mn();
    function QL(e) {
      return function (t) {
        return $L(t, e);
      };
    }
    xh.exports = QL;
  });
  var Rh = u((wW, wh) => {
    var ZL = ua(),
      JL = Sh(),
      eP = qn(),
      tP = kt();
    function rP(e) {
      return eP(e) ? ZL(tP(e)) : JL(e);
    }
    wh.exports = rP;
  });
  var pt = u((RW, Ch) => {
    var nP = Kg(),
      iP = bh(),
      oP = Fn(),
      aP = pe(),
      sP = Rh();
    function uP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? oP
        : typeof e == "object"
        ? aP(e)
          ? iP(e[0], e[1])
          : nP(e)
        : sP(e);
    }
    Ch.exports = uP;
  });
  var ca = u((CW, Nh) => {
    var cP = pt(),
      lP = Tt(),
      fP = wr();
    function dP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!lP(t)) {
          var o = cP(r, 3);
          (t = fP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Nh.exports = dP;
  });
  var la = u((NW, Lh) => {
    function pP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Lh.exports = pP;
  });
  var qh = u((LW, Ph) => {
    var gP = /\s/;
    function hP(e) {
      for (var t = e.length; t-- && gP.test(e.charAt(t)); );
      return t;
    }
    Ph.exports = hP;
  });
  var Dh = u((PW, Mh) => {
    var vP = qh(),
      EP = /^\s+/;
    function yP(e) {
      return e && e.slice(0, vP(e) + 1).replace(EP, "");
    }
    Mh.exports = yP;
  });
  var Gn = u((qW, Vh) => {
    var mP = Dh(),
      Fh = $e(),
      _P = Rr(),
      Gh = 0 / 0,
      TP = /^[-+]0x[0-9a-f]+$/i,
      IP = /^0b[01]+$/i,
      bP = /^0o[0-7]+$/i,
      OP = parseInt;
    function AP(e) {
      if (typeof e == "number") return e;
      if (_P(e)) return Gh;
      if (Fh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Fh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = mP(e);
      var r = IP.test(e);
      return r || bP.test(e) ? OP(e.slice(2), r ? 2 : 8) : TP.test(e) ? Gh : +e;
    }
    Vh.exports = AP;
  });
  var Hh = u((MW, Xh) => {
    var xP = Gn(),
      Uh = 1 / 0,
      SP = 17976931348623157e292;
    function wP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = xP(e)), e === Uh || e === -Uh)) {
        var t = e < 0 ? -1 : 1;
        return t * SP;
      }
      return e === e ? e : 0;
    }
    Xh.exports = wP;
  });
  var fa = u((DW, Bh) => {
    var RP = Hh();
    function CP(e) {
      var t = RP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Bh.exports = CP;
  });
  var kh = u((FW, Wh) => {
    var NP = la(),
      LP = pt(),
      PP = fa(),
      qP = Math.max;
    function MP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : PP(r);
      return i < 0 && (i = qP(n + i, 0)), NP(e, LP(t, 3), i);
    }
    Wh.exports = MP;
  });
  var da = u((GW, jh) => {
    var DP = ca(),
      FP = kh(),
      GP = DP(FP);
    jh.exports = GP;
  });
  var Yh = {};
  Oe(Yh, {
    ELEMENT_MATCHES: () => VP,
    FLEX_PREFIXED: () => pa,
    IS_BROWSER_ENV: () => Ue,
    TRANSFORM_PREFIXED: () => gt,
    TRANSFORM_STYLE_PREFIXED: () => Un,
    withBrowser: () => Vn,
  });
  var zh,
    Ue,
    Vn,
    VP,
    pa,
    gt,
    Kh,
    Un,
    Xn = ne(() => {
      "use strict";
      (zh = $(da())),
        (Ue = typeof window < "u"),
        (Vn = (e, t) => (Ue ? e() : t)),
        (VP = Vn(() =>
          (0, zh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (pa = Vn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (gt = Vn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Kh = gt.split("transform")[0]),
        (Un = Kh ? Kh + "TransformStyle" : "transformStyle");
    });
  var ga = u((VW, ev) => {
    var UP = 4,
      XP = 0.001,
      HP = 1e-7,
      BP = 10,
      Nr = 11,
      Hn = 1 / (Nr - 1),
      WP = typeof Float32Array == "function";
    function $h(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Qh(e, t) {
      return 3 * t - 6 * e;
    }
    function Zh(e) {
      return 3 * e;
    }
    function Bn(e, t, r) {
      return (($h(t, r) * e + Qh(t, r)) * e + Zh(t)) * e;
    }
    function Jh(e, t, r) {
      return 3 * $h(t, r) * e * e + 2 * Qh(t, r) * e + Zh(t);
    }
    function kP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Bn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > HP && ++s < BP);
      return a;
    }
    function jP(e, t, r, n) {
      for (var i = 0; i < UP; ++i) {
        var o = Jh(t, r, n);
        if (o === 0) return t;
        var a = Bn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ev.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = WP ? new Float32Array(Nr) : new Array(Nr);
      if (t !== r || n !== i)
        for (var a = 0; a < Nr; ++a) o[a] = Bn(a * Hn, t, n);
      function s(c) {
        for (var f = 0, p = 1, d = Nr - 1; p !== d && o[p] <= c; ++p) f += Hn;
        --p;
        var h = (c - o[p]) / (o[p + 1] - o[p]),
          E = f + h * Hn,
          y = Jh(E, t, n);
        return y >= XP ? jP(c, E, t, n) : y === 0 ? E : kP(c, f, f + Hn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Bn(s(f), r, i);
      };
    };
  });
  var Pr = {};
  Oe(Pr, {
    bounce: () => wq,
    bouncePast: () => Rq,
    ease: () => KP,
    easeIn: () => zP,
    easeInOut: () => $P,
    easeOut: () => YP,
    inBack: () => mq,
    inCirc: () => hq,
    inCubic: () => eq,
    inElastic: () => Iq,
    inExpo: () => dq,
    inOutBack: () => Tq,
    inOutCirc: () => Eq,
    inOutCubic: () => rq,
    inOutElastic: () => Oq,
    inOutExpo: () => gq,
    inOutQuad: () => JP,
    inOutQuart: () => oq,
    inOutQuint: () => uq,
    inOutSine: () => fq,
    inQuad: () => QP,
    inQuart: () => nq,
    inQuint: () => aq,
    inSine: () => cq,
    outBack: () => _q,
    outBounce: () => yq,
    outCirc: () => vq,
    outCubic: () => tq,
    outElastic: () => bq,
    outExpo: () => pq,
    outQuad: () => ZP,
    outQuart: () => iq,
    outQuint: () => sq,
    outSine: () => lq,
    swingFrom: () => xq,
    swingFromTo: () => Aq,
    swingTo: () => Sq,
  });
  function QP(e) {
    return Math.pow(e, 2);
  }
  function ZP(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function JP(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function eq(e) {
    return Math.pow(e, 3);
  }
  function tq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function rq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function nq(e) {
    return Math.pow(e, 4);
  }
  function iq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function oq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function aq(e) {
    return Math.pow(e, 5);
  }
  function sq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function uq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function cq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function lq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function fq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function dq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function pq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function gq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function hq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function vq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Eq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function yq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function mq(e) {
    let t = rt;
    return e * e * ((t + 1) * e - t);
  }
  function _q(e) {
    let t = rt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Tq(e) {
    let t = rt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Iq(e) {
    let t = rt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function bq(e) {
    let t = rt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Oq(e) {
    let t = rt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Aq(e) {
    let t = rt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function xq(e) {
    let t = rt;
    return e * e * ((t + 1) * e - t);
  }
  function Sq(e) {
    let t = rt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function wq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Rq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Lr,
    rt,
    KP,
    zP,
    YP,
    $P,
    ha = ne(() => {
      "use strict";
      (Lr = $(ga())),
        (rt = 1.70158),
        (KP = (0, Lr.default)(0.25, 0.1, 0.25, 1)),
        (zP = (0, Lr.default)(0.42, 0, 1, 1)),
        (YP = (0, Lr.default)(0, 0, 0.58, 1)),
        ($P = (0, Lr.default)(0.42, 0, 0.58, 1));
    });
  var rv = {};
  Oe(rv, {
    applyEasing: () => Nq,
    createBezierEasing: () => Cq,
    optimizeFloat: () => qr,
  });
  function qr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Cq(e) {
    return (0, tv.default)(...e);
  }
  function Nq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : qr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Pr[e] ? Pr[e](t) : t);
  }
  var tv,
    va = ne(() => {
      "use strict";
      ha();
      tv = $(ga());
    });
  var ov = {};
  Oe(ov, {
    createElementState: () => iv,
    ixElements: () => kq,
    mergeActionState: () => Ea,
  });
  function iv(e, t, r, n, i) {
    let o =
      r === Lq ? (0, jt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, jt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ea(e, t, r, n, i) {
    let o = Kq(i);
    return (0, jt.mergeIn)(e, [t, Wq, r], n, o);
  }
  function Kq(e) {
    let { config: t } = e;
    return jq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var jt,
    XW,
    Lq,
    HW,
    Pq,
    qq,
    Mq,
    Dq,
    Fq,
    Gq,
    Vq,
    Uq,
    Xq,
    Hq,
    Bq,
    nv,
    Wq,
    kq,
    jq,
    av = ne(() => {
      "use strict";
      jt = $(Ft());
      xe();
      ({
        HTML_ELEMENT: XW,
        PLAIN_OBJECT: Lq,
        ABSTRACT_NODE: HW,
        CONFIG_X_VALUE: Pq,
        CONFIG_Y_VALUE: qq,
        CONFIG_Z_VALUE: Mq,
        CONFIG_VALUE: Dq,
        CONFIG_X_UNIT: Fq,
        CONFIG_Y_UNIT: Gq,
        CONFIG_Z_UNIT: Vq,
        CONFIG_UNIT: Uq,
      } = ve),
        ({
          IX2_SESSION_STOPPED: Xq,
          IX2_INSTANCE_ADDED: Hq,
          IX2_ELEMENT_STATE_CHANGED: Bq,
        } = le),
        (nv = {}),
        (Wq = "refState"),
        (kq = (e = nv, t = {}) => {
          switch (t.type) {
            case Xq:
              return nv;
            case Hq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, jt.getIn)(c, [r, n]) !== n && (c = iv(c, n, a, r, o)),
                Ea(c, r, s, i, o)
              );
            }
            case Bq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ea(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      jq = [
        [Pq, Fq],
        [qq, Gq],
        [Mq, Vq],
        [Dq, Uq],
      ];
    });
  var sv = u((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.renderPlugin =
      ge.getPluginOrigin =
      ge.getPluginDuration =
      ge.getPluginDestination =
      ge.getPluginConfig =
      ge.createPluginInstance =
      ge.clearPlugin =
        void 0;
    var zq = (e) => e.value;
    ge.getPluginConfig = zq;
    var Yq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    ge.getPluginDuration = Yq;
    var $q = (e) => e || { value: 0 };
    ge.getPluginOrigin = $q;
    var Qq = (e) => ({ value: e.value });
    ge.getPluginDestination = Qq;
    var Zq = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    ge.createPluginInstance = Zq;
    var Jq = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    ge.renderPlugin = Jq;
    var eM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    ge.clearPlugin = eM;
  });
  var cv = u((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    he.renderPlugin =
      he.getPluginOrigin =
      he.getPluginDuration =
      he.getPluginDestination =
      he.getPluginConfig =
      he.createPluginInstance =
      he.clearPlugin =
        void 0;
    var tM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      rM = () => window.Webflow.require("spline"),
      nM = (e, t) => e.filter((r) => !t.includes(r)),
      iM = (e, t) => e.value[t];
    he.getPluginConfig = iM;
    var oM = () => null;
    he.getPluginDuration = oM;
    var uv = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      aM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = nM(n, o);
          return a.length ? a.reduce((c, f) => ((c[f] = uv[f]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = uv[a]), o), {});
      };
    he.getPluginOrigin = aM;
    var sM = (e) => e.value;
    he.getPluginDestination = sM;
    var uM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? tM(i) : null;
    };
    he.createPluginInstance = uM;
    var cM = (e, t, r) => {
      let n = rM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let c = o && s.findObjectById(o);
          if (!c) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (c.position.x = f.positionX),
            f.positionY != null && (c.position.y = f.positionY),
            f.positionZ != null && (c.position.z = f.positionZ),
            f.rotationX != null && (c.rotation.x = f.rotationX),
            f.rotationY != null && (c.rotation.y = f.rotationY),
            f.rotationZ != null && (c.rotation.z = f.rotationZ),
            f.scaleX != null && (c.scale.x = f.scaleX),
            f.scaleY != null && (c.scale.y = f.scaleY),
            f.scaleZ != null && (c.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    he.renderPlugin = cM;
    var lM = () => null;
    he.clearPlugin = lM;
  });
  var fv = u((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    fe.getPluginOrigin =
      fe.getPluginDuration =
      fe.getPluginDestination =
      fe.getPluginConfig =
      fe.createPluginInstance =
      fe.clearPlugin =
        void 0;
    fe.normalizeColor = lv;
    fe.renderPlugin = void 0;
    function lv(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - p / 2,
          E,
          y,
          m;
        s >= 0 && s < 60
          ? ((E = p), (y = d), (m = 0))
          : s >= 60 && s < 120
          ? ((E = d), (y = p), (m = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (y = p), (m = d))
          : s >= 180 && s < 240
          ? ((E = 0), (y = d), (m = p))
          : s >= 240 && s < 300
          ? ((E = d), (y = 0), (m = p))
          : ((E = p), (y = 0), (m = d)),
          (t = Math.round((E + h) * 255)),
          (r = Math.round((y + h) * 255)),
          (n = Math.round((m + h) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - p / 2,
          E,
          y,
          m;
        s >= 0 && s < 60
          ? ((E = p), (y = d), (m = 0))
          : s >= 60 && s < 120
          ? ((E = d), (y = p), (m = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (y = p), (m = d))
          : s >= 180 && s < 240
          ? ((E = 0), (y = d), (m = p))
          : s >= 240 && s < 300
          ? ((E = d), (y = 0), (m = p))
          : ((E = p), (y = 0), (m = d)),
          (t = Math.round((E + h) * 255)),
          (r = Math.round((y + h) * 255)),
          (n = Math.round((m + h) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var fM = (e, t) => e.value[t];
    fe.getPluginConfig = fM;
    var dM = () => null;
    fe.getPluginDuration = dM;
    var pM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return lv(i);
    };
    fe.getPluginOrigin = pM;
    var gM = (e) => e.value;
    fe.getPluginDestination = gM;
    var hM = () => null;
    fe.createPluginInstance = hM;
    var vM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: c, blue: f, alpha: p } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          f != null &&
          c != null &&
          p != null &&
          (d = `rgba(${s}, ${c}, ${f}, ${p})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    fe.renderPlugin = vM;
    var EM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    fe.clearPlugin = EM;
  });
  var dv = u((Wn) => {
    "use strict";
    var ma = en().default;
    Object.defineProperty(Wn, "__esModule", { value: !0 });
    Wn.pluginMethodMap = void 0;
    var ya = (xe(), We(yf)),
      yM = ma(sv()),
      mM = ma(cv()),
      _M = ma(fv()),
      jW = (Wn.pluginMethodMap = new Map([
        [ya.ActionTypeConsts.PLUGIN_LOTTIE, { ...yM }],
        [ya.ActionTypeConsts.PLUGIN_SPLINE, { ...mM }],
        [ya.ActionTypeConsts.PLUGIN_VARIABLE, { ..._M }],
      ]));
  });
  var pv = {};
  Oe(pv, {
    clearPlugin: () => Aa,
    createPluginInstance: () => IM,
    getPluginConfig: () => Ta,
    getPluginDestination: () => ba,
    getPluginDuration: () => TM,
    getPluginOrigin: () => Ia,
    isPluginType: () => bt,
    renderPlugin: () => Oa,
  });
  function bt(e) {
    return _a.pluginMethodMap.has(e);
  }
  var _a,
    Ot,
    Ta,
    Ia,
    TM,
    ba,
    IM,
    Oa,
    Aa,
    xa = ne(() => {
      "use strict";
      Xn();
      _a = $(dv());
      (Ot = (e) => (t) => {
        if (!Ue) return () => null;
        let r = _a.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ta = Ot("getPluginConfig")),
        (Ia = Ot("getPluginOrigin")),
        (TM = Ot("getPluginDuration")),
        (ba = Ot("getPluginDestination")),
        (IM = Ot("createPluginInstance")),
        (Oa = Ot("renderPlugin")),
        (Aa = Ot("clearPlugin"));
    });
  var hv = u((YW, gv) => {
    function bM(e, t) {
      return e == null || e !== e ? t : e;
    }
    gv.exports = bM;
  });
  var Ev = u(($W, vv) => {
    function OM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    vv.exports = OM;
  });
  var mv = u((QW, yv) => {
    function AM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    yv.exports = AM;
  });
  var Tv = u((ZW, _v) => {
    var xM = mv(),
      SM = xM();
    _v.exports = SM;
  });
  var Sa = u((JW, Iv) => {
    var wM = Tv(),
      RM = wr();
    function CM(e, t) {
      return e && wM(e, t, RM);
    }
    Iv.exports = CM;
  });
  var Ov = u((ek, bv) => {
    var NM = Tt();
    function LM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!NM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    bv.exports = LM;
  });
  var wa = u((tk, Av) => {
    var PM = Sa(),
      qM = Ov(),
      MM = qM(PM);
    Av.exports = MM;
  });
  var Sv = u((rk, xv) => {
    function DM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    xv.exports = DM;
  });
  var Rv = u((nk, wv) => {
    var FM = Ev(),
      GM = wa(),
      VM = pt(),
      UM = Sv(),
      XM = pe();
    function HM(e, t, r) {
      var n = XM(e) ? FM : UM,
        i = arguments.length < 3;
      return n(e, VM(t, 4), r, i, GM);
    }
    wv.exports = HM;
  });
  var Nv = u((ik, Cv) => {
    var BM = la(),
      WM = pt(),
      kM = fa(),
      jM = Math.max,
      KM = Math.min;
    function zM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = kM(r)), (i = r < 0 ? jM(n + i, 0) : KM(i, n - 1))),
        BM(e, WM(t, 3), i, !0)
      );
    }
    Cv.exports = zM;
  });
  var Pv = u((ok, Lv) => {
    var YM = ca(),
      $M = Nv(),
      QM = YM($M);
    Lv.exports = QM;
  });
  function qv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function JM(e, t) {
    if (qv(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!ZM.call(t, r[i]) || !qv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var ZM,
    Ra,
    Mv = ne(() => {
      "use strict";
      ZM = Object.prototype.hasOwnProperty;
      Ra = JM;
    });
  var Zv = {};
  Oe(Zv, {
    cleanupHTMLElement: () => $1,
    clearAllStyles: () => Y1,
    clearObjectCache: () => v1,
    getActionListProgress: () => Z1,
    getAffectedElements: () => qa,
    getComputedStyle: () => O1,
    getDestinationValues: () => N1,
    getElementId: () => _1,
    getInstanceId: () => y1,
    getInstanceOrigin: () => S1,
    getItemConfigByKey: () => C1,
    getMaxDurationItemIndex: () => Qv,
    getNamespacedParameterId: () => tD,
    getRenderType: () => zv,
    getStyleProp: () => L1,
    mediaQueriesEqual: () => nD,
    observeStore: () => b1,
    reduceListToGroup: () => J1,
    reifyState: () => T1,
    renderHTMLElement: () => P1,
    shallowEqual: () => Ra,
    shouldAllowMediaQuery: () => rD,
    shouldNamespaceEventParameter: () => eD,
    stringifyTarget: () => iD,
  });
  function v1() {
    kn.clear();
  }
  function y1() {
    return "i" + E1++;
  }
  function _1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + m1++;
  }
  function T1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, Yn.default)(
        e,
        (a, s) => {
          let { eventTypeId: c } = s;
          return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function b1({ store: e, select: t, onChange: r, comparator: n = I1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(c),
      s = t(i());
    function c() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Gv(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function qa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (O, g) =>
          O.concat(
            qa({
              config: { target: g },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: c,
        getChildElements: f,
        getSiblingElements: p,
        matchSelector: d,
        elementContains: h,
        isSiblingNode: E,
      } = i,
      { target: y } = e;
    if (!y) return [];
    let {
      id: m,
      objectId: C,
      selector: b,
      selectorGuids: S,
      appliesTo: T,
      useEventTarget: R,
    } = Gv(y);
    if (C) return [kn.has(C) ? kn.get(C) : kn.set(C, {}).get(C)];
    if (T === Mo.PAGE) {
      let O = a(m);
      return O ? [O] : [];
    }
    let w = (t?.action?.config?.affectedElements ?? {})[m || b] || {},
      F = !!(w.id || w.selector),
      G,
      V,
      X,
      M = t && s(Gv(t.target));
    if (
      (F
        ? ((G = w.limitAffectedElements), (V = M), (X = s(w)))
        : (V = X = s({ id: m, selector: b, selectorGuids: S })),
      t && R)
    ) {
      let O = r && (X || R === !0) ? [r] : c(M);
      if (X) {
        if (R === p1) return c(X).filter((g) => O.some((A) => h(g, A)));
        if (R === Dv) return c(X).filter((g) => O.some((A) => h(A, g)));
        if (R === Fv) return c(X).filter((g) => O.some((A) => E(A, g)));
      }
      return O;
    }
    return V == null || X == null
      ? []
      : Ue && n
      ? c(X).filter((O) => n.contains(O))
      : G === Dv
      ? c(V, X)
      : G === d1
      ? f(c(V)).filter(d(X))
      : G === Fv
      ? p(c(V)).filter(d(X))
      : c(X);
  }
  function O1({ element: e, actionItem: t }) {
    if (!Ue) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Qt:
      case Zt:
      case Jt:
      case er:
      case Qn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function S1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (bt(a)) return Ia(a)(t[a], n);
    switch (n.actionTypeId) {
      case zt:
      case Yt:
      case $t:
      case Gr:
        return t[n.actionTypeId] || Ma[n.actionTypeId];
      case Vr:
        return A1(t[n.actionTypeId], n.config.filters);
      case Ur:
        return x1(t[n.actionTypeId], n.config.fontVariations);
      case kv:
        return { value: (0, nt.default)(parseFloat(o(e, Kn)), 1) };
      case Qt: {
        let s = o(e, Qe),
          c = o(e, Ze),
          f,
          p;
        return (
          n.config.widthUnit === ht
            ? (f = Vv.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, nt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === ht
            ? (p = Vv.test(c) ? parseFloat(c) : parseFloat(r.height))
            : (p = (0, nt.default)(parseFloat(c), parseFloat(r.height))),
          { widthValue: f, heightValue: p }
        );
      }
      case Zt:
      case Jt:
      case er:
        return j1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case Qn:
        return { value: (0, nt.default)(o(e, zn), r.display) };
      case h1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function N1({ element: e, actionItem: t, elementApi: r }) {
    if (bt(t.actionTypeId)) return ba(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case zt:
      case Yt:
      case $t:
      case Gr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Qt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: c, heightValue: f } = t.config;
        if (!Ue) return { widthValue: c, heightValue: f };
        if (a === ht) {
          let p = n(e, Qe);
          i(e, Qe, ""), (c = o(e, "offsetWidth")), i(e, Qe, p);
        }
        if (s === ht) {
          let p = n(e, Ze);
          i(e, Ze, ""), (f = o(e, "offsetHeight")), i(e, Ze, p);
        }
        return { widthValue: c, heightValue: f };
      }
      case Zt:
      case Jt:
      case er: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Vr:
        return t.config.filters.reduce(w1, {});
      case Ur:
        return t.config.fontVariations.reduce(R1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function zv(e) {
    if (/^TRANSFORM_/.test(e)) return Bv;
    if (/^STYLE_/.test(e)) return La;
    if (/^GENERAL_/.test(e)) return Na;
    if (/^PLUGIN_/.test(e)) return Wv;
  }
  function L1(e, t) {
    return e === La ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function P1(e, t, r, n, i, o, a, s, c) {
    switch (s) {
      case Bv:
        return G1(e, t, r, i, a);
      case La:
        return K1(e, t, r, i, o, a);
      case Na:
        return z1(e, i, a);
      case Wv: {
        let { actionTypeId: f } = i;
        if (bt(f)) return Oa(f)(c, t, i);
      }
    }
  }
  function G1(e, t, r, n, i) {
    let o = F1.map((s) => {
        let c = Ma[s],
          {
            xValue: f = c.xValue,
            yValue: p = c.yValue,
            zValue: d = c.zValue,
            xUnit: h = "",
            yUnit: E = "",
            zUnit: y = "",
          } = t[s] || {};
        switch (s) {
          case zt:
            return `${r1}(${f}${h}, ${p}${E}, ${d}${y})`;
          case Yt:
            return `${n1}(${f}${h}, ${p}${E}, ${d}${y})`;
          case $t:
            return `${i1}(${f}${h}) ${o1}(${p}${E}) ${a1}(${d}${y})`;
          case Gr:
            return `${s1}(${f}${h}, ${p}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    At(e, gt, i), a(e, gt, o), X1(n, r) && a(e, Un, u1);
  }
  function V1(e, t, r, n) {
    let i = (0, Yn.default)(t, (a, s, c) => `${a} ${c}(${s}${D1(c, r)})`, ""),
      { setStyle: o } = n;
    At(e, Mr, n), o(e, Mr, i);
  }
  function U1(e, t, r, n) {
    let i = (0, Yn.default)(
        t,
        (a, s, c) => (a.push(`"${c}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    At(e, Dr, n), o(e, Dr, i);
  }
  function X1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === zt && n !== void 0) ||
      (e === Yt && n !== void 0) ||
      (e === $t && (t !== void 0 || r !== void 0))
    );
  }
  function k1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function j1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Pa[t],
      o = n(e, i),
      a = B1.test(o) ? o : r[i],
      s = k1(W1, a).split(Fr);
    return {
      rValue: (0, nt.default)(parseInt(s[0], 10), 255),
      gValue: (0, nt.default)(parseInt(s[1], 10), 255),
      bValue: (0, nt.default)(parseInt(s[2], 10), 255),
      aValue: (0, nt.default)(parseFloat(s[3]), 1),
    };
  }
  function K1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Qt: {
        let { widthUnit: s = "", heightUnit: c = "" } = n.config,
          { widthValue: f, heightValue: p } = r;
        f !== void 0 && (s === ht && (s = "px"), At(e, Qe, o), a(e, Qe, f + s)),
          p !== void 0 &&
            (c === ht && (c = "px"), At(e, Ze, o), a(e, Ze, p + c));
        break;
      }
      case Vr: {
        V1(e, r, n.config, o);
        break;
      }
      case Ur: {
        U1(e, r, n.config, o);
        break;
      }
      case Zt:
      case Jt:
      case er: {
        let s = Pa[n.actionTypeId],
          c = Math.round(r.rValue),
          f = Math.round(r.gValue),
          p = Math.round(r.bValue),
          d = r.aValue;
        At(e, s, o),
          a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        At(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function z1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Qn: {
        let { value: i } = t.config;
        i === c1 && Ue ? n(e, zn, pa) : n(e, zn, i);
        return;
      }
    }
  }
  function At(e, t, r) {
    if (!Ue) return;
    let n = Kv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Kt);
    if (!a) {
      o(e, Kt, n);
      return;
    }
    let s = a.split(Fr).map(jv);
    s.indexOf(n) === -1 && o(e, Kt, s.concat(n).join(Fr));
  }
  function Yv(e, t, r) {
    if (!Ue) return;
    let n = Kv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Kt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Kt,
        a
          .split(Fr)
          .map(jv)
          .filter((s) => s !== n)
          .join(Fr)
      );
  }
  function Y1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: c } = s,
        f = i[c];
      f && Uv({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Uv({ actionList: i[o], elementApi: t });
      });
  }
  function Uv({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Xv({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Xv({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Xv({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      bt(o)
        ? (s = (c) => Aa(o)(c, i))
        : (s = $v({ effect: Q1, actionTypeId: o, elementApi: r })),
        qa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function $1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Qt) {
      let { config: a } = t;
      a.widthUnit === ht && n(e, Qe, ""), a.heightUnit === ht && n(e, Ze, "");
    }
    i(e, Kt) && $v({ effect: Yv, actionTypeId: o, elementApi: r })(e);
  }
  function Q1(e, t, r) {
    let { setStyle: n } = r;
    Yv(e, t, r), n(e, t, ""), t === gt && n(e, Un, "");
  }
  function Qv(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function Z1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((c, f) => {
        if (n && f === 0) return;
        let { actionItems: p } = c,
          d = p[Qv(p)],
          { config: h, actionTypeId: E } = d;
        i.id === d.id && (s = a + o);
        let y = zv(E) === Na ? 0 : h.duration;
        a += h.delay + y;
      }),
      a > 0 ? qr(s / a) : 0
    );
  }
  function J1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, $n.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: c } = s;
          return c.some(({ actionItems: f }) => f.some(a));
        }),
      (0, $n.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function eD(e, { basedOn: t }) {
    return (
      (e === Ve.SCROLLING_IN_VIEW && (t === Ye.ELEMENT || t == null)) ||
      (e === Ve.MOUSE_MOVE && t === Ye.ELEMENT)
    );
  }
  function tD(e, t) {
    return e + g1 + t;
  }
  function rD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function nD(e, t) {
    return Ra(e && e.sort(), t && t.sort());
  }
  function iD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ca + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ca + r + Ca + n;
  }
  var nt,
    Yn,
    jn,
    $n,
    e1,
    t1,
    r1,
    n1,
    i1,
    o1,
    a1,
    s1,
    u1,
    c1,
    Kn,
    Mr,
    Dr,
    Qe,
    Ze,
    Hv,
    l1,
    f1,
    Dv,
    d1,
    Fv,
    p1,
    zn,
    Kt,
    ht,
    Fr,
    g1,
    Ca,
    Bv,
    Na,
    La,
    Wv,
    zt,
    Yt,
    $t,
    Gr,
    kv,
    Vr,
    Ur,
    Qt,
    Zt,
    Jt,
    er,
    Qn,
    h1,
    jv,
    Pa,
    Kv,
    kn,
    E1,
    m1,
    I1,
    Vv,
    A1,
    x1,
    w1,
    R1,
    C1,
    Ma,
    q1,
    M1,
    D1,
    F1,
    H1,
    B1,
    W1,
    $v,
    Jv = ne(() => {
      "use strict";
      (nt = $(hv())), (Yn = $(Rv())), (jn = $(Pv())), ($n = $(Ft()));
      xe();
      Mv();
      va();
      xa();
      Xn();
      ({
        BACKGROUND: e1,
        TRANSFORM: t1,
        TRANSLATE_3D: r1,
        SCALE_3D: n1,
        ROTATE_X: i1,
        ROTATE_Y: o1,
        ROTATE_Z: a1,
        SKEW: s1,
        PRESERVE_3D: u1,
        FLEX: c1,
        OPACITY: Kn,
        FILTER: Mr,
        FONT_VARIATION_SETTINGS: Dr,
        WIDTH: Qe,
        HEIGHT: Ze,
        BACKGROUND_COLOR: Hv,
        BORDER_COLOR: l1,
        COLOR: f1,
        CHILDREN: Dv,
        IMMEDIATE_CHILDREN: d1,
        SIBLINGS: Fv,
        PARENT: p1,
        DISPLAY: zn,
        WILL_CHANGE: Kt,
        AUTO: ht,
        COMMA_DELIMITER: Fr,
        COLON_DELIMITER: g1,
        BAR_DELIMITER: Ca,
        RENDER_TRANSFORM: Bv,
        RENDER_GENERAL: Na,
        RENDER_STYLE: La,
        RENDER_PLUGIN: Wv,
      } = ve),
        ({
          TRANSFORM_MOVE: zt,
          TRANSFORM_SCALE: Yt,
          TRANSFORM_ROTATE: $t,
          TRANSFORM_SKEW: Gr,
          STYLE_OPACITY: kv,
          STYLE_FILTER: Vr,
          STYLE_FONT_VARIATION: Ur,
          STYLE_SIZE: Qt,
          STYLE_BACKGROUND_COLOR: Zt,
          STYLE_BORDER: Jt,
          STYLE_TEXT_COLOR: er,
          GENERAL_DISPLAY: Qn,
          OBJECT_VALUE: h1,
        } = Ae),
        (jv = (e) => e.trim()),
        (Pa = Object.freeze({ [Zt]: Hv, [Jt]: l1, [er]: f1 })),
        (Kv = Object.freeze({
          [gt]: t1,
          [Hv]: e1,
          [Kn]: Kn,
          [Mr]: Mr,
          [Qe]: Qe,
          [Ze]: Ze,
          [Dr]: Dr,
        })),
        (kn = new Map());
      E1 = 1;
      m1 = 1;
      I1 = (e, t) => e === t;
      (Vv = /px/),
        (A1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = q1[n.type]), r),
            e || {}
          )),
        (x1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = M1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (w1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (R1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (C1 = (e, t, r) => {
          if (bt(e)) return Ta(e)(r, t);
          switch (e) {
            case Vr: {
              let n = (0, jn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Ur: {
              let n = (0, jn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ma = {
        [zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Yt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [$t]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Gr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (q1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (M1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (D1 = (e, t) => {
          let r = (0, jn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (F1 = Object.keys(Ma));
      (H1 = "\\(([^)]+)\\)"), (B1 = /^rgb/), (W1 = RegExp(`rgba?${H1}`));
      $v =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case zt:
            case Yt:
            case $t:
            case Gr:
              e(n, gt, r);
              break;
            case Vr:
              e(n, Mr, r);
              break;
            case Ur:
              e(n, Dr, r);
              break;
            case kv:
              e(n, Kn, r);
              break;
            case Qt:
              e(n, Qe, r), e(n, Ze, r);
              break;
            case Zt:
            case Jt:
            case er:
              e(n, Pa[t], r);
              break;
            case Qn:
              e(n, zn, r);
              break;
          }
        };
    });
  var xt = u((_e) => {
    "use strict";
    var tr = en().default;
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.IX2VanillaUtils =
      _e.IX2VanillaPlugins =
      _e.IX2ElementsReducer =
      _e.IX2Easings =
      _e.IX2EasingUtils =
      _e.IX2BrowserSupport =
        void 0;
    var oD = tr((Xn(), We(Yh)));
    _e.IX2BrowserSupport = oD;
    var aD = tr((ha(), We(Pr)));
    _e.IX2Easings = aD;
    var sD = tr((va(), We(rv)));
    _e.IX2EasingUtils = sD;
    var uD = tr((av(), We(ov)));
    _e.IX2ElementsReducer = uD;
    var cD = tr((xa(), We(pv)));
    _e.IX2VanillaPlugins = cD;
    var lD = tr((Jv(), We(Zv)));
    _e.IX2VanillaUtils = lD;
  });
  var Jn,
    it,
    fD,
    dD,
    pD,
    gD,
    hD,
    vD,
    Zn,
    eE,
    ED,
    yD,
    Da,
    mD,
    _D,
    TD,
    ID,
    tE,
    rE = ne(() => {
      "use strict";
      xe();
      (Jn = $(xt())),
        (it = $(Ft())),
        ({
          IX2_RAW_DATA_IMPORTED: fD,
          IX2_SESSION_STOPPED: dD,
          IX2_INSTANCE_ADDED: pD,
          IX2_INSTANCE_STARTED: gD,
          IX2_INSTANCE_REMOVED: hD,
          IX2_ANIMATION_FRAME_CHANGED: vD,
        } = le),
        ({
          optimizeFloat: Zn,
          applyEasing: eE,
          createBezierEasing: ED,
        } = Jn.IX2EasingUtils),
        ({ RENDER_GENERAL: yD } = ve),
        ({
          getItemConfigByKey: Da,
          getRenderType: mD,
          getStyleProp: _D,
        } = Jn.IX2VanillaUtils),
        (TD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: c,
              customEasingFn: f,
              skipMotion: p,
              skipToValue: d,
            } = e,
            { parameters: h } = t.payload,
            E = Math.max(1 - a, 0.01),
            y = h[n];
          y == null && ((E = 1), (y = s));
          let m = Math.max(y, 0) || 0,
            C = Zn(m - r),
            b = p ? d : Zn(r + C * E),
            S = b * 100;
          if (b === r && e.current) return e;
          let T, R, N, w;
          for (let G = 0, { length: V } = i; G < V; G++) {
            let { keyframe: X, actionItems: M } = i[G];
            if ((G === 0 && (T = M[0]), S >= X)) {
              T = M[0];
              let O = i[G + 1],
                g = O && S !== X;
              (R = g ? O.actionItems[0] : null),
                g && ((N = X / 100), (w = (O.keyframe - X) / 100));
            }
          }
          let F = {};
          if (T && !R)
            for (let G = 0, { length: V } = o; G < V; G++) {
              let X = o[G];
              F[X] = Da(c, X, T.config);
            }
          else if (T && R && N !== void 0 && w !== void 0) {
            let G = (b - N) / w,
              V = T.config.easing,
              X = eE(V, G, f);
            for (let M = 0, { length: O } = o; M < O; M++) {
              let g = o[M],
                A = Da(c, g, T.config),
                B = (Da(c, g, R.config) - A) * X + A;
              F[g] = B;
            }
          }
          return (0, it.merge)(e, { position: b, current: F });
        }),
        (ID = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: c,
              destination: f,
              destinationKeys: p,
              pluginDuration: d,
              instanceDelay: h,
              customEasingFn: E,
              skipMotion: y,
            } = e,
            m = c.config.easing,
            { duration: C, delay: b } = c.config;
          d != null && (C = d),
            (b = h ?? b),
            a === yD ? (C = 0) : (o || y) && (C = b = 0);
          let { now: S } = t.payload;
          if (r && n) {
            let T = S - (i + b);
            if (s) {
              let G = S - i,
                V = C + b,
                X = Zn(Math.min(Math.max(0, G / V), 1));
              e = (0, it.set)(e, "verboseTimeElapsed", V * X);
            }
            if (T < 0) return e;
            let R = Zn(Math.min(Math.max(0, T / C), 1)),
              N = eE(m, R, E),
              w = {},
              F = null;
            return (
              p.length &&
                (F = p.reduce((G, V) => {
                  let X = f[V],
                    M = parseFloat(n[V]) || 0,
                    g = (parseFloat(X) - M) * N + M;
                  return (G[V] = g), G;
                }, {})),
              (w.current = F),
              (w.position = R),
              R === 1 && ((w.active = !1), (w.complete = !0)),
              (0, it.merge)(e, w)
            );
          }
          return e;
        }),
        (tE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case fD:
              return t.payload.ixInstances || Object.freeze({});
            case dD:
              return Object.freeze({});
            case pD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: f,
                  isCarrier: p,
                  origin: d,
                  destination: h,
                  immediate: E,
                  verbose: y,
                  continuous: m,
                  parameterId: C,
                  actionGroups: b,
                  smoothing: S,
                  restingValue: T,
                  pluginInstance: R,
                  pluginDuration: N,
                  instanceDelay: w,
                  skipMotion: F,
                  skipToValue: G,
                } = t.payload,
                { actionTypeId: V } = i,
                X = mD(V),
                M = _D(X, V),
                O = Object.keys(h).filter(
                  (A) => h[A] != null && typeof h[A] != "string"
                ),
                { easing: g } = i.config;
              return (0, it.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: h,
                destinationKeys: O,
                immediate: E,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: V,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                renderType: X,
                isCarrier: p,
                styleProp: M,
                continuous: m,
                parameterId: C,
                actionGroups: b,
                smoothing: S,
                restingValue: T,
                pluginInstance: R,
                pluginDuration: N,
                instanceDelay: w,
                skipMotion: F,
                skipToValue: G,
                customEasingFn:
                  Array.isArray(g) && g.length === 4 ? ED(g) : void 0,
              });
            }
            case gD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, it.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case hD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case vD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  c = s.continuous ? TD : ID;
                r = (0, it.set)(r, a, c(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var bD,
    OD,
    AD,
    nE,
    iE = ne(() => {
      "use strict";
      xe();
      ({
        IX2_RAW_DATA_IMPORTED: bD,
        IX2_SESSION_STOPPED: OD,
        IX2_PARAMETER_CHANGED: AD,
      } = le),
        (nE = (e = {}, t) => {
          switch (t.type) {
            case bD:
              return t.payload.ixParameters || {};
            case OD:
              return {};
            case AD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var sE = {};
  Oe(sE, { default: () => SD });
  var oE,
    aE,
    xD,
    SD,
    uE = ne(() => {
      "use strict";
      oE = $(qo());
      _f();
      Xf();
      Wf();
      aE = $(xt());
      rE();
      iE();
      ({ ixElements: xD } = aE.IX2ElementsReducer),
        (SD = (0, oE.combineReducers)({
          ixData: mf,
          ixRequest: Uf,
          ixSession: Bf,
          ixElements: xD,
          ixInstances: tE,
          ixParameters: nE,
        }));
    });
  var lE = u((Ik, cE) => {
    var wD = ft(),
      RD = pe(),
      CD = tt(),
      ND = "[object String]";
    function LD(e) {
      return typeof e == "string" || (!RD(e) && CD(e) && wD(e) == ND);
    }
    cE.exports = LD;
  });
  var dE = u((bk, fE) => {
    var PD = ua(),
      qD = PD("length");
    fE.exports = qD;
  });
  var gE = u((Ok, pE) => {
    var MD = "\\ud800-\\udfff",
      DD = "\\u0300-\\u036f",
      FD = "\\ufe20-\\ufe2f",
      GD = "\\u20d0-\\u20ff",
      VD = DD + FD + GD,
      UD = "\\ufe0e\\ufe0f",
      XD = "\\u200d",
      HD = RegExp("[" + XD + MD + VD + UD + "]");
    function BD(e) {
      return HD.test(e);
    }
    pE.exports = BD;
  });
  var bE = u((Ak, IE) => {
    var vE = "\\ud800-\\udfff",
      WD = "\\u0300-\\u036f",
      kD = "\\ufe20-\\ufe2f",
      jD = "\\u20d0-\\u20ff",
      KD = WD + kD + jD,
      zD = "\\ufe0e\\ufe0f",
      YD = "[" + vE + "]",
      Fa = "[" + KD + "]",
      Ga = "\\ud83c[\\udffb-\\udfff]",
      $D = "(?:" + Fa + "|" + Ga + ")",
      EE = "[^" + vE + "]",
      yE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      mE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      QD = "\\u200d",
      _E = $D + "?",
      TE = "[" + zD + "]?",
      ZD = "(?:" + QD + "(?:" + [EE, yE, mE].join("|") + ")" + TE + _E + ")*",
      JD = TE + _E + ZD,
      e2 = "(?:" + [EE + Fa + "?", Fa, yE, mE, YD].join("|") + ")",
      hE = RegExp(Ga + "(?=" + Ga + ")|" + e2 + JD, "g");
    function t2(e) {
      for (var t = (hE.lastIndex = 0); hE.test(e); ) ++t;
      return t;
    }
    IE.exports = t2;
  });
  var AE = u((xk, OE) => {
    var r2 = dE(),
      n2 = gE(),
      i2 = bE();
    function o2(e) {
      return n2(e) ? i2(e) : r2(e);
    }
    OE.exports = o2;
  });
  var SE = u((Sk, xE) => {
    var a2 = Nn(),
      s2 = Ln(),
      u2 = Tt(),
      c2 = lE(),
      l2 = AE(),
      f2 = "[object Map]",
      d2 = "[object Set]";
    function p2(e) {
      if (e == null) return 0;
      if (u2(e)) return c2(e) ? l2(e) : e.length;
      var t = s2(e);
      return t == f2 || t == d2 ? e.size : a2(e).length;
    }
    xE.exports = p2;
  });
  var RE = u((wk, wE) => {
    var g2 = "Expected a function";
    function h2(e) {
      if (typeof e != "function") throw new TypeError(g2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    wE.exports = h2;
  });
  var Va = u((Rk, CE) => {
    var v2 = dt(),
      E2 = (function () {
        try {
          var e = v2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    CE.exports = E2;
  });
  var Ua = u((Ck, LE) => {
    var NE = Va();
    function y2(e, t, r) {
      t == "__proto__" && NE
        ? NE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    LE.exports = y2;
  });
  var qE = u((Nk, PE) => {
    var m2 = Ua(),
      _2 = Tn(),
      T2 = Object.prototype,
      I2 = T2.hasOwnProperty;
    function b2(e, t, r) {
      var n = e[t];
      (!(I2.call(e, t) && _2(n, r)) || (r === void 0 && !(t in e))) &&
        m2(e, t, r);
    }
    PE.exports = b2;
  });
  var FE = u((Lk, DE) => {
    var O2 = qE(),
      A2 = Cr(),
      x2 = Sn(),
      ME = $e(),
      S2 = kt();
    function w2(e, t, r, n) {
      if (!ME(e)) return e;
      t = A2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = S2(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var p = s[c];
          (f = n ? n(p, c, s) : void 0),
            f === void 0 && (f = ME(p) ? p : x2(t[i + 1]) ? [] : {});
        }
        O2(s, c, f), (s = s[c]);
      }
      return e;
    }
    DE.exports = w2;
  });
  var VE = u((Pk, GE) => {
    var R2 = Mn(),
      C2 = FE(),
      N2 = Cr();
    function L2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = R2(e, a);
        r(s, a) && C2(o, N2(a, e), s);
      }
      return o;
    }
    GE.exports = L2;
  });
  var XE = u((qk, UE) => {
    var P2 = An(),
      q2 = To(),
      M2 = Ko(),
      D2 = jo(),
      F2 = Object.getOwnPropertySymbols,
      G2 = F2
        ? function (e) {
            for (var t = []; e; ) P2(t, M2(e)), (e = q2(e));
            return t;
          }
        : D2;
    UE.exports = G2;
  });
  var BE = u((Mk, HE) => {
    function V2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    HE.exports = V2;
  });
  var kE = u((Dk, WE) => {
    var U2 = $e(),
      X2 = Cn(),
      H2 = BE(),
      B2 = Object.prototype,
      W2 = B2.hasOwnProperty;
    function k2(e) {
      if (!U2(e)) return H2(e);
      var t = X2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !W2.call(e, n))) || r.push(n);
      return r;
    }
    WE.exports = k2;
  });
  var KE = u((Fk, jE) => {
    var j2 = Yo(),
      K2 = kE(),
      z2 = Tt();
    function Y2(e) {
      return z2(e) ? j2(e, !0) : K2(e);
    }
    jE.exports = Y2;
  });
  var YE = u((Gk, zE) => {
    var $2 = ko(),
      Q2 = XE(),
      Z2 = KE();
    function J2(e) {
      return $2(e, Z2, Q2);
    }
    zE.exports = J2;
  });
  var QE = u((Vk, $E) => {
    var eF = sa(),
      tF = pt(),
      rF = VE(),
      nF = YE();
    function iF(e, t) {
      if (e == null) return {};
      var r = eF(nF(e), function (n) {
        return [n];
      });
      return (
        (t = tF(t)),
        rF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    $E.exports = iF;
  });
  var JE = u((Uk, ZE) => {
    var oF = pt(),
      aF = RE(),
      sF = QE();
    function uF(e, t) {
      return sF(e, aF(oF(t)));
    }
    ZE.exports = uF;
  });
  var ty = u((Xk, ey) => {
    var cF = Nn(),
      lF = Ln(),
      fF = Or(),
      dF = pe(),
      pF = Tt(),
      gF = xn(),
      hF = Cn(),
      vF = Rn(),
      EF = "[object Map]",
      yF = "[object Set]",
      mF = Object.prototype,
      _F = mF.hasOwnProperty;
    function TF(e) {
      if (e == null) return !0;
      if (
        pF(e) &&
        (dF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          gF(e) ||
          vF(e) ||
          fF(e))
      )
        return !e.length;
      var t = lF(e);
      if (t == EF || t == yF) return !e.size;
      if (hF(e)) return !cF(e).length;
      for (var r in e) if (_F.call(e, r)) return !1;
      return !0;
    }
    ey.exports = TF;
  });
  var ny = u((Hk, ry) => {
    var IF = Ua(),
      bF = Sa(),
      OF = pt();
    function AF(e, t) {
      var r = {};
      return (
        (t = OF(t, 3)),
        bF(e, function (n, i, o) {
          IF(r, i, t(n, i, o));
        }),
        r
      );
    }
    ry.exports = AF;
  });
  var oy = u((Bk, iy) => {
    function xF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    iy.exports = xF;
  });
  var sy = u((Wk, ay) => {
    var SF = Fn();
    function wF(e) {
      return typeof e == "function" ? e : SF;
    }
    ay.exports = wF;
  });
  var cy = u((kk, uy) => {
    var RF = oy(),
      CF = wa(),
      NF = sy(),
      LF = pe();
    function PF(e, t) {
      var r = LF(e) ? RF : CF;
      return r(e, NF(t));
    }
    uy.exports = PF;
  });
  var fy = u((jk, ly) => {
    var qF = Ge(),
      MF = function () {
        return qF.Date.now();
      };
    ly.exports = MF;
  });
  var gy = u((Kk, py) => {
    var DF = $e(),
      Xa = fy(),
      dy = Gn(),
      FF = "Expected a function",
      GF = Math.max,
      VF = Math.min;
    function UF(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        p = !1,
        d = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(FF);
      (t = dy(t) || 0),
        DF(r) &&
          ((p = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? GF(dy(r.maxWait) || 0, t) : o),
          (h = "trailing" in r ? !!r.trailing : h));
      function E(w) {
        var F = n,
          G = i;
        return (n = i = void 0), (f = w), (a = e.apply(G, F)), a;
      }
      function y(w) {
        return (f = w), (s = setTimeout(b, t)), p ? E(w) : a;
      }
      function m(w) {
        var F = w - c,
          G = w - f,
          V = t - F;
        return d ? VF(V, o - G) : V;
      }
      function C(w) {
        var F = w - c,
          G = w - f;
        return c === void 0 || F >= t || F < 0 || (d && G >= o);
      }
      function b() {
        var w = Xa();
        if (C(w)) return S(w);
        s = setTimeout(b, m(w));
      }
      function S(w) {
        return (s = void 0), h && n ? E(w) : ((n = i = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function R() {
        return s === void 0 ? a : S(Xa());
      }
      function N() {
        var w = Xa(),
          F = C(w);
        if (((n = arguments), (i = this), (c = w), F)) {
          if (s === void 0) return y(c);
          if (d) return clearTimeout(s), (s = setTimeout(b, t)), E(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (N.cancel = T), (N.flush = R), N;
    }
    py.exports = UF;
  });
  var vy = u((zk, hy) => {
    var XF = gy(),
      HF = $e(),
      BF = "Expected a function";
    function WF(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(BF);
      return (
        HF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        XF(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    hy.exports = WF;
  });
  var yy = {};
  Oe(yy, {
    actionListPlaybackChanged: () => nr,
    animationFrameChanged: () => ti,
    clearRequested: () => hG,
    elementStateChanged: () => Ya,
    eventListenerAdded: () => ei,
    eventStateChanged: () => ja,
    instanceAdded: () => Ka,
    instanceRemoved: () => za,
    instanceStarted: () => ri,
    mediaQueriesDefined: () => Qa,
    parameterChanged: () => rr,
    playbackRequested: () => pG,
    previewRequested: () => dG,
    rawDataImported: () => Ha,
    sessionInitialized: () => Ba,
    sessionStarted: () => Wa,
    sessionStopped: () => ka,
    stopRequested: () => gG,
    testFrameRendered: () => vG,
    viewportWidthChanged: () => $a,
  });
  var Ey,
    kF,
    jF,
    KF,
    zF,
    YF,
    $F,
    QF,
    ZF,
    JF,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    Ha,
    Ba,
    Wa,
    ka,
    dG,
    pG,
    gG,
    hG,
    ei,
    vG,
    ja,
    ti,
    rr,
    Ka,
    ri,
    za,
    Ya,
    nr,
    $a,
    Qa,
    ni = ne(() => {
      "use strict";
      xe();
      (Ey = $(xt())),
        ({
          IX2_RAW_DATA_IMPORTED: kF,
          IX2_SESSION_INITIALIZED: jF,
          IX2_SESSION_STARTED: KF,
          IX2_SESSION_STOPPED: zF,
          IX2_PREVIEW_REQUESTED: YF,
          IX2_PLAYBACK_REQUESTED: $F,
          IX2_STOP_REQUESTED: QF,
          IX2_CLEAR_REQUESTED: ZF,
          IX2_EVENT_LISTENER_ADDED: JF,
          IX2_TEST_FRAME_RENDERED: eG,
          IX2_EVENT_STATE_CHANGED: tG,
          IX2_ANIMATION_FRAME_CHANGED: rG,
          IX2_PARAMETER_CHANGED: nG,
          IX2_INSTANCE_ADDED: iG,
          IX2_INSTANCE_STARTED: oG,
          IX2_INSTANCE_REMOVED: aG,
          IX2_ELEMENT_STATE_CHANGED: sG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: uG,
          IX2_VIEWPORT_WIDTH_CHANGED: cG,
          IX2_MEDIA_QUERIES_DEFINED: lG,
        } = le),
        ({ reifyState: fG } = Ey.IX2VanillaUtils),
        (Ha = (e) => ({ type: kF, payload: { ...fG(e) } })),
        (Ba = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: jF,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Wa = () => ({ type: KF })),
        (ka = () => ({ type: zF })),
        (dG = ({ rawData: e, defer: t }) => ({
          type: YF,
          payload: { defer: t, rawData: e },
        })),
        (pG = ({
          actionTypeId: e = Ae.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: c,
        }) => ({
          type: $F,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        })),
        (gG = (e) => ({ type: QF, payload: { actionListId: e } })),
        (hG = () => ({ type: ZF })),
        (ei = (e, t) => ({
          type: JF,
          payload: { target: e, listenerParams: t },
        })),
        (vG = (e = 1) => ({ type: eG, payload: { step: e } })),
        (ja = (e, t) => ({ type: tG, payload: { stateKey: e, newState: t } })),
        (ti = (e, t) => ({ type: rG, payload: { now: e, parameters: t } })),
        (rr = (e, t) => ({ type: nG, payload: { key: e, value: t } })),
        (Ka = (e) => ({ type: iG, payload: { ...e } })),
        (ri = (e, t) => ({ type: oG, payload: { instanceId: e, time: t } })),
        (za = (e) => ({ type: aG, payload: { instanceId: e } })),
        (Ya = (e, t, r, n) => ({
          type: sG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (nr = ({ actionListId: e, isPlaying: t }) => ({
          type: uG,
          payload: { actionListId: e, isPlaying: t },
        })),
        ($a = ({ width: e, mediaQueries: t }) => ({
          type: cG,
          payload: { width: e, mediaQueries: t },
        })),
        (Qa = () => ({ type: lG }));
    });
  var Te = {};
  Oe(Te, {
    elementContains: () => es,
    getChildElements: () => xG,
    getClosestElement: () => Xr,
    getProperty: () => TG,
    getQuerySelector: () => Ja,
    getRefType: () => ts,
    getSiblingElements: () => SG,
    getStyle: () => _G,
    getValidDocument: () => bG,
    isSiblingNode: () => AG,
    matchSelector: () => IG,
    queryDocument: () => OG,
    setStyle: () => mG,
  });
  function mG(e, t, r) {
    e.style[t] = r;
  }
  function _G(e, t) {
    return e.style[t];
  }
  function TG(e, t) {
    return e[t];
  }
  function IG(e) {
    return (t) => t[Za](e);
  }
  function Ja({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(my) !== -1) {
        let n = e.split(my),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ty)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function bG(e) {
    return e == null || e === document.documentElement.getAttribute(Ty)
      ? document
      : null;
  }
  function OG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function es(e, t) {
    return e.contains(t);
  }
  function AG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function xG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function SG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ts(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? EG
        : yG
      : null;
  }
  var _y,
    Za,
    my,
    EG,
    yG,
    Ty,
    Xr,
    Iy = ne(() => {
      "use strict";
      _y = $(xt());
      xe();
      ({ ELEMENT_MATCHES: Za } = _y.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: my,
          HTML_ELEMENT: EG,
          PLAIN_OBJECT: yG,
          WF_PAGE: Ty,
        } = ve);
      Xr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Za] && r[Za](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var rs = u((Qk, Oy) => {
    var wG = $e(),
      by = Object.create,
      RG = (function () {
        function e() {}
        return function (t) {
          if (!wG(t)) return {};
          if (by) return by(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Oy.exports = RG;
  });
  var ii = u((Zk, Ay) => {
    function CG() {}
    Ay.exports = CG;
  });
  var ai = u((Jk, xy) => {
    var NG = rs(),
      LG = ii();
    function oi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    oi.prototype = NG(LG.prototype);
    oi.prototype.constructor = oi;
    xy.exports = oi;
  });
  var Cy = u((ej, Ry) => {
    var Sy = qt(),
      PG = Or(),
      qG = pe(),
      wy = Sy ? Sy.isConcatSpreadable : void 0;
    function MG(e) {
      return qG(e) || PG(e) || !!(wy && e && e[wy]);
    }
    Ry.exports = MG;
  });
  var Py = u((tj, Ly) => {
    var DG = An(),
      FG = Cy();
    function Ny(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = FG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Ny(s, t - 1, r, n, i)
            : DG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Ly.exports = Ny;
  });
  var My = u((rj, qy) => {
    var GG = Py();
    function VG(e) {
      var t = e == null ? 0 : e.length;
      return t ? GG(e, 1) : [];
    }
    qy.exports = VG;
  });
  var Fy = u((nj, Dy) => {
    function UG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Dy.exports = UG;
  });
  var Uy = u((ij, Vy) => {
    var XG = Fy(),
      Gy = Math.max;
    function HG(e, t, r) {
      return (
        (t = Gy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Gy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), XG(e, this, s);
        }
      );
    }
    Vy.exports = HG;
  });
  var Hy = u((oj, Xy) => {
    function BG(e) {
      return function () {
        return e;
      };
    }
    Xy.exports = BG;
  });
  var ky = u((aj, Wy) => {
    var WG = Hy(),
      By = Va(),
      kG = Fn(),
      jG = By
        ? function (e, t) {
            return By(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: WG(t),
              writable: !0,
            });
          }
        : kG;
    Wy.exports = jG;
  });
  var Ky = u((sj, jy) => {
    var KG = 800,
      zG = 16,
      YG = Date.now;
    function $G(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = YG(),
          i = zG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= KG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    jy.exports = $G;
  });
  var Yy = u((uj, zy) => {
    var QG = ky(),
      ZG = Ky(),
      JG = ZG(QG);
    zy.exports = JG;
  });
  var Qy = u((cj, $y) => {
    var eV = My(),
      tV = Uy(),
      rV = Yy();
    function nV(e) {
      return rV(tV(e, void 0, eV), e + "");
    }
    $y.exports = nV;
  });
  var em = u((lj, Jy) => {
    var Zy = $o(),
      iV = Zy && new Zy();
    Jy.exports = iV;
  });
  var rm = u((fj, tm) => {
    function oV() {}
    tm.exports = oV;
  });
  var ns = u((dj, im) => {
    var nm = em(),
      aV = rm(),
      sV = nm
        ? function (e) {
            return nm.get(e);
          }
        : aV;
    im.exports = sV;
  });
  var am = u((pj, om) => {
    var uV = {};
    om.exports = uV;
  });
  var is = u((gj, um) => {
    var sm = am(),
      cV = Object.prototype,
      lV = cV.hasOwnProperty;
    function fV(e) {
      for (
        var t = e.name + "", r = sm[t], n = lV.call(sm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    um.exports = fV;
  });
  var ui = u((hj, cm) => {
    var dV = rs(),
      pV = ii(),
      gV = 4294967295;
    function si(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = gV),
        (this.__views__ = []);
    }
    si.prototype = dV(pV.prototype);
    si.prototype.constructor = si;
    cm.exports = si;
  });
  var fm = u((vj, lm) => {
    function hV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    lm.exports = hV;
  });
  var pm = u((Ej, dm) => {
    var vV = ui(),
      EV = ai(),
      yV = fm();
    function mV(e) {
      if (e instanceof vV) return e.clone();
      var t = new EV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = yV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    dm.exports = mV;
  });
  var vm = u((yj, hm) => {
    var _V = ui(),
      gm = ai(),
      TV = ii(),
      IV = pe(),
      bV = tt(),
      OV = pm(),
      AV = Object.prototype,
      xV = AV.hasOwnProperty;
    function ci(e) {
      if (bV(e) && !IV(e) && !(e instanceof _V)) {
        if (e instanceof gm) return e;
        if (xV.call(e, "__wrapped__")) return OV(e);
      }
      return new gm(e);
    }
    ci.prototype = TV.prototype;
    ci.prototype.constructor = ci;
    hm.exports = ci;
  });
  var ym = u((mj, Em) => {
    var SV = ui(),
      wV = ns(),
      RV = is(),
      CV = vm();
    function NV(e) {
      var t = RV(e),
        r = CV[t];
      if (typeof r != "function" || !(t in SV.prototype)) return !1;
      if (e === r) return !0;
      var n = wV(r);
      return !!n && e === n[0];
    }
    Em.exports = NV;
  });
  var Im = u((_j, Tm) => {
    var mm = ai(),
      LV = Qy(),
      PV = ns(),
      os = is(),
      qV = pe(),
      _m = ym(),
      MV = "Expected a function",
      DV = 8,
      FV = 32,
      GV = 128,
      VV = 256;
    function UV(e) {
      return LV(function (t) {
        var r = t.length,
          n = r,
          i = mm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(MV);
          if (i && !a && os(o) == "wrapper") var a = new mm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = os(o),
            c = s == "wrapper" ? PV(o) : void 0;
          c &&
          _m(c[0]) &&
          c[1] == (GV | DV | FV | VV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[os(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && _m(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            p = f[0];
          if (a && f.length == 1 && qV(p)) return a.plant(p).value();
          for (var d = 0, h = r ? t[d].apply(this, f) : p; ++d < r; )
            h = t[d].call(this, h);
          return h;
        };
      });
    }
    Tm.exports = UV;
  });
  var Om = u((Tj, bm) => {
    var XV = Im(),
      HV = XV();
    bm.exports = HV;
  });
  var xm = u((Ij, Am) => {
    function BV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Am.exports = BV;
  });
  var wm = u((bj, Sm) => {
    var WV = xm(),
      as = Gn();
    function kV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = as(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = as(t)), (t = t === t ? t : 0)),
        WV(as(e), t, r)
      );
    }
    Sm.exports = kV;
  });
  var Fm,
    Gm,
    Vm,
    Um,
    jV,
    KV,
    zV,
    YV,
    $V,
    QV,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    oU,
    aU,
    Xm,
    Hm,
    sU,
    uU,
    cU,
    Bm,
    lU,
    fU,
    Wm,
    dU,
    ss,
    km,
    Rm,
    Cm,
    jm,
    Br,
    pU,
    Je,
    Km,
    gU,
    we,
    Xe,
    Wr,
    zm,
    us,
    Nm,
    cs,
    hU,
    Hr,
    vU,
    EU,
    yU,
    Ym,
    Lm,
    mU,
    Pm,
    _U,
    TU,
    IU,
    qm,
    li,
    fi,
    Mm,
    Dm,
    $m,
    Qm = ne(() => {
      "use strict";
      (Fm = $(Om())), (Gm = $(Dn())), (Vm = $(wm()));
      xe();
      ls();
      ni();
      (Um = $(xt())),
        ({
          MOUSE_CLICK: jV,
          MOUSE_SECOND_CLICK: KV,
          MOUSE_DOWN: zV,
          MOUSE_UP: YV,
          MOUSE_OVER: $V,
          MOUSE_OUT: QV,
          DROPDOWN_CLOSE: ZV,
          DROPDOWN_OPEN: JV,
          SLIDER_ACTIVE: eU,
          SLIDER_INACTIVE: tU,
          TAB_ACTIVE: rU,
          TAB_INACTIVE: nU,
          NAVBAR_CLOSE: iU,
          NAVBAR_OPEN: oU,
          MOUSE_MOVE: aU,
          PAGE_SCROLL_DOWN: Xm,
          SCROLL_INTO_VIEW: Hm,
          SCROLL_OUT_OF_VIEW: sU,
          PAGE_SCROLL_UP: uU,
          SCROLLING_IN_VIEW: cU,
          PAGE_FINISH: Bm,
          ECOMMERCE_CART_CLOSE: lU,
          ECOMMERCE_CART_OPEN: fU,
          PAGE_START: Wm,
          PAGE_SCROLL: dU,
        } = Ve),
        (ss = "COMPONENT_ACTIVE"),
        (km = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Rm } = ve),
        ({ getNamespacedParameterId: Cm } = Um.IX2VanillaUtils),
        (jm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Br = jm(({ element: e, nativeEvent: t }) => e === t.target)),
        (pU = jm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (Je = (0, Fm.default)([Br, pU])),
        (Km = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !hU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (gU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Km(e, n);
        }),
        (we = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: c } = o.config,
            f = Km(e, c);
          return (
            f &&
              ir({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Rm + n.split(Rm)[1],
                actionListId: (0, Gm.default)(f, "action.config.actionListId"),
              }),
            ir({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            kr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Xe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Wr = { handler: Xe(Je, we) }),
        (zm = { ...Wr, types: [ss, km].join(" ") }),
        (us = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Nm = "mouseover mouseout"),
        (cs = { types: us }),
        (hU = { PAGE_START: Wm, PAGE_FINISH: Bm }),
        (Hr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Vm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (vU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (EU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (yU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Hr(),
            o = r.scrollOffsetValue,
            c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return vU(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        }),
        (Ym = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ss, km].indexOf(n) !== -1 ? n === ss : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Lm = (e) => (t, r) => {
          let n = { elementHovered: EU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (mU = (e) => (t, r) => {
          let n = { ...r, elementVisible: yU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Pm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Hr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
              p = f === "PX",
              d = i - o,
              h = Number((n / d).toFixed(2));
            if (r && r.percentTop === h) return r;
            let E = (p ? c : (o * (c || 0)) / 100) / d,
              y,
              m,
              C = 0;
            r &&
              ((y = h > r.percentTop),
              (m = r.scrollingDown !== y),
              (C = m ? h : r.anchorTop));
            let b = s === Xm ? h >= C + E : h <= C - E,
              S = {
                ...r,
                percentTop: h,
                inBounds: b,
                anchorTop: C,
                scrollingDown: y,
              };
            return (r && b && (m || S.inBounds !== r.inBounds) && e(t, S)) || S;
          }),
        (_U = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (TU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (IU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (qm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (li = (e = !0) => ({
          ...zm,
          handler: Xe(
            e ? Je : Br,
            Ym((t, r) => (r.isActive ? Wr.handler(t, r) : r))
          ),
        })),
        (fi = (e = !0) => ({
          ...zm,
          handler: Xe(
            e ? Je : Br,
            Ym((t, r) => (r.isActive ? r : Wr.handler(t, r)))
          ),
        })),
        (Mm = {
          ...cs,
          handler: mU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Hm) === r
              ? (we(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Dm = 0.05),
        ($m = {
          [eU]: li(),
          [tU]: fi(),
          [JV]: li(),
          [ZV]: fi(),
          [oU]: li(!1),
          [iU]: fi(!1),
          [rU]: li(),
          [nU]: fi(),
          [fU]: { types: "ecommerce-cart-open", handler: Xe(Je, we) },
          [lU]: { types: "ecommerce-cart-close", handler: Xe(Je, we) },
          [jV]: {
            types: "click",
            handler: Xe(
              Je,
              qm((e, { clickCount: t }) => {
                gU(e) ? t === 1 && we(e) : we(e);
              })
            ),
          },
          [KV]: {
            types: "click",
            handler: Xe(
              Je,
              qm((e, { clickCount: t }) => {
                t === 2 && we(e);
              })
            ),
          },
          [zV]: { ...Wr, types: "mousedown" },
          [YV]: { ...Wr, types: "mouseup" },
          [$V]: {
            types: Nm,
            handler: Xe(
              Je,
              Lm((e, t) => {
                t.elementHovered && we(e);
              })
            ),
          },
          [QV]: {
            types: Nm,
            handler: Xe(
              Je,
              Lm((e, t) => {
                t.elementHovered || we(e);
              })
            ),
          },
          [aU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: c,
                  reverse: f,
                  restingState: p = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: h = o.clientY,
                  pageX: E = o.pageX,
                  pageY: y = o.pageY,
                } = n,
                m = s === "X_AXIS",
                C = n.type === "mouseout",
                b = p / 100,
                S = c,
                T = !1;
              switch (a) {
                case Ye.VIEWPORT: {
                  b = m
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ye.PAGE: {
                  let {
                    scrollLeft: R,
                    scrollTop: N,
                    scrollWidth: w,
                    scrollHeight: F,
                  } = Hr();
                  b = m ? Math.min(R + E, w) / w : Math.min(N + y, F) / F;
                  break;
                }
                case Ye.ELEMENT:
                default: {
                  S = Cm(i, c);
                  let R = n.type.indexOf("mouse") === 0;
                  if (R && Je({ element: t, nativeEvent: n }) !== !0) break;
                  let N = t.getBoundingClientRect(),
                    { left: w, top: F, width: G, height: V } = N;
                  if (!R && !_U({ left: d, top: h }, N)) break;
                  (T = !0), (b = m ? (d - w) / G : (h - F) / V);
                  break;
                }
              }
              return (
                C && (b > 1 - Dm || b < Dm) && (b = Math.round(b)),
                (a !== Ye.ELEMENT || T || T !== o.elementHovered) &&
                  ((b = f ? 1 - b : b), e.dispatch(rr(S, b))),
                {
                  elementHovered: T,
                  clientX: d,
                  clientY: h,
                  pageX: E,
                  pageY: y,
                }
              );
            },
          },
          [dU]: {
            types: us,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Hr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(rr(r, s));
            },
          },
          [cU]: {
            types: us,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: c,
                  clientHeight: f,
                } = Hr(),
                {
                  basedOn: p,
                  selectedAxis: d,
                  continuousParameterGroupId: h,
                  startsEntering: E,
                  startsExiting: y,
                  addEndOffset: m,
                  addStartOffset: C,
                  addOffsetValue: b = 0,
                  endOffsetValue: S = 0,
                } = r,
                T = d === "X_AXIS";
              if (p === Ye.VIEWPORT) {
                let R = T ? o / s : a / c;
                return (
                  R !== i.scrollPercent && t.dispatch(rr(h, R)),
                  { scrollPercent: R }
                );
              } else {
                let R = Cm(n, h),
                  N = e.getBoundingClientRect(),
                  w = (C ? b : 0) / 100,
                  F = (m ? S : 0) / 100;
                (w = E ? w : 1 - w), (F = y ? F : 1 - F);
                let G = N.top + Math.min(N.height * w, f),
                  X = N.top + N.height * F - G,
                  M = Math.min(f + X, c),
                  g = Math.min(Math.max(0, f - G), M) / M;
                return (
                  g !== i.scrollPercent && t.dispatch(rr(R, g)),
                  { scrollPercent: g }
                );
              }
            },
          },
          [Hm]: Mm,
          [sU]: Mm,
          [Xm]: {
            ...cs,
            handler: Pm((e, t) => {
              t.scrollingDown && we(e);
            }),
          },
          [uU]: {
            ...cs,
            handler: Pm((e, t) => {
              t.scrollingDown || we(e);
            }),
          },
          [Bm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Xe(Br, TU(we)),
          },
          [Wm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Xe(Br, IU(we)),
          },
        });
    });
  var g_ = {};
  Oe(g_, {
    observeRequests: () => HU,
    startActionGroup: () => kr,
    startEngine: () => Ei,
    stopActionGroup: () => ir,
    stopAllActionGroups: () => f_,
    stopEngine: () => yi,
  });
  function HU(e) {
    St({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: kU }),
      St({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: jU }),
      St({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: KU }),
      St({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: zU });
  }
  function BU(e) {
    St({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        yi(e),
          s_({ store: e, elementApi: Te }),
          Ei({ store: e, allowEvents: !0 }),
          u_();
      },
    });
  }
  function WU(e, t) {
    let r = St({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function kU({ rawData: e, defer: t }, r) {
    let n = () => {
      Ei({ store: r, rawData: e, allowEvents: !0 }), u_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function u_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function jU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: c,
        verbose: f = !0,
      } = e,
      { rawData: p } = e;
    if (n && i && p && s) {
      let d = p.actionLists[n];
      d && (p = NU({ actionList: d, actionItemId: i, rawData: p }));
    }
    if (
      (Ei({ store: t, rawData: p, allowEvents: a, testManual: c }),
      (n && r === Ae.GENERAL_START_ACTION) || fs(r))
    ) {
      ir({ store: t, actionListId: n }),
        l_({ store: t, actionListId: n, eventId: o });
      let d = kr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(nr({ actionListId: n, isPlaying: !s }));
    }
  }
  function KU({ actionListId: e }, t) {
    e ? ir({ store: t, actionListId: e }) : f_({ store: t }), yi(t);
  }
  function zU(e, t) {
    yi(t), s_({ store: t, elementApi: Te });
  }
  function Ei({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Ha(t)),
      i.active ||
        (e.dispatch(
          Ba({
            hasBoundaryNodes: !!document.querySelector(pi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (eX(e), YU(), e.getState().ixSession.hasDefinedMediaQueries && BU(e)),
        e.dispatch(Wa()),
        $U(e, n));
  }
  function YU() {
    let { documentElement: e } = document;
    e.className.indexOf(Zm) === -1 && (e.className += ` ${Zm}`);
  }
  function $U(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ti(n, o)), t ? WU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function yi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(QU), MU(), e.dispatch(ka());
    }
  }
  function QU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function ZU({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: c,
  }) {
    let { ixData: f, ixSession: p } = e.getState(),
      { events: d } = f,
      h = d[n],
      { eventTypeId: E } = h,
      y = {},
      m = {},
      C = [],
      { continuousActionGroups: b } = a,
      { id: S } = a;
    LU(E, i) && (S = PU(t, S));
    let T = p.hasBoundaryNodes && r ? Xr(r, pi) : null;
    b.forEach((R) => {
      let { keyframe: N, actionItems: w } = R;
      w.forEach((F) => {
        let { actionTypeId: G } = F,
          { target: V } = F.config;
        if (!V) return;
        let X = V.boundaryMode ? T : null,
          M = DU(V) + ds + G;
        if (((m[M] = JU(m[M], N, F)), !y[M])) {
          y[M] = !0;
          let { config: O } = F;
          gi({
            config: O,
            event: h,
            eventTarget: r,
            elementRoot: X,
            elementApi: Te,
          }).forEach((g) => {
            C.push({ element: g, key: M });
          });
        }
      });
    }),
      C.forEach(({ element: R, key: N }) => {
        let w = m[N],
          F = (0, ot.default)(w, "[0].actionItems[0]", {}),
          { actionTypeId: G } = F,
          V = vi(G) ? gs(G)(R, F) : null,
          X = ps({ element: R, actionItem: F, elementApi: Te }, V);
        hs({
          store: e,
          element: R,
          eventId: n,
          actionListId: o,
          actionItem: F,
          destination: X,
          continuous: !0,
          parameterId: S,
          actionGroups: w,
          smoothing: s,
          restingValue: c,
          pluginInstance: V,
        });
      });
  }
  function JU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function eX(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    c_(e),
      (0, or.default)(r, (i, o) => {
        let a = $m[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        aX({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && rX(e);
  }
  function rX(e) {
    let t = () => {
      c_(e);
    };
    tX.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ei(window, [r, t]));
    }),
      t();
  }
  function c_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch($a({ width: n, mediaQueries: i }));
    }
  }
  function aX({ logic: e, store: t, events: r }) {
    sX(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = nX(r, oX);
    if (!(0, t_.default)(s)) return;
    (0, or.default)(s, (d, h) => {
      let E = r[h],
        { action: y, id: m, mediaQueries: C = o.mediaQueryKeys } = E,
        { actionListId: b } = y.config;
      FU(C, o.mediaQueryKeys) || t.dispatch(Qa()),
        y.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((T) => {
            let { continuousParameterGroupId: R } = T,
              N = (0, ot.default)(a, `${b}.continuousParameterGroups`, []),
              w = (0, e_.default)(N, ({ id: V }) => V === R),
              F = (T.smoothing || 0) / 100,
              G = (T.restingState || 0) / 100;
            w &&
              d.forEach((V, X) => {
                let M = m + ds + X;
                ZU({
                  store: t,
                  eventStateKey: M,
                  eventTarget: V,
                  eventId: m,
                  eventConfig: T,
                  actionListId: b,
                  parameterGroup: w,
                  smoothing: F,
                  restingValue: G,
                });
              });
          }),
        (y.actionTypeId === Ae.GENERAL_START_ACTION || fs(y.actionTypeId)) &&
          l_({ store: t, actionListId: b, eventId: m });
    });
    let c = (d) => {
        let { ixSession: h } = t.getState();
        iX(s, (E, y, m) => {
          let C = r[y],
            b = h.eventState[m],
            { action: S, mediaQueries: T = o.mediaQueryKeys } = C;
          if (!hi(T, h.mediaQueryKey)) return;
          let R = (N = {}) => {
            let w = i(
              {
                store: t,
                element: E,
                event: C,
                eventConfig: N,
                nativeEvent: d,
                eventStateKey: m,
              },
              b
            );
            GU(w, b) || t.dispatch(ja(m, w));
          };
          S.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(R)
            : R();
        });
      },
      f = (0, o_.default)(c, XU),
      p = ({ target: d = document, types: h, throttle: E }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((y) => {
            let m = E ? f : c;
            d.addEventListener(y, m), t.dispatch(ei(d, [y, m]));
          });
      };
    Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
  }
  function sX(e) {
    if (!UU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Ja(o);
      t[a] ||
        ((i === Ve.MOUSE_CLICK || i === Ve.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function l_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      c = o[t];
    if (c && c.useFirstGroupAsInitialState) {
      let f = (0, ot.default)(c, "actionItemGroups[0].actionItems", []),
        p = (0, ot.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!hi(p, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: h, actionTypeId: E } = d,
          y =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          m = gi({ config: y, event: s, elementApi: Te }),
          C = vi(E);
        m.forEach((b) => {
          let S = C ? gs(E)(b, d) : null;
          hs({
            destination: ps({ element: b, actionItem: d, elementApi: Te }, S),
            immediate: !0,
            store: e,
            element: b,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: S,
          });
        });
      });
    }
  }
  function f_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, or.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        vs(r, e), i && e.dispatch(nr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function ir({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Xr(r, pi) : null;
    (0, or.default)(o, (c) => {
      let f = (0, ot.default)(c, "actionItem.config.target.boundaryMode"),
        p = n ? c.eventStateKey === n : !0;
      if (c.actionListId === i && c.eventId === t && p) {
        if (s && f && !es(s, c.element)) return;
        vs(c, e),
          c.verbose && e.dispatch(nr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function kr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: c, ixSession: f } = e.getState(),
      { events: p } = c,
      d = p[t] || {},
      { mediaQueries: h = c.mediaQueryKeys } = d,
      E = (0, ot.default)(c, `actionLists.${i}`, {}),
      { actionItemGroups: y, useFirstGroupAsInitialState: m } = E;
    if (!y || !y.length) return !1;
    o >= y.length && (0, ot.default)(d, "config.loop") && (o = 0),
      o === 0 && m && o++;
    let b =
        (o === 0 || (o === 1 && m)) && fs(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      S = (0, ot.default)(y, [o, "actionItems"], []);
    if (!S.length || !hi(h, f.mediaQueryKey)) return !1;
    let T = f.hasBoundaryNodes && r ? Xr(r, pi) : null,
      R = wU(S),
      N = !1;
    return (
      S.forEach((w, F) => {
        let { config: G, actionTypeId: V } = w,
          X = vi(V),
          { target: M } = G;
        if (!M) return;
        let O = M.boundaryMode ? T : null;
        gi({
          config: G,
          event: d,
          eventTarget: r,
          elementRoot: O,
          elementApi: Te,
        }).forEach((A, P) => {
          let q = X ? gs(V)(A, w) : null,
            B = X ? VU(V)(A, w) : null;
          N = !0;
          let W = R === F && P === 0,
            Q = RU({ element: A, actionItem: w }),
            se = ps({ element: A, actionItem: w, elementApi: Te }, q);
          hs({
            store: e,
            element: A,
            actionItem: w,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: W,
            computedStyle: Q,
            destination: se,
            immediate: a,
            verbose: s,
            pluginInstance: q,
            pluginDuration: B,
            instanceDelay: b,
          });
        });
      }),
      N
    );
  }
  function hs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: c,
        restingValue: f,
        eventId: p,
      } = n,
      d = !c,
      h = xU(),
      { ixElements: E, ixSession: y, ixData: m } = t.getState(),
      C = AU(E, i),
      { refState: b } = E[C] || {},
      S = ts(i),
      T = y.reducedMotion && Fo[o.actionTypeId],
      R;
    if (T && c)
      switch (m.events[p]?.eventTypeId) {
        case Ve.MOUSE_MOVE:
        case Ve.MOUSE_MOVE_IN_VIEWPORT:
          R = f;
          break;
        default:
          R = 0.5;
          break;
      }
    let N = CU(i, b, r, o, Te, s);
    if (
      (t.dispatch(
        Ka({
          instanceId: h,
          elementId: C,
          origin: N,
          refType: S,
          skipMotion: T,
          skipToValue: R,
          ...n,
        })
      ),
      d_(document.body, "ix2-animation-started", h),
      a)
    ) {
      uX(t, h);
      return;
    }
    St({ store: t, select: ({ ixInstances: w }) => w[h], onChange: p_ }),
      d && t.dispatch(ri(h, y.tick));
  }
  function vs(e, t) {
    d_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === a_ && qU(o, n, Te), t.dispatch(za(e.id));
  }
  function d_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function uX(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ri(t, 0)), e.dispatch(ti(performance.now(), r));
    let { ixInstances: n } = e.getState();
    p_(n[t], e);
  }
  function p_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: c,
        current: f,
        groupIndex: p,
        eventId: d,
        eventTarget: h,
        eventStateKey: E,
        actionListId: y,
        isCarrier: m,
        styleProp: C,
        verbose: b,
        pluginInstance: S,
      } = e,
      { ixData: T, ixSession: R } = t.getState(),
      { events: N } = T,
      w = N[d] || {},
      { mediaQueries: F = T.mediaQueryKeys } = w;
    if (hi(F, R.mediaQueryKey) && (n || r || i)) {
      if (f || (c === OU && i)) {
        t.dispatch(Ya(o, s, f, a));
        let { ixElements: G } = t.getState(),
          { ref: V, refType: X, refState: M } = G[o] || {},
          O = M && M[s];
        (X === a_ || vi(s)) && SU(V, M, O, d, a, C, Te, c, S);
      }
      if (i) {
        if (m) {
          let G = kr({
            store: t,
            eventId: d,
            eventTarget: h,
            eventStateKey: E,
            actionListId: y,
            groupIndex: p + 1,
            verbose: b,
          });
          b && !G && t.dispatch(nr({ actionListId: y, isPlaying: !1 }));
        }
        vs(e, t);
      }
    }
  }
  var e_,
    ot,
    t_,
    r_,
    n_,
    i_,
    or,
    o_,
    di,
    bU,
    fs,
    ds,
    pi,
    a_,
    OU,
    Zm,
    gi,
    AU,
    ps,
    St,
    xU,
    SU,
    s_,
    wU,
    RU,
    CU,
    NU,
    LU,
    PU,
    hi,
    qU,
    MU,
    DU,
    FU,
    GU,
    vi,
    gs,
    VU,
    Jm,
    UU,
    XU,
    tX,
    nX,
    iX,
    oX,
    ls = ne(() => {
      "use strict";
      (e_ = $(da())),
        (ot = $(Dn())),
        (t_ = $(SE())),
        (r_ = $(JE())),
        (n_ = $(ty())),
        (i_ = $(ny())),
        (or = $(cy())),
        (o_ = $(vy()));
      xe();
      di = $(xt());
      ni();
      Iy();
      Qm();
      (bU = Object.keys(gn)),
        (fs = (e) => bU.includes(e)),
        ({
          COLON_DELIMITER: ds,
          BOUNDARY_SELECTOR: pi,
          HTML_ELEMENT: a_,
          RENDER_GENERAL: OU,
          W_MOD_IX: Zm,
        } = ve),
        ({
          getAffectedElements: gi,
          getElementId: AU,
          getDestinationValues: ps,
          observeStore: St,
          getInstanceId: xU,
          renderHTMLElement: SU,
          clearAllStyles: s_,
          getMaxDurationItemIndex: wU,
          getComputedStyle: RU,
          getInstanceOrigin: CU,
          reduceListToGroup: NU,
          shouldNamespaceEventParameter: LU,
          getNamespacedParameterId: PU,
          shouldAllowMediaQuery: hi,
          cleanupHTMLElement: qU,
          clearObjectCache: MU,
          stringifyTarget: DU,
          mediaQueriesEqual: FU,
          shallowEqual: GU,
        } = di.IX2VanillaUtils),
        ({
          isPluginType: vi,
          createPluginInstance: gs,
          getPluginDuration: VU,
        } = di.IX2VanillaPlugins),
        (Jm = navigator.userAgent),
        (UU = Jm.match(/iPad/i) || Jm.match(/iPhone/)),
        (XU = 12);
      tX = ["resize", "orientationchange"];
      (nX = (e, t) => (0, r_.default)((0, i_.default)(e, t), n_.default)),
        (iX = (e, t) => {
          (0, or.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ds + o;
              t(i, n, a);
            });
          });
        }),
        (oX = (e) => {
          let t = { target: e.target, targets: e.targets };
          return gi({ config: t, elementApi: Te });
        });
    });
  var v_ = u((at) => {
    "use strict";
    var cX = en().default,
      lX = Zs().default;
    Object.defineProperty(at, "__esModule", { value: !0 });
    at.actions = void 0;
    at.destroy = h_;
    at.init = hX;
    at.setEnv = gX;
    at.store = void 0;
    Fl();
    var fX = qo(),
      dX = lX((uE(), We(sE))),
      Es = (ls(), We(g_)),
      pX = cX((ni(), We(yy)));
    at.actions = pX;
    var ys = (at.store = (0, fX.createStore)(dX.default));
    function gX(e) {
      e() && (0, Es.observeRequests)(ys);
    }
    function hX(e) {
      h_(), (0, Es.startEngine)({ store: ys, rawData: e, allowEvents: !0 });
    }
    function h_() {
      (0, Es.stopEngine)(ys);
    }
  });
  var __ = u((Lj, m_) => {
    "use strict";
    var E_ = je(),
      y_ = v_();
    y_.setEnv(E_.env);
    E_.define(
      "ix2",
      (m_.exports = function () {
        return y_;
      })
    );
  });
  var I_ = u((Pj, T_) => {
    "use strict";
    var ar = je();
    ar.define(
      "links",
      (T_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = ar.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/,
          d,
          h;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && ar.env("design")),
            (h = ar.env("slug") || a.pathname || ""),
            ar.scroll.off(m),
            (d = []);
          for (var b = document.links, S = 0; S < b.length; ++S) y(b[S]);
          d.length && (ar.scroll.on(m), m());
        }
        function y(b) {
          if (!b.getAttribute("hreflang")) {
            var S =
              (i && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var T = e(b);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var R = e(s.hash);
                R.length && d.push({ link: T, sec: R, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var N =
                  s.href === a.href || S === h || (f.test(S) && p.test(h));
                C(T, c, N);
              }
            }
          }
        }
        function m() {
          var b = n.scrollTop(),
            S = n.height();
          t.each(d, function (T) {
            if (!T.link.attr("hreflang")) {
              var R = T.link,
                N = T.sec,
                w = N.offset().top,
                F = N.outerHeight(),
                G = S * 0.5,
                V = N.is(":visible") && w + F - G >= b && w + G <= b + S;
              T.active !== V && ((T.active = V), C(R, c, V));
            }
          });
        }
        function C(b, S, T) {
          var R = b.hasClass(S);
          (T && R) || (!T && !R) || (T ? b.addClass(S) : b.removeClass(S));
        }
        return r;
      })
    );
  });
  var O_ = u((qj, b_) => {
    "use strict";
    var mi = je();
    mi.define(
      "scroll",
      (b_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (O) {
              window.setTimeout(O, 15);
            },
          c = mi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          p = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(h));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(O) {
          return m.test(O.hash) && O.host + O.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function T(O, g) {
          var A;
          switch (g) {
            case "add":
              (A = O.attr("tabindex")),
                A
                  ? O.attr("data-wf-tabindex-swap", A)
                  : O.attr("tabindex", "-1");
              break;
            case "remove":
              (A = O.attr("data-wf-tabindex-swap")),
                A
                  ? (O.attr("tabindex", A),
                    O.removeAttr("data-wf-tabindex-swap"))
                  : O.removeAttr("tabindex");
              break;
          }
          O.toggleClass("wf-force-outline-none", g === "add");
        }
        function R(O) {
          var g = O.currentTarget;
          if (
            !(
              mi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))
            )
          ) {
            var A = C(g) ? g.hash : "";
            if (A !== "") {
              var P = e(A);
              P.length &&
                (O && (O.preventDefault(), O.stopPropagation()),
                N(A, O),
                window.setTimeout(
                  function () {
                    w(P, function () {
                      T(P, "add"),
                        P.get(0).focus({ preventScroll: !0 }),
                        T(P, "remove");
                    });
                  },
                  O ? 0 : 300
                ));
            }
          }
        }
        function N(O) {
          if (
            r.hash !== O &&
            n &&
            n.pushState &&
            !(mi.env.chrome && r.protocol === "file:")
          ) {
            var g = n.state && n.state.hash;
            g !== O && n.pushState({ hash: O }, "", O);
          }
        }
        function w(O, g) {
          var A = i.scrollTop(),
            P = F(O);
          if (A !== P) {
            var q = G(O, A, P),
              B = Date.now(),
              W = function () {
                var Q = Date.now() - B;
                window.scroll(0, V(A, P, Q, q)),
                  Q <= q ? s(W) : typeof g == "function" && g();
              };
            s(W);
          }
        }
        function F(O) {
          var g = e(f),
            A = g.css("position") === "fixed" ? g.outerHeight() : 0,
            P = O.offset().top - A;
          if (O.data("scroll") === "mid") {
            var q = i.height() - A,
              B = O.outerHeight();
            B < q && (P -= Math.round((q - B) / 2));
          }
          return P;
        }
        function G(O, g, A) {
          if (S()) return 0;
          var P = 1;
          return (
            a.add(O).each(function (q, B) {
              var W = parseFloat(B.getAttribute("data-scroll-time"));
              !isNaN(W) && W >= 0 && (P = W);
            }),
            (472.143 * Math.log(Math.abs(g - A) + 125) - 2e3) * P
          );
        }
        function V(O, g, A, P) {
          return A > P ? g : O + (g - O) * X(A / P);
        }
        function X(O) {
          return O < 0.5
            ? 4 * O * O * O
            : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1;
        }
        function M() {
          var { WF_CLICK_EMPTY: O, WF_CLICK_SCROLL: g } = t;
          o.on(g, d, R),
            o.on(O, p, function (A) {
              A.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: M };
      })
    );
  });
  var x_ = u((Mj, A_) => {
    "use strict";
    var vX = je();
    vX.define(
      "touch",
      (A_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            p;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", y, !1);
          function d(C) {
            var b = C.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = C.clientX),
              (p = f));
          }
          function h(C) {
            if (a) {
              if (s && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var b = C.touches,
                S = b ? b[0].clientX : C.clientX,
                T = S - p;
              (p = S),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: T > 0 ? "right" : "left" }), y());
            }
          }
          function E(C) {
            if (a && ((a = !1), s && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (s = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function m() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = m;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var w_ = u((Dj, S_) => {
    "use strict";
    var vt = je(),
      EX = Ri();
    vt.define(
      "tabs",
      (S_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = vt.env,
          s = a.safari,
          c = a(),
          f = "data-w-tab",
          p = "data-w-pane",
          d = ".w-tabs",
          h = "w--current",
          E = "w--tab-active",
          y = EX.triggers,
          m = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (m = !0), C(), (m = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(T), b());
          });
        function C() {
          (o = c && vt.env("design")),
            (i = n.find(d)),
            i.length &&
              (i.each(R), vt.env("preview") && !m && i.each(T), b(), S());
        }
        function b() {
          vt.redraw.off(t.redraw);
        }
        function S() {
          vt.redraw.on(t.redraw);
        }
        function T(M, O) {
          var g = e.data(O, d);
          g &&
            (g.links && g.links.each(y.reset),
            g.panes && g.panes.each(y.reset));
        }
        function R(M, O) {
          var g = d.substr(1) + "-" + M,
            A = e(O),
            P = e.data(O, d);
          if (
            (P || (P = e.data(O, d, { el: A, config: {} })),
            (P.current = null),
            (P.tabIdentifier = g + "-" + f),
            (P.paneIdentifier = g + "-" + p),
            (P.menu = A.children(".w-tab-menu")),
            (P.links = P.menu.children(".w-tab-link")),
            (P.content = A.children(".w-tab-content")),
            (P.panes = P.content.children(".w-tab-pane")),
            P.el.off(d),
            P.links.off(d),
            P.menu.attr("role", "tablist"),
            P.links.attr("tabindex", "-1"),
            N(P),
            !o)
          ) {
            P.links.on("click" + d, F(P)), P.links.on("keydown" + d, G(P));
            var q = P.links.filter("." + h),
              B = q.attr(f);
            B && V(P, { tab: B, immediate: !0 });
          }
        }
        function N(M) {
          var O = {};
          O.easing = M.el.attr("data-easing") || "ease";
          var g = parseInt(M.el.attr("data-duration-in"), 10);
          g = O.intro = g === g ? g : 0;
          var A = parseInt(M.el.attr("data-duration-out"), 10);
          (A = O.outro = A === A ? A : 0),
            (O.immediate = !g && !A),
            (M.config = O);
        }
        function w(M) {
          var O = M.current;
          return Array.prototype.findIndex.call(
            M.links,
            (g) => g.getAttribute(f) === O,
            null
          );
        }
        function F(M) {
          return function (O) {
            O.preventDefault();
            var g = O.currentTarget.getAttribute(f);
            g && V(M, { tab: g });
          };
        }
        function G(M) {
          return function (O) {
            var g = w(M),
              A = O.key,
              P = {
                ArrowLeft: g - 1,
                ArrowUp: g - 1,
                ArrowRight: g + 1,
                ArrowDown: g + 1,
                End: M.links.length - 1,
                Home: 0,
              };
            if (A in P) {
              O.preventDefault();
              var q = P[A];
              q === -1 && (q = M.links.length - 1),
                q === M.links.length && (q = 0);
              var B = M.links[q],
                W = B.getAttribute(f);
              W && V(M, { tab: W });
            }
          };
        }
        function V(M, O) {
          O = O || {};
          var g = M.config,
            A = g.easing,
            P = O.tab;
          if (P !== M.current) {
            M.current = P;
            var q;
            M.links.each(function (k, Z) {
              var Ce = e(Z);
              if (O.immediate || g.immediate) {
                var Ne = M.panes[k];
                Z.id || (Z.id = M.tabIdentifier + "-" + k),
                  Ne.id || (Ne.id = M.paneIdentifier + "-" + k),
                  (Z.href = "#" + Ne.id),
                  Z.setAttribute("role", "tab"),
                  Z.setAttribute("aria-controls", Ne.id),
                  Z.setAttribute("aria-selected", "false"),
                  Ne.setAttribute("role", "tabpanel"),
                  Ne.setAttribute("aria-labelledby", Z.id);
              }
              Z.getAttribute(f) === P
                ? ((q = Z),
                  Ce.addClass(h)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : Ce.hasClass(h) &&
                  Ce.removeClass(h)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var B = [],
              W = [];
            M.panes.each(function (k, Z) {
              var Ce = e(Z);
              Z.getAttribute(f) === P ? B.push(Z) : Ce.hasClass(E) && W.push(Z);
            });
            var Q = e(B),
              se = e(W);
            if (O.immediate || g.immediate) {
              Q.addClass(E).each(y.intro),
                se.removeClass(E),
                m || vt.redraw.up();
              return;
            } else {
              var He = window.scrollX,
                de = window.scrollY;
              q.focus(), window.scrollTo(He, de);
            }
            se.length && g.outro
              ? (se.each(y.outro),
                r(se)
                  .add("opacity " + g.outro + "ms " + A, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => X(g, se, Q)))
              : X(g, se, Q);
          }
        }
        function X(M, O, g) {
          if (
            (O.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            g.addClass(E).each(y.intro),
            vt.redraw.up(),
            !M.intro)
          )
            return r(g).set({ opacity: 1 });
          r(g)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + M.intro + "ms " + M.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Ds();
  Gs();
  Us();
  Bs();
  Ri();
  __();
  I_();
  O_();
  x_();
  w_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704904794766,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-5" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|be3af9ea-9834-d843-a7cf-52f3bec50b8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|be3af9ea-9834-d843-a7cf-52f3bec50b8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905199270,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-7" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|9680e275-7551-4d82-b02e-e6348a032ff2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|9680e275-7551-4d82-b02e-e6348a032ff2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905270302,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-9" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|31fbf6f8-90d9-f9f7-e672-6c5187d7d288",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|31fbf6f8-90d9-f9f7-e672-6c5187d7d288",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905301318,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "POP_EFFECT",
        instant: false,
        config: { actionListId: "pop", autoStopEventId: "e-11" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|cf5911e5-da71-0e1b-c8c1-4a40b1f879b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|cf5911e5-da71-0e1b-c8c1-4a40b1f879b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905311085,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-15" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|d3587253-8a1d-b339-23f8-46ad429be894",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|d3587253-8a1d-b339-23f8-46ad429be894",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 171,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1704905716842,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "JIGGLE_EFFECT",
        instant: false,
        config: { actionListId: "jiggle", autoStopEventId: "e-17" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|bfa4768a-0e0f-78e2-c827-0d2e5b92709d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|bfa4768a-0e0f-78e2-c827-0d2e5b92709d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905767855,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "JIGGLE_EFFECT",
        instant: false,
        config: { actionListId: "jiggle", autoStopEventId: "e-19" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|3c30faf0-acce-b06e-3142-97dffb57c2e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|3c30faf0-acce-b06e-3142-97dffb57c2e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905804848,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-21" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|85025925-79ad-e690-e620-13c87b2c34b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|85025925-79ad-e690-e620-13c87b2c34b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1704905818012,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "JELLO_EFFECT",
        instant: false,
        config: { actionListId: "jello", autoStopEventId: "e-23" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|3ab25b90-0378-a7c6-f5ea-ca84b9b40843",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|3ab25b90-0378-a7c6-f5ea-ca84b9b40843",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905830404,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-25" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|d3587253-8a1d-b339-23f8-46ad429be895",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|d3587253-8a1d-b339-23f8-46ad429be895",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 133,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705053847901,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-27" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|55e5991e-374f-2f55-4fa8-bdab7c47f920",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|55e5991e-374f-2f55-4fa8-bdab7c47f920",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 210,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054175419,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-29" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|b8479215-7eb8-13d6-3ff1-2cacd875c2dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|b8479215-7eb8-13d6-3ff1-2cacd875c2dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 210,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054194055,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-31" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|89ae659a-6038-3c89-8dd2-9007bd85a58c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|89ae659a-6038-3c89-8dd2-9007bd85a58c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 171,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054209497,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-33" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|40d58c98-12e4-338e-fb13-9ca82b74a357",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|40d58c98-12e4-338e-fb13-9ca82b74a357",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 229,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054227651,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-35" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|bf924835-8a45-72bc-1a50-6410a04c6390",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|bf924835-8a45-72bc-1a50-6410a04c6390",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 171,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054246201,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FLY_EFFECT",
        instant: false,
        config: { actionListId: "flyInBottom", autoStopEventId: "e-37" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|5bcbe162-c61e-1048-1c89-9c5699e9e668",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|5bcbe162-c61e-1048-1c89-9c5699e9e668",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 171,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705054267750,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-39" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6593e19d1d741bf69d8caee4|8d3c5e80-5f44-ff63-416c-dd1202ed32d5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6593e19d1d741bf69d8caee4|8d3c5e80-5f44-ff63-416c-dd1202ed32d5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1705054804828,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-41" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "6593e19d1d741bf69d8caee4|c600932f-7c4a-500d-e7e4-f325916e3148",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705945653706,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-43" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "6593e19d1d741bf69d8caee4|cf3fd921-b652-22c2-ffea-f38978a0ed08",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705945682005,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-45" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "6593e19d1d741bf69d8caee4|acbfe969-11b3-0dda-cb73-4fb8443f7b2d",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705945692871,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-47" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "6593e19d1d741bf69d8caee4|ee415df0-088b-3164-5d7e-041e6325d2c6",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705946302846,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        config: { actionListId: "slideInBottom", autoStopEventId: "e-49" },
        instant: false,
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "6593e19d1d741bf69d8caee4|919210f9-fc69-3543-d006-2c4451a60659",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705946329896,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "main text",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6593e19d1d741bf69d8caee4|f18462fd-3063-85f0-7d2f-1259a5488d12",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6593e19d1d741bf69d8caee4|f18462fd-3063-85f0-7d2f-1259a5488d12",
                },
                yValue: 65,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6593e19d1d741bf69d8caee4|f18462fd-3063-85f0-7d2f-1259a5488d12",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6593e19d1d741bf69d8caee4|f18462fd-3063-85f0-7d2f-1259a5488d12",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704904930266,
    },
    pop: {
      id: "pop",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 250,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outElastic",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    jiggle: {
      id: "jiggle",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: -5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: -5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: -5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: -5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: -5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    jello: {
      id: "jello",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 100,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -12,
                yValue: -12,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outElastic",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
    },
    flyInBottom: {
      id: "flyInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                yValue: 800,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.25,
                yValue: 0.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
