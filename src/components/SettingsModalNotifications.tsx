import { useState, useEffect } from "react";

import ToggleSwitch from "./ToggleSwitch";

// Define a type for notifications
type NotificationTypes = {
  importantTasks: { email: boolean; slack: boolean };
  meetingSummary: { email: boolean; slack: boolean };
  tasksDue: { email?: boolean; slack: boolean };
  newChatTasks: { email?: boolean; slack: boolean };
};

// Get keys of NotificationTypes as a union type
type NotificationTypeKey = keyof NotificationTypes;

// Define a type for the platform
type Platform = "email" | "slack";

const SettingsModalNotifications = () => {

  // Load initial state from localStorage or fallback to default values
  const [notifications, setNotifications] = useState<NotificationTypes>(() => {
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications
      ? JSON.parse(savedNotifications)
      : {
          importantTasks: { email: true, slack: true },
          meetingSummary: { email: true, slack: false },
          tasksDue: { slack: true },
          newChatTasks: { slack: true },
        };
  });

  // Save notifications to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const toggleNotification = (type: NotificationTypeKey, platform: Platform) => {
    setNotifications((prev) => {
      const notification = prev[type];
      if (platform in notification) {
        return {
          ...prev,
          [type]: {
            ...notification,
            [platform]: !notification[platform],
          },
        }
      };
      return prev;
    });
  };

  return (
    <main className="flex-grow flex flex-col items-start pt-6 pl-10 pr-8 pb-5 rounded-lg bg-[var(--secondary-background)] border border-[var(--border-color)]">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="min-w-[340px]">Notification type:</span>
            <span className="text-xs text-[var(--secondary-text-color)] self-center">Email</span>
            <span className="text-xs text-[var(--secondary-text-color)] self-center">Slack</span>
          </div>
          {Object.keys(notifications).map((type) => (
            <div key={type} className="flex justify-between items-center pb-2">
              <span className="text-sm text-[var(--secondary-text-color)]  capitalize min-w-[340px]">{type.replace(/([A-Z])/g, " $1")}</span>
              <div className="flex items-center space-x-4">
                { 'email' in notifications[type as NotificationTypeKey] && <ToggleSwitch
                  label="Email"
                  checked={notifications[type as NotificationTypeKey].email ?? false}
                  onChange={() => toggleNotification(type as NotificationTypeKey, "email")}
                />}
                <ToggleSwitch
                  label="Slack"
                  checked={notifications[type as NotificationTypeKey].slack ?? false}
                  onChange={() => toggleNotification(type as NotificationTypeKey, "slack")}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-auto w-auto py-1 px-2 rounded-lg text-[var(--button-text-color)] bg-[var(--color-graphite-gray)] hover:text-[var(--button-hover-text-color)] hover:bg-[var(--button-hover-background-color)]"
          onClick={() =>
            setNotifications({
              importantTasks: { email: false, slack: false },
              meetingSummary: { email: false, slack: false },
              tasksDue: { slack: false },
              newChatTasks: { slack: false },
            })
          }
        >
          Disable All Notifications
        </button>
    </main>
  );
}

export default SettingsModalNotifications;