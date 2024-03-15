import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const Test = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        loadModel().then(setModel);
    }, []);

    async function loadModel() {
        const loadedModel = await tf.loadGraphModel('/models/model.json');
        return loadedModel;
    }

    return (
        <div>
            {model ? <p>Model loaded successfully</p> : <p>Loading model...</p>}
        </div>
    );
}

export default Test;