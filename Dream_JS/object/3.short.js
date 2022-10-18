const x = 0;
const y = 0;

// const coordinate = {x: x, y: y}; 

// 객체 축약해서 쓰면 
const coordinate = {x, y}; // { x: 0, y: 0 }

console.log(coordinate);

// function human(name, age){
//     return{
//         name: name,
//         age: age,
//     };
// }

// 객체 축약해서 쓰면 
function human(name, age){
    return{
        name,
        age,
    };
}

console.log(human.name); // human