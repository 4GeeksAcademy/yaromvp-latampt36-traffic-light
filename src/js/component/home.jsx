import React, { useState } from "react";

import { TrafficLight } from "./TrafficLight";
import { ButtonPurple } from "./ButtonPurple";
import { ButtonAutomatic } from "./ButtonAutomatic";

const Home = () => {

	const [color, setColor] = useState("");
	const [addPurple, setAddPurple] = useState(false);

	return (
		<div>
			<TrafficLight color={color} setColor={setColor} addPurple={addPurple} asdasd={"qweqwe"} />
			<ButtonPurple setAddPurple={setAddPurple} />
			<ButtonAutomatic autoColor={color} setAutoColor={setColor} />
		</div>
	);
};

export default Home;
