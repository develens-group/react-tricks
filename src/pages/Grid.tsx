import { useState } from "react";

const Grid = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [isResetting, setIsResetting] = useState(false);

  const handleClick = (index: number) => {
    if (selected.includes(index) || isResetting) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 9) {
      resetReverse(newSelected);
    }
  };

  const resetReverse = (order: number[]) => {
    setIsResetting(true);

    const reversed = [...order].reverse();

    reversed.forEach((item, i) => {
      setTimeout(() => {
        setSelected((prev) => prev.filter((v) => v !== item));

        if (i === reversed.length - 1) {
          setIsResetting(false);
        }
      }, (i + 1) * 400);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`
              w-24 h-24 border cursor-pointer transition
              ${selected.includes(i) ? "bg-purple-600" : "bg-white"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;