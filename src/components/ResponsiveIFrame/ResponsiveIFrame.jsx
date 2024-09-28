import React, { useEffect, useState } from 'react';

const ResponsiveIframe = ({ url }) => {
  const [iframeAttributes, setIframeAttributes] = useState({
    width: '100%',
    height: '400px',
    src: url,
  });

  // useEffect(
  //   () => {
  //     // Update iframe attributes based on conditions
  //     // ...

  //     setIframeAttributes(updatedAttributes);
  //   },
  //   [
  //     /* dependencies */
  //   ]
  // );

  return (
    <iframe
      {...iframeAttributes}
      title='Responsive Iframe'
      sandbox='allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin'
    />
  );
};

export default ResponsiveIframe;
