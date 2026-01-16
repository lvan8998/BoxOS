const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/chunk-Do1wUQlw.js", "assets/ht-DIEl3wcJ.js", "assets/chunk-DPRUGDB1.js", "assets/chunk-DWTGLlOg.js", "assets/chunk-Cd8018WW.js", "assets/chunk-CMQyd8eO.js", "assets/chunk-a7obrEbD.js", "assets/chunk-DQhVL27x.js", "assets/chunk-cn7T4ICr.js", "assets/chunk-Bh3yC0yB.js", "assets/chunk-B6RrTHmg.js", "assets/chunk-B9m9zD55.js", "assets/vant-BYwRzYTG.css", "assets/chunk-DjdYu-xF.js", "assets/chunk-BHPWSuhB.js", "assets/chunk-Xpcu2h2O.js", "assets/viewerjs-huQ1QgDq.css", "assets/chunk-fUqY2CL3.js", "assets/index-Lb2m9lie.css", "assets/animate-BaVkx4tQ.css", "assets/chunk-DH8whQsn.js", "assets/chunk-Py1EMREM.js", "assets/chunk-BhYrTiFM.js", "assets/chunk-Fq9W1RHq.js", "assets/chunk-CyK2TLz7.js", "assets/chunk-rMGfDec6.js", "assets/chunk-BJDOL0vG.js", "assets/chunk-CNslwv-E.js", "assets/chunk-DnN8o1hy.js", "assets/DetailSendDanMuView-CUHXSIe8.css", "assets/chunk-BSwT3R3i.js", "assets/chunk-DHZ4SDa9.js", "assets/OpSuccessDialog-C-quMx0D.css", "assets/chunk-B2xzK06Q.js", "assets/chunk-DR8a3B84.js", "assets/chunk-Bl-6uAOj.js", "assets/chunk-CHTY1Iv1.js", "assets/chunk-B89XNyw8.js", "assets/chunk-Co-SlzFm.js", "assets/DetailDownloadView-D0QUaFl7.css", "assets/chunk-DJ-AwuUq.js", "assets/chunk-DSSbwpS6.js", "assets/chunk-yRjS8dOJ.js", "assets/VipPayDialog-C24K6l0n.css", "assets/chunk-BtJlCw0p.js", "assets/IngotPayDialog-C8jURgpS.css", "assets/chunk-DKy14AVN.js", "assets/IngotCostDialog-CuT1wXQ-.css"]))) => i.map(i => d[i]);
import {
	C as e,
	r as l,
	A as a,
	i as t,
	u,
	M as n,
	S as o,
	N as i,
	L as s,
	d as r,
	e as v,
	s as d,
	f as c,
	g as f
} from "./ht-DIEl3wcJ.js";
import {
	b as p
} from "./chunk-Cd8018WW.js";
import {
	d as m
} from "./chunk-DWTGLlOg.js";
import {
	r as h,
	e as y,
	C as _,
	D as k,
	L as g,
	P as w,
	U as x,
	W as A,
	X as b,
	u as P,
	E as L,
	b as j,
	Q as D,
	G as T,
	V as M,
	Y as C,
	c as I,
	a as E,
	a1 as R
} from "./chunk-DPRUGDB1.js";
import {
	N as S
} from "./chunk-DH8whQsn.js";
import {
	_ as V
} from "./chunk-Py1EMREM.js";
import {
	_ as O
} from "./chunk-BhYrTiFM.js";
import {
	u as B
} from "./chunk-Fq9W1RHq.js";
import {
	a as z
} from "./chunk-CMQyd8eO.js";
import {
	D as q,
	r as N
} from "./chunk-CyK2TLz7.js";
import {
	k as U
} from "./chunk-CNslwv-E.js";
import {
	s as Q,
	c as F
} from "./chunk-B6RrTHmg.js";
const G = m("Detail", () => {
		const u = h(),
			n = h([]),
			o = h(""),
			i = h("1"),
			s = h(!1),
			r = h(0),
			v = h(!1),
			d = h(0),
			c = h(!1),
			f = h(),
			p = h(),
			m = h(),
			_ = h(),
			k = h(),
			g = y(() => null != f.value && !e.isOppoBrowser()),
			w = y(() => null != p.value),
			x = y(() => null != m.value && m.value.length > 0),
			A = y(() => null != _.value),
			b = y(() => null != k.value),
			P = h(!1),
			L = h(!1),
			j = h(!1),
			D = h("");
		let T = !1,
			M = !1;

		function C() {
			D.value = ""
		}
		async function I() {
			let e = await l(a.guessContent, {
				contentId: o.value
			});
			t(e.code) && (n.value = e.data.guessLikeContentList)
		}
		return {
			videoPlayAd: 0,
			videoPauseAd: 0,
			titleBelowAdvList: 0,
			videoBelowAdv: 0,
			videoTopAdv: 0,
			hasPlayAd: g,
			hasPauseAd: w,
			hasTitleBelowAdv: x,
			hasVideoBelowAdv: A,
			hasVideoTopAdv: b,
			detailModel: u,
			typeId: i,
			isShowComment: L,
			isShowBarrage: P,
			isSending: j,
			vodId: o,
			danMuText: D,
			clearDanMuInput: C,
			setVodId: function(e) {
				o.value = e
			},
			requestDetail: async function() {
				var i, h;
				u.value = void 0, n.value = [], C(), P.value = !1, L.value = !1;
				let y = await l(a.detail, {
					contentId: o.value,
					tryPlayFlag: "0"
				});
				t(y.code) && (u.value = y.data, document.title = null != (h = null == (i = u.value) ? void 0 : i.videoDetail.title) ? h : "", s.value = 1 === u.value.likeState, r.value = u.value.likeNum || 0, v.value = 2 === u.value.likeState, d.value = u.value.unLikeNum || 0, c.value = 1 === u.value.collectState, null == u.value.videoOpenAdvList && u.value.videoOpenAdvList.length > 0 && (f.value = u.value.videoOpenAdvList[0]), null != u.value.videoPauseAdvList && u.value.videoPauseAdvList.length > 0 && (p.value = u.value.videoPauseAdvList[0]), null != u.value.titleTopAdvList && u.value.titleTopAdvList.length > 0 && (k.value = u.value.titleTopAdvList[0]), null != u.value.titleBelowAdvList && u.value.titleBelowAdvList.length > 0 && (m.value = u.value.titleBelowAdvList), null != u.value.videoTopAdvList && u.value.videoTopAdvList.length > 0 && (_.value = u.value.videoTopAdvList[e.randomInt(0, u.value.videoTopAdvList.length - 1)]), P.value = u.value.isShowBarrage, L.value = u.value.isShowComment, I())
			},
			reqSendDanMu: async function(e, t) {
				j.value = !0;
				let u = await l(a.addBarrage, {
					contentId: o.value,
					barrageMsg: e,
					currencyDuration: Math.floor(t / 1e3)
				});
				return j.value = !1, u
			},
			isLike: s,
			likeNum: r,
			isCai: v,
			caiNum: d,
			isCollect: c,
			recommendVodList: n,
			requestRecommend: I,
			reqOpLike: async function(e = !0) {
				if (T) return;
				T = !0;
				let u = 0,
					n = r.value,
					i = d.value;
				e ? (u = s.value ? 0 : 1, n = s.value ? r.value - 1 : r.value + 1, v.value && !s.value && (i = d.value - 1)) : (u = v.value ? 0 : 2, i = v.value ? d.value - 1 : d.value + 1, s.value && !v.value && (n = r.value - 1));
				let c = await l(a.like, {
					contentId: o.value,
					like: u,
					type: "video"
				});
				t(c.code) && (s.value = 1 === u, r.value = Math.max(n, 0), v.value = 2 === u, d.value = Math.max(i, 0)), T = !1
			},
			reqOpCollect: async function() {
				//if (M) return;
				M = !0;
				const e = c.value ? 0 : 1;
				let u = await l(a.collect, {
					contentId: o.value,
					collect: e
				});
				t(u.code) && (c.value = 1 === e), M = !1
			}
		}
	}),
	H = {
		class: "flex w-full flex-col px-[15px] mt-[5px]"
	},
	W = {
		class: "text-[18px] text-black font-bold"
	},
	X = {
		class: "flex flex-row mt-1"
	},
	Y = {
		class: "text-[14px] text-gray-400"
	},
	Z = {
		class: "ml-5 text-[14px] text-gray-400"
	},
	J = _({
		__name: "DetailHeaderView",
		setup(e) {
			p();
			const l = G(),
				a = u();
			return (e, t) => {
				var u, o, i, s;
				return L(), k(g, null, [w("div", H, [w("span", W, b(null == (u = P(l).detailModel) ? void 0 : u.videoDetail.title), 1), w("div", X, [w("p", Y, "人气：" + b(P(S).formatNumber(null != (i = null == (o = P(l).detailModel) ? void 0 : o.videoDetail.viewQty) ? i : 0)), 1), w("p", Z, "时间：" + b(null == (s = P(l).detailModel) ? void 0 : s.onlineTime), 1)]), t[1] || (t[1] = w("div", {
					class: "h-[15px]"
				}, null, -1))]), P(a).hasMarquee ? (L(), x(n, {
					key: 0,
					message: P(a).marqueeText,
					onClick: t[0] || (t[0] = () => {})
				}, null, 8, ["message"])) : A("", !0)], 64)
			}
		}
	}),
	K = {
		class: "w-full px-[15px] mt-[15px]"
	},
	$ = {
		class: "w-full height-w-4-3 relative"
	},
	ee = {
		class: "w-full h-full bg-white/10 z-10 absolute left-0 top-0 pointer-events-none"
	},
	le = {
		key: 1,
		class: "absolute lef-0 top-0 w-full h-full z-10 shrink-0 bg-black/30 flex items-center justify-center transform"
	},
	ae = {
		class: "relative w-[60%] max-h-[80%] flex items-center justify-center"
	},
	te = {
		key: 2,
		class: "absolute lef-0 top-0 w-full h-full z-10 bg-black flex items-center justify-center pointer-events-none"
	},
	ue = {
		key: 4,
		class: "absolute lef-0 top-0 w-full h-full flex items-center justify-center z-10 transform",
		style: {
			"pointer-events": "none"
		}
	},
	ne = _({
		__name: "DPlayerView",
		props: {
			id: {},
			url: {},
			cover: {}
		},
		setup(l, {
			expose: a
		}) {
			const t = l,
				u = G(),
				n = h(!0),
				r = h(!0),
				v = h(!1),
				d = h(!1),
				c = h(!1),
				f = h(5),
				p = h(f.value);
			let m = h(),
				y = null;
			const _ = h(),
				x = h(!0),
				I = h();
			let E = 0,
				R = [];

			function S() {
				x.value = !x.value, x.value ? _.value.show() : _.value.hide()
			}
			j(() => {
				var e, l;
				u.hasPlayAd && (f.value = null != (l = null == (e = u.videoPlayAd) ? void 0 : e.duration) ? l : 5), o.isEmpty(t.url) || (y = q.initPlayer("dplayerId", t.url), V(), y && (y.on("loadedmetadata", () => {
					d.value = !0
				}), y.on("canplay", () => {
					d.value = !0
				}), y.on("play", () => {
					y.video.muted = !1, c.value = !0, v.value = !1, _.value.play()
				}), y.on("pause", () => {
					const e = H();
					e && e > 0 && (v.value = !0), _.value.pause()
				}), y.on("timeupdate", () => {
					! function(e) {
						for (let l = E; l < R.length; l++)
							if (R[l].time <= e) {
								_.value.insert(R[l]), E = l + 1;
								break
							}
					}((null == y ? void 0 : y.video.currentTime) || 0)
				}), y.on("seeked", () => {
					_.value.stop(), _.value.play(), E = function(e) {
						for (let l = 0; l < R.length; l++)
							if (R[l].time >= e) return l;
						return R.length
					}((null == y ? void 0 : y.video.currentTime) || 0)
				}), y.on("error", e => {
					var l, a, u, n;
					d.value = !0;
					const i = (null != (l = null == y ? void 0 : y.video.error.message) ? l : "no msg").toLowerCase();
					if (o.isEmpty(i.trim()) || i.includes("empty src")) return;
					let s = {
						url: t.url,
						time: null != (a = null == y ? void 0 : y.video.currentTime) ? a : 0,
						code: null != (n = null == (u = null == y ? void 0 : y.video.error) ? void 0 : u.code) ? n : -1,
						msg: i
					};
					N(s)
				})))
			});
			const V = () => {
					const e = document.querySelector(".dplayer-setting");
					if (e && I.value) {
						const l = I.value.firstElementChild;
						l && e.insertBefore(l, e.firstChild)
					}
				},
				O = () => {
					n.value = !1, u.hasPlayAd ? B() : (r.value = !1, y.play())
				},
				B = () => {
					m.value || (p.value = f.value, m.value = setInterval(() => {
						p.value > 0 ? p.value-- : (y.play(), clearInterval(m.value), m.value = null, r.value = !1)
					}, 1e3))
				},
				z = () => {
					p.value <= 0 && (y.play(), clearInterval(m.value), m.value = null, r.value = !1)
				},
				Q = () => {
					var l, a;
					e.openBlankUrl(null != (a = null == (l = u.videoPlayAd) ? void 0 : l.jumpScheme) ? a : "")
				},
				F = () => {
					var l, a;
					e.openBlankUrl(null != (a = null == (l = u.videoPauseAd) ? void 0 : l.jumpScheme) ? a : "")
				};

			function H() {
				var e;
				return null != (e = null == y ? void 0 : y.video.currentTime) ? e : 0
			}
			return a({
				updateDanmuList: function(e) {
					R = e, E = 0
				},
				sendDanmu: function(e) {
					_.value.insert({
						content: e.content,
						color: e.color,
						isSelf: !0
					})
				},
				destroyPlayer: () => {
					y && y.destroy()
				},
				getPlayTime: H
			}), (e, l) => {
				var a, o, c, f, m;
				return L(), k(g, null, [w("div", K, [w("div", $, [l[2] || (l[2] = w("div", {
					id: "dplayerId",
					class: D(["w-full h-full"])
				}, null, -1)), w("div", ee, [T(P(U), {
					ref_key: "danmakuRef",
					ref: _,
					speeds: 60
				}, {
					danmu: M(({
						index: e,
						danmu: l
					}) => [w("span", {
						class: D(["text-[14px] px-1 py-[1px]", l.isSelf ? "border" : ""]),
						style: C({
							color: "".concat(l.color),
							borderColor: "".concat(l.color)
						})
					}, b(l.content), 7)]),
					_: 1
				}, 512)]), r.value && P(u).hasPlayAd ? (L(), k("div", {
					key: 0,
					class: "absolute lef-0 top-0 w-full h-full z-10 flex bg-black",
					onClick: Q
				}, [T(i, {
					src: null != (o = null == (a = P(u).videoPlayAd) ? void 0 : a.img) ? o : "",
					class: "w-full h-full object-contain"
				}, null, 8, ["src"]), w("div", {
					onClick: z,
					class: "absolute right-2 top-3 px-2 py-[1px] bg-black/70 rounded-[3px] text-white text-[13px]"
				}, b(p.value > 0 ? "".concat(p.value, "秒后关闭广告") : "关闭广告"), 1)])) : A("", !0), v.value && P(u).hasPauseAd ? (L(), k("div", le, [w("div", ae, [T(i, {
					src: null != (f = null == (c = P(u).videoPauseAd) ? void 0 : c.img) ? f : "",
					class: "w-full object-contain",
					onClick: F
				}, null, 8, ["src"]), w("i", {
					class: "absolute right-[-10px] top-[-10px] text-white iconfont icon-close leading-none",
					style: {
						"font-size": "20px",
						cursor: "pointer"
					},
					onClick: l[0] || (l[0] = e => v.value = !1)
				})])])) : A("", !0), n.value ? (L(), k("div", te, [T(i, {
					src: null != (m = t.cover) ? m : "",
					class: "w-full h-full object-contain"
				}, null, 8, ["src"])])) : A("", !0), n.value && d.value ? (L(), k("div", {
					key: 3,
					class: "absolute lef-0 top-0 w-full h-full shrink-0 bg-black/30 flex items-center justify-center z-10 transform",
					onClick: O
				}, l[1] || (l[1] = [w("i", {
					class: "iconfont icon-playcircle text-white",
					style: {
						"font-size": "50px"
					}
				}, null, -1)]))) : A("", !0), d.value ? A("", !0) : (L(), k("div", ue, [T(s, {
					size: 40
				})]))])]), w("div", {
					ref_key: "danmuIconRef",
					ref: I,
					style: {
						display: "none"
					}
				}, [w("div", {
					class: "dplayer-icon flex items-center justify-center",
					onClick: S
				}, [w("i", {
					class: D([
						["iconfont text-[#CCCCCC]", x.value ? "icon-danmu-open" : "icon-danmu-close"], ""
					]),
					style: {
						"font-size": "22px"
					}
				}, null, 2)])], 512)], 64)
			}
		}
	}),
	oe = {
		class: "w-full"
	},
	ie = {
		key: 0
	},
	se = {
		class: "absolute left-0 top-0"
	},
	re = _({
		__name: "index",
		props: {
			id: {}
		},
		setup(l) {
			const a = R(() => r(() => import("./chunk-Do1wUQlw.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]))),
				n = R(() => r(() => import("./chunk-DnN8o1hy.js"), __vite__mapDeps([28, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29]))),
				o = R(() => r(() => import("./chunk-BSwT3R3i.js"), __vite__mapDeps([30, 31, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 32, 33, 20, 21, 22, 23, 24, 25, 26, 27]))),
				i = R(() => r(() => import("./chunk-DR8a3B84.js"), __vite__mapDeps([34, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]))),
				s = R(() => r(() => import("./chunk-Bl-6uAOj.js"), __vite__mapDeps([35, 8, 31, 2, 1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 32]))),
				p = R(() => r(() => import("./chunk-CHTY1Iv1.js"), __vite__mapDeps([36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 37, 20, 21, 22, 23, 24, 25, 26, 27]))),
				m = R(() => r(() => import("./chunk-Co-SlzFm.js"), __vite__mapDeps([38, 8, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 32, 20, 21, 22, 23, 24, 25, 26, 27, 39]))),
				y = R(() => r(() => import("./chunk-DJ-AwuUq.js"), __vite__mapDeps([40, 41, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))),
				_ = l,
				g = h();
			u();
			const b = G(),
				j = R(() => r(() => import("./chunk-yRjS8dOJ.js"), __vite__mapDeps([42, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 43]))),
				D = h(),
				M = h(),
				C = h(),
				S = R(() => r(() => import("./chunk-DKy14AVN.js"), __vite__mapDeps([46, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 47]))),
				q = h();
			return I(async () => {
				var l, a, u;
				if (b.setVodId(_.id), v.on("sendVideoDanMu", l => {
						!async function(l) {
							var a, u, n;
							if (b.isSending) return;
							const o = null != (u = null == (a = g.value) ? void 0 : a.getPlayTime()) ? u : 0;
							Q({
								duration: 0,
								message: "正在发送",
								forbidClick: !1
							});
							const i = await b.reqSendDanMu(l, o);
							F(), t(i.code) ? (null == (n = g.value) || n.sendDanmu({
								content: l,
								time: o,
								color: e.getRandomBrightColor(),
								isSelf: !0
							}), b.clearDanMuInput(), d("发送成功"), c.set(f.lastSendDanmuTime, Date.now())) : d("".concat(i.msg))
						}(l)
					}), await b.requestDetail(), null != b.detailModel) {
					if (2 === b.detailModel.limitReason) return void(null == (l = D.value) || l.show());
					if (1 === b.detailModel.limitReason) return void(null == (a = C.value) || a.show(b.detailModel.videoDetail.buyPrice));
					b.detailModel.buyPrice > 0 && (null == (u = q.value) || u.show(b.detailModel.buyPrice)), B().addRecord(b.detailModel.videoDetail), b.isShowBarrage && async function(l) {
						var a;
						try {
							const t = window.location.protocol,
								u = "".concat(t, "//").concat(window.location.host, "/json").concat(new URL(l).pathname),
								n = (await z.get(u)).data,
								o = [];
							for (let l of n) o.push({
								content: l.barrageMsg,
								time: l.duration,
								color: e.getRandomBrightColor(),
								isSelf: !1
							});
							null == (a = g.value) || a.updateDanmuList(o)
						} catch (t) {}
					}(b.detailModel.barrageUrl)
				}
			}), E(() => {
				var e;
				v.off("sendVideoDanMu"), null == (e = null == g ? void 0 : g.value) || e.destroyPlayer()
			}), (e, l) => {
				var t, u;
				return L(), k("div", oe, [null != P(b).detailModel ? (L(), k("div", ie, [T(J), T(P(a)), T(ne, {
					ref_key: "dPlayerRef",
					ref: g,
					id: _.id,
					url: null != (u = null == (t = P(b).detailModel) ? void 0 : t.playUrl) ? u : "",
					cover: P(b).detailModel.videoDetail.img
				}, null, 8, ["id", "url", "cover"]), T(P(n)), T(P(o)), T(P(i)), T(P(s)), T(P(p)), T(P(m)), T(P(y), {
					list: P(b).recommendVodList
				}, null, 8, ["list"])])) : A("", !0), null == P(b).detailModel ? (L(), x(V, {
					key: 1
				})) : A("", !0), T(O), w("div", se, [T(P(j), {
					ref_key: "vipPayRef",
					ref: g
				}, null, 512), T(P(M), {
					ref_key: "1ingotPayRef",
					ref: g
				}, null, 512), T(P(S), {
					ref_key: "1ingotCostRef",
					ref: g
				}, null, 512)])])
			}
		}
	}),
	ve = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: re
	}, Symbol.toStringTag, {
		value: "Module"
	}));
export {
	ve as i, G as u
};