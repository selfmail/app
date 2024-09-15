// default page template
import { cn } from "@/utils/cn";
import { SafeAreaView, View, ViewProps } from 'react-native';

/**Basic page template to start a new page. */
const Page: React.FC<ViewProps & { children: React.ReactNode, /* Show the account an the header */ header?: boolean }> = ({ children, header, ...props }) => (
    <SafeAreaView {...props} className={cn("flex-1", "bg-white", "dark:bg-black", props.className)}>
        <View>

        </View>
        {children}
    </SafeAreaView>
)

export default Page;