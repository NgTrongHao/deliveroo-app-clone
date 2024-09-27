import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "@/components/DishRow";
import { Dish } from "@/components/FeaturesRow";
import BasketIcon from "@/components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/features/restaurantSlice";

type RestaurantParams = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  gerne: string;
  address: string;
  description: string;
  dishes: Dish[];
  long: number;
  latitute: number;
};

const DISHES: Dish[] = [
  {
    id: "1",
    name: "Burger",
    description: "This is a burger",
    price: 5.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "2",
    name: "Fries",
    description: "This is a fries",
    price: 2.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "3",
    name: "Drink",
    description: "This is a drink",
    price: 1.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "4",
    name: "Salad",
    description: "This is a salad",
    price: 3.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "5",
    name: "Pizza",
    description: "This is a pizza",
    price: 7.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "6",
    name: "Pasta",
    description: "This is a pasta",
    price: 5.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "7",
    name: "Sushi",
    description: "This is a sushi",
    price: 9.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "8",
    name: "Ramen",
    description: "This is a ramen",
    price: 6.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
  {
    id: "9",
    name: "Curry",
    description: "This is a curry",
    price: 8.99,
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
  },
];

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      gerne,
      address,
      description,
      long,
      latitute,
    },
  } = useRoute<RouteProp<{ params: RestaurantParams }, "params">>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        gerne,
        address,
        description,
        dishes,
        long,
        latitute,
      })
    );
  }, []);

  // Fetch or set dishes
  useEffect(() => {
    setDishes(DISHES);
    setTimeout(() => {
      setIsLoading(false); // Simulate delay after dishes have loaded
    }, 2000); // 1 second delay
  }, []);

  return (
    <>
      <SafeAreaView>
        <BasketIcon />
        <ScrollView>
          <View className="relative">
            <Image
              source={{ uri: imgUrl }}
              className="h-72 w-full"
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute top-8 left-4 bg-gray-100 p-2 rounded-full"
            >
              <ArrowLeftIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
          </View>
          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon size={20} color="#00CCBB" opacity={0.6} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-teal-400 text-sm">{rating}</Text> •{" "}
                    {gerne}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <MapPinIcon size={20} color="gray" opacity={0.6} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-xs text-gray-500">
                      Nearby • {address}
                    </Text>
                  </Text>
                </View>
              </View>
              <Text className="text-sm text-gray-500 mt-2 pb-4">
                {description}
              </Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon size={20} color="gray" opacity={0.4} />
              <Text className="pl-2 flex-1 text-sm font-bold">
                Have a food allergy? Click here
              </Text>
              <ChevronRightIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
          </View>

          <View className="bg-white pb-20">
            <Text className="px-4 pt-4 mb-3 font-bold text-xl">
              Popular Dishes
            </Text>

            {Array.isArray(dishes) && dishes.length > 0 ? (
              dishes.map((dish) => <DishRow key={dish.id} {...dish} />)
            ) : isLoading ? (
              // Show nothing or a loading spinner if needed while delay is active
              <Text className="px-4 pt-4 mb-3 text-sm text-gray-500">
                Loading dishes...
              </Text>
            ) : (
              // Fallback message and image after delay
              <View className="justify-center items-center">
                <Text className="px-4 pt-4 mb-3 text-sm text-gray-500">
                  No dishes available
                </Text>
                <Image
                  source={require("../../assets/images/no-food-available.webp")}
                  className="h-96 w-full"
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RestaurantScreen;
