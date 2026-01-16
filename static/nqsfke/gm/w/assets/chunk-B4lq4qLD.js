import {
	a as e,
	C as t,
	c as s,
	S as a
} from "./ht-DIEl3wcJ.js";
import {
	u as l
} from "./chunk-B89XNyw8.js";
import {
	C as n,
	r as o,
	c as r,
	D as c,
	W as i,
	P as p,
	u as x,
	L as d,
	Z as u,
	Q as f,
	X as m,
	E as k,
	n as y,
	b as v,
	G as g,
	T as h,
	V as w,
	U as b
} from "./chunk-DPRUGDB1.js"; /* empty css              */
import {
	V as I
} from "./chunk-D7vb_8Ak.js";
import {
	_ as j
} from "./chunk-BhYrTiFM.js";
import {
	_
} from "./chunk-DSSbwpS6.js";
import {
	_ as C
} from "./chunk-Py1EMREM.js";
import {
	_ as T
} from "./chunk-DByKRJTV.js";
import "./chunk-DWTGLlOg.js";
import "./chunk-Cd8018WW.js";
import "./chunk-CMQyd8eO.js";
import "./chunk-a7obrEbD.js";
import "./chunk-DQhVL27x.js";
import "./chunk-cn7T4ICr.js";
import "./chunk-Bh3yC0yB.js";
import "./chunk-B6RrTHmg.js";
import "./chunk-B9m9zD55.js";
import "./chunk-DjdYu-xF.js";
import "./chunk-BHPWSuhB.js";
import "./chunk-Xpcu2h2O.js";
import "./chunk-fUqY2CL3.js";
import "./chunk-DH8whQsn.js";
//console.log('cate');
const P = {
		class: "w-full flex flex-col px-[15px] space-y-[15px] mt-[10px]"
	},
	N = {
		key: 0,
		class: "w-full flex flex-row items-center"
	},
	L = ["onClick"],
	S = {
		class: "w-full flex flex-row items-center"
	},
	z = ["onClick"],
	U = {
		class: "w-full flex flex-row items-center"
	},
	V = {
		class: "no-scrollbar flex flex-row space-x-1 overflow-scroll ml-2"
	},
	D = ["onClick"],
	F = n({
		__name: "CategoryListView",
		emits: ["update:more"],
		setup(s, {
			emit: a
		}) {
			const n = l(),
				v = o(),
				g = o(),
				h = a;

			function w(e) {
				h("update:more", e)
			}
			return r(async () => {
				await y(), t.scrollToItem(v.value, n.secondTypeIndex), t.scrollToItem(g.value, n.tagIndex)
			}), (t, s) => (k(), c("div", P, [x(n).secondTypeList.length > 1 ? (k(), c("div", N, [s[3] || (s[3] = p("span", {
				class: "text-[15px] text-black font-bold shrink-0"
			}, "分类:", -1)), p("div", {
				class: "no-scrollbar flex flex-row space-x-1 overflow-scroll ml-2",
				ref_key: "typeScrollContainer",
				ref: v
			}, [(k(!0), c(d, null, u(x(n).secondTypeList, (t, s) => (k(), c("div", {
				key: s,
				onClick: t => {
					return a = s, n.setSecondTypeIndex(a), n.setPageNo(1), void e("/type/".concat(n.firstTypeId, "/").concat(n.getNavParams));
					var a
				},
				class: f(["nowrap inline-flex cursor-pointer items-center rounded-[3px] px-2 py-[1px] text-center text-[15px] whitespace-nowrap transition-all duration-300", s === x(n).secondTypeIndex ? "bg-blue-500 text-white" : "text-black"])
			}, m(t.typeName), 11, L))), 128))], 512), x(n).secondTypeList.length > 3 ? (k(), c("div", {
				key: 0,
				class: "flex flex-row ml-2 items-center shrink-0",
				onClick: s[0] || (s[0] = e => w(0))
			}, s[2] || (s[2] = [p("span", {
				class: "text-gray-400 text-[15px]"
			}, "更多", -1), p("i", {
				class: "iconfont icon-arrow text-gray-400",
				style: {
					"font-size": "15px"
				}
			}, null, -1)]))) : i("", !0)])) : i("", !0), p("div", S, [s[5] || (s[5] = p("span", {
				class: "text-[15px] text-black font-bold shrink-0"
			}, "标签:", -1)), p("div", {
				class: "no-scrollbar flex flex-row space-x-1 overflow-scroll ml-2",
				ref_key: "tagScrollContainer",
				ref: g
			}, [(k(!0), c(d, null, u(x(n).tagList, (t, s) => (k(), c("div", {
				key: s,
				onClick: t => {
					return a = s, n.setTagIndex(a), n.setPageNo(1), void e("/type/".concat(n.firstTypeId, "/").concat(n.getNavParams));
					var a
				},
				class: f(["nowrap inline-flex cursor-pointer items-center rounded-[3px] px-2 py-[1px] text-center text-[15px] whitespace-nowrap transition-all duration-300", s === x(n).tagIndex ? "bg-blue-500 text-white" : "text-black"])
			}, m(t), 11, z))), 128))], 512), p("div", {
				class: "flex flex-row ml-2 items-center shrink-0",
				onClick: s[1] || (s[1] = e => w(1))
			}, s[4] || (s[4] = [p("span", {
				class: "text-gray-400 text-[15px]"
			}, "更多", -1), p("i", {
				class: "iconfont icon-arrow text-gray-400",
				style: {
					"font-size": "15px"
				}
			}, null, -1)]))]), p("div", U, [s[6] || (s[6] = p("span", {
				class: "text-[15px] text-black font-bold shrink-0"
			}, "排序:", -1)), p("div", V, [(k(!0), c(d, null, u(x(n).sortTextList, (t, s) => (k(), c("div", {
				key: s,
				onClick: t => {
					return a = s, n.setSortIndex(a), n.setPageNo(1), void e("/type/".concat(n.firstTypeId, "/").concat(n.getNavParams));
					var a
				},
				class: f(["nowrap inline-flex cursor-pointer items-center rounded-[3px] px-2 py-[1px] text-center text-[15px] whitespace-nowrap transition-all duration-300", s === x(n).sortIndex ? "bg-blue-500 text-white" : "text-black"])
			}, m(t), 11, D))), 128))])])]))
		}
	}),
	E = {
		key: 0,
		class: "flex w-full flex-col bg-white rounded-b-[10px]"
	},
	Z = {
		class: "w-full flex flex-row items-center justify-between px-[15px] h-[50px]"
	},
	q = {
		class: "text-[16px] text-black font-bold shrink-0"
	},
	G = {
		key: 0,
		class: "flex flex-wrap w-full pl-[15px] pr-[7px] pt-3 pb-1 overflow-y-auto"
	},
	O = ["onClick"],
	Q = {
		key: 1,
		class: "flex flex-wrap w-full pl-[15px] pr-[7px] pt-3 pb-1 overflow-y-auto"
	},
	R = ["onClick"],
	W = s(n({
		__name: "SelectCategoryDialog",
		emits: ["clickClose"],
		setup(t, {
			expose: s,
			emit: a
		}) {
			const n = o("pointer-events-none"),
				r = o(!1),
				y = a,
				b = o(!0),
				I = l(),
				j = () => {
					r.value = !1, n.value = "pointer-events-none", y("clickClose")
				};
			return v(() => {}), s({
				show: e => {
					b.value = e, n.value = "", r.value = !0
				},
				hide: j
			}), (t, s) => (k(), c("div", {
				class: f(["fixed z-[2000] flex h-full w-full flex-col", n.value])
			}, [r.value ? (k(), c("div", {
				key: 0,
				class: "absolute w-full h-full bg-black/50 z-[-1]",
				onClick: j
			})) : i("", !0), g(h, {
				"enter-active-class": "animate__animated animate__slideInDown",
				"leave-active-class": "animate__animated animate__slideOutUp",
				style: {
					"animation-duration": "0.3s"
				}
			}, {
				default: w(() => [r.value ? (k(), c("div", E, [p("div", Z, [p("span", q, "选择" + m(b.value ? "分类" : "标签") + ":", 1), p("i", {
					class: "iconfont icon-close1 text-gray-500 px-2 flex items-center justify-center",
					style: {
						"font-size": "25px"
					},
					onClick: j
				})]), s[0] || (s[0] = p("div", {
					class: "w-full h-[1px] bg-gray-200"
				}, null, -1)), b.value ? (k(), c("div", G, [(k(!0), c(d, null, u(x(I).secondTypeList, (t, s) => (k(), c("div", {
					class: f(["relative px-2 py-1 rounded-[3px] text-[14px] mb-2 mr-2", s === x(I).secondTypeIndex ? "bg-black text-white" : "text-black"]),
					onClick: t => {
						return a = s, I.setSecondTypeIndex(a), I.setPageNo(1), e("/type/".concat(I.firstTypeId, "/").concat(I.getNavParams)), void j();
						var a
					}
				}, m(t.typeName), 11, O))), 256))])) : i("", !0), b.value ? i("", !0) : (k(), c("div", Q, [(k(!0), c(d, null, u(x(I).tagList, (t, s) => (k(), c("div", {
					class: f(["relative px-2 py-1 rounded-[3px] text-[14px] mb-2 mr-2", s === x(I).tagIndex ? "bg-black text-white" : "text-black"]),
					onClick: t => {
						return a = s, I.setTagIndex(a), I.setPageNo(1), e("/type/".concat(I.firstTypeId, "/").concat(I.getNavParams)), void j();
						var a
					}
				}, m(t), 11, R))), 256))]))])) : i("", !0)]),
				_: 1
			})], 2))
		}
	}), [
		["__scopeId", "data-v-9756fb75"]
	]),
	X = {
		class: "w-full"
	},
	Y = {
		class: "mt-[15px] grid grid-cols-2 gap-x-2 gap-y-2 px-[15px]"
	},
	$ = {
		class: "absolute top-0 left-0"
	},
	A = s(n({
		__name: "index",
		props: {
			category: {},
			subCategory: {
				default: ""
			}
		},
		setup(t) {
			const s = t,
				n = l(),
				f = o();

			function m(e) {
				f.value.show(0 === e)
			}

			function y(t) {
				n.setPageNo(t), e("/type/".concat(n.firstTypeId, "/").concat(n.getNavParams))
			}
			return r(() => {
				n.resetFilter(), n.setFirstTypeId(s.category);
				let e = s.subCategory;
				if (!a.isEmpty(e)) {
					const t = e.split("-");
					t.length >= 1 && n.setSecondTypeIndex(parseInt(t[0])), t.length >= 2 && n.setTagIndex(parseInt(t[1])), t.length >= 3 && n.setSortIndex(parseInt(t[2])), t.length >= 4 && n.setPageNo(parseInt(t[3]))
				}
				n.reqFilterVodList()
			}), (e, t) => (k(), c("div", X, [g(F, {
				"onUpdate:more": m
			}), x(n).isLoading ? (k(), b(C, {
				key: 0
			})) : i("", !0), !x(n).isLoading && x(n).vodList.length <= 0 ? (k(), b(T, {
				key: 1
			})) : i("", !0), p("div", Y, [(k(!0), c(d, null, u(x(n).vodList, (e, t) => (k(), b(_, {
				model: e,
				key: t,
				rounded: 4
			}, null, 8, ["model"]))), 128))]), !x(n).isLoading && x(n).totalPage > 1 ? (k(), b(I, {
				key: 2,
				"onUpdate:currentPage": y,
				"current-page": x(n).pageNo,
				"total-page": x(n).totalPage
			}, null, 8, ["current-page", "total-page"])) : i("", !0), g(j), p("div", $, [g(W, {
				ref_key: "selectCategoryRef",
				ref: f
			}, null, 512)])]))
		}
	}), [
		["__scopeId", "data-v-4fe8e8d0"]
	]);
export {
	A as
	default
};