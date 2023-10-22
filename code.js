function divideAndConquerSum(a) {
    if(a.length == 0){      //If the array has zero elements
        return 0;           //Return 0
    }

    else if(a.length == 1){     //If the array only has 1 element
        return a[0];            //Return the first element
    }
    
    else{
    const length = a.length;    //Variable for length
    const oneThird = Math.floor(length/3);      //First 3rd of the array
    const twoThird = Math.floor((2*length)/3)   //Second 3rd of the array
    var subArray1 = a.slice(0, oneThird);   //Creating an array spanning 0-1/3 the length of a
    var subArray2 = a.slice(oneThird, twoThird);    //Creating an array spanning 1/3-2/3 the length of a
    var subArray3 = a.slice(twoThird);      //Creating an array spanning 2/3-end the length of a

    var sum1 = divideAndConquerSum(subArray1);      //Recursive call for the first 3rd of the arry
    var sum2 = divideAndConquerSum(subArray2);      //Recursive call for the middle third of the array
    var sum3 = divideAndConquerSum(subArray3);      //Recursive call for the last third of the array

    return sum1 + sum2 + sum3;      //Return the sum of all three sub-arrays
    }
}




