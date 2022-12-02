import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../types";

interface Props {
  post: IPost;
  onDelete: MouseEventHandler;
}

const Post: FC<Props> = ({ post, onDelete }) => {
  return (
    <>
      <h4>{post.title}</h4>
      <p className="small">
        Created on:{" "}
        <span>
          {new Date(post.date).toLocaleString("en-en", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </p>
      <p className="bg-light rounded-3 p-3 lh-lg">{post.body}</p>
      <div className="d-flex gap-3 px-0">
        <Link to={`/posts/${post.id}/edit`} className="btn btn-primary">
          Edit post
        </Link>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete post
        </button>
      </div>
    </>
  );
};

export default Post;