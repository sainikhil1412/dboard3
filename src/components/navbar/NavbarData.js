import React from 'react';
import Dropdown from './../dropdown/Dropdown';

export const LogoData  ={
    title : 'Dashboard',
    cname: 'navbar-logo',
    icname : 'fab fa-firstdraft',
    path : '/'


    

}

export  const MenuData={
    cname : 'menu-icon',
    icnameIfTrue : 'fas fa-times' ,
    icnameIfFalse: 'fas fa-bars',
}

export const ItemData =[
    {
        title : 'Home',
        isDropDown : false,
        cname : 'nav-item',
        path : '/',
        linkCName : 'nav-links',
        key :1,



    },
    {
        title : 'Charts',
        isDropDown : true,
        cname : 'nav-item',
        path : '/services',
        linkCName : 'nav-links',
        icname : 'fas fa-caret-down',
        DropdownComponent : <Dropdown/>,
        key :2,

    },
    {
        title : 'Analytics',
        isDropDown : false,
        cname : 'nav-item',
        path : '/products',
        linkCName : 'nav-links',
        key :4,



    },
    {
        title : 'Contact us',
        isDropDown : false,
        cname : 'nav-item',
        path : '/contact-us',
        linkCName : 'nav-links',
        key :5,



    },
    {
        title : 'About us',
        isDropDown : false,
        cname : 'nav-item',
        path : '/sign-up',
        linkCName : 'nav-links',
        key :6,



    },
    
]