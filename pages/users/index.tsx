import styles from "../../styles/menu.module.css";
export default function userPage(){
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    return(
        <div className={styles.menuContainer}>
        <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <h1 style={{backgroundColor :"red",display:"inline",position:"fixed"}}>user</h1>
        <img src={url} alt="fundo do app" width={'700px'}/>
      
        </div>
        </div>
        )
}
