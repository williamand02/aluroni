import React, { useState } from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';
interface IOrdenador {
  ordenador: OpcoesOrdenador;
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}


function Ordenador({ordenador,setOrdenador}: IOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao =>opcao.value===ordenador)?.nome
  return (
    <button
      className={classNames({
        [styles.ordenador] : true,
        [styles["ordenador--ativo"]]: ordenador !== ""
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div 
          className={styles.ordenador__option} 
          key={opcao.value}
          onClick={()=>setOrdenador(opcao.value as OpcoesOrdenador)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Ordenador;
