
import style from './Filter.module.css';
import { useDispatch } from "react-redux";
import {
  changeFilterCategory,
  changeFilterBrand,
  setCurrentPage,
  //   getTools,  
} from "../../redux/actions";

const Filters = () => {

  const dispatch = useDispatch()

  return (
    <div className={style.filtersContainer}>
      <div className={style.filtroCat}>
        <div className={style.orderTitle}>Filtrar por Categoría</div>
        <select onChange={(e) => {
          dispatch(changeFilterCategory(e.target.value))
          dispatch(setCurrentPage(1))
        }}>
          <option value='Eléctricos'>Eléctricos</option>
          <option value='Manuales'>Manuales</option>
          <option value='Inalámbricos'>Inalámbricos</option>
          <option value='Neumáticos'>Neumáticos</option>
          <option value='Hogar'>Hogar</option>
        </select>
      </div>

      <div className={style.filtroMarca}>
        <div className={style.orderTitle}> Filtrar por Marca</div>
        <select onChange={(e) => {
          dispatch(changeFilterBrand(e.target.value))
          dispatch(setCurrentPage(1))
        }}>
          <option value='MAKITA'>Makita</option>
          <option value='EINHELL'>Einhell</option>
          <option value='DEWALT'>Dewalt</option>
          <option value='TRUPER'>Truper</option>
          <option value='STANLEY'>Stanley</option>
          <option value='IRWIN'>Irwin</option>
          <option value='BOSCH'>Bosh</option>
        </select>
      </div>
    </div >
  )
}


export default Filters;
