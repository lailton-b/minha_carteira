import React from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface IToggleProps {
  onChange(): void;
  checked: boolean;
}

const Toggle: React.FC<IToggleProps> = ({ onChange, checked }) => {
  const { colors } = React.useContext(ThemeContext);

  return (
    <label>
      <Switch 
        onChange={onChange} 
        checked={ checked }
        uncheckedIcon={false} 
        checkedIcon={false}
        width={60}
        height={15}
        handleDiameter={25}
        onColor={colors.warning}
        offColor={colors.info}
      />
    </label>
  );
}

export default Toggle;
