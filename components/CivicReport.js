import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function CivicReport() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.subHeading}>
        Track your reported issue and help improve your community.
      </Text>

      <View style={styles.box}>
        <View>
          <Text style={styles.issueText}>Total Issues</Text>
          <Text style={styles.issueValue}>0</Text>
        </View>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      </View>

      <View style={styles.box}>
        <View>
          <Text style={styles.issueText}>Pending</Text>
          <Text style={styles.issueValue}>0</Text>
        </View>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      </View>

      <View style={styles.box}>
        <View>
          <Text style={styles.issueText}>Resolved</Text>
          <Text style={styles.issueValue}>0</Text>
        </View>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },

  heading: {
    alignSelf: "center",
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subHeading: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    color: "#555",
  },

  box: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    width: "85%",
    marginVertical: 10,
    padding: 20,
    borderRadius: 16,
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
  },

  issueText: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: "600",
  },

  issueValue: {
    fontSize: 22,
    fontWeight: "bold",
  },

  logo: {
    width: 50,
    height: 50,
  },
});
