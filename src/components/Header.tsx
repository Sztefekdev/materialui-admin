import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

type Props = {
	title: string;
	subtitle: string;
};

function Header({ title, subtitle }: Props) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box mb="30px">
			<Typography
				variant="h2"
				color={colors.grey[100]}
				fontWeight="bold"
				sx={{ mb: "5px", textTransform: "uppercase" }}
			>
				{title}
			</Typography>
			<Typography variant="h5" color={colors.greenAccent[500]}>
				{subtitle}
			</Typography>
		</Box>
	);
}

export default Header;
