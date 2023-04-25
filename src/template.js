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

// Menu Account

const usrMenu = document.querySelector('.navbar_principal_group2-account')
const closeUsrMenu = document.querySelector('.navbar_principal_group2-account--Active_close')
const usrMenuActive = document.querySelector('.navbar_principal_group2-account--Active')

usrMenu.addEventListener('click', toggleMenuUsr)
closeUsrMenu.addEventListener('click', toggleMenuUsr)

function toggleMenuUsr(){
    backGroundMenu.classList.toggle('inactive')
    closeUsrMenu.classList.toggle('inactive')
    usrMenuActive.classList.toggle('inactive')
}

// Toggle Menus

const toggleMenuExplore = document.querySelector('.navbar_principal_group2-account--Active_header-explore')
const toggleMenuAccount = document.querySelector('.navbar_principal_group1-menuIcon--Active_header-account')


toggleMenuExplore.addEventListener('click', switchMenuExplore)
toggleMenuAccount.addEventListener('click', switchMenuUsr)

function switchMenuExplore(){
    toggleMenu() 
    toggleMenuUsr()
}
function switchMenuUsr(){
    toggleMenuUsr()
    toggleMenu()
}

// Location Menu

const locationMenu = document.querySelector('.navbar_address')
const locationMenuActive = document.querySelector('.navbar_address-Active')
const locationBackground = document.querySelector('.background-menu-location')

locationMenu.addEventListener('click', menuLocation)
locationBackground.addEventListener('click', menuLocation)

function menuLocation(){
    locationBackground.classList.toggle('inactive')
    locationMenuActive.classList.toggle('inactive')
}