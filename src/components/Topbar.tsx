import React, { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens, useMode } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type Props = {};


function Topbar({}: Props) {
	const theme: any = useTheme();
	const colors: any = tokens(theme.palette.mode);
	const colorMode: any = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			<Box
				display="flex"
				borderRadius="3px"
				sx={{
					backgroundColor: colors.primary[400],
				}}
			>
				<InputBase
					sx={{
						ml: 2,
						flex: 1,
					}}
					placeholder="Search"
				/>
				<IconButton type="button" sx={{ p: 1 }} aria-label="Search">
					<SearchOutlinedIcon />
				</IconButton>
			</Box>
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode} aria-label="Dark / light mode">
					{theme?.palette?.mode === "dark" ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton aria-label="Notifications">
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton aria-label="Settings">
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton aria-label="Person">
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default Topbar;
