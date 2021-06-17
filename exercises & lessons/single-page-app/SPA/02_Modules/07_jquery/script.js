

$(document).ready(function () {
  //$(selector).action()
  // $('button#hide').click(function() {
  //     $('p.par').hide('slow');
  // })

  //EVENTS
  //selectors: string, css-selector
  // $('button#show').click(function() {
  //     $('.par').show('slow');
  // })

  $("p.par").dblclick(function () {
    this.innerText = "new content";
  });

  $('input[type="text"]').focus(function () {
    this.style.backgroundColor = "lightblue";
  });
  $('input[type="text"]').blur(function () {
    this.style.backgroundColor = "white";
  });

  //EFFECTS
  //$(selector).effect()
  $("#hide").click(function () {
    $("p").fadeOut(3000);
  });
  $("#show").click(function () {
    $("p").fadeIn(3000);
  });
  $("#toggle").click(function () {
    $("p").fadeToggle(3000);
  });

  //if you use arrow function instead of anonymouse function 'this' keyword wont reffer to the grabbed element.
  // $('#toggle').click(()=> {
  //     console.log(this)
  // })

  $("#sd").click(function () {
    console.log("slidedown");
    $(".circle").slideDown(1000);
  });

  $("#su").click(function () {
    $(".circle").slideUp(1000);
  });

  $("#st").click(function () {
    $(".circle").slideToggle(1000);
  });

  $("#animate").click(function () {
      $(".circle")
          .animate({ left: "500px" }, 3000)
          .animate({ width: "300px", height: "300px" }, 2000)
          .animate({ backgroundColor: 'yellow' }, 3000);
  });
    
    $("#stop").click(function () {
      $(".circle").stop(true, true);        //stop(stopAll, goToEnd);
    });


    $('input[type="text"]').change(function (e) {
       
        //get and set with html() text()  val()
        //$('p#output').text(`${this.name}:${e.target.value}`)
        $('p#output').html(`<strong>${this.name}</strong>:${e.target.value}`)
        console.log($('#fname').val());
        $('#age').val('36')
    })

    $('p#output').text(' | paragraph content | ')
    $('p#output').append('appended value')
    $('p#output').prepend('prepended value')
    
    $('p#output').before('<p>before value</p>')
    $('p#output').after('<p>after value</p>')
    
    //remove an element
    // $('p#output').remove();
    $('p#output').empty();

    $('p').addClass('text-blue');
    $('p').addClass('another-class');
    
    
    $('p').removeClass('another-class');

    $('button#toggle').click(function() {
        $('p').toggleClass('text-blue');
    })

    $('p').css({'font-family':"Arial", 'font-weight':"700", "color": 'tomato'})

});

// $(function() {
//     //$(selector).action()
// })
