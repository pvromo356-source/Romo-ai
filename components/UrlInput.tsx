type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function UrlInput({ value, onChange }: Props) {
  return (
    <input
      type="url"
      value={value}
      placeholder="https://yourbusiness.com"
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-6 py-4 text-white outline-none focus:border-blue-500"
    />
  );
}