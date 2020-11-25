import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JBTextarea from '../../../../react-component/jb-textarea/JBTextarea';
import './JBTextAreaTestPage.css';
function JBTextAreaTestPage(props) {
    const [textVal, textValSetter] = useState('');
    const [autoGrowtextVal, autoGrowtextValSetter] = useState('');
    return (
        <div>
            <h2>test grow ability</h2>
            <JBTextarea value={autoGrowtextVal} onChange={(e)=>{autoGrowtextValSetter(e.target.value);}} label="type to grow" autoHeight={true}></JBTextarea>
            <button onClick={()=>{autoGrowtextValSetter('');}}>clean</button>
            <button onClick={()=>{autoGrowtextValSetter('sss eeee ggggg'.repeat(200));}}>longText</button>
            <h3>grow with min and max height</h3>
            <div className="grow-with-custom-limit">
                <JBTextarea label="48 to 120" autoHeight={true}></JBTextarea>
            </div>
            <h3>test value binding to state</h3>
            <JBTextarea value={textVal} onChange={(e)=>{textValSetter(e.target.value);}} label="مشاهده در پایین"></JBTextarea>
            <p>{textVal}</p>
            <h3>test events (check console log)</h3>
            <JBTextarea onFocus={(e)=>{console.log(e);}} onBlur={(e)=>{console.log(e);}} label="مشاهده در پایین"></JBTextarea>
        </div>
    );
}

JBTextAreaTestPage.propTypes = {

};

export default JBTextAreaTestPage;

