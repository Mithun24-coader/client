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
    path: "/",
    cssName: "nav-text",
  },
  {
    title: "User List",
    icon: <List />,
    path: "/userList",
    cssName: "nav-text",
  },
  {
    title: "Mail Box",
    icon: <Email />,
    path: "/mails",
    cssName: "nav-text",
  },
  {
    title: "Feedbacks",
    icon: <Feedback />,
    path: "/feedbacks",
    cssName: "nav-text",
  },
  {
    title: "Messages",
    icon: <Message />,
    path: "/messages",
    cssName: "nav-text",
  },
  {
    title: "Manage",
    icon: <Message />,
    path: "/manage",
    cssName: "nav-text",
  },
  {
    title: "Reports",
    icon: <Report />,
    path: "/reports",
    cssName: "nav-text",
  },
  {
    title: "Legalities",
    icon: <Message />,
    path: "/legalities",
    cssName: "nav-text",
  },
  {
    title: "Contact Lists",
    icon: <Contacts />,
    path: "/contacts",
    cssName: "nav-text",
  },
];
