  $(document).ready(function() {
    //jquery code in here

    var counter = 0;

    var container1 = false;
    var container2 = false;
    var container3 = false;

    // reset button. click
    // $(".factPic").html("");
    // container1 = false;
    //$(".factbutton").css("background","green");
    




    //button um
    $("#um").click(function() {
      // what do you want to do when you click um image

      if (container1 == false) {
        $("#factpic1").html('<img src="img/um.jpg" class="factPicImages" alt="um"  height="450" width="450">');
        $("#um").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#factpic2").html('<img src="img/um.jpg" class="factPicImages" alt="um"  height="450" width="450">');
        $("#um").css("background", "yellow");
        container2 = true;
      } else if (container3 == false) {
        $("#factpic2").html('<img src="img/um.jpg" class="factPicImages" alt="um"  height="450" width="450">');
        $("#um").css("background", "yellow");
        container3 = true;
      }
    });


    //button parson
    $("#parson").click(function() {

      if (container1 == false) {
        $("#factpic1").html('<img src="img/parson.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#parson").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#factpic2").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#parson").css("background", "yellow");
        container2 = true;
      } else if (container3 == false) {
        $("#factpic2").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#parson").css("background", "yellow");
        container3 = true;
      }

    });


    //button visual
    $("#visual").click(function() {

      if (container1 == false) {
        $("#factpic1").html('<img src="img/parson.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#visual").css("background", "yellow");
        container1 = true;
      } else if (container2 == false) {
        $("#factpic2").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#visual").css("background", "yellow");
        container2 = true;
      } else if (container3 == false) {
        $("#factpic2").html('<img src="img/1.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#visual").css("background", "yellow");
        container3 = true;
      }

    });




  }); //end of document ready
