var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.15em solid #3dcfff;}";
        document.body.appendChild(css);
    };


Resources


// var
//   words = ['hey I like SASS','I used to like LESS','I also heart Jade'],
//   part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 5,
//   speed = 100;

// var wordflick = function(){
//   setInterval(function(){
//       if (forwards) {
//         if(offset >= words[i].length){
//           ++skip_count;
//           if (skip_count == skip_delay) {
//             forwards = false;
//             skip_count = 0;
//           }
//         }
//       }
//       else {
//          if(offset == 0){
//             forwards = true;
//             i++;
//             offset = 0;
//             if(i >= len){
//               i=0;
//             } 
//          }
//       }
//       part = words[i].substr(0, offset);
//       if (skip_count == 0) {
//         if (forwards) {
//           offset++;
//         }
//         else {
//           offset--;
//         }
//       }
//     	$('#app').text(part);
//   },speed);
// };

// $(document).ready(function(){
//   wordflick();
//   window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.15em solid #ffffff}";
//     document.body.appendChild(css);
// };
  
// });


