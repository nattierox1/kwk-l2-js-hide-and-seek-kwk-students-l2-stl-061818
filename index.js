//Code your solution here
function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget(){
<<<<<<< HEAD
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++){
  lis[i].innerHTML = Number.parseInt((i + 1).toString())
  }
}
function deepestChild() {
  return document.querySelector('#grand-node div div div div')
  
=======
  return document.getElementById('nested').querySelector('.target')
>>>>>>> 96906d016042de7c890f930feeac20188bec4d0b
}