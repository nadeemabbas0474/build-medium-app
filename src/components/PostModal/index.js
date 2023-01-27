import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { MediumContext } from "@/context/MediumContexxt";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

const style = {
  wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  largeField: ``,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

export default function PostModal({onRequestClose}) {
  const { user } = useContext(MediumContext);
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "articles"), {
      author: user.email,
      bannerImage: bannerImage,
      body: body,
      brief: brief,
      category: category,
      postLenght: Number(postLength),
      postedOn: serverTimestamp(),
      title: title,
    });
    onRequestClose()
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Upload a Post</div>
      <div className={style.smallField}>
        <span className={style.fieldTitle}>Title</span>
        <span className={style.inputContainer}>
          <input
            className={style.inputField}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>
      <div className={style.smallField}>
        <span className={style.fieldTitle}>Brief</span>
        <span className={style.inputContainer}>
          <input
            className={style.inputField}
            type="text"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </span>
      </div>
      <div className={style.smallField}>
        <span className={style.fieldTitle}>Banner Image URL</span>
        <span className={style.inputContainer}>
          <input
            className={style.inputField}
            type="text"
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>
      <div className={style.smallField}>
        <span className={style.fieldTitle}>Category</span>
        <span className={style.inputContainer}>
          <input
            className={style.inputField}
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>
      <div className={style.smallField}>
        <span className={style.fieldTitle}>
          Estimated Read Length (in minutes)
        </span>
        <span className={style.inputContainer}>
          <input
            className={style.inputField}
            type="text"
            value={postLength}
            onChange={(event) => setPostLength(event.target.value)}
          />
        </span>
      </div>

      <div className={style.smallField}>
        <span className={style.fieldTitle}>Article Text</span>
        <span className={style.inputContainer}>
          <textarea
            className={style.inputField}
            value={body}
            rows={12}
            onChange={(event) => setBody(event.target.value)}
          />
        </span>
      </div>

      <button onClick={addPostToFirebase} className={style.accentedButton}>
        Submit
      </button>
    </div>
  );
}
