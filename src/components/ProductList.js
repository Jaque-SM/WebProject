import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function ProductList (){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
      loadProduto();
    }, []);
  
    const loadProduto = async () => {
        const result = await axios.get("http://localhost:8080/product/produtos");
        setProdutos(result.data);
    };

    const deleteProduto = async (id) => {
        await axios.delete(`http://localhost:8080/product/delete/${id}`);
        loadProduto();
    };

    return (
        <div>

        <h3 className="text-center">Produto List</h3>

        <div className='row'>
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code-Produto</th>
                <th scope="col">Nome</th>
                <th scope="col">Fornecedor</th>
                <th scope="col">Valor</th>
                <th scope="col"> Ações</th>
            </tr>
        </thead>
        <tbody>
            {
             produtos?.map((produto, index) =>(
                <tr>
                <td scope='row' key={index}>{index + 1}</td>
                <td scope='row'>{produto.productcode} </td>
                <td>{produto.nome}</td>
                <td>{produto.fornecedor}</td>
                <td>{produto.valor}</td>
                <td scope='row'> 
                
                <Link className='btn btn-secondary mx-2' to={`/update/${produto.id}`}>
                    Editar 
                </Link>

                <button
                    className="btn btn-danger me-md-2"
                    onClick={() => deleteProduto(produto.id)}>             
                    Excluir
                </button>

                </td>


                </tr>


             ))


            }
        </tbody>
        </table>

        </div>
        </div>

    )

    
}