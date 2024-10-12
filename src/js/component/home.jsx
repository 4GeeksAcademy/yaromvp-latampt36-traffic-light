import React, { useState } from "react";

import { TrafficLight } from "./TrafficLight";
import { ButtonPurple } from "./ButtonPurple";

//create your first component
const Home = () => {

	const [color, setColor] = useState("");
	const [addPurple, setAddPurple] = useState(false);

	return (
		<div>
			<TrafficLight color={color} setColor={setColor} addPurple={addPurple} />
			<ButtonPurple setAddPurple={setAddPurple} />
		</div>
	);
};

export default Home;
