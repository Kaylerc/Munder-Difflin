document.getElementById('pic1').addEventListener('mouseover', mouseOver);
document.getElementById('pic1').addEventListener('mouseout', mouseOut);
// var text = document.getElementById('text1').value

function mouseOver() {
  document.getElementById('pic1').style.opacity=0.5;
  document.getElementById('text1').style.opacity=1;
}
function mouseOut() {
  document.getElementById('pic1').style.opacity=1;
  document.getElementById('text1').style.opacity=0;

}

 // +++++++++++++pic2+
 document.getElementById('pic2').addEventListener('mouseover', mouseOver2);
 document.getElementById('pic2').addEventListener('mouseout', mouseOut2);

 function mouseOver2() {
   document.getElementById('pic2').style.opacity=0.5;
   document.getElementById('text2').style.opacity=1;
 }

 function mouseOut2() {
   document.getElementById('pic2').style.opacity=1;
   document.getElementById('text2').style.opacity=0;
 }


 // +++++++++++++pic3+++
 document.getElementById('pic3').addEventListener('mouseover', mouseOver3);
 document.getElementById('text3').addEventListener('mouseout', mouseOut3);

 function mouseOver3() {
  document.getElementById('pic3').style.opacity=0.5;
  document.getElementById('text3').style.opacity=1;
 }

 function mouseOut3() {
   document.getElementById('pic3').style.opacity=1;
   document.getElementById('text3').style.opacity=0;
   }

   
 // +++++++++++++pic4+++
 document.getElementById('pic4').addEventListener('mouseover', mouseOver4);
 document.getElementById('pic4').addEventListener('mouseout', mouseOut4);

 function mouseOver4() {
   document.getElementById('pic4').style.opacity=0.5;
 }

 function mouseOut4() {
   document.getElementById('pic4').style.opacity=1;
 }
 // ++++++++++++pic5++++
 document.getElementById('pic5').addEventListener('mouseover', mouseOver5);
 document.getElementById('pic5').addEventListener('mouseout', mouseOut5);

 function mouseOver5() {
   document.getElementById('pic5').style.opacity=0.5;
 }

 function mouseOut5() {
   document.getElementById('pic5').style.opacity=1;
 }
 // +++++++++++++pic6+++
 document.getElementById('pic6').addEventListener('mouseover', mouseOver6);
 document.getElementById('pic6').addEventListener('mouseout', mouseOut6);

 function mouseOver6() {
   document.getElementById('pic6').style.opacity=0.5;
 }

 function mouseOut6() {
   document.getElementById('pic6').style.opacity=1;
 }
