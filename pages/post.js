//pages/post.js
//other imports here
import {Authenticator,Flex,Heading,Text,useTheme,View,} from "@aws-amplify/ui-react";
import { Logo, DashBoardPost } from "../ui-components";
function Post() {

const authComponents = {
    Header() {
      const { tokens } = useTheme();
      return (
        <Flex
          justifyContent={"center"}
          direction="column"
          paddingTop={tokens.space.xxxl}
          paddingBottom={tokens.space.xxl}
        >
          <Logo />
        </Flex>
      );
    },
  };

  return (
    <Authenticator components={authComponents} hideSignUp={true}>
      {({ signOut, user }) => (
        <Layout
          handleClick={() => signOut()}
          authText="Sign Out"
          username={user.attributes.email.split("@")[0]}
        >
          <View marginTop="50px" marginBottom="30px">
            <Heading level={2}>Welcome to ArbAI</Heading>
            <Text marginTop="20px">
                Discover analytics, real-time solutions, and expertise from your powerful AI{" "}
            </Text>
           </View>
           
           <DashBoardPost /> 
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
        </Layout>
      )}
    </Authenticator>
  );
}
export default Post;