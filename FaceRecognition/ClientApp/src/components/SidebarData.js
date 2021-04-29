import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Miembros',
        path: '/miembros',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'

    },
    {
        title: 'Categoria',
        path: '/categoria',
        icon: <IoIcons.IoIosAlbums />,
        cName: 'nav-text'

    },
    {
        title: 'Historial',
        path: '/historial',
        icon: <FaIcons.FaHistory />,
        cName: 'nav-text'

    },
    {
        title: 'WebCam',
        path: '/webcam',
        icon: <FaIcons.FaCamera />,
        cName: 'nav-text'

    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'

    },
    {
        title: 'Cerrar sesión',
        path: '/cerrar',
        icon: <IoIcons.IoIosExit />,
        cName: 'nav-text'

    },


]