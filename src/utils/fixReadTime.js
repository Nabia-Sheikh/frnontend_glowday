const fixReadTime = (incorrectDateString) => {
  // Split the string on the space character
  const parts = incorrectDateString.split(" ")

  // Extract the read time string
  const readTimeString = parts[2]
  const year = readTimeString.substring(0, 4)
  const time = readTimeString.substring(4, 5)
  const monthDate = parts.splice(0, 2).join(" ")
  const mintRead = parts.splice(1, 3).join(" ")

  return {
    date: monthDate + year,
    time: time + " " + mintRead,
  }
}

export default fixReadTime
