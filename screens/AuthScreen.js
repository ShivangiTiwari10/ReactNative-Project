import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, ScrollView } from "react-native";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { useEffect, useState } from "react";

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
}) => {
  // const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "823686239188-nig343va510ko491josmdtnk0q3f0a0c.apps.googleusercontent.com",
  //   });
  // }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo({ usrInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View>
      <Text style={styles.title}>{"Log In to Your Account"}</Text>
      <Text style={styles.discription}>
        {isLogin
          ? "Please Sign in to your account"
          : "Create an account to start looking for the food you like "}
      </Text>
      <Text style={styles.subtitle}>{"Email Addres"}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        autoCapitalize="none"
      />
      <Text style={styles.subtitle}>{"Password"}</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <Text style={styles.forgot}>Forgot Password? </Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? "Sign In" : "Register"}
          onPress={handleAuthentication}
          color="#3498db"
        />
      </View>

      <Text style={styles.or}>Or Sign In with</Text>
      <Text
        style={styles.or}
        onPress={() => {
          signIn;
        }}
      >
        Sign In with Google
      </Text>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText}>
          {isLogin
            ? "Dont have an account? Register"
            : // ? "Need an account? Sign Up"
              "Already have an account? Sign In"}
        </Text>
      </View>
    </View>
  );
};

export default AuthScreen;
const styles = StyleSheet.create({
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
});
