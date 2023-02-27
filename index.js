window.onload = function () {
  var list = document.getElementById("shuffleSort");

  function shuffle(items) {
    var listElement = items.slice(0),
      temp,
      i = listElement.length,
      rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = listElement[rand];
      listElement[rand] = listElement[i];
      listElement[i] = temp;
    }
    return listElement;
  }

  function shuffleNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  function sort(items) {
    var listElement = items.slice(0),
      temp,
      i = listElement.length + 1;
    while (--i) {
      temp = document.getElementById(i);
      listElement[i] = temp;
    }
    return listElement;
  }

  function sortNodes() {
    var element = list.children,
      i = 0;
    element = Array.prototype.slice.call(element);
    element = sort(element);
    while (i < element.length) {
      list.appendChild(element[i]);
      ++i;
    }
  }

  document.getElementById("shuffle").onclick = shuffleNodes;
  document.getElementById("sortElements").onclick = sortNodes;
};
