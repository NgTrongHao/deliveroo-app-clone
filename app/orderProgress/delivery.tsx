import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { selectRestaurant } from "@/features/restaurantSlice";
import { useRouter } from "expo-router";
import { PhoneIcon, XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const router = useRouter();
  const restaurant = useSelector((state: RootState) => selectRestaurant(state));
  return (
    <SafeAreaView className="flex-1 pt-8 bg-[#00CCBB]">
      <View>
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => router.navigate("/")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-base">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 minutes</Text>
            </View>
            <Image
              source={require("../../assets/images/food-shipper.gif")}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-400">
            Your order at {restaurant.title} is on the way!
          </Text>
        </View>
      </View>
      <MapView
        mapType="hybrid"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-20">
        <Image
          source={require("../../assets/images/deliveroo.png")}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-base">John Doe</Text>
          <Text className="text-gray-400 text-xs">Your Rider</Text>
        </View>

        <View className="flex-row mr-5 justify-between space-x-2">
          <Text className="text-[#00CCBB] text-lg font-bold">Call</Text>
          <PhoneIcon size={25} color={"#00CCBB"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
