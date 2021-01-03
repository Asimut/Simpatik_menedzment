function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5biz971yIuG":
        Script1();
        break;
      case "6jDRY6mItYX":
        Script2();
        break;
  }
}

function Script1()
{
  window.frames[0].frameElement.contentWindow.CreateBook();
}

function Script2()
{
  window.frames[0].frameElement.contentWindow.CreateBook();
}

