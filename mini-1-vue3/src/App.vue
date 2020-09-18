<template>
	<main>
		<header class="app-header">
			<h1>Choose your favorite fox</h1>
		</header>

		<div class="card">
			<div class="background">
				<img class="primary-image" :src="currentFoxLink" />
				<div class="card-content">
					<button class="button" :disabled="isAlreadyInFavorites" @click="addToFavorites">
						<i class="material-icons">favorite</i>
					</button>
					<button class="button" @click="loadNewFox"><i class="material-icons">forward</i></button>
				</div>
			</div>
		</div>
		<div class="gallery gallery-auto-fill">
			<div class="gallery-item" v-for="(pet, index) in favoriteFoxes" :key="pet">
				<img class="gallery-image" :src="pet" />
				<button class="material-icons button" @click="removeFromFavorites(index)">delete</button>
			</div>
		</div>
	</main>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			currentFoxLink: '',
			favoriteFoxes: [],
		};
	},
	computed: {
		isAlreadyInFavorites() {
			return this.favoriteFoxes.indexOf(this.currentFoxLink) > -1;
		},
	},
	methods: {
		async loadNewFox() {
			this.currentFoxLink = '';
			await axios
				.get('https://randomfox.ca/floof/')
				.then((response) => {
					this.currentFoxLink = response.data.image;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		addToFavorites() {
			this.favoriteFoxes.push(this.currentFoxLink);
		},
		removeFromFavorites(index) {
			this.favoriteFoxes.splice(index, 1);
		},
	},
	created() {
		this.loadNewFox();
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
	margin: 0;
	padding: 0;
	background-image: url('./assets/images/trees.jpg');
}

main {
	padding: 40px;
	margin: 10px;
	font-family: 'Roboto', 'sans-serif';
	background-color: #fff;
	color: #444;
}

.background {
	background-color: orange;
	border-radius: 5px;
}

button {
	background-color: white;
	color: gray;
	border-radius: 2px;
	float: right;
}

@font-face {
	font-family: 'Material Icons';
	font-style: normal;
	font-weight: 400;
	src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
	src: local('Material Icons'), local('MaterialIcons-Regular'),
		url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
		url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
		url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
	font-family: 'Material Icons';
	font-weight: normal;
	font-style: normal;
	font-size: 24px; /* Preferred icon size */
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;
}

h1,
h2,
p {
	margin: 0 0 1em 0;
	text-align: center;
}

img {
	max-width: 100%;
	display: block;
	margin: 0 auto;
}

.primary-image {
	height: 400px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.card {
	grid-column: 2;
	grid-row: 1;
	display: grid;
	place-items: center;
}

.card-content {
	padding: 15px;
}

button {
	border: 1px solid gray;
	padding: 0.5rem 1rem;
	margin: 1rem;
	cursor: pointer;
	border-radius: 0.25rem;
}

.gallery {
	display: grid;
	padding: 2em;
	position: relative;
	column-gap: 5px;
	row-gap: 5px;
}

.gallery-image {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	width: 100%;
	max-width: 400px;
  max-height: 200px

}

.gallery::before {
	position: absolute;
	padding-left: 3em;
}

.gallery-auto-fill {
	grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
}

.gallery-item {
	background-color: forestgreen;
	border-radius: 5px;
}
</style>
