import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "@/features/basketSlice";
import { currencyFormat } from "@/utils/currency-format";
import { RootState } from "@/hooks/store";
import { useRouter } from "expo-router";
import BasketScreen from "@/app/basket";

const BasketIcon = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const items =
    useSelector((state: RootState) => selectBasketItems(state.basket)) || [];
  const basketTotal =
    useSelector((state: RootState) => selectBasketTotal(state.basket)) ?? 0;
  const router = useRouter();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (items.length === 0) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;
  const modalHeight = screenHeight * 0.8; // 80% of screen height

  return (
    <View className="absolute bottom-2 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 p-4 rounded-md flex-row items-center space-x-1"
        // onPress={() => {
        //   router.navigate("/basket");
        // }}
        onPress={toggleModal}
      >
        <Text className="text-white font-extrabold text-base bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-base text-center">
          View Basket
        </Text>
        <Text className="text-xl text-white font-extrabold">
          {currencyFormat(basketTotal)}
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: "flex-end", margin: 0 }} // Modal display from bottom
        backdropTransitionOutTiming={0} // Disable backdrop transition
        backdropOpacity={0.5}
      >
        <View
          style={{
            height: modalHeight,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 16,
          }}
        >
          <BasketScreen closeModal={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default BasketIcon;
