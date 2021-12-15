import React from 'react'
import { useSelector } from 'react-redux'
import { columnCommon, h1Left } from '../../const/elemets'
import { RootState } from '../../context/store'
import { StyleFlex, StyleH1 } from '../style/styleCommon'
import { InitContainer, MainInitContainer, ItemListInit } from './styleInit'

export default function Init() {
    const { register } = useSelector((state: RootState) => state.forms)
    return (
        <InitContainer>
            <StyleFlex theme={{ ...columnCommon, width: "80%" }}>
                <StyleH1 theme={h1Left}>Registros</StyleH1>
                <MainInitContainer>
                    {register.map((data, index) => (
                        <ItemListInit key={index}>
                            <StyleFlex theme={{ ...columnCommon, gap: "5px", align: "baseline" }}>
                                <p>Nombre: {data.name + " " + data.lname}</p>
                                <p>Correo: {data.email}</p>
                            </StyleFlex>
                            <StyleFlex theme={{ ...columnCommon, gap: "5px", align: "baseline" }}>
                                <p>Celular: {data.cel}</p>
                                <p>Teléfono: {data.tel}</p>
                            </StyleFlex>
                        </ItemListInit>
                    ))}
                </MainInitContainer>
            </StyleFlex>
        </InitContainer>
    )
}
