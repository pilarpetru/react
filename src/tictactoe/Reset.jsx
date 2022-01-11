import React from 'react';
import { Button } from 'react-bootstrap';
import { Text } from '../context/LangTextImg';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return (
    <Button id="Reset" onClick={click} >
      <Text tid="reset" />
    </Button>
  );

}