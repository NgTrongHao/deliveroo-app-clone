import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { selectRestaurant } from "@/features/restaurantSlice";
import {
  removeDishFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "@/features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import { currencyFormat } from "@/utils/currency-format";
import { useRouter } from "expo-router";

interface BasketIconProps {
  closeModal: () => void;
}

const BasketScreen = ({ closeModal }: BasketIconProps) => {
  const router = useRouter();
  const restaurant = useSelector((state: RootState) => selectRestaurant(state));
  const items =
    useSelector((state: RootState) => selectBasketItems(state.basket)) || [];
  const basketTotal = useSelector((state: RootState) =>
    selectBasketTotal(state.basket)
  );

  const [deliveryFee, setDeliveryFee] = useState(0);
  const [deliveryTimeMin, setDeliveryTimeMin] = useState(0);
  const [deliveryTimeMax, setDeliveryTimeMax] = useState(0);

  const dispatch = useDispatch();

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<{
    [key: string]: typeof items;
  }>({});

  useEffect(() => {
    const groupedItems = items.reduce(
      (results: { [key: string]: typeof items }, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      },
      {}
    );
    setGroupedItemsInBasket(groupedItems);
  }, [restaurant, items]);

  useEffect(() => {
    setDeliveryFee(5.99);
    setDeliveryTimeMin(15);
    setDeliveryTimeMax(30);
  }, [restaurant]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 bg-teal-50 border-sm">
        <View className="p-4 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-600">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-gray-200 absolute top-0 right-0"
            onPress={closeModal}
          >
            <XCircleIcon className="h-6 w-6" color={"gray"} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-gray-50 mb-2 rounded-md">
          <Image
            source={{
              uri: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_11_3_638346181356369639_shipper.jpg",
            }}
            className="h-10 w-10 rounded-full p-4 bg-gray-400"
          />
          <Text className="flex-1">
            Delivery in {deliveryTimeMin} - {deliveryTimeMax} mins
          </Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-100 mx-2">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-gray-50 py-2 px-5 rounded-md"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.imgUrl }}
                className="h-12 w-12 rounded-sm"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>{currencyFormat(items[0]?.price)}</Text>
              <TouchableOpacity
                onPress={() =>
                  dispatch(removeDishFromBasket({ id: items[0]?.id }))
                }
              >
                <Text className="text-xs text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-gray-50 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">SubTotal</Text>
            <Text className="text-gray-500">
              {currencyFormat(basketTotal || 0)}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Fee</Text>
            <Text className="text-gray-500">{currencyFormat(deliveryFee)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-teal-900 font-bold text-lg">Order Total</Text>
            <Text className="text-teal-900 font-extrabold text-2xl">
              {currencyFormat(basketTotal + deliveryFee)}
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4 items-center" onPress={() => router.navigate("/orderProgress")}>
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
