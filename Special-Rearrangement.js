
function specialRearrangement() {
  const length1 = parseInt(prompt('Enter the length of your list: '))
  let nums = []

  for (let i = 0; i < length1; i++) {
    nums.push(parseInt(prompt('Enter a number: ')))
  }

  let oddValues = nums.filter((num) => num % 2 !== 0).sort((a, b) => a - b)
  let evenValues = nums.filter((num) => num % 2 === 0).sort((a, b) => b - a)

  console.log([...evenValues, ...oddValues].join(' '))
}
specialRearrangement()
