document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );

//append all elements
document.body.insertBefore(div, document.body.firstChild);
//set attributes for div
div.id = 'myDivId';
div.style.position = 'relative';
div.style.top = '0px';
div.style.left = '0px';
div.style.zIndex = '100000001';
div.style.width = '100%';   
div.style.height = '50px';
div.style.backgroundColor = 'red';
