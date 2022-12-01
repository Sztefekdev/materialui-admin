import { Box } from "@mui/material";
import Header from "../components/Header";

export default function Home() {
	return <Box m="20px">
		<Box display="flex" justifyContent="space-between" alignItems="center">
			<Header title="Dashboard" subtitle="Welcome to your dashboard" />
		</Box>
	</Box>;
}
