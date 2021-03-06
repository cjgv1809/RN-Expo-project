module.exports = {
	env: {
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"prettier",
		"prettier/react",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		__DEV__: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [
			"warn",
			{
				extensions: [".jsx", ".js"],
			},
		],
		"import/prefer-default-export": "off",
		"react/state-in-constructor": "off",
		"react/static-property-placement": "off",
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"no-param-reassign": "off",
		"no-console": "off",
	},
}
