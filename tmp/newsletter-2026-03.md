# The Stack — March 2026 / Issue 06

**Stellar Development Foundation**
*Monthly developer update with ecosystem launches, tooling, protocol changes, and community news.*

---

## Overview

March was a big month for Stellar developers. The main themes were:

* **x402 launched on Stellar**, enabling machine-to-machine API payments with stablecoin micropayments.
* **Protocol 25 is now live**, bringing native zero-knowledge primitives to Soroban.
* The ecosystem gained major new infrastructure including **Axelar, RedStone, SushiSwap V3**, and more ZK tooling.
* Several important SDK and tooling releases landed, especially around **Protocol 25 support, security fixes, and higher Soroban limits**.

---

## Top of the Stack

## x402 launches on Stellar

x402 is now live on Stellar, giving AI agents and apps a way to pay for APIs and resources in a single HTTP flow. The model is simple: no API keys, no billing accounts, just direct micropayments. Stellar’s low fees and fast settlement make it a strong fit for this pattern.

### Key resources

* [Developer Docs](https://developers.stellar.org/docs/build/apps/x402)
* [x402 protocol spec](https://x402.org)
* [Coinbase x402 GitHub](https://github.com/coinbase/x402)
* [OpenZeppelin x402 facilitator plugin](https://github.com/OpenZeppelin/relayer-plugin-x402-facilitator)
* [OpenZeppelin Relayer SDK](https://github.com/OpenZeppelin/openzeppelin-relayer-sdk)
* [OpenZeppelin Smart Account Contracts](https://openzeppelin.com/)

### Community

* Join the **#x402** channel on the Stellar Dev Discord

---

## Protocol 25 (X-Ray) is live

Protocol 25 is now live in production and brings native zero-knowledge support to Soroban through two major upgrades:

* **CAP-0074**: BN254 host functions for proof verification
* **CAP-0075**: Poseidon and Poseidon2 hashing primitives

This matters because existing ZK systems built around BN254 can now be ported more easily, and proof verification becomes much more practical on-chain. The newsletter notes that **Groth16 verification is roughly 40M instructions**, leaving room for application logic inside the same transaction.

### Resources

* [Protocol 25 announcement](https://developers.stellar.org/)
* [Upgrade guide](https://developers.stellar.org/)
* [ZK proofs on Stellar docs](https://developers.stellar.org/)

---

## Build Kit

## RISC Zero verifier on Stellar

Nethermind released a production verifier that connects **RISC Zero zkVM proofs** to Soroban using Groth16 verification.

* [Blog walkthrough](https://www.nethermind.io/)
* [Verifier repo](https://github.com/NethermindEth/)
* [RISC Zero experiments](https://github.com/)

## Stellar private payments open sourced

Nethermind also open sourced a privacy system for Stellar using **Groth16, Circom, and Poseidon2**. It supports shielded deposits, transfers, and withdrawals, with compliance via association set proofs.

* [Documentation](https://docs.nethermind.io/)
* [GitHub](https://github.com/)

## UltraHonk verifier for Soroban

A Noir-compatible **UltraHonk verifier** is progressing, with localnet verification already working. The next step is using native BN254 host functions to fit verification inside on-chain limits.

* [GitHub](https://github.com/)
* [Noir discussion](https://github.com/noir-lang/noir/discussions)

## Axelar goes live on Stellar

Stellar is now connected to **80+ blockchains** through Axelar’s GMP and ITS. Soroban contracts can now send and receive cross-chain messages.

* [Developer docs](https://docs.axelar.dev/)
* [GMP example repo](https://github.com/)
* [Stellar cross-chain docs](https://developers.stellar.org/)

## RedStone oracles live on Stellar

RedStone launched on Stellar mainnet with **10 price feeds**, including BTC, ETH, USDC, PYUSD, and BENJI, using Soroban-native contracts.

* [Blog post](https://redstone.finance/)
* [Explore feeds](https://app.redstone.finance/)

## SushiSwap V3 on Stellar

Concentrated liquidity is now live on Stellar mainnet, bringing more capital-efficient LP strategies and lower slippage.

* [Announcement](https://www.sushi.com/)

## zig-soroban-sdk

An experimental Zig SDK for Soroban is now available, aimed at early experimentation rather than production use.

* [GitHub](https://github.com/)

---

## Git Status

## Stellar CLI v25.0.0

Highlights:

* Full Protocol 25 support

* SEP-53 signing and verification

* New `stellar fees` command

* Fee flags split into `--inclusion-fee` and `--resource-fee`

* [Release notes](https://github.com/stellar/stellar-cli/releases)

## Soroban Rust SDK v25.x

Important release cycle with:

* BN254 cryptographic types
* Improved event testing
* Smaller ledger snapshots
* Security fixes in patch releases

**Notable point:** update promptly if you rely on older v25 patches.

* [Release notes](https://github.com/stellar/rs-soroban-sdk/releases)

## JS SDK v14.5.0

Adds:

* Typed TypeScript binding generation from contract specs

* `rpc.Server.fundAddress`

* SEP-45 fields in `stellar.toml`

* Streaming header support

* [Release notes](https://github.com/stellar/js-stellar-sdk/releases)

## OpenZeppelin Stellar Contracts v0.6.0

Adds:

* Timelock

* WAD fixed-point arithmetic

* Fee Forwarder

* Muxed address support

* Access control improvements

* [Release notes](https://github.com/OpenZeppelin/)

* [Docs](https://docs.openzeppelin.com/)

## Stellar Wallets Kit v2.0.0

A large refactor with breaking changes:

* Deno + NPM compatibility

* Lit → Preact

* RxJS → preact/signals

* `authModal` replaces `openModal`

* [Release notes](https://github.com/stellar/wallets-kit/releases)

## Soroban resource limits increased

### SLP-0004

Resource limits were quadrupled, including:

* Per-transaction instruction limit: **100M → 400M**
* Write entries: **50 → 200**
* Lower smart contract fees overall

### SLP-0005

Maximum footprint size doubled:

* **200 → 400 entries**

* [SLP-0004](https://github.com/stellar/slips)

* [SLP-0005](https://github.com/stellar/slips)

* [Protocol history](https://developers.stellar.org/)

## Freighter v5.37.x

Updates include:

* Collectibles support

* CAP-67 muxed addresses

* Memo-required transfer flows

* Startup time reduced by **63%**

* [Release notes](https://github.com/stellar/freighter/releases)

## CAPs to watch

* **CAP-80**: BN254 multi-scalar multiplication and modular arithmetic
* **CAP-81**: simpler eviction scan model
* **CAP-82**: checked 256-bit integer arithmetic

---

## Spotlight

A strong set of tutorials and technical writeups were featured this month:

* **Verifying RISC Zero Execution in a Stellar Smart Contract**
* **5 Real-World Zero-Knowledge Use Cases**
* **Building a Dark Pool on Stellar: MPC, FHE, and TEEs Compared**
* **How Stellar Enables Private Payments with Zero-Knowledge Proofs**
* **Prototyping Privacy Pools on Stellar**
* **How To Verify Noir UltraHonk Circuits In A Stellar Contract**
* **What Connects Poseidon to X-Ray**
* Recent **developer and protocol meeting notes**

---

## Community

## Ongoing programs

* **Dev Weekly Meeting** — every Thursday on Discord
* **Stellar Community Fund v7.0** — live milestone-based funding
* **Certora Office Hours** — free 30-minute 1:1 sessions with Stellar security researchers

## Events

* **Stellar House Mexico City** — April 21–22
* **Meridian 2026** — October 21–22, Abu Dhabi

  * [Apply to speak](https://meridian.stellar.org/)

## Hackathons

* **Stellar ZK Gaming Hackathon** submissions are live to explore

---

## Ecosystem and reading list

A few notable ecosystem items mentioned:

* Stellar hit a **TPS record of 356 tx/s** in a single block
* The **SCP paper** celebrated 10 years
* **Soroban Playground** updated to v0.7.1
* **Chainalysis** expanded automatic Stellar token support
* **MoneyGram** published on blockchain and AI
* SDF shared its **2026 strategy**
* Stellar crossed **$1B in tokenized real-world assets**
* New ecosystem activity included **State Street + Galaxy**, **Marshall Islands UBI**, and **TopNod**

---

## Condensed takeaways

### Biggest technical shifts

* x402 is now a real, usable payment primitive on Stellar
* Protocol 25 makes ZK much more practical for Soroban
* Resource limit increases significantly expand what contracts can do

### Biggest ecosystem wins

* Axelar brings broad cross-chain connectivity
* RedStone improves oracle infrastructure
* SushiSwap V3 strengthens DeFi depth on Stellar

### Most important upgrades for developers

* Update to the latest **Soroban Rust SDK v25 patches**
* Review breaking changes in **Wallets Kit v2**
* Use the newer **CLI fee model** and Protocol 25-compatible tooling

---

## Links

* [Join Stellar Dev Discord](https://discord.gg/stellar)
* [Follow @BuildOnStellar](https://x.com/BuildOnStellar)

If you want, I can turn this into an even cleaner **newsletter-ready markdown file with tighter headings and link formatting for Substack/GitHub**.
