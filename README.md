# Nft price bot Alchemy

 One of the uses cases for flashloans on chain is to arbitrage on nfts collection for example buying a nft at price x on opensea and selling it at price y in sudoswap wish is a AMM pool for nfts.

 for that reason we will have to build a script to monitor collection floors on marketplaces like opensea, rarible and more, and compare the floor of thoose collection on sudo swap to spot a arbitrage oportunity.

lets get started!

## installing dependencies

we will bu using node and alchemy:
    npm init -y
    npm install --save alchemy-sdk
    touch main.js

as alchemy doesnt provide endpoint for sudoswap pools
we will have ti implement another api call in the same program for sudoswap collections

    npm install sudo-defined-quoter

you will need to creat  another api_key for the define api calls