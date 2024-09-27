import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { currencyFormat } from "@/utils/currency-format";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "@/features/basketSlice";
import { RootState } from "@/hooks/store";

interface DishRowProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

const DishRow = ({ id, name, description, price, imgUrl }: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) =>
    selectBasketItemWithId(state.basket, id)
  );

  const formattedPrice = currencyFormat(price);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, imgUrl }));
  };

  const removeItemFromBasket = () => {
    if (!items.length || items.length === 0) {
      console.warn(
        `Can't remove product (id: ${id}) as it's not in the basket!`
      );
      return;
    }
    dispatch(removeFromBasket(id));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-100 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => {
          setIsPressed(!isPressed);
        }}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-base mb-1">{name}</Text>
            <Text className="text-sm text-gray-500 mb-1">{description}</Text>
            <Text className="text-base font-semibold">{formattedPrice}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1 }}
              source={{ uri: imgUrl }}
              className="h-20 w-20 bg-gray-300 p-4 rounded-sm"
            />
          </View>
        </View>

        {isPressed && (
          <View className="bg-white pt-4">
            <View className="flex-row items-center space-x-2 pb-3">
              <TouchableOpacity
                disabled={!items.length}
                onPress={removeItemFromBasket}
              >
                <MinusCircleIcon
                  size={30}
                  color={items.length > 0 ? "#00CCBB" : "gray"}
                />
              </TouchableOpacity>

              <Text className="text-base font-medium">{items.length}</Text>

              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon size={30} color="#00CCBB" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default DishRow;
