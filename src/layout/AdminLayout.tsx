import { Layout } from "react-admin";
import { AdminAppBar } from "./AdminAppBar";
import { AdminMenu } from "./AdminMenu";

export function AdminLayout(props: any) {
    return (
        <Layout
            {...props}
            appBar={AdminAppBar}
            menu={AdminMenu}
        />
    );
}