import { Admin, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="events" />
        <Resource name="rooms" />
        <Resource name="speakers" />
    </Admin>
);