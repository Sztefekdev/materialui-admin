import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";

type Props = {};

function Faq({}: Props) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return <Box m="20px">
		<Header  title="FAQ" subtitle="Frequently asked questions page" />
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					An Important question
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Consectetur irure qui laborum nisi Lorem. Reprehenderit fugiat eu nostrud laborum do. Non anim laboris tempor laboris magna. Et elit ea consectetur amet sit esse et consectetur incididunt Lorem duis. Do proident aliqua nisi aliquip aliquip incididunt nostrud.
				</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					An Important question
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Consectetur irure qui laborum nisi Lorem. Reprehenderit fugiat eu nostrud laborum do. Non anim laboris tempor laboris magna. Et elit ea consectetur amet sit esse et consectetur incididunt Lorem duis. Do proident aliqua nisi aliquip aliquip incididunt nostrud.
				</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					An Important question
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Consectetur irure qui laborum nisi Lorem. Reprehenderit fugiat eu nostrud laborum do. Non anim laboris tempor laboris magna. Et elit ea consectetur amet sit esse et consectetur incididunt Lorem duis. Do proident aliqua nisi aliquip aliquip incididunt nostrud.
				</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					An Important question
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Consectetur irure qui laborum nisi Lorem. Reprehenderit fugiat eu nostrud laborum do. Non anim laboris tempor laboris magna. Et elit ea consectetur amet sit esse et consectetur incididunt Lorem duis. Do proident aliqua nisi aliquip aliquip incididunt nostrud.
				</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					An Important question
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Consectetur irure qui laborum nisi Lorem. Reprehenderit fugiat eu nostrud laborum do. Non anim laboris tempor laboris magna. Et elit ea consectetur amet sit esse et consectetur incididunt Lorem duis. Do proident aliqua nisi aliquip aliquip incididunt nostrud.
				</Typography>
			</AccordionDetails>
		</Accordion>
	</Box>;
}

export default Faq;
