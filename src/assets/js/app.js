// Toggle comments
$('.comments__btn').on('click', function () {
	$(this).closest('.movie').find('.comments__inner').toggleClass('active');
	$(this).closest('.movie').find('.comments-down').toggleClass('active');
});

// Toggle form
$('.header__btn').on('click', function () {
	$('.form').toggleClass('active');
	$('.header__btn').toggleClass('active');
});

// Toggle edit menu
$('.movie-edit').on('click', function () {
	$(this).closest('.movie').find('.movie__edit').toggleClass('active');
	$(this).closest('.movie').find('.comments__inner').toggleClass('active');
	$(this).closest('.movie').find('.movie__edit').find('input.title').val($(this).closest('.movie').find('.movie__title').text());
	$(this).closest('.movie').find('.movie__edit').find('textarea.description').val($(this).closest('.movie').find('.movie__description').text());
	$(this).closest('.movie').find('.movie__edit').find('input.country').val($(this).closest('.movie').find('.movie__country strong').text());
	$(this).closest('.movie').find('.movie__edit').find('input.year').val($(this).closest('.movie').find('.movie__year strong').text());
	$(this).closest('.movie').find('.movie__edit').find('input.genre').val($(this).closest('.movie').find('.movie__genre strong').text());
	$(this).closest('.movie').find('.movie__edit').find('input.actors').val($(this).closest('.movie').find('.movie__actors strong').text());
	$(this).closest('.movie').find('.movie__edit').find('input.poster').val($(this).closest('.movie').find('.movie__poster--featured img').attr('src'));
});

// Cancel button
$('.edit-cancel').on('click', function () {
	if ((this) === $(this).closest('.form__inner').find('.edit-cancel').get(0)) {
		$(this).closest('.form').find('input').val('');
		$(this).closest('.form').find('textarea').val('');
		$('.header__btn').toggleClass('active');
		$('.form').toggleClass('active');
		$(this).closest('.movie__edit').find('input').val('');
		$(this).closest('.movie__edit').find('taxtarea').val('');
		$(this).closest('.movie__edit').toggleClass('active');
		$(this).closest('.movie').find('.comments__inner').toggleClass('active');
	}
});

let movieDef = {
	textTitle: 'Martian',
	textCountry: 'USA',
	textYear: '2016',
	textGenre: 'Fantasy',
	textActors: 'Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica Chastain, Kate Mara, Kristen Wiig, Matt Damon, Michael Peña, Sean Bean, Sebastian Stan',
	textPoster: 'assets/images/film-1.jpg',
	textDescription: 'Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impendingsandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm. The...',
};
let strMovieDef = JSON.stringify(movieDef);
localStorage.setItem('movie1', strMovieDef);

// LocalStorage checking
if (localStorage.length) {
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.getItem('obj_' + i)) {
			let retObj = JSON.parse(localStorage.getItem('obj_' + i));
			let index = $('.movie').get(retObj.movie);
			$(index).find('.comments__group').append('<li class="comments__item">' + retObj.text + '</li>');
			$(index).find('.comment-count').text($(index).find('.comments__group').find('li').length);
		}
		if (localStorage.key(i).substr(0, 5) === 'movie') {
			$('.pattern').clone(true).removeClass('pattern').appendTo('#main .container');
			let newIndex = $('.movie').get($('.movie').length - 1);
			let retObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
			$(newIndex).attr('id', Number(localStorage.key(i).substr(5)));
			$(newIndex).find('.movie__title').text(retObj.textTitle);
			$(newIndex).find('.movie__description').text(retObj.textDescription);
			$(newIndex).find('.movie__country strong').text(retObj.textCountry);
			$(newIndex).find('.movie__year strong').text(retObj.textYear);
			$(newIndex).find('.movie__genre strong').text(retObj.textGenre);
			$(newIndex).find('.movie__actors strong').text(retObj.textActors);
			$(newIndex).find('.movie__poster--featured img').attr('src', retObj.textPoster);
			$(newIndex).find('.movie__poster--fill img').attr('src', retObj.textPoster);
		}
	}
};

// Adding new comment & counting comments
$('.comments-add').on('click', function () {
	let text = $(this).closest('.comments__inner').find('input');
	if (text.val() == "" || text.val().length < 3) {
		$('.comments__input').addClass('error');
	} else {
		$('.comments__input').removeClass('error');
		$(this).closest('.comments__inner').find('.comments__group').append('<li class="comments__item">' + text.val() + '</li>');
		// adding comments to localeStorage
		for (let i = 0; i < $('.movie').length; i++) {
			if ($(this).closest('.movie').get(0) === $('.movie').get(i)) {
				let obj = {
					'movie': i,
					'text': text.val()
				};
				let sObj = JSON.stringify(obj);
				localStorage.setItem('obj_' + localStorage.length, sObj);
			}
		}
		text.val('');
	}
	$(this).closest('.movie').find('.comment-count').text($(this).closest('.comments__inner').find('.comments__group').find('li').length);
});

// Adding new movie button
$('.movie-add').on('click', function () {
	$('.pattern').clone(true).removeClass('pattern').appendTo('main .container');
	let newIndex = $('.movie').get($('.movie').length - 1);
	let dataObj = {
		textTitle: $(this).closest('.form__inner').find('input.title').val(),
		textCountry: $(this).closest('.form__inner').find('input.country').val(),
		textYear: $(this).closest('.form__inner').find('input.year').val(),
		textGenre: $(this).closest('.form__inner').find('input.genre').val(),
		textActors: $(this).closest('.form__inner').find('input.actors').val(),
		textPoster: $(this).closest('.form__inner').find('input.poster').val(),
		textDescription: $(this).closest('.form__inner').find('textarea.description').val(),
	};
	let sObj = JSON.stringify(dataObj);

	$(newIndex).find('.movie__title').text(dataObj.textTitle);
	$(newIndex).find('.movie__country strong').text(dataObj.textCountry);
	$(newIndex).find('.movie__year strong').text(dataObj.textYear);
	$(newIndex).find('.movie__genre strong').text(dataObj.textGenre);
	$(newIndex).find('.movie__actors strong').text(dataObj.textActors);
	$(newIndex).find('.movie__poster--featured img').attr('src', dataObj.textPoster);
	$(newIndex).find('.movie__poster--fill img').attr('src', dataObj.textPoster);
	$(newIndex).find('.movie__description').text(dataObj.textDescription);
	$(newIndex).addClass('movie');

	$(this).closest('.form__inner').find('input').val('');
	$(this).closest('.form__inner').find('textarea').val('');

	if (localStorage.length === 0) {
		localStorage.setItem('movie1', sObj);
		$(newIndex).attr('id', 1);
	} else for (let i = localStorage.length - 1; i >= 0; i--) {
		if (localStorage.key(i).substr(0, 5) === 'movie') {
			localStorage.setItem('movie' + (Number(localStorage.key(i).substr(5)) + 1), sObj);
			$(newIndex).attr('id', Number(localStorage.key(i).substr(5)) + 1);
			break
		}
	}

	$('.form').toggleClass('active');
	$('.header__btn').toggleClass('active');
});

// Save button
$('.edit-save').on('click', function () {
	$(this).closest('.movie').find('.movie__edit').toggleClass('active');
	$(this).closest('.movie').find('.comments__inner').toggleClass('active');
	$(this).closest('.movie').find('.movie__title').text($(this).closest('.movie').find('.movie__edit').find('input.title').val());
	$(this).closest('.movie').find('.movie__year strong').text($(this).closest('.movie').find('.movie__edit').find('input.year').val());
	$(this).closest('.movie').find('.movie__country strong').text($(this).closest('.movie').find('.movie__edit').find('input.country').val());
	$(this).closest('.movie').find('.movie__genre strong').text($(this).closest('.movie').find('.movie__edit').find('input.genre').val());
	$(this).closest('.movie').find('.movie__actors strong').text($(this).closest('.movie').find('.movie__edit').find('input.actors').val());
	$(this).closest('.movie').find('.movie__poster--fill img').attr('src', $(this).closest('.movie').find('.movie__edit').find('input.poster').val());
	$(this).closest('.movie').find('.movie__poster--featured img').attr('src', $(this).closest('.movie').find('.movie__edit').find('input.poster').val());
	$(this).closest('.movie').find('.movie__description').text($(this).closest('.movie').find('.movie__edit').find('input.description').val());

	let dataObj = {
		textTitle: $(this).closest('.movie').find('.movie__edit').find('input.title').val(),
		textYear: $(this).closest('.movie').find('.movie__edit').find('input.year').val(),
		textCountry: $(this).closest('.movie').find('.movie__edit').find('input.country').val(),
		textGenre: $(this).closest('.movie').find('.movie__edit').find('input.genre').val(),
		textActors: $(this).closest('.movie').find('.movie__edit').find('input.actors').val(),
		textPoster: $(this).closest('.movie').find('.movie__edit').find('input.poster').val(),
		textDescription: $(this).closest('.movie').find('.movie__edit').find('textarea.description').val()
	};
	let sObj = JSON.stringify(dataObj);

	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i).substr(5) === $(this).closest('.movie').attr('id')) {
			localStorage.setItem('movie' + (Number(localStorage.key(i).substr(5))), sObj);
		}
	}
});

// Delete button
$('.movie-del').on('click', function () {
	if ($(this).closest('.movie').get(0) !== $('.template').get(0) && $(this).closest('.movie').get(0) !== $('.template').get(1)) {
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).substr(5) === $(this).closest('.movie').attr('id')) {
				localStorage.removeItem(localStorage.key(i));
			}
			// if (localStorage.key(i).substr(0, 5) !== 'movie') {
			// 	localStorage.clear();
			// }
		}
	}
	$(this).closest('.movie').remove();
});
