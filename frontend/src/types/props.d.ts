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
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl"
    | "full";

  type ISpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

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
    rounded?: ISpacing;
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
      endProps?: () => import('react').JSX.Element
    };

  type ITextProps = IElementProps & {
    size?: ISize;
    color?: IColors;
    weight?: IWeight;
  };
}
