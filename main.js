/*! For license information please see main.js.LICENSE.txt */
(() => { var e = { 245: e => { e.exports = function(e) {! function(e) { if (!e) throw new Error("Eventify cannot use falsy object as events subject"); for (var t = ["on", "fire", "off"], n = 0; n < t.length; ++n)
                            if (e.hasOwnProperty(t[n])) throw new Error("Subject cannot be eventified, since it already has property '" + t[n] + "'") }(e); var t = function(e) { var t = Object.create(null); return { on: function(n, r, o) { if ("function" != typeof r) throw new Error("callback is expected to be a function"); var i = t[n]; return i || (i = t[n] = []), i.push({ callback: r, ctx: o }), e }, off: function(n, r) { if (void 0 === n) return t = Object.create(null), e; if (t[n])
                                    if ("function" != typeof r) delete t[n];
                                    else
                                        for (var o = t[n], i = 0; i < o.length; ++i) o[i].callback === r && o.splice(i, 1);
                                return e }, fire: function(n) { var r, o = t[n]; if (!o) return e;
                                arguments.length > 1 && (r = Array.prototype.splice.call(arguments, 1)); for (var i = 0; i < o.length; ++i) { var a = o[i];
                                    a.callback.apply(a.ctx, r) } return e } } }(e); return e.on = t.on, e.off = t.off, e.fire = t.fire, e } }, 736: (e, t, n) => { e.exports = function(e) { if ("uniqueLinkId" in (e = e || {}) && (console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n", "\n", "Note: there is also change in default behavior: From now on each graph\nis considered to be not a multigraph by default (each edge is unique)."), e.multigraph = e.uniqueLinkId), void 0 === e.multigraph && (e.multigraph = !1), "function" != typeof Map) throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph"); var t, n = new Map,
                        c = [],
                        f = {},
                        l = 0,
                        d = e.multigraph ? function(e, t, n) { var r = u(e, t),
                                o = f.hasOwnProperty(r); if (o || S(e, t)) { o || (f[r] = 0); var i = "@" + ++f[r];
                                r = u(e + i, t + i) } return new s(e, t, n, r) } : function(e, t, n) { return new s(e, t, n, u(e, t)) },
                        h = [],
                        p = C,
                        m = C,
                        v = C,
                        g = C,
                        y = { addNode: x, addLink: function(e, t, n) { v(); var r = E(e) || x(e),
                                    o = E(t) || x(t),
                                    i = d(e, t, n); return c.push(i), a(r, i), e !== t && a(o, i), p(i, "add"), g(), i }, removeLink: P, removeNode: A, getNode: E, getNodeCount: T, getLinkCount: _, getLinksCount: _, getNodesCount: T, getLinks: function(e) { var t = E(e); return t ? t.links : null }, forEachNode: I, forEachLinkedNode: function(e, t, r) { var o = E(e); if (o && o.links && "function" == typeof t) return r ? function(e, t, r) { for (var o = 0; o < e.length; ++o) { var i = e[o]; if (i.fromId === t && r(n.get(i.toId), i)) return !0 } }(o.links, e, t) : function(e, t, r) { for (var o = 0; o < e.length; ++o) { var i = e[o],
                                            a = i.fromId === t ? i.toId : i.fromId; if (r(n.get(a), i)) return !0 } }(o.links, e, t) }, forEachLink: function(e) { var t, n; if ("function" == typeof e)
                                    for (t = 0, n = c.length; t < n; ++t) e(c[t]) }, beginUpdate: v, endUpdate: g, clear: function() { v(), I((function(e) { A(e.id) })), g() }, hasLink: S, hasNode: E, getLink: S }; return r(y), t = y.on, y.on = function() { return y.beginUpdate = v = L, y.endUpdate = g = R, p = w, m = b, y.on = t, t.apply(y, arguments) }, y;

                    function w(e, t) { h.push({ link: e, changeType: t }) }

                    function b(e, t) { h.push({ node: e, changeType: t }) }

                    function x(e, t) { if (void 0 === e) throw new Error("Invalid node identifier");
                        v(); var r = E(e); return r ? (r.data = t, m(r, "update")) : (r = new i(e, t), m(r, "add")), n.set(e, r), g(), r }

                    function E(e) { return n.get(e) }

                    function A(e) { var t = E(e); if (!t) return !1;
                        v(); var r = t.links; if (r) { t.links = null; for (var o = 0; o < r.length; ++o) P(r[o]) } return n.delete(e), m(t, "remove"), g(), !0 }

                    function T() { return n.size }

                    function _() { return c.length }

                    function P(e) { if (!e) return !1; var t = o(e, c); if (t < 0) return !1;
                        v(), c.splice(t, 1); var n = E(e.fromId),
                            r = E(e.toId); return n && (t = o(e, n.links)) >= 0 && n.links.splice(t, 1), r && (t = o(e, r.links)) >= 0 && r.links.splice(t, 1), p(e, "remove"), g(), !0 }

                    function S(e, t) { var n, r = E(e); if (!r || !r.links) return null; for (n = 0; n < r.links.length; ++n) { var o = r.links[n]; if (o.fromId === e && o.toId === t) return o } return null }

                    function C() {}

                    function L() { l += 1 }

                    function R() { 0 == (l -= 1) && h.length > 0 && (y.fire("changed", h), h.length = 0) }

                    function I(e) { if ("function" != typeof e) throw new Error("Function is expected to iterate over graph nodes. You passed " + e); for (var t = n.values(), r = t.next(); !r.done;) { if (e(r.value)) return !0;
                            r = t.next() } } }; var r = n(245);

                function o(e, t) { if (!t) return -1; if (t.indexOf) return t.indexOf(e); var n, r = t.length; for (n = 0; n < r; n += 1)
                        if (t[n] === e) return n;
                    return -1 }

                function i(e, t) { this.id = e, this.links = null, this.data = t }

                function a(e, t) { e.links ? e.links.push(t) : e.links = [t] }

                function s(e, t, n, r) { this.fromId = e, this.toId = t, this.data = n, this.id = r }

                function u(e, t) { return e.toString() + "👉 " + t.toString() } }, 959: e => { e.exports = function(e, t, n, r) { var o = 0,
                        i = 0,
                        a = (r = r || {}).step || 1,
                        s = r.maxTimeMS || 8,
                        u = r.probeElements || 5e3;
                    setTimeout((function r() { var c = Math.min(e.length, o + u),
                            f = o,
                            l = new Date; for (f = o; f < c; f += a) t(e[f], f, e);
                        f < e.length ? (i += new Date - l, o = f, u = Math.round(o * s / i), setTimeout(r, 0)) : n(e) }), 0) } }, 519: (e, t, n) => { "use strict";
                n.r(t), n.d(t, { scene: () => U, PointCollection: () => Q, Point: () => ee, LineCollection: () => ae, WireCollection: () => ue, LineStripCollection: () => fe, Element: () => X, isWebGLEnabled: () => le, utils: () => z }); var r, o, i, a = c,
                    s = c,
                    u = "";

                function c(e, t, n) { f(e, i, t, n), "DOMMouseScroll" == i && f(e, "MozMousePixelScroll", t, n) }

                function f(e, t, n, o) { e[r](u + t, "wheel" == i ? n : function(e) {!e && (e = window.event); var t = { originalEvent: e, target: e.target || e.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1, deltaX: 0, deltaY: 0, deltaZ: 0, clientX: e.clientX, clientY: e.clientY, preventDefault: function() { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }, stopPropagation: function() { e.stopPropagation && e.stopPropagation() }, stopImmediatePropagation: function() { e.stopImmediatePropagation && e.stopImmediatePropagation() } }; return "mousewheel" == i ? (t.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (t.deltaX = -1 / 40 * e.wheelDeltaX)) : t.deltaY = e.detail, n(t) }, o || !1) }

                function l(e, t, n, r) { e[o](u + t, n, r || !1) }! function(e, t) { e && e.addEventListener ? (r = "addEventListener", o = "removeEventListener") : (r = "attachEvent", o = "detachEvent", u = "on"), i = t ? "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll" : "wheel" }("undefined" != typeof window && window, "undefined" != typeof document && document), a.addWheelListener = s, a.removeWheelListener = function(e, t, n) { l(e, i, t, n), "DOMMouseScroll" == i && l(e, "MozMousePixelScroll", t, n) }; var d = .1,
                    h = "function" == typeof Float32Array;

                function p(e, t) { return 1 - 3 * t + 3 * e }

                function m(e, t) { return 3 * t - 6 * e }

                function v(e) { return 3 * e }

                function g(e, t, n) { return ((p(t, n) * e + m(t, n)) * e + v(t)) * e }

                function y(e, t, n) { return 3 * p(t, n) * e * e + 2 * m(t, n) * e + v(t) }

                function w(e) { return e } var b = function(e, t, n, r) { if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range"); if (e === t && n === r) return w; for (var o = h ? new Float32Array(11) : new Array(11), i = 0; i < 11; ++i) o[i] = g(i * d, e, n); return function(i) { return 0 === i ? 0 : 1 === i ? 1 : g(function(t) { for (var r = 0, i = 1; 10 !== i && o[i] <= t; ++i) r += d;--i; var a = r + (t - o[i]) / (o[i + 1] - o[i]) * d,
                                    s = y(a, e, n); return s >= .001 ? function(e, t, n, r) { for (var o = 0; o < 4; ++o) { var i = y(t, n, r); if (0 === i) return t;
                                        t -= (g(t, n, r) - e) / i } return t }(t, a, e, n) : 0 === s ? a : function(e, t, n, r, o) { var i, a, s = 0;
                                    do {
                                        (i = g(a = t + (n - t) / 2, r, o) - e) > 0 ? n = a : t = a } while (Math.abs(i) > 1e-7 && ++s < 10); return a }(t, r, r + d, e, n) }(i), t, r) } },
                    x = { ease: b(.25, .1, .25, 1), easeIn: b(.42, 0, 1, 1), easeOut: b(0, 0, .58, 1), easeInOut: b(.42, 0, .58, 1), linear: b(0, 0, 1, 1) },
                    E = function(e, t, n) { var r = Object.create(null),
                            o = Object.create(null),
                            i = "function" == typeof(n = n || {}).easing ? n.easing : x[n.easing];
                        i || (n.easing && console.warn("Unknown easing function in amator: " + n.easing), i = x.ease); var a = "function" == typeof n.step ? n.step : _,
                            s = "function" == typeof n.done ? n.done : _,
                            u = function(e) { if (!e) return "undefined" != typeof window && window.requestAnimationFrame ? { next: window.requestAnimationFrame.bind(window), cancel: window.cancelAnimationFrame.bind(window) } : { next: function(e) { return setTimeout(e, 1e3 / 60) }, cancel: function(e) { return clearTimeout(e) } }; if ("function" != typeof e.next) throw new Error("Scheduler is supposed to have next(cb) function"); if ("function" != typeof e.cancel) throw new Error("Scheduler is supposed to have cancel(handle) function"); return e }(n.scheduler),
                            c = Object.keys(t);
                        c.forEach((function(n) { r[n] = e[n], o[n] = t[n] - e[n] })); var f, l = "number" == typeof n.duration ? n.duration : 400,
                            d = Math.max(1, .06 * l),
                            h = 0; return f = u.next((function t() { var n = i(h / d);
                            h += 1,
                                function(t) { c.forEach((function(n) { e[n] = o[n] * t + r[n] })) }(n), h <= d ? (f = u.next(t), a(e)) : (f = 0, setTimeout((function() { s(e) }), 0)) })), { cancel: function() { u.cancel(f), f = 0 } } },
                    A = P,
                    T = P();

                function _() {}

                function P() { var e = new Set,
                        t = new Set,
                        n = 0; return { next: r, cancel: r, clearAll: function() { e.clear(), t.clear(), cancelAnimationFrame(n), n = 0 } };

                    function r(e) { t.add(e), n || (n = requestAnimationFrame(o)) }

                    function o() { n = 0; var r = t;
                        t = e, (e = r).forEach((function(e) { e() })), e.clear() } }
                E.makeAggregateRaf = A, E.sharedScheduler = T; var S = "function" != typeof Event;

                function C(e) { return e.stopPropagation(), !1 } var L, R, I, F = function() { this.x = 0, this.y = 0, this.scale = 1 },
                    N = { capture: function(e) { R = window.document.onselectstart, I = window.document.ondragstart, window.document.onselectstart = C, (L = e).ondragstart = C }, release: function() { window.document.onselectstart = R, L && (L.ondragstart = I) } },
                    k = function(e, t) { var n = (t = t || {}).controller; if (n || (e instanceof SVGElement && (n = function(e) { if (!(e instanceof SVGElement)) throw new Error("svg element is required for svg.panzoom to work"); var t = e.ownerSVGElement; if (!t) throw new Error("Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"); return t.setAttribute("tabindex", 1), { getBBox: function() { var t = e.getBBox(); return { left: t.x, top: t.y, width: t.width, height: t.height } }, getScreenCTM: function() { return t.getScreenCTM() }, getOwner: function() { return t }, applyTransform: function(t) { e.setAttribute("transform", "matrix(" + t.scale + " 0 0 " + t.scale + " " + t.x + " " + t.y + ")") }, initTransform: function(n) { var r = e.getScreenCTM();
                                        n.x = r.e, n.y = r.f, n.scale = r.a, t.removeAttributeNS(null, "viewBox") } } }(e)), e instanceof HTMLElement && (n = function(e) { if (!(e instanceof HTMLElement)) throw new Error("svg element is required for svg.panzoom to work"); var t = e.parentElement; if (!t) throw new Error("Do not apply panzoom to the detached DOM element. "); return e.scrollTop = 0, t.setAttribute("tabindex", 1), { getBBox: function() { return { left: 0, top: 0, width: e.clientWidth, height: e.clientHeight } }, getOwner: function() { return t }, applyTransform: function(t) { e.style.transformOrigin = "0 0 0", e.style.transform = "matrix(" + t.scale + ", 0, 0, " + t.scale + ", " + t.x + ", " + t.y + ")" } } }(e))), !n) throw new Error("Cannot create panzoom for the current type of dom element"); var r = n.getOwner(),
                            o = { x: 0, y: 0 },
                            i = !1,
                            s = new F;
                        n.initTransform && n.initTransform(s); var u, c = "boolean" == typeof t.realPinch && t.realPinch,
                            f = t.bounds,
                            l = "number" == typeof t.maxZoom ? t.maxZoom : Number.POSITIVE_INFINITY,
                            d = "number" == typeof t.minZoom ? t.minZoom : 0,
                            h = "number" == typeof t.boundsPadding ? t.boundsPadding : .05,
                            p = "number" == typeof t.zoomDoubleClickSpeed ? t.zoomDoubleClickSpeed : 1.75,
                            m = t.beforeWheel || B,
                            v = "number" == typeof t.zoomSpeed ? t.zoomSpeed : .065;
                        (function(e) { var t = typeof e; if ("undefined" !== t && "boolean" !== t && !(D(e.left) && D(e.top) && D(e.bottom) && D(e.right))) throw new Error("Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}") })(f), t.autocenter && function() { var e, t, o = 0,
                                i = 0,
                                a = M();
                            a ? (o = a.left, i = a.top, e = a.right - a.left, t = a.bottom - a.top) : (e = r.clientWidth, t = r.clientHeight); var u = n.getBBox(); if (0 !== u.width && 0 !== u.height) { var c = t / u.height,
                                    f = e / u.width,
                                    l = Math.min(f, c);
                                s.x = -(u.left + u.width / 2) * l + e / 2 + o, s.y = -(u.top + u.height / 2) * l + t / 2 + i, s.scale = l } }(); var g, y, w, b, x, A, T, _ = 0,
                            P = !1,
                            C = !1; return b = "smoothScroll" in t && !t.smoothScroll ? { start: B, stop: B, cancel: B } : function(e, t, n) { "object" != typeof n && (n = {}); var r, o, i, a, s, u, c, f, l, d, h = "number" == typeof n.minVelocity ? n.minVelocity : 5,
                                p = "number" == typeof n.amplitude ? n.amplitude : .25; return { start: function() { r = e(), u = l = a = c = 0, o = new Date, window.clearInterval(i), window.cancelAnimationFrame(d), i = window.setInterval(m, 100) }, stop: function() { window.clearInterval(i), window.cancelAnimationFrame(d); var t = e();
                                    s = t.x, f = t.y, o = Date.now(), (a < -h || a > h) && (s += u = p * a), (c < -h || c > h) && (f += l = p * c), d = window.requestAnimationFrame(v) }, cancel: function() { window.clearInterval(i), window.cancelAnimationFrame(d) } };

                            function m() { var t = Date.now(),
                                    n = t - o;
                                o = t; var i = e(),
                                    s = i.x - r.x,
                                    u = i.y - r.y;
                                r = i; var f = 1e3 / (1 + n);
                                a = .8 * s * f + .2 * a, c = .8 * u * f + .2 * c }

                            function v() { var e = Date.now() - o,
                                    n = !1,
                                    r = 0,
                                    i = 0;
                                u && ((r = -u * Math.exp(-e / 342)) > .5 || r < -.5 ? n = !0 : r = u = 0), l && ((i = -l * Math.exp(-e / 342)) > .5 || i < -.5 ? n = !0 : i = l = 0), n && (t(s + r, f + i), d = window.requestAnimationFrame(v)) } }((function() { return { x: s.x, y: s.y } }), (function(e, t) { se(), R(e, t) }), t.smoothScroll), r.addEventListener("mousedown", J), r.addEventListener("dblclick", $), r.addEventListener("touchstart", V), r.addEventListener("keydown", W), a.addWheelListener(r, ne), O(), { dispose: function() { a.removeWheelListener(r, ne), r.removeEventListener("mousedown", J), r.removeEventListener("keydown", W), r.removeEventListener("dblclick", $), u && (window.cancelAnimationFrame(u), u = 0), b.cancel(), ee(), te(), fe() }, moveBy: z, moveTo: R, centerOn: function(e) { var t = e.ownerSVGElement; if (!t) throw new Error("ui element is required to be within the scene"); var n = e.getBoundingClientRect(),
                                    r = n.left + n.width / 2,
                                    o = n.top + n.height / 2,
                                    i = t.getBoundingClientRect();
                                z(i.width / 2 - r, i.height / 2 - o, !0) }, zoomTo: ae, zoomAbs: U, getTransform: function() { return s }, showRectangle: function(e) { var t = L(r.clientWidth, r.clientHeight),
                                    n = e.right - e.left,
                                    o = e.bottom - e.top; if (!Number.isFinite(n) || !Number.isFinite(o)) throw new Error("Invalid rectangle"); var i = t.x / n,
                                    a = t.y / o,
                                    u = Math.min(i, a);
                                s.x = -(e.left + n / 2) * u + t.x / 2, s.y = -(e.top + o / 2) * u + t.y / 2, s.scale = u } };

                        function L(e, t) { if (n.getScreenCTM) { var r = n.getScreenCTM(),
                                    i = r.a,
                                    a = r.d,
                                    s = r.e,
                                    u = r.f;
                                o.x = e * i - s, o.y = t * a - u } else o.x = e, o.y = t; return o }

                        function R(e, t) { s.x = e, s.y = t, k(), le("pan"), O() }

                        function I(e, t) { R(s.x + e, s.y + t) }

                        function k() { var e = M(); if (e) { var t, r, o, i, a = !1,
                                    u = (o = (t = n.getBBox()).left, i = t.top, { left: (r = { x: o * s.scale + s.x, y: i * s.scale + s.y }).x, top: r.y, right: t.width * s.scale + r.x, bottom: t.height * s.scale + r.y }),
                                    c = e.left - u.right; return c > 0 && (s.x += c, a = !0), (c = e.right - u.left) < 0 && (s.x += c, a = !0), (c = e.top - u.bottom) > 0 && (s.y += c, a = !0), (c = e.bottom - u.top) < 0 && (s.y += c, a = !0), a } }

                        function M() { if (f) { if ("boolean" == typeof f) { var e = r.clientWidth,
                                        t = r.clientHeight; return { left: e * h, top: t * h, right: e * (1 - h), bottom: t * (1 - h) } } return f } }

                        function O() { i = !0, u = window.requestAnimationFrame(j) }

                        function X(e, t, n) { if (Y(e) || Y(t) || Y(n)) throw new Error("zoom requires valid numbers"); var r = s.scale * n; if (r < d) { if (s.scale === d) return;
                                n = d / s.scale } if (r > l) { if (s.scale === l) return;
                                n = l / s.scale } var o = L(e, t);
                            s.x = o.x - n * (o.x - s.x), s.y = o.y - n * (o.y - s.y), k() || (s.scale *= n), le("zoom"), O() }

                        function U(e, t, n) { X(e, t, n / s.scale) }

                        function z(e, t, n) { if (!n) return I(e, t);
                            x && x.cancel(); var r = 0,
                                o = 0;
                            x = E({ x: 0, y: 0 }, { x: e, y: t }, { step: function(e) { I(e.x - r, e.y - o), r = e.x, o = e.y } }) }

                        function j() { i && (i = !1, n.applyTransform(s), le("transform"), u = 0) }

                        function W(e) { var t = 0,
                                n = 0,
                                o = 0; if (38 === e.keyCode ? n = 1 : 40 === e.keyCode ? n = -1 : 37 === e.keyCode ? t = 1 : 39 === e.keyCode ? t = -1 : 189 === e.keyCode || 109 === e.keyCode ? o = 1 : 187 !== e.keyCode && 107 !== e.keyCode || (o = -1), t || n) { e.preventDefault(), e.stopPropagation(); var i = r.getBoundingClientRect(),
                                    a = Math.min(i.width, i.height);
                                z(.05 * a * t, .05 * a * n) } if (o) { var s = ue(o);
                                ae(r.clientWidth / 2, r.clientHeight / 2, s) } }

                        function V(e) { if (function(e) { t.onTouch && !t.onTouch(e) || (e.stopPropagation(), e.preventDefault()) }(e), 1 === e.touches.length) return function(e) { var t = oe(e.touches[0], e.target);
                                g = t.x, y = t.y, q() }(e, e.touches[0]);
                            2 === e.touches.length && (w = Z(e.touches[0], e.touches[1]), T = !0, q()) }

                        function q() { P || (P = !0, document.addEventListener("touchmove", G), document.addEventListener("touchend", H), document.addEventListener("touchcancel", H)) }

                        function G(e) { if (1 === e.touches.length) { e.stopPropagation(); var t = oe(e.touches[0], e.target),
                                    n = t.x - g,
                                    r = t.y - y;
                                0 !== n && 0 !== r && ce(), g = t.x, y = t.y; var o = L(n, r);
                                z(o.x, o.y) } else if (2 === e.touches.length) { T = !0; var i = e.touches[0],
                                    a = e.touches[1],
                                    s = Z(i, a),
                                    u = 1; if (c) u = s / w;
                                else { var f = 0;
                                    s < w ? f = 1 : s > w && (f = -1), u = ue(f) }
                                g = (i.clientX + a.clientX) / 2, y = (i.clientY + a.clientY) / 2, ae(g, y, u), w = s, e.stopPropagation(), e.preventDefault() } }

                        function H(e) { if (e.touches.length > 0) { var t = oe(e.touches[0], e.target);
                                g = t.x, y = t.y } else { var n = new Date;
                                n - _ < 300 && ie(g, y, p), _ = n, P = !1, fe(), te() } }

                        function Z(e, t) { return Math.sqrt((e.clientX - t.clientX) * (e.clientX - t.clientX) + (e.clientY - t.clientY) * (e.clientY - t.clientY)) }

                        function $(e) { var t = re(e);
                            ie(t.x, t.y, p), e.preventDefault(), e.stopPropagation() }

                        function J(e) { if (P) return e.stopPropagation(), !1; if (1 === e.button && null !== window.event || 0 === e.button) { var t = re(e),
                                    n = L(t.x, t.y); return g = n.x, y = n.y, document.addEventListener("mousemove", K), document.addEventListener("mouseup", Q), N.capture(e.target || e.srcElement), !1 } }

                        function K(e) { if (!P) { ce(); var t = re(e),
                                    n = L(t.x, t.y),
                                    r = n.x - g,
                                    o = n.y - y;
                                g = n.x, y = n.y, z(r, o) } }

                        function Q() { N.release(), fe(), ee() }

                        function ee() { document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", Q), C = !1 }

                        function te() { document.removeEventListener("touchmove", G), document.removeEventListener("touchend", H), document.removeEventListener("touchcancel", H), C = !1, T = !1 }

                        function ne(e) { if (!m(e)) { b.cancel(); var t = ue(e.deltaY); if (1 !== t) { var n = re(e);
                                    ae(n.x, n.y, t), e.preventDefault() } } }

                        function re(e) { var t = e.offsetX,
                                n = e.offsetY; if (void 0 === t) { var r = e.target.getBoundingClientRect();
                                t = e.clientX - r.left, n = e.clientY - r.top } return { x: t, y: n } }

                        function oe(e, t) { var n = t.getBoundingClientRect(); return { x: e.clientX - n.left, y: e.clientY - n.top } }

                        function ie(e, t, n) { var r = s.scale,
                                o = { scale: r },
                                i = { scale: n * r };
                            b.cancel(), se(), le("zoom"), A = E(o, i, { step: function(n) { U(e, t, n.scale) } }) }

                        function ae(e, t, n) { return b.cancel(), se(), X(e, t, n) }

                        function se() { A && (A.cancel(), A = null) }

                        function ue(e) { var t = 1; return e > 0 ? t = 1 - v : e < 0 && (t = 1 + v), t }

                        function ce() { C || (le("panstart"), C = !0, b.start()) }

                        function fe() { C && (T || b.stop(), le("panend")) }

                        function le(t) { var n = function(e) { if (S) { var t = document.createEvent("CustomEvent"); return t.initCustomEvent(e, !0, !0, void 0), t } return new Event(e, { bubbles: !0 }) }(t);
                            e.dispatchEvent(n) } };

                function B() {}

                function D(e) { return Number.isFinite(e) }

                function Y(e) { return Number.isNaN ? Number.isNaN(e) : e != e } var M = function(e, t, n) { e = e || 1, t = t || 0, n = n || 0, this._array = [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, t, n, 0, 1] },
                    O = { scale: {}, dx: {}, dy: {} };
                M.prototype.multiply = function(e, t) { var n = e.scale * t.scale,
                        r = e.scale * t.dx + e.dx,
                        o = e.scale * t.dy + e.dy; return this.scale = n, this.dx = r, this.dy = o, this }, O.scale.get = function() { return this._array[0] }, O.dx.get = function() { return this._array[12] }, O.dy.get = function() { return this._array[13] }, O.dx.set = function(e) { this._array[12] = e }, O.dy.set = function(e) { this._array[13] = e }, O.scale.set = function(e) { this._array[0] = e, this._array[5] = e }, M.prototype.copyTo = function(e) { return function(e, t) { if (e.length !== t.length) throw new Error("Array length mismatch"); for (var n = 0; n < e.length; ++n) t[n] = e[n] }(this._array, e._array), this }, M.prototype.getArray = function() { return this._array }, Object.defineProperties(M.prototype, O); var X = function() { this.children = [], this.transform = new M, this.worldTransform = new M, this.worldTransformNeedsUpdate = !0, this.type = "Element", this.scene = null };
                X.prototype.appendChild = function(e, t) { e.parent = this, t ? this.children.unshift(e) : this.children.push(e), e.bindScene && e.bindScene(this.scene), this.scene && this.scene.renderFrame() }, X.prototype.bindScene = function(e) { this.scene = e }, X.prototype.traverse = function(e, t) { e(this); for (var n = 0; n < this.children.length; ++n) this.children[n].traverse(e, t);
                    t && t(this) }, X.prototype.removeChild = function(e) { var t = this.children.indexOf(e);
                    t > -1 && this.children.splice(t, 1), this.scene && this.scene.renderFrame() }, X.prototype.updateWorldTransform = function(e) {
                    (this.worldTransformNeedsUpdate || e) && (this.parent ? this.worldTransform.multiply(this.parent.worldTransform, this.transform) : this.transform.copyTo(this.worldTransform), this.worldTransformNeedsUpdate = !1, e = !0); for (var t = e, n = this.children, r = 0; r < n.length; r++) t = n[r].updateWorldTransform(e) || t; return t }, X.prototype.draw = function(e, t) { for (var n = 0; n < this.children.length; ++n) this.children[n].draw(e, t) }, X.prototype.dispose = function() { for (var e = 0; e < this.children.length; ++e) this.children[e].dispose() };

                function U(e, t) { var n, r, o = { width: 0, height: 0 },
                        i = window.devicePixelRatio;
                    t || (t = {}); var a = t.wglContext,
                        s = e.getContext("webgl", a) || e.getContext("experimental-webgl", a);
                    s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), s.enable(s.BLEND), s.clearColor(0, 0, 0, 1), s.clear(s.COLOR_BUFFER_BIT); var u = 0,
                        c = new X;
                    m(); var f, l = function(e) {! function(e) { if (!e) throw new Error("Eventify cannot use falsy object as events subject"); for (var t = ["on", "fire", "off"], n = 0; n < t.length; ++n)
                                    if (e.hasOwnProperty(t[n])) throw new Error("Subject cannot be eventified, since it already has property '" + t[n] + "'") }(e); var t = function(e) { var t = Object.create(null); return { on: function(n, r, o) { if ("function" != typeof r) throw new Error("callback is expected to be a function"); var i = t[n]; return i || (i = t[n] = []), i.push({ callback: r, ctx: o }), e }, off: function(n, r) { if (void 0 === n) return t = Object.create(null), e; if (t[n])
                                            if ("function" != typeof r) delete t[n];
                                            else
                                                for (var o = t[n], i = 0; i < o.length; ++i) o[i].callback === r && o.splice(i, 1);
                                        return e }, fire: function(n) { var r, o = t[n]; if (!o) return e;
                                        arguments.length > 1 && (r = Array.prototype.splice.call(arguments, 1)); for (var i = 0; i < o.length; ++i) { var a = o[i];
                                            a.callback.apply(a.ctx, r) } return e } } }(e); return e.on = t.on, e.off = t.off, e.fire = t.fire, e }({ appendChild: function(e, t) { c.appendChild(e, t) }, getSceneCoordinate: w, getClientCoordinate: function(e, t) { var n = c.transform; return { x: (e * n.scale + n.dx) / i, y: (t * n.scale + n.dy) / i } }, getTransform: function() { return c.transform }, getRoot: function() { return c }, removeChild: function(e) { c.removeChild(e) }, setViewBox: function(e) { h.showRectangle(e, { width: n, height: r }); var t = h.getTransform();
                                d.applyTransform(t) }, setClearColor: function(e, t, n, r) { s.clearColor(e, t, n, r) }, dispose: function() { e.removeEventListener("mousemove", y), e.removeEventListener("transform", v), f && f(), window.removeEventListener("resize", p, !0), h.dispose(), c.dispose(), u && (cancelAnimationFrame(u), u = 0) }, renderFrame: b, getPixelRatio: function() { return i }, setPixelRatio: function(e) { i = e, m() } }),
                        d = function(e, n, r) { var o = { applyTransform: function(e) { var t = n.transform,
                                        o = r.getPixelRatio();
                                    t.dx = e.x * o, t.dy = e.y * o, t.scale = e.scale, n.worldTransformNeedsUpdate = !0, r.renderFrame() }, getOwner: function() { return e } }; return t.size && (o.getScreenCTM = function() { return { a: t.size.width / e.offsetWidth, d: t.size.height / e.offsetHeight, e: 0, f: 0 } }), o }(e, c, l),
                        h = k(e, { zoomSpeed: .025, controller: d }); return c.bindScene(l),
                        function() { e.addEventListener("mousemove", y), e.addEventListener("transform", v), f = function(e, t, n) { var r, o = new Date; return e.addEventListener("click", s), e.addEventListener("touchend", a), e.addEventListener("touchstart", i),
                                    function() { e.removeEventListener("click", s), e.removeEventListener("touchend", a), e.removeEventListener("touchstart", i) };

                                function i(e) { 1 === e.touches.length && (o = new Date, r = { x: e.touches[0].pageX, y: e.touches[0].pageY }) }

                                function a(e) { if (!(e.touches.length > 1 || new Date - o > 300)) { var t = e.changedTouches[0],
                                            n = t.pageX - r.x,
                                            i = t.pageY - r.y;
                                        n * n + i * i < 25 && s(t) } }

                                function s(e) { t.call(n, e) } }(e, g, this), window.addEventListener("resize", p, !0) }(), b(), l;

                    function p() { m() }

                    function m() { t.size ? (n = e.width = t.size.width, r = e.height = t.size.height) : (n = e.width = e.offsetWidth * i, r = e.height = e.offsetHeight * i), s.viewport(0, 0, n, r), o.width = n, o.height = r, c.worldTransformNeedsUpdate = !0, b() }

                    function v(e) { l.fire("transform", e) }

                    function g(e) { var t = w(e.clientX, e.clientY);
                        l.fire("click", { originalEvent: e, sceneX: t.x, sceneY: t.y }) }

                    function y(e) { var t = w(e.clientX, e.clientY);
                        l.fire("mousemove", { originalEvent: e, sceneX: t.x, sceneY: t.y }) }

                    function w(e, t) { var n = c.transform,
                            r = t * i; return { x: (e * i - n.dx) / n.scale, y: (r - n.dy) / n.scale } }

                    function b() { u || (u = requestAnimationFrame(x)) }

                    function x() { s.clear(s.COLOR_BUFFER_BIT), o.wasDirty = c.updateWorldTransform(), c.draw(s, o), u = 0 } } var z = { compile: function(e, t, n) { var r = e.createShader(t); if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw new Error(e.getShaderInfoLog(r)); return r }, link: function(e, t, n) { var r = e.createProgram(); if (e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS)) throw new Error(e.getProgramInfoLog(r)); return r }, getLocations: function(e, t) { return { attributes: j(e, t), uniforms: W(e, t) } }, getAttributes: j, getUniforms: W, initBuffer: function(e, t, n, r) { var o = e.createBuffer(); if (!o) throw new Error("Failed to create a buffer");
                        e.bindBuffer(e.ARRAY_BUFFER, o), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.vertexAttribPointer(r, n, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(r) } };

                function j(e, t) { for (var n = Object.create(null), r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; o < r; ++o) { var i = e.getActiveAttrib(t, o).name;
                        n[i] = e.getAttribLocation(t, i) } return n }

                function W(e, t) { for (var n = Object.create(null), r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), o = 0; o < r; ++o) { var i = e.getActiveUniform(t, o).name;
                        n[i] = e.getUniformLocation(t, i) } return n } var V = function(e) { var t = []; return e.forEach((function(e) { e.globals && t.push(e.globals()) })), t.push("void main() {"), e.forEach((function(e) { e.mainBody && t.push(e.mainBody()) })), t.push("}"), t.join("\n") },
                    q = { globals: function() { return "\nattribute vec2 aPosition;\nuniform vec2 uScreenSize;\nuniform mat4 uTransform;\n" }, mainBody: function() { return "\n  mat4 transformed = mat4(uTransform);\n\n  // Translate screen coordinates to webgl space\n  vec2 vv = 2.0 * uTransform[3].xy/uScreenSize;\n  transformed[3][0] = vv.x - 1.0;\n  transformed[3][1] = 1.0 - vv.y;\n  vec2 xy = 2.0 * aPosition/uScreenSize;\n  gl_Position = transformed * vec4(xy.x, -xy.y, 0.0, 1.0);\n" } },
                    G = V([q, { globals: function() { return "\nattribute float aPointSize;\nattribute vec4 aColor;\nvarying vec4 vColor;\n" }, mainBody: function() { return "\n  gl_PointSize = aPointSize * transformed[0][0];\n  vColor = aColor;\n" } }]),
                    H = new Map;

                function Z(e, t, n, r, o) { for (var i = 0, a = 0, s = e - n; s < e + n; ++s)
                        if (!(s < 0 || s >= o))
                            for (var u = t - n; u < t + n; ++u) u < 0 || u >= o || (i += r[4 * (s * o + u) + 3], a += 1);
                    return i / a } var $ = function(e, t, n, r) { this.r = e, this.g = t, this.b = n, this.a = void 0 === r ? 1 : r },
                    J = function(e, t, n, r) { this.offset = t, this.buffer = e, this.color = n || new $(1, 1, 1, 1), void 0 !== r && (this.data = r) },
                    K = { x: {}, y: {} };
                K.x.get = function() { return this.buffer[this.offset] }, K.y.get = function() { return this.buffer[this.offset + 1] }, J.prototype.update = function(e, t) { var n = this.offset,
                        r = this.buffer;
                    r[n + 0] = e.x, r[n + 1] = e.y, (e.size || t) && (r[n + 2] = "number" == typeof e.size ? e.size : t.size), this.setColor(this.color) }, J.prototype.setColor = function(e) { this.color = e, this.buffer[this.offset + 3] = e.r, this.buffer[this.offset + 4] = e.g, this.buffer[this.offset + 5] = e.b }, Object.defineProperties(J.prototype, K); var Q = function(e) {
                        function t(t) { e.call(this), this.type = "PointCollection", this.pointsAccessor = [], this.capacity = t, this.pointsBuffer = new Float32Array(6 * t), this.count = 0, this._program = null, this.color = new $(1, 1, 1, 1), this.size = 1 } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(e, t) { this._program || (this._program = function(e, t) { var n = H.get(e); if (!n) { var r = z.compile(e, e.VERTEX_SHADER, G),
                                        o = z.compile(e, e.FRAGMENT_SHADER, "\nprecision highp float;\nvarying vec4 vColor;\nuniform sampler2D texture;\n\nvoid main() {\n  vec4 tColor = texture2D( texture, gl_PointCoord );\n  gl_FragColor = vec4(vColor.rgb, tColor.a);\n  //gl_FragColor = vec4(vColor.rgb, 1.0);\n  // vec2 t = 2.0 * gl_PointCoord - 1.0;\n  // float a = 1.0 - pow(t.x, 2.0) - pow(t.y, 2.0);\n  // gl_FragColor = vec4(vColor.rgb, a);\n}\n");
                                    n = z.link(e, r, o), H.set(e, n) } var i = z.getLocations(e, n),
                                    a = e.createBuffer(); if (!a) throw new Error("failed to create a nodesBuffer");
                                e.bindBuffer(e.ARRAY_BUFFER, a), e.bufferData(e.ARRAY_BUFFER, t.byteLength, e.DYNAMIC_DRAW); var s = function(e) { var t = e.createTexture(); if (!t) throw new Error("Failed to create circle texture");
                                    e.bindTexture(e.TEXTURE_2D, t); var n = function(e) { for (var t = new Uint8Array(e * e * 4), n = (e - 8) / 2, r = 0; r < e; ++r)
                                            for (var o = r * e, i = 0; i < e; ++i) { var a = 4 * (o + i),
                                                    s = r - n,
                                                    u = i - n,
                                                    c = Math.sqrt(u * u + s * s); if (c < n) { var f = 1 - c / n;
                                                    t[a + 3] = f > .3 ? 255 : 255 * f } else t[a + 3] = 0 }
                                        return function(e, t) { for (var n = new Uint8Array(t * t * 4), r = 0; r < t; ++r)
                                                for (var o = 0; o < t; ++o) n[4 * (r * t + o) + 3] = Z(r, o, 3, e, t); return n }(t, e) }(64); return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 64, 64, 0, e.RGBA, e.UNSIGNED_BYTE, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.generateMipmap(e.TEXTURE_2D), t }(e); return { draw: function(r, o, u) { e.useProgram(n); var c = t.BYTES_PER_ELEMENT;
                                        r && e.uniformMatrix4fv(i.uniforms.uTransform, !1, r.getArray()), e.uniform2f(i.uniforms.uScreenSize, o.width, o.height), e.bindTexture(e.TEXTURE_2D, s), e.bindBuffer(e.ARRAY_BUFFER, a), e.bufferData(e.ARRAY_BUFFER, t, e.DYNAMIC_DRAW), e.vertexAttribPointer(i.attributes.aPosition, 2, e.FLOAT, !1, 6 * c, 0), e.enableVertexAttribArray(i.attributes.aPosition), e.vertexAttribPointer(i.attributes.aPointSize, 1, e.FLOAT, !1, 6 * c, 2 * c), e.enableVertexAttribArray(i.attributes.aPointSize), e.vertexAttribPointer(i.attributes.aColor, 3, e.FLOAT, !1, 6 * c, 3 * c), e.enableVertexAttribArray(i.attributes.aColor), e.drawArrays(e.POINTS, 0, u) }, updateData: function(e) { t = e }, dispose: function() { e.deleteProgram(n), e.deleteTexture(s), H.delete(e) } } }(e, this.pointsBuffer)), this._program.draw(this.worldTransform, t, this.count) }, t.prototype.dispose = function() { this._program && (this._program.dispose(), this._program = null) }, t.prototype.add = function(e, t) { if (!e) throw new Error("Point is required");
                            this.count >= this.capacity && this._extendArray(); var n = this.pointsBuffer,
                                r = this.count,
                                o = new J(n, 6 * r, e.color || this.color, t); return this.pointsAccessor.push(o), o.update(e, this), this.count += 1, o }, t.prototype._extendArray = function() { throw new Error("Cannot extend array at the moment :(") }, t }(X),
                    ee = function(e, t, n) { if (Number.isNaN(e)) throw new Error("x is not a number"); if (Number.isNaN(t)) throw new Error("y is not a number");
                        this.x = e, this.y = t, this.color = new $(255, 255, 255), this.size = Number.isFinite(n) ? n : 4 },
                    te = function(e) {
                        function t(t, n) { e.call(this), this.itemsPerLine = n, this.capacity = t, this.count = 0, this._program = null, this.color = new $(1, 1, 1, 1), this.buffer = new Float32Array(t * this.itemsPerLine) } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(e, t) { this._program || (this._program = this._makeProgram(e)); var n = this.worldTransform;
                            this._program.draw(n, this.color, t) }, t.prototype._makeProgram = function() { throw new Error("Not implemented") }, t.prototype._addInternal = function() { throw new Error("Not implemented") }, t.prototype.add = function(e) { if (!e) throw new Error("Line is required");
                            this.count >= this.capacity && this._extendArray(); var t = this.count * this.itemsPerLine,
                                n = this._addInternal(e, t); return this.count += 1, n }, t.prototype.dispose = function() { this._program && (this._program.dispose(), this._program = null) }, t.prototype._extendArray = function() { var e = this.capacity * this.itemsPerLine * 2,
                                t = new Float32Array(e);
                            this.buffer && t.set(this.buffer), this.buffer = t, this.capacity = e }, t }(X),
                    ne = V([q]),
                    re = new Map;

                function oe(e, t, n) { var r = re.get(e); if (!r) { var o = z.compile(e, e.VERTEX_SHADER, ne),
                            i = z.compile(e, e.FRAGMENT_SHADER, "\nprecision highp float;\nuniform vec4 uColor;\n\nvoid main() {\n  gl_FragColor = uColor;\n}\n");
                        r = z.link(e, o, i), re.set(e, r) } var a = z.getLocations(e, r),
                        s = e.createBuffer(),
                        u = t.BYTES_PER_ELEMENT,
                        c = n ? e.TRIANGLES : e.LINES; return e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, t.byteLength, e.STATIC_DRAW), e.bufferSubData(e.ARRAY_BUFFER, 0, t), { draw: function(n, o, i) { 0 !== t.length && (e.useProgram(r), e.uniformMatrix4fv(a.uniforms.uTransform, !1, n.getArray()), e.uniform2f(a.uniforms.uScreenSize, i.width, i.height), e.uniform4f(a.uniforms.uColor, o.r, o.g, o.b, o.a), e.bindBuffer(e.ARRAY_BUFFER, s), e.enableVertexAttribArray(a.attributes.aPosition), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.vertexAttribPointer(a.attributes.aPosition, 2, e.FLOAT, !1, 2 * u, 0), e.drawArrays(c, 0, t.length / 2)) }, dispose: function() { e.deleteBuffer(s), e.deleteProgram(r), re.delete(e) } } } var ie = function(e, t) { this.offset = t, this.buffer = e, this.width = 1 };
                ie.prototype.setWidth = function(e) { this.width = e }, ie.prototype.update = function(e, t) { var n = this.buffer,
                        r = this.offset,
                        o = t.x - e.x,
                        i = t.y - e.y;
                    0 === o && (o = 1e-4), 0 === i && (i = 1e-4); var a = Math.sqrt(o * o + i * i),
                        s = o / a,
                        u = i / a,
                        c = this.width,
                        f = c * s,
                        l = c * u,
                        d = e.x + l,
                        h = e.y - f,
                        p = t.x + l,
                        m = t.y - f,
                        v = e.x - l,
                        g = e.y + f,
                        y = t.x - l,
                        w = t.y + f;
                    n[r + 0] = d, n[r + 1] = h, n[r + 2] = p, n[r + 3] = m, n[r + 4] = v, n[r + 5] = g, n[(r += 6) + 0] = p, n[r + 1] = m, n[r + 2] = v, n[r + 3] = g, n[r + 4] = y, n[r + 5] = w }; var ae = function(e) {
                        function t(t) { e.call(this, t, 12), this.type = "LineCollection" } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._makeProgram = function(e) { return oe(e, this.buffer, !0) }, t.prototype._addInternal = function(e, t) { var n = new ie(this.buffer, t); return n.update(e.from, e.to), n }, t }(te),
                    se = function(e, t) { this.offset = t, this.buffer = e };
                se.prototype.update = function(e, t) { var n = this.buffer,
                        r = this.offset;
                    n[r + 0] = e.x, n[r + 1] = e.y, n[r + 2] = t.x, n[r + 3] = t.y }; var ue = function(e) {
                        function t(t) { e.call(this, t, 4), this.type = "WireCollection" } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._makeProgram = function(e) { return oe(e, this.buffer, !1) }, t.prototype._addInternal = function(e, t) { var n = new se(this.buffer, t); return n.update(e.from, e.to), n }, t }(te),
                    ce = new Map; var fe = function(e) {
                    function t(t, n) { void 0 === n && (n = !1), e.call(this), this.drawCount = 0, this.madeFullCircle = !1, this.allowColors = n, this.itemsPerLine = n ? 3 : 2, this.capacity = t, this.nextElementIndex = 1, this._program = null, this.color = new $(1, 1, 1, 1), this.buffer = new ArrayBuffer((t + 1) * this.itemsPerLine * 4), this.positions = new Float32Array(this.buffer), n && (this.colors = new Uint32Array(this.buffer)) } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(e, t) { this._program || (this._program = function(e, t, n) { var r = ce.get(e),
                                o = n ? 3 : 2; if (!r) { var i = function(e) { return { lineVSSrc: V([{ globals: function() { return "\n  attribute vec2 aPosition;\n  varying vec4 vColor;\n  " + (e ? "attribute vec4 aColor;" : "") + "\n  uniform vec4 uColor;\n  uniform vec2 uScreenSize;\n  uniform mat4 uTransform;\n" }, mainBody: function() { return "\n  mat4 transformed = mat4(uTransform);\n\n  // Translate screen coordinates to webgl space\n  vec2 vv = 2.0 * uTransform[3].xy/uScreenSize;\n  transformed[3][0] = vv.x - 1.0;\n  transformed[3][1] = 1.0 - vv.y;\n  vec2 xy = 2.0 * aPosition.xy/uScreenSize;\n  gl_Position = transformed * vec4(xy.x, -xy.y, 0.0, 1.0);\n  vColor = " + (e ? "aColor.abgr" : "uColor") + ";\n" } }]), lineFSSrc: "precision mediump float;\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = vColor;\n}\n" } }(n),
                                    a = i.lineFSSrc,
                                    s = i.lineVSSrc,
                                    u = z.compile(e, e.VERTEX_SHADER, s),
                                    c = z.compile(e, e.FRAGMENT_SHADER, a);
                                r = z.link(e, u, c), ce.set(e, r) } var f = z.getLocations(e, r),
                                l = e.createBuffer(); return { draw: function(i, a, s, u, c) { if (0 !== t.length) { e.useProgram(r); var d = i.getArray(); if (e.uniformMatrix4fv(f.uniforms.uTransform, !1, d), e.uniform2f(f.uniforms.uScreenSize, s.width, s.height), e.uniform4f(f.uniforms.uColor, a.r, a.g, a.b, a.a), e.bindBuffer(e.ARRAY_BUFFER, l), e.enableVertexAttribArray(f.attributes.aPosition), e.bufferData(e.ARRAY_BUFFER, t, e.DYNAMIC_DRAW), n ? (e.vertexAttribPointer(f.attributes.aPosition, 2, e.FLOAT, !1, 12, 0), e.enableVertexAttribArray(f.attributes.aColor), e.vertexAttribPointer(f.attributes.aColor, 4, e.UNSIGNED_BYTE, !0, 12, 8)) : e.vertexAttribPointer(f.attributes.aPosition, 2, e.FLOAT, !1, 0, 0), c) { var h = t.byteLength / 4 / o - u;
                                            e.drawArrays(e.LINE_STRIP, u, h), u > 1 && e.drawArrays(e.LINE_STRIP, 0, u - 1) } else e.drawArrays(e.LINE_STRIP, 1, u - 1) } }, dispose: function() { e.deleteBuffer(l), e.deleteProgram(r), ce.delete(e) } } }(e, this.buffer, this.allowColors)); var n = this.worldTransform;
                        this._program.draw(n, this.color, t, this.nextElementIndex, this.madeFullCircle) }, t.prototype.add = function(e, t, n) { var r = this.nextElementIndex * this.itemsPerLine,
                            o = this.positions;
                        o[r] = e, o[r + 1] = t, this.allowColors && (this.colors[r + 2] = void 0 === n ? 0 : n), this.nextElementIndex += 1, this.drawCount += 1, this.nextElementIndex > this.capacity && (this.nextElementIndex = 1, o[0] = e, o[1] = t, this.allowColors && (this.colors[2] = this.colors[r + 2]), this.madeFullCircle = !0) }, t.prototype.dispose = function() { this._program && (this._program.dispose(), this._program = null) }, t }(X);

                function le(e) { try { return !(!window.WebGLRenderingContext || (e || (e = document.createElement("canvas")), !e.getContext("webgl") && !e.getContext("experimental-webgl"))) } catch (e) { return !1 } } }, 972: e => { e.exports = class { constructor() { this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY }
                    growBy(e) { this.minX -= e, this.minY -= e, this.maxX += e, this.maxY += e }
                    get left() { return this.minX }
                    get top() { return this.minY }
                    get right() { return this.maxX }
                    get bottom() { return this.maxY }
                    get width() { return this.maxX - this.minX }
                    get height() { return this.maxY - this.minY }
                    get cx() { return (this.minX + this.maxX) / 2 }
                    get cy() { return (this.minY + this.maxY) / 2 }
                    addPoint(e, t) { if (void 0 === e) throw new Error("Point is not defined"); let n = e,
                            r = t;
                        void 0 === r && (n = e.x, r = e.y), n < this.minX && (this.minX = n), n > this.maxX && (this.maxX = n), r < this.minY && (this.minY = r), r > this.maxY && (this.maxY = r) }
                    addRect(e) { if (!e) throw new Error("rect is not defined");
                        this.addPoint(e.left, e.top), this.addPoint(e.right, e.top), this.addPoint(e.left, e.bottom), this.addPoint(e.right, e.bottom) }
                    merge(e) { e.minX < this.minX && (this.minX = e.minX), e.minY < this.minY && (this.minY = e.minY), e.maxX > this.maxX && (this.maxX = e.maxX), e.maxY > this.maxY && (this.maxY = e.maxY) } } }, 508: (e, t, n) => { const r = n(4),
                    o = n(736),
                    i = n(972),
                    a = n(959);
                e.exports = function(e, t) { let n, s, u = o(),
                        c = new i; return r(e, { responseType: "arraybuffer", progress: h("Loading intersection coordinates") }).then((function(e) { return n = new Int32Array(e), console.log("Downloaded nodes: " + n.length / 2),
                            function(e) { return console.time("add nodes to graph"), t.message = "Adding nodes to graph", new Promise((n => { a(e, f, (() => { t.pointsReady = !0, console.timeEnd("add nodes to graph"), n() }), { step: 2 }), t.pointsReady = !0 })) }(n) })).then((function() { return r(e, { responseType: "arraybuffer", progress: h("Loading roads graph") }).then(l) })).then((() => ({ graph: u, points: n, links: s, graphBBox: c })));

                    function f(e, n, r) { let o = Math.floor(n / 2),
                            i = r[n + 1];
                        u.addNode(o, { x: e, y: i }), c.addPoint(e, i), n % 500 == 0 && (t.completed = Math.round(100 * n / r.length) + "%") }

                    function l(e) { return s = new Int32Array(e), t.message = "Adding edges to graph", console.time("add edges to graph"), new Promise((e => { a(s, d, (() => { console.timeEnd("add edges to graph"), t.linksReady = !0, console.log(u.getLinksCount() + " edges; " + u.getNodesCount() + " nodes."), e() }), { step: 2 }) })) }

                    function d(e, n, r) { let o = e - 1,
                            i = r[n + 1] - 1;
                        u.addLink(o, i), n % 500 == 0 && (t.completed = Math.round(100 * n / r.length) + "%") }

                    function h(e) { return function(n) { t.message = e, t.completed = Math.round(100 * n.percent) + "%" } } } }, 4: e => { e.exports = function(e, t) { return t || (t = {}), new Promise((function(n, r) { var o = new XMLHttpRequest; "function" == typeof t.progress && o.addEventListener("progress", (function(e) { e.lengthComputable && t.progress({ loaded: e.loaded, total: e.total, percent: e.loaded / e.total }) }), !1), o.addEventListener("load", (function() { if (200 === o.status) { var i = o.response; "json" === t.responseType && "string" == typeof i && (i = JSON.parse(i)), n(i) } else r(`Unexpected status code ${o.status} when calling ${e}`) }), !1), o.addEventListener("error", (function() { r(`Failed to download ${e}`) }), !1), o.addEventListener("abort", (function() { r(`Cancelled download of ${e}`) }), !1), o.open("GET", e), t.responseType && (o.responseType = t.responseType), o.send(null) })) } } },
        t = {};

    function n(r) { var o = t[r]; if (void 0 !== o) return o.exports; var i = t[r] = { exports: {} }; return e[r](i, i.exports, n), i.exports }
    n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, (() => { const e = n(508),
            t = n(519);
        window.wgl = t, window.loadPositions = e })() })();