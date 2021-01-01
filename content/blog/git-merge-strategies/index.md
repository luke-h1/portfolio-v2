---
title: Forcing git merges
date: "2020-12-06"
description: "Isolating features into seperate branches is a really common practice for most developers. By seperating features, bug fixes or working on experiments you can avoid a lot of problems and keep your master / development branches clean...."
slug: "/blog/force-git-merge"
---

Isolating features into seperate branches is a really common practice for most developers. By seperating features, bug fixes or working on experiments you can avoid a lot of problems and keep your master / development branches clean.

At some point you may reach a state where you want to integrate your feature branch with the rest of your project. This is where the <strong>git merge</strong> command comes into play

I recently ran into an issue where my feature branch conflicted with the dev branch. If I tried to merge my feature into the dev branch I would have had to deal with endless conflicts. This is where I needed to force the merge into my development branch

<strong>WARNING: ⚠️ Do not do this if you are working on a project with other people. </strong>

<h1>Preparing to force the merge</h1>

Let's assume you want to merge branch <strong>hotfix</strong> into your <strong>master</strong> branch but the changes made in hotfix conflict with master. You know the changes in <strong>hotfix</strong> won't overwrite any important code in <strong>master</strong> and you need to get this fix deployed.

### 1 - Preparing to merge

Before you touch anything ensure that your local repository (feature branch) is up to date with the latest changes from your remote origin with a:

```js
git fetch && git status

```

If anything shows up here move it to your desktop or stash it

# 2 - Prepare master / your main branch

```js
git checkout master && git pull
```

<br />
<br />

# 3 - Dress up your feature branch

```js
git checkout feature-branch
```

<br />

```js
git merge --strategy=ours master
```

<br />

```
# quit out of the editor when it asks you if you
# want to merge into your current branch
```

<br />
<br />

# 4 - Go in for the kill

<br />

```js
git checkout master
```

```js
git merge --no-ff feature-branch
```

<br />

This merge approach will add one commit on top of your master / main branch which pastes in whatever is in your feature branch without complaining about conflicts.