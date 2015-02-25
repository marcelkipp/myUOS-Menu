var $insertHTML = $('<div id="slider" class="slideroff-slider"><div class="slider-wrapper"><a href="http://www.uos.de"><img style="float:left;" height="50px" src="data/menu/img/header_logo.gif" alt="logo"></a><ul><li id="sliderstudiumtrigger" onclick="ultrigger_01()"><b>Studium</b><ul id="ultarget_01"><li>Stud.IP</li><li>OPIuM</li><li>Uni Bibliothek</li><li>Lernfunk</li><li>Alumni</li></ul></li><li id="sliderdienstleistungtrigger" onclick="ultrigger_02()"><b>Dienstleistungen</b><ul id="ultarget_02"><li>E-Mail</li><li>MyRz</li><li>MyShare</li></ul></li></ul><div class="username-menu"> Max Mustermann &nbsp; &nbsp; <i title="myUOS-Portal" class="fa fa-home"></i> &nbsp;<i title="Logout" class="fa fa-sign-out"></i> </div></div></div><div onclick="slideron()" class="black-overlay" id="overlay"><div class="close-icon"><i class="fa fa-times"></i> </div></div><div align="center" onclick="slideron()" class="ausklappen" id="ausklappen"><img src="data/menu/img/logo_myuos.png" alt="myUOS-logo"></div>');

jQuery(function() {
    jQuery("body").prepend($insertHTML);
    jQuery("#sliderstudiumtrigger, #sliderstudium").hover(function() {
        jQuery("#sliderstudium").toggleClass("slideron-studium");
        jQuery("#navbar").toggleClass("navbar-on");
    });
    jQuery("#sliderdienstleistungtrigger, #sliderdienstleistung").hover(function() {
        jQuery("#sliderdienstleistung").toggleClass("slideron-dienstleistung");
    });
    jQuery("#sliderstudium").hover(function() {
        jQuery('#sliderstudiumtrigger').toggleClass("slideroff-slider-hovermenu");
    });
    jQuery("#sliderdienstleistung").hover(function() {
        jQuery("#sliderdienstleistungtrigger").toggleClass("slideroff-slider-hovermenu");
    });

});

function slideron() {
    $("#slider").toggleClass("slideron-slider");
    $("#overlay").toggleClass("black-overlay-on");
    $("#navbar").toggleClass("navbar-on");
}

function ultrigger_01() {
    $("#ultarget_01").toggleClass('responsive-show');
}

function ultrigger_02() {
    $("#ultarget_02").toggleClass('responsive-show');
}