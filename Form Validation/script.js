
const form = document.getElementById('form'); 
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const passwordTwo = document.getElementById('password2'); 
const small = document.getElementById('small')
const small2 = document.getElementById('small2')
let small3 = document.getElementById('small3')
const small4 = document.getElementById('small4')



form.addEventListener('submit', (e) => {

    if (username.value === '' || username.value === null) {
        small.innerHTML = 'Username is required!';
        small.style.color = 'red'
        
    } else if 
        (username.value.length <= 5) {
        small.innerHTML = 'It is not a valid Username!'
        small.style.color = 'red'

    } else {
        small.innerHTML = 'Good username:)'
        small.style.color = 'green'
    }



    if (password.value.length <= 5 || null ) {
        small3.innerHTML = 'Password must be longer than 6 charachters!'
        small3.style.color = 'red' 

    } 

     else if  (password.value.length > 5) {
        small3.innerHTML = 'Password is strong enough:)';
        small3.style.color = 'Green'

    } else {
        small3.innerHTML = 'Passwords match!'
        small3.style.color = 'green';

    }
    



    if (passwordTwo.value === password.value) {
        small4.innerHTML = 'Passwords match!'
        small4.style.color = 'green';

    } else if (passwordTwo.value != password.value) {
        small4.innerHTML = 'Passwords do not match(:'
        small4.style.color = 'red';

    } else {
        small4.innerHTML = ''
    }


    e.preventDefault ();

    

});













