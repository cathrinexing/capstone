  $(document).ready(function() {
    //jquery code in here

    var counter = 0;

    var container1 = false;
    var container2 = false;
    // var container3 = false;

    // reset button. click
    // $(".factPic").html("");
    // container1 = false;
    //$(".factbutton").css("background","green");

    //reset button functiobn
    $("#reset").click(function() {

       // $(".hints").html("click button to show factsheets");
 $(".text").html("");
 $(".picture").html("");

      // $("#factpic1").html("");
      // $("#factpic2").html("");

      // $("#facttext1").html("");
      // $("#facttext2").html("");

      container1 = false;
      container2 = false;
      // container3 = false;
      $(".factbutton").css("background", "lightblue");
    });





    //button um
    $("#um").click(function() {
      // what do you want to do when you click um image

      if (container1 == false) {

        $("#facttext1").html('<a href="https://interactive.miami.edu">University of Miami</a>');
        $("#factpic1").html('<img src="img/UM.png" class="factPicImages" alt="um"  width="400">');
        $("#um").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#facttext2").html('<h4 id="facttext1"><a href="https://interactive.miami.edu">University of Miami</h4>');


        $("#factpic2").html('<img src="img/UM.png" class="factPicImages" alt="um"  width="400">');
        $("#um").css("backgrxound", "yellow");
        container2 = true;
      }
      //  else if (container3 == false) {
      //   $("#factpic3").html('<img src="img/um.jpg" class="factPicImages" alt="um"  width="400">');
      //   $("#um").css("background", "yellow");
      //   container3 = true;
      // }
    });


    //button mit
    $("#mit").click(function() {

      if (container1 == false) {
        $("#facttext1").html('<a href="https://www.media.mit.edu/graduate-program/about-media-arts-sciences/">Massachusetts Institute of Technology</a>');

        $("#factpic1").html('<img src="img/MIT.png"  alt="parsons" class="factPicImages" width="400">');
        $("#mit").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#facttext2").html('<a href="https://www.media.mit.edu/graduate-program/about-media-arts-sciences/">Massachusetts Institute of Technology</a>');
        $("#factpic2").html('<img src="img/MIT.png"  alt="parsons" class="factPicImages" width="400">');
        $("#mit").css("background", "yellow");
        container2 = true;
      }
      // else if (container3 == false) {
      //   $("#factpic3").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages"height="500" width="400">');
      //   $("#mit").css("background", "yellow");
      //   container3 = true;
      // }

    });


    //button uwhcde
    $("#uwhcde").click(function() {

      if (container1 == false) {
        $("#facttext1").html('<a href="https://interactive.miami.edu">University of Washington</a>');
        $("#factpic1").html('<img src="img/uwhcde.png"  alt="parsons" class="factPicImages" width="500">');
        $("#uwhcde").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#facttext2").html('<a href="https://interactive.miami.edu">University of Washington</a>');
        $("#factpic2").html('<img src="img/uwhcde.png"  alt="parsons" class="factPicImages" width="500">');
        $("#uwhcde").css("background", "yellow");
        container2 = true;
      }
      // else if (container3 == false) {
      //   $("#factpic3").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages" width="500">');
      //   $("#uwhcde").css("background", "yellow");
      //   container3 = true;
      // }

    });

    $(".careerchoose").click(function() {
      $("#otherfactors").show();
      $("#no").show();
    });


    $(".choosetwo").click(function() {
      $("#allresult").show();
      $("#resetfilter").show();

    });



$("#tuitionbutton").click(function() {
  $("#beeswarm").show();
  $("#mapwhole").hide();
  $("#majorwhole").hide();
  $("#degreewhole").hide();
});

$("#locationbutton").click(function() {
  $("#beeswarm").hide();
  $("#mapwhole").show();
  $("#majorwhole").hide();
    $("#degreewhole").hide();
});

$("#majorbutton").click(function() {
  $("#beeswarm").hide();
  $("#mapwhole").hide();
  $("#majorwhole").show();
    $("#degreewhole").hide();
});
$("#degreebutton").click(function() {
  $("#beeswarm").hide();
  $("#mapwhole").hide();
  $("#majorwhole").hide();
    $("#degreewhole").show();
});
  }); //end of document ready
