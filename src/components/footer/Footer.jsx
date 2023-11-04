import "./Footer.sass"

export default function Footer(props){
    return(
        <footer onClick={props.asideHidden} className="text-center">Made by <b>Reda Eskouni</b> ❤️</footer>
    )
}