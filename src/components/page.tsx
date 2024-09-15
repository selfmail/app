// default page template
import { type NativeMethods, SafeAreaView } from 'react-native';
import type { Constructor } from "react-native/types/private/Utilities";

const Page: React.FC<Constructor<NativeMethods> & { children: React.ReactNode }> = ({ children, ...props }) => (
    <SafeAreaView {...props}>
        {children}
    </SafeAreaView>
)

export default Page;