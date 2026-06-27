import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Title, useGetList } from "react-admin";

function StatCard({
    label,
    value,
}: {
    label: string;
    value: number | string;
}) {
    return (
        <Card>
            <CardContent>
                <Typography color="text.secondary" fontWeight={600}>
                    {label}
                </Typography>

                <Typography variant="h4" fontWeight={900} color="primary.main">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}

export function Dashboard() {
    const { total: eventsTotal } = useGetList("events", {
        pagination: { page: 1, perPage: 1 },
    });

    const { total: roomsTotal } = useGetList("rooms", {
        pagination: { page: 1, perPage: 1 },
    });

    const { total: speakersTotal } = useGetList("speakers", {
        pagination: { page: 1, perPage: 1 },
    });

    return (
        <>
            <Title title="EventiGo Admin" />

            <Typography variant="h4" fontWeight={900} sx={{ mb: 1 }}>
                Dashboard
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 4 }}>
                Manage your events, sessions, rooms and speakers.
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard label="Events" value={eventsTotal ?? "-"} />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard label="Rooms" value={roomsTotal ?? "-"} />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard label="Speakers" value={speakersTotal ?? "-"} />
                </Grid>
            </Grid>
        </>
    );
}