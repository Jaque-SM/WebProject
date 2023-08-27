import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function AddProduto (){

    let navigate = useNavigate();

    const [produto, setProdutos] = useState({
        productcode: " ",
        nome: "",
        fornecedor: "",
        valor: "",

    });

    const {productcode, nome, fornecedor, valor } = produto;


    const onInputChangeCode = (e) => {
        setProdutos(
            {...produto, productcode: e.target.value}
        )
    }

    const onInputChangeNome = (e) => {
        setProdutos(
            {...produto, nome: e.target.value}
        )
    }

    const onInputChangeFornecedor = (e) => {
        setProdutos(
            {...produto, fornecedor: e.target.value}
        )
    }

    const onInputChangeValor = (e) => {
        setProdutos(
            {...produto, valor: e.target.value }
        )
    }

    









}