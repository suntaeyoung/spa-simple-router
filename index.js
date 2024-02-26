import createRouter from "./router.js";
import firstPage from "./pages/firstPage.js";
import secondPage from "./pages/secondPage.js";
import thirdPage from "./pages/thirdPage.js";

const container = document.getElementById("root");
const router = createRouter();

const pages = {
  "/": () => container.innerHTML = firstPage(),
  "/second": () => container.innerHTML = secondPage(),
  "/third": () => container.innerHTML = thirdPage(),
};

router.addRoute("/", pages["/"]).addRoute("/second", pages["/second"]).addRoute("/third", pages["/third"]).start();

window.addEventListener("click", (event) => {
  if (event.target.matches("[data-navigate]")) {
    router.navigate(event.target.dataset.navigate);
  }
});

