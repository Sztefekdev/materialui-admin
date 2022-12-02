/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: true,
};

const withTM = require("next-transpile-modules")([
	"@fullcalendar/common",
	"@babel/preset-react",
	"@fullcalendar/common",
	"@fullcalendar/daygrid",
	"@fullcalendar/interaction",
	"@fullcalendar/react",
	"@fullcalendar/timegrid",
	"@fullcalendar/list",
]);

module.exports = withTM(nextConfig);
