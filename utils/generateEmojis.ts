const animals = Object.freeze([
  '🐎',
  '🐱',
  '🐺',
  '🦁',
  '🦊',
  '🐴',
  '🐘',
  '🐻',
  '🐆',
  '🐅',
])

const generateEmojis = (num: number): string[] => {
  const output = []
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * animals.length)
    output.push(animals[randomIndex])
  }
  return output
}

export default generateEmojis
