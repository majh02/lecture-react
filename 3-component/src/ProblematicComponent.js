import React from 'react';

function ProblematicComponent() {
  throw new Error('여기서 에러가 발생했습니다!');
}

export default ProblematicComponent;
