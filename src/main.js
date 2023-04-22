//Menu Principal
const principalMenu = document.querySelector('.navbar_principal_group1-menuIcon')
const principalMenuActive = document.querySelector('.navbar_principal_group1-menuIcon--Active') 
const principalMenuActiveClose = document.querySelector('.navbar_principal_group1-menuIcon--Active-Close-img')
const backGroundMenu = document.querySelector('.background-menu')

principalMenuActiveClose.addEventListener('click', toggleMenu)
principalMenu.addEventListener('click', toggleMenu)

function toggleMenu(){
    principalMenuActive.classList.toggle('inactive')
    principalMenuActiveClose.classList.toggle('inactive')
    backGroundMenu.classList.toggle('inactive')
}

const btnSubMenuPrincipals = document.querySelector('.navbar_principal_group1-menuIcon--Active_principals-more')
const pSubMenuPrincipals = document.querySelector('.navbar_principal_group1-menuIcon--Active_principals-more_p')
const imgSubMenuPrincipals = document.querySelector('.navbar_principal_group1-menuIcon--Active_principals-more_img')
const ActiveSubMenuPrincipals = document.querySelector('.navbar_principal_group1-menuIcon--Active_principals-more--Active')
const closeSubMenuPrincipals = document.querySelector('.navbar_principal_group1-menuIcon--Active_Principals-more--Active_minus')

btnSubMenuPrincipals.addEventListener('click', toggleSubMenu)
closeSubMenuPrincipals.addEventListener('click', toggleSubMenu)

function toggleSubMenu(){
    pSubMenuPrincipals.classList.toggle('inactive')
    imgSubMenuPrincipals.classList.toggle('inactive')
    ActiveSubMenuPrincipals.classList.toggle('inactive')
}

const btnSubMenuprograms = document.querySelector('.navbar_principal_group1-menuIcon--Active_programs-more')
const pSubMenuprograms = document.querySelector('.navbar_principal_group1-menuIcon--Active_programs-more_p')
const imgSubMenuprograms = document.querySelector('.navbar_principal_group1-menuIcon--Active_programs-more_img')
const ActiveSubMenuPrograms = document.querySelector('.navbar_principal_group1-menuIcon--Active_programs-more--Active')
const closeSubMenuPrograms = document.querySelector('.navbar_principal_group1-menuIcon--Active_programs-more--Active_minus')

btnSubMenuprograms.addEventListener('click', toggleSubMenuPrograms)
closeSubMenuPrograms.addEventListener('click', toggleSubMenuPrograms)

function toggleSubMenuPrograms(){
    pSubMenuprograms.classList.toggle('inactive')
    imgSubMenuprograms.classList.toggle('inactive')
    ActiveSubMenuPrograms.classList.toggle('inactive')
}