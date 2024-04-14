export const numberFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
})

export function splitNumUnit(num: string) {
  const regex = /(\d*\.?\d+)([A-Za-z]*)/
  const match = num.match(regex)

  if (match) {
    const number = parseFloat(match[1])
    const unit = match[2] || ""
    return [number, unit]
  } else {
    return null
  }
}
