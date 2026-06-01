import { Admin, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { RoomCreate } from "./resources/rooms/RoomCreate";
import { RoomEdit } from "./resources/rooms/RoomEdit";
import { RoomList } from "./resources/rooms/RoomList";
import { authProvider } from "./providers/authProvider";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="events" />
        <Resource
            name="rooms"
            list={RoomList}
            create={RoomCreate}
            edit={RoomEdit}
        />
        <Resource name="speakers" />
    </Admin>
);