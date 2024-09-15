// default page template
import { cn } from "@/utils/cn";
import { Text, View, ViewProps } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

/**Basic page template to start a new page. */
const Page: React.FC<ViewProps & { children: React.ReactNode, /* Show the account an the header */ header?: boolean }> = ({ children, header, ...props }) => (
    <SafeAreaView {...props} className={cn("flex-1", "bg-white", "dark:bg-black", props.className)}>
        {
            header && (
                <View>
                    <Text>
                        Header
                    </Text>
                </View>
            )
        }
        {children}
    </SafeAreaView>
)

export default Page;