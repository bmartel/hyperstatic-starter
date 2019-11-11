import { hyperstatic } from "@bmartel/hyperstatic";

// App styling
import "./app.css";

// App init imports
import routes from "./app/routes";
import init from "./app/init";
import view from "./app/view";

// Initialize the app
hyperstatic({
  routes,
  init,
  view,
  node: document.getElementById("app")
});

// Enable the service worker when running the build command
if (process.env.NODE_ENV === "production") {
  navigator.serviceWorker.register(`${window.location.origin}/sw.js`);
}
