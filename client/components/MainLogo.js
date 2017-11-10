import React from 'react';

/*///
 COMPONENT
*////
const MainLogo = (props) => {
  const { width, height, display } = props;

  return (
    <svg width={width} height={height} textAnchor="middle" display={display}>
      <image className="jrlejaDesignNYCTitle"
        x="0" y="0" width={width} height={height}
        href="/assets/text/jrlejaDesignNYCTitle.png" />
      <image className="jrlejaDesignNYCTitleHover"
        x="0" y={`-${height}`} width={width} height={height}
        href="/assets/text/jrlejaDesignNYCTitleHover.png" />
    </svg>
  );
};

export default MainLogo;
