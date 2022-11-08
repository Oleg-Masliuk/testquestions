let n = prompt('довжина масиву', '');
let arr = prompt('елементи масиву', '');
let Plus = ((arr.split(' ').filter (element=>element>0).length)/(arr.split(' ').length)).toFixed(6)
let Minus = ((arr.split(' ').filter (element=>element<0).length)/(arr.split(' ').length)).toFixed(6)
let Nol = ((arr.split(' ').filter (element=>element==0).length)/(arr.split(' ').length)).toFixed(6)
console.log (Plus, Minus, Nol)





    // here we are using Strategy pattern to simplify code
    const getElementsPercent = filterCallback => {
        const numMatchingElements = arr.filter(filterCallback).length;
        return (numMatchingElements/arr.length).toFixed(6);
    };
    
    const positive = getElementsPercent(el => el>0);
    const negative = getElementsPercent(el => el<0);
    const zero = getElementsPercent(el => el==0);

    console.log(positive);
    console.log(negative);
    console.log(zero);
