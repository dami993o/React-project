import React from 'React';

import aux from '../hoc/au';


const layout = () => (

    <aux>

    <div>Toolbar, Sidedrawer, Backdrop</div>

    <main>
        {props.children}
    </main>
    
    </aux>
);


export default layout;