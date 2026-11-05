---
title: "Dear engineers: an open letter on code review"
description: "A colleague told me he doubted anyone could consume a 12k LOC PR, or find a bug in it. He's right. This is my answer to him, and to you: let the AI hunt the bugs, and tell me what you really think about the direction."
date: 2026-11-05
hero: ../../assets/posts/open-letter-code-review.webp
heroAlt: "A merged pull request titled 'feat: add the awesome new feature' with 33 commits, 10 files changed and +13,157 lines"
---

Dear engineers,

A colleague wrote to me honestly last week, about a PR I opened. He said he seriously doubted a dev can consume such a PR. 12k LOC. He cared about our collaboration and wanted to know what I think is best for us and for the team.

Of course, he said, he could just ask an AI to review it for him. But that's not the point, is it? He saw some decisions he'd do differently, like putting types in the same files as the TypeScript, where he prefers separate ones. But is it worth requesting the change? He doubts himself nowadays that everything is just prompting.

And honestly, he doubted he could find a bug or a point I missed in such a PR.

I think a lot of us feel this right now. So this is my answer to him, and to you.

### Yeah, it's a lot

I don't review code as much anymore. Not line by line.

What I do is read the PR description and understand why, what and how. I use my intuition if something seems off. I check the files to see if they respect the structure and the patterns we want to protect, like what you said about types. Then I run AI over it to review for actual bugs. It's not realistic that you will find any there by yourself.

And then that's the review.

If I find that the agent messed up, I add a new rule in the skill, so it doesn't happen again. If I see things that should be done differently, I comment. If I want to see the UI, I open it locally, test a bit and leave comments on UX issues.

That's it. No reading every line hoping to spot the one bug.

### What I actually want from your review

What helped me is to read the PR description and the ticket, understand what needs to be done, ask a few questions and align. Then jump into the files. Screenshots in the PR help a lot too. I'll add more of them.

But I don't expect you to read line by line. I want to see if you agree with the direction. Why I picked the framework I picked. What we support out of the box. How the packages are split. How we publish them.

That's context we all need to have a clue of. That's why I'm asking for your review: so we stay aligned. Not because I want you to find bugs. That is Claude's problem.

### Why I need you more, not less

What I want from a reviewer is an extra eye. An extra intuition. A critical judgement from an unbiased dev.

Because I will become biased after 2h of chatting with Claude and agreeing with everything I say.

The agent catches the bugs. The skill keeps the rules. But nobody in that loop tells me the direction is wrong. That's you.

So about the types in the same file: yes, ask for the change if you think it matters. That's exactly the kind of comment I want. Not because the code is broken, but because it's our codebase, not mine and Claude's.

### So, dear engineers

Don't doubt yourself because everything is prompting now. Read the description. Read the ticket. Ask questions. Check the patterns we want to protect. Open it locally if you want to see it. Let the AI hunt the bugs.

And then tell me what you really think about the direction. That's the review I'm asking for.

When you review a PR today, are you still hunting for bugs, or are you checking the direction?

Gabriel
