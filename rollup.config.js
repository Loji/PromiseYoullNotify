import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
	{
		entry: 'src/index.js',
		dest: pkg.browser,
		format: 'umd',
		moduleName: 'proiseYoullNotify',
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},
	{
		entry: 'src/index.js',
		external: ['ms'],
		targets: [
			{ dest: pkg.main, format: 'es' }
		]
	}
];