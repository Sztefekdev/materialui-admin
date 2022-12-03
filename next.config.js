/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
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

// you can analyze bundles by running 'ANALYZE=true yarn build'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withTM(nextConfig));
