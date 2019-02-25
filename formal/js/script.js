  $(document).ready(function() {
      //jquery code in here

      var counter = 0;

      var container1 = false;
      var container2 = false;

    $("#um").click(function(){
        // what do you want to do when you click um image

      if(container1 == false){
        $("#factpic1").html('<img src="img/um.jpg" class="factPicImages" alt="um"  height="450" width="450">');
        $("#um").css("background","yellow");
        container1 = true;
      }else if(container2 == false){
        $("#factpic2").html('<img src="img/um.jpg" class="factPicImages" alt="um"  height="450" width="450">');
        $("#um").css("background","yellow");
        container2 = true;
      }
    });


    $("#parson").click(function(){

      if(container1 == false){
        $("#factpic1").html('<img src="img/parson.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#parson").css("background","yellow");
        container1 = true;
      }else if(container2 == false){
        $("#factpic2").html('<img src="img/parson.jpg"  alt="parsons" class="factPicImages" height="450" width="450">');
        $("#parson").css("background","yellow");
        container2 = true;
      }


    });










  });  //end of document ready
