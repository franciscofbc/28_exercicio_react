const Formulario = () => {
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5, 6].map(i => <li key={i}>{i}</li>)}
            </ul>
        </form>
    )
}


export default Formulario