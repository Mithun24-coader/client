import React from "react";
import {
  Home,
  List,
  Email,
  Feedback,
  Message,
  Report,
  Contacts,
} from "@material-ui/icons";
export const SidebarItems = [
  {
    title: "Home",
    icon: <Home />,
    link: "/home",
  },
  {
    title: "User List",
    icon: <List />,
    link: "/userList",
  },
  {
    title: "Mail Box",
    icon: <Email />,
    link: "/mails",
  },
  {
    title: "Feedbacks",
    icon: <Feedback />,
    link: "/feedbacks",
  },
  {
    title: "Messages",
    icon: <Message />,
    link: "/messages",
  },
  {
    title: "Manage",
    icon: <Message />,
    link: "/manage",
  },
  {
    title: "Reports",
    icon: <Report />,
    link: "/reports",
  },
  {
    title: "Legalities",
    icon: <Home />,
    link: "/legalities",
  },
  {
    title: "Contact Lists",
    icon: <Contacts />,
    link: "/contacts",
  },
];
