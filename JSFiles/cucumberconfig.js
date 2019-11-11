"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        require: [
            'path/to/step/definitions/**/*.steps.js'
        ]
    },
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function () {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdXLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxRQUFRO0lBR25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRzdELGFBQWEsRUFBQyxJQUFJO0lBRWxCLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLFlBQVksRUFBRTtRQUVWLE9BQU8sRUFBRTtZQUNQLHdDQUF3QztTQUN6QztLQUNGO0lBTUgsWUFBWSxFQUFDO1FBQ1gsYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFDRCxTQUFTLEVBQUU7SUF3QlgsQ0FBQztDQUNELENBQUMifQ==