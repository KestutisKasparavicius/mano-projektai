import type { RouteConfig } from '@react-router/dev/routes';
import { route } from '@react-router/dev/routes';


export default [
    route("/home/:id", "./routes/Home.jsx")
 ] satisfies RouteConfig;