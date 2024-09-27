import React from "react";
import { Stack } from "expo-router";

const OrderProgressLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="delivery"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Stack>
  );
};

export default OrderProgressLayout;
