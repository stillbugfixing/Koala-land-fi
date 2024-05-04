(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(5314);
        },
      ]);
    },
    5314: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Y;
          },
        });
      var a = s(5893),
        r = s(7294),
        i = s(5675),
        l = s.n(i),
        n = s(5121);
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          s = [
            { suffix: "T", threshold: 1e12 },
            { suffix: "B", threshold: 1e9 },
            { suffix: "M", threshold: 1e6 },
            { suffix: "K", threshold: 1e3 },
            { suffix: "", threshold: 1 },
          ].find((t) => Math.abs(e) >= t.threshold);
        return s ? (e / s.threshold).toFixed(t) + s.suffix : e;
      }
      var c = s(3350);
      function o(e) {
        let { className: t, children: s } = e;
        return (0, a.jsx)("div", {
          className: (0, c.Z)(t),
          children: (0, a.jsx)("div", {
            className: "max-w-6xl w-full mx-auto my-12",
            children: s,
          }),
        });
      }
      var h = function (e, t) {
        let {
            threshold: s = 0,
            root: a = null,
            rootMargin: i = "0%",
            delay: l = 0,
          } = t,
          [n, d] = (0, r.useState)(),
          c = (e) => {
            let [t] = e;
            d(t);
          };
        return (
          (0, r.useEffect)(() => {
            let t = null == e ? void 0 : e.current;
            if (!window.IntersectionObserver || !t) return;
            let r = new IntersectionObserver(
              (e) => {
                l ? setTimeout(() => c(e), l) : c(e);
              },
              { threshold: s, root: a, rootMargin: i }
            );
            return r.observe(t), () => r.disconnect();
          }, [e, JSON.stringify(s), a, i]),
          n
        );
      };
      function m(e) {
        let { benefit: t } = e,
          s = (0, r.useRef)(null),
          i = h(s, { threshold: 0, delay: 1e3, rootMargin: "-25% 0% -25% 0%" });
        return (
          null == i || i.isIntersecting,
          (0, a.jsxs)("div", {
            className: "flex flex-col space-y-4 items-start rounded-md",
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)(l(), { src: t.icon, alt: "" }),
              }),
              (0, a.jsxs)("div", {
                ref: s,
                className: (0, c.Z)("flex-1", ""),
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-lg font-bold text-white md:text-xl lg:text-2xl lg:whitespace-nowrap",
                    children: t.name,
                  }),
                  (0, a.jsx)("p", {
                    className: "text-sm text-white text-justify ",
                    children: t.description,
                  }),
                ],
              }),
            ],
          })
        );
      }
      var x = {
        src: "/_next/static/media/benefits_top_left_graphics.75804c8f.svg",
        height: 81,
        width: 81,
        blurWidth: 0,
        blurHeight: 0,
      };
      let A = [
        {
          name: "Multichain & Crosschain",
          description:
            "Wombat's open liquidity pool design aggregates liquidity in a shared pool intricately balanced by Coverage Ratios, providing greater capital efficiency. Furthermore, this unique design makes Wombat the only multichain and crosschain single-sided DEX. Crosschain messaging powered exclusively by Wormhole.",
          icon: {
            src: "/_next/static/media/Multichain_CrossChain.png",
            height: 793,
            width: 1024,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAYFBMVEVMaXGOdUaFbk9wfoxhhLZlkMo5TBBwaUhBW1Jzl8lygZKKdVWXf29kisBmhKxRk2JQnGSJdWZXo2prhnAAAABOlmFigmSCa2DduUmGaiC9mUvNr02/okxXsHLXpU710VDgNWF1AAAAHXRSTlMAU3PQu981CSma9J6C9I5t4jR6/RqoidfdN6qHYfMMvk0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicBcGJAkAgEEDBF9VuCOU+yv//pRmApgdIg7SdirAvaqMehq344Ey9yUWCu76HaV5H68/3By9RAkwRQ2lkAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 6,
          },
        },
        {
          name: "Single-sided Deposit",
          description:
            "Wombat's flexible liquidity pools allow staking with a single token, these pure LP tokens facilitates liquidity growth without the need for complex maneuvers. This ideal is scaled up onto our crosschain pools, ensuring maximum capital efficiency and asset scalability.",
          icon: {
            src: "/_next/static/media/SingleSided_Deposit.png",
            height: 793,
            width: 1024,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVMaXEuKBjbuDrIqDIAABU2LyOciDOhvck0LB2vk6FyYTNwYz2poF5JPyv/60XatjGfiECbiU/0CRngAAAADXRSTlMAUraoDnh1CK4bwqpcOdyUkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdyMcNACAMwEBTk9DZf1kUXj4ZEMQAxGoc4qh7peyr39M+ypzqJagWeBj5AOsX2GDYAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 6,
          },
        },
        {
          name: "Gamified Bribe Market 2.0",
          description:
            "Wombat's Gamified bribe market incentivizes more than just LP provisions. Users are incentivized to do a multitude of fun actions which add value to the Wombat ecosystem and our partners. Play games and win and earn!",
          icon: {
            src: "/_next/static/media/Gamified.png",
            height: 793,
            width: 1024,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEVMaXEvOkd6jq0/UnNNdrdSdrF/fwBBXYozLyJ/f39fcnRDY4mrjxugfwXDqFA4QEo4QEhQcqZZi61wc5+PglOPglL8JODeAAAAEXRSTlMAYvyp/vwCpDIEsJFALvljY4MRxyoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicBcGFAcAgEACxA97wUtl/1SZYZQyqYcy1Jkb09r2tB9dR0Xwn9lGR/CSiuLuX+AEsEQGV67pjIAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 6,
          },
        },
        {
          name: "Max Efficiency, Min Slippage Rate",
          description:
            "Wombat uses an asset to liability model that negates slippage until higher transaction amounts and reduces slippage when it occurs. Coupled with a gas-efficient algorithm, Wombat's swaps are exceptionally efficient.",
          icon: {
            src: "/_next/static/media/MaxEfficiency.png",
            height: 793,
            width: 1024,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAARVBMVEVuToxKWHBfZ3OjeLpmV4pbT2GWa7CoesSaca+neL1AVnhAVHSpmINfV0R4aVNNSDFtYVCYiHJ3Z1ODdGGHaaDArJZ7alWS9f+8AAAAFXRSTlMBr/tOEUBADhwrao74Xe0uhb2viDCVd9jaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nDXBSRLAIAgAwUFFIJtLKv7/qZ7SDb/I9Pc2w6Nd36gBVZ813cA1JSkGlFMO2CCCATOm2Vb0AAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 6,
          },
        },
      ];
      function b() {
        let [e, t] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(3e9),
          [c, h] = (0, r.useState)(0),
          [b, g] = (0, r.useState)(7);
        return (
          (0, r.useEffect)(() => {
            (async () => {
              try {
                t(!0);
                let e = await n.Z.get(
                  "https://api.llama.fi/summary/dexs/wombat-exchange?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true&dataType=dailyVolume"
                );
                i(e.data.totalAllTime),
                  h(e.data.total24h),
                  g(e.data.chains.length);
              } catch (e) {
                console.error("Could not load data from Defillama");
              }
              t(!1);
            })();
          }, []),
          (0, a.jsxs)("div", {
            className: "relative bg-wombatPurple",
            children: [
              (0, a.jsx)("div", {
                className: "absolute top-0 flex -mt-1",
                children: (0, a.jsx)(l(), {
                  src: x,
                  alt: "",
                  height: 100,
                  width: 100,
                }),
              }),
              (0, a.jsx)(o, {
                className: "px-5 py-px",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col px-7 pb-10 space-y-8 md:max-w-5xl md:mx-auto",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-xl md:text-2xl md:pt-20 font-medium tracking-tight text-white md:whitespace-nowrap text-center",
                          children:
                            "An innovative protocol to swap, bridge, and earn in a single unique pool",
                        }),
                        (0, a.jsx)("h2", {
                          className:
                            "text-3xl md:text-5xl font-bold text-white text-center md:mb-6",
                          children: "Welcome to Wombat Exchange",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col font-bold py-6 px-6 md:py-10 md:px-10 text-center md:text-center text-xl md:text-4xl text-wombatGrey grid grid-cols-2 md:grid-cols-4 gap-4 bg-wombatyellow",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            "$",
                            d(s),
                            "+",
                            (0, a.jsx)("div", {
                              className: "text-xs md:text-lg",
                              children: "Cumulative Volume",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            "$",
                            d(c),
                            "+",
                            (0, a.jsx)("div", {
                              className: "text-xs md:text-lg",
                              children: "24H Volume",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            b,
                            "+",
                            (0, a.jsx)("div", {
                              className: "text-xs md:text-lg",
                              children: "Chains",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            "140+",
                            (0, a.jsx)("div", {
                              className: "text-xs md:text-lg",
                              children: "Assets Listed",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-10 md:gap-y-10",
                      children: [0, 1, 2, 3].map((e) =>
                        (0, a.jsx)(m, { benefit: A[e] }, "benefits_".concat(e))
                      ),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var g = s(4547);
      function u() {
        return (0, a.jsx)(o, {
          className: "bg-wombatyellow p-1",
          children: (0, a.jsx)("div", {
            className: "text-black text-xs mt-12",
            children: (0, a.jsx)("div", {
              className: "container mx-auto px-4",
              children: (0, a.jsxs)("div", {
                className: "sm:flex sm:flex-wrap sm:-mx-4 md:py-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "px-4 sm:w-2/5 md:w-2/5 xl:w-2/5",
                    children: (0, a.jsx)("h5", {
                      className:
                        "text-xl font-bold mb-6 sm:text-center xl:text-left",
                      children: (0, a.jsx)("div", {
                        className: "flex-none pt-2 lg:pt-0 w-28 lg:w-44",
                        children: (0, a.jsx)("a", {
                          href: "#",
                          children: (0, a.jsx)(l(), {
                            src: g.Z,
                            alt: "wombat",
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "px-4 sm:w-1/5 md:w-1/5 xl:w-1/5",
                    children: [
                      (0, a.jsx)("h5", {
                        className: "text-xl font-bold mb-6",
                        children: "Features",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "list-none footer-links",
                        children: [
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/resources/whitepapers",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Single-sided Pegged Asset AMM",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/resources/whitepapers",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Single-sided Volatile Asset AMM",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/concepts/coverage-ratio",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Single-sided Liquidity Pools",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/concepts/invariant-curve",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Low Slippage",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/concepts/cross-chain",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent ",
                              children: "Crosschain",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/developers/contracts",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Multichain",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Gamified Bribe Market",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/governance/gauge-voting",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Traditional Bribe Market",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "px-4 sm:w-1/5 md:w-1/5 xl:w-1/5 mt-8 sm:mt-0",
                    children: [
                      (0, a.jsx)("h5", {
                        className: "text-xl font-bold mb-6",
                        children: "Resources",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "list-none footer-links",
                        children: [
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/tokenomics/about-wom/where-to-buy-usdwom",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Where To Buy $WOM?",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "GitBook",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://gov.wombat.exchange/",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Governance",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://www.youtube.com/@wombatexchange",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "YouTube",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/resources/whitepapers",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Whitepapers",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/resources/security-audits",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Security Audits",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://docs.wombat.exchange/resources/brand-assets",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Brand Assets",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "px-4 sm:w-1/5 md:w-1/5 xl:w-1/5 mt-8 md:mt-0",
                    children: [
                      (0, a.jsx)("h5", {
                        className: "text-xl font-bold mb-6",
                        children: "Community",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "list-none footer-links",
                        children: [
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://www.twitter.com/WombatExchange",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "X/Twitter",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://medium.com/@wombatexchange",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Medium",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://discord.gg/Wombat",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Discord",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://t.me/WombatExchange",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Telegram",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "mb-2",
                            children: (0, a.jsx)("a", {
                              href: "https://t.me/WombatExchangeNews",
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",
                              children: "Telegram News",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var p = {
          src: "/_next/static/media/hero-graphic.png",
          height: 1131,
          width: 1460,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAASFBMVEWJhpajWWQZQ1XBoTLUQCnZtzQnNUOEdU7TtD3buTjVsjZRQjGUh1KzkjDsxzeZiHh0KEYlQVbhoDFcJk+HhXeXeWdjbm6kkXtmRVXJAAAAFXRSTlMBh6lHEXZIJ0yGXVh8l+v4vy9nrm2wGvN6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nBXIWRLAEBQAwSF49i3I/W+a0p8Nlw0gXpIrAZ6a27duG7W38hFMP+edFhhaO/gBIt0BakKfeNAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        },
        f = {
          src: "/_next/static/media/accelerated_by_binance.731c26b6.svg",
          height: 51,
          width: 367,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = {
          src: "/_next/static/media/supported-chains.png",
          height: 394,
          width: 3152,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAGFBMVEXzxsXt7enn3dTMyL7dxsmoq6nS1NO7stBxKxvOAAAAAnRSTlP9/o2EjdMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BkZmVjYmFnAAAAhAAdhv+n7wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        };
      function w() {
        return (0, a.jsxs)(o, {
          className: "bg-wombatEggshell px-8 lg:py-8",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-row justify-center md:justify-between md:p-6 md:mx-auto ",
              children: [
                (0, a.jsxs)("div", {
                  className: "md:w-1/2 text-left",
                  children: [
                    (0, a.jsxs)("h1", {
                      className:
                        "text-center md:text-justify text-3xl tracking-tight font-bold text-black md:text-4xl lg:text-5xl whitespace-nowrap",
                      children: [
                        "MULTICHAIN & CROSSCHAIN",
                        (0, a.jsx)("br", {}),
                        "SINGLE-SIDED DEX",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-center md:text-left text-black mt-2 lg:mt-4 text-xs md:text-base",
                      children:
                        "Swap assets at minimal slippage and stake at maximum yield. Ensuring capital efficiency to the fullest on our novel and innovative DEX.",
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-4",
                      children: (0, a.jsx)(l(), { src: j, alt: "" }),
                    }),
                    (0, a.jsx)("div", {
                      className: "block md:hidden",
                      children: (0, a.jsx)(l(), { src: p, alt: "" }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "hidden md:block my-auto md:w-1/2",
                  children: (0, a.jsx)(l(), { src: p, alt: "" }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "flex justify-center w-40 md:w-56 lg:w-auto mx-auto mt-2 md:mt-6",
              children: (0, a.jsx)("a", {
                href: "https://www.binance.com/en/blog/ecosystem/binance-labs-launches-season-3-of-incubation-program-421499824684903042",
                target: "_blank",
                rel: "noreferrer",
                children: (0, a.jsx)(l(), {
                  src: f,
                  alt: "",
                  height: 51,
                  width: 403,
                }),
              }),
            }),
          ],
        });
      }
      var v = {
          src: "/_next/static/media/investor_bottom_right.7fcfc3f2.svg",
          height: 80,
          width: 80,
          blurWidth: 0,
          blurHeight: 0,
        },
        N = {
          src: "/_next/static/media/animoca_brands.79e9185c.svg",
          height: 604,
          width: 1e3,
          blurWidth: 0,
          blurHeight: 0,
        },
        y = {
          src: "/_next/static/media/Logo-vertical-dark-shima.5b316e18.svg",
          height: 483,
          width: 859,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "/_next/static/media/jumpcrypto_logo.89020460.svg",
          height: 93,
          width: 290,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/Wormhole Logo3.036ce769.svg",
          height: 113,
          width: 649,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: "/_next/static/media/TPS Capital.f67a7856.svg",
          height: 303,
          width: 1741,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/_next/static/media/gsr.0aca0f98.svg",
          height: 792,
          width: 1224,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/zokyo.c4a6b125.svg",
          height: 120,
          width: 483,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/lunarstation.48fa08d6.svg",
          height: 941,
          width: 2e3,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/_next/static/media/eureka_trading_blue.f3c45b8a.svg",
          height: 271,
          width: 1077,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/unanimous.9b381457.svg",
          height: 54,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        },
        R = {
          src: "/_next/static/media/rubikvc.png",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXEmGhQBAQF3M0MIExQCAQIDAwgCCQAcIx4DBwsBAQABAAAanNIlqoQVnoKQUVcXjpz//+8Gi7GnjmENTUWMS1LDsnboJI3/AAAAF3RSTlMATqxDLYplFgk9VKI5G/3JxxB5mpv9dLkEAAMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicPcvJAYAwCATAxQALQY13/6X6y/wHmKQnWguw0ny8BEtNvvsEF6+8ngAN3Y99Qyioq8TcPzbIAY6WgPpAAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        U = {
          src: "/_next/static/media/binance_labs.83065e3d.svg",
          height: 127,
          width: 492,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/_next/static/media/bnbchain.ac0e78e2.svg",
          height: 177,
          width: 1004,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/cryptowesearch.b7a47752.svg",
          height: 56,
          width: 204,
          blurWidth: 0,
          blurHeight: 0,
        },
        H = {
          src: "/_next/static/media/multichainresearch.png",
          height: 345,
          width: 1280,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUgISAkKSdNflJOf1UfHx8AAAAZL0FtAAAABnRSTlMlHTdQEAGdMgxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYmZgYGRgYGEAMRgYGVkBAMgAF2SuDnYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        G = {
          src: "/_next/static/media/RRLogoRS.png",
          height: 608,
          width: 608,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXEsJ1wqJVspJFsuKVwuKl8pJloh1/xtAAAAB3RSTlMAJHg2EkiYDG0IbgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAChJREFUeJxty8ENADAMwkAMpPuPHPUff0+WjkIYpLh4KvFsf4FAj2cBCMMAPKOILbQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        J = {
          src: "/_next/static/media/double_quote_left.0f69f580.svg",
          height: 18,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        },
        F = {
          src: "/_next/static/media/double_quote_right.c0447248.svg",
          height: 18,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/yatsiu.e70209e0.svg",
          height: 110,
          width: 110,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/senghuang.164bcccc.svg",
          height: 58,
          width: 58,
          blurWidth: 0,
          blurHeight: 0,
        },
        X = {
          src: "/_next/static/media/gentleman-v2.4b9650af.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        I = {
          src: "/_next/static/media/sharma.e9675102.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        Q = {
          src: "/_next/static/media/team_top_left_graphics.e0ebf195.svg",
          height: 80,
          width: 80,
          blurWidth: 0,
          blurHeight: 0,
        };
      function O() {
        return (0, a.jsxs)("div", {
          className: "bg-wombatEggshell md:pb-1 md:pt-10",
          children: [
            (0, a.jsx)("div", {
              className: "absolute top-0 flex",
              children: (0, a.jsx)(l(), {
                src: Q,
                height: 100,
                width: 100,
                alt: "left",
              }),
            }),
            (0, a.jsxs)(o, {
              className: "p-1 pt-4",
              children: [
                (0, a.jsx)("p", {
                  className:
                    "md:pb-10 md:pt-10 font-bold text-3xl md:text-4xl text-center text-black ",
                  children: "Proudly Backed By",
                }),
                (0, a.jsx)("div", {
                  className: "max-w-md md:max-w-6xl mx-auto",
                  children: (0, a.jsxs)("div", {
                    className:
                      "grid grid-cols-2 mx-12 md:grid-cols-8 gap-10 py-10 md:gap-6 min-w-0 min-h-0 justify-center items-center",
                    children: [
                      (0, a.jsx)(l(), {
                        src: N,
                        className: "object-contain md:scale-75 scale-75",
                        alt: "animoca",
                      }),
                      (0, a.jsx)(l(), {
                        src: y,
                        className: "object-contain",
                        alt: "shima",
                      }),
                      (0, a.jsx)(l(), {
                        src: U,
                        className: "object-contain",
                        alt: "binancelabs",
                      }),
                      (0, a.jsx)(l(), {
                        src: V,
                        className: "object-contain",
                        alt: "bnb",
                      }),
                      (0, a.jsx)(l(), {
                        src: k,
                        className: "object-contain md:scale-75 scale-75",
                        alt: "jump",
                      }),
                      (0, a.jsx)(l(), {
                        src: E,
                        className: "object-contain",
                        alt: "wormhole",
                      }),
                      (0, a.jsx)(l(), {
                        src: C,
                        className: "object-contain",
                        alt: "tps",
                      }),
                      (0, a.jsx)(l(), {
                        src: B,
                        className: "object-contain  md:scale-75 scale-75",
                        alt: "gsr",
                      }),
                      (0, a.jsx)(l(), {
                        src: S,
                        className: "object-contain md:scale-75 scale-75",
                        alt: "zokyo",
                      }),
                      (0, a.jsx)(l(), {
                        src: W,
                        className: "object-contain md: scale-95 scale-75",
                        alt: "eureka",
                      }),
                      (0, a.jsx)(l(), {
                        src: R,
                        className: "object-contain scale-50",
                        alt: "rubik",
                      }),
                      (0, a.jsx)(l(), {
                        src: M,
                        className: "object-contain",
                        alt: "unanimous",
                      }),
                      (0, a.jsx)(l(), {
                        src: _,
                        className: "object-contain",
                        alt: "lunar",
                      }),
                      (0, a.jsx)(l(), {
                        src: D,
                        className: "object-contain",
                        alt: "cryptowesearch",
                      }),
                      (0, a.jsx)(l(), {
                        src: H,
                        className: "object-contain",
                        alt: "multichain",
                      }),
                      (0, a.jsx)(l(), {
                        src: G,
                        className: "object-contain md:scale-50 scale-50",
                        alt: "rr",
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "py-10 text-xs mx-10 md:text-base",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-none w-7 md:w-auto h-5 md:h-auto",
                          children: (0, a.jsx)(l(), {
                            src: J,
                            width: 74,
                            height: 48,
                            alt: "quote",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "mx-1 my-3 md:my-4 md:ml-4 md:mr-2",
                              children: [
                                (0, a.jsxs)("p", {
                                  children: [
                                    "Wombat Exchange has put together a solid and experienced team to develop a stableswap that has the potential to significantly advance the growth of DeFi. We’re looking forward to seeing Wombat’s meaningful contribution to the BNB Chain and its adoption in the multichain world.",
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsx)("br", {}),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex md:hidden justify-end items-center",
                                  children: [
                                    (0, a.jsxs)("p", {
                                      className:
                                        "py-auto  font-medium text-right",
                                      children: [
                                        "Yat Siu ",
                                        (0, a.jsx)("br", {}),
                                        "Co-Founder & Executive Chairman ",
                                        (0, a.jsx)("br", {}),
                                        "Animoca Brands",
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "flex-none ml-1",
                                      children: (0, a.jsx)(l(), {
                                        src: T,
                                        width: 58,
                                        height: 58,
                                        alt: "yat",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "hidden md:block  font-medium",
                                  children:
                                    "Yat Siu, Co-Founder & Executive Chairman of Animoca Brands",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "hidden md:block flex-none",
                              children: (0, a.jsx)(l(), {
                                src: T,
                                width: 110,
                                height: 110,
                                alt: "yat",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex pt-6 py-5",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "hidden md:block flex-none",
                            children: (0, a.jsx)(l(), {
                              src: L,
                              width: 110,
                              height: 110,
                              alt: "seng",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "mx-1 my-3 md:my-4 md:ml-2 md:mr-4",
                            children: [
                              (0, a.jsxs)("p", {
                                children: [
                                  "We were impressed by Wombat’s innovation, and we strongly believe in their contribution to the ecosystem. Their algorithm and solution are pioneering and will support the protocols that will shape the future of DeFi for the better.",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("br", {}),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex md:hidden justify-end items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "flex-none mr-1",
                                    children: (0, a.jsx)(l(), {
                                      src: L,
                                      width: 58,
                                      height: 58,
                                      alt: "seng",
                                    }),
                                  }),
                                  (0, a.jsxs)("p", {
                                    className: "py-auto  font-medium",
                                    children: [
                                      "Seng Huang Lee ",
                                      (0, a.jsx)("br", {}),
                                      "Group Executive Chairman of Sun Hung Kai & Co",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className: "hidden md:block  font-medium",
                                children:
                                  "Seng Huang Lee, Group Executive Chairman of Sun Hung Kai & Co",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "mx-1 my-3 md:my-4 md:ml-4 md:mr-2",
                            children: [
                              (0, a.jsxs)("p", {
                                children: [
                                  "Stablecoins are the fundamental backbone of DeFi yet they bring a set of challenges, like building efficient stableswaps, that first-generation protocols still have trouble overcoming. With a world-class team, Wombat Exchange has pioneered an incredibly ingenious and mathematically sound product to solve many of those challenges, and is well positioned to build additional DeFi primitives that push the boundary of crypto innovation as we know it today. We are inspired by what Wombat can achieve and are excited to be on this journey with them.",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("br", {}),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex md:hidden justify-end items-center",
                                children: [
                                  (0, a.jsxs)("p", {
                                    className:
                                      "py-auto  font-medium text-right",
                                    children: [
                                      "Yida Gao ",
                                      (0, a.jsx)("br", {}),
                                      "General Partner ",
                                      (0, a.jsx)("br", {}),
                                      "Shima Capital",
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex-none ml-1",
                                    children: (0, a.jsx)(l(), {
                                      src: X,
                                      width: 58,
                                      height: 58,
                                      alt: "yida",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className: "hidden md:block  font-medium",
                                children:
                                  "Yida Gao, General Partner at Shima Capital",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "hidden md:block flex-none",
                            children: (0, a.jsx)(l(), {
                              src: X,
                              width: 110,
                              height: 110,
                              alt: "yida",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex pt-6 py-5",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "hidden md:block flex-none",
                              children: (0, a.jsx)(l(), {
                                src: I,
                                width: 110,
                                height: 110,
                                alt: "saurabh",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "mx-1 my-3 md:my-4 md:ml-2 md:mr-4",
                              children: [
                                (0, a.jsxs)("p", {
                                  children: [
                                    "Wombat is a next generation stable swap exchange that introduces elegant design principles such as invariant curve and asset liability management for computational efficiency and improving liquidity. Furthermore, leveraging Wormhole’s generic message passing protocol, Wombat offers seamless native swaps across multiple chains.",
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsx)("br", {}),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex md:hidden items-center",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "flex-none mr-1",
                                      children: (0, a.jsx)(l(), {
                                        src: I,
                                        width: 58,
                                        height: 58,
                                        alt: "saurabh",
                                      }),
                                    }),
                                    (0, a.jsxs)("p", {
                                      className: "py-auto  font-medium",
                                      children: [
                                        "Saurabh Sharma ",
                                        (0, a.jsx)("br", {}),
                                        "Partner & Head of Ventures ",
                                        (0, a.jsx)("br", {}),
                                        "Jump Crypto",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "hidden md:block  font-medium",
                                  children:
                                    "Saurabh Sharma, Partner & Head of Ventures at Jump Crypto",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "flex-none w-7 md:w-auto h-5 md:h-auto",
                          children: (0, a.jsx)(l(), {
                            src: F,
                            width: 74,
                            height: 48,
                            alt: "quote",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "absolute right-0 bottom-0 flex",
              children: (0, a.jsx)(l(), {
                src: v,
                height: 100,
                width: 100,
                alt: "rect",
              }),
            }),
          ],
        });
      }
      function Y() {
        return (0, a.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, a.jsx)(w, {}),
            (0, a.jsx)("div", { id: "welcome", children: (0, a.jsx)(b, {}) }),
            (0, a.jsx)("div", { id: "investors", children: (0, a.jsx)(O, {}) }),
            (0, a.jsx)("div", { id: "community", children: (0, a.jsx)(u, {}) }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [121, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
