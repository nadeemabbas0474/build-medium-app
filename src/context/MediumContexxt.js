import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            data: {
                ...doc.data()
            }
        }
      }))
    };
    getUsers()
  }, []);

  useEffect(() => {
    const getPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "articles"));
        setPosts(querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                data: {
                    author: doc.data().author,
                    body: doc.data().body,
                    bannerImage: doc.data().bannerImage,
                    brief: doc.data().brief,
                    category: doc.data().category,
                    postLenght: doc.data().postLenght,
                    postedOn: doc.data().postedOn.toDate(),
                    title: doc.data().title,
                    
                }
            }
        }))
    }
    getPosts()
  }, [])

  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
