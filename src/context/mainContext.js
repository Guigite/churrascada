import React from "react";
import { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){
    let data = {
        pessoas:{
            total: 0,
            totalsemcrianca:0,
            homens: 0,
            mulher: 0,
            crianca: 0,
            totalkilos: 0,
            totallitrosa: 0,
            totallitrosc: 0
        }
    }

    const AddPessoas = (pessoa, quantidade) => {
        if(pessoa == "homem"){
            data.pessoas.homens = quantidade;
        } else if(pessoa == "mulher") {
            data.pessoas.mulher = quantidade;
        } else if(pessoa == "crianca"){
            data.pessoas.crianca = quantidade;
        }
    }

    const ValorTotal = () => {
        data.pessoas.total = data.pessoas.homens + data.pessoas.mulher + data.pessoas.crianca;
    }

    const ValorSemCrianca = () => {
        data.pessoas.totalsemcrianca = data.pessoas.homens + data.pessoas.mulher;
    }

    const TotalCarnes = () => {
        data.pessoas.totalkilos = (data.pessoas.homens*0.6) + (data.pessoas.mulher*0.4) + (data.pessoas.crianca*0.25);
    }

    const TotalLitrosAdultos = () => {
        data.pessoas.totallitrosa = (data.pessoas.homens*2) + (data.pessoas.mulher*1.5);
    }

    const TotalLitrosCrianca = () => {
        data.pessoas.totallitrosc = data.pessoas.crianca*1;
    }

    const response = 
    {
        data,
        AddPessoas,
        ValorTotal,
        ValorSemCrianca,
        TotalCarnes,
        TotalLitrosAdultos,
        TotalLitrosCrianca
    };
   
    return(

        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}