import { Box, useTheme } from "@mui/material";
import GeographyChart from "../components/GeographyChart";
import Header from "../components/Header";
import { tokens } from "../theme";

type Props = {};

function Geography({}: Props) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="Geography Chart" subtitle="Simple Geography Chart" />
			<GeographyChart
				height="75vh"
				border={`1px solid ${colors.grey[100]}`}
				borderRadius="4px"
			/>
		</Box>
	);
}

export default Geography;
