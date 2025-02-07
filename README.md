# Hinode Module - Template

<!-- Tagline -->
<p align="center">
    <b>A template to define a Hugo module compatible with Hinode</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/anoduck/mod-popup/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-popup">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. <!-- This repository maintains a Hugo module to add [module][module] to a Hinode site. --> Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Reasoning

The target of this module was simplicity and functionality, but development of it was anything but, and it took three times longer than originally planned.

## Usage

Usage is fairly straight forward, the shortcode implements the popup for the page it is used in, this shortcode takes no arguments. The arguments for the shortcode are provided inside the site parameter configuration file `params.toml`. You will need to add this module to the `_index.md` file of your site, this ensures the popup will only appear on your front page, and not on everypage as it was originally planned.

First you will need to add the configuration parameters to your `params.toml` file:

```toml
[params.modules.popup]
debug = false
title = "Example Title"
image = "https://some.url/to/your/image"
alt = "Alternative text for image."
bnlabel = "This is a button label."
content = "This is a long line or several lines of content to place inside the body of your popup."
```

Then you will need to include the popup shortcode in the pages you desire the popup to show up on.

```markdown
{{< popup >}}
```

## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Param    | Type               | Description                                           |
|----------|--------------------|-------------------------------------------------------|
| debug    | boolean            | Whether to enable debug output on page or not.        |
| title    | string             | Title affixed to the top of the popup.                |
| image    | url                | Url to the image for use.                             |
| alt      | alternative text   | Alternative for the image.                            |
| btnlabel | short string       | label of the button to accept and close out the popup |
| content  | paragraph material | Paragraph of what the popup is supposed to say        |

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
<!-- [module]: https://example.com -->
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
