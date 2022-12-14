import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../theme";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type ItemProps = {
	title: string;
	href: string;
	icon: ReactNode;
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
};

const Item = ({ title, href, icon, selected, setSelected }: ItemProps) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const moduleName: string = href.substring(1).split("/")[0];

	return (
		<MenuItem
			active={selected === moduleName}
			style={{
				color:
					selected === moduleName
						? colors.blueAccent[400]
						: colors.grey[100],
			}}
			onClick={() => setSelected(moduleName)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link href={href} aria-label="Menu item" />
		</MenuItem>
	);
};

type Props = {};

function Sidebar({}: Props) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(true);

	const route: string = useRouter().route.substring(1).split("/")[0];
	const [selected, setSelected] = useState(route);

	const changeIsCollapse = (isCollapsedParam: boolean) => {
		const elements = document.getElementsByClassName('sidebar-change-reload');
		const elementsLength = elements.length;
		const cntAttrName = 'data-sidebar-change-reload-cnt';
		for (let i = 0; i < elementsLength; i++)
		{
			const element = elements[i];
			element.classList.add('sidebar-change-reload-hide');
			const attrCnt = parseInt((element.hasAttribute(cntAttrName)) ? (element.getAttribute(cntAttrName) ?? '0') : '0');
			element.setAttribute(cntAttrName, (attrCnt + 1).toString());

			setTimeout(() => {
				const attrCnt = parseInt((element.hasAttribute(cntAttrName)) ? (element.getAttribute(cntAttrName) ?? '0') : '0');
				const newAttrCnt = attrCnt - 1;
				element.setAttribute(cntAttrName, newAttrCnt.toString());
				if (newAttrCnt <= 0) {
					element.classList.remove('sidebar-change-reload-hide');
				}
			}, 300); // 300ms is default duration of react-pro-sidebar
		}
		setIsCollapsed(isCollapsedParam);
	};

	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					backgroundColor: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: `transparent !important`,
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .pro-inner-item:hover": {
					color: "#868dfb !important",
				},
				"& .pro-menu-item.active": {
					color: "#6870fa",
				},
				height: "100vh",
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					<MenuItem
						onClick={() => changeIsCollapse(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography
									variant="h3"
									color={colors.grey[100]}
								>
									ADMINIS
								</Typography>
								<IconButton
									onClick={() => changeIsCollapse(!isCollapsed)}
									aria-label="Expand / collapse sidebar"
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* USER */}
					{!isCollapsed && (
						<Box mb="25px">
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Image
									src="/assets/user.png"
									alt="Profile image"
									width={100}
									height={100}
									style={{
										cursor: "pointer",
										borderRadius: "50%",
									}}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{
										m: "10px 0 0 0",
									}}
								>
									Name Surname
								</Typography>
								<Typography
									variant="h5"
									color={colors.greenAccent[500]}
								>
									Developer
								</Typography>
							</Box>
						</Box>
					)}

					{/* MENU ITEMS */}
					<Box paddingLeft={isCollapsed ? undefined : "10%"}>
						<Item
							title="Dashboard"
							href="/"
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Data
						</Typography>
						<Item
							title="Manage Team"
							href="/team"
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Contacts Information"
							href="/contacts"
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Invoices Balances"
							href="/invoices"
							icon={<ReceiptOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Pages
						</Typography>
						<Item
							title="Profile Form"
							href="/form"
							icon={<PersonOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Calendar"
							href="/calendar"
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							href="/faq"
							icon={<HelpOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Charts
						</Typography>
						<Item
							title="Bar Chart"
							href="/bar"
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							href="/pie"
							icon={<PieChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							href="/line"
							icon={<TimelineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography Chart"
							href="/geography"
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
}

export default Sidebar;
