---
title: Introduction
description: An introduction to Qwidditch UI
---

As developers we want to focus on the project at hand, not necessarily the intricacies of complex ui components, hence the need for UI libraries. While I believe that Qwik is the next step and overtakes React in DX and performance, it's very obvious that Qwik in its current state doesn't have the ecosystem to compete with React. Good people in the Qwik community are attacking this from all angles to give their spin on libraries to support the eco system, most notably Qwik-UI, and I wanted to pitch in as well.

## Built on the shoulders of giants

Qwidditch UI is very clearly inspired by projects such as shad/cn ui and the like. And while I like and use shad cn in many projects, unfortunately it just doesn't make sense to use in a Qwik project, albeit doable, but you lose too much of what makes Qwik, well quick 😏.

This project is an amalgomation of other technologies and simply wouldn't be feasible without them, so I figured I might as well give a little shout out: Shadcn UI, Daisy UI, Tailwind, Tailwind Merge, Class Variance Authority, clsx and Qwik-UI

## The problem with shadcn

Ever noticed how all sites using shadcn look the same? Well it's no coincidence, it's because we as developers are lazy. The whole idea behind shad cn was that you owned the components so you could add the exact styling you wanted while giving you a great baseline to work from. In reality you are presented with so many options in the form of tailwind classes to choose from, that tweaking the entire system can become overwhelming. This is where I think semantic classes works really well as it cuts down the complexity of styles significantly and when you combine it with theming you have a really powerful tool at your hands.

## So this is just bootstrap all over?

While semantic class names does smell a bit like bootstrap, in this setup you get a powerhouse of a component. You own it so you can tweak it however you like, you get plenty of themes to work with out of the box, it works with tailwind so it's incredibly easy to customize the components.

## Can't I just use Daisy UI instead?

Well of course you can. The powerful thing about Daisy UI is that it's just CSS, meaning that it's framework agnostic and just works. On top of that they have a really nice documentation site where you can grab the components from and use as is. But there's a down side to this, it's framework agnostic. If you just need a button, then inserting a button with class btn super easy. But you likely need more reusability than that. In order to make the components reusable, you need to do a lot of scaffolding. This is what Qwidditch UI provides. And because Qwidditch UI funnily enough is framework specific, we can build more complex components that simply aren't viable with vanilla Daisy UI.
