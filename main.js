// function Loadjson(file,callback) {
//   var x = new XMLHttpRequest();
//   x.overrideMimeType("application/json");
//   x.open("GET",file,true);
//   x.onreadystatechange=function(){
//     if(x.readyState===4 && x.status == "200"){
//       callback(x.responseText);
//     }
//   };
//   x.send(null);
// }
// Loadjson("data.json",function(text){
// var data = JSON.parse(text);
// console.log(data);
// basics(data.details);
// ch1(data.Career);
// ed(data.education);
// ks(data.keyskills);
// ach(data.achievements);
// })

function Loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}

var file=Loadjson("data.json");
file.then(data=>{
  console.log(data);
  basics(data.details);
  ch1(data.Career);
  ed(data.education);
  ks(data.keyskills);
  ach(data.achievements);
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

var child2=document.querySelector(".child2");
function ed(edu) {

  var educ=document.createElement("h2");
  educ.textContent="Education Details:";
  child2.appendChild(educ);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<edu.length;i++)
  {
     var deg = document.createElement("h3");
     deg.textContent = edu[i].degree;
     child2.appendChild(deg);

     var u1 = document.createElement("u1");
     var li = document.createElement("li");
     li.textContent= edu[i].institute;
     u1.appendChild(li);
     child2.appendChild(u1);

     var li2=document.createElement("li");
     li2.textContent=edu[i].date;
     u1.appendChild(li2);
     child2.appendChild(u1);
}
}

var child2=document.querySelector(".child2");
function ks(key) {

  var k=document.createElement("h2");
  k.textContent="Key-Skills:";
  child2.appendChild(k);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var keys=document.createElement("table");
  keys.border="1";
  child2.appendChild(keys);

  tabledata="";

  for(i=0;i<key.length;i++)
  {
    tabledata+="<tr><td>"+key[i].title+"</td><td>"+key[i].info+"</td></tr>";
  }
  keys.innerHTML=tabledata;
}

var child2=document.querySelector(".child2");
function ach(ment) {

  var k=document.createElement("h2");
  k.textContent="Achievements:";
  child2.appendChild(k);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var am=document.createElement("table");
  am.border="1";
  child2.appendChild(am);

  tabledata="";

  for(i=0;i<ment.length;i++)
  {
    tabledata+="<tr><td>"+ment[i].title+"</td><td>"+ment[i].info+"</td></tr>";
  }
  am.innerHTML=tabledata;
}
     // var k = document.createElement("h3");
     // k.textContent = keys[i].title;
     // child2.appendChild(k);
     //
     // var u1 = document.createElement("u1");
     // var li = document.createElement("li");
     // li.textContent= keys[i].info;
     // u1.appendChild(li);
     // child2.appendChild(u1);
function openpage(){
  window.open("resume.html","_self",true)
}
