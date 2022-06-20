import React from "react";


const CardData=(props) =>{
 const cardInfo = {
      ImgUrl:[ 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG/800px-Jaguar-schwarzer-panther-zoologie.de-nk0005.JPG','https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/1024px-Collage_of_Six_Cats-02.jpg','https://images.all-free-download.com/images/graphiclarge/adorable_animal_breed_canine_cute_dog_doggy_603714.jpg','https://upload.wikimedia.org/wikipedia/commons/4/40/Portrait_of_a_father.jpg'],
      Title: ['Panthero leo','Gato','Perro','Mono'],
      Description:[ 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félinos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.','El gato doméstico1​2​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.','El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo),1​2​3​ llamado perro doméstico o can,4​ y en algunos lugares coloquialmente llamado chucho,5​ tuso,6​ choco,7','Los términos mono y simio son sinónimos en el idioma español,1​ pero en zoología suele hacerse una distinción entre ambos, debido a la influencia del idioma inglés, en el que los términos equivalentes monkey y ape tienen diferentes significados'],
      BtnURl:['https://www.nationalgeographic.com.es/animales/felinos','https://www.nationalgeographic.com.es/fotografia/foto-del-dia/gato-ingles_14345','https://www.nationalgeographic.com.es/animales/perros','https://www.nationalgeographic.com.es/animales/monos'],
      BtnLabel:['Ver mas panteras','Ver mas gatos','Ver mas perros','Ver mas monos']
 }
     
        return (
            <div className="card m-5">
                <img className="card-img-top" src={props.cardImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardDescription}</p>
                    <a href={props.cardBtnUrl} className="btn btn-primary">
                        {props.cardLabel}
                    </a>
                </div>
            </div>
        );
    }


      export default CardData