var begin = document.getElementById('begining')
var end = document.getElementById('end')
var step = document.getElementById('step')
var run = document.getElementById('run')
var answer = document.getElementById('answer')


function range(start, end, step = 1) {
  var returnList = []

  if (step == 0) {
    step = 1
  }

  if (end < start) {
    while (start > end - 1) {
      returnList.push(start)
      start -= step
    }
  } else if (end > start) {
    while (end + 1 > start) {
      returnList.push(start)
      start += step
    }
  }
  return returnList
}

function counter() {
  var res = range(Number(begin.value), Number(end.value), Number(step.value))
  answer.innerHTML = ''
  for (var i = 0; i < res.length; i++) {
    answer.innerHTML += `${res[i]} 👉 `
  }
  answer.innerHTML += '🏴‍☠️'
}


run.addEventListener('click', counter)