import wait from '../../helperfunctions/wait';
import Bar from '../../components/VisualBox/Bar/Bar';

//Implementation of selection sort

const selectionSort = async (array, setArray, setBars, width, delay) => {
    let max = array.length + 1;
    for(let i = 0; i<array.length;i++){
        let lowest = i;
        for(let j = i; j < array.length; j++){
            setArray(array);
            // eslint-disable-next-line no-loop-func
            setBars(array.map((c, index)=>{
                let height = (c/max)*300;
                let action = 'bar';
                if(index === j){
                    action = 'comparing';
                }
                else if(index === lowest){
                    action = 'lowest';
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
            }))
            if(array[j] < array[lowest]){
                lowest = j;
            }
            await wait(delay);
        }
        if(i !== lowest) [array[lowest], array[i]] = [array[i], array[lowest]];
        
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
}

export default selectionSort;