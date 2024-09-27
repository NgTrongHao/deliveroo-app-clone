import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface CategoryCardProps {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  return (
    <TouchableOpacity className="mr-2 relative items-center">
      <Image source={{ uri: imgUrl }} resizeMode="cover" className="h-24 w-24 rounded" />
      <Text className="absolute bottom-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
