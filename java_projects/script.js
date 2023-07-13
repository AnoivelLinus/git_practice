const input = 'petryo';
const vowels = ['a','e','i','o','u']; 
const resultArray = [];
for (let i=0; i <input.length; i++){
  //console.log(v)
  for (let v=0; v <vowels.length; v++){
    //console.log(i)
    if(input[i] === vowels[v]){
      return console.log(vowels[v])
    }
  }
}