import { useNavigation } from "@react-navigation/native";

import React, { useLayoutEffect } from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import {
  ChevronDoubleDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={{flex:1}}>
      <View className="bg-white pt-10">
        {/* headers */}
        <View className="flex-row gap-2 items-center px-2">
          <Image
            className="h-7 w-7 -scale-x-100"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3128/3128849.png",
            }}
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDoubleDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* search */}
        <View className="flex-row items-center justify-center px-2">
          <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3 my-2">
            <MagnifyingGlassIcon color="#00CCBB" size={20} />
            <TextInput placeholder="Restaurants and Cuisines" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          title="Featured"
          description="Paid placement from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Tasty Discount"
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory="discounts"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </View>
  );
}