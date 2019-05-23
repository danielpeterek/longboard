$(function(){
    $('#info p').hide();
    $('#info h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#2cadce'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })

    $('#info2 p').hide();
    $('#info2 h5').hide();
    $('#info2 img').hide();
    $('#info2 h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#2cadce'});
        } else {
            $(this).css({'background-color':'gray'});
        }
        $(this).nextUntil('h4').toggle(500);
    })

    var i = 0;
    window.setInterval(function(){
        $('#board img').attr('src',desky[i].obrazek);
        $('#board figcaption').text(desky[i].nazev);
        i<desky.length-1 ? i++ : i=0; 
    }, 6000);

});

$(function(){
    $('.ostatni').on('click',function(){
        setInterval(function(){
            $('.ostatni').attr({'style':'fill:rgba(0,0,0,0.1);'});
        }, 4000);
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
    $('.kolecka').on('click',function(){
        setInterval(function(){
             $('.kolecka').attr({'style':'fill:rgba(124, 253, 2, 0.1);'});
        }, 4000);
        $('.kolecka').attr({'style':'fill:rgba(124, 253, 2, 0.1);'});
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
        //$('#text h2').text(info.nazev);
    });
    $('.trucky').on('click',function(){
        setInterval(function(){
            $('.trucky').attr({'style':'fill:rgba(0,0,0,0.1);'});
        }, 4000);   
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
    $('.bush').on('click',function(){
        setInterval(function(){
            $('.bush').attr({'style':'fill:rgba(0, 4, 255, 0.1);'});
        }, 4000); 
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
    $('.deska').on('click',function(){
        setInterval(function(){
            $('.deska').attr({'style':'fill:rgba(255, 81, 0, 0.1);'});
        }, 4000);
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
    $('.loziska').on('click',function(){
        setInterval(function(){
            $('.loziska').attr({'style':'fill:rgba(0,0,0,0.1);'});
        }, 4000);
        $(this).attr({'style':'fill:rgba(255,255,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
});
