# EventiGo Admin

Admin dashboard for **EventiGO** — an event management and live Q&A platform.

## Tech Stack

React, React-admin, Material UI, Emotion, TypeScript, Vite, React Router

## Setup

```bash
git clone https://github.com/WeCode-WeNeverSleep/eventigo-admin.git
cd eventigo-admin
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3001
```

```bash
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
```

## Resources

| Resource   | Actions                           |
| ---------- | --------------------------------- |
| Events     | List, Create, Edit, Show, Delete  |
| Sessions   | Create, Edit, Delete              |
| Rooms      | List, Create, Edit, Delete        |
| Speakers   | List, Create, Edit, Delete        |

## API (consumed)

| Method | Path                                  | Auth |
| ------ | ------------------------------------- | ---- |
| POST   | `/admin/login`                        | No   |
| GET    | `/admin/events`                       | Yes  |
| GET    | `/admin/events/:eventId`              | Yes  |
| POST   | `/admin/events`                       | Yes  |
| PUT    | `/admin/events/:eventId`              | Yes  |
| DELETE | `/admin/events/:eventId`              | Yes  |
| GET    | `/admin/rooms`                        | Yes  |
| GET    | `/admin/rooms/:roomId`                | Yes  |
| POST   | `/admin/rooms`                        | Yes  |
| PUT    | `/admin/rooms/:roomId`                | Yes  |
| DELETE | `/admin/rooms/:roomId`                | Yes  |
| GET    | `/admin/speakers`                     | Yes  |
| GET    | `/admin/speakers/:speakerId`          | Yes  |
| POST   | `/admin/speakers`                     | Yes  |
| PUT    | `/admin/speakers/:speakerId`          | Yes  |
| DELETE | `/admin/speakers/:speakerId`          | Yes  |
| GET    | `/admin/events/:eventId/sessions`     | Yes  |
| GET    | `/admin/events/:eventId/sessions/:id` | Yes  |
| POST   | `/admin/events/:eventId/sessions`     | Yes  |
| PUT    | `/admin/events/:eventId/sessions/:id` | Yes  |
| DELETE | `/admin/events/:eventId/sessions/:id` | Yes  |

## Contributors

### Jessy — `STD24004` [`jessyrand`](https://github.com/jessyrand)
*Full CRUD, auth, theming, layout*
- Project initialization (Vite, React, TypeScript, tooling)
- Authentication provider (JWT login, auto-logout)
- Data provider & HTTP client
- Theme (dark/light, custom palette)
- Layout (sidebar, menu, app bar, branding)
- Dashboard with stats
- Events CRUD (list, create, edit, show, delete)
- Sessions CRUD (create, edit, delete, nested under events)
- Rooms CRUD (list, create, edit, delete)
- Speakers CRUD (list, create, edit, delete)
- AdminToolbar component
- UI/UX refinements (favicon, interactive states, styling)

### Manda — `STD24083` [`Manda Tiavina`](https://github.com/MandaTiavina)
*Project README*
- Project README

### Rindra — `STD24069` [`rindraniaina`](https://github.com/rindraniaina)
*Project management, code review & dashboard*
- Pull request management and merging
- Code review and feature validation
- Dashboard enhancement (event/session/room/speaker counts)
- Branch coordination (pre-prod, feature branches)