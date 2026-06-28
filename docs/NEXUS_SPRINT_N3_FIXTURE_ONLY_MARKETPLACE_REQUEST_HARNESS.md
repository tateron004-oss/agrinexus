# Sprint N3 - Fixture-Only Marketplace Request Harness

Sprint N3 adds deterministic local fixtures for marketplace request and purchase-intent data. These fixtures exercise safe marketplace review categories, blocked high-risk cases, and clarification needs without placing orders, starting checkout, moving money, contacting sellers, writing backend state, or creating pending real-world actions.

## Fixture Coverage

- agriculture input marketplace request
- produce purchase inquiry
- seller product question
- marketplace availability review
- price quote request, review-only
- logistics interest, non-dispatching
- blocked payment/checkout marketplace request
- ambiguous marketplace request requiring clarification

## Harness Boundary

The harness reads `fixtures/nexus/marketplace-requests.json`, validates each fixture through the inert N2 contract, confirms no execution authority, confirms product identity fields, seller identity fields, communication intent requirements, quantity/price fields, and blocked channels, then prints deterministic results.

The harness must not mutate files, not use network, not use DOM, not write `db.json`, not write storage, not contact sellers, not place orders, not start checkout, not move money, not send messages, not make calls, or not create pending real-world actions.
