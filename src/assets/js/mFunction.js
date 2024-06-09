function startSideMenu(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var trigger = document.querySelectorAll('.sidenav-trigger');
    trigger.forEach(function(elem) {
      elem.addEventListener('click', function() {
        var sidenav = document.getElementById('mobile-demo');
        sidenav.classList.toggle('open');
      });
    });
  });
}
startSideMenu();
