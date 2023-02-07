import React, { memo, useState } from 'react';

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log('Fizzが再描画されました');
  return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzPropos = {
  isBuzz: boolean;
  onClick: () => void;
};

const Buzz = memo<BuzzPropos>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzzが再描画されました. isBuzz=${isBuzz}`);
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました, count=${count}`);
  };

  console.log(`Parentが再描画されました, count=${count}`);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  );
};
