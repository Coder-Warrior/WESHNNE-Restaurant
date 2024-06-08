let bar = document.querySelectorAll("i")[0];
let ulXbutton = document.querySelectorAll("ul p")[0];
let SideBar = document.querySelectorAll("ul")[0];


bar.onclick = () => {
    SideBar.style.right = "0";
}

ulXbutton.onclick = () => {
    SideBar.style.right = "-223px";
}

for (let i = 0; i < SideBar.getElementsByTagName("li").length; i++) {
    SideBar.getElementsByTagName("li")[i].onclick = () => {
    SideBar.style.right = "-223px";
}
}

const orders = document.querySelectorAll(".order");
const paragraph = document.getElementById("AboutWeshnne").getElementsByClassName("title")[0];
const featureTitle = document.querySelectorAll(".feature")[0];
const a = document.querySelectorAll("footer a")[0];

const intersectingElements = new Set();
const intersectTimers = new Map();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
            if (!intersectTimers.has(target)) {
                const timer = setTimeout(() => {
                    if (intersectingElements.has(target)) {
                        target.getElementsByTagName("img")[0].style.marginTop = "0";
                    }
                }, 200);
                intersectTimers.set(target, timer);
            }
            intersectingElements.add(target);
        } else {
            intersectingElements.delete(target);
            if (intersectTimers.has(target)) {
                clearTimeout(intersectTimers.get(target));
                intersectTimers.delete(target);
            }
        }
    });
}, { threshold: 0.5 });

orders.forEach(order => {
    observer.observe(order);
});

const paragraphObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
            if (!intersectTimers.has(target)) {
                const timer = setTimeout(() => {
                    if (intersectingElements.has(target)) {
                        for (let i = 1; i < document.getElementById("AboutWeshnne").children.length; i++) {
                            document.getElementById("AboutWeshnne").children[i].setAttribute("class", "pDiv");
                        }
                    }
                }, 300);
                intersectTimers.set(target, timer);
            }
            intersectingElements.add(target);
        } else {
            intersectingElements.delete(target);
            if (intersectTimers.has(target)) {
                clearTimeout(intersectTimers.get(target));
                intersectTimers.delete(target);
            }
        }
    });
}, { threshold: 0.5 });

  paragraphObserver.observe(paragraph);

  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
            console.log(target)
            if (!intersectTimers.has(target)) {
                const timer = setTimeout(() => {
                    if (intersectingElements.has(target)) {
                        for (let i = 0; i < document.getElementsByClassName("feature-title").length; i++) {
                            document.getElementsByClassName("feature-title")[i].setAttribute("id", `a${i}`);
                        }
                    }
                }, 300);
                intersectTimers.set(target, timer);
            }
            intersectingElements.add(target);
        } else {
            intersectingElements.delete(target);
            if (intersectTimers.has(target)) {
                clearTimeout(intersectTimers.get(target));
                intersectTimers.delete(target);
            }
        }
    });
}, { threshold: 0.5 });

featureObserver.observe(featureTitle);

const aObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
            console.log(target)
            if (!intersectTimers.has(target)) {
                const timer = setTimeout(() => {
                    if (intersectingElements.has(target)) {
                        for (let i = 0; i < document.querySelectorAll("footer a").length; i++) {
                            document.querySelectorAll("footer a")[i].setAttribute("class", `active`);
                        }
                    }
                }, 300);
                intersectTimers.set(target, timer);
            }
            intersectingElements.add(target);
        } else {
            intersectingElements.delete(target);
            if (intersectTimers.has(target)) {
                clearTimeout(intersectTimers.get(target));
                intersectTimers.delete(target);
            }
        }
    });
}, { threshold: 0.5 });

aObserver.observe(a);