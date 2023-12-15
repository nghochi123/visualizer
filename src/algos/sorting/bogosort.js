import wait from "../../helperfunctions/wait";
import Bar from "../../components/VisualBox/Bar/Bar";

//Implementation of bogosort

function isSorted(a) {
    for (var i = 1; i < a.length; i++) if (a[i] < a[i - 1]) return false;
    return true;
}

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
    while (!isSorted(array)) {
        for (let i = 0; i < array.length; i++) {
            let newidx = Math.floor(Math.random() * array.length);
            var temp = array[i];
            array[i] = array[newidx];
            array[newidx] = temp;
        }
        setArray(array);
        setBars(
            array.map((c, index) => {
                let height = (c / max) * 300;
                let action = "bogo";
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
