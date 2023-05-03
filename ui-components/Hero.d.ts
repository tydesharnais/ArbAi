/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Image as Image0 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroOverridesProps = {
    Hero?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "A r b A I"?: PrimitiveOverrideProps<TextProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Make business calls a breeze with ArbAI"?: PrimitiveOverrideProps<TextProps>;
    "Body Area"?: PrimitiveOverrideProps<FlexProps>;
    "Get in-depth real time call analysis to make more happen!"?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5588"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDCB0"?: PrimitiveOverrideProps<TextProps>;
    "For just $39"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroProps = React.PropsWithChildren<Partial<ViewProps> & {
    handleClick?: (event: SyntheticEvent) => void;
    image?: Image0;
} & {
    overrides?: HeroOverridesProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
