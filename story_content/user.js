function ExecuteScript(strId)
{
  switch (strId)
  {
      case "648mceAPZse":
        Script1();
        break;
  }
}

function Script1()
{
  window.frames[0].frameElement.contentWindow.CreateBook();
}

