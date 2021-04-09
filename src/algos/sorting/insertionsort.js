import wait from '../../helperfunctions/wait';
import Bar from '../../components/VisualBox/Bar/Bar';

//Implementation of insertion sort

const insertionSort = async (array, setArray, setBars, width, delay) => {
    let max = array.length + 1;
    for (let i = 1; i < array.length; i++) {
      const val = array[i];
      for (let j = i - 1; j >= 0 && val < array[j]; j--) {
        setBars(array.map((c, index)=>{
            let height = (c/max)*300;
            let action = 'bar';
            if(array[index] === val){
                action = 'comparing';
            }
            else if (index < i){
                action = 'sorted';
            }
            return (
                <Bar
                    action={action}
                    key={c} 
                    height={`${height}px`} 
                    width={`${width}px`} 
                    value={c}
                />
            )
        }));
        [array[j], array[j + 1]] = [val, array[j]];
        setArray(array);
        setBars(array.map((c, index)=>{
            let height = (c/max)*300;
            let action = 'bar';
            if(array[index] === val){
                action = 'comparing';
            }
            else if (index < i){
                action = 'sorted';
            }
            return (
                <Bar
                    action={action}
                    key={c} 
                    height={`${height}px`} 
                    width={`${width}px`} 
                    value={c}
                />
            )
        }));
        await wait(delay);
      }
    }
    setBars(array.map((c, index)=>{
        let height = (c/max)*300;
        return (
            <Bar
                action='sorted' 
                key={c} 
                height={`${height}px`} 
                width={`${width}px`} 
                value={c}
            />
        )
    }))
  };

export default insertionSort;