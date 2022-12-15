interface Props {
  winner: string;
  xIsNext: boolean;
  gameIsOver: boolean
}

const Winner = ({ winner }: { winner: string }) => {
  return <div className={`text-3xl whitespace-nowrap ${winner === 'X' ? 'text-green-500': 'text-red-500'}`}>{winner === 'X' ? 'YOU WIN!': 'YOU LOOSE :('}</div>;
};

const NextMove = ({ xIsNext }: { xIsNext: boolean }) => {
  return <div className='flex text-3xl justify-center'>{"Next Move: " + (xIsNext ? "X" : "O")}</div>;
};

const NobodyWins = () => {
  return <div className='text-3xl text-red-500'>Nobody Wins</div>
}

export const StatusBar = ({ winner, xIsNext, gameIsOver }: Props) => {
  return (
    <div className="flex justify-center w-full sm:w-96 mx-auto p-2 border-0 text-center text-xl">
      <div className="flex justify-center uppercase">
        {winner ? <Winner winner={winner} /> : gameIsOver ? <NobodyWins /> : <NextMove xIsNext={xIsNext} />}
      </div>
    </div>
  );
};
