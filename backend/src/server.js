import express, { application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
<<<<<<< HEAD
import { db } from "./db";
=======
import { db } from "./db.js";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
>>>>>>> 81b5ab1e833503ace850781c96b9b9bcc8a8274f

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  console.log('login requested');
  res.send('thisisafakexsstokenforthedemo').status(200).end();
});

app.post('/steal', (req, res) => {
  console.log('Cookie Stolen => ', req.body);
});

const usersRef = collection(db, "users");
const postsRef = collection(db, "posts");

app.get("/user", async (req, res) => {
  try {
    const userDocRef = doc(db, "users", "test");
    const userSnap = await getDoc(userDocRef);
    const user = {...userSnap.data() };
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/user", async (req, res) => {
  try {
    const { username, imgUrl, displayText, hyperlink } = req.body;
    const userDocRef = doc(db, "users", "test");
    await updateDoc(userDocRef, {
      username,
      imgUrl,
      displayText,
      hyperlink,
    });
    const userSnap = await getDoc(userDocRef);
    const user = {...userSnap.data() };
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const postsSnap = await getDocs(postsRef);
    let posts = [];
    postsSnap.forEach((postSnap) => {
      console.log(postSnap.id, postSnap.data());
      posts.push({...postSnap.data(), postId: postSnap.id });
    })
    res.status(200).json({
      posts
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});
