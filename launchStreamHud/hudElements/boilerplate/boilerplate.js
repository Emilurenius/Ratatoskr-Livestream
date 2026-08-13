setInterval(updateText, 1000);

function updateText()
{
  const date = new Date();
  document.getElementById("text").innerHTML = date.toLocaleTimeString();
}
