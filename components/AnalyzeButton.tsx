type Props = {
  onClick: () => void;
};

export default function AnalyzeButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-500 transition rounded-xl px-8 py-4 font-semibold"
    >
      Analyze
    </button>
  );
}