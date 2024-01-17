import { Route, Routes, useParams } from "react-router-dom"
import "./Post.css"
import posts from "assets/json/posts.json"
import PostModelo from "Componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";


const Post = () => {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>

                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}

export default Post