import React, {useState} from 'react';
import {Image} from 'antd';

const ImageOpen = ({product}) => {
  const [visible, setVisible] = useState (false);
  return (
    <div>
      <Image
        preview={{
          visible: false,
        }}
        width={200}
        src={product.image}
        onClick={() => setVisible (true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: vis => setVisible (vis),
          }}
        >
          <Image src={product.image} />
          <Image src={product.image} />
          <Image src={product.image} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default ImageOpen;
