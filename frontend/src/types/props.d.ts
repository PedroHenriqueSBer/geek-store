declare module "props" {
  interface IElementProps {
    children: import("react").ReactNode;
  }

  type IColors =
    | "primary300"
    | "primary500"
    | "primary500Op"
    | "primary800"
    | "background100"
    | "background200"
    | "background300"
    | "error"
    | "success"
    | "yellow"
    | "shadow";

  type ISize =
    | "0"
    | "px"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96"
    | "auto"
    | "1/2"
    | "1/3"
    | "2/3"
    | "1/4"
    | "2/4"
    | "3/4"
    | "1/5"
    | "2/5"
    | "3/5"
    | "4/5"
    | "1/6"
    | "2/6"
    | "3/6"
    | "4/6"
    | "5/6"
    | "1/12"
    | "2/12"
    | "3/12"
    | "4/12"
    | "5/12"
    | "6/12"
    | "7/12"
    | "8/12"
    | "9/12"
    | "10/12"
    | "11/12"
    | "full"
    | "min"
    | "max"
    | "fit";

  type IWeight =
    | "sxxx"
    | "sxx"
    | "sx"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl";

  interface IInputFieldsetProps {
    rounded?: ISize;
    variant?: "outline" | "standart";
    error?: boolean;
  }

  type IInputStyleProps = import("react").ComponentProps<"input"> & {
    width?: ISize;
    variant?: "outline" | "standart";
  };

  type IInput = IInputFieldsetProps &
    IInputStyleProps & {
      legend?: string;
      helperText?: string;
      isFullWidth?: boolean;
      startProps?: () => import("react").JSX.Element;
      endProps?: () => import("react").JSX.Element;
    };

  type ITextProps = IElementProps & {
    size?: ISize;
    color?: IColors;
    weight?: IWeight;
  };

  type IIconButton = import("react").ComponentProps<"button"> & {
    color?: IColors;
  };

  type IButton = import("react").ComponentProps<"button"> & {
    variant?: "standart" | "container";
    width?: ISize;
    color?: IColors;
    colorDark?: IColors;
  };

  type IPosition =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "auto";

  type IBox = {
    children: import("react").ReactNode;
    color?: IColors;
    width?: ISize;
    padding?: ISize;
    rounded?: ISize;
    height?: ISize;
    items?: IPosition;
    justify?: IPosition;
    direction?: "column" | "row";
  };

  type ISelectButton = {
    value: any;
    actualValue: any;
    onSelected: (value: any) => void
    children?: import("react").ReactNode;
    color?: IColors;
    width?: ISize;
    height?: ISize;
    rounded?: ISize;
    padding?: ISize;
  };
}
