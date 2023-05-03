/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
import ai_Img from '../imgAssets/hero_brain.jpg';
export default function Hero(props) {
  const { handleClick, image, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Hero")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={ai_Img}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        width="1440px"
        height="858px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="173px 122px 173px 122px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      >
        <Text
          fontFamily="Nova Square"
          fontSize="96px"
          fontWeight="400"
          color="rgba(239,240,240,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="960px"
          height="51px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A r b A I "
          {...getOverrideProps(overrides, "A r b A I")}
        ></Text>
        <Flex
          gap="11px"
          direction="column"
          width="unset"
          height="366px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="60px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Make business calls a breeze with ArbAI"
            {...getOverrideProps(
              overrides,
              "Make business calls a breeze with ArbAI"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="94px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Body Area")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="50px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.25px"
            width="unset"
            height="94px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Get in-depth real time call analysis to make more happen!"
            {...getOverrideProps(
              overrides,
              "Get in-depth real time call analysis to make more happen!"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="26px"
          direction="row"
          width="807px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 58px 0px 58px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            width="413px"
            height="91px"
            gap="2px"
            borderRadius="16px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Register"
            onClick={handleClick}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Flex
            gap="3px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="flex-end"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 5588")}
          >
            <Text
              fontFamily="Aguafina Script"
              fontSize="40px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="40px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="💰"
              {...getOverrideProps(overrides, "\uD83D\uDCB0")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.17px"
              width="209px"
              height="91px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="For just $39"
              {...getOverrideProps(overrides, "For just $39")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
