// module.exports = {
//     async rewrites() {
//         return [
//             {
//                 source: "/:path*",
//                 destination: "http://localhost:8090/:path*",
//             },
//         ];
//     }
// }
//
// const nextConfig = {
//     compiler : {
//         styledComponents : true,
//     },
// }
//
// module.exports = nextConfig


const nextConfig = {
    compiler: {
        styledComponents: true,
    },

    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://localhost:8090/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
