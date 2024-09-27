import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useRouter } from "expo-router";
import { Dish } from "./FeaturesRow";

interface FeatureCardProps {
  id: any;
  imgUrl: string;
  title: string;
  rating: number;
  gerne: string;
  address: string;
  description: string;
  long: number;
  latitute: number;
}

const FeatureCard = ({
  id,
  imgUrl,
  title,
  rating,
  gerne,
  address,
  description,
  long,
  latitute,
}: FeatureCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="bg-white mr-3 rounded-sm shadow"
      onPress={() =>
        router.navigate({
          pathname: "/restaurant",
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
        })
      }
    >
      <Image
        source={{ uri: imgUrl }}
        className="h-36 w-60 rounded-t"
        resizeMode="cover"
      />
      <View className="px-3 pb-4">
        <Text className="font-semibold text-base pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={20} color="#00CCBB" opacity={0.8} />
          <Text className="text-xs text-gray-500">
            <Text className="text-teal-400 text-sm">{rating}</Text> • {gerne}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <MapPinIcon size={20} color="gray" opacity={0.5} />
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
