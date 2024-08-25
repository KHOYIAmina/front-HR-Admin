import { Button as NextUIButton } from "@nextui-org/react";
import { ColorButtonKey, typeButtonKey } from "../constants";

interface Props {
  label?: string;
  icon?: string;
  iconSize?: string | number;
  href?: string;
  type?: typeButtonKey;
  color?: ColorButtonKey;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  roundedFull?: boolean;
  className?: string;
  onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = ({
  label,
  icon,
  iconSize,
  href,
  type,
  onClick,
  color = 'white',
  className = '',
  outline = false,
  active = false,
  disabled = false,
  roundedFull = false,
}) => {
  const buttonProps = {
    color,
    isOutline: outline,
    isActive: active,
    isDisabled: disabled,
    rounded: roundedFull,
    className,
  };

  if (href) {
    return (
      <NextUIButton {...buttonProps} as="a" href={href} onClick={onClick}>
        {icon && <i className={icon} style={{ fontSize: iconSize }}></i>}
        {label}
      </NextUIButton>
    );
  }

  return (
    <NextUIButton {...buttonProps} type={type} onClick={onClick}>
      {icon && <i className={icon} style={{ fontSize: iconSize }}></i>}
      {label}
    </NextUIButton>
  );
};

export default Button;
