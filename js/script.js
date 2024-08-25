/*=========JQ=========*/
$(document).ready(function(){

	// example 01
	$( "#draggable" ).draggable();
	
	// example 02
	$( "#resizable" ).resizable();

    // example 03
	$( "#selectable" ).selectable();

	// example 04
	$( "#sortable" ).sortable();

	// example 05
	$( "#accordion" ).accordion();

	// example 06
	var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // example 07
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    });

    // example 08
    // $( "input" ).checkboxradio();

    // example 09
    $( "#datepicker" ).datepicker();

    // example 10
    $( "#dialog" ).dialog();

    // example 11
    $( "#menu" ).menu();

    // example 12
    $( "#progressbar" ).progressbar({
      value: 46
    });

    // example 13
    $( "#tabs" ).tabs();

    // example 14
     $( document ).tooltip();

    // example 15
     var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

});


