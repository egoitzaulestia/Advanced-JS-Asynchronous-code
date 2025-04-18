// APIs 

// Pair Programming
const dev0 = 'Ainhoa Colorado'
const dev1 = 'Paula Martinez'
const dev2 = 'Egoitz Aulestia'


////////////////////////////////////////////////////////////////////////////
// Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.

// Ejercicio 1:
///////////////

// Declara una funcion **getAllBreeds** que devuelva un array de strings con todas las razas de perro.

// const getAllBreeds = () => {
//     return axios.get('https://dog.ceo/api/breeds/list/all')
//         .then((breed) => {
//             const breeds = Object.keys(breed.data.message);
//             // console.log(breeds)
//             return breeds;
//         })
//         .catch((err) => console.log(err))
// };

const getAllBreeds = async () => {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all');
        const breeds = Object.keys(res.data.message);

        return breeds;
        
    } catch (error) {
        console.log(error);
    }
}


//// Fetch option
// let  breeds = [];

// function getAllBreeds() {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//         .then(response => response.json())
//         .then(data => {
//             breeds = Object.keys(data.message);
//             return breeds;
//         })
//         .catch((err) => console.log(err))
// }




// Ejercicio 2:
///////////////

// Declara una función **getRandomDog** que obtenga una imagen random de una raza.

// const getRandomDog = () => {
//     return axios.get('https://dog.ceo/api/breeds/image/random')
//         .then((img) => {
//             const dog = img.data.message;
//             // console.log(dog)
//             return dog;
//         })
//         .catch((err) => console.log(err))
// };

const getRandomDog = async () => {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        const randomImage = res.data.message;

        return randomImage;

    } catch (error) {
        console.log(error);
    }
}




//// Fetch option
// function getRandomDog() {
//     return fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => {
//             return data.message;
//         })
//         .catch((err) => console.log(err))
// }




// Ejercicio 3:
///////////////

// Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

// const getAllImagesByBreed = () => {
//     return axios.get('https://dog.ceo/api/breed/komondor/images')
//         .then((img) => {
//             const allKomondorImages = img.data.message;
//             return allKomondorImages;
//         })
//         .catch((err) => console.log(err))
// }

const searchInput = 'komondor';
const getAllImagesByBreed = async () => {
    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${searchInput}/images`);
        const allImagesOfTheBreed = res.data.message;

        return allImagesOfTheBreed;

    } catch (error) {
        console.log(error);
    }
}


//// Fetch option
// function getAllImagesByBreed() {
//     return fetch('https://dog.ceo/api/breed/komondor/images')
//         .then(response => response.json())
//         .then(data => {
//             return data.message;
//         })
//         .catch((err) => console.log(err))
// }




// Ejercicio 4:
///////////////

// Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento

// const getAllImagesByBreed2 = (breed) => {
//     return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
//         .then((img) => {
//             const breedDogs = img.data.message;
//             return breedDogs;
//         })
//         .catch((err) => console.log(err))
// }

const getAllImagesByBreed2 = async (breed) => {
    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        const breedDogs = res.data.message;

        return breedDogs;

    } catch (error) {
        console.log(error)
    }
}

//// Option B
// function getAllImagesByBreed2(breed) {
//     return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
//         .then(response => {
//             return response.data.message;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }





/////////////////////////////////////////////////////////////////////////
// ### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###

// Ejercicio 5:
///////////////

// Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil de usuario de github 
// a partir de su nombre de usuario. (https://api.github.com/users/{username}).

// const getGitHubUserProfile = (username) => {
//     return axios.get(`https:/api.github.com/users/${username}`)
//         .then((user) => {
//             const userProfile = user.data;
//             // console.log(user)
//             return userProfile;
//         })
//         .catch((err) => console.log(err))
// }

const getGitHubUserProfile = async (username) => {
    try {
        const res = await axios.get(`https:/api.github.com/users/${username}`);
        const userProfile = res.data;

        return userProfile;

    } catch (error) {
        console.log(error)
    }
}



//// Option B
// function getGitHubUserProfile(username) {
//     return axios.get(`https://api.github.com/users/${username}`) 
//         .then(response => {
//             return response.data; 
//         })    
//         .catch(error => console.error('Error:', error)); 
// }




// Ejercicio 6:
///////////////

// Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un usuario (username), 
// retorne {img, name} y pinte la foto y el nombre en el DOM.

// const printGithubUserProfile = (username) => {
//     return axios.get(`https:/api.github.com/users/${username}`)
//         .then((user) => {
//             // Desestructuramos el objeto user.data 
//             // Recuperamos 'name' y asignamos 'img' a avatar_url usando ":" 
//             const { name, avatar_url: img } = user.data;

//             // Capturamos el elemento <body> del DOM
//             const body = document.body;

//             // Creamos elemento HTML <img>
//             const imgUser = document.createElement('img');
//             imgUser.setAttribute('src', img); // Establecemos atributo 'src' y URL en el elemento <img>
//             imgUser.setAttribute('alt', 'imagen de usuario'); // Establecemos atributo 'src' y URL en el elemento <img>

//             // Creamos elemento HTML <h1>
//             const userName = document.createElement('h1');
//             userName.textContent = name; // Asignamos el nombre del usario al elmento <h1>

//             // Añadimos elemento al body
//             body.appendChild(imgUser);
//             body.appendChild(userName);

//             // Retornamos img y name
//             return { img, name };

//         })
//         .catch((err) => console.log(err))
// }

const printGithubUserProfile = async (username) => {
    try {
        const res = await axios.get(`https:/api.github.com/users/${username}`)
                // Desestructuramos el objeto user.data 
                // Recuperamos 'name' y asignamos 'img' a avatar_url usando ":" 
                const { name, avatar_url: img } = res.data;
    
                // Capturamos el elemento <body> del DOM
                const body = document.body;
    
                // Creamos elemento HTML <img>
                const imgUser = document.createElement('img');
                imgUser.setAttribute('src', img); // Establecemos atributo 'src' y URL en el elemento <img>
                imgUser.setAttribute('alt', 'imagen de usuario'); // Establecemos atributo 'src' y URL en el elemento <img>
    
                // Creamos elemento HTML <h1>
                const userName = document.createElement('h1');
                userName.textContent = name; // Asignamos el nombre del usario al elmento <h1>
    
                // Añadimos elemento al body
                body.appendChild(imgUser);
                body.appendChild(userName);
    
                // Retornamos img y name
                return { img, name };
        
    } catch (error) {
        console.log(err)
    }
}


//// Option B
// function printGithubUserProfile(username) {
//     return axios.get(`https://api.github.com/users/${username}`)
//         .then(response => {
//             const img = response.data.avatar_url; 
//             const name = response.data.name; 
//             const userContainer = document.createElement('div');
//             const profileImg = document.createElement('img'); 
//             const profileName = document.createElement('h1'); 
//             profileImg.src = img; 
//             profileName.innerText = name; 
//             userContainer.appendChild(profileImg); 
//             userContainer.appendChild(profileName); 
//             document.body.appendChild(userContainer);
//             return {img, name}; 
//         })
//         .catch(error => console.error('Error:', error)); 
// }



// Ejercicio 7:
///////////////

// Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API 
// para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, 
// la estructura debe ser exactamente la misma:

// ```html
// <section>
//     <img src="url de imagen" alt="imagen de usuario">
//     <h1>Nombre de usuario</h1>
//     <p>Public repos: (número de repos)</p>
// </section>
// ```

// const getAndPrintGitHubUserProfile = (username) => {
//     return axios.get(`https:/api.github.com/users/${username}`)
//         .then((user) => {
//             const { name, avatar_url: img, public_repos: publicRepos } = user.data; 

//             const htmlCard = `  
//                             <section>
//                                 <img src="${img}" alt="${name}">
//                                 <h1>${name}</h1>
//                                 <p>Public repos: ${publicRepos}</p>
//                             </section>
//                             `;

//             return htmlCard;

//         })
//         .catch((err) => console.log(err))
// }

const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const res = await axios.get(`https:/api.github.com/users/${username}`);
        const { name, avatar_url: img, public_repos: publicRepos } = res.data;

        const htmlCard = `
                        <section>
                            <img src="${img}" alt="${name}">
                            <h1>${name}</h1>
                            <p>Public repos: ${publicRepos}</p>
                        </section>
                        `;

        return htmlCard;

    } catch (error) {
        console.log(error)
    }
}


// Ejercicio 8:
///////////////

// Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. 
// El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. 
// Después llamaremos a la función **getAndPrintGitHubUserProfile(username)** 
// que se ejecute cuando se pulse el botón buscar.(Esto no se testea).

const body = document.body;

const inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('placeholder', 'Find user...');

const btnSearch = document.createElement('button');
btnSearch.setAttribute('id', 'searchBtn');
btnSearch.textContent = 'Search'

body.appendChild(inputText);
body.appendChild(btnSearch);

btnSearch.addEventListener('click', async () => {
    try {
        const inputTextValue = inputText.value;
        console.log(inputTextValue);

        const html = await getAndPrintGitHubUserProfile(inputTextValue);
        body.innerHTML += html;
        
    } catch (error) {
        console.log(error)
    }
})



///////////////////////////////////////////////////////////////
// ### GitHub API (II)- Promesas, promesas y más promesas ###

// Ejercicio 9:
///////////////

// Dada una lista de usuarios de github guardada en una array, 
// crea una funcion **fetchGithubUsers(userNames)** que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario. \
// Objetivo: Usar Promise.all()\
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.\
// Pregunta. ¿cuántas promesas tendremos?
// Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

// Pasos:
// - Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
// - Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
// - Cuando Promise.all() haya terminado:
// Consigue que se imprima por consola la url del repositorio de cada usuario.
// Consigue que se imprima por consola el nombre de cada usuario.

// const fetchGithubUsers = (userNames) => {
//     return Promise.all(userNames.map(username => {
//         return axios.get(`https://api.github.com/users/${username}`)
//             .then(user => user.data); 
//             }))
//             .then(users => {
//                 // imprimimos los resultados por consola
//                 users.forEach((user) => {
//                     console.log(user.name);
//                     console.log(user.html_url)
//                 })
//                 // Map-eamos y retornamos cada usuario con el formato indicado
//                 return users.map(user => ({
//                     name: user.name,
//                     html_url: user.html_url
//                 }));
//             })
//             .catch(err => {
//                 console.error("Error fetching users with Axios:", err);
//                 throw err;
//             });
// };

const fetchGithubUsers = async (userNames) => {
    try {
        const response = await Promise.all(
            userNames.map(async (username) => {
                const res = await axios.get(`https://api.github.com/users/${username}`)
                const user = res.data;
                
                // imprimimos los resultados por consola
                console.log(user.name);
                console.log(user.html_url)

                // Map-eamos y retornamos cada usuario con el formato indicado
                return {
                    name: user.name,
                    html_url: user.html_url
                };
            })
        );

        return response;
    } catch (error) {
        console.error("Error fetching users with Axios:", error);
        throw error;
    }
};


//// Option B 
// const fetchGithubUsers = (userNames) => {
//     // For each username, fetch data and convert the response to JSON.
//     return Promise.all(userNames.map(username => {
//     return fetch(`https://api.github.com/users/${username}`)
//         .then(res => {
//         if (!res.ok) {
//             throw new Error(`Error ${res.status} for user: ${username}`);
//         }
//         return res.json();
//         });
//     }))
//     .then(users => {
//     // Transform each user object into the required format.
//     return users.map(user => {
//         return {
//         name: user.name,
//         html_url: user.html_url
//         };
//     });
//     })
//     .catch(err => {
//     console.error("Error fetching users:", err);
//     // You may choose to return an empty array or rethrow the error.
//     throw err;
//     });
// };

  


