var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());



$( document ).ready(function() {

	$('.doors li').hover(function() {
		$('.doors li').removeClass('hovered');
		$(this).addClass('hovered');
	});

	$('.embed p').click(function() {
        $('.embed textarea').fadeToggle();
    })

    $(".embed textarea").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    $('.intro, .tob-bar').click(function() {
    	$('.embed textarea').fadeOut();
    });


    $('.gift-block .back, .gift-block .close').click(function() {
    	$('.gift-block').removeClass('show');
        $('.calendar').ScrollTo({
            duration: 600
        });
    });

    $('.inside').click(function() {
        $('.gift-block').removeClass('show');
        $('.calendar').ScrollTo({
            duration: 600
        });
    });

    $('.inside.d1').click(function() { $('.gift-block.d1').addClass('show'); });
    $('.inside.d2').click(function() { $('.gift-block.d2').addClass('show'); });
    $('.inside.d3').click(function() { $('.gift-block.d3').addClass('show'); });
    $('.inside.d4').click(function() { $('.gift-block.d4').addClass('show'); });
    $('.inside.d5').click(function() { $('.gift-block.d5').addClass('show'); });
    $('.inside.d6').click(function() { $('.gift-block.d6').addClass('show'); });
    $('.inside.d7').click(function() { $('.gift-block.d7').addClass('show'); });
    $('.inside.d8').click(function() { $('.gift-block.d8').addClass('show'); });
    $('.inside.d9').click(function() { $('.gift-block.d9').addClass('show'); });
    $('.inside.d10').click(function() { $('.gift-block.d10').addClass('show'); });
    $('.inside.d11').click(function() { $('.gift-block.d11').addClass('show'); });
    $('.inside.d12').click(function() { $('.gift-block.d12').addClass('show'); });
    $('.inside.d13').click(function() { $('.gift-block.d13').addClass('show'); });
    $('.inside.d14').click(function() { $('.gift-block.d14').addClass('show'); });
    $('.inside.d15').click(function() { $('.gift-block.d15').addClass('show'); });
    $('.inside.d16').click(function() { $('.gift-block.d16').addClass('show'); });
    $('.inside.d17').click(function() { $('.gift-block.d17').addClass('show'); });
    $('.inside.d18').click(function() { $('.gift-block.d18').addClass('show'); });
    $('.inside.d19').click(function() { $('.gift-block.d19').addClass('show'); });
    $('.inside.d20').click(function() { $('.gift-block.d20').addClass('show'); });
    $('.inside.d21').click(function() { $('.gift-block.d21').addClass('show'); });
    $('.inside.d22').click(function() { $('.gift-block.d22').addClass('show'); });
    $('.inside.d23').click(function() { $('.gift-block.d23').addClass('show'); });
    $('.inside.d24').click(function() { $('.gift-block.d24').addClass('show'); });
    $('.inside.d25').click(function() { $('.gift-block.d25').addClass('show'); });



	if(ie <= 9) {
		$('.doors li').hover(function() {
			$(this).children('.door').toggleClass('hide-door');
		});
	}



});

