export const getAllPokemon = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url) //データを取得
			.then((res) => res.json()) //取得したデータをJSON形式で返す
			.then((data) => resolve(data)); //JSONをデータとして受け取る
	});
};
