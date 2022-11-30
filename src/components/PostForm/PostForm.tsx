import { ChangeEvent, FC, FormEvent, useState } from "react";
import { PostApi } from "../../types";

interface Props {
  onSubmit: (post: PostApi) => void;
}

const PostForm: FC<Props> = ({ onSubmit }) => {
  const [post, setPost] = useState<PostApi>({ title: "", body: "", date: "" });

  const onPostChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
      date: new Date().toISOString().slice(0, 19),
    }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(post);
    setPost((prev) => ({ ...prev, title: "", body: "", date: "" }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={post.title}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="body">Text</label>
        <textarea
          name="body"
          id="body"
          className="form-control"
          value={post.body}
          onChange={onPostChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default PostForm;