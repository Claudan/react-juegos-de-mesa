import { PreviewJuego } from "./PreviewJuego";
import styles from "./juegos.module.css";
import { Filtro } from "./Filtro";

export const Juegos = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Panel de juegos de mesa</h3>
      <div className="row">
        <div className="col-9">
          {/* <JuegoSeleccionado />
          <h3 className={styles.h3}>otros juegos</h3> */}
          <div className={`${styles.PreviewContainer} row`}>
            <div className="col-6">
              <PreviewJuego url="https://http2.mlstatic.com/D_NQ_NP_910968-MLC43805612062_102020-O.webp" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://http2.mlstatic.com/D_NQ_NP_940060-MLC48044122889_102021-O.webp" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://images.zmart.cl/Productos/SKU/2018/08/22/JDM0529_201882212226_f.jpg" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://http2.mlstatic.com/D_NQ_NP_2X_865775-MLC45986712232_052021-F.webp" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://http2.mlstatic.com/D_NQ_NP_687020-MLA46521613230_062021-O.webp" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://cdn.shopify.com/s/files/1/0257/5292/8318/products/Cover_Llama_3D_1024x1024@2x.png?v=1578271287" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://falabella.scene7.com/is/image/Falabella/6291503_1?wid=1500&hei=1500&qlt=70" />
            </div>
            <div className="col-6">
              <PreviewJuego url="https://http2.mlstatic.com/D_NQ_NP_951777-MLA46521615204_062021-O.webp" />
            </div>
          </div>
        </div>
        <div className={`${styles.filtroContainer} col-3`}>
          <h3 className={styles.h3}>filtros</h3>
          <Filtro />
          <Filtro />
          <Filtro />
        </div>
      </div>
    </div>
  );
};
