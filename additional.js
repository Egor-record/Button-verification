(function($){
    $(function(){
        $('.shipment_form .vm-button-correct').click(function(){
            if($('#shipment_id_8').is(':checked')){
                var adr = $('.change_address a').text();
                if(adr.length < 11){
                    //alert('');
                    swal({   title: "Пожалуйста выберите адрес доставки!", type: "error",   confirmButtonText: "ОК" });
                    $('.change_address p').css('color','red');
                    return false;
                }
            }
        })





    })
})(jQuery)