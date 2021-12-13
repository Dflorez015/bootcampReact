import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '../../routes/public/Public'
import * as SCC from '../style/styleCommon'

export default function Nav() {

    return (
        <SCC.StyleUl>
            {paths.map((link, index) => (
                <li key={index}>
                    <NavLink to={link.path}
                     className={(data) => data.isActive ? "active" : ""}>
                         {link.text}
                    </NavLink>
                </li>
            ))}
        </SCC.StyleUl>


    )
}
