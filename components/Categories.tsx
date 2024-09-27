import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  id: string;
  imgUrl: string;
  title: string;
}

const CATEGORIES = [
  {
    id: "1",
    imgUrl:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    title: "Hamburger",
  },
  {
    id: "2",
    imgUrl:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    title: "Hamburger",
  },
  {
    id: "3",
    imgUrl:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    title: "Hamburger",
  },
  {
    id: "4",
    imgUrl:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    title: "Hamburger",
  },
  {
    id: "5",
    imgUrl:
      "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    title: "Hamburger",
  },
];

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories
    setCategories(CATEGORIES);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCards */}
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          imgUrl={category.imgUrl}
          title={category.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
