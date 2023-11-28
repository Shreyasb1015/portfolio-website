let buttonElement=document.querySelector('.submit-button');

buttonElement.addEventListener('click',() =>{

    if(buttonElement.innerHTML==='SUBMIT')
    {
        buttonElement.innerHTML='SUBMITTED &#10003;';
        document.querySelector('.js-first-name').value='';
        document.querySelector('.js-last-name').value='';
        document.querySelector('.js-long-text').value='';

    }
});

