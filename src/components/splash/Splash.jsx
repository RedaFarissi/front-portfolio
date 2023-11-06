import "./Splash.sass"
import React, { useEffect  } from 'react';
import { useNavigate } from "react-router-dom";

export default function Splash(props){

    const navigate = useNavigate();

    useEffect(() => {
        props.addSplash()
        const timeoutId = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return ()=> clearTimeout(timeoutId);
    }, [navigate]);

    return(
<div className="conatiner conatiner-splash">
    <div className="splash">
        
        <div className="container-test-2">
            <h1 className="splash-h1">Reda Eskouni</h1>
        </div>
    </div> 
</div>
    )
}