const formatDate = (date: Date) => {
  const newDate = new Date(date)
  const [year, month, day] = [
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate(),
  ]
  return `${year}/${month}/${day}`
}
export default formatDate
