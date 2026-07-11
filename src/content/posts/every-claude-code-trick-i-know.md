---
title: "Every Claude Code Trick I know"
description: "1,068 people saved my post on 8 Claude Code files. So I wrote down everything. 14 months of daily Claude Code, the whole thing as one system, the way it fits together on my machine, including the parts that never fit in a post."
date: 2026-06-11
hero: ../../assets/posts/every-claude-code-trick.png
heroAlt: "Every Claude Code Trick I Know — a terminal prompt on a dark card"
canonical: https://www.linkedin.com/posts/gceico_1068-people-saved-my-post-on-claude-setup-ugcPost-7470717070041653248-0uHP
---
14 months of daily Claude Code. I posted the pieces one at a time over the past months, and 1,068 of you saved the file post alone. People kept asking for the full setup. So here is everything I meant by that: the whole thing as one system, the way it fits together on my machine, including the parts that never fit in a post.

Fair warning before we start: some of this I'll delete in a few months. Setups rot. That's half the reason I'm writing it down.

The lazy shortcut first: paste this entire article into Claude Code and ask it to make a plan to set up everything in it, then work that plan one piece at a time. Or clone [claude-files-starter](https://github.com/gceico/claude-files-starter), which has the file skeleton ready, and delete what you don't need. Everything below explains what you just installed.

## 1. The moment I have an idea, it becomes a spec

The biggest shift in my workflow was the order of operations.

The moment I have a feature in mind, it becomes a file: `specs/feature.md`. Requirements, design, tasks. I timestamp them like migrations, so the history of decisions reads in order. Then I commit the spec before any implementation exists, because a committed spec becomes context for every session that follows.

But a spec written by me and an agreeable AI is not great. AI is still too agreeable in 2026. So I built [Challenger](https://github.com/gceico/ones-skills), a reviewer for specs. It steelmans the idea first, then throws exactly three sharp challenges at the assumptions I'm most confident about, then forces a binary verdict: defend or revise. Adversarial, not hostile. I run it on long-term decisions, the ones where a wrong call means an expensive refactor later.

Once the spec survives Challenger, the next step is tests. Each acceptance criterion in the spec becomes a failing test, and only then does the agent write whatever makes it pass. No production code without a failing test first.

This is the core workflow, the spine everything else in this article hangs on: spec, then failing test, then code.

**Grab this:**

→ One `specs/feature.md` per feature, timestamped, committed before code

→ Run [Challenger](https://github.com/gceico/ones-skills) on it before implementation

→ Spec → failing test → code. No production code without a failing test first.

## 2. The repo explains itself

Claude is only as good as the repo harness.

`CLAUDE.md` is a contract that stays under 200 lines, non-negotiables only. A big instruction file weighs every rule the same, then follows the wrong one at the wrong time. And every line costs tokens.

Everything that doesn't belong in the contract is moved into files with a narrower scope:

- `CLAUDE.local.md` - gitignored personal overrides. My tone, my tooling, my preferences.
- `.claude/rules/` - path-scoped rules. Globs decide what loads, so API rules never pollute frontend work.
- `INDEX.md` - a monorepo map. Every package, entry point, owner. Generated with repomix, compressed signatures only, so Claude stops searching blindly across 40 folders. Honest take: it bloats on big projects.
- `.claude/settings.json` + `.claude/settings.local.json` - the permissions allowlist. Nothing is more annoying than having to accept a git commit every time. For a quick win, copy already approved tools from local to the team's file.
- `.claude/hooks/` - the deterministic stuff. Typecheck and tests on pre-push, fully replacing my husky setup. Hooks can fire on MCP calls or when Claude is done and pushing a notification.
- `.claude/commands/` - one slash command per workflow I repeat daily. Pick your most repeated workflow, turn it into one command, then build the next.
- `README.md` per large feature over too many comments.
- `tests/` - if I could only keep one thing from this whole article, it's tests. Strategic tests that validate behavior, not shallow coverage.

The whole skeleton is in [claude-files-starter](https://github.com/gceico/claude-files-starter). Clone it, delete what you don't need.

## 3. Review the PR, not the keystrokes

Claude works the branch and opens the PR, and I review it the way I'd review a colleague's work. The setup is the GitHub CLI or MCP, ten minutes.

- Spec first, then failing test
- Commit after each unit of work you are happy with
- Push only when the branch is green. Tests, typecheck, and lint wired as hooks
- Review at the PR level. Label findings: bug, spec break, missing test.
- Claude reads the PR thread, rebuilds context from the comments plus the spec file, and ships the fixes. Reading PR comments is cheaper, in tokens and in my time, than re-explaining the whole task every iteration.

This works best on refactors, where success criteria are clear, files are scoped, and creativity is low. It's wrong for pixel-perfect UI, where I do something else entirely: screenshots with color-coded markup. The agent parses marked-up screenshots better than paragraphs of description.

Also, Chrome MCP gets handy when you have to debug a nested CSS property. The advantage of this is that Claude gets context on the DOM and computed properties of the elements, but it's slow and costly.

Lately, I'm a big fan of Linear Guided Reviews. This is an all-time best feature for me, and it's replacing the GitHub UI for PRs.

## 4. Context is the budget

I logged my own coding sessions to see what separated the good ones. Here are the rules I follow:

- Keep files under 400-600 lines. A 2,000-line component spends the memory context window whenever you need to modify one line.
- Cut sessions at 100-150k tokens of the 200k window. The cost curve is exponential, not linear: two 25-message sessions cost less than one 50-message session, because resetting clears the accumulated context you'd otherwise re-send forever.
- Checkpoint, clear, resume. The spec file is that one. You already shipped REQ-01 to REQ-10. Good, clear the context window and continue with the rest.
- Deny-list everything the agent should never read. Build outputs, generated files, and vendored directories.

## 5. Spend tokens like money

Once context is clean, the remaining bill is about routing and reuse:

- Opus orchestrates, and Sonnet subagents do the legwork in parallel. Research, GitHub PRs, Linear.
- Right model for the task. I run Opus as my main agent for orchestration, brainstorming, and planning. And for tasks I know Sonet can handle, I instruct Opus to spin a subagent.
- Compact early, start fresh chats often. The prompt cache goes stale after 5 minutes of inactivity.
- Cache external content locally. Every Notion fetch and web search gets re-sent for the rest of the session, so pull once, save as a file, and read from there. One Notion page can carry as much context as a dozen source files.
- Keep your knowledge base in markdown, next to the code. I use Obsidian for that: agents read `.md` Natively, no verbose MCP JSON in between, and the graph view shows which guide depends on which. For optimal human collaboration, use something like Linear or Notion.
- Prune MCP servers you're not using.
- i18n keys, not hardcoded copy. `t('hero.title')` beats 50 lines of HTML.
- [RTK](https://github.com/rtk-ai/rtk) proxies dev commands for 60-90% input savings. [Caveman](https://skills.sh/juliusbrussee/caveman/caveman) cuts output around 65%.
- Don't re-run a bad prompt five times in a rage. Chill, plan, then go.

## 6. The stack that survived

When I set up a new laptop this spring, I rebuilt from zero instead of restoring a backup. Only ten things earned their way back:

- [Caveman](https://skills.sh/juliusbrussee/caveman/caveman). Cuts output tokens around 65%. Turn it off when writing.
- [RTK](https://github.com/rtk-ai/rtk). CLI proxy that filters shell output before it hits context.
- [Impeccable](https://skills.sh/pbakaus/impeccable). 20 commands to kill frontend AI slop.
- [Frontend Design](https://skills.sh/anthropics/skills/frontend-design) (Anthropic). Commits to a bold aesthetic before writing code.
- [Create Specification](https://skills.sh/github/awesome-copilot/create-specification). Writes the spec before any code is touched.
- [TDD](https://skills.sh/obra/superpowers/test-driven-development). The failing tests
- [Humanizer](https://skills.sh/blader/humanizer/humanizer). Spots 24 AI writing patterns and rewrites them.
- [seo-geo](https://skills.sh/resciencelab/opc-skills/seo-geo). SEO plus optimization for Perplexity and ChatGPT Search.
- [Find Skills](https://skills.sh/vercel-labs/skills/find-skills). Searches 37,000+ community skills. Most of my setup came from here, mixed and matched, `npx skills`
- [Skill Creator](https://skills.sh/anthropics/skills/skill-creator) (Anthropic). When a new workflow works, I turn the conversation into a skill, polish it, save it.

Plus 3 MCPs: [Chrome DevTools](https://github.com/ChromeDevTools/chrome-devtools-mcp), [Notion](https://developers.notion.com/guides/mcp/overview), and [Context7](https://context7.com/) for version-specific docs, which means fewer debugging rabbit holes.

Don't hoard. Every skill you install is context tax on the sessions that don't need it. Keep the stack simple, stupid.

## 7. Off the laptop

You can ship now from your couch via the Claude mobile app. The phone works because the setup from sections 1-3 carries the load. Specs, hooks, allowlists, PR flow - none of it cares where the prompt comes from.

And pick the right Claude app for the job. Chat for thinking out loud, Cowork for files and office work, Code for the repo. Same model, different wrapper for who is using it and what for. Around the three sit Projects, Routines, and Dispatch, and I used to hack all of them by hand, GitHub repos as projects, GitHub Actions as routines, and SSH for remote access.

**Grab this:**

→ The laptop setup is what makes phone sessions possible

→ Chat to think, Cowork for office work, Code for the repo

## 8. Design the loop

The creator of Claude Code says he doesn't prompt it anymore. He designs loops that prompt the agent.

But as explained so far, we are getting there. Specs, tests, rules, hooks, commands, skills, scheduled tasks, dispatch.

My next thing to try is the `/loop` command. I think I'm closing the loop of software engineering.

## I still open my IDE

Confession time. I'm not at the no-prompt level. I run two or three parallel sessions max, not six. And I still open my IDE for git diffs and small CSS changes.

Old habits. I read every diff before merging, and I'm not sorry about it.

## This article went through the same loop

This article is a markdown file in my own pipeline. Claude Code drafted it against my writing rules, a critic agent reviewed it, the Humanizer skill from section 6 hunted the AI patterns, and it lives in Notion as my CMS. The same setup that ships my code shipped this text.

That's everything I know. A spec file, a contract under 200 lines, hooks, an allowlist, ten skills, three MCPs, and a phone. Spec, test, code. From a desk, from a couch.

---

Yes, this is all boilerplate before a single feature ships.

Save this one. Till next time.

---

**The links, in one place:**

→ [claude-files-starter](https://github.com/gceico/claude-files-starter) - the file skeleton, ready to clone

→ [Challenger](https://github.com/gceico/ones-skills) - adversarial spec review

→ [RTK](https://github.com/rtk-ai/rtk) + [Caveman](https://skills.sh/juliusbrussee/caveman/caveman) - the token cutters

→ [skills.sh](http://skills.sh) - where the rest of the stack lives

→ MCPs: [Chrome DevTools](https://github.com/ChromeDevTools/chrome-devtools-mcp), [Notion](https://developers.notion.com/guides/mcp/overview), [Context7](https://context7.com/)
