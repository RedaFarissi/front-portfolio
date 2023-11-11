import "./Splash.sass"
import React, { useEffect  } from 'react';
import { useNavigate } from "react-router-dom";

export default function Splash({ addSplash }){

    const navigate = useNavigate();

    useEffect(() => {
        addSplash()
        const timeoutId = setTimeout(() => {
            navigate("/home");
        }, 4000);

        return ()=> clearTimeout(timeoutId);
    }, [navigate, addSplash]);

    return(
<div className="conatiner conatiner-splash">
   
    <div className="splash">
        <div className="container-test-2">
            <h1 className="splash-h1">&lt; Reda Eskouni /&gt;</h1>
            <div className="riting riting-1"></div>
        </div>
    </div> 
    
</div>
    )
}