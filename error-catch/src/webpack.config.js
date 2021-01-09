const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
    // other configuration
    configureWebpack: {
        plugins: [
            new SentryWebpackPlugin({
                // sentry-cli configuration
                authToken:
                    '0398097b9d5a47a8aaff8bdd7b33589a72071edabec64818ac9404d7c276d5ed',
                org: 'kyunam-sim',
                project: 'kyunam-sim',

                // webpack specific configuration
                include: '.',
                ignore: ['node_modules', 'webpack.config.js'],
            }),
        ],
    },
};
