// Snack 1
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise
// che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// const getPostTitle = (id) => {
// 	return new Promise((resolve, reject) => {
// 		fetch(`https://dummyjson.com/posts/${id}`)
// 			.then((response) => response.json())
// 			.then((object) => resolve(object))
// 			.catch(reject);
// 	});
// };

// getPostTitle(1)
// 	.then((object) => console.log(`Titolo post ${object.id} : `, object.title))
// 	.catch((error) => console.error(error));

// getPostTitle(2)
// 	.then((object) => console.log(`Titolo post ${object.id} : `, object.title))
// 	.catch((error) => console.error(error));

// getPostTitle(3)
// 	.then((object) => console.log(`Titolo post ${object.id} : `, object.title))
// 	.catch((error) => console.error(error));

// getPostTitle(4)
// 	.then((object) => console.log(`Titolo post ${object.id} : `, object.title))
// 	.catch((error) => console.error(error));

// getPostTitle(5)
// 	.then((object) => console.log(`Titolo post ${object.id} : `, object.title))
// 	.catch((error) => console.error(error));

// Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata
// che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata
// https://dummyjson.com/users/{post.userId}.

const getPost = (id) => {
	return new Promise((resolve, reject) => {
		fetch(`https://dummyjson.com/posts/${id}`)
			.then((response) => response.json())
			.then((object) => resolve(object))
			.catch(reject);
	});
};

getPost(1)
	.then((object) => console.log(`Post ${object.id} : `, object))
	.catch((error) => console.error(error));
