import classes from "./PostsPage.module.css";
import { Fragment, useState } from "react";

import { useQuery } from "react-query";

import MenuBar from "../../Layout/MenuBar/MenuBar";
import Footer from "../../Layout/Footer/Footer";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { fetchHandler } from "../../fetchApi";
import { useParams } from "react-router-dom";
import ErrorMsg from "../Error/ErrorMsg";

const PostsPage = (props) => {
  const [showPost, setShowPost] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const params = useParams();

  const { data, error, isError, isLoading } = useQuery("posts", () =>
    fetchHandler(`users/${params.postId}/posts`)
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMsg>{error.message}</ErrorMsg>;
  }
  console.log(props);

  const showPostHandler = (id) => {
    setShowPost((prevShowPost) => (id === currentPost ? !prevShowPost : true));
    setCurrentPost(id);
  };
  return (
    <>
      <MenuBar />
      <div className={classes.postsPageContainer}>
        <ul className={classes.postsList}>
          {data.map((post) => {
            return (
              <li
                className={classes.postCard}
                key={post.id}
                onClick={() => showPostHandler(post.id)}
              >
                <h2>{post.title}</h2>

                {showPost && post.id === currentPost ? (
                  <p>{post.body}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PostsPage;
