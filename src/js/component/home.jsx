import React, { useState } from "react";

import { TrafficLight } from "./TrafficLight";
import { ButtonPurple } from "./ButtonPurple";
import { ButtonAutomatic } from "./ButtonAutomatic";

const Home = () => {

	const [color, setColor] = useState("");
	const [btnAuto, setBtnAuto] = useState(false);
	const [addPurple, setAddPurple] = useState(false);

	return (
		<div>
			<TrafficLight color={color} setColor={setColor} addPurple={addPurple} />
			<ButtonPurple setAddPurple={setAddPurple} />
			<ButtonAutomatic color={color} setColor={setColor} btnAuto={btnAuto} setBtnAuto={setBtnAuto} />
		</div>
	);
};

export default Home;
