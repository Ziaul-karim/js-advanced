const student = [
    {id:34, name: "Zia"},
    {id:21, name: "Samad"},
    {id:36, name: "Rumon"},
    {id:35, name: "Mahmud"},
]
// const result = [];

// for(let i = 0; i < student.length; i++){
//     const element = student[i].name;
//     result.push(element)
// }

const names = student.map( s => s.name);
const bigger = student.filter( s => s.id >30)
const biggerOne = student.find( s => s.id >30)
console.log(biggerOne)