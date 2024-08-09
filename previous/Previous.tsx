import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import fetchUserData from "../api/Data";

const Previous = () => {
  const route = useRoute();
  const { updatedParam }: any = route.params || {};
  const [userData, setUserData]: any = React.useState();
  React.useEffect(() => {
    fetchUserData(updatedParam).then((data) => setUserData(data[0]));
  }, [updatedParam]);

  return userData ? (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image
            source={{
              uri:
                userData?.avatar ||
                "https://robohash.org/ipsavoluptatemnon.png?size=300x300&set=set1",
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.detailsContainer}>
            <View style={styles.nameBox}>
              <View style={styles.infoBox}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.text}>{userData?.first_name}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.text}>{userData?.last_name}</Text>
              </View>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.text}>{userData?.email}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.text}>{userData?.phone_number}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.text}>
                {userData?.address.street_name}{" "}
                {userData?.address.street_address}
              </Text>
              <Text style={styles.text}>
                {userData?.address.city}, {userData?.address.state},{" "}
                {userData?.address.country} - {userData?.address.zip_code}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Credit Card Number</Text>
              <Text style={styles.text}>{userData?.credit_card.cc_number}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Employment</Text>
              <Text style={styles.text}>
                Title: {userData?.employment.title}
              </Text>
              <Text style={styles.text}>
                Key Skill: {userData?.employment.key_skill}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Subscription</Text>
              <Text style={styles.text}>
                Plan: {userData?.subscription.plan}
              </Text>
              <Text style={styles.text}>
                Status: {userData?.subscription.status}
              </Text>
              <Text style={styles.text}>
                Payment Method: {userData?.subscription.payment_method}
              </Text>
              <Text style={styles.text}>
                Term: {userData?.subscription.term}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Social Insurance Number</Text>
              <Text style={styles.text}>
                {userData?.social_insurance_number}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Birth Date</Text>
              <Text style={styles.text}>{userData?.date_of_birth}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.loadingText}>Loading...</Text>
    </SafeAreaView>
  );
};

export default Previous;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  nameBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  infoBox: {
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  text: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 6,
    color: "#555",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  loadingText: {
    textAlign: "center",
    marginTop: "50%",
    fontSize: 18,
    color: "#888",
  },
});
