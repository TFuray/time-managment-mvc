// Calculate total time per activity

function calcTime (start, end) {
  let startArr = start.split(':')
  let endArr = end.split(':')
  let startSeconds =
    parseInt(startArr[0], 10) * 60 * 60 + parseInt(startArr[1], 10) * 60
  let endSeconds =
    parseInt(endArr[0], 10) * 60 * 60 + parseInt(endArr[1], 10) * 60
  return (endSeconds - startSeconds) * 60
}

module.exports = {
    calcTime: calcTime,
}