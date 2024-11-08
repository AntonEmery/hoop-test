interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const ToggleSwitch = ({ checked, onChange, label }: ToggleSwitchProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="absolute opacity-0 -z-10"
        checked={checked}
        onChange={onChange}
        aria-label={label}
      />
      <div
        className="w-12 h-6 flex items-center bg-[var(--toggle-background-color)] rounded-full p-1 transition-colors"
      >
        <div
          className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${
            checked ? "translate-x-6 bg-[var(--toggle-button-on-background)]" : "translate-x-0 bg-[var(--toggle-button-off-background)]"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
