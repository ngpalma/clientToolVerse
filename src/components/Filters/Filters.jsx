// Dentro del componente Filters
import { useDispatch } from "react-redux";
import { changeFilterCategory, changeFilterBrand, setCurrentPage } from "../../redux/actions";
import style from './Filter.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  // Handlers para los cambios en los filtros
  const handleCategoryFilterChange = (event) => {
    dispatch(changeFilterCategory(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleBrandFilterChange = (event) => {
    dispatch(changeFilterBrand(event.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={style.filtersContainer}>
      <div className={style.filtroCat}>
        <div className={style.orderTitle}>Filtrar por Categoría</div>
        <select onChange={handleCategoryFilterChange}>
          <option value='Eléctricos'>Eléctricos</option>
          <option value='Manuales'>Manuales</option>
          <option value='Inalámbricos'>Inalámbricos</option>
          <option value='Neumáticos'>Neumáticos</option>
          <option value='Hogar'>Hogar</option>
        </select>
      </div>

      <div className={style.filtroMarca}>
        <div className={style.orderTitle}> Filtrar por Marca</div>
        <select onChange={handleBrandFilterChange}>
          <option value='MAKITA'>Makita</option>
          <option value='EINHELL'>Einhell</option>
          <option value='DEWALT'>Dewalt</option>
          <option value='TRUPER'>Truper</option>
          <option value='STANLEY'>Stanley</option>
          <option value='IRWIN'>Irwin</option>
          <option value='BOSCH'>Bosch</option>
        </select>
      </div>
    </div >
  );
};

export default Filters;

