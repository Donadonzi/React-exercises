import React from 'react';

const Loader = (props) => {

    return (
        <div class="ui active inverted dimmer">
            <div class="ui text loader">{props.msg}</div>
        </div>
    );
};

Loader.defaultProps = {
    msg: 'Loading...'
};

export default Loader;