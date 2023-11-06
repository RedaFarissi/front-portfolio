import "./Footer.sass"

export default function Footer(props){
    return(
        <footer style={(props.splash)?{display:"none"}:{display:"block"}} onClick={props.asideHidden} className="text-center footer">Made by <b>Reda Eskouni</b> ❤️</footer>
    )
}