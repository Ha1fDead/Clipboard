module.exports = {
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],

	// not sure why this is necessary
	// https://stackoverflow.com/questions/51554366/npm-test-fails-with-jest/51554485#51554485
	// https://github.com/facebook/jest/issues/6766
	// This can probably be removed in the future
    testURL: "http://localhost/"
}
