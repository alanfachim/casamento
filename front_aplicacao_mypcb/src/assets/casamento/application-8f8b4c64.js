function pickHex(e, t, n) {
  var o = n
    , i = 2 * o - 1
    , r = (i / 1 + 1) / 2
    , a = 1 - r
    , s = [Math.round(e[0] * r + t[0] * a), Math.round(e[1] * r + t[1] * a), Math.round(e[2] * r + t[2] * a)];
  return "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")"
}
function getRGB(e) {
  return one.color(e).cssa().replace("rgba(", "").replace(")", "").split(",").map(function(e) {
      return parseFloat(e)
  })
}
function findObjectByKey(e, t, n) {
  for (var o = 0; o < e.length; o++)
      if (e[o][t] === n)
          return e[o];
  return null
}
function loadFacts() {
  if (isMobile) {
      $($('app-casamento')[0].shadowRoot).find(".index-fact").on("click", toggleFact)
  }
}
function toggleFact() {
  this.classList.toggle("is-active")
}
function loadOptions() {
  var e = $($('app-casamento')[0].shadowRoot).find(".js-rsvp-option");
  e.on("click", function() {
      e.toArray().forEach(function(e) {
          e.classList.remove("is-active")
      }),
      this.classList.add("is-active"),
      this == e[0] && this.classList.contains("is-active") ? $($('app-casamento')[0].shadowRoot).find(".js-rsvp-show")[0].classList.add("is-active") : $($('app-casamento')[0].shadowRoot).find(".js-rsvp-show")[0].classList.remove("is-active")
  })
}
function loadForm() {
  var e = document.querySelector(".js-form")
    , t = document.querySelector(".js-form-submit")
    , n = (document.querySelector(".js-form-error"),
  document.querySelector(".js-form-success"));
  t.addEventListener("click", function() {
      console.log("click");
      var o = {
          NAME: document.querySelector(".js-form-name").value,
          RESPONSE: document.querySelector(".js-rsvp-option.is-active").dataset.value,
          ATTENDING: document.querySelector(".js-form-attending").value,
          DIET: document.querySelector(".js-form-diet").value
      };
      t.classList.add("is-disabled"),
      t.innerHTML = "Submitting...",
      t.disabled = !0,
      $.post("https://script.google.com/macros/s/AKfycbwXJKOxUkeMWbaWtaaN7y5vqJqnoxItCrihQkz4-Q/exec", o, function(t) {
          console.log(t),
          e.style.display = "none",
          n.style.display = "block"
      })
  })
}
function loadNav() {
  var e = $($('app-casamento')[0].shadowRoot).find(".nav")[0];
  animate({
      el: e,
      translateY: ["-100%", "0%"],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutBack"
  })
}
function indexAnimation() {
  var e = 800
    , t = $($('app-casamento')[0].shadowRoot).find(".index-bl-green-outline")[0];
  animate({
      el: t,
      rotate: ["-3deg", "0deg"],
      opacity: [0, 1],
      duration: e + 3e3,
      delay: 250,
      easing: "easeOutBack"
  });
  var n = $($('app-casamento')[0].shadowRoot).find(".index-bl-yellow-flower")[0];
  animate({
      el: n,
      scale: [.9, 1],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 2e3,
      easing: "easeOutBack"
  });
  var o = $($('app-casamento')[0].shadowRoot).find(".index-bl-cactus")[0];
  animate({
      el: o,
      rotate: ["-3deg", "0deg"],
      opacity: [0, 1],
      duration: e + 3e3,
      delay: 650,
      easing: "easeOutBack"
  });
  var i = $($('app-casamento')[0].shadowRoot).find(".index-bl-red-flower")[0];
  animate({
      el: i,
      scale: [.9, 1],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 1800,
      easing: "easeOutBack"
  });
  var r = $($('app-casamento')[0].shadowRoot).find(".index-bl-moss-outline")[0];
  animate({
      el: r,
      scaleY: [.9, 1],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 800,
      easing: "easeOutBack"
  });
  var a = $($('app-casamento')[0].shadowRoot).find(".index-bl-pink-md")[0];
  animate({
      el: a,
      rotate: ["10deg", "0deg"],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 900,
      easing: "easeOutBack"
  });
  var s = $($('app-casamento')[0].shadowRoot).find(".index-bl-yellow-md")[0];
  animate({
      el: s,
      scaleY: [.9, 1],
      opacity: [0, 1],
      duration: e + 1800,
      delay: 900,
      easing: "easeOutBack"
  });
  var l = $($('app-casamento')[0].shadowRoot).find(".index-bl-green-dots")[0];
  animate({
      el: l,
      scale: [.9, 1],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 1400,
      easing: "easeOutBack"
  });
  var u = $($('app-casamento')[0].shadowRoot).find(".index-br-pink")[0];
  animate({
      el: u,
      rotate: ["-9deg", "0deg"],
      opacity: [0, 1],
      duration: e + 2400,
      delay: 850,
      easing: "easeOutBack"
  });
  var c = $($('app-casamento')[0].shadowRoot).find(".index-br-red-dots")[0];
  animate({
      el: c,
      scale: [.9, 1],
      opacity: [0, 1],
      duration: e + 1500,
      delay: 2e3,
      easing: "easeOutBack"
  });
  var d = $($('app-casamento')[0].shadowRoot).find(".index-br-green-outline")[0];
  animate({
      el: d,
      rotate: ["-3deg", "0deg"],
      opacity: [0, 1],
      duration: e + 3e3,
      delay: 250,
      easing: "easeOutBack"
  });
  var f = $($('app-casamento')[0].shadowRoot).find(".index-br-green-big")[0];
  animate({
      el: f,
      rotate: ["-3deg", "0deg"],
      opacity: [0, 1],
      duration: e + 3e3,
      delay: 650,
      easing: "easeOutBack"
  });
  var p = $($('app-casamento')[0].shadowRoot).find(".index-br-red-outline")[0];
  animate({
      el: p,
      rotate: ["7deg", "0deg"],
      opacity: [0, 1],
      duration: e + 2800,
      delay: 1050,
      easing: "easeOutBack"
  });
  var m = $($('app-casamento')[0].shadowRoot).find(".index-br-dark-outline")[0];
  animate({
      el: m,
      scaleY: [.9, 1],
      opacity: [0, 1],
      duration: e + 2800,
      delay: 350,
      easing: "easeOutBack"
  });
  var h = $($('app-casamento')[0].shadowRoot).find(".index-br-green-leaf")[0];
  animate({
      el: h,
      rotate: ["3deg", "0deg"],
      opacity: [0, 1],
      duration: e + 2800,
      delay: 250,
      easing: "easeOutBack"
  });
  var g = $($('app-casamento')[0].shadowRoot).find(".index-br-green-dots")[0];
  animate({
      el: g,
      scale: [.9, 1],
      opacity: [0, 1],
      duration: e + 2800,
      delay: 1650,
      easing: "easeOutBack"
  })
}
function startAnimation() {
  var e = $($('app-casamento')[0].shadowRoot).find(".save-bl-pink")[0];
  animate({
      el: e,
      rotate: ["-3deg", "0deg"],
      opacity: [0, 1],
      duration: 1500,
      delay: 250,
      easing: "easeOutBack"
  });
  var t = $($('app-casamento')[0].shadowRoot).find(".save-bl-green-small")[0];
  animate({
      el: t,
      rotate: ["-5deg", "0deg"],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutBack"
  });
  var n = $($('app-casamento')[0].shadowRoot).find(".save-bl-red-dots")[0];
  animate({
      el: n,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 1500,
      easing: "easeOutBack"
  });
  var o = $($('app-casamento')[0].shadowRoot).find(".save-bl-green-big")[0];
  animate({
      el: o,
      rotate: ["3deg", "0deg"],
      opacity: [0, 1],
      delay: 0,
      duration: 1500,
      easing: "easeOutBack"
  });
  var i = $($('app-casamento')[0].shadowRoot).find(".save-bl-red-leaf")[0];
  animate({
      el: i,
      rotate: ["10deg", "0deg"],
      opacity: [0, 1],
      delay: 300,
      duration: 2200,
      easing: "easeOutBack"
  });
  var r = $($('app-casamento')[0].shadowRoot).find(".save-bl-green-med")[0];
  animate({
      el: r,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 0,
      duration: 2200,
      easing: "easeOutBack"
  });
  var a = $($('app-casamento')[0].shadowRoot).find(".save-bl-green-leaf")[0];
  animate({
      el: a,
      rotate: ["10deg", "0deg"],
      opacity: [0, 1],
      delay: 300,
      duration: 1800,
      easing: "easeOutBack"
  });
  var s = $($('app-casamento')[0].shadowRoot).find(".save-bl-green-dots")[0];
  animate({
      el: s,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 1800,
      easing: "easeOutBack"
  });
  var l = $($('app-casamento')[0].shadowRoot).find(".save-br-yellow-star")[0];
  animate({
      el: l,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 1800,
      easing: "easeOutBack"
  });
  var u = $($('app-casamento')[0].shadowRoot).find(".save-br-green-light")[0];
  animate({
      el: u,
      rotate: ["10deg", "0deg"],
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 0,
      duration: 2200,
      easing: "easeOutBack"
  });
  var c = $($('app-casamento')[0].shadowRoot).find(".save-br-cactus")[0];
  animate({
      el: c,
      translateX: ["10px", "0px"],
      opacity: [0, 1],
      delay: 0,
      duration: 1700,
      easing: "easeOutBack"
  });
  var d = $($('app-casamento')[0].shadowRoot).find(".save-br-red")[0];
  animate({
      el: d,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 350,
      duration: 1900,
      easing: "easeOutBack"
  });
  var d = $($('app-casamento')[0].shadowRoot).find(".save-br-green-big")[0];
  animate({
      el: d,
      rotate: ["4deg", "0deg"],
      opacity: [0, 1],
      delay: 200,
      duration: 1900,
      easing: "easeOutBack"
  });
  var f = $($('app-casamento')[0].shadowRoot).find(".save-br-yellow")[0];
  animate({
      el: f,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 0,
      duration: 1600,
      easing: "easeOutBack"
  });
  var p = $($('app-casamento')[0].shadowRoot).find(".save-br-pink")[0];
  animate({
      el: p,
      rotate: ["-2deg", "0deg"],
      opacity: [0, 1],
      delay: 300,
      duration: 1800,
      easing: "easeOutBack"
  });
  var m = $($('app-casamento')[0].shadowRoot).find(".save-br-green-dots")[0];
  animate({
      el: m,
      scale: [.9, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 1700,
      easing: "easeOutBack"
  })
}
var animate = function() {
  function e(e) {
      return Array.isArray(e) ? e : Array.prototype.slice.call(e)
  }
  var t = function(e) {
      var t = e.length;
      return function n() {
          for (var o = arguments.length, i = Array(o), r = 0; r < o; r++)
              i[r] = arguments[r];
          return i.length < t ? function() {
              for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                  t[o] = arguments[o];
              return n.apply(void 0, i.concat(t))
          }
          : e.apply(void 0, i)
      }
  }
    , n = function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
      return function(e) {
          return t.reduce(function(e, t) {
              return t(e)
          }, e)
      }
  }
    , o = function(e) {
      return function() {
          return !e.apply(void 0, arguments)
      }
  }
    , i = {
      linear: function(e, t, n, o) {
          return t + e / o * n
      },
      easeInQuad: function(e, t, n, o) {
          return n * (e /= o) * e + t
      },
      easeInCubic: function(e, t, n, o) {
          return n * (e /= o) * e * e + t
      },
      easeInQuart: function(e, t, n, o) {
          return n * (e /= o) * e * e * e + t
      },
      easeInQuint: function(e, t, n, o) {
          return n * (e /= o) * e * e * e * e + t
      },
      easeInSine: function(e, t, n, o) {
          return -n * Math.cos(e / o * (Math.PI / 2)) + n + t
      },
      easeInExpo: function(e, t, n, o) {
          return 0 == e ? t : n * Math.pow(2, 10 * (e / o - 1)) + t
      },
      easeInCirc: function(e, t, n, o) {
          return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + t
      },
      easeInElastic: function(e, t, n, o) {
          var i = 4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
          if (0 == e)
              return t;
          if (1 == (e /= o))
              return t + n;
          var i = o * (1 - Math.min(i, 999) / 1e3)
            , r = n < Math.abs(n) ? i / 4 : i / (2 * Math.PI) * Math.asin(n / n);
          return -n * Math.pow(2, 10 * --e) * Math.sin(2 * (e * o - r) * Math.PI / i) + t
      },
      easeInBack: function(e, t, n, o) {
          return n * (e /= o) * e * (2.70158 * e - 1.70158) + t
      },
      easeOutQuad: function(e, t, n, o) {
          return -n * (e /= o) * (e - 2) + t
      },
      easeOutCubic: function(e, t, n, o) {
          return n * ((e = e / o - 1) * e * e + 1) + t
      },
      easeOutQuart: function(e, t, n, o) {
          return -n * ((e = e / o - 1) * e * e * e - 1) + t
      },
      easeOutQuint: function(e, t, n, o) {
          return n * ((e = e / o - 1) * e * e * e * e + 1) + t
      },
      easeOutSine: function(e, t, n, o) {
          return n * Math.sin(e / o * (Math.PI / 2)) + t
      },
      easeOutExpo: function(e, t, n, o) {
          return e == o ? t + n : n * (1 - Math.pow(2, -10 * e / o)) + t
      },
      easeOutCirc: function(e, t, n, o) {
          return n * Math.sqrt(1 - (e = e / o - 1) * e) + t
      },
      easeOutElastic: function(e, t, n, o) {
          var i = 4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
          return 0 == e ? t : 1 == (e /= o) ? t + n : (i = o * (1 - Math.min(i, 999) / 1e3),
          n * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - (n < Math.abs(n) ? i / 4 : i / (2 * Math.PI) * Math.asin(n / n))) * Math.PI / i) + n + t)
      },
      easeOutBack: function(e, t, n, o) {
          return n * ((e = e / o - 1) * e * (2.70158 * e + 1.70158) + 1) + t
      },
      easeOutBounce: function(e, t, n, o) {
          return (e /= o) < 1 / 2.75 ? 7.5625 * n * e * e + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
      },
      easeInOutQuad: function(e, t, n, o) {
          return 1 > (e /= o / 2) ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
      },
      easeInOutCubic: function(e, t, n, o) {
          return 1 > (e /= o / 2) ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
      },
      easeInOutQuart: function(e, t, n, o) {
          return 1 > (e /= o / 2) ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
      },
      easeInOutQuint: function(e, t, n, o) {
          return 1 > (e /= o / 2) ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
      },
      easeInOutSine: function(e, t, n, o) {
          return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + t
      },
      easeInOutExpo: function(e, t, n, o) {
          return 0 == e ? t : e == o ? t + n : 1 > (e /= o / 2) ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (2 - Math.pow(2, -10 * --e)) + t
      },
      easeInOutCirc: function(e, t, n, o) {
          return 1 > (e /= o / 2) ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
      },
      easeInOutElastic: function(e, t, n, o) {
          var i = 4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
          if (0 == e)
              return t;
          if (2 == (e /= o / 2))
              return t + n;
          var i = o * (1 - Math.min(i, 999) / 1e3) * 1.5
            , r = n < Math.abs(n) ? i / 4 : i / (2 * Math.PI) * Math.asin(n / n);
          return 1 > e ? -.5 * n * Math.pow(2, 10 * --e) * Math.sin(2 * (e * o - r) * Math.PI / i) + t : n * Math.pow(2, -10 * --e) * Math.sin(2 * (e * o - r) * Math.PI / i) * .5 + n + t
      },
      easeInOutBack: function(e, t, n, o) {
          var i = 1.70158;
          return 1 > (e /= o / 2) ? n / 2 * e * e * ((1 + (i *= 1.525)) * e - i) + t : n / 2 * ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) + t
      }
  }
    , r = function(e) {
      return e[0]
  }
    , a = function(e) {
      return e.reduce(function(e, t) {
          return e.concat(t)
      })
  }
    , s = function() {
      return Array.prototype.includes ? function(e, t) {
          return e.includes(t)
      }
      : function(e, t) {
          return e.some(function(e) {
              return e === t
          })
      }
  }()
    , l = function(e) {
      for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
      var r = a(n);
      return e.filter(function(e) {
          return o(s)(r, e)
      })
  }
    , u = function() {
      return Array.from ? function(e) {
          return Array.from(e.keys())
      }
      : function(e) {
          var t = [];
          return e.forEach(function(e, n) {
              return t.push(n)
          }),
          t
      }
  }()
    , c = function() {
      var e = function(e) {
          var t = new Map;
          return Object.keys(e).forEach(function(n) {
              return t.set(n, e[n])
          }),
          t
      };
      return function(t) {
          return t instanceof Map ? t : e(t)
      }
  }()
    , d = function() {
      try {
          if (!new Map((new Map).set(null, null)).size)
              throw Error()
      } catch (e) {
          return function(e) {
              var t = new Map;
              return e.forEach(function(e, n) {
                  return t.set(n, e)
              }),
              t
          }
      }
      return function(e) {
          return new Map(e)
      }
  }()
    , f = function(e) {
      return /^#/.test(e)
  }
    , p = function(e) {
      return /^rgb/.test(e)
  }
    , m = function() {
      var e = function(e) {
          return 7 > e.length ? e.split("").reduce(function(e, t) {
              return e + t + t
          }) : e
      }
        , t = function(e) {
          return e.match(/[\d\w]{2}/g).map(function(e) {
              return parseInt(e, 16)
          })
      };
      return function(o) {
          return p(o) ? o : (o = n(e, t)(o),
          "rgb(" + o[0] + ", " + o[1] + ", " + o[2] + ")")
      }
  }()
    , h = function(t) {
      return t = "string" == typeof t ? /^[\#.]?[\w-]+$/.test(t) ? "." == t[0] ? document.getElementsByClassName(t.slice(1)) : "#" == t[0] ? document.getElementById(t.slice(1)) : document.getElementsByTagName(t) : document.querySelectorAll(t) : t,
      Array.isArray(t) ? t : t.nodeType ? [t] : t instanceof NodeList || t instanceof HTMLCollection ? [].concat(e(t)) : t.get()
  }
    , g = new Map;
  "el delay begin complete loop direction".split(" ").forEach(function(e) {
      return g.set(e, null)
  }),
  g.set("duration", 1e3),
  g.set("easing", "easeOutElastic");
  var v = function() {
      var e = u(g).filter(function(e) {
          return g.get(e)
      })
        , t = function(t) {
          return e.every(function(e) {
              return t.has(e)
          })
      }
        , n = function(t) {
          var n = d(t);
          return e.forEach(function(e) {
              n.has(e) || n.set(e, g.get(e))
          }),
          n
      };
      return function(e) {
          return t(e) ? e : n(e)
      }
  }()
    , y = function() {
      var e = t(function(e, t) {
          return Array.isArray(e.get(t))
      })
        , n = function(t) {
          return O(t).every(e(t))
      }
        , i = function(t) {
          return O(t).filter(o(e(t)))
      };
      return function(e) {
          if (n(e))
              return e;
          var t = d(e);
          return i(t).forEach(function(e) {
              return t.set(e, [k.get(e), t.get(e)])
          }),
          t
      }
  }()
    , w = function() {
      var e = function(e) {
          return /\D$/.test(e)
      }
        , n = t(function(t, n) {
          return e(n) || /scale/.test(t) ? n : /rotate|skew/.test(t) ? n + "deg" : n + "px"
      })
        , o = function(t, n) {
          return n.every(function(n) {
              return t.get(n).every(e)
          })
      };
      return function(e) {
          var t = O(e).filter(S);
          if (o(e, t))
              return e;
          var i = d(e);
          return t.forEach(function(t) {
              return i.set(t, e.get(t).map(n(t)))
          }),
          i
      }
  }()
    , x = function() {
      var e = t(function(e, t) {
          return e.get(t).some(f)
      })
        , n = function(t) {
          return !T(t).some(e(t))
      }
        , o = function(t) {
          return T(t).filter(e(t))
      };
      return function(e) {
          if (n(e))
              return e;
          var t = d(e);
          return o(e).forEach(function(e) {
              return t.set(e, t.get(e).map(m))
          }),
          t
      }
  }()
    , b = function(e) {
      var t = d(e);
      return C(e).forEach(function(e) {
          return t.set(e, t.get(e).slice().reverse())
      }),
      t
  }
    , I = n(c, v, y, w, x, function(e) {
      var t = d(e);
      return t.set("el", h(e.get("el"))),
      t
  }, function(e) {
      return "reverse" == e.get("direction") ? b(e) : e
  })
    , C = function() {
      var e = u(g)
        , t = function(t) {
          return o(s)(e, t)
      };
      return function(e) {
          return u(e).filter(t)
      }
  }()
    , E = function() {
      var e = n(r, p)
        , o = t(function(t, n) {
          var o = t.get(n).map(F)
            , i = o[0]
            , r = o[1]
            , o = new Map;
          return o.set("prop", n),
          o.set("from", i),
          o.set("to", r),
          o.set("isTransformFunction", S(n)),
          o.set("isColor", e(t.get(n))),
          /\d$/.test(t.get("easing")) ? (i = t.get("easing").split(" "),
          r = i[1],
          o.set("easing", i[0]),
          o.set("frequency", r)) : o.set("easing", t.get("easing")),
          o
      });
      return function(e) {
          return C(e).map(o(e))
      }
  }()
    , O = function() {
      var e = function(e) {
          return s(M, e)
      };
      return function(t) {
          return u(t).filter(e)
      }
  }()
    , T = function(e) {
      return l(C(e), O(e))
  }
    , M = "opacity translateX translateY scale rotate scaleX scaleY rotateX rotateY perspective skewX skewY translateZ rotateZ scaleZ".split(" ")
    , k = new Map;
  M.forEach(function(e) {
      return k.set(e, s(["opacity", "scale", "scaleX", "scaleY"], e) ? 1 : 0)
  });
  var S = function() {
      var e = M.filter(function(e) {
          return "opacity" != e
      });
      return function(t) {
          return s(e, t)
      }
  }()
    , A = function(e) {
      var t = O(e);
      if (t.length) {
          var n = [];
          t.some(S) && n.push("transform"),
          s(t, "opacity") && n.push("opacity");
          var o = n.join();
          e.get("el").forEach(function(e) {
              e.style.willChange || (e.style.willChange = o)
          })
      }
  }
    , D = function(e, t) {
      return t.reduce(function(t, n, o) {
          return t + e[o - 1] + n
      })
  }
    , F = function() {
      var e = /-?\d*\.?\d+/g;
      return function(t) {
          var n = new Map;
          return n.set("digits", ("string" == typeof t ? t : String(t)).match(e).map(Number)),
          n.set("others", ("string" == typeof t ? t : String(t)).split(e)),
          n
      }
  }()
    , L = t(function(e, t, n) {
      var o = n.get("to").get("digits").map(function(o, r) {
          var a = n.get("from").get("digits")[r];
          if (a == o)
              return a;
          var s = o - a
            , a = i[n.get("easing")](t, a, s, e.get("duration"), n.get("frequency"));
          return n.get("isColor") ? Math.round(a) : a
      });
      return D(o, n.get("to").get("others"))
  })
    , _ = t(function(e, t) {
      var n = e.get(t.get("prop"));
      return r(n.slice(-1))
  })
    , R = function() {
      var e = void 0;
      return t(function(t, n, o) {
          var i = void 0;
          t.forEach(function(e, t) {
              e.get("isTransformFunction") ? (i || (i = []),
              i.push(e.get("prop") + "(" + n[t] + ")")) : "opacity" == e.get("prop") ? o.style.opacity = n[t] : o.setAttribute(e.get("prop"), n[t])
          }),
          i && (e || (e = "transform"in document.body.style ? "transform" : "-webkit-transform"),
          o.style[e] = i.join(" "))
      })
  }()
    , P = function() {
      var e = function(e, t) {
          t.get("begin") && t.get("begin")(t.get("el")),
          requestAnimationFrame(e)
      };
      return function(t, n) {
          return n.get("delay") ? setTimeout(function() {
              return e(t, n)
          }, n.get("delay")) : e(t, n)
      }
  }()
    , B = function(e) {
      return Z(function() {
          if ("alternate" == e.get("direction"))
              return b(e);
          if ("reverse" == e.get("direction")) {
              var t = d(e);
              return t["delete"]("direction"),
              t
          }
          return e
      }())
  }
    , z = new Map
    , N = function() {
      var e = 0;
      return function(t) {
          var n = e++
            , o = d(z);
          return o.set(n, t),
          z = o,
          n
      }
  }()
    , Z = function(e) {
      var t = I(e)
        , n = E(t)
        , o = N(t.get("el"))
        , i = new Map;
      A(t),
      P(function e(r) {
          if (z.has(o)) {
              i.has("start") || i.set("start", r),
              i.set("elapsed", r - i.get("start")),
              r = i.get("elapsed") < t.get("duration");
              var a = n.map(r ? L(t, i.get("elapsed")) : _(t));
              z.get(o).forEach(R(n, a)),
              r ? requestAnimationFrame(e) : (r = d(z),
              r["delete"](o),
              z = r,
              t.get("complete") && t.get("complete")(t.get("el")),
              t.get("loop") && B(t))
          }
      }, t)
  };
  return Z.stop = function(e) {
      var t = h(e)
        , n = d(z);
      n.forEach(function(e, o) {
          var i = l(e, t);
          i.length ? n.set(o, i) : n["delete"](o)
      }),
      z = n
  }
  ,
  Z
}();
"undefined" != typeof module && module.exports && (module.exports = animate);
var yall = function() {
  "use strict";
  function e() {
      return (e = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
      }
      ).apply(this, arguments)
  }
  return function(t) {
      var n = {
          intersectionObserverSupport: "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype,
          mutationObserverSupport: "MutationObserver"in window,
          idleCallbackSupport: "requestIdleCallback"in window,
          eventsToBind: [[document, "scroll"], [document, "touchmove"], [window, "resize"], [window, "orientationchange"]]
      }
        , o = e({
          lazyClass: "lazy",
          lazyBackgroundClass: "lazy-bg",
          lazyBackgroundLoaded: "lazy-bg-loaded",
          throttleTime: 200,
          idlyLoad: !1,
          idleLoadTimeout: 100,
          threshold: 200,
          observeChanges: !1,
          observeRootSelector: "body",
          mutationObserverOptions: {
              childList: !0,
              subtree: !0
          }
      }, t)
        , i = "img." + o.lazyClass + ",video." + o.lazyClass + ",iframe." + o.lazyClass + ",." + o.lazyBackgroundClass
        , r = {
          timeout: o.idleLoadTimeout
      }
        , a = function(e) {
          return [].slice.call(e)
      }
        , s = function(e) {
          if ("IMG" === e.tagName) {
              var t = e.parentNode;
              "PICTURE" === t.tagName && a(t.querySelectorAll("source")).forEach(function(e) {
                  return l(e)
              }),
              l(e)
          }
          "VIDEO" === e.tagName && (a(e.querySelectorAll("source")).forEach(function(e) {
              return l(e)
          }),
          l(e),
          !0 === e.autoplay && e.load()),
          "IFRAME" === e.tagName && l(e),
          e.classList.contains(o.lazyBackgroundClass) && (e.classList.remove(o.lazyBackgroundClass),
          e.classList.add(o.lazyBackgroundLoaded))
      }
        , l = function(e) {
          null !== e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")),
          null !== e.getAttribute("data-src") && e.setAttribute("src", e.getAttribute("data-src")),
          null !== e.getAttribute("data-poster") && e.setAttribute("poster", e.getAttribute("data-poster"))
      }
        , u = function e() {
          var t = !1;
          !1 === t && c.length > 0 && (t = !0,
          setTimeout(function() {
              c.forEach(function(e) {
                  e.getBoundingClientRect().top <= window.innerHeight + o.threshold && e.getBoundingClientRect().bottom >= -o.threshold && "none" !== getComputedStyle(e).display && (!0 === o.idlyLoad && !0 === n.idleCallbackSupport ? requestIdleCallback(function() {
                      s(e)
                  }, r) : s(e),
                  e.classList.remove(o.lazyClass),
                  c = c.filter(function(t) {
                      return t !== e
                  }))
              }),
              t = !1,
              0 === c.length && !1 === o.observeChanges && n.eventsToBind.forEach(function(t) {
                  return t[0].removeEventListener(t[1], e)
              })
          }, o.throttleTime))
      }
        , c = a(document.querySelectorAll(i));
      if (!0 === n.intersectionObserverSupport) {
          var d = new IntersectionObserver(function(e, t) {
              e.forEach(function(e) {
                  if (!0 === e.isIntersecting || e.intersectionRatio > 0) {
                      var i = e.target;
                      !0 === o.idlyLoad && !0 === n.idleCallbackSupport ? requestIdleCallback(function() {
                          return s(i)
                      }, r) : s(i),
                      i.classList.remove(o.lazyClass),
                      t.unobserve(i),
                      c = c.filter(function(e) {
                          return e !== i
                      })
                  }
              })
          }
          ,{
              rootMargin: o.threshold + "px 0%"
          });
          c.forEach(function(e) {
              return d.observe(e)
          })
      } else
          n.eventsToBind.forEach(function(e) {
              return e[0].addEventListener(e[1], u)
          }),
          u();
      !0 === n.mutationObserverSupport && !0 === o.observeChanges && new MutationObserver(function(e) {
          return e.forEach(function() {
              a(document.querySelectorAll(i)).forEach(function(e) {
                  -1 === c.indexOf(e) && (c.push(e),
                  !0 === n.intersectionObserverSupport ? d.observe(e) : u())
              })
          })
      }
      ).observe(document.querySelector(o.observeRootSelector), o.mutationObserverOptions)
  }
}();
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
  "use strict";
  return function(e, t) {
      var n, o, i, r, a, s, l, u, c, d, f, p, m, h, g, v, y, w, x, b = this, I = !1, C = !0, E = !0, O = {
          barsSize: {
              top: 44,
              bottom: "auto"
          },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function(e, t) {
              return e.title ? (t.children[0].innerHTML = e.title,
              !0) : (t.children[0].innerHTML = "",
              !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [{
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
          }, {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
          }, {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
          }, {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0
          }],
          getImageURLForShare: function() {
              return e.currItem.src || ""
          },
          getPageURLForShare: function() {
              return window.location.href
          },
          getTextForShare: function() {
              return e.currItem.title || ""
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
      }, T = function(e) {
          if (v)
              return !0;
          e = e || window.event,
          g.timeToIdle && g.mouseUsed && !c && P();
          for (var n, o, i = e.target || e.srcElement, r = i.getAttribute("class") || "", a = 0; a < K.length; a++)
              n = K[a],
              n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(),
              o = !0);
          if (o) {
              e.stopPropagation && e.stopPropagation(),
              v = !0;
              var s = t.features.isOldAndroid ? 600 : 30;
              y = setTimeout(function() {
                  v = !1
              }, s)
          }
      }, M = function() {
          return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
      }, k = function(e, n, o) {
          t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
      }, S = function() {
          var e = 1 === g.getNumItemsFn();
          e !== h && (k(o, "ui--one-slide", e),
          h = e)
      }, A = function() {
          k(l, "share-modal--hidden", E)
      }, D = function() {
          return E = !E,
          E ? (t.removeClass(l, "pswp__share-modal--fade-in"),
          setTimeout(function() {
              E && A()
          }, 300)) : (A(),
          setTimeout(function() {
              E || t.addClass(l, "pswp__share-modal--fade-in")
          }, 30)),
          E || L(),
          !1
      }, F = function(t) {
          t = t || window.event;
          var n = t.target || t.srcElement;
          return e.shout("shareLinkClick", t, n),
          !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
          E || D(),
          1))
      }, L = function() {
          for (var e, t, n, o, i, r = "", a = 0; a < g.shareButtons.length; a++)
              e = g.shareButtons[a],
              n = g.getImageURLForShare(e),
              o = g.getPageURLForShare(e),
              i = g.getTextForShare(e),
              t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)),
              r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
              g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
          l.children[0].innerHTML = r,
          l.children[0].onclick = F
      }, _ = function(e) {
          for (var n = 0; n < g.closeElClasses.length; n++)
              if (t.hasClass(e, "pswp__" + g.closeElClasses[n]))
                  return !0
      }, R = 0, P = function() {
          clearTimeout(x),
          R = 0,
          c && b.setIdle(!1)
      }, B = function(e) {
          e = e || window.event;
          var t = e.relatedTarget || e.toElement;
          t && "HTML" !== t.nodeName || (clearTimeout(x),
          x = setTimeout(function() {
              b.setIdle(!0)
          }, g.timeToIdleOutside))
      }, z = function() {
          g.fullscreenEl && !t.features.isOldAndroid && (n || (n = b.getFullscreenAPI()),
          n ? (t.bind(document, n.eventK, b.updateFullscreen),
          b.updateFullscreen(),
          t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
      }, N = function() {
          g.preloaderEl && (Z(!0),
          d("beforeChange", function() {
              clearTimeout(m),
              m = setTimeout(function() {
                  e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && Z(!1) : Z(!0)
              }, g.loadingIndicatorDelay)
          }),
          d("imageLoadComplete", function(t, n) {
              e.currItem === n && Z(!0)
          }))
      }, Z = function(e) {
          p !== e && (k(f, "preloader--active", !e),
          p = e)
      }, $ = function(e) {
          var n = e.vGap;
          if (M()) {
              var a = g.barsSize;
              if (g.captionEl && "auto" === a.bottom)
                  if (r || (r = t.createEl("pswp__caption pswp__caption--fake"),
                  r.appendChild(t.createEl("pswp__caption__center")),
                  o.insertBefore(r, i),
                  t.addClass(o, "pswp__ui--fit")),
                  g.addCaptionHTMLFn(e, r, !0)) {
                      var s = r.clientHeight;
                      n.bottom = parseInt(s, 10) || 44
                  } else
                      n.bottom = a.top;
              else
                  n.bottom = "auto" === a.bottom ? 0 : a.bottom;
              n.top = a.top
          } else
              n.top = n.bottom = 0
      }, q = function() {
          g.timeToIdle && d("mouseUsed", function() {
              t.bind(document, "mousemove", P),
              t.bind(document, "mouseout", B),
              w = setInterval(function() {
                  2 === ++R && b.setIdle(!0)
              }, g.timeToIdle / 2)
          })
      }, U = function() {
          d("onVerticalDrag", function(e) {
              C && e < .95 ? b.hideControls() : !C && e >= .95 && b.showControls()
          });
          var e;
          d("onPinchClose", function(t) {
              C && t < .9 ? (b.hideControls(),
              e = !0) : e && !C && t > .9 && b.showControls()
          }),
          d("zoomGestureEnded", function() {
              (e = !1) && !C && b.showControls()
          })
      }, K = [{
          name: "caption",
          option: "captionEl",
          onInit: function(e) {
              i = e
          }
      }, {
          name: "share-modal",
          option: "shareEl",
          onInit: function(e) {
              l = e
          },
          onTap: function() {
              D()
          }
      }, {
          name: "button--share",
          option: "shareEl",
          onInit: function(e) {
              s = e
          },
          onTap: function() {
              D()
          }
      }, {
          name: "button--zoom",
          option: "zoomEl",
          onTap: e.toggleDesktopZoom
      }, {
          name: "counter",
          option: "counterEl",
          onInit: function(e) {
              a = e
          }
      }, {
          name: "button--close",
          option: "closeEl",
          onTap: e.close
      }, {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: e.prev
      }, {
          name: "button--arrow--right",
          option: "arrowEl",
          onTap: e.next
      }, {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function() {
              n.isFullscreen() ? n.exit() : n.enter()
          }
      }, {
          name: "preloader",
          option: "preloaderEl",
          onInit: function(e) {
              f = e
          }
      }], H = function() {
          var e, n, i, r = function(o) {
              if (o)
                  for (var r = o.length, a = 0; a < r; a++) {
                      e = o[a],
                      n = e.className;
                      for (var s = 0; s < K.length; s++)
                          i = K[s],
                          n.indexOf("pswp__" + i.name) > -1 && (g[i.option] ? (t.removeClass(e, "pswp__element--disabled"),
                          i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                  }
          };
          r(o.children);
          var a = t.getChildByClass(o, "pswp__top-bar");
          a && r(a.children)
      };
      b.init = function() {
          t.extend(e.options, O, !0),
          g = e.options,
          o = t.getChildByClass(e.scrollWrap, "pswp__ui"),
          d = e.listen,
          U(),
          d("beforeChange", b.update),
          d("doubleTap", function(t) {
              var n = e.currItem.initialZoomLevel;
              e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
          }),
          d("preventDragEvent", function(e, t, n) {
              var o = e.target || e.srcElement;
              o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
          }),
          d("bindEvents", function() {
              t.bind(o, "pswpTap click", T),
              t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap),
              e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", b.onMouseOver)
          }),
          d("unbindEvents", function() {
              E || D(),
              w && clearInterval(w),
              t.unbind(document, "mouseout", B),
              t.unbind(document, "mousemove", P),
              t.unbind(o, "pswpTap click", T),
              t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap),
              t.unbind(e.scrollWrap, "mouseover", b.onMouseOver),
              n && (t.unbind(document, n.eventK, b.updateFullscreen),
              n.isFullscreen() && (g.hideAnimationDuration = 0,
              n.exit()),
              n = null)
          }),
          d("destroy", function() {
              g.captionEl && (r && o.removeChild(r),
              t.removeClass(i, "pswp__caption--empty")),
              l && (l.children[0].onclick = null),
              t.removeClass(o, "pswp__ui--over-close"),
              t.addClass(o, "pswp__ui--hidden"),
              b.setIdle(!1)
          }),
          g.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"),
          d("initialZoomIn", function() {
              g.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
          }),
          d("initialZoomOut", function() {
              t.addClass(o, "pswp__ui--hidden")
          }),
          d("parseVerticalMargin", $),
          H(),
          g.shareEl && s && l && (E = !0),
          S(),
          q(),
          z(),
          N()
      }
      ,
      b.setIdle = function(e) {
          c = e,
          k(o, "ui--idle", e)
      }
      ,
      b.update = function() {
          C && e.currItem ? (b.updateIndexIndicator(),
          g.captionEl && (g.addCaptionHTMLFn(e.currItem, i),
          k(i, "caption--empty", !e.currItem.title)),
          I = !0) : I = !1,
          E || D(),
          S()
      }
      ,
      b.updateFullscreen = function(o) {
          o && setTimeout(function() {
              e.setScrollOffset(0, t.getScrollY())
          }, 50),
          t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
      }
      ,
      b.updateIndexIndicator = function() {
          g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
      }
      ,
      b.onGlobalTap = function(n) {
          n = n || window.event;
          var o = n.target || n.srcElement;
          if (!v)
              if (n.detail && "mouse" === n.detail.pointerType) {
                  if (_(o))
                      return void e.close();
                  t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
              } else if (g.tapToToggleControls && (C ? b.hideControls() : b.showControls()),
              g.tapToClose && (t.hasClass(o, "pswp__img") || _(o)))
                  return void e.close()
      }
      ,
      b.onMouseOver = function(e) {
          e = e || window.event;
          var t = e.target || e.srcElement;
          k(o, "ui--over-close", _(t))
      }
      ,
      b.hideControls = function() {
          t.addClass(o, "pswp__ui--hidden"),
          C = !1
      }
      ,
      b.showControls = function() {
          C = !0,
          I || b.update(),
          t.removeClass(o, "pswp__ui--hidden")
      }
      ,
      b.supportsFullscreen = function() {
          var e = document;
          return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
      }
      ,
      b.getFullscreenAPI = function() {
          var t, n = document.documentElement, o = "fullscreenchange";
          return n.requestFullscreen ? t = {
              enterK: "requestFullscreen",
              exitK: "exitFullscreen",
              elementK: "fullscreenElement",
              eventK: o
          } : n.mozRequestFullScreen ? t = {
              enterK: "mozRequestFullScreen",
              exitK: "mozCancelFullScreen",
              elementK: "mozFullScreenElement",
              eventK: "moz" + o
          } : n.webkitRequestFullscreen ? t = {
              enterK: "webkitRequestFullscreen",
              exitK: "webkitExitFullscreen",
              elementK: "webkitFullscreenElement",
              eventK: "webkit" + o
          } : n.msRequestFullscreen && (t = {
              enterK: "msRequestFullscreen",
              exitK: "msExitFullscreen",
              elementK: "msFullscreenElement",
              eventK: "MSFullscreenChange"
          }),
          t && (t.enter = function() {
              return u = g.closeOnScroll,
              g.closeOnScroll = !1,
              "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }
          ,
          t.exit = function() {
              return g.closeOnScroll = u,
              document[this.exitK]()
          }
          ,
          t.isFullscreen = function() {
              return document[this.elementK]
          }
          ),
          t
      }
  }
}),
function(e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
  "use strict";
  return function(e, t, n, o) {
      var i = {
          features: null,
          bind: function(e, t, n, o) {
              var i = (o ? "remove" : "add") + "EventListener";
              t = t.split(" ");
              for (var r = 0; r < t.length; r++)
                  t[r] && e[i](t[r], n, !1)
          },
          isArray: function(e) {
              return e instanceof Array
          },
          createEl: function(e, t) {
              var n = document.createElement(t || "div");
              return e && (n.className = e),
              n
          },
          getScrollY: function() {
              var e = window.pageYOffset;
              return void 0 !== e ? e : document.documentElement.scrollTop
          },
          unbind: function(e, t, n) {
              i.bind(e, t, n, !0)
          },
          removeClass: function(e, t) {
              var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
              e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          },
          addClass: function(e, t) {
              i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
          },
          hasClass: function(e, t) {
              return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          },
          getChildByClass: function(e, t) {
              for (var n = e.firstChild; n; ) {
                  if (i.hasClass(n, t))
                      return n;
                  n = n.nextSibling
              }
          },
          arraySearch: function(e, t, n) {
              for (var o = e.length; o--; )
                  if (e[o][n] === t)
                      return o;
              return -1
          },
          extend: function(e, t, n) {
              for (var o in t)
                  if (t.hasOwnProperty(o)) {
                      if (n && e.hasOwnProperty(o))
                          continue;
                      e[o] = t[o]
                  }
          },
          easing: {
              sine: {
                  out: function(e) {
                      return Math.sin(e * (Math.PI / 2))
                  },
                  inOut: function(e) {
                      return -(Math.cos(Math.PI * e) - 1) / 2
                  }
              },
              cubic: {
                  out: function(e) {
                      return --e * e * e + 1
                  }
              }
          },
          detectFeatures: function() {
              if (i.features)
                  return i.features;
              var e = i.createEl()
                , t = e.style
                , n = ""
                , o = {};
              if (o.oldIE = document.all && !document.addEventListener,
              o.touch = "ontouchstart"in window,
              window.requestAnimationFrame && (o.raf = window.requestAnimationFrame,
              o.caf = window.cancelAnimationFrame),
              o.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled,
              !o.pointerEvent) {
                  var r = navigator.userAgent;
                  if (/iP(hone|od)/.test(navigator.platform)) {
                      var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                      a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (o.isOldIOSPhone = !0)
                  }
                  var s = r.match(/Android\s([0-9\.]*)/)
                    , l = s ? s[1] : 0;
                  l = parseFloat(l),
                  l >= 1 && (l < 4.4 && (o.isOldAndroid = !0),
                  o.androidVersion = l),
                  o.isMobileOpera = /opera mini|opera mobi/i.test(r)
              }
              for (var u, c, d = ["transform", "perspective", "animationName"], f = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
                  n = f[p];
                  for (var m = 0; m < 3; m++)
                      u = d[m],
                      c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u),
                      !o[u] && c in t && (o[u] = c);
                  n && !o.raf && (n = n.toLowerCase(),
                  o.raf = window[n + "RequestAnimationFrame"],
                  o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
              }
              if (!o.raf) {
                  var h = 0;
                  o.raf = function(e) {
                      var t = (new Date).getTime()
                        , n = Math.max(0, 16 - (t - h))
                        , o = window.setTimeout(function() {
                          e(t + n)
                      }, n);
                      return h = t + n,
                      o
                  }
                  ,
                  o.caf = function(e) {
                      clearTimeout(e)
                  }
              }
              return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
              i.features = o,
              o
          }
      };
      i.detectFeatures(),
      i.features.oldIE && (i.bind = function(e, t, n, o) {
          t = t.split(" ");
          for (var i, r = (o ? "detach" : "attach") + "Event", a = function() {
              n.handleEvent.call(n)
          }, s = 0; s < t.length; s++)
              if (i = t[s])
                  if ("object" == typeof n && n.handleEvent) {
                      if (o) {
                          if (!n["oldIE" + i])
                              return !1
                      } else
                          n["oldIE" + i] = a;
                      e[r]("on" + i, n["oldIE" + i])
                  } else
                      e[r]("on" + i, n)
      }
      );
      var r = this
        , a = 25
        , s = 3
        , l = {
          allowPanToNext: !0,
          spacing: .12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: .75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: .35,
          panEndFriction: .35,
          isClickableElement: function(e) {
              return "A" === e.tagName
          },
          getDoubleTapZoom: function(e, t) {
              return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
      };
      i.extend(l, o);
      var u, c, d, f, p, m, h, g, v, y, w, x, b, I, C, E, O, T, M, k, S, A, D, F, L, _, R, P, B, z, N, Z, $, q, U, K, H, Y, W, G, j, X, V, Q, J, ee, te, ne, oe, ie, re, ae, se, le, ue, ce, de, fe = function() {
          return {
              x: 0,
              y: 0
          }
      }, pe = fe(), me = fe(), he = fe(), ge = {}, ve = 0, ye = {}, we = fe(), xe = 0, be = !0, Ie = [], Ce = {}, Ee = !1, Oe = function(e, t) {
          i.extend(r, t.publicMethods),
          Ie.push(e)
      }, Te = function(e) {
          var t = en();
          return e > t - 1 ? e - t : e < 0 ? t + e : e
      }, Me = {}, ke = function(e, t) {
          return Me[e] || (Me[e] = []),
          Me[e].push(t)
      }, Se = function(e) {
          var t = Me[e];
          if (t) {
              var n = Array.prototype.slice.call(arguments);
              n.shift();
              for (var o = 0; o < t.length; o++)
                  t[o].apply(r, n)
          }
      }, Ae = function() {
          return (new Date).getTime()
      }, De = function(e) {
          ue = e,
          r.bg.style.opacity = e * l.bgOpacity
      }, Fe = function(e, t, n, o, i) {
          (!Ee || i && i !== r.currItem) && (o /= i ? i.fitRatio : r.currItem.fitRatio),
          e[A] = x + t + "px, " + n + "px" + b + " scale(" + o + ")"
      }, Le = function(e) {
          ie && (e && (y > r.currItem.fitRatio ? Ee || (pn(r.currItem, !1, !0),
          Ee = !0) : Ee && (pn(r.currItem),
          Ee = !1)),
          Fe(ie, he.x, he.y, y))
      }, _e = function(e) {
          e.container && Fe(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
      }, Re = function(e, t) {
          t[A] = x + e + "px, 0px" + b
      }, Pe = function(e, t) {
          if (!l.loop && t) {
              var n = f + (we.x * ve - e) / we.x
                , o = Math.round(e - wt.x);
              (n < 0 && o > 0 || n >= en() - 1 && o < 0) && (e = wt.x + o * l.mainScrollEndFriction)
          }
          wt.x = e,
          Re(e, p)
      }, Be = function(e, t) {
          var n = xt[e] - ye[e];
          return me[e] + pe[e] + n - n * (t / w)
      }, ze = function(e, t) {
          e.x = t.x,
          e.y = t.y,
          t.id && (e.id = t.id)
      }, Ne = function(e) {
          e.x = Math.round(e.x),
          e.y = Math.round(e.y)
      }, Ze = null, $e = function() {
          Ze && (i.unbind(document, "mousemove", $e),
          i.addClass(e, "pswp--has_mouse"),
          l.mouseUsed = !0,
          Se("mouseUsed")),
          Ze = setTimeout(function() {
              Ze = null
          }, 100)
      }, qe = function() {
          i.bind(document, "keydown", r),
          N.transform && i.bind(r.scrollWrap, "click", r),
          l.mouseUsed || i.bind(document, "mousemove", $e),
          i.bind(window, "resize scroll orientationchange", r),
          Se("bindEvents")
      }, Ue = function() {
          i.unbind(window, "resize scroll orientationchange", r),
          i.unbind(window, "scroll", v.scroll),
          i.unbind(document, "keydown", r),
          i.unbind(document, "mousemove", $e),
          N.transform && i.unbind(r.scrollWrap, "click", r),
          W && i.unbind(window, h, r),
          clearTimeout(Z),
          Se("unbindEvents")
      }, Ke = function(e, t) {
          var n = un(r.currItem, ge, e);
          return t && (oe = n),
          n
      }, He = function(e) {
          return e || (e = r.currItem),
          e.initialZoomLevel
      }, Ye = function(e) {
          return e || (e = r.currItem),
          e.w > 0 ? l.maxSpreadZoom : 1
      }, We = function(e, t, n, o) {
          return o === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e],
          !0) : (n[e] = Be(e, o),
          n[e] > t.min[e] ? (n[e] = t.min[e],
          !0) : n[e] < t.max[e] && (n[e] = t.max[e],
          !0))
      }, Ge = function() {
          if (A) {
              var t = N.perspective && !F;
              return x = "translate" + (t ? "3d(" : "("),
              void (b = N.perspective ? ", 0px)" : ")")
          }
          A = "left",
          i.addClass(e, "pswp--ie"),
          Re = function(e, t) {
              t.left = e + "px"
          }
          ,
          _e = function(e) {
              var t = e.fitRatio > 1 ? 1 : e.fitRatio
                , n = e.container.style
                , o = t * e.w
                , i = t * e.h;
              n.width = o + "px",
              n.height = i + "px",
              n.left = e.initialPosition.x + "px",
              n.top = e.initialPosition.y + "px"
          }
          ,
          Le = function() {
              if (ie) {
                  var e = ie
                    , t = r.currItem
                    , n = t.fitRatio > 1 ? 1 : t.fitRatio
                    , o = n * t.w
                    , i = n * t.h;
                  e.width = o + "px",
                  e.height = i + "px",
                  e.left = he.x + "px",
                  e.top = he.y + "px"
              }
          }
      }, je = function(e) {
          var t = "";
          l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
          t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
          r[t]()))
      }, Xe = function(e) {
          e && (X || j || re || H) && (e.preventDefault(),
          e.stopPropagation())
      }, Ve = function() {
          r.setScrollOffset(0, i.getScrollY())
      }, Qe = {}, Je = 0, et = function(e) {
          Qe[e] && (Qe[e].raf && _(Qe[e].raf),
          Je--,
          delete Qe[e])
      }, tt = function(e) {
          Qe[e] && et(e),
          Qe[e] || (Je++,
          Qe[e] = {})
      }, nt = function() {
          for (var e in Qe)
              Qe.hasOwnProperty(e) && et(e)
      }, ot = function(e, t, n, o, i, r, a) {
          var s, l = Ae();
          tt(e);
          var u = function() {
              if (Qe[e]) {
                  if ((s = Ae() - l) >= o)
                      return et(e),
                      r(n),
                      void (a && a());
                  r((n - t) * i(s / o) + t),
                  Qe[e].raf = L(u)
              }
          };
          u()
      }, it = {
          shout: Se,
          listen: ke,
          viewportSize: ge,
          options: l,
          isMainScrollAnimating: function() {
              return re
          },
          getZoomLevel: function() {
              return y
          },
          getCurrentIndex: function() {
              return f
          },
          isDragging: function() {
              return W
          },
          isZooming: function() {
              return ee
          },
          setScrollOffset: function(e, t) {
              ye.x = e,
              z = ye.y = t,
              Se("updateScrollOffset", ye)
          },
          applyZoomPan: function(e, t, n, o) {
              he.x = t,
              he.y = n,
              y = e,
              Le(o)
          },
          init: function() {
              if (!u && !c) {
                  var n;
                  r.framework = i,
                  r.template = e,
                  r.bg = i.getChildByClass(e, "pswp__bg"),
                  R = e.className,
                  u = !0,
                  N = i.detectFeatures(),
                  L = N.raf,
                  _ = N.caf,
                  A = N.transform,
                  B = N.oldIE,
                  r.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"),
                  r.container = i.getChildByClass(r.scrollWrap, "pswp__container"),
                  p = r.container.style,
                  r.itemHolders = E = [{
                      el: r.container.children[0],
                      wrap: 0,
                      index: -1
                  }, {
                      el: r.container.children[1],
                      wrap: 0,
                      index: -1
                  }, {
                      el: r.container.children[2],
                      wrap: 0,
                      index: -1
                  }],
                  E[0].el.style.display = E[2].el.style.display = "none",
                  Ge(),
                  v = {
                      resize: r.updateSize,
                      orientationchange: function() {
                          clearTimeout(Z),
                          Z = setTimeout(function() {
                              ge.x !== r.scrollWrap.clientWidth && r.updateSize()
                          }, 500)
                      },
                      scroll: Ve,
                      keydown: je,
                      click: Xe
                  };
                  var o = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                  for (N.animationName && N.transform && !o || (l.showAnimationDuration = l.hideAnimationDuration = 0),
                  n = 0; n < Ie.length; n++)
                      r["init" + Ie[n]]();
                  if (t) {
                      (r.ui = new t(r,i)).init()
                  }
                  Se("firstUpdate"),
                  f = f || l.index || 0,
                  (isNaN(f) || f < 0 || f >= en()) && (f = 0),
                  r.currItem = Jt(f),
                  (N.isOldIOSPhone || N.isOldAndroid) && (be = !1),
                  e.setAttribute("aria-hidden", "false"),
                  l.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute",
                  e.style.top = i.getScrollY() + "px")),
                  void 0 === z && (Se("initialLayout"),
                  z = P = i.getScrollY());
                  var a = "pswp--open ";
                  for (l.mainClass && (a += l.mainClass + " "),
                  l.showHideOpacity && (a += "pswp--animate_opacity "),
                  a += F ? "pswp--touch" : "pswp--notouch",
                  a += N.animationName ? " pswp--css_animation" : "",
                  a += N.svg ? " pswp--svg" : "",
                  i.addClass(e, a),
                  r.updateSize(),
                  m = -1,
                  xe = null,
                  n = 0; n < s; n++)
                      Re((n + m) * we.x, E[n].el.style);
                  B || i.bind(r.scrollWrap, g, r),
                  ke("initialZoomInEnd", function() {
                      r.setContent(E[0], f - 1),
                      r.setContent(E[2], f + 1),
                      E[0].el.style.display = E[2].el.style.display = "block",
                      l.focus && e.focus(),
                      qe()
                  }),
                  r.setContent(E[1], f),
                  r.updateCurrItem(),
                  Se("afterInit"),
                  be || (I = setInterval(function() {
                      Je || W || ee || y !== r.currItem.initialZoomLevel || r.updateSize()
                  }, 1e3)),
                  i.addClass(e, "pswp--visible")
              }
          },
          close: function() {
              u && (u = !1,
              c = !0,
              Se("close"),
              Ue(),
              nn(r.currItem, null, !0, r.destroy))
          },
          destroy: function() {
              Se("destroy"),
              jt && clearTimeout(jt),
              e.setAttribute("aria-hidden", "true"),
              e.className = R,
              I && clearInterval(I),
              i.unbind(r.scrollWrap, g, r),
              i.unbind(window, "scroll", r),
              Ot(),
              nt(),
              Me = null
          },
          panTo: function(e, t, n) {
              n || (e > oe.min.x ? e = oe.min.x : e < oe.max.x && (e = oe.max.x),
              t > oe.min.y ? t = oe.min.y : t < oe.max.y && (t = oe.max.y)),
              he.x = e,
              he.y = t,
              Le()
          },
          handleEvent: function(e) {
              e = e || window.event,
              v[e.type] && v[e.type](e)
          },
          goTo: function(e) {
              e = Te(e);
              var t = e - f;
              xe = t,
              f = e,
              r.currItem = Jt(f),
              ve -= t,
              Pe(we.x * ve),
              nt(),
              re = !1,
              r.updateCurrItem()
          },
          next: function() {
              r.goTo(f + 1)
          },
          prev: function() {
              r.goTo(f - 1)
          },
          updateCurrZoomItem: function(e) {
              if (e && Se("beforeChange", 0),
              E[1].el.children.length) {
                  var t = E[1].el.children[0];
                  ie = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
              } else
                  ie = null;
              oe = r.currItem.bounds,
              w = y = r.currItem.initialZoomLevel,
              he.x = oe.center.x,
              he.y = oe.center.y,
              e && Se("afterChange")
          },
          invalidateCurrItems: function() {
              C = !0;
              for (var e = 0; e < s; e++)
                  E[e].item && (E[e].item.needsUpdate = !0)
          },
          updateCurrItem: function(e) {
              if (0 !== xe) {
                  var t, n = Math.abs(xe);
                  if (!(e && n < 2)) {
                      r.currItem = Jt(f),
                      Ee = !1,
                      Se("beforeChange", xe),
                      n >= s && (m += xe + (xe > 0 ? -s : s),
                      n = s);
                      for (var o = 0; o < n; o++)
                          xe > 0 ? (t = E.shift(),
                          E[s - 1] = t,
                          m++,
                          Re((m + 2) * we.x, t.el.style),
                          r.setContent(t, f - n + o + 1 + 1)) : (t = E.pop(),
                          E.unshift(t),
                          m--,
                          Re(m * we.x, t.el.style),
                          r.setContent(t, f + n - o - 1 - 1));
                      if (ie && 1 === Math.abs(xe)) {
                          var i = Jt(O);
                          i.initialZoomLevel !== y && (un(i, ge),
                          pn(i),
                          _e(i))
                      }
                      xe = 0,
                      r.updateCurrZoomItem(),
                      O = f,
                      Se("afterChange")
                  }
              }
          },
          updateSize: function(t) {
              if (!be && l.modal) {
                  var n = i.getScrollY();
                  if (z !== n && (e.style.top = n + "px",
                  z = n),
                  !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight)
                      return;
                  Ce.x = window.innerWidth,
                  Ce.y = window.innerHeight,
                  e.style.height = Ce.y + "px"
              }
              if (ge.x = r.scrollWrap.clientWidth,
              ge.y = r.scrollWrap.clientHeight,
              Ve(),
              we.x = ge.x + Math.round(ge.x * l.spacing),
              we.y = ge.y,
              Pe(we.x * ve),
              Se("beforeResize"),
              void 0 !== m) {
                  for (var o, a, u, c = 0; c < s; c++)
                      o = E[c],
                      Re((c + m) * we.x, o.el.style),
                      u = f + c - 1,
                      l.loop && en() > 2 && (u = Te(u)),
                      a = Jt(u),
                      a && (C || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a),
                      r.setContent(o, u),
                      1 === c && (r.currItem = a,
                      r.updateCurrZoomItem(!0)),
                      a.needsUpdate = !1) : -1 === o.index && u >= 0 && r.setContent(o, u),
                      a && a.container && (un(a, ge),
                      pn(a),
                      _e(a));
                  C = !1
              }
              w = y = r.currItem.initialZoomLevel,
              oe = r.currItem.bounds,
              oe && (he.x = oe.center.x,
              he.y = oe.center.y,
              Le(!0)),
              Se("resize")
          },
          zoomTo: function(e, t, n, o, r) {
              t && (w = y,
              xt.x = Math.abs(t.x) - he.x,
              xt.y = Math.abs(t.y) - he.y,
              ze(me, he));
              var a = Ke(e, !1)
                , s = {};
              We("x", a, s, e),
              We("y", a, s, e);
              var l = y
                , u = {
                  x: he.x,
                  y: he.y
              };
              Ne(s);
              var c = function(t) {
                  1 === t ? (y = e,
                  he.x = s.x,
                  he.y = s.y) : (y = (e - l) * t + l,
                  he.x = (s.x - u.x) * t + u.x,
                  he.y = (s.y - u.y) * t + u.y),
                  r && r(t),
                  Le(1 === t)
              };
              n ? ot("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, c) : c(1)
          }
      }, rt = 30, at = 10, st = {}, lt = {}, ut = {}, ct = {}, dt = {}, ft = [], pt = {}, mt = [], ht = {}, gt = 0, vt = fe(), yt = 0, wt = fe(), xt = fe(), bt = fe(), It = function(e, t) {
          return e.x === t.x && e.y === t.y
      }, Ct = function(e, t) {
          return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a
      }, Et = function(e, t) {
          return ht.x = Math.abs(e.x - t.x),
          ht.y = Math.abs(e.y - t.y),
          Math.sqrt(ht.x * ht.x + ht.y * ht.y)
      }, Ot = function() {
          V && (_(V),
          V = null)
      }, Tt = function() {
          W && (V = L(Tt),
          qt())
      }, Mt = function() {
          return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
      }, kt = function(e, t) {
          return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : kt(e.parentNode, t))
      }, St = {}, At = function(e, t) {
          return St.prevent = !kt(e.target, l.isClickableElement),
          Se("preventDragEvent", e, t, St),
          St.prevent
      }, Dt = function(e, t) {
          return t.x = e.pageX,
          t.y = e.pageY,
          t.id = e.identifier,
          t
      }, Ft = function(e, t, n) {
          n.x = .5 * (e.x + t.x),
          n.y = .5 * (e.y + t.y)
      }, Lt = function(e, t, n) {
          if (e - q > 50) {
              var o = mt.length > 2 ? mt.shift() : {};
              o.x = t,
              o.y = n,
              mt.push(o),
              q = e
          }
      }, _t = function() {
          var e = he.y - r.currItem.initialPosition.y;
          return 1 - Math.abs(e / (ge.y / 2))
      }, Rt = {}, Pt = {}, Bt = [], zt = function(e) {
          for (; Bt.length > 0; )
              Bt.pop();
          return D ? (de = 0,
          ft.forEach(function(e) {
              0 === de ? Bt[0] = e : 1 === de && (Bt[1] = e),
              de++
          })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Bt[0] = Dt(e.touches[0], Rt),
          e.touches.length > 1 && (Bt[1] = Dt(e.touches[1], Pt))) : (Rt.x = e.pageX,
          Rt.y = e.pageY,
          Rt.id = "",
          Bt[0] = Rt),
          Bt
      }, Nt = function(e, t) {
          var n, o, i, a, s = he[e] + t[e], u = t[e] > 0, c = wt.x + t.x, d = wt.x - pt.x;
          return n = s > oe.min[e] || s < oe.max[e] ? l.panEndFriction : 1,
          s = he[e] + t[e] * n,
          !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ie ? "h" !== ae || "x" !== e || j || (u ? (s > oe.min[e] && (n = l.panEndFriction,
          oe.min[e] - s,
          o = oe.min[e] - me[e]),
          (o <= 0 || d < 0) && en() > 1 ? (a = c,
          d < 0 && c > pt.x && (a = pt.x)) : oe.min.x !== oe.max.x && (i = s)) : (s < oe.max[e] && (n = l.panEndFriction,
          s - oe.max[e],
          o = me[e] - oe.max[e]),
          (o <= 0 || d > 0) && en() > 1 ? (a = c,
          d > 0 && c < pt.x && (a = pt.x)) : oe.min.x !== oe.max.x && (i = s))) : a = c,
          "x" !== e) ? void (re || Q || y > r.currItem.fitRatio && (he[e] += t[e] * n)) : (void 0 !== a && (Pe(a, !0),
          Q = a !== pt.x),
          oe.min.x !== oe.max.x && (void 0 !== i ? he.x = i : Q || (he.x += t.x * n)),
          void 0 !== a)
      }, Zt = function(e) {
          if (!("mousedown" === e.type && e.button > 0)) {
              if (Qt)
                  return void e.preventDefault();
              if (!Y || "mousedown" !== e.type) {
                  if (At(e, !0) && e.preventDefault(),
                  Se("pointerDown"),
                  D) {
                      var t = i.arraySearch(ft, e.pointerId, "id");
                      t < 0 && (t = ft.length),
                      ft[t] = {
                          x: e.pageX,
                          y: e.pageY,
                          id: e.pointerId
                      }
                  }
                  var n = zt(e)
                    , o = n.length;
                  J = null,
                  nt(),
                  W && 1 !== o || (W = se = !0,
                  i.bind(window, h, r),
                  K = ce = le = H = Q = X = G = j = !1,
                  ae = null,
                  Se("firstTouchStart", n),
                  ze(me, he),
                  pe.x = pe.y = 0,
                  ze(ct, n[0]),
                  ze(dt, ct),
                  pt.x = we.x * ve,
                  mt = [{
                      x: ct.x,
                      y: ct.y
                  }],
                  q = $ = Ae(),
                  Ke(y, !0),
                  Ot(),
                  Tt()),
                  !ee && o > 1 && !re && !Q && (w = y,
                  j = !1,
                  ee = G = !0,
                  pe.y = pe.x = 0,
                  ze(me, he),
                  ze(st, n[0]),
                  ze(lt, n[1]),
                  Ft(st, lt, bt),
                  xt.x = Math.abs(bt.x) - he.x,
                  xt.y = Math.abs(bt.y) - he.y,
                  te = ne = Et(st, lt))
              }
          }
      }, $t = function(e) {
          if (e.preventDefault(),
          D) {
              var t = i.arraySearch(ft, e.pointerId, "id");
              if (t > -1) {
                  var n = ft[t];
                  n.x = e.pageX,
                  n.y = e.pageY
              }
          }
          if (W) {
              var o = zt(e);
              if (ae || X || ee)
                  J = o;
              else if (wt.x !== we.x * ve)
                  ae = "h";
              else {
                  var r = Math.abs(o[0].x - ct.x) - Math.abs(o[0].y - ct.y);
                  Math.abs(r) >= at && (ae = r > 0 ? "h" : "v",
                  J = o)
              }
          }
      }, qt = function() {
          if (J) {
              var e = J.length;
              if (0 !== e)
                  if (ze(st, J[0]),
                  ut.x = st.x - ct.x,
                  ut.y = st.y - ct.y,
                  ee && e > 1) {
                      if (ct.x = st.x,
                      ct.y = st.y,
                      !ut.x && !ut.y && It(J[1], lt))
                          return;
                      ze(lt, J[1]),
                      j || (j = !0,
                      Se("zoomGestureStarted"));
                      var t = Et(st, lt)
                        , n = Wt(t);
                      n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ce = !0);
                      var o = 1
                        , i = He()
                        , a = Ye();
                      if (n < i)
                          if (l.pinchToClose && !ce && w <= r.currItem.initialZoomLevel) {
                              var s = i - n
                                , u = 1 - s / (i / 1.2);
                              De(u),
                              Se("onPinchClose", u),
                              le = !0
                          } else
                              o = (i - n) / i,
                              o > 1 && (o = 1),
                              n = i - o * (i / 3);
                      else
                          n > a && (o = (n - a) / (6 * i),
                          o > 1 && (o = 1),
                          n = a + o * i);
                      o < 0 && (o = 0),
                      te = t,
                      Ft(st, lt, vt),
                      pe.x += vt.x - bt.x,
                      pe.y += vt.y - bt.y,
                      ze(bt, vt),
                      he.x = Be("x", n),
                      he.y = Be("y", n),
                      K = n > y,
                      y = n,
                      Le()
                  } else {
                      if (!ae)
                          return;
                      if (se && (se = !1,
                      Math.abs(ut.x) >= at && (ut.x -= J[0].x - dt.x),
                      Math.abs(ut.y) >= at && (ut.y -= J[0].y - dt.y)),
                      ct.x = st.x,
                      ct.y = st.y,
                      0 === ut.x && 0 === ut.y)
                          return;
                      if ("v" === ae && l.closeOnVerticalDrag && !Mt()) {
                          pe.y += ut.y,
                          he.y += ut.y;
                          var c = _t();
                          return H = !0,
                          Se("onVerticalDrag", c),
                          De(c),
                          void Le()
                      }
                      Lt(Ae(), st.x, st.y),
                      X = !0,
                      oe = r.currItem.bounds;
                      var d = Nt("x", ut);
                      d || (Nt("y", ut),
                      Ne(he),
                      Le())
                  }
          }
      }, Ut = function(e) {
          if (N.isOldAndroid) {
              if (Y && "mouseup" === e.type)
                  return;
              e.type.indexOf("touch") > -1 && (clearTimeout(Y),
              Y = setTimeout(function() {
                  Y = 0
              }, 600))
          }
          Se("pointerUp"),
          At(e, !1) && e.preventDefault();
          var t;
          if (D) {
              var n = i.arraySearch(ft, e.pointerId, "id");
              if (n > -1)
                  if (t = ft.splice(n, 1)[0],
                  navigator.msPointerEnabled) {
                      var o = {
                          4: "mouse",
                          2: "touch",
                          3: "pen"
                      };
                      t.type = o[e.pointerType],
                      t.type || (t.type = e.pointerType || "mouse")
                  } else
                      t.type = e.pointerType || "mouse"
          }
          var a, s = zt(e), u = s.length;
          if ("mouseup" === e.type && (u = 0),
          2 === u)
              return J = null,
              !0;
          1 === u && ze(dt, s[0]),
          0 !== u || ae || re || (t || ("mouseup" === e.type ? t = {
              x: e.pageX,
              y: e.pageY,
              type: "mouse"
          } : e.changedTouches && e.changedTouches[0] && (t = {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY,
              type: "touch"
          })),
          Se("touchRelease", e, t));
          var c = -1;
          if (0 === u && (W = !1,
          i.unbind(window, h, r),
          Ot(),
          ee ? c = 0 : -1 !== yt && (c = Ae() - yt)),
          yt = 1 === u ? Ae() : -1,
          a = -1 !== c && c < 150 ? "zoom" : "swipe",
          ee && u < 2 && (ee = !1,
          1 === u && (a = "zoomPointerUp"),
          Se("zoomGestureEnded")),
          J = null,
          X || j || re || H)
              if (nt(),
              U || (U = Kt()),
              U.calculateSwipeSpeed("x"),
              H) {
                  var d = _t();
                  if (d < l.verticalDragRange)
                      r.close();
                  else {
                      var f = he.y
                        , p = ue;
                      ot("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(e) {
                          he.y = (r.currItem.initialPosition.y - f) * e + f,
                          De((1 - p) * e + p),
                          Le()
                      }),
                      Se("onVerticalDrag", 1)
                  }
              } else {
                  if ((Q || re) && 0 === u) {
                      var m = Yt(a, U);
                      if (m)
                          return;
                      a = "zoomPointerUp"
                  }
                  if (!re)
                      return "swipe" !== a ? void Gt() : void (!Q && y > r.currItem.fitRatio && Ht(U))
              }
      }, Kt = function() {
          var e, t, n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function(o) {
                  mt.length > 1 ? (e = Ae() - q + 50,
                  t = mt[mt.length - 2][o]) : (e = Ae() - $,
                  t = dt[o]),
                  n.lastFlickOffset[o] = ct[o] - t,
                  n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]),
                  n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0,
                  Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0),
                  n.slowDownRatio[o] = .95,
                  n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o],
                  n.speedDecelerationRatio[o] = 1
              },
              calculateOverBoundsAnimOffset: function(e, t) {
                  n.backAnimStarted[e] || (he[e] > oe.min[e] ? n.backAnimDestination[e] = oe.min[e] : he[e] < oe.max[e] && (n.backAnimDestination[e] = oe.max[e]),
                  void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7,
                  n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                  n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0,
                  n.backAnimStarted[e] = !0,
                  ot("bounceZoomPan" + e, he[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function(t) {
                      he[e] = t,
                      Le()
                  }))))
              },
              calculateAnimOffset: function(e) {
                  n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10),
                  n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]),
                  n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff,
                  he[e] += n.distanceOffset[e])
              },
              panAnimLoop: function() {
                  if (Qe.zoomPan && (Qe.zoomPan.raf = L(n.panAnimLoop),
                  n.now = Ae(),
                  n.timeDiff = n.now - n.lastNow,
                  n.lastNow = n.now,
                  n.calculateAnimOffset("x"),
                  n.calculateAnimOffset("y"),
                  Le(),
                  n.calculateOverBoundsAnimOffset("x"),
                  n.calculateOverBoundsAnimOffset("y"),
                  n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))
                      return he.x = Math.round(he.x),
                      he.y = Math.round(he.y),
                      Le(),
                      void et("zoomPan")
              }
          };
          return n
      }, Ht = function(e) {
          return e.calculateSwipeSpeed("y"),
          oe = r.currItem.bounds,
          e.backAnimDestination = {},
          e.backAnimStarted = {},
          Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
          e.calculateOverBoundsAnimOffset("x"),
          e.calculateOverBoundsAnimOffset("y"),
          !0) : (tt("zoomPan"),
          e.lastNow = Ae(),
          void e.panAnimLoop())
      }, Yt = function(e, t) {
          var n;
          re || (gt = f);
          var o;
          if ("swipe" === e) {
              var a = ct.x - dt.x
                , s = t.lastFlickDist.x < 10;
              a > rt && (s || t.lastFlickOffset.x > 20) ? o = -1 : a < -rt && (s || t.lastFlickOffset.x < -20) && (o = 1)
          }
          var u;
          o && (f += o,
          f < 0 ? (f = l.loop ? en() - 1 : 0,
          u = !0) : f >= en() && (f = l.loop ? 0 : en() - 1,
          u = !0),
          u && !l.loop || (xe += o,
          ve -= o,
          n = !0));
          var c, d = we.x * ve, p = Math.abs(d - wt.x);
          return n || d > wt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333,
          c = Math.min(c, 400),
          c = Math.max(c, 250)) : c = 333,
          gt === f && (n = !1),
          re = !0,
          Se("mainScrollAnimStart"),
          ot("mainScroll", wt.x, d, c, i.easing.cubic.out, Pe, function() {
              nt(),
              re = !1,
              gt = -1,
              (n || gt !== f) && r.updateCurrItem(),
              Se("mainScrollAnimComplete")
          }),
          n && r.updateCurrItem(!0),
          n
      }, Wt = function(e) {
          return 1 / ne * e * w
      }, Gt = function() {
          var e = y
            , t = He()
            , n = Ye();
          y < t ? e = t : y > n && (e = n);
          var o, a = ue;
          return le && !K && !ce && y < t ? (r.close(),
          !0) : (le && (o = function(e) {
              De((1 - a) * e + a)
          }
          ),
          r.zoomTo(e, 0, 200, i.easing.cubic.out, o),
          !0)
      };
      Oe("Gestures", {
          publicMethods: {
              initGestures: function() {
                  var e = function(e, t, n, o, i) {
                      T = e + t,
                      M = e + n,
                      k = e + o,
                      S = i ? e + i : ""
                  };
                  D = N.pointerEvent,
                  D && N.touch && (N.touch = !1),
                  D ? navigator.msPointerEnabled ? e("MSPointer", "Down", "Move", "Up", "Cancel") : e("pointer", "down", "move", "up", "cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"),
                  F = !0) : e("mouse", "down", "move", "up"),
                  h = M + " " + k + " " + S,
                  g = T,
                  D && !F && (F = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                  r.likelyTouchDevice = F,
                  v[T] = Zt,
                  v[M] = $t,
                  v[k] = Ut,
                  S && (v[S] = v[k]),
                  N.touch && (g += " mousedown",
                  h += " mousemove mouseup",
                  v.mousedown = v[T],
                  v.mousemove = v[M],
                  v.mouseup = v[k]),
                  F || (l.allowPanToNext = !1)
              }
          }
      });
      var jt, Xt, Vt, Qt, Jt, en, tn, nn = function(t, n, o, a) {
          jt && clearTimeout(jt),
          Qt = !0,
          Vt = !0;
          var s;
          t.initialLayout ? (s = t.initialLayout,
          t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(f);
          var u = o ? l.hideAnimationDuration : l.showAnimationDuration
            , c = function() {
              et("initialZoom"),
              o ? (r.template.removeAttribute("style"),
              r.bg.removeAttribute("style")) : (De(1),
              n && (n.style.display = "block"),
              i.addClass(e, "pswp--animated-in"),
              Se("initialZoom" + (o ? "OutEnd" : "InEnd"))),
              a && a(),
              Qt = !1
          };
          if (!u || !s || void 0 === s.x)
              return Se("initialZoom" + (o ? "Out" : "In")),
              y = t.initialZoomLevel,
              ze(he, t.initialPosition),
              Le(),
              e.style.opacity = o ? 0 : 1,
              De(1),
              void (u ? setTimeout(function() {
                  c()
              }, u) : c());
          !function() {
              var n = d
                , a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
              t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
              o || (y = s.w / t.w,
              he.x = s.x,
              he.y = s.y - P,
              r[a ? "template" : "bg"].style.opacity = .001,
              Le()),
              tt("initialZoom"),
              o && !n && i.removeClass(e, "pswp--animated-in"),
              a && (o ? i[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                  i.addClass(e, "pswp--animate_opacity")
              }, 30)),
              jt = setTimeout(function() {
                  if (Se("initialZoom" + (o ? "Out" : "In")),
                  o) {
                      var r = s.w / t.w
                        , l = {
                          x: he.x,
                          y: he.y
                      }
                        , d = y
                        , f = ue
                        , p = function(t) {
                          1 === t ? (y = r,
                          he.x = s.x,
                          he.y = s.y - z) : (y = (r - d) * t + d,
                          he.x = (s.x - l.x) * t + l.x,
                          he.y = (s.y - z - l.y) * t + l.y),
                          Le(),
                          a ? e.style.opacity = 1 - t : De(f - t * f)
                      };
                      n ? ot("initialZoom", 0, 1, u, i.easing.cubic.out, p, c) : (p(1),
                      jt = setTimeout(c, u + 20))
                  } else
                      y = t.initialZoomLevel,
                      ze(he, t.initialPosition),
                      Le(),
                      De(1),
                      a ? e.style.opacity = 1 : De(1),
                      jt = setTimeout(c, u + 20)
              }, o ? 25 : 90)
          }()
      }, on = {}, rn = [], an = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function() {
              return Xt.length
          }
      }, sn = function() {
          return {
              center: {
                  x: 0,
                  y: 0
              },
              max: {
                  x: 0,
                  y: 0
              },
              min: {
                  x: 0,
                  y: 0
              }
          }
      }, ln = function(e, t, n) {
          var o = e.bounds;
          o.center.x = Math.round((on.x - t) / 2),
          o.center.y = Math.round((on.y - n) / 2) + e.vGap.top,
          o.max.x = t > on.x ? Math.round(on.x - t) : o.center.x,
          o.max.y = n > on.y ? Math.round(on.y - n) + e.vGap.top : o.center.y,
          o.min.x = t > on.x ? 0 : o.center.x,
          o.min.y = n > on.y ? e.vGap.top : o.center.y
      }, un = function(e, t, n) {
          if (e.src && !e.loadError) {
              var o = !n;
              if (o && (e.vGap || (e.vGap = {
                  top: 0,
                  bottom: 0
              }),
              Se("parseVerticalMargin", e)),
              on.x = t.x,
              on.y = t.y - e.vGap.top - e.vGap.bottom,
              o) {
                  var i = on.x / e.w
                    , r = on.y / e.h;
                  e.fitRatio = i < r ? i : r;
                  var a = l.scaleMode;
                  "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio),
                  n > 1 && (n = 1),
                  e.initialZoomLevel = n,
                  e.bounds || (e.bounds = sn())
              }
              if (!n)
                  return;
              return ln(e, e.w * n, e.h * n),
              o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
              e.bounds
          }
          return e.w = e.h = 0,
          e.initialZoomLevel = e.fitRatio = 1,
          e.bounds = sn(),
          e.initialPosition = e.bounds.center,
          e.bounds
      }, cn = function(e, t, n, o, i, a) {
          t.loadError || o && (t.imageAppended = !0,
          pn(t, o, t === r.currItem && Ee),
          n.appendChild(o),
          a && setTimeout(function() {
              t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
              t.placeholder = null)
          }, 500))
      }, dn = function(e) {
          e.loading = !0,
          e.loaded = !1;
          var t = e.img = i.createEl("pswp__img", "img")
            , n = function() {
              e.loading = !1,
              e.loaded = !0,
              e.loadComplete ? e.loadComplete(e) : e.img = null,
              t.onload = t.onerror = null,
              t = null
          };
          return t.onload = n,
          t.onerror = function() {
              e.loadError = !0,
              n()
          }
          ,
          t.src = e.src,
          t
      }, fn = function(e, t) {
          if (e.src && e.loadError && e.container)
              return t && (e.container.innerHTML = ""),
              e.container.innerHTML = l.errorMsg.replace("%url%", e.src),
              !0
      }, pn = function(e, t, n) {
          if (e.src) {
              t || (t = e.container.lastChild);
              var o = n ? e.w : Math.round(e.w * e.fitRatio)
                , i = n ? e.h : Math.round(e.h * e.fitRatio);
              e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px",
              e.placeholder.style.height = i + "px"),
              t.style.width = o + "px",
              t.style.height = i + "px"
          }
      }, mn = function() {
          if (rn.length) {
              for (var e, t = 0; t < rn.length; t++)
                  e = rn[t],
                  e.holder.index === e.index && cn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
              rn = []
          }
      };
      Oe("Controller", {
          publicMethods: {
              lazyLoadItem: function(e) {
                  e = Te(e);
                  var t = Jt(e);
                  t && (!t.loaded && !t.loading || C) && (Se("gettingData", e, t),
                  t.src && dn(t))
              },
              initController: function() {
                  i.extend(l, an, !0),
                  r.items = Xt = n,
                  Jt = r.getItemAt,
                  en = l.getNumItemsFn,
                  tn = l.loop,
                  en() < 3 && (l.loop = !1),
                  ke("beforeChange", function(e) {
                      var t, n = l.preload, o = null === e || e >= 0, i = Math.min(n[0], en()), a = Math.min(n[1], en());
                      for (t = 1; t <= (o ? a : i); t++)
                          r.lazyLoadItem(f + t);
                      for (t = 1; t <= (o ? i : a); t++)
                          r.lazyLoadItem(f - t)
                  }),
                  ke("initialLayout", function() {
                      r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(f)
                  }),
                  ke("mainScrollAnimComplete", mn),
                  ke("initialZoomInEnd", mn),
                  ke("destroy", function() {
                      for (var e, t = 0; t < Xt.length; t++)
                          e = Xt[t],
                          e.container && (e.container = null),
                          e.placeholder && (e.placeholder = null),
                          e.img && (e.img = null),
                          e.preloader && (e.preloader = null),
                          e.loadError && (e.loaded = e.loadError = !1);
                      rn = null
                  })
              },
              getItemAt: function(e) {
                  return e >= 0 && void 0 !== Xt[e] && Xt[e]
              },
              allowProgressiveImg: function() {
                  return l.forceProgressiveLoading || !F || l.mouseUsed || screen.width > 1200
              },
              setContent: function(e, t) {
                  l.loop && (t = Te(t));
                  var n = r.getItemAt(e.index);
                  n && (n.container = null);
                  var o, a = r.getItemAt(t);
                  if (!a)
                      return void (e.el.innerHTML = "");
                  Se("gettingData", t, a),
                  e.index = t,
                  e.item = a;
                  var s = a.container = i.createEl("pswp__zoom-wrap");
                  if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html),
                  fn(a),
                  un(a, ge),
                  !a.src || a.loadError || a.loaded)
                      a.src && !a.loadError && (o = i.createEl("pswp__img", "img"),
                      o.style.opacity = 1,
                      o.src = a.src,
                      pn(a, o),
                      cn(t, a, s, o, !0));
                  else {
                      if (a.loadComplete = function(n) {
                          if (u) {
                              if (e && e.index === t) {
                                  if (fn(n, !0))
                                      return n.loadComplete = n.img = null,
                                      un(n, ge),
                                      _e(n),
                                      void (e.index === f && r.updateCurrZoomItem());
                                  n.imageAppended ? !Qt && n.placeholder && (n.placeholder.style.display = "none",
                                  n.placeholder = null) : N.transform && (re || Qt) ? rn.push({
                                      item: n,
                                      baseDiv: s,
                                      img: n.img,
                                      index: t,
                                      holder: e,
                                      clearPlaceholder: !0
                                  }) : cn(t, n, s, n.img, re || Qt, !0)
                              }
                              n.loadComplete = null,
                              n.img = null,
                              Se("imageLoadComplete", t, n)
                          }
                      }
                      ,
                      i.features.transform) {
                          var c = "pswp__img pswp__img--placeholder";
                          c += a.msrc ? "" : " pswp__img--placeholder--blank";
                          var d = i.createEl(c, a.msrc ? "img" : "");
                          a.msrc && (d.src = a.msrc),
                          pn(a, d),
                          s.appendChild(d),
                          a.placeholder = d
                      }
                      a.loading || dn(a),
                      r.allowProgressiveImg() && (!Vt && N.transform ? rn.push({
                          item: a,
                          baseDiv: s,
                          img: a.img,
                          index: t,
                          holder: e
                      }) : cn(t, a, s, a.img, !0, !0))
                  }
                  Vt || t !== f ? _e(a) : (ie = s.style,
                  nn(a, o || a.img)),
                  e.el.innerHTML = "",
                  e.el.appendChild(s)
              },
              cleanSlide: function(e) {
                  e.img && (e.img.onload = e.img.onerror = null),
                  e.loaded = e.loading = e.img = e.imageAppended = !1
              }
          }
      });
      var hn, gn = {}, vn = function(e, t, n) {
          var o = document.createEvent("CustomEvent")
            , i = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || "touch"
          };
          o.initCustomEvent("pswpTap", !0, !0, i),
          e.target.dispatchEvent(o)
      };
      Oe("Tap", {
          publicMethods: {
              initTap: function() {
                  ke("firstTouchStart", r.onTapStart),
                  ke("touchRelease", r.onTapRelease),
                  ke("destroy", function() {
                      gn = {},
                      hn = null
                  })
              },
              onTapStart: function(e) {
                  e.length > 1 && (clearTimeout(hn),
                  hn = null)
              },
              onTapRelease: function(e, t) {
                  if (t && !X && !G && !Je) {
                      var n = t;
                      if (hn && (clearTimeout(hn),
                      hn = null,
                      Ct(n, gn)))
                          return void Se("doubleTap", n);
                      if ("mouse" === t.type)
                          return void vn(e, t, "mouse");
                      if ("BUTTON" === e.target.tagName.toUpperCase() || i.hasClass(e.target, "pswp__single-tap"))
                          return void vn(e, t);
                      ze(gn, n),
                      hn = setTimeout(function() {
                          vn(e, t),
                          hn = null
                      }, 300)
                  }
              }
          }
      });
      var yn;
      Oe("DesktopZoom", {
          publicMethods: {
              initDesktopZoom: function() {
                  B || (F ? ke("mouseUsed", function() {
                      r.setupDesktopZoom()
                  }) : r.setupDesktopZoom(!0))
              },
              setupDesktopZoom: function(t) {
                  yn = {};
                  var n = "wheel mousewheel DOMMouseScroll";
                  ke("bindEvents", function() {
                      i.bind(e, n, r.handleMouseWheel)
                  }),
                  ke("unbindEvents", function() {
                      yn && i.unbind(e, n, r.handleMouseWheel)
                  }),
                  r.mouseZoomedIn = !1;
                  var o, a = function() {
                      r.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"),
                      r.mouseZoomedIn = !1),
                      y < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"),
                      s()
                  }, s = function() {
                      o && (i.removeClass(e, "pswp--dragging"),
                      o = !1)
                  };
                  ke("resize", a),
                  ke("afterChange", a),
                  ke("pointerDown", function() {
                      r.mouseZoomedIn && (o = !0,
                      i.addClass(e, "pswp--dragging"))
                  }),
                  ke("pointerUp", s),
                  t || a()
              },
              handleMouseWheel: function(e) {
                  if (y <= r.currItem.fitRatio)
                      return l.modal && (!l.closeOnScroll || Je || W ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (d = !0,
                      r.close())),
                      !0;
                  if (e.stopPropagation(),
                  yn.x = 0,
                  "deltaX"in e)
                      1 === e.deltaMode ? (yn.x = 18 * e.deltaX,
                      yn.y = 18 * e.deltaY) : (yn.x = e.deltaX,
                      yn.y = e.deltaY);
                  else if ("wheelDelta"in e)
                      e.wheelDeltaX && (yn.x = -.16 * e.wheelDeltaX),
                      e.wheelDeltaY ? yn.y = -.16 * e.wheelDeltaY : yn.y = -.16 * e.wheelDelta;
                  else {
                      if (!("detail"in e))
                          return;
                      yn.y = e.detail
                  }
                  Ke(y, !0);
                  var t = he.x - yn.x
                    , n = he.y - yn.y;
                  (l.modal || t <= oe.min.x && t >= oe.max.x && n <= oe.min.y && n >= oe.max.y) && e.preventDefault(),
                  r.panTo(t, n)
              },
              toggleDesktopZoom: function(t) {
                  t = t || {
                      x: ge.x / 2 + ye.x,
                      y: ge.y / 2 + ye.y
                  };
                  var n = l.getDoubleTapZoom(!0, r.currItem)
                    , o = y === n;
                  r.mouseZoomedIn = !o,
                  r.zoomTo(o ? r.currItem.initialZoomLevel : n, t, 333),
                  i[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
              }
          }
      });
      var wn, xn, bn, In, Cn, En, On, Tn, Mn, kn, Sn, An, Dn = {
          history: !0,
          galleryUID: 1
      }, Fn = function() {
          return Sn.hash.substring(1)
      }, Ln = function() {
          wn && clearTimeout(wn),
          bn && clearTimeout(bn)
      }, _n = function() {
          var e = Fn()
            , t = {};
          if (e.length < 5)
              return t;
          var n, o = e.split("&");
          for (n = 0; n < o.length; n++)
              if (o[n]) {
                  var i = o[n].split("=");
                  i.length < 2 || (t[i[0]] = i[1])
              }
          if (l.galleryPIDs) {
              var r = t.pid;
              for (t.pid = 0,
              n = 0; n < Xt.length; n++)
                  if (Xt[n].pid === r) {
                      t.pid = n;
                      break
                  }
          } else
              t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0),
          t
      }, Rn = function() {
          if (bn && clearTimeout(bn),
          Je || W)
              return void (bn = setTimeout(Rn, 500));
          In ? clearTimeout(xn) : In = !0;
          var e = f + 1
            , t = Jt(f);
          t.hasOwnProperty("pid") && (e = t.pid);
          var n = On + "&gid=" + l.galleryUID + "&pid=" + e;
          Tn || -1 === Sn.hash.indexOf(n) && (kn = !0);
          var o = Sn.href.split("#")[0] + "#" + n;
          An ? "#" + n !== window.location.hash && history[Tn ? "replaceState" : "pushState"]("", document.title, o) : Tn ? Sn.replace(o) : Sn.hash = n,
          Tn = !0,
          xn = setTimeout(function() {
              In = !1
          }, 60)
      };
      Oe("History", {
          publicMethods: {
              initHistory: function() {
                  if (i.extend(l, Dn, !0),
                  l.history) {
                      Sn = window.location,
                      kn = !1,
                      Mn = !1,
                      Tn = !1,
                      On = Fn(),
                      An = "pushState"in history,
                      On.indexOf("gid=") > -1 && (On = On.split("&gid=")[0],
                      On = On.split("?gid=")[0]),
                      ke("afterChange", r.updateURL),
                      ke("unbindEvents", function() {
                          i.unbind(window, "hashchange", r.onHashChange)
                      });
                      var e = function() {
                          En = !0,
                          Mn || (kn ? history.back() : On ? Sn.hash = On : An ? history.pushState("", document.title, Sn.pathname + Sn.search) : Sn.hash = ""),
                          Ln()
                      };
                      ke("unbindEvents", function() {
                          d && e()
                      }),
                      ke("destroy", function() {
                          En || e()
                      }),
                      ke("firstUpdate", function() {
                          f = _n().pid
                      });
                      var t = On.indexOf("pid=");
                      t > -1 && (On = On.substring(0, t),
                      "&" === On.slice(-1) && (On = On.slice(0, -1))),
                      setTimeout(function() {
                          u && i.bind(window, "hashchange", r.onHashChange)
                      }, 40)
                  }
              },
              onHashChange: function() {
                  return Fn() === On ? (Mn = !0,
                  void r.close()) : void (In || (Cn = !0,
                  r.goTo(_n().pid),
                  Cn = !1))
              },
              updateURL: function() {
                  Ln(),
                  Cn || (Tn ? wn = setTimeout(Rn, 800) : Rn())
              }
          }
      }),
      i.extend(r, it)
  }
});
var isMobile = window.matchMedia("(max-width: 640px)").matches
, initPhotoSwipeFromDOM = function(e) {
  for (var t = function(e) {
      for (var t, n, o, i, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++)
          t = r[l],
          1 === t.nodeType && (n = t.children[0],
          o = n.getAttribute("data-size").split("x"),
          i = {
              src: n.getAttribute("href"),
              w: parseInt(o[0], 10),
              h: parseInt(o[1], 10)
          },
          t.children.length > 1 && (i.title = t.children[1].innerHTML),
          n.children.length > 0 && (i.msrc = n.children[0].getAttribute("src")),
          i.el = t,
          s.push(i));
      return s
  }, n = function e(t, n) {
      return t && (n(t) ? t : e(t.parentNode, n))
  }, o = function(e) {
      e = e || window.event,
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      var t = e.target || e.srcElement
        , o = n(t, function(e) {
          return e.tagName && "FIGURE" === e.tagName.toUpperCase()
      });
      if (o) {
          for (var i, a = o.parentNode, s = o.parentNode.childNodes, l = s.length, u = 0, c = 0; c < l; c++)
              if (1 === s[c].nodeType) {
                  if (s[c] === o) {
                      i = u;
                      break
                  }
                  u++
              }
          return i >= 0 && r(i, a),
          !1
      }
  }, i = function() {
      var e = window.location.hash.substring(1)
        , t = {};
      if (e.length < 5)
          return t;
      for (var n = e.split("&"), o = 0; o < n.length; o++)
          if (n[o]) {
              var i = n[o].split("=");
              i.length < 2 || (t[i[0]] = i[1])
          }
      return t.gid && (t.gid = parseInt(t.gid, 10)),
      t
  }, r = function(e, n, o, i) {
      var r, a, s, l = document.querySelectorAll(".pswp")[0];
      if (s = t(n),
      a = {
          bgOpacity: .7,
          galleryUID: n.getAttribute("data-pswp-uid"),
          getThumbBoundsFn: function(e) {
              var t = s[e].el.getElementsByTagName("img")[0]
                , n = window.pageYOffset || document.documentElement.scrollTop
                , o = t.getBoundingClientRect();
              return {
                  x: o.left,
                  y: o.top + n,
                  w: o.width
              }
          }
      },
      i)
          if (a.galleryPIDs) {
              for (var u = 0; u < s.length; u++)
                  if (s[u].pid == e) {
                      a.index = u;
                      break
                  }
          } else
              a.index = parseInt(e, 10) - 1;
      else
          a.index = parseInt(e, 10);
      isNaN(a.index) || (o && (a.showAnimationDuration = 0),
      r = new PhotoSwipe(l,PhotoSwipeUI_Default,s,a),
      r.init(),
      r.listen("afterChange", function() {
          var e = (r.getCurrentIndex(),
          r.currItem.el)
            , t = e.offsetLeft - e.parentNode.offsetLeft - 5;
          e.parentNode.scrollLeft = t
      }))
  }, a = document.querySelectorAll(e), s = 0, l = a.length; s < l; s++)
      a[s].setAttribute("data-pswp-uid", s + 1),
      a[s].onclick = o;
  var u = i();
  u.pid && u.gid && r(u.pid, a[u.gid - 1], !0, !0)
};
document.body.classList.contains("index") && (yall({
  threshold: 500
}),
loadFacts(),
loadOptions(),
setTimeout(function() {}, 1200)),
document.body.classList.contains("index") && (setTimeout(function() {
  indexAnimation()
}, 1500),
setTimeout(function() {
  loadNav()
}, 3500)),
document.body.classList.contains("save-the-date") && setTimeout(function() {
  startAnimation()
}, 1200),
document.body.classList.contains("slideshow") && initPhotoSwipeFromDOM(".js-gallery");

;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var n = []
    , r = e.document
    , i = Object.getPrototypeOf
    , o = n.slice
    , a = n.concat
    , s = n.push
    , u = n.indexOf
    , l = {}
    , c = l.toString
    , f = l.hasOwnProperty
    , p = f.toString
    , d = p.call(Object)
    , h = {}
    , g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType
  }
    , y = function e(t) {
      return null != t && t === t.window
  }
    , v = {
      type: !0,
      src: !0,
      noModule: !0
  };
  function m(e, t, n) {
      var i, o = (t = t || r).createElement("script");
      if (o.text = e,
      n)
          for (i in v)
              n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o)
  }
  function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var b = "3.3.1"
    , w = function(e, t) {
      return new w.fn.init(e,t)
  }
    , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.fn = w.prototype = {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function() {
          return o.call(this)
      },
      get: function(e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this,
          t
      },
      each: function(e) {
          return w.each(this, e)
      },
      map: function(e) {
          return this.pushStack(w.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(o.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice
  },
  w.extend = w.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
      for ("boolean" == typeof a && (l = a,
      a = arguments[s] || {},
      s++),
      "object" == typeof a || g(a) || (a = {}),
      s === u && (a = this,
      s--); s < u; s++)
          if (null != (e = arguments[s]))
              for (t in e)
                  n = a[t],
                  a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                  o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                  a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
  }
  ,
  w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      globalEval: function(e) {
          m(e)
      },
      each: function(e, t) {
          var n, r = 0;
          if (C(e)) {
              for (n = e.length; r < n; r++)
                  if (!1 === t.call(e[r], r, e[r]))
                      break
          } else
              for (r in e)
                  if (!1 === t.call(e[r], r, e[r]))
                      break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(T, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
          n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : u.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
          return e.length = i,
          e
      },
      grep: function(e, t, n) {
          for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
              (r = !t(e[o], o)) !== s && i.push(e[o]);
          return i
      },
      map: function(e, t, n) {
          var r, i, o = 0, s = [];
          if (C(e))
              for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && s.push(i);
          else
              for (o in e)
                  null != (i = t(e[o], o, n)) && s.push(i);
          return a.apply([], s)
      },
      guid: 1,
      support: h
  }),
  "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
  w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
  });
  function C(e) {
      var t = !!e && "length"in e && e.length
        , n = x(e);
      return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  var E = function(e) {
      var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
          return e === t && (f = !0),
          0
      }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
          bool: new RegExp("^(?:" + P + ")$","i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
      }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
          return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, re = function() {
          p()
      }, ie = me(function(e) {
          return !0 === e.disabled && ("form"in e || "label"in e)
      }, {
          dir: "parentNode",
          next: "legend"
      });
      try {
          L.apply(A = H.call(w.childNodes), w.childNodes),
          A[w.childNodes.length].nodeType
      } catch (e) {
          L = {
              apply: A.length ? function(e, t) {
                  q.apply(e, H.call(t))
              }
              : function(e, t) {
                  var n = e.length
                    , r = 0;
                  while (e[n++] = t[r++])
                      ;
                  e.length = n - 1
              }
          }
      }
      function oe(e, t, r, i) {
          var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
          if (r = r || [],
          "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
              return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
          t = t || d,
          g)) {
              if (11 !== T && (f = J.exec(e)))
                  if (o = f[1]) {
                      if (9 === T) {
                          if (!(l = t.getElementById(o)))
                              return r;
                          if (l.id === o)
                              return r.push(l),
                              r
                      } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                          return r.push(l),
                          r
                  } else {
                      if (f[2])
                          return L.apply(r, t.getElementsByTagName(e)),
                          r;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                          return L.apply(r, t.getElementsByClassName(o)),
                          r
                  }
              if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                  if (1 !== T)
                      m = t,
                      v = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                      s = (h = a(e)).length;
                      while (s--)
                          h[s] = "#" + c + " " + ve(h[s]);
                      v = h.join(","),
                      m = K.test(e) && ge(t.parentNode) || t
                  }
                  if (v)
                      try {
                          return L.apply(r, m.querySelectorAll(v)),
                          r
                      } catch (e) {} finally {
                          c === b && t.removeAttribute("id")
                      }
              }
          }
          return u(e.replace(B, "$1"), t, r, i)
      }
      function ae() {
          var e = [];
          function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
              t[n + " "] = i
          }
          return t
      }
      function se(e) {
          return e[b] = !0,
          e
      }
      function ue(e) {
          var t = d.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function le(e, t) {
          var n = e.split("|")
            , i = n.length;
          while (i--)
              r.attrHandle[n[i]] = t
      }
      function ce(e, t) {
          var n = t && e
            , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r)
              return r;
          if (n)
              while (n = n.nextSibling)
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function fe(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }
      function pe(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }
      function de(e) {
          return function(t) {
              return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
          }
      }
      function he(e) {
          return se(function(t) {
              return t = +t,
              se(function(n, r) {
                  var i, o = e([], n.length, t), a = o.length;
                  while (a--)
                      n[i = o[a]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }
      function ge(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      n = oe.support = {},
      o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }
      ,
      p = oe.setDocument = function(e) {
          var t, i, a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
          h = d.documentElement,
          g = !o(d),
          w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
          n.attributes = ue(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          n.getElementsByTagName = ue(function(e) {
              return e.appendChild(d.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          n.getElementsByClassName = Q.test(d.getElementsByClassName),
          n.getById = ue(function(e) {
              return h.appendChild(e).id = b,
              !d.getElementsByName || !d.getElementsByName(b).length
          }),
          n.getById ? (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ,
          r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }
          ) : (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }
          ,
          r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n, r, i, o = t.getElementById(e);
                  if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                      i = t.getElementsByName(e),
                      r = 0;
                      while (o = i[r++])
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o]
                  }
                  return []
              }
          }
          ),
          r.find.TAG = n.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, r = [], i = 0, o = t.getElementsByTagName(e);
              if ("*" === e) {
                  while (n = o[i++])
                      1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }
          ,
          r.find.CLASS = n.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && g)
                  return t.getElementsByClassName(e)
          }
          ,
          v = [],
          y = [],
          (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
              h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
              e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
              e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
              e.querySelectorAll(":checked").length || y.push(":checked"),
              e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
          }),
          ue(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
              2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
              h.appendChild(e).disabled = !0,
              2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              y.push(",.*:")
          })),
          (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
              n.disconnectedMatch = m.call(e, "*"),
              m.call(e, "[s!='']:x"),
              v.push("!=", W)
          }),
          y = y.length && new RegExp(y.join("|")),
          v = v.length && new RegExp(v.join("|")),
          t = Q.test(h.compareDocumentPosition),
          x = t || Q.test(h.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          }
          : function(e, t) {
              if (t)
                  while (t = t.parentNode)
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          D = t ? function(e, t) {
              if (e === t)
                  return f = !0,
                  0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return f = !0,
                  0;
              var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
              if (!i || !o)
                  return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
              if (i === o)
                  return ce(e, t);
              n = e;
              while (n = n.parentNode)
                  a.unshift(n);
              n = t;
              while (n = n.parentNode)
                  s.unshift(n);
              while (a[r] === s[r])
                  r++;
              return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
          }
          ,
          d) : d
      }
      ,
      oe.matches = function(e, t) {
          return oe(e, null, null, t)
      }
      ,
      oe.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== d && p(e),
          t = t.replace(z, "='$1']"),
          n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
              try {
                  var r = m.call(e, t);
                  if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return r
              } catch (e) {}
          return oe(t, d, null, [e]).length > 0
      }
      ,
      oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== d && p(e),
          x(e, t)
      }
      ,
      oe.attr = function(e, t) {
          (e.ownerDocument || e) !== d && p(e);
          var i = r.attrHandle[t.toLowerCase()]
            , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }
      ,
      oe.escape = function(e) {
          return (e + "").replace(te, ne)
      }
      ,
      oe.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      oe.uniqueSort = function(e) {
          var t, r = [], i = 0, o = 0;
          if (f = !n.detectDuplicates,
          c = !n.sortStable && e.slice(0),
          e.sort(D),
          f) {
              while (t = e[o++])
                  t === e[o] && (i = r.push(o));
              while (i--)
                  e.splice(r[i], 1)
          }
          return c = null,
          e
      }
      ,
      i = oe.getText = function(e) {
          var t, n = "", r = 0, o = e.nodeType;
          if (o) {
              if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += i(e)
              } else if (3 === o || 4 === o)
                  return e.nodeValue
          } else
              while (t = e[r++])
                  n += i(t);
          return n
      }
      ,
      (r = oe.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(Z, ee),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                  e[2] = n.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = E[e + " "];
                  return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, t, n) {
                  return function(r) {
                      var i = oe.attr(r, e);
                      return null == i ? "!=" === t : !t || (i += "",
                      "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3)
                    , a = "last" !== e.slice(-4)
                    , s = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, n, u) {
                      var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                      if (y) {
                          if (o) {
                              while (g) {
                                  p = t;
                                  while (p = p[g])
                                      if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                          return !1;
                                  h = g = "only" === e && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [a ? y.firstChild : y.lastChild],
                          a && m) {
                              x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                              p = d && y.childNodes[d];
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if (1 === p.nodeType && ++x && p === t) {
                                      c[e] = [T, d, x];
                                      break
                                  }
                          } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                          !1 === x)
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                  p === t))
                                      break;
                          return (x -= i) === r || x % r == 0 && x / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, t) {
                  var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                  return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                  r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                      var r, o = i(e, t), a = o.length;
                      while (a--)
                          e[r = O(e, o[a])] = !(n[r] = o[a])
                  }) : function(e) {
                      return i(e, 0, n)
                  }
                  ) : i
              }
          },
          pseudos: {
              not: se(function(e) {
                  var t = []
                    , n = []
                    , r = s(e.replace(B, "$1"));
                  return r[b] ? se(function(e, t, n, i) {
                      var o, a = r(e, null, i, []), s = e.length;
                      while (s--)
                          (o = a[s]) && (e[s] = !(t[s] = o))
                  }) : function(e, i, o) {
                      return t[0] = e,
                      r(t, null, o, n),
                      t[0] = null,
                      !n.pop()
                  }
              }),
              has: se(function(e) {
                  return function(t) {
                      return oe(e, t).length > 0
                  }
              }),
              contains: se(function(e) {
                  return e = e.replace(Z, ee),
                  function(t) {
                      return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                  }
              }),
              lang: se(function(e) {
                  return U.test(e || "") || oe.error("unsupported lang: " + e),
                  e = e.replace(Z, ee).toLowerCase(),
                  function(t) {
                      var n;
                      do {
                          if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1
                  }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === h
              },
              focus: function(e) {
                  return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: de(!1),
              disabled: de(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !r.pseudos.empty(e)
              },
              header: function(e) {
                  return Y.test(e.nodeName)
              },
              input: function(e) {
                  return G.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: he(function() {
                  return [0]
              }),
              last: he(function(e, t) {
                  return [t - 1]
              }),
              eq: he(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: he(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: he(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; )
                      e.push(r);
                  return e
              }),
              gt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; )
                      e.push(r);
                  return e
              })
          }
      }).pseudos.nth = r.pseudos.eq;
      for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          r.pseudos[t] = fe(t);
      for (t in {
          submit: !0,
          reset: !0
      })
          r.pseudos[t] = pe(t);
      function ye() {}
      ye.prototype = r.filters = r.pseudos,
      r.setFilters = new ye,
      a = oe.tokenize = function(e, t) {
          var n, i, o, a, s, u, l, c = k[e + " "];
          if (c)
              return t ? 0 : c.slice(0);
          s = e,
          u = [],
          l = r.preFilter;
          while (s) {
              n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
              u.push(o = [])),
              n = !1,
              (i = _.exec(s)) && (n = i.shift(),
              o.push({
                  value: n,
                  type: i[0].replace(B, " ")
              }),
              s = s.slice(n.length));
              for (a in r.filter)
                  !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                  o.push({
                      value: n,
                      type: a,
                      matches: i
                  }),
                  s = s.slice(n.length));
              if (!n)
                  break
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
      }
      ;
      function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++)
              r += e[t].value;
          return r
      }
      function me(e, t, n) {
          var r = t.dir
            , i = t.next
            , o = i || r
            , a = n && "parentNode" === o
            , s = C++;
          return t.first ? function(t, n, i) {
              while (t = t[r])
                  if (1 === t.nodeType || a)
                      return e(t, n, i);
              return !1
          }
          : function(t, n, u) {
              var l, c, f, p = [T, s];
              if (u) {
                  while (t = t[r])
                      if ((1 === t.nodeType || a) && e(t, n, u))
                          return !0
              } else
                  while (t = t[r])
                      if (1 === t.nodeType || a)
                          if (f = t[b] || (t[b] = {}),
                          c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                          i && i === t.nodeName.toLowerCase())
                              t = t[r] || t;
                          else {
                              if ((l = c[o]) && l[0] === T && l[1] === s)
                                  return p[2] = l[2];
                              if (c[o] = p,
                              p[2] = e(t, n, u))
                                  return !0
                          }
              return !1
          }
      }
      function xe(e) {
          return e.length > 1 ? function(t, n, r) {
              var i = e.length;
              while (i--)
                  if (!e[i](t, n, r))
                      return !1;
              return !0
          }
          : e[0]
      }
      function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++)
              oe(e, t[r], n);
          return n
      }
      function we(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
              l && t.push(s)));
          return a
      }
      function Te(e, t, n, r, i, o) {
          return r && !r[b] && (r = Te(r)),
          i && !i[b] && (i = Te(i, o)),
          se(function(o, a, s, u) {
              var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
              if (n && n(y, v, s, u),
              r) {
                  l = we(v, d),
                  r(l, [], s, u),
                  c = l.length;
                  while (c--)
                      (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
              }
              if (o) {
                  if (i || e) {
                      if (i) {
                          l = [],
                          c = v.length;
                          while (c--)
                              (f = v[c]) && l.push(y[c] = f);
                          i(null, v = [], l, u)
                      }
                      c = v.length;
                      while (c--)
                          (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                  }
              } else
                  v = we(v === a ? v.splice(h, v.length) : v),
                  i ? i(null, a, v, u) : L.apply(a, v)
          })
      }
      function Ce(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
              return e === t
          }, s, !0), f = me(function(e) {
              return O(t, e) > -1
          }, s, !0), p = [function(e, n, r) {
              var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return t = null,
              i
          }
          ]; u < o; u++)
              if (n = r.relative[e[u].type])
                  p = [me(xe(p), n)];
              else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                      for (i = ++u; i < o; i++)
                          if (r.relative[e[i].type])
                              break;
                      return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : ""
                      })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                  }
                  p.push(n)
              }
          return xe(p)
      }
      function Ee(e, t) {
          var n = t.length > 0
            , i = e.length > 0
            , o = function(o, a, s, u, c) {
              var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
              for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                  if (i && f) {
                      h = 0,
                      a || f.ownerDocument === d || (p(f),
                      s = !g);
                      while (y = e[h++])
                          if (y(f, a || d, s)) {
                              u.push(f);
                              break
                          }
                      c && (T = E)
                  }
                  n && ((f = !y && f) && v--,
                  o && x.push(f))
              }
              if (v += m,
              n && m !== v) {
                  h = 0;
                  while (y = t[h++])
                      y(x, b, a, s);
                  if (o) {
                      if (v > 0)
                          while (m--)
                              x[m] || b[m] || (b[m] = j.call(u));
                      b = we(b)
                  }
                  L.apply(u, b),
                  c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
              }
              return c && (T = E,
              l = w),
              x
          };
          return n ? se(o) : o
      }
      return s = oe.compile = function(e, t) {
          var n, r = [], i = [], o = S[e + " "];
          if (!o) {
              t || (t = a(e)),
              n = t.length;
              while (n--)
                  (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
              (o = S(e, Ee(i, r))).selector = e
          }
          return o
      }
      ,
      u = oe.select = function(e, t, n, i) {
          var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
          if (n = n || [],
          1 === d.length) {
              if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                  if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                      return n;
                  p && (t = t.parentNode),
                  e = e.slice(u.shift().value.length)
              }
              o = V.needsContext.test(e) ? 0 : u.length;
              while (o--) {
                  if (l = u[o],
                  r.relative[c = l.type])
                      break;
                  if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                      if (u.splice(o, 1),
                      !(e = i.length && ve(u)))
                          return L.apply(n, i),
                          n;
                      break
                  }
              }
          }
          return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
          n
      }
      ,
      n.sortStable = b.split("").sort(D).join("") === b,
      n.detectDuplicates = !!f,
      p(),
      n.sortDetached = ue(function(e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
      }),
      ue(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      n.attributes && ue(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      ue(function(e) {
          return null == e.getAttribute("disabled")
      }) || le(P, function(e, t, n) {
          var r;
          if (!n)
              return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }),
      oe
  }(e);
  w.find = E,
  w.expr = E.selectors,
  w.expr[":"] = w.expr.pseudos,
  w.uniqueSort = w.unique = E.uniqueSort,
  w.text = E.getText,
  w.isXMLDoc = E.isXML,
  w.contains = E.contains,
  w.escapeSelector = E.escape;
  var k = function(e, t, n) {
      var r = []
        , i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
              if (i && w(e).is(n))
                  break;
              r.push(e)
          }
      return r
  }
    , S = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
      return n
  }
    , D = w.expr.match.needsContext;
  function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
      return g(t) ? w.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      }) : t.nodeType ? w.grep(e, function(e) {
          return e === t !== n
      }) : "string" != typeof t ? w.grep(e, function(e) {
          return u.call(t, e) > -1 !== n
      }) : w.filter(t, e, n)
  }
  w.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  w.fn.extend({
      find: function(e) {
          var t, n, r = this.length, i = this;
          if ("string" != typeof e)
              return this.pushStack(w(e).filter(function() {
                  for (t = 0; t < r; t++)
                      if (w.contains(i[t], this))
                          return !0
              }));
          for (n = this.pushStack([]),
          t = 0; t < r; t++)
              w.find(e, i[t], n);
          return r > 1 ? w.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(j(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(j(this, e || [], !0))
      },
      is: function(e) {
          return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
      }
  });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, n) {
      var i, o;
      if (!e)
          return this;
      if (n = n || q,
      "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (t = t instanceof w ? t[0] : t,
              w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
              A.test(i[1]) && w.isPlainObject(t))
                  for (i in t)
                      g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
          }
          return (o = r.getElementById(i[2])) && (this[0] = o,
          this.length = 1),
          this
      }
      return e.nodeType ? (this[0] = e,
      this.length = 1,
      this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
  }
  ).prototype = w.fn,
  q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/
    , O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  w.fn.extend({
      has: function(e) {
          var t = w(e, this)
            , n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (w.contains(this, t[e]))
                      return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
          if (!D.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  });
  function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType)
          ;
      return e
  }
  w.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return k(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return k(e, "parentNode", n)
      },
      next: function(e) {
          return P(e, "nextSibling")
      },
      prev: function(e) {
          return P(e, "previousSibling")
      },
      nextAll: function(e) {
          return k(e, "nextSibling")
      },
      prevAll: function(e) {
          return k(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return k(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return k(e, "previousSibling", n)
      },
      siblings: function(e) {
          return S((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return S(e.firstChild)
      },
      contents: function(e) {
          return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
          w.merge([], e.childNodes))
      }
  }, function(e, t) {
      w.fn[e] = function(n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 && (O[e] || w.uniqueSort(i),
          H.test(e) && i.reverse()),
          this.pushStack(i)
      }
  });
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
      var t = {};
      return w.each(e.match(M) || [], function(e, n) {
          t[n] = !0
      }),
      t
  }
  w.Callbacks = function(e) {
      e = "string" == typeof e ? R(e) : w.extend({}, e);
      var t, n, r, i, o = [], a = [], s = -1, u = function() {
          for (i = i || e.once,
          r = t = !0; a.length; s = -1) {
              n = a.shift();
              while (++s < o.length)
                  !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                  n = !1)
          }
          e.memory || (n = !1),
          t = !1,
          i && (o = n ? [] : "")
      }, l = {
          add: function() {
              return o && (n && !t && (s = o.length - 1,
              a.push(n)),
              function t(n) {
                  w.each(n, function(n, r) {
                      g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                  })
              }(arguments),
              n && !t && u()),
              this
          },
          remove: function() {
              return w.each(arguments, function(e, t) {
                  var n;
                  while ((n = w.inArray(t, o, n)) > -1)
                      o.splice(n, 1),
                      n <= s && s--
              }),
              this
          },
          has: function(e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0
          },
          empty: function() {
              return o && (o = []),
              this
          },
          disable: function() {
              return i = a = [],
              o = n = "",
              this
          },
          disabled: function() {
              return !o
          },
          lock: function() {
              return i = a = [],
              n || t || (o = n = ""),
              this
          },
          locked: function() {
              return !!i
          },
          fireWith: function(e, n) {
              return i || (n = [e, (n = n || []).slice ? n.slice() : n],
              a.push(n),
              t || u()),
              this
          },
          fire: function() {
              return l.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!r
          }
      };
      return l
  }
  ;
  function I(e) {
      return e
  }
  function W(e) {
      throw e
  }
  function $(e, t, n, r) {
      var i;
      try {
          e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  w.extend({
      Deferred: function(t) {
          var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
            , r = "pending"
            , i = {
              state: function() {
                  return r
              },
              always: function() {
                  return o.done(arguments).fail(arguments),
                  this
              },
              "catch": function(e) {
                  return i.then(null, e)
              },
              pipe: function() {
                  var e = arguments;
                  return w.Deferred(function(t) {
                      w.each(n, function(n, r) {
                          var i = g(e[r[4]]) && e[r[4]];
                          o[r[1]](function() {
                              var e = i && i.apply(this, arguments);
                              e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              then: function(t, r, i) {
                  var o = 0;
                  function a(t, n, r, i) {
                      return function() {
                          var s = this
                            , u = arguments
                            , l = function() {
                              var e, l;
                              if (!(t < o)) {
                                  if ((e = r.apply(s, u)) === n.promise())
                                      throw new TypeError("Thenable self-resolution");
                                  l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                  g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                  l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                  u = [e]),
                                  (i || n.resolveWith)(s, u))
                              }
                          }
                            , c = i ? l : function() {
                              try {
                                  l()
                              } catch (e) {
                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                  t + 1 >= o && (r !== W && (s = void 0,
                                  u = [e]),
                                  n.rejectWith(s, u))
                              }
                          }
                          ;
                          t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                          e.setTimeout(c))
                      }
                  }
                  return w.Deferred(function(e) {
                      n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                      n[1][3].add(a(0, e, g(t) ? t : I)),
                      n[2][3].add(a(0, e, g(r) ? r : W))
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? w.extend(e, i) : i
              }
          }
            , o = {};
          return w.each(n, function(e, t) {
              var a = t[2]
                , s = t[5];
              i[t[1]] = a.add,
              s && a.add(function() {
                  r = s
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
              a.add(t[3].fire),
              o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                  this
              }
              ,
              o[t[0] + "With"] = a.fireWith
          }),
          i.promise(o),
          t && t.call(o, o),
          o
      },
      when: function(e) {
          var t = arguments.length
            , n = t
            , r = Array(n)
            , i = o.call(arguments)
            , a = w.Deferred()
            , s = function(e) {
              return function(n) {
                  r[e] = this,
                  i[e] = arguments.length > 1 ? o.call(arguments) : n,
                  --t || a.resolveWith(r, i)
              }
          };
          if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
          "pending" === a.state() || g(i[n] && i[n].then)))
              return a.then();
          while (n--)
              $(i[n], s(n), a.reject);
          return a.promise()
      }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }
  ,
  w.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  }
  ;
  var F = w.Deferred();
  w.fn.ready = function(e) {
      return F.then(e)["catch"](function(e) {
          w.readyException(e)
      }),
      this
  }
  ,
  w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
          !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
      }
  }),
  w.ready.then = F.then;
  function _() {
      r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready()
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
  e.addEventListener("load", _));
  var z = function(e, t, n, r, i, o, a) {
      var s = 0
        , u = e.length
        , l = null == n;
      if ("object" === x(n)) {
          i = !0;
          for (s in n)
              z(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== r && (i = !0,
      g(r) || (a = !0),
      l && (a ? (t.call(e, r),
      t = null) : (l = t,
      t = function(e, t, n) {
          return l.call(w(e), n)
      }
      )),
      t))
          for (; s < u; s++)
              t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }
    , X = /^-ms-/
    , U = /-([a-z])/g;
  function V(e, t) {
      return t.toUpperCase()
  }
  function G(e) {
      return e.replace(X, "ms-").replace(U, V)
  }
  var Y = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  function Q() {
      this.expando = w.expando + Q.uid++
  }
  Q.uid = 1,
  Q.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {},
          Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))),
          t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t)
              i[G(t)] = n;
          else
              for (r in t)
                  i[G(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
          void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
              if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                  while (n--)
                      delete r[t[n]]
              }
              (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
      }
  };
  var J = new Q
    , K = new Q
    , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , ee = /[A-Z]/g;
  function te(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
  }
  function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
          "string" == typeof (n = e.getAttribute(r))) {
              try {
                  n = te(n)
              } catch (e) {}
              K.set(e, t, n)
          } else
              n = void 0;
      return n
  }
  w.extend({
      hasData: function(e) {
          return K.hasData(e) || J.hasData(e)
      },
      data: function(e, t, n) {
          return K.access(e, t, n)
      },
      removeData: function(e, t) {
          K.remove(e, t)
      },
      _data: function(e, t, n) {
          return J.access(e, t, n)
      },
      _removeData: function(e, t) {
          J.remove(e, t)
      }
  }),
  w.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0], a = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (i = K.get(o),
              1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                  n = a.length;
                  while (n--)
                      a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                      ne(o, r, i[r]));
                  J.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              K.set(this, e)
          }) : z(this, function(t) {
              var n;
              if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e)))
                      return n;
                  if (void 0 !== (n = ne(o, e)))
                      return n
              } else
                  this.each(function() {
                      K.set(this, e, t)
                  })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              K.remove(this, e)
          })
      }
  }),
  w.extend({
      queue: function(e, t, n) {
          var r;
          if (e)
              return t = (t || "fx") + "queue",
              r = J.get(e, t),
              n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
              r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = w.queue(e, t)
            , r = n.length
            , i = n.shift()
            , o = w._queueHooks(e, t)
            , a = function() {
              w.dequeue(e, t)
          };
          "inprogress" === i && (i = n.shift(),
          r--),
          i && ("fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(e, a, o)),
          !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return J.get(e, n) || J.access(e, n, {
              empty: w.Callbacks("once memory").add(function() {
                  J.remove(e, [t + "queue", n])
              })
          })
      }
  }),
  w.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          n--),
          arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = w.queue(this, e, t);
              w._queueHooks(this, e),
              "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              w.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
              --r || i.resolveWith(o, [o])
          };
          "string" != typeof e && (t = e,
          e = void 0),
          e = e || "fx";
          while (a--)
              (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
              n.empty.add(s));
          return s(),
          i.promise(t)
      }
  });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
    , oe = ["Top", "Right", "Bottom", "Left"]
    , ae = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
  }
    , se = function(e, t, n, r) {
      var i, o, a = {};
      for (o in t)
          a[o] = e.style[o],
          e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
          e.style[o] = a[o];
      return i
  };
  function ue(e, t, n, r) {
      var i, o, a = 20, s = r ? function() {
          return r.cur()
      }
      : function() {
          return w.css(e, t, "")
      }
      , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
      if (c && c[3] !== l) {
          u /= 2,
          l = l || c[3],
          c = +u || 1;
          while (a--)
              w.style(e, t, c + l),
              (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
              c /= o;
          c *= 2,
          w.style(e, t, c + l),
          n = n || []
      }
      return n && (c = +c || +u || 0,
      i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
      r && (r.unit = l,
      r.start = c,
      r.end = i)),
      i
  }
  var le = {};
  function ce(e) {
      var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
      return i || (t = n.body.appendChild(n.createElement(r)),
      i = w.css(t, "display"),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      le[r] = i,
      i)
  }
  function fe(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style && (n = r.style.display,
          t ? ("none" === n && (i[o] = J.get(r, "display") || null,
          i[o] || (r.style.display = "")),
          "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
          J.set(r, "display", n)));
      for (o = 0; o < a; o++)
          null != i[o] && (e[o].style.display = i[o]);
      return e
  }
  w.fn.extend({
      show: function() {
          return fe(this, !0)
      },
      hide: function() {
          return fe(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              ae(this) ? w(this).show() : w(this).hide()
          })
      }
  });
  var pe = /^(?:checkbox|radio)$/i
    , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
    , he = /^$|^module$|\/(?:java|ecma)script/i
    , ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  ge.optgroup = ge.option,
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
  ge.th = ge.td;
  function ye(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
      void 0 === t || t && N(e, t) ? w.merge([e], n) : n
  }
  function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
          if ((o = e[d]) || 0 === o)
              if ("object" === x(o))
                  w.merge(p, o.nodeType ? [o] : o);
              else if (me.test(o)) {
                  a = a || f.appendChild(t.createElement("div")),
                  s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                  u = ge[s] || ge._default,
                  a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                  c = u[0];
                  while (c--)
                      a = a.lastChild;
                  w.merge(p, a.childNodes),
                  (a = f.firstChild).textContent = ""
              } else
                  p.push(t.createTextNode(o));
      f.textContent = "",
      d = 0;
      while (o = p[d++])
          if (r && w.inArray(o, r) > -1)
              i && i.push(o);
          else if (l = w.contains(o.ownerDocument, o),
          a = ye(f.appendChild(o), "script"),
          l && ve(a),
          n) {
              c = 0;
              while (o = a[c++])
                  he.test(o.type || "") && n.push(o)
          }
      return f
  }
  !function() {
      var e = r.createDocumentFragment().appendChild(r.createElement("div"))
        , t = r.createElement("input");
      t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
      e.innerHTML = "<textarea>x</textarea>",
      h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var be = r.documentElement
    , we = /^key/
    , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
      return !0
  }
  function ke() {
      return !1
  }
  function Se() {
      try {
          return r.activeElement
      } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
          "string" != typeof n && (r = r || n,
          n = void 0);
          for (s in t)
              De(e, s, n, r, t[s], o);
          return e
      }
      if (null == r && null == i ? (i = n,
      r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
      r = void 0) : (i = r,
      r = n,
      n = void 0)),
      !1 === i)
          i = ke;
      else if (!i)
          return e;
      return 1 === o && (a = i,
      (i = function(e) {
          return w().off(e),
          a.apply(this, arguments)
      }
      ).guid = a.guid || (a.guid = w.guid++)),
      e.each(function() {
          w.event.add(this, t, i, r, n)
      })
  }
  w.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
          if (y) {
              n.handler && (n = (o = n).handler,
              i = o.selector),
              i && w.find.matchesSelector(be, i),
              n.guid || (n.guid = w.guid++),
              (u = y.events) || (u = y.events = {}),
              (a = y.handle) || (a = y.handle = function(t) {
                  return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
              }
              ),
              l = (t = (t || "").match(M) || [""]).length;
              while (l--)
                  d = g = (s = Ce.exec(t[l]) || [])[1],
                  h = (s[2] || "").split(".").sort(),
                  d && (f = w.event.special[d] || {},
                  d = (i ? f.delegateType : f.bindType) || d,
                  f = w.event.special[d] || {},
                  c = w.extend({
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && w.expr.match.needsContext.test(i),
                      namespace: h.join(".")
                  }, o),
                  (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                  f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                  f.add && (f.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  w.event.global[d] = !0)
          }
      },
      remove: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
          if (y && (u = y.events)) {
              l = (t = (t || "").match(M) || [""]).length;
              while (l--)
                  if (s = Ce.exec(t[l]) || [],
                  d = g = s[1],
                  h = (s[2] || "").split(".").sort(),
                  d) {
                      f = w.event.special[d] || {},
                      p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                      s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      a = o = p.length;
                      while (o--)
                          c = p[o],
                          !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                      a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                      delete u[d])
                  } else
                      for (d in u)
                          w.event.remove(e, d + t[l], n, r, !0);
              w.isEmptyObject(u) && J.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
          for (u[0] = t,
          n = 1; n < arguments.length; n++)
              u[n] = arguments[n];
          if (t.delegateTarget = this,
          !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
              s = w.event.handlers.call(this, t, l),
              n = 0;
              while ((o = s[n++]) && !t.isPropagationStopped()) {
                  t.currentTarget = o.elem,
                  r = 0;
                  while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                      t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                      t.data = a.data,
                      void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                      t.stopPropagation()))
              }
              return c.postDispatch && c.postDispatch.call(this, t),
              t.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (o = [],
                      a = {},
                      n = 0; n < u; n++)
                          void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                          a[i] && o.push(r);
                      o.length && s.push({
                          elem: l,
                          handlers: o
                      })
                  }
          return l = this,
          u < t.length && s.push({
              elem: l,
              handlers: t.slice(u)
          }),
          s
      },
      addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t) ? function() {
                  if (this.originalEvent)
                      return t(this.originalEvent)
              }
              : function() {
                  if (this.originalEvent)
                      return this.originalEvent[e]
              }
              ,
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[w.expando] ? e : new w.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== Se() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === Se() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && N(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(e) {
                  return N(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  },
  w.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }
  ,
  w.Event = function(e, t) {
      if (!(this instanceof w.Event))
          return new w.Event(e,t);
      e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
      this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
      this.currentTarget = e.currentTarget,
      this.relatedTarget = e.relatedTarget) : this.type = e,
      t && w.extend(this, t),
      this.timeStamp = e && e.timeStamp || Date.now(),
      this[w.expando] = !0
  }
  ,
  w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ee,
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ee,
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ee,
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, w.event.addProp),
  w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this, i = e.relatedTarget, o = e.handleObj;
              return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
              n = o.handler.apply(this, arguments),
              e.type = t),
              n
          }
      }
  }),
  w.fn.extend({
      on: function(e, t, n, r) {
          return De(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return De(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
              return r = e.handleObj,
              w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
              this;
          if ("object" == typeof e) {
              for (i in e)
                  this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t,
          t = void 0),
          !1 === n && (n = ke),
          this.each(function() {
              w.event.remove(this, e, n, t)
          })
      }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , Ae = /<script|<style|<link/i
    , je = /checked\s*(?:[^=]|=\s*.checked.)/i
    , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
  }
  function He(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }
  function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
      e
  }
  function Pe(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
          if (J.hasData(e) && (o = J.access(e),
          a = J.set(t, o),
          l = o.events)) {
              delete a.handle,
              a.events = {};
              for (i in l)
                  for (n = 0,
                  r = l[i].length; n < r; n++)
                      w.event.add(t, i, l[i][n])
          }
          K.hasData(e) && (s = K.access(e),
          u = w.extend({}, s),
          K.set(t, u))
      }
  }
  function Me(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }
  function Re(e, t, n, r) {
      t = a.apply([], t);
      var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
      if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
          return e.each(function(i) {
              var o = e.eq(i);
              v && (t[0] = y.call(this, i, o.html())),
              Re(o, t, n, r)
          });
      if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
      o = i.firstChild,
      1 === i.childNodes.length && (i = o),
      o || r)) {
          for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
              l = i,
              f !== d && (l = w.clone(l, !0, !0),
              u && w.merge(s, ye(l, "script"))),
              n.call(e[f], l, f);
          if (u)
              for (c = s[s.length - 1].ownerDocument,
              w.map(s, Oe),
              f = 0; f < u; f++)
                  l = s[f],
                  he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
      }
      return e
  }
  function Ie(e, t, n) {
      for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || w.cleanData(ye(r)),
          r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
      return e
  }
  w.extend({
      htmlPrefilter: function(e) {
          return e.replace(Ne, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
          if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
              for (a = ye(s),
              r = 0,
              i = (o = ye(e)).length; r < i; r++)
                  Me(o[r], a[r]);
          if (t)
              if (n)
                  for (o = o || ye(e),
                  a = a || ye(s),
                  r = 0,
                  i = o.length; r < i; r++)
                      Pe(o[r], a[r]);
              else
                  Pe(e, s);
          return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
          s
      },
      cleanData: function(e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Y(n)) {
                  if (t = n[J.expando]) {
                      if (t.events)
                          for (r in t.events)
                              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                      n[J.expando] = void 0
                  }
                  n[K.expando] && (n[K.expando] = void 0)
              }
      }
  }),
  w.fn.extend({
      detach: function(e) {
          return Ie(this, e, !0)
      },
      remove: function(e) {
          return Ie(this, e)
      },
      text: function(e) {
          return z(this, function(e) {
              return void 0 === e ? w.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return Re(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return Re(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Le(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (w.cleanData(ye(e, !1)),
              e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e,
          t = null == t ? e : t,
          this.map(function() {
              return w.clone(this, e, t)
          })
      },
      html: function(e) {
          return z(this, function(e) {
              var t = this[0] || {}
                , n = 0
                , r = this.length;
              if (void 0 === e && 1 === t.nodeType)
                  return t.innerHTML;
              if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = w.htmlPrefilter(e);
                  try {
                      for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return Re(this, arguments, function(t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
              n && n.replaceChild(t, this))
          }, e)
      }
  }),
  w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      w.fn[e] = function(e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
              n = a === o ? this : this.clone(!0),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
    , $e = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e),
      n.getComputedStyle(t)
  }
    , Be = new RegExp(oe.join("|"),"i");
  !function() {
      function t() {
          if (c) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
              c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
              be.appendChild(l).appendChild(c);
              var t = e.getComputedStyle(c);
              i = "1%" !== t.top,
              u = 12 === n(t.marginLeft),
              c.style.right = "60%",
              s = 36 === n(t.right),
              o = 36 === n(t.width),
              c.style.position = "absolute",
              a = 36 === c.offsetWidth || "absolute",
              be.removeChild(l),
              c = null
          }
      }
      function n(e) {
          return Math.round(parseFloat(e))
      }
      var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
      c.style && (c.style.backgroundClip = "content-box",
      c.cloneNode(!0).style.backgroundClip = "",
      h.clearCloneStyle = "content-box" === c.style.backgroundClip,
      w.extend(h, {
          boxSizingReliable: function() {
              return t(),
              o
          },
          pixelBoxStyles: function() {
              return t(),
              s
          },
          pixelPosition: function() {
              return t(),
              i
          },
          reliableMarginLeft: function() {
              return t(),
              u
          },
          scrollboxSize: function() {
              return t(),
              a
          }
      }))
  }();
  function Fe(e, t, n) {
      var r, i, o, a, s = e.style;
      return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
      !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
      i = s.minWidth,
      o = s.maxWidth,
      s.minWidth = s.maxWidth = s.width = a,
      a = n.width,
      s.width = r,
      s.minWidth = i,
      s.maxWidth = o)),
      void 0 !== a ? a + "" : a
  }
  function _e(e, t) {
      return {
          get: function() {
              if (!e())
                  return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  var ze = /^(none|table(?!-c[ea]).+)/
    , Xe = /^--/
    , Ue = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , Ve = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , Ge = ["Webkit", "Moz", "ms"]
    , Ye = r.createElement("div").style;
  function Qe(e) {
      if (e in Ye)
          return e;
      var t = e[0].toUpperCase() + e.slice(1)
        , n = Ge.length;
      while (n--)
          if ((e = Ge[n] + t)in Ye)
              return e
  }
  function Je(e) {
      var t = w.cssProps[e];
      return t || (t = w.cssProps[e] = Qe(e) || e),
      t
  }
  function Ke(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0
        , s = 0
        , u = 0;
      if (n === (r ? "border" : "content"))
          return 0;
      for (; a < 4; a += 2)
          "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
          r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
          "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
          "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
      return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
      u
  }
  function et(e, t, n) {
      var r = $e(e)
        , i = Fe(e, t, r)
        , o = "border-box" === w.css(e, "boxSizing", !1, r)
        , a = o;
      if (We.test(i)) {
          if (!n)
              return i;
          i = "auto"
      }
      return a = a && (h.boxSizingReliable() || i === e.style[t]),
      ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
      a = !0),
      (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
  }
  w.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Fe(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
              if (u || (t = Je(s)),
              a = w.cssHooks[t] || w.cssHooks[s],
              void 0 === n)
                  return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
              o = "number"),
              null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
              h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
              a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, a, s = G(t);
          return Xe.test(t) || (t = Je(s)),
          (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
          void 0 === i && (i = Fe(e, t, r)),
          "normal" === i && t in Ve && (i = Ve[t]),
          "" === n || n ? (o = parseFloat(i),
          !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }),
  w.each(["height", "width"], function(e, t) {
      w.cssHooks[t] = {
          get: function(e, n, r) {
              if (n)
                  return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                      return et(e, t, r)
                  })
          },
          set: function(e, n, r) {
              var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
              return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
              s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
              n = w.css(e, t)),
              Ke(e, n, s)
          }
      }
  }),
  w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
      if (t)
          return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
              marginLeft: 0
          }, function() {
              return e.getBoundingClientRect().left
          })) + "px"
  }),
  w.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      w.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                  i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      },
      "margin" !== e && (w.cssHooks[e + t].set = Ke)
  }),
  w.fn.extend({
      css: function(e, t) {
          return z(this, function(e, t, n) {
              var r, i, o = {}, a = 0;
              if (Array.isArray(t)) {
                  for (r = $e(e),
                  i = t.length; a < i; a++)
                      o[t[a]] = w.css(e, t[a], !1, r);
                  return o
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }, e, t, arguments.length > 1)
      }
  });
  function tt(e, t, n, r, i) {
      return new tt.prototype.init(e,t,n,r,i)
  }
  w.Tween = tt,
  tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, o) {
          this.elem = e,
          this.prop = n,
          this.easing = i || w.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = r,
          this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = tt.propHooks[this.prop];
          return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = tt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
      }
  },
  tt.prototype.init.prototype = tt.prototype,
  tt.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  },
  tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  w.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  },
  w.fx = tt.prototype.init,
  w.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
  function at() {
      rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
      w.fx.tick())
  }
  function st() {
      return e.setTimeout(function() {
          nt = void 0
      }),
      nt = Date.now()
  }
  function ut(e, t) {
      var n, r = 0, i = {
          height: e
      };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = oe[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e),
      i
  }
  function lt(e, t, n) {
      for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
          if (r = i[o].call(n, t, e))
              return r
  }
  function ct(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
      n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
      s = a.empty.fire,
      a.empty.fire = function() {
          a.unqueued || s()
      }
      ),
      a.unqueued++,
      p.always(function() {
          p.always(function() {
              a.unqueued--,
              w.queue(e, "fx").length || a.empty.fire()
          })
      }));
      for (r in t)
          if (i = t[r],
          it.test(i)) {
              if (delete t[r],
              o = o || "toggle" === i,
              i === (g ? "hide" : "show")) {
                  if ("show" !== i || !y || void 0 === y[r])
                      continue;
                  g = !0
              }
              d[r] = y && y[r] || w.style(e, r)
          }
      if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
          f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
          null == (l = y && y.display) && (l = J.get(e, "display")),
          "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
          l = e.style.display || l,
          c = w.css(e, "display"),
          fe([e]))),
          ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
              h.display = l
          }),
          null == l && (c = h.display,
          l = "none" === c ? "" : c)),
          h.display = "inline-block")),
          n.overflow && (h.overflow = "hidden",
          p.always(function() {
              h.overflow = n.overflow[0],
              h.overflowX = n.overflow[1],
              h.overflowY = n.overflow[2]
          })),
          u = !1;
          for (r in d)
              u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                  display: l
              }),
              o && (y.hidden = !g),
              g && fe([e], !0),
              p.done(function() {
                  g || fe([e]),
                  J.remove(e, "fxshow");
                  for (r in d)
                      w.style(e, r, d[r])
              })),
              u = lt(g ? y[r] : 0, r, p),
              r in y || (y[r] = u.start,
              g && (u.end = u.start,
              u.start = 0))
      }
  }
  function ft(e, t) {
      var n, r, i, o, a;
      for (n in e)
          if (r = G(n),
          i = t[r],
          o = e[n],
          Array.isArray(o) && (i = o[1],
          o = e[n] = o[0]),
          n !== r && (e[r] = o,
          delete e[n]),
          (a = w.cssHooks[r]) && "expand"in a) {
              o = a.expand(o),
              delete e[r];
              for (n in o)
                  n in e || (e[n] = o[n],
                  t[n] = i)
          } else
              t[r] = i
  }
  function pt(e, t, n) {
      var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
          delete u.elem
      }), u = function() {
          if (i)
              return !1;
          for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
              l.tweens[o].run(r);
          return s.notifyWith(e, [l, r, n]),
          r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
          s.resolveWith(e, [l]),
          !1)
      }, l = s.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(!0, {
              specialEasing: {},
              easing: w.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: nt || st(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
              var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
              return l.tweens.push(r),
              r
          },
          stop: function(t) {
              var n = 0
                , r = t ? l.tweens.length : 0;
              if (i)
                  return this;
              for (i = !0; n < r; n++)
                  l.tweens[n].run(1);
              return t ? (s.notifyWith(e, [l, 1, 0]),
              s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
              this
          }
      }), c = l.props;
      for (ft(c, l.opts.specialEasing); o < a; o++)
          if (r = pt.prefilters[o].call(l, e, c, l.opts))
              return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r;
      return w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
      w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
      })),
      l
  }
  w.Animation = w.extend(pt, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, ie.exec(t), n),
              n
          }
          ]
      },
      tweener: function(e, t) {
          g(e) ? (t = e,
          e = ["*"]) : e = e.match(M);
          for (var n, r = 0, i = e.length; r < i; r++)
              n = e[r],
              pt.tweeners[n] = pt.tweeners[n] || [],
              pt.tweeners[n].unshift(t)
      },
      prefilters: [ct],
      prefilter: function(e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
      }
  }),
  w.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? w.extend({}, e) : {
          complete: n || !n && t || g(e) && e,
          duration: e,
          easing: n && t || t && !g(t) && t
      };
      return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
      null != r.queue && !0 !== r.queue || (r.queue = "fx"),
      r.old = r.complete,
      r.complete = function() {
          g(r.old) && r.old.call(this),
          r.queue && w.dequeue(this, r.queue)
      }
      ,
      r
  }
  ,
  w.fn.extend({
      fadeTo: function(e, t, n, r) {
          return this.filter(ae).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, r)
      },
      animate: function(e, t, n, r) {
          var i = w.isEmptyObject(e)
            , o = w.speed(t, n, r)
            , a = function() {
              var t = pt(this, w.extend({}, e), o);
              (i || J.get(this, "finish")) && t.stop(!0)
          };
          return a.finish = a,
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
          var r = function(e) {
              var t = e.stop;
              delete e.stop,
              t(n)
          };
          return "string" != typeof e && (n = t,
          t = e,
          e = void 0),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
              var t = !0
                , i = null != e && e + "queueHooks"
                , o = w.timers
                , a = J.get(this);
              if (i)
                  a[i] && a[i].stop && r(a[i]);
              else
                  for (i in a)
                      a[i] && a[i].stop && ot.test(i) && r(a[i]);
              for (i = o.length; i--; )
                  o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                  t = !1,
                  o.splice(i, 1));
              !t && n || w.dequeue(this, e)
          })
      },
      finish: function(e) {
          return !1 !== e && (e = e || "fx"),
          this.each(function() {
              var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
              for (n.finish = !0,
              w.queue(this, e, []),
              i && i.stop && i.stop.call(this, !0),
              t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                  o.splice(t, 1));
              for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
          })
      }
  }),
  w.each(["toggle", "show", "hide"], function(e, t) {
      var n = w.fn[t];
      w.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
      }
  }),
  w.each({
      slideDown: ut("show"),
      slideUp: ut("hide"),
      slideToggle: ut("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      w.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
      }
  }),
  w.timers = [],
  w.fx.tick = function() {
      var e, t = 0, n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(),
      nt = void 0
  }
  ,
  w.fx.timer = function(e) {
      w.timers.push(e),
      w.fx.start()
  }
  ,
  w.fx.interval = 13,
  w.fx.start = function() {
      rt || (rt = !0,
      at())
  }
  ,
  w.fx.stop = function() {
      rt = null
  }
  ,
  w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  w.fn.delay = function(t, n) {
      return t = w.fx ? w.fx.speeds[t] || t : t,
      n = n || "fx",
      this.queue(n, function(n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function() {
              e.clearTimeout(i)
          }
      })
  }
  ,
  function() {
      var e = r.createElement("input")
        , t = r.createElement("select").appendChild(r.createElement("option"));
      e.type = "checkbox",
      h.checkOn = "" !== e.value,
      h.optSelected = t.selected,
      (e = r.createElement("input")).value = "t",
      e.type = "radio",
      h.radioValue = "t" === e.value
  }();
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({
      attr: function(e, t) {
          return z(this, w.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              w.removeAttr(this, e)
          })
      }
  }),
  w.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
              n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!h.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0, i = t && t.match(M);
          if (i && 1 === e.nodeType)
              while (n = i[r++])
                  e.removeAttribute(n)
      }
  }),
  dt = {
      set: function(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
          n
      }
  },
  w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function(e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ht[a],
          ht[a] = i,
          i = null != n(e, t, r) ? a : null,
          ht[a] = o),
          i
      }
  });
  var gt = /^(?:input|select|textarea|button)$/i
    , yt = /^(?:a|area)$/i;
  w.fn.extend({
      prop: function(e, t) {
          return z(this, w.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[w.propFix[e] || e]
          })
      }
  }),
  w.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
              i = w.propHooks[t]),
              void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = w.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }),
  h.optSelected || (w.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex,
          null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex)
      }
  }),
  w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      w.propFix[this.toLowerCase()] = this
  });
  function vt(e) {
      return (e.match(M) || []).join(" ")
  }
  function mt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }
  function xt(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
  }
  w.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e))
              return this.each(function(t) {
                  w(this).addClass(e.call(this, t, mt(this)))
              });
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n),
                  r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++])
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e))
              return this.each(function(t) {
                  w(this).removeClass(e.call(this, t, mt(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n),
                  r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++])
                          while (r.indexOf(" " + o + " ") > -1)
                              r = r.replace(" " + o + " ", " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e
            , r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t)
          }) : this.each(function() {
              var t, i, o, a;
              if (r) {
                  i = 0,
                  o = w(this),
                  a = xt(e);
                  while (t = a[i++])
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
              } else
                  void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++])
              if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                  return !0;
          return !1
      }
  });
  var bt = /\r/g;
  w.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0];
          {
              if (arguments.length)
                  return r = g(e),
                  this.each(function(n) {
                      var i;
                      1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                          return null == e ? "" : e + ""
                      })),
                      (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                  });
              if (i)
                  return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
          }
      }
  }),
  w.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = w.find.attr(e, "value");
                  return null != t ? t : vt(w.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                          if (t = w(n).val(),
                          a)
                              return t;
                          s.push(t)
                      }
                  return s
              },
              set: function(e, t) {
                  var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                  while (a--)
                      ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1),
                  o
              }
          }
      }
  }),
  w.each(["radio", "checkbox"], function() {
      w.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t))
                  return e.checked = w.inArray(w(e).val(), t) > -1
          }
      },
      h.checkOn || (w.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  }),
  h.focusin = "onfocusin"in e;
  var wt = /^(?:focusinfocus|focusoutblur)$/
    , Tt = function(e) {
      e.stopPropagation()
  };
  w.extend(w.event, {
      trigger: function(t, n, i, o) {
          var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = h = u = i = i || r,
          3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
          x.sort()),
          c = m.indexOf(":") < 0 && "on" + m,
          t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
          t.isTrigger = o ? 2 : 3,
          t.namespace = x.join("."),
          t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = void 0,
          t.target || (t.target = i),
          n = null == n ? [t] : w.makeArray(n, [t]),
          d = w.event.special[m] || {},
          o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!o && !d.noBubble && !y(i)) {
                  for (l = d.delegateType || m,
                  wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                      v.push(s),
                      u = s;
                  u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
              }
              a = 0;
              while ((s = v[a++]) && !t.isPropagationStopped())
                  h = s,
                  t.type = a > 1 ? l : d.bindType || m,
                  (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                  (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                  !1 === t.result && t.preventDefault());
              return t.type = m,
              o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
              w.event.triggered = m,
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              w.event.triggered = void 0,
              u && (i[c] = u)),
              t.result
          }
      },
      simulate: function(e, t, n) {
          var r = w.extend(new w.Event, n, {
              type: e,
              isSimulated: !0
          });
          w.event.trigger(r, null, t)
      }
  }),
  w.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              w.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
              return w.event.trigger(e, t, n, !0)
      }
  }),
  h.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e))
      };
      w.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this
                , i = J.access(r, t);
              i || r.addEventListener(e, n, !0),
              J.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this
                , i = J.access(r, t) - 1;
              i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
              J.remove(r, t))
          }
      }
  });
  var Ct = e.location
    , Et = Date.now()
    , kt = /\?/;
  w.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t)
          return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
      n
  }
  ;
  var St = /\[\]$/
    , Dt = /\r?\n/g
    , Nt = /^(?:submit|button|image|reset|file)$/i
    , At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
      var i;
      if (Array.isArray(t))
          w.each(t, function(t, i) {
              n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
          });
      else if (n || "object" !== x(t))
          r(e, t);
      else
          for (i in t)
              jt(e + "[" + i + "]", t[i], n, r)
  }
  w.param = function(e, t) {
      var n, r = [], i = function(e, t) {
          var n = g(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
      if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
          w.each(e, function() {
              i(this.name, this.value)
          });
      else
          for (n in e)
              jt(n, e[n], t, i);
      return r.join("&")
  }
  ,
  w.fn.extend({
      serialize: function() {
          return w.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
          }).map(function(e, t) {
              var n = w(this).val();
              return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Dt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Dt, "\r\n")
              }
          }).get()
      }
  });
  var qt = /%20/g
    , Lt = /#.*$/
    , Ht = /([?&])_=[^&]*/
    , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , Mt = /^(?:GET|HEAD)$/
    , Rt = /^\/\//
    , It = {}
    , Wt = {}
    , $t = "*/".concat("*")
    , Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
      return function(t, n) {
          "string" != typeof t && (n = t,
          t = "*");
          var r, i = 0, o = t.toLowerCase().match(M) || [];
          if (g(n))
              while (r = o[i++])
                  "+" === r[0] ? (r = r.slice(1) || "*",
                  (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }
  function _t(e, t, n, r) {
      var i = {}
        , o = e === Wt;
      function a(s) {
          var u;
          return i[s] = !0,
          w.each(e[s] || [], function(e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
              a(l),
              !1)
          }),
          u
      }
      return a(t.dataTypes[0]) || !i["*"] && a("*")
  }
  function zt(e, t) {
      var n, r, i = w.ajaxSettings.flatOptions || {};
      for (n in t)
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && w.extend(!0, e, r),
      e
  }
  function Xt(e, t, n) {
      var r, i, o, a, s = e.contents, u = e.dataTypes;
      while ("*" === u[0])
          u.shift(),
          void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in s)
              if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break
              }
      if (u[0]in n)
          o = u[0];
      else {
          for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
              }
              a || (a = i)
          }
          o = o || a
      }
      if (o)
          return o !== u[0] && u.unshift(o),
          n[o]
  }
  function Ut(e, t, n, r) {
      var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
      if (c[1])
          for (a in e.converters)
              l[a.toLowerCase()] = e.converters[a];
      o = c.shift();
      while (o)
          if (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          u = o,
          o = c.shift())
              if ("*" === o)
                  o = u;
              else if ("*" !== u && u !== o) {
                  if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                              c.unshift(s[1]));
                              break
                          }
                  if (!0 !== a)
                      if (a && e["throws"])
                          t = a(t);
                      else
                          try {
                              t = a(t)
                          } catch (e) {
                              return {
                                  state: "parsererror",
                                  error: a ? e : "No conversion from " + u + " to " + o
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: Pt.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": $t,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(Wt),
      ajax: function(t, n) {
          "object" == typeof t && (n = t,
          t = void 0),
          n = n || {};
          var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (c) {
                      if (!s) {
                          s = {};
                          while (t = Ot.exec(a))
                              s[t[1].toLowerCase()] = t[2]
                      }
                      t = s[e.toLowerCase()]
                  }
                  return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                  return c ? a : null
              },
              setRequestHeader: function(e, t) {
                  return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                  b[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return null == c && (h.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (c)
                          E.always(e[E.status]);
                      else
                          for (t in e)
                              x[t] = [x[t], e[t]];
                  return this
              },
              abort: function(e) {
                  var t = e || C;
                  return i && i.abort(t),
                  k(0, t),
                  this
              }
          };
          if (v.promise(E),
          h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
          h.type = n.method || n.type || h.method || h.type,
          h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
          null == h.crossDomain) {
              l = r.createElement("a");
              try {
                  l.href = h.url,
                  l.href = l.href,
                  h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
              } catch (e) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
          _t(It, h, n, E),
          c)
              return E;
          (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
          h.type = h.type.toUpperCase(),
          h.hasContent = !Mt.test(h.type),
          o = h.url.replace(Lt, ""),
          h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
          h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
          delete h.data),
          !1 === h.cache && (o = o.replace(Ht, "$1"),
          d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
          h.url = o + d),
          h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
          (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
          E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
          for (p in h.headers)
              E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
              return E.abort();
          if (C = "abort",
          m.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          i = _t(Wt, h, n, E)) {
              if (E.readyState = 1,
              f && y.trigger("ajaxSend", [E, h]),
              c)
                  return E;
              h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                  E.abort("timeout")
              }, h.timeout));
              try {
                  c = !1,
                  i.send(b, k)
              } catch (e) {
                  if (c)
                      throw e;
                  k(-1, e)
              }
          } else
              k(-1, "No Transport");
          function k(t, n, r, s) {
              var l, p, d, b, T, C = n;
              c || (c = !0,
              u && e.clearTimeout(u),
              i = void 0,
              a = s || "",
              E.readyState = t > 0 ? 4 : 0,
              l = t >= 200 && t < 300 || 304 === t,
              r && (b = Xt(h, E, r)),
              b = Ut(h, b, E, l),
              l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
              (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
              p = b.data,
              l = !(d = b.error))) : (d = C,
              !t && C || (C = "error",
              t < 0 && (t = 0))),
              E.status = t,
              E.statusText = (n || C) + "",
              l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
              E.statusCode(x),
              x = void 0,
              f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
              m.fireWith(g, [E, C]),
              f && (y.trigger("ajaxComplete", [E, h]),
              --w.active || w.event.trigger("ajaxStop")))
          }
          return E
      },
      getJSON: function(e, t, n) {
          return w.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return w.get(e, void 0, t, "script")
      }
  }),
  w.each(["get", "post"], function(e, t) {
      w[t] = function(e, n, r, i) {
          return g(n) && (i = i || r,
          r = n,
          n = void 0),
          w.ajax(w.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          }, w.isPlainObject(e) && e))
      }
  }),
  w._evalUrl = function(e) {
      return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
      })
  }
  ,
  w.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (g(e) && (e = e.call(this[0])),
          t = w(e, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && t.insertBefore(this[0]),
          t.map(function() {
              var e = this;
              while (e.firstElementChild)
                  e = e.firstElementChild;
              return e
          }).append(this)),
          this
      },
      wrapInner: function(e) {
          return g(e) ? this.each(function(t) {
              w(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = w(this)
                , n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = g(e);
          return this.each(function(n) {
              w(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              w(this).replaceWith(this.childNodes)
          }),
          this
      }
  }),
  w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e)
  }
  ,
  w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }
  ,
  w.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (e) {}
  }
  ;
  var Vt = {
      0: 200,
      1223: 204
  }
    , Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials"in Gt,
  h.ajax = Gt = !!Gt,
  w.ajaxTransport(function(t) {
      var n, r;
      if (h.cors || Gt && !t.crossDomain)
          return {
              send: function(i, o) {
                  var a, s = t.xhr();
                  if (s.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                      for (a in t.xhrFields)
                          s[a] = t.xhrFields[a];
                  t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                  t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                  for (a in i)
                      s.setRequestHeader(a, i[a]);
                  n = function(e) {
                      return function() {
                          n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                          "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                              binary: s.response
                          } : {
                              text: s.responseText
                          }, s.getAllResponseHeaders()))
                      }
                  }
                  ,
                  s.onload = n(),
                  r = s.onerror = s.ontimeout = n("error"),
                  void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                      4 === s.readyState && e.setTimeout(function() {
                          n && r()
                      })
                  }
                  ,
                  n = n("abort");
                  try {
                      s.send(t.hasContent && t.data || null)
                  } catch (e) {
                      if (n)
                          throw e
                  }
              },
              abort: function() {
                  n && n()
              }
          }
  }),
  w.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }),
  w.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return w.globalEval(e),
              e
          }
      }
  }),
  w.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
  }),
  w.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(i, o) {
                  t = w("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(),
                      n = null,
                      e && o("error" === e.type ? 404 : 200, e.type)
                  }
                  ),
                  r.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var Yt = []
    , Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = Yt.pop() || w.expando + "_" + Et++;
          return this[e] = !0,
          e
      }
  }),
  w.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
      if (s || "jsonp" === t.dataTypes[0])
          return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          t.converters["script json"] = function() {
              return a || w.error(i + " was not called"),
              a[0]
          }
          ,
          t.dataTypes[0] = "json",
          o = e[i],
          e[i] = function() {
              a = arguments
          }
          ,
          r.always(function() {
              void 0 === o ? w(e).removeProp(i) : e[i] = o,
              t[i] && (t.jsonpCallback = n.jsonpCallback,
              Yt.push(i)),
              a && g(o) && o(a[0]),
              a = o = void 0
          }),
          "script"
  }),
  h.createHTMLDocument = function() {
      var e = r.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>",
      2 === e.childNodes.length
  }(),
  w.parseHTML = function(e, t, n) {
      if ("string" != typeof e)
          return [];
      "boolean" == typeof t && (n = t,
      t = !1);
      var i, o, a;
      return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
      t.head.appendChild(i)) : t = r),
      o = A.exec(e),
      a = !n && [],
      o ? [t.createElement(o[1])] : (o = xe([e], t, a),
      a && a.length && w(a).remove(),
      w.merge([], o.childNodes))
  }
  ,
  w.fn.load = function(e, t, n) {
      var r, i, o, a = this, s = e.indexOf(" ");
      return s > -1 && (r = vt(e.slice(s)),
      e = e.slice(0, s)),
      g(t) ? (n = t,
      t = void 0) : t && "object" == typeof t && (i = "POST"),
      a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments,
          a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
          a.each(function() {
              n.apply(this, o || [e.responseText, t, e])
          })
      }
      ),
      this
  }
  ,
  w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      w.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, function(t) {
          return e === t.elem
      }).length
  }
  ,
  w.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
          "static" === c && (e.style.position = "relative"),
          s = f.offset(),
          o = w.css(e, "top"),
          u = w.css(e, "left"),
          (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
          i = r.left) : (a = parseFloat(o) || 0,
          i = parseFloat(u) || 0),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using"in t ? t.using.call(e, p) : f.css(p)
      }
  },
  w.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return void 0 === e ? this : this.each(function(t) {
                  w.offset.setOffset(this, e, t)
              });
          var t, n, r = this[0];
          if (r)
              return r.getClientRects().length ? (t = r.getBoundingClientRect(),
              n = r.ownerDocument.defaultView,
              {
                  top: t.top + n.pageYOffset,
                  left: t.left + n.pageXOffset
              }) : {
                  top: 0,
                  left: 0
              }
      },
      position: function() {
          if (this[0]) {
              var e, t, n, r = this[0], i = {
                  top: 0,
                  left: 0
              };
              if ("fixed" === w.css(r, "position"))
                  t = r.getBoundingClientRect();
              else {
                  t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                  while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                      e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                  i.left += w.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - i.top - w.css(r, "marginTop", !0),
                  left: t.left - i.left - w.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var e = this.offsetParent;
              while (e && "static" === w.css(e, "position"))
                  e = e.offsetParent;
              return e || be
          })
      }
  }),
  w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function(r) {
          return z(this, function(e, r, i) {
              var o;
              if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
              void 0 === i)
                  return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
      }
  }),
  w.each(["top", "left"], function(e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
          if (n)
              return n = Fe(e, t),
              We.test(n) ? w(e).position()[t] + "px" : n
      })
  }),
  w.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          w.fn[r] = function(i, o) {
              var a = arguments.length && (n || "boolean" != typeof i)
                , s = n || (!0 === i || !0 === o ? "margin" : "border");
              return z(this, function(t, n, i) {
                  var o;
                  return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                  Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
              }, t, a ? i : void 0, a)
          }
      })
  }),
  w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      w.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }),
  w.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }),
  w.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }),
  w.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t],
      t = e,
      e = n),
      g(e))
          return r = o.call(arguments, 2),
          i = function() {
              return e.apply(t || this, r.concat(o.call(arguments)))
          }
          ,
          i.guid = e.guid = e.guid || w.guid++,
          i
  }
  ,
  w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0)
  }
  ,
  w.isArray = Array.isArray,
  w.parseJSON = JSON.parse,
  w.nodeName = N,
  w.isFunction = g,
  w.isWindow = y,
  w.camelCase = G,
  w.type = x,
  w.now = Date.now,
  w.isNumeric = function(e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }
  ,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return w
  });
  var Jt = e.jQuery
    , Kt = e.$;
  return w.noConflict = function(t) {
      return e.$ === w && (e.$ = Kt),
      t && e.jQuery === w && (e.jQuery = Jt),
      w
  }
  ,
  t || (e.jQuery = e.$ = w),
  w
});

;//# sourceMappingURL=scripts.js.map
