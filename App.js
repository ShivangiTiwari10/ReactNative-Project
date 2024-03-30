import { StyleSheet, Text, View } from "react-native";

import React, { useState, useEffect } from "react";
import { TextInput, Button, ScrollView } from "react-native";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import AuthScreen from "./screens/AuthScreen";
import AuthenticatedScreen from "./screens/AuthenticatedScreen";

const firebaseConfig = {
  apiKey: "AIzaSyDvE-KX5XBZSGVBL-DxZZKCbgvjFYMa8g0",
  authDomain: "react-native-login-52680.firebaseapp.com",
  projectId: "react-native-login-52680",
  storageBucket: "react-native-login-52680.appspot.com",
  messagingSenderId: "823686239188",
  appId: "1:823686239188:web:1a1d8b57d5f8b66ff43c41",
  measurementId: "G-Z49JLCGR2J",
};
const app = initializeApp(firebaseConfig);

export default App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log("User logged out successfully!");
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully!");
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully!");
        }
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        // Show user's email if user is authenticated
        <AuthenticatedScreen
          user={user}
          handleAuthentication={handleAuthentication}
        />
      ) : (
        // Show sign-in or sign-up form if user is not authenticated
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  or: {
    fontSize: 15,
    marginBottom: 16,
    color: "#999999",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
  },
  discription: {
    fontSize: 15,
    marginBottom: 16,
    color: "#999999",
    textAlign: "left",
  },
  forgot: {
    fontSize: 15,
    marginBottom: 16,
    color: "#999999",
    textAlign: "right",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
