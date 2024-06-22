import { useEffect } from "react";

const Even = () => {

    useEffect(()=>{
        return ()=>{
            console.log("even component unmount");
        }
    }, []);

    return(
        <div>
            
        </div>
    );
};

export default Even;