// Function to handle button click event
function handleClick() {
    // Prompt the user for a question
    const question = prompt("Please enter your medical question:");

    // Check if the user entered a question
    if (question) {
        // Send the question to the server
        fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response from the server
            alert("Response from server: " + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error occurred while processing your request. Please try again later.");
        });
    } else {
        alert("Please enter a valid question.");
    }
}

// Add event listener to the AI button
document.getElementById('aiButton').addEventListener('click', handleClick);



// EVENT LISTENER
document.getElementById('aiButtonBurns').addEventListener('click', handleClick);
document.getElementById('aiButtonCuts').addEventListener('click', handleClick);
document.getElementById('aiButton').addEventListener('click', handleClick);
// BURNS NAV
function BopenNav() {
    document.getElementById("BmyNav").style.width = "100%";
}
function BcloseNav() {
    document.getElementById("BmyNav").style.width = "0%";
}
// CUTS NAV
function CopenNav() {
    document.getElementById("CmyNav").style.width = "100%";
}
function CcloseNav() {
    document.getElementById("CmyNav").style.width = "0%";
}

function toggleShadow() {
    var burnsButton = document.getElementById('burnsButton');
    burnsButton.classList.toggle('no-shadow');
}