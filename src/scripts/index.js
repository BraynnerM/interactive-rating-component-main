const button = document.getElementById('submitButton'); 
const cardContent = document.getElementsByClassName('card')[0];
let selectedRating = '';

button.addEventListener('click', function() {  
  const selectedRadioButton = document.querySelector('input[name="rating"]:checked');
  if (selectedRadioButton) {
    selectedRating = selectedRadioButton.value;  
  cardContent.innerHTML = `
  <style>
    .card {
      align-items:center; 
      padding-top: 3rem;
      padding-bottom: 3rem;
           
    }
    img {
        max-width: 47%;             
    }
    label {
      background-color: var(--card-color);
      border-radius: 3rem;
      height: 3.2rem;
      width: 56%;
      font-size: 1.5rem;
      color: hsla(25, 97%, 53%, 0.8);
      border: 0px solid;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    
    h2 {
      font-size: 2.8rem;
      text-align: center;
      color: #fff;
      font-weight: 500;
    }

    p {
      color: var(--p-color);
      font-size: 1.5rem;
      width:99%;
      text-align: center;
      line-height: 2.5rem;
    }

    @media (max-width: 375px) {
      label {
        font-size: 1.3rem;
      }

      h2 {
        font-size: 2.2rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

  </style>
  <!-- Thank you state start -->
  <img src="./src/assets/illustration-thank-you.svg" alt="thank-you-image">
  <label>You selected ${selectedRating} out of 5</label>

  <h2>Thank you!</h2>

  <p>We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!</p>
  <!-- Thank you state end -->
  `;
} else {
    window.alert('Please select one value before submit.')
}
});
