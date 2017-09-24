var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/OneWheel.jpg') {
      myImage.setAttribute ('src','images/OneWheel2.jpg');
    } else {
      myImage.setAttribute ('src','images/OneWheel.jpg');
    }
}
