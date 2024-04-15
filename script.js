const main = document.querySelector('main'); 

function getMessage() {
  fetch('https://gpt-digiboard-backend-01.onrender.com/message')
    .then(response => response.json())
    .then(data => {
      console.log('data:', data); 
      main.innerText = data.message;
    });
}

// Get the message when the page loads 
getMessage();

// Then every 5 seconds 
setInterval(() => {
  getMessage()
}, 5000);
