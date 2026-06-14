import { Admin, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";

import { EventCreate } from "./resources/events/EventCreate";
import { EventEdit } from "./resources/events/EventEdit";
import { EventList } from "./resources/events/EventList";

import { RoomCreate } from "./resources/rooms/RoomCreate";
import { RoomEdit } from "./resources/rooms/RoomEdit";
import { RoomList } from "./resources/rooms/RoomList";

import { SpeakerCreate } from "./resources/speakers/SpeakerCreate";
import { SpeakerEdit } from "./resources/speakers/SpeakerEdit";
import { SpeakerList } from "./resources/speakers/SpeakerList";

import { SessionCreate } from "./resources/sessions/SessionCreate";
import { SessionEdit } from "./resources/sessions/SessionEdit";
import { EventShow } from "./resources/events/EventShow";

import { darkTheme, lightTheme } from "./theme/adminTheme";
import { AdminLayout } from "./layout/AdminLayout";

import { Dashboard } from "./dashboard/Dashboard";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={lightTheme} darkTheme={darkTheme} defaultTheme="dark" layout={AdminLayout} dashboard={Dashboard}>
        <Resource
            name="events"
            list={EventList}
            create={EventCreate}
            edit={EventEdit}
            show={EventShow}
        />
        <Resource
            name="rooms"
            list={RoomList}
            create={RoomCreate}
            edit={RoomEdit}
        />
        <Resource
            name="speakers"
            list={SpeakerList}
            create={SpeakerCreate}
            edit={SpeakerEdit}
        />
        <Resource 
            name="sessions" 
            edit={SessionEdit} 
            create={SessionCreate} 
        />
    </Admin>
);