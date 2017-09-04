import * as React from 'react';

import H1 from '../h1/';
import H2 from '../h2/';
import H3 from '../h3/';
import H4 from '../h4/';
import H5 from '../h5/';
import H6 from '../h6/';

export { H1 } from '../h1/';
export { H2 } from '../h2/';
export { H3 } from '../h3/';
export { H4 } from '../h4/';
export { H5 } from '../h5/';
export { H6 } from '../h6/';

export const H = ({ level, ...props }: any) => {
  switch (level) {
    case(1): return <H1 {...props} />;
    case(2): return <H2 {...props} />;
    case(3): return <H3 {...props} />;
    case(4): return <H4 {...props} />;
    case(5): return <H5 {...props} />;
    default: return <H6 {...props} />;
  }
};

export default H;