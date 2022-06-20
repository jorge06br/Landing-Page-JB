import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component   
const Home = () => {
	const cardInfo = {
		ImgUrl:[ 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG/800px-Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG','https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/1024px-Collage_of_Six_Cats-02.jpg','https://images.all-free-download.com/images/graphiclarge/adorable_animal_breed_canine_cute_dog_doggy_603714.jpg','https://upload.wikimedia.org/wikipedia/commons/4/40/Portrait_of_a_father.jpg'],
		Title: ['Panthero leo','Gato','Perro','Mono'],
		Description:[ 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félinos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.','El gato doméstico1​2​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.','El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo),1​2​3​ llamado perro doméstico o can,4​ y en algunos lugares coloquialmente llamado chucho,5​ tuso,6​ choco,7','Los términos mono y simio son sinónimos en el idioma español,1​ pero en zoología suele hacerse una distinción entre ambos, debido a la influencia del idioma inglés, en el que los términos equivalentes monkey y ape tienen diferentes significados'],
		BtnURl:['https://www.nationalgeographic.com.es/animales/felinos','https://www.nationalgeographic.com.es/fotografia/foto-del-dia/gato-ingles_14345','https://www.nationalgeographic.com.es/animales/perros','https://www.nationalgeographic.com.es/animales/monos'],
		BtnLabel:['Ver mas panteras','Ver mas gatos','Ver mas perros','Ver mas monos']
   }

	return (
		<div className="Description-center">
			<Navbar/>	
			<Jumbotron/>
			<Card Title={cardInfo.Title[0]} BtnLabel={cardInfo.BtnLabel[0]} Description={cardInfo.Description}  ImgURL={cardInfo.ImgUrl[0]} BtnURL={cardInfo.BtnURl[0]}/>
			<Card Title={cardInfo.Title[1]} BtnLabel={cardInfo.BtnLabel[1]} Description={cardInfo.Description}  ImgURL={cardInfo.ImgUrl[1]} BtnURL={cardInfo.BtnURl[1]}/>
			<Card Title={cardInfo.Title[2]} BtnLabel={cardInfo.BtnLabel[2]} Description={cardInfo.Description}  ImgURL={cardInfo.ImgUrl[2]} BtnURL={cardInfo.BtnURl[2]}/>
			<Card Title={cardInfo.Title[3]} BtnLabel={cardInfo.BtnLabel[3]} Description={cardInfo.Description} 	ImgURL={cardInfo.ImgUrl[3]} BtnURL={cardInfo.BtnURl[3]}/>
			<Footer/>
		</div>
	);
};

export default Home;
