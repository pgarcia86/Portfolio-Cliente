import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function AboutMePage({ handleIsntHome, isntHome, setIsntHome }) {
	
    useEffect(() => {
        setIsntHome(true)
    }, [])
    
    return (
		<>
			<div>
				<h2>Eugenio Oscar Giménez</h2>
				<h3>Web Developer</h3>
			</div>
            <Footer />
		</>
	);
}
