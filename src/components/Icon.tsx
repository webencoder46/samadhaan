import { ReactNode } from "react";

export type IconName =
  | "arrow" | "brain" | "chair" | "check" | "chevron" | "clock"
  | "file" | "home" | "info" | "lock" | "menu" | "search"
  | "settings" | "tea" | "users" | "wallet" | "x";

const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  brain: <><path d="M9.5 4.5A3 3 0 0 0 5 7a3.5 3.5 0 0 0 .5 6.96V15a3 3 0 0 0 4 2.83M14.5 4.5A3 3 0 0 1 19 7a3.5 3.5 0 0 1-.5 6.96V15a3 3 0 0 1-4 2.83M12 4v16M8 9h1M15 9h1M8 14h1M15 14h1" /></>,
  chair: <><path d="M7 12V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7M5 10v5h14v-5M7 15v5M17 15v5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  file: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M10 13h5M10 17h5" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-7h6v7" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a2 2 0 0 0 .4 2.2l.1.1-2.6 2.6-.1-.1a2 2 0 0 0-2.2-.4 2 2 0 0 0-1.2 1.8V21h-3.6v-.2A2 2 0 0 0 9 19a2 2 0 0 0-2.2.4l-.1.1-2.6-2.6.1-.1a2 2 0 0 0 .4-2.2A2 2 0 0 0 3 13.4H3V9.8h.2A2 2 0 0 0 5 8.6a2 2 0 0 0-.4-2.2l-.1-.1 2.6-2.6.1.1A2 2 0 0 0 9.4 4 2 2 0 0 0 10.6 2H14v.2A2 2 0 0 0 15.2 4a2 2 0 0 0 2.2-.4l.1-.1 2.6 2.6-.1.1a2 2 0 0 0-.4 2.2A2 2 0 0 0 21 9.6v3.6a2 2 0 0 0-1.6 1.8Z" /></>,
  tea: <><path d="M5 9h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zM17 11h2a2 2 0 0 1 0 4h-2M8 5c0-1 1-1 1-2M12 5c0-1 1-1 1-2" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 4v2" /></>,
  wallet: <><path d="M4 7a3 3 0 0 1 3-3h11v16H6a2 2 0 0 1-2-2z" /><path d="M4 8h14M14 12h6v5h-6a2.5 2.5 0 0 1 0-5Z" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

export default function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}