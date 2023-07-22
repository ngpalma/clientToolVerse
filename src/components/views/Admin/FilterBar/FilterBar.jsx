import React from 'react';
import styles from "./FilterBar.module.css";

const FilterBar = (props) => {
    return (
        <nav className={styles.filterBarContainer}>
        <div>
            {props.children}
        </div>
        </nav>
    );
}

export default FilterBar;
