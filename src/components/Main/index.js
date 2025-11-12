import styles from './Main.module.css'
import iconWhatsapp from '../../assets/icons8-headset-64.png'
import imgShampoo from '../../assets/shampoo-desenrola1.jpg'
import imgAtivador from '../../assets/ativador-desenrola1.jpg'
import imgModelador from '../../assets/modelador-desenrola1.jpg'
import imgCreme from '../../assets/creme-desenrola1.jpg'
import iconMoney from '../../assets/icons8-money-50.png'
import iconCart from '../../assets/icons8-cart-50.png'
import imgCards from '../../assets/bandeira-cartoes.png'

function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.sectionMain}>
                <div className={styles.boxDescImg}>
                    <h1>Beleza que vem da natureza.</h1>
                    <p>Shampoos, condicionadores e finalizadores que realçam o melhor dos seus cachos.</p>
                    <button className={styles.buttonCall}>
                        Fale com um atendente
                        <img src={iconWhatsapp} alt=''></img>
                    </button>
                </div>
            </section>
            <section className={styles.sectionProduct}>
                <img src={imgShampoo} alt=''></img>
                <div className={styles.productDesc1}>
                    <h2>Shampoo a Seco Detox & Volume</h2>
                    <p>Um spray com partículas finas. Para limpar a raiz oleosa sem molhar. Ele absorve o excesso de óleo e sujeira do couro cabeludo e cria um efeito de volume na raiz.</p>
                    <p>Aplica-se na raiz, espera-se um pouco e depois massageia-se com os dedos para distribuir o produto e dar volume.</p>
                    <div className={styles.priceBox}>
                        <h3 className={styles.productPrice}>R$44,90</h3>
                        <img src={imgCards} alt=''></img>
                    </div>
                    <div className={styles.boxButtons}>
                        <button>Comprar <img src={iconMoney} alt=''></img> </button>
                        <button><img src={iconCart} alt=''></img></button>
                    </div>
                </div>
            </section>
            <section className={styles.sectionProduct}>
                <img src={imgAtivador} alt=''></img>
                <div className={styles.productDesc1}>
                    <h2>Spray Ativador a Seco</h2>
                    <p>Um spray leve, como se fosse uma "água" para cabelo seco. É usado principalmente para o "day after". Quando os cachos estão amassados, com frizz ou perderam a forma no dia seguinte à lavagem, ele reativa a curvatura e devolve a definição.</p>
                    <p>Borrifa-se diretamente nos cachos secos e amassa-se o cabelo.</p>
                    <div className={styles.priceBox}>
                        <h3 className={styles.productPrice}>R$39,90</h3>
                        <img src={imgCards} alt=''></img>
                    </div>
                    <div className={styles.boxButtons}>
                        <button>Comprar <img src={iconMoney} alt=''></img> </button>
                        <button><img src={iconCart} alt=''></img></button>
                    </div>
                </div>
            </section>
            <section className={styles.sectionProduct}>
                <img src={imgCreme} alt=''></img>
                <div className={styles.productDesc1}>
                    <h2>Creme de Pentear ( Definição Extrema )</h2>
                    <p>Com óleo de abacate e manteiga de karité, este creme de pentear proporciona hidratação profunda e definição duradoura para todos os tipos de cachos. Ideal para quem busca fios soltos, macios e com brilho natural.</p>
                    <p>Com os fios úmidos, aplique uma quantidade suficiente do creme na palma das mãos, distribua uniformemente pelos cabelos, do comprimento às pontas.</p>
                    <div className={styles.priceBox}>
                        <h3 className={styles.productPrice}>R$39,90</h3>
                        <img src={imgCards} alt=''></img>
                    </div>
                    <div className={styles.boxButtons}>
                        <button>Comprar <img src={iconMoney} alt=''></img> </button>
                        <button><img src={iconCart} alt=''></img></button>
                    </div>
                </div>
            </section>
            <section className={styles.sectionProduct}>
                <img src={imgModelador} alt=''></img>
                <div className={styles.productDesc1}>
                    <h2>Mousse Leve Modeladora</h2>
                    <p>Uma espuma leve de finalização. Serve para modelar os cachos e dar fixação (segurar a forma) sem deixar o cabelo duro ou pesado (como um gel). Dá volume e brilho.</p>
                    <p>Aplica-se na mão e distribui-se nos cachos secos, amassando para modelar.</p>
                    <div className={styles.priceBox}>
                        <h3 className={styles.productPrice}>R$49,90</h3>
                        <img src={imgCards} alt=''></img>
                    </div>
                    <div className={styles.boxButtons}>
                        <button>Comprar <img src={iconMoney} alt=''></img> </button>
                        <button><img src={iconCart} alt=''></img></button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;