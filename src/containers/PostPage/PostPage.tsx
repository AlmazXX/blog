import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";
import { IPost, IPostApi } from "../../types";

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(false);

  const getOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const postResponse = await axiosApi.get<IPostApi>(`/posts/${id}.json`);
      const post = { ...postResponse.data, id: id! };
      setPost(post);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getOnePost().catch(console.error);
  }, [getOnePost]);

  const deleteOnePost = useCallback(async () => {
    try {
      setLoading(true);
      await axiosApi.delete(`/posts/${id}.json`);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  return (
    <div className="row mt-3">
      {loading ? (
        <Spinner />
      ) : (
        post && <Post post={post} onDelete={deleteOnePost} />
      )}
    </div>
  );
};

export default PostPage;