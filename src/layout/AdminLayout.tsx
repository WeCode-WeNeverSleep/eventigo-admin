import { Layout } from "react-admin";
import { AdminAppBar } from "./AdminAppBar";

export function AdminLayout(props: any) {
    return <Layout {...props} appBar={AdminAppBar} />;
}