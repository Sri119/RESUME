function Loadjson(file) {
  var xml= new  XMLHttpRequest();
  xml.overrideMime Type("application/json");
  xml.open("GET",file,true);
  xml.onreadystatechange=function(){
    if(xml.readyState===4 && xml.status == "200"){
      callback(xml.responseText);
    }
  };
  xml.send(null);
}
Loadjson("data.json",function(text){
var data = JSON.parse(text);
console.log(data);

})
