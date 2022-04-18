$(document).ready(function () {
    // $('.val1').hide();
    // $('.val2').hide();
    // $('.val3').hide();
    // $('.val4').hide();
    // $('.val5').hide();
    // $('.val6').hide();

    // name_err = true;
    // un_err = true;
    // pwd_err = true;
    // conpwd_err = true;
    // age_err = true;
    // add_err = true;



    $('.intxt1').keyup(function () {
        name_check();
    });
    function name_check() {
        var name = $('.intxt1').val();
        if (name == '') {
            // $('.val1').show();
            $('.val1').html("<b>Enter the name</b>");
            $('val1').focus();
            $('.val1').css("color","red");
            // name_err = false;
            return false;
        }
        else if (name.length <2 || name.length >50 ){
            $('.val1').show();
            $('.val1').html("<b>Name must between 2 to 50 chacater </b>");
            // name_err = false;
            return false;
        }
        else{
            $('.val1').hide();
        }
        console.log("2");

    }




});