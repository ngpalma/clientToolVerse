import React from 'react';
import styles from "./Dashboard.module.css";
import FilterBar from '../FilterBar/FilterBar';
import {Link} from "react-router-dom";


const Dashboard = () => {
    return (
        
        <div className={styles.listContainer}>
        <FilterBar>
            <h3 style={{paddingTop: "20px"}}>MENU</h3>
            <Link to="/admin/productsList"><h4 style={{paddingTop: "20px"}}>Lista de Productos</h4></Link>
            <Link to="/admin/editproducts"><h4 style={{paddingTop: "20px"}}>Editar Productos</h4></Link>
            
            <Link to="/createProduct"><h4 style={{paddingTop: "20px"}}>Crear Productos</h4></Link>
            <Link to="/admin/user"><h4 style={{paddingTop: "20px"}}>Usuarios</h4></Link>
            <Link to="/admin/order"><h4 style={{paddingTop: "20px"}}>Ordenes de Compra</h4></Link>
            <h4 style={{paddingTop: "20px"}}>Extra</h4>
            </FilterBar>
        </div>
        
    );
}

export default Dashboard;
