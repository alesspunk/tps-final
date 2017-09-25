          $('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});


            $("#toggle-close-p").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
            $("#toggle-close-d").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
              $("#toggle-close").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
               $("#toggle-close2").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
              $("#toggle-finish").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
            
              $("#quick-bill").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            
            });
            
              $("#quick-bill-mini").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
           
           
           // document.getElementById("detail-bill").innerHTML = document.getElementById("detail-bill").innerHTML;
            document.getElementById("quickbill").style.display = "block";
            document.getElementById("detail-bill").style.display = "none";
            
                        
             $("#toggle1").click(function(e) {
	             
if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }


  document.getElementById("b-paragraphs").style.display = "none";
	   document.getElementById("last-36").style.display = "none";
	  document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "block";

            });
            
                     $("#toggle2").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
	  document.getElementById("b-paragraphs").style.display = "none";
	   document.getElementById("last-36").style.display = "none";
	  document.getElementById("progress-bill").style.display = "none";
	    document.getElementById("quickbill").style.display = "none";
	   document.getElementById("detail-bill").style.display = "block";
  

            });
            
                          $("#toggle3").click(function(e) {
          
          if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
   document.getElementById("b-paragraphs").style.display = "none";
	   document.getElementById("last-36").style.display = "none";
	  document.getElementById("progress-bill").style.display = "block";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "none";

            });
            
                   $("#toggle4").click(function(e) {
          
          if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
          document.getElementById("b-paragraphs").style.display = "none";
	   document.getElementById("last-36").style.display = "block";
	  document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "none";

            });
            
            
                $("#toggle5").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
              document.getElementById("b-paragraphs").style.display = "block";
	   document.getElementById("last-36").style.display = "none";
	  document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "none";
    
            });
            
            
    $("#toggle-qb-mini").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
              document.getElementById("b-paragraphs").style.display = "none";
	          document.getElementById("last-36").style.display = "none";
	          document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "block";
    
            });
            
            
            
            $("#toggle-qb").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
              document.getElementById("b-paragraphs").style.display = "none";
	          document.getElementById("last-36").style.display = "none";
	          document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "block";
    
            });
            
            
            $("#toggle-bp").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
              document.getElementById("b-paragraphs").style.display = "block";
	   document.getElementById("last-36").style.display = "none";
	  document.getElementById("progress-bill").style.display = "none";
				 document.getElementById("detail-bill").style.display = "none";
				   document.getElementById("quickbill").style.display = "none";
    
            });

            
      
 
 
 
 //seleccion
$("tr").click(function() {
   $(this).addClass('selected').siblings().removeClass("selected");
});


         
//acordion
$('.accordian-body').on('show.bs.collapse', function () {
    $("tr").closest("table")
        .find(".collapse.in")
        .not(this)
        .collapse('toggle')
})

//error

$(function(){
    $("tr").click(function(){
    });
    $("#no1").click(function(e){
        e.stopPropagation();
    });
  
});
