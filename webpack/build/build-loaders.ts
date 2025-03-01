import { BuildOptions } from '../types/build-options';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const plugins = [];

  if (isDev) {
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          import: true,
          modules: {
            localIdentName: isDev ? '[path][name]__[contenthash]' : '[hash:base64:8]',
            namedExport: false,
          },
        },
      },
      'sass-loader',
    ],
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
      },
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
          icon: true,
        },
      },
    ],
  };

  return [assetLoader, svgLoader, sassLoader, babelLoader];
}
