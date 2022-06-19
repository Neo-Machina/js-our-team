// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: 
// cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// Seleziono il pulsante ADD
const addButton = document.querySelector('#addMemberButton');
// console.log(addButton);

// Aggiungo evento click sul pulsante e richiamo la funzione addNewMember
addButton.addEventListener('click', addNewMember);

// FUNCTION 
function addNewMember() {
    // Assegno a delle costanti i valori degli input: name, role e image
    const inputName = document.querySelector('#name').value;
    const inputRole = document.querySelector('#role').value;
    const inputImage = document.querySelector('#image').value;

    // Creo una costante che rappresenta il nuovo membro da aggiungere nell' array iniziale
    const newMember = {
        name: inputName,
        job: inputRole,
        image: inputImage
    }
    
    teamMembers.push(newMember);
    
    // Creazione di un nuovo template compilato coi dati giusti
    const newMemberToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/${inputImage}.jpg"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${inputName}</h3>
            <p>${inputRole}</p>
        </div>
    </div>
    `;

    // Concatenare il nuovo membro a teamContainer
    teamContainer.innerHTML += newMemberToDraw;
}
