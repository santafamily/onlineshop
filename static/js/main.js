// const docNames = [
//   'manCart1',
//   'manCart1-1',
//   'manCart1-2',
//   'manCart1-4',
//   'shopPage',
//   'member',
//   'intro',
// ];

// // window.addEventListener('DOMContentLoaded', initFun);

// function initFun() {
//   let swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     grabCursor: true,
//     navigation: {
//       nextEl: '#tab-next',
//       prevEl: '#tab-prev',
//     },
//   });

//   setTimeout(
//     console.log.bind(
//       console,
//       'please use loadDoc( /** Array<string> */ docNames[idx])'
//     )
//   );
// }

// function loadDoc(fileName, parentId = 'root-slot') {
//   let pathname = `./partial/${fileName}.html`;
//   let xhttp = new XMLHttpRequest();
//   let method = 'GET';

//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById(parentId).innerHTML = this.responseText;
//     }
//   };
//   xhttp.open(method, pathname, true);
//   xhttp.send();
// }


// loadDoc(docNames[0]);

// Ready
$(function() {
  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      // open: 'drawer-open',
      // close: 'drawer-close',
      // dropdown: 'drawer-dropdown'
    },
    iscroll: {
      // Configuring the iScroll
      // https://github.com/cubiq/iscroll#configuring-the-iscroll
      // mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });

  // $('.drawer').on('drawer.opened', function(){
  //   $('#toggleMenuLable').text('close')
  // }).on('drawer.closed', function () {
  //   $('#toggleMenuLable').text('open')
  // });

  $("#header-slot").sticky();

});



