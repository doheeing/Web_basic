let names = [
    "Steven Paul Jobs","Bill Gates", "Mark Elliot Zuckerberg", "Elon Musk", "Jeff Bezos",
    "Warren Edward Buffett", "Larry Page", "Larry Ellison","Tim Cook", "Lloyd Blankfein"
  ];

let answer = names.map((item)=>{
  let splitName = item.split(" ");
  console.log(splitName)
  let initial = "";
  splitName.forEach((nameItem)=>initial +=nameItem[0])
  return initial
})

console.log(answer)
