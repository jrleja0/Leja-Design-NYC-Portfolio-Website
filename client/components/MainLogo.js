import React from 'react';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const MainLogo = (props) => {
  const { width, height, display, leftPadding, topPadding } = props;
  // refactor to check for type first, before converting (if necessary).
  const logoWidth = String( Number(width) - Number(leftPadding) );
  const heightDown = String( Number(height) - Number(topPadding) );

  return (
    <svg width={width} height={height} textAnchor="middle" display={display}>
      <Link className="main-title" to="/home">
        <image className="jrlejaDesignNYCTitle"
          x={leftPadding} y={topPadding} width={logoWidth} height={height}
          href="/assets/text/jrlejaDesignNYCTitle.png" />
        <image className="jrlejaDesignNYCTitleHover"
          x={leftPadding} y={`-${heightDown}`} width={logoWidth} height={height}
          href="/assets/text/jrlejaDesignNYCTitleHover.png" />
      </Link>
    </svg>
  );
};

export default MainLogo;
