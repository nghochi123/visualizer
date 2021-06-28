import wait from "../../helperfunctions/wait";
import Bar from "../../components/VisualBox/Bar/Bar";

//Implementation of bubble sort

const bubblesort = async (
  array,
  setArray,
  setBars,
  width,
  delay,
  setSorting
) => {
  setSorting(true);
  let max = array.length + 1;
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      setArray(array);
      setBars(
        array.map((c, index) => {
          let height = (c / max) * 300;
          let action = "bar";
          if (index === j || index === j + 1) {
            action = "comparing";
          } else if (index > i - 1) {
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
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      await wait(delay);
    }
  }
  setBars(
    array.map((c, index) => {
      let height = (c / max) * 300;
      return (
        <Bar
          action="sorted"
          key={c}
          height={`${height}px`}
          width={`${width}px`}
          value={c}
        />
      );
    })
  );
  setSorting(false);
};

export default bubblesort;
