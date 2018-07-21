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
basics(data.details);
ch1(data.Career);
})

var child1=document.querySelector(".child1");
function basics(det) {
  var image=document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name=document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var ph=document.createElement("h3");
  ph.textContent = det.phone;
  child1.appendChild(ph);

  var email=document.createElement("a");
  email.href="mailto:mail2srinadh143@gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);

  var add=document.createElement("h2");
  add.textContent="Address:";
  child1.appendChild(add);

  var hr=document.createElement("hr");
  child1.appendChild(hr);

  var address=document.createElement("h3");
  address.textContent=det.address;
  child1.appendChild(address);
}
var child2=document.querySelector(".child2");
function ch1(inf) {
  var a=document.createElement("h2");
  a.textContent="Carrier Objective:";
  child2.appendChild(a);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var info=document.createElement("p");
  info.textContent=inf.info;
  child2.appendChild(info);

}
