import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function UpdateProduto(){

    let navigate = useNavigate();

    const { id } = useParams();

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

    useEffect(() => {
        loadProduto();
      }, []);
    
      const loadProduto = async () => {
          const result = await axios.get(`http://localhost:8080/product/produto/${id}`);
          setProdutos(result.data);
      };

      const onSubmit = async (e) => {
        console.log(produto.fornecedor);
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/update/${id}`, produto);
        console.log("Entrou aki");
        navigate("/produtos");
    };

    return (
        <div className="container">
            <div  className="row">
            <div className="bg-dark text-bg-primary col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h3 className="text-center m-4">Cadastro</h3>
                    <h5>Produto</h5>

                    <h2>************</h2>
            
            <form onSubmit={(e)=> onSubmit(e)}>
                
                <label htmlFor="productcode" className="form-label">Código-Produto</label>
                
                <div className="mb-3">
                <input type="text" placeholder="digite o código..." name="productcode" className="form-control" required
                value={productcode} onChange={(e) => onInputChangeCode(e)}/>
                  </div>

                  <label htmlFor="nome" className="form-label">Nome</label>
                 <div className="mb-3">
                <input type="text" placeholder="digite o nome..." name="nome" className="form-control" required
                value={nome} onChange={(e) => onInputChangeNome(e)}/>
                  </div>           
                        
                <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
                <div className="mb-3">
                <input type="text" placeholder="digite o fornecedor..." name="fornecedor" className="form-control" required
                value={fornecedor} onChange={(e) => onInputChangeFornecedor(e)}/>
                  </div> 

                <label htmlFor="valor" className="form-label">Valor</label>
                <div className="mb-3">
                <input type="text" placeholder="digite o valor..." name="valor" className="form-control" required
                value={valor} onChange={(e) => onInputChangeValor(e)}/>
                  </div> 

                  <button type="submit" className="btn btn-light " >Submit</button>

                        <Link className="btn btn-danger mx-2" to="/produtos">
                            Cancelar
                        </Link>        
                        
                </form>             


            </div>

            </div>
        </div>

    );  


}