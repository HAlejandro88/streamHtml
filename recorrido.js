

function envio() {
    let a =  new Array(50), nuevo;
    
      while (a.length > 0) {
        nuevo = a.splice(0,10)
        setTimeout(() => {
            actualizar = nuevo;
            console.warn(actualizar)
        }, 10000);
    } 

}


function doble() {
    const arr = ["H", "o", "w", " ", "t", "o", " ", "s", "p", "l", "i", "t", " ", "a", " ", 
                "l", "o", "n", "g", " ", "a", "r", "r", "a", "y", " ", "i", "n", "t", "o", 
                " ", "s", "m", "a", "l", "l", "e", "r", " ", "a", "r", "r", "a", "y", "s", 
                ",", " ", "w", "i", "t", "h", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
    

    const size = 3; 
    const res = arr.reduce((acc, curr, i) => {
        
    if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
        acc.push(arr.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
    }
    return acc;
    }, []);
}
 



    const splitArray = (arr, size) => {
        if (size === 0) {
            return [];
        }

        return arr.reduce((split, element, index) => {
            console.log(index % size)
            index % size === 0 ? split.push([element]) : split[Math.floor(index / size)].push(element);
            return split;
        }, []);
    };


    const hh = [
                "H", "o", "w", " ", "t", "o", " ", "s", "p", "l", "i", "t", " ", "a", " ", 
                "l", "o", "n", "g", " ", "a", "r", "r", "a", "y", " ", "i", "n", "t", "o", 
                " ", "s", "m", "a", "l", "l", "e", "r", " ", "a", "r", "r", "a", "y", "s", 
                ",", " ", "w", "i", "t", "h", " ", "J", "a", "v", "a", "S", "c", "r", "i", 
                "p", "t"
            ];




