import images  from "../../components/images";

export default function ToTest(){
    return( 
    <div className="container">
        <div className="row">
        {
           Object.entries(images).map(([key, value]) =><div className="col-3">
                <img 
                    key={key} 
                    src={value} 
                    alt={key} 
                    className="w-100"
                />
                <p>{key}</p>
        
            </div>
           ) 
        }
        </div>
    </div>
    )
}