/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCheckoutOverridesProps = {
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31329767006"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    TextField29767009?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider29767011?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Card Information"?: PrimitiveOverrideProps<TextProps>;
    TextField29767014?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    TextField29767015?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29792893?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    TextField37582849?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37582850?: PrimitiveOverrideProps<TextFieldProps>;
    Divider37582807?: PrimitiveOverrideProps<DividerProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    Shipping37582785?: PrimitiveOverrideProps<TextProps>;
    TextField37582786?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37582787?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37582788?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 31329767067"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Cart (2)"?: PrimitiveOverrideProps<TextProps>;
    "$101.70"?: PrimitiveOverrideProps<TextProps>;
    Divider29767040?: PrimitiveOverrideProps<DividerProps>;
    "Frame 316"?: PrimitiveOverrideProps<FlexProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$320.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 317"?: PrimitiveOverrideProps<FlexProps>;
    Shipping29767056?: PrimitiveOverrideProps<TextProps>;
    "$15.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 318"?: PrimitiveOverrideProps<FlexProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    "$26.80"?: PrimitiveOverrideProps<TextProps>;
    Divider29767061?: PrimitiveOverrideProps<DividerProps>;
    "Frame 319"?: PrimitiveOverrideProps<FlexProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$361.80"?: PrimitiveOverrideProps<TextProps>;
    Divider29767065?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormCheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCheckoutOverridesProps | undefined | null;
}>;
export default function FormCheckout(props: FormCheckoutProps): React.ReactElement;
