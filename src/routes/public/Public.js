import Counter from "../../components/Counter/Counter";
import Init from "../../components/Init/Init";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Forms/Register";

// Paths
export const root = { path: "/", text: "Inicio" }
export const counter = { path: "/counter", text: "Contador" }
export const form = { path: "/form", text: "Formulario" }
const notFound = "*"

export const paths = [root, counter, form]

// routes
export const publicRoutes = [
    {
        path: root.path,
        exact: true,
        element: <Init />
    },
    {
        path: counter.path,
        exact: true,
        element: <Counter />
    },
    {
        path: form.path,
        exact: true,
        element: <Register />
    },
    {
        path: notFound,
        exact: false,
        element: <NotFound />
    },
]