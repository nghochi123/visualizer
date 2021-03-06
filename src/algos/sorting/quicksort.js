import wait from "../../helperfunctions/wait";
import Bar from "../../components/VisualBox/Bar/Bar";

//Implementation of quicksort

const pivotSet = async (
  array,
  setArray,
  setBars,
  width,
  delay,
  start = 0,
  end = array.length,
  max
) => {
  let swapIndex = start;
  let pivotValue = array[start];
  for (let i = start + 1; i < array.length; i++) {
    if (pivotValue > array[i]) {
      swapIndex++;
      [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
    }
    setArray(array);
    // eslint-disable-next-line
    setBars(
      array.map((c, index) => {
        let height = (c / max) * 300;
        let action = "bar";
        if (index === start) {
          action = "pivot";
        } else if (array[index] > pivotValue && index < i) {
          action = "lowest";
        } else if (array[index] < pivotValue && index < i) {
          action = "sorted";
        }
        return (
          <Bar
            action={action}
            key={c}
            height={`${height}px`}
            width={`${width}px`}
            value={c}
          />
        );
      })
    );
    await wait(delay);
  }
  [array[swapIndex], array[start]] = [array[start], array[swapIndex]];
  setBars(
    array.map((c, index) => {
      let height = (c / max) * 300;
      let action = "sorted";
      if (index === swapIndex || index === start) {
        action = "comparing";
      }
      return (
        <Bar
          action={action}
          key={c}
          height={`${height}px`}
          width={`${width}px`}
          value={c}
        />
      );
    })
  );
  await wait(delay * 2);
  setBars(
    array.map((c, index) => {
      let height = (c / max) * 300;
      let action = "sorted";
      return (
        <Bar
          action={action}
          key={c}
          height={`${height}px`}
          width={`${width}px`}
          value={c}
        />
      );
    })
  );
  return swapIndex;
};

const quickSort = async (
  array,
  setArray,
  setBars,
  width,
  delay,
  setSorting,
  left = 0,
  right = array.length - 1
) => {
  setSorting(true);
  const max = array.length + 1;
  let pivotIndex;
  if (left < right) {
    pivotIndex = await pivotSet(
      array,
      setArray,
      setBars,
      width,
      delay,
      left,
      right,
      max
    );
    await quickSort(
      array,
      setArray,
      setBars,
      width,
      delay,
      setSorting,
      left,
      pivotIndex - 1
    );
    await quickSort(
      array,
      setArray,
      setBars,
      width,
      delay,
      setSorting,
      pivotIndex + 1,
      right
    );
  }
  setSorting(false);
};

export default quickSort;
