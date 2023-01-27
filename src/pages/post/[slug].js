import React, { useContext, useEffect, useState } from "react";
import MainArticle from "@/components/MainArticle";
import ReadersNav from "@/components/ReadersNav";
import Recommendations from "@/components/Recommendations";
import { MediumContext } from "@/context/MediumContexxt";
import { useRouter } from "next/router";

const style = {
  content: "flex",
};
export default function Post() {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));

    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);

  return (
    <div className={style.content}>
      <ReadersNav />
      <MainArticle post={post} author={author} />
      <Recommendations author={author}/>
    </div>
  );
}
