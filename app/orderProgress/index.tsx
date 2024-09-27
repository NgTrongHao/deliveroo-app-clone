import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useRouter } from "expo-router";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/orderProgress/delivery");
    }, 5000);
  });

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-8 left-4 bg-gray-100 p-2 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/order-loading.gif")}
        className="h-96 w-96"
      />
      <Text className="text-white text-3xl font-bold mt-5">
        Preparing your order
      </Text>
      <Text className="text-white text-lg mt-2">
        Please wait while we prepare your order
      </Text>

      <View className="absolute bottom-0 w-full p-5">
        <TouchableOpacity
          onPress={() => router.push("/orderProgress/delivery")}
          className="rounded-lg bg-white p-4 items-center"
        >
          <Text className="text-center text-[#00CCBB] text-lg font-bold">
            Check Order Status
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
