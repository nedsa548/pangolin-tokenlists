# Pangolin Tokenlists

Token Lists is a specification for lists of token metadata (e.g. address, decimals, etc.) that can be used by any dApp
interfaces that needs one or more lists of tokens. Anyone can create and maintain a token list, as long as they follow
the specification. The Pangolin community invites you to add your token to our token lists!


## Adding Your Token to an Existing List


### General Requirements
1. Token should be verified on the [Snowtrace Explorer](https://snowtrace.io/verifyContract).
2. Token must be added to a list that it qualifies for:
    * **[Pangolin Tokenlist](pangolin.tokenlist.json)**: Token must be on the Avalanche network.
    * **[Fuji Tokenlist](fuji.tokenlist.json)**: Token must be on the Fuji network.


## Adding Your Token
1. Add an entry in the `tokens` field of the appropriate tokenlist. Please use the [checksum address](https://docs.ethers.io/v5/api/utils/address/#address). Here is an example using PNG:
    ```json
    {
      "chainId": 43114,
      "address": "0x60781C2586D68229fde47564546784ab3fACA982",
      "decimals": 18,
      "name": "Pangolin",
      "symbol": "PNG",
      "logoURI": "https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x60781C2586D68229fde47564546784ab3fACA982/logo.png"
    }
    ```
2. Update the `timestamp` field to the current timestamp.
3. Update the `version` field to adhere to semantic versioning:

    * Increment major version when tokens are removed
    * Increment minor version when tokens are added
    * Increment patch version when tokens already on the list have minor details changed (name, symbol, logo URL, decimals)

    ***Note:*** Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

## Adding Your Token Logo

Token logos are [hosted here](https://github.com/pangolindex/tokens).

# Pangolin Token Assets

This repository is a comprehensive collection of token assets for pooled tokens on Pangolin.

Such a large collection can be maintained only through a community effort, so feel free to add your token.

Token logos are stored according to their Avalanche address under the `assets/` directory. 
Token images are stored in the format `<token-address>/logo_24.png` and `<token-address>/logo_48.png`.

## Add Yours
1. Create a new directory named using your [checksum token address](https://web3js.readthedocs.io/en/v1.7.1/web3-utils.html#tochecksumaddress).
2. Add your 24x24 token image as a file named `logo_24.png` inside the directory.
3. Add your 48x48 token image as a file named `logo_48.png` inside the directory.
4. No image should be larger than 10 KB.
5. Token should be [verified on an explorer like snowtrace.io](https://snowtrace.io/verifyContract).
6. Create a PR titled `Add [TOKEN_NAME]` to the `main` branch.

## Example directory structures
```
├─ tokens/
│
└─┬─ assets/
  │
  ├─┬─ 0x60781C2586D68229fde47564546784ab3fACA982/
  │ ├── logo_24.png
  │ └── logo_48.png
  │
  ├─┬─ 0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/
  │ ├── logo_24.png
  │ └── logo_48.png
  │
 ...
```

## Disclaimer
Pangolin allows anyone to submit new assets to this repository. 
However, this does not mean that Pangolin is in direct partnership with any project.

Pangolin will reject projects that are deemed as a scam or fraudulent after review. 
Pangolin reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.
