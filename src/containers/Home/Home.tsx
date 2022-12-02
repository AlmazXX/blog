import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";
import { IPost, IPostsList } from "../../types";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const postsResponse = await axiosApi.get<IPostsList>("/posts.json");

      if (postsResponse.data === null) return setPosts([]);

      const posts = Object.keys(postsResponse.data)
        .map((key) => ({
          ...postsResponse.data[key],
          id: key,
        }))
        .sort((a, b) => (b.date > a.date ? 1 : -1));
      console.log(posts);
      setPosts(posts);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);

  return (
    <div className="mt-3">
      <h4>My Blog</h4>
      {loading ? (
        <Spinner />
      ) : posts.length ? (
        <Posts posts={posts} />
      ) : (
        <p>There's no posts</p>
      )}
    </div>
  );
};

export default Home;