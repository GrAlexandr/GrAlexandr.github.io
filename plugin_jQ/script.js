jQuery.fn.extend({

	slider: function() {
		var btnPrev = this.find('.prev');
		var btnNext = this.find('.next');
		var images = this.find('.photos img');
		var i = 0;

		btnPrev.on('click', function () {
			images[i].className = '';
			i--;
			if (i < 0) {
				i = images.length - 1;
			}
			$(images[i]).addClass('showed');
		});

		btnNext.on('click', function () {
			next();
		});

		function next() {
			images[i].className = '';
			i++;

			if(i >= images.length) {
				i = 0;
			}

			images[i].className = 'showed';
		}

		setInterval(function () {
			next();
		}, 2500);

		return this;
	}

});

$('.gallery').slider().css('border', '1px solid red');