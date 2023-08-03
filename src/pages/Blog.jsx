import { Link, useLoaderData } from "react-router-dom";
// el hook useLoaderData da acceso a los posts

const Blog = () => {
  const { posts } = useLoaderData();
  //console.log(posts); se obtiene los posts

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              {blog.id} - {blog.title}
            </Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  );
};
export default Blog;

export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  const posts = await res.json();

  // se debe retornar en un objeto cada post de manera obligatoria
  // tiene que devolver una promesa (en este caso con el fetch)
  // si el nombre de propiedad y el nombre valor coinciden ej return {posts: posts}
  //se puede colocar una sola palabra ej return {posts}
  // ambos casos son equivalentes
  return { posts: posts };
};

// relacionamos el método loaderBlog con la página Blog en index.jsx
