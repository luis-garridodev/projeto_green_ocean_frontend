import styles from "../styles/menu.module.css";
export default function mainPage(){
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    return(
        <div className={styles.menuContainer}>
        <div className="app">
        <img src={url} alt="fundo do app" width={'700px'}/>
        <h1>bem vindo a página inicial da green ocean</h1>
        </div>
        </div>
        )
}
/home/luis/green_ocean/pages/main_page.jsx