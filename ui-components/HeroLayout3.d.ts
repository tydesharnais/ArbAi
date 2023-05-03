/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout3OverridesProps = {
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    Button37482992?: PrimitiveOverrideProps<ButtonProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Make business easier with ArbAI"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."?: PrimitiveOverrideProps<TextProps>;
    Button29766567?: PrimitiveOverrideProps<ButtonProps>;
    ArbAI?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroLayout3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroLayout3OverridesProps | undefined | null;
}>;
export default function HeroLayout3(props: HeroLayout3Props): React.ReactElement;