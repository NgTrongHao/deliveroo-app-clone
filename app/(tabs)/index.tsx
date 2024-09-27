import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "@/components/Categories";
import FeaturesRow from "@/components/FeaturesRow";

const FEATURED_CATEGORIES = [
  {
    id: "1",
    title: "Featured",
    description: "Paid placements from our partners",
  },
  {
    id: "2",
    title: "Tasty Discounts",
    description: "Everyday discounts on your favourite meals",
  },
  {
    id: "3",
    title: "Offers Near You",
    description: "Why cook when you can order in?",
  },
];

const HomeScreen = () => {
  interface FeaturedCategory {
    id: string;
    title: string;
    description: string;
  }

  const [featuredCategories, setFeaturedCategories] = useState<
    FeaturedCategory[]
  >([]);

  useEffect(() => {
    setFeaturedCategories(FEATURED_CATEGORIES);
  }, []);

  return (
    <SafeAreaView className="flex-1 pt-8 bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://d3faj0w6aqatyx.cloudfront.net/uploads/2016/09/05140012/PREFERRED-VERSION-Deliveroo-Logo_Full_CMYK_Teal-2.png",
          }}
          className="h-12 w-12 bg-indigo-700 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 rounded-md space-x-2 bg-gray-200 p-2 items-center">
          <MagnifyingGlassIcon color="#00CCBB" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="flex-1 bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* CategoryComponent */}
        <Categories />

        {/* FeaturesRows */}

        {featuredCategories.map((category) => (
          <FeaturesRow
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
