function getAxisConfigInternal(axisConfig) {
    // Default axis configuration
    const defaultConfig = {
        tickColor: 'black',
        tickSize: 5,
        tickPadding: 10,
        tickWidth: 1,
        axisColor: 'black',
        axisWidth: 2,
        labelFont: 'Arial',
        labelFontSize: 12,
        labelColor: 'black'
    };

    // Merge the provided axisConfig with the defaultConfig
    const finalConfig = { ...defaultConfig, ...axisConfig };

    return finalConfig;
}

// Example usage:
const customConfig = {
    tickColor: 'main',
    tickSize: 10,
    labelFontSize: 14
};

const axisConfig = getAxisConfigInternal(customConfig);

console.log(axisConfig);
/*
{
    tickColor: 'main',
    tickSize: 10,
    tickPadding: 10,
    tickWidth: 1,
    axisColor: 'black',
    axisWidth: 2,
    labelFont: 'Arial',
    labelFontSize: 14,
    labelColor: 'black'
}
*/
