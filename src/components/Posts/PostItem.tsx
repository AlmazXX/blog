import { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../types";

interface Props {
  post: IPost;
}
const PostItem: FC<Props> = ({ post }) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">
            Created on: <span>{post.date}</span>
          </p>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;