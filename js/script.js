// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// Array di oggetti che rappresentano i membri del team
const teamMembers = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        image: 'angela-caroll-chief-editor'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        image: 'walter-gordon-office-manager'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        image: 'scott-estrada-developer'
    },
    {
        name: 'Barbara Ramost',
        job: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer'
    }
];

const teamContainer = document.querySelector('.team-container');

// Per ogni team-member nell'array stampo una card (appendo single-member template a team-container)
for(let i = 0; i < teamMembers.length; i++) {
    const singleMember = teamMembers[i];

    // Creazione di un nuovo template compilato coi dati giusti
    const memberToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/${singleMember.image}.jpg"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${singleMember.name}</h3>
            <p>${singleMember.job}</p>
        </div>
    </div>
    `;

    // Concatenare il template a teamContainer
    teamContainer.innerHTML += memberToDraw;
}