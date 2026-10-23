# Gitar risk triage and cross-PR sample

Builds payment provider payloads for checkout. Amounts are stored in integer
cents and converted at the provider boundary.

This is a demo service. It returns provider payloads and never sends a real
payment.

## Development

Requires Node.js 24 or later.

```bash
npm install
npm run typecheck
npm test
```

## About this sample

This repository is the runnable sample for the Gitar Risk Triage and Cross-PR Analysis blueprint. The blueprint is the primary learning resource. This repository gives you the service and the pull request branches the blueprint walks through, so you don't have to build them yourself.

The repository deliberately has no `.gitar/` directory. You add the risk and approval policies in the blueprint's Steps 3 and 6.

## Get your own copy

Gitar installs on repositories you control, and Cross-PR Analysis compares pull requests inside one repository, so you need your own copy.

**Option 1: use the template.** Click **Use this template**, choose **Create a new repository**, pick an account or organization where you can install Gitar, and tick **Include all branches**. Without that box checked, GitHub copies only `main` and the pull request branches are missing.

**Option 2: clone and push all branches.** Create an empty repository in your organization first, then run:

```bash
git clone https://github.com/sonar-samples/sample-gitar-risk-triage-cross-pr.git
cd sample-gitar-risk-triage-cross-pr
git remote set-url origin https://github.com/<YOUR_ORG>/<YOUR_REPO>.git
git push origin --all
```

## Install Gitar

Install the Gitar GitHub app on your copy, and grant it access to that repository. The blueprint's Step 1 covers plan and settings checks.

## Branches and blueprint steps

Each branch holds one commit on top of `main`. Open the pull requests in the order shown, so the numbers match the blueprint (#1 through #4).

| Branch | Pull request | Blueprint step |
|---|---|---|
| `docs/readme-wording` | #1 | Step 2, a README-only change that rates Low risk |
| `docs/charge-comment` | #2 | Step 2, a comment-only change in `lib/payments/charge.ts` |
| `feat/integer-cents` | #3 | Step 4, `charge()` starts taking integer cents |
| `feat/subscription-renewals` | #4 | Step 4, a renewal flow that still passes dollars |

Pull requests #3 and #4 each pass CI on their own. Merged together, `renewSubscription({ totalDollars: 49 })` charges 49 cents instead of 4900, and the renewal test fails. Commit hashes in your copy differ from the ones quoted in the blueprint.
