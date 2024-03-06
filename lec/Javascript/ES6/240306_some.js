let names = [
    "Steven Paul Jobs","Bill Gates", "Mark Elliot Zuckerberg", "Elon Musk", "Jeff Bezos",
    "Warren Edward Buffett", "Larry Page", "Larry Ellison","Tim Cook", "Lloyd Blankfein"
  ];

// names.forEach = ((items)=>{
//   let A = items.split("")
//   let B = A.toUppercase()

// })
// console.log(names.some((item)=> item.includes('p'or'P'))

console.log(names.every((item)=>{
  let splitName = item.split(' ')
  console.log(splitName)

  splitName.pop()
  console.log(splitName)
  return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("a"))
}))