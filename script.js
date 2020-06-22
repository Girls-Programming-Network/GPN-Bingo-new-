
    function getCookie(){
      cookie = document.cookie.split(';').map(function(c) {
        return c.trim().split('=').map(decodeURIComponent);
      }).reduce(function(a, b) {
      try {
        a[b[0]] = JSON.parse(b[1]);
      } catch (e) {
        a[b[0]] = b[1];
      }
      return a;
      }, {});
      return cookie
    }


    cookie = getCookie()

    if (typeof cookie !== 'undefined') {
      values = cookie["button_values"];
    }

    if (typeof values !== 'undefined') {
      for (i = 0; i < values.length; i++) {
        if (values[i] === 1) {
          document.getElementById("bingo" + (i)).classList.add("pressed");
        } 
      }
    } else {
      var values = [0, 0, 0, 0, 
                    0, 0, 0, 0, 
                    0, 0, 0, 0,
                    0, 0, 0, 0];
    }

    function setCookie(values){
        var json_str = JSON.stringify(values);
        // createCookie('button_values', json_str);
        var cookieString = "button_values=" + json_str
        document.cookie = cookieString;
    }


    function pressed(e, num) {
      e.classList.toggle('pressed');
      if (e.classList.contains('pressed')) {
        values[num] = 1;
      } else {
        values[num] = 0
      }
      setCookie(values)
      }

    bingo0.onclick = pressed.bind(this, bingo0, 0);
    bingo1.onclick = pressed.bind(this, bingo1, 1);
    bingo2.onclick = pressed.bind(this, bingo2, 2);
    bingo3.onclick = pressed.bind(this, bingo3, 3);
    bingo4.onclick = pressed.bind(this, bingo4, 4);
    bingo5.onclick = pressed.bind(this, bingo5, 5);
    bingo6.onclick = pressed.bind(this, bingo6, 6);
    bingo7.onclick = pressed.bind(this, bingo7, 7);
    bingo8.onclick = pressed.bind(this, bingo8, 8);
    bingo9.onclick = pressed.bind(this, bingo9, 9);
    bingo10.onclick = pressed.bind(this, bingo10, 10);
    bingo11.onclick = pressed.bind(this, bingo11, 11);
    bingo12.onclick = pressed.bind(this, bingo12, 12);
    bingo13.onclick = pressed.bind(this, bingo13, 13);
    bingo14.onclick = pressed.bind(this, bingo14, 14);
    bingo15.onclick = pressed.bind(this, bingo15, 15);
    bingo16.onclick = pressed.bind(this, bingo16, 16);
    bingo17.onclick = pressed.bind(this, bingo17, 17);
    bingo18.onclick = pressed.bind(this, bingo18, 18);
    bingo19.onclick = pressed.bind(this, bingo19, 19);
    bingo20.onclick = pressed.bind(this, bingo20, 20);
    bingo21.onclick = pressed.bind(this, bingo21, 21);
    bingo22.onclick = pressed.bind(this, bingo22, 22);
    bingo23.onclick = pressed.bind(this, bingo23, 23);
    bingo24.onclick = pressed.bind(this, bingo24, 24);