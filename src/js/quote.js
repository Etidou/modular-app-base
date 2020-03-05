import $ from 'jquery';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Nba {
	constructor(){
		this.initEls();
		this.initEvents();
	}


	initEls () {
		this.Els = {
			cityText: $('.js-city'),
			clubName: $('.js-name-club'),
			conferenceText: $('.js-conference'),

			container: $('.js-container')
		}

	}

	initEvents() {
		this.getNba();

	}

	getNba() {
		const api = {
			endpoint: 'https://www.balldontlie.io/api/v1/teams',
			params: {
				'per_page':1,
			},
		};

		$.ajaxSetup({cache:false});


		// $.ajax({url : api.endpoint,
		// 	data: api.params},
		// 	headers:{
  //   		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
  //   		'x-rapidapi-key': '51f1c1baddmsh02e892b0bd99394p10ae11jsn80c5aa2b10d4'
  // 			});

		$.getJSON(api.endpoint, api.params)
		.then((response) => {
			console.log(response);
			this.renderNba(response.data[0].city,response.data[0].full_name,response.data[0].conference);
		})
		.catch((e) => {
			console.log('error with the quote :', e);
		});
	}

    renderNba (city, club, conference) {
        this.Els.cityText.text(city);
        this.Els.clubName.text(club);
        this.Els.conferenceText.text(conference);
        


        this.Els.container.addClass('is-ready');
	}
}