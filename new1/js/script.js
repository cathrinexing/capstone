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


//SHOW DETAILED TABLE
$("#buttonr1").click(function(){
  $(".tr1").show();
});
$("#buttonr2").click(function(){
  $(".tr2").show();
});

$("#buttonr3").click(function(){
  $(".tr3").show();
});
$("#buttonr4").click(function(){
  $(".tr4").show();
});
$("#buttonr5").click(function(){
  $(".tr5").show();
});
$("#buttonr6").click(function(){
  $(".tr6").show();
});
$("#buttonr7").click(function(){
  $(".tr7").show();
});

$("#buttonr8").click(function(){
  $(".tr8").show();
});
    $("#buttonr9").click(function(){
      $(".tr9").show();
    });
    $("#buttonr10").click(function(){
      $(".tr10").show();
    });

    $("#buttonr11").click(function(){
      $(".tr11").show();
    });
    $("#buttonr12").click(function(){
      $(".tr12").show();
    });

    $("#buttonr13").click(function(){
      $(".tr13").show();
    });
    $("#buttonr14").click(function(){
      $(".tr14").show();
    });
    $("#buttonr15").click(function(){
      $(".tr15").show();
    });
    $("#buttonr16").click(function(){
      $(".tr16").show();
    });
    $("#buttonr17").click(function(){
      $(".tr17").show();
    });

    $("#buttonr18").click(function(){
      $(".tr18").show();
    });
    $("#buttonr19").click(function(){
      $(".tr19").show();
    });
    $("#buttonr20").click(function(){
      $(".tr20").show();
    });

    $("#buttonr21").click(function(){
      $(".tr21").show();
    });

    $("#buttonr22").click(function(){
      $(".tr22").show();
    });

    $("#buttonr23").click(function(){
      $(".tr23").show();
    });

    $("#buttonr24").click(function(){
      $(".tr24").show();
    });
    $("#buttonr25").click(function(){
      $(".tr25").show();
    });

    $("#buttonr26").click(function(){
      $(".tr26").show();
    });
    $("#buttonr27").click(function(){
      $(".tr27").show();
    });
      $("#buttonr28").click(function(){
        $(".tr28").show();
      });
      $("#buttonr29").click(function(){
        $(".tr29").show();
      });
      $("#buttonr30").click(function(){
        $(".tr30").show();
      });

      $("#buttonr31").click(function(){
        $(".tr31").show();
      });
      $("#buttonr32").click(function(){
        $(".tr32").show();
      });
      $("#buttonr33").click(function(){
        $(".tr33").show();
      });
      $("#buttonr34").click(function(){
        $(".tr34").show();
      });

      $("#buttonr1_").click(function(){
        $(".tr1_").show();
      });
      $("#buttonr2_").click(function(){
        $(".tr2_").show();
      });

      $("#buttonr3_").click(function(){
        $(".tr3_").show();
      });
      $("#buttonr4_").click(function(){
        $(".tr4_").show();
      });
      $("#buttonr5_").click(function(){
        $(".tr5_").show();
      });
      $("#buttonr6_").click(function(){
        $(".tr6_").show();
      });
      $("#buttonr7_").click(function(){
        $(".tr7_").show();
      });

      $("#buttonr8_").click(function(){
        $(".tr8_").show();
      });
          $("#buttonr9_").click(function(){
            $(".tr9_").show();
          });
          $("#buttonr10_").click(function(){
            $(".tr10_").show();
          });

          $("#buttonr11_").click(function(){
            $(".tr11_").show();
          });
          $("#buttonr12_").click(function(){
            $(".tr12_").show();
          });

          $("#buttonr13_").click(function(){
            $(".tr13_").show();
          });
          $("#buttonr14_").click(function(){
            $(".tr14_").show();
          });
          $("#buttonr15_").click(function(){
            $(".tr15_").show();
          });
          $("#buttonr16_").click(function(){
            $(".tr16_").show();
          });
          $("#buttonr17_").click(function(){
            $(".tr17_").show();
          });

          $("#buttonr18_").click(function(){
            $(".tr18_").show();
          });
          $("#buttonr19_").click(function(){
            $(".tr19_").show();
          });
          $("#buttonr20_").click(function(){
            $(".tr20_").show();
          });

          $("#buttonr21_").click(function(){
            $(".tr21_").show();
          });

          $("#buttonr22_").click(function(){
            $(".tr22_").show();
          });

          $("#buttonr23_").click(function(){
            $(".tr23_").show();
          });

          $("#buttonr24_").click(function(){
            $(".tr24_").show();
          });
          $("#buttonr25_").click(function(){
            $(".tr25_").show();
          });

          $("#buttonr26_").click(function(){
            $(".tr26_").show();
          });
          $("#buttonr27_").click(function(){
            $(".tr27_").show();
          });
            $("#buttonr28_").click(function(){
              $(".tr28_").show();
            });
            $("#buttonr29_").click(function(){
              $(".tr29_").show();
            });
            $("#buttonr30_").click(function(){
              $(".tr30_").show();
            });

            $("#buttonr31_").click(function(){
              $(".tr31_").show();
            });
            $("#buttonr32_").click(function(){
              $(".tr32_").show();
            });
            $("#buttonr33_").click(function(){
              $(".tr33_").show();
            });
            $("#buttonr34_").click(function(){
              $(".tr34_").show();
            });

//hidebutton function
            $("#buttonh9").click(function(){
              $(".tr9").hide();
            });

  }); //end of document ready
