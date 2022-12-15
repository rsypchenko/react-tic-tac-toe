import { Square } from "../Square/Square";

interface Props {
  squares: Array<any>;
  onClick: (i: number) => void;
  wins: Array<number>
}

const style = {
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export const Board = ({ squares, wins, onClick }: Props) => (
  <div className="flex justify-center">
    <div style={style} className="w-72 h-72 sm:h-96 sm:w-96 m-4">
      {squares.map((square, i) => (
        <Square key={i} win={wins.includes(i)} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);
