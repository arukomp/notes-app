function getAppDiv() {
  return document.getElementById('app');
}

function changeContents(element, newContent) {
  element.innerHTML = newContent;
}

console.log(getAppDiv());
changeContents(getAppDiv(), "howdy");
