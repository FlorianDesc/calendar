import {
  Calendar,
  CalendarDays,
  CalendarFold,
  Handshake,
  Repeat2,
  ScrollText,
} from "lucide-react";

export const LINK = [
  {
    path: "/",
    name: "Tous les calendriers",
    icon: <CalendarDays size={14} />,
  },
  {
    path: "/mes-calendriers",
    name: "Mes calendriers",
    icon: <Calendar size={14} />,
  },
  {
    path: "/calendriers-partagés",
    name: "Calendriers partagés",
    icon: <Repeat2 size={14} />,
  },
  {
    path: "/evenements",
    name: "Tous les événements",
    icon: <CalendarFold size={14} />,
  },
  {
    path: "/mes-evenements",
    name: "Mes événements",
    icon: <ScrollText size={14} />,
  },
  {
    path: "/evenements-partagés",
    name: "Événements partagés",
    icon: <Handshake size={14} />,
  },
];
