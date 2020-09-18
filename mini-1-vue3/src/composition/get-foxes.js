/*
axios
				.get('https://dog.ceo/api/breeds/image/random')
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
                });*/

import { ref, toRefs, reactive } from '@vue/composition-api';

export default function() {
	let foxes = reactive({ list: [] });
	const val = ref('');
	// let errors = reactive({error: null});
	const submitted = async () => {
		const { response, error, fetchData, fetching } = useFetch(
			`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`,
			{}
		);
		fetchData();
		breweries.list = response;
		breweries.error = error;
		breweries.fetching = fetching;
	};
	return { submitted, ...toRefs(breweries), val };
}
