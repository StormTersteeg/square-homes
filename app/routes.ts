import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("/property/:id/:slug", "routes/property/index.tsx"),
  route("/properties/:search?", "routes/listings/index.tsx"),
  route("/services", "routes/services/index.tsx"),
  route("/contact", "routes/contact/index.tsx"),
] satisfies RouteConfig;
