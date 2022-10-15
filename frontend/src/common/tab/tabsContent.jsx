import React from 'react';

import If from '../operator/if';

function TabsContent(props) {
  return (
    <div className="tab-content">
        {props.children}
    </div>
  );
}

export default TabsContent;