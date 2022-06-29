import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fibotalk from 'fibo-react-native';
import { createClient } from '@segment/analytics-react-native';

export default function App() {
  // let fibo = new Fibotalk("d89404ba878c4f874a0171da");
  // fibo.fibotalkSettings = {
  //   user: { userId: "shubham1", name: "Shubham" }
  // };
  // // fibo.setEvent("login");
  // setTimeout(function () {
  //   fibo.setEvent("sample");
  //   newUser();
  // }, 3000);

  const segmentClient = createClient({
    writeKey: "tT2WJwEA1YvPCpDh25hahF06kF4ty392",
    trackAppLifecycleEvents: true,
    //additional config options
  });
  analytics.identify("a user's id", {
    email: "jsmith@example.com",
    name: "John Smith"
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function newUser() {
  setTimeout(() => {
    let nf = new Fibotalk("d89404ba878c4f874a0171da");
    setTimeout(() => {
      nf.setEvent("new eve");
    }, 3000);
  }, 3000)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});