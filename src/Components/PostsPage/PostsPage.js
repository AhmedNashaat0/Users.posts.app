import classes from "./PostsPage.module.css";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHandler } from "../../fetchApi";
import { FaUserAlt } from "react-icons/fa";

import { useQuery } from "react-query";

import MenuBar from "../../Layout/MenuBar/MenuBar";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import ErrorMsg from "../Error/ErrorMsg";
import Footer from "../../Layout/Footer/Footer";

const PostsPage = () => {
  const [showPost, setShowPost] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const params = useParams();

  const { data, error, isError, isLoading } = useQuery("posts", () =>
    fetchHandler(`users/${params.userId}/posts`)
  );
  if (isLoading) {
    return <LoadingIcon />;
  }
  if (isError) {
    return <ErrorMsg>{error.message}</ErrorMsg>;
  }

  const showPostHandler = (id) => {
    setShowPost((prevShowPost) => (id === currentPost ? !prevShowPost : true));
    setCurrentPost(id);
  };
  return (
    <>
      <MenuBar />
      <div className={classes.postsPageContainer}>
        <div className={classes.userName}>
          <FaUserAlt className={classes.userIcon} />
          <span className={classes.name}>{params.name}</span>
        </div>
        <ul className={classes.postsList}>
          {data.map((post) => {
            return (
              <li
                className={classes.postCard}
                key={post.id}
                onClick={() => showPostHandler(post.id)}
              >
                <h2
                  className={`${classes.heading} ${
                    showPost && post.id === currentPost ? classes.addBorder : ""
                  }`}
                >
                  {post.title}
                </h2>
                <p
                  className={`${classes.postBody} ${
                    showPost && post.id === currentPost ? classes.show : ""
                  }`}
                >
                  {post.body}
                </p>
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
