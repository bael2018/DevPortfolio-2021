const navbar = document.querySelector('.navbar')

window.onscroll = () => {
    window.scrollY > 650 ? navbar.classList.add('navbar_active') : navbar.classList.remove('navbar_active')
}

const links = document.querySelectorAll('.navbar a');
document.addEventListener('click' , e => {
    links.forEach(item => {
        e.target.id === item.id ? item.classList.add('linkActive') : item.classList.remove('linkActive')
    })
})

const skill = document.querySelectorAll('.skill_wrapper .skill_body')
const wrapper = document.querySelector('.skill_wrapper')
wrapper.addEventListener('click' , e => {
    skill.forEach(item => {
        e.target.id === item.id ? item.classList.toggle('skill_active') : item.classList.remove('skill_active')
    })
})
