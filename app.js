var http = require('http');
const kelvinToCelsius = require('kelvin-to-celsius');
var url ='https://api.openweathermap.org/data/2.5/weather?q=dasuya&units=metric&lang=hi&appid=d988fea20c02ea8882beb28367c7c3ff';
var server =http.createServer(function(request,response){
var request =require('request');
request(url,function(err,res,body){
    var data=JSON.parse(body);
    const cel = `${data.main['temp']}`-273.15 ;
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+ '1City Name:'+ data['name']+'<br>'+'</h1>');
    response.write("<h2>"+ 'Temperature:'+ data.main['temp']+'<br>wind:'+ data.main['feels_like']+'<br>'+'</h1>');
    response.write("</div></body></html>");
    response.end();
});

}).listen(3000);