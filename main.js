function login(token) {
	setInterval(() => {
		document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
	}, 50);
	setTimeout(() => {
		location.reload();
	}, 2500);
}

const addSignout = () => {
	if(document.getElementById("oeinout") != null) return;
	const inner = `<svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" style="width: 1.5rem;height: fit-content;"><path d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z" fill="#B5BAC1"></path></svg>`;
	const outer = document.createElement("div");
	outer.innerHTML = inner;
	outer.id = "oeinout";
	outer.style = "position: fixed;top: 1rem;right: 1rem;display: flex;z-index: 123123123123;background: #2B2D31;justify-content: center;align-items: center;padding: .3rem;border-radius: 5px;cursor: pointer;";
	outer.addEventListener("click", () => {
		login("");
	});
	document.body.appendChild(outer);
}

const applyTokenUI = () => {
	if(!location.pathname.startsWith("/login")) return;
	if(document.querySelector("form:not([oein=\"\"])") == null) return;
	document.querySelector("form:not([oein=\"\"])").setAttribute("oein","")
	// remove qr
	while(document.querySelector("form > div:last-child > div:last-child").childElementCount > 1) document.querySelector("form > div:last-child > div:last-child > div:last-child").remove();
	// change heading
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").innerText = "We're so excited to hack discord again!";
	// remove id input
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:first-child").remove();
	// change password to token
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:first-child > label:first-child").innerText = "TOKEN *";
	// remove forget your password
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > div").remove();
	// remove signup
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:last-child").remove();
	// add id
	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > input").id = "oeininput";

	const signinBtn = document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:last-child");
	const signinBtnClass = signinBtn.className;
	const div = signinBtn.children[0];
	const divClass = div.className;

	const newBtn = document.createElement("button");
	newBtn.className = signinBtnClass;
	const inner = document.createElement("div");
	inner.className = divClass;
	inner.innerText = "Hack now!";
	newBtn.appendChild(inner);
	signinBtn.remove();

	document.querySelector("form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").appendChild(newBtn);
	newBtn.addEventListener("click", () => {
		const inp = document.getElementById("oeininput");
		const ntoken = inp.value;
		login(ntoken);
	});
}

const applyUI = () => {
	addSignout();
	applyTokenUI();
}

applyUI();
setInterval(() => {
	applyUI();
}, 1000);
