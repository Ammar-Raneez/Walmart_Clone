/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
			{
				protocol: 'https',
				hostname: 'links.papareact.com',
			},
			{
				protocol: 'http',
				hostname: 'tinyurl.com',
			},
		]
	}
};

export default nextConfig;
