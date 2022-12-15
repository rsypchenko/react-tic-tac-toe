interface Props {
  value: string;
  onClick: any;
  win: boolean;
}

export const Square = ({ value, win, onClick }: Props) => {
  const color =
    value !== null ? (value === "X" ? "bg-green-500 text-white" : "bg-red-500 text-white") : "";
  return (
    <button
      className={`border-2 text-3xl outline-none box-border ${
        win ? color : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
