import React from "react";
import { ScrollView, StatusBar } from "react-native";

import placeQuestions from "../data/place";
import exerciseQuestions from "../data/exercise";
import timeQuestions from "../data/time";
import spendQuestions from "../data/spend";
import knowledgeQuestions from "../data/knowledge";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Knowledge"
      color="#20b2aa"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Knowledge",
          questions: knowledgeQuestions,
          color: "#20b2aa"
        })
      }
    />
    <RowItem
      name="Place"
      color="#8b008b"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Place",
          questions: placeQuestions,
          color: "#8b008b"
        })
      }
    />
    <RowItem
      name="Exercise"
      color="#ff69b4"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Exercise",
          questions: exerciseQuestions,
          color: "#ff69b4"
        })
      }
    />
    <RowItem
      name="Time"
      color="#6495ed"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Time",
          questions: timeQuestions,
          color: "#6495ed"
        })
      }
    />
    <RowItem
      name="Spend"
      color="#b8860b"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Spend",
          questions: spendQuestions,
          color: "#b8860b"
        })
      }
    />
  </ScrollView>
);
