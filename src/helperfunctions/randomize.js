import Bar from '../components/VisualBox/Bar/Bar';

const randomize = (size, setArray, setBars, width) =>{
    let array = []
    let max = size + 1;
    for(let i = 1; i < size+1; i++){
        array.push(i);
    }
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    shuffle(array);
    setArray(array);
    setBars((array.map(i=>{
            let height = (i/max)*300;
            return (
                <Bar 
                    key={i} 
                    height={`${height}px`} 
                    width={`${width}px`} 
                    value={i}
                />
            )
        })))
}

export default randomize;