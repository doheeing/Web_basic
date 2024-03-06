let names = [
    "Steven Paul Jobs","Bill Gates", "Mark Elliot Zuckerberg", "Elon Musk", "Jeff Bezos",
    "Warren Edward Buffett", "Larry Page", "Larry Ellison","Tim Cook", "Lloyd Blankfein"
  ];

  let doubleLetter =  names.filter((item) => {
    let splitName = item.split("");
    console.log("1",splitName)
    console.log("2",splitName.some((letter, index) => letter == splitName[index + 1]))

    return splitName.some((letter, index) => letter == splitName[index + 1])
  })

console.log("3",doubleLetter)