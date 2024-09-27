import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeatureCard from "./FeatureCard";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

interface Restaurant {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  gerne: string;
  address: string;
  description: string;
  dishes: any[];
  long: number;
  latitute: number;
}

interface FeaturesRowProps {
  id: any;
  title: string;
  description: string;
}

const RESTAURANTS = [
  {
    id: "1",
    imgUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/mcdonalds-changing-recipe-zz-230417-a365ab.jpg",
    title: "McDonalds",
    rating: 4.5,
    gerne: "Fast Food",
    address: "123 Main Street",
    description: "This is a description",
    dishes: [
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
    ],
    long: 10.76898,
    latitute: 106.65775,
  },
];

const FeaturesRow = ({ id, title, description }: FeaturesRowProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    // Fetch restaurants
    setRestaurants(RESTAURANTS);
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
          paddingEnd: 2,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* FeatureCards */}

        {restaurants.map((restaurant) => (
          <FeatureCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.imgUrl}
            title={restaurant.title}
            rating={restaurant.rating}
            gerne={restaurant.gerne}
            address={restaurant.address}
            description={restaurant.description}
            long={restaurant.long}
            latitute={restaurant.latitute}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturesRow;
