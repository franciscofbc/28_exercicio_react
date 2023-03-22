import { useState } from 'react'
import styles from './Formulario.module.css'


const Formulario = () => {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [IMC, setIMC] = useState(0)

    const calcIMC = (event) => {
        event.preventDefault();
        setIMC(((peso / Math.pow(altura, 2)) * 100).toFixed(2))
        return IMC
    }


    return (
        <div>
            <h1 className={styles.title}>Calculadora IMC</h1>

            <div className={styles.divContent}>

                <div>
                    <h2>Calcular IMC</h2>
                    <form>
                        <div className={styles.itemsForm}>
                            <label>Peso</label>
                            <input className={styles.inputForm} type='number' placeholder='Digite o seu peso em KG' onChange={event => setPeso(parseFloat(event.target.value))} />
                        </div>
                        <div className={styles.itemsForm}>
                            <label>Altura</label>
                            <input className={styles.inputForm} type='number' placeholder='Digite a sua altura em CM' onChange={event => setAltura(parseFloat(event.target.value))} />
                        </div>
                        <div className={styles.itemsForm}>
                            <button className={styles.buttonForm} onClick={calcIMC}>Calcular IMC</button>
                        </div>
                        <div>
                            <h3>Resultado:</h3>
                            <p>O seu Indice de Massa Corporal é:<span className={styles.spanResult}> {IMC}</span></p>
                            <p>Você está com:<span className={styles.spanResult}>
                                {IMC < 0.185 ? ' Baixo peso' : IMC >= 0.185 && IMC <= 0.249 ? ' Peso normal'
                                    : IMC > 0.249 && IMC <= 0.299 ? ' Excesso de peso' : ' Obesidade'}
                            </span></p>
                        </div>
                    </form>
                </div >

                <div>
                    <h2 >Classificação IMC</h2>
                    <p><span className={styles.spanResult}>Cálculo: IMC = Peso (em kg) ÷ Altura² (em metros)</span></p>
                    <p>Baixo peso: IMC menor que 18,5</p>
                    <p>Peso normal: IMC de 18,5 a 24,9</p>
                    <p>Excesso de peso: IMC de 25 a 29,9</p>
                    <p>Obesidade: IMC maior que 30</p>
                </div>

            </div >

        </div >

    )
}


export default Formulario