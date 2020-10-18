import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Halaman Profil</Text>
    </View>
  );
};
export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
