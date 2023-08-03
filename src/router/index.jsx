import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import Post, { loaderPost } from "../pages/Post";

// createBrowserRouter recibe un array y cada objeto que se indique
//va a ser la configuracion de la ruta
// luego llamamos este componente router en el main.jsx
// errorElemente va de la mano con el hook useRouteError

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />, // anida elementos comunes de las paginas como el header o footer
    errorElement: <NotFound />, // se puede colocar un solo errorElement
    children: [
      // children contiene las rutas anidadas y recibe un array (que puede ser de objetos)
      {
        errorElement: <NotFound />,
        children: [
          // este subchildren permite mostrar la pagina de error "NotFound"
          //con el Layout configurado en LayoutPublic
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
          },
        ],
      },
      /* {
        index: true, // esto indica que el path: "/" que se encuentra en el primer nivel es la página principal
        //path: "/", // path: "/" puede quedar tal cual
        element: <Home />,
        //errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
        //errorElement: <NotFound />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlog, // aqui se llama a la funcion creada loaderBlog que proviene de Blog.jsx
        // ahora el componente tendrá acceso a los posts
        // es importante que sea una promesa
        //errorElement: <NotFound />,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      }, */
    ],
  },
  /*{
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
  },*/
]);
