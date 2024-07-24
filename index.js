const themeDark = document.getElementById('darkMode');
const themeLight = document.getElementById('lightMode');


themeDark.addEventListener('click',()=>{
    document.body.classList.add('dark-mode')
})

themeLight.addEventListener('click',()=>{
    document.body.classList.add('light-mode')
})
