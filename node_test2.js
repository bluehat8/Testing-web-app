var webdriver= require('selenium-webdriver');

function searchTextOnGoogle(){
    //Abrir el navegador

    var driver= new webdriver.Builder().forBrowser('chrome').build();

    //Ir a una url
    driver.get('https://wwww.google.com').then(function()
    {
      driver.findElement(webdriver.By.linkText('Automation')).click().then(function()
      {
        driver.getTitle().then(funcion(title))
        {
            setTimeout(function()
            {
                console.log(title);
                driver.quit();
            },5000);
        }
      })
    });
}
