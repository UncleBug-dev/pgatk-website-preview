
  jQuery(document).ready(function(){
    var images = document.querySelectorAll('img.fancy-box');
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var parentElement = image.parentElement;
      var a = document.createElement('a');
      a.className='st-fancybox';
        a.setAttribute("data-fancybox", "gallery");
      a.href = image.getAttribute('src');
      a.appendChild(image);
      parentElement.appendChild(a);
    }
  });
