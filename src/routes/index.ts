import routeManager from "./config/router";
import createServer from "./config/server";

/* Route management */
routeManager.get("/", (req, res) => res.send("Hello world"));

/* Export */

export { createServer, routeManager };
