# Sprint N4 - Product, Seller, Risk, and Evidence Mapping

Sprint N4 adds an inert mapping layer for marketplace request and purchase-intent drafts. The mapper derives product identity clarity, seller identity clarity, quantity/price clarity, risk tier, and evidence requirements from the Sprint N2 contract and Sprint N3 fixture shapes.

This phase does not place orders, start checkout, move money, perform seller dispatch, contact sellers, request location, open communication channels, write backend state, write storage, or create pending real-world actions.

## Mapping Goals

Every marketplace request preview candidate must keep these safety facts visible:

- product identity requirement: the user must see which product, item, or listing is being discussed.
- seller identity requirement: the user must see which seller, marketplace, or listing source is being discussed.
- quantity/price expectation: Nexus may preserve quantity and price interests, but availability and pricing must be verified later by a real source or seller.
- user approval requirement: user approval is always required before any future action.
- seller confirmation requirement: seller confirmation is always required before any future order, quote, seller handoff, or marketplace action.
- final execution gate requirement: a separate final execution gate is required before any future real-world action.
- source packet requirement: source-backed data is required before any future payment, checkout, seller contact, order, or marketplace request.
- audit-ready state: any future action must be audit-controlled.

## Risk Tiers

- `low`: browse/review-only marketplace availability checks that do not claim live stock, pricing, checkout, or seller contact.
- `medium`: agriculture input or produce purchase inquiry preparation where the result stays review-only and non-executing.
- `high`: seller questions, quote requests, logistics interest, ambiguous product or seller identity, or any request that may later involve seller communication, transport, location, payment, or ordering.
- `restricted`: payment, checkout, money movement, order placement, seller dispatch, medical, pharmacy, emergency, camera, or location-sharing execution requests.

## Clarification Rules

Ambiguous products, sellers, quantity, or price requests require clarification. Nexus must not guess the seller, invent availability, invent price, stage checkout, open a seller channel, contact a seller, or create a pending real-world action.

## Runtime Boundary

This mapper is contract-only. It must not be loaded by `public/index.html`, `public/app.js`, or `server.js`. It must not add UI, routes, network calls, storage writes, DOM rendering, event handlers, seller handoff, communication execution, location sharing, camera access, payments, checkout, order placement, medical/pharmacy execution, emergency dispatch, backend writes, or autonomous execution.
