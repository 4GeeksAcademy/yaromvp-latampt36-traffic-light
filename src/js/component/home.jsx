import React, { useState } from "react";

//include images into your bundle
import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {

	const [ color, setColor ] = useState("");

	return (
		<TrafficLight color={color} setColor={setColor} />
	);
};

export default Home;
