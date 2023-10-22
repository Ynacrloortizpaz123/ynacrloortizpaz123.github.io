document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('birthdayCard');
    const butterfly = document.querySelector('.butterfly');
    let clicked = false ;
  
    card.addEventListener('click', function() {
      if(!clicked){
        showMessage();
        clicked = true;
      }
      
    });
  
    function showMessage() {
      const message = document.createElement('p');
      message.textContent = "Los proximas que comas te van a dar diarrea JAJAJAJAJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJAJJAAJAJAJAJJAJAJAJAJAJAJAJAJJAJAJAJAJA ";
      card.appendChild(message);
    }
  });