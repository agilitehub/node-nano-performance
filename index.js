const timing = {}

const timeStart = (key) => {
  if (!key) {
    return null
  }

  if (timing[key]) {
    timeEnd(key)
  }

  timing[key] = process.hrtime()
  return true
}

const timeEnd = (key, format = 'ms') => {
  if (!key) {
    return null
  }

  const hrStart = timing[key]

  if (!hrStart) {
    return null
  }

  let formatValue = 1000000

  switch (format.toLowerCase()) {
    case 'ns':
      formatValue = 1
      break
  }

  const NS_PER_SEC = 1e9
  const hrEnd = (process.hrtime(hrStart))
  const result = (hrEnd[0] * NS_PER_SEC + hrEnd[1]) / formatValue

  console.log(`${key}: ${result} ${format}`)
  delete timing[key]

  return true
}

// EXPORTS
exports.timeStart = timeStart
exports.timeEnd = timeEnd
