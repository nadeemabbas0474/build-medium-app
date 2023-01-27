import { createContext, useEffect, useState } from "react";
import { collection, getDocs,addDoc, setDoc, doc } from "firebase/firestore";
import { db ,auth, provider } from "../../firebase";
import { signInWithPopup } from "@firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null)

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

  const saveUser = async user => {
    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    })
  }


  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user

        setUser(user)
        saveUser(user)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth, user}}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
