import  {Fire } from './FireWorks';
import { RestartButton } from './RestartButton';

interface Props {
  winner: string;
  xIsNext: boolean;
  restart: () => void
  gameIsOver: boolean
}

const Winner = ({ winner }: { winner: string }) => {
  return <div className="absolute text-green-400 text-3xl whitespace-nowrap">{"Winner: " + winner}</div>;
};

const NextMove = ({ xIsNext }: { xIsNext: boolean }) => {
  return <div className='flex justify-center'>{"Next Move: " + (xIsNext ? "X" : "O")}</div>;
};

const NobodyWins = () => {
  return <div className='text-2xl text-red-500'>Nobody Wins</div>
}

export const StatusBar = ({ winner, xIsNext, restart, gameIsOver }: Props) => {
  return (
    <div className="flex justify-center w-full sm:w-96 mx-auto p-2 border-0 text-center text-xl">
      { winner && <Fire /> }
      { winner && <RestartButton absolute={true} onClick={restart} /> }
      <div className="flex justify-center uppercase">
        {winner ? <Winner winner={winner} /> : gameIsOver ? <NobodyWins /> : <NextMove xIsNext={xIsNext} />}
      </div>
    </div>
  );
};
