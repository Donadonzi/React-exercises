import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text: 'Akh joon Tabestooon!',
        iconName: 'sun'
    },
    winter: {
        text: "Ah! It's cold :( ",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    // const icon = season === 'winter' ? 'snowflake' : 'sun';  intori ziad clean nabood, so we defined seasonConfig and stuff
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            {/* <h1>{season === 'winter' ? "Ah! It's cold :( " : "Akh joon Tabestooon!"}</h1> */}
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;