import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";
import { PostApi } from "../../types";

const Add = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createPost = async (post: PostApi) => {
    try {
      await axiosApi.post("/posts.json", post);
      navigate("/");
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-2">
      <h4>Add new post</h4>
      <div className="col-6">
        {loading ? <Spinner /> : <PostForm onSubmit={createPost} />}
      </div>
    </div>
  );
};

export default Add;