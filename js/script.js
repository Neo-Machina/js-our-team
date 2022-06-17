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
        image: 'wayne-barnett-founder-ceo'
    }
];

console.log(teamMembers);