import React from "react";
import { Stack } from "expo-router";

const BasketScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Stack>
  );
};

export default BasketScreenLayout;
