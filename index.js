const webdriver=require('selenium-webdriver');

const USERNAME='agustin.amaya.g21';

const KEY='gotUbOMQKfA1664aZFTVH4EHx4UcOQDIiUV3YNVNN2mocfZL2v'

const GRID_HOST='hub.lambdatest.com/wd/hub';

function searchTextOnGoogle(){
    //setup input capabilities
    const capability = {
        "browserName": "Chrome",
        "browserVersion": "108.0",
        "LT:Options": {
            "username": "agustin.amaya.g21",
            "accessKey": "gotUbOMQKfA1664aZFTVH4EHx4UcOQDIiUV3YNVNN2mocfZL2v",
            "visual": true,
            "video": true,
            "platformName": "Windows 8",
            "project": "Untitled",
            "tunnel": false,
            "w3c": true,
            "plugin": "node_js-node_js"
        }
    }

    const gridUrl='https://'+USERNAME+':'+KEY+'@'+GRID_HOST;

    const driver=new webdriver.Builder().usingServer(gridUrl).withCapabilities(capability).build();

    //Navegar a una url, buscar texto y obtener titulo de la pagina
    driver.get('https://www.google.com/ncr').then(function(){
        driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function()
        {
          driver.getTitle().then(function(title)
          {
              setTimeout(function()
              {
                  console.log(title);
                  driver.quit();
              },5000);
          })
        });
    });


}

searchTextOnGoogle();
