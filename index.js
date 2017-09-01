function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(search){
  return document.querySelector('.target')
}


function deepestChild(){
  let nodes =  document.querySelectorAll('#grand-node div');

  let node =  nodes[nodes.length-1];
  return node

  }

  function increaseRankBy(n) {
    let lists = document.querySelectorAll('.ranked-list li')
    for(let i in lists){
      lists[i].innerHTML = (parseInt(lists[i].innerHTML) + n).toString()
    }
  }

// lists[i].innerText = "3"
