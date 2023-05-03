/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { FeaturesText2x2Props } from "./FeaturesText2x2";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesFrameOverridesProps = {
    FeaturesFrame?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    FeaturesText2x2?: FeaturesText2x2Props;
} & EscapeHatchProps;
export declare type FeaturesFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturesFrameOverridesProps | undefined | null;
}>;
export default function FeaturesFrame(props: FeaturesFrameProps): React.ReactElement;
