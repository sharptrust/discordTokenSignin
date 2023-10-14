const f = setInterval,
  g = document,
  h = (i) => g.querySelector(i),
  m = ":first-child",
  q = (x) => ":nth-child(" + x + ")",
  w = ":last-child",
  k = `form>div${q(2)}>div${m}>div${m}>div${q(2)}`,
  lsto = g.body.appendChild(g.createElement`iframe`).contentWindow.localStorage,
  isSignedIn = () => typeof lsto.token != "undefined",
  a = (i) => {
    f(() => {
      lsto.token = i;
    }, 50),
      setTimeout(() => {
        location.reload();
      }, 2500);
  },
  b = () => {
    if (null != h("#oeinout")) {
      if (!isSignedIn()) h("#oeinout").remove();
      return;
    }
    let i = g.createElement("div");
    (i.innerHTML =
      '<svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" style="width: 1.5rem;height: fit-content;"><path d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z" fill="#B5BAC1"></path></svg>'),
      (i.id = "oeinout"),
      (i.style =
        "position:fixed;top:1rem;right:1rem;display:flex;z-index:123123123123;background:#2B2D31;justify-content:center;align-items:center;padding:.3rem;border-radius:5px;cursor:pointer;"),
      i.addEventListener("click", () => {
        lsto.MultiAccountStore = null;
        a(null);
      }),
      g.body.appendChild(i);
  },
  c = () => {
    if (
      !location.pathname.startsWith("/login") ||
      null == h('form:not([oein=""])')
    )
      return;
    for (
      h('form:not([oein=""])').setAttribute("oein", "");
      h(`form>div${w}>div${w}`).childElementCount > 1;

    )
      h(`form>div${w}>div${w}>div${w}`).remove();
    (h(`form>div${q(2)}>div${m}>div${m}>div${m}>div${q(2)}`).innerText =
      "We're so excited to hack discord again!"),
      h(k + `>div${m}`).remove(),
      (h(k + `>div${m}>label${m}`).innerText = "TOKEN *"),
      h(k + `>button${q(2)}>div`).remove(),
      h(k + `>div${w}`).remove(),
      (h(k + `>div>div>input`).id = "oeininput");
    let i = h(k + `>button${w}`),
      e = i.className,
      t = i.children[0],
      d = t.className,
      l = g.createElement("button");
    l.className = e;
    let n = g.createElement("div");
    (n.className = d),
      (n.innerText = "Hack now!"),
      l.appendChild(n),
      i.remove(),
      h(k).appendChild(l),
      l.addEventListener("click", () => {
        let i = g.getElementById("oeininput"),
          e = i.value;
        a(e);
      });
  },
  d = () => {
    b(), c();
  };
d(),
  f(() => {
    d();
  }, 1e3);
