import { globalStyles } from "@/global/globalStyle";
import { Meal } from "@/storage/meals";
import { Text, View } from "react-native";
import MealItem from "./MealItem";

type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void;
};

export default function RecentMeals({ meals, onDelete }: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals.map((meal, index) => (
          <MealItem
            key={index}
            id={meal.id}
            name={meal.name}
            calories={meal.calories}
            protein={meal.protein}
            carbs={meal.carbs}
            fat={meal.fat}
            onDelete={onDelete}
          />
        ))
      )}
    </View>
  );
}
