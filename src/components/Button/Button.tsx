import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => <button>{props.label}</button>;
