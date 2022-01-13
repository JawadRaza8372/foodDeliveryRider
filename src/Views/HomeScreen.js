import React from "react";
import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import BookingCard from "../components/BookingCard";
import ScreenHeader from "../components/ScreenHeader";

const HomeScreen = ({ navigation }) => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24,
  ];
  console.log(data.length);
  return (
    <>
      <View style={styles.mainContentCont}>
        <ScreenHeader title={"Your Deliveries"} />
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => {
            return (
              <BookingCard
                title={item}
                isDelivered={item % 2 === 0 ? true : false}
                onCheck={() => navigation.navigate("detailScrn")}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContentCont: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
  },
});
