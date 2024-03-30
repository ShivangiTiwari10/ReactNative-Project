import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, ScrollView } from "react-native";

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>LoginSuccessful</Text>
      <Text style={styles.discription}>
        An event has been created and the invite hase been sent to you on mail
      </Text>
      {/* <Text style={styles.emailText}>{user.email}</Text> */}
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};
export default AuthenticatedScreen;

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
