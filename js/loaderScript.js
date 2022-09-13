const loader = document.querySelector('.loader');
const metaLoaderStyles = document.getElementById('meta');
/*--------------------Por Tiempo-------------------------

function init() {
   setTimeout (() => {
      metaLoaderStyles.href = "#";

      loader.style.opacity = 0;
      loader.style.display = 'none';
  
   },1000);
}

init();

*/
window.onload = function () {
   metaLoaderStyles.href = '#';

   loader.style.opacity = 0;
   loader.style.display = 'none';
}

