import logo from './logo.svg';
import './App.css';
import awsExports from './aws-exports.js';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { Hero } from './ui-components';
import Layout  from './components/Layout'
import { Flex, View } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/router";
//price_1N3Tj9B6ThwCgtmwZiccKlGy
//Publish key : pk_test_51N3Tf1B6ThwCgtmwZmFt2DYb9zixzWBNvlg4xPYPX5iGggQI39aLcF9wh1cZPAQEnO54niLxgMGZWbcCW7odPJXK00Hbvdnbmx
Amplify.configure(awsExports);

function App() {
  //router
  // const router = useRouter();

  async function handleClick(){

    const stripe = await loadStripe(
      "pk_test_51N3Tf1B6ThwCgtmwZmFt2DYb9zixzWBNvlg4xPYPX5iGggQI39aLcF9wh1cZPAQEnO54niLxgMGZWbcCW7odPJXK00Hbvdnbmx"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1N3Tj9B6ThwCgtmwZiccKlGy", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <Layout
    //handle click?
     authText="Sign Up" 
     username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
    </Layout>
    
  );
}

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};


export default App;
