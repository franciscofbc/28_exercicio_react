import { useState } from 'react'
import styles from './Formulario.module.css'


const Formulario = () => {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calcularIMC = () => {
        const IMC = ((peso / Math.pow(altura, 2)) * 100).toFixed(2)

        if (IMC < 0.185) {
            return (
                <div>
                    <p>O seu Indice de Massa Corporal é: {IMC}</p>
                    <p>Você está com: Baixa peso</p>
                </div>
            )
        } else if (IMC >= 0.185 && IMC <= 0.249) {
            return (
                <div>
                    <p>O seu Indice de Massa Corporal é: {IMC}</p>
                    <p>Você está com: Peso normal</p>
                </div>
            )
        } else if (IMC > 0.249 && IMC <= 0.299) {
            return (
                <div>
                    <p>O seu Indice de Massa Corporal é: {IMC}</p>
                    <p>Você está com: Excesso de peso</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>O seu Indice de Massa Corporal é: {IMC}</p>
                    <p>Você está com: Obesidade</p>
                </div>
            )
        }
    }


    return (
        <div className={styles.div}>
            <h1>Calculadora IMC</h1>

            <div className={styles.divContent}>

                <div className={styles.form}>
                    <h2 className={styles.subTitle}>Calcular IMC</h2>
                    <form>
                        <div className={styles.itemsForm}>
                            <label>Peso:</label>
                            <input type='number' placeholder='Digite o seu peso em KG' onChange={event => setPeso(parseFloat(event.target.value))} />
                        </div>
                        <div className={styles.itemsForm}>
                            <label>Altura:</label>
                            <input type='number' placeholder='Digite a sua altura em CM' onChange={event => setAltura(parseFloat(event.target.value))} />
                        </div>
                        <div className={styles.itemsForm}>
                            <button className={styles.buttonForm}>Calcular IMC</button>
                            <button className={styles.buttonForm}>Limpar valores</button>
                        </div>
                        <div className={styles.itemsForm}>
                            <h3>Resultado:</h3>
                            {calcularIMC()}

                        </div>
                    </form>
                </div >

                <div className={styles.tab}>
                    <h2 className={styles.subTitle}>Classificação IMC</h2>
                    <p>Cálculo: IMC = Peso (em kg) ÷ Altura² (em metros)</p>
                    <p>Baixo peso: IMC MENOR(AJUSTAR) 18,5</p>
                    <p>Peso normal: IMC ≥ 18,5 a 24,9</p>
                    <p>Excesso de peso: IMC ≥ 25 a 29,9</p>
                    <p>Obesidade: IMC ≥ 30</p>
                </div>

            </div >

        </div >

    )
}


export default Formulario