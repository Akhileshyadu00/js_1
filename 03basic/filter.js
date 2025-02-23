const coding = ["a", "b", "c", "d", "e"]

const value = coding.forEach( (item) => {
    //console.log(item);
    return item  // not return value
    
})
//console.log(value);  //undefined


const myNUms = [1,2,3,4,5,6,7,8,9,]
const newNums = myNUms.filter( (num) => num > 4)  // {} rertun empty array, use retun 
//console.log(newNums);




// 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNum = myNumber.map((num) => num + 10 )

const newNum = myNumber
        .map((num) => num * 10)
        .map((num) => num + 1)
        .filter((num) => num >= 40)

//console.log(newNum);


// Reduce

const total = myNumber.reduce( (acc, cvalue) => acc + cvalue, 0) 
console.log(total);






