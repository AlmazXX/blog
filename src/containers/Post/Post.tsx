import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import { IPostApi } from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPostApi>();
  const [loading, setLoading] = useState(false);

  const fetchOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const postResponse = await axiosApi.get<IPostApi>(`/posts/${id}.json`);
      setPost(postResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOnePost().catch(console.error);
  }, [fetchOnePost]);

  return (
    <div className="row mt-3">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4>{post?.title}</h4>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export default Post;
