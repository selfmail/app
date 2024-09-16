import Header from "@/components/header";
import Page from "@/components/page";
import { cn } from "@/utils/cn";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const data = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
  { id: 4, title: "Contact" },
  { id: 5, title: "Contact" },
]
// Home page
export default function HomeScreen() {
  const colors = [
    "#ed5d53",
    "#435931",
    "green",
    "yellow",
    "red",
    "purple",
    "pink",
    "orange",
  ]
  return (
    <Page className="flex flex-col space-y-2" header>
      <Header />
      <ScrollView className="my-2" horizontal>
        {data.map((item) => (
          <View
            key={item.id}
            className={cn("p-3 rounded-md h-32 w-64 mx-2")}
            style={{ backgroundColor: colors[item.id % colors.length] }}
          >
            <Text className="text-sm text-[#333333]">Category</Text>
            <Text className="text-2xl font-medium m-0 p-0">{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* FlatList should be rendered outside of any ScrollView */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className={cn("p-3 w-full h-24 border-t border-t-[#333333]")}>
            <Text className="text-sm text-[#333333]">Category</Text>
            <Text className="text-2xl font-medium m-0 p-0">{item.title}</Text>
          </View>
        )}
      />
    </Page>
  );
}