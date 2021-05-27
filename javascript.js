$("#flipbook").turn({
		width: 765,
		height: 575,
        display: 'double',
		autoCenter: true
	});

$(document).ready(function(){
    $("#header").load("header.html");
    $("#p1").load("page1.html");
    $("#p2").load("page2.html");
    $("#p3").load("page3.html");
    $("#p4").load("page4.html");
    $("#p5").load("page5.html");
    $("#footer").load("footer.html");
    $("#index").load("index.html");
    
});

var y=document.getElementById("index");
y.style.display="none";
function present()
{
  var x =document.getElementById("flipbook");
   
  if (y.style.display === "none") 
  {
   x.style.display="none";
    y.style.display = "block";
    
  }
    else
  {
    y.style.display = "none";
   x.style.display="block";   
  }

}
/*$(document).ready(function()
                  {
    $("#mg").click(function()
                   {
        $("#index").load("index.html");
    });
});*/
/*$(document).ready(function(){
$("input").click(function()
{
$("#index").toggle();
});
});
*/
/*$(document).ready(function()
                  {
    $("#mg").click(function()
                   {
        $("table").hide();
    });
});*/
/*$(document).ready(function()
                  {
    $("#mg").click(function()
                   {
        $("#d").load("index.html");
    });
});*/

var pno;
var x=document.getElementById("flipbook");
function pageno(pno)
{
    $("#flipbook").turn("page",pno);
     x.style.display="block";
    y.style.display="none";

}
var e=document.getElementById("flipbook");
function fullview()
{
    if (e.requestFullscreen)
    {
    e.requestFullscreen();
  } 
    else if (e.mozRequestFullScreen)
    { /* Firefox */
    e.mozRequestFullScreen();
  }
    else if (e.webkitRequestFullscreen)
    { /* Chrome, Safari & Opera */
    e.webkitRequestFullscreen();
  }
    else if (e.msRequestFullscreen)
    { /* IE/Edge */
    e.msRequestFullscreen();
  }
    $("#flipbook").turn("zoom",2);
}

var elem=document.getElementById("p1");
var elem1=document.getElementById("p2");
var elem2=document.getElementById("p3");
var elem3=document.getElementById("p4");
var col=document.getElementById("body");
function contrast()
{
  col.style.backgroundColor="black";
  elem.style.backgroundColor="white";
  elem1.style.backgroundColor="white";
  elem2.style.backgroundColor="white";
  elem3.style.backgroundColor="white";
  elem.style.color="black";
  elem1.style.color="black";
  elem2.style.color="black";
  elem3.style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("s1").style.color="black";
  document.getElementById("t1").style.color="black";
  document.getElementById("h1").style.color="black";   
     
}
function magnify()
{
    $("#flipbook").turn("zoom",2);
}
function demagnify()
{
    $("#flipbook").turn("zoom",1);
}