import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Title, useGetList } from "react-admin";

function StatCard({ label, value }: { label: string; value: number | string }) {
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
  const now = new Date();

  const { data: events, total: eventsTotal } = useGetList("events", {
    pagination: { page: 1, perPage: 1000 },
  });

  const { data: sessions, total: sessionsTotal } = useGetList("sessions", {
    pagination: { page: 1, perPage: 1000 },
  });

  const { total: roomsTotal } = useGetList("rooms", {
    pagination: { page: 1, perPage: 1 },
  });

  const { total: speakersTotal } = useGetList("speakers", {
    pagination: { page: 1, perPage: 1 },
  });

  const liveEvents = events?.filter((e: any) => {
    const start = new Date(e.startDate);
    const end = new Date(e.endDate);
    return start <= now && end >= now;
  }).length ?? 0;

  const passedEvents = events?.filter((e: any) => {
    const end = new Date(e.endDate);
    return end < now;
  }).length ?? 0;

  const futureEvents = (eventsTotal ?? 0) - liveEvents - passedEvents;

  const liveSessions = sessions?.filter((s: any) => {
    const start = new Date(s.startTime);
    const end = new Date(s.endTime);
    return start <= now && end >= now;
  }).length ?? 0;

  const passedSessions = sessions?.filter((s: any) => {
    const end = new Date(s.endTime);
    return end < now;
  }).length ?? 0;

  const futureSessions = (sessionsTotal ?? 0) - liveSessions - passedSessions;

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
          <StatCard label="Live Events" value={liveEvents} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard label="Passed Events" value={passedEvents} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard label="Future Events" value={futureEvents} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard label="Live Sessions" value={liveSessions} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard label="Passed Sessions" value={passedSessions} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard label="Future Sessions" value={futureSessions} />
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

