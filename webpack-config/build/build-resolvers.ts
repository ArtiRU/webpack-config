import {BuildOptions} from "../types/build-options";
import path from 'path';

export function buildResolvers(options: BuildOptions) {

    const config = {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(options.paths.dirname, 'src')
        }
    }


    return config;
}