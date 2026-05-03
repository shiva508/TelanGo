import { Platform, ScrollView } from "react-native";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import HomeHeader from "@/app/components/HomeHeader";
import { globalStyles } from "@/global/globalStyle";
import { getMeals, Meal } from "@/storage/meals";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import CopyButton from "../components/CopyButton";
import MacroGrid from "../components/MacroGrid";
import RecentMeals from "../components/RecentMeals";
import ReminderToggle from "../components/ReminderToggle";
import ShareButton from "../components/ShareButton";

export default function Index() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Loaded meals:", data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <HomeHeader />
      <ShareButton meals={meals} />
      <CopyButton meals={meals} />
      <MacroGrid meals={meals} />
      {Platform.OS !== "android" && <ReminderToggle />}
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}
