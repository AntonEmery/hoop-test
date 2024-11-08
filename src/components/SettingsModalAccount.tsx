import avatarUrl from '../assets/avatar-web.jpg';

const SettingsModalAccount = () => {
  return (
    <main className="flex-grow min-w-[var(--settings-right-col-width)] pt-8 pl-10 pr-8 rounded-lg bg-[var(--secondary-background)] border border-[var(--border-color)]">
      <h2 className="text-lg font-semibold mb-4">Account</h2>

      <div className="flex justify-start gap-2 mb-4">
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="max-h-[40px] max-w-[40px] w-auto h-auto rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-[14px] text-[var(--color-white)]">Bryon Jenkins</p>
          <div className="flex gap-2 items-center ml-1">
            <span className="text-sm text-[var(--color-medium-gray)]">bjenkins@acme.com</span>
            <button className="w-auto py-1 px-2 rounded-lg text-[12px] bg-[var(--color-graphite-gray)]">Edit</button>
          </div>
        </div>
      </div>

      <div>
      <p className="text-[14px] text-[var(--color-white)]">Subscription</p>
      <span className="text-sm text-[var(--color-medium-gray)]">You have a free subscription courtesy of Hoop</span>
      </div>
    </main>
  )
}

export default SettingsModalAccount