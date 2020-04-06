import React from 'react';

const Space = (props) => {
    return (
        <div className="center">
            <div
                className="circle" 
                style={{
                    height: props.size,
                    width: props.size,
                    backgroundColor: props.color || 'white',
                    borderRadius: 100,
            }}>
            </div>
        </div>
    );
};

export default Space;
