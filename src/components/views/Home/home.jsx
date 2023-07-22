
import style from './home.module.css'
import React from 'react';
import ProductCards from '../ProductCards/ProductCards';
import Ordering from '../../Ordering/Ordering';
import Filters from '../../Filters/Filters'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch } from "react-redux";
import {
    getTools,
    setCurrentPage,
} from "../../../redux/actions";
import Footer from '../Footer/Footer';


function Home() {
    const dispatch = useDispatch();

    return (
        <div className={style.homeDiv}>
            <br></br>
            <Carousel showThumbs={false} autoPlay={true} interval={3000}>
                <img src="https://belltec.com.co/modules/angarslider/views/img/images/79f2d78b09ec9efa0cb71b14a6136ed979781ce7_bannerofertasJULIO%202023%20BELLTEC.jpg" alt="img" />
                <img src="https://belltec.com.co/modules/angarslider/views/img/images/1c2616dc4c86eccdcd219d50eeb50fb9f68ce4ae_bannerinalambricos%202022.jpg" alt="img" />
                <img src="https://belltec.com.co/modules/angarslider/views/img/images/564b42ff1301a72d87cb01b6ad9ab40628597c14_748fe41843339635df928ce00affab834a8b249e_katcher.jpg" alt="img" />

            </Carousel>
            <div className={style.filtOrd}>
                <Filters />
                <Ordering />
                <div className={style.button}>
                    <input type="submit" value=" QUITAR FILTROS " onClick={() => {
                        dispatch(getTools());
                        dispatch(setCurrentPage(1));
                    }} />
                </div>
            </div>
            <ProductCards />
            <hr />

            <Footer/>




        </div>
    )
}
export default Home;