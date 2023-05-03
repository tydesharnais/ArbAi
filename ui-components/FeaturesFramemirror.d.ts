/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { FeaturesText2x2mirrorProps } from "./FeaturesText2x2mirror";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesFramemirrorOverridesProps = {
    FeaturesFramemirror?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "FeaturesText2x2 mirror"?: FeaturesText2x2mirrorProps;
} & EscapeHatchProps;
export declare type FeaturesFramemirrorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturesFramemirrorOverridesProps | undefined | null;
}>;
export default function FeaturesFramemirror(props: FeaturesFramemirrorProps): React.ReactElement;
