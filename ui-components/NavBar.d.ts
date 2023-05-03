/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "Call History/ Docs"?: PrimitiveOverrideProps<TextProps>;
    "Set Up Mettings"?: PrimitiveOverrideProps<TextProps>;
    "ArbAI Settings"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    User37633029?: PrimitiveOverrideProps<FlexProps>;
    User37633030?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Group 6027"?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<IconProps>;
    T?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    username?: String;
    authText?: String;
    avatar?: String;
    handleAuth?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
