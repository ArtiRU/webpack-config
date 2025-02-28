import {buildWebpack} from "./webpack-config/build/build-webpack";
import path from "path";
import {BuildPaths} from "./webpack-config/types/build-options";

interface EnvVariables {
    mode?: 'development' | 'production';
    port?: number;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths =  {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        dirname: path.resolve(__dirname),
    }

    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths
    })
};