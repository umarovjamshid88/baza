var ppl = +prompt('how many people you want to add to data')
var data = [];
for (let i = 0; i < ppl; i++) {
   let name = prompt('enter name and age') 
    data.push(name)
} 
var id = +prompt('id of person')
for (const key in data) {
   
   if (id == key) {
    console.log('you entered id = '+ id + ' name and age are equal to '+ data[id]);
   }
   
}
console.log(data);
