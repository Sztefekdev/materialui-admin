import { Box } from "@mui/material";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

type Props = {};

function Line({}: Props) {
	return (
		<Box m="20px">
			<Header title="Line Chart" subtitle="Simple Line Chart" />
			<LineChart height="75vh" />
		</Box>
	);
}

export default Line;
