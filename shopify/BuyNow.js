import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const shopifyClient = ShopifyBuy.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_ADDRESS,
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
});

const ui = ShopifyBuy.UI.init(shopifyClient);

export default function BuyNow({ id }) {
  useEffect(() => {
    ui.createComponent('product', {
      id,
      node: document.getElementById(`buy-now-${id}`)
    });
  });
  return <div id={`buy-now-${id}`} />;
}
