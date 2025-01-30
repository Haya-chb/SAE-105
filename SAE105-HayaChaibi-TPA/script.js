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
    var numCase = 0;


    data.forEach(function (item) {

        console.log("Musique : " + item.musique);
        numCase++;
        console.log(numCase);

        var blocmusique = document.querySelector('.liste-musiques');
        var section = document.createElement('section');


        section.innerHTML = `
        
            <span class="background-image" style='background-image: url("${item.image}"); '>
                <span class="element">
                    <h3><em>${item.musique}</em></h3>
                    <p><button class="play" id="play-${numCase}">⏵</button></p>
                    <p><button class="pause" id="pause-${numCase}" style="display:none;">⏸</button></p>
                    <button class="buttonDescription" id="button-${numCase}">Pourquoi cette musique ? </button>
                </span> 
                
            </span>
            
            <section class="description" id="description-${numCase}" style="display:none;">
            <p class ="phrase"> Pour en écouter plus :</p>
            <div class=musiqueDescription>${item.descriptionMusicale} </div>
            <a href="${item.Youtube}"  title="Nouvelle fenêtre" alt="Clip de la musique sur YouTube">YouTube</a>
       
            
           
            
    </section>

    

            <audio id="audio-${numCase}" src="${item.url}" type="audio/mp3"></audio>
           
            
        `;
        blocmusique.appendChild(section);
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



    document.querySelectorAll('.buttonDescription').forEach(function (button) {
        button.addEventListener("click", function () {
            var index = button.id.split('-')[1];
            var description = document.getElementById(`description-${index}`);


            document.querySelectorAll('.description').forEach(function (desc) {
                desc.style.display = "none";
            });


            if (description.style.display === "none") {
                description.style.display = "flex";
            } else {
                description.style.display = "none";
            }
        });
    });


    var titre = document.getElementById('titre');
    var artiste = document.getElementById('artiste');
    var url = document.getElementById('url');
    var description = document.getElementById('description');

    function mettreAJourInternaute() {
        var titreValue = titre.value;
        var artisteValue = artiste.value;
        var urlValue = url.value;
        var descriptionValue = description.value;


        document.querySelector('.internaute').innerHTML = `
            <strong>Titre :</strong> ${titreValue}
            <p><strong>Artiste :</strong> ${artisteValue}</p>
            <p><strong>URL :</strong> ${urlValue}</p>
            <p><strong>Description :</strong> ${descriptionValue}</p>
        `;
    }

    titre.addEventListener('keyup', mettreAJourInternaute);
    artiste.addEventListener('keyup', mettreAJourInternaute);
    url.addEventListener('keyup', mettreAJourInternaute);
    description.addEventListener('keyup', mettreAJourInternaute);




    document.querySelector('.valider').addEventListener('click', function () {
        var titreValue = titre.value;
        var artisteValue = artiste.value;
        var urlValue = url.value;
        var descriptionValue = description.value;


        var urlVisitee = `https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?login=chaibi&courriel=philippe.gambette@u-pem.fr&message=${encodeURIComponent("Titre: " + titreValue + ", Ariste : " + artisteValue + "Url : " + url + "Description: " + descriptionValue)}`;

        fetch(urlVisitee)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log("Réponse reçue : ");
                console.log(data);
            })
            .catch(function (error) {
                console.error("Erreur :", error);
            });
    });
});



