function Loadjson(file,callback) {
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState===4 && x.status == "200"){
      callback(x.responseText);
    }
  };
  x.send(null);
}
Loadjson("data.json",function(text){
var data = JSON.parse(text);
console.log(data);
})
