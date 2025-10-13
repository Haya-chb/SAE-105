/*Niveau 1

document.addEventListener("DOMContentLoaded", function () {
    var numCase = 0
    

musiques.forEach(function(musique,i){
        console.log("Musique : " +musique)
        numCase=numCase+1
        console.log(numCase)

        var blocmusique = document.querySelector('.liste-musiques').innerHTML += '<section><h2><em>'+musique+'</em> </h2> '+descriptionsMusiques[i]  + '</section>' 
})
})*/


document.addEventListener("DOMContentLoaded", function () {
     afficherMusiques()
    var numCase = 0;


    data.forEach(function (item) {

        console.log("Musique : " + item.musique);
        numCase++;
        console.log(numCase);

       var blocmusique = document.querySelector('.liste-musiques');
var elementDiv = document.createElement('div');
elementDiv.className = 'element';
elementDiv.innerHTML = `
        
           
                
                    <h3><em>${item.musique}</em></h3>
                    <p> Par : ${item.artiste} </p>
                <span>${item.descriptionMusicale} </span>
                

                <a href="${item.Youtube}"  title="Nouvelle fenêtre" alt="Clip de la musique sur YouTube"class="youtube">Ecouter sur Youtube</a>
                    <span class=controle>
                    <p><button class="next" id="">Précédent</button></p>

                    <p><button class="play" id="play-${numCase}">⏵</button></p>
                    <p><button class="pause" id="pause-${numCase}" style="display:none;">⏸</button></p>

                     <p><button class="next" id="">Suivant</button></p>
                     
                   
            
            
       
            <audio id="audio-${numCase}" src="${item.url}" type="audio/mp3"></audio>
           </span> 
            
        `;

       
     blocmusique.appendChild(elementDiv);
    });


    document.querySelectorAll('.play').forEach(function (button) {
        button.addEventListener("click", function () {
            var index = button.id.split('-')[1];
            var audio = document.getElementById(`audio-${index}`);
            var pauseButton = document.getElementById(`pause-${index}`);

            if (audio) {

                document.querySelectorAll('audio').forEach(function (otherAudio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                });

                document.querySelectorAll('.play').forEach(function (otherPlayButton) {
                    otherPlayButton.style.display = "inline";
                });
                document.querySelectorAll('.pause').forEach(function (otherPauseButton) {
                    otherPauseButton.style.display = "none";
                });

                audio.play();
                button.style.display = "none";
                pauseButton.style.display = "inline";
                console.log('play');
            }
        });
    });


    document.querySelectorAll('.pause').forEach(function (button) {
        button.addEventListener("click", function () {
            var index = button.id.split('-')[1];
            var audio = document.getElementById(`audio-${index}`);
            var playButton = document.getElementById(`play-${index}`);

            if (audio) {
                audio.pause();
                button.style.display = "none";
                playButton.style.display = "inline";
                console.log('pause');
            }
        });
    });



    ///////////////////////////////////////

     


    
function afficherMusiques () {
       var blocmusique2 = document.querySelector('.liste-musiques2');

         blocmusique2.innerHTML = '';

    if(autreData.length ==0){

        document.querySelector('.sectionVosmusiques').style.display = 'none';

    }
    else {
    document.querySelector('.sectionVosmusiques').style.display = 'block';

    autreData.forEach(function (item) {

        console.log("Musique : " + item.musique);
         
var elementDiv2 = document.createElement('div');
elementDiv2.className = 'element2';
elementDiv2.innerHTML = `
        
           
                
                    <h3><em>${item.musique}</em></h3>
                    <p> Par : ${item.artiste} </p>
                <span>${item.descriptionMusicale} </span>
                

                <a href="${item.youtube}"  title="Nouvelle fenêtre" alt="Clip de la musique sur YouTube"class="youtube">Ecouter sur Youtube</a>
                    <span class=controle>
                    <p><button class="next" id="">Précédent</button></p>

                     <p><button class="next" id="">Suivant</button></p>
                     

           </span> 
             
        `;
    blocmusique2.appendChild(elementDiv2);
    })}};



////////////////////////////////////Formulaire////////////////////////////////

    var titre = document.getElementById('titre');
    var artiste = document.getElementById('artiste');
    var youtube = document.getElementById('url');
    var description = document.getElementById('description');
  

    document.querySelector('.valider').addEventListener('click', function () {
       
        var titreValue = titre.value;
        var artisteValue = artiste.value;
        var youtubeValue = youtube.value;
        var descriptionValue = description.value;

        if (titreValue && artisteValue && youtubeValue &&descriptionValue){

       autreData.push({ 
            musique : titreValue,
            artiste : artisteValue,
            descriptionMusicale : descriptionValue,
            youtube : youtubeValue });

        titre.value = ""
        artiste.value =""
        youtube.value = ""
        description.value=""

        afficherMusiques()
        }

    });
});

/////////////////////////////////////////////



       
//////////////////////////:/* Apparition des crédits*/////////////////////////


button2 = document.querySelector('.credits')
credit = document.getElementById('span2')

button2.addEventListener('click', function () {

    if (credit.classList.contains('hidden')){

         credit.classList.remove('hidden')
    }
   
    else {
        credit.classList.add('hidden')
    }
})




////////////////////////////* Apparition du questionnaire *///////////////////

button1 = document.querySelector('.popup')
form = document.getElementById('span1')

button1.addEventListener('click', function () {

    if (form.classList.contains('hidden')){

         form.classList.remove('hidden')
    }
   
    else {
        form.classList.add('hidden')
    }
})


