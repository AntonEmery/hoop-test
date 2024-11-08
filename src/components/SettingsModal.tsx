import { useState } from "react";

import SidebarButton from "./SidebarButton";
import SettingsModalAccount from "./SettingsModalAccount";
import SettingsModalNotifications from "./SettingsModalNotifications";
import { ArrowRightStartOnRectangleIcon, UserIcon, BellIcon } from "@heroicons/react/24/outline";

type ViewTypes = 'account' | 'notifications';

const SettingsModal = () => {

  const [view, setView] = useState<ViewTypes>('account');

  return (
    <div className="flex h-[100%] bg-[var(--main-app-bg)] text-white">
      <aside className="w-64 pt-8 pl-4 pr-4 pb-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <div className="flex flex-col gap-2">
          <SidebarButton isActive={view === 'account'} onClick={() => setView('account')}>
            <UserIcon className="w-5 h-5" />
            <span>Account</span>
          </SidebarButton>
          <SidebarButton isActive={view === 'notifications'} onClick={() => setView('notifications')}>
            <BellIcon className="w-5 h-5" />
            <span>Notifications</span>
          </SidebarButton>
        </div>
        <div className="mt-auto">
          <SidebarButton onClick={() => {}}>
            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            <span>Log out</span>
            </SidebarButton>
        </div>
      </aside>
      {view === 'account' && <SettingsModalAccount />}
      {view === 'notifications' && <SettingsModalNotifications />}
    </div>
  );
};

export default SettingsModal;

