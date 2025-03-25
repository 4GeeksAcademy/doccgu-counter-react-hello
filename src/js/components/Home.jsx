import React from "react";
import Card from "./card.jsx";

//create your first component
const Home = ({numero}) => {
	return (
		<div className="d-flex justify-content-center">
			<Card digito={Math.floor (numero/1000000 %10)}/>
			<Card digito={Math.floor (numero/100000 %10)}/>
			<Card digito={Math.floor (numero/10000 %10)}/>
			<Card digito={Math.floor (numero/1000 %10)}/>
			<Card digito={Math.floor (numero/100 %10)}/>
			<Card digito={Math.floor (numero/10 %10)}/>
            <Card digito={numero %10}/>
		</div>
	);
};

export default Home;