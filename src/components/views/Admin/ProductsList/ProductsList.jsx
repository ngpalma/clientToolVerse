import React, { useEffect} from 'react';
import styles from "./ProductsList.module.css";
import { getTools } from '../../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const ProductsList = () => {
 const allProducts = useSelector((state) => state.toolsShown );
 console.log(allProducts);
const dispatch = useDispatch()

    useEffect(() => {
        try {
            dispatch(getTools())
        } catch (error) {
            console.log("Error al obtener los productos:", error);
        }
        
    }, [dispatch]);

    return (
        <div>
            <h1 className={styles.title}>LISTADO DE PRODUCTOS</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Precio</th>
                    <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.length === 0 ? (
                        <tr>
                            <td>No hay productos para mostrar</td>
                        </tr>
                    ) : (
                        allProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.model}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.detail}</td>
                                
                            </tr>
                        )
                        )
                    ) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;
