$(function () {



    colorGreen();
    llenarTablero();
    CambiarNombreBtn();

    function colorGreen() {

        $(".main-titulo").animate({
            color: "red"
        }, 700, function () {
            colorYellow();
        })

    }


    function colorYellow() {
        $(".main-titulo").animate({
            color: "yellow"
        }, 700, function () {
            colorGreen();
        })
    }



    function llenarTablero() {
        var num1, num2, num3, num4, s;
        var d = $('.panel-tablero').children('div');
        var cont = 0;
        $.each(d, function (key, value) {
            num1 = 1 + Math.floor(Math.random() * 4);
            num2 = 1 + Math.floor(Math.random() * 4);
            num3 = 1 + Math.floor(Math.random() * 4);
            num4 = 1 + Math.floor(Math.random() * 4);
            cont++;

            if (key < d.length - 1) {
                $('.col-1').append('<img src="image/' + num1 + '.png" alt="" >').fadeToggle('fast')
                $('.col-2').append('<img src="image/' + num2 + '.png" alt="">').fadeToggle('fast')
                $('.col-3').append('<img src="image/' + num3 + '.png" alt="">').fadeToggle('fast')
                $('.col-4').append('<img src="image/' + num4 + '.png" alt="">').fadeToggle('fast')
                $('.col-5').append('<img src="image/' + num1 + '.png" alt="">').fadeToggle('fast')
                $('.col-6').append('<img src="image/' + num2 + '.png" alt="">').fadeToggle('fast')
                $('.col-7').append('<img src="image/' + num3 + '.png" alt="">').fadeToggle('fast')
                $('img').css('height', '7em')
                

            }

        })

        d.children('img').draggable();
        $(d).droppable({
            acept:'img',
            drop:function(event, ui){
              //  alert('holas')
                
            }
        })
        
        
       $('.panel-tablero').sortable() 
        

    }

    function CambiarNombreBtn() {

        $('.btn-reinicio').click(function () {
            var texto = $('.btn-reinicio').html();
            Timer();
            if (texto == 'Iniciar') {
                $('.btn-reinicio').html('Reiniciar');
            } else {
                window.location.reload()
                $('.btn-reinicio').html('Iniciar');
            }
        })
    }


    function Timer() {
        $('#timer').timer({
            countdown: true,
            duration: '2m',
            format: '%M:%S',
            callback: function () {
                alert('Time up!');
            }
        });
    }


    /*

        $('.col-1').append('<img src="image/2.png" alt="">')
        $('.col-1').append('<img src="image/4.png" alt="">')
        $('.col-2').append('<img src="image/1.png" alt="">')
        $('.col-2').append('<img src="image/2.png" alt="">')
        $('.col-3').append('<img src="image/3.png" alt="">')
        $('.col-3').append('<img src="image/3.png" alt="">')
        $('.col-4').append('<img src="image/1.png" alt="">')
        $('.col-4').append('<img src="image/1.png" alt="">')
        $('.col-5').append('<img src="image/1.png" alt="">')
        $('.col-5').append('<img src="image/3.png" alt="">')
        $('.col-6').append('<img src="image/1.png" alt="">')
        $('.col-6').append('<img src="image/1.png" alt="">')
        $('.col-7').append('<img src="image/1.png" alt="">')
        $('.col-7').append('<img src="image/1.png" alt="">')
    */




});
