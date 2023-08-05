module.exports = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://localhost:8090/:path*",
            },
        ];
    }
}